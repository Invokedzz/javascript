function registeruser (nuser, user, password) {
    let passwordIsValid = false;
    return {
        nuser,
        user, 
        password,
        firstuser () {
            try {
                if (this.nuser) {
                    return `Welcome ${this.nuser}`;
                } else {
                    throw new Error('Invalid user');
                }
            } catch (e) {
                return this.otherusers();
            }
        },
        otherusers() {
            try {
                if (this.user) {
                    return `Welcome back ${this.user}`;
                } else {
                    throw new Error('Invalid user');
                } 
            } catch (e) {
                if (this.nuser) {
                    return this.nuser;
                } else {
                    return 'Unknown user';
                }
            }
        },
         enterPassword() {
            if (!isNaN(this.password)) {
                passwordIsValid = true;
            }
            return passwordIsValid;
         },
         displayInfo() {
            if (this.enterPassword() && this.nuser && this.user) {
                return `User info: ${this.user}, ${this.nuser}`;
            } else {
                return 'Try Again!'
            }
         },
    };
}
const pa = registeruser('Chico', 'Ronnaldo', '123');
console.log(pa.firstuser());
console.log(pa.displayInfo()); 

function expressdatabase (user, password) {
    let passwordValid = false;
    return {
        user,
        password,
        insertcomponentsx () {
            try {
                if (password.value === '' || password.length <= 6) return 'Verme miserável';
                return passwordValid = true;
            } catch (e) {
                console.error('Error inserting components:', e);
                return false;
            }
        },
    };
}
const pb = expressdatabase('Anão de Pernambuco', '');
console.log(pb.user, pb.password);
let db2 = expressdatabase('username', '123');
console.log(db2.insertcomponentsx())
