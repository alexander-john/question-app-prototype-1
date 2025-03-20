import { useState, useEffect } from "react";
import axios from "axios";

const MultipleChoicePage = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMultipleChoiceQuestion = async () => {
      try {
        const response = await axios.get("http://localhost:5000/questions/multiple-choice");
        setQuestion(response.data.question);
        setOptions(response.data.options);
      } catch (error) {
        console.error("Error fetching multiple-choice question:", error);
      }
    };
    fetchMultipleChoiceQuestion();
  }, []);

  const handleSubmitAnswer = async () => {
    if (!selectedOption) {
      setMessage("Please select an option.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/questions/submit-answer", {
        answer: selectedOption,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error submitting answer.");
    }
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
      <button onClick={handleSubmitAnswer}>Submit</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default MultipleChoicePage;