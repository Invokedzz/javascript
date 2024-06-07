function alunosiniciais () {
let alunos = ['Pedrin', 'Thurzin', 'Bradoque', 'Coringa'];
return alunos;
}
console.log(alunosiniciais());
function alunosadicionados () {
    const alunosanteriores = alunosiniciais();
    alunosanteriores.push('Voltan', 'Charin', 'GSLZIN');
    return alunosanteriores;
}
console.log(alunosadicionados());

let numeros = [1, 2, 3, 4, 5];
let [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(resto);

const bomba = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(bomba[1][2]);

// Na variavel "bomba", selecionei a tabela um, que estava a frente da tabela zero. Dai, acabei selecionando o termo 2 cujo valor atribuido eh o seis.

const pessoa = {
    nome: 'Bill',
    sobrenome: 'Bora',
    idade: 30,
    endereço: {
        rua: 'Bora Bill',
        numero: 320
    }
};
const { nome, sobrenome, idade, endereço: { rua, numero }, endereço } = pessoa;
const bill = pessoa.nome;
console.log(nome, sobrenome, idade, rua, numero, endereço);

for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}
for (let j = 100; j <= 400; j += 100) {
    console.log(`Linha ${j}`);
}
for (let p = 0; p <= 20; p++) {
    const par = p % 2 == 0;
    console.log(par);
}   