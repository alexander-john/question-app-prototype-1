import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import "./App.css";

const App = () => {
  const [question, setQuestion] = useState("");
  const [code, setCode] = useState("");

  // Function to fetch a question from the backend
  const fetchQuestion = () => {
    axios
      .get("http://localhost:5000/question")
      .then((response) => setQuestion(response.data.text))
      .catch((error) => console.error("Error fetching question:", error));
  };

  useEffect(() => {
    fetchQuestion(); // Fetch the initial question when the component mounts
  }, []);

  const handleSubmit = () => {
    alert(`Submitted Code:\n${code}`);
    setCode(""); // Clear the textarea after submission
    fetchQuestion(); // Fetch a new question
  };

  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <h2>Question:</h2>
        <p>{question || "Loading..."}</p>
        
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your answer here..."
        ></textarea>

        <br />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </Router>
  );
};

export default App;
