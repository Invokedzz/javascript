function Conta (agencia, conta, saldo) {
    this.agencia = agencia;
    this.saldo = saldo;
    this.conta = conta;
}

Conta.prototype.sacar = function (value) {
    if (this.saldo < value) {
        this.verSaldo();
        return
    }
    this.saldo -= value;
    this.verSaldo()
};
Conta.prototype.depositar = function (value) {
    this.saldo += value;
    this.verSaldo();
};
Conta.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia}/${this.conta} ` + `Saldo: R$ ${this.saldo.toFixed(2)}`)
};

function contaCorrente (agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

contaCorrente.prototype = Object.create(Conta.prototype);
contaCorrente.prototype.constructor = contaCorrente;
contaCorrente.prototype.sacar = function (value) {
    if (value > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= value;
    this.verSaldo();
}

function CP (agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cp = new CP (12, 33, 0);
cp.depositar(10)

const cc = new contaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(90)
