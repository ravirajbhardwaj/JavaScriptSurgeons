"use strict"; // for mordern Js

// Variable -> (let and const) Variable ka use hota hai information/data store krna ka liya, aur information/data agal agal type ke ho sakta

// let means ek baar jo value rakh de toh badal sakta hai

let userName = "Ravi"

let userMessage = "Hi"

let sonuMessage; // declear a variable

sonuMessage = userMessage // copy Hi from userMessage into sonuMessage 

// console.log(sonuMessage, userMessage);

// const means ek baar value rakh de to पत्थर की लकीर hai ji

const BIRTHDAY = 19
// console.log(BIRTHDAY);

// ✔ For primitive values → const makes them fully immutable (cannot change at all).

const NAME = "Sonu"
// NAME = "Ashi"

// AGE = 20


// ✔ For objects/arrays → const prevents reassignment but allows modifying elements/properties.
const numbers = [1, 2, 3]
numbers.push(4)
console.log(numbers)

// numbers = [1, 2, 3, 4]

/*
 Data types in Javascript
*/