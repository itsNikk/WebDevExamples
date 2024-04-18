const url = "https://dummyjson.com/products"

let productsTable = document.getElementById("productsTable")

function ComputeFinalPrice(price, discountPercentag) {
    let convertedPrice = parseFloat(price)
    let convertedPercentage = parseFloat(discountPercentag)
    return price - ((price * convertedPercentage) / 100)
}

async function makeRequest(url) {
    let response = await fetch(url)
    let jsonData = await response.json()

    for (const product of jsonData["products"]) {
        let newRow = productsTable.insertRow()
        let newIdCell = newRow.insertCell(0)
        let newTitleCell = newRow.insertCell(1)
        let newPriceCell = newRow.insertCell(2)
        let newDiscountCell = newRow.insertCell(3)
        let finalPriceCell = newRow.insertCell(4)

        newIdCell.textContent = product.id
        newTitleCell.textContent = product.title
        newPriceCell.textContent = product.price + "€"
        newDiscountCell.textContent = product.discountPercentage + "%"
        finalPriceCell.textContent = ComputeFinalPrice(product.price, product.discountPercentage) + "€"

    }
}

makeRequest(url)