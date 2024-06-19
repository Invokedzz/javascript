/* let num = [100, 200, 300, 400, 500];
let threex = num.map(function (valueof) {
    return `${valueof * 3}`;
});
console.log(threex);

let doublex = num.map(value => `${value * 2}`);
console.log(doublex);
/*let fivex = num.map(function (v) {
    return `${v * Math.random()}`;
});
console.log(fivex); ==> Versão mais verbosa 
let fivex = num.map(v => `${v * Math.random()}`);
console.log(fivex);

let num2 = [50, 101, 158, 205, 250, 303];
const removido = num2.pop();
console.log(num2);
let par = num2.map(x => {
    if (x % 2 === 0) return x;
    return 'ímpar';
});
console.log(par);

const criminosos = [
    {nome: 'Abner', idade: 40},
    {nome: 'Pablito', idade: 35},
    {nome: 'Rick', idade: 60},
];
const listaCriminosos = criminosos.map(x => x.nome);
const retorneCriminoso = criminosos.map(x => x);
const retornaIdade = criminosos.map(y => y.idade);
const tagCriminosos = criminosos.map((valor, indice) => {
    valor.id = indice + (Math.random() + 2);
    return valor;
});
console.log(tagCriminosos);


console.log(retornaIdade);
console.log(retorneCriminoso);
console.log(listaCriminosos); ==> Revisão de map e análise de suas respectivas arrow functions.*/

/*const amigosdoAbner = [
    {nome: 'Dona Cleusa', idade: 100},
    {nome: 'Pablito', idade: 35},
    {nome: 'Abner Cibernético', idade: 1},
    {nome: 'Mesi', idade: 7856384975837},
];
const nomes = amigosdoAbner.filter(x => x.nome.length > 5);
const idades = amigosdoAbner.filter(v => v.idade > 50);
const endsO = amigosdoAbner.filter(o => o.nome.toLowerCase().endsWith('o'));
const endsI = amigosdoAbner.filter(i => i.nome.toLowerCase().endsWith('i'));


const num = [6, 80, 71, 20, 77, 90];
let chamaAi = (val => val > 20);

const mede20 = num.filter(chamaAi);
console.log(mede20); 

const entregovinte = num.filter(valueof => valueof > 20);
console.log(entregovinte);

const menorquevinte = num.filter(valor => valor < 20);
console.log(menorquevinte);

//console.log(endsI);
//console.log(endsO);
//console.log(idades);
//console.log(nomes); ==> Revisando Filter */

const valores = [1, 5, 10, 15, 20, 25, 40];
const total = valores.reduce(function (acumulador, valor, ind, array) {
    acumulador += valor;
    return acumulador;
}, 0); // ==> Valor inicial do acumulador. Caso esse valor não for inserido, ele tomará para si o primeiro valor do array inserido no ".reduce". O valor do parâmetro "valor" é dado como o último elemento do array.
console.log(total);

const jogos = [
    {jogos: 'Super Mario World', lançamento: 1990},
    {jogos: 'Sonic the Hedgehog', lançamento: 1992},
    {jogos: 'Megaman X', lançamento: 1990},
];
const maisVelho = jogos.reduce(function (ac, val) {
    if (ac.lançamento > val.lançamento) return ac;
    return val;
}); // Se o lançamento de ac for maior, retorne ac. Caso o contrário, retorne val. 
console.log(maisVelho);

// Unindo Filter, Map e Reduce:

const num = [5, 7, 6, 10, 12, 8, 0, 23, 2];
/* const numpares = num.filter(function (v) {
    return v % 2 === 0;
}).map(function (x) {
    return x * 2;
}).reduce(function (ac, y) {
    return ac += y;
}); // Você pode utilizar parâmetros distintos, mesmo em casos assim. No início, selecionamos apenas os pares do array, depois multiplicamos por 2 e em seguida fazemos a soma do início ao fim. Depois, retornamos o valor.
console.log(numpares); */

// A partir de arrow functions: 

const pares = num.filter(v => v % 2 === 0).map(v => v * 2).reduce((ac, v) => {
    return ac + v;
});
console.log(pares);



