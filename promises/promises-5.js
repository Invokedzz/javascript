/* function time (min = 1, max = 6) {
    min *= 5000;
    max *= 6000;
    return Math.ceil(Math.random() + (max - min) + min);
}
function settime (message, time) {
    return new Promise ((resolve, reject) => {
        if (typeof message !== 'string') {
            reject('Please return a string');
            return;
        }
        setTimeout(() => {
            resolve(message);
        }, time)
    });
}
async function displaymessage () {
    const inicialization = await settime('Inicializando...', time());
    console.log(inicialization);
    const preparate = await settime('Fazendo os preparativos...', time());
    console.log(preparate);
    const finish = await settime('Tudo pronto!', time());
    console.log(finish);
}
displaymessage(); // Tempo médio: 1 min 40 sec.

*/
