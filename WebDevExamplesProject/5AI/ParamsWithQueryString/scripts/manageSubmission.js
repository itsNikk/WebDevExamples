document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    getParamsAndRedirect()
})


function getParamsAndRedirect() {
    const p1Value = document.getElementById("p1").value
    const p2Vlaue = document.getElementById("p2").value

    // Creo URL Query String
    const basePageURl = "pagina2.html?"
    const param1Name = "p1"
    const param2Name = "p2"
    const destionationURL = basePageURl + param1Name + "="
        + encodeURIComponent(p1Value) + "&" + param2Name + "="
        + encodeURIComponent(p2Vlaue)

    window.location.href = destionationURL
}