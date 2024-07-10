/* function createCounter (init) {
    let currentValue = init;
    return {
        increment: function () {
            currentValue++;
            return currentValue;
        },
        decrement: function () {
            currentValue--;
            return currentValue;
        },
        reset: function () {
            currentValue = init;
            return currentValue;
        }
    }
}                            // Counter functions;

let counter = createCounter(0);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.reset());      */
function filterArray (arr, fn) {
    let ReturnedArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            ReturnedArray.push(arr[i]);
        }
    }
    return ReturnedArray;
}
let arr = [10, 20, 30, 40];
function filterIndex(element) {
    return element > 10;
}

let FilteredArray = filterArray(arr, filterIndex);
console.log(FilteredArray)

var reduce = function(nums, fn, init) {
    let res = init;
    for (let i = 0; i < nums.length; i++) {
        res = fn(res, nums[i])
    }
    return res;
}

let fibonnaci = function* () {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];    // Variável a vai receber b. Variável b vai receber a + b.
    }
}

const fibonnaciloop = fibonnaci();
for (let x = 0; x < 30; x++) {
    //console.log(fibonnaciloop.next().value);
}