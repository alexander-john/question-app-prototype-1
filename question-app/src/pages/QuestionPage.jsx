import { useState, useEffect } from "react";
import axios from "../utils/axiosInstance";
import QuestionCard from "../components/QuestionCard";

const QuestionPage = () => {
  const [question, setQuestion] = useState("");
  const [code, setCode] = useState("");

  const fetchQuestion = () => {
    axios
      .get("/question")
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
      <QuestionCard question={question} />
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