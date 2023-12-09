// Logging
console.log("Hello!")
console.error("This is an error on the Console!")
console.warn("This is a warning on the console")

// Basic user interaction in JS (working only in Browser Code!)
/*
prompt("Insert something")
confirm("Are you sure about something?")
alert("Alerting user about something!")
*/

//Variables
//IMPORTANT FUN FACT! vars in JS can be used WITHOUT having being declared before. TRY TO AVOID THIS METHOD
x = 5
var v; //used between 1995 and 2015. use 'var' only if you plan to support OLDER BROWSERS or if you need a 'global var'
let l; // from ES6 on, 99,9% of the times you're gonna use let. :)
const c = 3.14;

// Get type of variable in JS => typeof

// Types in JS
let number = 1;
let floatNumber = 4.45;
let stringVar = "Hei"
let stringVarSingleQuote = 'Hei'
console.log()

console.log("Type of 'number' is " + typeof number)
console.log("Type of 'floatNumber' is " + typeof floatNumber)
console.log("Type of 'stringVar' is " + typeof stringVar)
console.log("Type of 'stringVarSingleQuote' is " + typeof stringVarSingleQuote)
let boolVar = true
console.log("Type of 'boolVar' is " + typeof boolVar)

///Special types
let undefVar = undefined //every declared var without an assigned value will have an undefined type
let nullVar = null //a declared var with an assigned value of null will have an object type

console.log("Type of 'undefVar' is: " + typeof undefVar)
//FUN FACT: null is an OBJECT in JS, but also an assignable value. That's why typeof nullvar returns object.
//console.log("Type of 'nullVar' is: " + typeof nullVar)

console.log(typeof undefVar)
/*Infinity
NaN*/


//Dates and times
console.log()
console.log("Working with dates")
let dateAsTimestamp = Date.now() // get current time as TIMESTAMP
let dateAsObject = new Date() //current time as obj

console.log(dateAsObject.toISOString())
console.log(dateAsTimestamp)


//Array
// in JS array can contain MIXTURE of values, like so...
console.log()
console.log("Working with arrays")
let array = [1, 3, 4, "BSDBADSJ"]
//let array2 = Array.of(1, 2, 3, 4, 5, 6, "ciao", null)
console.log(array)

//FOREACH => for(let valoreDellaStruttura of struttura)
for (let value of array) {
    console.log(value)
}


let book = {
    "main-title": "ffff",
    title: "titolo",
    author: {
        name: "Piero",
        surname: "Rossi"
    },
}

for (const bookKey in book) {
    console.log(book[bookKey])
}

