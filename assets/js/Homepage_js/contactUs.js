

document.querySelectorAll('.info-box').forEach(el => {
  el.addEventListener("click", () => {
    openGoogleMap(el.dataset.map);
  })
})


function openGoogleMap(addressOrUrl) {
  try {
    let finalUrl;

    // Check if it's already a full Google Maps link
    if (addressOrUrl.startsWith("http://") || addressOrUrl.startsWith("https://")) {
      finalUrl = addressOrUrl;
    } else {
      // Otherwise treat it as an address and encode
      const encodedAddress = encodeURIComponent(addressOrUrl);
      finalUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    }

    // Open in a new tab
    window.open(finalUrl, "_blank");
  } catch (err) {
    console.error("Invalid address or URL:", err);
  }
}
