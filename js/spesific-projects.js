const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const container = document.querySelector(".results-container");
const headline = document.querySelector(".banner-container");
const modal = document.querySelector(".modal-image-container");
const modalPop = document.querySelector(".modal-popup");
const projectText = document.querySelector(".text-content-project");

const url = "https://jorgeneksamen2022.online/wp-json/wp/v2/posts/" + id;

async function getApi() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    headline.innerHTML += `<h1>${data.title.rendered}</h1>`;
    modal.innerHTML += `<img src="${data.featured_media_src_url}" alt="" />`;
    modalPop.innerHTML += `<img src="${data.featured_media_src_url}" alt="" />`;
    headline.style.backgroundImage = `url("${data.featured_media_src_url}")`;
    document.title = `Prosjekt | ${data.title.rendered}`;
    projectText.innerHTML += `${data.content.rendered}`;
  } catch (error) {
    console.log(error);
  }
}

getApi();

const closeModal = document.querySelector(".close-modal");
// SKRIV OM FEILEN I RAPPORTEN

modal.addEventListener("click", () => {
  modalPop.style.display = "block";
});

// modalPop.addEventListener("click", ()=>{
//   modalPop.style.display = "none";
// })

window.addEventListener("click", (e) => {
  if (e.target === modalPop) {
    modalPop.style.display = "none";
  }
});

// Funker ikke, vet ikke hvorfor
const zoom = document.querySelector(".fa-magnifying-glass");

modal.addEventListener("mouseover", () => {
  zoom.style.visibility = "visible";
  console.log("mouse over");
});
