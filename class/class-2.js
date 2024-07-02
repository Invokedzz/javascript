const _speed = Symbol();
class Car {
    constructor (name, speed) {
        this.name = name;
        this[_speed] = 0;
    }

    set speed(value) {
        console.log('setter');
        if (typeof value !== 'number') return;
        if (value >= 100 || value <= 0) return;
        this[_speed] = value;
    }

    get speed() {
        console.log('getter')
        return this[_speed];
    }

    acelerar() {
        if (this[_speed] >= 100) return;
        this[_speed]++;
    }

    freiar() {
        if (this.speed <= 0) return;
        this[_speed]--;
    }
}

const c = new Car('Fuscão Preto');
for (let i = 0; i <= 200; i++) {
    c.acelerar();
}
c.speed = 30
console.log(c.speed)
