
const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const subject = document.querySelector("#subject");
const address = document.querySelector("#address");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const success = document.querySelector(".success-message");

function validateForm() {
  event.preventDefault();
  let counter = 0;

  if (checkName(name.value, 0)) {
    nameError.style.display = "none";
    counter++;
  } else {
    nameError.style.display = "block";
  }
  if (checkName(subject.value, 9)) {
    subError.style.display = "none";
    counter++;
  } else {
    subError.style.display = "block";
  }
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
    counter++;
  } else {
    emailError.style.display = "block";
  }
  if (checkName(address.value, 24)) {
    adError.style.display = "none";
    counter++;
  } else {
    adError.style.display = "block";
  }

  if (counter === 4) {
    success.style.display = "block";
  } else {
    success.style.display = "none";
  }
}

form.addEventListener("submit", validateForm);

function checkName(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}