"use strict";

const endpoint = 'json/jsondata.json';

/* Erklære en variabel som refererer til knappen med ID'et valgEtBtn */
const fetchValgEtBtn = document.getElementById('valgEtBtn');

const fetchValgToBtn = document.getElementById('valgToBtn');

const videoElement = document.getElementById('video');

fetchValgEtBtn.addEventListener('click', function() {
    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Netværksfejl: ' + response.status);
            }
            return response.json();
        })
        .then(jsonData => {
            // Forvent, at jsonData er en liste og hent første element (hvis JSON er et array)
            const videoData = jsonData[0]; // Brug kun dette, hvis JSON er en array
            // Hvis JSON er et objekt, brug jsonData.videoOne direkte uden [0]
            
            videoElement.innerHTML = ''; // Tøm eksisterende kilder

            const sourceElement = document.createElement('source');
            sourceElement.src = videoData.videoOne; // Opdater stien hvis videoOne er i jsonData
            sourceElement.type = 'video/mp4';

            videoElement.appendChild(sourceElement); // Tilføj source til videoelementet
            videoElement.load(); // Indlæs videoen
        })
});

/* Tilføjer en eventListner (lytter) til variablen: fetchValgToBtn */
fetchValgToBtn.addEventListener('click', function(){
    fetch(endpoint)
    .then(Response => Response.json()) //konvetere response til JSON-format.
    .then(jsonData => {
        videoElement.src = jsonData.videoOne;


        
    });
    
});

