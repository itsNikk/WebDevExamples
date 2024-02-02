document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    getParamsAndRedirect()
})


function getParamsAndRedirect() {
    const p1 =document.getElementById("p1").value
    const p2 =document.getElementById("p2").value

    const basePageURl = "pagina2.html?"
    const param1Name = "p1"
    const param2Name = "p2"
    const destionationURL = basePageURl+param1Name+"="
    +encodeURIComponent(p1) + "&"+param2Name+"="
    +encodeURIComponent(p2)

    window.location.href = destionationURL
}