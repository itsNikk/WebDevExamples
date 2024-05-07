let url = "https://api.toys/api/dice_roll/"

let facceElem = document.getElementById("facce")
let lanciaBtn = document.getElementById("lanciaBtn")

lanciaBtn.addEventListener("click", function () {
    url += facceElem.value
    GetDiceRoll(url)
})


async function GetDiceRoll(url) {
    let response = await fetch(url)
    let data = await response.json()
    document.getElementById("results").textContent = ''
    document.getElementById("results").textContent = data.dice + " : " + data.rolls
}