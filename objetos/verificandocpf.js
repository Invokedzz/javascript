function AnaliseCPF (cpf) {
    let valorCPF = cpf;
    valorCPF = valorCPF.replace(/[^\d]/g, '');

    if (valorCPF.length !== 11) return false;

    let valorinicial = 0;
    for (let i = 0; i < 9; i++) {
        valorinicial += Number(valorCPF.charAt(i)) * (10 - i);
    }

    let primeironum = 11 - (valorinicial % 11);
    if (primeironum > 9) {
        return primeironum = 0;
    }

    valorinicial = 0;
    for (let i = 0; i < 10; i++) {
        valorinicial += Number(valorCPF.charAt(i)) * (11 - i);
    }

    let segundonum = 11 - (valorinicial % 11);
    if (segundonum > 9) {
        return segundonum = 0;
    }

    if (Number(valorCPF.charAt(9)) === primeironum && Number(valorCPF.charAt(10)) === segundonum) return true;
    return false;
}