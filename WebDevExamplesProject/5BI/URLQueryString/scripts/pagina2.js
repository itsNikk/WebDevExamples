document.addEventListener("DOMContentLoaded", function () {

    console.log(window.location.search)
    let p1 = new URLSearchParams(window.location.search).get("par1")
    let p2 = new URLSearchParams(window.location.search).get("par2")

    let params = document.querySelectorAll(".params")

    params[0].textContent = p1
    params[1].textContent = p2

})