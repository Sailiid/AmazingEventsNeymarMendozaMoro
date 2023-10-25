console.log("hola")

const dataSprint = data.events
const checkbox = document.getElementById("checkbox")
//array

let categoriaNueva = dataSprint.map(events => events.category.replace("-", " "));
let arrayCategory = [...new Set(categoriaNueva)]
let arrayCategoria = Array.from(arrayCategory)


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

// Escuchador 
// checkbox.addEventListener('change', escuchador)


// funcion eschuador evento
function escuchador(escuchador_funcion) {
   let cardCategory = Array.from(document.querySelectorAll(`input[type=checkbox]:checked`)).map(checkbox => checkbox.value)
   let arrayChecked = []
   console.log(cardCategory);
      escuchador_funcion.forEach(categoriaSeleccionada =>{
         cardCategory.forEach(eventoCategoria => {
            if(eventoCategoria == categoriaSeleccionada.replace(" ", "-"))
            arrayChecked.push(categoriaSeleccionada)
         })
         }
         )
          if(arrayChecked.length == 0){
      arrayChecked.push(cardCategory)
      return 
   }
   return arrayChecked

  }
//filtar las cards

checkbox.addEventListener('change', () => {
   let cartasFiltradas = escuchador(dataSprint);
   tarjetasSprint(cartasFiltradas)
})

// cards
const cardsHome = document.getElementById("cards")

function tarjetasSprint(events) {
   cardsHome.innerHTML = "";
   for (let events of dataSprint) {
      const tarjetas = document.createElement("div")
      tarjetas.classList.add("tarjetas")
      tarjetas.style.width = "20rem"
      tarjetas.style.height = "30rem"
      tarjetas.innerHTML = ` <div class="d-flex flex-column p-1 rounded-top bg-body-secondary border border-light">
 <img src="${events.image}" class=" imagen card-img-top rounded-top h-50" alt="">
 <div class="card-body text-center text-uppercase pt-3">
    <h5 class="card-title ">${events.name}</h5>
    </div>
    <div class="card-body text-center fs-5>
    <p class="card-text">${events.description}</p>
    </div>
 <div class="cuerpotarjetas px-4">
    <p class="card-text fs-3 text-danger"> $ ${events.price}</p>
    <a href="./Details.html?_id=${events._id}" class="btn btn-outline-dark btn-lg">Details</a>
 </div>
 </div>`
      cardsHome.appendChild(tarjetas)
   }
}

tarjetasSprint(dataSprint)