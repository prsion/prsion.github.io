$(document).ready(function () {

     $('.menuToggle').click (function(){
         $('.menu_ul').slideToggle(300, function(){
            if($(this).css('display')==='none'){
              $(this).removeAttr('style');
            }

       });

    });




});