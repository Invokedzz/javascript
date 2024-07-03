function random (min = 0, max = 3) {
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

/*waithere('Fase 1', random()).then(e => {
    console.log(e);
    return waithere('Fase 2', random())
}).then(v => {
    console.log(v);
    return waithere('Fase 3', random());
}).then(x => {
    console.log(x);
}).catch(error => console.log(error)); */

async function execute () {
    
    try {
        const fase1 = await waithere('fase 1', random());
        console.log(fase1);
        const fase2 = await waithere('fase 2', random());
        console.log(fase2);
        const fase3 = await waithere('fase 3', random());
        console.log(fase3)
    } catch (error) {
        console.log(error);
    }
  
}
execute();

function factory () {
    return {
        async execut () {
            try {
                const level1 = await waithere('level 1', random());
                console.log(level1);
                const level2 = await waithere('level 2', random());
                console.log(level2);
                const level3 = await waithere('level 3', random());
                console.log(level3);
            } catch (error) {
                console.error(error);
            }        
        }
    };
}
const c = factory().execut();
