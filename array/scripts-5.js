const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// nomes.splice(indice, delete, elem1, elem2, elem3...);
// pop;
// const removidos = nomes.splice(-2, Number.Max_value) => vai do -2 até o "infinito"
const removidos = nomes.splice(3, 2, 'Louis');
console.log(nomes, removidos);

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8]); // Serve para concatenar os arrays.
const a4 = [...a1,...a2,...[10, 90]]; // Outra forma de concatenar, usando o rest para spread.
console.log(a4);