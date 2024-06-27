function criaPessoa (nome, sobrenome) {
    
    const pessoaP = {}
    return Object.create(pessoaP, {
        nome: {
            value: nome
        },
        sobrenome: {
            value: sobrenome
        },
    });
}

const pessoa1 = criaPessoa('Pedrin', 'Oloko');
console.log(pessoa1.nome, pessoa1.sobrenome);