import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import WorksPage from "./pages/WorksPage/WorksPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/works" element={<WorksPage />}></Route>
      <Route path="/projects/:id" element={<ProjectPage />}></Route>
    </Routes>
  );
}

export default App;
