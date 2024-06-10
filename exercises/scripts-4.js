const frutas = ['Pera', 'Banana', 'Uva'];
for (let j = 0; j < frutas.length; j++) {
    console.log(frutas[j])
}
for (let j in frutas) {
    console.log(frutas[j]);
} // Repetição for in: lê os índices ou chaves do objeto.
const civil = {
    nome: 'Super',
    sobrenome: 'Xandão',
    idade: 30
};
for (let pessoa in civil) {
    console.log(pessoa);
}
const apelido = 'Super Xandão';
for (let i = 0; i < apelido.length; i++) {
    console.log(apelido[i]);
}
for (let a in apelido) {
    console.log(apelido);
}
// Se coloco somente a constante 'apelido', a engine irá exibir o nome completo repetidas vezes. Já se eu inserir 'apelido[i]', o nome será "soletrado".
// For clássico - (array ou strings);
// For in - (string, array, objetos);
const usuario = 'Analise';
let controle = 0;
while (controle <= usuario.length) {
    console.log(usuario[controle]);
    controle++;
}
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(min, max);
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
} // While checa a condição e depois executa o código.
do {
    rand = random(min, max);
    console.log(rand)
} while(rand != 10);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o 2')
        continue; // O continue faz você pular o número 2.
    }
    if (numero === 7) {
        break; // Não executa o 7 nem os valores adiante.
    }
    console.log(numero);
}

