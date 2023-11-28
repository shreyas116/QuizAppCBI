const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  QuizID: {

    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  descb: {
    type: String,
    require: true,
  },
  Quizpin: {
    type: Number,
   default:null,
  },
  NPSScore: {
    type: [Number], 
    default: [],   
    unique:false, 
  },
  questions: [
    {
      QuestionType: String,
      id: Number,
      question: String,
      answers: [
        {
          text: String,
          correct: Boolean,
        },
      ],
    },
  ],
  QuestionTimInterval: {
    type: Number,
    require: true,
  },
  QuestionLimit:{
    type: Number,
    require: true,
  },
  isPublished:{
    type: Boolean,
    require:false,
    default:false,
  }
});
const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
