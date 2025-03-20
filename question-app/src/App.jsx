// Import necessary libraries and components
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import QuestionPage from "./pages/QuestionPage";
import MultipleChoicePage from "./pages/MultipleChoicePage";
import "./App.css";

const App = () => {
  return (
    // Set up the Router for navigation
    <Router>
      <div className="container">
        {/* Navigation bar with links to different pages */}
        <nav>
          <Link to="/">Questions</Link> | <Link to="/register">Register</Link> | <Link to="/login">Login</Link> |{" "}
          <Link to="/multiple-choice">Multiple Choice</Link>
        </nav>
        {/* Define routes for the application */}
        <Routes>
          <Route path="/" element={<QuestionPage />} /> {/* Route for the Questions page */}
          <Route path="/register" element={<Register />} /> {/* Route for the Register page */}
          <Route path="/login" element={<Login />} /> {/* Route for the Login page */}
          <Route path="/multiple-choice" element={<MultipleChoicePage />} /> {/* Route for the Multiple Choice page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App; // Export the App component as the default export
