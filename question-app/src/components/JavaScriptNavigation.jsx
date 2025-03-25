import React from "react";
import { Link } from "react-router-dom";

const JavaScriptNavigation = () => {
    return (
        <nav>
            <Link to="/javascript/multiple-choice">Multiple Choice</Link> |{" "}
            <Link to="/javascript/problem-solving">Problem Solving</Link> |{" "}
            <Link to="/javascript/make-me">Make Me</Link> |{" "}
            <Link to="/javascript/libraries">Libraries</Link>
        </nav>
    );
};

export default JavaScriptNavigation;
