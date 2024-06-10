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
let livros = [ 'Bras Cubas', 'Crônicas de Gelo e Fogo', 'Príncipe dos Espinhos', 'Como eu era antes de você'];
const novosLivros = livros.push('As trevas de Sethanon', 'Um curso de Cálculo', 'Diário de um Banana');
let TodosLivros = [
    {titulo: '', subtitulo: ''},
    {titulo: '', subtitulo: ''},
    {titulo: '', subtitulo: ''},
    {titulo: '', subtitulo: ''},
]
/*for (let i = 0; i < livros.length; i++) {
    const {titulo, subtitulo} = livros[i];
    console.log(titulo, subtitulo);
} */
console.log(novosLivros);
console.log(livros);