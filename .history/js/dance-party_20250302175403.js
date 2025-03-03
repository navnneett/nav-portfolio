// Wait for the DOM to be fully loaded before attaching the click event listener
document.addEventListener('DOMContentLoaded', function() {
    const storyboardImage = document.querySelector('.storyboard-img');

    storyboardImage.addEventListener('click', function() {
        this.classList.toggle('zoomed');
    });
});
