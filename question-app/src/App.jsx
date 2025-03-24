import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavigationComponent from "./components/NavigationComponent";
import RoutesComponent from "./routes/RoutesComponent";

const App = () => {
    return (
        // Set up the Router for navigation
        <Router>
            <div className="container">
                <NavigationComponent />
                <RoutesComponent />
            </div>
        </Router>
    );
};

export default App; // Export the App component as the default export
