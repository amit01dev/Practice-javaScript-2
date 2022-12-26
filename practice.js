// var college = "ecb";
// console.log(college);
// var college = "cet";
// console.log(college);

// let college1 = "ecb";
// console.log(college1);
// let college1 = "cet";
// console.log(college1);

// const pi = 2;
// console.log(pi);

// pi = 48;
// console.log (pi);
// we can do whatever we want with the const value like 
// console.log(pi *4);
// console.log(pi ** 2);  // used for finding power 2^2
// console.log(pi ** 4);  // used for finding power 2^4

// ----------------- indexing-------------------
// let firstName = "amitrajpuohit"
// console.log(firstName[4]);
// console.log(firstName.length);

// last index 
// console.log(firstName.length-1);
// console.log(firstName[firstName.length-1]);

// -------------ch7--------------
// trim ()
// let college = "     ecb    ";
// console.log(college);
// college.trim();  // it will not work like that 
// console.log(college);

// we have to store in a new  variable.
// let college1 = college.trim();
// console.log(college1);
// // or
// college = college.trim();
// console.log(college);

// touppercase and tolowercase -------
let firstName = "amit";
firstName.toUpperCase();     // it will not work in this state b/c it gives a string
                             // & this string should be store in same variable or new variable.b/c string is immutable.
console.log(firstName);
firstName=firstName.toUpperCase();  // store the string in the same variable.
console.log(firstName);
// or 
let secondName = firstName.toUpperCase(); // store the string in new variable.
console.log(secondName);

let college = "eCb";
console.log(college);

college = college.toLowerCase();
console.log(college); 

let newcollege = college.toLowerCase();
console.log(newcollege);


// slice()----
// used for sliceing index 
let rajasthan = "bikaner";
console.log(rajasthan);

rajasthan = rajasthan.slice(0,4); // it will select 0-3, if we write (1) then it will
                                //select all the character after 1, till the end.
console.log(rajasthan);
                              // we can also  add this string (rajasthan.slice(0,4); into new a variable)

