// Construa e resolva essa expressão = (h + 3) ** 2 - 9 / h;

function Calc () {
    Object.defineProperty(this, 'limit', {
        enumerable: true,
        configurable: true,
        get: function () {
            return this.expressionp();                // Considere isso como "this.limit";
        },
    });
}

Calc.prototype.expressionp = function (h) {
    const ex = (((h + 3) * (h + 3)) - 9) / h;
    if (typeof ex !== 'number') return false;
    if (h > 0) return ex;
    return ex--;
}


const variations = new Calc();
console.log(variations.expressionp(-10));