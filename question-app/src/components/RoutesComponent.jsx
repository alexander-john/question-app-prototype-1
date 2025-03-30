// src/components/RoutesComponent.jsx
import React from "react";
import { Routes } from "react-router-dom";
import generalRoutes from "../routes/GeneralRoutes";
import authRoutes from "../routes/AuthRoutes";
import javascriptRoutes from "../routes/JavaScriptRoutes";

const RoutesComponent = () => {
    return (
        <Routes>
            {[
                ...generalRoutes,
                ...authRoutes,
                ...javascriptRoutes
            ]}
        </Routes>
    );
};

export default RoutesComponent;
