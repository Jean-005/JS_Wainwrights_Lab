let allWainwrightsData;

// Function to fetch data from API
const getAllWainwrights = async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json');
        allWainwrightsData = await response.json();
        createWainwrightsList();
    } catch (error) {
        console.error('There was an error fetching Wainwrights Data:', error);
    }
}

//Function to create a series of HTML elements
const createWainwrightsList = () => {
    const wainwrightsList = document.getElementById('wainwrights-list');

    allWainwrightsData.forEach(wainwright => {
        const wainwrightItem = document.createElement('li');
        wainwrightItem.textContent = `${wainwright.name} - height: ${wainwright.heightMetres}m, area: ${wainwright.area.areaName}`;
        wainwrightsList.appendChild(wainwrightItem);
    });
}

// Function for form submission plus filtering 
const handleFormSubmit = (event) => {
    event.preventDefault();

    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredWainwrights = allWainwrightsData.filter(wainwright =>
        wainwright.name.toLowerCase().includes(searchInput) ||
        wainwright.heightMetres.toString().includes(searchInput) ||
        wainwright.area.areaName.toLowerCase().includes(searchInput)
    );

    displayFilteredWainwrights(filteredWainwrights);
}
// Event listener for form submission
const form = document.getElementById('search-form');
form.addEventListener('submit', handleFormSubmit);

// Function for displaying filtered Wainwrights 
const displayFilteredWainwrights = (filteredWainwrights) => {
    const wainwrightsList = document.getElementById('wainwrights-list');
    wainwrightsList.innerHTML = '';

    filteredWainwrights.forEach(wainwright => {
        const wainwrightItem = document.createElement('li');
        wainwrightItem.textContent = `${wainwright.name} - height: ${wainwright.heightMetres}m, area: ${wainwright.area.areaName}`;
        wainwrightsList.appendChild(wainwrightItem);
    });
}

getAllWainwrights();



