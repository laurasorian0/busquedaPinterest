import { getImages } from './components/Importar_img/importar_img'
import { createNav } from './components/navegador/navegador'
import './style.css'


const clientID = "qkiNp3vTd9TFvvHx0uN4EizStFCEZ-CP6-yIfbC9f64";
const endpoint = `https://api.unsplash.com/photos/random?count=10&client_id=${clientID}`;

export async function imagesRandom() {
  let response = await fetch(endpoint);
  let jsonResponse = await response.json();
  let imagesList = await jsonResponse;

  getImages(imagesList);
}



const valorInput = () => {
  const input = document.querySelector(".input");
  // let valorInput = "random"
  //getImages(valorInput)
  input.addEventListener('keyup', function (event) {

    if (event.key === 'Enter') {
      let valorInput = input.value;
      console.log(valorInput);
      getImages(valorInput);

    }
  });
}
const botonInicio = () => {
  const miBoton = document.querySelector("#Inicio")
  console.log(miBoton)

  miBoton.addEventListener('click', function () {
    imagesRandom();
    //console.log('Se hizo clic en el botón');
  });
}



imagesRandom();
createNav();
valorInput();

botonInicio()