function factorial(num) {
    return new Promise((resolve, reject) => {
        if (num < 0) reject(new RangeError("Il numero deve essere positivo. Numero inserito: " + num))

        let fattoriale = 1;
        for (let i = 2; i < num; i++) fattoriale *= i

        resolve(fattoriale)
    })
}

let tries = 20
let min = -20
let max = 20

for (let i = 0; i < tries; i++) {
    let extractedVal = Math.floor(Math.random() * (max - min) + min)
    factorial(extractedVal)
        .then(computedFactorial => console.log("Il fattoriale di " + extractedVal + " è: " + computedFactorial))
        .catch(error => console.log(error.message))
}