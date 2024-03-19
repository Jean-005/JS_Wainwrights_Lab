 // Function to fetch data from API

 async function getAllWainwrights() {
        const response = await fetch('https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json');
        allWainwrightsData = await response.json();
        createWainwrightsList();
    } 
