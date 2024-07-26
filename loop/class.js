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

// Faça um Programa que peça um número inteiro e determine se ele é par ou impar. Dica: utilize o operador módulo (resto da divisão).

class mandaOtario {
    constructor (num) {
        this.num = num;
    }

    analisaValores () {
        if (this.num % 2 === 0) return 'É um valor par';
        return 'É um valor ímpar';
    };

};

// Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar: A mensagem "Aprovado", se a média alcançada for maior ou igual a sete; A mensagem "Reprovado", se a média for menor do que sete; A mensagem "Aprovado com Distinção", se a média for igual a dez.

class mediasdosOtarios {
    constructor (mediaUm, mediaDois) {
        this.mediaUm = mediaUm;
        this.mediaDois = mediaDois;
    }

    calculaIsso () {
        if (typeof this.mediaUm !== 'number' || typeof this.mediaDois !== 'number') return false;
        return (this.mediaUm + this.mediaDois) / 2;
    };

    verificaIsso () {
        if (this.calculaIsso() >= 7) return 'Aprovado';
        return 'Reprovado';
    };

    obichoBrabo () {
        if (this.calculaIsso() === 10) return 'Aprovado com distinção';
        return this.verificaIsso();
    };

}

// Um circuito elétrico é composto de duas resistências R1 e R2 em paralelo, e ambas em sequência de uma resistência R3. Faça um algoritmo para calcular a resistência equivalente desse circuito.

class Resistor {
    constructor (r1, r2, r3) {
        this.r1 = r1;
        this.r2 = r2;
        this.r3 = r3;
    }

    calculoR () {
        const valResistor = ((this.r1 * this.r1) / (this.r2 * this.r2)) + this.r3;
        return valResistor;
    }

    chamaCalculo () {
        if (this.calculoR() <= 0 || typeof this.calculoR() !== 'number') return false;
        return this.calculoR();
    }

};

// João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho.Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.

class peixeMorto {
    constructor (valorNormal, valorMulta) {
        this.valorNormal = valorNormal;
        this.valorMulta = valorMulta;
    }

    calculaVal () {
        if (this.valorNormal > 50) return this.valorNormal + (this.valorMulta * 4);
        return this.valorNormal;
    }

    exibeVal () {
        if (this.calculaVal() > 50) return 'O valor veio com um acréscimo';
        return `O valor foi de ${this.calculaVal()}`;
    }

}