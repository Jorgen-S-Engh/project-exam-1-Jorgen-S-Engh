//hamburger menu
const hamburgerMenu = document.querySelector(".fa-bars");
const exitMenu = document.querySelector(".fa-xmark");
const menu = document.querySelector(".menu");

hamburgerMenu.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

exitMenu.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "block";
    exitMenu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
