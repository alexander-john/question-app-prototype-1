import { useState } from "react";
import "./App.css";

const App = () => {
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    alert(`Submitted Code:\n${code}`);
  };

  return (
    <div className="container">
      <h2>Question:</h2>
      <p>Write a function that reverses a string.</p>
      
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
