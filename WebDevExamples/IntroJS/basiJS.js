//old way to control vars (used between 1995 and 2015), use this ONLY if you plan to support old browsers 
var aVar 

//standard varriable declaration via let
let varNum
let l = "stringa"

//this is a constant, can't do assignments on it, only initialization
const c = 3.14
//constant with big value => e8 = 10^8
const gigante = 176431e8
let bool = true

//Typeof returns the type of a variable
console.log(typeof varNum)
varNum = 113
console.log(typeof varNum)


//we can declare arrays
const array = [1,2,3,4,"asfdas"]
console.log(typeof array)
console.log(array)

for(let i=0;i<array.length;i++){
    console.log(array[i])
}