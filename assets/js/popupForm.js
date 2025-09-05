
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(() => {
        document.getElementById("contactPopup").style.display = "flex";
      }, 10000); 

      document.querySelector(".close-btn").onclick = function () {
        document.getElementById("contactPopup").style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target === document.getElementById("contactPopup")) {
          document.getElementById("contactPopup").style.display = "none";
        }
      };
    });
