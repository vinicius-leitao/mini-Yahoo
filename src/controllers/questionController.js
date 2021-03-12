const Question = require('../models/Question');


module.exports = {
    async create(req, res){
        let { title, description} = req.body;
        console.log(title, description);
        await Question.create({
            title,
            description
        }).then(() => {
            res.redirect('/');
        })
    },
    
    async list(req, res){
        await Question.findAll({
            raw: true, order: [['id', 'DESC']]
        }).then( question => {
            res.render('index', {
                question
            });
        })

    },

    async render(req, res){
        res.render('ask');
    }
}