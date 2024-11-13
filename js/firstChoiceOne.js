"use strict";

// Function to fetch JSON and set the video source
async function setVideoSource() {
    try {
        // Fetch the JSON data
        const response = await fetch('json/jsondata.json');
        const data = await response.json();
        
        // Get the video source path for "videorubroed" from the JSON data
        const videoSrc = data[1].videorubroed;  // Access the second object for "videorubroed" video

        // Select the video element
        const video = document.getElementById('video');

        // Clear any existing source elements to avoid multiple sources
        video.innerHTML = '';

        // Create a new source element and set its src and type
        const source = document.createElement('source');
        source.src = videoSrc;
        source.type = 'video/mp4';

        // Append the source element to the video element
        video.appendChild(source);

        // Load and play the video
        video.load();
        video.play();
    } catch (error) {
        console.error('Error fetching or setting video source:', error);
    }
}

// Call the function when the page loads
window.onload = setVideoSource;

// After 3 seconds (3000 milliseconds), add the 'show' class to the element
setTimeout(() => {
    document.getElementById("flexId").classList.add("show");
  }, 37000);