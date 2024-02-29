const signUp = document.querySelector("#signUp");
const form = document.querySelector("#form");

let userDetail = [];
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const email = document.querySelector("#email");

// Creating Accout
const signUpIntoAccount = () => {
  const firstNameInput = firstName.value;
  const lastNameInput = lastName.value;
  const passwordInput = password.value;
  const confirmPasswordInput = confirmPassword.value;
  const emailInput = email.value;

  if (
    firstNameInput === "" &&
    lastNameInput === "" &&
    passwordInput === "" &&
    confirmPasswordInput === "" &&
    emailInput === ""
  ) {
    alert("Please fill all fields");
  } else if (passwordInput !== confirmPasswordInput) {
    alert("Please Enter accurate Password");
  } else {
    userObject = {
      firstNameInput,
      lastNameInput,
      passwordInput,
      confirmPasswordInput,
      emailInput,
    };
    userDetail.push(userObject);
    localStorage.setItem("user", JSON.stringify(userDetail));
    window.location.href = "home.html";
  }
};

// Goto Home Page
document.querySelector("#signUpBtn").addEventListener("click", (e) => {
  e.preventDefault();
  signUpIntoAccount();
});

// LinkedLn Sign In

document.querySelector("#linkedIn").addEventListener("click", (e) => {
  e.preventDefault();

  const linkedIn = document.querySelector("#linkedInInput");
  const linkedInI = document.querySelector("#linkedInn");
  let count = 0;
  count++;
  count % 2 === 0
    ? linkedIn.classList.add("hidden")
    : linkedIn.classList.remove("hidden");

  const linked = linkedInI.value;
  document.querySelector("#gotoHome").addEventListener("click", () => {
    if (linked !== "") {
      userDetail.push(linked);
      localStorage.setItem("user", JSON.stringify(userDetail));
      window.location.href = "home.html";
    } else {
      alert("Please fill Field");
    }
  });
});

// Click to Log In
document.querySelector("#login").addEventListener("click", () => {
  window.location.href = "login.html";
});
