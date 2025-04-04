import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics"; // Import Analytics Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/analytics" element={<Analytics />} />{" "}
        {/* Add Analytics */}
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
