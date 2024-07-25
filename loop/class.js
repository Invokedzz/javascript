/*class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }
};

const Square = class {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }
};

const Rectangle = class Rectangle2 {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }
} */

// Formas que podemos chamar uma classe.

class square {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    };

    callArea () {
        return this.calcArea();
    };

    calcArea () {
        return this.height * this.width;
    };

}

const sq = new square (10, 10);
console.log(sq.callArea());

class Triangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    };

    callTriangleArea () {
        if (this.calculateArea() <= 0) return false;
        return this.calculateArea();
    };

    calculateArea () {
        if (this.height <= 0 && this.width <= 0) return false;
        return (this.height * this.width) / 2;
    };

}

const t = new Triangle(10, 0);

class Bhaskara {
    constructor(a, b, c, x) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.x = x;
    }

    verifyBhaskara () {
        const result = this.calculateBhaskara();
        if (result < 0) {
            return 'Valor negativo. Portanto, sem raízes reais.';
        };

        if (result >= 0) {
            return 'Valor neutro ou maior que zero';
        };

    }

    calculateBhaskara () {
        return (this.a * (this.x ** 2) + (this.b * this.x) + this.c);
    }
}

const tt = new Bhaskara(0,0, 0, 0);

class Animal {
    constructor (name) {
        this.name = name;
    }

    speak () {
        console.log(`This ${this.name} makes a noise`);
    }
};

class Dog extends Animal {
    constructor (name) {
        super(name);
    }

    speak () {
        console.log(`${this.name} barks`);
    }
}

const c = new Dog('Baloo');
c.speak();

//The extends keyword is used in class declarations or class expressions to create a class as a child of another constructor (either a class or a function).


