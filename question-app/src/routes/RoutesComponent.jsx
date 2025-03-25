import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import QuestionPage from "../pages/QuestionPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import JavaScriptMultipleChoicePage from "../pages/javascript/JavaScriptMultipleChoicePage";
import Dashboard from "../pages/Dashboard";
import LanguagesPage from "../pages/LanguagesPage";
import PythonPage from "../pages/PythonPage";
import JavaScriptPage from "../pages/JavaScriptPage";
import CPlusPlusPage from "../pages/CPlusPlus";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/python" element={<PythonPage />} />
            <Route path="/python/multiple-choice" element={<PythonPage />} />
            <Route path="/python/problem-solving" element={<PythonPage />} />
            <Route path="/python/make-me-a/function" element={<PythonPage />} />
            <Route path="/python/make-me-a/class" element={<PythonPage />} />
            <Route path="/python/make-me-a/program" element={<PythonPage />} />
            <Route path="/python/libraries" element={<PythonPage />} />
            <Route path="/python/libraries/py-game" element={<PythonPage />} />
            <Route
                path="/python/libraries/py-game/multiple-choice"
                element={<PythonPage />}
            />

            <Route
                path="questions/javascript/multiple-choice"
                element={<JavaScriptMultipleChoicePage />}
            />

            <Route path="/javascript" element={<JavaScriptPage />} />

            <Route
                path="/javascript/problem-solving"
                element={<JavaScriptPage />}
            />
            <Route
                path="/javascript/make-me-a/function"
                element={<JavaScriptPage />}
            />
            <Route
                path="/javascript/make-me-a/class"
                element={<JavaScriptPage />}
            />
            <Route path="/javascript/libraries" element={<JavaScriptPage />} />
            <Route path="/javascript/books" element={<JavaScriptPage />} />
            <Route
                path="/javascript/books/eloquent-javascript/multiple-choice/chapter-1"
                element={<JavaScriptPage />}
            />

            <Route path="/cplusplus" element={<CPlusPlusPage />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
};

export default RoutesComponent;
