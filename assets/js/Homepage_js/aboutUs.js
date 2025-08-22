    document.addEventListener("DOMContentLoaded", () => {
      const playBtn = document.querySelector(".play-btn");
      const lightbox = document.getElementById("video-lightbox");
      const videoFrame = document.getElementById("video-frame");
      const closeBtn = document.querySelector(".video-close");

      // Open popup
      if (playBtn) {
        playBtn.addEventListener("click", e => {
          e.preventDefault();
          const videoUrl = playBtn.getAttribute("data-video");
          videoFrame.src = videoUrl;
          lightbox.classList.add("active");
        });
      }

      // Close popup
      closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("active");
        videoFrame.src = ""; // stop video
      });

      // Close on outside click
      lightbox.addEventListener("click", e => {
        if (e.target === lightbox) {
          lightbox.classList.remove("active");
          videoFrame.src = "";
        }
      });

      // Close on ESC key
      document.addEventListener("keydown", e => {
        if (e.key === "Escape" && lightbox.classList.contains("active")) {
          lightbox.classList.remove("active");
          videoFrame.src = "";
        }
      });
    });