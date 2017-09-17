var mongoose = require('mongoose')
var Question = mongoose.model('Question')
var User = mongoose.model('User')
var Answer = mongoose.model('Answer')

module.exports = (function(){
  return {
    create_answer: function(req, res){
      var user_id = req.session.user._id
      var user_name = req.session.user.name
      var newAnswer = new Answer({
        answer : req.body.answer,
        support : req.body.support
      })
      newAnswer._user = user_id
      newAnswer._answer = req.params.id
      newAnswer.created_by = user_name
      newAnswer.save(function(err,data){
        if(err){
          console.log(err)
        }else{
          User.update({_id:user_id}, {$push: {'items':newAnswer}}, function(err){

          })
          Question.update({_id:req.params.id},{$inc: {answer_count:1}},function(err){

          })
          console.log(newAnswer,": New Answer added")
          res.json(data)
        }
      })
    },

    getanswers : function(req, res){
      Answer.find({}, function(err, answer){
        res.json(answer)
      })
    },

    like: function(req,res){
      var id = req.params.id
      Answer.findById(id, function(err, answer){
        answer.answer_like += 1
        answer.save()
        res.json(answer)
      })
    },
  }
})()
