const prev = document.getElementById("prev");
const next = document.getElementById("next");

console.log("test");

// prev.addEventListener("click", function () {
//   const currCard = document.querySelector(".card.view");
//   const prevCard = currCard.previousElementSibling
//     ? currCard.previousElementSibling
//     : document.querySelector(".card-container").lastElementChild;
// });

prev.addEventListener("click", function () {
  const currCard = document.querySelector(".card.view");
  const prevCard = currCard.previousElementSibling;

  if (currCard.previousElementSibling) {
    console.log(currCard.previousElementSibling);
  } else {
    console.log(document.querySelector(".card-container").lastElementChild);
  }
});
