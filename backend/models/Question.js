const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;