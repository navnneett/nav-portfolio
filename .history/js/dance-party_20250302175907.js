// Wait for the DOM to be fully loaded before attaching the click event listener
document.addEventListener('DOMContentLoaded', function() {
    const storyboardImage = document.querySelector('.storyboard-img');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-img');
    const closeButton = document.getElementById('close-btn');
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');

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

    // Zoom In button
    zoomInButton.addEventListener('click', function() {
        scale += 0.1;
        scale = Math.min(scale, 3); // Limit zoom to 3x
        fullscreenImage.style.transform = `scale(${scale})`;
    });

    // Zoom Out button
    zoomOutButton.addEventListener('click', function() {
        scale -= 0.1;
        scale = Math.max(scale, 1); // Limit zoom to 1x
        fullscreenImage.style.transform = `scale(${scale})`;
    });
});
