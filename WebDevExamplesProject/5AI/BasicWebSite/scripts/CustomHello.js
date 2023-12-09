

function customHello() {


    function getUserName() {
        return prompt("Gimme your name")
    }

    function quit() {
        let quit = confirm("quit?")
        if (quit) window.close()
    }

    let userName = getUserName();

    let helloTitle = document.querySelector("#welcome")

    helloTitle.textContent = "Ciao, " + userName

    setTimeout(quit, 2000)
}