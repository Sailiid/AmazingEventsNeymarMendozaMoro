
console.log("hola")
import {url, Tabla1, Tabla2, Tabla3 } from '../modulos/funciones.js'



fetch(url).then(response => response.json()).then(data => {
    let eventos = data.events
    Tabla1(eventos)
    Tabla2(eventos)

    const arrayDatos = []
        let datos = data.currentDate
            for (let event of eventos){
                 if(event.date < datos){
                 arrayDatos.push(event)
    }
}
    Tabla3(arrayDatos)
            
}
)

    



