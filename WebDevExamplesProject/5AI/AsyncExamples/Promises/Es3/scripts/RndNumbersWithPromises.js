function generateRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumber(minNum, maxNum, minDelayInSec, maxDelayInSec) {
    return new Promise((resolve, reject) => {
        if (minNum < 10 || maxNum > 100) reject(new RangeError("Inserire valori nel range [1,100]. Valori inseriti:" + minNum + ", " + maxNum))
        if (minDelayInSec < 1 || maxDelayInSec > 4) reject(new RangeError("Inserire valori nel range [1, 4]. Valori inseriti: (" + minDelayInSec + ", " + maxDelayInSec + ")"))

        setTimeout(
            () =>
                resolve(generateRandomNumberInRange(minNum, maxNum)),
            generateRandomNumberInRange(minDelayInSec * 1000, maxDelayInSec * 1000))
    })
}


let n1Elem = document.getElementById("number1")
let n2Elem = document.getElementById("number2")
let n3Elem = document.getElementById("number3")

//Location reload permette di eseguire il refresh della pagina. L'ho usato solo per automatizzare la visualizzazione, non è fondamentale.
setInterval(() => location.reload(), 5000)

generateRandomNumber(10, 100, 1, 4).then(res => n1Elem.textContent = res).catch(err => n1Elem.textContent = err.message)
generateRandomNumber(10, 100, -1, 4).then(res => n2Elem.textContent = res).catch(err => n2Elem.textContent = err.message)
generateRandomNumber(10, 100, 1, 4).then(res => n3Elem.textContent = res).catch(err => n3Elem.textContent = err.message)
