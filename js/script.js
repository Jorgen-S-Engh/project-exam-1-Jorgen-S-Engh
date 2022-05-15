const container = document.querySelector(".api-container");

const url = "https://jorgeneksamen2022.online/wp-json/wp/v2/posts/";

async function getApi() {
  const response = await fetch(url);
  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    container.innerHTML += `
    <a class="project-items" href="spesific-projects.html?id=${data[i].id}">
        <h2>${data[i].title.rendered}</h2>
        <img src=${data[i].featured_media_src_url}>
        <p>${data[i].excerpt.rendered}</p>
    </a>`;
  }
}

getApi();

// video slider

let i = 0;
const videos = [];

function videoSlide() {
  videos[0] = "videos/video1.mp4";
  videos[1] = "videos/video2.mp4";
  videos[2] = "videos/video3.mp4";
  document.querySelector("video").src = videos[i];

  if (i < videos.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(videoSlide, 3000);
}

videoSlide();

//hamburger menu
const hamburgerMenu = document.querySelector(".fa-bars");
const exitMenu = document.querySelector(".fa-xmark");
const menu = document.querySelector(".menu");

hamburgerMenu.addEventListener("click", function () {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

exitMenu.addEventListener("click", function () {
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

carouselButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "previous") {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 300;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 300;
      }
    }

    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});

// KARUSEL

const carouselImages = document.querySelector(".carousel__images");
const carouselButtons = document.querySelectorAll(".carousel__button");
const numberOfImages = document.querySelectorAll(
  ".carousel__images img"
).length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "previous") {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 300;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 300;
      }
    }

    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }
