/*function recursiva (max) {
    if (max > 10) return;
    max++;
    recursiva(max);
    console.log(max);
}
recursiva(-10);
function recursiva2 (limitof) {
    if (limitof >= 20) return;
    limitof++;
    recursiva2(limitof);
    console.log(limitof);
}
recursiva2(0); */

function* geradora () {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}
const g1 = geradora();
/*console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());*/

for (let valor of g1) {
    console.log(valor);
}

function* geradora3 () {
    yield 1;
    yield 2;
    yield 3;
}
function* geradora4 () {
    yield* geradora3();
    yield 4;
    yield 5;
}
const g4 = geradora4();
for (let value of g4) {
    console.log(value);
}

function* geradora5 () {
    yield function () {
        console.log('Vim do y1');
    };
    yield function () {
        console.log('Vim do y2');
    };
}
const g5 = geradora5();
const func = g5.next().value;
const func2 = g5.next().value;
func();
func2();