class ValidaCPF {
    constructor (cpfEnviado) {
        Object.defineProperty (this, 'cpflimpo', {
            value: cpfEnviado.replace(/\D+/g, ''),
            writable: false,
            enumerable: true,
            configurable: false,    
        });
    }

    sequence () {
        return this.cpflimpo.charAt(0).repeat(this.cpflimpo.length) === this.cpflimpo;
    }

    cpfgenerator () {
        const cpfparcial = this.cpflimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfparcial);
        const digito2 = this.geraDigito(cpfparcial + digito1);
        this.generatedcpf = cpfparcial + digito1 + digito2;
    }

    geraDigito (cpfsemdigitos) {
        let total = 0;
        let reverse = cpfsemdigitos.length + 1;
        for (let num of cpfsemdigitos) {
            total += reverse * Number(num);
            reverse--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? digito : '0';
    }

    validate () {
        
        if (!this.cpflimpo) return false;
        if (typeof this.cpflimpo !== 'string') return false;
        if (this.cpflimpo.length !== 11) return false;
        if (this.sequence()) return false;
        
        this.cpfgenerator();
        console.log(this.generatedcpf);
        return this.generatedcpf === this.cpflimpo;
    }
}

const validacpf = new ValidaCPF('070.987.720-03');
console.log(validacpf.validate());

if (validacpf.validate()) {
    console.log('CPF valid');
} else {
    console.log('Invalid')
}