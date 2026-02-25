import { useState } from "react";
import FlightStatusSearch from "./FlightStatusSearch";
import FlightStatusResult from "./FlightStatusResult";
import "./flightStatus.css";

export default function FlightStatusPage() {
  const [result, setResult] = useState(null);

  return (
    <div className="fs-page">
      <FlightStatusSearch onSearch={setResult} />
      {result && <FlightStatusResult data={result} />}
    </div>
  );
}
