document.addEventListener('DOMContentLoaded', function(){

    let incrementBtn = document.getElementById('incrementBtn')
    let decrementBtn = document.getElementById('decrementBtn')
    let valoreInput = document.querySelector('#valore')

    incrementBtn.addEventListener('click', function () {
        incrementa(valoreInput)
    })

    decrementBtn.addEventListener('click',function () {
        decrementa(valoreInput)
    })
        

})



function incrementa(valoreInput){
    let valoreAttuale = parseInt(valoreInput.value)
    valoreInput.value = valoreAttuale+1
}

function decrementa(valoreInput) {
    let valoreAttuale = parseInt(valoreInput.value)
    valoreInput.value = valoreAttuale - 1
}