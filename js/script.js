document.addEventListener("DOMContentLoaded", function () {
    // Navbar Link Handling: Prevent underline for Projects on the landing page
    const projectsLink = document.querySelector('.nav-links li a[href="#projects"]');
    
    // Check if we are on the landing page (index.html)
    if (window.location.pathname === "/html/index.html" || window.location.pathname === "/") {
        // Remove the active class for Projects on the landing page to prevent underline
        projectsLink.classList.remove('active');
        console.log("On the landing page, removing 'active' class from Projects link");
    } else {
        // Add the active class for other pages to show underline on the Projects link
        projectsLink.classList.add('active');
        console.log("On another page, adding 'active' class to Projects link");
    }
});


// Toggle the visibility of the project description when clicked
function toggleDescription(projectId) {
    const projectCard = document.getElementById(projectId);
    const allDescriptions = document.querySelectorAll('.project-description');
    
    // Close all descriptions
    allDescriptions.forEach(desc => {
        if (desc !== projectCard) {
            desc.style.display = 'none';
        }
    });
    
    // Toggle the clicked project description
    if (projectCard.style.display === 'block') {
        projectCard.style.display = 'none';
    } else {
        projectCard.style.display = 'block';
    }
}


// Function to filter the projects based on category selection
function filterProjects(category) {
    // First, toggle active class
    const categories = document.querySelectorAll('.categories li');
    categories.forEach(cat => {
        if (cat.textContent.trim() === category) {
            cat.classList.add('active');
        } else {
            cat.classList.remove('active');
        }
    });

    // Now filter the project cards based on the category selected
    const allProjects = document.querySelectorAll('.all-project-card');
    allProjects.forEach(project => {
        const projectCategory = project.getAttribute('data-category');
        if (category === 'All' || projectCategory === category) {
            project.style.display = 'flex';
        } else {
            project.style.display = 'none';
        }
    });
}

function triggerMagic() {
    const bunnyImg = document.getElementById('bunny-img');
    const magicButton = document.getElementById('magic-button');

    // Change bunny image to magic gif
    bunnyImg.src = '/img/landing-page/magic.gif'; 

    // Hide the button after the first click
    magicButton.style.display = 'none';

    // After 7 seconds, revert back to bunny and show the button again
    setTimeout(function() {
        bunnyImg.src = '/img/landing-page/bunny.png'; // Revert to the bunny image
        magicButton.style.display = 'block'; // Show the button again
    }, 7000); // 7 seconds delay
}
