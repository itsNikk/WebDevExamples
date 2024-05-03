const addUserURL = "https://dummyjson.com/users/add"

let userNameFromForm = '';
let userLastNameFromForm = '';
let userAge;

document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault()

    userNameFromForm = document.getElementById("firstName").value
    userLastNameFromForm = document.getElementById("lastName").value
    userAge = document.getElementById("age").value

    AddNewUser(addUserURL)
})

async function AddNewUser(addUserURL) {

    let newUserObj = {
        firstName: "",
        lastName: "",
        age: '',
        gender: '',
        birthDate: '',
        address: { address: '', city: '', postalCode: '', state: '', }
    }

    newUserObj.firstName = userNameFromForm
    newUserObj.lastName = userLastNameFromForm
    newUserObj.age = userAge
    newUserObj.gender = GetUserGender()
    newUserObj.birthDate = document.getElementById("birthDate").value
    //aggiungere altri campi a piacimento
    newUserObj.address.address = document.getElementById("address").value

    let response = await fetch(addUserURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUserObj)
    })

    let newUserData = await response.json()
    console.log(newUserData)
}

function GetUserGender() {

    /*
    if(document.getElementById("M").checked){
        retrun "M"
    } else return "F"
    */
    //Operatore ternario
    return document.getElementById("M").checked ? "M" : "F"
}