function updateTime() {
  const timeEl = document.getElementById("user-time");
  timeEl.textContent = Date.now();
}

// Set immediately and update every second
updateTime();
setInterval(updateTime, 1000);
