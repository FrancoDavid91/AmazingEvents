//Filtros de categorias//
function createCategory(category) {
    return `<div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" name="flexCheckChecked" type="checkbox" value="${category}">
                ${category}
              </label>
             </div>`
}

function filterCategory(arrayCategory) {
    return arrayCategory.map(categories => categories.category)
        .filter((nameCategory, indexCategory, arrCategory) => {
            return arrCategory.indexOf(nameCategory) === indexCategory
        })
}

function generatedCategory(arrayCategories) {
    let categoryHTML = ""
    for (const category of arrayCategories) {
        categoryHTML += createCategory(category)
    }
    document.getElementById('checkbox-categoy').innerHTML = categoryHTML
    return categoryHTML

}

//Filtro Search//
//Filtrar primero checkboxes y luego combinar con el input de search
function addListenerToCheckboxes(arrayEvents) {
    let checkboxes = document.querySelectorAll('.form-check-input')
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            let checkboxFiltered = []
            checkboxes.forEach(checkbox2 => {
                if (checkbox2.checked) {
                    checkboxFiltered.push(checkbox2.value)
                }
            })
            if (checkboxFiltered.length === 0) {
                checkboxFiltered = arrayCategories
            }

            let htmlEventsFilter = ""
            let arrayEventsFiltered = []
            arrayEvents.forEach(event => {
                if (checkboxFiltered.includes(event.category)) {
                    arrayEventsFiltered.push(event)
                }
            })

            const inputSearch = document.getElementById('search');
            const valorInput = inputSearch.value;
            arrayEventsFiltered.forEach(event => {
                if (event.name.toLowerCase().includes(valorInput.toLowerCase()) || event.description.toLowerCase().includes(valorInput.toLowerCase())) {
                    htmlEventsFilter += createCard(event)
                }
            })


            document.getElementById('card').innerHTML = htmlEventsFilter
        })
    })
}

//Filtrar primero input Search y luego combinar con checkboxes
function addListenerToInputSearch(arrayEvents) {    
    const inputSearch = document.getElementById('search');
    inputSearch.addEventListener('input', () => {
        let checkboxFiltered = []
            checkboxes.forEach(checkbox2 => {
                if (checkbox2.checked) {
                    checkboxFiltered.push(checkbox2.value)
                }
            })
            if (checkboxFiltered.length === 0) {
                checkboxFiltered = arrayCategories
            }

            let htmlEventsFilter = ""
            let arrayEventsFiltered = []
            arrayEvents.forEach(event => {
                if (checkboxFiltered.includes(event.category)) {
                    arrayEventsFiltered.push(event)
                }
            })

            
            const valorInput = inputSearch.value;
            arrayEventsFiltered.forEach(event => {
                if (event.name.toLowerCase().includes(valorInput.toLowerCase()) || event.description.toLowerCase().includes(valorInput.toLowerCase())) {
                    htmlEventsFilter += createCard(event)
                }
            })
            
            document.getElementById('card').innerHTML = htmlEventsFilter
    });
}

