import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Grid from '@mui/material/Grid'; // Grid version 1
import account from "./Images/account.png"
import concept from "./Images/contact.png"
import convertToVideo from "./Images/video.png"
function Banner() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Grid container spacing={2} style={{marginTop: "50px",marginBottom: "-100px"}}>
  <Grid xs={6} md={4}>
    <Container>
        {/* make a card  in which there is border and the above consists of a image and bellow it there is a description*/}
        <div className="">
            
            <img className="feature-img" src={concept} alt={concept} />
            <p className="feature-description">
            Login to save your generated videos. 
            
                </p>
           
        </div>
    </Container>
    
  </Grid>
  <Grid xs={6} md={4}>
    <Container>
        {/* make a card  in which there is border and the above consists of a image and bellow it there is a description*/}
        
        <div className="">
            
            <img className="feature-img" src={account} alt={account} />
            <p className="feature-description">
            Upload the Text you want to learn about.
                </p>
           
        </div>
    </Container>
   
  </Grid>
  <Grid xs={6} md={4}>
  
    <Container>
        {/* make a card  in which there is border and the above consists of a image and bellow it there is a description*/}
        <div className="">
            
            <img className="feature-img" src={convertToVideo} alt={convertToVideo} />
            <p className="feature-description">
            Convert to an interactove video and enjoy!
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

export default Banner
