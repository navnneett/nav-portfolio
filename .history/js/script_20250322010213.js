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


document.addEventListener("DOMContentLoaded", function () {
    // Navbar Link Handling: Prevent underline for About on the landing page
    const aboutLink = document.querySelector('.nav-links li a[href="/html/about.html"]');

    // Ensure the element exists before trying to add or remove the class
    if (aboutLink) {
        // Check if we are on the About page
        if (window.location.pathname.includes("/about.html")) {
            // Add the active class for About to show underline
            aboutLink.classList.add('active-about');
            console.log("On About page, adding 'active-about' class to About link");
        } else {
            // Remove the active class for About on other pages
            aboutLink.classList.remove('active-about');
            console.log("On another page, removing 'active-about' class from About link");
        }
    } else {
        console.log("About link not found.");
    }
});






//Projects
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
    // Get all category list items
    const categories = document.querySelectorAll('.categories li');
    
    // Check if "All" category is selected and handle its behavior
    if (category !== 'All') {
        categories.forEach(cat => {
            // Add active class to the clicked category
            if (cat.textContent.trim() === category) {
                cat.classList.add('active');
            } else {
                // Remove active class from other categories
                cat.classList.remove('active');
            }
        });
    } else {
        // If 'All' category is selected, leave it as active
        categories.forEach(cat => {
            cat.classList.remove('active');
        });
        // Add active class to the "All" category
        document.querySelector('.categories li:first-child').classList.add('active');
    }

    // Filter the project cards based on the selected category
    const allProjects = document.querySelectorAll('.all-project-card');
    allProjects.forEach(project => {
        const projectCategory = project.getAttribute('data-category');
        if (category === 'All' || projectCategory === category) {
            project.style.display = 'flex'; // Show the project
        } else {
            project.style.display = 'none'; // Hide the project
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

        // Add the 'clicked' class to prevent scaling after the first click
        magicButton.classList.add('clicked');

        // After 7 seconds, revert back to bunny and show the button again
        setTimeout(function() {
            bunnyImg.src = '/img/landing-page/bunny.png'; // Revert to the bunny image
            magicButton.style.display = 'block'; // Show the button again
            magicButton.classList.remove('clicked'); // Remove 'clicked' class to allow hover effect again
        }, 7000); // 7 seconds delay
    } else {
        console.log("Bunny image or magic button not found.");
    }
}


//Email
function copyEmail() {
    const email = "navneet-aulakh@outlook.com"; // Replace with your actual email address
    navigator.clipboard.writeText(email).then(() => {
        // Provide feedback after copying
        alert("Email copied to clipboard!");
        
        // Optionally add an active class to the email icon
        const emailIcon = document.getElementById("email-icon");
        emailIcon.classList.add("active");
        
        // Remove the active state after 1 second (for visual effect)
        setTimeout(() => {
            emailIcon.classList.remove("active");
        }, 1000);
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
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