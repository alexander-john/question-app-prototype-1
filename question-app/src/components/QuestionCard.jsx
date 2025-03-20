const QuestionCard = ({ question }) => {
  if (!question || !question.text) {
    return <p>Loading...</p>; // Handle cases where the question is not yet loaded
  }

  return (
    <div className="question-card">
      <p>{question.text}</p> {/* Render the `text` property of the question object */}
    </div>
  );
};

export default QuestionCard;