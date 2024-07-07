// Revisando arrays:

let num = [3, 4, 6, 10];
num[4] = 50; // Escolho uma posição do array e insiro um valor.
num.push(20) // O valor escolhido vai diretamente para o fim do array.

function C (init, func, arr) {
    let valorInicial = init;
    for (let y = 0; y < arr.length; y++) {
        valorInicial = func(valorInicial, arr[y]);
    }
    return valorInicial;
}
function func (x, y) {
    return x + y;
}
let init = 0;
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let val = C(init, func, arr);
//console.log(val);                              // Função baesada no exercício do LeetCode. Interessantíssimo. 

function test (ar, fn) {
    let Emptyarray = [];
    for (let x = 0; x < ar.length; x++) {
        if (fn(ar[x], x)) {
            Emptyarray.push(arr[x]);
        }
    }
    return Emptyarray;
}
let ar = [10, 11, 12, 13, 14];
function fn (n) {
    return n + 1;
}
let resultado = test(ar, fn);
//console.log(resultado);

/* function ly (fn, arr) {
    let array = [];
    for (let p = 0; p < arr.length; p++) {
        if (fn(arr[p])) {
            array.push(arr[p]);       // Aqui tá levando em consideração true or false. Logo, não é possível inserir a multiplicação abaixo. Creio que este seja o problema. :(
        }
    }
    return array;
}
let ha = [10, 20, 25, 30, 40, 50];
function fn (n) {
   return n * 2;
}
const ny = ly(fn, arr);
console.log(ny) */

/* function T (ini, fn, arr) {
    let begin = ini;
    for (let q = 0; q < arr.length; q++) {
        begin = fn(arr[q], begin);
    }
    return begin;
}
let arr = [10, 20, 25, 30, 40, 50];
let ini = 1.5;
function fn (x, y) {
    return x * y;
}                                     // Toda essa função age como um reduce.
let Total = T(ini, fn, arr);
console.log(Total); */