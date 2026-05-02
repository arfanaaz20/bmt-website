import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./HotelDetails.css";
import { useLocation } from "react-router-dom";

const REVIEWS = [
  {
    name: "Rahul Sharma",
    avatar: "RS",
    rating: 5,
    date: "March 2025",
    comment:
      "Absolutely stunning property! The rooms were immaculate, service was top-notch, and the breakfast buffet was incredible. Will definitely return!",
    tags: ["Great Service", "Clean Rooms"],
  },
  {
    name: "Priya Mehta",
    avatar: "PM",
    rating: 4,
    date: "February 2025",
    comment:
      "Loved the ambiance and the staff was very welcoming. Pool area was beautiful. Minor issue with AC but was resolved quickly.",
    tags: ["Great Ambiance", "Helpful Staff"],
  },
  {
    name: "Arjun Kapoor",
    avatar: "AK",
    rating: 5,
    date: "January 2025",
    comment:
      "Perfect for our anniversary. The suite view was breathtaking and the in-room dining was world class. Highly recommended!",
    tags: ["Romantic", "Amazing View"],
  },
  {
    name: "Sneha Rao",
    avatar: "SR",
    rating: 4,
    date: "December 2024",
    comment:
      "Great value for money. The spa was phenomenal and the gym had all the equipment I needed. Parking was a bit tight though.",
    tags: ["Value for Money", "Great Spa"],
  },
];

const ROOMS = [
  {
    name: "Deluxe Room",
    desc: "King Bed • AC • City View • Free WiFi",
    price: 2500,
    icon: "🛏️",
    badge: "Best Seller",
    badgeColor: "#2563eb",
    perks: ["Free Cancellation", "Breakfast Included"],
  },
  {
    name: "Premium Room",
    desc: "Queen Bed • AC • Garden View • Balcony",
    price: 3500,
    icon: "🌿",
    badge: "Popular",
    badgeColor: "#16a34a",
    perks: ["Free Cancellation", "Late Checkout"],
  },
  {
    name: "Suite Room",
    desc: "King Bed • Pool View • Jacuzzi • Butler Service",
    price: 4500,
    icon: "👑",
    badge: "Luxury",
    badgeColor: "#b45309",
    perks: ["Free Cancellation", "Airport Pickup", "Breakfast Included"],
  },
  {
    name: "Presidential Suite",
    desc: "Super King • Panoramic View • Private Pool",
    price: 8500,
    icon: "🏆",
    badge: "Exclusive",
    badgeColor: "#7c3aed",
    perks: ["Fully Flexible", "All Meals", "Private Butler"],
  },
];

const AMENITIES = [
  { icon: "📶", label: "Free WiFi" },
  { icon: "🏊", label: "Swimming Pool" },
  { icon: "🅿️", label: "Free Parking" },
  { icon: "💆", label: "Spa & Wellness" },
  { icon: "🍽️", label: "Restaurant" },
  { icon: "🏋️", label: "Fitness Center" },
  { icon: "🍸", label: "Rooftop Bar" },
  { icon: "🛎️", label: "24/7 Concierge" },
  { icon: "❄️", label: "AC in All Rooms" },
  { icon: "🚗", label: "Airport Shuttle" },
  { icon: "👶", label: "Kids Play Area" },
  { icon: "🎰", label: "Business Center" },
];

const NEARBY = [
  { icon: "🚇", label: "Metro Station", dist: "500m", time: "6 min walk" },
  { icon: "🛍️", label: "Shopping Mall", dist: "1.2 km", time: "15 min walk" },
  { icon: "✈️", label: "International Airport", dist: "8 km", time: "20 min drive" },
  { icon: "🏛️", label: "Historical Monument", dist: "2 km", time: "25 min walk" },
  { icon: "🍕", label: "Restaurant Strip", dist: "300m", time: "4 min walk" },
  { icon: "🏥", label: "City Hospital", dist: "3 km", time: "10 min drive" },
];

const FAQS = [
  {
    q: "What is the check-in and check-out time?",
    a: "Check-in starts at 2:00 PM and check-out is by 11:00 AM. Early check-in and late check-out available on request.",
  },
  {
    q: "Is there free airport pickup?",
    a: "Airport pickup is available at ₹800. You can add this during booking or contact the hotel directly.",
  },
  {
    q: "Is breakfast included in the room price?",
    a: "Breakfast is optional and can be added for ₹500 per person per day. It includes a full buffet spread.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Free cancellation up to 24 hours before check-in. After that, one night's charge applies.",
  },
  {
    q: "Are pets allowed?",
    a: "We're sorry, pets are not allowed on the property for hygiene and guest comfort reasons.",
  },
  {
    q: "Is the pool open year-round?",
    a: "Yes! Our outdoor pool is open from 6 AM to 10 PM daily, all year round.",
  },
];

export default function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

 const location = useLocation();          // ✅ add
  const hotelFromState = location.state?.hotel;  // ✅ add
  const [hotel, setHotel] = useState(null);
  const [dates, setDates] = useState([null, null]);
  const [startDate, endDate] = dates;
  const [breakfast, setBreakfast] = useState(true);
  const [pickup, setPickup] = useState(false);
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [wishlist, setWishlist] = useState(false);
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  useEffect(() => {
  //   const fetchHotel = async () => {
  //     const res = await axios.get("https://bmtadmin.onrender.com/api/hotels/all");
  //     const found = res.data.find((h) => h._id === id);
  //     setHotel(found);
  //   };
  //   fetchHotel();
  // }, [id]);



  if (hotelFromState) {
    // 🔥 STATIC HOTEL CLICK
    console.log("STATIC DATA AAYA", hotelFromState);
    setHotel(hotelFromState);
  } else {
    // 🔥 API FLOW (same as before)
    const fetchHotel = async () => {
      const res = await axios.get("https://bmtadmin.onrender.com/api/hotels/all");
      const found = res.data.find((h) => h._id === id);
      setHotel(found);
    };
    fetchHotel();
  }
}, [id, hotelFromState]);


  const nights = useMemo(() => {
    if (!startDate || !endDate) return 1;
    const diff = (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 1;
  }, [startDate, endDate]);

  const basePrice = hotel ? (hotel.pricePerNight || ROOMS[selectedRoom].price) : ROOMS[selectedRoom].price;
  const extras = (breakfast ? 500 : 0) + (pickup ? 800 : 0);
  const totalPrice = hotel ? basePrice * nights * rooms + extras * nights : 0;
  const taxes = Math.round(totalPrice * 0.12);
  const grandTotal = totalPrice + taxes;

  if (!hotel)
    return (
      <div className="hd-loading">
        <div className="hd-spinner" />
        <p>Finding your perfect stay...</p>
      </div>
    );

  const image =
    hotel.image ||
    hotel.hotelImage ||
    hotel.hotelImages?.[0] ||
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&auto=format&fit=crop";

  const displayAmenities = showAllAmenities ? AMENITIES : AMENITIES.slice(0, 8);

  const avgRating = (REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <div className="hd-wrap">

      {/* ─── STICKY NAV ─── */}
      <nav className="hd-nav">
        <button className="hd-back" onClick={() => navigate(-1)}>
          <span></span> Back to results
        </button>
        <div className="hd-nav-tabs">
          {["overview", "rooms", "reviews", "location"].map((tab) => (
            <button
              key={tab}
              className={`hd-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tab);
                document.getElementById(`section-${tab}`)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <button className={`hd-wishlist ${wishlist ? "active" : ""}`} onClick={() => setWishlist(!wishlist)}>
          {wishlist ? "❤️" : "🤍"} Save
        </button>
      </nav>

      {/* ─── HERO GALLERY ─── */}
      <div className="hd-gallery">
        <img src={image} alt={hotel.hotelName} className="hd-hero-img" />
        <div className="hd-gallery-overlay">
          <span className="hd-gallery-count">📷 24 Photos</span>
        </div>
        <div className="hd-hero-badge">
          <span className="hd-verified">✅ Verified Property</span>
        </div>
      </div>

      <div className="hd-body">

        {/* ─── LEFT COLUMN ─── */}
        <div className="hd-main" id="section-overview">

          {/* HOTEL HEADER */}
          <div className="hd-card hd-hotel-header">
            <div className="hd-header-top">
              <div>
                <div className="hd-tags">
                  <span className="hd-tag hd-tag-blue">5 Star</span>
                  <span className="hd-tag hd-tag-green">Free Cancellation</span>
                  <span className="hd-tag hd-tag-orange">Couple Friendly</span>
                </div>
                <h1 className="hd-title">{hotel.hotelName}</h1>
                <p className="hd-location">
                  📍 {hotel.city || "City Centre"}, India
                  <a href="#" className="hd-map-link">View on Map →</a>
                </p>
              </div>
              <div className="hd-rating-block">
                <div className="hd-score">{avgRating}</div>
                <div className="hd-score-label">Excellent</div>
                <div className="hd-review-count">{REVIEWS.length * 47} reviews</div>
              </div>
            </div>

            <div className="hd-rating-bars">
              {[["Cleanliness", 92], ["Service", 88], ["Location", 95], ["Value", 85]].map(([label, val]) => (
                <div key={label} className="hd-rating-bar-row">
                  <span>{label}</span>
                  <div className="hd-bar-track">
                    <div className="hd-bar-fill" style={{ width: `${val}%` }} />
                  </div>
                  <span className="hd-bar-val">{(val / 20).toFixed(1)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="hd-card hd-highlights">
            <h2 className="hd-section-title">Why guests love this property</h2>
            <div className="hd-highlights-grid">
              {[
                { icon: "🏅", title: "Top Rated", sub: "In Top 5% of hotels in city" },
                { icon: "🌅", title: "Best Views", sub: "Panoramic cityscape views" },
                { icon: "🍛", title: "Award Winning Chef", sub: "Multi-cuisine restaurant" },
                { icon: "🔒", title: "Safe & Secure", sub: "24/7 security & CCTV" },
              ].map((h) => (
                <div key={h.title} className="hd-highlight-card">
                  <span className="hd-highlight-icon">{h.icon}</span>
                  <div>
                    <strong>{h.title}</strong>
                    <p>{h.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="hd-card">
            <h2 className="hd-section-title">About This Property</h2>
            <p className="hd-desc">
              {hotel.description ||
                `Welcome to ${hotel.hotelName}, a luxury retreat nestled in the heart of ${hotel.city || "the city"}. 
                This exquisite property blends contemporary elegance with warm Indian hospitality. 
                Whether you're here for business or leisure, our world-class amenities and dedicated staff 
                ensure an unforgettable experience. From our award-winning restaurant to our rejuvenating 
                spa, every detail has been crafted to exceed your expectations.`}
            </p>
          </div>

          {/* AMENITIES */}
          <div className="hd-card">
            <h2 className="hd-section-title">Amenities & Facilities</h2>
            <div className="hd-amenities-grid">
              {displayAmenities.map((a, i) => (
                <div key={i} className="hd-amenity">
                  <span>{a.icon}</span>
                  <span>{a.label}</span>
                </div>
              ))}
            </div>
            <button className="hd-show-more" onClick={() => setShowAllAmenities(!showAllAmenities)}>
              {showAllAmenities ? "Show Less ↑" : `+${AMENITIES.length - 8} More Amenities ↓`}
            </button>
          </div>

          {/* ROOMS */}
          <div className="hd-card" id="section-rooms">
            <h2 className="hd-section-title">Select Your Room</h2>
            <div className="hd-rooms">
              {ROOMS.map((room, i) => (
                <div
                  key={i}
                  className={`hd-room-card ${selectedRoom === i ? "selected" : ""}`}
                  onClick={() => setSelectedRoom(i)}
                >
                  <div className="hd-room-top">
                    <span className="hd-room-icon">{room.icon}</span>
                    <div>
                      <div className="hd-room-header">
                        <h3>{room.name}</h3>
                        <span className="hd-room-badge" style={{ background: room.badgeColor }}>
                          {room.badge}
                        </span>
                      </div>
                      <p className="hd-room-desc">{room.desc}</p>
                      <div className="hd-room-perks">
                        {room.perks.map((p, j) => (
                          <span key={j} className="hd-perk">✓ {p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hd-room-price">
                    <div>
                      <span className="hd-price-main">₹{room.price.toLocaleString()}</span>
                      <span className="hd-price-sub">/night</span>
                    </div>
                    <button className={`hd-select-btn ${selectedRoom === i ? "active" : ""}`}>
                      {selectedRoom === i ? "✓ Selected" : "Select"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* REVIEWS */}
          <div className="hd-card" id="section-reviews">
            <div className="hd-reviews-header">
              <h2 className="hd-section-title">Guest Reviews</h2>
              <div className="hd-avg-rating">
                <span className="hd-big-score">{avgRating}</span>
                <div>
                  <div className="hd-stars">{"⭐".repeat(5)}</div>
                  <span>{REVIEWS.length * 47} verified reviews</span>
                </div>
              </div>
            </div>
            <div className="hd-reviews-grid">
              {REVIEWS.map((r, i) => (
                <div key={i} className="hd-review-card">
                  <div className="hd-review-top">
                    <div className="hd-avatar">{r.avatar}</div>
                    <div>
                      <strong>{r.name}</strong>
                      <p className="hd-review-date">{r.date}</p>
                    </div>
                    <div className="hd-review-score">{"⭐".repeat(r.rating)}</div>
                  </div>
                  <p className="hd-review-text">{r.comment}</p>
                  <div className="hd-review-tags">
                    {r.tags.map((t, j) => (
                      <span key={j} className="hd-review-tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NEARBY */}
          <div className="hd-card" id="section-location">
            <h2 className="hd-section-title">Location & Nearby</h2>
            <div className="hd-map-placeholder">
              <span>🗺️ Map View — {hotel.city || "City"}</span>
            </div>
            <div className="hd-nearby-grid">
              {NEARBY.map((n, i) => (
                <div key={i} className="hd-nearby-item">
                  <span className="hd-nearby-icon">{n.icon}</span>
                  <div>
                    <strong>{n.label}</strong>
                    <p>{n.dist} · {n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* POLICIES */}
          <div className="hd-card hd-policies">
            <h2 className="hd-section-title">Hotel Policies</h2>
            <div className="hd-policy-grid">
              {[
                { icon: "🕑", label: "Check-in", val: "2:00 PM onwards" },
                { icon: "🕚", label: "Check-out", val: "11:00 AM" },
                { icon: "🐾", label: "Pets", val: "Not allowed" },
                { icon: "🚬", label: "Smoking", val: "Designated areas only" },
                { icon: "🎉", label: "Parties", val: "Not allowed" },
                { icon: "👨‍👩‍👧", label: "Extra Bed", val: "₹800/night (on request)" },
              ].map((p, i) => (
                <div key={i} className="hd-policy-item">
                  <span className="hd-policy-icon">{p.icon}</span>
                  <div>
                    <span className="hd-policy-label">{p.label}</span>
                    <span className="hd-policy-val">{p.val}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="hd-card">
            <h2 className="hd-section-title">Frequently Asked Questions</h2>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`hd-faq-item ${openFaq === i ? "open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="hd-faq-q">
                  <span>{faq.q}</span>
                  <span className="hd-faq-arrow">{openFaq === i ? "▲" : "▼"}</span>
                </div>
                {openFaq === i && <p className="hd-faq-a">{faq.a}</p>}
              </div>
            ))}
          </div>

        </div>

        {/* ─── RIGHT COLUMN — BOOKING BOX ─── */}
        <div className="hd-sidebar">
          <div className="hd-booking-card">
            <div className="hd-booking-header">
              <div>
                <span className="hd-strike">₹{(basePrice * 1.3).toFixed(0)}</span>
                <span className="hd-discount-badge">30% OFF</span>
              </div>
              <h3 className="hd-booking-price">₹{basePrice.toLocaleString()}<span>/night</span></h3>
              <p className="hd-taxes-note">+ taxes & fees</p>
            </div>

            <div className="hd-booking-form">
              <div className="hd-date-row">
                <div className="hd-date-field">
                  <label>Check-in</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setDates([date, endDate])}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Add date"
                    minDate={new Date()}
                  />
                </div>
                <div className="hd-date-divider">→</div>
                <div className="hd-date-field">
                  <label>Check-out</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setDates([startDate, date])}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="Add date"
                  />
                </div>
              </div>

              <div className="hd-guests-row">
                <div className="hd-counter-field">
                  <label>Guests</label>
                  <div className="hd-counter">
                    <button onClick={() => setGuests(Math.max(1, guests - 1))}>−</button>
                    <span>{guests}</span>
                    <button onClick={() => setGuests(Math.min(8, guests + 1))}>+</button>
                  </div>
                </div>
                <div className="hd-counter-field">
                  <label>Rooms</label>
                  <div className="hd-counter">
                    <button onClick={() => setRooms(Math.max(1, rooms - 1))}>−</button>
                    <span>{rooms}</span>
                    <button onClick={() => setRooms(Math.min(5, rooms + 1))}>+</button>
                  </div>
                </div>
              </div>

              <div className="hd-extras-section">
                <h4>Add-ons</h4>
                <label className="hd-extra-label">
                  <input type="checkbox" checked={breakfast} onChange={() => setBreakfast(!breakfast)} />
                  <div>
                    <span>🍳 Breakfast Buffet</span>
                    <small>Full spread · ₹500/day</small>
                  </div>
                  <strong>+₹500</strong>
                </label>
                <label className="hd-extra-label">
                  <input type="checkbox" checked={pickup} onChange={() => setPickup(!pickup)} />
                  <div>
                    <span>🚗 Airport Pickup</span>
                    <small>Sedan · AC · ₹800</small>
                  </div>
                  <strong>+₹800</strong>
                </label>
              </div>

              <div className="hd-price-breakdown">
                <div className="hd-price-row">
                  <span>₹{basePrice.toLocaleString()} × {nights} night{nights > 1 ? "s" : ""} × {rooms} room{rooms > 1 ? "s" : ""}</span>
                  <span>₹{(basePrice * nights * rooms).toLocaleString()}</span>
                </div>
                {breakfast && (
                  <div className="hd-price-row">
                    <span>Breakfast × {nights} day{nights > 1 ? "s" : ""}</span>
                    <span>₹{(500 * nights).toLocaleString()}</span>
                  </div>
                )}
                {pickup && (
                  <div className="hd-price-row">
                    <span>Airport Pickup</span>
                    <span>₹800</span>
                  </div>
                )}
                <div className="hd-price-row hd-tax-row">
                  <span>Taxes & Fees (12% GST)</span>
                  <span>₹{taxes.toLocaleString()}</span>
                </div>
                <div className="hd-price-total">
                  <span>Total Amount</span>
                  <strong>₹{grandTotal.toLocaleString()}</strong>
                </div>
              </div>

              <button
                className="hd-book-btn"
                onClick={() => navigate(`/book/${hotel._id}`, { state: { totalPrice: grandTotal } })}
              >
                Book Now — ₹{grandTotal.toLocaleString()}
              </button>

              <div className="hd-trust">
                <span>🔒 Secure Payment</span>
                <span>✅ Instant Confirmation</span>
                <span>💯 Best Price Guarantee</span>
              </div>
            </div>
          </div>

          {/* SUPPORT CARD */}
          <div className="hd-support-card">
            <span className="hd-support-icon">🎧</span>
            <div>
              <strong>Need help?</strong>
              <p>Talk to our travel experts</p>
            </div>
            <a href="tel:+918001234567" className="hd-call-btn">Call Now</a>
          </div>
        </div>

      </div>
    </div>
  );
}


















