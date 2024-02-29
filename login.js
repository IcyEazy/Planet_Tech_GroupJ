const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Reset error messages
  emailError.textContent = "";
  passwordError.textContent = "";

  // Check email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address!";
    emailError.style.color = "red";
    return;
  }

  // Check password length
  if (passwordInput.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long!";
    passwordError.style.color = "red";
    return;
  }

  // If validation passes, submit the form
  form.submit();
  window.open("./userpage.html");
});
