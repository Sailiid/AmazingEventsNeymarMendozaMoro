console.log("hola")
const dataSprint = data.events
const arrayDatos = []

let datos = data.currentDate
for (let events of dataSprint){
    
    if(events.date > datos){
        arrayDatos.push(events)
    }
}
console.log(arrayDatos)

const cardsUpcoming = document.getElementById("UpComing")

for ( let events of dataSprint) {
    if (datos < events.date) {
        const tarjetas = document.createElement("div")
        tarjetas.classList.add("tarjetas")
        tarjetas.style.width = "20rem"
        tarjetas.style.height = "30rem"
        tarjetas.innerHTML = ` <div class="d-flex flex-column p-1 rounded-top bg-success-subtle border-success-subtle">
 <img src="${events.image}" class=" imagen card-img-top rounded-top h-50" alt="museum">
 <div class="card-body text-center text-uppercase pt-3">
    <h5 class="card-title ">${events.name}</h5>
 </div>
 <div class="card-body text-center fs-5>
    <p class="card-text">${events.description}</p>
 </div>
 <div class="cuerpotarjetas px-3">
    <p class="card-text fs-4 text-danger"> $ ${events.price}</p>
    <a href="./Details.html?_id=${events._id}" class="btn btn-success">Details</a>
 </div>
 </div>`
        cardsUpcoming.appendChild(tarjetas)
    }
}


