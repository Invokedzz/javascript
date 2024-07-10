function* generateOne () {
    // Código qualquer...
    yield 'Value 1';
    // Código qualquer...
    yield 'Valor 2';
    // Código qualquer...
    yield 'Valor 3';
}

const g1 = generateOne();
//console.log(g1.next()); 
//console.log(g1.next().value);
//Entrega somente o valor.

// Você utiliza o "next para ver os valores. Ele mostra o value e o done. O done me diz se já foi completada a função.

for (let value of g1) {
   // console.log(value);
} // Percorre até exibir todos os valores.

function* generateTwo () {
    yield 0;
    yield 1;
    yield 2;
}
function* generateThree () {
    yield* generateTwo(); //Delega parte da funcionalidade para o outro gerador.
    yield 3;
    yield 4;
    yield 5;
}
const g4 = generateThree();
for (let v of g4) {
 //   console.log(v);
}

function* generateFour () {
    yield function () {
        console.log('Y1');
    };
    yield function () {
        console.log('Y2');
    }
}
const g5 = generateFour();
const f1 = g5.next().value;
const f2 = g5.next().value;
f1();
f2();

function goFind () {
    return function (x) {
        return x;
    }
}
const f = goFind();
console.log(f(10));

function goAddition () {
    return function (x, y) {
        return x + y;
    }
}

const fg = goAddition();
console.log(fg(10, 2));

function fcomposta (func) {
    return function (x) {
        let result = x;
        for (let i = x.length - 1; i >= 0; i--) {
            result = func[i](result);
        }
        return result;
    }
}

function subSix (x) {
    return x - 6;
}
function addTen (x) {
    return x + 10;
}
function multiplyEleven (x) {
    return x * 2;
}

const functions = [subSix, addTen, multiplyEleven];
const compo = fcomposta(functions);
console.log(compo(11));