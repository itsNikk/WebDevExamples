document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('registerBtn').addEventListener("click", function () {
        window.location.href = "register.html"
    })
})


document.getElementById('loginForm').addEventListener("submit", function (ev) {
    ev.preventDefault();

    let users = JSON.parse(localStorage.getItem('users')) || []
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let loginForm = document.getElementById('loginForm')

    let isValidUser = users.some(function (user) {
        return user.username === username && user.password === password;
    })

    if (isValidUser) {

        sessionStorage.setItem('isLoggedIn', 'true')
        sessionStorage.setItem('username', username)

        window.location.href = "privateArea.html"
    } else {
        let div = document.createElement('div')
        div.className = "alert alert-danger"
        div.appendChild(document.createTextNode("Credenziali non valide"))
        document.querySelector(".container").insertBefore(div, loginForm)

        setTimeout(() => document.querySelector(".alert").remove(), 2000)
    }
})