// Automatically show the current year
document.getElementById("year").textContent =
  new Date().getFullYear();


// Reveal elements smoothly while scrolling
const revealElements = document.querySelectorAll(
  ".section-heading, .about-text, .person, .metatune-showcase, .closing-card"
);


// Prepare elements for animation
revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(35px)";
  element.style.transition =
    "opacity 0.8s ease, transform 0.8s ease";
});


// Observe when elements enter the screen
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);


// Start observing
revealElements.forEach((element) => {
  observer.observe(element);
});


// Download button interaction
const downloadButton = document.querySelector(".download-btn");

downloadButton.addEventListener("click", () => {
  downloadButton.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(0.97)" },
      { transform: "scale(1)" }
    ],
    {
      duration: 220,
      easing: "ease-out"
    }
  );
});