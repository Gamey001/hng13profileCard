function updateTime() {
  const timeEl = document.getElementById("current-time");
  const now = new Date();
  timeEl.textContent = now.toLocaleTimeString();
}

updateTime();
setInterval(updateTime, 1000);
