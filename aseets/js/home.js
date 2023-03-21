
let htmlEventsHome = ""
let arrayEvents = []
for (let event of data.events) {
    htmlEventsHome += createCard(event)
    arrayEvents.push(event)
}

//Mostrar los checkboxes con las categorias de la seccion Home
let arrayCategories = filterCategory(arrayEvents)
generatedCategory(arrayCategories)
document.getElementById('card').innerHTML = htmlEventsHome

//Filtrar busquedas
let checkboxes = document.querySelectorAll('.form-check-input')
addListenerToCheckboxes(arrayEvents);
addListenerToInputSearch(arrayEvents);