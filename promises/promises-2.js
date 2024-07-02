// Promise.all (resolve todas de uma vez), Promice.race (mostra aquela que for mais rápida), Promice.resolve, Promise.reject (serve pra cair no ".catch" => dar erro).
function random (min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function waithere (message, time) {
    return new Promise ((resolve, reject) => {
        if (typeof message !== 'string') {
            reject (false);
            return;
        }
        setTimeout(() => {
        resolve(message); 
        }, time);
    });
}
/*const promises = [waithere('Promise 1', random(1, 5)), waithere('Promise 2', random(1, 5)), waithere('Promise 3', random(1, 5))];

Promise.race(promises).then(function (value) {
    console.log(value);
}).catch(function (error) {
    console.log(error);
}); */

function baixaPagina () {
    const Cache = true;

    if (Cache) return Promise.resolve('Página em cache');
    return waithere('Baixei a página', 3000);
}

baixaPagina().then(dadospagina => {
    console.log(dadospagina);
}).catch(e => console.log(e)); 