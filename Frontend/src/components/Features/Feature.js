import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Grid from '@mui/material/Grid'; // Grid version 1
import f1  from "./Images/safe.png"
import f2 from "./Images/login.png"
import f3 from "./Images/merchant.png"
import f4 from "./Images/learning.png"
import f5 from "./Images/understand.png"
import f6 from "./Images/topics.png"
function Feature() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        
        <h1 className="home-about-description" style={{ fontSize: "3.3em" }}>
        Why it is Worth Choosing PipMyScript
            </h1>
            <h4 style={{ color: "white" }}>
            Choosing Pip My Script is a decision driven by expertise and excellence. 
            Our team of seasoned professionals ensures your script is transformed into a masterpiece. 
            With a track record of exceptional results and a commitment to your creative vision, 
            we’re the go-to choice for script enhancement.
            </h4>
          
        </Row>
        <Row>
        <Grid container spacing={2} style={{marginTop: "50px",marginBottom: "-100px"}}>
  <Grid xs={6} md={4}>
    <Container>
        {/* make a card  in which there is border and the above consists of a image and bellow it there is a description*/}
        <div className="feature-box">
            
            <img className="feature-img" src={f1} alt={f1} />
            <p className="feature-description">
                Easily integrate with all your need favorite tools through and APIsing including automatic
                </p>
           
        </div>
    </Container>
    <Container>
        {/* make a card  in which there is border and the above consists of a image and bellow it there is a description*/}
        <div className="feature-box">
            
            <img className="feature-img" src={f4} alt={f1} />
            <p className="feature-description">
            It’s helps you to learn concept through simply typing the required topic with few details.
                </p>
           
        </div>
    </Container>
  </Grid>
  <Grid xs={6} md={4}>
    <Container>
        {/* make a card  in which there is border and the above consists of a image and bellow it there is a description*/}
        <div className="feature-box">
            
            <img className="feature-img" src={f2} alt={f1} />
            <p className="feature-description">
            Easy Login to save all your videos at one place. No need to re-uploading the documents again and again.

                </p>
           
        </div>
    </Container>
    <Container>
        {/* make a card  in which there is border and the above consists of a image and bellow it there is a description*/}
        <div className="feature-box">
            
            <img className="feature-img" src={f5} alt={f1} style={{height: "100px"}} />
            <p className="feature-description">
            With out special feature of converting texts to videos, it is easier for you to understand and remember the concept better.
                </p>
           
        </div>
    </Container>
  </Grid>
  <Grid xs={6} md={4}>
  <Container>
        {/* make a card  in which there is border and the above consists of a image and bellow it there is a description*/}
        <div className="feature-box">
            
            <img className="feature-img" src={f3} alt={f1} />
            <p className="feature-description">
            Generate upto 100 videos with 200+ pages PDF easily. Unlock your maximum potential.
                </p>
           
        </div>
    </Container>
    <Container>
        {/* make a card  in which there is border and the above consists of a image and bellow it there is a description*/}
        <div className="feature-box">
            
            <img className="feature-img" src={f6} alt={f1} />
            <p className="feature-description">
            Easily generate videos on wide range of subjects and topics from Finance to Engineering.
                </p>
           
        </div>
    </Container>
  </Grid>
  
</Grid> 
        </Row>
     
      </Container>
    </Container>
  )
}

export default Feature
