class usingFetch {
  async searchingContent () {
        try {
            const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
            const data = await response.json();
            return data;
        } catch (e) {
            console.error(e);
            return null;
        }
    };

    waitforIt () {
        this.searchingContent()
        .then((waiting) => console.log(waiting[0].name))
        .catch((err) => console.error(err));
    }

}

const moon = new usingFetch();
moon.waitforIt();


class Rick_Morty2 {
    async searchingCharacters () {
        try {
            const res = fetch("https://rickandmortyapi.com/api/character/?page=2");
            const data = (await res).json();
            return data;
        } catch (e) {
            console.error(e);
        }
    }

    displayCharacters () {
        this.searchingCharacters()
        .then((waiting) => console.log(waiting))
        .catch((err) => console.error(err));
    }
}

/* const sun = new Rick_Morty();
sun.displayCharacters(); */

class Rick_Morty {
    async searchingData () {
        const catchFetch = await fetch("https://rickandmortyapi.com/api/character");
        const catchData = (await catchFetch).json();
        return catchData;
    }

    receiveData_process () {
        this.searchingData()
        .then((svRes) => console.log(svRes))
        .catch((e) => console.log(e));
    }

}

/* const van = new Rick_Morty();
van.receiveData_process(); */

class wait_Abit {
    
    return3Seconds () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, (1000 * 2) + 1000);
        });
    }

    return5Seconds () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 5000);
        });
    }

    async resolution () {
        await this.return3Seconds();
        await this.return5Seconds();
        console.log("I'm finally here!");
    }

}

class bestPkmn {
    constructor (Pokemon) {
        this.Pokemon = Pokemon;
    }
    choose_bestPkmn () {
        return new Promise((resolve, reject) => {
            if (this.Pokemon === 'Klinglang') {
                resolve({
                    success: true,
                    msg: 'This is the best Pokemon',
                });
            }

            if (this.Pokemon !== 'Klinglang') {
                reject({
                    success: false,
                    msg: 'No! You are wrong',
                });
            }

        });
    };

    async message_Pkmn () {
        try {
            const tellIt = await this.choose_bestPkmn();
            console.log(tellIt.msg);
        } catch(err) {
            console.error(err.msg);
            return;
        }
    };

}

const qer = new bestPkmn('Klinglang');
qer.message_Pkmn();