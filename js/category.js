
function createCategory(category){
    return `<div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" name="flexCheckChecked" type="checkbox" value="${category}">
                ${category}
              </label>
             </div>`
}

function filterCategory(arrayCategory){
    return arrayCategory.map(categories => categories.category)
                        .filter((nameCategory, indexCategory, arrCategory) => {
                        return arrCategory.indexOf(nameCategory) === indexCategory
                        })
}

function generatedCategory(arrayCategories){
    let categoryHTML = ""
    for (const category of arrayCategories) {
    categoryHTML += createCategory(category)
    }
    document.getElementById('checkbox-categoy').innerHTML = categoryHTML
    return categoryHTML

}
/* let arrayCategories = data.events.map(categories => categories.category)
                                .filter((nameCategory, indexCategory, arrCategory) => {
                                    return arrCategory.indexOf(nameCategory) === indexCategory
                                })
*/
/* let displayedCategory
let categoryHTML = ""
for (const category of arrayCategories) {
    categoryHTML += createCategory(category)
}
document.getElementById('checkbox-categoy').innerHTML = categoryHTML  */
