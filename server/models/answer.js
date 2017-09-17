var mongoose = require('mongoose')
// console.log(mongoose)
var Schema = mongoose.Schema
var AnswerSchema = new Schema({
  answer : {type:String, required: true, minlength:8},
  support : {type:String},
  answer_like : {type:Number, default :0},
  _answer : [{type: mongoose.Schema.Types.ObjectId, ref: "answer"}],
  _user : [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
  created_by : {type:String, ref:"UserName"}
},{timestamp : true})

mongoose.model('Answer', AnswerSchema)
