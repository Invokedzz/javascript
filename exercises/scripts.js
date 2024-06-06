/* const corUsuario = null;
const corPadrao = 'Branco'; // Ele prioriza uma string ou number ou qualquer outro tipo, em relacao ao null.

const corInserida = corUsuario || corPadrao;
// console.log(corInserida);

function passe (y = 1000) {
    if (y >= 1000) {
        console.log('Usuario VIP!');
    } else {
        console.log('Usuario padrao');
    }
} 

const data = new Date();
console.log(data.toString());

console.log('Dia', data.getDay()); // 0 - Domingo, 6 - Sabado.
console.log('Month', data.getMonth()); // Mes inicia no 0. Ou seja, janeiro = 0.
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds()); */

/* function zerado (numero) {
    if (numero >= 10) {
        return numero;
    } else {
        return `0${numero}`
    }
}

const data = new Date();
function revelaData (data) {
    const dia = zerado(data.getDate());
    const mes = zerado(data.getMonth() + 1);
    const ano = zerado(data.getFullYear());
    return `${dia}/${mes}/${ano}`;
}
const dataBr = revelaData(data);
console.log(dataBr) */

const data = new Date();
const dayof = data.getDay();
let daysoftheweek = '';
function dayscount () {
    if (dayof === 0) {
        daysoftheweek = `Domingo`;
    } else if (dayof === 1) {
        daysoftheweek = `Segunda`;
    } else if (dayof === 2) {
        daysoftheweek = `Tersa`;
    } else if (dayof === 3) {
        daysoftheweek = `Quarta`;
    } else if (dayof === 4) {
        daysoftheweek = `Quinta`;
    } else if (dayof === 5) {
        daysoftheweek = `Sexta`;
    } else if (dayof === 6) {
        daysoftheweek = `Sabado`;
    }
}
dayscount();
console.log(dayof, daysoftheweek);

/* function parImpar (x) {
    if (x % 2 == 0) {
        return 'Par';
    } else {
        return 'Impar';
    }
} */
