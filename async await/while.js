class workingforaWhile {
    constructor (num) {
        this.num = num;
    }

    the_Job () {
        while (this.num > 0.01) {
            console.log(this.num);
            this.num /= 2;
        };
    }

}

const ddd = new workingforaWhile(200);
ddd.the_Job()