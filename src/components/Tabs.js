import React, { useState } from "react";
import "../components/styles/Tabs.css"; // Create and style this file

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Overview", "Portfolio", "Experience", "Media", "More"];

  return (
    <div className="tabs-container">
      {tabs.map((tab) => (
        <span
          key={tab}
          className={`tab-item ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </span>
      ))}
    </div>
  );
};

export default Tabs;
