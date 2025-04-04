import React from "react";
import "../components/styles/Insights.css";
import { ArrowRight } from "lucide-react";

const Insights = () => {
  return (
    <div className="insights-container">
      <h3 className="insights-title">Insights</h3>

      <div className="insight-item">
        <span className="label">Founders</span>
        <h4 className="value">
          7.4K <span className="change positive">-0.00%</span>
        </h4>
      </div>

      <div className="insight-item">
        <span className="label">Investors</span>
        <h4 className="value">
          6.09K <span className="change positive">0.00%</span>
        </h4>
      </div>

      <a href="#" className="insights-link">
        View detailed insights <ArrowRight size={16} />
      </a>
    </div>
  );
};

export default Insights;
