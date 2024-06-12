function globalFunction () {
let segundos = 0;
let timer;
function Relogio (s) {
    const data = new Date(s * 1000);
    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'UTC',
        hour12: false
    });
} 
timer = setInterval(function () {
    segundos++;
    console.log(Relogio(segundos));
    if (segundos === Math.floor(1 / 3600) + 10)  console.log('Vasco da Gama!');
    if (segundos >= Math.floor(1 / 3600) + 20) { clearInterval(timer); segundos = 0; console.log('Vasco!')} 
    }, 1000); 
}
globalFunction();