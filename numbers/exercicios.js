let num = Math.random() * (100);
let fixar = (num.toFixed(2));
let arredondamento = Math.round(fixar);

let num2 = Math.random() * (100);
let fixar2 = (num.toFixed(2));

function valor(arredondamento, fixar2) {
    if (Number.isInteger(arredondamento)) {
        return arredondamento
    } else {
        return fixar2
    }
} 

console.log(arredondamento ** 0.5); 
console.log(Number.isInteger(arredondamento));
console.log(Number.isNaN(arredondamento));
console.log(Math.ceil(arredondamento));
console.log(Math.floor(arredondamento));

console.log(fixar2 ** 0.5);
console.log(Number.isInteger(fixar2));
console.log(Number.isNaN(fixar2));
console.log(Math.ceil(fixar2));
console.log(Math.floor(fixar2));




