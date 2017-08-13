$(document).ready(function obertka(){
// k=0;


   // console.log("0000 вхождение"+k);
   $('.PUSK, li:first').click (function(){
   $('.flag li:not("first")').css("display","block");
    // console.log("1 вхождение"+k);

        // console.log("2 вхождение"+k);

             $('.flag li:not("first")').click (function(){
             // k=k+1;
             // console.log("3 вхождение"+k);
             $('.flag li').css("display","none");
             $('.flag ul').prepend($(this).css("display","block"));
             return obertka();
             // console.log('FULL цикл прошел'+k);


        });

    });

});