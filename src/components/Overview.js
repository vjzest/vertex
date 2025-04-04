import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../components/styles/Overview.css";

const data = [
  { name: "Mar 1", value: 400 },
  { name: "Mar 5", value: 700 },
  { name: "Mar 10", value: 650 },
  { name: "Mar 15", value: 900 },
  { name: "Mar 20", value: 500 },
  { name: "Mar 25", value: 1100 },
];

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="overview-header">
        <h2>Overview</h2>
      </div>
      <div className="overview-content">
        {/* Left side: Graph */}
        <div className="chart-container">
          <h3>
            13.49K <span className="percentage">+45%</span>
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                dot={{ fill: "#8884d8", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Overview;
