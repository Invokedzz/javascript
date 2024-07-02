class Person {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    speak () {
        console.log(`${this.nome} is speaking`);
    }

    eat () {
        console.log(`${this.nome} is eating`);
    }

    drink () {
        console.log(`${this.nome} is drinking`);
    }
}

// Difference betweeen classes and constructor functions

function Personnumber2 (name, nickname) {
    this.name = name;
    this.nickname = nickname;
}

Personnumber2.prototype.speak = function () {
    console.log(`${this.name} is speaking`);
}

const p = new Person('Louis', 'Lane');
const g = new Personnumber2('Pablito', 'Pablon');
g.speak()
p.speak()