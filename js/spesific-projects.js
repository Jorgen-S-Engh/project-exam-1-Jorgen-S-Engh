const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log("test");

const container = document.querySelector(".results-container");
const headline = document.querySelector(".banner-container");
const modal = document.querySelector(".modal-image-container");
const modalPop = document.querySelector(".modal-popup");

const url = "https://jorgeneksamen2022.online/wp-json/wp/v2/posts/" + id;

async function getApi() {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  console.log(data);
  headline.innerHTML += `<h1>${data.title.rendered}`;
  modal.innerHTML += `<img src="${data.featured_media_src_url}" alt="" />`;
  modalPop.innerHTML += `<img src="${data.featured_media_src_url}" alt="" />`;
  headline.style.backgroundImage = `url("${data.featured_media_src_url}")`;

  // for (let i = 0; i < data.length; i++) {
  //   console.log(data[i].title.rendered);
  // }
  // headline.innerHTML += `<h1>${data.title.rendered}`;

  // container.innerHTML += `
  //                       <h1>${data.title.rendered}</h1>
  //                       <p>${data.excerpt.rendered}</p>
  //                       <img src=${data.featured_media_src_url}>`;
}

getApi();
