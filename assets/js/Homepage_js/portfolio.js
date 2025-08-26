
  document.addEventListener("DOMContentLoaded", () => {
    // ========== Portfolio Filtering ==========
    // const filterButtons = document.querySelectorAll("#portfolio-flters li");
    // const portfolioItems = document.querySelectorAll(".portfolio-item");

    // filterButtons.forEach(button => {
    //   button.addEventListener("click", () => {
    //     filterButtons.forEach(btn => btn.classList.remove("filter-active"));
    //     button.classList.add("filter-active");

    //     const filterValue = button.dataset.filter;
    //     portfolioItems.forEach(item => {
    //       if (filterValue === "*" || item.classList.contains(filterValue.substring(1))) {
    //         item.style.display = "block";
    //         setTimeout(() => {
    //           item.style.opacity = "1";
    //           item.style.transform = "scale(1)";
    //         }, 50);
    //       } else {
    //         item.style.opacity = "0";
    //         item.style.transform = "scale(0.9)";
    //         setTimeout(() => {
    //           item.style.display = "none";
    //         }, 400);
    //       }
    //     });
    //   });
    // });

    // ========== Portfolio Lightbox ==========
    const lightbox = document.getElementById("portfolio-lightbox");
    const closeBtn = lightbox.querySelector(".close-lightbox");
    const prevBtn = lightbox.querySelector(".slider-prev");
    const nextBtn = lightbox.querySelector(".slider-next");
    const mainImage = document.getElementById("lightbox-main-image");

    let lightboxImages = [];
    let currentIndex = 0;

    function updateLightboxImage() {
      if (lightboxImages.length > 0) {
        mainImage.src = lightboxImages[currentIndex];
      }
    }

    // 🔑 Common function to open lightbox
    function openLightbox(link) {
      lightboxImages = JSON.parse(link.getAttribute("data-images") || "[]");
      currentIndex = 0;
      updateLightboxImage();

      document.getElementById("lightbox-title").innerText = link.dataset.title || "";
      // document.getElementById("lightbox-description").innerText = link.dataset.description || "";
      document.getElementById("lightbox-category").innerText = link.dataset.category || "";
      // document.getElementById("lightbox-date").innerText = link.dataset.date || "";
      document.getElementById("lightbox-client").innerText = link.dataset.client || "";
      document.getElementById("lightbox-category-full").innerText = link.dataset.category || "";
      // document.getElementById("lightbox-date-full").innerText = link.dataset.date || "";

      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    }
    // Attach event for eye-icon links

      document.querySelectorAll(".portfolio-details-link").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        openLightbox(link);
      })


      // Also allow clicking image & container
      const portfolioWrap = link.closest(".portfolio-wrap");
      if (portfolioWrap) {
        portfolioWrap.addEventListener("click", e => {
          // Prevent double trigger if eye-icon itself clicked
          if (!e.target.closest(".portfolio-details-link")) {
            e.preventDefault();
             (link);
          }
        });
      }
    });

    // Navigation
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + lightboxImages.length) % lightboxImages.length;
      updateLightboxImage();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % lightboxImages.length;
      updateLightboxImage();
    });

    // Close lightbox
    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("active");
      document.body.style.overflow = "auto";
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });

    // Keyboard controls
    document.addEventListener("keydown", e => {
      if (!lightbox.classList.contains("active")) return;
      if (e.key === "Escape") {
        lightbox.classList.remove("active");
        document.body.style.overflow = "auto";
      } else if (e.key === "ArrowLeft") {
        prevBtn.click();
      } else if (e.key === "ArrowRight") {
        nextBtn.click();
      }
    });
  });
