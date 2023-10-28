console.log("hola")

const dataSprint = data.events
const arrayDatos = []
console.log(arrayDatos);
let datos = data.currentDate
for (let events of dataSprint){
    if(events.date < datos){
        arrayDatos.push(events)
    }
}

const checkboxPast = document.getElementById("checkboxPast")
const searchPast = document.getElementById("inlineFormInputGroupUsername")
const cardsPast = document.getElementById("Past")

// Funcion Checkbox 
let categoriasCheckbox = Array.from(arrayDatos.map(events => events.category.replace(" ", "-")))
console.log(categoriasCheckbox);

function buscador (events) {
    return events.filter (events => events.name.toLowerCase().includes(searchPast.value.toLowerCase()))
  }

function filtroCheckbox (categorias) {
    categorias.forEach(categoria => {
    let  seleccion = document.createElement("div")
    seleccion.classList.add("form-check", "form-check-inline")
    seleccion.innerHTML = `
     <input class="form-check-input" type="checkbox" id="${categoria}" value="${categoria}">
     <label class="form-check-label text-white" for="${categoria}">${categoria}</label>`
     checkboxPast.appendChild(seleccion)

    }
    )
}

filtroCheckbox(categoriasCheckbox)




// Funcion de los Checkbox 
function pastEscuchador(arrayCategoria) {
    let cardCategory = Array.from(document.querySelectorAll(`input[type=checkbox]:checked`)).map(checkbox => checkbox.value)
    console.log(cardCategory);
    let arrayChecked = []
         arrayCategoria.forEach(categoria =>{
          cardCategory.forEach(carta => {
             if(carta == categoria.category.replace(" ", "-"))
             arrayChecked.push(categoria)
          })
          }
          )
           if(arrayChecked.length === 0){
      return arrayDatos
       
    }
    console.log(arrayChecked);
    return arrayChecked
 
   }

function cardsEventsPast (events){
    if (events.length === 0) {
        cardsPast.innerHTML = `<h2 class="text-light align-items-center">Lo Siento, su Busqueda no se ha encontrado</h2>`
    } else {
    cardsPast.innerHTML = "";
for ( let evento of events) {
        const tarjetas = document.createElement("div")
        tarjetas.classList.add("tarjetas")
        tarjetas.style.width = "20rem"
        tarjetas.style.height = "30rem"
        tarjetas.innerHTML = ` <div class="d-flex flex-column p-1 rounded-top bg-danger-subtle border-danger-subtle">
 <img src="${evento.image}" class="card-img-top rounded-top h-50" alt="museum">
 <div class="card-body text-center text-uppercase pt-3">
    <h5 class="card-title ">${evento.name}</h5>
 </div>
 <div class="card-body text-center fs-5>
    <p class="card-text">${evento.description}</p>
 </div>
 <div class="cuerpotarjetas px-4">
    <p class="card-text fs-4 text-danger"> $ ${evento.price}</p>
    <a href="./Details.html?_id=${evento._id}" class="btn btn-danger">Details</a>
 </div>
 </div>`
        cardsPast.appendChild(tarjetas)
    }
}
}
cardsEventsPast(arrayDatos)

function CombinacionFiltro(events) {
    let checkboxFiltro = pastEscuchador(events);
    let buscadorFiltro = buscador(checkboxFiltro)
    cardsEventsPast(buscadorFiltro)

}
 
// Escuchador 
checkboxPast.addEventListener('change', () => {
    CombinacionFiltro(arrayDatos)

 })

searchPast.addEventListener("keyup", () => {
    CombinacionFiltro(arrayDatos)
 }
)