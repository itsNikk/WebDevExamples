document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    let righeParam = params.get('righe');
    /*
    * Operatore ternario
    * if (righeParam != null) then righe = parseInt(righeparam) else righe = 2
    * */
    const righe = righeParam ? parseInt(righeParam) : 2;
    let colsParam = params.get('colonne');
    const colonne = colsParam ? parseInt(colsParam) : 2;

    const table = document.createElement('table');
    for (let i = 0; i < righe; i++) {
        const row = table.insertRow();
        for (let j = 0; j < colonne; j++) {
            const cell = row.insertCell();
            cell.textContent = Math.floor(Math.random() * 100).toString(); // Valori random
        }
    }

    document.body.appendChild(table);
});