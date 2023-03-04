const queryString = location.search

const params = new URLSearchParams(queryString)
const id = params.get("id")
const evento = data.events.find(event => event.id == id)
/* let variable = data.events.date.split("-").reverse().join("/") */

const cardDetails = document.querySelector(".card-details")
cardDetails.innerHTML = `
<div class="d-flex justify-content-center align-items-center p-4 mb-3" style="max-width: 800px;">
    <div class="row align-items-center justify-content-center" style="width: 100%; height: 100%;" >
        <div class="col-md-4" style="width: 50%; height: 70%;">
          <img src="${evento.image}" alt="imagen" class="img-fluid" style=" width: 100%;height: 100%;">
        </div>
        <div class="col-md-8" style="width: 50%; height: 70%;">
          <div class="card-body">
            <h4>${evento.name}</h4>
            <p class="card-text"></p>
            <p class="card-text">Date: ${evento.date}</p>
            <p class="card-text">${evento.description}</p>
            <p class="card-text">Capacity: ${evento.capacity} Assistance: ${evento.assistance}</p>
            <p class="card-text">Category: ${evento.category}</p>
            <p class="card-text">Place: ${evento.place}</p>
            <p class="card-text">Price: ${evento.price}</p>
        </div>
        </div>
    </div>
</div>
`