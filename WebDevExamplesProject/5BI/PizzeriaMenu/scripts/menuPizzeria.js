document.addEventListener("DOMContentLoaded", function () {

    //get ref to objects 
    const pizzaBtn = document.getElementById("pizzaButton")
    const calzoneBtn = document.getElementById("calzoneButton")
    const piadinaBtn = document.getElementById("piadinaButton")
    const optionsList = document.getElementById("optionsList")
    const customizationList = document.getElementById("customizationOptions")
    const selectedDish = document.getElementById('selectedDish');
    const selectedToppings = document.getElementById('selectedToppings');
    const cheeseCB = document.getElementById('cheeseCB');
    const sauceCB = document.getElementById('sauceCB');

    let userInput

    // disabilito la lista, la rendo non-cliccabile
    optionsList.disabled = true
    customizationList.style.display = 'none'
    //customizationList.style.visibility = "hidden"

    pizzaBtn.addEventListener("click", () => showOptions("Pizza"))
    calzoneBtn.addEventListener("click", () => showOptions("Calzone"))
    piadinaBtn.addEventListener("click", function () {
        showOptions("Piadina")
    })



    function showOptions(userChoice) {
        optionsList.disabled = false
        customizationList.style.display = "block"
        userInput = userChoice

        let options = []
        switch (userChoice) {
            case "Pizza":
                options = ["Margherita", "Peperoni", "Diavola", "Capricciosa"]
                break;
            case "Piadina":
                options = ["Classica", "Funghi"]
                break;
            case "Calzone":
                options = ["Mozzarella", "Pomodori"]
                break;
            default:
                options = ["Seleziona una pietanza"]
                break;
        }

        insertOptionsToList(options)
        updateSummary()
    }

    function updateSummary() {
        let summary = "Pietanza selezionata: "
            + userInput + " " + optionsList.selectedValue;


        summary += " Aggiunte: "
        if (cheeseCB.checked) {
            summary += cheeseCB.value
        } else if (sauceCB.checked) {
            summary += sauceCB.value
        } else if (sauceCB.checked && cheeseCB.checked) {
            summary += sauceCB.value + ", " + cheeseCB.value
        }

        selectedDish.textContent = summary

    }

    function insertOptionsToList(theOptions) {
        optionsList.innerHTML = ''

        for (let optionValue of theOptions) {
            const optElem = document.createElement("option")
            optElem.textContent = optionValue
            optionsList.appendChild(optElem)
        }
    }
})