var verificar = document.getElementById('verify');
verificar.addEventListener('click', aplicar);

function aplicar() {

    var data = new Date();
    var ano = data.getFullYear; 
    var nascimento = document.getElementById('txtano');
    var resultado = document.getElementById('res');

    if (nascimento.value.length == 0 || Number(nascimento.value > 2024)) {
        window.alert('[ERRO] Verifique os dados e tente novamente.');
    }
    else {
        var fsex = document.getElementsByName('radsex');
        var idade = 2024 - Number(nascimento.value);
        var gender = ' '
        if (fsex[0].checked) {
            gender = 'Homem';
        } else if (fsex[1].checked) {
            gender = 'Mulher';
        }
        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectamos ${gender} com ${idade} anos.`
    }
} 