const SingleDiceRoll = "https://api.toys/api/dice_roll"

let n1Elem = document.getElementById("n1")
let n2Elem = document.getElementById("n2")
let n3Elem = document.getElementById("n3")

async function GetSingleRoll(url) {
    let results = []

    let sum = 0;
    for (let i = 0; i < 3; i++) {
        let response = await fetch(url) //Response
        let data = await response.json()
        console.log(data);
        console.log(data.rolls);
        results.push(data)
        sum += data.rolls[0]
    }

    //data.dice = facce del dado
    //data.rolls = lancio/i del dado

    n1Elem.textContent = "Lancio #1 del dado " + results[0].dice + ": " + results[0].rolls
    n2Elem.textContent = "Lancio #2 del dado " + results[1].dice + ": " + results[1].rolls
    n3Elem.textContent = "Lancio #3 del dado " + results[2].dice + ": " + results[2].rolls
    document.getElementById("SumResult").textContent = "Somma: " + sum
}

GetSingleRoll(SingleDiceRoll)