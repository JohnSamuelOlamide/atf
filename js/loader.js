window.addEventListener("load", function () {
  // Hide loader after all images and content are loaded
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0"; // Remove from view
  }, 500); // Matches fade-out duration (optional)
  setTimeout(() => {
    loader.style.display = "none"; // Remove from view
  }, 1000); // Matches fade-out duration (optional)
});
