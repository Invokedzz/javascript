let escalas = [ 'Pedro' , 'Suarez' , 'Bartolomeu' , 'Genghis' ];
escalas.push('Cebolinha');
escalas[5] = 'Jobs';
escalas.push('Steve');
escalas[7] = 'Felipe';
let ordenamento = escalas.length;

function estudantes (ordenamento) {
    if (ordenamento.length == 0 || ordenamento.length == '') {
        return false;
    } else {
        return true;
    }
} 

let geralMedia = 7.0;
let mediaAlunos = [ 8, 5, 6, 10];
Number(mediaAlunos.push('2', '5', '3', '2'));
let tamanhoTotal = mediaAlunos.length;
const mediaTotal = (8 + 5 + 6 + 10 + 2 + 5 + 6 + 10) / 8;
const mediaFinal = Math.floor(mediaTotal);

function notaTurma (geralMedia, mediaFinal) {
    if (geralMedia > mediaFinal || mediaFinal < 5) {
        return 'Turma reprovada'
    } else {
        return 'Turma aprovada'
    }
}

// console.log(notaTurma(geralMedia, mediaFinal));

let val = 9.478980
let soma = Math.ceil(val) + 10;
let timasso = Math.max(Math.random());
const incremento = timasso + 1;
incremento.push = Math.random();

function numerosAleatorios() {
    if (incremento > 1 && incremento != -1) {
        return true
    } else {
        return false
    }
} console.log(numerosAleatorios());

let elemento = "Tudo vale a pena, se a alma não é pequena";
function texto() {
    if (elemento.length > 20) {
    elemento.replace("pequena", "grande");
        return elemento.replace
    } else {
        return false
    }
} console.log(elemento.replace("pequena", "grande"));

function adicao (x, y) {
    const resultado = x + y;
    return resultado
}
console.log(adicao(2, 3));

const raizes = function (y) {
    return y ** 0.5;
};

const raiz = n => n ** 0.5; // Arrow function. praticamente igual a funcao acima, mas simples.

console.log(raizes(9));

const pessoa01 = {
    nome: 'Super',
    sobrenome: 'Xandao',
    idade: 30
}; // Isso eh um objeto.

function criaPessoas (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
} // function fabrica de objetos.

const pessoa02 = criaPessoas('Super', 'Xandao', 30);
const pessoa03 = criaPessoas('Super', 'Xandao', 40);
const pessoa04 = criaPessoas('Super', 'Xandao', 50);

console.log(pessoa02.nome, pessoa02.sobrenome);

/*
    Primitivos - string, number, boolean, undefined, null => sao valores imutaveis; nao podemos mudar nada neles. Estamos falando especificamente do valor.

    Referencia - arrays, object, function - sao dados mutaveis.
    
*/

