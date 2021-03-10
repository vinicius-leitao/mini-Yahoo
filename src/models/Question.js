const sequelize = require('sequelize');
const connection = require('../database/db');

const Question = connection.define('question', {
    
    title: {
        //O tipo STRING é para textos curtos.
        type: sequelize.STRING,
        allowNull: false
    },
    description: {
        //O tipo TEXT é para textos mais longos.
        type: sequelize.TEXT,
        allowNull: false
    }
}, {})

Question.sync({force: false});

module.exports = Question;