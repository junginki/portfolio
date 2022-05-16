/*내가생각하는 자바스크립트 절대 원칙
1.준비핸들러
2.셀렉팅
3.이벤트구문
*/


$(function() {
	const $indicator = $('.slides > .slides-pagination > li > a');
	const $container = $('.slides > .slides-container');
	const $btnPrev = $('.prev');
	const $btnNext = $('.next');
	const $top = $('header > nav > ul.top > li > a');
	const arrVal = [0];
	const pageMove = function(arrVal){
		$('html , body').animate({
			scrollTop:arrVal[0]
		})
	}
$top.on('click' , function(evt){
	evt.preventDefault();
	pageMove(arrVal)

})

	const $btnAuto = $('.btn_auto');

	let intervalKey = null;

	let nowIdx = 0; //인디케이터를 기준으로 0~4

	//인디케이터에 대한 클릭이벤트 구문
	$indicator.on('click', function(evt) {
		evt.preventDefault();

		//nowIdx 값 추출
		nowIdx = $indicator.index(this); //0~4

		//활성화표시
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		//컨테이너이동
		$container.stop().animate({
			left: -(100 * (nowIdx + 4)) + '%'
		});
	});

	//이전버튼에 대한 클릭이벤트 구문
	//이부분은 prependTo에대한 이해도가 있어야 이해할 수 있는 구문이다.
	$btnPrev.on('click', function(evt) {
		evt.preventDefault();

		//nowIdx 값 추출 1~4 정수
		/*
         현재 -> 이전버튼 누르면
          4   -> 3
          3   -> 2
          2   -> 1
          1   -> 0
          0   -> 4
      */
		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = 3;
		}

		//인디케이터 활성화표시
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		//컨테이너 이동
		$container.stop().animate({
			left: '-300%'
		}, 400, function() {
			//맨 뒤의 한장을 컨테이너의 맨앞으로 이동
			$('.slides > .slides-container > p').last().prependTo($container);
			$container.css({ left: '-400%' });
		});
	});

	//다음버튼에 대한 클릭이벤트 구문
	//마찬가지로 이부분은 appendTo에대한 이해도가 있어야 이해할 수 있는 구문이다.
	let lock = false;
	//풀리지않던 매우빠르게 next버튼 클릭시 슬라이드가 잘 안넘가는 현상을 고쳤다.
	// 잠겨있지 않으면 광클방지 1.화장실을 들어갔으면 문을 잠궈야지 ->  2.나올땐 다시 잠금을 풀어야지

	$btnNext.on('click', function(evt) {
		evt.preventDefault();

		/*
         현재 -> 다음버튼 누르면
          0   -> 1
          1   -> 2
          2   -> 3
          3   -> 4
          4   -> 0
      */

			if (lock === false) {
			lock = true; 
				if (nowIdx < 3) {
			nowIdx++;
		} else {
			nowIdx = 0;
		}

		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		$container.stop().animate({
			left: '-500%'
		}, 400, function() {
			//맨 앞의 한장을 컨테이너의 맨뒤로 appendTo()
			$('.slides > .slides-container > p').first().appendTo($container);
			$container.css({ left: '-400%' });

			lock = false;
		});	
	
	}//lock

		
	});

	//원버튼 자동재생
	$btnAuto.on('click', function() {
		if ($(this).hasClass('pause')) {
			//play중이면.... => pause 클래스가 붙어 있으면...

			//1. pause 클래스 제거
			$(this).removeClass('pause');

			//2. 인터벌 중지
			clearInterval(intervalKey);
		} else {
			//멈춰있으면.... => pause 클래스가 붙어 있지 않으면...
			//1. pause 클래스 추가
			$(this).addClass('pause');

			//2. setInterval()로 반복 실행
			intervalKey = setInterval(function() {
				$btnNext.trigger('click'); //이벤트 강제발생
			}, 2000);
		}
	});

$('a').on('click' , function(evt){
	evt.preventDefault();
})
});