// Trabalho com limites de uma função.
function studyinglimits () {
    let limplus; // Valor do limite tendendo à direita.
    let liminus; // Valor do limite tendendo à esquerda.
    return {
        limitexpression (x) {
            limplus = Number(Math.ceil(x / (x + 1)));
            liminus = Number(Math.floor(x / (x + 1)));
            return { limplus, liminus };
        },
        multiplelimits (xOf) {
            let results = [];
            for (let x of xOf) {
                let { limplus, liminus } = this.limitexpression(x);
                results.push({ x, limplus, liminus });
            }
            return results;
        },
        existenceproof () {
            if (limplus === liminus) {
                return 'The existence of this limit is correct.'
            } else {
                return 'We do NOT have a proper limit, accordingly to its properties.'
            }
        },
    };
}
let limitfinder = studyinglimits();
let proof = existenceproof();
let results = limitfinder.multiplelimits([2, 3, 4, -1, -5]);
console.log('Results:', results, proof);

