// file no 18 ---
//  if else if ----

let temperature;
// temperature = +prompt("Enter you city temp.")
if (temperature <= 10) {
    console.log("10");
} else if (temperature <= 20) {
    console.log("medium cold 20");
} else if (temperature <= 30) { console.log("normal 30"); }
else if (temperature <= 40) { console.log("today is hot 40"); }
else { console.log("today is very hot 50+"); }


// another example on if else if ----

let day = 7;
if (day === 0) { console.log("sunday"); }
else if (day === 1) { console.log("monday"); }
else if (day === 2) { console.log("tuesday"); }
else if (day === 3) { console.log("wednesday"); }
else if (day === 4) { console.log("thursday"); }
else if (day === 5) { console.log("friday"); }
else if (day === 6) { console.log("saturday"); }
else { console.log("invaild input"); }


// switch function ------

let temp = 20;
switch (temp) {
    case temp = 10: console.log("to cold 10");
        break;
    case temp = 20: console.log("less cold 20");
        break;
    case temp = 30: console.log("normal cold 30");
        break;
    case temp = 40: console.log("not cold 40");
        break;
    default:
        console.log("it's not  cold anymore");
}

// in switch function it is not taking < or > argument with =

// while loop ---------------

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// example of while loop --- adding first 10 natural numbers using while loop ---
// adding first 10 natural numbers without while loop ---

let total = 0;
total = total +1;
total = total +2;
total = total +3;
total = total +4;
total = total +5;
total = total +6;
total = total +7;
total = total +8;
total = total +9;
total = total +10;
console.log(total);

// using while loop ---

let total1 = 0;
let i = 0;
while (i<=10){
    total1 = total1 +i;
    i++;
}
console.log(total1);

// there is a math formulua  for finding the sum of  n natural numbers---
//  n= [n*(n+1)]/2
// so we find out sum of first 10 natural number with the help of this formulua--

let num3 =10;
console.log([num3*(num3+1)]/2);

// from these two methods which is fast --- then the second one which is using math formulua is fast 
// b/c it is taking constant time and the other while loop is taking linear time.


