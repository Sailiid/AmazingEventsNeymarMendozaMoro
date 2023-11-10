
export const cards = document.getElementById("cards")
export const checkbox = document.getElementById("checkbox")
export const search = document.getElementById("inlineFormInputGroupUsername")
export const tabla1 = document.getElementById("porcentajeMayor")




// URL
export const url = 'https://mindhub-xj03.onrender.com/api/amazing'


//Home 
export function checkboxCards(arrayDatos) {
   let categoriasCheckbox = Array.from(new Set(arrayDatos.map(events => events.category.replace(" ", "-"))))
   for (let category of categoriasCheckbox) {
      const seleccion = document.createElement("div")
      seleccion.classList.add("form-check", "form-check-inline")
      seleccion.innerHTML = `
    <input class="form-check-input" type="checkbox" id="${category}" value="${category}">
    <label class="form-check-label text-white" for="${category}">${category}</label>`
      checkbox.appendChild(seleccion)
   }
}
// Buscador 
function buscador(events) {

   return events.filter(events => events.name.toLowerCase().includes(search.value.toLowerCase()))

}

// escuchador de eventos 

function escuchador(events) {
   let cardCategory = Array.from(document.querySelectorAll(`input[type=checkbox]:checked`)).map(checkbox => checkbox.value)
   let arrayChecked = []
   events.forEach(Seleccionada => {
      cardCategory.forEach(eventoCategoria => {
         if (eventoCategoria === Seleccionada.category)
            arrayChecked.push(Seleccionada)
      })
   }
   )
   if (arrayChecked.length == 0) {
      return events

   } console.log(arrayChecked)
   return arrayChecked

}

// crear tarjetas 

export function tarjetasSprint(events) {
   if (events.length === 0) {
      cards.innerHTML = `<h2 class="text-light align-items-center"><strong>"Sorry, your search was not found"</strong></h2>`
   } else {
      cards.innerHTML = "";
      events.forEach((evento) => {
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
         cards.appendChild(tarjetas)
      });
   }
}
// super filtro 

export function CombinacionFiltro(events) {
   let checkboxFiltro = escuchador(events);
   let buscadorFiltro = buscador(checkboxFiltro)
   tarjetasSprint(buscadorFiltro)

}



// tablas asistencia
//suma datos asistencia 
export function sumaTotal(events) {
   return events.map(events => (events.asisstance)).reduce((total, asisstance) => total + asisstance.valor, 0);
}
const tableAsistencia = document.getElementById('tablaAsistencia');
const tabla2 = document.getElementById('tabla2');
const tabla3 = document.getElementById('tabla3');

export function Tabla1(events) {


   const eventosPasados = events.filter(evento => Date.parse(new Date()) > Date.parse(evento.date));
   console.log(eventosPasados);

   let eventosOrdenados = eventosPasados.sort((a, b) => (b.assistance / b.capacity) - (a.assistance / a.capacity));

   let mayorAsistencia = eventosOrdenados[0];
   let menosAsistencia = eventosOrdenados[eventosOrdenados.length - 1];

   let capacidad = events.sort((a, b) => b.capacity - a.capacity);
   let mayorCapacidad = capacidad[0];

   let tr1 = document.createElement("tr");
   tr1.className = "table-primary"
   tr1.innerHTML = `<td><strong>${mayorAsistencia.name}</strong></td>
                    <td><strong>${menosAsistencia.name}</strong></td>
                    <td><strong>${mayorCapacidad.name}</strong></td>`;
   tableAsistencia.appendChild(tr1);
}

export function Tabla2(events) {
   // Segunda tabla
   const eventosUpcomming = events.filter(evento => Date.parse(new Date()) < Date.parse(evento.date));
   console.log(eventosUpcomming);
   const categorias = eventosUpcomming.map(evento => evento.category);
   const arrayCategorias = categorias.filter((valor, indice) => categorias.indexOf(valor) === indice);

   arrayCategorias.forEach(category => {
      let filtardosEventos = eventosUpcomming.filter(evento => evento.category == category);
      let ganancias = filtardosEventos.map(evento => evento.estimate * evento.price).reduce((a, b) => a + b, 0);
      let porcentaje = (filtardosEventos.map(evento => (evento.estimate / evento.capacity) * 100).reduce((a, b) => a + b, 0)) / filtardosEventos.length;

      let tr2 = document.createElement("tr");
      tr2.className = "table-primary"
      tr2.innerHTML = `<td>${category}</td>
                        <td>$${ganancias}</td>
                        <td>${porcentaje.toFixed(2)}%</td>`;
      tabla2.appendChild(tr2);
   });



}

export function Tabla3(events) {

   const categoriasPast = events.map(evento => evento.category);

   const arrayCategoriasPast = categoriasPast.filter((valor, indice) => categoriasPast.indexOf(valor) === indice);


   arrayCategoriasPast.forEach(category => {
      let filtardosEventos = events.filter(evento => evento.category == category);
      let Ganancias = filtardosEventos.map(evento => evento.assistance * evento.price).reduce((a, b) => a + b, 0)
      console.log(Ganancias);
      let porcentajes = 0;
      if (filtardosEventos.length > 0) {
         porcentajes = filtardosEventos.map(evento => (evento.assistance / evento.capacity) * 100).reduce((a, b) => a + b, 0 / filtardosEventos.length)
      }

      let tr3 = document.createElement("tr");
      tr3.className = "table-primary";
      tr3.innerHTML = `<td>${category}</td>
                     <td>$${Ganancias}</td>
                     <td>${porcentajes.toFixed(2)}%</td>`;
      tabla3.appendChild(tr3);

   });
}



// Details
export function details(events) {
   const urlParams = new URLSearchParams(window.location.search)
   const id = urlParams.get("_id")
   events.find((events) => {
      if (events._id == id) {
         const tarjetas = document.createElement("div")
         let assistance = () => {
            if (events.assistance) {
               return `<strong>Assistance:</strong>${events.assistance}`
            } else {
               return `<strong>Estimate:</strong> ${events.estimate}`
            }
         }

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

         cards.appendChild(tarjetas)
      }
   })
}