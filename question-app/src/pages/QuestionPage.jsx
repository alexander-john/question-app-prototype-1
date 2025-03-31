import { useState, useEffect } from "react";
import axios from "../utils/axiosInstance";
import QuestionCard from "../components/QuestionCard";

const QuestionPage = () => {
  const [question, setQuestion] = useState(null); // Initialize as `null` to handle loading state
  const [code, setCode] = useState("");

  const fetchQuestion = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/questions/");
      setQuestion(response.data); // Ensure the response is set directly
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const handleSubmit = () => {
    alert(`Submitted Code:\n${code}`);
    setCode("");
    fetchQuestion(); // Ensure `fetchQuestion` is defined in the correct scope
  };

  return (
    <div>
      <h2>Question:</h2>
      <QuestionCard question={question} /> {/* Pass the `question` object */}
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