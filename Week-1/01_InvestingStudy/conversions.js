// String conversion -> chize bikul obivious hai primitive value ka liya 1 -> "1", false -> "false" , null -> "null", undefined -> "undefined"

// Syntax -> String(value)
let nums = [1, 2, 3, 4]

let arrNums = String(nums)
// console.log(typeof arrNums); // string

let profile = {
    name: "Ravi",
    age: 21
}

let objProfile = String(profile);
// console.log(typeof profile); // object

// Number Conversion ->   "   123   " -> 123 remove space from end and start if number find then return num other wise return NaN, 
// true -> 1, false -> 0

// Syntax -> Number(value)

// console.log(typeof("6" /  "2"));

console.log(Number(false));

// Boolean conversion

// Syntax -> Boolean(value)

// 0, null, undefined, NaN, "" -> false
// other value -> true

console.log(Boolean(""))