import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, BarChart, Users, Briefcase, User, Settings } from "lucide-react";
import "../components/styles/MobileNav.css";

const MobileNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const handleClick = (path) => {
    setActiveItem(path);
    navigate(path);
  };

  return (
    <div className="mobile-nav">
      <div
        className={`nav-item ${activeItem === "/dashboard" ? "active" : ""}`}
        onClick={() => handleClick("/dashboard")}
      >
        <Home size={24} />
        <span>Dashboard</span>
      </div>
      <div
        className={`nav-item ${activeItem === "/analytics" ? "active" : ""}`}
        onClick={() => handleClick("/analytics")}
      >
        <BarChart size={24} />
        <span>Analytics</span>
      </div>
      <div
        className={`nav-item ${activeItem === "/connect" ? "active" : ""}`}
        onClick={() => handleClick("/connect")}
      >
        <Users size={24} />
        <span>Connect</span>
      </div>
      <div
        className={`nav-item ${activeItem === "/dealroom" ? "active" : ""}`}
        onClick={() => handleClick("/dealroom")}
      >
        <Briefcase size={24} />
        <span>Dealroom</span>
      </div>
      <div
        className={`nav-item ${activeItem === "/profile" ? "active" : ""}`}
        onClick={() => handleClick("/profile")}
      >
        <User size={24} />
        <span>Profile</span>
      </div>
    </div>
  );
};

export default MobileNav;
