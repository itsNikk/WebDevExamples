const url = "https://jsonplaceholder.typicode.com/users"

async function getAllUsers(url) {
    let promise = await fetch(url)
    // promise.ok uguale a promise.status === 200
    if (promise.ok) {
        let jsonValue = await promise.json()
        console.log(jsonValue)
    } else {
        console.log(new HTTPError(promise.status))
    }
}

class HTTPError extends Error {
    constructor(message){
        super(message)
        this.name = "HTTP-Error"
    }
}

getAllUsers(url)
