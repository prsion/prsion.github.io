$(document).ready(function() {

/*---------переключение меню---------*/
    /* $('.menuToggle').click (function(){
         $('.menu').slideToggle(300, function(){
            if($(this).css('display')==='none'){
              $(this).removeAttr('style');
            }

       });

    });*/
/*---конец ----переключение меню---------*/

/* ============== мигание объекта =========== */

/*самая яркая звезда слева от планеты*/
function animation () {
   var blnk1 = $('.blnk1');
        if (blnk1.css('opacity') == '1') {
        blnk1.css('opacity', '0');
        blnk1.css('transition', '2s');
        setTimeout(animation, 1000);
			}

    else {
        blnk1.css('opacity', '1');
        blnk1.css('transition', '10s');
				setTimeout(animation,1000);

    }

}
    setTimeout(animation, 0);
/*------ конец ---самая яркая звезда слева от планеты*/

/*----самая верхняя- звезда справа от планеты*/
function animation2 () {
   var blnk2 = $('.blnk2');
        if (blnk2.css('opacity') == '1') {
        blnk2.css('opacity', '0');
        blnk2.css('transition', '1s');
        setTimeout(animation2, 1000);

       }
    else {
        blnk2.css('opacity', '1');
        blnk2.css('transition', '5s');
        setTimeout(animation2, 1000);

    }


}
    setTimeout(animation2, 0);
/*---конец--самая верхняя- звезда справа от планеты---*/


/*-------самая левая звезда-------------*/
function animation3 () {
   var blnk3 = $('.blnk3');
        if (blnk3.css('opacity') == '1') {
        blnk3.css('opacity', '0');
        blnk3.css('transition', '1s');
        setTimeout(animation3, 1000);

       }
    else {
        blnk3.css('opacity', '1');
        blnk3.css('transition', '4s');
        setTimeout(animation3, 1000);

    }

}
    setTimeout(animation3, 0);
/*----Конец --самая левая звезда-------------*/


/* ----самая нижняя звезда--------*/
function animation4 () {
   var blnk4 = $('.blnk4');
        if (blnk4.css('opacity') == '1') {
        blnk4.css('opacity', '0');
        blnk4.css('transition', '1s');
        setTimeout(animation4, 1000);

       }
    else {
        blnk4.css('opacity', '1');
        blnk4.css('transition', '5s');
        setTimeout(animation4, 1000);

    }

}
    setTimeout(animation4, 0);
/* ---конец -самая нижняя звезда--------*/


/*just animation of background*/


var img= document.getElementById('img');
var images =['signs/12.jpg', 'signs/2.jpg', 'signs/3.jpg', 'signs/4.jpg', 'signs/5.jpg','signs/6.jpg','signs/7.jpg','signs/8.jpg','signs/9.jpg','signs/10.jpg','signs/11.jpg','signs/1.jpg'];

var x=0;

function slide(){
 if(x<images.length){
x=x+1;
 } else{
    x=1;
 }
img.innerHTML="<img src="+images[x-1]+">";
}


setInterval(slide, 8000);



/*-----call animation-------*/
/*
function makeChange(time) {
  // Animation logic here
setInterval(slide, 8000 );
//  return time;

  // Call requestAnimationFrame recursively inside the callback function
  requestAnimationFrame( makeChange(time) );
}

// Call requestAnimationFrame again outside the callback function
requestAnimationFrame( makeChange () );

*/




});


