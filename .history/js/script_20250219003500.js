document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Toggle menu visibility when hamburger is clicked
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');  // Toggle the 'active' class to show/hide the nav links
        });
    } else {
        console.log("Hamburger icon not found.");
    }

    // Close the menu when any link is clicked
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active'); // Hide the menu when a link is clicked
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Navbar Link Handling: Prevent underline for Projects on the landing page
    const projectsLink = document.querySelector('.nav-links li a[href="#projects"]');
    
    // Ensure the element exists before trying to add or remove the class
    if (projectsLink) {
        // Check if we are on the landing page (index.html)
        if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
            // Remove the active class for Projects on the landing page to prevent underline
            projectsLink.classList.remove('active');
            console.log("On the landing page, removing 'active' class from Projects link");
        } else {
            // Add the active class for other pages to show underline on the Projects link
            projectsLink.classList.add('active');
            console.log("On another page, adding 'active' class to Projects link");
        }
    } else {
        console.log("Projects link not found.");
    }
});




// Toggle the visibility of the project description when clicked
function toggleDescription(projectId) {
    const projectCard = document.getElementById(projectId);
    const allDescriptions = document.querySelectorAll('.project-description');
    
    if (projectCard) {
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
    } else {
        console.log("Project card not found.");
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

// Magic button interaction
function triggerMagic() {
    const bunnyImg = document.getElementById('bunny-img');
    const magicButton = document.getElementById('magic-button');

    if (bunnyImg && magicButton) {
        // Change bunny image to magic gif
        bunnyImg.src = '/img/landing-page/magic.gif'; 

        // Hide the button after the first click
        magicButton.style.display = 'none';

        // After 7 seconds, revert back to bunny and show the button again
        setTimeout(function() {
            bunnyImg.src = '/img/landing-page/bunny.png'; // Revert to the bunny image
            magicButton.style.display = 'block'; // Show the button again
        }, 7000); // 7 seconds delay
    } else {
        console.log("Bunny image or magic button not found.");
    }
}






// // Don't always need to remove 'active' class, since it won't be added if it is not triggered, 
// // can get rid of first part of if statement
// document.addEventListener("DOMContentLoaded", function () {
//     // Navbar Link Handling: Prevent underline for Projects on the landing page
//     const projectsLink = document.querySelector('UPDATE THIS WACK SELECTOR');
    
//     // // Check if we are on the landing page (index.html)
//     // if (window.location.pathname === "/html/index.html" || window.location.pathname === "/") {
//     //     // Remove the active class for Projects on the landing page to prevent underline
//     //     projectsLink.classList.remove('active');
//     //     console.log("On the landing page, removing 'active' class from Projects link");
//     // } else {
//         // Add the active class for other pages to show underline on the Projects link
//         if (window.location.pathname === "/projects/")
//             projectsLink.classList.add('active');
//         console.log("On another page, adding 'active' class to Projects link");
//         }   
//     // }
// });