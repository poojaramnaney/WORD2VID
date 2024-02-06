import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        
        <h1 className="home-about-description" style={{ fontSize: "3.3em" }}>
        Convert your Text File into Videos with an Easy Click
            </h1>
            <h4 style={{ color: "white" }}>Quickly transform the text into captivating videos with unparalleled convenience. 
              Our one-click solution empowers you to convert your words into visually stunning content effortlessly. 
              Say goodbye to complexity and hello to the simplicity of text-to-video magic at your fingertips.</h4>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
        
          </Col>
          <Col md={4} className="myAvtar">
            {/* <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt> */}
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
