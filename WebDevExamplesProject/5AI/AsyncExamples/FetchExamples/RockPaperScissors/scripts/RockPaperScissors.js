let player1Wins = 0;
let player2Wins = 0;


document.getElementById("playBtn").addEventListener("click", function () {
    playGame()
})
async function getRandomMove() {
    const response1 = await fetch('https://api.toys/api/rock_paper_scissors');
    const data1 = await response1.json();
    return data1.cpu;
}

async function playGame() {
    const player1Move = await getRandomMove();
    const player2Move = await getRandomMove();
    const winner = getWinner(player1Move, player2Move);
    displayResult(player1Move, player2Move, winner)
    updateScoreboard(winner)
}

function getWinner(move1, move2) {
    if (move1 === move2) {
        return 'It\'s a tie!';
    } else if (
        (move1 === 'rock' && move2 === 'scissors') ||
        (move1 === 'paper' && move2 === 'rock') ||
        (move1 === 'scissors' && move2 === 'paper')
    ) {
        player1Wins++;
        return 'Player 1 wins!';
    } else {
        player2Wins++;
        return 'Player 2 wins!';
    }
}

function displayResult(move1, move2, winner) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p>Player 1 chose: ' + move1 + '</p>' +
        '<p>Player 2 chose: ' + move2 + '</p>' +
        '<p>' + winner + '</p>';
}

function updateScoreboard() {
    const scoreboardDiv = document.getElementById('scoreboard');
    scoreboardDiv.innerHTML = '<p>Player 1 Wins: ' + player1Wins + '</p>' +
        '<p>Player 2 Wins: ' + player2Wins + '</p>';
}