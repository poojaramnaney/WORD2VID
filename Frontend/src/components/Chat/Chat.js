import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.jpg";


function Chat() {
  return (
    <Container style={{marginTop: "-80px"}} fluid className="about-section">
     
      
        <Row style={{ justifyContent: "center", padding: "10px", marginRight: "20em" }}>
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
            style={{ paddingTop: "14em", paddingBottom: "100px"}}
            className="about-img"
          >
          <input className="input-prompt" type="text" placeholder="Enter the prompt" name="name"  style={{width: "700px", height: "3em"}}/>
          
                  <button className="get-started" style={{marginTop: "25px"}}>Get Video</button>
                
          </Col>
         
        </Row>
        <br/>
        <Particle style={{zIndex: "-5"}} />
    
    </Container>
  );
}

export default Chat;
