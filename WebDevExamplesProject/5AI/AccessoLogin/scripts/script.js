function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    errorMessage.textContent = ""; // Resetta eventuali messaggi di errore precedenti

    if (username === "") {
        errorMessage.textContent = "Inserisci la username.";
    } else if (password.length < 5 || password.length > 8) {
        errorMessage.textContent = "La password deve essere lunga tra 5 e 8 caratteri.";
    } else {
        // Semplice feedback. 
        //Si potrebbe rimandare ad un'altra pagina html o altro ma per ora va bene così.
        alert("Login avvenuto con successo!");
        document.querySelector('#loginForm').reset()
    }
}

function resetForm() {
    document.getElementById("loginForm").reset();
    document.getElementById("error-message").textContent = "";
}
