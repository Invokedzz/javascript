function beginmarket (min, max) {
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function loading (msg, timer) {
    return new Promise ((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(false);
            return;
        }
        setTimeout(() => {
            resolve(msg);
        }, timer);
    });
}

function Analysis (name, price) {
    Object.defineProperty(this, 'name', {
        configurable: true,
        enumerable: true,
        get: function () {
            return name;
        },
        set: function (value) {
            if (typeof value !== 'string') return false;
             value = name;
        },
    });
    Object.defineProperty(this, 'price', {
        configurable: true,
        enumerable: true,
        get: function () {
            return price;
        },
        set: function (value) {
            if (typeof value !== 'number') return false;
             value = price;
        },
    });
    Analysis.prototype.aumento = function (val) {
        this.price = this.price + (this.price * (val / 100));
    };
    Analysis.prototype.desconto = function (val) {
        this.price = this.price - (this.price * (val / 100));
    }
   this.finishing = async function () {
        try {
            const start = await loading('Fazendo os preparativos...', beginmarket(0, 5));
            console.log(start);
            const middlestart = await loading('Estamos quase lá...', beginmarket(0, 3));
            console.log(middlestart);
            const finishtimer = await loading('E... bem-vindo!', beginmarket(0, 3));
            console.log(finishtimer);

            console.log(`Product Name: ${this.name}`);
            console.log(`Product Price: ${this.price}`);

        } catch (error) {
            console.log(error);
        }
   } 
}
const ana = new Analysis('Product A', 100);
ana.finishing();