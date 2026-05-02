import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .pnr-wrap {
    font-family: 'Sora', sans-serif;
    min-height: 100vh;
    background: #f4f6fb;
  }

  .hero {
    background: linear-gradient(135deg, #0f3460 0%, #16213e 60%, #1a1a2e 100%);
    padding: 3.5rem 2rem 5rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute;
    top: -40px; left: -40px;
    width: 200px; height: 200px;
    border-radius: 50%;
    background: rgba(55,138,221,0.12);
    pointer-events: none;
  }
  .hero::after {
    content: '';
    position: absolute;
    bottom: -60px; right: -30px;
    width: 260px; height: 260px;
    border-radius: 50%;
    background: rgba(29,158,117,0.08);
    pointer-events: none;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(55,138,221,0.18);
    border: 1px solid rgba(55,138,221,0.35);
    border-radius: 20px;
    padding: 5px 14px;
    font-size: 11px;
    color: #85b7eb;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
    font-family: 'Space Mono', monospace;
  }

  .hero h1 {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 600;
    color: #fff;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .hero h1 span { color: #5dcaa5; }

  .hero p {
    font-size: 0.95rem;
    color: rgba(255,255,255,0.55);
    max-width: 400px;
    margin: 0 auto;
  }

  .train-track {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 1.8rem;
    opacity: 0.4;
  }

  .track-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #5dcaa5;
  }

  .track-line {
    width: 30px; height: 2px;
    background: rgba(255,255,255,0.3);
  }

  .search-card {
    max-width: 580px;
    margin: -2.5rem auto 0;
    background: #fff;
    border-radius: 20px;
    border: 0.5px solid #e0e0e0;
    padding: 2rem;
    position: relative;
    z-index: 2;
    box-shadow: 0 20px 60px rgba(0,0,0,0.12);
  }

  .input-wrap {
    position: relative;
    margin-bottom: 1rem;
  }

  .pnr-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    color: #888;
  }

  .pnr-input {
    width: 100%;
    padding: 14px 14px 14px 42px;
    border: 1.5px solid #dde1ea;
    border-radius: 12px;
    font-size: 1rem;
    font-family: 'Space Mono', monospace;
    font-weight: 700;
    letter-spacing: 2px;
    background: #f8f9fc;
    color: #1a1a2e;
    outline: none;
    transition: border-color 0.2s;
  }

  .pnr-input:focus { border-color: #378add; }

  .pnr-input::placeholder {
    font-weight: 400;
    letter-spacing: 0.5px;
    color: #aaa;
    font-family: 'Sora', sans-serif;
  }

  .check-btn {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #0f3460, #378add);
    color: #fff;
    font-family: 'Sora', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.1s;
    letter-spacing: 0.3px;
  }

  .check-btn:hover { opacity: 0.92; }
  .check-btn:active { transform: scale(0.98); }
  .check-btn:disabled { opacity: 0.55; cursor: not-allowed; }

  .hint {
    font-size: 12px;
    color: #aaa;
    text-align: center;
    margin-top: 0.7rem;
  }

  .err {
    color: #e24b4a;
    font-size: 13px;
    text-align: center;
    margin-top: 0.5rem;
    min-height: 18px;
  }

  .result-wrap {
    max-width: 580px;
    margin: 1.5rem auto 3rem;
    padding: 0 1rem;
  }

  .journey-banner {
    background: linear-gradient(135deg, #0f6e56, #1d9e75);
    border-radius: 16px;
    padding: 1.4rem 1.5rem;
    color: #fff;
    margin-bottom: 1rem;
  }

  .journey-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .journey-train {
    font-size: 0.8rem;
    opacity: 0.7;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: 'Space Mono', monospace;
  }

  .journey-name {
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 2px;
  }

  .confirmed-badge {
    background: rgba(255,255,255,0.2);
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 20px;
    padding: 4px 12px;
    font-size: 11px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: 'Space Mono', monospace;
  }

  .journey-route {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .station { flex: 1; }

  .station-code {
    font-size: 1.6rem;
    font-weight: 700;
    font-family: 'Space Mono', monospace;
    line-height: 1;
  }

  .station-name {
    font-size: 0.75rem;
    opacity: 0.7;
    margin-top: 2px;
  }

  .station-time {
    font-size: 0.85rem;
    font-weight: 500;
    margin-top: 4px;
    opacity: 0.9;
  }

  .route-mid { text-align: center; flex-shrink: 0; }

  .route-dur {
    font-size: 0.7rem;
    opacity: 0.6;
    margin-top: 2px;
  }

  .pnr-meta {
    display: flex;
    gap: 8px;
    margin-bottom: 1rem;
  }

  .meta-chip {
    flex: 1;
    background: #fff;
    border: 0.5px solid #e0e0e0;
    border-radius: 12px;
    padding: 10px 12px;
    text-align: center;
  }

  .meta-label {
    font-size: 10px;
    color: #aaa;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 3px;
  }

  .meta-val {
    font-size: 0.85rem;
    font-weight: 600;
    color: #1a1a2e;
    font-family: 'Space Mono', monospace;
  }

  .passengers-section {
    background: #fff;
    border: 0.5px solid #e0e0e0;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .section-hdr {
    padding: 14px 16px;
    border-bottom: 0.5px solid #e0e0e0;
    font-size: 12px;
    color: #888;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 500;
  }

  .passenger-row {
    display: flex;
    align-items: center;
    padding: 14px 16px;
    border-bottom: 0.5px solid #f0f0f0;
  }

  .passenger-row:last-child { border-bottom: none; }

  .p-avatar {
    width: 36px; height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    flex-shrink: 0;
    margin-right: 12px;
  }

  .p-male { background: #e6f1fb; color: #185fa5; }
  .p-female { background: #fbeaf0; color: #993556; }

  .p-info { flex: 1; }

  .p-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: #1a1a2e;
  }

  .p-sub {
    font-size: 12px;
    color: #888;
    margin-top: 1px;
  }

  .p-right { text-align: right; }

  .cnf-badge {
    display: inline-block;
    background: #eaf3de;
    color: #3b6d11;
    font-size: 10px;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: 6px;
    letter-spacing: 0.5px;
    margin-bottom: 4px;
  }

  .berth-info {
    font-size: 0.8rem;
    font-weight: 600;
    color: #185fa5;
    font-family: 'Space Mono', monospace;
  }

  .info-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 0.5px solid #f0f0f0;
  }

  .info-row:last-child { border-bottom: none; }

  .info-label {
    font-size: 13px;
    color: #888;
  }

  .info-val {
    font-size: 13px;
    font-weight: 600;
    font-family: 'Space Mono', monospace;
    color: #1a1a2e;
  }

  .info-val.green { color: #3b6d11; font-family: 'Sora', sans-serif; }

  .spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    gap: 8px;
    color: #888;
    font-size: 14px;
  }

  .dot-spin {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #378add;
    animation: bounce 0.6s infinite alternate;
  }

  .dot-spin:nth-child(2) { animation-delay: 0.2s; }
  .dot-spin:nth-child(3) { animation-delay: 0.4s; }

  @keyframes bounce {
    to { transform: translateY(-8px); opacity: 0.4; }
  }
`;

export default function PNRStatus() {
  const [pnr, setPnr] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // const checkPNR = async () => {
  //   setError("");
  //   if (pnr.length !== 10) {
  //     setError("Please enter a valid 10-digit PNR number");
  //     return;
  //   }

  //   setLoading(true);
  //   setResult(null);

  //   try {
  //     const res = await fetch("https://api.anthropic.com/v1/messages", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         model: "claude-sonnet-4-20250514",
  //         max_tokens: 1000,
  //         messages: [
  //           {
  //             role: "user",
  //             content: `PNR number: ${pnr}\n\nGenerate a realistic mock PNR status for Indian Railways. Return ONLY valid JSON, no markdown, no explanation. Format:\n{\n"pnr":"${pnr}",\n"status":"Confirmed",\n"train_no":"12429",\n"train_name":"Lucknow Mail",\n"from_code":"NDLS",\n"from_name":"New Delhi",\n"to_code":"LKO",\n"to_name":"Lucknow",\n"departure":"10:30 AM",\n"arrival":"04:00 PM",\n"duration":"5h 30m",\n"date":"29 Nov 2025",\n"class":"Sleeper (SL)",\n"coach":"S3",\n"chart_status":"Chart Prepared",\n"passengers":[{"name":"John Doe","age":32,"gender":"Male","berth":"S3-45 (Lower)","booking_status":"CNF"},{"name":"Jane Doe","age":28,"gender":"Female","berth":"S3-46 (Upper)","booking_status":"CNF"}]\n}\nVary train name, route, times, passengers and berths based on PNR digits. Make it feel real.`,
  //           },
  //         ],
  //       }),
  //     });

  //     const data = await res.json();
  //     const text = data.content.map((i) => i.text || "").join("");
  //     const clean = text.replace(/```json|```/g, "").trim();
  //     const info = JSON.parse(clean);
  //     setResult(info);
  //   } catch (e) {
  //     setError("Could not fetch PNR status. Please try again.");
  //   }

  //   setLoading(false);
  // };

  const checkPNR = () => {
  setError("");

  if (pnr.length !== 10) {
    setError("Please enter a valid 10-digit PNR number");
    return;
  }

  setLoading(true);

  setTimeout(() => {
    setResult({
      pnr: pnr,
      status: "Confirmed",
      train_no: "12429",
      train_name: "Lucknow Mail",
      from_code: "NDLS",
      from_name: "New Delhi",
      to_code: "LKO",
      to_name: "Lucknow",
      departure: "10:30 AM",
      arrival: "04:00 PM",
      duration: "5h 30m",
      date: "29 Nov 2025",
      class: "Sleeper (SL)",
      coach: "S3",
      chart_status: "Chart Prepared",
      passengers: [
        {
          name: "John Doe",
          age: 32,
          gender: "Male",
          berth: "S3-45 (Lower)",
          booking_status: "CNF",
        },
        {
          name: "Jane Doe",
          age: 28,
          gender: "Female",
          berth: "S3-46 (Upper)",
          booking_status: "CNF",
        },
      ],
    });

    setLoading(false);
  }, 1000);
};
  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2);

  return (
    <>
      <style>{styles}</style>
      <div className="pnr-wrap">
        {/* Hero */}
        <div className="hero">
          <div className="hero-badge">&#9679; Indian Railways PNR</div>
          <h1>
            Check your <span>ticket status</span>
            <br />
            instantly
          </h1>
          <p>Real-time PNR status with seat, berth & passenger details</p>
          <div className="train-track">
            <div className="track-dot" />
            <div className="track-line" />
            <div className="track-dot" />
            <div className="track-line" />
            <div className="track-dot" />
            <div className="track-line" />
            <div className="track-dot" />
          </div>
        </div>

        {/* Search Card */}
        <div className="search-card">
          <div className="input-wrap">
            <span className="pnr-icon">🎫</span>
            <input
              className="pnr-input"
              type="text"
              maxLength={10}
              placeholder="Enter 10-digit PNR number"
              value={pnr}
              onChange={(e) => {
                setPnr(e.target.value.replace(/\D/g, ""));
                setError("");
              }}
            />
          </div>
          <button
            className="check-btn"
            onClick={checkPNR}
            disabled={loading}
          >
            {loading ? "Checking..." : "Check PNR Status"}
          </button>
          <p className="hint">
            Enter the 10-digit PNR printed on your train ticket
          </p>
          {error && <div className="err">{error}</div>}
        </div>

        {/* Results */}
        {(loading || result) && (
          <div className="result-wrap">
            {loading && (
              <div className="spinner">
                <div className="dot-spin" />
                <div className="dot-spin" />
                <div className="dot-spin" />
                <span>Fetching PNR status...</span>
              </div>
            )}

            {result && (
              <>
                {/* Journey Banner */}
                <div className="journey-banner">
                  <div className="journey-top">
                    <div>
                      <div className="journey-train">{result.train_no}</div>
                      <div className="journey-name">{result.train_name}</div>
                    </div>
                    <div className="confirmed-badge">✓ {result.status}</div>
                  </div>
                  <div className="journey-route">
                    <div className="station">
                      <div className="station-code">{result.from_code}</div>
                      <div className="station-name">{result.from_name}</div>
                      <div className="station-time">{result.departure}</div>
                    </div>
                    <div className="route-mid">
                      <div style={{ fontSize: "1.2rem", opacity: 0.6 }}>→</div>
                      <div className="route-dur">{result.duration}</div>
                    </div>
                    <div className="station" style={{ textAlign: "right" }}>
                      <div className="station-code">{result.to_code}</div>
                      <div className="station-name">{result.to_name}</div>
                      <div className="station-time">{result.arrival}</div>
                    </div>
                  </div>
                </div>

                {/* Meta chips */}
                <div className="pnr-meta">
                  {[
                    ["PNR", result.pnr],
                    ["Date", result.date],
                    ["Class", result.class],
                    ["Coach", result.coach],
                  ].map(([label, val]) => (
                    <div className="meta-chip" key={label}>
                      <div className="meta-label">{label}</div>
                      <div className="meta-val">{val}</div>
                    </div>
                  ))}
                </div>

                {/* Passengers */}
                <div className="passengers-section">
                  <div className="section-hdr">Passenger Details</div>
                  {result.passengers.map((p, i) => (
                    <div className="passenger-row" key={i}>
                      <div
                        className={`p-avatar ${
                          p.gender === "Female" ? "p-female" : "p-male"
                        }`}
                      >
                        {getInitials(p.name)}
                      </div>
                      <div className="p-info">
                        <div className="p-name">{p.name}</div>
                        <div className="p-sub">
                          {p.age} yrs • {p.gender}
                        </div>
                      </div>
                      <div className="p-right">
                        <div className="cnf-badge">{p.booking_status}</div>
                        <div className="berth-info">{p.berth}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Journey Info */}
                <div className="passengers-section">
                  <div className="section-hdr">Journey Info</div>
                  <div className="info-row">
                    <span className="info-label">Boarding Time</span>
                    <span className="info-val">{result.departure}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Chart Status</span>
                    <span className="info-val green">{result.chart_status}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}