let resultTxt;

document.addEventListener("DOMContentLoaded", function () {

    let plusBtn = document.getElementById("plusBtn")
    let minusBtn = document.getElementById("minusBtn")
    resultTxt = document.getElementById("result")

    plusBtn.addEventListener("click", function () {
        updateValue(1)
    })

    plusBtn.addEventListener("contextmenu", function (e){
        e.preventDefault()
        updateValue(2)
    })

    minusBtn.addEventListener("click", function () {
        updateValue(-1)
    })

    minusBtn.addEventListener("contextmenu", function (e){
        e.preventDefault()
        updateValue(-2)
    })


})

function updateValue(v) {
    resultTxt.textContent = parseInt(resultTxt.textContent) + v
}
