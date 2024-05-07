let url = "https://api.toys/api/worm_name/"
let resElem = document.getElementById("results")
let numWorms = document.getElementById("numWorms")
let getWormsBtn = document.getElementById("getWormsBtn")

getWormsBtn.addEventListener("click", function () {
    url += numWorms.value
    getWorms(url)
})

let newWormUser = {
    firstName: '',
    lastName: '',
    age: ''
}

async function getWorms(url) {
    let response = await fetch(url)
    let wormsNames = await response.json()
    console.log(wormsNames);
    for (let i = 0; i < wormsNames.results.length; i++) {
        let worm = wormsNames.results[i]
        resElem.innerHTML += worm + ": " + worm.length + "<br>"

        newWormUser.firstName = worm
        newWormUser.lastName = worm + "WormSurname"
        newWormUser.age = worm.length + newWormUser.lastName.length

        let postResponse = await fetch("https://dummyjson.com/users/add", {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify()
        })
    }
} 