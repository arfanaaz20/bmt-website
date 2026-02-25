import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import buses from "../data/busData";
import "./BusDetails.css";

export default function BusDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const bus = buses.find((b) => b.id === Number(id));
  if (!bus) return <h2>Bus not found</h2>;

  return (
    <div className="bus-details">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <img src={bus.image} alt={bus.operator} className="detail-img" />

      <h2>{bus.operator}</h2>
      <p>{bus.from} → {bus.to}</p>
      <p>{bus.time}</p>
      <p>{bus.type}</p>

      <h3>₹{bus.price}</h3>

      <button
        className="book-btn"
        onClick={() => navigate(`/book-bus/${bus.id}`)}
      >
        Book Bus
      </button>
    </div>
  );
}
