var mongoose = require('mongoose')
// console.log(mongoose)
var Schema = mongoose.Schema
var QuestionSchema = new Schema({
  title : {type:String, required: true, maxlength:30, minlength:8},
  description : {type:String, required: true, maxlength:30, minlength:8},
  answer_count : {type:Number, default:0},
  _answer : [{type: mongoose.Schema.Types.ObjectId, ref: "answer"}],
  _user : [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
},{timestamp : true})

mongoose.model('Question', QuestionSchema)
