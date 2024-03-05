document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault()

        getParamsAndRedirect()

    })
})

function getParamsAndRedirect() {
    const p1Value = document.getElementById("par1").value
    const p2Value = document.getElementById("par2").value

    // Creo URL query string
    const baseURL = "pagina2.html?"
    const param1Name = "par1"
    const param2Name = "par2"

    window.location.href = baseURL + param1Name + "=" + encodeURIComponent(p1Value) + "&" +
        param2Name + "=" + encodeURIComponent(p2Value)
}