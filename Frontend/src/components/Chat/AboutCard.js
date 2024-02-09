import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1>WELCOME</h1>
          <h1 className="heading-chat" style={{ color: "#6BC6FF", fontSize: "4em"}}>
Clear your concepts with illustrative videos

           
            <br />
            
          </h1>
          <h4 className="about-p" style={{fontSize: "1em"}}>
            Clear your concepts with illustrative videos. 
            Our video tutorials break down complex topics into simple, engaging visuals that make learning a breeze.
            </h4>
          
         
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
