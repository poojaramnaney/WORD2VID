import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.jpg";
import axios from 'axios';

function Chat() {
  const [prompt, setPrompt] = useState('');

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };
  const handleSubmit = async () => {
    // console.log("helooooooooooooo");
    try {
      await axios.post('http://127.0.0.1:5000/api/process_input', { prompt });
      console.log('Input sent successfully');
      // Handle success as needed
    } catch (error) {
      console.error('Error sending input:', error);
      // Handle error as needed
    }
  };


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
          <input className="input-prompt" 
          type="text" 
          placeholder="Enter the prompt" 
          name="prompt"
          value={prompt}
          onChange={handleInputChange}
          style={{width: "700px", height: "3em"}}/>
          
          <button onClick={handleSubmit} className="get-started" style={{marginTop: "25px"}}>Get Video</button>
                
          </Col>
         
        </Row>
        <br/>
        <Particle style={{zIndex: "-5"}} />
    
    </Container>
  );
}

export default Chat;
