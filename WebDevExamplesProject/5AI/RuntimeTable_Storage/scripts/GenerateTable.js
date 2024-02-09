document.addEventListener('DOMContentLoaded', function () {

    let datiSessionStorage = sessionStorage.getItem('datiTabella');
    const dati = datiSessionStorage ? JSON.parse(datiSessionStorage) : [];

    if (dati.length === 0) {
        alert('Nessun dato disponibile. Torna alla pagina precedente per crearne qualcuno.');
        return;
    }

    const table = document.createElement('table');

    // Headings
    const headerRow = table.insertRow();
    for (const key in dati[0]) {
        const headerCell = document.createElement('th');
        headerCell.textContent = key;
        headerRow.appendChild(headerCell);
    }

    // Insert data
    for (const record of dati) {
        const row = table.insertRow();
        for (const key in record) {
            const cell = row.insertCell();
            cell.textContent = record[key];
        }
    }

    document.body.appendChild(table);
});