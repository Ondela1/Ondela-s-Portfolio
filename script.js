document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    };

    // Typed.js for dynamic text
    const typed = new Typed('.multiple-text', {
        strings: ['Web Developer', 'App Developer', 'Database(SQL)', 'Front&Backend Developer', 'YouTuber'],
        typeSpeed: 90,
        backSpeed: 90,
        backDelay: 1200,
        loop: true,
    });

    // "Download CV" button functionality
    const downloadCvBtn = document.getElementById('download-cv');
    downloadCvBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const cvPath = this.getAttribute('href');
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = 'Ondela_Citywayo_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // "Read More" button functionality for About section
    const aboutReadMoreBtn = document.querySelector('.about .read-more-btn');
    const moreAboutContent = document.getElementById('more-about-content');

    if (aboutReadMoreBtn && moreAboutContent) {
        aboutReadMoreBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            if (moreAboutContent.style.display === 'none') {
                moreAboutContent.style.display = 'block'; // Show the content
                this.textContent = 'Read Less'; // Change button text
            } else {
                moreAboutContent.style.display = 'none'; // Hide the content
                this.textContent = 'Read More'; // Change button text back
            }
        });
    }

    // Example of what your script.js might have
const readMoreBtns = document.querySelectorAll('.read-more-btn');

readMoreBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        const targetId = this.dataset.target; // Get the ID of the target content
        const targetContent = document.getElementById(targetId);
        const projectsContainer = document.querySelector('.projects-container'); // Get the projects container

        if (targetContent) {
            if (targetContent.style.display === 'none' || targetContent.style.display === '') {
                // If it's the projects section, we need to ensure the grid continues
                // This is the critical part
                targetContent.style.display = 'contents'; // Or 'grid' if you prefer a nested grid
                this.textContent = 'Read Less'; // Change button text
            } else {
                targetContent.style.display = 'none';
                this.textContent = 'Read More'; // Change button text
            }
        }
        // If the 'Read More' button is specifically for the about section, handle that too
        if (targetId === 'more-about-content') {
             // Logic for about section
             if (targetContent.style.display === 'none' || targetContent.style.display === '') {
                targetContent.style.display = 'block'; // Or 'inline'/'flex' depending on content
                this.textContent = 'Read Less';
            } else {
                targetContent.style.display = 'none';
                this.textContent = 'Read More';
            }
        }
    });
});

// Other JS code (like Typed.js, scroll spy, etc.)

    // Original "Read More" buttons functionality for Services (if still desired for pop-ups)
    const serviceReadMoreBtns = document.querySelectorAll('.services .read-more-btn');
    serviceReadMoreBtns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            alert("More information coming soon!"); // This will still trigger for Service "Read More"
        });
    });
});

// Function to animate radial progress bars
function animateRadialBars() {
    document.querySelectorAll('.radial-bars').forEach(radialBar => {
        const circle = radialBar.querySelector('.progress-line');
        const percentage = parseInt(circle.dataset.percentage); // Get percentage from data-percentage attribute
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percentage / 100) * circumference;

        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference; // Start fully hidden
        circle.style.setProperty('--dash-offset', offset); // Set CSS variable for animation

        // Trigger animation by adding a class or directly setting animation property
        circle.style.animation = 'animateRadialProgress 1s linear forwards';
        circle.style.animationDelay = '1s'; // Delay the animation
    });
}

// Call the function when the page loads or when skills section is in view
// For simplicity, call it on DOMContentLoaded for now.
// For a more advanced approach, you'd use Intersection Observer to trigger when the section comes into view.
document.addEventListener('DOMContentLoaded', animateRadialBars);