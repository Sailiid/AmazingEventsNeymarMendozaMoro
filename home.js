console.log("hola")
import { tarjetasSprint, checkboxCards, CombinacionFiltro,  url, checkbox, search } from './modulos/funciones.js';
 console.log(url);

 
fetch(url).then (response => response.json()).then(data =>{
   let eventos = data.events

    checkboxCards(eventos)
    tarjetasSprint(eventos)
    checkbox.addEventListener('change', () => {
      CombinacionFiltro(eventos)
   })
   search.addEventListener("keyup", () => {
      CombinacionFiltro(eventos)
   }
   )
  console.log(data.events);
})
