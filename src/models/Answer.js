const sequelize = require('sequelize');
const connection = require('../database/db');

const Answer = connection.define('answers', {
    content:{
        type: sequelize.TEXT,
        allowNull: false
    },
    questionId:{
        type: sequelize.INTEGER,
        allowNull: false
    }
}, {});

Answer.sync({force: false});

module.exports = Answer;