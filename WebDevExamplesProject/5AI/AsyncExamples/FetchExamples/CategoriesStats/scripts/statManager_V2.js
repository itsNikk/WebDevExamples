let statDisplayElem = document.getElementById("statDisplay")

const allProductsCategoriesURL = "https://dummyjson.com/products/categories"
const singleProductCategoryURL = "https://dummyjson.com/products/category"
async function getAllCategories(url) {
    let response = await fetch(url)
    let jsonData = await response.json()

    // Array di promesse per le richieste alle categorie
    let categoryPromises = jsonData.map(async (jsonDatum) => {
        let categoryResponse = await fetch(singleProductCategoryURL + "/" + jsonDatum)
        return categoryResponse.json()
    })

    // Attendi il completamento di tutte le richieste alle categorie
    let categoryResponses = await Promise.all(categoryPromises)

    // Elabora i risultati delle categorie
    categoryResponses.forEach((categoryJson, index) => {
        let newStat = statDisplayElem.insertRow()
        newStat.insertCell(0).textContent = jsonData[index]

        let totalForCategory = categoryJson.total
        console.log("Total for category:" + totalForCategory)

        let sum = 0;
        for (const categoryJsonElement of categoryJson.products) {
            console.log(categoryJsonElement.price)
            sum += categoryJsonElement.price
        }

        const mean = sum / totalForCategory;
        newStat.insertCell(1).textContent = mean
        console.log(mean)
    })
}

getAllCategories(allProductsCategoriesURL)