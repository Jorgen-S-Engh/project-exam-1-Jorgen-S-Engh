// document.querySelector(".tema-field").placeholder = "new text for tema";

// element.classList.add("otherclass");
const form = document.querySelector("form");
const name = document.querySelector(".name-field");
const tema = document.querySelector(".tema-field");
const email = document.querySelector(".email-field");
const message = document.querySelector(".text-area");
const formError = document.querySelector(".form-error");
const nameError = document.querySelector(".name-error");
const temaError = document.querySelector(".tema-error");
const emailError = document.querySelector(".email-error");
const messageError = document.querySelector(".message-error");
const messageSuccess = document.querySelector(".message-success");

function validateForm() {
  event.preventDefault();
  let counter = 0;

  if (checkName(name.value, 5)) {
    nameError.style.display = "none";

    counter++;
  } else {
    nameError.style.display = "block";
  }
  if (checkName(tema.value, 15)) {
    temaError.style.display = "none";

    counter++;
  } else {
    temaError.style.display = "block";
  }
  if (validateEmail(email.value)) {
    emailError.style.display = "none";

    counter++;
  } else {
    emailError.style.display = "block";
  }
  if (checkName(message.value, 25)) {
    messageError.style.display = "none";
    counter++;
  } else {
    messageError.style.display = "block";
  }

  if (counter === 4) {
    messageSuccess.style.display = "block";
  } else {
    messageSuccess.style.display = "none";
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
