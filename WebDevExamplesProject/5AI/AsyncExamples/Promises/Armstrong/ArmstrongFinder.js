function ArmstrongFinder(n) {
    return new Promise((resolve, reject) => {
        if (parseInt(n) < 1) reject(new RangeError("Numero inserito non valido: " + n))

        let nLength = n.toString().length
        let digits = n.toString()

        let sum = 0
        for (let i = 0; i < nLength; i++) {
            sum += Math.pow(parseInt(digits[i]), nLength)
        }

        if (sum === n) resolve(true)
        else resolve(false)

    })
}

ArmstrongFinder(321).then(r => console.log(r))
ArmstrongFinder(370).then(r => console.log(r))