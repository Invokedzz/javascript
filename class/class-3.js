class Edevice {
    constructor (name) {
        this.name = name;
        this.on = false;
    }

    turnon () {
        if (this.on) {
            console.log('Device on')
            return;
        }
        this.on = true;
    }

    turnoff () {
        if (!this.on) {
            console.log('Device turned off');
            return;
        }
        this.on = false;
    }
}

class Smartphone extends Edevice {
    constructor(name, color, model) {
        super(name); // Chama o constructor da classe pai e o executa aqui dentro.
        this.color = color;
        this.model = model;
    }
}; // extends indica de quem você vai herdar. Smartphone já tem tudo que existe em Edevice.

class Tablet extends Edevice {
    constructor (name, color, model, version) {
        super(name);
        this.color = color;
        this.model = model;
        this.version = version;
    }
}



const s1 = new Smartphone('Iphone', 'Preto', 'Iphone X');
const s2 = new Tablet('Android', 'White', 'Galaxy', 2017);

s1.turnon();
console.log(s1);
const d = new Edevice('Smartphone');
console.log(d);