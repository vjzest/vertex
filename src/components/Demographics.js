import React from "react";
import "../components/styles/Demographics.css";
import worldMap from "../assets/map.avif"; // Import the correct map

// Country logos
import indiaLogo from "../assets/india.jpg";
import usaLogo from "../assets/usa.jpg";
import canadaLogo from "../assets/canada.avif";
import uaeLogo from "../assets/uae.jpeg";

const Demographics = () => {
  return (
    <div className="demographics-container">
      <h3 className="demographics-title">Demographics</h3>

      {/* Flex Container for Map & Chart */}
      <div className="demographics-content">
        {/* World Map */}
        <div className="map-container">
          <img src={worldMap} alt="World Map" className="world-map" />
          <span className="marker india"></span>
          <span className="marker usa"></span>
          <span className="marker canada"></span>
          <span className="marker uae"></span>

          {/* Legend appears BELOW the map */}
          <div className="legend">
            <span className="legend-item india">India</span>
            <span className="legend-item usa">USA</span>
            <span className="legend-item canada">Canada</span>
            <span className="legend-item uae">UAE</span>
          </div>
        </div>

        {/* Country Data Chart */}
        <div className="demographics-data">
          {/* India */}
          <div className="country">
            <div className="country-label">
              <img src={indiaLogo} alt="India" className="country-logo" />
              <span className="country-name">India</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill india"
                style={{ width: "40%" }}
              ></div>
            </div>
            <span className="percentage">40%</span>
          </div>

          {/* USA */}
          <div className="country">
            <div className="country-label">
              <img src={usaLogo} alt="USA" className="country-logo" />
              <span className="country-name">USA</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill usa" style={{ width: "29%" }}></div>
            </div>
            <span className="percentage">29%</span>
          </div>

          {/* Canada */}
          <div className="country">
            <div className="country-label">
              <img src={canadaLogo} alt="Canada" className="country-logo" />
              <span className="country-name">Canada</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill canada"
                style={{ width: "15%" }}
              ></div>
            </div>
            <span className="percentage">15%</span>
          </div>

          {/* UAE */}
          <div className="country">
            <div className="country-label">
              <img src={uaeLogo} alt="UAE" className="country-logo" />
              <span className="country-name">UAE</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill uae" style={{ width: "7%" }}></div>
            </div>
            <span className="percentage">7%</span>
          </div>
        </div>
      </div>

      {/* View More */}
      <div className="view-more">View all countries →</div>
    </div>
  );
};

export default Demographics;
