let newUser = {
    firstName: '',
    lastName: '',
    age: -1,
    gender: '',
    birthDate: '',
    address: undefined
    /* other user data */
};


let userFormElem = document.getElementById("userForm");

function getUserGender() {
    return document.getElementById("M").checked ? "M" : "F"
}

function getUserAddress() {
    return newUser.address = {
        address: document.getElementById("fullAddress").value.trim(),
        city: document.getElementById("city").value.trim(),
        postalCode: document.getElementById("postalCode").value.trim(),
        state: document.getElementById("state").value.trim()
    }
}
// address= address, city, postalCode, state
userFormElem.addEventListener("submit", async (e) => {
    e.preventDefault()

    newUser.firstName = document.getElementById("firstName").value
    newUser.lastName = document.getElementById("lastName").value
    newUser.age = document.getElementById("age").value
    newUser.gender = getUserGender()
    newUser.birthDate = document.getElementById("userDateBirth").value
    newUser.address = getUserAddress()

    let response = await fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
    })

    let data = await response.json()
    console.log(data)
})