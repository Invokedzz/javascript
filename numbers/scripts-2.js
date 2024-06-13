cores = ['Red', 'Blue', 'Green', 'Yellow'];
for (let colors of cores) {
    console.log(colors);
}
function parabola (a, b, c) {
    let delta = b*b - 4*a*c;
    if (delta > 0) console.log('Positivo, com duas raízes distintas.');
    else if (delta === 0) console.log('Neutro. Possui raízes iguais.');
    else console.log('Negativo. Não possui raízes reais.');
    return delta;
}
function bhaskara (a = 1, b = 5, c = 6) {
    let curvaturaParabola = (parabola(a, b, c));
    let formulaBhaskaraMenos = ((b - curvaturaParabola) / 2*a);
    let formulaBhaskaraMais = ((b + curvaturaParabola) / 2*a);
    return formulaBhaskaraMais, formulaBhaskaraMenos;
} console.log(bhaskara()); 

// Analisando return. Retorna um valor e termina a função.

/*function soma (a, b) {
    return a + b
} console.log(soma(5, 2));
function soma2 (a, b) {
    console.log(a + b);
} soma2(5, 2);
document.addEventListener('click', function () {
    document.body.style.background = 'blue';
});*/
/*function criaPessoa (nome, sobrenome) {
    return { nome, sobrenome };
}
const p1 = criaPessoa('Super', 'Xandão');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira',
};
console.log(p1, p2);
function falaFrase (comeco) {
    function falaResto(resto) {
    return comeco + ' ' + resto;
    }
    return falaResto
}
const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'));

function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4); */

/*function retornaFuncao () {
    const nome = 'Louis';
    return function pablito () {
        return nome;
    }
}   const funcao = retornaFuncao();
    console.log(funcao);
    function retornaNome (nome) {
        return function () {
            return nome;
        };
    }
    const apelido = retornaNome('Louis');
    const apelido2 = retornaNome('Pablito');
    console.log(apelido());
    console.log(apelido2); */

    // Nesse caso, temos uma função retornaNome, que contém um parâmetro 'nome'. Esse parâmetro é retornado por meio de uma função anônima. Fizemos, logo após, duas constantes. Caso fizermos um "console.log(apelido());" - que vai retornar o parâmetro dado - nesse caso, Louis. Todavia, caso retornarmos meramente a constante, somente a função será apresentada. Aqui, nesse exemplo, vai demonstrar a função anônima.

    /* function rand( min = 1000, max = 3000) {
        const num = Math.random() * (max - min) + min;
        return Math.floor(num);
    }

    function f1(callback) {
        setTimeout(function () {
            console.log('f1');
            if (callback) callback();
        }, rand());
    }
    function f2 (callback) {
        setTimeout(function () {
            console.log('f2');
            if (callback) callback();
        }, rand());
    }
    function f3(callback) {
        setTimeout(function () {
            console.log('f3');
            if (callback) callback();
        }, rand());
    }
f1( function () {
    f2(function () {
        f3(function () {
            console.log('Hello World!')
        });
    });
});

function cumprimento(nome) {
    console.log("Olá!" + nome);
}
function resposta (callback) {
    let nome = ' Por favor insira seu nome!';
    callback(nome);
}
resposta(cumprimento); */
(function () {
    const nome = 'Alfredo';
    console.log(nome);
}) (); // IIFE -> immediately invoked function expression.
(function (nome, altura, peso) {
    const sobrenome = 'Miranda';
    function falaOi (nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome () {
        console.log(falaOi('Oi'));
    }
    falaNome();
})(30, 50, 100); // Essa função precisa estar dentro do parênteses.