// Promises veio no intuito de acabar com a "árvore" do callback.

function random (min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function conectar (msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('NO');
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

conectar('Frase', random(1, 3)).then(resposta => {
    console.log(resposta);
    return conectar('Frase 2', random(1, 3));
}).then(resposta => {
    console.log(resposta);
    return conectar('Frase 3', random(1, 3));
}).then(resposta => {
    console.log(resposta);
}).catch(e => {
    console.log('ERRO', e);
})