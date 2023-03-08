const queryString = location.search

const params = new URLSearchParams(queryString)
const id = params.get("id")
const evento = data.events.find(event => event.id == id)

const cardDetails = document.querySelector(".card-details")
cardDetails.innerHTML = `
<img class="imgDetails" src="${evento.image}" alt="Detail image">
<div class="body-details text-center">
  <h2>${evento.name}</h2>
  <p class="description-details">${evento.description}</p>
  <p>Date: ${evento.date}</p>
  <p>Capacity: ${evento.capacity}</p>
  <p>Assistance: ${evento.assistance}</p>
  <p>Category: ${evento.category}</p>
  <p>Place: ${evento.place}</p>
  <p>Price: ${evento.price}</p>
</div>
`
