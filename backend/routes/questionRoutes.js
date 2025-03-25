const express = require("express");
const Question = require("../models/Question");
const JavaScriptQuestion = require("../models/JavaScriptQuestion");

const router = express.Router();

// Route to get a random question
router.get("/", async (req, res) => {
  try {
    const count = await Question.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const question = await Question.findOne().skip(randomIndex);
    res.json(question);
  } catch (error) {
    console.error("Error fetching question:", error);
    res.status(500).json({ error: "Failed to fetch question" });
  }
});

// Route to get a multiple-choice question
router.get("/multiple-choice", async (req, res) => {
  try {
      const count = await Question.countDocuments({ type: 'multiple-choice' });
      if (count === 0) {
          return res.status(404).json({ error: "No multiple-choice questions found" });
      }
      const randomIndex = Math.floor(Math.random() * count);
      const question = await Question.findOne({ type: 'multiple-choice' }).skip(randomIndex);
      res.json(question);
  } catch (error) {
      console.error("Error fetching multiple-choice question:", error);
      res.status(500).json({ error: "Failed to fetch question" });
  }
});

router.get("/javascript/multiple-choice", async (req, res) => {
  try {
      const count = await JavaScriptQuestion.countDocuments();
      if (count === 0) {
          return res.status(404).json({ error: "No multiple-choice questions found" });
      }
      const randomIndex = Math.floor(Math.random() * count);
      const question = await JavaScriptQuestion.findOne().skip(randomIndex);
      res.json(question);
  } catch (error) {
      console.error("Error fetching multiple-choice question backend:", error);
      res.status(500).json({ error: "Failed to fetch question" });
  }
});

// Route to submit an answer
router.post("/submit-answer", async (req, res) => {
  const { answer } = req.body;
  try {
    const correctAnswer = "Paris";
    if (answer === correctAnswer) {
      res.json({ message: "Correct!" });
    } else {
      res.json({ message: "Incorrect. Try again!" });
    }
  } catch (error) {
    console.error("Error submitting answer:", error);
    res.status(500).json({ error: "Failed to submit answer" });
  }
});

module.exports = router;
