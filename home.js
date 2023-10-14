console.log("hola")

const dataSprint = data.events
const cardsHome = document.getElementById("cards")


for (let events of dataSprint) {
   const tarjetas = document.createElement("div")
   tarjetas.classList.add("tarjetas")
   tarjetas.style.width = "13rem"
   tarjetas.style.height = "18rem"
   tarjetas.innerHTML = ` <div class="d-flex flex-column p-1 rounded-top bg-body-secondary border border-dark">
 <img src="${events.image}" class="card-img-top rounded-top h-50" alt="museum">
 <div class="card-body text-center text-uppercase pt-3">
    <h5 class="card-title ">${events.name}</h5>
 </div>
 <div class="cuerpotarjetas">
    <p class="card-text fs-4 text-danger"> $ ${events.price}</p>
    <a href="./Details.html" class="btn btn-dark">Details</a>
 </div>
 </div>`
   cardsHome.appendChild(tarjetas)
}
