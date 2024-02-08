document.addEventListener('DOMContentLoaded', managePrivateArea)

let tot = 3
let countdownAttuale = tot


function updateCountDown() {
    let countdownElem = document.getElementById('countdown');
    countdownElem.textContent = "Redirect in " + countdownAttuale

    if (countdownAttuale === 0) {
        window.location.href = 'index.html'
    } else {
        countdownAttuale--
        setTimeout(updateCountDown, 1000)
    }
}

function managePrivateArea() {

    if (!sessionStorage.getItem('isLoggedIn')) {
        document.getElementById('welcomeText').textContent = "You're not logged in!"
        //redirect to index.html after 3 seconds here.
        updateCountDown()
    } else {
        let username = sessionStorage.getItem('username')
        document.getElementById('welcomeText').textContent = "Welcome to your private area, " + username
        let backHomeLink = document.createElement("a")
        backHomeLink.appendChild(document.createTextNode("Go back home"))
        backHomeLink.setAttribute("href", "index.html")

        document.body.appendChild(backHomeLink)
    }
}
