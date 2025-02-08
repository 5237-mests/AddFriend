// Function to replace ads with widgets
function replaceAds() {
  const widgets = [
    "You are capable of amazing things! 🌟",
    "Take a deep breath and relax. 🧘‍♀️",
    "Did you know? Honey never spoils! 🍯",
    "Time to hydrate! Drink some water. 💧",
    "You're doing great! Keep going. 💪",
  ];
  const adSelectors = [
    ".ad",
    ".ads",
    ".advertisement",
    ".banner",
    '[id*="ad"]',
    '[id*="banner"]',
  ];
  adSelectors.forEach((selector) => {
    const adElements = document.querySelectorAll(selector);
    adElements.forEach((ad) => {
      if (!ad.classList.contains("adfriend-processed")) {
        // Avoid reprocessing the same ad
        const randomWidget =
          widgets[Math.floor(Math.random() * widgets.length)];
        ad.innerHTML = `<div class="adfriend-widget">${randomWidget}</div>`;
        ad.classList.add("adfriend-processed"); // Mark the ad as processed
      }
    });
  });
}

// Create a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      replaceAds(); // Re-run the ad replacement function
    }
  }
});

// Start observing the document body for changes
observer.observe(document.body, { childList: true, subtree: true });

// Initial run to replace ads on page load
replaceAds();
