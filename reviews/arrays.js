// Utilizando filter, map e reduce:

const num = [10, 20, 25, 30, 40, 50];
const x = num.map(y => y * 2);
//console.log(x);
const y = num.map(o => `Vou multiplicar um valor por três: ${o * 3}`);
//console.log(y[1]); 
// Fazendo um console.log(y) => recebe a mensagem para TODOS os valores do array. Caso escolhermos um valor específico, tal como: "console.log(y[1])" selecionamos somente um único valor, e somente esse valor fará a exibição da mensagem.
const xp = num.map(x => (x + 10 / 2));
//console.log(xp);
const elementos = [
    {elemento: 'fogo'},
    {elemento: 'água'},
    {elemento: 'terra'},
    {elemento: 'vento'},
]
const xyz = elementos.map(x => x);      // Caso fizer elementos.map(x => x) vai aparecer o array + objetos. Já se fizer: elementos.map(x => x.elemento) vamos obter um array com todos os elementos. "['fogo', 'água', 'terra', 'vento']" 
//console.log(xyz);

const xy = num.map(x => x * 2).filter(x => x > 20).reduce(function (x, y) {
    x += y;
    return x;
}, 0)
//console.log(xy);               // Utilizando "map", "filter" e "reduce" juntos. Dentre eles, o reduce serve para "acumular" todos os val.

const numa = [];
numa.push(7, 8, 9, 11.5, 10.4, 11.3);
const z = numa.map(u => (u * 4) / 2).filter(u => u % 2 === 0).reduce(function (u, q) {
    u += q;
    return u;
}, 0);
//console.log(z);

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let valor of a1) {
   // console.log(valor);
}
let total = 0;
a1.forEach(function (valor, ind, arr) {
    total += valor;
  //  console.log(valor, ind, arr)         
    // Criamos um array a1 = "[1, 2, 3, 4, 5, 6, 7, 8, 9]". Depois, para cada elemento do a1: "a1.forEach" inserimos os parâmetros "valor", "ind" e "arr" que nos corresponderá com o valor de cada elemento do array, o índice de cada um e o array inteiro.
});
//console.log(total); 

const alpha = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
alpha.forEach(function (val, indice, array) {
    // console.log(val, indice, array)
});

const periodosHistoricos = [
    {ano: 1999, nome: 'Guerra dos Pangú'},
    {ano: 1500, nome: 'Descoberta do Brasil'},
    {ano: 1400, nome: 'Criação do Abner'},
    {ano: 1880, nome: 'Início do Bostil'},
];
const acessoHistoria = periodosHistoricos.map(name => name.nome).filter(name => name.length > 18);
const acessoaoAno = periodosHistoricos.map(periodo => periodo.ano)
//console.log(acessoHistoria);
//console.log(acessoaoAno);


