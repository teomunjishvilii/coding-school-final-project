// burger menu
const burgerIcon = document.querySelector(".burger_menu_icon");
const nav = document.querySelector(".navigation");
const overlay = document.querySelector(".overlay");
const joinNowBtn = document.querySelector(".join_us");

burgerIcon.addEventListener("click", function () {
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
  this.classList.toggle("active");

  // delay the addition of the .active class to the .join_us button
  // until after the overlay's transition is complete
  if (overlay.classList.contains("active")) {
    overlay.appendChild(nav);
    setTimeout(() => {
      overlay.appendChild(joinNowBtn);
      joinNowBtn.classList.add("active");
    }, 500); // Delay matches the transition time of the overlay (0.5s)
  } else {
    joinNowBtn.classList.remove("active");
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

// display more text when clicked on  read more button and show less when clicked on read less on about us section
const readMoreBtn = document.querySelector(".read_more");
const hiddenText = document.querySelector(".hidden_text");

readMoreBtn.addEventListener("click", () => {
  if (readMoreBtn.textContent === "read more") {
    hiddenText.classList.add("visible");
    readMoreBtn.textContent = "read less";
  } else {
    hiddenText.classList.remove("visible");
    readMoreBtn.textContent = "read more";
  }
});

// display more text when clicked on  read more button and show less when clicked on read less on services section
const readMoreBtnServices = document.querySelector(".read_more_services");
const serviceItems = document.querySelectorAll(".item");

readMoreBtnServices.addEventListener("click", () => {
  const isReadMore =
    readMoreBtnServices.textContent.toLowerCase() === "read more";

  serviceItems.forEach((item, index) => {
    if (index >= 4) {
      if (isReadMore) {
        item.classList.add("visible");
        readMoreBtnServices.style.marginTop = "-60px";
      } else {
        item.classList.remove("visible");
        readMoreBtnServices.style.marginTop = "-120px";
      }
    }
  });

  readMoreBtnServices.textContent = isReadMore ? "Read Less" : "Read More";
});

// handle program and trainer selections in the contact form
document.addEventListener("DOMContentLoaded", function () {
  const dropbtn = document.querySelector(".dropbtn");
  const programDropdown = document.querySelector(".program_dropdown");
  const dropbtnTrainer = document.querySelector(".dropbtn_trainer");
  const trainerDropdown = document.querySelector(".trainer_dropdown");

  dropbtn.addEventListener("click", function () {
    programDropdown.classList.toggle("active");
  });

  dropbtnTrainer.addEventListener("click", function () {
    trainerDropdown.classList.toggle("active");
  });
});
