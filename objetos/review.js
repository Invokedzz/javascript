function factory () {
    return {
        randomname () {
            console.log('Random!');
            return;
        }, 
        ultrarealistic () {
            console.log('Ultra!');
            return;
        },
    };
}

const fabrica = factory(); // Atribuição de variável (valor foi salvo na memória, valor => função). Depois, só apontamos para qual função queremos extrair a informação.
fabrica.randomname();
fabrica.ultrarealistic(); // Na hora de exibir uma função dentro da factory function, faça dessa maneira.

function factoryhammer () {
    return {
        addition (a, b) {
            return a + b;
        },
        multiplication (x, y, z) {
            return x * (y + z);
        },
        bagulholegal (a, b, c, d) {
            let variavel = this.multiplication(b, c, d);
            return a += variavel;
        },
        teste () {

        }
    };
}

const hammer = factoryhammer(); // Salvo a função na memória
console.log(hammer.addition (5,2)); // Atribui valores a função de adição,
console.log(hammer.multiplication(2, 10, 20)); // Atribui valores a função de multiplicação,
console.log(hammer.bagulholegal(1, 3, 10, 20)); // Atribui valores ao bagulholegal.

function condicional () {
    return {
        maiorque (a, b) {
            if (a > b) return true;
            return false;
        },
        umououtro (q, w) {
            if (q === '' || w === 0) return true;
            return false;
        },
        ee (e, p) {
            if (e < p && p > 10) return true;
            return false;
        },
    };
}
let con = condicional();
console.log(con.maiorque(2, 10));
console.log(con.umououtro(0, 0));
console.log(con.ee(1, 9)); 

function analisaerros () {
    return {
        erros (x, y) {
            try {
                let mult = this.multip(x, y)
                if (mult < 20 || isNaN(mult)) return false;
                return mult * 2;
            } catch (e) {
                throw new Error('Insira valores válidos');
            }
        },
        multip (x, y) {
            return x * y;
        }
    };
}

let mistake = analisaerros();
console.log(mistake.erros('aaaa', 'aaa'));

function certainaccess (user, password) {
    let passwordvalid = false;
    return {
        user,
        password,
         firstenter() {
            try {
                if (user.length < 6 || password < 8) return false;
                return passwordvalid = true, 'Proceed';
            } catch (e) {
                if (user.length === '' && isNaN(password)) return false, 'Insert a proper value';
                throw new Error('User is not defined');
            }
         },
         enteringagain () {
            try {
                if (password.value === '' || password < 8 || isNaN(password)) return false, 'Wrong Password';
                return passwordvalid = true, 'Welcome back';
            } catch (e) {
                throw new Error('Wrong password');
            }
        },

    };
}
let midcrisis = certainaccess('Narcoticos', 'senha1234');
console.log(midcrisis.firstenter());



/* const maiortamanho = pessoasdasruas.filter(function (value) {
    return value.nome.length < 7;
}); // Função em tamanho normal
console.log(maiortamanho);
const englobando = pessoasdasruas.filter(valor => valor.nome.length > 3); // Função resumida
console.log(englobando);
const acabaemO = pessoasdasruas.filter(value => value.nome.toLowerCase().endsWith('o'));
console.log(acabaemO);

const valores = [2, 10, 6, 1, 20, 30, 35];
function selectvalues (valueof) {
    return valueof > 10;
}
const contagem = valores.filter(selectvalues);
console.log(contagem); // Aplicando funções em ".filter" e afins.
const resumo = valores.filter(valueof => valueof > 10);
console.log(resumo); // Forma resumida.

const fusionsummoningnumbers = valores.map(v => v * 2);
console.log(fusionsummoningnumbers) // Atraves do "map" conseguimos multiplicar os números por 2.

const triple = valores.map(function (v) {
    return v * 2;
});
console.log(triple); */

const pessoasdasruas = [
    {nome: 'Michelangelo', idade: 25},
    {nome: 'Donatello', idade: 24},
    {nome: 'Leonardo', idade: 26},
    {nome: 'Raphael', idade: 26},
];

for (let i = 0; i < pessoasdasruas.length; i++) {
    console.log(pessoasdasruas[i]);
}

const hmnome = pessoasdasruas.map(x => x.nome); // Quando desejamos analisar coisas em especifico do nosso array, utilizamos o map, não o filter.
const hmidade = pessoasdasruas.map(x => x.idade);
console.log(hmnome);
console.log(hmidade)

const outrosnumeros = [100, 30, 40, 80, 200, 600, 900];
const acrescimo = outrosnumeros.reduce(function (ac, val) {
    ac += val;
    return ac
}, 1);
console.log(acrescimo);
const acrescimonovamente = outrosnumeros.reduce(function (a, v) {
    a *= v;
    return a;
}, 2);
console.log(acrescimonovamente);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const iniciandofilter = num.filter(n => n % 2 === 0).map(m => (m * 6) + 2).reduce(function (a, v) {
    a += v;
    return a;
}, 0);
console.log(iniciandofilter);

function fabricandoarrays () {
    const numerosescolhidos = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    return {
        acrescentavalores () {
            return [...numerosescolhidos].map(v => v + 10);
        },
        multiplicavalores () {
            return this.acrescentavalores().map(x => (x * 10) / 2);
        },
        somatotal () {
            return this.multiplicavalores().reduce(function (ac, val) {
                ac += val;
                return ac;
            });
        },
    };
}
const fabricadearrays = fabricandoarrays();
console.log(fabricadearrays.acrescentavalores());
console.log(fabricadearrays.multiplicavalores());
console.log(fabricadearrays.somatotal());

const chaveamento = {
    nome: 'Anão',
    sobrenome: 'Pablito',
    idade: 25,
};

const chavenome = 'nome';
const chavesobrenome = 'sobrenome';
console.log(chaveamento[chavenome]);
console.log(chaveamento[chavesobrenome]); // Métodos para chamar elementos dentro de um objeto
console.log(chaveamento.nome, chaveamento.sobrenome); // Dentro desse método podemos inserir diversos elementos

chaveamento.metodoChama = function () {
    console.log(`This ${this.nome} is saying the truth. We should follow his example.`);
};
chaveamento.metodoChama(); // Método callback. Perceba que conseguimos acessar ao elemento do objeto e inserí-lo na function.

chaveamento.chamatudo = function () {
    console.log(`${this.nome} ${this.sobrenome} is a good man.`);
};
chaveamento.chamatudo(); // Aqui inserimos um elemento a mais do objeto.

chaveamento.datadenascimento = function () {
    const data = new Date ();
    return data.getFullYear() - this.idade;
};
console.log(chaveamento.datadenascimento());

function Marketplace (product, price) {
    let _product = '';
    this.price = price;
    Object.defineProperty(this, 'product', {
        enumerable: true,
        configurable: true,
        get: function () {
            return _product;
        },
        set: function (valueof) {
            if (typeof valueof !== 'string') {
                console.log('Return strings only');
                return;
            }
            _product = valueof;
        },
    });
    this.product = product;
}
const market = new Marketplace(3749823798, 73289408);
console.log(market.product)