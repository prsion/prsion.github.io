$(document).ready(function(){

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



/*
второй вариант скролла вверх коммент в HTML

$(function() {

$(window).scroll(function() {

if($(this).scrollTop() != 0) {

$('#toTop').fadeIn();

} else {

$('#toTop').fadeOut();

}

});

$('#toTop').click(function() {

$('body,html').animate({scrollTop:0},800);

});

});
 */





});


