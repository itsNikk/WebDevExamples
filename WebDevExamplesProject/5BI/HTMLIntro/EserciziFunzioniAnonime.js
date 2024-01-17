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
function calcolaEtaMedia(objArray, calc) {
    let sommaEta = 0;
    for (const elem of objArray) {
        sommaEta += calc(elem)
    }
    return sommaEta / objArray.length
}

const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 22},
];

console.log(calcolaEtaMedia(people, person => person.age))