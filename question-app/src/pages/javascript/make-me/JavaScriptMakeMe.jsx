// Import necessary dependencies from React
import React, { useEffect, useState } from 'react';
// Import a custom CodeEditor component
import CodeEditor from '../../../components/CodeEditor';

function JavaScriptMakeMe() {
  // State to store the coding prompt fetched from the backend
  const [prompt, setPrompt] = useState(null);
  // State to store the user's code input
  const [userCode, setUserCode] = useState('');
  // State to store feedback after code evaluation
  const [feedback, setFeedback] = useState(null);

  // useEffect runs once when the component mounts
  useEffect(() => {
    // Fetch the list of prompts from the backend
    fetch('http://localhost:5000/api/prompts')
      .then(res => res.json()) // Parse the response as JSON
      .then(data => {
        // Get the first prompt from the array and set it to state
        const firstPrompt = data[0];
        setPrompt(firstPrompt);
      })
      .catch(err => console.error('Error fetching prompt:', err)); // Handle fetch errors
  }, []); // Empty dependency array ensures this runs only once on mount

  // Function to handle code submission
  const handleSubmit = async () => {
    // Send user-written code and prompt ID to the backend for evaluation
    const res = await fetch('http://localhost:5000/api/evaluate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, // Set content type as JSON
      body: JSON.stringify({
        code: userCode,       // Code entered by the user
        promptId: prompt._id, // ID of the current prompt
      })
    });

    // Parse the response from the server and update feedback state
    const result = await res.json();
    setFeedback(result);
  };

  // Render the component UI
  return (
    <div>
      <h1>JavaScript Make Me A Function</h1>

      {prompt ? (
        // If prompt data is available, render the task
        <div>
          <h2>{prompt.title}</h2>
          <p>{prompt.description}</p>

          {/* Code editor where users write their solution */}
          <CodeEditor value={userCode} onChange={setUserCode} />

          {/* Submit button to send code for evaluation */}
          <button onClick={handleSubmit}>Submit Code</button>

          {/* Display feedback after code evaluation */}
          {feedback && (
            <pre>{JSON.stringify(feedback, null, 2)}</pre>
          )}
        </div>
      ) : (
        // Show loading text while prompt data is being fetched
        <p>Loading prompt...</p>
      )}
    </div>
  );
}

// Export the component for use in other parts of the app
export default JavaScriptMakeMe;
