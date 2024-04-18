const url = "https://api.toys/api/coin_flip"

let tries = parseInt(document.querySelector("#tries").value)

document.getElementById("throwCoinBtn").addEventListener("click", () => {
    console.log("Lanci da effettuare: " + tries)
    makeRequest(url)
})


async function makeRequest(url) {
    let headsCount = 0;
    let tailsCount = 0;


    for (let i = 0; i < tries; i++) {
        try {
            let response = await fetch(url)
            let data = await response.json()
            console.log(data)
            let result = data.result // from API -> {result: "heads"}

            if (result === "heads") headsCount++
            else if (result === "tails") tailsCount++
        } catch (e) {
            console.error("Request error. " + e.message)
        }
    }

    document.getElementById("results").textContent = "Heads count: " + headsCount + " Tails count: " + tailsCount

}