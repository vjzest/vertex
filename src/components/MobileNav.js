import React from "react";
import { Home, BarChart, Users, Briefcase, Settings } from "lucide-react";
import "../components/styles/MobileNav.css";

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <div className="nav-item">
        <Home size={24} />
        <span>Dashboard</span>
      </div>
      <div className="nav-item">
        <BarChart size={24} />
        <span>Analytics</span>
      </div>
      <div className="nav-item">
        <Users size={24} />
        <span>Connect</span>
      </div>
      <div className="nav-item">
        <Briefcase size={24} />
        <span>Dealroom</span>
      </div>
      <div className="nav-item">
        <Settings size={24} />
        <span>Settings</span>
      </div>
    </div>
  );
};

export default MobileNav;
