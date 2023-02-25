let htmlEventsHome = ""
for (let event of data.events) {
    htmlEventsHome += crearCard(event)  
}
document.getElementById('card').innerHTML = htmlEventsHome


