let statDisplayElem = document.getElementById("statDisplay")

const allProductsCategoriesURL = "https://dummyjson.com/products/categories"
const singleProductCategoryURL = "https://dummyjson.com/products/category"

async function getAllCategories(url) {
    let response = await fetch(url)
    let jsonData = await response.json()

    for (const jsonDatum of jsonData) {
        let newStat = statDisplayElem.insertRow()
        newStat.insertCell(0).textContent = jsonDatum

        //Fetch all products inside a category
        let categoryResponse = await fetch(singleProductCategoryURL + "/" + jsonDatum)
        let categoryJson = await categoryResponse.json()

        let totalElemInCategory = categoryJson.total
        console.log("Total for category:" + totalElemInCategory)

        let sum = 0;
        for (const categoryJsonElement of categoryJson.products) {
            console.log(categoryJsonElement.price)
            sum += categoryJsonElement.price
        }

        const mean = sum / totalElemInCategory;
        newStat.insertCell(1).textContent = mean.toString()
        console.log(mean)
    }


}


getAllCategories(allProductsCategoriesURL)