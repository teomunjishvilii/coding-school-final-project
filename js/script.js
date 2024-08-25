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

// form validation
const formElement = document.querySelector("#contact_form");

formElement.addEventListener("submit", function (e) {
  e.preventDefault();

  let errors = {};

  // firstname
  let firstnameValue = document.querySelector("#firstname").value;

  if (firstnameValue.trim() === "") {
    errors.firstname = "First Name field can not be empty.";
  }

  // lastname
  let lastnameValue = document.querySelector("#lastname").value;

  if (lastnameValue.trim() === "") {
    errors.lastname = "Last Name field can not be empty.";
  }

  // username
  let usernameValue = document.querySelector("#username").value;

  if (usernameValue.trim() === "") {
    errors.username = "Username field can not be empty.";
  }

  // password
  let passwordValue = document.querySelector("#password").value;
  let password2Value = document.querySelector("#password2").value;

  if (passwordValue == "") {
    errors.password = "Password field can not be empty.";
  }

  if (passwordValue != password2Value) {
    errors.password2 = "Passwords do not match.";
  }

  // Clear previous error messages
  this.querySelectorAll(".error-text").forEach((descr) => {
    descr.textContent = " ";
  });

  // Display new error messages
  for (let item in errors) {
    console.log(item); // key in errors

    let errorTextpTag = document.getElementById("error-" + item);

    if (errorTextpTag) {
      errorTextpTag.textContent = errors[item];
    }
  }

  // If there are no errors, display success message
  if (Object.keys(errors).length === 0) {
    const successMessage = document.createElement("p");
    successMessage.textContent = "You've submitted the form successfully!";
    successMessage.style.color = "green";
    formElement.appendChild(successMessage);

    //Clear the form fields
    formElement.reset();

    // Remove the success message after a few seconds
    setTimeout(() => {
      successMessage.remove();
    }, 3000); // Remove after 5 seconds
  }
});

// show hide password
const passwordShow = document.querySelector("#password");
const passIcon = document.getElementById("showIcon");

function showHidePassword() {
  if (passwordShow.type === "password") {
    passwordShow.setAttribute("type", "text");
    passIcon.classList.remove("fa-eye");
    passIcon.classList.add("fa-eye-slash");
  } else {
    passwordShow.setAttribute("type", "password");
    passIcon.classList.add("fa-eye");
    passIcon.classList.remove("fa-eye-slash");
  }
}

passIcon.addEventListener("click", showHidePassword);

// email validation - regex
const emailInput = document.querySelector("#email");

function emailValidation() {
  console.log("function entered");
  const emailValue = document.querySelector("#email").value;
  const errorTextEmail = document.querySelector("#emailError");
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailValue.match(emailPattern)) {
    errorTextEmail.textContent = "Your email is Valid";
    errorTextEmail.style.color = "green";
  } else {
    errorTextEmail.textContent = "Your email is Invalid";
    errorTextEmail.style.color = "#f21a09";
  }

  if (emailValue === "") {
    errorTextEmail.innerHTML = "";
  }
}

emailInput.addEventListener("keyup", emailValidation);

// splidejs slider

let splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
  gap: "5%",
  arrows: true,
  pagination: false,
});

splide.mount();
