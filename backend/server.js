const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const questionRoutes = require("./routes/questionRoutes");
const promptRoutes = require("./routes/prompts");
const evaluateRoute = require("./routes/evaluate.js");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use("/auth", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/prompts", promptRoutes);
app.use("/api/evaluate", evaluateRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
