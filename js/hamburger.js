//hamburger menu
const openMenu = document.querySelector(".fa-bars");
const exitMenu = document.querySelector(".fa-xmark");
const menu = document.querySelector(".menu");

openMenu.addEventListener("click", () => {
  menu.style.display = "block";
});

exitMenu.addEventListener("click", () => {
  menu.style.display = "none";
});
