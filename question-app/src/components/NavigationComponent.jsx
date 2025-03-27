import React from "react";
import { Link } from "react-router-dom";

const NavigationComponent = () => {
    return (
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/javascript">JavaScript</Link> |{" "}
            <Link to="/login">Login</Link> |{" "}
            <Link to="/register">Register</Link>
        </nav>
    );
};

export default NavigationComponent;
