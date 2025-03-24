import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import QuestionPage from "../pages/QuestionPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MultipleChoicePage from "../pages/MultipleChoicePage";
import Dashboard from "../pages/Dashboard";
import LanguagesPage from "../pages/LanguagesPage";
import Python from "../pages/Python";
import PythonQuestions from "../pages/PythonQuestions";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/languages" element={<LanguagesPage />}>
                <Route path="python" element={<Python />}>
                    <Route path="questions" element={<PythonQuestions />} />
                </Route>
            </Route>
            <Route path="/questions" element={<QuestionPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/multiple-choice" element={<MultipleChoicePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
};

export default RoutesComponent;
