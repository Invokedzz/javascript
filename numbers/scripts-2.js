cores = ['Red', 'Blue', 'Green', 'Yellow'];
for (let colors of cores) {
    console.log(colors);
}
function parabola (a, b, c) {
    let delta = b*b - 4*a*c;
    if (delta > 0) console.log('Positivo, com duas raízes distintas.');
    else if (delta === 0) console.log('Neutro. Possui raízes iguais.');
    else console.log('Negativo. Não possui raízes reais.');
    return delta;
}
function bhaskara (a = 1, b = 5, c = 6) {
    let curvaturaParabola = (parabola(a, b, c));
    let formulaBhaskaraMenos = ((b - curvaturaParabola) / 2*a);
    let formulaBhaskaraMais = ((b + curvaturaParabola) / 2*a);
    return formulaBhaskaraMais, formulaBhaskaraMenos;
} console.log(bhaskara()); 