const projectsContainer = document.querySelector(".project-container");
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
    projectsContainer.innerHTML += `
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

    // container.innerHTML +=
    // <a class="project-items" href="spesific-projects.html?id=${data[i].id}">
    //     <h2>${data[i].title.rendered}</h2>
    //     <img src=${data[i].featured_media_src_url}>
    //     <p>${data[i].excerpt.rendered}</p>
    // </a>`;
  }
}

getApi();
