/*// Função construtora - objetos;
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

function User(login, password) {
    const verifyUser = '';
    if (isNaN(verifyUser)) {
        return false // Método privado. Não é possível acessá-la.
    }
    this.login = login;
    this.password = password;
    if (!login || !password) return false;
    this.enter = function () {
        console.log('Valid User. Welcome back!'); // Através do This, temos um método público. Logo, podemos acessá-lo normalmente.
    }
}
const userN1 = new User('pedrinhomonoYasuo123', '1234');
console.log(userN1.login);
userN1.enter(); */