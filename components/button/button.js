import "./button.css"
export const crearBoton = (textBoton, nodoPadre) => {
  const divElement = document.createElement("button");
  divElement.innerHTML = textBoton;
  divElement.id = textBoton
  nodoPadre.appendChild(divElement);
}
