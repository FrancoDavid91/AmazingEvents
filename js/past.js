let htmlPastEvents = "";
for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    if (eventDate < currentDate) {
        htmlPastEvents += crearCard(event)
    }
}
document.getElementById('card').innerHTML = htmlPastEvents

