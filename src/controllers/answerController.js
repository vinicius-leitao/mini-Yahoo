const Answer = require('../models/Answer');
const Question = require('../models/Question');

module.exports = {
    async createAnswer(req, res){
        let {content, questionId} = req.body;
        await Answer.create({
            content,
            questionId
        }).then(() => res.redirect('/question/' + questionId));
    },

    async listAnswer(req, res){
        let id = req.params.id;
        await Question.findOne({
            where: {id: id}
        }).then(question => {
            if(question){
                Answer.findAll({
                    where: {questionId: question.id}
                }).then(answer => {
                    res.render('question', {
                        question,
                        answer
                    })
                })
            }
        })

    }
}
