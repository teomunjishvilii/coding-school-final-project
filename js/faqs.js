const faq_div = document.querySelectorAll(".faqs_item");

faq_div.forEach(function (item) {
  item.addEventListener("click", function () {
    console.log(this);
    this.classList.toggle("active");

    // change the arrow when clicked + scroll down smoothly
    const arrowIcon = this.querySelector(".arrow i");

    if (this.classList.contains("active")) {
      arrowIcon.classList.remove("fa-chevron-down");
      arrowIcon.classList.add("fa-chevron-up");
    } else {
      arrowIcon.classList.add("fa-chevron-down");
      arrowIcon.classList.remove("fa-chevron-up");
    }
  });
});
