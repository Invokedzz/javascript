// The best market in the world!

function Product (name, price, stock) {
    Object.defineProperty(this, 'name', {
        enumerable: true,
        configurable: true,
        get: function () {
            return name;
        },
    });
    Object.defineProperty(this, 'price', {
        enumerable: true,
        configurable: true,
        get: function () {
            return price;
        },
    });
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: true,
        get: function () {
            return stock 
        }
    });
}
Product.prototype.rulesprice = function () {
    if (isNaN(this.price) && typeof this.price !== 'number') return false;
    return this.price;
};
Product.prototype.stockrulesdiscount = function (value) {
    if (isNaN(this.stock) && typeof this.stock !== 'number') return false;
    if (this.stock > 20 && this.stock <= 0) return this.stock = Math.ceil(this.stock - (this.stock * (value / 100)));
    return false;
}
Product.prototype.high = function (value) {
    return this.price = this.price + (this.price * (value / 100));
};
Product.prototype.discount = function (value) {
    return this.price = this.price - (this.price * (value / 100));
};
function Coffee (name, price, stock, types) {
    Product.call (this, name, price, stock);
    Object.defineProperty (this, 'types', {
        configurable: true,
        enumerable: true,
        get: function () {
            return types;
        },
        set: function (val) {
            if (typeof val === 'string' && typeof val.length > 4) return true, types = val;
            return false;
        }
    }); 
    Object.defineProperty (this, 'name', {
        configurable: true,
        enumerable: true,
        get: function () {
            return name;
        },
        set: function (val) {
            if (typeof val !== 'number') return true, name = val;
            return false;
        },
    });
    Object.defineProperty (this, 'price', {
        configurable: true,
        enumerable: true,
        get: function () {
            return price;
        },
        set: function (val) {
            if (typeof val === 'number') return true, price = val;
            return false;
        },
    });
    Object.defineProperty (this, 'stock', {
        enumerable: true,
        configurable: true,
        get: function () {
            return stock;
        },
        set: function (val) {
            if (typeof val === number) return true, stock = val;
            return false;
        },
    });
}

Coffee.prototype = Object.create(Product.prototype);
Coffee.prototype.constructor = Coffee;

function CoffeeMug (name, price, stock, styles) {
    Product.call(this, name, price, stock);
    Object.defineProperty(this, 'name', {
        enumerable: true,
        configurable: true,
        get: function () {
            return name;
        },
        set: function (v) {
            if (typeof v !== 'number') return true, name = v;
            return false;
        },
    });
    Object.defineProperty(this, 'price', {
        enumerable: true,
        configurable: true,
        get: function () {
            return price;
        },
        set: function (v) {
            if (typeof v === 'number') return true, price = v;
            return false;
        }
    });
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: true,
        get: function () {
            return stock;
        },
        set: function (v) {
            if (typeof v === number) return true, stock = v;
            return false;
        },
    });
    Object.defineProperty(this, 'styles', {
        enumerable: true, 
        configurable: true,
        get: function () {
            return styles;
        },
        set: function (v) {
            if (typeof v !== 'string') return false;
            return true, v = styles;
        }
    });
}

CoffeeMug.prototype = Object.create(Product.prototype);
CoffeeMug.prototype.constructor = CoffeeMug;

const pw = new Coffee ('Coffee', 15, 4, 'package');
const pr = new CoffeeMug ('White mug', 5, 10, 'White');
console.log(pr.name, pr.price, pr.stock, pr.styles);
console.log(pw.name, pw.price, pw.stock, pw.types);