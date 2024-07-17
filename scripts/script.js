document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Navbar toggle and mobile navigation
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Close mobile navigation on item click
  document.querySelectorAll(".nav-menu a").forEach((item) => {
    item.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });

  // Form submission handling
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Example code for handling form submission
    const formData = new FormData(form);
    fetch("/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Add code to handle success (e.g., show a success message)
      })
      .catch((error) => {
        console.error("Error:", error);
        // Add code to handle errors (e.g., show an error message)
      });
  });
});
