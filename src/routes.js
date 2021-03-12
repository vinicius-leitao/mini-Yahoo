const express = require('express');
const router = express.Router();


const answerController = require('./controllers/answerController');
const questionController = require('./controllers/questionController');



router.get('/', questionController.list);
router.get('/ask', questionController.render);
router.get('/question/:id', answerController.listAnswer)
router.post('/save-question', questionController.create);
router.post('/save-answer', answerController.createAnswer);

module.exports = router;