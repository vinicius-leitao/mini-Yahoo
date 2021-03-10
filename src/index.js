const express = require('express');
const bodyParser = require('body-parser');
const Question = require('./models/Question');
const Answer = require('./models/Answer');
const connection = require('./database/db');
const app = express();


//Database

//Conexão com o banco de dados.
connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com o banco de dados!');
    })
    .catch( err => {
        console.log(err);
    })


// Setando uma view engine (EJS) para o express usar.
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get("/", (req, res) => {
    // SELECT * FROM questions; {raw: true} omite as informações desnecessárias e traz a informação crua.
    Question.findAll({raw: true, order:[
        ["id", "DESC"] // ASC - Crescente && DESC - Decrescente.
    ]}).then(question => {
        console.log(question);
        res.render("index", {
            question: question
        }); 
    });
    
})

app.get("/ask", (req, res)=>{
    res.render("ask");
})

app.get("/question/:id", (req, res)=>{
    let id = req.params.id;    
    Question.findOne({
        where: {id: id}
    }).then( question => {

        if(question){
            Answer.findAll({
                where: {questionId: question.id},
                order: [['id', 'DESC']]
            }).then( answer => {
                res.render("question", {
                    question: question,
                    answer: answer
                });
            })
            
        }else{
            res.redirect("/");
        }    
    })
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

app.post("/save-answer", (req, res) => {
    let content= req.body.content;
    let questionId = req.body.question;
    Answer.create({ 
        content: content,
        questionId: questionId
    }).then( () => {
        res.redirect('/question/' + questionId );
    });
});


// Inicialização do servidor na porta 3000.
app.listen(3000, (req, res) => {
    console.log("Server is running!");
})