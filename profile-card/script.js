// Update the time in milliseconds every second
const timeEl = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  timeEl.textContent = Date.now();
}

updateTime(); // initial render
setInterval(updateTime, 1000); // live update
