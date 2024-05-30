// Essas coisas == jogador;

var vidaplayer = 2000;
function morrer(a) {
    if (Number(vidaplayer.value) == 0) {
        console.log('Morreu!');
    }
}

function defense (x) {
    if (Number(x) >= 10 && Number(x) <= 200) {
        return true
    } else {
        return false
    }
} console.log(defense(11)) // Se, o valor de "defesa" do jogador for entre 10 e 100, ele vai reduzir o dano em partes.

function attack (y) {
    if (Number(y) >= 50 || Number(y) < 70) {
        return true
    } else {
        return false
    }
} console.log(attack(5)) // O valor do ataque deve ficar entre 50 e 69.

function parry(x, y) {
    if (Number(attack(y)) != 0 && Number(defense(x)) > -10 || Number(defense(x)) != 0) {
        return true
    } else {
        return false
    }
} console.log(parry(5, 10)) // Caso o ataque do jogador seja diferente de zero, e a defesa > - 10 ou diferente de zero, o jogador inimigo pode aparar o ataque.

// Ataques do pombo;



function lifepoints() {
    var vidaboss = 20000;
    if (Number(vidaboss.value) == 0) {
        console.log('You won!')
    }
}

function massacre (w) {
    if (Number(w) == 250) {
        return true;
    } else if (Number(w) != 250 && Number(w) < 200) {

             var danomultiplicado = (w * w)/100;      
            return danomultiplicado;

    } else {
        return false
    }
} console.log(massacre(199));


function doublebiceps(o) {
    o = 100;
    var superxandao = o;
    if (Number(vidaplayer.value) <= 500) {
        var ataquefinal = (Number(superxandao.value) * 100);
        return true
    } else {
        return false;
    }
} 

/*function desperado(i) {
    var vidaboss = 20000;
    var fade = Number(vidaboss.value) - 19000;
    if (Number(vidaboss.value) == 1000) {
        console.log('N serei derrotado...');
      var desesperado =  (i * i) + Number(fade.value);
      return desesperado;
    } else {
       return false
    }
} console.log(desperado(5))*/