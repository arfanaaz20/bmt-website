import React, { useState } from "react";
import "./TripPlanner.css";

export default function TripPlanner() {
  const [form, setForm] = useState({
    from: "",
    to: "",
    startDate: "",
    endDate: "",
    travellers: 1,
    budget: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trip Planner Data:", form);
    alert("Trip planned successfully!");
  };

  return (
    <div className="trip-wrapper">
      <div className="trip-card">
        <h2>Trip Planner</h2>
        <p>Plan your perfect trip in just a few steps</p>

        <form onSubmit={handleSubmit} className="trip-form">
          <input
            type="text"
            name="from"
            placeholder="From City"
            value={form.from}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="to"
            placeholder="Destination City"
            value={form.to}
            onChange={handleChange}
            required
          />

          <div className="row">
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <input
              type="number"
              name="travellers"
              min="1"
              value={form.travellers}
              onChange={handleChange}
            />

            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              required
            >
              <option value="">Budget</option>
              <option value="economy">Economy</option>
              <option value="standard">Standard</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>

          <button type="submit">Plan My Trip</button>
        </form>
      </div>
    </div>
  );
}
