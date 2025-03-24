import React from "react";
import { Link, Outlet } from "react-router-dom";

const LanguagesPage = () => {
    return (
        <div>
            <h1>Languages</h1>
            <ul>
                <li>
                    <Link to="python">Python</Link>
                </li>
                {/* Add more language links here */}
            </ul>
            {/* Render nested routes here */}
            <Outlet />
        </div>
    );
};

export default LanguagesPage;