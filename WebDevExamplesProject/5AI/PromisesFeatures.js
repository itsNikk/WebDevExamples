//Promise API

//Async / Await
/*
async function testFunction() {
    throw new Error("Whooops")
}

testFunction().then(result => console.log(result)).catch(err => console.log(err.message))*/

//FETCH API
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then(r => console.log(r["title"]))