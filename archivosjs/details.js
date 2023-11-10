console.log("hola")

import {url, details} from "../modulos/funciones.js"

fetch(url).then(response => response.json()).then( data => {
    let eventos = data.events
    details(eventos)
 console.log(eventos)
})