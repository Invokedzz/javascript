const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// nomes.splice(indice, delete, elem1, elem2, elem3...);
// pop;
// const removidos = nomes.splice(-2, Number.Max_value) => vai do -2 até o "infinito"
const removidos = nomes.splice(3, 2, 'Louis');
console.log(nomes, removidos);