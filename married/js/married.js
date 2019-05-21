$(document).ready(function () {

/*---------переключение меню---------*/
     $('.menuToggle').click (function(){
         $('.menu-main').slideToggle(300, function(){
            if($(this).css('display')==='none'){
              $(this).removeAttr('style');
            }
       });

    });
/*---конец ----переключение меню---------*/


/*----slider slick-----*/
  $('.sl').slick({
	infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 1000,
  /*dots: true,*/
  arrows: false,
  responsive: true
  });


/* ----- button home------ */
$(window).scroll(function(){
if ($(this).scrollTop() !=0) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});

$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 800);
return false;
});




});