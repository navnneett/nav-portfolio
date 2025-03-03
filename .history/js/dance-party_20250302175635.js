// Wait for the DOM to be fully loaded before attaching the click event listener
document.addEventListener('DOMContentLoaded', function() {
    const storyboardImage = document.querySelector('.storyboard-img');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-img');
    const closeButton = document.getElementById('close-btn');

    // Open the fullscreen overlay when the image is clicked
    storyboardImage.addEventListener('click', function() {
        fullscreenOverlay.style.display = 'flex';
        fullscreenImage.src = this.src;  // Set the full-screen image source to the clicked image
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
});
