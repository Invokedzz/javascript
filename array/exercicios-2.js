const funcao = function (x) {
    if (x % 4 == 0) {
        return true
    } else {
        return false
    }
}

function epyslon (y) {
    if (y > 10 && y != -1) {
        return true
    } else {
        return false
    }
}

const bowl = n => n * 5; // arrow function;
const world = x => Number(Math.random() + (x ** 0.5));
console.log(world(25));

function darkWorld (w) {
    Number(Math.random() + (w ** 0.5));
    return Number(Math.random() + (w ** 0.5))
}
console.log(darkWorld(25));

const usuario = {
    nome: '',
    sobrenome: '',
    idade: '',
    altura: '',
};

function loginUsuario (nome, sobrenome, idade, altura) {
    return {
        nome,
        sobrenome,
        idade,
        altura
    };
}



let novoUsuario = loginUsuario('Pedro', 'Alvares Cabral', 35, 1.80);
let novoUsuario02 = loginUsuario('Joao', 'Pedro', 32, 2.00);
console.log(novoUsuario02)
