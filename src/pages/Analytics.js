import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Overview from "../components/Overview";
import Insights from "../components/Insights";
import Navbar from "../components/Navbar";
import Demographics from "../components/Demographics";
import MobileNav from "../components/MobileNav";
import Tabs from "../components/Tabs"; // Import Tabs Component
import "../components/styles/Dashboard.css";

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeTab, setActiveTab] = useState("Overview"); // State for active tab

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="dashboard-container">
      {/* Navbar */}
      <Navbar />

      {/* Tabs Section */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <Row>
        {/* Sidebar only in Desktop */}
        {!isMobile && (
          <Col md={2} className="sidebar-container">
            <Sidebar />
          </Col>
        )}

        {/* Adjusted Main Content */}
        <Col md={isMobile ? 12 : 10} className="content-container">
          {activeTab === "Overview" && (
            <Row>
              <Col md={8}>
                <Overview />
              </Col>
              <Col md={4}>
                <Insights />
              </Col>
            </Row>
          )}

          {activeTab === "Portfolio" && (
            <Row>
              <Col>
                <h2>Portfolio Content</h2>
              </Col>
            </Row>
          )}

          {activeTab === "Experience" && (
            <Row>
              <Col>
                <h2>Experience Content</h2>
              </Col>
            </Row>
          )}

          {activeTab === "Media" && (
            <Row>
              <Col>
                <h2>Media Content</h2>
              </Col>
            </Row>
          )}

          {activeTab === "More" && (
            <Row>
              <Col>
                <h2>More Content</h2>
              </Col>
            </Row>
          )}

          <Row className="mt-4">
            <Col>
              <Demographics />
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Show Mobile Navigation in Mobile View */}
      {isMobile && <MobileNav />}
    </Container>
  );
};

export default Dashboard;
