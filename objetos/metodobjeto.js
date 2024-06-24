const produto = {nome: 'Caneca', preço: 1.8};
const varinha = {
    ...produto,
    material: 'porcelana',
};  // Pode continuar criando, atribuíndo
produto.nome = 'Varinha';
varinha.preço = 2.5;
Object.defineProperty(varinha, 'nome', {
    writable: false,
    enumerable: false,
});
// Object.freeze(varinha); // Faz que o objeto não seja alterado
console.log(varinha);
console.log(Object.keys(varinha));

console.log(Object.getOwnPropertyDescriptor(varinha, 'nome')) // Mostra as propriedades do objeto => value, writable, enumerable e configurable. Essas definições podem ser alteradas.

console.log(Object.values(varinha));
// Lê só os valores do objeto.

for (let valor of Object.entries(varinha)) {
    console.log(valor[0]);
}