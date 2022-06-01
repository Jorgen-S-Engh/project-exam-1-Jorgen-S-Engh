// const container = document.querySelector(".api-container");
// const slideContainer = document.querySelector(".slide-container");
// const projectsContainer = document.querySelector(".project-container");

// const carouselItem = document.querySelectorAll(".carousel-item");
// const projectItem = document.querySelectorAll(".project-item");
// const url = "https://jorgeneksamen2022.online/wp-json/wp/v2/posts/";

// async function getApi() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     for (let i = 0; i < data.length; i++) {
//       carouselItem.innerHTML += `

//       <div class="project-item">
//         <img src="${data[i].featured_media_src_url}" />
//         <div class="project-card"></div>;
//       </div>`;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// getApi();

// async function getApi() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);

//     for (let i = 0; i < data.length; i++) {
//       carouselItem.innerHTML += `
//       <li class="slide" ${i === 0 ? "data-active='true'" : ""}>
//       <a class="project-items" href="spesific-projects.html?id=${
//         data[i].id
//       }"><img src="${data[i].featured_media_src_url}" alt="Nature Image #2"></a>
//       </li>`;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// getApi();

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

//   setTimeout(videoSlide, 8000);
// }

// videoSlide();

// KARUSELL

// const buttons = document.querySelectorAll("[data-carousel-button]");
// const slide = document.querySelector("[data-slides]");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1;
//     const slides = button
//       .closest("[data-carousel]")
//       .querySelector("[data-slides]");

//     const activeSlide = slides.querySelector("[data-active]");
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset;
//     if (newIndex < 0) newIndex = slides.children.length - 1;
//     if (newIndex >= slides.children.length) newIndex = 0;

//     slides.children[newIndex].dataset.active = true;
//     delete activeSlide.dataset.active;
//   });
// });
let slides = document.getElementsByClassName("carousel__item");
const carsouselContainer = document.getElementsByClassName("carousel");
const carouselItem = document.getElementsByClassName("carousel__item");
const url = "https://jorgeneksamen2022.online/wp-json/wp/v2/posts/";

async function getApi() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
      

      console.log(data[i].featured_media_src_url)
      carsouselContainer[0].innerHTML += `
                                  <div class="carousel__item ${i === 0 ? "carousel__item--visible" : ""}">
                                      <img src="${data[i].featured_media_src_url}" alt="" />
                                  </div>`;
    } 
    // slides.document.getElementsByClassName("carousel__item");
  } catch (error) {
    console.log(error);
  }

}

getApi();

let slidePosition = 0;

const totalSlides = slides.length;

// document
//   .getElementById("carousel__button--next")
//   .addEventListener("click", function () {
//     moveToNextSlide();
//   });
// document
//   .getElementById("carousel__button--prev")
//   .addEventListener("click", function () {
//     moveToPrevSlide();
//   });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel__item--visible"); //se på disse
    slide.classList.add("carousel__item--hidden"); //se på disse
  }

  slides[slidePosition].classList.add("carousel__item--visible");
}

function moveToNextSlide() {
  if (slidePosition === slides.length - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  console.log(slidePosition);

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = slides.length - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}


window.addEventListener("click", (e) => {
  if(e.target === document.querySelector("#carousel__button--next")) {
    moveToNextSlide()
}else if(e.target === document.querySelector("#carousel__button--prev")) {
  moveToPrevSlide()
}}
);