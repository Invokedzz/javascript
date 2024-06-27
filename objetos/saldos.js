function Account (bank, money, account) {
    this.bank = bank;
    this.money = money;
    this.account = account;
}
Account.prototype.obtain = function (value) {
    if (this.money < value) {
        this.check();
        return;
    }
    this.check() -= value;
    this.check();
}
Account.prototype.drop = function (value) {
    this.money += value;
    return this.check();
}
Account.prototype.check = function () {
    console.log(`AG/C: ${this.bank}/${this.account} ` + ` Available cash: US$ ${this.money}`);
}

const an = new Account ('Bank of America', 100, 'Invoked');
an.obtain(200)
console.log(an)

cc.prototype = Object.create(Account.prototype);
cc.prototype.constructor = cc;

cc.prototype.get = function (value) {
    if (value > (this.money + this.limit)) {
        console.log(`Invalid: ${this.money}`);
        return;
    }

    this.money -= money;
    this.check();
}