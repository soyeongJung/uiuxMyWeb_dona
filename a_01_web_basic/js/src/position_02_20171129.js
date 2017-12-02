// position_02_20171129.js

(function($){
    //참고1
//    $('#popupBox>button').on('click', function(){
//        $('#popupBox').hide();
//    });

    //참고2
    var popupBox = $('#popupBox');
    
    // 버튼클릭시 사라지게 만들기
    popupBox.children('button').on('click', function(){
        popupBox.fadeOut(10000);
    }
);

    //h1클릭시 팝업 나타나게 만들기
    $('h1').on('click', function(){
        popupBox.fadeIn(10000);
    }
);

    //참고3
//    var popupBox = $('#popupBox').children('button');
    
//        popupBox.on('click', function(){
//            popupBox.parent().hide();
//        });


// 일정스크롤이상위치에서 부분 나타나게 만들기
var sideBox = $('.recent_box');
var topBtn = $('.top_btn');
// 선택자 변수로 지정

sideBox.delay(500).fadeOut();
// sideBox를 0.5초뒤에 사라지게 한다.
var content = $('#contentBox').offset().top;
// offset().top 상단을 기준으로 요소가 위치한 거리를 절대좌표로 반환
// console.log(content);
$(window).on('scroll',function(){
    popupBox.fadeOut();
// 브라우저 내 스크롤을 해서 상단에 800 이후 #popupBox를 사라지게 해라

    var scroll_top = $(this).scrollTop();
    // .scrollTop(); 조건에 일치하는 요소들의 수직 스크롤의 위치를 value값으로 세팅합니다.
    // 수직 스크롤 을 scroll_top 이라는 변수로 지정
    // console.log(scroll_top);
    if(scroll_top >= content){
        sideBox.fadeIn();
        topBtn.fadeIn(); 
    //  만약 수직 스크롤이  $('#contentBox') 보다 크거나 같은 경우 $('.recent_box')를 보이게 하고 $('.top_btn')을 보이게 해라
    }else{
        sideBox.fadeOut();
        topBtn.fadeOut();}
    }
    // 그렇지 않으면 수직 스크롤이  $('#contentBox') 보다 작거나 같은 경우 $('.recent_box')를 사라지게 하고 $('.top_btn')을 사라지게 해라
);

})(this.jQuery);