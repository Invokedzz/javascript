/*function Teste (name, price) {
    this.price = price;
    Object.defineProperty(this, 'name', {
        configurable: true,
        enumerable: true,
        get: function () {
            return name;
        },
        set: function (value) {
            if (!typeof value !== 'number') {
            console.log('HAHAHAHA');
            return false;
        }
            name = value;
            return true;
        },
    });
}

let test = new Teste('HAHA', 10);
const result = (test.name = 123);
console.log(result); */

// Analisando objetos:

const objetoUm = {
    item1: 'Armadura',
};

const objetoDois = {
    item2: 'Espada',
};

const objetoTres = {
    item3: 'Estilete',
};

Object.setPrototypeOf(objetoUm, objetoDois);
Object.setPrototypeOf(objetoDois, objetoTres) // Objeto dois adquirindo as características do objeto três

/*console.log(objetoUm.item2);
console.log(objetoDois.item3); */

// Caso por exemplo, eu tente inserir "objetoUm.item3" dentro do meu console.log, a aplicação não vai dar erro; todavia o resultado virá como 'undefined'. Porque, no caso, nunca setamos a o "setPrototypeOf" do objetoUm em relação ao ObjetoTres.

// Porém, se tentarmos fazer o objetoDois no lugar, haverá um resultado definido. Pois: "Object.setPrototypeOf(objetoDois, objetoTres). Ou seja, o objetoDois é configurado e recebe as características definidas do objetoTres."


function Artigo (nome, vetor) {
    this.nome = nome;
    this.vetor = vetor;
}

Artigo.prototype.indicavetor = function (valor) {
    this.vetor = this.vetor + (this.vetor + (valor * 2));
}

Artigo.prototype.reduzvetor = function (valor) {
    this.vetor = this.vetor - (this.vetor + (valor ** 2));
}

const py = {
    nome: 'Alexa',
    vetor: 100,
}

Object.setPrototypeOf(py, Artigo.prototype);

const pz = Object.create(Artigo.prototype, {
    nome: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 'Pedrito',
    },
    vetor: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 20,
    },
});

const px = new Artigo ('Arlindo', 50);

console.log(pz);
console.log(py);
console.log(px);

// px.reduzvetor(10);
// px.indicavetor(10);
// py.indicavetor(5);
// py.reduzvetor(2);
// pz.reduzvetor(2);
// pz.indicavetor(20);