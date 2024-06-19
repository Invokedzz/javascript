// Filter, map, reduce;
// Filter sempre retorna um array, com a mesma quantidade de elementos ou menos.
// Retorne os números maiores que 10;
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
function callbackFilter (valor, indice) {
    console.log(valor, indice);
    return valor > 10 // O true captura os valores. Já o false não. Os parâmetros recebem valor, índice e array. 
}
const num2 = numeros.filter(callbackFilter);
console.log(num2);
/* const numerosFiltrados = numeros.filter(valor => valor > 10);*/ // Função reduzida.

const people = [
    {nome: 'Chico', idade: 60},
    {nome: 'Tom', idade: 90},
    {nome: 'Abner', idade: 50},
    {nome: 'Abner2', idade: 20},
];
const pessoasNomeGrande = people.filter(value => value.nome.length > 3);
console.log(pessoasNomeGrande);
const genteVelha = people.filter(valor => valor.idade > 50);
console.log(genteVelha);
const a = people.filter(v => v.nome.toLowerCase().endsWith('a'));
console.log(a);