// control show filters / hide filters text

const showFiltersDiv = document.querySelector(".show_filters");
const showProductsText = document.querySelector(".show_filters p");
const arrow = document.querySelector(".arrow i");

showFiltersDiv.addEventListener("click", () => {
  if (
    showProductsText.textContent === "show filters" &&
    arrow.classList.contains("fa-chevron-down")
  ) {
    showProductsText.textContent = "hide filters";
    arrow.classList.remove("fa-chevron-down");
    arrow.classList.add("fa-chevron-up");
  } else {
    showProductsText.textContent = "show filters";
    arrow.classList.add("fa-chevron-down");
    arrow.classList.remove("fa-chevron-up");
  }
});

// open overlay div on image/heading click for each product

document.addEventListener("DOMContentLoaded", () => {
  // Select all product blocks
  const productBlocks = document.querySelectorAll(".product_block");

  productBlocks.forEach((block) => {
    // Select the image and heading within the current block
    const image = block.querySelector(".product_image img");
    const heading = block.querySelector(".product_heading");
    const overlay = block.querySelector(".overlay");
    const closeButton = block.querySelector(".close_btn");

    // Function to show the overlay
    const showOverlay = () => {
      overlay.style.display = "block";
    };

    // Function to hide the overlay
    const hideOverlay = () => {
      overlay.style.display = "none";
    };

    // Add click event listeners to the image and heading
    image.addEventListener("click", showOverlay);
    heading.addEventListener("click", showOverlay);

    // Add click event listener to the close button to hide the overlay
    closeButton.addEventListener("click", hideOverlay);

    // Add click event listener to the overlay to hide it when clicking outside the overlay_content
    overlay.addEventListener("click", (e) => {
      //Check if the click was outside the overlay_content
      if (e.target === overlay) {
        hideOverlay();
      }
    });
  });
});
