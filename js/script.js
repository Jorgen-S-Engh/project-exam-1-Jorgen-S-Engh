const container = document.querySelector(".api-container");
const slideContainer = document.querySelector(".slide-container");
const projectsContainer = document.querySelector(".project-container");
const url = "https://jorgeneksamen2022.online/wp-json/wp/v2/posts/";

async function getApi() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      // carouselImages.innerHTML += `
      // <a class="project-items" href="spesific-projects.html?id=${data[i].id}">
      //     <h2>${data[i].title.rendered}</h2>
      //     <img src=${data[i].featured_media_src_url}>
      //     <p>${data[i].excerpt.rendered}</p>
      // </a>`;
      slideContainer.innerHTML += `
      <li class="slide" ${i === 0 ? "data-active='true'" : ""}>
      <a class="project-items" href="spesific-projects.html?id=${
        data[i].id
      }"><img src="${data[i].featured_media_src_url}" alt="Nature Image #2"></a>
      </li>`;

      // projectsContainer.innerHTML += `<h3>${data[i].title.rendered}</h3>`;

      // container.innerHTML +=
      // <a class="project-items" href="spesific-projects.html?id=${data[i].id}">
      //     <h2>${data[i].title.rendered}</h2>
      //     <img src=${data[i].featured_media_src_url}>
      //     <p>${data[i].excerpt.rendered}</p>
      // </a>`;
    }
  } catch (error) {
    console.log(error);
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
