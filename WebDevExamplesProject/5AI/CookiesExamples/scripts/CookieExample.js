document.addEventListener("DOMContentLoaded", function () {

    setCookie("username", "JonDoe", 7)
    console.log(document.cookie)
})


function setCookie(cookieName, value, days) {
    let exprires = ''
    let date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    exprires = "; expires=" + date.toUTCString()

    document.cookie = cookieName + "=" + encodeURI(value) + ";" + exprires + "; path=/;"
}

