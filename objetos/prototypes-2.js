// new Object => Uma função construtora tem um objeto atrelado a ela, o Object.prototype
const objA = {
    chaveA: 'A',
};
const objB = {
    chaveB: 'B'
};
const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA); // Configura o objB em objA
Object.setPrototypeOf(objC, objB);
// console.log(objC.chaveB)
// console.log(objB.chaveA);

function Produto (nome, preço) {
    this.nome = nome;
    this.preço = preço;
}
Produto.prototype.desconto = function (valor) {
    this.preço = this.preço - (this.preço * (valor / 100))
};
Produto.prototype.aumento = function (valor) {
    this.preço = this.preço + (this.preço * (valor / 100));
};
const p1 = new Produto ('Camiseta', 100);
p1.aumento(50);
p1.desconto(10);

const p2 = {
    nome: 'Caneca',
    preço: 10,
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

console.log(p1);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preço: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42,
    },
    produto: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Café em pó',
    },
});
p3.aumento(10);
console.log(p3);