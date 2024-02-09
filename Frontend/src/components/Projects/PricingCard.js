import React from "react";
import "./PricingCard.css";
import { Link } from 'react-router-dom'
const PricingCard = ({ title, price, storage, users, sendUp, support }) => {
  return (
    <div className="PricingCard">
      <header>
        <p className="card-title">{title}</p>
        <h1 className="card-price">{price}</h1>
      </header>
      {/* features here */}
      <div className="card-features">
        <div className="card-storage">{storage}</div>
        <div className="card-users-allowed">{users} </div>
        <div className="card-send-up"> {sendUp}</div>
        <div className="card-send-up"> {support}</div>
      </div>
      <Link to={"/chat"}>
      <button className="card-btn">Buy Now</button>
      </Link>
    </div>
  );
};

export default PricingCard;
