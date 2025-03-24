import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import QuestionPage from "./pages/QuestionPage";
import MultipleChoicePage from "./pages/MultipleChoicePage";
import Dashboard from "./pages/Dashboard"; // Import the new Dashboard component
import "./App.css";
import HomePage from "./pages/Homepage";

const App = () => {
    return (
        // Set up the Router for navigation
        <Router>
            <div className="container">
                {/* Navigation bar with links to different pages */}
                <nav>
                    <Link to="/">Home</Link> | <Link to="/questions">Questions</Link> |{" "}
                    <Link to="/register">Register</Link> |{" "}
                    <Link to="/login">Login</Link> |{" "}
                    <Link to="/multiple-choice">Multiple Choice</Link> |{" "}
                    <Link to="/dashboard">Dashboard</Link>
                </nav>
                {/* Define routes for the application */}
                <Routes>
                    <Route path="/" element={<HomePage />} />{" "}
                    {/* Route for the Home page */}
                    <Route path="/questions" element={<QuestionPage />} />{" "}
                    {/* Route for the Questions page */}
                    <Route path="/register" element={<Register />} />{" "}
                    {/* Route for the Register page */}
                    <Route path="/login" element={<Login />} />{" "}
                    {/* Route for the Login page */}
                    <Route
                        path="/multiple-choice"
                        element={<MultipleChoicePage />}
                    />{" "}
                    {/* Route for the Multiple Choice page */}
                    <Route path="/dashboard" element={<Dashboard />} />{" "}
                    {/* Route for the Dashboard page */}
                </Routes>
            </div>
        </Router>
    );
};

export default App; // Export the App component as the default export
