document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("myForm").addEventListener("submit", function (e) {
        e.preventDefault()

        formSubmission()
    })

})

function formSubmission() {
    console.log("here")
    let p1 = document.getElementById("par1").value
    let p2 = document.getElementById("par2").value

    sessionStorage.setItem("p1", p1)
    sessionStorage.setItem("p2", p2)

    window.location.href = "pagina2.html"
}