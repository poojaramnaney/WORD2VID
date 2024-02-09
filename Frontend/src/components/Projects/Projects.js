import { useState } from "react";
import PricingCard from "./PricingCard";
import "./PricingApp.css";
import Particle from "../Particle";
import { Container, Row, Col } from "react-bootstrap";
function Projects() {
  const [selectMonthly, setSelectMonthly] = useState(true);
  console.log(selectMonthly);
  return (
    <div className="PricingApp">
     
      <div style={{zIndex:"5"}} className="app-container">
        
        {/* Toggle */}
        <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        
        <h1 className="home-about-description" style={{ fontSize: "3.3em" }}>
        Our payment services worldwide
            </h1>
            <h4 style={{ color: "white" }}
            >We believe in recognizing the value of your expertise and the importance of your contributions. With our transparent and competitive payment structure, we ensure that your efforts are not only acknowledged but also rewarded appropriately.
            </h4>
         
        </Row>
      </Container>
    </Container>

        {/* Cards here */}
        <div className="pricing-cards">
          <PricingCard
            title="Essential"
            price={selectMonthly ? "₹100" : "188.9"}
            storage="Modern Design"
            users="20 Pages per PDF"
            sendUp="30 videos per month"
            support="24/7 Customer Support"
          />
          <PricingCard
            title="Deluxe"
            price={selectMonthly ? "₹190" : "349.9"}
            storage="Modern Design"
            users="100 Pages per PDF"
            sendUp="60 videos per month"
            support="24/7 Customer Support"
          />
          <PricingCard
            title="Premium"
            price={selectMonthly ? "₹350" : "499.9"}
            storage="Modern Design"
            users="200 Pages per PDF"
            sendUp="100 videos per month"
            support="24/7 Customer Support"
          />
        </div>
      </div>
      <Particle/>
    </div>
  );
}

export default Projects;
