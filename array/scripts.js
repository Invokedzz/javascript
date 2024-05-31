/*let num = [5, 8, 4]; // Det do array;
num.sort(); // Ordem crescente do array;
for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos]);
}/*/

function loucura(x) {
  var z =  x*x + 1;
    return z
}


console.log(loucura(1))

function parimpar(y) {
    if (y % 2 == 0) {
        return 'par';
    } else {
        return 'impar';
    }
}
// String = texto, Number = numero;
console.log(parimpar(4));

let nomecliente = 'Osvaldo';
console.log('Ele e', nomecliente ,'foram ao mercado');
let heroiTerra = 'Xandão';
console.log('Numa longa batalha,',heroiTerra,'obteve o seu lucro.');
console.log('Mas,',heroiTerra, 'foi confrontado por',nomecliente);

const primeiroNumero = 50;
const segundoNumero = 60;
let expressao = Number(primeiroNumero + segundoNumero)/2;
const expressaoDuplicada = (expressao * 2);
const expressaovezesSeis = Number(expressaoDuplicada * 6);
console.log(expressaovezesSeis)

let nomePaciente = 'Super Xand'; 
let sobrenomePaciente = 'Ultimo Heroi da Terra';
let idadePaciente = '2024 - 1990';
let pesoPaciente = '100'
let alturaPaciente = '1.8';
let IMCPaciente = '25.925925';
let imc = Number(pesoPaciente / (alturaPaciente * alturaPaciente));

console.log(imc)

console.log('Atendemos hoje', nomePaciente + sobrenomePaciente, 'ele possui' ,idadePaciente, 'mede' ,pesoPaciente, 'tem', alturaPaciente, 'e seu IMC eh igual a', IMCPaciente,)