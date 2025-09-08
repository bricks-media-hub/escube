
document.addEventListener('DOMContentLoaded', () => {
  // Select elements
  const lightbox = document.querySelector('.lightbox-t');
  const closeLightbox = document.querySelector('.lightbox-close-t');
  const mainImg = document.getElementById('main-img');
  const items = document.querySelectorAll('.testimonial-item');

  // Open lightbox when clicking on any testimonial item
  items.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const imgSrc = item.getAttribute('data-img'); // get data-img attribute
      mainImg.src = imgSrc;
      lightbox.style.display = 'flex'; // show lightbox
    });
  });

  // Close when clicking close button
  closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    mainImg.src = ''; // clear image
  });

  // Close when clicking backdrop (outside the image)
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      mainImg.src = '';
    }
  });

  // Close with Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
      lightbox.style.display = 'none';
      mainImg.src = '';
    }
  });
});