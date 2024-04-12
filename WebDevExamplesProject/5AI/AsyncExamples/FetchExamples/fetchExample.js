const url = "https://jsonplaceholder.typicode.com/users"

async function getAllUsers(url) {
    let promise = await fetch(url)
    if (promise.status === 200) {
        let jsonValue = await promise.json()
        console.log(jsonValue)
    } else {
        console.log("HTTP-Error: " + promise.status)
    }
}

getAllUsers(url)
