document.addEventListener("DOMContentLoaded", BindButtons)

function redirectTo(pageName) {
    window.location.href = pageName
}

function BindButtons() {
    document.getElementById("loginBtn").addEventListener("click", function () {
        redirectTo('login.html')
    })
    document.getElementById("registerBtn").addEventListener("click", function () {
        redirectTo('register.html')
    })
}



