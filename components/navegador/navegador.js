import { crearBoton } from "../button/button"
import "./navegador.css"


export const createNav = () => {
  const listaNav = ["Inicio", "Hoy", "Crear"];
  const listaIconos = ["./public/3602145.png", "./public/b1290c469fcbbd75a564012feffd4ce7.png", "./public/17772.png"];
  const logoPinterest = "./public/580b57fcd9996e24bc43c52e.png";

  const app = document.querySelector("#app");

  const nav = document.createElement("nav"); //nav contenedor

  const divpinterest = document.createElement("div");
  const pinterest = document.createElement("img");
  pinterest.src = logoPinterest;

  const divElementosNav = document.createElement("div"); // Contenedor de  Inicio, Hoy y Crear
  divElementosNav.className = "divElementosNav";

  crearBoton("Inicio", divElementosNav);
  crearBoton("Hoy", divElementosNav);
  crearBoton("Crear", divElementosNav);



  const input = document.createElement("input");
  input.type = "text";
  input.className = "input"; // Input
  input.placeholder = "Buscar";

  const divImagenesNav = document.createElement("div"); //Contenedor de imagenes del nav
  divImagenesNav.className = "divImagenesNav";
  for (const iterator of listaIconos) {
    const divIterator = document.createElement("img");
    divIterator.src = iterator;
    divImagenesNav.appendChild(divIterator);

  }
  app.appendChild(nav);
  divpinterest.appendChild(pinterest);
  nav.appendChild(divpinterest);
  nav.appendChild(divElementosNav);
  nav.appendChild(input);
  nav.appendChild(divImagenesNav);





  console.log(app);
}
