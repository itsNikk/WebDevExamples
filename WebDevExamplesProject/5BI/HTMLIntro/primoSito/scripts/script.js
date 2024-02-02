console.log("CIAO sono js");

document.getElementById('btn').addEventListener('click',

function () {

    let ressult = document.getElementById('result')
    let val = document.getElementById('in1').value
    ressult.textContent = "Benvenuto " + val+"!"

    }   

)