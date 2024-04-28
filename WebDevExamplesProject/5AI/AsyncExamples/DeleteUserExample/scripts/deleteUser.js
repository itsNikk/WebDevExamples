const res = document.getElementById("deleteResults")

function getDelationInfo(delationData) {
    return delationData.isDeleted === true ? "Cancellato correttamente in data " + delationData.deletedOn : "Non cancellato"
}

document.getElementById("numUserToDelete").addEventListener("change", async (e) => {
    e.preventDefault()
    let targetElem = e.target;
    let usersToDelete = targetElem.value;
    targetElem.value = ''

    const headers = {
        method: 'DELETE'
    };

    for (let i = 0; i < usersToDelete; i++) {
        console.log(i)
        const rndNum = parseInt((Math.random() * (100 - 1)) + 1)
        let response = await fetch("https://dummyjson.com/users/" + rndNum,
            headers);
        let deletionData = await response.json()

        let newDelInfo = document.createElement('div')
        newDelInfo.textContent = deletionData.id + " - "
            + deletionData.firstName
            + " " + deletionData.lastName.toUpperCase() + " " +
            getDelationInfo(deletionData)
        res.appendChild(newDelInfo)
        console.log(deletionData)
    }

})