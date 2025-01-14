// Timer: Countdown to 20 April 2025, 15:00 Bucharest Time
const targetDate = new Date('2025-04-20T15:00:00+03:00').getTime(); // Bucharest time

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update the countdown
  const countdownElement = document.getElementById('countdown');
  if (timeLeft > 0) {
    countdownElement.textContent = `${String(days).padStart(2, '0')}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
  } else {
    // If the countdown is over
    countdownElement.textContent = "00:00:00";
    clearInterval(countdownInterval);
  }
}, 1000);

// Background Animation: Reactive Gradient Effect based on Mouse Position
document.addEventListener('mousemove', (event) => {
  const x = event.clientX / window.innerWidth; // Horizontal position (0 to 1)
  const y = event.clientY / window.innerHeight; // Vertical position (0 to 1)

  // Calculate the color intensity based on the cursor position
  const aqua = Math.round(x * 255); // Aqua intensity based on x position
  const lime = Math.round(y * 255); // Lime intensity based on y position

  // Set the background gradient based on mouse position (Aqua and Lime)
  document.body.style.background = `linear-gradient(45deg, rgba(0, ${aqua}, ${aqua}, 1), rgba(0, ${lime}, 0, 0.6))`;
});
