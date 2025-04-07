
// // Thinking in Javascript

// // This is a comment, a single line comment
// /* 
//  * This is a multiline comment
//  * here is more of that same comment
//  * */

// // How to print to the console, the second most important thing to learn in any language.
// console.log("Im a real boy")

// // example of hoisting in action
// console.log(thing = "something")

// // Variables
// // Declared, using very specific words. 

// // let - a mutable variable, the value can be change. This may be reassigned

// // = is the assignment operator, this does not represent equality
// let myName = "Kyle" // String begins with ",',` and contains characters 

// // const - is an immutable variable, meaning it cannot be reassigned
// const theSky = "is blue"

// // var - is mutable, and is contained in the global scope.
// // It receives the super power of hoisting 
// var thing = "hoisted"


// // Primitive values, are the most generic values. Types of data in their simplest form
// console.log(typeof myName, "<<<<<< This is me checking the variable myName")
// console.log("This is a >>", typeof 1)
// console.log("This is a >>", typeof 12.3)
// console.log("This is a >>", typeof true)
// console.log("This is a >>", typeof false)
// console.log("This is >>", typeof null) // This is the developer setting this value explicitly
// console.log("This is >>", null) // This is the developer setting this value explicitly
// console.log("This is >>", typeof undefined) // This is random

// Everything in javascript is true, except
// "", 0, null, undefined, false, NaN - Not a Number

///////////////////////////////////
// * CONTROL FLOW
///////////////////////////////////

// control flow - is the order in which individual statements or instructions are executed.
// this lets you specify when and which lines of code get executed

// There are 3 forms of control flow
// 1. Functions - save and later execute lins of code when we invoke/call said function
// 2. Loops - repeat lines of code, for, while, recursion
// 3. Conditionals - skip lines of code

// ? Conditionals
///////////////////////////////////
// conditional === boolean expression, a boolean expression evaluates to either true or false
if (conditional = true) {
    // execution context, code to run when the conditional is true
    console.log("Im the truth")
}

// chose and M&M
let isMMColorGreen = true

// Decide what to do based on M&M color
if (isMMColorGreen) {
    // true code
    // throw the M&M away
    console.log("Eww, I am getting rid of the gross green M&M.")
} else {
    // false code
    // KEEP That one
    console.log('Yum, YUm, YUMMMMM!')
}


// If there is a party let's go to it. Else if we have a coupon for glow in the dark mini golf let's do that.
// Else if there is a sale at the mall, let's fo there. else, let's bake some cookies.

const isPartyTonight = false;
const miniGolfCoupon = true;
const saleAtTheMall = true;

if (isPartyTonight) {

    console.log(`I am going to party like it's 1999`)
} else if (miniGolfCoupon) {

    console.log('Hole in one, Woo!')
} else if (saleAtTheMall) {

    console.log('When you buy more, you save more!')
} else {
    // base case, when all other ifs fail
    console.log("I love cooking cookies")
}

// Explain the following code

let mmColor = 'blue';

// = is the assignment operator
// == loose equality
if ( ((mmColor == 'green')) ) {
    console.log("Eww!, green m&m")
} else {
    console.log("Yum! I love M&M's")
}

// First, walkthrough it and guess what should happen
// run the code
// is it what you expected?
// how can we change this code to run as expected?

// === strict equality
if ( 'green' === (mmColor = 'green') ) {
    console.log("Eww!, green m&m")
} else {
    console.log("Yum! I love M&M's")
}

// Modulo operator
// % - returns the remainder of euclidean division, it is the remainder

if (4 % 2 === "0") {
    console.log('Number is Even')
} else {
    console.log('Number is odd')
}

/////////////////////////////
// ! Loops
/////////////////////////////

// Loops - allow us to do something repeatedly.
// ++ - is the increment operator, and it does matter which side it is on. The left is the pre-increment, the right is the post-increment
for (let step = 0; step < 5; step++) {
    console.log(step, "<< This is our step")
};

// Do something with even numbers and add all of the odd numbers.

let oddSum = 0;

for (let i = 0; i < 10; i++) {

    if ( "1" === i) {
        console.log('the number is 1')
        continue;
    }

    if ( 0 === (i % 2)) {
        console.log('the number is even')
        continue;
    }

    oddSum += i
}

console.log(oddSum)