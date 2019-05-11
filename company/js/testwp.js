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

/* mouse move  */

const cards=document.querySelectorAll('.move');

for (let i=0; i<cards.length; i++) {
  const card=cards[i];
  card.addEventListener('mousemove', startRotate);
  card.addEventListener('mouseout', stopRotate);

}

function startRotate(e) {
const cardItem = this.querySelector('.move-item');
/*cardItem.style.transform = 'rotateX('+event.offsetY+'deg)';*/
const halfHeight= cardItem.offsetHeight/2 ;
cardItem.style.transform = 'rotateX('+-(event.offsetY-halfHeight)/3+'deg) rotateY('+(event.offsetX-halfHeight)/3+'deg)';
/*cardItem.style.transform = 'rotateX(20deg)'*/

}

function stopRotate(e) {
const cardItem = this.querySelector('.move-item');
cardItem.style.transform = 'rotateX(0)';


}








});

