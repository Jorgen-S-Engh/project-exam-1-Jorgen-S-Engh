const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const container = document.querySelector(".results-container");

const url = "https://jorgeneksamen2022.online/wp-json/wp/v2/posts/" + id;

async function getApi() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(data.title);

  for (let i = 0; i < data.length; i++) {
    console.log(data[i].title.rendered);
  }

  container.innerHTML += `
                        <h1>${data.title.rendered}</h1>
                        <p>${data.excerpt.rendered}</p>
                        <img src=${data.featured_media_src_url}>`;
}

getApi();
