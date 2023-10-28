console.log("hola")
const dataSprint = data.events
const arrayDatos = []

let datos = data.currentDate
for (let events of dataSprint) {

    if (events.date > datos) {
        arrayDatos.push(events)
    }
}
console.log(arrayDatos)
const checkboxUpComing = document.getElementById("checkboxUpComming")
const searchPast = document.getElementById("inlineFormInputGroupUsername")
const cardsUpcoming = document.getElementById("UpComing")

let categoriasCheckbox = Array.from(arrayDatos.map(events => events.category.replace(" ", "-")))
console.log(categoriasCheckbox);

//Funcion Checkbox
function filtroCheckbox(categorias) {
    categorias.forEach(categoria => {
        let seleccion = document.createElement("div")
        seleccion.classList.add("form-check", "form-check-inline")
        seleccion.innerHTML = `
     <input class="form-check-input" type="checkbox" id="${categoria}" value="${categoria}">
     <label class="form-check-label text-white" for="${categoria}">${categoria}</label>`
        checkboxUpComing.appendChild(seleccion)

    }
    )
}
function buscador(events) {
    return events.filter(events => events.name.toLowerCase().includes(searchPast.value.toLowerCase()))
}

filtroCheckbox(categoriasCheckbox)

// Funcion de los Checkbox 
function UpComingEscuchador(arrayCategoria) {
    let cardCategory = Array.from(document.querySelectorAll(`input[type=checkbox]:checked`)).map(checkbox => checkbox.value)
    console.log(cardCategory);
    let arrayChecked = []
    arrayCategoria.forEach(categoria => {
        cardCategory.forEach(carta => {
            if (carta == categoria.category.replace(" ", "-"))
                arrayChecked.push(categoria)
        })
    }
    )
    if (arrayChecked.length === 0) {
        return arrayDatos

    }
    console.log(arrayChecked);
    return arrayChecked

}


function cardsEventsUpcomming(events) {
    if (events.length === 0) {
        cardsUpcoming.innerHTML = `<h2 class="text-light align-items-center">Lo Siento, su Busqueda no se ha encontrado</h2>`
    } else {
        cardsUpcoming.innerHTML = "";
        for (let evento of events) {
            const tarjetas = document.createElement("div")
            tarjetas.classList.add("tarjetas")
            tarjetas.style.width = "20rem"
            tarjetas.style.height = "30rem"
            tarjetas.innerHTML = ` <div class="d-flex flex-column p-1 rounded-top bg-success-subtle border-success-subtle">
 <img src="${evento.image}" class=" imagen card-img-top rounded-top h-50" alt="museum">
 <div class="card-body text-center text-uppercase pt-3">
    <h5 class="card-title ">${evento.name}</h5>
 </div>
 <div class="card-body text-center fs-5>
    <p class="card-text">${evento.description}</p>
 </div>
 <div class="cuerpotarjetas px-3">
    <p class="card-text fs-4 text-danger"> $ ${evento.price}</p>
    <a href="./Details.html?_id=${evento._id}" class="btn btn-success">Details</a>
 </div>
 </div>`
            cardsUpcoming.appendChild(tarjetas)
        }
    }
}
cardsEventsUpcomming(arrayDatos)

function CombinacionFiltro(events) {
    let checkboxFiltro = UpComingEscuchador(events);
    let buscadorFiltro = buscador(checkboxFiltro)
    cardsEventsUpcomming(buscadorFiltro)

}

// Escuchador 
checkboxUpComing.addEventListener('change', () => {
    CombinacionFiltro (arrayDatos)
})
searchPast.addEventListener("keyup", () => {
    CombinacionFiltro (arrayDatos)
}
)