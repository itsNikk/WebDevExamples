document.addEventListener("DOMContentLoaded", function () {


    let p1 = new URLSearchParams(window.location.search).get("p1")
    let p2 = new URLSearchParams(window.location.search).get("p2")

    let params = document.querySelectorAll('.params')

    params[0].textContent = p1
    params[1].textContent = p2

    // usare i parametri come vuole l'applicazione X
})