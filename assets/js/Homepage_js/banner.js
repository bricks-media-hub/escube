document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    const swiper = new Swiper('.hero-swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        on: {
            init: function () {
                createParticles();
                animateProgressBar();
            },
            slideChangeTransitionStart: function () {
                animateProgressBar();
            }
        }
    });

    // Create particle effects
    function createParticles() {
        const slides = document.querySelectorAll('.swiper-slide');

        slides.forEach((slide, index) => {
            const particlesContainer = slide.querySelector('.particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');

                // Random properties
                const size = Math.random() * 5 + 2;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const delay = Math.random() * 5;
                const duration = Math.random() * 10 + 10;

                // Apply styles
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.animation = `float ${duration}s linear infinite`;
                particle.style.animationDelay = `${delay}s`;

                particlesContainer.appendChild(particle);
            }
        });
    }

    // Animate progress bar
    function animateProgressBar() {
        const progressBar = document.querySelector('.swiper-progress-bar');
        if (progressBar) {
            progressBar.style.width = '0%';
            setTimeout(() => {
                progressBar.style.transition = 'width 5s linear';
                progressBar.style.width = '100%';
            }, 50);
        }
    }

    // Reinitialize particles on window resize
//     window.addEventListener('resize', function () {
//         document.querySelectorAll('.particle').forEach(particle => {
//             particle.remove();
//         });
//         createParticles();
//     });
// });

// const hero = document.querySelector(".hero-section");

// hero.addEventListener("mouseenter", () => {
//     hero.style.zIndex = "1";
// });

// hero.addEventListener("mouseleave", () => {
//     hero.style.zIndex = "-1";
});
