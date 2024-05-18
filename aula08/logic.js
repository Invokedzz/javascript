var idade = 20;
console.log('Vc tem ${idade} anos');
if (idade < 16) {
    console.log('N vota');
}
else if (idade < 18 || idade > 65) {
    console.log('Voto opcional');
}
else {
    console.log('Voto obrigatorio');
}

var tempo = spring;
console.log('You"re on spring!');
if (tempo > 30) {
    console.log('You"re on summer!')
}
else if (tempo < 15 || tempo <= 20) {
    console.log('You"re on winter');
}
else {
    console.log('You"re at another season!');
}

var agora = new Date()
var hour = agora.getHours()
console.log('Agora sao exatamente ${hour} horas.');
if (hour < 12) {
    console.log('Good morning!');
}
else if (hour <= 18) {
    console.log('Good afternoon!');
}
else {
    console.log('Good night!')
}

var agora = new Date()
var diasem = agora.getDay()

/* 

0 - Domingo
1 - Segunda
2 - Tersa
3 - Quarta
4 - Quinta
5 - Sexta
6 - Sabado

*/

console.log(diasem)

switch(diasem) {
    
    case 0:
        console.log('Domingo');
        break

    case 1:
        console.log('Segunda');
        break

    case 2:
        console.log('Tersa');
        break

    case 3:
        console.log('Quarta');
        break

    case 4:
        console.log('Quinta');
        break

    case 5:
        console.log('Sexta');
        break

    case 6: 
        console.log('Sabado');
        break

    default:
        console.log('Invalid data');
        break

}
