let resultElem = document.getElementById("result")

document.getElementById("genPswdBtn").addEventListener("click", function () {

    resultElem.textContent = ''

    let pswLength = document.getElementById("pswLength").value
    for (let i = 0; i < pswLength; i++) {
        resultElem.textContent += parseInt((Math.random() * 9) + 1)
    }

})