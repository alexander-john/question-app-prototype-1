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

    // Insert seed data
    await Question.create({ text: "Write a function that reverses a string." });

    console.log("Database Seeded");
  } catch (err) {
    console.error("Error seeding the database:", err);
  } finally {
    mongoose.connection.close();
  }
};

seedData();
