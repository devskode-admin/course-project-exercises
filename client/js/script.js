document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:4000/technologies')
        .then(response => response.json())
        .then(data => displayTechnologies(data))
        .catch(error => console.error('Error fetching data:', error));
});

function displayTechnologies(technologies) {
    const technologyListBody = document.getElementById('technologyList');
    technologyListBody.innerHTML = "";

    technologies.data.forEach(tech => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${tech._id}</td><td>${tech.name}</td>`;
        technologyListBody.appendChild(row);
    });
}