
    document.addEventListener('DOMContentLoaded', function () {
      // Counter animation
      const counters = document.querySelectorAll('[data-counter]');
      const speed = 2000; // The lower the slower

      counters.forEach(counter => {
        const target = +counter.getAttribute('data-counter');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);

        let current = 0;
        const updateCount = () => {
          if (current < target) {
            current += increment;
            if (current > target) current = target;
            counter.innerText = current.toLocaleString();
            setTimeout(updateCount, 1);
          }
        };

        // Intersection Observer to start counting when element is in viewport
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              updateCount();
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });

        observer.observe(counter);
      });

      // Particle effect on hover
      const countBoxes = document.querySelectorAll('.count-box');

      countBoxes.forEach(box => {
        box.addEventListener('mouseenter', function (e) {
          createParticles(e, this);
        });
      });

      function createParticles(e, element) {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        element.appendChild(particlesContainer);

        const particleCount = 15;
        const colors = ['#00c6ff', '#0072ff', '#00f5c0', '#4cbaea'];

        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';

          const size = Math.random() * 5 + 2;
          const color = colors[Math.floor(Math.random() * colors.length)];

          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.background = color;

          const startX = e.offsetX || element.offsetWidth / 2;
          const startY = e.offsetY || element.offsetHeight / 2;

          particle.style.left = `${startX}px`;
          particle.style.top = `${startY}px`;

          particlesContainer.appendChild(particle);

          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 100 + 50;
          const distance = Math.random() * 50 + 50;

          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;

          const animation = particle.animate([
            {
              transform: `translate(0, 0)`,
              opacity: 1
            },
            {
              transform: `translate(${x}px, ${y}px)`,
              opacity: 0
            }
          ], {
            duration: Math.random() * 1000 + 500,
            easing: 'cubic-bezier(0, .9, .57, 1)'
          });

          animation.onfinish = () => {
            particle.remove();
            if (particlesContainer.children.length === 0) {
              particlesContainer.remove();
            }
          };
        }
      }
    });
