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
    console.log("Hello, " + nome);
}

saluta("Luca")
saluta(3)


// le funzioni sono tipi ;)
let convertiInMiglia = function miglia(km) {

    return km * 0.6214

}

console.log(convertiInMiglia(45));

// calcolatrice one-line
function calcola(a, b, op) {
    return op(a, b)
}

function somma(a, b) {
    return a + b;
}

//funzioni come parametri
console.log(calcola(23, 3, somma));
// funzioni anonime
console.log(calcola(4, 5, (a, b) => a - b))
console.log(calcola(4, 5, (a, b) => a * b))

// IF
console.log(1 == '1');
console.log(5 == '6');

let array = [1, 2, 3, "luca", [1, 2, 3]]
let arraCtr = new Array(1, 2, 5, 3)

// metodi degli array
//inserimento valore in coda
let newArray = [4,74,568,123,9]

newArray.push(10)
//ins in testa
newArray.unshift(0)

// delete dalla coda
newArray.pop()

//delete dalal testa
newArray.shift()

console.log(newArray);

console.log("\n");

//ordinare array
console.log("Ordinamento array");
console.log(newArray.sort(

    function (a,b) {
        if(a<b) return -1
        if(a>b) return 1
        return 0
    }

));




// dowhile, while, for
// foreach in JS
for (let elem of array) {
    console.log(elem);
}



//Oggetti in js
let myObj = {
    name: "Nicolò",
    surname: "Buganza"
}

console.log(myObj);

// for-in, for specifico per oggetti
for (let elem in myObj) {
    console.log(elem + " " + myObj[elem]);
}

// Functional Programming in JS
console.log("\n");
console.log("Functional Programming in JS");

let simpleArray = [1,2,3,4,5,6,7,8,9]

// imperativa
/*let sum=0
for (const elem of simpleArray) {
    sum+= elem*2
}
*/

// MAP - trasforma ogni elem in un altro elemento
const simpleDoubleArray = simpleArray.map(num => num*2)
console.log(simpleDoubleArray);

// FILTER - applica filtro su struttura
const onlyEvenNumbers = simpleArray.filter(n=>n%2===0) 
console.log(onlyEvenNumbers);

// REDUCE - riduce la struttura ad un solo valore
let tot = simpleArray.reduce((acc,num)=> acc+num,0)
console.log(tot);


//DOM BOM