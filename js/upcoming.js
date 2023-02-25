let htmlUpcomingEvents = "";
for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    if (eventDate > currentDate) {
       htmlUpcomingEvents += crearCard(event) 
    } 
}
document.getElementById('card').innerHTML = htmlUpcomingEvents

