// JavaScript to handle the opacity transition
window.addEventListener('load', function() {
  const text = document.getElementById('dylon-text');

  // Wait for 0.1 seconds, then start fading the text
  setTimeout(() => {
    text.style.opacity = 0; // Fade out the text
  }, 100); // 0.1 seconds delay
});
