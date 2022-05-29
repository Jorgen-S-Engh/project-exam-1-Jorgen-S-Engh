const projectsContainer = document.querySelector(".project-container");
const morePostsButton = document.querySelector(".more");

const mainUrl = "https://jorgeneksamen2022.online/wp-json/wp/v2/posts/";

async function getApi(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    for (let i = 0; i < data.length; i++) {
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
    }
  } catch (error) {
    console.log("error");
  }
}

getApi(mainUrl);

morePostsButton.addEventListener("click", async () => {
  try {
    const response = await fetch(mainUrl + "?per_page=100&offset=10");
    const data = await response.json();
    morePostsButton.style.display = "none";

    for (let i = 0; i < data.length; i++) {
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
    }
  } catch (error) {
    console.log(error);
  }
});

const searchBtn = document.querySelector(".search-button");
const removeSearch = document.querySelector(".remove-search");

// searchBtn.onclick = function () {
//   const searchTerm = document.querySelector("#seach-field").value;
//   const searchUrl = mainUrl + `?search=${searchTerm}`;
//   console.log(searchUrl);
//   projectsContainer.innerHTML += "";
// };

searchBtn.addEventListener("click", async () => {
  try {
    const searchTerm = document.querySelector("#seach-field").value;
    const response = await fetch(mainUrl + `?search=${searchTerm}`);
    const data = await response.json();

    projectsContainer.innerHTML = "";
    morePostsButton.style.display = "none";

    for (let i = 0; i < data.length; i++) {
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
    }
  } catch (error) {
    console.log(error);
  }
});

removeSearch.addEventListener("click", function () {
  getApi(mainUrl);
});
