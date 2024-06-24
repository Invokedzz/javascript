function Teste (name, price) {
    this.price = price;
    Object.defineProperty(this, 'name', {
        configurable: true,
        enumerable: true,
        get: function () {
            return name;
        },
        set: function (value) {
            if (!typeof value !== 'number') {
            console.log('HAHAHAHA');
            return false;
        }
            name = value;
            return true;
        },
    });
}

let test = new Teste('HAHA', 10);
const result = (test.name = 123);
console.log(result); 

