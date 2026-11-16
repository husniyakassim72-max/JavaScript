console.log("welcome to javascript");
var A=20;
var H=23;
console.log(A+H);
// var A=20;
// var H=23;
// console.log(A+H);

//arthmetic operator 
let x= 15
let y= 9
x+=y // this implies x=x+y
console.log(x)
var u = "Test Text"; 
   var t = "Another Text";  
var h = t + u;  
console.log(h)


//******operator
var num1 =80;
var num2=90;
console.log(num1+num2);
console.log(num1*num2);
console.log(num1-num2);
console.log(num1/num2);
var result;
result=num1+num2;
console.log(result);


// ******string operator

let first_name ="husni";
let last_name="huseymin"
let full_name= first_name+ " " + last_name;
console.log(full_name);
let sibling= "mohamed"+ " " +"meryem";
console.log(sibling)
//**** comparison
let a=5;
let b=9;
let c=9;
let d=9;
console.log("**comparison")
console.log(a<=b)
console.log(b===c)
console.log(c!==d)
console.log(num1>=num2)
console.log("**logical operator")
//********* logical operator
console.log(1==1||2==2||3==7)
console.log(b===c&&num1>=num2)
 
// weak typing
 let name ="husni"-5;
 let my_mama="ema"+1000;
 console.log(my_mama);
 console.log(name);

 //***array --is aspecial type of data structure 

 var my_first_array =[90,"husni","mohamed"];
 console.log(my_first_array)
 console.log(my_first_array[0]*my_first_array[0])


 //********** Function and conditional statment

 function sum() {
    let f=2;
    let e=5;
    console.log(e+f);
 }
 sum();
 function  average(x,y){
var av;
av=(x+y)/2;
return av;
}
var percent=average(80,60);
console.log(percent);
function product(g,j){
    var gj;
    gj=g*j;
    return gj;
}
var xy=product(24,67);
console.log(xy);
 function Full_info(STUDENT,Faher_Name){
    var STUDENT_Name;
    STUDENT_Name=STUDENT+ " " +Faher_Name;
return STUDENT_Name;
 }
 var someone=Full_info("abebe","kebede");
 console.log(someone);
 //Write a function called myName that takes one argument (a name) and returns:
 function myName(his_name) {
    return "hello"+ " " + his_name;
 }

  console.log(myName("abebe"));
  //Write a function called addNumbers that takes two numbers and returns their sum.
  function addNumbers(Z,R){
var add;
add=Z+R;
return add;
  }
  
  console.log(addNumbers(500,800));
  //Write a function that returns the multiplication of two numbers.
  function multiply(W,Q) {
     var mul;
     mul=W*Q;
     return mul;

    
  }
 
  console.log(multiply(456,78));

 // The function receives one age.
 function next_year(yr) {
    var yrr;
    yrr=yr+1;
    return yrr;

 }
 console.log(next_year(20));
 //Rectangle Area
function Rectangle_Area(width,height){
var area ;
area = (width*height)/2
return area;
}
console.log(Rectangle_Area(30,40));
function EvenOdd(number) {
 return number % 2 == 0? "even":"odd"
}console.log(EvenOdd(10))
//N.B Anything after return inside the same block will not execute.
function converter(min) {
   var sec;
   sec=min*60;
   return sec;
}
console.log(converter(5));
function square(sr){
 var sqr;
 sqr =sr*sr;
 return sqr;

}
console.log(square(7));
function Temprature(T){
   var far;
   far=(T * 9/5) + 32;
   return far;
}
console.log(Temprature(0));
function studentInfo(N, AG,DEP){
   var student_full;
   student_full = N +" " + " " + AG +" " + DEP;
   return student_full;
}
console.log(studentInfo("husni",23, "information_technoloy"));


//*********** conditional statment 
// is a set of rule performed if a certain condition is met.
//if ...
function checkifpassed(pass,score,studname){
if(score>=pass){
console.log(studname+": passed ");
}
if(score<=pass){
   console.log(studname+": failed");
}
}
checkifpassed(59,80, "abebe");
// if....else
   function check(pa,sc){
      if(sc>=pa){
         console.log("pass");
      }
      else{
         console.log("fail");
      }
   }
   check(89,90);
   //switch statment:starets with avariable called the switch value .
   // each case indicate the possible value and the code it runs if the given value matches 
   var greeting="";
   var timeofday;
   timeofday="morning";
   switch(timeofday){
      case "morning":
         greeting="good morning";
         break;
         case "afternoon":
            greeting="good afternoon";
            break;
            case"evening":
            greeting="good evening";
            break;
            default:
               greeting="hi there "
               break;

   }
console.log(greeting);
// final for function +  conditional statment .
// Q1 Define a simple function named myFirst that prints the word "Hello" on the console 
//○ First define the function 
//○ Then call the function 
function myfirst(){
   console.log("hello")
}
myfirst();
//Define a function called mySecond that takes a parameter and prints the parameter on console 
function mysecond(ah){
console.log(ah);
}
mysecond(34);
