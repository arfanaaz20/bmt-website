
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import hotels from "../data/hotelsData";

export default function BookHotel() {
  const { id } = useParams();
  const navigate = useNavigate();

  const hotel = hotels.find((h) => h.id === Number(id));

  if (!hotel) return <h2>Hotel not found</h2>;

  return (
    <div style={{ padding: 30 }}>
      
      {/* 🔙 BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: 20,
          padding: "8px 16px",
          borderRadius: 6,
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <h2>Booking Confirmation</h2>
      <h3>{hotel.name}</h3>
      <p>City: {hotel.city}</p>
      <p>Price: ₹{hotel.price} / night</p>

      <button
        style={{
          marginTop: 20,
          padding: "10px 20px",
          background: "#0a66ff",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        Confirm Booking
      </button>
    </div>
  );
}
