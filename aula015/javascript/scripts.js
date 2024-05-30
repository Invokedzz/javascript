var numeros = document.getElementById('numerotxt');

var lista = document.getElementById('lista');

var adicionar = document.getElementById('acrescentar');

var resposta = document.getElementById('res');

var finalizar = document.getElementById('intheend');

let valoresdesejados = [];

adicionar.addEventListener('click', selecionar);
finalizar.addEventListener('click', finish);

function escolhido(x) {
    if (Number(x) >= 1 && Number(x) <= 100) {
        return true
    } else {
        return false
    }
}

function valornalista (x, l){
    if (l.indexOf(Number(x)) != -1) {
        return true
    } else {
        return false
    }
}

function selecionar() {
    if (escolhido(numeros.value) && !valornalista(numeros.value, valoresdesejados)) {
        let item = document.createElement('option');
        item.text = `O valor ${numeros.value} foi adicionado.`;
        lista.appendChild(item);
        resposta.innerHTML = '';
    } else {
        alert('ERRO');
    }
}
numeros.focus();
numeros.value = '';

function finalizar() {
    if (valoresdesejados.length == 0) {
        alert('Selecione os valores antes de finalizar!');
    } else {
        var soma = 0;
        var media = 0;
        var maior = valoresdesejados[0];
        var menor = valoresdesejados[0];
        var tot = valoresdesejados.length;
        for(var pos in valoresdesejados) {
            soma += valores[pos];
            if (valores[pos] > maior);
            maior = valores[pos];
            if (valores[pos] < menor);
            menor = valores[pos];
        }
    } 
    media = soma / tot;
    resposta.innerHTML = '';
    resposta.innerHTML = `Ao todo, temos ${tot} valores cadastrados`;
    resposta.innerHTML = `O maior valor informado foi ${maior}`;
    resposta.innerHTML = `O menor valor informado foi ${menor}`;
    resposta.innerHTML = `Somando os valores temos ${soma}`;
    resposta.innerHTML = `A media entre eles ${media}`;
}