document.addEventListener("DOMContentLoaded", function () {
    // Check if the section exists for the design rationale
    const section = document.getElementById('design-rationale');
    
    // If the section doesn't exist, log a message and return (do not run the observer)
    if (!section) {
        console.log('No design-rationale section found on this page.');
        return;
    }

    console.log("Intersection Observer is set up for #design-rationale");

    // Add an observer to detect when the section enters the viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Section is in view, adding 'visible' class");
                // Add the class 'visible' to trigger the fade-in effect
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    observer.observe(section);
});


//zoom in image
document.addEventListener('DOMContentLoaded', function() {
    const storyboardImage = document.querySelector('.storyboard-img');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-img');
    const closeButton = document.getElementById('close-btn');
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');

    let scale = 1; // Initial scale (zoom level)
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

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

    // Enable dragging of the fullscreen image
    fullscreenImage.addEventListener('mousedown', function(event) {
        isDragging = true;
        offsetX = event.clientX - fullscreenImage.offsetLeft;
        offsetY = event.clientY - fullscreenImage.offsetTop;
        fullscreenImage.style.cursor = 'grabbing'; // Change cursor to grabbing while dragging
        document.addEventListener('mousemove', dragImage);
        document.addEventListener('mouseup', stopDrag);
    });

    function dragImage(event) {
        if (isDragging) {
            fullscreenImage.style.left = `${event.clientX - offsetX}px`;
            fullscreenImage.style.top = `${event.clientY - offsetY}px`;
        }
    }

    function stopDrag() {
        isDragging = false;
        fullscreenImage.style.cursor = 'grab'; // Reset cursor to grab when dragging stops
        document.removeEventListener('mousemove', dragImage);
        document.removeEventListener('mouseup', stopDrag);
    }
});


let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-img');
    const totalSlides = slides.length;

    if (totalSlides === 0) return; // Guard clause: Exit if no slides are found

    // Update the currentIndex
    currentIndex += step;

    // Loop back to the start or end of the carousel if needed
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    // Update the carousel display
    const carouselImages = document.querySelector('.carousel-images');
    if (carouselImages) {
        carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Update dots
    updateDots();
}

function currentSlide(index) {
    currentIndex = index;
    const carouselImages = document.querySelector('.carousel-images');
    if (carouselImages) {
        carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Update dots
    updateDots();
}

// Update dot styles based on the current slide
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === currentIndex) {
            dot.classList.add('active-carousel');
        } else {
            dot.classList.remove('active-carousel');
        }
    });
}



//Character Design 
function showCharacter(characterId) {
    // Hide all carousel cells
    const allCarousels = document.querySelectorAll('.carousel-cell');
    allCarousels.forEach(carousel => carousel.style.display = 'none');

    // Show the selected character's carousel
    const selectedCarousel = document.getElementById('char' + characterId + '-carousel');
    if (selectedCarousel) {
        selectedCarousel.style.display = 'block';
    }
}
