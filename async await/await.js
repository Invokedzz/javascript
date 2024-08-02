class tryingtoUnderstand {
    constructor (band) {
        this.band = band;
    }

    createPromise () {
        return new Promise((resolve, reject) => {
            if (this.band === 'Linkin Park') {
                resolve({
                    success: true,
                    msg: 'Yes! This is the best band of all time!',
                });
            }

            if (this.band !== 'Linkin Park') {
                reject({
                    success: false,
                    msg: 'Oh my God. Your music taste sucks ass!',
                });
            }

        });
    }

    async executionTime () {
        try {
            const res = await this.createPromise();
            console.log(res.msg);
        } catch (err) {
            console.log(err.msg);
        }
    };

}

class notHard_afterall {
    constructor (song) {
        this.song = song;
    }

    bestSong_ofAlltime () {
        return new Promise((response, reject) => {
            if (this.song === 'Breaking the Habit') {
                response({
                    success: true,
                    message: 'Yeah, this is the best song of all time',
                });
            };

            if (this.song !== 'Breaking the Habit') {
                reject({
                    success: false,
                    message: 'Nah. This song sucks ASS',
                });
            };
        });
    }

   async wait_forTheSong () {
        try {
            const answer = await this.bestSong_ofAlltime();
            console.log(answer.message)
        } catch (e) {
            console.log(e.message);
        }
    };
};

class learning_Promises {
    constructor (sum) {
        this.sum = sum;
    }

    addition () {
        return new Promise ((resolve, reject) => {
            this.sum = 1 + 1;
            if (this.sum === 2) {
                resolve('Yes, thats right!');
            }

            if (this.sum !== 2) {
                reject('No man. Thats wrong!');
            }

        });
    }

    async answer_addition () {
        try {
            const helpers = await this.addition();
            console.log(helpers);
        } catch (error) {
            console.error(error);
        };
    };

}

class favorite_Book {
    constructor (book) {
        this.book = book;
    }

    choosingThe_bestBook () {
        return new Promise ((resolve, reject) => {
            if (this.book === 'Hamlet') {
                resolve({
                    truth: true,
                    msg: 'Yeah, this is the best book!',
                });
            }
            if (this.book !== 'Hamlet') {
                reject({
                    truth: false,
                    msg: 'No. This book sucks.',
                });
            };
        });
    }


    async answerAbout_bestBook () {
        try {
            const saytoThem = await this.choosingThe_bestBook();
            console.log(saytoThem.msg);
        } catch (e) {
            console.log(e.msg);
        };
    };
}

const y = new favorite_Book('Hamlet');
y.answerAbout_bestBook();
