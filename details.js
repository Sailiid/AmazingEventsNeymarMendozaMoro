const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("_id")
console.log("hola")
const dataSprint = data.events

let cardsId = dataSprint.find(events => events._id == id)

const cardsDetails = document.getElementById("cards")

function tarjetasSprint(events) {
    const tarjetas = document.createElement("div")
    
    let assistance = () => {
    if(events.assistance) { 
       return `<strong>Assistance:</strong>${events.assistance}`
    }else {
        return `<strong>Estimate:</strong> ${events.estimate}`
    } }
    
    console.log(events.estimate)
    console.log(events.assistance)
    
    tarjetas.classList.add("tarjetas")
    tarjetas.style.width = "65rem"
    tarjetas.innerHTML = `<div class="card" style="max-width: 1050px;">
       <div class="row g-0">
       <div class="col-md-8"> 
       <img src="${events.image}"class="img-fluid rounded-star" alt="">
       </div>
       <div class="col-md-4">
       <div class="card-body">
       <h5 class="card-title fs-2 text-center text-primary"><strong>${events.name}</strong></h5>
        <p class="card-text"><strong>Date:</strong> ${events.date}</p>
        <p class="card-text"><strong>Description:</strong> ${events.description}</p>
        <p class="card-text"><strong>Category:</strong>${events.category}</p>
        <p class="card-text"><strong>Place:</strong> ${events.place}</p>
        <p class="card-text"><strong>Capacity:</strong> ${events.capacity}</p>
        <p class="card-text"> ${assistance()}</p>
         <div class="cuerpotarjetas d-flex flex-row-reverse">
         <p class="card-text fs-3 text-danger"><strong> $ ${events.price}</strong></p>
         </div>
        </div>
        </div>
        </div>
        </div>`

    cardsDetails.appendChild(tarjetas)

}

tarjetasSprint(cardsId)