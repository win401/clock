function updateClock() {
  const now = new Date();

  document.getElementById("h").textContent = String(now.getHours()).padStart(
    2,
    "0"
  );

  document.getElementById("m").textContent = String(now.getMinutes()).padStart(
    2,
    "0"
  );

  document.getElementById("s").textContent = String(now.getSeconds()).padStart(
    2,
    "0"
  );
}

setInterval(updateClock, 1000);
updateClock();
