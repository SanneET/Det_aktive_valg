"use strict";

    // Function to fetch JSON and set the video source
    async function setVideoSource() {
        try {
            // Fetch the JSON data
            const response = await fetch('json/jsondata.json');
            const data = await response.json();
            
            // Get the video source path from the JSON data
            const videoSrc = data[0].videoOne;

            // Select the video element
            const video = document.getElementById('video');

            // Create a source element and set its src and type
            const source = document.createElement('source');
            source.src = videoSrc;
            source.type = 'video/mp4';  // Adjust the type as needed

            // Append the source element to the video element
            video.appendChild(source);


            // Load the video with the new source
            video.load();
            video.play();
        } catch (error) {
            console.error('Error fetching or setting video source:', error);
        }
    }

    // Call the function when the page loads
    window.onload = setVideoSource;
    /*const video = document.getElementById('video');
    video.play();*/