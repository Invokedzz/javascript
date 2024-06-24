 function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomecompleto = `${this.nome} ${this.sobrenome}`;
 }

 Pessoa.prototype.nomecompleto = function () {
    return this.nome + this.sobrenome;
 } // O Prototype é responsável por otimizar o desempenho do nosso código.

 const pessoa = new Pessoa('Flakes', 'Careca');
 const novapessoa = new Pessoa('Pablito', 'Colombiano');
 console.log(pessoa, novapessoa);

 // Todos os objetos tem uma referência interna para um protótipo (_proto) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar o membro de um objeto, primeiro o motor do JS vai tentar encontrar esse membro no próprio objeto e depois a cadeia de prototypes é usada até o tpop (null), até encontrar (ou não) tal membro.

