//Esercizio 1
function filterArray(array, filterFunction) {
    const result = []
    for (const elem of array) {
        if (filterFunction(elem)) {
            result.push(elem)
        }
    }
    return result
}

let arrayEs1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(filterArray(arrayEs1, num => num > 3))
console.log(filterArray(arrayEs1, num => num % 2 === 0))

//Esercizio 2
function applyFunctionToString(s, functionToApply) {
    return functionToApply(s)
}

function estraiPrimiCaratteri(str, n) {
    return str.substring(0, n)
    /*let risultato = '';
    for (let i = 0; i < n && i < str.length; i++) {
        risultato += str[i];
    }
    return risultato;*/
}

console.log(applyFunctionToString("Hello, World!", str => str.toUpperCase()))
console.log(applyFunctionToString("Hello, World!", str => estraiPrimiCaratteri(str, 4)));

//Esercizio 3
/*
* Definisci una funzione ‘calcolaEtaMedia’
* che accetti un array di oggetti (ogni oggetto descrive una persona tramite il nome e l’età) e una funzione
* come parametri e restituisca la media dell'età estratta dagli oggetti dell'array.
*
* */

const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 22},
];

function calcolaEtaMedia(objArray, f) {
    let sumOfAges = 0;
    for (let elem of objArray) {
        sumOfAges += f(elem);
    }
    return sumOfAges / objArray.length
}

console.log(calcolaEtaMedia(people, person => person.age))
console.log(calcolaEtaMedia(people, person => person.name.length))

// Dato un array di numeri, restituire la somma dei quadrati dei numeri pari.
// ** = elevamento a potenza
console.log("ESERCIZIO 1");
let a = [1,2,4,6,5,3] 
console.log(a.filter(n=>n%2===0 && n>=2)
            .map(n=> n**2)
            .reduce((a,b)=> a+b,0)
);


// ESERCIZIO 2
console.log("ESERCIZIO 2");
let words = ['ciao', 'mondo', 'sole', 'albero', 'mare']
console.log(words.filter(w=> w.length%2===0)
                 .map(w=>w.length**2)
                 .reduce((a,b)=> a+b,0)
);          


//ESERCIZIO 3
console.log("ESERCIZIO 3");
const numeri = [3, -1, 7, 10, -2, 5]
const numeriFiltrati = numeri.filter(n=>n>0)

console.log(numeriFiltrati
            .reduce((a,b)=>a+b,0) / numeriFiltrati.length
);

// ESERCIZIO 4
console.log("ESERCIZIO 4");
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(

array1.filter(e => array2.includes(e))

);  

//ESERCIZIO 5
console.log("ESERCIZIO 5");
const parole = ['ciao', 'mondo', 'ciao', 'javascript'];

console.log(

    parole.filter(
        (parola,index,array)=> array.indexOf(parola)===index)


    
);
