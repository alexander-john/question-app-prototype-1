import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import QuestionPage from "./pages/QuestionPage";
import MultipleChoicePage from "./pages/MultipleChoicePage";
import Dashboard from "./pages/Dashboard"; // Import the new Dashboard component
import "./App.css";
import HomePage from "./pages/Homepage";
import Navbar from "./components/NavBar";
import RoutesComponent from "./routes/RoutesComponent";

const App = () => {
    return (
        // Set up the Router for navigation
        <Router>
            <div className="container">
                <Navbar />
                <RoutesComponent />
            </div>
        </Router>
    );
};

export default App; // Export the App component as the default export
