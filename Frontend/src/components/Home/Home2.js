import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Features from "../Features/Feature";
import Projects from "../Projects/Projects";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
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
          
        </Row>
        <Row>
          <Col >
          <div className="pdf-addition">
            <div className="choose-file">
          <label style={{width: "100px"}} for="myfile">Select file:</label>
  <input style={{zIndex:"5"}} type="file" id="myfile" name="myfile" />           
  </div>
  </div></Col>
  
          <Col> 
          <Link to={"/chat"}>
            <button className=" generate-video">Generate Video</button>
            </Link>
            </Col>
          
        </Row>
        <Features/>
        <Projects/>
      </Container>
    </Container>
  );
}
export default Home2;
