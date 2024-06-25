function Fall (name, price) {
    this.name = name;
    this.price = price;
}
Fall.prototype.limit = function (value) {
    this.price = this.price + (value ** 0.5); // Não se pode utilizar condicionais aqui.
}
Fall.prototype.limitp = function (value) {
    this.price = this.price + (value ** 2);
}

function Rise (name, password, price) {
    Fall.call(this, name, price);
    Object.defineProperty (this, 'password', {
        enumerable: true,
        configurable: true,
        get: function () {
            return password;
        },
        set: function a (v) {
            let isvalid;
            if (isvalid.value === '' && isvalid < 8) return false;
            return isvalid += v;
        }
    });    
}

Rise.prototype = Object.create(Fall.prototype);
Rise.prototype.constructor = Rise;

const ev = new Fall ('Eva', 5);
const bp = new Rise ('Ev', '33333', 10);