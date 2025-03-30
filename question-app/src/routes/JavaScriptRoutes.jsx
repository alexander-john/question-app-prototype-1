import JavaScriptPage from "../pages/javascript/JavaScriptPage";
import JavaScriptMultipleChoicePage from "../pages/javascript/multiple-choice/JavaScriptMultipleChoicePage";
import JavaScriptMakeMe from "../pages/javascript/make-me/JavaScriptMakeMe";
import { Route } from "react-router-dom";

const javascriptRoutes = [
    <Route key="js" path="/javascript" element={<JavaScriptPage />} />,
    <Route key="js-mc" path="/javascript/multiple-choice/chapter-1" element={<JavaScriptMultipleChoicePage />} />,
    <Route key="js-make-me" path="/javascript/make-me" element={<JavaScriptMakeMe />} />,
];

export default javascriptRoutes;
