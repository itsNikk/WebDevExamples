//setTimeout(() => console.log("log"), 2000)


function delay(delayTime) {
    return new Promise(resolve => setTimeout(resolve, delayTime))
}

delay(2000).then(() => console.log("Dopo un po' eseguo questo codice"))