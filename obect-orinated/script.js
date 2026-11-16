//Object-Oriented Programming (OOP) is a programming approach where problems are solved using objects. It models real-world things (such as people, cars, and books) inside JavaScript programs, making programs easier to understand and organize.
let student ={
name: "sara",
age:20,
department:"CS",
introduce: function(){
    return this.name;
}
};
console.log(student.introduce());
let car ={
model:"toyota",
color:"black",
year:2024

}
console.log(car.model);
// nested object
let person={
    name:"ahmed",
    address:{
        city:"A.A",
        country:"ethiopia"
    }

}
console.log(person.address.city);
//constructor function
function Mobile(phone,type){
this.phone=phone;
this.type=type;
this.phoneinfo= function(){
    return this.type
}
}
let m1=new Mobile("apple","samsung")
let m2 =new Mobile("galaxy","tecno");
console.log(m1.phoneinfo());
function Book(title,author){
this.title=title;
this.author=author;
this.bookinfo=function(){
    return this.title
}

}
let b1=new Book("do it to day","now i do not know");
let b2=new Book("javascript","someone");
console.log(b1.bookinfo());
// Algorithm
//An algorithm is simply a step-by-step procedure to solve a problem.
// sum of array
let numbers = [10, 20, 30, 40, 50];
let sum =0
for (i=0;i<numbers.length;i++){
sum=sum+numbers[i];
}
console.log(sum);
// count even number 
let count=0;
for(i=0;i<numbers.length;i++){
if(numbers[i]%2==0){
    count++
}
}
console.log(count);
// find the largest number 

let kutr=[24,67,89,78];
let larget =kutr[0];
for(let i=1;i<kutr.length;i++){
if(kutr[i]>larget){
    larget=kutr[i];
}
}
console.log(larget);
// Almost every array algorithm follows this pattern:
// 1. Create a variable
//       ↓
// 2. Use a for loop
//       ↓
// 3. Check each element
//       ↓
// 4. Update your variable
//       ↓
// 5. Print the result
let smallest =kutr[0]
for(i=0;i<kutr.length;i++){
    if(kutr[i]<smallest){
smallest=kutr[i]
    }
}
console.log(smallest)
//Write a program to find the sum of the array.
let num=[4,5,6,7,8]
let add=0
for (i=0;i<num.length;i++){
    add=add+num[i];
}
console.log(add);
//Write a program to count the odd numbers.
let odd=0
for(  i=0;i<num.length;i++){
  if(num[i]%2!=0){
    odd++;
  }
}
console.log(odd);
//Write a program to count how many numbers are greater than 50.
let subset=[20, 60, 45, 80, 55, 10];
let greate=0
for(i=0;i<subset.length;i++){
    if(subset[i]>50){
greate++;
    }

}console.log(greate);
//Write a function that returns only the lowercase letters from this string.
let word="";
let text = "AbCDxEFgHiJ";

for (let i = 0; i < text.length; i++) {

    if (text[i] == text[i].toLowerCase()) {

        word = word + text[i];

    }

}

console.log(word);

// let word2 ="";
// let textt = "JaVaScRiPt";
// for (i=0;i<textt.length;i++){
// if(textt[i]==textt.toLowerCase()){
// word2 =word2+textt[i];
// }
// }
// console.log(word2);
// //Write a program that counts how many uppercase letters are in this word.
// for (i=0;i<textt.length;i++){
// if(textt[i]==textt.toUpperCase()){
// word2 =word2+textt[i];
// }
// }
// console.log(word2);
let word2 = "";
let textt = "JaVaScRiPt";

for (let i = 0; i < textt.length; i++) {

    if (textt[i] == textt[i].toLowerCase()) {

        word2 = word2 + textt[i];

    }

}

console.log(word2);
//Write a program that counts how many times the letter "a" appears.
let fruit="banana";
let letter=0;
for(i=0;i<fruit.length;i++){
if(fruit[i]=="a"){
letter++;
}
}
console.log(letter)
//Write a program that removes all spaces from this sentence. 
let text2 = "I Love JavaScript";

let result = "";

for (let i = 0; i < text2.length; i++) {

    if (text2[i] != " ") {

        result = result + text2[i];

    }

}

console.log(result);
//Write a program that removes all spaces.
let text3 = "Chat GPT Is Amazing";

let result2="";

for(let i=0;i<text3.length;i++)
    {
if(text3[i] != " "){
    result2 = result2 + text3[i];

    
}

} console.log(result2);
//Write a program that removes all vowels from a word.
let word2="education";
