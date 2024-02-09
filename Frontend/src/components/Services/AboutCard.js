import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import{Link } from "react-router-dom";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1 className="heading-about" style={{ fontSize:"60px", color: "#6BC6FF"}}>
          Why it is Worth Choosing PipMyScript

           
            <br />
            
          </h1>
          <h4 style={{fontSize:"20px"}} className="about-p">
          Choosing Pip My Script is a decision driven by expertise and excellence. Our team of seasoned professionals ensures your 
          script is transformed into a masterpiece. With a track record of exceptional results and a commitment to your creative vision, 
          we’re the go-to choice for script enhancement.
            </h4>
            <Link to="/chat">
            <button className="get-started">Get Started</button>
            </Link>
         
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
