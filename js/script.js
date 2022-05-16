const container = document.querySelector(".api-container");
const slideContainer = document.querySelector(".slide-container");

const buttons = document.querySelectorAll("[data-carousel-button]");
const slide = document.querySelector("[data-slides]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

const url = "https://jorgeneksamen2022.online/wp-json/wp/v2/posts/";

async function getApi() {
  const response = await fetch(url);
  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    // carouselImages.innerHTML += `
    // <a class="project-items" href="spesific-projects.html?id=${data[i].id}">
    //     <h2>${data[i].title.rendered}</h2>
    //     <img src=${data[i].featured_media_src_url}>
    //     <p>${data[i].excerpt.rendered}</p>
    // </a>`;
    slideContainer.innerHTML += `
    <li class="slide">
      <img src="${data[i].featured_media_src_url}" alt="Nature Image #2">
    </li>
    <li class="slide">
      <img src="${data[i].featured_media_src_url}" alt="Nature Image #3">
    </li>`;

    // container.innerHTML += `
    // <a class="project-items" href="spesific-projects.html?id=${data[i].id}">
    //     <h2>${data[i].title.rendered}</h2>
    //     <img src=${data[i].featured_media_src_url}>
    //     <p>${data[i].excerpt.rendered}</p>
    // </a>`;
  }
}

getApi();

// video slider

// let i = 0;
// const videos = [];

// function videoSlide() {
//   videos[0] = "videos/video1.mp4";
//   videos[1] = "videos/video2.mp4";
//   videos[2] = "videos/video3.mp4";
//   document.querySelector("video").src = videos[i];

//   if (i < videos.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }

//   setTimeout(videoSlide, 3000);
// }

// videoSlide();

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

// KARUSELL

const carouselImages = document.querySelector(".carousel__images");
const carouselButtons = document.querySelectorAll(".carousel__button");
const numberOfImages = document.querySelectorAll(
  ".carousel__images img"
).length;
let imageIndex = 1;
let translateX = 0;

console.log(numberOfImages);

carouselButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "previous") {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 400;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 400;
      }
    }

    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});

// KARUSELL 2
