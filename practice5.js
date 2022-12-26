// chapter 24---
// break & continue ----

// for (let i = 0; i<=10; i++){
//     if (i===5){
//         break;
//     }
//     console.log(i);
// }

// break will exit the loop and go to next line 
// continue will only skip that one execution and then it go to the loop first line.

// continue ---

// for (let i = 0; i<=10; i++){
//     if (i===5){
//         continue;
//     }
//     console.log(i);
// }

// here when 5 occur it doesn't excecute console.log (i) and go to the loop and next 6 is printed.in other worlds it skip 5.


// do while loop ------------

//  this is the normal while loop---

// let i = 0;
// while (i<=12){
//     console.log(i);
//     i++;
// }

// this is do while loop -- 
// in this do while loop first do is executed and then while condition is checked.


// let i= 13;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=12)

// it print 13 one time b/c while condition is checked after the do operation happend.


// chapter 26 -------------

// two major data types are -- 1. primitive data type & 2. reference data type
// in primitive data type --- string ,number , booleans , null , undefine etc.
// in reference data type -- arrays 


// arrays ----

// it is a reference data type
// it is ordered collection of items -means everthing in array is in order we can access with the indexing. 

let fruit = ['apple', "mango", "banana"];

// we can add anything in array -- numbers, string,  null, undefined, boolean etc.   

let mixing = [ 3,4,5.5,"apple", null, undefined, Boolean ];
console.log(mixing);



console.log(fruit);
// we can access any index in an array 
console.log(fruit[0]);

// array is mutable - means we can replace anything in the array.
  fruit[1]= "kivi"
  console.log(fruit);

// how to find type of array --
console.log(typeof fruit);
// it give object as data type which is true but it is not specific b/c object is also data type of object literal ( will study in further chapter)
// so how we can assure that this is array we use this--

console.log(Array.isArray(fruit));
// this will tell true or false if it is true then it is array


