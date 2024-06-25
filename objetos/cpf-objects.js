function ValidaCPF (cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        configurable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

// Aqui criamos um this relacionado ao "cpfLimpo", retornando um replace que vai nos retornar somente números. Por exemplo: '707-343-197-12' será retornado como '70734319712'. E através do parâmetro "cpfEnviado" fazemos esse retorno algo possível.

ValidaCPF.prototype.valida = function () {
    
    // A partir daqui, vamos utilizar com frequência o "cpfLimpo" que estabelecemos na função anterior.

    if (typeof this.cpfLimpo === 'undefined') return false; 
    
    // Caso o valor do cpfLimpo for undefined, nos será retornado um false.

    if (this.cpfLimpo.length !== 11) return false; 
    
    // O CPF deve ter um valor com 11 c. Diferente disso, retorna false.

    if (this.isSequencia()) return false; 
    
    // Se o valor do CPF seguir uma sequência como "222-222-222-22", é retornado false.

    const cpfParcial = this.cpfLimpo.slice(0, -2);

    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    const novoCpf = cpfParcial + digito1 + digito2; 
    
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    
    const cpfArray = Array.from(cpfParcial); 
    
    // Cria um array a partir do método 'Array.from', escolhendo a constante "cpfParcial"

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo --;
        return ac;
    }, 0);
   const digito = 11 - (total % 11);
   return digito > 9 ? '0' : String(digito); 
   
   // Caso o dígito for > 9, ele é retornado como zero, em formato de string. No final, nós temos que tão somente concatenar os valores; validando assim o CPF.
   
}; 

// De forma resumida essa é a chegagem para valores relacionados ao CPF. Abaixo vamos ter só mais uma função que retorna uma sequência.

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('705-484-450-52');
console.log(cpf.cpfLimpo)
console.log(cpf.valida());