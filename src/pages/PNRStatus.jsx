import React, { useState } from "react";
import "./PNRStatus.css";

export default function PNRStatus() {
  const [pnr, setPnr] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pnr.length !== 10) {
      alert("Please enter a valid 10 digit PNR number");
      return;
    }

    // API later
    setShowResult(true);
  };

  return (
    <div className="pnr-page">
      <h2>Check PNR Status</h2>
      <p>Enter your 10-digit PNR number to get current booking status</p>

      <form className="pnr-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter PNR Number"
          value={pnr}
          onChange={(e) => setPnr(e.target.value)}
          maxLength={10}
          required
        />
        <button type="submit">Check Status</button>
      </form>

      {showResult && (
        <div className="pnr-result">
          <h3>PNR Status</h3>

          <div className="pnr-row">
            <span>PNR Number</span>
            <b>{pnr}</b>
          </div>

          <div className="pnr-row">
            <span>Train Name</span>
            <b>Rajdhani Express</b>
          </div>

          <div className="pnr-row">
            <span>From</span>
            <b>New Delhi</b>
          </div>

          <div className="pnr-row">
            <span>To</span>
            <b>Mumbai Central</b>
          </div>

          <div className="pnr-row">
            <span>Journey Date</span>
            <b>25 Jan 2026</b>
          </div>

          <div className="pnr-row">
            <span>Class</span>
            <b>3A</b>
          </div>

          <div className="pnr-row status">
            <span>Booking Status</span>
            <b>CONFIRMED</b>
          </div>
        </div>
      )}
    </div>
  );
}
