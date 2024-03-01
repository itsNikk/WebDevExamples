document.addEventListener("DOMContentLoaded", function () {

    //Creo form container e aggiungo a body
    let formContainer = document.createElement("div")
    formContainer.setAttribute("id", "formContainer")
    document.body.appendChild(formContainer)

    // creo il form e lo aggiungo come figliko del contenitore
    let dynamicForm = document.createElement("form")
    dynamicForm.setAttribute("id", "dynamicForm")
    formContainer.appendChild(dynamicForm)

    let inputLabel = document.createElement("label")
    inputLabel.setAttribute("for", "textInput")
    inputLabel.textContent = "Testo:"

    let txtInputElem = document.createElement("input")
    txtInputElem.setAttribute("id", "textInput")
    txtInputElem.setAttribute("name", "textInput")
    txtInputElem.setAttribute("type", "text")

    dynamicForm.appendChild(inputLabel)
    dynamicForm.appendChild(txtInputElem)

    let boldInputLabel = document.createElement("label")
    boldInputLabel.setAttribute("for", "boldCheckbox")
    boldInputLabel.textContent = "Bold:"

    let bldCheckBox = document.createElement("input")
    bldCheckBox.setAttribute("id", "boldCheckbox")
    bldCheckBox.setAttribute("name", "boldCheckbox")
    bldCheckBox.setAttribute("type", "checkbox")

    dynamicForm.appendChild(document.createElement("br"))

    dynamicForm.appendChild(boldInputLabel)
    dynamicForm.appendChild(bldCheckBox)

    dynamicForm.appendChild(document.createElement("br"))

    // gli altri li fate voi

    // creazione lista colori

    let fontColorListLabel = document.createElement("label")
    fontColorListLabel.setAttribute("for", "fontColorList")
    fontColorListLabel.textContent = "Colore del testo:"

    let colorList = document.createElement("select")
    colorList.setAttribute("id", "fontColorList")
    colorList.setAttribute("name", "fontColorList")

    // aggiungere opzioni a piacere
    let greenOpt = document.createElement("option")
    greenOpt.value = "green"
    greenOpt.textContent = "Verde"

    dynamicForm.appendChild(fontColorListLabel)
    colorList.appendChild(greenOpt)
    dynamicForm.appendChild(colorList)
    dynamicForm.appendChild(document.createElement("br"))

    let fontSizeInpt = document.createElement("input")
    fontSizeInpt.setAttribute("type", "number")
    fontSizeInpt.setAttribute("id", "fontSize")
    fontSizeInpt.setAttribute("name", "fontSize")
    fontSizeInpt.setAttribute("min", "1")
    fontSizeInpt.setAttribute("max", "18")

    dynamicForm.appendChild(fontSizeInpt)
    dynamicForm.appendChild(document.createElement("br"))

    let risultato = document.createElement("div")
    risultato.setAttribute("id", "output")


    //bottone di formattazione
    let formatBtn = document.createElement("input")
    formatBtn.setAttribute("type", "button")
    formatBtn.setAttribute("id", "formatBtn")
    formatBtn.value = "Mostra testo formattato"

    formatBtn.addEventListener("click", function () {

        const userInput = document.getElementById("textInput").value

        const boldActive = document.getElementById("boldCheckbox").checked ? "bold" : "normal"
        const fontSize = document.getElementById("fontSize").value

        const formattedText = "<span style= font-size:" + fontSize + "px;font-weight:" + boldActive + ">"


            + userInput + "</span>"

        //elemenbtoRisultato.innerHTML = testo
        document.getElementById("output").innerHTML = formattedText

    })



    dynamicForm.appendChild(formatBtn)
    dynamicForm.appendChild(risultato)

})