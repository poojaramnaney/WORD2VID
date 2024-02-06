import { useState } from "react";
import PricingCard from "./PricingCard";
import "./PricingApp.css";

function Projects() {
  const [selectMonthly, setSelectMonthly] = useState(true);
  console.log(selectMonthly);
  return (
    <div className="PricingApp">
      <div className="app-container">
        {/* Header */}
        <header>
          <h1 className="header-topic">Our Pricing Plan</h1>
          
        </header>
        {/* Cards here */}
        <div className="pricing-cards">
          <PricingCard
            title="Essential"
            price={selectMonthly ? "20.99" : "188.9"}
            storage="60 GB Storage"
            users="5"
            sendUp="5"
          />
          <PricingCard
            title="Deluxe"
            price={selectMonthly ? "34.99" : "349.9"}
            storage="70 GB Storage"
            users="10"
            sendUp="10"
          />
          <PricingCard
            title="Premium"
            price={selectMonthly ? "79.99" : "499.9"}
            storage="90 GB Storage"
            users="20"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
