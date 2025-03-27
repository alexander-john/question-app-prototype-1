const mongoose = require('mongoose');

const PromptSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  functionName: { type: String, required: true },
  testCases: [
    {
      input: { type: Array, required: true },
      expectedOutput: { type: mongoose.Schema.Types.Mixed, required: true }
    }
  ]
});

module.exports = mongoose.model('Prompt', PromptSchema);
