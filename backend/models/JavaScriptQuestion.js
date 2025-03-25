const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    options: {
        type: Map,
        of: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("JavaScriptQuestion", questionSchema);