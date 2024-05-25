// Aprendizado de functions 

function fatorial(x) {
    var product = 1;
    while(x > 1) {
        product *= x;
        x--;
    }
    return product;
}

console.log(fatorial(5))



