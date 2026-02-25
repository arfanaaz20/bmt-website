import React from "react";
import "./GiftCard.css";
console.log("GiftCard component loaded");


const GiftCard = () => {
  return (
    <div className="giftcard-wrapper">
      <div className="giftcard-container">
        <div className="giftcard-left">
          <h1>Gift Travel. Gift Memories.</h1>
          <p className="subtitle">
            The perfect gift for every traveller — flexible, thoughtful, and unforgettable.
          </p>

          <p className="description">
            Our Travel Gift Card lets your loved ones plan their perfect journey —
            flights, hotels, holidays, tours and more. Easy to gift and exciting to redeem.
          </p>

          <ul className="features">
            <li>✔ Valid for 12 Months</li>
            <li>✔ No Blackout Dates</li>
            <li>✔ Multiple Use Allowed</li>
            <li>✔ Easy Online Redemption</li>
          </ul>

          <div className="giftcard-buttons">
            <button className="btn-primary">Buy Gift Card</button>
            <button className="btn-outline">Gift a Trip</button>
          </div>
        </div>

        <div className="giftcard-right">
          <div className="card">
            <h3>Travel Gift Card</h3>
            <p>One Card. Endless Journeys.</p>
            <span>₹1,000 – ₹50,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
