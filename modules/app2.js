const path = require('path');
const arquivePath = path.resolve(__dirname, 'txt.json');
const fileLer = require('./read');
const fileEscrever = require('./escrever');

const animais = [
    {nome: 'Cachorro', raça: 'Golden Retriever'},
    {nome: 'Gato', raça: 'Gato branco'},
    {nome: 'Peixe', raça: 'Peixe Palhaço'},
    {nome: 'Tigre', raça: 'Tigrinho'},
    {nome: 'Girafa', raça: 'Girafa de Parede'},
];

const json = JSON.stringify(animais, '', 2);
fileEscrever(arquivePath, json);