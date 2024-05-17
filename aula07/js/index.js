var a = document.getElementById('btn');
a.addEventListener('click', cliquei);

function cliquei() {
    var b = document.getElementById('txtvel');
    var c = document.getElementById('res');
    var vel = Number(b.value);
    if (vel > 60) {
        c.innerText = `Tu foi veloz demais, folgado`;
        alert(`Sua velocidade atual eh de ${vel}`);
    }
    else {
        c.innerHTML = `Ce ta dirigindo direitin`;
    }
}