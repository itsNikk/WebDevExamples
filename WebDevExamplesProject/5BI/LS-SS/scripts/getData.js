document.addEventListener("DOMContentLoaded", function () {

    let p1 = sessionStorage.getItem("p1")
    let p2 = sessionStorage.getItem("p2")

    let params = document.querySelectorAll(".params")

    params[0].textContent = p1
    params[1].textContent = p2


})