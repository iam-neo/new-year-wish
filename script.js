// Set the target date and time for the countdown (format: year, monthIndex, day, hours, minutes, seconds)
const targetDate = new Date('2025-04-14T09:12:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the countdown timer
  const timerElement = document.getElementById('timer');
  timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Check if the countdown is over
  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    window.location.href = 'https://www.magarnirmal.com.np/'; // Redirect to another webpage
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();