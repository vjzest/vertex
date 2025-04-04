import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import Content from "../components/Content"; // Import Content Section
import Tabs from "../components/Tabs"; // Import Tabs Component
import "../components/styles/Profile.css"; // Import styles

const Profile = () => {
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
    <Container fluid className="profile-container">
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

        {/* Main Content */}
        <Col md={isMobile ? 12 : 10} className="content-container">
          {/* Profile Section */}
          {activeTab === "Overview" && (
            <Row>
              <Col md={12}>
                <Card className="profile-card">
                  <Card.Body>
                    <h2 className="profile-title">Overview</h2>
                    <div className="profile-info">
                      <div className="profile-image"></div>
                      <div className="profile-details">
                        <h3>
                          Mr A <span className="verified-badge">✔</span>
                        </h3>
                        <p>Co-Founder & CEO @ Vertx</p>
                        <span className="tag">Entrepreneur</span>
                        <div className="social-icons">
                          <span>🔗</span>
                          <span>❌</span>
                          <span>📧</span>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}

          {/* Profile Content Based on Active Tab */}
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

          {/* Content Section - Founded Companies & Experience */}
          <Row className="mt-4">
            <Col md={12}>
              <Content /> {/* Render Content Component */}
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Show Mobile Navigation in Mobile View */}
      {isMobile && <MobileNav />}
    </Container>
  );
};

export default Profile;
