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
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  dots: true,
  arrows: true,
  responsive: true,
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


/* switch on-off slider and form */
$('.pulse').click(function(){
  $( ".sl" ).toggle();
  $( "#contact_form" ).toggle();
  /*$('.sl').css('display','none');
  $('.form').css('display','block');*/

}) ;







});

