document.getElementById('myForm').addEventListener("submit", function(event){
    event.preventDefault()

    GetParamsAndRedirect();
})


function GetParamsAndRedirect() {
    // Ottieni i valori dai campi del modulo
    var parametro1 = document.getElementById("parametro1").value;
    var parametro2 = document.getElementById("parametro2").value;

    // Costruzione l'URL con i parametri
    var urlDestinazione = "pagina2.html?parametro1=" 
    + encodeURIComponent(parametro1) + "&parametro2=" 
    + encodeURIComponent(parametro2);

    // Redirect alla seconda pagina
    window.location.href = urlDestinazione;
}

