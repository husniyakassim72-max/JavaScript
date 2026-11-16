//Create a function called sayHello that prints:
function sayhello(){
    console.log("hello world");
}
sayhello();
//Create a function called showName that receives one parameter called name and prints the name.
function showName(name){
    console.log(name);
}
showName("husni");
//Create a function called addNumbers that receives two numbers and returns their sum.
function addNumbers(a,b){
var add ;
add=a+b;
return add
}
console.log(addNumbers(10,20));
//Create a function called multiply that returns the multiplication of two numbers.
function multiply(num1,num2){
    var  mul;
    mul= num1*num2;
    return mul;
} console.log(multiply(30,20));
//Create a function called square that returns the square of a number.
function square(num){
 var sqr ;
 sqr= num*num;
 return sqr;
} 
console.log(square(30));
//Create a function called fullName that receives
function fullName(firstname,lastname) {
    var full;
    full = firstname+" "+lastname;
    return full;
} 
console.log(fullName("ali","mohemmed"));
//Create a function called isAdult.
//function isAdult(age)
// { if(age>=18){
//     return "adult";

// } if(age<18){
//     return "child";
// }

// }
// console.log(isAdult(23));
function isAdult(age){
    return age>=18 ? "adult":"child";
}
console.log(isAdult(20));
//method 2

//Create a function called findLargest.
function findLargest(num3,num4){
    return num3>num4 ? num3:num4;
}
console.log(findLargest(35,24));
//Create a function called evenOdd
function evenodd(num5){
    return num5 % 2===0 ? "even":"odd"
}
console.log(evenodd(4));
//Create a function called calculator.
function calculator(number1, number2){
return number1-number2;
}
console.log(calculator(34,89));
// ****if Statement
//Write a program that checks whether a student passed.

let score=78
if (score>=50){
    console.log("pass");

}
let value=99;
if(value>0){
    console.log("positive")
}
var age=18
if(age>=18){
console.log("you can vote")
}
//Check if temperature is greater than 30.
var temp=40;
if (temp>30){
    console.log("hot");
}
var anumber=25
if(anumber%5===0){
    console.log("divisible");
}
//****switch
var day=4;
switch(day){
case 1:
    console.log("monday");
    break;
    case 2:
       console.log("tuesday"); 
       break;
       case 3:
        console.log("wensday");
        break;
        case 4:
            console.log("thursday")
            break;
            case 5:
                console.log("friday");
                break;
                case 6:
                    console.log("saturday");
                    break;
                    case 7:
                        console.log("sunday");
                        break;
                        default:
                            console.log("not here")


}
var a=14,b=7;
var oprator="+"

switch(oprator){
    case "+":
        console.log(a+b);
        break;
        case "-":
            console.log(a-b);
            break;
            case "*":
                console.log(a*b);
                break;
                case "/":
                    console.log(a/b);
                    break;
                    default:
                        console.log("not found")

}
var grade = "F"
switch(grade){
    case "A" :
        console.log("excellent")
        break;
        case "B":
            console.log("very good")
            break;
            case "C":
                console.log("good")
                break;
                case "D":
                    console.log("pass");
                    break;
                    case "F":
                        console.log("fail")
                        break;
                        default:
                            console.log("NG");
}
 var  days="saturday";
 switch(days){
case "saturday":
    case "sunday":
        console.log("weekend")
        break;
        default:
            console.log("weekday");
 }


