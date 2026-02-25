import { useState } from "react";
import "./flightStatus.css";
import flights from "../../data/flightsData";

export default function FlightStatusSearch({ onSearch }) {
  const [tab, setTab] = useState("flight");
  const [flightNo, setFlightNo] = useState("");

  const search = () => {
    const result =
      flights.find(
        f => f.flightNo?.toLowerCase() === flightNo.toLowerCase()
      ) || flights[0];

    onSearch(result);
  };

  return (
    <div className="mmt-search-card">
      <div className="mmt-tabs">
        <span
          className={tab === "flight" ? "active" : ""}
          onClick={() => setTab("flight")}
        >
          By Flight Number
        </span>
        <span
          className={tab === "route" ? "active" : ""}
          onClick={() => setTab("route")}
        >
          By Route
        </span>
      </div>

      <div className="mmt-input-row">
        {tab === "flight" ? (
          <input
            placeholder="Flight Number (Eg: 6E 203)"
            value={flightNo}
            onChange={(e) => setFlightNo(e.target.value)}
          />
        ) : (
          <>
            <input placeholder="From (Delhi)" />
            <input placeholder="To (Mumbai)" />
            <input type="date" />
          </>
        )}

        <button onClick={search}>SEARCH</button>
      </div>
    </div>
  );
}
