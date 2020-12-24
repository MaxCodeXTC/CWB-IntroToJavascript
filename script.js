// This is a comment

/*

This is a multiline comment

*/

/*
    This is how you print to the terminal
    console.log()
*/

/*
    3 primitive data types
    - numbers (4, 4.5)
    - strings "Beng", "45"
    - booleans true, false
*/


/* 
    Variables
    - let
    - const
*/

let numberVariable = 4;

let anotherNumber = 10;

let stringVariable = "Hello!";

let booleanVariable = true;

const anotherVariable = 5;
// THE NEXT LINE WILL THROW AN ERROR because you are re-assigning a constant variable
// anotherVariable = 5; 


/* NUMBERS */

/*
    Arithmetic Operators
    +
    -
    *
    /
*/

let a = 5;
let b = 7;
let c = a + b;
// prints 12
// console.log(c); 

let d = 10;
d = d * 5;
// prints 50
// console.log(d); 


/*
    Exponent (power)
*/

let e = 5;
let f = 5 ** 2;
// prints 25
// console.log(f); 

/*
    Modulus (remainder)
*/

let g = 15 % 4;
// prints 3
// console.log(g); 

/*
    Increment/Decrement (by 1)
*/

let h = 2;
h++; // h == 3
h++; // h == 4
h++; // h == 5
// prints 5
// console.log(h); 

let i = 2;
i--; // i == 1
i--; // i == 0
i--; // i == -1
// console.log(i); // prints -1


/* STRINGS */

// strings characters are between quotes
let j = "Hello";
let k = "Everyone!";

//concatenation
let l = j + " " + k;
// returns "Hello Everyone!"
// console.log(l); 

// Adding string and number
let m = 5;
let n = j + m;
// returns "Hello5"
// console.log(n); 

// prints number
// console.log(typeof (m));

// prints string
// console.log(typeof (n));

let o = true;
// prints boolean
// console.log(typeof (o));

let p = 5;
let q = "5";
// prints "55"
// console.log(p + q);


/* BOOLEANS */

/*
    Comparison Operators
    ==
    !=
    >
    <
    >=
    <=
*/

let r = 5;
let s = 6;
let t = r == s;
// prints false
// console.log(t)

r = 5;
s = "5";
t = r == s;
// prints true
// console.log(t)

/*
    r = 5
    s = "5"

    r == s //true
    r != s //false
    r > s //false
    r < s // false
    r >= s //true
    r <=s //true

    r === s //false
    r !== s //true

*/

/*
    AND/OR
    &&
    ||
*/

let u = 3;
let v = 5;

if (u == v) {
    // console.log("I am equal!");
}
else if (u == 4) {
    // console.log("I am 4");
}
else {
    // console.log("I am in the else statement");
}

if (u < v && u == 4) {
    // console.log("both conditions are true");
}

if (u < v || u == 4) {
    // console.log("atleast one of he conditions is true");
}


/* LOOPS */

/* 
    for
    while
*/

// loops 10 times
for (let i = 0; i < 10; i++) {
    // console.log("i", i);
}

let x = 0;
let y = 10;
// loops until x is no longer strictly less than y
while (x < y) {
    // console.log("x", x);
    // console.log("y", y);
    y = y + 1;
}


/* FUNCTIONS */

function myFirstFunction(name) {
    console.log("hello " + name);
}

// prints "hello Beng"
myFirstFunction("Beng");

// prints "hello John"
myFirstFunction("John");

function toCelsius(fahrenheit) {
    let temperature = (5 / 9) * (fahrenheit - 3);
    return temperature;
}

let result1 = toCelsius(90);
// console.log(result1);

let result2 = toCelsius(80);
// console.log(result2);

function addition(a, b) {
    return a + b;
}

let result3 = addition(1, 2);
// prints 3
// console.log(result3);

let result4 = addition("Javascript ", "is cool!");
// prints "Javascript is cool!"
// console.log(result4);