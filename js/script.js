// burger menu
const burgerIcon = document.querySelector(".burger_menu_icon");
const nav = document.querySelector(".navigation");
const overlay = document.querySelector(".overlay");
const joinNowBtn = document.querySelector(".join_us");

burgerIcon.addEventListener("click", function () {
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
  this.classList.toggle("active");

  // delaying the addition of the .active class to the .join_us button
  // until after the overlay's transition is complete
  if (overlay.classList.contains("active")) {
    overlay.appendChild(nav);
    setTimeout(() => {
      overlay.appendChild(joinNowBtn);
      joinNowBtn.classList.add("active");
    }, 500); // Delay matches the transition time of the overlay (0.5s)
  } else {
    joinNowBtn.classList.remove("active");
    setTimeout(() => {
      document.body.appendChild(nav);
      document.body.appendChild(joinNowBtn);
    }, 500); // Delay to allow smooth transition out
  }
});

// open the video window on button click
const videoPlayBtn = document.querySelector(".play_button");
const videoContainer = document.querySelector(".training_video_overlay");
const video = document.querySelector("#training_video_container");
const videoCloseBtn = document.querySelector(".close");
const videoFrame = document.querySelector("#videoFrame");

// function for opening the video modal
function OpenVideoModal() {
  videoContainer.classList.add("active");
}

// function for closing the video modal
function CloseVideoModal() {
  videoContainer.classList.remove("active");
  videoFrame.src = videoFrame.src;
}

// Open modal when the button is clicked
videoPlayBtn.addEventListener("click", (e) => {
  e.preventDefault();
  OpenVideoModal();
});

// Close modal when the close button is clicked
videoCloseBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  CloseVideoModal();
});

// Close modal when clicking outside the modal content
videoContainer.addEventListener("click", (e) => {
  if (e.target === videoContainer) {
    CloseVideoModal();
  }
});
