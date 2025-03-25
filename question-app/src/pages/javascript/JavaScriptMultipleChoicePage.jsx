import { useState, useEffect } from "react";
import axios from "axios";

const MultipleChoicePage = () => {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState({});
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [message, setMessage] = useState("");

    const fetchMultipleChoiceQuestion = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/questions/javascript/multiple-choice"
            );
            setQuestion(response.data.question);
            setOptions(response.data.options);
            setCorrectAnswer(response.data.answer);
        } catch (error) {
            console.error(
                "Error fetching multiple-choice question frontend:",
                error
            );
        }
    };

    useEffect(() => {
        fetchMultipleChoiceQuestion();
    }, []);

    const handleSubmitAnswer = () => {
        if (!selectedOption) {
            setMessage("Please select an option.");
            return;
        }
        if (selectedOption === correctAnswer) {
            setMessage("Correct answer!");
            fetchMultipleChoiceQuestion();
        } else {
            setMessage("Incorrect answer.");
        }
    };

    if (!question) {
        return (
            <div className="container">
                <p>Loading...</p>
            </div>
        );
    }

    const optionsArray = Object.entries(options);

    return (
        <div className="container">
            <h1>JavaScript Multiple Choice</h1>
            <p>{question}</p>
            <div>
                {optionsArray.map(([key, value]) => (
                    <div key={key}>
                        <label>
                            <input
                                type="radio"
                                name="option"
                                value={key}
                                onChange={(e) =>
                                    setSelectedOption(e.target.value)
                                }
                            />
                            {`${key}: ${value}`}
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
