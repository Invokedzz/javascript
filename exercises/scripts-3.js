let elementos = [
    {nome: 'Xandão', sobrenome: 'Super'},
    {nome: 'Bill', sobrenome: 'Bora'},
    {nome: 'Paulinho', sobrenome: 'Feliz'},
    {nome: 'Amanteigado', sobrenome: 'Manteiga'}
]
for (let j = 0; j < elementos.length; j++) {
    const {nome, sobrenome} = elementos[j];
    console.log(nome, sobrenome);
}