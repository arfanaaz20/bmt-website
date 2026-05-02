import { useState } from "react";

const flightData = {
  "AI 101": {
    flightNo: "AI 101",
    status: "On Time",
    from: "DEL", fromCity: "Delhi", departure: "09:30 AM",
    to: "BOM", toCity: "Mumbai", arrival: "11:45 AM",
    duration: "2h 15m",
    timeline: [
      { label: "Scheduled", time: "09:30 AM", done: true, active: false },
      { label: "Boarding", time: "09:00 AM", done: true, active: false },
      { label: "Departed", time: "09:32 AM", done: true, active: true },
      { label: "Estimated Arrival", time: "11:47 AM", done: false, active: false },
    ],
    details: [
      { icon: "✈", label: "Flight Type", value: "Non-Stop" },
      { icon: "🛫", label: "Airline", value: "Air India" },
      { icon: "🛩", label: "Aircraft", value: "Boeing 737-800" },
      { icon: "📍", label: "Terminal", value: "T3 → T2" },
      { icon: "🧳", label: "Baggage", value: "Claim Belt 5" },
      { icon: "🚪", label: "Gate", value: "Gate 42" },
    ],
  },
  "6E 203": {
    flightNo: "6E 203",
    status: "Delayed",
    from: "BOM", fromCity: "Mumbai", departure: "02:00 PM",
    to: "BLR", toCity: "Bangalore", arrival: "03:30 PM",
    duration: "1h 30m",
    timeline: [
      { label: "Scheduled", time: "02:00 PM", done: true, active: false },
      { label: "Boarding", time: "01:45 PM", done: true, active: false },
      { label: "Delayed", time: "02:40 PM", done: false, active: true },
      { label: "Estimated Arrival", time: "04:10 PM", done: false, active: false },
    ],
    details: [
      { icon: "✈", label: "Flight Type", value: "Non-Stop" },
      { icon: "🛫", label: "Airline", value: "IndiGo" },
      { icon: "🛩", label: "Aircraft", value: "Airbus A320" },
      { icon: "📍", label: "Terminal", value: "T1 → T2" },
      { icon: "🧳", label: "Baggage", value: "Claim Belt 2" },
      { icon: "🚪", label: "Gate", value: "Gate 18" },
    ],
  },
};

export default function FlightStatus() {
  const [flightNo, setFlightNo] = useState("");
  const [date, setDate] = useState("2026-04-28");
  const [result, setResult] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleSearch = () => {
    const key = flightNo.trim().toUpperCase();
    const found = flightData[key];
    if (found) {
      setResult(found);
      setNotFound(false);
    } else {
      // fallback: show AI 101 for any input (demo purposes)
      setResult(flightData["AI 101"]);
      setNotFound(false);
    }
  };

  const statusColor = result?.status === "On Time" ? "#16a34a" : result?.status === "Delayed" ? "#e67e22" : "#1a73e8";
  const statusBg = result?.status === "On Time" ? "#dcfce7" : result?.status === "Delayed" ? "#fff3e0" : "#e8f0fe";

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", background: "#f0f4ff" }}>

      {/* HEADER */}
      <div style={{ background: "#fff", padding: "16px 20px", display: "flex", alignItems: "center", gap: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", position: "sticky", top: 0, zIndex: 10 }}>
        <button style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#333" }}>←</button>
        <span style={{ fontWeight: 700, fontSize: 18, color: "#1a1a2e" }}>Flight Status</span>
      </div>

      {/* HERO */}
      {/* <div style={{ background: "linear-gradient(135deg, #1a73e8 0%, #1557b0 100%)", padding: "2rem", textAlign: "center", color: "#fff" }}>
        <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", fontSize: 26 }}>✈</div>
        <h1 style={{ margin: "0 0 6px", fontSize: 22, fontWeight: 700 }}>Track Your Flight</h1>
        <p style={{ margin: 0, opacity: 0.85, fontSize: 14 }}>Get real-time flight updates</p>
      </div> */}
      {/* HERO - PNR STYLE */}
<div
  style={{
    background: "linear-gradient(135deg, #0f3460 0%, #16213e 60%, #1a1a2e 100%)",
    padding: "3.5rem 2rem 5rem",
    textAlign: "center",
    color: "#fff",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* decorative circles */}
  <div style={{
    position: "absolute",
    top: "-40px",
    left: "-40px",
    width: 200,
    height: 200,
    borderRadius: "50%",
    background: "rgba(55,138,221,0.12)"
  }} />

  <div style={{
    position: "absolute",
    bottom: "-60px",
    right: "-30px",
    width: 260,
    height: 260,
    borderRadius: "50%",
    background: "rgba(29,158,117,0.08)"
  }} />

  {/* badge */}
  <div style={{
    display: "inline-block",
    background: "rgba(55,138,221,0.18)",
    border: "1px solid rgba(55,138,221,0.35)",
    borderRadius: 20,
    padding: "5px 14px",
    fontSize: 11,
    color: "#85b7eb",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: "1.2rem"
  }}>
    ✈ Flight Tracking
  </div>

  <h1 style={{
    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
    fontWeight: 600,
    marginBottom: 10
  }}>
    Track your <span style={{ color: "#5dcaa5" }}>flight status</span> instantly
  </h1>

  <p style={{
    fontSize: 14,
    color: "rgba(255,255,255,0.6)",
    maxWidth: 400,
    margin: "0 auto"
  }}>
    Real-time flight updates with departure, arrival & live status
  </p>

  {/* dots animation line */}
  <div style={{
    display: "flex",
    justifyContent: "center",
    gap: 8,
    marginTop: 20,
    opacity: 0.5
  }}>
    {[...Array(7)].map((_, i) => (
      <div key={i} style={{
        width: i % 2 === 0 ? 6 : 30,
        height: i % 2 === 0 ? 6 : 2,
        borderRadius: i % 2 === 0 ? "50%" : 2,
        background: i % 2 === 0 ? "#5dcaa5" : "rgba(255,255,255,0.3)"
      }} />
    ))}
  </div>
</div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "1.5rem" }}>

        {/* SEARCH CARD */}
        <div style={{ background: "#fff", borderRadius: 16, padding: "1.5rem", marginBottom: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 18, color: "#1a73e8" }}>🔍</span>
            <span style={{ fontWeight: 700, fontSize: 16, color: "#1a1a2e" }}>Check Flight Status</span>
          </div>

          {/* Flight Number Input */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 11, color: "#1a73e8", fontWeight: 600, marginBottom: 4, marginLeft: 4 }}>Flight Number</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, border: "2px solid #1a73e8", borderRadius: 10, padding: "12px 14px", background: "#fafeff" }}>
              <span style={{ color: "#1a73e8", fontSize: 16 }}>✈</span>
              <input
                type="text"
                placeholder="e.g. AI 101, 6E 203"
                value={flightNo}
                onChange={(e) => setFlightNo(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                style={{ flex: 1, border: "none", outline: "none", fontSize: 15, background: "transparent", color: "#1a1a2e" }}
              />
            </div>
          </div>

          {/* Date Input */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, border: "1.5px solid #e0e0e0", borderRadius: 10, padding: "12px 14px", background: "#fafafa" }}>
              <span style={{ color: "#1a73e8", fontSize: 16 }}>📅</span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ flex: 1, border: "none", outline: "none", fontSize: 15, background: "transparent", color: "#1a1a2e" }}
              />
            </div>
          </div>

          <button
            onClick={handleSearch}
            style={{ width: "100%", padding: "14px 0", borderRadius: 10, border: "none", background: "linear-gradient(135deg, #1a73e8, #1557b0)", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", letterSpacing: 0.5 }}
          >
            Check Status
          </button>
        </div>

        {/* RESULT */}
        {result && (
          <>
            {/* FLIGHT CARD - GREEN */}
            <div style={{ background: "linear-gradient(135deg, #16a34a, #15803d)", borderRadius: 16, padding: "1.5rem", marginBottom: 16, color: "#fff", position: "relative", overflow: "hidden" }}>
              {/* Decorative circle */}
              <div style={{ position: "absolute", right: -20, top: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
              <div style={{ position: "absolute", right: 20, bottom: -30, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <span style={{ fontWeight: 800, fontSize: 20 }}>{result.flightNo}</span>
                <span style={{ background: "rgba(255,255,255,0.9)", color: "#16a34a", fontWeight: 700, fontSize: 12, borderRadius: 20, padding: "5px 14px", display: "flex", alignItems: "center", gap: 5 }}>
                  <span>✓</span> {result.status}
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 28, letterSpacing: 1 }}>{result.from}</div>
                  <div style={{ opacity: 0.85, fontSize: 13, marginBottom: 4 }}>{result.fromCity}</div>
                  <div style={{ fontWeight: 700, fontSize: 18 }}>{result.departure}</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 22 }}>✈</div>
                  <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>{result.duration}</div>
                  <div style={{ height: 1, background: "rgba(255,255,255,0.4)", margin: "6px 0", width: 80 }} />
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: 800, fontSize: 28, letterSpacing: 1 }}>{result.to}</div>
                  <div style={{ opacity: 0.85, fontSize: 13, marginBottom: 4 }}>{result.toCity}</div>
                  <div style={{ fontWeight: 700, fontSize: 18 }}>{result.arrival}</div>
                </div>
              </div>
            </div>

            {/* FLIGHT TIMELINE */}
            <div style={{ background: "#fff", borderRadius: 16, padding: "1.5rem", marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e", margin: "0 0 20px" }}>Flight Timeline</h2>
              <div>
                {result.timeline.map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    {/* Timeline dot + line */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 32 }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: "50%",
                        background: step.done ? "#1a73e8" : "#e0e0e0",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, border: step.done ? "none" : "2px solid #ccc"
                      }}>
                        {step.done
                          ? <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>✓</span>
                          : <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#bbb" }} />
                        }
                      </div>
                      {i < result.timeline.length - 1 && (
                        <div style={{ width: 2, height: 36, background: step.done ? "#1a73e8" : "#e0e0e0", opacity: 0.5, margin: "4px 0" }} />
                      )}
                    </div>
                    {/* Label */}
                    <div style={{ paddingBottom: i < result.timeline.length - 1 ? 8 : 0 }}>
                      <div style={{ fontWeight: 700, fontSize: 15, color: step.active ? "#1a73e8" : "#1a1a2e" }}>
                        {step.label}
                      </div>
                      <div style={{ fontSize: 13, color: "#888", marginTop: 2 }}>{step.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FLIGHT DETAILS */}
            <div style={{ background: "#fff", borderRadius: 16, padding: "1.5rem", marginBottom: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e", margin: "0 0 16px" }}>Flight Details</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {result.details.map((d, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "#e8f0fe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                      {d.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: "#888" }}>{d.label}</div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1a2e" }}>{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* POPULAR FLIGHTS HINT */}
        {!result && (
          <div style={{ background: "#fff", borderRadius: 16, padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1a2e", marginBottom: 12 }}>Try these flights</div>
            {["AI 101", "6E 203"].map((f) => (
              <button
                key={f}
                onClick={() => { setFlightNo(f); }}
                style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 14px", borderRadius: 10, border: "1px solid #e3e8f8", background: "#f8f9ff", marginBottom: 8, cursor: "pointer", fontWeight: 600, fontSize: 14, color: "#1a73e8" }}
              >
                ✈ {f}
              </button>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}