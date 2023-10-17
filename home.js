console.log("hola")

const dataSprint = data.events


const cardsHome = document.getElementById("cards")

function tarjetasSprint(arrayDatos) {
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
    <a href="./Details.html" class="btn btn-outline-dark btn-lg">Details</a>
 </div>
 </div>`
      cardsHome.appendChild(tarjetas)
   }
}

tarjetasSprint(dataSprint)