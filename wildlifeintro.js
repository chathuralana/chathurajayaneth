// JavaScript code to fetch data from JSON file and update HTML

// Function to fetch data from JSON file
function fetchData() {
    fetch('wildlifeintro.json')
    .then(response => response.json())
    .then(data => {
        // Call functions to update HTML with fetched data
        updateSinharaja(data[0]);
        updateHortonPlains(data[1]);
        updateKumana(data[2]);
        updateUdawalawa(data[3]);
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Function to update HTML for Sinharaja Rain forest section
function updateSinharaja(data) {
    document.getElementById('header1').textContent = data.header;
    document.getElementById('parag1').textContent = data.paragraph;
    document.getElementById('img1').src = data.images[0].src;
    document.getElementById('img2').src = data.images[1].src;
    document.getElementById('img3').src = data.images[2].src;
    document.getElementById('img4').src = data.images[3].src;
    document.getElementById('map1').src = data.map;
}

// Function to update HTML for Horton Plains section
function updateHortonPlains(data) {
    document.getElementById('header2').textContent = data.header;
    document.getElementById('parag2').textContent = data.paragraph;
    document.getElementById('img5').src = data.images[0].src;
    document.getElementById('img6').src = data.images[1].src;
    document.getElementById('img7').src = data.images[2].src;
    document.getElementById('img8').src = data.images[3].src;
    document.getElementById('map2').src = data.map;
}

// Function to update HTML for Kumana National Park section
function updateKumana(data) {
    document.getElementById('header3').textContent = data.header;
    document.getElementById('parag3').textContent = data.paragraph;
    document.getElementById('img9').src = data.images[0].src;
    document.getElementById('img10').src = data.images[1].src;
    document.getElementById('img11').src = data.images[2].src;
    document.getElementById('img12').src = data.images[3].src;
    document.getElementById('map3').src = data.map;
}

// Function to update HTML for Udawalawa National Park section
function updateUdawalawa(data) {
    document.getElementById('header4').textContent = data.header;
    document.getElementById('parag4').textContent = data.paragraph;
    document.getElementById('img13').src = data.images[0].src;
    document.getElementById('img14').src = data.images[1].src;
    document.getElementById('img15').src = data.images[2].src;
    document.getElementById('img16').src = data.images[3].src;
    document.getElementById('map4').src = data.map;
}

// Call the fetchData function when the page loads
fetchData();
