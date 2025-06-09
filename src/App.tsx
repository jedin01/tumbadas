// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MedicalLandingPage from "./components/MedicalLandingPage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MedicalLandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
