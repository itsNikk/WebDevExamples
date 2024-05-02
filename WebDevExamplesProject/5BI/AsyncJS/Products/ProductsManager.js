const productsURl = "https://dummyjson.com/products"

let productsTable = document.getElementById("productsTable")

async function makeProductsRequest(url) {
    let response = await fetch(url)
    let productsData = await response.json()

    for (const elem of productsData.products) {
        console.log(elem.id)
        let newRow = productsTable.insertRow()
        let newIDCell = newRow.insertCell(0)
        let newNameCell = newRow.insertCell(1)
        let newPriceCell = newRow.insertCell(2)
        let newDiscountCell = newRow.insertCell(3)
        let newTotalPriceCell = newRow.insertCell(4)
        newIDCell.textContent = elem.id
        newNameCell.textContent = elem.title
        newPriceCell.textContent = elem.price + "$"
        newDiscountCell.textContent = elem.discountPercentage + "%"
        newTotalPriceCell.textContent = ComputeTotalPrice(elem.price, elem.discountPercentage).toFixed(2) + "$"
    }
}

function ComputeTotalPrice(price, discountaRate) {
    return price - ((price*discountaRate)/100)
}

makeProductsRequest(productsURl)