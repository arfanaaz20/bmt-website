import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import buses from "../data/busData";
import "./BookBus.css";

export default function BookBus() {
  const { id } = useParams();
  const navigate = useNavigate();

  const bus = buses.find((b) => b.id === Number(id));
  if (!bus) return <h2 style={{ padding: "120px" }}>Bus not found</h2>;

  return (
    <div className="book-bus">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>Bus Booking Confirmation</h2>
      <h3>{bus.operator}</h3>
      <p>{bus.from} → {bus.to}</p>
      <p>{bus.time}</p>
      <p>{bus.type}</p>

      <h3>₹{bus.price}</h3>

      <button className="confirm-btn">
        Confirm Booking
      </button>
    </div>
  );
}
