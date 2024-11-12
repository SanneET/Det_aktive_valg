"use strict";

const endpoint = 'json/jsondata.json';


/* Erklære en variabel som refererer til knappen med ID'et valgEtBtn */
const fetchValgEtBtn = document.getElementById('valgEtBtn');

const fetchValgToBtn = document.getElementById('valgToBtn');

const videoElement = document.getElementById('video');

fetchValgEtBtn.addEventListener('click', function() {
    fetch(endpoint)
        .then(response => response.json())
        .then(jsonData => {
            console.log("JSON data:", jsonData); // Tjek om JSON-dataene er korrekt hentet

            // Hvis jsonData er en liste, hent første element
            const videoData = Array.isArray(jsonData) ? jsonData[0] : jsonData;
            console.log("Video URL:", videoData.videoOne); // Tjek video-URL'en

            videoElement.innerHTML = ''; // Tøm eksisterende kilder

            const sourceElement = document.createElement('source');
            sourceElement.src = videoData.videoOne; // Sæt stien til videoen fra JSON
            sourceElement.type = 'video/mp4';

            videoElement.appendChild(sourceElement); // Tilføj source til videoelementet
            videoElement.load(); // Indlæs videoen
            videoElement.play(); // Afspil videoen med det samme
        });
});


/* Tilføjer en eventListner (lytter) til variablen: fetchValgToBtn */
fetchValgToBtn.addEventListener('click', function(){
    fetch(endpoint)
    .then(Response => Response.json()) //konvetere response til JSON-format.
    .then(jsonData => {
        videoElement.src = jsonData.videoOne;


        
    });
    
});

