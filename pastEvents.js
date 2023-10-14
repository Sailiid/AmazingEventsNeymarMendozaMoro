console.log("hola")

const dataSprint = data.events
const arrayDatos = []

let datos = data.currentDate
for (let events of dataSprint){
    
    if(events.date < datos){
        arrayDatos.push(events)
    }
}
console.log(arrayDatos)
const cardsPast = document.getElementById("Past")


for ( let events of dataSprint) {
    if (datos > events.date) {
        const tarjetas = document.createElement("div")
        tarjetas.classList.add("tarjetas")
        tarjetas.style.width = "13rem"
        tarjetas.style.height = "20rem"
        tarjetas.innerHTML = ` <div class="d-flex flex-column p-1 rounded-top bg-danger-subtle border border-danger">
 <img src="${events.image}" class="card-img-top rounded-top h-50" alt="museum">
 <div class="card-body text-center text-uppercase pt-3">
    <h5 class="card-title ">${events.name}</h5>
 </div>
 <div class="cuerpotarjetas">
    <p class="card-text fs-4 text-danger"> $ ${events.price}</p>
    <a href="./Details.html" class="btn btn-dark">Details</a>
 </div>
 </div>`
        cardsPast.appendChild(tarjetas)
    }
}