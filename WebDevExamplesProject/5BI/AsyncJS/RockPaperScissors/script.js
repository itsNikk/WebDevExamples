const moveURL = 'https://api.toys/api/rock_paper_scissors'

const playBtn = document.getElementById("playButton")
const resultElem = document.getElementById("result")

let player1Wins = 0
let player2Wins = 0

playBtn.addEventListener("click", async function () {
    const response1 = await fetch(moveURL)
    const data1 = await response1.json()
    const player1Move = data1.cpu

    console.log(player1Move);

    const response2 = await fetch(moveURL)
    const data2 = await response2.json()
    const player2Move = data2.cpu

    const winner = determineWinner(player1Move, player2Move)

    document.getElementById("moveResult").textContent = "p1: " + player1Move + " - " + "p2: " + player2Move

    if (winner === "Player 1") {
        player1Wins++;
        resultElem.textContent = "Player 1 wins"
    } else if (winner === "Player 2") {
        player2Wins++;
        resultElem.textContent = "Player 2 wins."
    } else resultElem.textContent = "Tie"

    updateScoreboard()
})

function updateScoreboard() {
    document.getElementById("player1Wins").textContent = player1Wins
    document.getElementById("player2Wins").textContent = player2Wins
}

function determineWinner(p1Move, p2Move) {
    if (p1Move === p2Move) {
        return "Tie"
    } else if (
        (p1Move === 'rock' && p2Move === "scissors") ||
        (p1Move === 'paper' && p2Move === "rock") ||
        (p1Move === "scissors" && p2Move === "paper")
    ) {
        return "Player 1"
    } else return "Player 2"

}