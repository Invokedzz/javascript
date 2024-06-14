// Função construtora - objetos;
// Função fábrica - objetos;
// Construtora - pessoa (new);
function Pessoa(nome, sobrenome) {
    // Métodos privados;
    const ID = 123456;
    const metodoInterno = function () {

    }
    //Métodos Públicos.
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function () {
        console.log('I am a method');
    }
}
const pessoa1 = new Pessoa('Pedro', 'Vascaíno');
const pessoa2 = new Pessoa('Bambi', 'SP');
console.log(pessoa1.nome);
pessoa1.metodo();