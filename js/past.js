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

let arrayCategories = filterCategory(arrayEventsPast)

generatedCategory(arrayCategories)

document.getElementById('card').innerHTML = htmlPastEvents


