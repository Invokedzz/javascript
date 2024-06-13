let analysisProtocol;
analysisProtocol = function(e) {
    if (e % 10 == 0 && e % 5 == 0) return;
    else return e;
}
function classroom () {
const students = ['Peter', 'Paul', 'Jackson'];
students.push('Chico', 'Maria', 'Alice');
for (let y = 0; y < students.length; y++) {
    const studentsInclass = students[y];
    console.log(studentsInclass);
    }
} classroom();
const hackroms = [
    {rom: 'Super Mario World', properLocal: 'Internet Archive'},
    {rom: 'Donkey Kong Country', properLocal: 'Internet Archive'},
    {rom: 'EarthBound', properLocal: 'Vimm'},
];
for (let q = 0; q < hackroms.length; q++) {
   let {rom, properLocal} = hackroms[q];
   console.log(rom, properLocal);
}
falaOi();
function falaOi() {
    console.log('Olá!');
}
const criaDado = function() {
    console.log('Dado!');
}
criaDado(); // Quando criamos uma constante + função, devemos iniciá-la logo abaixo da função ou do arquivo. Caso inserirmos ela acima da função, vamos ter que lidar com um erro de inicialização.
const FuncaoArrow = () => {
    console.log('Criei uma arrow function');
    criaTexto();
}
FuncaoArrow();
function criaTexto () {
    console.log('Criei um texto');
}
function xis (x) {
    return x;
} console.log(xis(1));
function funcao() {
    console.log(arguments[0]);
} funcao('Valor', 1, 2, 3, 4);
function addition() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
addition(1, 2, 3, 4, 5, 6); // Arguments sustenta todos os argumentos atribuídos a função. Nesse caso, "(1, 2, 3, 4, 5, 6)."
function letras (a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
letras(1, 2, 3, 4, 5, 6);

function soma (a, b = 1) {
    console.log(a + b);
}soma(2);
function soma2 (a, b = 2, c = 4) {
    console.log(a + b + c);
} soma2(2, 10, 20); // O valor do argumento é priorizado em relação aos valores inseridos no parâmetro. Caso inserirmos um ' ', iremos concatenar TODOS os valores inseridos no argumento.
function funcaoD ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}funcaoD({nome: 'M', sobrenome: 'J', idade: 18});
function expressExpressions (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
       if (operador === '+') acumulador += numero; 
       if (operador === '-') acumulador -= numero;
       if (operador === '*') acumulador *= numero;
       if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
} expressExpressions('+', 0, 20, 30, 40, 50);