import React from "react";
import { useNavigate } from "react-router-dom";
import combos from "../data/flightHotelData";
import "./FlightHotel.css";

export default function FlightHotel() {
  const navigate = useNavigate();

  return (
    <div className="combo-page">
      <h2>Flights + Hotels</h2>

      <div className="combo-grid">
        {combos.map((item) => (
          <div className="combo-card" key={item.id}>

            {/* 🔥 HOTEL IMAGE (TOP – same as Hotels page) */}
            <img
              src={item.hotelImage}
              alt={item.hotel}
              className="combo-img"
            />

            <h3>{item.hotel}</h3>
            <p>{item.from} → {item.to}</p>
            <p>Flight: {item.airline}</p>
            <p>{item.nights}</p>

            <p className="price">₹{item.price}</p>

            <button onClick={() => navigate(`/flight-hotel/${item.id}`)}>
              View & Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
