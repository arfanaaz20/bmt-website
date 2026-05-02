

import React, { useState } from "react";

const S = {
  root: { display: "flex", height: "100vh", fontFamily: "'DM Sans', sans-serif", background: "#eef1f8", overflow: "hidden" },

  left: { width: "50%", minWidth: "50%", background: "#eef1f8", display: "flex", flexDirection: "column", padding: "24px 20px", overflowY: "auto", zIndex: 10 },
  logo: { display: "flex", alignItems: "center", gap: 8, fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 20, color: "#1a1a2e", marginBottom: 20 },
  logoIcon: { width: 32, height: 32, background: "linear-gradient(135deg,#3b82f6,#6366f1)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 16 },

  card: { background: "#fff", borderRadius: 16, padding: "20px 20px 16px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", marginBottom: 12, position: "relative" },
  fromRow: { display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "#374151", marginBottom: 16, fontWeight: 500 },
  fromDrop: { background: "none", border: "none", fontSize: 14, fontWeight: 700, color: "#1a1a2e", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", outline: "none" },

  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 },
  inputBox: (active) => ({ border: `1.5px solid ${active ? "#3b82f6" : "#e5e7eb"}`, borderRadius: 10, padding: "11px 14px", cursor: "pointer", transition: "border .2s", background: "#fff" }),
  inputLabel: { display: "flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 4 },
  inputVal: (filled) => ({ fontSize: 13, color: filled ? "#1a1a2e" : "#9ca3af" }),

  actRow: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 },
  prefBtn: { display: "flex", alignItems: "center", gap: 5, background: "none", border: "1.5px solid #e5e7eb", borderRadius: 20, padding: "7px 14px", fontSize: 13, cursor: "pointer", color: "#374151", fontFamily: "'DM Sans', sans-serif" },
  btnGroup: { display: "flex", gap: 8 },
  btnCreate: { border: "1.5px solid #3b82f6", color: "#3b82f6", background: "#fff", borderRadius: 24, padding: "9px 18px", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" },
  btnAI: { background: "linear-gradient(135deg,#4f46e5,#7c3aed)", color: "#fff", border: "none", borderRadius: 24, padding: "9px 18px", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", gap: 5 },
  terms: { textAlign: "center", fontSize: 11, color: "#9ca3af", marginTop: 12 },
  termsA: { color: "#3b82f6", textDecoration: "none" },

  secTitle: { fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 700, color: "#1a1a2e", margin: "16px 0 12px" },
  emptyState: { background: "#fff", borderRadius: 16, padding: "32px 20px", textAlign: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" },
  emptyCirc: { width: 80, height: 80, borderRadius: "50%", background: "#dbeafe", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 },

  mapWrap: { flex: 1, position: "relative", overflow: "hidden" },
  mapIframe: { width: "100%", height: "100%", border: "none" },
  mapCtrl: { position: "absolute", right: 16, bottom: 80, display: "flex", flexDirection: "column", gap: 8 },
  mapBtn: { width: 40, height: 40, background: "#fff", border: "1px solid #e5e7eb", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 17, boxShadow: "0 2px 8px rgba(0,0,0,0.1)", color: "#374151" },

  overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center" },
  modal: { background: "#fff", borderRadius: 20, width: "min(800px,94vw)", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", boxShadow: "0 20px 60px rgba(0,0,0,0.2)", position: "relative" },
  mLeft: { padding: "36px 30px" },
  mRight: { background: "#f7f9ff", padding: "36px 30px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderLeft: "1px solid #e5e7eb" },
  mClose: { position: "absolute", top: 14, right: 16, background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9ca3af", width: 30, height: 30, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" },
  mTitle: { fontFamily: "'Sora',sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 6, color: "#1a1a2e" },
  mPerks: { display: "flex", gap: 14, marginBottom: 20, flexWrap: "wrap" },
  perk: { display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#6b7280" },
  emailInp: { width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 10, padding: "11px 14px", fontSize: 14, fontFamily: "'DM Sans',sans-serif", marginBottom: 10, outline: "none", boxSizing: "border-box" },
  contBtn: (ok) => ({ width: "100%", border: "none", borderRadius: 10, padding: 13, fontSize: 15, fontWeight: 600, fontFamily: "'DM Sans',sans-serif", marginBottom: 14, background: ok ? "#3b82f6" : "#d1d5db", color: "#fff", cursor: ok ? "pointer" : "not-allowed", transition: ".2s" }),
  divider: { display: "flex", alignItems: "center", gap: 10, marginBottom: 14, fontSize: 13, color: "#9ca3af" },
  divLine: { flex: 1, height: 1, background: "#e5e7eb" },
  socialBtn: (blue) => ({ width: "100%", border: blue ? "1.5px solid #1877F2" : "1.5px solid #e5e7eb", borderRadius: 10, padding: 11, fontSize: 14, fontFamily: "'DM Sans',sans-serif", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 9, background: "#fff", color: blue ? "#1877F2" : "#1a1a2e" }),
  mTerms: { fontSize: 11, color: "#9ca3af", marginTop: 10, lineHeight: 1.5 },
  mTermsA: { color: "#3b82f6", textDecoration: "none" },
  qrBox: { width: 140, height: 140, background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, position: "relative", overflow: "hidden" },
  qrGrid: { display: "grid", gridTemplateColumns: "repeat(10, 10px)", gap: 2, padding: 7 },
  qrIcon: { position: "absolute", width: 30, height: 30, background: "#4f46e5", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 12 },
  qrTitle: { fontFamily: "'Sora',sans-serif", fontSize: 13, fontWeight: 600, textAlign: "center", marginBottom: 12, color: "#1a1a2e" },
  qrStep: { display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "#6b7280", marginBottom: 7 },
  stepNum: { width: 18, height: 18, borderRadius: "50%", background: "#1a1a2e", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 600, flexShrink: 0 },

  // ── ITINERARY ── KEY FIX: use height:100vh and overflow:hidden everywhere
  itinSidebar: {
    width: 380,
    minWidth: 380,
    height: "100vh",
    borderRight: "1px solid #e5e7eb",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    overflow: "hidden",
    position: "relative",
    flexShrink: 0,
  },
  itinTopbar: { padding: "13px 16px", borderBottom: "1px solid #e5e7eb", background: "#f8f9ff", fontFamily: "'Sora',sans-serif", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 7, color: "#1a1a2e", flexShrink: 0 },
  aiPanel: { flex: 1, overflowY: "auto", padding: "14px 16px", paddingBottom: 180 },
  aiMsg: { background: "#f0f4ff", borderRadius: 12, padding: "11px 13px", fontSize: 13, lineHeight: 1.5, marginBottom: 14, borderLeft: "3px solid #4f46e5", color: "#1a1a2e" },
  thinkLabel: { fontSize: 12, fontWeight: 600, color: "#9ca3af", marginBottom: 8 },
  thinkItem: { display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: "#6b7280", marginBottom: 5 },
  progItem: { fontSize: 12, color: "#1a1a2e", fontWeight: 500, paddingLeft: 20, marginBottom: 5 },
  aiInputBar: {
    position: "absolute",
    bottom: 90,
    left: 0,
    right: 0,
    padding: "10px 14px",
    borderTop: "1px solid #e5e7eb",
    display: "flex",
    gap: 8,
    alignItems: "center",
    background: "#fff",
    zIndex: 10,
  },
  aiInp: { flex: 1, border: "1px solid #e5e7eb", borderRadius: 20, padding: "7px 13px", fontSize: 13, fontFamily: "'DM Sans',sans-serif", outline: "none" },
  aiSend: { width: 32, height: 32, borderRadius: "50%", background: "#3b82f6", color: "#fff", border: "none", cursor: "pointer", fontSize: 14, flexShrink: 0 },

  itinMain: { flex: 1, display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" },
  itinHeader: { padding: "12px 16px", borderBottom: "1px solid #e5e7eb", background: "#fff", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 },
  itinTabsRow: { display: "flex", borderBottom: "1px solid #e5e7eb", background: "#fff", flexShrink: 0 },
  itinTab: (a) => ({ padding: "11px 15px", fontSize: 13, color: a ? "#3b82f6" : "#6b7280", border: "none", background: "none", cursor: "pointer", borderBottom: a ? "2px solid #3b82f6" : "2px solid transparent", fontFamily: "'DM Sans',sans-serif" }),
  dayTabs: { display: "flex", gap: 8, padding: "11px 16px", borderBottom: "1px solid #e5e7eb", background: "#fff", flexWrap: "wrap", flexShrink: 0 },
  dayTab: (a) => ({ padding: "5px 13px", border: a ? "none" : "1px solid #e5e7eb", borderRadius: 20, fontSize: 12, background: a ? "#1a1a2e" : "#fff", color: a ? "#fff" : "#374151", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }),
  itinContent: { flex: 1, padding: 16, background: "#f8faff", overflowY: "auto" },
  dayCard: { background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "14px 16px", marginBottom: 12 },
  skel: (w, h = 11) => ({ width: w, height: h, background: "#f0f0f0", borderRadius: 4, margin: "5px 0" }),
  signinBar: { background: "#fff", borderTop: "1px solid #e5e7eb", padding: "11px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 13, color: "#6b7280", flexShrink: 0 },
  signinBarBtn: { background: "#3b82f6", color: "#fff", border: "none", borderRadius: 20, padding: "7px 18px", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" },
};

const QR = [1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1];

const MAP_URL = "https://maps.google.com/maps?q=world&t=m&z=3&output=embed&iwloc=near";

export default function TripPlanner() {
  const [view, setView]       = useState("planner"); // "planner" | "itinerary"
  const [modal, setModal]     = useState(false);
  const [email, setEmail]     = useState("");
  const [heading, setHeading] = useState("");
  const [duration, setDuration] = useState("");
  const [showDur, setShowDur] = useState(false);

  const fromCity = "Zirakpur";
  const toCity   = heading || "Florence";
  const emailOK  = email.includes("@") && email.includes(".");

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const doSignIn  = () => { closeModal(); };

  const startAI = () => setView("itinerary");
  const goBack  = () => setView("planner");

  /* ─── PLANNER SIDEBAR ─── */
  const PlannerLeft = (
    <div style={S.left}>
      <div style={S.logo}>
        <div style={S.logoIcon}>⇄</div>
        Trip.Planner
      </div>

      <div style={S.card}>
        <div style={S.fromRow}>
          Starting from
          <select style={S.fromDrop} defaultValue="Zirakpur">
            {["Any","Zirakpur","Delhi","Mumbai","Amritsar"].map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        <div style={S.grid2}>
          <div style={S.inputBox(!!heading)}>
            <div style={S.inputLabel}><span>📍</span> Heading to</div>
            <input
              type="text"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              placeholder="Country / City / Landmark"
              style={{
                border: "none", outline: "none", width: "100%",
                fontSize: 13, fontFamily: "'DM Sans', sans-serif",
                background: "transparent", color: "#1a1a2e",
              }}
            />
          </div>

          <div
            style={{ ...S.inputBox(!!duration), position: "relative" }}
            onClick={() => setShowDur(p => !p)}
          >
            <div style={S.inputLabel}><span>📅</span> Date/Duration</div>
            <div style={S.inputVal(!!duration)}>{duration || "Select"}</div>
            {showDur && (
              <div style={{
                position: "absolute", top: "100%", left: 0, right: 0, zIndex: 50,
                background: "#fff", border: "1px solid #e5e7eb", borderRadius: 10,
                padding: 8, boxShadow: "0 4px 20px rgba(0,0,0,0.1)", marginTop: 4,
              }}>
                {["1 Day","2–3 Days","4–7 Days","1–2 Weeks","2+ Weeks"].map(d => (
                  <div
                    key={d}
                    onClick={e => { e.stopPropagation(); setDuration(d); setShowDur(false); }}
                    style={{ padding: "7px 12px", cursor: "pointer", borderRadius: 6, fontSize: 13, color: "#374151" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#f0f4ff"}
                    onMouseLeave={e => e.currentTarget.style.background = ""}
                  >{d}</div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={S.actRow}>
          <button style={S.prefBtn}>♡ Preferences ∨</button>
          <div style={S.btnGroup}>
            <button style={S.btnCreate} onClick={openModal}>Create It Myself</button>
            <button style={S.btnAI} onClick={startAI}>✦ Plan a Trip with AI</button>
          </div>
        </div>
        <div style={S.terms}>
          By proceeding, you agree to <a style={S.termsA} href="#">Trip.Planner Terms of Use</a>
        </div>
      </div>

      <div style={S.secTitle}>My Itineraries</div>
      <div style={S.emptyState}>
        <div style={S.emptyCirc}>🔍</div>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Please sign in to view my itineraries</div>
        <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 14 }}>Why not try creating a new itinerary?</div>
        <button style={{ ...S.btnAI, margin: "0 auto" }} onClick={openModal}>Sign In</button>
      </div>
    </div>
  );

  /* ─── ITINERARY SIDEBAR ─── */
  const ItinLeft = (
    <div style={S.itinSidebar}>
      <div style={S.itinTopbar}>
        ✦ AI Assistant
        <button
          onClick={goBack}
          style={{
            marginLeft: "auto", background: "none", border: "none",
            fontSize: 20, cursor: "pointer", color: "#9ca3af", lineHeight: 1,
          }}
        >←</button>
      </div>
      <div style={S.aiPanel}>
        <div style={S.aiMsg}>
          I want to travel to {toCity}, departing from {fromCity}.
          For {duration || "1 day"}. Please help me design a detailed travel itinerary.
        </div>
        <div style={S.thinkLabel}>DeepDive Thinking ∧</div>
        {["Analyze User Preference","Retrieve Resources","Searched Top Attractions"].map(t => (
          <div key={t} style={S.thinkItem}><span style={{ color: "#22c55e" }}>✓</span> {t}</div>
        ))}
        <div style={S.progItem}>Selected 20 recommended attractions</div>
        <div style={S.thinkItem}><span style={{ color: "#22c55e" }}>✓</span> Searched Hotels</div>
        <div style={S.progItem}>Selected 20 recommended stays</div>
        <div style={S.thinkItem}>
          <div style={{
            width: 13, height: 13, border: "2px solid #e5e7eb",
            borderTopColor: "#4f46e5", borderRadius: "50%",
            animation: "spin .6s linear infinite",
          }} />
          Transportation Overview
        </div>
        <div style={S.progItem}>Searching routes from {fromCity} to {toCity}</div>
      </div>
      <div style={S.aiInputBar}>
        <input style={S.aiInp} placeholder="Ask anything about the trip" />
        <button style={S.aiSend}>➤</button>
      </div>
    </div>
  );

  /* ─── ITINERARY MAIN ─── */
  const ItinMain = (
    <div style={S.itinMain}>
      <div style={S.itinHeader}>
        <span style={{ fontFamily: "'Sora',sans-serif", fontSize: 14, fontWeight: 600 }}>
          {duration || "1-day"} Itinerary in {toCity}
        </span>
        <span style={{ fontSize: 12, color: "#9ca3af", border: "1px solid #e5e7eb", borderRadius: 8, padding: "3px 10px", cursor: "pointer" }}>
          📅 Set departure date
        </span>
      </div>
      <div style={S.itinTabsRow}>
        <button style={S.itinTab(true)}>Itinerary</button>
        <button style={S.itinTab(false)}>Ideas</button>
      </div>
      <div style={S.dayTabs}>
        {["Overview","To be planned","Day 1"].map(t => (
          <button key={t} style={S.dayTab(false)}>{t}</button>
        ))}
        <button style={S.dayTab(true)}>Notes</button>
        <button style={{ width: 26, height: 26, borderRadius: "50%", background: "#dbeafe", color: "#3b82f6", border: "none", cursor: "pointer", fontSize: 16 }}>+</button>
      </div>
      <div style={S.itinContent}>
        <div style={S.dayCard}>
          <div style={{ fontFamily: "'Sora',sans-serif", fontSize: 14, fontWeight: 600, marginBottom: 8, display: "flex", justifyContent: "space-between" }}>
            Day 1 · Edit title <span style={{ fontSize: 11, color: "#3b82f6", cursor: "pointer", fontWeight: 400 }}>···</span>
          </div>
          <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 8 }}>Add notes</div>
          <div style={S.skel("80%")} /><div style={S.skel("60%")} />
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <div style={S.skel("30%", 32)} />
            <div style={S.skel("30%", 32)} />
            <div style={S.skel("30%", 32)} />
          </div>
        </div>
        <div style={S.dayCard}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Notes</div>
          <div style={S.skel("80%")} /><div style={S.skel("60%")} />
        </div>
      </div>
      <div style={S.signinBar}>
        <span>Sign in to save and edit your itinerary</span>
        <button style={S.signinBarBtn} onClick={openModal}>Sign in</button>
      </div>
    </div>
  );

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        body{margin:0;overflow:hidden}
        @keyframes spin{to{transform:rotate(360deg)}}
        input::placeholder{color:#9ca3af}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-thumb{background:#e5e7eb;border-radius:4px}
      `}</style>

      <div style={S.root}>
        {/* LEFT */}
        {view === "planner" ? PlannerLeft : ItinLeft}

        {/* RIGHT */}
        {view === "planner" ? (
          <div style={S.mapWrap}>
            <iframe
              title="World Map"
              style={S.mapIframe}
              src={MAP_URL}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div style={S.mapCtrl}>
              {["⊞","◎","+","−"].map((ic, i) => (
                <button key={i} style={S.mapBtn}>{ic}</button>
              ))}
            </div>
          </div>
        ) : ItinMain}
      </div>

      {/* ══ SIGN IN MODAL ══ */}
      {modal && (
        <div style={S.overlay} onClick={e => e.target === e.currentTarget && closeModal()}>
          <div style={S.modal}>
            <button style={S.mClose} onClick={closeModal}>✕</button>

            {/* Left */}
            <div style={S.mLeft}>
              <div style={S.mTitle}>Sign in / Register</div>
              <div style={S.mPerks}>
                <div style={S.perk}>🏅 Membership rewards</div>
                <div style={S.perk}>📋 Manage bookings with ease</div>
              </div>
              <input
                style={S.emailInp}
                type="email"
                placeholder="Please enter an email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button style={S.contBtn(emailOK)} onClick={emailOK ? doSignIn : undefined}>
                Continue with email
              </button>
              <div style={S.divider}>
                <div style={S.divLine} /> or <div style={S.divLine} />
              </div>

              {/* Google */}
              <button style={S.socialBtn(false)} onClick={doSignIn}>
                <svg width="17" height="17" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              {/* Apple */}
              <button style={S.socialBtn(false)} onClick={doSignIn}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Continue with Apple
              </button>

              {/* Facebook */}
              <button style={S.socialBtn(true)} onClick={doSignIn}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Continue with Facebook
              </button>

              <div style={S.mTerms}>
                By signing in, you agree to Trip.com{" "}
                <a style={S.mTermsA} href="#">Terms</a> and{" "}
                <a style={S.mTermsA} href="#">Privacy Statement</a>.
              </div>
            </div>

            {/* Right: QR */}
            <div style={S.mRight}>
              <div style={S.qrBox}>
                <div style={S.qrGrid}>
                  {QR.map((c, i) => (
                    <div key={i} style={{ width: 10, height: 10, borderRadius: 1, background: c ? "#1a1a2e" : "#fff" }} />
                  ))}
                </div>
                <div style={S.qrIcon}>T.</div>
              </div>
              <div style={S.qrTitle}>Use the BirdMyTrip app<br />to sign in with a QR code</div>
              {[
                "Open the BirdMyTrip app",
                <><strong>Account</strong> pe jao</>,
                <>⊡ tap karo ya ⚙ <strong>Settings &gt; Scan QR code</strong></>,
              ].map((t, i) => (
                <div key={i} style={S.qrStep}>
                  <div style={S.stepNum}>{i + 1}</div>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}