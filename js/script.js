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

// SLIDER

let slides = document.getElementsByClassName("carousel__item");
const carsouselContainer = document.getElementsByClassName("carousel");
const carouselItem = document.getElementsByClassName("carousel__item");
const projectHeadline = document.querySelector(".projects-headline")
const url = "https://jorgeneksamen2022.online/wp-json/wp/v2/posts/";

async function getApi() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
      console.log(data[i].featured_media_src_url);
      carsouselContainer[0].innerHTML += `
      <a href="spesific-projects.html?id=${data[i].id}">
            <div class="carousel__item ${
              i === 0 ? "carousel__item--visible" : ""
            }">
                <img src="${data[i].featured_media_src_url}" alt="" />
                <div class="project-card">
                  <h3>${data[i].title.rendered}</h3>
                  <p>${data[i].excerpt.rendered}</p>  
                  <button class="btn-spesific-project">Les mer</button>
                </div>
                
            </div></a>`;
    }
    // slides.document.getElementsByClassName("carousel__item");
  } catch (error) {
    projectHeadline.innerHTML = 
    `
    <h2>Kunne ikke laste prosjekter</h2>
    <p>returnerte følgende feilmelding:</p>
    <p>${error}</p>
    `;
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
  if (e.target === document.querySelector("#carousel__button--next")) {
    moveToNextSlide();
  } else if (e.target === document.querySelector("#carousel__button--prev")) {
    moveToPrevSlide();
  }
});
