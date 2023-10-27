console.log("hola")

const dataSprint = data.events
const cardsHome = document.getElementById("cards")
const checkbox = document.getElementById("checkbox")
const search = document.getElementById("inlineFormInputGroupUsername")


//array

let arrayCategoria = Array.from([...new Set(dataSprint.map(events => events.category.replace("-", " ")))])

function checkboxCards(categoria) {
   for (let category of categoria) {
      const seleccion = document.createElement("div")
      seleccion.classList.add("form-check", "form-check-inline")
      seleccion.innerHTML = `
   <input class="form-check-input" type="checkbox" id="${category}" value="${category}">
   <label class="form-check-label text-white" for="${category}">${category}</label>`
      checkbox.appendChild(seleccion)
   }
}
checkboxCards(arrayCategoria)

function buscador (escuchador_funcion) {
  escuchador_funcion.filter (events => events.name.toLowerCase().includes(search.value.toLowerCase()))
   
}

// funcion eschuador evento
function escuchador(events) {
   let cardCategory = Array.from(document.querySelectorAll(`input[type=checkbox]:checked`)).map(checkbox => checkbox.value)
   let arrayChecked = []
   
   console.log(cardCategory);
     events.forEach(Seleccionada =>{
         cardCategory.forEach(eventoCategoria => {
            if(eventoCategoria == Seleccionada.category)
            arrayChecked.push(Seleccionada)
         })
         }
         )
          if(arrayChecked.length === 0){
      arrayChecked = dataSprint
      
   } console.log(arrayChecked)
   return arrayChecked

  }
//filtar las cards




// cards


function tarjetasSprint(events) { 
   cardsHome.innerHTML = "";
   for (let evento of events) { 
      const tarjetas = document.createElement("div")
      tarjetas.classList.add("tarjetas")
      tarjetas.style.width = "20rem"
      tarjetas.style.height = "30rem"
      tarjetas.innerHTML = ` <div class="d-flex flex-column p-1 rounded-top bg-body-secondary border border-light">
 <img src="${evento.image}" class=" imagen card-img-top rounded-top h-50" alt="">
 <div class="card-body text-center text-uppercase pt-3">
    <h5 class="card-title ">${evento.name}</h5>
    </div>
    <div class="card-body text-center fs-5>
    <p class="card-text">${evento.description}</p>
    </div>
 <div class="cuerpotarjetas px-4">
    <p class="card-text fs-3 text-danger"> $ ${evento.price}</p>
    <a href="./Details.html?_id=${evento._id}" class="btn btn-outline-dark btn-lg">Details</a>
 </div>
 </div>`
      cardsHome.appendChild(tarjetas)
   }
}
 
tarjetasSprint(dataSprint)


//escuchador
checkbox.addEventListener('change', () => {
   let cartasFiltradas = escuchador(dataSprint); 
   return tarjetasSprint(cartasFiltradas)
})

search.addEventListener("keyup", () => {
let textoBuscador = buscador(dataSprint)
tarjetasSprint(textoBuscador)
}
)