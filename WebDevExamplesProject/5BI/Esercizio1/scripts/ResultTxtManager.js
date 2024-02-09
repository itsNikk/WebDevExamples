document.addEventListener("DOMContentLoaded", function () {
    let resultTxt = document.getElementById("result");
    resultTxt.addEventListener("dblclick", function () {
        resultTxt.textContent = "0"
    })
})