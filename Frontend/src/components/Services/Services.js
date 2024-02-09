import React from "react";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.jpg";
import servicespic from "./servicespic.png"
import service from "./service.png"
import ServiceNumbers from "./ServiceNumbers";
function Services() {
  
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        {/* <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1> */}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "80px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={service} alt="about" className="img-fluid" />
          </Col>
        </Row>
        </Container>
        <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        {/* <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1> */}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            
            <ServiceNumbers />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "80px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={servicespic} alt="about" className="img-fluid" />
          </Col>
        </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Services;
