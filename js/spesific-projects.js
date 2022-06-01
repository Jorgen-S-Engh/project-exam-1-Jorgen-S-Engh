const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
// const mediaID = params.get("id");
// console.log(mediaID);
const errorMessage = document.querySelector(".error-message");
const main = document.querySelector("main");
const loader = document.querySelector(".loader-container");
const container = document.querySelector(".results-container");
const headline = document.querySelector(".banner-container");
const modal = document.querySelector(".modal-image-container");
const modalPop = document.querySelector(".modal-popup");
const projectText = document.querySelector(".text-content-project");

const url = "https://jorgeneksamen2022.online/wp-json/wp/v2/posts/" + id;
const media = "https://jorgeneksamen2022.online/wp-json/wp/v2/media/";

async function getApi() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    loader.innerHTML = "";
    headline.innerHTML += `<h1>${data.title.rendered}</h1>`;
    modal.innerHTML += `<img src="${data.featured_media_src_url}" alt="" />`;
    modalPop.innerHTML += `<img src="${data.featured_media_src_url}" alt="" />`;
    headline.style.backgroundImage = `url("${data.featured_media_src_url}")`;
    document.title = `Prosjekt | ${data.title.rendered}`;
    projectText.innerHTML += `${data.content.rendered}`;
  } catch (error) {
    main.innerHTML = "";
    errorMessage.innerHTML = `
    <h2>Beklager noe gikk galt</h2>
    <a href="index.html">Tilbake til forsiden</a>
    <a href="index.html"
    ><img
      class="logo-mobile-menu"
      src="icons/ameta-logo-hvit-f.svg"
      alt="Ameta sin logo"/></a>
    `;
    console.log(error);
  }
}

getApi();

// ------------------ MEDIA ALT-TEXT ------------------

async function getMedia() {
  try {
    const response = await fetch(media);
    const data = await response.json();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].alt_text);
    }
  } catch (error) {
    console.log(error);
  }
}

getMedia();

// ------------------ MODAL ------------------

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

// Funker ikke, vet ikke hvorfor. Skriv i rapporten
const zoom = document.querySelector(".fa-magnifying-glass");

modal.addEventListener("moseover", () => {
  zoom.style.visibility = "visible";
  console.log("mouse over");
});

// ------------------  POST COMMNET BLOGPOST------------------

const commentUrl =
  "https://jorgeneksamen2022.online//wp-json/wp/v2/comments?post?=";
const comment = document.querySelector("#comment-comment");
const form = document.querySelector(".comment-form");
const commnetOutput = document.querySelector(".comment-output");

async function getComment() {
  try {
    console.log(id);
    const response = await fetch(commentUrl + id);
    const data = await response.json();
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
      console.log(data[i.author_name]);
      console.log(data[i].content.rendered);
      createHTML(data[i]);
      commnetOutput.innerHTML += `
      <div class="comment-item">
        <p><strong>${data[i].author_name} skrev:</strong> <p/>
        <p>${data[i].content.rendered}</p>
      </div>
      `;
    }
  } catch (error) {
    console.log(error);
  }
}

function postComment() {
  event.preventDefault();
  console.log("submitted");
}

form.addEventListener("submit", postComment);

getComment();

function createHTML(post) {
  console.log(post.author_name);
  console.log(post.content.rendered);
}

const cName = document.querySelector("#comment-name");
const cEmail = document.querySelector("#comment-email");
const cComment = document.querySelector("#comment-comment");
const submit = document.querySelector("#post-comment");

submit.onclick = function () {
  event.preventDefault();

  const data = JSON.stringify({
    post: id,
    author_name: cName.value,
    author_email: cEmail.value,
    content: cComment.value,
  });

  ACTION_URL = "https://jorgeneksamen2022.online//wp-json/wp/v2/comments";
  fetch(ACTION_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((response) => {
      if (response.ok === true) {
      }

      return response.json();
    })
    .then((object) => {})
    .catch((error) => console.error("Error:", error));
};
