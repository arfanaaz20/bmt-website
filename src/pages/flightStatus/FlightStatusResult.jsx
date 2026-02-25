import "./flightStatus.css";

export default function FlightStatusResult({ data }) {
  return (
    <div className="mmt-result-card">
      {/* HEADER */}
      <div className="mmt-result-head">
        <h3>
          {data.airline} • {data.flightNo}
        </h3>
        <span className={`status ${data.status.toLowerCase().replace(" ", "")}`}>
          {data.status}
        </span>
      </div>

      {/* ROUTE */}
      <p className="route">
        {data.from} → {data.to} • {data.type}
      </p>

      {/* TERMINAL */}
      <p className="route">
        Terminal {data.terminal} • Gate {data.gate}
      </p>

      {/* DELAY REASON */}
      {data.delayReason && (
        <p className="delay-reason">
          Reason: {data.delayReason}
        </p>
      )}

      {/* 🔥 TIMELINE (MMT STYLE) */}
      {data.times && (
        <div className="timeline">
          {Object.entries(data.times).map(([key, value]) => (
            <div key={key}>
              <small>{key}</small>
              <b>{value}</b>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
