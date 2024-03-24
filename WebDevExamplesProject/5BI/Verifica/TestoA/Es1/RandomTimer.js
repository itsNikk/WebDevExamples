let n1Elem = document.getElementById("n1")
let n2Elem = document.getElementById("n2")
let tempoElem = document.getElementById("tempoRimasto")
let resultElem = document.getElementById("result")


let remainingTime = 3;
let n1Value;
let n2Value;

function ManageTimer() {
    if (remainingTime > 0) {
        tempoElem.textContent = "Tempo rimasto: " + (remainingTime--).toString()
        n1Value = parseInt((Math.random() * 100) + 1);
        n1Elem.textContent = "n1: " + n1Value
        n2Value = parseInt((Math.random() * 100) + 1);
        n2Elem.textContent = "n2: " + n2Value
    } else {
        resultElem.textContent = "Risultato: " + (n2Value + n1Value)
    }
}

setInterval(ManageTimer, 1000)