import { useState } from "react";

const App = () => {
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    alert(`Submitted Code:\n${code}`);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center" }}>
      <h2>Question:</h2>
      <p>Write a function that reverses a string.</p>
      
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your answer here..."
        style={{
          width: "100%",
          height: "150px",
          fontSize: "16px",
          fontFamily: "monospace",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      ></textarea>

      <br />

      <button
        onClick={handleSubmit}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default App;
