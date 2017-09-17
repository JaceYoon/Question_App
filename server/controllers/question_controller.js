var mongoose = require('mongoose')
var Question = mongoose.model('Question')
var User = mongoose.model('User')

module.exports = (function(){
  return {
    create: function(req, res){
      var user_id = req.session.user._id
      var newQuestion = new Question({
        title : req.body.title,
        description : req.body.description
      })
      newQuestion._user = user_id
      newQuestion.save(function(err,data){
        if(err){
          console.log(err)
        }else{
          User.update({_id:user_id}, {$push: {'items':newQuestion}}, function(err){

          })
          console.log(newQuestion,": New Question added")
          res.json(data)
        }
      })
    },

    show: function(req,res){
      Question.find({}, function(err, question){
        res.json(question)
      })
    },

    showone: function(req,res){
      var id = req.params.id;
      Question.findById(id, function(err, question) {
          if(err){
              console.log(err);
          } else {
              console.log(question);
              res.json(question);
          }
      })
    },

    // vote_one: function(req, res){
    //   var id = req.params.id;
    //   Question.findById(id, function(err, question){
    //     question.optionOne_vote += 1
    //     question.save()
    //     res.json(question)
    //   })
    // },

  }
})()
