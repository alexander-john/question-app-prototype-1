import { useState, useEffect } from "react";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {isLoggedIn ? (
        <div>
          <p>Welcome! You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Please log in to access the dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
