const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Prompt = require("../models/Prompt");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URI)
    .then(async () => {
        const prompt = new Prompt({
            title: "Add Two Numbers",
            description:
                "Write a function `add` that returns the sum of two numbers.",
            functionName: "add",
            testCases: [
                { input: [2, 3], expectedOutput: 5 },
                { input: [0, 0], expectedOutput: 0 },
                { input: [-1, 1], expectedOutput: 0 },
            ],
        });

        await prompt.save();
        console.log("Prompt saved!");
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });
