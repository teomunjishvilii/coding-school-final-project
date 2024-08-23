// control show filters / hide filters text

const showFiltersDiv = document.querySelector(".show_filters");
const showProductsText = document.querySelector(".show_filters p");
const arrow = document.querySelector(".arrow i");
const filtersDiv = document.querySelector(".filters");

showFiltersDiv.addEventListener("click", () => {
  if (
    showProductsText.textContent === "show filters" &&
    arrow.classList.contains("fa-chevron-down")
  ) {
    showProductsText.textContent = "hide filters";
    arrow.classList.remove("fa-chevron-down");
    arrow.classList.add("fa-chevron-up");
    filtersDiv.classList.add("visible");
  } else {
    showProductsText.textContent = "show filters";
    arrow.classList.add("fa-chevron-down");
    arrow.classList.remove("fa-chevron-up");
    filtersDiv.classList.remove("visible");
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

// filter data

// Function to filter items by category
function filterItemsByCategory(selectedValues) {
  document.querySelectorAll(".products .product_block").forEach((item) => {
    const itemCategory = item.getAttribute("data-category");
    if (selectedValues.includes(itemCategory) || selectedValues.length === 0) {
      item.setAttribute("data-category-filtered", "true");
    } else {
      item.setAttribute("data-category-filtered", "false");
    }
  });
}

// Function to filter items by price
function filterItemsByPrice(minPrice, maxPrice) {
  document.querySelectorAll(".products .product_block").forEach((item) => {
    const itemPrice = parseFloat(item.getAttribute("data-price"));
    const categoryFiltered =
      item.getAttribute("data-category-filtered") === "true";
    if (categoryFiltered && itemPrice >= minPrice && itemPrice <= maxPrice) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Update all filters based on selected category and price inputs
function updateFilters() {
  // Get selected categories
  const selectedFlavors = Array.from(
    document.querySelectorAll('.flavor_options input[type="checkbox"]:checked')
  ).map((checkbox) => checkbox.value);

  // Get min and max price from input fields
  const minPrice = parseFloat(document.getElementById("min_price").value) || 0;
  const maxPrice =
    parseFloat(document.getElementById("max_price").value) || Infinity;

  // Filter by category first
  filterItemsByCategory(selectedFlavors);

  // Filter by price next
  filterItemsByPrice(minPrice, maxPrice);
}

// Add event listeners to category checkboxes
document
  .querySelectorAll('.flavor_options input[type="checkbox"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", updateFilters);
  });

// Add event listeners to price input fields
document.getElementById("min_price").addEventListener("input", updateFilters);
document.getElementById("max_price").addEventListener("input", updateFilters);
