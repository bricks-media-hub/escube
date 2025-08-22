
    function openGoogleMap(address) {
      // Encode the address for URL
      const encodedAddress = encodeURIComponent(address);
      // Open Google Maps in a new tab with the address
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
    }
