import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/questions">Questions</Link> |{" "}
      <Link to="/register">Register</Link> | <Link to="/login">Login</Link> |{" "}
      <Link to="/multiple-choice">Multiple Choice</Link> |{" "}
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
};

export default Navbar;