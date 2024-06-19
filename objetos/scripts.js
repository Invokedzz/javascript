/* const pessoa = {
    nome: 'Louis',
    sobrenome: 'Mister',
    idade: 30,
};

//const chave = 'nome';
//console.log(pessoa[chave]);
//console.log(pessoa.nome, pessoa.sobrenome); // Pode fazer assim tbm: console.log(pessoa['nome']);

// delete pessoa.nome; ==> Apaga um elemento do objeto. Nesse caso, nome.

pessoa.falarnome = function () {
    console.log(`${this.nome} is talking.`);
};
pessoa.falarnome();

pessoa.datanascimento = function () {
    const data = new Date();
    return data.getFullYear() - this.idade;
};
console.log(pessoa.datanascimento());

for (let chave in pessoa) {
    console.log(pessoa[chave]); // Ou simplesmente console.log(chave);
} */

// Factory Functions

function criaPessoa (nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        nomecompleto () {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Luuiz', 'Lane');
console.log(p1.nomecompleto());

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // return this; this representa objeto vazio -> {}
}

const px = new Pessoa('Abner', 'Pereira');
// px.nome = 'Outra coisa' -> altera o valor em si, não a referência de memória.
const py = new Pessoa ('Flakes', 'Careca');
console.log(px, py);