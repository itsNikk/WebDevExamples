function delay(delayTime) {
    //return new Promise(resolve => setTimeout(resolve, delayTime))
    return new Promise(resolve => {
        setTimeout(resolve, delayTime)
    })
}

delay(3000).then(() => console.log("stampo dopo 3 sec"))