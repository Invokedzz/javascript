function numeros() {
    var bomba = '0123456789ABCDEF';
    var x = '#';
    for (j = 0; j < 8; j++) {
        x += bomba[Math.floor(Math.random() * 16)];
    }
    return x;
    
}

console.log(numeros());


function letters() {
    var valores = '0123456789';
    var y = ' ';
    for (i = 0; i < 5; i++) {
        y += valores[Math.floor(Math.random() * 10)];
    }
    return y;
}

console.log(letters());

function circular() {
    var numero = document.getElementById('texto');
    var tabuada = document.getElementById('caps');
    var resposta = document.getElementById('res');
    if (numero.value.length == 0 || numero.value.length == '') {
        alert('[ERRO]. Tente novamente');
    } else {
        var objeto = Number(numero.value);
        var z = 1;
        tabuada.innerHTML = '';
        /*for (var w = z; w <= 10; w++) {
            var criar = document.createElement('option');
            criar.text = ${w} x ${objeto} = ${w * objeto};
            criar.value = 'tabuada${w}';
            tabuada.appendChild${criar};*/
        }
    }
