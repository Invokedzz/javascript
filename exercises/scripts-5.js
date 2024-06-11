for (let i = 0; i <= 20; i++) {
    console.log(i);
}
const ordem = ['Sigma', 'Ômega', 'Zero', 'X'];
for (let j = 0; j < ordem.length; j++) {
    console.log(ordem[j]);
} 
function random(min, max) {
    let r = Math.random() * (max + min) - min;
    return Math.floor(r);
}
const min = 1;
const max = 100;
let randomizer = random(min, max);
while (randomizer !== 20) {
    randomizer = random(min, max); // Usado para evitar o loop infinito.
    console.log(randomizer);
}
let usuario = 'Pedro Marcos da Silva';
let panoramaControle = 0;
while (panoramaControle < usuario.length) {
    console.log(usuario[panoramaControle]);
    panoramaControle++
}
for (let x = 10; x < 2000; x += 200) {
    console.log(x);
}
let i = 0;
let n = 0;
while (i < 5) {
    i++;
    if ( i === 3) {
        continue;
    }
    n += 1;
} console.log(i);

function maiorN (x, y) {
    if (x > y) {
        console.log(`O valor ${x} é maior que o valor ${y}`);
        return x;
    } else if (y > x) {
        console.log(`O valor ${y} é maior que o valor ${x}`);
        return y;
    } else if (x == y) {
        console.log('Os valores são iguais entre si.');
        return x, y;
    } else {
        console.log('Cê fez alguma burrada, amigo.')
    }
}
console.log(maiorN(5, 2));
function numeroFofo (x, y) {
    if (x > y) return x;
    return y;
}
console.log(numeroFofo(1, 2));
const max2 = (x, y) => x > y ? x : y;
console.log(max2(10, 30));

function ePaisagem (largura, altura) {
    return largura > altura;
}
console.log(ePaisagem(1920, 1080));

const ePaisagemm = (largura, altura) => largura > altura;
console.log(ePaisagem(1920, 1080));

/*function matta (e) {
    if (e % 3 == 0) return 'Fizz';
    if (e % 5 == 0) return 'Buzz';
    if (e % 5 == 0 && e % 3 == 0) {
        return 'FizzBuzz';
    } else {
        return e;
    }
} console.log(matta(4)) */

function fizzBuzz (numero) {
    if (typeof numero !== 'number') return NaN; // Se o valor dado não for um número, retorna 'NaN'
    if (numero % 3 === 0 && n % 5 === 0) return 'FizzBuzz'; // Essa condição deve ser colocada em primeiro.
    if (numero % 3 === 0) return 'Fizz'; // Caso o valor for divisível por 3, retorna 'Fizz'
    if (numero % 5 === 0) return 'Buzz'; // Caso o valor for divisível por cinco, retorna 'Buzz'
    return numero; // Se e somente se as opções acima não forem verdadeiras em relação ao valor determinado, o número será retornado imediatamente ao usuário.
}
 /*for (let o = 0; o <= 100; i++) {
    console.log(fizzBuzz(i));
 } */
 /*try {
    console.log(naoExisto);
 } catch(err) {
    console.log('naoExisto não existe');
 } */
function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser números.');
    }
    return x + y
}
try {
    console.log(soma(1,2));
    console.log(soma('1', 3)) // Aqui o protocolo é gerado. Perceba que, o segundo 'console.log' exibe uma string - cuja presença não é aceita pela função soma. A partir disso, a primeira função é executada (resultando em 3) enquanto a segunda é remediada a partir de uma mensagem de erro enviada ao usuário. Detalhe: a mensagem deve ser, no mínimo, amigável. 
} catch (err) {
    console.log('Amigável');
}
try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch (e) {
    console.log('Tratando o erro');
} finally {
    console.log('Eu sempre sou executado');
}
function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date');
    }
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    console.log(e)
} finally {
    console.log('Tenha um bom dia.')
}