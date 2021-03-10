const sequelize = require('sequelize');
const connection = new sequelize('miniYahoo', 'root', 'vinicius@2000', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;