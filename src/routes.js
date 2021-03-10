const express = require('express');
const app = express();

app.get("/", (req, res) => {
    // SELECT * FROM questions; {raw: true} omite as informações desnecessárias e traz a informação crua.
    Question.findAll({raw: true, order:[
        ["id", "DESC"] // ASC - Crescente && DESC - Decrescente.
    ]}).then(questions => {
        console.log(questions);
        res.render("index", {
            questions: questions
        }); 
    });
    
})

app.get("/ask", (req, res)=>{
    res.render("ask");
})

app.post("/save-question", (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    Question.create({ 
        title: title, description: description 
    }).then(() => {
        res.redirect('/');
    });
})