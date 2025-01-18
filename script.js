particlesJS("particles-js", {
    particles: {
        number: {
            value: 1700, // A larger number of stars for a denser effect
            density: {
                enable: true,
                value_area: 1900 // Spread stars across a broader area
            }
        },
        color: {
            value: ["#ffffff", "#ffcc00", "#66ccff", "#ff99cc", "#e0e0e0"] // Diverse star colors
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.9,
            random: true, // Randomize star brightness
            anim: {
                enable: true,
                speed: 0.3, // Subtle twinkling animation
                opacity_min: 0.2
            }
        },
        size: {
            value: 1.2, // Smaller stars for subtlety
            random: true,
            anim: {
                enable: false // No size animation to maintain balance
            }
        },
        line_linked: {
            enable: true, // Enable constellations
            distance: 90, // Shorter connection range for minimal lines
            color: "#ffffff", // Line color
            opacity: 0.05, // Even fainter lines
            width: 0.3 // Thinner lines
        },
        move: {
            enable: true,
            speed: 1, // Smooth and slow movement
            direction: "none",
            random: true,
            out_mode: "out" // Stars reappear when out of bounds
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false // Disable hover effects for a peaceful feel
            },
            onclick: {
                enable: true,
                mode: "repulse" // Scatter stars gently on click
            }
        },
        modes: {
            repulse: {
                distance: 120 // Gentle scatter effect
            }
        }
    },
    retina_detect: true
});


// toggle the visibility of the navbar when the hamburger menu is clicked.

const hamburger = document.getElementById('hamburger-menu');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show'); // Toggles the visibility
});




let lastScrollTop = 0; // Track scroll position
const sections = document.querySelectorAll('section'); // All sections
const heroSection = document.querySelector('.hero-section'); // First section

// Initially set the first section (hero) to be visible
heroSection.classList.add('visible');

// Scroll Event Listener
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // If scrolling down
    if (currentScroll > lastScrollTop) {
        // Check each section's visibility
        sections.forEach((section, index) => {
            if (isInViewport(section)) {
                section.classList.add('visible'); // Show section
            } else {
                section.classList.remove('visible'); // Hide section
            }

            // For the first section (hero section)
            if (index === 0 && !isInViewport(heroSection)) {
                heroSection.classList.remove('visible');
            }
        });
    } else {
        // If scrolling up
        sections.forEach((section, index) => {
            if (isInViewport(section)) {
                section.classList.add('visible'); // Show section
            } else {
                section.classList.remove('visible'); // Hide section
            }

            // For the first section (hero section) when scrolling up
            if (index === 0 && isInViewport(heroSection)) {
                heroSection.classList.add('visible');
            }
        });
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Reset scroll position
});

// Function to check if the section is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    // Ensure the section is fully in the viewport (visible on screen)
    return rect.top < window.innerHeight && rect.bottom > 0;
}




// Cosmic particles or background animation can be added here, like floating stars or effects on scroll.
function showMore() {
    document.getElementById('about-modal').classList.remove('hidden');
  }
  
  function hideMore() {
    document.getElementById('about-modal').classList.add('hidden');
  }

  


  document.querySelector('.view-more').addEventListener('click', () => {
    // Logic to show more projects or navigate to a detailed project page
    window.location.href = '#'; // Replace with the link to the detailed project page
  });
  