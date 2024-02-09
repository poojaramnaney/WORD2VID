import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1 className="heading-about" style={{ color: "#6BC6FF"}}>
             We Transform Ideas Into Digital Outcomes

           
            <br />
            
          </h1>
          <h4 className="about-p">Come along us to a beautiful drive towards fun learning </h4>
          
         
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
