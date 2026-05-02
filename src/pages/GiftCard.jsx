import { useState } from "react";

const giftCards = [
  { id: 1, title: "Wedding Gift Card", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80", tag: "OCCASIONS", color: "#d4a017" },
  { id: 2, title: "Wedding Gift Envelope", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80", tag: "OCCASIONS", color: "#c0392b" },
  { id: 3, title: "Wedding Gift Box", image: "https://images.unsplash.com/photo-1513201099705-a9746072f1db?w=400&q=80", tag: "OCCASIONS", color: "#e67e22" },
  { id: 4, title: "Best Wishes Gift Card", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", tag: "FESTIVALS", color: "#2980b9" },
  { id: 5, title: "Birthday Card", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80", tag: "OCCASIONS", color: "#e74c3c" },
  { id: 6, title: "Thank You Gift Card", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80", tag: "LOVED ONES", color: "#16a085" },
  { id: 7, title: "Farewell / Retirement", image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80", tag: "OCCASIONS", color: "#8e44ad" },
  { id: 8, title: "Congratulations Card", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80", tag: "OCCASIONS", color: "#d4a017" },
  { id: 9, title: "Sister Travel Card", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80", tag: "LOVED ONES", color: "#c0392b" },
];

const steps = [
  { step: "1", title: "Go to Gift Cards page", desc: 'Click on "Add Gift Card" option.' },
  { step: "2", title: "Enter Card Details", desc: "Enter the 16-digit card number & 6-digit GC PIN." },
  { step: "3", title: "Add to Wallet", desc: 'Tap on "Add to My Wallet".' },
  { step: "4", title: "Accept & Confirm", desc: 'Review details and click "Accept & Add to My Wallet".' },
];

const redeemSteps = [
  { step: "1", title: "Select Gift Card", desc: "On payment page, select Gift Card as payment option." },
  { step: "2", title: "Auto-Apply", desc: "If linked, card appears automatically — no PIN needed." },
  { step: "3", title: "Click Apply", desc: "Click Apply and your balance is used instantly." },
];

const purchaseSteps = [
  { icon: "🎁", title: "Choose Card", desc: "Pick the gift card you want." },
  { icon: "💰", title: "Enter Amount", desc: "Set value & quantity." },
  { icon: "📦", title: "Delivery Mode", desc: "WhatsApp, Email or Courier." },
  { icon: "💳", title: "Make Payment", desc: "Pay securely." },
  { icon: "✅", title: "Gift Delivered", desc: "Sent to your recipient." },
];

// ✅ HOW TO USE PAGE COMPONENT
function HowToUsePage({ onBack }) {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", background: "#f5f6fa" }}>
      {/* BANNER */}
      <div
        style={{
          // background: "linear-gradient(135deg, #8B0000 0%, #c0392b 50%, #8B0000 100%)",
          background: "linear-gradient(135deg, #8B0000 0%, #c0392b 50%, #8B0000 100%)",
          color: "#fff",
          padding: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "4px solid #d4a017",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <button
            onClick={onBack}
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.4)",
              color: "#fff",
              borderRadius: 8,
              padding: "6px 16px",
              fontSize: 13,
              cursor: "pointer",
              marginBottom: 12,
              fontWeight: 600,
            }}
          >
            ← Back
          </button>
          <div style={{ fontSize: 11, opacity: 0.8, letterSpacing: 1, marginBottom: 4 }}>
            BIRDMYTRIP GIFT CARDS
          </div>
          <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700 }}>
            Everything You Need to Know.
          </h1>
          <p style={{ margin: "6px 0 0", opacity: 0.85, fontSize: 14 }}>
            Gift cards make travel bookings easy and rewarding.
          </p>
        </div>
        <div style={{ fontSize: 48 }}>🎁</div>
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem" }}>
        {/* ADD GIFT CARD SECTION */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            border: "1px solid #eee",
            padding: "2rem",
            marginBottom: 24,
          }}
        >
          <h2 style={{ color: "#1a73e8", fontSize: 18, fontWeight: 700, margin: "0 0 16px" }}>
            Add Your Gift Card to Your Account
          </h2>
          <div
            style={{
              background: "#fff8e1",
              border: "1px solid #ffe082",
              borderRadius: 10,
              padding: "14px 16px",
              marginBottom: 20,
              fontSize: 14,
            }}
          >
            <strong>For offer Gift Cards, no action required!</strong>
            <br />
            <span style={{ color: "#555", fontSize: 13 }}>
              Issued through offers or promotions like Birthday or Anniversary Gift Card. Once claimed, they are automatically linked to your BirdMyTrip account.
            </span>
          </div>

          <div
            style={{
              background: "#f0f4ff",
              border: "1px solid #c5d0f0",
              borderRadius: 10,
              padding: "12px 16px",
              marginBottom: 20,
              fontSize: 13,
              color: "#333",
            }}
          >
            <strong>For Purchased Gift Cards, add to your account in 4 Easy Steps!</strong>
            <br />
            <span style={{ color: "#555" }}>
              Purchased directly on BMT or via 3rd party platforms. These require manual addition using both Gift Card Number and PIN.
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 16,
            }}
          >
            {steps.map((s) => (
              <div
                key={s.step}
                style={{
                  background: "#f8f9ff",
                  border: "1px solid #e3e8f8",
                  borderRadius: 12,
                  padding: "1.25rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "#1a73e8",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px",
                  }}
                >
                  {s.step}
                </div>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 6, color: "#1a1a2e" }}>
                  {s.title}
                </div>
                <div style={{ fontSize: 12, color: "#666" }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* REDEEM SECTION */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            border: "1px solid #eee",
            padding: "2rem",
            marginBottom: 24,
          }}
        >
          <h2 style={{ color: "#1a73e8", fontSize: 18, fontWeight: 700, margin: "0 0 8px" }}>
            Redeem Your Gift Card While Booking
          </h2>
          <p style={{ color: "#555", fontSize: 13, margin: "0 0 16px" }}>
            You can use your Gift Card balance to pay for flights, hotels, holidays, or bus bookings.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 16,
              marginBottom: 20,
            }}
          >
            {redeemSteps.map((s) => (
              <div
                key={s.step}
                style={{
                  background: "#f0fff8",
                  border: "1px solid #c3e6d8",
                  borderRadius: 12,
                  padding: "1.25rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "#0f6e56",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px",
                  }}
                >
                  {s.step}
                </div>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 6, color: "#1a1a2e" }}>
                  {s.title}
                </div>
                <div style={{ fontSize: 12, color: "#666" }}>{s.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: 13, color: "#555", marginBottom: 8 }}>
            <strong style={{ color: "#1a1a2e" }}>Using Your Gift Card is As Easy As 1...2...3!</strong>
          </div>
          <div style={{ fontSize: 13, color: "#555" }}>
            On the payments page, select the gift card option → tap the card you want to use and enter the amount → click Continue and the gift card has been redeemed.
          </div>
        </div>

        {/* COMPLETE PAYMENT */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            border: "1px solid #eee",
            padding: "2rem",
            marginBottom: 24,
          }}
        >
          <h2 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 10px", color: "#1a1a2e" }}>
            Complete Your Payment
          </h2>
          <p style={{ fontSize: 13, color: "#555", margin: "0 0 14px" }}>
            If your Gift Card doesn't cover the full booking amount, pay the remaining balance using:
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
            {["Credit/Debit Card", "Net Banking", "UPI", "Wallet or EMI"].map((opt) => (
              <span
                key={opt}
                style={{
                  background: "#f0f4ff",
                  border: "1px solid #c5d0f0",
                  borderRadius: 6,
                  padding: "5px 14px",
                  fontSize: 13,
                  color: "#2c3e8c",
                  fontWeight: 600,
                }}
              >
                {opt}
              </span>
            ))}
          </div>

          <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 16px", color: "#1a1a2e" }}>
            For Purchasing Gift Cards on BMT:
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 12,
            }}
          >
            {purchaseSteps.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "#fafbff",
                  border: "1px solid #e3e8f0",
                  borderRadius: 10,
                  padding: "14px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4, color: "#1a1a2e" }}>
                  {s.title}
                </div>
                <div style={{ fontSize: 11, color: "#777" }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ADDITIONAL INFO */}
        <div
          style={{
            background: "#f8f9fa",
            borderRadius: 12,
            border: "1px solid #e8e8e8",
            padding: "1.5rem",
            marginBottom: 24,
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14, color: "#1a1a2e" }}>
            Additional Information
          </div>
          {[
            "Gift Cards are valid for 365 days from the date of issuance (unless stated otherwise).",
            "You can use up to 3 Gift Cards in a single booking.",
            "Check your balance anytime under 'Check Balance' tab in Gift Cards.",
            "Promo Gift Cards are auto-linked and do not require a PIN or manual addition.",
          ].map((info, i) => (
            <div key={i} style={{ fontSize: 13, color: "#555", display: "flex", gap: 8, marginBottom: 8 }}>
              <span style={{ color: "#1a73e8", flexShrink: 0 }}>•</span>
              {info}
            </div>
          ))}
        </div>

        {/* ICICI BANNER */}
        <div
          style={{
            background: "linear-gradient(135deg, #e8f0fe, #d4e4fc)",
            border: "1px solid #b8d4f8",
            borderRadius: 12,
            padding: "1.25rem 1.5rem",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div style={{ fontSize: 36 }}>🏦</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a2e", marginBottom: 4 }}>
              Gift Cards for BirdMyTrip ICICI Bank Credit Card Automatically Added to Account.
            </div>
            <div style={{ fontSize: 13, color: "#555" }}>
              The gift cards issued against your joining/renewal fee payment will be automatically added to your BirdMyTrip wallet.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ✅ MAIN PAGE
export default function GiftCardPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [showBalanceModal, setShowBalanceModal] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardPin, setCardPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [activeTab, setActiveTab] = useState("BMT");
  const [searchQuery, setSearchQuery] = useState("");
  const [showHowToUse, setShowHowToUse] = useState(false); // ✅ NEW STATE

  // ✅ Show HowToUse page
  if (showHowToUse) {
    return <HowToUsePage onBack={() => setShowHowToUse(false)} />;
  }

  const categories = ["ALL", "OCCASIONS", "FESTIVALS", "LOVED ONES"];

  const filteredCards = giftCards.filter((card) => {
    const matchCat = activeCategory === "ALL" || card.tag === activeCategory;
    const matchSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", background: "#f5f6fa" }}>
      {/* HEADER BANNER */}
      <div
        style={{
          // background: "linear-gradient(135deg, #8B0000 0%, #c0392b 50%, #8B0000 100%)",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)",
          color: "#fff",
          padding: "2.5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          borderBottom: "4px solid #d4a017",
        }}
      >
        <div style={{ maxWidth: 560 }}>
          <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 4, letterSpacing: 1 }}>
            BIRDMYTRIP GIFT CARDS
          </div>
          <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700, lineHeight: 1.3 }}>
            Wedding Gift Just Got Better
          </h1>
          <p style={{ margin: "8px 0 0", fontSize: 16, opacity: 0.9 }}>
            Personalize BirdMyTrip Gift Cards with Your Pictures
          </p>
          <button
            style={{
              marginTop: 20,
              // background: "#d4a017",
              background: "linear-gradient(90deg,#2563eb,#3b82f6)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 28px",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              letterSpacing: 0.5,
            }}
          >
            BOOK NOW
          </button>
        </div>
        <div
          style={{
            background: "rgba(255,255,255,0.12)",
            border: "2px solid rgba(255,255,255,0.3)",
            borderRadius: 16,
            padding: "1.5rem 2rem",
            textAlign: "center",
            minWidth: 200,
          }}
        >
          <div style={{ fontSize: 36 }}>🎁</div>
          <div style={{ fontWeight: 700, fontSize: 18, marginTop: 8 }}>Gift Cards</div>
          <div style={{ opacity: 0.8, fontSize: 13, marginTop: 4 }}>₹500 – ₹50,000</div>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div
        style={{
          display: "flex",
          gap: 0,
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          overflowX: "auto",
        }}
      >
        {[
          { icon: "💳", label: "Add Gift Card" },
          { icon: "📋", label: "My Gift Card" },
          { icon: "💰", label: "Check Balance" },
          { icon: "❓", label: "How To Use" }, // ✅
        ].map((action, i) => (
          <button
            key={i}
            onClick={() => {
              if (action.label === "Check Balance") setShowBalanceModal(true);
              if (action.label === "How To Use") setShowHowToUse(true); // ✅
            }}
            style={{
              flex: "1 1 120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "16px 12px",
              border: "none",
              borderRight: i < 3 ? "1px solid #eee" : "none",
              background: "transparent",
              cursor: "pointer",
              color: "#1a73e8",
              fontSize: 14,
              fontWeight: 600,
              whiteSpace: "nowrap",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#f0f7ff")}
            onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <span style={{ fontSize: 18 }}>{action.icon}</span>
            {action.label} ›
          </button>
        ))}
      </div>

      {/* ... rest of your page (sidebar + cards) ... */}
      <div style={{ display: "flex", gap: 0, padding: "2rem", maxWidth: 1200, margin: "0 auto" }}>
        {/* SIDEBAR */}
        <div style={{ width: 240, flexShrink: 0, marginRight: 24 }}>
          <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e8e8e8", padding: "1.25rem", marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ fontWeight: 700, fontSize: 15 }}>Refine Search</span>
              <button onClick={() => setActiveCategory("ALL")} style={{ background: "none", border: "none", color: "#1a73e8", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>CLEAR</button>
            </div>
            <div style={{ fontWeight: 600, fontSize: 13, color: "#555", marginBottom: 12 }}>Category</div>
            {categories.map((cat) => (
              <label key={cat} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 16, cursor: "pointer" }}>
                <div onClick={() => setActiveCategory(cat)} style={{ width: 18, height: 18, borderRadius: "50%", border: `2px solid ${activeCategory === cat ? "#1a73e8" : "#ccc"}`, background: activeCategory === cat ? "#1a73e8" : "#fff", marginTop: 2, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
                  {activeCategory === cat && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />}
                </div>
                <div onClick={() => setActiveCategory(cat)}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#222" }}>{cat}</div>
                  {cat === "OCCASIONS" && <div style={{ fontSize: 12, color: "#777", marginTop: 2 }}>Select cards for special occasions for your loved ones</div>}
                  {cat === "FESTIVALS" && <div style={{ fontSize: 12, color: "#777", marginTop: 2 }}>Select cards for every special festival that you celebrate</div>}
                  {cat === "LOVED ONES" && <div style={{ fontSize: 12, color: "#777", marginTop: 2 }}>Travel specific cards</div>}
                </div>
              </label>
            ))}
          </div>
          <div style={{ background: "#1a1a2e", borderRadius: 12, padding: "1.25rem", color: "#fff" }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>Looking for Corporate Gifting?</div>
            <div style={{ fontSize: 12, color: "#aaa", marginBottom: 14 }}>Get special discounts on bulk orders.</div>
            <button style={{ background: "#1a73e8", color: "#fff", border: "none", borderRadius: 6, padding: "8px 16px", fontSize: 13, fontWeight: 700, cursor: "pointer", width: "100%" }}>START HERE</button>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: 20 }}>
            <input
              type="text"
              placeholder="Search gift cards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1.5px solid #e0e0e0", fontSize: 15, outline: "none", boxSizing: "border-box", background: "#fff" }}
            />
          </div>
          <h2 style={{ margin: "0 0 20px", fontSize: 22, fontWeight: 700, color: "#1a1a2e" }}>Gift Cards</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 20 }}>
            {filteredCards.map((card) => (
              <div
                key={card.id}
                style={{ background: "#fff", borderRadius: 14, overflow: "hidden", border: "1px solid #eee", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)"; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
              >
                <div style={{ height: 140, background: `linear-gradient(135deg, ${card.color}dd, ${card.color}88)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, position: "relative" }}>
                  <img src={card.image} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0, opacity: 0.7 }} onError={(e) => { e.target.style.display = "none"; }} />
                  <div style={{ position: "absolute", top: 8, right: 8, background: "rgba(255,255,255,0.9)", borderRadius: 6, padding: "2px 8px", fontSize: 9, fontWeight: 700, color: "#555", letterSpacing: 0.5 }}>{card.tag}</div>
                  <div style={{ position: "absolute", bottom: 8, left: 8, background: "rgba(0,0,0,0.5)", borderRadius: 6, padding: "2px 8px", fontSize: 10, color: "#fff" }}>Bird<span style={{ color: "#e74c3c", fontWeight: 900 }}>MY</span>Trip</div>
                </div>
                <div style={{ padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 700, fontSize: 14, color: "#1a1a2e" }}>{card.title}</span>
                  <span style={{ color: "#1a73e8", fontSize: 18 }}>›</span>
                </div>
              </div>
            ))}
          </div>
          {filteredCards.length === 0 && (
            <div style={{ textAlign: "center", padding: "3rem", color: "#888" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
              <p>No gift cards found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </div>

      {/* CHECK BALANCE MODAL */}
      {showBalanceModal && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }} onClick={(e) => e.target === e.currentTarget && setShowBalanceModal(false)}>
          <div style={{ background: "#fff", borderRadius: 16, padding: "2rem", width: 480, maxWidth: "90vw", boxShadow: "0 20px 60px rgba(0,0,0,0.25)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Check Gift Card Balance</h2>
              <button onClick={() => setShowBalanceModal(false)} style={{ background: "#f0f0f0", border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontSize: 16 }}>✕</button>
            </div>
            <div style={{ display: "flex", background: "#f5f5f5", borderRadius: 10, padding: 4, marginBottom: 20 }}>
              {["BMT", "e-Pay"].map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{ flex: 1, padding: "10px 0", borderRadius: 8, border: "none", fontWeight: 700, fontSize: 14, cursor: "pointer", background: activeTab === tab ? "#fff" : "transparent", color: activeTab === tab ? "#1a73e8" : "#888", boxShadow: activeTab === tab ? "0 2px 8px rgba(0,0,0,0.1)" : "none", transition: "all 0.2s" }}>
                  Check {tab === "BMT" ? "BirdMyTrip" : "BMT e-Pay"} Gift Card Balance
                </button>
              ))}
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, border: "1.5px solid #e0e0e0", borderRadius: 10, padding: "12px 16px", marginBottom: 12, background: "#fafafa" }}>
                <span style={{ fontSize: 18 }}>💳</span>
                <input type="text" placeholder="ENTER 16-DIGIT NUMBER" value={cardNumber} onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))} style={{ flex: 1, border: "none", outline: "none", fontSize: 14, background: "transparent", letterSpacing: 1 }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, border: "1.5px solid #e0e0e0", borderRadius: 10, padding: "12px 16px", background: "#fafafa" }}>
                <span style={{ fontSize: 18 }}>🔐</span>
                <input type={showPin ? "text" : "password"} placeholder="ENTER 6 DIGIT GC PIN" value={cardPin} onChange={(e) => setCardPin(e.target.value.replace(/\D/g, "").slice(0, 6))} style={{ flex: 1, border: "none", outline: "none", fontSize: 14, background: "transparent", letterSpacing: 2 }} />
                <button onClick={() => setShowPin(!showPin)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "#888" }}>{showPin ? "🙈" : "👁️"}</button>
              </div>
            </div>
            <button style={{ width: "100%", padding: "14px 0", borderRadius: 10, border: "none", background: cardNumber.length === 16 && cardPin.length === 6 ? "#1a73e8" : "#b0c4de", color: "#fff", fontWeight: 700, fontSize: 15, cursor: cardNumber.length === 16 && cardPin.length === 6 ? "pointer" : "not-allowed", transition: "background 0.2s" }}>
              CHECK BALANCE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}