const container = document.querySelector(".api-container");

const url = "https://jorgeneksamen2022.online/wp-json/wp/v2/posts/";
// const imageUrl = "https://jorgeneksamen2022.online/wp-json/wp/v2/media/";

async function getApi() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);

    container.innerHTML += `
    <a href="spesific-projects.html?id=${data[i].id}">
        <h1>${data[i].title.rendered}</h1>
        <p>${data[i].excerpt.rendered}</p>
        <img src=${data[i].featured_media_src_url}>
    </a>`;
  }
}

getApi();

// async function getImage() {
//   try {
//     const response = await fetch(imageUrl);
//     const imageData = await response.json();

//     for (let i = 0; i < imageData.length; i++) {
//       const image = imageData[i].guid.rendered;
//       container.innerHTML += `<img class="project" src="${image}">`;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// getImage();

// // function createNode(getApi, callImage) {
// //   return `
// //             <div>
// //                 <h1>${title}</h1>
// //                 <img src="${image}"
// //             </div>`;
// // }

// // createNode();
