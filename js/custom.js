// 라이트 박스
/*$(".lightgallery").lightGallery({
    thembnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
});*/

// 윈도우 팝업
$(".window").click((e)=>{
    e.preventDefault();
    // window.open("파일명", "팝업이름", "옵션설정");
    // 옵션: left, top, width, hieght, status, toolbar, location, menubar, scroollbars, fullscreen
    window.open("popup.html", "popup01", "width=800, height=590, left=50, top=50, scroollbars=0, toolbar=0, menubar=0");
})

// 레이어 팝업
$(".layer").click((e)=>{
    e.preventDefault();
    //$("#layer").css("display", "block");
    $("#layer").slideDown();
})
$("#layer .close").click((e)=>{
    e.preventDefault();
    //$("#layer").css("display", "block");
    $("#layer").slideUp();
})

// 탭메뉴
const $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e){
    e.preventDefault();
    const $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}
$tab_list.find("ul > li > a").click(tabMenu).focus(tabMenu);
// 배너
// html 마크업 셋팅 -> css연동 -> JQuery 연동 -> 제이쿼리 호출
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplayspeed: 3000,
    dots: true,
});

// 갤러리
$(".gallery_img").slick({
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});
$(".play").click(() => {
    $(".gallery_img").slick("slickPlay");
});
$(".pause").click(() => {
    $(".gallery_img").slick("slickPause")
});
$(".prev").click(() => {
    $(".gallery_img").slick("slickPrev")
});
$(".next").click(() => {
    $(".gallery_img").slick("slickNext")
});

// 버튼을 클릭하면 전체 메뉴를 보이게 하기
$(".tit .btn").click(function(e){
    e.preventDefault();  // 클릭했을때 #으로 0,0으로 가는 것을 방지
    //$("#cont_nav").css("display","block"); display: none;을 보이게 하기
    //$("#cont_nav").show(); display: none;을 보이게 하기
    //$("#cont_nav").fadeIn(); 점점 조금씩 보이게 하기
    //$("#cont_nav").slideDown(); 슬라이드 형태로 내려오기
    //$("#cont_nav").toggle(); 보였다 안보였다 할 수 있음
    //$("#cont_nav").fadeToggle(); fade형태로 보였다 안보였다 할 수 있음
    $("#cont_nav").slideToggle(200); // slide형태로 보였다 안보였다 할 수 있음
    // $(".tit .btn").addClass("on"); 해당 태그에 class(.on)추가
    //$(".tit .btn").toggleaClass("on");
    $(this).toggleClass("on"); // 태그를 붙였다 없애기
});