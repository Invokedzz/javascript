const { setTimeout } = require("timers/promises");

class nameCheck {
    constructor(name) {
        this.name = name;
    }

    return_Matthew () {
        return new Promise((resolve, reject) => {
            if (this.name === 'Matthew') {
                resolve({
                    success: true,
                    message: 'Yeah! This is Matthew!',
                });
            };

            if (this.name !== 'Matthew') {
                reject({
                    success: false,
                    message: 'Where is ma boi Matthew?'
                });
            };

        });
    }

    async show_Message () {
        try {
            const ans = await this.return_Matthew();
            console.log(ans.message);
        } catch (e) {
            console.error(e.message);
        };
    };

}

// Sintaxe

class Time_Master {
    constructor () {

    }

    check_Time () {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("I'm waiting!");
                resolve();
            }, 4000);
        });
    }

    async determined_Time () {
        console.log('Begin!');
        await this.check_Time();
        console.log('Finished!');
    }

}

/*const timeAnalyze = new Time_Master();
timeAnalyze.determined_Time(); */

// Prático

class obtain_Username {
    constructor () {
    
    }

    get_User (id) {
        return fetch(`https://reqres.in/api/users/${id}`)
        .then((data) => data.json())
        .catch((err) => console.log(err));
    }

    async show_Username (id) {
        try {
            const user = await this.get_User(id);
            console.log(`The user name is: ${user.data.first_name}`);
        } catch (err) {
            console.error(err);
        }
    }
}

/*const ux = new obtain_Username();
ux.show_Username(3); */

class time_Thief {
    constructor () {

    }

    resolveAfter2Seconds () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    }

    async async_Call () {
        await this.resolveAfter2Seconds();
        console.log('Hello!');
    }

}

/*const ut = new time_Thief();
ut.async_Call() */

class time_Manipulator {
    constructor () {

    }

    after3Seconds () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
    }

    after5Seconds () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 5000);
        });
    }

    async receiveMessage () {
        try {
            await this.after3Seconds();
            await this.after5Seconds();
            console.log('Whatsup');
        } catch (err) { 
            console.error(err);
        };
    };

}

const i = new time_Manipulator();
i.receiveMessage();