function factory () {
    return {
        randomname () {
            console.log('Random!');
            return;
        }, 
        ultrarealistic () {
            console.log('Ultra!');
            return;
        },
    };
}

const fabrica = factory(); // Atribuição de variável (valor foi salvo na memória, valor => função). Depois, só apontamos para qual função queremos extrair a informação.
fabrica.randomname();
fabrica.ultrarealistic(); // Na hora de exibir uma função dentro da factory function, faça dessa maneira.

function factoryhammer () {
    return {
        addition (a, b) {
            return a + b;
        },
        multiplication (x, y, z) {
            return x * (y + z);
        },
        bagulholegal (a, b, c, d) {
            let variavel = this.multiplication(b, c, d);
            return a += variavel;
        },
        teste () {

        }
    };
}

const hammer = factoryhammer(); // Salvo a função na memória
console.log(hammer.addition (5,2)); // Atribui valores a função de adição,
console.log(hammer.multiplication(2, 10, 20)); // Atribui valores a função de multiplicação,
console.log(hammer.bagulholegal(1, 3, 10, 20)); // Atribui valores ao bagulholegal.

function condicional () {
    return {
        maiorque (a, b) {
            if (a > b) return true;
            return false;
        },
        umououtro (q, w) {
            if (q === '' || w === 0) return true;
            return false;
        },
        ee (e, p) {
            if (e < p && p > 10) return true;
            return false;
        },
    };
}
let con = condicional();
console.log(con.maiorque(2, 10));
console.log(con.umououtro(0, 0));
console.log(con.ee(1, 9));

function analisaerros () {
    return {
        erros (x, y) {
            try {
                let mult = this.multip(x, y)
                if (mult < 20 || isNaN(mult)) return false;
                return mult * 2;
            } catch (e) {
                throw new Error('Insira valores válidos');
            }
        },
        multip (x, y) {
            return x * y;
        }
    };
}

let mistake = analisaerros();
console.log(mistake.erros('aaaa', 'aaa'))
