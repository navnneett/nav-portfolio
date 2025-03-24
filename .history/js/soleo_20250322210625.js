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




// let currentIndex = 0;

// function moveSlide(step) {
//     const slides = document.querySelectorAll('.carousel-img');
//     const totalSlides = slides.length;

//     if (totalSlides === 0) return; // Guard clause: Exit if no slides are found

//     // Update the currentIndex
//     currentIndex += step;

//     // Loop back to the start or end of the carousel if needed
//     if (currentIndex >= totalSlides) {
//         currentIndex = 0;
//     } else if (currentIndex < 0) {
//         currentIndex = totalSlides - 1;
//     }

//     // Update the carousel display
//     const carouselImages = document.querySelector('.carousel-images');
//     if (carouselImages) {
//         carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }

//     // Update dots
//     updateDots();
// }

// function currentSlide(index) {
//     currentIndex = index;
//     const carouselImages = document.querySelector('.carousel-images');
//     if (carouselImages) {
//         carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }

//     // Update dots
//     updateDots();
// }

// // Update dot styles based on the current slide
// function updateDots() {
//     const dots = document.querySelectorAll('.dot');
//     dots.forEach((dot, i) => {
//         if (i === currentIndex) {
//             dot.classList.add('active-carousel');
//         } else {
//             dot.classList.remove('active-carousel');
//         }
//     });
// }
