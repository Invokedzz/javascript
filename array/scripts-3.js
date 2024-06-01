let num = 30;
let dado = 3;

function rice (x) {
    if (x % 3 == 0) {
        return true
    } else {
        return false;
    }
}
console.log(rice(3));

let variante = (num + 10)**dado;
console.log(variante);

let bomba = (num / dado) + (dado * num);
console.log(bomba);

function gohan(y, z) {
    if (y > 50 || z < 50) {
        return true;
    } else {
        return false;
    }
} console.log(gohan(60, 60));

function raditz(w, l) {
    if (w >= 300 && l > 50) {
        return true;
    } else {
        return false;
    } 
} console.log(raditz(300, 60));

/*primeiroValor = prompt('Digite um valor');
segundoValor = prompt('Digite outro valor');
let alterarPrimeiro = Number(primeiroValor);
let alterarSegundo = Number(segundoValor);
let resultado = alterarPrimeiro + alterarSegundo;
let Finalresultado = alert(resultado);*/

let varA = 'A';
let varB = 'B';
let varC = 'C';
const varD = varA;

/*varA = varB;
varB = varC;
varC = varD;*/

[varA, varB, varC] = [varB, varC, varA];


console.log(varA, varB, varC)

