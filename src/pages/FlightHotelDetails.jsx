import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import combos from "../data/flightHotelData";
import "./FlightHotelDetails.css";

export default function FlightHotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = combos.find((c) => c.id === Number(id));
  if (!item) return <h2>Package not found</h2>;

  return (
    <div className="combo-details">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <img src={item.hotelImage} alt={item.hotel} className="detail-img" />
      <img src={item.flightImage} alt={item.airline} className="detail-img" />

      <h2>{item.hotel}</h2>
      <p>{item.from} → {item.to}</p>
      <p>Flight: {item.airline}</p>
      <p>Stay: {item.nights}</p>

      <h3>₹{item.price}</h3>

      <button
        className="book-btn"
        onClick={() => navigate(`/book-flight-hotel/${item.id}`)}
      >
        Book Package
      </button>
    </div>
  );
}
