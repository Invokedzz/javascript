let umaString = "Um texto";

console.log(umaString.indexOf('o')); // Le a string do inicio ao fim.

console.log(umaString.lastIndexOf('m')); // Le a string do fim ate o inicio.

console.log(umaString.match(/[a-z]/g)); // Pega todas as minusculas da string.

console.log(umaString.replace('Um', 'Outra'));
console.log(umaString.replace('Um', '')); // replace troca um por outro.

let Umastring = "O rato roeu a roupa do rei de roma";
console.log(Umastring.replace('roma', 'brazil'));
console.log(Umastring.length); // Analisa o tamanho da string. Nesse caso, temos 34.

console.log(Umastring.slice(2, 6)); // corta uma parte da string.

console.log(Umastring.split(' ', 2)) // Divide a nossa string.

console.log(Umastring.toUpperCase()); // Deixa tudo em maiusculo;

console.log(Umastring.toLowerCase()); // Deixa tudo em minusculo.

let meunome = 'Samu';

console.log(`meu nome eh ${meunome}`);

console.log(meunome.length);

console.log(meunome.indexOf('S'));

console.log(meunome.lastIndexOf('u'));

console.log(meunome.slice(1));

console.log(meunome.toUpperCase());

console.log(meunome.toLowerCase());
