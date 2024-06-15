/*let calculoDelta;
let functionBhaskara;

function inicioBhaskara(a, b, c) {
    let delta = b * b - 4 * a * c;
    return delta;
}
// A solução para arrumar a função foi através da remoção do acesso global.
/*
*(function iniciobhaskara (a, b, c) {
let delta = b * b - 4*a*c;
return delta;
})(1, 2, 0); => removemos apenas essa funcionalidade. Cuidado ao montar funções desse tipo :).

(function finalBhaskara() {
    functionBhaskara = function(a = 1, b = 2, c = 0) {
        calculoDelta = inicioBhaskara(a, b, c);
        const primeiroBhaskara = (b - Math.sqrt(calculoDelta)) / (2 * a);
        const segundoBhaskara = (b + Math.sqrt(calculoDelta)) / (2 * a);
        return [primeiroBhaskara, segundoBhaskara];
    }
})();

console.log(functionBhaskara());

// Relembrando Xvertice = -b / 2a; Yvertice = - delta / 4a. Vamos construir funções levando em conta tais expressões através da funcionalidade invoked.
function yVerticebegin (a = 1, b = 2, c = 0) {
    let delta2 = (inicioBhaskara(a, b, c));
    return delta2;
} console.log(yVerticebegin());
(function xVertice (a = 1, b = 2) {
    let expression = - b / 2 * a;
    console.log(expression);
})();
(function yVertice (a, b, c) {
    const minusDelta = yVertice(a, b, c);
    let y = (- minusDelta) / 4 * a;
    console.log(y);
}); // As funções são basicamente essas. No caso, só não vai dar pra fornecer o log da última pelo excesso de "a, b, c" - talvez eu deveria ter utilizado outros parâmetros.
// Um dos jeitos mais simples de utilizar as funções de execução imediata, é levar em consideração o seguinte: 1. crie uma função normal, e logo após, crie uma função de retorno imediato. No caso, busque deixar a função mais básica no modelo mais simples. Note que, deixei a função mais simples para executar o retorno do delta2 e só. Nada mais, nada menos. Enquanto as outras funções, essas com maiores funcionalidades, executei elas através da execução imediata. O resultado, por enquanto, se mostrou eficaz.
function retomar () {
    const title = 'Von';
    return function pablo () {
        return title; // Dentro de uma função estabeleço uma variável. Ainda dentro da função, retorno uma função "pablo()" que me retorna a variável. Inicialmente, essa função não está "rodando"; só após o estabelecimento de outra variável. Nesse caso, a função "funcionalidade()."
    }
}
const funcionalidade = retomar();
console.log(funcionalidade);
function nomear (nome) {
    return function () {
        return nome;
    }; // Aqui a mesma coisa acontece. A diferença, é que possuo um parâmetro. Tenho uma função definida como: "nomear(nome)", e dentro dela, tenho uma outra função que tem como "motivo de existência" o retorno desse parâmetro. Logo após, algumas variáveis são estabelecidas - acessando o nome retornado.
}
const nickname = nomear('Pablito');
const nickname2 = nomear('Pablon');
console.log(nickname());

function criaSer (nome, sobrenome, x, y) {
    return {
        nome,
        sobrenome, 
        nomeCompleto() {
            return `${this.nome
            } ${this.sobrenome}`
        },
        fala: function (assunto) {
            return `${this.nome} está ${assunto}.`
        },
        altura: x,
        peso: y,
        get imc () {
            const ind = this.peso / this.altura ** 2;
            return ind.toFixed(2);
        }
    };
} 
const p1 = criaSer('Pablito', 'Amigo do Pablon', 2.00, 100);
console.log(p1.imc);
console.log(p1);
console.log(p1.fala('hablando'));
console.log(p1.nomeCompleto())
// O "this" é referente a um objeto que o está chamando. Nesse caso, o "p1".

function criaoutroSer (name, nickname, q, d) {
    return {
        name, 
        nickname,
        fullName() {
            return `${name} ${nickname}`
        },
        conversation(quote) {
            return `${this.name} is ${quote}`
        },
        altura: q,
        peso: d,
       get calculus() {
            const multiplication = this.altura * this.peso;
            return multiplication.toFixed(2);
        }
    }
}
const px = criaoutroSer('Chico', 'Xavier', 1.80, 60);
const py = criaoutroSer('Renato', 'Russo', 1.75, 70);
console.log(py);
console.log(py.fullName())
console.log(px);
console.log(px.fullName());
console.log(px.conversation('talking about something...'));
console.log(px.calculus) */