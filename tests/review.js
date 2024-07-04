 function loadingnumbers (min = 1, max = 4) {
    min *= 2000;
    max *= 3000;
    return Math.ceil(Math.random() + (max - min) + min);
}
function loadContent (msg, timer) {
    return new Promise ((response, reject) => {
        if (typeof msg !== 'string') {
            reject('Return a string');
            return;
        }
        setTimeout(() => {
            response(msg);
        }, timer);
    })
}
/*

async function displaymsg () {
    const firstmsg = await loadContent('Iniciando...', loadingnumbers());
    console.log(firstmsg);
    const secondmsg = await loadContent('Chamando algumas funções...', loadingnumbers());
    console.log(secondmsg);
    const thirdmsg = await loadContent('Tudo pronto!', loadingnumbers());
    console.log(thirdmsg);
}
displaymsg();

*/

// Async só pode ser chamado se houver o await na função (ou seja, algo mandando a função esperar). Nós retornamos uma nova Promise, que contém uma resposta (response) e uma negação (reject). Caso o usuário retorne algo que não seja uma string, ele receberá uma resposta dada pelo reject. Caso contrário, o Timeout vai ocorrer de forma padrão. Note a função "loadContent(msg, timer)" quando escrevemos "const msg = await loadContent('Iniciando...', loadingnumbers())" os parâmetros estão ligados aqui. Msg = 'Iniciando...', timer = 'loadingnumbers()'.

/* async function catchError () {
    try {
    const displayFirstmsg = await loadContent('Starting...', loadingnumbers());
    console.log(displayFirstmsg);
    const displaySecondmsg = await loadContent('Doing some preparatives...', loadingnumbers());
    console.log(displaySecondmsg);
    const displayThirdmsg = await loadContent('We are ready!', loadingnumbers());
    console.log(displayThirdmsg);
    } catch (error) {
        console.log(error);
    }
}
catchError();                         

// Aqui, a única diferença dessa para a outra função é a adição do método try/catch. Portanto, diferentemente da outra função, essa é capaz de pegar erros.

*/

/* function Items (name, category) {
    Object.defineProperty(this, 'name', {
        enumerable: true,
        configurable: true,
        get: function () {
            return name;
        },
        set: function (value) {
            if (typeof value !== 'string') {
                value = this.name;
                return false;
            }
        },
    });
    Object.defineProperty(this, 'category', {
        enumerable: true,
        configurable: true,
        get: function () {
            return category;
        },
        set: function (value) {
            if (typeof value !== 'string') {
                value = this.category;
                return false;
            }
        },
    });
}
const item = new Items('Avion', 'Movie');
console.log(item) */

/* function Account (name, profile, id) {
    this.profile = profile;
    this.name = name;
    this.id = id;
}
Account.prototype.averiguar = function (value) {
    if (this.id < value) {
        this.show();
        return;
    }
}
Account.prototype.show = function () {
    const display = console.log(`${this.name} and ${this.profile}`);
    return display;
}

const a = new Account ('Peréz', 'Paulin', 667456);
a.averiguar(700000); */

/* 
function Conta (agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}
Conta.prototype.saque = function (value) {
    if (this.saldo < value) {
        this.versaldo();
        return;
    }
    this.saldo -= value;
    this.versaldo();
}
Conta.prototype.depositar = function (value) {
    this.saldo += value;
    this.versaldo();
}
Conta.prototype.versaldo = function () {
    console.log(`${this.agencia}, ${this.conta}, ${this.saldo}`);
}
const acc = new Conta('Bradesco', 'Sams', 70);
acc.depositar(100);
acc.saque(90); */
/*
function Guardian (sword, shield) {
    this.sword = sword;
    this.shield = shield;
}
Guardian.prototype.join = function (v) {
    return this.shield = this.shield + (v * 2);
}
Guardian.prototype.reducedamage = function (x) {
    if (this.sword > 100) return;
    return this.sword = this.sword - (x * 1.5);
}
const cc = new Guardian (101, 20);
                                                // cc.join(10);
                                                // cc.reducedamage(10)
console.log(cc); 
Slay.prototype = Object.create(Guardian.prototype);
Slay.prototype.constructor = Slay;
function Slay (sword, shield, spear) {
    Guardian.call(this, sword, shield);
    this.spear = spear;
}

Slay.prototype.speardamage = function (xy) {
   return this.spear = this.spear + (xy + (5 * xy));
}

Slay.prototype.Union = function (xy) {
    if (this.sword > 100) return this.sword = this.sword * (xy * 10 + (this.sword + xy));
    return this.spear = this.spear * this.sword * this.shield;
}

const ss = new Slay (101, 20, 15);
ss.Union(10, 1);
console.log(ss);

*/
/*
class Individual {
    constructor (helmet, armor) {
        this.helmet = helmet;
        this.armor = armor;
    }
    increasehelmetpower () {
        return this.helmet = this.helmet + this.armor; 
    }
    increasearmorpower() {
        let power = 1;
        while (power < 55) {
            this.armor += power;
            power *= 1.1;
        }
        return this.armor;
    }
    iap () {
        for (let power = 1; power < 55; power *= 1.1) {
            this.armor = this.armor += power;
            console.log(this.armor)
        }
    }
}

const tt = new Individual (50, 30);
console.log(tt.increasearmorpower());
console.log(tt.iap()) */

const _power = Symbol();
class Powerups {
    constructor (power, fireball) {
        this.fireball = fireball;
        this[_power] = 90;
    }
    get power () {
        return [_power];
    }
    set power (value) {
        if (typeof value !== 'number' && value < 0) return false;
        this[_power] = value;
    }
    raiseFireballPower () {
        return this[_power] += 10;            // Se lembre de chamar a função anônima e endereçar ela com o 'this'
    }
    raiseEvenFurther () {
        if (this[_power] > 80) return this[_power]++
        return;
    }
}
const look = new Powerups( ' ', 'Dark Fireball');             // Apesar de inserirmos o valor 30, não há mudança no valor de "fireball" por conta de Symbol().
/*for (let upgrade = 1; upgrade < 20; upgrade ++) {
     console.log(look.raiseEvenFurther());
} */

/* function Pedreiro (martelo, material) {
    Object.defineProperty (this, 'martelo', {
        enumerable: true,
        configurable: true,
        get: function () {
            return martelo;
        },
        set: function (val) {
            if (typeof val !== 'string') return false;
            val = martelo;
        }
    });
    Object.defineProperty (this, 'material', {
        enumerable: true,
        configurable: true,
        writable: true,
        value: 'Madeira',
    });
}

const mm = new Pedreiro ('Martelo', );
console.log(mm.martelo) */

