let htmlEventsHome = ""
let arrayEvents = []
for (let event of data.events) {
    htmlEventsHome += createCard(event) 
    arrayEvents.push(event) 
}

let arrayCategories = filterCategory(arrayEvents)

generatedCategory(arrayCategories)

document.getElementById('card').innerHTML = htmlEventsHome

let checkboxes = document.querySelectorAll('.form-check-input')


checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change',() =>{
        let eventsFiltered = []
        for (let event of data.events) {
            if(event.category == checkbox.value && checkbox.checked){
                eventsFiltered.push(event)  
            }   
        }
        let htmlEventsFilter = ""
        eventsFiltered.forEach(event =>{
            htmlEventsFilter += createCard(event)
        })
        document.getElementById('card').innerHTML = htmlEventsFilter
    })
})


/* console.log(checkboxes) */

/* let filterCategoryHTML = ""
checkboxes.filter(checkbox => checkbox.onchange = ()=>{
    if(checkbox.checked){
        filterCategoryHTML +=
    }
})
 */