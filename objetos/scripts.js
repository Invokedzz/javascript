/* const pessoa = {
    nome: 'Louis',
    sobrenome: 'Mister',
    idade: 30,
};

//const chave = 'nome';
//console.log(pessoa[chave]);
//console.log(pessoa.nome, pessoa.sobrenome); // Pode fazer assim tbm: console.log(pessoa['nome']);

// delete pessoa.nome; ==> Apaga um elemento do objeto. Nesse caso, nome.

pessoa.falarnome = function () {
    console.log(`${this.nome} is talking.`);
};
pessoa.falarnome();

pessoa.datanascimento = function () {
    const data = new Date();
    return data.getFullYear() - this.idade;
};
console.log(pessoa.datanascimento());

for (let chave in pessoa) {
    console.log(pessoa[chave]); // Ou simplesmente console.log(chave);
} */

// Factory Functions

/* function criaPessoa (nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        nomecompleto () {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Luuiz', 'Lane');
console.log(p1.nomecompleto());

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // return this; this representa objeto vazio -> {}
}

const px = new Pessoa('Abner', 'Pereira');
// px.nome = 'Outra coisa' -> altera o valor em si, não a referência de memória.
const py = new Pessoa ('Flakes', 'Careca');
console.log(px, py); */

// defineProperty - defineProperties

/*function Produto (nome, preço, estoque) {
    this.nome = nome;
    this.preço = preço;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // No true mostra a chave.
        value: estoque, // Valor da chave.
        writable: false, //No 'false' não permite mudanças no valor.
        configurable: true //No true, a chave é reconfigurável. Já no false, não.
    });

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: function () {
            return estoque
        },
        writable: true,
        configurable: true,
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            writable: true,
            configurable: true,
            value: nome,
        },
        preço: {
            enumerable: true,
            writable: true,
            configurable: true,
            value: preço,
        },
    });
}
// Configurable no false também evita o apagamento da chave.
const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(p1.estoque());
console.log(p1.nome); */

/* function Produto (nome, preço, estoque) {
    this.nome = nome;
    this.preço = preço;
    let estoquepriv = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function () {
            return estoquepriv; // Getter
        },
        set: function (value) {
            if (typeof value !== 'number') {
                console.log('Stop that, dumbass');
                return;
            }
            estoquepriv = value;
        }
    });
}

function criaprod (nome) {
    return {
        get nome () {
            return nome;
        },
        set nome (valor) {
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    };
}

const p1 = new Produto ('Camiseta', 20, 3);
p1.estoque = 'O valor que eu quero' //Vai ser passado no set.
console.log(p1.estoque);
console.log(p1);
const p2 = criaprod('Shirt');
p2.nome = 'Qualquer coisa'
console.log(p2.nome); */

function Analiseobjetos (estoque, preço) {
    let estoqueTotal = estoque;
    let preçoTotal = preço;
    let objeto = {};
    Object.defineProperty(objeto, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function () {
            return estoqueTotal;
        },
        set: function (value) {
            if (typeof value !== 'number') {
                console.log('Inserir somente os números para estoque');
                return;
            }
            estoqueTotal = value;
        }
    });
    Object.defineProperty(objeto, 'preço', {
        enumerable: true,
        configurable: true,
        get: function () {
            return preçoTotal;
        },
        set: function (value) {
            if (typeof value !== 'number') {
                console.log('Inserir somente os valores relacionados ao preço do produto');
                return;
            }
            preçoTotal = valor;
        }
    });
    return objeto;
}

// Exemplos de aplicação:

const produtosMercado = Analiseobjetos(10, 20);
console.log(produtosMercado.estoque, produtosMercado.preço);

// Exemplos de erro (alertas) na aplicação:

produtosMercado.estoque = 'Pimba';
produtosMercado.preço = 'Vasco';