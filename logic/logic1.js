// 1. Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.

function ret (h, b) {
    let area = h * b;
    return area * 2;
};

// Ler um número inteiro e exibir o seu sucessor.

function nInteiro (n) {
    for (let i = n + 1; i >= 0; i++) {
        console.log(i);
        return;
    }
};

// Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), leu um valor de temperatura em Fahrenheit e exibi-lo em Celsius.

function fah (f) {
    let celsius = (5 * ((f - 32) / 9));
    return celsius.toFixed(2);
}

// Escreva um programa para gerar o invertido de um número com três algarismos (exemplo: o invertido de 498 é 894).

function invertido (num) {
    console.log(num.toString().split('').reverse().join(''));
    return num;
}
//invertido(10);

// Escreva um programa que leia 3 valores e escreva a soma dos 2 maiores

function olhapedra (x, y, z) {
    if (x > y && z > y) return x + z;
    return olhabomba(x, y, z);
}
function olhabomba (x, y, z) {
    if (y > x && z > x) return z + y;
    return olhasinal(x, y, z);
}
function olhasinal (x, y, z) {
    if (x > z && y > z) return x + y;
}

//40. Escreva um programa que receba um numero inteiro de 1 a 100 e mostre na tela o numero por extenso.

function escreveNum (n) {
    for (let q = 0; q <= n; q++) {
        console.log(q);
    }
};

//42. Escreva um programa que imprima todos os números inteiros de 100 a 1 (em ordem decrescente).

function escreveDecrescente (n) {
    for (let w = 100; w >= n; w--) {
        console.log(w);
    }
}

//43. Escreva um programa que imprima todos os números pares do intervalo fechado de 1 a 100.

function idK () {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) console.log(i);
        if (i % 2 !== 0) console.log('Sucumba ímpar');
    };
};
idK();

//45. Escreva um programa que leia 5 números, e imprima a média entre eles.

function doShit (a, b, c, d, e) {
    const media = ((a + b + c + d + e) / 5);
    return media.toFixed(2);
};
