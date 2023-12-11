const pdfFolder = 'https://romanrios.github.io/caclinks/docs/';
const pdfListElement = document.getElementById('pdfList');

function cleanUpFileName(fileName) {
    // Decodificar la URL y extraer el nombre del archivo
    const decodedFileName = decodeURIComponent(fileName);
    const parts = decodedFileName.split('/');  // Dividir por barras para manejar URLs con directorios

    // Obtener el último fragmento como nombre del archivo
    return parts[parts.length - 1];
}

function loadPDFList() {
    fetch(pdfFolder)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(data, 'text/html');
            const files = htmlDocument.querySelectorAll('a');

            const pdfFiles = Array.from(files)
                .filter(file => file.href.endsWith('.pdf'))
                .map(file => file.href);

            pdfFiles.forEach(pdf => {
                const listItem = document.createElement('li');
                const cleanedFileName = cleanUpFileName(pdf);
                listItem.innerHTML = `<a href="${pdf}" target="_blank">${cleanedFileName}</a>`;
                pdfListElement.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error al cargar la lista de archivos:', error));
}

loadPDFList();
