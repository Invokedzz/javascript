function Marketplace (nome, price) {
    Object.defineProperty(this, 'nome', {
        configurable: true,
        enumerable: true,
        get: function () {
            return nome;
        },
        set: function (val) {
            val = nome;
            if (typeof val !== 'string') return false
            return true;
        },
    });
    Object.defineProperty(this, 'price', {
        configurable: true,
        enumerable: true,
        get: function () {
            return price;
        },
        set: function (val) {
            val = price;
            if (typeof val !== 'number') return false;
            return true;
        },
    });
}

class returnNumber {
    constructor (x, y) {
        Object.defineProperties(this, {
            x: {
                configurable: true,
                writable: true,
                enumerable: true,
                value: 1,
            },
            y: {
                configurable: true,
                enumerable: true,
                writable: true,
                value: 2,
            }
        });
    }
    loadNumber () {
        return this.x + this.y;
    }
}

module.exports = {
    returnNumber,
    Marketplace,
}