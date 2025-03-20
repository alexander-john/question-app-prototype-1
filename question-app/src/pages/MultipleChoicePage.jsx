import { useState, useEffect } from "react";
import axios from "axios";

const MultipleChoicePage = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch a multiple-choice question from the backend
    axios
      .get("http://localhost:5000/multiple-choice-question")
      .then((response) => {
        setQuestion(response.data.question);
        setOptions(response.data.options);
      })
      .catch((error) => console.error("Error fetching question:", error));
  }, []);

  const handleSubmit = () => {
    if (!selectedOption) {
      setMessage("Please select an option.");
      return;
    }
    // Submit the selected answer
    axios
      .post("http://localhost:5000/submit-answer", { answer: selectedOption })
      .then((response) => setMessage(response.data.message))
      .catch((error) => setMessage("Error submitting answer."));
  };

  return (
    <div className="container">
      <h2>Multiple Choice Question</h2>
      <p>{question || "Loading..."}</p>
      <div>
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name="option"
                value={option}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default MultipleChoicePage;