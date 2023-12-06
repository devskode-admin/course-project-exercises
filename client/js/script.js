document.addEventListener('DOMContentLoaded', function () {
    // Al cargar la página, realiza la solicitud a la API
    fetch('http://localhost:4000/professionals')
        .then(response => response.json())
        .then(data => displayTechnologies(data))
        .catch(error => console.error('Error fetching data:', error));
});

function displayTechnologies(technologies) {
    const technologyList = document.getElementById('technologyList');

    // Recorre la lista de tecnologías y crea elementos de lista
    technologies.forEach(tech => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${tech.id}, Nombre: ${tech.nombre}`;
        technologyList.appendChild(listItem);
    });
}