//A loop is used when you want to repeat the same code many times instead of writing it again and again.
console.log("welcome to decision loop");
for(let i=0;i<=5;i++){
console.log("hello world");
}
for(var i=1;i<=6;i++){
console.log(i);
}
//One execution of the loop is called an iteration 
//***** FOR LOOP******
//Use it when you know how many times to repeat.
//***********While Loop**********
//Use it when you don't know how many times you'll repeat.
//EXAMPLE******
//Print numbers 1 to 20 using a for loop.
for(let i=1; i<=20;i++){
    console.log(i);

}
//Print numbers 20 down to 1.
for(let i=20;i>=1;i--){
console.log(i)
}
//Print only even numbers from 2 to 20.
for(let i=2;i<=20;i++){
if(i%2==0){
    console.log(i);
}
}
//Print only odd numbers from 1 to 15.
for(let i=1;i<=15;i++){
    if(i%2!=0){
        console.log(i);
    }
}
//Print "Welcome" 5 times.
for(let i=1; i<=5;i++){
console.log("welcome"+i);
}
//Use a while loop to print 1 to 10.
var i=1;
while(i<=10){
    console.log(i);
    i++;
}
console.log("the sum of the number")
// let sum =0;
// for(let i=1; i<=5;i++){
// sum=sum+i;
// }
// console.log(sum);
//Print all elements of this array.
let fruit=["apple","orange","mango","banana"];
for(let i=0;i<fruit.length;i++){
    console.log(fruit[i]);
}
var add=0;
for(let i=0; i<=20;i++){
add=add+i;
}
console.log(add);//210
let sum=0;
for(i=2;i<=20;i++){
if(i%2===0){
    sum=sum+i;
}
}
console.log(sum);
let animals=["cat","dog","lion","tiger"];
for(i=0;i<animals.length;i++){
    console.log(animals[i]);
}
for (i=0;i<3;i++){
console.log(animals[i]);
}
for(i=100;i>=1;i-=10){
    console.log(i);
}
//Multiplication table of 5
for(let i = 1; i <= 10; i++){
console.log("5x"+i+"="+(5*i));
}
//Count how many even numbers are between 1 and 20.

let count = 0;


for(let i = 1; i <= 20; i++){

    if(i % 2 === 0){
        count++;
    }

}

console.log(count);
//largest number
let numbers = [12,5,80,34,22];

let largest = numbers[0];

for(let i = 0; i < numbers.length; i++){

    if(numbers[i] > largest){
        largest = numbers[i];
    }

}

console.log(largest);
//smallest number 


let smallest = numbers[0];

for(let i = 0; i < numbers.length; i++){

    if(numbers[i] < smallest){
        smallest = numbers[i];
    }

}

console.log(smallest);
//NESTED LOOP*******
//A nested loop is simply:

//A loop inside another loop.
//For every one iteration of the outer loop, the inner loop runs completely.
