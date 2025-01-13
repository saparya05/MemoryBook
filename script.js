particlesJS("particles-js", {
    particles: {
        number: {
            value: 1800, // A larger number of stars for a denser effect
            density: {
                enable: true,
                value_area: 1800 // Spread stars across a broader area
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
                speed: 0.1, // Subtle twinkling animation
                opacity_min: 0.2
            }
        },
        size: {
            value: 1.4, // Smaller stars for subtlety
            random: true,
            anim: {
                enable: false // No size animation to maintain balance
            }
        },
        line_linked: {
            enable: true, // Enable constellations
            distance: 90, // Shorter connection range for minimal lines
            color: "#ffffff", // Line color
            opacity: 0.06, // Even fainter lines
            width: 0.4 // Thinner lines
        },
        move: {
            enable: true,
            speed: 1.5, // Smooth and slow movement
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
