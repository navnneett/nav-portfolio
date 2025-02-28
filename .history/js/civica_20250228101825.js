document.addEventListener("DOMContentLoaded", function () {
    // Check if the section exists for the design rationale
    const section = document.getElementById('design-rationale');
    
    if (!section) {
        console.log('No design-rationale section found on this page.');
        return;
    }

    // Setup Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                console.log('Design Rationale section is visible.');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 }); // Set lower threshold for earlier detection

    observer.observe(section);
});


let currentCategory = 'user-persona'; // Default category displayed

function changeCategory(category) {
    // Remove active class from all categories
    const categories = document.querySelectorAll('.category-item');
    categories.forEach(cat => cat.classList.remove('active'));

    // Add active class to the clicked category
    const selectedCategory = document.getElementById(category);
    selectedCategory.classList.add('active');

    // Hide all carousel containers
    const carouselContainers = document.querySelectorAll('.carousel-container');
    carouselContainers.forEach(container => container.style.display = 'none');

    // Show the selected category's carousel
    const selectedCarousel = document.getElementById(`${category}-carousel`);
    selectedCarousel.style.display = 'block';

    // Reset the current category and index
    currentCategory = category;
    currentIndex = 0;

    // Generate dots based on the number of images in the selected category
    generateDots(currentCategory);
    updateDots();
    showSlide(currentIndex);
}

function generateDots(category) {
    const carouselImages = document.querySelectorAll(`#${category}-carousel .carousel-img`);
    const dotsContainer = document.querySelector(`#${category}-carousel .carousel-dots`);
    dotsContainer.innerHTML = ''; // Clear existing dots

    carouselImages.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.onclick = () => currentSlide(index);
        dotsContainer.appendChild(dot);
    });
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

function showSlide(index) {
    const carouselImages = document.querySelectorAll(`#${currentCategory}-carousel .carousel-img`);
    const totalSlides = carouselImages.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Hide all images in the selected carousel
    carouselImages.forEach(img => img.style.display = 'none');

    // Show the current image
    carouselImages[currentIndex].style.display = 'block';

    // Update the active dot
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll(`#${currentCategory}-carousel .dot`);
    dots.forEach((dot, i) => {
        if (i === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Initialize the default category (User Persona)
changeCategory('user-persona');



//Splide 
var splide = new Splide( '.splide' );
  var bar    = splide.root.querySelector( '.my-carousel-progress-bar' );
  
  // Updates the bar width whenever the carousel moves:
  splide.on( 'mounted move', function () {
    var end  = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min( ( splide.index + 1 ) / end, 1 );
    bar.style.width = String( 100 * rate ) + '%';
  } );
  
  splide.mount();