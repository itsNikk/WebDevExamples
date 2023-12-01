
function displayTime() {
    let clock = document.querySelector("#clock")
    let now = new Date();
    clock.textContent = now.toLocaleTimeString()
}            

function getAllTitles(){
    let clock = document.querySelector("#clock")
    let titles = document.querySelectorAll("h1, h2, h3")
    clock.textContent = titles.length
}

getAllTitles()

/* displayTime()
setInterval(displayTime, 1000)
*/           
        