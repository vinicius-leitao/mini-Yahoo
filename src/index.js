const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/db');
const app = express();
const routes = require('./routes');

//  Setando uma view engine (EJS) para o express usar.
app.set('view engine', 'ejs');
app.use(express.static('public'));

//  Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

//Conexão com o banco de dados.
connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com o banco de dados!');
    })
    .catch( err => {
        console.log(err);
    })

// Inicialização do servidor na porta 3000.
app.listen(3000, (req, res) => {
    console.log("Server is running!");
})