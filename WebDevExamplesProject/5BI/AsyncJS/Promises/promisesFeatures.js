let promise = new Promise((resolve, reject) => {

    //setTimeout(() => resolve("Resolved :)"), 1000)
    setTimeout(() => reject(new Error("Rejected :(")), 1000)

})
console.log(promise)

// Consumatori
// .then()
promise.then(result => console.log(result + "!!!!")).catch(error => console.log(error.message)
).finally(() => console.log("FINALLY"))

//. catch()
//.finally()