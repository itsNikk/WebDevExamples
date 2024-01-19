document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    getParamsAndRedirect()
})


function getParamsAndRedirect() {
    const p1 =document.getElementById("p1").value
    const p2 =document.getElementById("p2").value

    const destionationURL = "pagina2.html?p1="
    +encodeURIComponent(p1) + "&p2="
    +encodeURIComponent(p2)

    window.location.href = destionationURL
}