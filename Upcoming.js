console.log("hola")

const dataSprint = data.events
let datos = data.currentDate

const cardsUpcoming = document.getElementById("UpComing")

for ( let events of dataSprint) {
    if (datos < events.date) {
        const tarjetas = document.createElement("div")
        tarjetas.classList.add("tarjetas")
        tarjetas.style.width = "13rem"
        tarjetas.style.height = "20rem"
        tarjetas.innerHTML = ` <div class="d-flex flex-column p-1 rounded-top bg-success-subtle border border-success">
 <img src="${events.image}" class="card-img-top rounded-top h-50" alt="museum">
 <div class="card-body text-center text-uppercase pt-3">
    <h5 class="card-title ">${events.name}</h5>
 </div>
 <div class="cuerpotarjetas">
    <p class="card-text fs-4 text-danger"> $ ${events.price}</p>
    <a href="./Details.html" class="btn btn-dark">Details</a>
 </div>
 </div>`
        cardsUpcoming.appendChild(tarjetas)
    }
}


