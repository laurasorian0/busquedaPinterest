import { getImages } from './components/Importar_img/importar_img'
import { createNav } from './components/navegador/navegador'
import './style.css'


const valorInput = () => {
  const input = document.querySelector(".input");
  let valorInput = "random"
  getImages(valorInput)
  input.addEventListener('keyup', function (event) {

    if (event.key === 'Enter') {
      valorInput = input.value;
      console.log(valorInput);
      getImages(valorInput);

    }
  });
}

createNav();
valorInput();