const flipURl = "https://api.toys/api/coin_flip"


let tries = 0;

document.getElementById("throwCoinbtn").addEventListener("click", function (e) {
    tries = parseInt(document.getElementById("tries").value)
    console.log("tries: " + tries)
    getCoinFlip(flipURl)
})


async function getCoinFlip(url) {
    let headsCount = 0
    let tailsCount = 0

    for (let i = 0; i < tries; i++) {
        let response = await fetch(url)
        //console.log(response)
        let jsonData = await response.json()
        console.log(jsonData.result)

        if (jsonData.result === "heads") {
            headsCount++;
        } else if (jsonData.result === "tails") {
            tailsCount++
        }

        document.getElementById("result").textContent = "Heads count: " + headsCount + " - " + "Tails count: " + tailsCount
    }
}