document.addEventListener('submit', function (ev) {
    ev.preventDefault()

    let newUserName = document.getElementById('username').value
    let newPassword = document.getElementById('password').value

    let users = JSON.parse(localStorage.getItem('users')) || []

    //check if present
    let isAlreadyRegistered = users.some(user => user.username === newUserName)

    if (isAlreadyRegistered) {
        console.log('Errore in registrazione')
    } else {
        let newUser = {username: newUserName, password: newPassword}

        users.push(newUser)

        localStorage.setItem('users',JSON.stringify(users))

        window.location.href = 'index.html'
    }

})