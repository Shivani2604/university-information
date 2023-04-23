
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");
function vanishFunction() {
    var x = document.getElementById("vanished");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    vanishFunction();
    btn.innerHTML = "Pause";
  } else {
    vanishFunction();
    video.pause();
    btn.innerHTML = "Play";
  }
};
