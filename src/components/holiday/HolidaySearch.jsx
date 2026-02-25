import { useState } from "react";
import "./HolidaySearch.css";

export default function HolidaySearch({ onSearch }) {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = () => {
    onSearch({
      destination,
      budget: budget ? Number(budget) : null,
    });
  };

  return (
    <div className="holiday-search-wrapper">
      <h2>Holiday Packages</h2>

      <div className="holiday-search-box">
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <select onChange={(e) => setBudget(e.target.value)}>
          <option value="">Budget</option>
          <option value="20000">Under ₹20,000</option>
          <option value="50000">₹50,000</option>
          <option value="100000">₹1,00,000</option>
          <option value="200000">₹2,00,000+</option>
        </select>

        <button onClick={handleSubmit}>Find Packages</button>
      </div>
    </div>
  );
}
