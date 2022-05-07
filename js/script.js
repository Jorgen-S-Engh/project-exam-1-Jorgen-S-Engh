const container = document.querySelector(".api-container");

const url = "https://jorgeneksamen2022.online/wp-json/wp/v2/posts/";
const imageUrl = "https://jorgeneksamen2022.online/wp-json/wp/v2/media/";

async function getApi() {
  try {
    const response = await fetch(url);

    const data = await response.json();
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);

      const headline = data[i].title.rendered;

      container.innerHTML += `      <a href="spesific-projects.html"
                                     <h2 class=project>${headline}</h2>
                                     <img src=${data[i].featured_media_src_url}>`;
    }
  } catch (err) {
    console.log(err);
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
