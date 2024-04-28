const url = "https://dummyjson.com/todos/random"
const updateURL = "https://dummyjson.com/todos/random"

let todoId = document.getElementById("id")
let todoText = document.getElementById("todo")
let todoCompleted = document.getElementById("completed")
let todoUserId = document.getElementById("userId")

document.getElementById("updateTodo").addEventListener("click", async (e) => {


    let response = await fetch(updateURL, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: todoId.value,
            todo: todoText.value,
            completed: todoCompleted.value,
            userId: todoUserId.value
        })
    })

    let data = await response.json()

    console.log(data)

    todoId.value = ''
    todoText.value = ''
    todoCompleted.value = ''
    todoUserId.value = ''

})

async function getRandomTodo(url) {
    let resp = await fetch(url)
    let data = await resp.json()

    todoId.value = data.id
    todoText.textContent = data.todo
    todoCompleted.value = data.completed
    todoUserId.value = data.userId
}

getRandomTodo(url)