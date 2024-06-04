const alunos = [ 'Luiz', 'Chico', 'Pedro' ];

console.log(alunos[0]); // Luiz;
console.log(alunos[1]); // Chico;
console.log(alunos[2]); // Pedro;

alunos[0] = 'JP'; // Mudansa no array.
console.log(alunos);

alunos[3] = 'Forgada'; // Adisao ao array.
console.log(alunos);

alunos[alunos.length] = 'Marion';
alunos[alunos.length] = 'Shico'; // Adisoes ao array no final, sem especificacao.

alunos.push('Shirlo'); // Adisao ao final do array, de forma mais simples.

alunos.unshift('Shirlo'); // Altera a ordem inicial do array. Nesse caso, Shirlo sera o indice 0.

// alunos.pop(); => remove o elemento final do array.

/* alunos.pop();
const removido = alunos.pop();

console.log(alunos);
console.log(removido); */


 
