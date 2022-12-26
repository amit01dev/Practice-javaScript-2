// types of data types --
// string - "amit", "44" , "4.5"
// number - 4 , 5 , 54.55
// booleans -- true or false
// null  -- null 
// undefine --
// bigInt
// symbol

// how to find out  the type of  data types-------------
// use typeof 

// let school = "adarsh";
// console.log(typeof school);
// //  or 
// console.log (typeof 4);

// how to convert data types --------------

// string to number --
// 1.
let college = "engineering";
college = +"engineering";    // use + before the string to convert into number.
// or
// college = + college;
console.log(typeof college); 

// 2. 
let rajasthan = "bikaner";

rajasthan = Number(rajasthan);   // use capital N in number
console.log(typeof rajasthan);

// number to string -------
// 1.
// let age = 45;
// age = age + "";
// console.log(typeof age);

// 2.
let age = 54;
age = String(age);

console.log(typeof age);


//  string concatenation ( meaning adding )----

let firstString = "hello";
let secondString = "world";

console.log( firstString + " " + secondString);

let thridString = "34";
let fourthString = "45";

console.log( thridString + " " + fourthString);

// -----------by adding +before the string it convert into number and it add it --
let thridString1 = "40";
let fourthString1 = "50";

console.log( +thridString1  + +fourthString1);

// string templetes --------
let name1 = "amit";
let age1 = 28;

console.log( "my name is "+ name1+  " and i am  "+ age1 + " year old." );
// or we can write this same thing with much less effort.

console.log(`my name is ${name1} and i am ${age1} years old.`); // we use backtick(`)


