let urlData = "https://mindhub-xj03.onrender.com/api/amazing"
let events
let highestPercentage
let lowestPercentage
let largerCapacity
let arrayUpcomingEvents = []
let arrayPastEvents = []

//Obtener la información desde la API
async function getData() {
    try {
        let response = await fetch(urlData)
        let data = await response.json()
        return data
    } catch (error) {
        console.log(error.message)
    }
}
//Función para obtener un array de los eventos
async function getEvents() {
    try {
        let data = await getData()
        let arrayEvents = data.events
        return arrayEvents
    } catch (error) {
        console.log(error.message)
    }

}

//--FUNCION PRINCIPAL PARA MOSTRAR LOS STATS--//
async function createStats() {
    events = await getEvents()
    data = await getData()

    highestPercentage = findHighestPercentage(events)
    lowestPercentage = findLowestPercentage(events)
    largerCapacity = findLargerCapacity(events)

    
    events.forEach(event => {
        if (event.date > data.currentDate) {
            arrayUpcomingEvents.push(event)
        } else {
            arrayPastEvents.push(event)
        }
    })

    buildTdByStats(arrayUpcomingEvents)
    buildTdByStats(arrayPastEvents)

}

//Función para obtener los eventos con mayor porcentaje de asistencia
function findHighestPercentage(events) {
    let sortedEvents = events.sort((a, b) => {
        let percentageEventA = (a.assistance / a.capacity) * 100
        let percentageEventB = (b.assistance / b.capacity) * 100
        return percentageEventB - percentageEventA
    });

    let topEvents = sortedEvents.slice(0, 3) 

    let tableCells = ''
    for (const event of topEvents) {
        let percentage = Math.round((event.assistance / event.capacity) * 100).toFixed(2)
        tableCells += `${event.name} (${percentage}%), `
    }

    tableCells = tableCells.slice(0, -2)

    document.getElementById('first-cell').innerHTML = `${tableCells}`
}

//Función para obtener los eventos con menor porcentaje de asistencia
function findLowestPercentage(events) {
    let sortedEvents = events.sort((a, b) => {
        let percentageEventA = (a.assistance / a.capacity) * 100
        let percentageEventB = (b.assistance / b.capacity) * 100
        return percentageEventA - percentageEventB
    });

    let topEvents = sortedEvents.slice(0, 3)

    let tableCells = ''
    for (const event of topEvents) {
        let percentage = Math.round((event.assistance / event.capacity) * 100).toFixed(2)
        tableCells += `${event.name} (${percentage}%), `
    }

    tableCells = tableCells.slice(0, -2)

    document.getElementById('second-cell').innerHTML = `${tableCells}`
}

//Función para obtener el evento de mayor capacidad
function findLargerCapacity(events) {
    let maxCapacity = 0
    let eventsWithMaxCapacity = []

    events.forEach(event => {
        if (event.capacity > maxCapacity) {
            maxCapacity = event.capacity
        }
    })

    events.forEach(event => {
        if (event.capacity === maxCapacity) {
            eventsWithMaxCapacity.push(event)
        }
    })

    let tableCells = ''
    eventsWithMaxCapacity.forEach(event => {
        tableCells += `${event.name} (${event.capacity} people), `
    })

    document.getElementById('third-cell').innerHTML = `${tableCells}`
}

//Función para obtener las categorias de los eventos
function displayCategory(events) {
    let arrayCategories = []
    events.forEach(event => {
        if (!arrayCategories.includes(event.category)) {
            arrayCategories.push(event.category)
        }
    })

    return arrayCategories
}

//Función para obtener los ingresos de los eventos
function calculateRevenueByCategory(events) {
    let revenueByCategory = {};

    events.forEach(event => {

        if (!revenueByCategory.hasOwnProperty(event.category)) {
            revenueByCategory[event.category] = 0;
        }

        if (arrayPastEvents.includes(event)) {
            revenueByCategory[event.category] += event.price * event.assistance;
        } else if (arrayUpcomingEvents.includes(event)) {
            revenueByCategory[event.category] += event.price * event.estimate;
        }
    });

    let revenueArray = Object.values(revenueByCategory);
    
    return revenueArray;
}

//Función para obtener el porcentaje de asistencia de los eventos por categoria
function calculatePercentageAssistanceByCategory(events) {
    let percentageByCategory = {};
    let totalAttendance = 0
    let totalEstimate = 0
    let totalCapacity = 0

    events.forEach(event => {

        if (!percentageByCategory.hasOwnProperty(event.category)) {
            percentageByCategory[event.category] = 0
        }

        if (arrayPastEvents.includes(event)) {
            totalAttendance += event.assistance
            totalCapacity += event.capacity
        } else if (arrayUpcomingEvents.includes(event)) {
            totalEstimate += event.estimate
            totalCapacity += event.capacity
        }

        if(arrayPastEvents.includes(event)){
            percentageByCategory[event.category] = Math.round((totalAttendance / totalCapacity) * 100).toFixed(2) 
        } else if (arrayUpcomingEvents.includes(event)){
            percentageByCategory[event.category] = Math.round((totalEstimate / totalCapacity) * 100).toFixed(2) 
        }
    });

    let percentageArray = Object.values(percentageByCategory);
    
    return percentageArray;
}

//Función para construir los td para Stats Table
function buildTdByStats(arrayEvents) {
    let rowTable = ''
    const bodyTableUpcoming = document.getElementById('tbody-upcoming')
    const bodyTablePast = document.getElementById('tbody-past')

    let arrayCategories = displayCategory(arrayEvents)
    let arrayRevenue = calculateRevenueByCategory(arrayEvents)
    let arrayPercentage = calculatePercentageAssistanceByCategory(arrayEvents)

    for (let i = 0; i < arrayCategories.length; i++) {
        rowTable += `<tr>
        <td>${arrayCategories[i]}</td>
        <td>$${arrayRevenue[i]}</td>
        <td>${arrayPercentage[i]}%</td>
        </tr>`
    }

    if (JSON.stringify(arrayEvents) === JSON.stringify(arrayUpcomingEvents)) {
        bodyTableUpcoming.innerHTML = rowTable
    } else if (JSON.stringify(arrayEvents) === JSON.stringify(arrayPastEvents)) {
        bodyTablePast.innerHTML = rowTable
    }

}

createStats()
