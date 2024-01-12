var x
let variable = "prima variabile"
const PI = "Pi greco"

console.log(PI);
console.log(variable);

variable = 4
console.log(variable);
console.log(PI + variable);

let boolean = true

let floatNum = 5.56
console.log("Il tipo di floatNum è " + typeof floatNum);
console.log("Il tipo di variable è " + typeof variable);
console.log(typeof boolean);

function saluta(nome) {
    console.log("Hello, "+nome);
}

saluta("Luca")
saluta(3)


let convertiInMiglia = function miglia(km) {
    
    return km * 0.6214
    
}

console.log(convertiInMiglia(45));

// calcolatrice one-line
function calcola(a,b,op) {
    return op(a,b)
}

function somma(a,b) {
    return a+b;
}
console.log(calcola(23,3,somma));
// funzioni anonime
console.log(calcola(4,5, (a,b) => a-b))
console.log(calcola(4,5, (a,b) => a*b))

// IF
console.log(1 == '1');
console.log(5 == '6');

let array = [1,2,3,"luca", [1,2,3]]
let arraCtr = new Array(1,2,5,3)

// dowhile, while, for
// foreach in JS
for(let elem of array) {
    console.log(elem);
}

//Oggetti in js
let myObj = {
    name:"Nicolò",
    surname:"Buganza"
}

console.log(myObj);

// for-in, for specifico per oggetti
for(let elem in myObj){
    console.log(elem + " "+ myObj[elem]);
}

//DOM BOM