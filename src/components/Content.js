import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "../components/styles/Profile.css";

const Content = () => {
  return (
    <Row className="content-section">
      {/* Founded Companies */}
      <Col md={6} xs={12}>
        <Card className="info-card">
          <Card.Body>
            <h3>Founded Companies</h3>
            <h2>02</h2>
            <div className="company">
              <strong>Vertx</strong> <span className="badge green">Live</span>
              <p>Founded in 2025 in Fintech.</p>
              <a href="#">View Profile</a>
            </div>
            <div className="company">
              <strong>Company X</strong>{" "}
              <span className="badge blue">Acquired</span>
              <p>Details/Information</p>
              <a href="#">View Profile</a>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Experience */}
      <Col md={6} xs={12}>
        <Card className="info-card">
          <Card.Body>
            <h3>Experience</h3>
            <h2>03</h2>
            <ul className="experience-list">
              <li>
                <strong>Company 1</strong> <a href="#">View Profile</a>
              </li>
              <li>
                <strong>Company 2</strong> <a href="#">View Profile</a>
              </li>
              <li>
                <strong>Company 3</strong> <a href="#">View Profile</a>
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Content;
