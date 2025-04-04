import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import "../components/styles/Navbar.css"; // Ensure CSS file exists

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left Section - Logo & Profile */}
      <div className="navbar-left">
        <div className="profile-icon">V</div>{" "}
        {/* Placeholder for profile image */}
        <span className="company-name">Vertxlabs, Inc</span>
      </div>

      {/* Center Section - Navigation Links */}
      <div className="navbar-center">
        <span className="nav-link">Profile</span>
        <span className="nav-link">Activity</span>
        <span className="nav-link">Log out</span>
      </div>

      {/* Right Section - Mobile Menu Icon */}
      <div className="navbar-right">
        <div className="menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "show" : ""}`}>
        <span className="nav-link">Profile</span>
        <span className="nav-link">Activity</span>
        <span className="nav-link">Log out</span>
      </div>
    </nav>
  );
};

export default Navbar;
