function Produto (nome, preço) {
    this.nome = nome;
    this.preço = preço;
}

Produto.prototype.aumento = function (valueof) {
    this.preço += valueof;
};
Produto.prototype.desconto = function (valueof) {
    this.preço -= valueof;
};
function Camiseta (nome, preço, cor) {
    Produto.call(this, nome, preço); // Faz a chamada de produtos e seus parâmetros
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); // Prototype da camiseta adquire as propriedades do produto
Camiseta.prototype.constructor = Camiseta;
// Camiseta herda tudo que produto tem, mas pode ter características distintas

Camiseta.prototype.aumento = function (value) {
    this.preço = this.preço + (this.preço * (value / 100));
};

function Caneca (nome, preço, material, estoque) {
    Produto.call(this, nome, preço);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque
        },
        set: function (valor) {
            if (typeof valor !== 'number') return
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta ('Regata', 10, 'Preta');
const caneca = new Caneca ('Caneca do Xandão', 20, 'Resina', 3);
console.log(caneca);
caneca.aumento(10)
camiseta.aumento(10);
console.log(camiseta);