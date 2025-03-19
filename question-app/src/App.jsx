import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import QuestionPage from "./pages/QuestionPage"; // Updated path
import MultipleChoicePage from "./MultipleChoicePage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/">Questions</Link> | <Link to="/register">Register</Link> | <Link to="/login">Login</Link> |{" "}
          <Link to="/multiple-choice">Multiple Choice</Link>
        </nav>
        <Routes>
          <Route path="/" element={<QuestionPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/multiple-choice" element={<MultipleChoicePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
