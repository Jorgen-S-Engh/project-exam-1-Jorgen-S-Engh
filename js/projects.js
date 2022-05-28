const projectsContainer = document.querySelector(".project-container");
const morePostsButton = document.querySelector(".more");
const morePostsContainer = document.querySelector(".more-post-container");

let url = "https://jorgeneksamen2022.online/wp-json/wp/v2/posts/";

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
      projectsContainer.innerHTML += `
            <a href="spesific-projects.html?id=${data[i].id}">
              <div class="project-items">
                <div class= project-img>
                  <img src="${data[i].featured_media_src_url}" alt="" />
                </div>
               <div class="project-card">
                <h3>${data[i].title.rendered}</h3>
                <p>${data[i].excerpt.rendered}</p>  
                <button class="btn-spesific-project">Les mer</button>
               </div>
              </div>
            </a>`;

      // container.innerHTML +=
      // <a class="project-items" href="spesific-projects.html?id=${data[i].id}">
      //     <h2>${data[i].title.rendered}</h2>
      //     <img src=${data[i].featured_media_src_url}>
      //     <p>${data[i].excerpt.rendered}</p>
      // </a>`;
    }
  } catch (error) {
    console.log("error");
  }
}

getApi();

morePostsButton.addEventListener("click", async () => {
  try {
    const response = await fetch(url + "?per_page=100&offset=10");
    const data = await response.json();
    morePostsButton.style.display = "none";

    for (let i = 0; i < data.length; i++) {
      morePostsContainer.innerHTML += `
            <a href="spesific-projects.html?id=${data[i].id}">
              <div class="project-items">
                <div class= project-img>
                  <img src="${data[i].featured_media_src_url}" alt="" />
                </div>
               <div class="project-card">
                <h3>${data[i].title.rendered}</h3>
                <p>Short description</p>  
               </div>
              </div>
            </a>`;
    }
  } catch (error) {
    console.log("error");
  }
});
