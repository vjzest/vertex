import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { Home, BarChart, Users, Briefcase, User, Settings } from "lucide-react";
import "../components/styles/Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route
  const [activeItem, setActiveItem] = useState(location.pathname); // Track active route

  // Function to handle clicks and navigate
  const handleMenuClick = (path) => {
    setActiveItem(path);
    navigate(path);
  };

  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div
        className={`profile-section ${
          activeItem === "/profile" ? "active" : ""
        }`}
        onClick={() => handleMenuClick("/profile")}
      >
        <div className="profile-icon">JD</div>
      </div>

      {/* Sidebar Menu */}
      <ul className="menu">
        <li
          className={`menu-item ${activeItem === "/dashboard" ? "active" : ""}`}
          onClick={() => handleMenuClick("/dashboard")}
        >
          <Home size={24} className="icon" />
          <span>Dashboard</span>
        </li>
        <li
          className={`menu-item ${activeItem === "/analytics" ? "active" : ""}`}
          onClick={() => handleMenuClick("/analytics")}
        >
          <BarChart size={24} className="icon" />
          <span>Analytics</span>
        </li>
        <li
          className={`menu-item ${activeItem === "/connect" ? "active" : ""}`}
          onClick={() => handleMenuClick("/connect")}
        >
          <Users size={24} className="icon" />
          <span>Connect</span>
        </li>
        <li
          className={`menu-item ${activeItem === "/dealroom" ? "active" : ""}`}
          onClick={() => handleMenuClick("/dealroom")}
        >
          <Briefcase size={24} className="icon" />
          <span>Dealroom</span>
        </li>
        <li
          className={`menu-item ${activeItem === "/profile" ? "active" : ""}`}
          onClick={() => handleMenuClick("/profile")}
        >
          <User size={24} className="icon" />
          <span>Profile</span>
        </li>
        <li
          className={`menu-item ${activeItem === "/settings" ? "active" : ""}`}
          onClick={() => handleMenuClick("/settings")}
        >
          <Settings size={24} className="icon" />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
