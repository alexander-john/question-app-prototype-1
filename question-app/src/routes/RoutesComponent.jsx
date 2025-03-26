import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import JavaScriptMultipleChoicePage from "../pages/javascript/multiple-choice/JavaScriptMultipleChoicePage";
import JavaScriptPage from "../pages/javascript/JavaScriptPage";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/javascript" element={<JavaScriptPage />} />
            <Route
                path="/javascript/multiple-choice/chapter-1"
                element={<JavaScriptMultipleChoicePage />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default RoutesComponent;
