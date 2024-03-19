 // Function to fetch data from API

 async function getAllWainwrights() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json');
        allWainwrightsData = await response.json();
        createWainwrightsList();
    } catch (error) {
        console.error('There was an error fetching Wainwrights Data:', error);
    }
}

//Function to create a series of HTML elements

function createWainwrightsList() {
    const wainwrightsList = document.getElementById('wainwrights-list');

    allWainwrightsData.forEach(wainwright => {
        const wainwrightItem = document.createElement('li');
        wainwrightItem.textContent = `${wainwright.name} - Height: ${wainwright.height}m, Area: ${wainwright.area}`;
        wainwrightsList.appendChild(wainwrightItem);
    });
}






