const sequelize = require('sequelize');
require('dotenv').config();

const connection = new sequelize('miniYahoo', process.env.DATABASE_USER_NAME, process.env.DATABASE_USER_PASSWORD , {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;