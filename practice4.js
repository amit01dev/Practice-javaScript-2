//chapter 23 --
// for loop ---
// method 1

// for (let i = 0; i <= 9; i++) {
//     console.log(i);
// }

// in method 1  the i is not accessible outside the for loop if we write console.log (i); just after the for loop it can't print the value of i 

// but if we use var for definining variable then the i is accessible outside of the for loop.

// or 
// method 2

// this below method is also correct and often asked in interviews but it is not prefered, in this method we  define variable outside of the for loop.

// let i = 0;
// for (; i <= 9; i++) {
//     console.log(i);
// }


// print sum of first 10 natural numbers using for loop ---

// method -1
console.log("print sum");

let total = 0;
let i1 = 0;
for (; i1 <= 10; total = total + i1, i1++ );
console.log(total);


// method -2
let total1 =0;

for ( let i2 =0; i2<=10; i2++){
    total1 = total1 +i2
}
console.log (total1);

