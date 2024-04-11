function factorial(num) {
    return new Promise((resolve, reject) => {
        if (num < 0) reject(new RangeError('Il numero deve essere positivo. Numero inserito: ' + num));

        let fattoriale = 1;
        for (let i = 2; i <= num; i++) fattoriale *= i;

        resolve(fattoriale);
    });
}

const tries = 20
const min = -25;
const max = 25;

for (let i = 0; i < tries; i++) {
    const numberToCompute = Math.floor(Math.random() * (max - min) + min);
    factorial(numberToCompute)
        .then(computedFactorial => console.log('Il fattoriale di', numberToCompute, 'è:', computedFactorial))
        .catch(err => console.log(err.message))
}