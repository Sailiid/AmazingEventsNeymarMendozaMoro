console.log("hola")

import {url, tarjetasSprint, checkboxCards, CombinacionFiltro, checkbox, search} from '../modulos/funciones.js'

fetch(url).then (response => response.json()).then(data =>{
    let eventos = data.events
    const arrayDatos = []
        let datos = data.currentDate
            for (let event of eventos){
                 if(event.date < datos){
                 arrayDatos.push(event)
    }
    
}console.log(arrayDatos);

     checkboxCards(arrayDatos)
     tarjetasSprint(arrayDatos)
     checkbox.addEventListener('change', () => {
       CombinacionFiltro(arrayDatos)
    })
    search.addEventListener("keyup", () => {
       CombinacionFiltro(arrayDatos)
    }
    )
  
 })



