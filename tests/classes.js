const _powerup = Symbol(); // Acabei de tornar "powerup" privado.
class Hero {
    constructor (name, powerup) {
        this.name = name;
        this[_powerup] = 1;
    }
    get powerup() {
        return [_powerup];
    }
    set powerup (value) {
        if (typeof value < 0 && typeof value !== 'number') return;
        if (value > 10) return;
        this[_powerup] = value;
    }
    aquabeam() {
       for (let aquablast = 0; aquablast <= 50; aquablast++) {
            this[_powerup]++; // The property symbol can be changed. But, we cannot change it directly.
       }
    }
    fireblast(v) {
        for (let fire = 10; fire < 30; fire++) {
            this[_powerup] *= v; // The same as here.
        }
    }
}


const p = new Hero('Aquamancer', 20); 
// We try to insert the value 20, but the symbol function makes it impossible to change the [_powerup] this way.
p.fireblast(1.1);
p.aquabeam()
// console.log(p);


class Dialogue {
    constructor (hero, boss) {
        this.hero = hero;
        this.boss = boss;
    }

    dia() {
        console.log(`The ${this.hero} rises his sword, ` + `but the ${this.boss} don't seem to care.`)
    }
}

const d = new Dialogue ('Armored Dude', 'Evil Overlord');
d.dia(); 