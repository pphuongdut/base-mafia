// Function to show an element
function showElement(element) {
  // Remove old animation classes if present
  element.classList.remove("animate__fadeOut");

  // Add animation class to fade in
  element.classList.add("animate__animated", "animate__fadeIn");
}

// Function to hide an element
function hideElement(element) {
  // Remove old animation classes if present
  element.classList.remove("animate__fadeIn", "hidden");

  // Add animation class to fade out
  element.classList.add("animate__animated", "animate__fadeOut");
}

window.onload = function () {
  let video1 = document.getElementById("video1");
  let video2 = document.getElementById("video2");
  var overlayButton = document.getElementById("overlay-button");
  // var gunFire = document.getElementById("gun_fire");

  document.getElementById("video1")?.play();
  // Define the time in seconds when to show the button
  var timeToShowButton = 14; // Adjust as needed

  video1.addEventListener("timeupdate", function () {
    if (video1.currentTime >= timeToShowButton) {
      overlayButton.style.opacity = 1; // Show the button
    }
  });

  // Optional: add click event handler for the button
  overlayButton.addEventListener("click", function () {
    // gunFire.style.opacity = 1; // Show the button
    overlayButton.style.display = "none";

    setTimeout(() => {
      hideElement(video1);
      showElement(video2);
      setTimeout(() => {
        document.getElementById("video2")?.play();
      }, 100);
    }, 1000);

    // setTimeout(() => {
    //   gunFire.style.opacity = 0;
    // }, 2000);
  });
};
