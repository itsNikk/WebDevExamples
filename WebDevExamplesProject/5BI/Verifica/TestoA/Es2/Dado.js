document.getElementById("lanciaDadoBtn").addEventListener("click", function () {
    let faces = document.getElementById("userInput").value
    if (faces > 12 || faces < 3 || faces < 0)
        alert("Inserire valore positivo e nell'intervallo [3,12]")
    else {
        document.getElementById("result").textContent
            = parseInt(((Math.random() * faces) + 1)).toString()
    }
});
