$(function(){


  const $gnbmnu = $('.gnb>li');
// const $sub = $('.gnb .sub'); 아래가 더 속도가 빠름 그렇다고 이 구문이 틀린게 아님
  const $sub = $gnbmnu.children('.sub');

  let mnuIdx = null;//0~4의 메뉴인덱스 번호

  //mouseenter+mouseleave
  $gnbmnu.hover(
      function(){
          mnuIdx = $gnbmnu.index(this);
          $('section').css({
            opacity: 0.09
          })
          $gnbmnu.eq(mnuIdx).find().css({

          }).fadeIn(100);

          $sub.eq(mnuIdx).fadeIn(100);
      }
      ,
      function(){
          // $().remove();//특정요소를 제거
          $sub.hide();   
          $('section').css({
            opacity: 1
          })
          
      }
  );

// ---slider_1----

  let $slider = $('.slider_1'),
  $firstSlide = $slider.find('li').first() // 첫번째 슬라이드
  .stop(true).animate({'opacity':1},200); // 첫번째 슬라이드만 보이게 하기

function PrevSlide(){ // 이전버튼 함수
stopSlide();startSlide(); //타이머 초기화
//  $lastSlide = $slider.find('li').last() .prependTo($slider); //마지막 슬라이드 //마지막 슬라이드를 맨 앞으로 보내기  
$firstSlide = $slider.find('li').first().appendTo($slider);
$secondSlide = $slider.find('li').eq(0).stop(true).animate({'opacity':0},400);
$secondSlide = $slider.find('li').eq(1).stop(true).animate({'opacity':0},400);//두 번째 슬라이드 구하기   //밀려난 두 번째 슬라이드는 fadeOut 시키고
$secondSlide = $slider.find('li').eq(2).stop(true).animate({'opacity':0},400);//세 번째 슬라이드 구하기   //...
$firstSlide = $slider.find('li').first() .stop(true).animate({'opacity':1},400); //맨 처음 슬라이드 다시 구하기//새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
}

function NextSlide(){ // 다음 버튼 함수
stopSlide();startSlide(); //타이머 초기화
$firstSlide = $slider.find('li').first().appendTo($slider); // 첫 번째 슬라이드 // 맨 마지막으로 보내기
$secondSlide = $slider.find('li').eq(1).stop(true).animate({'opacity':0},400);
$secondSlide = $slider.find('li').eq(2).stop(true).animate({'opacity':0},400);
 $lastSlide = $slider.find('li').last() // 맨 마지막으로 보낸 슬라이드
.stop(true).animate({'opacity':0},400); // fadeOut시키기
$firstSlide = $slider.find('li').first()// 맨 처음 슬라이드
.stop(true).animate({'opacity':1},400);// fadeIn 시키기
}


//다음버튼 클릭
$('.nex1').on('click', function(evt){
evt.preventDefault();
NextSlide();
});
//이전 버튼 클릭
$('.prev_1').on('click', function(evt){ 
evt.preventDefault()
PrevSlide();
});



let theInterval_1 =null

function startSlide() {
theInterval_1 = setInterval(NextSlide, 7000); //자동 슬라이드 설정
}


function stopSlide() { //자동 멈추기
clearInterval(theInterval_1);
}

$('.slider_1').hover(function(){ //마우스 오버시 슬라이드 멈춤
stopSlide();   //마우스 진입
}, function (){
startSlide(); //마우스 떠남

});

startSlide(); // 자동 슬라이드 시작



// ---slider_2----

let $Publicationsslider = $('.article_4__container__slider'),
      $first_Publicationsslider= $Publicationsslider.find('li').first() .stop(true).animate({'opacity':1},200); // 첫번째 슬라이드만 보이게 하기 // 첫번째 슬라이드

  function PrevPublic(){ // 이전버튼 함수
		Public_stopSlide();Public_startSlide(); //타이머 초기화
    //  $lastSlide = $slider.find('li').last() .prependTo($slider); //마지막 슬라이드 //마지막 슬라이드를 맨 앞으로 보내기  
		$first_Publicationsslider = $Publicationsslider.find('li').first().appendTo($Publicationsslider);
		$secondSlide_Publicationsslider =$Publicationsslider.find('li').eq(0).stop(true).animate({'opacity':0},400);
    $secondSlide_Publicationsslider =$Publicationsslider.find('li').eq(1).stop(true).animate({'opacity':0},400);//두 번째 슬라이드 구하기   //밀려난 두 번째 슬라이드는 fadeOut 시키고
    $secondSlide_Publicationsslider =$Publicationsslider.find('li').eq(2).stop(true).animate({'opacity':0},400);//세 번째 슬라이드 구하기   //밀려난 두 번째 슬라이드는 fadeOut 시키고
    $first_Publicationsslider = $Publicationsslider.find('li').first() .stop(true).animate({'opacity':1},400); //맨 처음 슬라이드 다시 구하기//새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
  }
  
  function NextPublic(){ // 다음 버튼 함수
    Public_stopSlide();Public_startSlide(); //타이머 초기화
		$first_Publicationsslider = $Publicationsslider.find('li').first().appendTo($Publicationsslider);
		$secondSlide_Publicationsslider = $Publicationsslider.find('li').eq(1).stop(true).animate({'opacity':0},400);
		$secondSlide_Publicationsslider = $Publicationsslider.find('li').eq(2).stop(true).animate({'opacity':0},400);
    $last_Publicationsslider = $Publicationsslider.find('li').last().stop(true).animate({'opacity':0},400); // fadeOut시키기 // 맨 마지막으로 보낸 슬라이드
    $last_Publicationsslider = $Publicationsslider.find('li').first().stop(true).animate({'opacity':1},400);// fadeIn 시키기// 맨 처음 슬라이드
    
  }
  
  $('.Publications_right').on('click', function(evt){
		evt.preventDefault(); //다음버튼 클릭
    NextPublic();
  });
  $('.Publications_left').on('click', function(evt){ 
		evt.preventDefault()//이전 버튼 클릭
		PrevPublic();
  });

  
  let theInterval_2 =null;

  function Public_startSlide() {
    theInterval_2 = setInterval( NextPublic, 4000); //자동 슬라이드 설정
  }

  function Public_stopSlide() { //자동 멈추기
    clearInterval(theInterval_2);
  }
  
  $('.article_4__container__slider').hover(function(){ //마우스 오버시 슬라이드 멈춤
    Public_stopSlide();
  }, function (){
		Public_startSlide();
  });
  Public_startSlide(); // 자동 슬라이드 시작





// ------------article_5 슬라이드-----------

// const $indicator = $('.article_5__slides-pagination > li > a');
	const $container = $('.article_5__slides-container');
	const $prev_2 = $('.prev_2');
	const $nex2 = $('.nex2');

	// const $btnAuto = $('.article_5__btn_auto');

	let theInterval_3 = null;

	let nowIdx = 0; //인디케이터를 기준으로 0~5

	//인디케이터에 대한 클릭이벤트 구문
	// $indicator.on('click', function(evt) {
	// 	evt.preventDefault();

	// 	//nowIdx 값 추출
	// 	nowIdx = $indicator.index(this); //0~5

	// 	//활성화표시
	// 	$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

	// 	//컨테이너이동
	// 	$container.stop().animate({
	// 		left: -(100 * (nowIdx + 6)) + '%'
	// 	});
	// });

	//이전버튼에 대한 클릭이벤트 구문
	$prev_2.on('click', function(evt) {
		evt.preventDefault();

		//nowIdx 값 추출 1~4 정수
		/*
        현재 -> 이전버튼 누르면
          5   -> 4
          4   -> 3
          3   -> 2
          2   -> 1
          1   -> 0
          0   -> 5
      */
		if ($('.article_5__slides-container > p').length > 0) {
			nowIdx--;
		} else {
			nowIdx = $('.article_5__slides-container > p').length;
		}

		//인디케이터 활성화표시
		// $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		//컨테이너 이동
		$container.stop().animate({
			left: '33.333333%'
		}, 50, function() {
			//맨 뒤의 한장을 컨테이너의 맨앞으로 이동
			$('.article_5__slides-container > p').last().prependTo($container);
			$container.css({ left: '0%' });
		});
	});

	//다음버튼에 대한 클릭이벤트 구문
	$nex2 .on('click', function(evt) {
		evt.preventDefault();

		/*
          현재 -> 다음버튼 누르면
          0   -> 1
          1   -> 2
          2   -> 3
          3   -> 4
          4   -> 5
          5   -> 0
      */

		if (nowIdx < $('.article_5__slides-container > p').length) {
			nowIdx++;
		} else {
      nowIdx = $('.article_5__slides-container > p').length;
		}

		// $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

		$container.stop().animate({
			left: '-33.333333%'
		}, 50, function() {
			//맨 앞의 한장을 컨테이너의 맨뒤로 appendTo()
			$('.article_5__slides-container > p').first().appendTo($container);
			$container.css({ left: '0%' });
		});
	});





})