// Programmazione funzionale JS

let f = function (km) {
    return km * 0.621371
}

console.log(f(1));

function calc(a,b, funcToApply) {
    return funcToApply(a,b)
}

console.log(calc(5,4, (a,b)=> a+b));
console.log(calc(5,4, (a,b)=> a-b));
console.log(calc(5,4, (a,b)=> a*b));

// n ** e = n^e
console.log(calc(5,4, (a,b)=> (a**2+b**3)/2));

let array = [1,2,3,4,5,6,7,8,9,10]
console.log();
// MAP - trasforma ogni elemento di una struttura dati in un altro basandosi su una funzione 
// Restituisce un nuovo array
console.log("Esemipo MAP");
console.log(array.map((a)=>a*2));

// FILTER - applica una funzione di filtro e rstituisce un nuovo array con i soli elementi filtrati
console.log("Esemipo FILTER");
console.log(array.filter(a=>a>4 && a<7));

console.log("Esempio REDUCE");
console.log(array.reduce((a,b)=> a+b,0));

// EVERY
console.log(array.every(a=>a%2===0));

// SOME
console.log(array.some(a=> a%2===0));

// Esercizio 1
/*
Dato un array di numeri, restituire la somma dei quadrati dei numeri pari.
[1, 2 ,4, 6, 5, 3] => 56
*/
let es1Arr =[1, 2 , 4, 6, 5, 3]
console.log("Esercizio 1");
console.log(es1Arr.filter(n=>n%2===0).map(n=>n**2).reduce((a,b)=>a+b,0));

