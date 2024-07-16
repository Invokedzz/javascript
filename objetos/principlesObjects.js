// As coisas tiradas daqui são encontradas no livro de David Flanagan

let empty = {};
let num = {x: 1 + 1, y: 2 + 3};
let book = {
    "maintitle": 'JavaScript',
    "subtitle": 'The Definitive Guide',
    "for": 'All audiences',
}

let creator = {
    firstname: "David",
    surname: "Flannagan", 
}

// Palavras reservadas em JS não precisam das aspas simples ou duplas. Veja a situação na variável creator e book.

const obj1 = {
    a: 'something',
    b: 42,
    c: false,
}
// console.log(Object.keys(obj1));

let obj = function (promise) {
    return Object.keys(promise).length === 0;
}

const arr = ['a', 'b', 'c'];
// console.log(Object.keys(arr));

const obj2 = {0: 'a', 1: 'b', 2: 'c'};
// console.log(Object.keys(obj2));

const obj3 = {10: 'a', 20: 'b', 30: 'c'};
// console.log(Object.keys(obj3));

const obj4 = {100: 'a', 2: 'b', 7: 'c'};
// console.log(Object.keys(obj4));

const obj5 = {200: 'a', 150: 'c', 300: 'd'};
// console.log(Object.keys(obj5));

// console.log(Object.keys("foo"));
// console.log(Object.keys(1000));

// O Object.keys pega um objeto e o converte em um array. A sua contagem de termos é feita do menor p/ o maior.
