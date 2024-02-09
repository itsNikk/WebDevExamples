let taskInput;
let taskList;

document.addEventListener("DOMContentLoaded", function () {
    taskInput = document.getElementById('taskInput');
    taskList = document.getElementById('taskList');
    const addTaskBtn = document.getElementById('addTaskBtn');

    addTaskBtn.addEventListener("click", function () {
        addTask()
    })

})


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');

        let spanElement = document.createElement("span")
        spanElement.textContent = taskText

        // Creo a runtime un bottone che rimuove un task dalla list
        let remBtn = document.createElement("button")
        remBtn.textContent = "X"
        remBtn.addEventListener("click", function () {
            removeTask(remBtn)
        })

        listItem.appendChild(spanElement)
        listItem.appendChild(remBtn)
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

// chi è il parent del bottone che rimuove l'elemento?
// una volta trovato mi basta rimuoverlo... E VOILA'
function removeTask(button) {
    const listItem = button.parentElement;
    taskList.removeChild(listItem);
}