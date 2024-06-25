function coffeemachine (name, price, color, quantity) {
    Product.call(this, name, price);
    this.color = color;
    this.quantity = quantity;

    Object.defineProperty (this, 'color', {
        enumerable: true,
        configurable: true,
        get: function () {
            return color
        },
        set: function (value) {
            if (typeof value !== 'string') return;
            color = value;
        }
    });
    
    Object.defineProperty (this, 'quantity', {
        configurable: true,
        enumerable: true,
        get: function () {
            return quantity;
        },
        set: function (value) {
            if (typeof value !== number) return;
            quantity = value;
        }
    });
}

coffeemachine.prototype = Object.create(Product.prototype);
coffeemachine.prototype.constructor = coffeemachine

const cm = new coffeemachine('Nespresso', 100, 'Red', 3);
console.log(cm)



function Product (name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.plus = function (valueof) {
    this.price = this.price + ((valueof * 2) / 3);
}

Product.prototype.minus = function (valueof) {
    this.price = this.price - ((valueof * 2) / 3);
}

const pyy = Object.create(Product.prototype, {
    name: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 'Café em cápsula',
    },
    price: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 25,
    }
});

function NewProduct (name, price, color) {
    Product.call(this, name, price);
    this.color = color;
}

const pzz = Object.create(Product.prototype, {
    name: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 'Café Solúvel',
    },
    price: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 15,
    },
    color: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 'Bege',
    },
});

function Stock (name, price, quantity) {
    Product.call(this, name, price);
    this.quantity = quantity;
}
Stock.prototype = Object.create(Product.prototype);
Stock.prototype.constructor = Stock;
Stock.prototype.additional = function (value) {
    this.price = this.price + (this.price * (value / 100));
}
Stock.prototype.lesspercentual = function (value) {
    this.price = this.price + (this.price * (value / 100));
}



const pxx = new Product ('Café em pó', 22);
const pww = new Stock ('Café em embalagem de vidro', 10, 3);

console.log(pww);
console.log(pxx);
console.log(pyy);
console.log(pzz);


// pxx.plus(9);
// pxx.minus(1);
// pyy.minus(1);
// pww.additional(5);