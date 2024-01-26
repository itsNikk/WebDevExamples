// dal 2015 esiste la parola class

class Animal {
     name
     tipo

     constructor(name,tipo) {
        this.name = name
        this.tipo = tipo
     }

      // Computed Properties
     get name() {
        return this.name
     }

     set name(newName) {
        this.name = newName
     }

    speak() {
        console.log("Animale fa rumore");    
    }

    static metodoStatico() {
        console.log("Sono un metodo statico");
    }
}

class Cat extends Animal {

    constructor(name, tipo) {
        super(name,tipo)
    }

    speak() {
        console.log("Meow");
    }
}

let a = new Cat("Animale","gatto")
a.speak()
console.log(a.name);
a.name = "Animale2"
console.log(a.name);