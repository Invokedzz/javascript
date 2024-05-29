var pressionar = document.getElementById('tabuada');
var termos = document.getElementById('numero');
var valores = document.getElementById('valores');
pressionar.addEventListener('click', calcular);

function calcular() {
if (termos.value.length == '' || Number(termos.value == 0)) {
    alert('Tente novamente');
    } else {
        var n = Number(termos.value);
        valores.innerHTML = '';
        var j = 1;
        for (j = 1; j <= 10; j++) {
            var selecionar = document.createElement('option');
            selecionar.text = `${n} x ${j} = ${n * j}`;
            selecionar.value = `valores${n}`;
            valores.appendChild(selecionar);
        }
    }
}