import React, { useEffect, useState } from 'react';
import CodeEditor from '../../../components/CodeEditor';

function JavaScriptMakeMe() {
  const [prompt, setPrompt] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/prompts')
      .then(res => res.json())
      .then(data => {
        const firstPrompt = data[0];
        setPrompt(firstPrompt);
      })
      .catch(err => console.error('Error fetching prompt:', err));
  }, []);

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:5000/api/evaluate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code: userCode,
        promptId: prompt._id,
      })
    });
    const result = await res.json();
    setFeedback(result);
  };

  return (
    <div>
      <h1>JavaScript Make Me A Function</h1>
      {prompt ? (
        <div>
          <h2>{prompt.title}</h2>
          <p>{prompt.description}</p>

          <CodeEditor value={userCode} onChange={setUserCode} />

          <button onClick={handleSubmit}>Submit Code</button>
          {feedback && (
            <pre>{JSON.stringify(feedback, null, 2)}</pre>
          )}
        </div>
      ) : (
        <p>Loading prompt...</p>
      )}
    </div>
  );
}

export default JavaScriptMakeMe;
