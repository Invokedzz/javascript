
function registerUser (user, nuser, password) {
    let passwordisplay;
    let userdisplay;
    let veteranusersdisplay;
    return {
        nuser,
        user,
        password,
        firstuser() {
            try {
                return `Welcome ${this.nuser}`;
            } catch (e) {
                if (!nuser) {
                    return otherusers();
                }
            }
        },
        otherusers() {
            try {
                return `Welcome back ${this.user}`
            } catch(e) {
                if (!user) {
                    return nuser;
                }
            }
        },
        enterPassword() {
            if (isNaN.password) return false;
            else return true;
        },
        displayInfo() {
            enterPassword();
            firstuser();
            therusers();
            try {
                return password, nuser, user;
            } catch (e) {
                if (!passwordisplay || !userdisplay || !veteranusersdisplay) return 'Try Again!';
                else return true;
            }
        },
    }

}
const pa = registerUser('Ronaldo', 'Chico', '123');
console.log(pa.firstuser());
console.log(pa.displayInfo());