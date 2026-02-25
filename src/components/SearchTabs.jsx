

import { useState } from "react";
import "./SearchTabs.css";

export default function SearchTabs() {
  const tabs = ["Hotels", "Flights", "Flight + Hotel", "Bus", "Cab", "Holiday"];
  const [active, setActive] = useState("Flights");

  return (
    <div className="search-wrapper">

      {/* TABS */}
      <div className="tabs-bar">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`tab-pill ${active === tab ? "active" : ""}`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* SEARCH CARD */}
      <div className="search-card">
        <input type="text" placeholder="From" />
        <input type="text" placeholder="To" />
        <input type="date" />
        <input type="date" />
      </div>

      {/* SEARCH BUTTON */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button type="button" className="search-btn">
          SEARCH
        </button>
      </div>

    </div>
  );
}
