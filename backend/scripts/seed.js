const mongoose = require("mongoose");
require("dotenv").config();
const Question = require("../models/Question"); // Import the model

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = async () => {
  try {
    // Clear the collection to avoid duplicates
    await Question.deleteMany();

    // Insert multiple questions
    const questions = [
      { text: "Write a function that reverses a string." },
      { text: "Explain the concept of closures in JavaScript." },
      { text: "What is the difference between var, let, and const?" },
      { text: "Write a function to check if a number is prime." },
      { text: "What is the purpose of React's useEffect hook?" },
      { text: "Explain the difference between == and === in JavaScript." },
      { text: "Write a function to find the factorial of a number." },
      { text: "What is the Virtual DOM in React?" },
      { text: "Explain the concept of promises in JavaScript." },
      { text: "Write a function to merge two sorted arrays." },
    ];

    await Question.insertMany(questions);

    console.log("Database Seeded with 10 Questions");
  } catch (err) {
    console.error("Error seeding the database:", err);
  } finally {
    mongoose.connection.close();
  }
};

seedData();
