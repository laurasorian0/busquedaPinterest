import "./importar_img.css"

const accesKey = "kbKhV61TOwxZ4paVDqF0x_AI8Nv5A9miWtbp8Yh5YDU";
const endPoint = 'https://api.unsplash.com/search/photos';

let p;

export async function getImages(query) {
  let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
  let jsonResponse = await response.json();
  let imagesList = await jsonResponse.results;

  const contenedorIMG = document.querySelector(".contenedorIMG");

  if (imagesList && imagesList.length > 0) {
    createImages(imagesList);

    if (p) {
      p.remove();
    }
  } else {
    if (!p) {
      p = document.createElement("p");
    }

    contenedorIMG.innerHTML = "";
    p.innerHTML = "No se han encontrado imágenes";
    contenedorIMG.appendChild(p);
    console.log("No se han encontrado imágenes");
  }
}



function createImages(imagesList) {
  const app = document.querySelector("#app");


  let contenedorIMG = document.querySelector(".contenedorIMG");
  if (!contenedorIMG) {
    contenedorIMG = document.createElement("div");
    contenedorIMG.className = "contenedorIMG";
  } else {

    contenedorIMG.innerHTML = "";
  }

  for (let i = 0; i < imagesList.length; i++) {
    const image = document.createElement('img');
    const div = document.createElement("div");
    div.className = "imgGenerada";
    div
    image.src = imagesList[i].urls.thumb;

    div.appendChild(image)
    contenedorIMG.appendChild(div);
  }


  app.appendChild(contenedorIMG);
}
