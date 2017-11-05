$(document).ready(function () {

/*---------переключение меню---------*/
     $('.menuToggle').click (function(){
         $('.menu').slideToggle(300, function(){
            if($(this).css('display')==='none'){
              $(this).removeAttr('style');
            }

       });

    });
/*---конец ----переключение меню---------*/







});