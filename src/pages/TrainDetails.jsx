import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import trains from "../data/trainData";
import "./TrainDetails.css";

export default function TrainDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const train = trains.find((t) => t.id === Number(id));
  if (!train) return <h2>Train not found</h2>;

  return (
    <div className="train-details">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <img src={train.image} alt={train.name} className="detail-img" />

      <h2>{train.name}</h2>
      <p>{train.from} → {train.to}</p>
      <p>{train.time}</p>
      <p>{train.type}</p>

      <h3>₹{train.price}</h3>

      <button
        className="book-btn"
        onClick={() => navigate(`/book-train/${train.id}`)}
      >
        Book Train
      </button>
    </div>
  );
}
