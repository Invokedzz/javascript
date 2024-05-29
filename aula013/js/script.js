
var contar = document.getElementById('contar');

contar.addEventListener('click', aoclicar);
function aoclicar() {
    var iniciar = document.getElementById('iniciar');
    var terminar = document.getElementById('terminar');
    var pular = document.getElementById('pular');
    var resposta = document.getElementById('res');

    if (iniciar.value.length == '') {
        alert('Tente novamente. Iniciar não foi preenchido.');
    } else if (terminar.value.length == '') {
        alert('Tente novamente. Terminar não foi preenchido.');
    } else if (pular.value.length == '' ||  Number(pular.value == 0)) {
        alert('Pular não foi preenchido ou iguais a zero');       
    }

    else {

        var i = Number(iniciar.value);
        var t = Number(terminar.value);
        var p = Number(pular.value);

        for (var z = i; z <= t; z += p) {
            resposta.innerHTML += `${z}`;
        } if (i > t) {
            for(var z = i; z >= t; z -= p) {
                resposta.innerHTML += `${z}`;
            }
        }
 
    }
 
}


