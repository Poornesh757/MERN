// script.js

document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetch-button');
    const dataContainer = document.getElementById('data-container');

    fetchButton.addEventListener('click', () => {
        fetchData();
    });

    async function fetchData() {
        dataContainer.innerHTML = '<p>Loading...</p>'; // Show loading message

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayData(data);
        } catch (error) {
            dataContainer.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    }

    function displayData(data) {
        dataContainer.innerHTML = ''; // Clear previous data

        data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'data-item';
            div.innerHTML = `<h2>${item.title}</h2><p>${item.body}</p>`;
            dataContainer.appendChild(div);
        });
    }
});
