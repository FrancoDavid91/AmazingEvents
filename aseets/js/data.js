
async function getData(){
  await fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(responsePromise => responsePromise.json())
  .then(infoJson => data = infoJson)
  localStorage.setItem("data", JSON.stringify(data))
}
getData()

let data=localStorage.getItem("data")
data = JSON.parse(data)

function createCard(event){
  return `<div class="card d-flex text-center" style="padding: .5rem;width: 18rem;">
            <div class="card-img">
              <img class="imagenes" src="${event.image}" alt="imagen Card">
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">${event.name}</h5>
              <p class="card-text text-center">${event.description}</p>
            </div>
            <div class="row-footercard">
              <p class="price-text">Price $${event.price}</p>
              <a href="./details.html?id=${event._id}" class="btn btn-primary" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .3rem; --bs-btn-font-size: 1rem;">More...</a>
            </div>
            
          </div>
          `
}
