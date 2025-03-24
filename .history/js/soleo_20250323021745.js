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




