let imcElem = document.getElementById("result")

document.getElementById("calcolaBtn").addEventListener("click", function () {

    let peso = parseFloat(document.getElementById("kg").value)
    let altezza = parseFloat(document.getElementById("height").value)
    let imc = peso / (altezza * altezza)

    console.log(imc)

    if (imc < 18.5) imcElem.textContent = "Sottopeso"
    else if (imc < 24.9) imcElem.textContent = "Normopeso"
    else if (imc < 29.9) imcElem.textContent = "Sovrappeso"
    else imcElem.textContent = "Obeso"
})