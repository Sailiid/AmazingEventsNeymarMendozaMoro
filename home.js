console.log("hola")
const cardsHome = document.getElementById(cards)
const tarjetas = document.createElement("div")
tarjetas.classList.add ("tarjetas")
tarjetas.style.width = "15rem"
tarjetas.innerHTML= ` <img src="./Recursos_Amazing_Events_Task_1/outing_to_the_museum.jpg" class="card-img-top" alt="museum">
<div class="card-body">
    <h5 class="card-title">Art Exhibition</h5>
</div>
<div class="cuerpotarjetas">
    <p class="card-text"> $ 15</p>
    <a href="./Details.html" class="btn btn-dark">Details</a>
</div>`

cardsHome.appendChild(tarjetas)
