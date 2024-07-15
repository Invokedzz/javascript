const rx = require('./index');
rx.Marketplace('Vaso', 10);
console.log(rx.nome, rx.price);
const x = new rx.returnNumber();
console.log(x.loadNumber());        // Utilizando várias funções dentro do Module Exports;