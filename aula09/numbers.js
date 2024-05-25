function plus1(x) { // Define a função chamada "plus1", com o parametro "x"
    return x + 1; // Retorna um valor uma unidade maior do que o que foi passado
} // As funções são incluídas entre chaves 

var y = 3;

plus1(y)

var square = function(x) { // As funções são valores e podem ser atribuídas a variáveis
    return x*x; // Calcula o valor da função. Um ponto e vírgula marca o fim da atrbuição.
}

square(plus1(y));

function abs(x) { // Uma função para calcular o valor absoluto. A instrução "if". Executa o código se a função for verdadeira. E a cláusula opcional caso a função for falsa. Portanto, caso a cláusula for verdadeira (valor positivo) retorna valor positivo. Caso for falsa, retorna valores negativos. 

    if (x >= 0) {

        return x;

    } else {

        return -x;

    }
}

function factorial(n) { // Uma função para calcular fatoriais. Começa com o produto de 1. Repete as instruções que estão em {}, enquanto a expressão () for verdadeira. Atalho para product = product * n. Atalho para n = n - 1. Fim do laço. Retorna o produto. 
    var product = 1;

    while (n > 1) {

        product *= n;
        n--;
    }
    return product;
}

factorial(4);

    // Quando funções recebem as propriedades de um objeto, as chamamos de "métodos". Todos os objetos de JavaScript possuem métodos.
    // Cria um array vazio;
    // O método push() adiciona elementos em um array;
    // Outro método: inverte a ordem dos elementos.

            var a = [];
            a.push(1, 2, 3); 
            a.reverse

    points.dist = function() {

            var p1 = this[0]; // Primeiro elemento do array
            var p2 = this[1]; // Segundo elemento do objeto "this"
            var a = p2.x-p1.x; // Diferença em coordenadas "x";
            var b = p2.y-p1.y; // Diferença em coordenadas "y";
            return Math.sqrt(a*a + b*b); //Math.sqrt() calcula a raíz quadrada;
            
            points.dist()
             
        }

            function factorial2(x) {
                var i, product = 1;

                for(i=2; i <= x; i++);

                    product *= i;
                    
                return product
            }
    factorial2(5) 