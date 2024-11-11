"use strict";

const endpoint = 'json/jsondata.json';

/* Erklære en variabel som refererer til knappen med ID'et valgEtBtn */
const fetchValgEtBtn = document.getElementById('valgEtBtn');

const fetchValgToBtn = document.getElementById('valgToBtn');

/* Tilføjer en eventListner (lytter) til variablen: fetchValgEtBtn */
fetchValgEtBtn.addEventListener('click', function(){
    fetch(endpoint)
    .then(Response => Response.json()) //konvetere response til JSON-format.
    .then(jsonData => {

    })});

/* Tilføjer en eventListner (lytter) til variablen: fetchValgToBtn */
fetchValgToBtn.addEventListener('click', function(){
    fetch(endpoint)
    .then(Response => Response.json()) //konvetere response til JSON-format.
    .then(jsonData => {
    
    });
    
});
