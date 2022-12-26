// start with chapter 11

// undefine data type --

let first;
// var first;
// const first;
console.log(typeof first);  // it will give undefine type 

first = "amit";


// we can use this with let and var -- it will give undefine type
// but with const it will throw errror b/c in const -- variable value should be define, it don't take empty variable .

// we can print multiple vaules in the console 
console.log (typeof first ,first);

// null data type ---

let second = null;

console.log(typeof second); 
// this throw (give)-- " object"  data type which is reference data type instead of giving null b/c in js it is an error or bug so why can't they resolve this bug b/c various framwork and website is made with this bug and we have to chance in  all of it. 
// so they can't solve this bug.

// bigInt data type --

// in js a limit is set for max. integer value.

//  use ----
//  if we hava a value which is more than this limit then we use bigInt data type.

// or we cat use it normal numberic value if it is in limit.


console.log(Number.MAX_SAFE_INTEGER);  // used for finding the max. integer value.

let number = BigInt(34);   // we can write bigInt with two method first is this
console.log(number);  

let number1 = 45n;         // second method 
console.log(number1);

let adding = number + number1    // we can do any arthmatic operation only bigInt to bigInt 

let number2 =33;

// let adding1 = number + number2 + number1   // here we can't add bigInt to any number
// console.log(adding1);


// chap 12 ---

// booleans & operator --
// booleans data type give true and falue --
 
let num = 4;
let num1 = "4";
console.log( num>num1);

// == vs === 
// == checks only value not data types 
// === checks value and data types

console.log (num ==num1);
console.log(num ===num1);


// != vs !==  -- not equal to

// !=  is checking for not equal to and it is not checking the data types
// !== is checking for not equal to and it is checking not equal to in data types also

let data1 = 45;
let data2 = "45";
console.log(data1 != data2);
console.log(data1 !== data2);

// chapt 13 & 14 -------

// if -else conditions ---

// let age = 18;
// if (age >=18){
//     console.log("you are eligible");
// }else{
//     console.log("you are not eligible");}

// another example on if & else --
// let numeric = 1;
// if (numeric%2 ===0){
//     console.log("this is even number");
// }else{console.log("this is odd number");}


// falsy values ---
// false
// null 
// 0
// undefine
// ""

// other than this falsy value all values are truly values---

let firstName ="";
if(firstName){
    console.log(firstName);
}else {console.log("firstName is empty");}

// if we give falsy value then it return else value.


// ternary operator -----

let age = 55;
let drink;
if (age >=5){drink= "coffee"}
else{drink = "milk"}
console.log(drink);

// insteed of writting all this code we use ternary operator --

let age1 = 4;
let drink1 = age1>=5 ? "coffee" : "milk";
console.log(drink1);


// chapt --16 -------
// and & or operator --------

// && -- in and operator both the condition should be true

let name1 = "Amit";
let age2 = 8;
if (name1[0]="A" && age2 >= 18 ){console.log("you are eligible");}
else{console.log("you are not eligible");}

//   || or -- in or operator one condition should be true

let name2 = "Amit";
let age3 = 8;
if (name2[0]="A" || age3 >= 18 ){console.log("you are eligible");}
else{console.log("you are not eligible");}


// nested if else ---

let  nationality = "indian";
let age4 = +prompt("Write your age");
if (nationality === "indian" && age4 >18){
    console.log("you are eligible for voting");
}
else{if (nationality === "indian" && age4 < 18){ 
    console.log("you are not eligible for voting");}
else {console.log("apply for voter id card");}
}

// important note the prompt is giving string so if we are working with numbers we should convert this into number by adding + before the prompt - it will give the number.
console.log(typeof age4);
