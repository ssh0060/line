$(function () {


    /* =========================================================
       PC - 언어상자 
    ========================================================== */

    var $input = $("input#lang"); // input 상자
    var $arrow = $(".opt span.arrow"); // 화살표
    var $langlist = $(".langlist"); // 화살표 클릭시 나오는 전체 언어 리스트
    $langlist.find("a").on("click", function () {
        $input.val($(this).text()); // 언어 선택시 입력상자의 내용 변경
        // .val() : 입력 요소에 있는 value 속성값을 불러오거나 변경시 사용. 
        // 변경시엔 () 안에 새값 입력

        $(this).parent().addClass("on").siblings().removeClass("on");
        // .parent() - a의 부모인 li 선택 
        $langlist.toggle();
    });

    $input.add($arrow).on("click", function () { // add() : 추가
        $langlist.toggle();
        $arrow.toggleClass("arrow-up"); // 
    });

    $(".opt").on("mouseleave", function () {
        // mouseleave : 마우스가 선택한 요소에서 나갔을때
        $langlist.hide(); // 가리기
        $arrow.removeClass("arrow-up");
    });


    /* =========================================================
        Mobile 버튼 클릭시 서브 메뉴 나타남 
    ========================================================== */

    // 햄버거버튼

    var $btnGnb = $("header>.container>.btn-gnb"); // 햄버거버튼
    var $nav = $("header>.container>nav"); // 모바일메뉴
    $btnGnb.on("click", function () {
        $(this).toggleClass("close");
        $nav.toggle();
    });
    // .toggleClass : 지정한 클래스가 없으면 생성, 있으면 없앰
    // .toggle() : 선택한 요소가 보이면 숨기고, 숨겨져있으면 나타나도록 만듬.

});