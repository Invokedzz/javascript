/* class certainActions {
    constructor (band, music) {
        this.band = band;
        this.music = music;
    }

    validateBand () {
        return new Promise((resolve, reject) => {
            if (this.band === 'Linkin Park') {
                resolve({
                    success: true,
                    msg: 'Of course. Linkin Park is the best band for sure!',
                });
            }

            if (this.band !== 'Linkin Park') {
                reject({
                   success: false,
                   msg: 'I think that your opinion isnt that good.',
                });
            }

        });
    }

    validateSong () {
        return new Promise((resolve, reject) => {
            if (this.music === 'BlackBirds') {
                resolve({
                    success: true,
                    msg: 'BlackBirds is the best Linkin Park song.',
                });
            }

            if (this.music !== 'BlackBirds') {
                reject({
                    success: false,
                    msg: 'No. This song is not BlackBirds from Linkin Park',
                });
            }

        });
    }

    answerTime () {
        return new Promise ((resolve) => {
            setTimeout(() => {
               resolve();
            }, 5000)
        });
    }

    async receiveMsg () {
        try {
            await this.answerTime();
            const validatedBand = await this.validateBand();
            const validatedSong = await this.validateSong();
            console.log(validatedBand.msg, validatedSong.msg);
        } catch (err) {
            console.error(err);
            return null;
        }
    }


}

const brttPerdedor = new certainActions('Linkin Park', 'BlackBirds');
brttPerdedor.receiveMsg(); */

class ChooseBand_andSong {
    constructor (band, song) {
        this.song = song;
        this.band = band;
    }

    selectBand () {
        return new Promise((resolve, reject) => {
            if (typeof this.band === 'string') {
                resolve({
                    success: true,
                    message: `${this.band} is soooo good!`,
                });
            }

            if (typeof this.band !== 'string' || this.band == '') {
                reject({
                    success: false,
                    message: 'Select a valid band',
                });
            }

        });
    }

    selectMusic () {
        return new Promise((resolve, reject) => {
            if (typeof this.song === 'string') {
                resolve({
                    success: true,
                    message: `${this.song} is awesome!`,
                });
            }

            if (typeof this.song !== 'string' || this.song == '') {
                reject({
                    success: false,
                    message: 'Select a valid song',
                });
            }

        });
    }

    timeWatch () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 5000);
        });
    }

    async describeEvents () {
        try {
            await this.timeWatch();
            const validatedBand = await this.selectBand();
            const validatedSong = await this.selectMusic();
            console.log(validatedBand.message, validatedSong.message);
        } catch (e) {
            console.error(e);
            return null;
        };
    };

}

const loudWinner = new ChooseBand_andSong("It's my life", 'Bon Jovi');
loudWinner.describeEvents();