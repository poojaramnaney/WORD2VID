import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import{Link } from "react-router-dom";
function ServiceNumbers() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1 className="heading-about" style={{ fontSize:"40px", color: "#6BC6FF"}}>
          SEE THE NEED TO CONVERT YOUR TEXTS INTO VIDEO

           
            <br />
            
          </h1>
          <h4 style={{fontSize:"20px"}} className="about-p">
          In today’s digital age, text alone often falls short of capturing attention and engagement.
           Converting text into videos unlocks a dynamic and captivating way to convey your message, 
           making it more accessible and compelling for your audience. Embrace the power of visuals to elevate your 
           communication and leave a lasting impact.
            </h4>
            
         
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ServiceNumbers;
