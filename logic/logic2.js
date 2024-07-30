// Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.

class Valores {
    constructor (num) {
        this.num = num;
    }

    confereAi () {
        if (typeof this.num === 'number') return this.num;
        return false;
    }

    confereValor () {
        if (this.confereAi() >= 0 && this.confereAi() % 2 === 0) return 'Positivo e par';
        return 'Negativo e ímpar';
    }

}

// Faça um algoritmo que leia quatro notas obtidas por um aluno, calcule a média das nota obtidas, imprima na tela o nome do aluno e se o aluno foi aprovado ou reprovado. Para o aluno ser considerado aprovado sua média final deve ser maior ou igual a 7.

class Alunoimbecil {
    constructor (nota1, nota2, nota3, nota4, aluno) {
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
        this.aluno = aluno;
    };

    calculaMedia () {
        let media = ((this.nota1 + this.nota2 + this.nota3 + this.nota4) / 4);
        return media;
    };

    aprovadoReprovado () {
        if (this.calculaMedia() >= 7) return `${this.aluno}, você foi aprovado!`;
        return `${this.aluno}, você é burro demais. Reprovado!`;
    };

};

//Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, caso contrário devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e imprimir seu valor na tela.

class Duo {
    constructor (primeiroValor, segundoValor) {
        this.primeiroValor = primeiroValor;
        this.segundoValor = segundoValor;
    };

    analisaValores () {
        if (this.primeiroValor !== this.segundoValor) return this.primeiroValor * this.segundoValor;
        return this.primeiroValor + this.segundoValor;
    };

    novaVariavel () {
        const variavelC = this.analisaValores();
        return variavelC;
    };

}

//  Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo.

class Rectangle {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    };

    validateValues () {
        if (typeof this.height !== 'number' || typeof this.width !== 'number') return false;
        return this.height * this.width;
    };

    showstheArea () {
        const area = this.validateValues();
        return area;
    };

}

// Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.Calcular e escrever o valor do novo salário.

class funcionariOtarioCLT6X1 {
    constructor (salario, reajuste) {
        this.salario = salario;
        this.reajuste = reajuste;
    };

    reajusteSalario () {
        const novoValor = ((this.salario * this.reajuste) / 100);
        return novoValor + this.salario;
    };

    mostranovoSalario () {
        return this.reajusteSalario();
    };
}

/*
Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço
unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:
 - Se quantidade <= 5 o desconto será de 2%
 - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
 - Se quantidade > 10 o desconto será de 5%  */

 class produtoTaxado {
    constructor (nome, quantidade, preço, desconto) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preço = preço;
        this.desconto = desconto;
    }

    calculoTotal () {
        const t = this.quantidade * this.preço;
        return t;
    };

    avaliaDesconto () {
        if (this.quantidade <= 5) {
            return this.desconto = ((this.desconto * 2) / 100);
        }

        if (!this.quantidade <= 5) {
            return this.desconto = ((this.desconto * 5) / 100);
        }
    };

    calculoDesconto () {
        const total = this.calculoTotal();
        const descontoPercentual = this.avaliaDesconto();
        const valorDesconto = total * descontoPercentual;
        const valorTotal = total - valorDesconto;
        return valorTotal;
    };
 }

// Verificação de idade: Crie um programa que peça ao usuário para inserir a sua idade e verifique se ele é menor de idade, adulto ou idoso.

 class Idadevelhaco {
    constructor (idade, nome) {
        this.idade = idade;
        this.nome = nome;
    };

    verificaEssaBomba () {
        if (this.idade < 18) return `Você é menor de idade, ${this.nome}`;
        if (this.idade >= 18 && this.idade < 60) return `Você é maior de idade, ${this.nome}`;
        return `Você vai partir logo logo, ${this.nome}`;
    };

    recebaIdade () {
        return this.verificaEssaBomba();
    };

 }

 // Verificação de divisibilidade: Crie um programa que peça ao usuário para inserir dois números e verifique se o primeiro número é divisível pelo segundo.

 class divideouNao {
    constructor (primeirovalor, segundovalor) {
        this.primeirovalor = primeirovalor;
        this.segundovalor = segundovalor;
    };

    seforDivisivelcemediz () {
        if (this.primeirovalor % this.segundovalor === 0) return 'São divisíveis sim, patrão.'
        return 'Não são divisíveis, patrão.' 
    };

    retornaessaFunctionAi () {
        return this.seforDivisivelcemediz();
    };

 }

 // Pega a área de um quadrado, círculo e triângulo. Daí cê faz o cálculo da sua preferência.

 class elementosGeometricos {
    constructor (width, height, radius) {
        this.width = width;
        this.height = height;
        this.radius = radius;
    }

    squareArea () {
        return this.width * this.height;
    };

    triangleArea () {
        return (this.width * this.height) / 2;
    };

    circleArea () {
        return (this.radius ** 2) * Math.PI;
    };

    agroupingtheFunctions () {
        return this.circleArea() + this.squareArea() + this.triangleArea();
    };

 }
