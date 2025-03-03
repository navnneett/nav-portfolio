document.getElementById('storyboard-img').addEventListener('click', function() {
    const isZoomed = this.classList.contains('zoomed'); // Check if the image is already zoomed
    
    // If already zoomed, remove the zoom class
    if (isZoomed) {
        this.classList.remove('zoomed');
    } else {
        // Otherwise, add the zoom class
        this.classList.add('zoomed');
    }
});
