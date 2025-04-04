import React from "react";
import "../components/styles/Card.css";

const card = ({ title, number, items }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
        <span className="card-number">{number}</span>
      </div>
      <ul className="card-list">
        {items.map((item, index) => (
          <li key={index} className="card-list-item">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="card-icon">{item.icon}</div>
              <div>
                <strong>{item.name}</strong>
                {item.tag && <span className="card-tag">{item.tag}</span>}
                <p style={{ fontSize: "12px", color: "#bbb", margin: "5px 0" }}>
                  {item.description}
                </p>
              </div>
            </div>
            <span className="profile-link">View Profile</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default card;
