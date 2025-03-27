function JavaScriptMakeMe() {
    // State to hold the prompt (fetched from the backend)
    const [prompt, setPrompt] = useState(null);
    // State to store the user's code input from the CodeEditor
    const [userCode, setUserCode] = useState("");
    // State to store the feedback returned from the evaluate API after code submission
    const [feedback, setFeedback] = useState(null);

    // useEffect hook fires when the component mounts to fetch prompt data
    useEffect(() => {
        // Fetch prompts from the API endpoint
        fetch("http://localhost:5000/api/prompts")
            .then((res) => res.json())
            .then((data) => {
                // Select the first prompt from the returned array of prompts
                const firstPrompt = data[0];
                setPrompt(firstPrompt);
            })
            .catch((err) => console.error("Error fetching prompt:", err));
    }, []); // Empty dependency array means this runs only once on mount

    // Function to handle submitting the user's code for evaluation
    const handleSubmit = async () => {
        // Post the user's code and prompt identifier to the evaluate endpoint
        const res = await fetch("http://localhost:5000/api/evaluate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                code: userCode, // User's code from CodeEditor
                promptId: prompt._id, // Identifier of the current prompt
            }),
        });
        // Parse the JSON response containing the evaluation feedback
        const result = await res.json();
        // Update feedback state to display feedback on the UI
        setFeedback(result);
    };

    return (
        <div>
            <h1>JavaScript Make Me A Function</h1>
            {prompt ? (
                // If prompt data is available, show the prompt details, the code editor and submission button
                <div>
                    <h2>{prompt.title}</h2>
                    <p>{prompt.description}</p>

                    {/* CodeEditor component that allows user to write and edit code.
              The value prop is bound to userCode and onChange updates userCode accordingly */}
                    <CodeEditor value={userCode} onChange={setUserCode} />

                    {/* Button to trigger code submission */}
                    <button onClick={handleSubmit}>Submit Code</button>
                    {feedback && (
                        // If feedback is available, display it in a formatted JSON block
                        <pre>{JSON.stringify(feedback, null, 2)}</pre>
                    )}
                </div>
            ) : (
                // If prompt data is not yet loaded, show a loading message
                <p>Loading prompt...</p>
            )}
        </div>
    );
}

export default JavaScriptMakeMe;
