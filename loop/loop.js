function bhaskara (a, b, c, x) {
    let delta = (a * (x ** 2) + (b * x) + c);
    if (a === 0) return;
    if (!delta < 0 && delta >= 0) return true;
    if (delta < 0) return false;
}

let x = [2, 3, 4];
for (let i = x.length - 1; i >= 0; i--) {
    //console.log(x[i]);
}

// Faça um programa que leia 5 números e informe a soma e a média dos números.

