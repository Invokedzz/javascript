const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numbers.reduce(function (acumulador, valor, indice, array) {
    acumulador += valor
    return acumulador;
}, 0); // Valor inicial do "acumulador"
console.log(total);

const pessoas = [
    {nome: 'Wally', idade: 10},
    {nome: 'Virgil', idade: 25},
    {nome: 'Dante', idade: 24},
];
const maisVelho = pessoas.reduce(function (acumulador, valor) {
    if (acumulador.idade > valor.idade)return acumulador;
    return valor;
});
console.log(maisVelho);

const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerospares = num.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((ac, valor) => {
    return ac + valor;
});

/*
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerospares = numbers.filter(function (valor) {
    return valor % 2 === 0;
}).map(function (valor) {
    return valor * 2;
}).reduce(function (ac, valor) {
    return ac + valor;
}); // Forma sem arrow functions.
*/

console.log(numerospares);

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let valor of a1) {
    console.log(valor);
}
let tota = 0;
a1.forEach(function (valor, indice, array) {
    tota += valor
   // console.log(valor, indice, array);

});
console.log(tota)