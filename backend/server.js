const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Question = require("./models/Question"); // Import the model

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Route to get a random question
app.get("/question", async (req, res) => {
  try {
    const count = await Question.countDocuments(); // Get the total number of questions
    const randomIndex = Math.floor(Math.random() * count); // Generate a random index
    const question = await Question.findOne().skip(randomIndex); // Fetch a random question
    res.json(question);
  } catch (error) {
    console.error("Error fetching question:", error);
    res.status(500).json({ error: "Failed to fetch question" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
