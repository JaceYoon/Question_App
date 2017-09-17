var session = require('./../controllers/user_controller.js')
var questionsession = require('./../controllers/question_controller.js')
var answersession = require('./../controllers/answer_controller.js')
module.exports = function(app){
  app.post('/login', function(req, res){
    session.login(req, res)
  })

  app.get('/getuser', function(req, res){
    session.getUser(req, res)
  })

  app.get('/logout', function(req, res){
    session.logOut(req, res)
  })

  app.post('/create', function(req, res){
    questionsession.create(req, res)
  })

  app.get('/getquestions', function(req, res){
    questionsession.show(req, res)
  })

  app.get('/show/:id', function(req, res){
    questionsession.showone(req, res)
  })

  app.get('/getanswers', function(req, res){
    answersession.getanswers(req, res)
  })

  app.post('/create_answer/:id', function(req, res){
    answersession.create_answer(req, res)
  })

  app.post('/like/:id', function(req, res){
    answersession.like(req, res)
  })
  // app.post('/vote_one/:id', function(req, res){
  //   questionsession.vote_one(req, res);
  // })


}
