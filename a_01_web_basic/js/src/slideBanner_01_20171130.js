// slideBanner_01_20171130.js

// 즉시 실행 함수 (IIFE)
(function($){
// jQuery

$('.banner>ul>li').last().prependTo('.banner>ul');
// prependTo : 함수의 인자로 선택자가 전달되어 요소를 선택한 후 함수 앞의 내용이 삽입
// 처음 페이지에 앞으로 보내라
$('.banner>ul').css({marginLeft:'-100%'});
// 왼쪽으로 100% 가라
$('.banner').css({overflow:'hidden'});
// 숨겨줘라

})(this.jQuery);

// 함수의 종류 (차이, 각기 역할이 다르다.)
/*
1. 함수 선언식 : 
- 먼저 호출하고 나중에 함수 기능을 작성해도 문제 없이 동작
- 함수 이름을 두번 쓸수 없다.
- 초기 작업시, 가장 큰 범위의 작업(함수 선언식 내부에 함수 표현식을 쓴다)
function Fn(){}
Fn();  ==> 가능

Fn(); 
function Fn(){}  ==> 가능
** 둘다 가능
**Fn은 이름 (순서도에서 First처럼..) 또함 함수 이름은 첫글자를 대문자로 한다.

2. 함수 표현식 :
- 먼저 작업후에 호출해야만 동작
- 큰범위의 함수 내부에서 동작처리할때
var Fun = finction (){};
Fun();  ==> 가능

Fun();
var Fun = finction (){};   ==> 불가능


3. 즉시 실행함수(익명함수) : 
-별도의 호출이 필요 없을때 사용
- 외부의 접근을 강제로 막을때
(function(){})();  **일반적으로 많이 사용된다.
(function(){}());

*/