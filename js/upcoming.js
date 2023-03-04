let htmlUpcomingEvents = "";
let arrayEventsUpcoming = []
for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    if (eventDate > currentDate) {
       htmlUpcomingEvents += createCard(event)
       arrayEventsUpcoming.push(event) 
    } 
}

let arrayCategories = filterCategory(arrayEventsUpcoming)

generatedCategory(arrayCategories)

document.getElementById('card').innerHTML = htmlUpcomingEvents

