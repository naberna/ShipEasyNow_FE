import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
// import appapple from "../assets/app1.png";
// import appandro from "../assets/app2.png";
// import mockup from "..assets/mockup.png";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";

export default function DownloadApp() {
  return (
    <section className="section app" id="downloadapp">
      <Container>
      <h1 className="section-main-title">Download App</h1>
        <Row>
          <Col xs={12} md={6} className="left"></Col>
          <Col xs={12} md={6} className="right">
            <div>
              <h2>Now it is on the market</h2>
              <p>It is in google play and app store</p>
              <div className="download-container">
                <Link to="/" className="download">
                  <FaGooglePlay />
                  <div>
                    <div>Get it on</div>
                    <div className="title">Google Play</div>
                  </div>
                </Link>
                <Link to="/" className="download">
                  <FaAppStore />
                  <div>
                    <div>Download on the</div>
                    <div className="title">App Store</div>
                  </div>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
