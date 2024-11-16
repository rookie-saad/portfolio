// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Scroll to the section referenced in the href attribute
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-In Animation for Sections on Scroll
const sections = document.querySelectorAll('.section');

function fadeInOnScroll() {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        // Trigger fade-in animation when section is near the viewport
        if (sectionTop < windowHeight * 0.8) {
            section.style.animation = 'fadeIn 1s ease forwards';
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);

// Initial Scroll Trigger for Sections
fadeInOnScroll();

// Optional: Adding a Scroll-to-Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

// Scroll to Top Button Functionality
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show the Scroll-to-Top Button after scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
