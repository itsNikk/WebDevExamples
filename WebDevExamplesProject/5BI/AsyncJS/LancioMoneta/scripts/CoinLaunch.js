const getCoinURL = "https://api.toys/api/coin_flip"

let triesElem = document.getElementById("tries")


document.getElementById("throwCoin").addEventListener("click", function (e) {

    getCoinThrow(getCoinURL)

})

async function getCoinThrow(url) {
    let tries = triesElem.value
    let tailsCount = 0
    let headsCount = 0

    for (let i = 0; i < tries; i++) {
        let response = await fetch(url) //fai una GET a URL
        let data = await response.json() // => {result:heads/tails}
        console.log(data.result);
        if (data.result === "heads") headsCount++
        if (data.result === "tails") tailsCount++
    }

    document.getElementById("results").textContent
        = "Heads count: " + headsCount + " Tails Count: " + tailsCount

}