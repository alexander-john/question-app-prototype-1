import Register from "../pages/Register";
import Login from "../pages/Login";
import { Route } from "react-router-dom";

const authRoutes = [
    <Route key="register" path="/register" element={<Register />} />,
    <Route key="login" path="/login" element={<Login />} />,
];

export default authRoutes;
