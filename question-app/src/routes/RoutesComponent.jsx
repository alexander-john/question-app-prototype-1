// filepath: c:\projects\question-app-prototype-1\question-app\src\routes\RoutesComponent.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import QuestionPage from "../pages/QuestionPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MultipleChoicePage from "../pages/MultipleChoicePage";
import Dashboard from "../pages/Dashboard";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/questions" element={<QuestionPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/multiple-choice" element={<MultipleChoicePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesComponent;