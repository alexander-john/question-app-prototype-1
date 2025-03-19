import { useState, useEffect } from "react";
import axios from "axios";
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
    <div className="container">
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
  );
};

export default App;
