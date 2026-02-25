
import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import hotels from "../data/hotelsData";
import "./HotelDetails.css";

export default function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  /* ================= HOTEL ================= */
  const hotel = hotels.find((h) => h.id === Number(id));

  /* ================= STATES ================= */
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("Standard");
  const [acType, setAcType] = useState("AC");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [breakfast, setBreakfast] = useState(true);
  const [pickup, setPickup] = useState(false);

  /* ================= CALCULATIONS ================= */
  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff =
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 1;
  }, [checkIn, checkOut]);

  const extras = useMemo(() => {
    let total = 0;
    if (breakfast) total += 500;
    if (pickup) total += 800;
    return total;
  }, [breakfast, pickup]);

  const totalPrice = hotel
    ? hotel.price * nights + extras
    : 0;

  /* ================= SAFETY ================= */
  if (!hotel) {
    return <h2 style={{ padding: 30 }}>Hotel not found</h2>;
  }

  /* ================= UI ================= */
  return (
    <div className="hotel-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <img src={hotel.image} alt={hotel.name} className="hotel-img" />

      <h1 className="hotel-title">{hotel.name}</h1>
      <p className="hotel-city">{hotel.city}</p>
      <p className="hotel-desc">{hotel.description}</p>

      <div className="booking-card">
        <h2>Book Your Stay</h2>

        <div className="form-grid">
          <div>
            <label>Check-in</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>

          <div>
            <label>Check-out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>

          <div>
            <label>Room Type</label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option>Standard</option>
              <option>Deluxe</option>
              <option>Suite</option>
            </select>
          </div>

          <div>
            <label>AC / Non-AC</label>
            <select
              value={acType}
              onChange={(e) => setAcType(e.target.value)}
            >
              <option>AC</option>
              <option>Non-AC</option>
            </select>
          </div>

          <div>
            <label>Adults</label>
            <input
              type="number"
              min="1"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Children</label>
            <input
              type="number"
              min="0"
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="extras">
          <label>
            <input
              type="checkbox"
              checked={breakfast}
              onChange={() => setBreakfast(!breakfast)}
            />
            Breakfast (+₹500)
          </label>

          <label>
            <input
              type="checkbox"
              checked={pickup}
              onChange={() => setPickup(!pickup)}
            />
            Airport Pickup (+₹800)
          </label>
        </div>

        <div className="price-box">
          <div>
            <p>₹{hotel.price} × {nights} night</p>
            <p>Extras: ₹{extras}</p>
          </div>
          <h2>₹{totalPrice}</h2>
        </div>

        <button className="confirm-btn">
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
