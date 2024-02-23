let mySpan = document.createElement("span")
mySpan.style.background = "red"
mySpan.textContent = "Stampo primo elemento tramite JS"

mySpan.setAttribute("id", "mySpan")
mySpan.setAttribute("name", "privateSpan")
console.log(mySpan.getAttribute("id"))

console.log("myspan ha l'attrb id?" + mySpan.hasAttribute("id"))

let anchor = document.createElement("a")
anchor.setAttribute("href","www.google.com")
anchor.appendChild(document.createTextNode(" Vai a google :)"))
mySpan.appendChild(anchor)

let divExampple = document.createElement("div")
divExampple.textContent = "<i>Questo è un div</i>"

document.body.appendChild(mySpan)
document.body.appendChild(divExampple)