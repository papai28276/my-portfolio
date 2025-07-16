const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  message.textContent = "Form submission is currently disabled. Please contact me directly via email.";
  message.style.color = "#ff4b2b";
});
