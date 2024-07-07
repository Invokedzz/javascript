// Criando uma constructor function (object):

function Build (product, price) {
    Object.defineProperty(this, 'product', {
        enumerable: true,
        configurable: true,
        get: function () {
            return product;
        },
        set: function (value) {
            if (typeof value !== 'string') return false;
            value = product
        },
    });
    Object.defineProperty(this, 'price', {
        configurable: true,
        enumerable: true,
        get: function () {
            return price;
        },
        set: function (value) {
            if (typeof value !== 'number') return false;
            value = price;
        }
    });
}
const x = new Build('Tijolo', 10);
// console.log(x.product, x.price)                // Exemplo de Objeto que podemos criar com DefineProperty + get/set

function Building (price, name) {
    Object.defineProperty (this, 'price', {
        configurable: true,
        writable: true,
        enumerable: true,
        value: 20,
    });
    Object.defineProperty(this, 'name', {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 'Rocha',
    });
}

const newBuild = new Building();
//console.log(newBuild);
function Objeto () {
Object.defineProperties(this, {
    name: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Análise',
    },
    price: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 30,
    },                                                  // Outra maneira de inserirmos propriedades aos objetos.
});
}
const ny = new Objeto();
// console.log(ny);

function Nix (name, price) {
    this.name = name;
    this.price = price;
}
Nix.prototype.addition = function (val) {
    this.price = this.price + val;
}
Nix.prototype.subtraction = function (val) {
    if (this.price < 1) return false;
    this.price = this.price - val;
}
const eg = new Nix ('Produto', 11);
eg.subtraction(10);
eg.addition(20);
//console.log(eg);
Nyx.prototype = Object.create(Nix.prototype);
function Nyx (name, price, type) {
    Nix.call(this, name, price);
    this.type = type;
}
Nyx.prototype.constructor = Nyx;
const nq = new Nyx ('Produto', 20, 'Deluxe');
nq.addition(10);
console.log(nq);

const _x = Symbol();
class Mine {
    constructor (pickaxe) {
        this.pickaxe = pickaxe;
        this[_x] = 90;
    }
    increase () {
        if (this[_x] < 0 && this[_x] > 100) return false;
        return this[_x]++;
    }
    loop () {
        for (let p = 1; p < 30; p++) {
            this[_x]--;
        }
        return this[_x];
    }
    pickaxeDamage (val) {
       return this.pickaxe = this.pickaxe + (val * 1.5) - this[_x];
    }
}

const craft = new Mine (10);
craft.increase();
craft.loop();
craft.pickaxeDamage(-10);
// console.log(craft);