const num = [5, 10, 15, 20, 30, 40, 50];
const doubleornothing = num.map(v => `x2 -> ${v * 2}`);
console.log(doubleornothing);
const people = [
    {nome: 'Chico', idade: 60},
    {nome: 'Tom', idade: 90},
    {nome: 'Abner', idade: 50},
    {nome: 'Abner2', idade: 20},
];
const abner = people.map(x => x.nome);
const returnabner = people.map(x => x)
const idadeAbner = people.map(y => y.idade);
const comIDS = people.map(function (obj, indice) {
    const newOBJ = {...obj};
    newOBJ.id = indice;
    obj.id = indice + Math.random() + 1; // Alteração no objeto original.
    return obj
});
console.log(abner);
console.log(returnabner);
console.log(idadeAbner);
console.log(comIDS)