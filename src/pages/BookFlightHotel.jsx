import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import combos from "../data/flightHotelData";
import "./BookFlightHotel.css";

export default function BookFlightHotel() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = combos.find((c) => c.id === Number(id));
  if (!item) return <h2>Package not found</h2>;

  return (
    <div className="book-combo">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>Booking Confirmation</h2>
      <h3>{item.hotel}</h3>
      <p>{item.from} → {item.to}</p>
      <p>{item.airline}</p>
      <p>{item.nights}</p>

      <h3>₹{item.price}</h3>

      <button className="confirm-btn">
        Confirm Booking
      </button>
    </div>
  );
}
