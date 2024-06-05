const hora = 10;

function horario() {
    if (hora > 0 && hora < 12) {
        console.log('Bom dia!');
    } else if (hora >= 12 && hora < 18) {
        console.log('Boa tarde!');
    } else {
        console.log('Boa noite!');
    }
}

function rotina(n) {
    if (n >= 5 && n < 12) {
        console.log('Cedinho')
    } else if (n >= 12 && n < 18) {
        console.log('Tardinha');
    } else if (n >= 18 && n <= 23) {
        console.log('Noitinha');
    } else {
        console.log('Madrugadinha');
    }
} 
