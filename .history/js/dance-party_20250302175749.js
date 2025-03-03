// Wait for the DOM to be fully loaded before attaching the click event listener
document.addEventListener('DOMContentLoaded', function() {
    const storyboardImage = document.querySelector('.storyboard-img');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-img');
    const closeButton = document.getElementById('close-btn');

    let scale = 1; // Initial scale (zoom level)

    // Open the fullscreen overlay when the image is clicked
    storyboardImage.addEventListener('click', function() {
        fullscreenOverlay.style.display = 'flex';
        fullscreenImage.src = this.src;  // Set the full-screen image source to the clicked image
        scale = 1; // Reset zoom when a new image is clicked
        fullscreenImage.style.transform = `scale(${scale})`; // Apply initial zoom level
    });

    // Close the fullscreen overlay when the close button is clicked
    closeButton.addEventListener('click', function() {
        fullscreenOverlay.style.display = 'none';
    });

    // Close the fullscreen overlay if the user clicks anywhere outside the image
    fullscreenOverlay.addEventListener('click', function(event) {
        if (event.target === fullscreenOverlay) {
            fullscreenOverlay.style.display = 'none';
        }
    });

    // Zoom in and out using the mouse wheel while in fullscreen
    fullscreenImage.addEventListener('wheel', function(event) {
        if (event.deltaY < 0) {
            // Scroll up (zoom in)
            scale += 0.1;
        } else {
            // Scroll down (zoom out)
            scale -= 0.1;
        }

        // Ensure the scale is within a reasonable range
        scale = Math.min(Math.max(1, scale), 3); // Limit the zoom between 1x and 3x

        fullscreenImage.style.transform = `scale(${scale})`; // Apply the zoom
    });
});
