// import "./Visa.css";
// import VisaCard from "./VisaCard";
// import { useLocation } from "react-router-dom";
// import { useState } from "react";

// const visaTypes = [
//   {
//     icon: "✈️",
//     title: "Tourist Visa",
//     desc: "Explore the world with our fast tourist visa service.",
//     points: [
//       "Single & multiple entry",
//       "Hotel & flight support",
//       "Travel insurance guidance",
//       "Fast approval assistance",
//     ],
//   },
//   {
//     icon: "💼",
//     title: "Business Visa",
//     desc: "Professional visa support for global business travel.",
//     points: [
//       "Meeting & conference visa",
//       "Invitation letter assistance",
//       "Priority processing",
//       "Multiple entry options",
//     ],
//   },
//   {
//     icon: "🎓",
//     title: "Student Visa",
//     desc: "Complete student visa support for abroad education.",
//     points: [
//       "University offer guidance",
//       "Financial document support",
//       "Embassy interview prep",
//       "Long-term visa assistance",
//     ],
//   },
//   {
//     icon: "👨‍👩‍👧",
//     title: "Family / Visit Visa",
//     desc: "Visit family members without stress.",
//     points: [
//       "Invitation letter help",
//       "Relationship proof guidance",
//       "Short & long-term stay",
//       "Quick documentation check",
//     ],
//   },
//   {
//     icon: "💍",
//     title: "Marriage / Partner Visa",
//     desc: "Settle abroad with spouse visa assistance.",
//     points: [
//       "Marriage proof support",
//       "Dependent visa filing",
//       "Legal documentation help",
//       "Long-term settlement guidance",
//     ],
//   },
//   {
//     icon: "🛂",
//     title: "Transit Visa",
//     desc: "Smooth transit visa processing for layovers.",
//     points: [
//       "Short stay permissions",
//       "Airport transit guidance",
//       "Fast-track processing",
//       "24×7 support",
//     ],
//   },
// ];

// const countries = [
//   { flag: "🇦🇪", name: "Dubai (UAE)", time: "3–5 Days", type: "E-Visa" },
//   { flag: "🇹🇭", name: "Thailand", time: "4–6 Days", type: "E-Visa" },
//   { flag: "🇸🇬", name: "Singapore", time: "5–7 Days", type: "Sticker" },
//   { flag: "🇲🇾", name: "Malaysia", time: "6–8 Days", type: "E-Visa" },
//   { flag: "🇬🇧", name: "United Kingdom", time: "10–15 Days", type: "Sticker" },
//   { flag: "🇺🇸", name: "United States", time: "15–30 Days", type: "Sticker" },
//   { flag: "🇨🇦", name: "Canada", time: "20–35 Days", type: "eTA / Visa" },
//   { flag: "🇦🇺", name: "Australia", time: "15–25 Days", type: "E-Visa" },
//   { flag: "🇪🇺", name: "Schengen Countries", time: "10–15 Days", type: "Sticker" },
// ];

// const documents = [
//   { icon: "🛂", label: "Passport & Photographs" },
//   { icon: "📋", label: "Visa Application Form" },
//   { icon: "✈️", label: "Flight & Hotel Bookings" },
//   { icon: "🏦", label: "Bank Statements" },
//   { icon: "🛡️", label: "Travel Insurance" },
//   { icon: "📩", label: "Invitation Letter" },
//   { icon: "📝", label: "Cover Letter" },
// ];

// const whyUs = [
//   { icon: "✅", label: "High Approval Rate" },
//   { icon: "⚡", label: "Fast Processing" },
//   { icon: "🧑‍💼", label: "Expert Consultants" },
//   { icon: "📞", label: "24×7 Support" },
//   { icon: "💰", label: "Transparent Pricing" },
//   { icon: "🌍", label: "Worldwide Coverage" },
// ];

// const steps = [
//   { step: "01", title: "Fill Application", desc: "Complete the online form in minutes." },
//   { step: "02", title: "Upload Documents", desc: "Submit required documents securely." },
//   { step: "03", title: "Expert Review", desc: "Our team reviews & submits your case." },
//   { step: "04", title: "Get Your Visa", desc: "Receive your visa approval on time." },
// ];

// const reviews = [
//   {
//     flag: "🇦🇪",
//     country: "United Arab Emirates",
//     title: "Quick & Smooth Visa",
//     text: "The experience was very nice. The customer care representative called me and asked for the missing documents. Got the visa much before expected!",
//     stars: 5,
//   },
//   {
//     flag: "🇬🇪",
//     country: "Georgia",
//     title: "Seamless Visa Process",
//     text: "Georgia visa is a bit difficult to get, but with this service all went very smoothly. Thanks a lot!",
//     stars: 5,
//   },
//   {
//     flag: "🇻🇳",
//     country: "Vietnam",
//     title: "Visa at Best Price",
//     text: "It was a great experience at best cost in the industry. Highly recommended for anyone planning to travel.",
//     stars: 5,
//   },
//   {
//     flag: "🇮🇩",
//     country: "Indonesia",
//     title: "Easy Process & Fast",
//     text: "It was a very smooth hassle-free experience at a reasonably priced company. Will definitely consider again for future travel.",
//     stars: 5,
//   },
// ];

// const faqs = [
//   {
//     q: "How long does visa processing take?",
//     a: "Processing time varies by country — from 3 days (Dubai) to 30+ days (US/Canada). We always aim to submit your application at the earliest.",
//   },
//   {
//     q: "What documents are generally required?",
//     a: "Typically: passport, photographs, bank statements, travel insurance, flight & hotel bookings, and a cover letter. Country-specific docs may vary.",
//   },
//   {
//     q: "Do you guarantee visa approval?",
//     a: "While we cannot guarantee approval (as the decision lies with the embassy), our 98%+ success rate reflects our expertise in preparing strong applications.",
//   },
//   {
//     q: "Can I apply for multiple countries at once?",
//     a: "Yes! We handle multi-country visa applications, especially for Schengen area travel. Contact our experts for a customised package.",
//   },
// ];

// export default function VisaSection() {
//   const location = useLocation();
//   const [destination, setDestination] = useState("");
//   const [departure, setDeparture] = useState("");
//   const [returnDate, setReturnDate] = useState("");
//   const [openFaq, setOpenFaq] = useState(null);
//   const [reviewIdx, setReviewIdx] = useState(0);
//   const [countryIdx, setCountryIdx] = useState(0);

//   if (location.pathname === "/" || location.pathname === "/home") {
//     return null;
//   }

//   const visibleReviews = reviews.slice(reviewIdx, reviewIdx + 3);
//   const visibleCountries = countries.slice(countryIdx, countryIdx + 4);

//   return (
//     <section className="visa-section">

//       {/* ── SEARCH HERO ── */}
//       <div className="visa-search-hero">
//         <h2 className="search-hero-title">Apply for a Visa : <span className="search-hero-blue">On Time, Powered by Experts</span></h2>
//         <div className="search-bar-wrap">
//           <div className="search-field dest-field">
//             <label className="search-label">SELECT DESTINATION</label>
//             <input
//               className="search-input"
//               type="text"
//               placeholder="Where are you going?"
//               value={destination}
//               onChange={(e) => setDestination(e.target.value)}
//             />
//           </div>
//           <div className="search-divider" />
//           <div className="search-field">
//             <label className="search-label">DATE OF DEPARTURE</label>
//             <input
//               className="search-input"
//               type="date"
//               value={departure}
//               onChange={(e) => setDeparture(e.target.value)}
//             />
//           </div>
//           <div className="search-divider" />
//           <div className="search-field">
//             <label className="search-label">DATE OF RETURN</label>
//             <input
//               className="search-input"
//               type="date"
//               value={returnDate}
//               onChange={(e) => setReturnDate(e.target.value)}
//             />
//           </div>
//         </div>
//         <button
//           className="search-btn"
//           onClick={() => {
//             if (destination) window.location.href = `/apply-visa?dest=${destination}`;
//           }}
//         >
//           SEARCH
//         </button>
//       </div>

//       {/* ── MOST VISITED COUNTRIES ── */}
//       <div className="visa-most-visited">
//         <div className="mv-header">
//           <h3 className="mv-title">Most-visited Countries</h3>
//           <div className="mv-arrows">
//             <button
//               className="mv-arrow"
//               onClick={() => setCountryIdx(Math.max(0, countryIdx - 1))}
//               disabled={countryIdx === 0}
//             >‹</button>
//             <button
//               className="mv-arrow"
//               onClick={() => setCountryIdx(Math.min(countries.length - 4, countryIdx + 1))}
//               disabled={countryIdx >= countries.length - 4}
//             >›</button>
//           </div>
//         </div>
//         <div className="mv-grid">
//           {visibleCountries.map((c, i) => (
//             <div className="mv-card" key={i} onClick={() => window.location.href = `/apply-visa?dest=${c.name}`}>
//               <div className="mv-card-top">
//                 <span className="mv-flag">{c.flag}</span>
//                 <span className="mv-type-badge">{c.type}</span>
//               </div>
//               <h4 className="mv-country-name">{c.name}</h4>
//               <p className="mv-green">Get your visa in {c.time}</p>
//               <p className="mv-sub">Quick & Easy Process</p>
//               <p className="mv-sub">Verified Experts Available</p>
//               <button className="mv-apply-btn">Apply Now →</button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── VISIT EUROPE ── */}
//       <div className="visa-europe">
//         <h3 className="mv-title">Visit Europe!</h3>
//         <div className="europe-grid">
//           {[
//             { flag: "🇫🇷", name: "France", date: "01 May", colors: ["#002395", "#EDEDED", "#ED2939"] },
//             { flag: "🇪🇸", name: "Spain", date: "01 May", colors: ["#AA151B", "#F1BF00", "#AA151B"] },
//             { flag: "🇫🇮", name: "Finland", date: "05 May", colors: ["#003580", "#FFFFFF", "#003580"] },
//             { flag: "🇩🇪", name: "Germany", date: "29 Apr", colors: ["#000000", "#DD0000", "#FFCE00"] },
//           ].map((c, i) => (
//             <div className="europe-card" key={i}>
//               <div
//                 className="europe-flag-art"
//                 style={{ background: `linear-gradient(135deg, ${c.colors[0]} 40%, ${c.colors[1]} 40%, ${c.colors[1]} 60%, ${c.colors[2]} 60%)` }}
//               >
//                 <span className="europe-type-badge">STICKER VISA</span>
//               </div>
//               <div className="europe-card-body">
//                 <h4 className="europe-name">{c.name}</h4>
//                 <p className="europe-date">Know your appointment date by {c.date}</p>
//                 <a href={`/apply-visa?dest=${c.name}`} className="europe-link">Apply Now →</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── CUSTOMER REVIEWS ── */}
//       <div className="visa-reviews">
//         <div className="mv-header">
//           <h3 className="mv-title">Customer Reviews</h3>
//           <div className="mv-arrows">
//             <button className="mv-arrow" onClick={() => setReviewIdx(Math.max(0, reviewIdx - 1))} disabled={reviewIdx === 0}>‹</button>
//             <button className="mv-arrow" onClick={() => setReviewIdx(Math.min(reviews.length - 3, reviewIdx + 1))} disabled={reviewIdx >= reviews.length - 3}>›</button>
//           </div>
//         </div>
//         <div className="reviews-grid">
//           {visibleReviews.map((r, i) => (
//             <div className="review-card" key={i}>
//               <div className="review-top">
//                 <span className="review-flag">{r.flag}</span>
//                 <span className="review-country">{r.country.toUpperCase()}</span>
//               </div>
//               <h4 className="review-title">{r.title}</h4>
//               <p className="review-text">{r.text}</p>
//               <div className="review-stars">{"★".repeat(r.stars)}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── WHY CHOOSE US ── */}
//       <div className="visa-why-section">
//         <h3 className="mv-title">Why Choose Us?</h3>
//         <div className="why-cards-grid">
//           <div className="why-big-card">
//             <div className="why-big-icon">👍</div>
//             <h4 className="why-big-stat">98%+</h4>
//             <p className="why-big-label">Approval Rate</p>
//             <p className="why-big-desc">We have processed over 2,00,000 visas with industry-leading approval rates.</p>
//           </div>
//           <div className="why-big-card">
//             <div className="why-big-icon">🧑‍💼</div>
//             <h4 className="why-big-stat">Dedicated</h4>
//             <p className="why-big-label">Visa Team</p>
//             <p className="why-big-desc">A specialised team of visa consultants assists you on every step of the process.</p>
//           </div>
//           <div className="why-big-card">
//             <div className="why-big-icon">💰</div>
//             <h4 className="why-big-stat">Transparent</h4>
//             <p className="why-big-label">Pricing</p>
//             <p className="why-big-desc">Clearly marked fare breakdowns ensure there are no hidden costs — ever.</p>
//           </div>
//         </div>
//       </div>

//       {/* ── HOW IT WORKS ── */}
//       <div className="visa-steps-wrap">
//         <h2 className="section-title">How It Works</h2>
//         <p className="section-sub">4 simple steps to get your visa</p>
//         <div className="steps-grid">
//           {steps.map((s, i) => (
//             <div className="step-card" key={i}>
//               <div className="step-number">{s.step}</div>
//               <h4 className="step-title">{s.title}</h4>
//               <p className="step-desc">{s.desc}</p>
//               {i < steps.length - 1 && <div className="step-arrow">→</div>}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── VISA TYPES ── */}
//       <div className="visa-service-shell">
//         <h2 className="section-title">Visa Types We Handle</h2>
//         <p className="section-sub">Expert assistance for every type of visa, start to finish.</p>
//         <div className="visa-grid">
//           {visaTypes.map((item, index) => (
//             <VisaCard key={index} {...item} />
//           ))}
//         </div>
//       </div>

//       <div className="visa-container">

//         {/* ── COUNTRIES & PROCESSING TIME ── */}
//         <div className="visa-countries">
//           <h2 className="section-title tc">Popular Destinations & Processing Time</h2>
//           <p className="section-sub tc">Estimated processing times from application submission</p>
//           <div className="country-list">
//             {countries.map((c, i) => (
//               <div className="country-card" key={i}>
//                 <div className="country-flag">{c.flag}</div>
//                 <div className="country-info">
//                   <strong>{c.name}</strong>
//                   <span className="country-time">⏱ {c.time}</span>
//                   <span className="country-badge">{c.type}</span>
//                 </div>
//                 <button className="country-btn" onClick={() => window.location.href = `/apply-visa?dest=${c.name}`}>
//                   Apply →
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ── DOCUMENTS ── */}
//         <div className="visa-docs">
//           <div className="docs-text">
//             <h2 className="section-title">Documents We Assist With</h2>
//             <p className="section-sub">
//               We guide you through every document — from start to submission. Our experts ensure nothing is missed.
//             </p>
//             <button className="btn-primary sm" onClick={() => (window.location.href = "/apply-visa")}>
//               Start Application →
//             </button>
//           </div>
//           <div className="docs-grid">
//             {documents.map((d, i) => (
//               <div className="doc-item" key={i}>
//                 <span className="doc-icon">{d.icon}</span>
//                 <span>{d.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ── FAQ ── */}
//         <div className="visa-faq">
//           <h2 className="section-title tc">Frequently Asked Questions</h2>
//           <div className="faq-list">
//             {faqs.map((f, i) => (
//               <div className="faq-item" key={i}>
//                 <button
//                   className="faq-question"
//                   onClick={() => setOpenFaq(openFaq === i ? null : i)}
//                 >
//                   <span>{f.q}</span>
//                   <span className="faq-arrow">{openFaq === i ? "▲" : "▼"}</span>
//                 </button>
//                 {openFaq === i && (
//                   <div className="faq-answer">{f.a}</div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ── WHY CHOOSE US (SMALL) ── */}
//         <div className="why-outer-div">
//           <h2 className="section-title tc">Why Choose Us?</h2>
//           <p className="section-sub tc">Thousands of happy travellers trust us every year</p>
//           <div className="why-grid">
//             {whyUs.map((w, i) => (
//               <div className="why-card" key={i}>
//                 <span className="why-icon">{w.icon}</span>
//                 <span className="why-label">{w.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ── CTA ── */}
//         <div className="visa-cta-section">
//           <div className="cta-left">
//             <h3>Ready to Start?</h3>
//             <p>Our visa experts are available 24×7 to guide you.</p>
//             <div className="cta-trust">
//               <span>⭐ 4.8/5 Rating</span>
//               <span>•</span>
//               <span>2L+ Visas Processed</span>
//               <span>•</span>
//               <span>50+ Countries</span>
//             </div>
//           </div>
//           <div className="cta-right">
//             <button className="apply-btn" onClick={() => (window.location.href = "/apply-visa")}>
//               Apply Now
//             </button>
//             <button className="contact-btn" onClick={() => window.open("https://wa.me/919876543210", "_blank")}>
//               📞 Talk to Expert
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
















import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Visa.css";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const visaTypes = [
  { icon: "✈️", title: "Tourist Visa", desc: "Explore the world with our fast tourist visa service.", points: ["Single & multiple entry", "Hotel & flight support", "Travel insurance guidance", "Fast approval assistance"] },
  { icon: "💼", title: "Business Visa", desc: "Professional visa support for global business travel.", points: ["Meeting & conference visa", "Invitation letter assistance", "Priority processing", "Multiple entry options"] },
  { icon: "🎓", title: "Student Visa", desc: "Complete student visa support for abroad education.", points: ["University offer guidance", "Financial document support", "Embassy interview prep", "Long-term visa assistance"] },
  { icon: "👨‍👩‍👧", title: "Family / Visit Visa", desc: "Visit family members without stress.", points: ["Invitation letter help", "Relationship proof guidance", "Short & long-term stay", "Quick documentation check"] },
  { icon: "💍", title: "Marriage / Partner Visa", desc: "Settle abroad with spouse visa assistance.", points: ["Marriage proof support", "Dependent visa filing", "Legal documentation help", "Long-term settlement guidance"] },
  { icon: "🛂", title: "Transit Visa", desc: "Smooth transit visa processing for layovers.", points: ["Short stay permissions", "Airport transit guidance", "Fast-track processing", "24×7 support"] },
];

const countries = [
  { flag: "🇦🇪", name: "Dubai (UAE)", time: "3–5 Days", type: "E-Visa", price: "₹7,499", popular: true },
  { flag: "🇹🇭", name: "Thailand", time: "1 Day", type: "E-Visa", price: "₹1,499", popular: true },
  { flag: "🇸🇬", name: "Singapore", time: "3–5 Days", type: "Sticker", price: "₹2,999", popular: true },
  { flag: "🇲🇾", name: "Malaysia", time: "6–8 Days", type: "E-Visa", price: "₹2,499", popular: false },
  { flag: "🇬🇧", name: "United Kingdom", time: "10–15 Days", type: "Sticker", price: "₹12,999", popular: false },
  { flag: "🇺🇸", name: "United States", time: "15–30 Days", type: "Sticker", price: "₹18,999", popular: false },
  { flag: "🇨🇦", name: "Canada", time: "20–35 Days", type: "eTA / Visa", price: "₹9,999", popular: false },
  { flag: "🇦🇺", name: "Australia", time: "15–25 Days", type: "E-Visa", price: "₹11,999", popular: false },
  { flag: "🇪🇺", name: "Schengen", time: "10–15 Days", type: "Sticker", price: "₹7,999", popular: true },
  { flag: "🇯🇵", name: "Japan", time: "5–7 Days", type: "Sticker", price: "₹3,999", popular: true },
  { flag: "🇮🇩", name: "Indonesia (Bali)", time: "3–5 Days", type: "E-Visa", price: "₹1,999", popular: false },
  { flag: "🇳🇿", name: "New Zealand", time: "10–20 Days", type: "E-Visa", price: "₹8,499", popular: false },
];

const europeCountries = [
  { flag: "🇫🇷", name: "France", date: "01 May", colors: ["#002395", "#EDEDED", "#ED2939"] },
  { flag: "🇪🇸", name: "Spain", date: "01 May", colors: ["#AA151B", "#F1BF00", "#AA151B"] },
  { flag: "🇩🇪", name: "Germany", date: "29 Apr", colors: ["#000000", "#DD0000", "#FFCE00"] },
  { flag: "🇮🇹", name: "Italy", date: "05 May", colors: ["#009246", "#FFFFFF", "#CE2B37"] },
  { flag: "🇳🇱", name: "Netherlands", date: "10 May", colors: ["#AE1C28", "#FFFFFF", "#21468B"] },
  { flag: "🇵🇹", name: "Portugal", date: "12 May", colors: ["#006600", "#FF0000", "#006600"] },
];

const documents = [
  { icon: "🛂", label: "Passport & Photographs" },
  { icon: "📋", label: "Visa Application Form" },
  { icon: "✈️", label: "Flight & Hotel Bookings" },
  { icon: "🏦", label: "Bank Statements (3–6 months)" },
  { icon: "🛡️", label: "Travel Insurance" },
  { icon: "📩", label: "Invitation / Sponsor Letter" },
  { icon: "📝", label: "Cover Letter" },
  { icon: "💼", label: "Income Tax Returns" },
  { icon: "🏠", label: "Address Proof" },
];

const reviews = [
  { flag: "🇦🇪", country: "United Arab Emirates", title: "Quick & Smooth Visa", text: "The customer care representative called me and asked for the missing documents. Got the visa much before expected!", stars: 5, name: "Rahul M." },
  { flag: "🇬🇪", country: "Georgia", title: "Seamless Visa Process", text: "Georgia visa is a bit difficult to get, but with this service all went very smoothly. Thanks a lot!", stars: 5, name: "Priya S." },
  { flag: "🇻🇳", country: "Vietnam", title: "Visa at Best Price", text: "It was a great experience at best cost in the industry. Highly recommended for anyone planning to travel.", stars: 5, name: "Amit K." },
  { flag: "🇮🇩", country: "Indonesia", title: "Easy Process & Fast", text: "Very smooth hassle-free experience at a reasonably priced company. Will definitely consider again for future travel.", stars: 5, name: "Sneha T." },
  { flag: "🇸🇬", country: "Singapore", title: "Professional Service", text: "Documents were collected from my home and visa was couriered back. Absolutely zero hassle!", stars: 5, name: "Vikram D." },
  { flag: "🇯🇵", country: "Japan", title: "Expert Guidance", text: "The team helped me prepare every document. Got Japan visa approved in 5 days. Highly recommend!", stars: 5, name: "Meera R." },
];

const whyUs = [
  { icon: "✅", label: "98%+ Approval Rate", desc: "Industry-leading success rate" },
  { icon: "⚡", label: "Fast Processing", desc: "Submit within 24 hours" },
  { icon: "🧑‍💼", label: "Expert Consultants", desc: "Dedicated visa specialists" },
  { icon: "📞", label: "24×7 Support", desc: "Always here to help" },
  { icon: "💰", label: "Transparent Pricing", desc: "No hidden charges ever" },
  { icon: "🌍", label: "50+ Countries", desc: "Worldwide visa coverage" },
];

const steps = [
  { step: "01", title: "Choose Destination", desc: "Select your country & visa type from our list.", icon: "🌍" },
  { step: "02", title: "Fill Application", desc: "Complete the simple online form in minutes.", icon: "📝" },
  { step: "03", title: "Upload Documents", desc: "Submit required documents securely online.", icon: "📤" },
  { step: "04", title: "Expert Review", desc: "Our team reviews & submits your application.", icon: "🔍" },
  { step: "05", title: "Get Your Visa", desc: "Receive visa approval on time — guaranteed!", icon: "🎉" },
];

const faqs = [
  { q: "How long does visa processing take?", a: "Processing time varies by country — from 1 day (Thailand) to 30+ days (US/Canada). We always aim to submit your application at the earliest possible date." },
  { q: "What documents are generally required?", a: "Typically: passport, photographs, bank statements (3–6 months), travel insurance, flight & hotel bookings, and a cover letter. Country-specific docs may vary." },
  { q: "Do you guarantee visa approval?", a: "While we cannot guarantee approval (as the decision lies with the embassy), our 98%+ success rate reflects our expertise in preparing strong applications." },
  { q: "Can I apply for multiple countries at once?", a: "Yes! We handle multi-country visa applications, especially for Schengen area travel. Contact our experts for a customised package." },
  { q: "Is my passport safe with you?", a: "Absolutely. We use verified courier partners with tracking for all passport pickups and returns. Your passport is insured throughout the process." },
  { q: "What if my visa gets rejected?", a: "In case of rejection, our experts will analyse the reason and guide you on re-application. We also offer partial refunds in certain rejection cases." },
];

// ─────────────────────────────────────────────
// APPLY FORM — Multi-step
// ─────────────────────────────────────────────
const APPLY_STEPS = ["Select Visa", "Personal Info", "Travel Details", "Documents", "Review & Pay"];

function ApplyForm({ initialCountry, onClose }) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    // Step 0
    country: initialCountry || "",
    visaType: "Tourist Visa",
    // Step 1
    firstName: "", lastName: "", email: "", phone: "", dob: "", passportNo: "", passportExpiry: "",
    // Step 2
    departure: "", returnDate: "", travelers: "1", purpose: "Tourism",
    // Step 3
    passport: null, photo: null, bankStatement: null, insurance: null, flightHotel: null,
  });
  const [errors, setErrors] = useState({});

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (step === 0) {
      if (!form.country) e.country = "Please select a destination";
    }
    if (step === 1) {
      if (!form.firstName) e.firstName = "Required";
      if (!form.lastName) e.lastName = "Required";
      if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
      if (!form.phone || form.phone.length < 10) e.phone = "Valid phone required";
      if (!form.dob) e.dob = "Required";
      if (!form.passportNo) e.passportNo = "Required";
      if (!form.passportExpiry) e.passportExpiry = "Required";
    }
    if (step === 2) {
      if (!form.departure) e.departure = "Required";
      if (!form.returnDate) e.returnDate = "Required";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validate()) setStep(s => Math.min(s + 1, 4)); };
  const prev = () => setStep(s => Math.max(s - 1, 0));

  const selectedCountry = countries.find(c => c.name === form.country);

  if (submitted) {
    return (
      <div className="apply-success">
        <div className="success-icon">🎉</div>
        <h2>Application Submitted!</h2>
        <p>Your visa application for <strong>{form.country}</strong> has been received.</p>
        <p>Our expert will call you within <strong>2 hours</strong> on <strong>{form.phone}</strong>.</p>
        <div className="success-ref">Reference ID: <strong>VZ{Date.now().toString().slice(-8)}</strong></div>
        <p className="success-track">Track your application under <strong>My Trips → Visa Status</strong></p>
        <button className="apply-close-btn" onClick={onClose}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="apply-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="apply-modal">
        {/* Header */}
        <div className="apply-modal-header">
          <h2>Visa Application</h2>
          <button className="apply-modal-close" onClick={onClose}>✕</button>
        </div>

        {/* Progress Bar */}
        <div className="apply-steps-bar">
          {APPLY_STEPS.map((s, i) => (
            <div key={i} className={`apply-step-item ${i === step ? "active" : i < step ? "done" : ""}`}>
              <div className="apply-step-circle">{i < step ? "✓" : i + 1}</div>
              <span className="apply-step-label">{s}</span>
              {i < APPLY_STEPS.length - 1 && <div className="apply-step-line" />}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="apply-modal-body">

          {/* STEP 0: Select Visa */}
          {step === 0 && (
            <div className="apply-step-content">
              <h3>Where do you want to go?</h3>
              <div className="af-field">
                <label>Destination Country *</label>
                <select value={form.country} onChange={e => update("country", e.target.value)} className={errors.country ? "error" : ""}>
                  <option value="">-- Select Country --</option>
                  {countries.map((c, i) => <option key={i} value={c.name}>{c.flag} {c.name}</option>)}
                </select>
                {errors.country && <span className="af-error">{errors.country}</span>}
              </div>
              <div className="af-field">
                <label>Visa Type *</label>
                <div className="visa-type-chips">
                  {["Tourist Visa", "Business Visa", "Student Visa", "Family / Visit Visa", "Transit Visa"].map(t => (
                    <button key={t} className={`vt-chip ${form.visaType === t ? "selected" : ""}`} onClick={() => update("visaType", t)}>{t}</button>
                  ))}
                </div>
              </div>
              {selectedCountry && (
                <div className="country-info-box">
                  <span className="cib-flag">{selectedCountry.flag}</span>
                  <div>
                    <strong>{selectedCountry.name}</strong>
                    <div className="cib-meta">
                      <span>⏱ {selectedCountry.time}</span>
                      <span>🏷 {selectedCountry.type}</span>
                      <span>💰 From {selectedCountry.price}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 1: Personal Info */}
          {step === 1 && (
            <div className="apply-step-content">
              <h3>Personal Information</h3>
              <div className="af-row">
                <div className="af-field">
                  <label>First Name *</label>
                  <input value={form.firstName} onChange={e => update("firstName", e.target.value)} placeholder="As on passport" className={errors.firstName ? "error" : ""} />
                  {errors.firstName && <span className="af-error">{errors.firstName}</span>}
                </div>
                <div className="af-field">
                  <label>Last Name *</label>
                  <input value={form.lastName} onChange={e => update("lastName", e.target.value)} placeholder="As on passport" className={errors.lastName ? "error" : ""} />
                  {errors.lastName && <span className="af-error">{errors.lastName}</span>}
                </div>
              </div>
              <div className="af-row">
                <div className="af-field">
                  <label>Email *</label>
                  <input type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="you@email.com" className={errors.email ? "error" : ""} />
                  {errors.email && <span className="af-error">{errors.email}</span>}
                </div>
                <div className="af-field">
                  <label>Phone *</label>
                  <input type="tel" value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="+91 9876543210" className={errors.phone ? "error" : ""} />
                  {errors.phone && <span className="af-error">{errors.phone}</span>}
                </div>
              </div>
              <div className="af-row">
                <div className="af-field">
                  <label>Date of Birth *</label>
                  <input type="date" value={form.dob} onChange={e => update("dob", e.target.value)} className={errors.dob ? "error" : ""} />
                  {errors.dob && <span className="af-error">{errors.dob}</span>}
                </div>
                <div className="af-field">
                  <label>Number of Travelers</label>
                  <select value={form.travelers} onChange={e => update("travelers", e.target.value)}>
                    {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Traveler{n>1?"s":""}</option>)}
                  </select>
                </div>
              </div>
              <div className="af-row">
                <div className="af-field">
                  <label>Passport Number *</label>
                  <input value={form.passportNo} onChange={e => update("passportNo", e.target.value)} placeholder="A1234567" className={errors.passportNo ? "error" : ""} />
                  {errors.passportNo && <span className="af-error">{errors.passportNo}</span>}
                </div>
                <div className="af-field">
                  <label>Passport Expiry *</label>
                  <input type="date" value={form.passportExpiry} onChange={e => update("passportExpiry", e.target.value)} className={errors.passportExpiry ? "error" : ""} />
                  {errors.passportExpiry && <span className="af-error">{errors.passportExpiry}</span>}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Travel Details */}
          {step === 2 && (
            <div className="apply-step-content">
              <h3>Travel Details</h3>
              <div className="af-row">
                <div className="af-field">
                  <label>Date of Departure *</label>
                  <input type="date" value={form.departure} onChange={e => update("departure", e.target.value)} className={errors.departure ? "error" : ""} />
                  {errors.departure && <span className="af-error">{errors.departure}</span>}
                </div>
                <div className="af-field">
                  <label>Date of Return *</label>
                  <input type="date" value={form.returnDate} onChange={e => update("returnDate", e.target.value)} className={errors.returnDate ? "error" : ""} />
                  {errors.returnDate && <span className="af-error">{errors.returnDate}</span>}
                </div>
              </div>
              <div className="af-field">
                <label>Purpose of Visit</label>
                <div className="visa-type-chips">
                  {["Tourism", "Business", "Education", "Family Visit", "Medical"].map(p => (
                    <button key={p} className={`vt-chip ${form.purpose === p ? "selected" : ""}`} onClick={() => update("purpose", p)}>{p}</button>
                  ))}
                </div>
              </div>
              <div className="travel-info-note">
                <span>ℹ️</span>
                <p>Applications with travel dates beyond 30 days are submitted closer to the travel date as per immigration norms.</p>
              </div>
            </div>
          )}

          {/* STEP 3: Documents */}
          {step === 3 && (
            <div className="apply-step-content">
              <h3>Upload Documents</h3>
              <p className="doc-note">Upload clear scanned copies. Max size: 5MB each. Formats: PDF, JPG, PNG</p>
              <div className="doc-upload-grid">
                {[
                  { key: "passport", label: "Passport (First + Last Page)", required: true },
                  { key: "photo", label: "Passport Size Photo", required: true },
                  { key: "bankStatement", label: "Bank Statement (3–6 months)", required: true },
                  { key: "insurance", label: "Travel Insurance", required: false },
                  { key: "flightHotel", label: "Flight & Hotel Bookings", required: false },
                ].map(doc => (
                  <div key={doc.key} className="doc-upload-item">
                    <label className="doc-upload-label">
                      {doc.label} {doc.required && <span className="req-star">*</span>}
                      <div className={`doc-upload-box ${form[doc.key] ? "uploaded" : ""}`}>
                        {form[doc.key]
                          ? <><span className="doc-check">✅</span><span>{form[doc.key].name}</span></>
                          : <><span className="doc-plus">📎</span><span>Click to upload</span></>
                        }
                        <input type="file" accept=".pdf,.jpg,.jpeg,.png" style={{ display: "none" }}
                          onChange={e => update(doc.key, e.target.files[0])} />
                      </div>
                    </label>
                  </div>
                ))}
              </div>
              <div className="travel-info-note">
                <span>💡</span>
                <p>You can also upload missing documents later from <strong>My Trips → Visa Application</strong>. Our consultant will call you if anything is missing.</p>
              </div>
            </div>
          )}

          {/* STEP 4: Review & Pay */}
          {step === 4 && (
            <div className="apply-step-content">
              <h3>Review & Pay</h3>
              <div className="review-summary">
                <div className="review-section">
                  <h4>Application Summary</h4>
                  <div className="review-row"><span>Destination</span><strong>{form.country} {selectedCountry?.flag}</strong></div>
                  <div className="review-row"><span>Visa Type</span><strong>{form.visaType}</strong></div>
                  <div className="review-row"><span>Applicant</span><strong>{form.firstName} {form.lastName}</strong></div>
                  <div className="review-row"><span>Email</span><strong>{form.email}</strong></div>
                  <div className="review-row"><span>Phone</span><strong>{form.phone}</strong></div>
                  <div className="review-row"><span>Travelers</span><strong>{form.travelers}</strong></div>
                  <div className="review-row"><span>Departure</span><strong>{form.departure}</strong></div>
                  <div className="review-row"><span>Return</span><strong>{form.returnDate}</strong></div>
                </div>
                <div className="review-section price-section">
                  <h4>Price Breakdown</h4>
                  <div className="review-row"><span>Visa Fee (Government)</span><strong>{selectedCountry?.price || "₹0"}</strong></div>
                  <div className="review-row"><span>Service Charges</span><strong>₹999</strong></div>
                  <div className="review-row"><span>GST (18%)</span><strong>₹180</strong></div>
                  <div className="review-row total-row"><span>Total Payable</span><strong className="total-price">₹{selectedCountry ? (parseInt(selectedCountry.price.replace(/[₹,]/g,"")) + 1179).toLocaleString("en-IN") : "1,179"}</strong></div>
                </div>
              </div>
              <div className="payment-methods">
                <p>Pay securely via:</p>
                <div className="pay-chips">
                  {["💳 Credit/Debit Card", "📱 UPI", "🏦 Net Banking", "💰 EMI"].map(p => (
                    <span key={p} className="pay-chip">{p}</span>
                  ))}
                </div>
              </div>
              <div className="pay-guarantee">
                <span>🔒 100% Secure Payment</span>
                <span>✅ Instant Confirmation</span>
                <span>📋 Refund Policy Applicable</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="apply-modal-footer">
          {step > 0 && <button className="apply-prev-btn" onClick={prev}>← Back</button>}
          {step < 4
            ? <button className="apply-next-btn" onClick={next}>Continue →</button>
            : <button className="apply-pay-btn" onClick={() => setSubmitted(true)}>Pay & Submit Application 🔒</button>
          }
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// VISA CARD
// ─────────────────────────────────────────────
function VisaCard({ icon, title, desc, points }) {
  return (
    <div className="visa-card">
      <div className="visa-card-icon">{icon}</div>
      <h4 className="visa-card-title">{title}</h4>
      <p className="visa-card-desc">{desc}</p>
      <ul className="visa-card-points">
        {points.map((p, i) => <li key={i}><span className="point-check">✓</span>{p}</li>)}
      </ul>
      <button className="visa-card-btn">Apply Now →</button>
    </div>
  );
}

// ─────────────────────────────────────────────
// VISA STATUS TRACKER
// ─────────────────────────────────────────────
function VisaStatusTracker({ onClose }) {
  const [refId, setRefId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const track = () => {
    if (!refId) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult({
        refId,
        country: "Dubai (UAE)",
        status: "Under Review",
        stage: 2,
        stages: ["Received", "Under Review", "Submitted to Embassy", "Approved"],
        updated: "Today, 10:30 AM",
      });
    }, 1200);
  };

  return (
    <div className="apply-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="apply-modal tracker-modal">
        <div className="apply-modal-header">
          <h2>Track Visa Application</h2>
          <button className="apply-modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="apply-modal-body">
          <div className="tracker-input-row">
            <input
              placeholder="Enter Reference ID (e.g. VZ12345678)"
              value={refId}
              onChange={e => setRefId(e.target.value)}
              className="tracker-input"
            />
            <button className="tracker-btn" onClick={track} disabled={loading}>
              {loading ? "Tracking..." : "Track"}
            </button>
          </div>
          {result && (
            <div className="tracker-result">
              <div className="tracker-header">
                <span className="tracker-country">🇦🇪 {result.country}</span>
                <span className={`tracker-status-badge status-${result.status.replace(/\s/g, "").toLowerCase()}`}>{result.status}</span>
              </div>
              <div className="tracker-stages">
                {result.stages.map((s, i) => (
                  <div key={i} className={`tracker-stage ${i <= result.stage ? "done" : ""} ${i === result.stage ? "current" : ""}`}>
                    <div className="ts-circle">{i < result.stage ? "✓" : i + 1}</div>
                    <span>{s}</span>
                    {i < result.stages.length - 1 && <div className="ts-line" />}
                  </div>
                ))}
              </div>
              <p className="tracker-updated">Last updated: {result.updated}</p>
              <div className="travel-info-note">
                <span>📞</span>
                <p>Our expert will contact you if any additional documents are required.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────
export default function VisaSection() {
  const location = useLocation();
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travelers, setTravelers] = useState("1");
  const [openFaq, setOpenFaq] = useState(null);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [countryIdx, setCountryIdx] = useState(0);
  const [europeIdx, setEuropeIdx] = useState(0);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [applyCountry, setApplyCountry] = useState("");
  const [showTracker, setShowTracker] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQ, setSearchQ] = useState("");

  if (location.pathname === "/" || location.pathname === "/home") return null;

  const openApply = (country = "") => { setApplyCountry(country); setShowApplyForm(true); };

  const filteredCountries = countries.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(searchQ.toLowerCase());
    const matchFilter = activeFilter === "All" || c.type.includes(activeFilter) || (activeFilter === "Popular" && c.popular);
    return matchSearch && matchFilter;
  });

  const visibleReviews = [
    reviews[reviewIdx % reviews.length],
    reviews[(reviewIdx + 1) % reviews.length],
    reviews[(reviewIdx + 2) % reviews.length],
  ];
  const visibleEurope = europeCountries.slice(europeIdx, europeIdx + 4);
  const visibleCountriesCards = countries.slice(countryIdx, countryIdx + 4);

  return (
    <section className="visa-section">

      {/* ── SEARCH HERO ── */}
      <div className="visa-search-hero">
        <div className="hero-badge">🌍 Trusted by 20 Lakh+ Travelers</div>
        <h2 className="search-hero-title">
          Apply for a Visa: <span className="search-hero-blue">On Time, Powered by Experts</span>
        </h2>
        <p className="hero-sub">98%+ approval rate · 50+ countries · Expert consultants</p>

        <div className="search-bar-wrap">
          <div className="search-field dest-field">
            <label className="search-label">🌍 SELECT DESTINATION</label>
            <input
              className="search-input"
              type="text"
              placeholder="Where are you going?"
              value={destination}
              onChange={e => setDestination(e.target.value)}
              list="country-suggestions"
            />
            <datalist id="country-suggestions">
              {countries.map((c, i) => <option key={i} value={c.name} />)}
            </datalist>
          </div>
          <div className="search-divider" />
          <div className="search-field">
            <label className="search-label">📅 DATE OF DEPARTURE</label>
            <input className="search-input" type="date" value={departure} onChange={e => setDeparture(e.target.value)} />
          </div>
          <div className="search-divider" />
          <div className="search-field">
            <label className="search-label">📅 DATE OF RETURN</label>
            <input className="search-input" type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} />
          </div>
          <div className="search-divider" />
          <div className="search-field narrow-field">
            <label className="search-label">👤 TRAVELERS</label>
            <select className="search-input" value={travelers} onChange={e => setTravelers(e.target.value)}>
              {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Adult{n>1?"s":""}</option>)}
            </select>
          </div>
        </div>

        <div className="hero-btns">
          <button className="search-btn" onClick={() => openApply(destination)}>
            SEARCH VISA
          </button>
          <button className="track-btn" onClick={() => setShowTracker(true)}>
            📋 Track Application
          </button>
        </div>

        <div className="hero-stats">
          <span>⭐ 4.8/5 Rating</span>
          <span className="stat-dot">•</span>
          <span>2L+ Visas Processed</span>
          <span className="stat-dot">•</span>
          <span>50+ Countries</span>
          <span className="stat-dot">•</span>
          <span>98%+ Approval Rate</span>
        </div>
      </div>

      {/* ── MOST VISITED COUNTRIES CARDS ── */}
      <div className="visa-most-visited">
        <div className="mv-header">
          <h3 className="mv-title">Most-visited Countries</h3>
          <div className="mv-arrows">
            <button className="mv-arrow" onClick={() => setCountryIdx(Math.max(0, countryIdx - 1))} disabled={countryIdx === 0}>‹</button>
            <button className="mv-arrow" onClick={() => setCountryIdx(Math.min(countries.length - 4, countryIdx + 1))} disabled={countryIdx >= countries.length - 4}>›</button>
          </div>
        </div>
        <div className="mv-grid">
          {visibleCountriesCards.map((c, i) => (
            <div className="mv-card" key={i}>
              <div className="mv-card-top">
                <span className="mv-flag">{c.flag}</span>
                <span className="mv-type-badge">{c.type}</span>
                {c.popular && <span className="mv-popular-badge">🔥 Popular</span>}
              </div>
              <h4 className="mv-country-name">{c.name}</h4>
              <p className="mv-green">Get visa in {c.time}</p>
              <p className="mv-price">From <strong>{c.price}</strong></p>
              <p className="mv-sub">Quick & Easy Process</p>
              <p className="mv-sub">Verified Experts Available</p>
              <button className="mv-apply-btn" onClick={() => openApply(c.name)}>Apply Now →</button>
            </div>
          ))}
        </div>
      </div>

      {/* ── VISIT EUROPE ── */}
      <div className="visa-europe">
        <div className="mv-header">
          <h3 className="mv-title">Visit Europe! 🇪🇺</h3>
          <div className="mv-arrows">
            <button className="mv-arrow" onClick={() => setEuropeIdx(Math.max(0, europeIdx - 1))} disabled={europeIdx === 0}>‹</button>
            <button className="mv-arrow" onClick={() => setEuropeIdx(Math.min(europeCountries.length - 4, europeIdx + 1))} disabled={europeIdx >= europeCountries.length - 4}>›</button>
          </div>
        </div>
        <div className="europe-grid">
          {visibleEurope.map((c, i) => (
            <div className="europe-card" key={i}>
              <div className="europe-flag-art" style={{ background: `linear-gradient(135deg, ${c.colors[0]} 40%, ${c.colors[1]} 40%, ${c.colors[1]} 60%, ${c.colors[2]} 60%)` }}>
                <span className="europe-type-badge">STICKER VISA</span>
                <span className="europe-flag-emoji">{c.flag}</span>
              </div>
              <div className="europe-card-body">
                <h4 className="europe-name">{c.name}</h4>
                <p className="europe-date">📅 Know appointment by {c.date}</p>
                <button className="europe-link" onClick={() => openApply(c.name)}>Apply Now →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ALL COUNTRIES BROWSE WITH FILTER ── */}
      <div className="visa-browse-section">
        <h3 className="mv-title">Browse All Destinations</h3>
        <div className="browse-controls">
          <input
            className="browse-search"
            placeholder="🔍 Search country..."
            value={searchQ}
            onChange={e => setSearchQ(e.target.value)}
          />
          <div className="browse-filters">
            {["All", "Popular", "E-Visa", "Sticker"].map(f => (
              <button key={f} className={`filter-chip ${activeFilter === f ? "active" : ""}`} onClick={() => setActiveFilter(f)}>{f}</button>
            ))}
          </div>
        </div>
        <div className="browse-grid">
          {filteredCountries.map((c, i) => (
            <div className="browse-card" key={i} onClick={() => openApply(c.name)}>
              <span className="browse-flag">{c.flag}</span>
              <div className="browse-info">
                <strong>{c.name}</strong>
                <div className="browse-meta">
                  <span>⏱ {c.time}</span>
                  <span className="browse-badge">{c.type}</span>
                  {c.popular && <span className="popular-dot">🔥</span>}
                </div>
                <span className="browse-price">{c.price}</span>
              </div>
              <button className="browse-apply-btn">Apply →</button>
            </div>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <div className="visa-steps-wrap">
        <h2 className="section-title">How It Works</h2>
        <p className="section-sub">5 simple steps to get your visa</p>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div className="step-card" key={i}>
              <div className="step-icon">{s.icon}</div>
              <div className="step-number">{s.step}</div>
              <h4 className="step-title">{s.title}</h4>
              <p className="step-desc">{s.desc}</p>
              {i < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>

      {/* ── VISA TYPES ── */}
      <div className="visa-service-shell">
        <h2 className="section-title">Visa Types We Handle</h2>
        <p className="section-sub">Expert assistance for every type of visa, start to finish.</p>
        <div className="visa-grid">
          {visaTypes.map((item, index) => <VisaCard key={index} {...item} />)}
        </div>
      </div>

      <div className="visa-container">

        {/* ── DOCUMENTS ── */}
        <div className="visa-docs">
          <div className="docs-text">
            <h2 className="section-title">Documents We Assist With</h2>
            <p className="section-sub">We guide you through every document — from start to submission. Our experts ensure nothing is missed.</p>
            <button className="btn-primary sm" onClick={() => openApply()}>Start Application →</button>
          </div>
          <div className="docs-grid">
            {documents.map((d, i) => (
              <div className="doc-item" key={i}>
                <span className="doc-icon">{d.icon}</span>
                <span>{d.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CUSTOMER REVIEWS ── */}
        <div className="visa-reviews">
          <div className="mv-header">
            <h3 className="mv-title">Customer Reviews</h3>
            <div className="mv-arrows">
              <button className="mv-arrow" onClick={() => setReviewIdx(r => (r - 1 + reviews.length) % reviews.length)}>‹</button>
              <button className="mv-arrow" onClick={() => setReviewIdx(r => (r + 1) % reviews.length)}>›</button>
            </div>
          </div>
          <div className="reviews-grid">
            {visibleReviews.map((r, i) => (
              <div className="review-card" key={i}>
                <div className="review-top">
                  <span className="review-flag">{r.flag}</span>
                  <span className="review-country">{r.country.toUpperCase()}</span>
                </div>
                <h4 className="review-title">{r.title}</h4>
                <p className="review-text">"{r.text}"</p>
                <div className="review-bottom">
                  <div className="review-stars">{"★".repeat(r.stars)}</div>
                  <span className="review-name">— {r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── WHY CHOOSE US ── */}
        <div className="visa-why-section">
          <h3 className="mv-title">Why Choose Us?</h3>
          <div className="why-cards-grid">
            <div className="why-big-card">
              <div className="why-big-icon">👍</div>
              <h4 className="why-big-stat">98%+</h4>
              <p className="why-big-label">Approval Rate</p>
              <p className="why-big-desc">We have processed over 2,00,000 visas with industry-leading approval rates.</p>
            </div>
            <div className="why-big-card">
              <div className="why-big-icon">🧑‍💼</div>
              <h4 className="why-big-stat">Dedicated</h4>
              <p className="why-big-label">Visa Team</p>
              <p className="why-big-desc">A specialised team of visa consultants assists you on every step of the process.</p>
            </div>
            <div className="why-big-card">
              <div className="why-big-icon">💰</div>
              <h4 className="why-big-stat">Transparent</h4>
              <p className="why-big-label">Pricing</p>
              <p className="why-big-desc">Clearly marked fare breakdowns ensure there are no hidden costs — ever.</p>
            </div>
          </div>
          <div className="why-grid" style={{ marginTop: "2rem" }}>
            {whyUs.map((w, i) => (
              <div className="why-card" key={i}>
                <span className="why-icon">{w.icon}</span>
                <span className="why-label">{w.label}</span>
                <span className="why-desc">{w.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="visa-faq">
          <h2 className="section-title tc">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className="faq-item" key={i}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <span className="faq-arrow">{openFaq === i ? "▲" : "▼"}</span>
                </button>
                {openFaq === i && <div className="faq-answer">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="visa-cta-section">
          <div className="cta-left">
            <h3>Ready to Start Your Journey?</h3>
            <p>Our visa experts are available 24×7 to guide you through every step.</p>
            <div className="cta-trust">
              <span>⭐ 4.8/5 Rating</span>
              <span>•</span>
              <span>2L+ Visas Processed</span>
              <span>•</span>
              <span>50+ Countries</span>
            </div>
          </div>
          <div className="cta-right">
            <button className="apply-btn" onClick={() => openApply()}>Apply Now</button>
            <button className="contact-btn" onClick={() => window.open("https://wa.me/919876543210", "_blank")}>📞 Talk to Expert</button>
            <button className="track-btn-cta" onClick={() => setShowTracker(true)}>📋 Track Status</button>
          </div>
        </div>

      </div>

      {/* ── MODALS ── */}
      {showApplyForm && <ApplyForm initialCountry={applyCountry} onClose={() => setShowApplyForm(false)} />}
      {showTracker && <VisaStatusTracker onClose={() => setShowTracker(false)} />}

    </section>
  );
}