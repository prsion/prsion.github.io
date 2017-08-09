$(document).ready(function(){
// k=0;


   // console.log("0000 вхождение"+k);
   $('.PUSK ').click (function(){
   $('.flag_li:not("first")').css("display","block");
    // console.log("1 вхождение"+k);

});
        // console.log("2 вхождение"+k);

     $('.flag_li:not("first")').click (function(){
     // k=k+1;
     // console.log("3 вхождение"+k);
     $('.flag_li').css("display","none");
     $('.flag_ul').prepend($(this).css("display","block"));

     // console.log('FULL цикл прошел'+k);



});

 });