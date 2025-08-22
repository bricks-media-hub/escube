
        document.addEventListener('DOMContentLoaded', () => {
          const carousel = document.querySelector('.clients-carousel');
          const prevBtn = document.querySelector('.prev-btn');
          const nextBtn = document.querySelector('.next-btn');
          const progressBar = document.querySelector('.progress-bar');

          // Clone items for infinite scroll
          const items = [...carousel.children];
          items.forEach(item => {
            const clone = item.cloneNode(true);
            carousel.appendChild(clone);
          });

          let scrollPos = 0;
          const cardWidth = items[0].offsetWidth + 35; // card width + gap
          let animId;
          let isPaused = false;

          const scrollStep = () => {
            if (!isPaused) {
              scrollPos += 0.4; // slightly slower speed for better UX
              if (scrollPos >= carousel.scrollWidth / 2) scrollPos = 0;
              carousel.scrollLeft = scrollPos;

              // Update progress bar (scaled to match animation timing)
              const progress = (scrollPos % (carousel.scrollWidth / 2)) / (carousel.scrollWidth / 2) * 100;
              progressBar.style.width = '20%';
              progressBar.style.transform = `translateX(${progress * 5}%)`;
            }
            animId = requestAnimationFrame(scrollStep);
          };
          scrollStep();

          // Pause on hover
          carousel.addEventListener('mouseenter', () => {
            isPaused = true;
            cancelAnimationFrame(animId);
          });

          carousel.addEventListener('mouseleave', () => {
            isPaused = false;
            animId = requestAnimationFrame(scrollStep);
          });

          // Manual controls
          const scrollCarousel = (direction) => {
            isPaused = true;
            cancelAnimationFrame(animId);

            scrollPos += direction * cardWidth;
            if (scrollPos < 0) scrollPos = carousel.scrollWidth / 2 - cardWidth;
            if (scrollPos >= carousel.scrollWidth / 2) scrollPos = 0;

            carousel.scrollTo({ left: scrollPos, behavior: 'smooth' });

            // Restart auto-scroll after a delay
            setTimeout(() => {
              isPaused = false;
              animId = requestAnimationFrame(scrollStep);
            }, 3000);
          };

          prevBtn.addEventListener('click', () => scrollCarousel(-1));
          nextBtn.addEventListener('click', () => scrollCarousel(1));

          // Touch support for mobile
          let touchStartX = 0;
          let touchEndX = 0;

          carousel.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
          });

          carousel.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
          });

          const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) scrollCarousel(1); // Swipe left
            if (touchEndX > touchStartX + 50) scrollCarousel(-1); // Swipe right
          };
        });
