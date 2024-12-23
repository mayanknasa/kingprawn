function copyToClipboard() {
  var copyText = document.querySelector(".contract-address input");
  copyText.select();
  document.execCommand("copy");
  alert("CA Copied!");
}
document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const accordion = button.parentElement;
    accordion.classList.toggle("open");
  });
});
// Define the target date
const targetDate = new Date("2025-01-26T23:59:59"); // Set your target date here
const currentDate = new Date();

// Check if the current date is less than the target date
if (currentDate < targetDate) {
  // Show content if current date is before target date
  document.getElementById("content").style.display = "block";
  document.getElementById("notFoundMessage").style.display = "none";
} else {
  // Show 404 message if current date is equal to or greater than target date
  document.getElementById("content").style.display = "none";
  document.getElementById("notFoundMessage").style.display = "block";
}

window.onload = () => {
  // Get the audio element by ID
  const backgroundMusic = document.getElementById("backgroundMusic");

  // Set volume to 10% (optional, you can adjust the volume as needed)
  backgroundMusic.volume = 0.1;

  // Unmute the audio after the page has loaded (ensuring autoplay works)
  backgroundMusic.muted = false;

  // Start playing the audio
  backgroundMusic.play().catch((e) => console.error("Audio play failed:", e));
};
