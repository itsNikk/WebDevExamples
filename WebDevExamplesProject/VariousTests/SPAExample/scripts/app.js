function changePage(page) {
    // Carica dinamicamente il contenuto della pagina richiesta
    fetchPageContent(page, function (content) {
        document.getElementById('main-content').innerHTML = content;
    });
}

// Funzione per caricare dinamicamente il contenuto della pagina
function fetchPageContent(page, callback) {
    // Simula una richiesta per ottenere il contenuto della pagina
    setTimeout(function () {
        let content = '';

        if (page === 'home') {
            content = '<h2>Welcome to the Home Page</h2><p>This is the home page content.</p>';
        } else if (page === 'about') {
            content = '<h2>About Us</h2><p>This is the about page content.</p>';
        }

        callback(content);
    }, 500); // Simula il ritardo di una richiesta Web
}

// Carica la home page di default all'avvio
document.addEventListener('DOMContentLoaded', function () {
    changePage('home');
});
