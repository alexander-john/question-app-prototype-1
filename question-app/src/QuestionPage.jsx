import { useState, useEffect } from "react";
import axios from "axios";

const QuestionPage = () => {
  const [question, setQuestion] = useState("");
  const [code, setCode] = useState("");

  const fetchQuestion = () => {
    axios
      .get("http://localhost:5000/question")
      .then((response) => setQuestion(response.data.text))
      .catch((error) => console.error("Error fetching question:", error));
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const handleSubmit = () => {
    alert(`Submitted Code:\n${code}`);
    setCode("");
    fetchQuestion();
  };

  return (
    <div>
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

export default QuestionPage;