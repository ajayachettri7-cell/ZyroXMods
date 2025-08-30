// Open game page
function openGame(page) {
  window.location.href = page;
}

// Search filter
const searchInput = document.getElementById('searchInput');
const gameList = document.getElementById('gameList');
const gameCards = gameList.getElementsByClassName('game-card');

searchInput.addEventListener('keyup', function() {
  const filter = searchInput.value.toLowerCase();
  for (let i = 0; i < gameCards.length; i++) {
    const gameName = gameCards[i].getElementsByTagName('p')[0].textContent.toLowerCase();
    gameCards[i].style.display = gameName.includes(filter) ? "" : "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // === Download Button Logic ===
  const btn = document.querySelector(".download-btn");
  const downloadsText = document.querySelector(".app-details p");
  const infoDownloads = document.querySelector(".info-item:nth-of-type(3) .info-text");
  
  // Extract initial count from text
  let countMatch = downloadsText.textContent.match(/([\d,]+) Downloads/);
  let count = countMatch ? parseInt(countMatch[1].replace(/,/g, '')) : 0;
  
  btn.addEventListener("click", () => {
    count++;
    downloadsText.textContent = `v1.0.2 • Updated: Aug 16, 2025 • ${count.toLocaleString()} Downloads`;
    infoDownloads.textContent = count.toLocaleString();
  });
  
  
  
  // === Page Load Opening Animation Trigger ===
  const animatedElements = document.querySelectorAll(".app-card, .info, .video-section, .features, footer");
  animatedElements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.animation = `openAnimation 1s ease forwards`;
    el.style.animationDelay = `${0.2 + index * 0.2}s`;
  });
});