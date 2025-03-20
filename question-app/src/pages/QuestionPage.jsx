import { useState, useEffect } from "react";
import axios from "../utils/axiosInstance";
import QuestionCard from "../components/QuestionCard";

const QuestionPage = () => {
  // State to store the current question
  const [question, setQuestion] = useState("");
  // State to store the user's code/answer
  const [code, setCode] = useState("");

  // Function to fetch a new question from the server
  const fetchQuestion = () => {
    axios
      .get("/question") // API call to get the question
      .then((response) => setQuestion(response.data.text)) // Update the question state
      .catch((error) => console.error("Error fetching question:", error)); // Log errors
  };

  // useEffect to fetch a question when the component mounts
  useEffect(() => {
    console.log("useEffect called");
    fetchQuestion(); // Fetch the initial question
  }, []);

  // Function to handle the submission of the user's code
  const handleSubmit = () => {
    alert(`Submitted Code:\n${code}`); // Display the submitted code
    setCode(""); // Clear the code input
    fetchQuestion(); // Fetch a new question
  };

  return (
    <div>
      <h2>Question:</h2>
      {/* Display the question using the QuestionCard component */}
      <QuestionCard question={question} />
      {/* Textarea for the user to write their answer */}
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)} // Update the code state on input change
        placeholder="Write your answer here..."
      ></textarea>
      <br />
      {/* Button to submit the user's code */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuestionPage;