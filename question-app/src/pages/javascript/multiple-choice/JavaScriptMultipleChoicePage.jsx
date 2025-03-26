import { useState, useEffect } from "react";
import axios from "axios";

const MultipleChoicePage = () => {
    const [questionHistory, setQuestionHistory] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
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

            const newQuestion = {
                question: response.data.question,
                options: response.data.options,
                answer: response.data.answer,
            };

            const updatedHistory = [
                ...questionHistory.slice(0, currentIndex + 1),
                newQuestion,
            ];

            setQuestionHistory(updatedHistory);
            setCurrentIndex(updatedHistory.length - 1);

            setQuestion(newQuestion.question);
            setOptions(newQuestion.options);
            setCorrectAnswer(newQuestion.answer);
            setSelectedOption("");
            setMessage("");
        } catch (error) {
            console.error(
                "Error fetching multiple-choice question frontend:",
                error
            );
        }
    };

    const goToPreviousQuestion = () => {
        if (currentIndex > 0) {
            const prev = questionHistory[currentIndex - 1];
            setCurrentIndex(currentIndex - 1);
            setQuestion(prev.question);
            setOptions(prev.options);
            setCorrectAnswer(prev.answer);
            setSelectedOption("");
            setMessage("");
        }
    };

    const goToNextQuestionInHistory = () => {
        if (currentIndex < questionHistory.length - 1) {
            const next = questionHistory[currentIndex + 1];
            setCurrentIndex(currentIndex + 1);
            setQuestion(next.question);
            setOptions(next.options);
            setCorrectAnswer(next.answer);
            setSelectedOption("");
            setMessage("");
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
                                checked={selectedOption === key}
                                onChange={(e) =>
                                    setSelectedOption(e.target.value)
                                }
                            />
                            {`${key}: ${value}`}
                        </label>
                    </div>
                ))}
            </div>
            <button onClick={goToPreviousQuestion} disabled={currentIndex <= 0}>
                Previous
            </button>
            <button onClick={handleSubmitAnswer}>Submit</button>
            <button
                onClick={() => {
                    if (currentIndex < questionHistory.length - 1) {
                        goToNextQuestionInHistory();
                    } else {
                        fetchMultipleChoiceQuestion(); // fetch new if at end of history
                    }
                }}
            >
                Next
            </button>

            {message && <p>{message}</p>}
        </div>
    );
};

export default MultipleChoicePage;
