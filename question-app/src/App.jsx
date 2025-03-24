import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Navbar from "./components/NavBar";
import RoutesComponent from "./routes/RoutesComponent";

const App = () => {
    return (
        // Set up the Router for navigation
        <Router>
            <div className="container">
                <Navbar />
                <RoutesComponent />
            </div>
        </Router>
    );
};

export default App; // Export the App component as the default export
