function manageDelay() {
    return new Promise((resolve, reject) => {
        const workTime = Math.floor(Math.random() * 4000) + 1000

        setTimeout(() => {
            const successRate = Math.random() < 0.8
            if (successRate) {
                resolve("Operazione completata con successo dopo " + workTime + " ms")
            } else reject(new PromiseError("Errore durante l'operazione"), workTime)
        })
    })
}

class PromiseError extends Error {
    constructor(message) {
        super(message)
        this.name = "PromiseError"
    }
}

/*
for (let i = 0; i < 10; i++) {
    manageDelay()
        .then(r => console.log((i + 1) + ") " + r))
        .catch(err => console.log((i + 1) + ") " + err))
}
*/


async function test() {
     throw new Error('ciao') // = reject(new Error('ciao'))
}


test()
    .then(lol => console.log(lol))
    .catch(babadui => console.log(babadui.message))


