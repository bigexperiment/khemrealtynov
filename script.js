document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.querySelector(
    "button[onclick=\"navigateTo('contact')\"]"
  );
  const contactSection = document.getElementById("contact");

  contactButton.addEventListener("click", function (event) {
    event.preventDefault();
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});
