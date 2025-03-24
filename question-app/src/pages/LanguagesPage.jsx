import React from "react";
import { Link, Outlet } from "react-router-dom";

const LanguagesPage = () => {
    return (
        <div>
            <h1>Languages</h1>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
            </ul>
        </div>
    );
};

export default LanguagesPage;