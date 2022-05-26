// document.querySelector(".tema-field").placeholder = "new text for tema";

// element.classList.add("otherclass");
const name = document.querySelector(".name-field");
const tema = document.querySelector(".tema-field");
const form = document.querySelector("form");

function validateForm() {
  event.preventDefault();

  if (name.value.trim().length <= 6) {
    name.classList.add("error-form");
    // document.querySelector(".name-field").value = "";
  } else {
    name.classList.add("correct-form");
  }

  if (tema.value.length > 15) {
    name.classList.add("error-form");
    document.querySelector(".tema-field").value = "";
  }
}

// https://www.youtube.com/watch?v=rsd4FNGTRBw
// https://codepen.io/FlorinPop17/pen/OJJKQeK
