let calculoDelta;
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
*/
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
        return title;
    }
}
const funcionalidade = retomar();
console.log(funcionalidade);
function nomear (nome) {
    return function () {
        return nome;
    };
}
const nickname = nomear('Pablito');
const nickname2 = nomear('Pablon');
console.log(nickname());
