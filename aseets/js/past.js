let htmlPastEvents = "";
let arrayEventsPast = []
for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    if (eventDate < currentDate) {
        htmlPastEvents += createCard(event)
        arrayEventsPast.push(event) 
}
}

//Mostrar los checkboxes con las categorias de la seccion Past
let arrayCategories = filterCategory(arrayEventsPast)
generatedCategory(arrayCategories)
document.getElementById('card').innerHTML = htmlPastEvents

//Filtrar busquedas
let checkboxes = document.querySelectorAll('.form-check-input')
addListenerToCheckboxes(arrayEventsPast)
addListenerToInputSearch(arrayEventsPast)