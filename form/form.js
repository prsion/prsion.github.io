
function Form (Obj) {
	// this.NumberQuestion = NumberQuestion;


	this.getForm= function(){


			if (Obj==array1){


			$('input').prop("checked", false);


		  var output= '';
		  var outputCase1= '';
		  var outputCase2= '';
		  var outputCase3= '';
		  var outputCase4= '';
		  var outputCase5= '';
			output+=`${Obj.title}`;
			outputCase1+=`${Obj.case_1}`;
			outputCase2+=`${Obj.case_2}`;
			outputCase3+=`${Obj.case_3}`;
			outputCase4+=`${Obj.case_4}`;
			outputCase5+=`${Obj.case_5}`;
			document.querySelector('.title').innerHTML = output;
			document.querySelector('.title').style.color = "red";
			document.querySelector('.case_1').innerHTML = outputCase1;
			document.querySelector('.case_2').innerHTML = outputCase2;
			document.querySelector('.case_3').innerHTML = outputCase3;
			document.querySelector('.case_4').innerHTML = outputCase4;
			document.querySelector('.case_5').innerHTML = outputCase5;
			document.querySelector('.inp3').style.display="inline-block";
			document.querySelector('.inp4').style.display="inline-block";
			document.querySelector('.inp5').style.display="inline-block";
			document.querySelector('.case_3').style.display="inline-block";
			document.querySelector('.case_4').style.display="inline-block";
			document.querySelector('.case_5').style.display="inline-block";






		} else
			if (Obj==array2){

			$('input').prop("checked", false);

			var output= '';
		  var outputCase1= '';
		  var outputCase2= '';
		  output+=`${Obj.title}`;
			outputCase1+=`${Obj.case_1}`;
			outputCase2+=`${Obj.case_2}`;

			document.querySelector('.title').innerHTML = output;
			document.querySelector('.case_1').innerHTML = outputCase1;
			document.querySelector('.case_2').innerHTML = outputCase2;

			document.querySelector('.case_3').style.display="none";
			document.querySelector('.case_4').style.display="none";
			document.querySelector('.case_5').style.display="none";
			document.querySelector('.inp3').style.display="none";
			document.querySelector('.inp4').style.display="none";
			document.querySelector('.inp5').style.display="none";
			}
			else
			if (Obj==array3){
				$('input').prop("checked", false);

			var output= '';
		  var outputCase1= '';
		  var outputCase2= '';
		  var outputCase3= '';
		  output+=`${Obj.title}`;
			outputCase1+=`${Obj.case_1}`;
			outputCase2+=`${Obj.case_2}`;
			outputCase3+=`${Obj.case_3}`;

			document.querySelector('.title').innerHTML = output;
			document.querySelector('.case_1').innerHTML = outputCase1;
			document.querySelector('.case_2').innerHTML = outputCase2;
			document.querySelector('.case_3').innerHTML = outputCase3;

			document.querySelector('.case_3').style.display="inline";
			document.querySelector('.case_4').style.display="none";
			document.querySelector('.case_5').style.display="none";

			document.querySelector('.inp3').style.display="inline";
			document.querySelector('.inp4').style.display="none";
			document.querySelector('.inp5').style.display="none";



			}
			else
			if (Obj==array4){

				$('input').prop("checked", false);
			// Count=2;
			var output= '';
		  var outputCase1= '';
		  var outputCase2= '';
		  var outputCase3= '';
		  var outputCase4= '';
		  var outputCase5= '';
		  output+=`${Obj.title}`;
			outputCase1+=`${Obj.case_1}`;
			outputCase2+=`${Obj.case_2}`;
			outputCase3+=`${Obj.case_3}`;
			outputCase4+=`${Obj.case_4}`;
			outputCase5+=`${Obj.case_5}`;
			document.querySelector('.title').innerHTML = output;

			document.querySelector('.case_1').innerHTML = outputCase1;
			document.querySelector('.case_2').innerHTML = outputCase2;
			document.querySelector('.case_3').innerHTML = outputCase3;
			document.querySelector('.case_4').innerHTML = outputCase4;
			document.querySelector('.case_5').innerHTML = outputCase5;

			document.querySelector('.case_3').style.display="inline";
			document.querySelector('.case_4').style.display="inline";
			document.querySelector('.case_5').style.display="inline";

			document.querySelector('.inp3').style.display="inline";
			document.querySelector('.inp4').style.display="inline";
			document.querySelector('.inp5').style.display="inline";




			}
			else
			if (Obj==array5){
			$('input').prop("checked", false);
			var output= '';
		  var outputCase1= '';
		  var outputCase2= '';

		  output+=`${Obj.title}`;
			outputCase1+=`${Obj.case_1}`;
			outputCase2+=`${Obj.case_2}`;

			document.querySelector('.title').innerHTML = output;
			document.querySelector('.case_1').innerHTML = outputCase1;
			document.querySelector('.case_2').innerHTML = outputCase2;

			document.querySelector('.case_3').style.display="none";
			document.querySelector('.case_4').style.display="none";
			document.querySelector('.case_5').style.display="none";
			document.querySelector('.inp3').style.display="none";
			document.querySelector('.inp4').style.display="none";
			document.querySelector('.inp5').style.display="none";



			}
		};
} // end Form function



// * Initialyzing Object
var array1 =
{
	title: '1. What`s your favorite movie?',
	case_1:'Once upon a time in America',
	case_2:'The Godfather',
	case_3:'Dirty Rotten Scoundrels',
	case_4:'The Silence of the Lambs',
	case_5:'Trading places'

};

array2={
	title: '2.Do you know what is your weak and strong points are?',
	case_1:'yes',
 	case_2:'no'
};
array3={
	title: '3. What`s your favorite development environment?',
	case_1:'Sublime Text 3 ',
 	case_2:'Visual Studio Code',
 	case_3:'PHPStorm'
};

array4={
	title: '4. What`s your favourite fruit?',
	case_1:'peach ',
 	case_2:'banana',
 	case_3:'orange',
 	case_4:'kiwi',
 	case_5:'smth.other',
};
array5={
	title: '5. And last - How would you like to get the information?',
	case_1:' by e-mail ',
	case_2:' by phone',
};


var mass = new Array(array1, array2, array3, array4, array5);


// create new Form changing obj in form - its new page
 Block=new Form(mass[0]);
 Block.getForm();


var next=0;


var buttonNext = document.querySelector('.next');
var buttonPrevious = document.querySelector('.previous');

/**
 * [Next onclick description]
 *
 */
buttonNext.onclick =function () {
   if(next==mass.length-1){
     setTimeout(setFin(), 0);

  	}

	next=++next;
	Prev=next;
	Block=new Form(mass[next]);
  Block.getForm(mass[next]);


};
/**
 * [Previous onclick description]
 *
 */
buttonPrevious.onclick =function() {
			if(Prev==0) {return;}
  		Prev=--Prev;
  		next=Prev;
			Block=new Form(mass[Prev]);
  		Block.getForm(mass[Prev]);

};



/**
 * [setNone and setBlock description]
 *
 */
// var setNone=function () {
// $("#preloader").css("display","none");
// // alert('dddd');
// };


// var setBlock=function () {
// $("#preloader").css("display","block");
// };

function set(){
	$("#preloader").css("display","block");
      setTimeout(function(){
				$("#preloader").css("display","none");
      }, 2000);
 }
/**
 * [finNone description]
 *
 */
// function finNone(){
// $(".question, .btn").css("display","none");
// }

// function finBlock(){
// $(".fin").css("display","block");
// }

function finAll(){
	$(".question, .btn").css("display","none");
	setTimeout(function(){
		$(".fin").css("display","block");
      }, 2000);
}


function setFin(){
      set();
      setTimeout(function(){
          finAll();
      }, 200);
 }






// show all propeties object
//
/*function print_object(obj){
 var res = '<ul>';
 for(i in obj)
	 res+='<li><b>'+ i +'</b>:'+
	 obj[i]+'</li>';
	 res+='</ul>';
	 document.write(res);

}
print_object(button);
*/


