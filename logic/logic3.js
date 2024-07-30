class userPassword {
    constructor (User, Password, RePassword) {
        this.User = User;
        this.Password = Password;
        this.RePassword = RePassword;
    }

    userNickname () {
        if (typeof this.User !== 'string' || this.User < 4 && this.User > 16) return false;
        return `Olá, ${this.User}`;
    };

    validatePassword () {
        if (this.Password !== this.RePassword) return false;
        return this.Password, this.RePassword;
    };

    validatePasswordString () {
        if (typeof this.validatePassword() !== 'string') return 'Insira valores válidos';
        return 'Os valores foram inseridos corretamente';
    };

    showUserAndPassword () {
        return this.userNickname(), this.validatePasswordString(); 
    };

}

// Tentando criar classes mais organizadas e verbosas :/
