
// Thinking in Javascript

// This is a comment, a single line comment
/* 
 * This is a multiline comment
 * here is more of that same comment
 * */

// How to print to the console, the second most important thing to learn in any language.
console.log("Im a real boy")

// example of hoisting in action
console.log(thing = "something")

// Variables
// Declared, using very specific words. 

// let - a mutable variable, the value can be change. This may be reassigned

// = is the assignment operator, this does not represent equality
let myName = "Kyle" // String begins with ",',` and contains characters 

// const - is an immutable variable, meaning it cannot be reassigned
const theSky = "is blue"

// var - is mutable, and is contained in the global scope.
// It receives the super power of hoisting 
var thing = "hoisted"


// Primitive values, are the most generic values. Types of data in their simplest form
console.log(typeof myName, "<<<<<< This is me checking the variable myName")
console.log("This is a >>", typeof 1)
console.log("This is a >>", typeof 12.3)
console.log("This is a >>", typeof true)
console.log("This is a >>", typeof false)
console.log("This is >>", typeof null) // This is the developer setting this value explicitly
console.log("This is >>", null) // This is the developer setting this value explicitly
console.log("This is >>", typeof undefined) // This is random

// Everything in javascript is true, except
// "", 0, null, undefined, false, NaN - Not a Number

