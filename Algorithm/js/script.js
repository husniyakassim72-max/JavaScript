console.log("welcome to algorithm");
//a word is on the loose and now has tried to hide amongst a crowd of tall letters help write a function to detect what the word is ,knowing the following
//-the wanted word is in lowercase 
//-the crowd of letters are all in uppercase 
//-note that the word will be spread out amongest the random letters but their letters remain in the same order.

//****psedo
//-first we check the letter wheter it is upper case or lowercase 
//for example let me assign the given word is let word="UcNFYGaFYGYtNUH" these so
//U check if small or uppercase  not 
//i will continue c check yes it is small so i will contine until the word are ended.
//finally i will collect the small letters 
// define a function detectword that takes an argument 
// - for loop to itreate each letter 
// let word="UcNFYGaFYGYtNUH";

// for every letter check if the letter is uppercase or lowercase 
// use charAt method to take out  a single letter from the crowd
// conver the letter to uppercase and compare it with the orginal use the touppercase() method if equal the uppercase skip 
// else save the value on result
// return the result variable
function detectword(a){
    let result="";
    for(i=0;i<a.length;i++){
var singleletter=a.charAt(i);

if(singleletter==singleletter.toLowercase()){
result=result+singleletter;
}
    }
     return result;
    
}
var result=detectword("UcNFYGaFYGYtNUH");

console.log(result);
