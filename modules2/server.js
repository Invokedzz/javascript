const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const middlewares = require('./middlewares/middlewares');

app.use(middlewares);
app.use(routes);
app.listen(3000, () => {
    console.log('Acesse http://localhost:3000');
    console.log('Estamos acessando o portão 3000');
})