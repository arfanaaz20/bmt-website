// import React, { useState } from "react";
// import {
//   Search, Tag, Percent, Gift, Clock, TrendingUp, Hotel, Plane, Car,
//   Coffee, Ticket, BadgePercent, ArrowRight, Copy, CheckCheck, Zap,
//   Club
// } from "lucide-react";

// const BLUE = "#008cff";

// const offerCategories = [
//   { id: "all", name: "All Offers", icon: Tag },
//   { id: "flights", name: "Flights", icon: Plane },
//   { id: "hotels", name: "Hotels", icon: Hotel },
//   { id: "bus", name: "Bus", icon: Car },
//   { id: "bmt darshan", name: "BMT Darshan", icon: Ticket },
//   { id: "night club", name: "Night Club", icon: Club },
//   { id: "cab", name: "Cab", icon: Car },
//   { id: "holiday package", name: "Holiday Package", icon: Ticket },
//   { id: "flight + hotel ", name: "Flight + Hotel", icon: Plane },
// ];

// const featuredOffers = [
//   {
//     id: 1,
//     title: "FLAT 25% OFF",
//     description: "On domestic flight bookings",
//     code: "FLYHIGH25",
//     validTill: "31 Mar 2024",
//     gradient: "linear-gradient(135deg, #1a7fd4 0%, #0ea5e9 100%)",
//     iconBg: "rgba(255,255,255,0.15)",
//     icon: Plane,
//     tag: "🔥 Hot Deal",
//   },
//   {
//     id: 2,
//     title: "WEEKEND GETAWAY",
//     description: "On hotel bookings above ₹3,000",
//     code: "WEEKEND20",
//     validTill: "31 Mar 2024",
//     gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
//     iconBg: "rgba(255,255,255,0.15)",
//     icon: Hotel,
//     tag: "⭐ Popular",
//   },
//   {
//     id: 3,
//     title: "BUS TRAVEL OFFER",
//     description: "Save up to ₹200 on bus tickets",
//     code: "BUS200",
//     validTill: "31 Mar 2024",
//     gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
//     iconBg: "rgba(255,255,255,0.15)",
//     icon: Car,
//     tag: "🚌 Exclusive",
//   },
// ];

// const bankOffers = [
//   {
//     id: 1,
//     bank: "HDFC Bank",
//     discount: "15% OFF",
//     description: "On flight & hotel bookings",
//     code: "HDFC15",
//     validity: "Limited period",
//     color: "#1a5fd4",
//     bg: "#eef4ff",
//   },
//   {
//     id: 2,
//     bank: "ICICI Bank",
//     discount: "₹1000 OFF",
//     description: "On international flights",
//     code: "ICICI1000",
//     validity: "Valid till 31 Mar",
//     color: "#dc2626",
//     bg: "#fff1f1",
//   },
//   {
//     id: 3,
//     bank: "SBI Credit Card",
//     discount: "10% BACK",
//     description: "On bus ticket bookings",
//     code: "SBIBUS",
//     validity: "Limited seats",
//     color: "#059669",
//     bg: "#ecfdf5",
//   },
//   {
//     id: 4,
//     bank: "Axis Bank",
//     discount: "FLAT 20%",
//     description: "On luxury hotels",
//     code: "AXISLUXE",
//     validity: "Min spend ₹5,000",
//     color: "#7c3aed",
//     bg: "#f5f3ff",
//   },
// ];

// const partnerOffers = [
//   {
//     id: 1,
//     partner: "Amazon Pay",
//     discount: "₹250 Cashback",
//     description: "On first bus booking",
//     emoji: "🛒",
//     color: "#f97316",
//     bg: "#fff7ed",
//   },
//   {
//     id: 2,
//     partner: "Google Pay",
//     discount: "15% SuperCash",
//     description: "On flight bookings",
//     emoji: "💚",
//     color: "#16a34a",
//     bg: "#f0fdf4",
//   },
//   {
//     id: 3,
//     partner: "PhonePe",
//     discount: "Up to ₹300 OFF",
//     description: "On hotel stays",
//     emoji: "📲",
//     color: "#7c3aed",
//     bg: "#f5f3ff",
//   },
//   {
//     id: 4,
//     partner: "Mobikwik",
//     discount: "FLAT ₹150 OFF",
//     description: "On bus & flight",
//     emoji: "💸",
//     color: "#0284c7",
//     bg: "#f0f9ff",
//   },
// ];

// const trendingOffers = [
//   { title: "FLAT 30% OFF + Extra 5%", sub: "On international flight bookings", tag: "Top Pick" },
//   { title: "₹500 OFF on Weekend Hotels", sub: "Use code STAYMORE", tag: "New" },
//   { title: "20% Cashback on Bus Travel", sub: "Weekend specials only", tag: "Trending" },
//   { title: "Free Meal on Flight Upgrade", sub: "Select airlines only", tag: "Limited" },
// ];

// export default function OffersPage() {
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [copiedCode, setCopiedCode] = useState(null);

//   const handleCopy = (code) => {
//     navigator.clipboard?.writeText(code).catch(() => {});
//     setCopiedCode(code);
//     setTimeout(() => setCopiedCode(null), 2000);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">

//       {/* ── STICKY HEADER ── */}
//       <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
//           <h1 className="text-lg font-bold text-gray-900 tracking-tight">Offers</h1>
//           <div className="flex items-center gap-2">
//             <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
//               <Search size={18} className="text-gray-500" />
//             </button>
//             <button
//               className="text-sm font-semibold px-4 py-1.5 rounded-lg text-white transition-colors"
//               style={{ background: BLUE }}
//             >
//               My Vouchers
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">

//         {/* ── CATEGORY PILLS ── */}
//         <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
//           {offerCategories.map((cat) => {
//             const Icon = cat.icon;
//             const isActive = activeCategory === cat.id;
//             return (
//               <button
//                 key={cat.id}
//                 onClick={() => setActiveCategory(cat.id)}
//                 className="flex items-center gap-1.5 px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all flex-shrink-0"
//                 style={{
//                   background: isActive ? BLUE : "#fff",
//                   color: isActive ? "#fff" : "#6b7280",
//                   border: isActive ? `1.5px solid ${BLUE}` : "1.5px solid #e5e7eb",
//                   boxShadow: isActive ? `0 2px 8px ${BLUE}33` : "none",
//                 }}
//               >
//                 <Icon size={15} />
//                 {cat.name}
//               </button>
//             );
//           })}
//         </div>

//         {/* ── HERO BANNER ── */}
//         <div
//           className="rounded-2xl p-6 relative overflow-hidden"
//           style={{ background: "linear-gradient(135deg, #008cff 0%, #0070d4 60%, #0050a0 100%)" }}
//         >
//           {/* Decorative circles */}
//           <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full opacity-10 bg-white" />
//           <div className="absolute right-16 bottom-0 w-24 h-24 rounded-full opacity-10 bg-white" />

//           <div className="relative flex items-center justify-between gap-4">
//             <div>
//               <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
//                 <Zap size={12} /> Limited Time
//               </div>
//               <h2 className="text-2xl font-extrabold text-white mb-1.5 leading-tight">
//                 Special Offers<br />Just For You! 🎉
//               </h2>
//               <p className="text-blue-100 text-sm mb-4">Get up to 50% off on your next booking</p>
//               <button className="bg-white text-sm font-bold px-5 py-2 rounded-xl hover:bg-blue-50 transition-colors" style={{ color: BLUE }}>
//                 Explore Now →
//               </button>
//             </div>
//             <div className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
//               <BadgePercent size={44} className="text-white opacity-80" />
//             </div>
//           </div>
//         </div>

//         {/* ── FEATURED OFFERS ── */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-base font-bold text-gray-900">Featured Offers</h2>
//             <button className="flex items-center gap-1 text-sm font-semibold" style={{ color: BLUE }}>
//               View All <ArrowRight size={14} />
//             </button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {featuredOffers.map((offer) => {
//               const Icon = offer.icon;
//               const copied = copiedCode === offer.code;
//               return (
//                 <div
//                   key={offer.id}
//                   className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
//                 >
//                   {/* Colored top */}
//                   <div className="p-5 text-white relative" style={{ background: offer.gradient }}>
//                     <div className="flex items-start justify-between mb-3">
//                       <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: offer.iconBg }}>
//                         <Icon size={20} />
//                       </div>
//                       <span className="text-xs font-semibold bg-white/20 px-2.5 py-1 rounded-full">
//                         {offer.tag}
//                       </span>
//                     </div>
//                     <h3 className="text-xl font-extrabold tracking-tight mb-1">{offer.title}</h3>
//                     <p className="text-sm opacity-85">{offer.description}</p>
//                   </div>

//                   {/* Bottom bar */}
//                   <div className="p-4">
//                     {/* Code row */}
//                     <div className="flex items-center justify-between mb-3 bg-gray-50 rounded-xl px-3 py-2.5 border border-dashed border-gray-200">
//                       <div className="flex items-center gap-2">
//                         <Tag size={13} className="text-gray-400" />
//                         <span className="font-mono text-xs font-bold text-gray-700 tracking-widest">
//                           {offer.code}
//                         </span>
//                       </div>
//                       <button
//                         onClick={() => handleCopy(offer.code)}
//                         className="flex items-center gap-1 text-xs font-bold transition-colors"
//                         style={{ color: copied ? "#059669" : BLUE }}
//                       >
//                         {copied ? <CheckCheck size={13} /> : <Copy size={13} />}
//                         {copied ? "Copied!" : "Copy"}
//                       </button>
//                     </div>

//                     {/* Footer */}
//                     <div className="flex items-center justify-between">
//                       <span className="flex items-center gap-1 text-xs text-gray-400">
//                         <Clock size={12} /> Valid till {offer.validTill}
//                       </span>
//                       <button
//                         className="text-xs font-bold text-white px-3 py-1.5 rounded-lg transition-opacity hover:opacity-90"
//                         style={{ background: BLUE }}
//                       >
//                         Apply Offer
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* ── BANK & CARD OFFERS ── */}
//         <section>
//           <h2 className="text-base font-bold text-gray-900 mb-4">Bank & Card Offers</h2>
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
//             {bankOffers.map((offer) => (
//               <div
//                 key={offer.id}
//                 className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col gap-2"
//               >
//                 <div className="flex items-center justify-between">
//                   <div
//                     className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold"
//                     style={{ background: offer.bg, color: offer.color }}
//                   >
//                     🏦
//                   </div>
//                   <span
//                     className="text-xs font-bold px-2 py-0.5 rounded-lg"
//                     style={{ background: offer.bg, color: offer.color }}
//                   >
//                     {offer.discount}
//                   </span>
//                 </div>
//                 <div>
//                   <p className="text-sm font-bold text-gray-900">{offer.bank}</p>
//                   <p className="text-xs text-gray-500 mt-0.5">{offer.description}</p>
//                 </div>
//                 <div className="flex items-center justify-between pt-1 border-t border-gray-100 mt-auto">
//                   <span className="text-xs text-gray-400">{offer.validity}</span>
//                   <span className="font-mono text-xs font-bold" style={{ color: offer.color }}>{offer.code}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ── PARTNER OFFERS ── */}
//         <section>
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-base font-bold text-gray-900">Partner Offers</h2>
//             <button className="flex items-center gap-1 text-sm font-semibold" style={{ color: BLUE }}>
//               View All <ArrowRight size={14} />
//             </button>
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//             {partnerOffers.map((offer) => (
//               <div
//                 key={offer.id}
//                 className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-md transition-shadow duration-200 text-center"
//               >
//                 <div
//                   className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3"
//                   style={{ background: offer.bg }}
//                 >
//                   {offer.emoji}
//                 </div>
//                 <p className="text-sm font-bold text-gray-900 mb-0.5">{offer.partner}</p>
//                 <p className="text-xs font-bold mb-1" style={{ color: offer.color }}>{offer.discount}</p>
//                 <p className="text-xs text-gray-400">{offer.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ── TRENDING OFFERS ── */}
//         <section>
//           <div className="flex items-center gap-2 mb-4">
//             <TrendingUp size={18} style={{ color: BLUE }} />
//             <h2 className="text-base font-bold text-gray-900">Trending Offers</h2>
//           </div>

//           <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
//             {trendingOffers.map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors"
//               >
//                 <div className="flex items-center gap-3">
//                   <div
//                     className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
//                     style={{ background: "#eef4ff" }}
//                   >
//                     <Percent size={16} style={{ color: BLUE }} />
//                   </div>
//                   <div>
//                     <p className="text-sm font-bold text-gray-900">{item.title}</p>
//                     <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3 flex-shrink-0">
//                   <span
//                     className="text-xs font-semibold px-2 py-0.5 rounded-full hidden sm:inline"
//                     style={{ background: "#eef4ff", color: BLUE }}
//                   >
//                     {item.tag}
//                   </span>
//                   <button className="text-xs font-bold" style={{ color: BLUE }}>
//                     Grab Deal
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// }

























import React, { useState } from "react";
import {
  Search, Tag, Percent, Gift, Clock, TrendingUp, Hotel, Plane, Car,
  Coffee, Ticket, BadgePercent, ArrowRight, Copy, CheckCheck, Zap,
  Club
} from "lucide-react";

const BLUE = "#008cff";

const offerCategories = [
  { id: "all", name: "All Offers", icon: Tag },
  { id: "flights", name: "Flights", icon: Plane },
  { id: "hotels", name: "Hotels", icon: Hotel },
  { id: "bus", name: "Bus", icon: Car },
  { id: "bmt darshan", name: "BMT Darshan", icon: Ticket },
  { id: "night club", name: "Night Club", icon: Club },
  { id: "cab", name: "Cab", icon: Car },
  { id: "holiday package", name: "Holiday Package", icon: Ticket },
  { id: "flight + hotel", name: "Flight + Hotel", icon: Plane },
];

// ── ALL DATA BY CATEGORY ──────────────────────────────────────────────────────

const categoryData = {
  all: {
    featured: [
      {
        id: 1, title: "FLAT 25% OFF", description: "On domestic flight bookings",
        code: "FLYHIGH25", validTill: "31 Mar 2024",
        gradient: "linear-gradient(135deg, #1a7fd4 0%, #0ea5e9 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Plane, tag: "🔥 Hot Deal",
      },
      {
        id: 2, title: "WEEKEND GETAWAY", description: "On hotel bookings above ₹3,000",
        code: "WEEKEND20", validTill: "31 Mar 2024",
        gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Hotel, tag: "⭐ Popular",
      },
      {
        id: 3, title: "BUS TRAVEL OFFER", description: "Save up to ₹200 on bus tickets",
        code: "BUS200", validTill: "31 Mar 2024",
        gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Car, tag: "🚌 Exclusive",
      },
    ],
    bank: [
      { id: 1, bank: "HDFC Bank", discount: "15% OFF", description: "On flight & hotel bookings", code: "HDFC15", validity: "Limited period", color: "#1a5fd4", bg: "#eef4ff" },
      { id: 2, bank: "ICICI Bank", discount: "₹1000 OFF", description: "On international flights", code: "ICICI1000", validity: "Valid till 31 Mar", color: "#dc2626", bg: "#fff1f1" },
      { id: 3, bank: "SBI Credit Card", discount: "10% BACK", description: "On bus ticket bookings", code: "SBIBUS", validity: "Limited seats", color: "#059669", bg: "#ecfdf5" },
      { id: 4, bank: "Axis Bank", discount: "FLAT 20%", description: "On luxury hotels", code: "AXISLUXE", validity: "Min spend ₹5,000", color: "#7c3aed", bg: "#f5f3ff" },
    ],
    partner: [
      { id: 1, partner: "Amazon Pay", discount: "₹250 Cashback", description: "On first bus booking", emoji: "🛒", color: "#f97316", bg: "#fff7ed" },
      { id: 2, partner: "Google Pay", discount: "15% SuperCash", description: "On flight bookings", emoji: "💚", color: "#16a34a", bg: "#f0fdf4" },
      { id: 3, partner: "PhonePe", discount: "Up to ₹300 OFF", description: "On hotel stays", emoji: "📲", color: "#7c3aed", bg: "#f5f3ff" },
      { id: 4, partner: "Mobikwik", discount: "FLAT ₹150 OFF", description: "On bus & flight", emoji: "💸", color: "#0284c7", bg: "#f0f9ff" },
    ],
    trending: [
      { title: "FLAT 30% OFF + Extra 5%", sub: "On international flight bookings", tag: "Top Pick" },
      { title: "₹500 OFF on Weekend Hotels", sub: "Use code STAYMORE", tag: "New" },
      { title: "20% Cashback on Bus Travel", sub: "Weekend specials only", tag: "Trending" },
      { title: "Free Meal on Flight Upgrade", sub: "Select airlines only", tag: "Limited" },
    ],
  },

  flights: {
    featured: [
      {
        id: 1, title: "FLAT 25% OFF", description: "On all domestic flights",
        code: "FLYHIGH25", validTill: "30 Apr 2024",
        gradient: "linear-gradient(135deg, #1a7fd4 0%, #0ea5e9 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Plane, tag: "🔥 Hot Deal",
      },
      {
        id: 2, title: "INTL SAVER", description: "₹2000 off on international flights",
        code: "INTLFLY2K", validTill: "15 Apr 2024",
        gradient: "linear-gradient(135deg, #0f172a 0%, #1e40af 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Plane, tag: "✈️ International",
      },
      {
        id: 3, title: "FIRST FLIGHT", description: "Extra 10% off for first-time flyers",
        code: "FIRSTFLY", validTill: "31 Mar 2024",
        gradient: "linear-gradient(135deg, #f97316 0%, #fb923c 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Plane, tag: "🆕 New User",
      },
    ],
    bank: [
      { id: 1, bank: "HDFC Bank", discount: "15% OFF", description: "On all flight bookings", code: "HDFCFLY", validity: "Limited period", color: "#1a5fd4", bg: "#eef4ff" },
      { id: 2, bank: "ICICI Bank", discount: "₹1500 OFF", description: "On international flights", code: "ICICIINTL", validity: "Min spend ₹10,000", color: "#dc2626", bg: "#fff1f1" },
      { id: 3, bank: "Kotak Bank", discount: "12% OFF", description: "On domestic routes", code: "KOTAKAIR", validity: "Weekends only", color: "#d97706", bg: "#fffbeb" },
      { id: 4, bank: "Yes Bank", discount: "FLAT 10%", description: "On business class", code: "YESBIZ", validity: "Valid this month", color: "#7c3aed", bg: "#f5f3ff" },
    ],
    partner: [
      { id: 1, partner: "Google Pay", discount: "15% SuperCash", description: "On domestic flights", emoji: "💚", color: "#16a34a", bg: "#f0fdf4" },
      { id: 2, partner: "Paytm", discount: "₹400 Cashback", description: "On flight bookings", emoji: "💙", color: "#0284c7", bg: "#f0f9ff" },
      { id: 3, partner: "Amazon Pay", discount: "₹300 Back", description: "On first flight", emoji: "🛒", color: "#f97316", bg: "#fff7ed" },
      { id: 4, partner: "CRED", discount: "500 CRED Coins", description: "On premium bookings", emoji: "💎", color: "#7c3aed", bg: "#f5f3ff" },
    ],
    trending: [
      { title: "FLAT 30% OFF + Extra 5%", sub: "On international routes", tag: "Top Pick" },
      { title: "Early Bird Discount", sub: "Book 30 days in advance", tag: "New" },
      { title: "Weekend Flash Sale", sub: "Friday & Saturday flights", tag: "Trending" },
      { title: "Business Class Upgrade", sub: "₹999 upgrade on select routes", tag: "Limited" },
    ],
  },

  hotels: {
    featured: [
      {
        id: 1, title: "WEEKEND GETAWAY", description: "On hotel bookings above ₹3,000",
        code: "WEEKEND20", validTill: "31 Mar 2024",
        gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Hotel, tag: "⭐ Popular",
      },
      {
        id: 2, title: "LUXURY STAY", description: "Flat 30% off on 5-star hotels",
        code: "LUX30", validTill: "30 Apr 2024",
        gradient: "linear-gradient(135deg, #b45309 0%, #f59e0b 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Hotel, tag: "👑 Luxury",
      },
      {
        id: 3, title: "STAYCATION", description: "₹500 off on 2-night stays",
        code: "STAY500", validTill: "15 Apr 2024",
        gradient: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Hotel, tag: "🏠 Staycation",
      },
    ],
    bank: [
      { id: 1, bank: "Axis Bank", discount: "FLAT 20%", description: "On luxury hotels", code: "AXISLUXE", validity: "Min spend ₹5,000", color: "#7c3aed", bg: "#f5f3ff" },
      { id: 2, bank: "HDFC Bank", discount: "₹800 OFF", description: "On 3-star & above", code: "HDFC800", validity: "Valid this weekend", color: "#1a5fd4", bg: "#eef4ff" },
      { id: 3, bank: "SBI Card", discount: "15% BACK", description: "On boutique hotels", code: "SBIBOUTIQUE", validity: "Limited period", color: "#059669", bg: "#ecfdf5" },
      { id: 4, bank: "ICICI Bank", discount: "₹1000 OFF", description: "On premium stays", code: "ICICISTAY", validity: "Min 2 nights", color: "#dc2626", bg: "#fff1f1" },
    ],
    partner: [
      { id: 1, partner: "PhonePe", discount: "Up to ₹300 OFF", description: "On hotel stays", emoji: "📲", color: "#7c3aed", bg: "#f5f3ff" },
      { id: 2, partner: "Mobikwik", discount: "₹200 SuperCash", description: "On weekend bookings", emoji: "💸", color: "#0284c7", bg: "#f0f9ff" },
      { id: 3, partner: "Amazon Pay", discount: "₹250 Cashback", description: "On hotel of the day", emoji: "🛒", color: "#f97316", bg: "#fff7ed" },
      { id: 4, partner: "Google Pay", discount: "10% SuperCash", description: "On resort bookings", emoji: "💚", color: "#16a34a", bg: "#f0fdf4" },
    ],
    trending: [
      { title: "₹500 OFF on Weekend Hotels", sub: "Use code STAYMORE", tag: "New" },
      { title: "Early Check-in Deal", sub: "Free early check-in on 3+ nights", tag: "Trending" },
      { title: "Couple Special Package", sub: "Candlelight dinner included", tag: "Top Pick" },
      { title: "Last Minute Hotel Deals", sub: "Up to 40% off tonight", tag: "Limited" },
    ],
  },

  bus: {
    featured: [
      {
        id: 1, title: "BUS TRAVEL OFFER", description: "Save up to ₹200 on bus tickets",
        code: "BUS200", validTill: "31 Mar 2024",
        gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Car, tag: "🚌 Exclusive",
      },
      {
        id: 2, title: "SLEEPER SAVER", description: "15% off on AC sleeper buses",
        code: "SLEEPER15", validTill: "15 Apr 2024",
        gradient: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Car, tag: "😴 Sleeper",
      },
      {
        id: 3, title: "FIRST BUS RIDE", description: "₹100 off on first bus booking",
        code: "FIRSTBUS", validTill: "30 Apr 2024",
        gradient: "linear-gradient(135deg, #d97706 0%, #fbbf24 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Car, tag: "🆕 New User",
      },
    ],
    bank: [
      { id: 1, bank: "SBI Credit Card", discount: "10% BACK", description: "On all bus bookings", code: "SBIBUS", validity: "Limited seats", color: "#059669", bg: "#ecfdf5" },
      { id: 2, bank: "Paytm Bank", discount: "₹75 OFF", description: "On Volvo buses", code: "PAYTMBUS", validity: "Weekend only", color: "#0284c7", bg: "#f0f9ff" },
      { id: 3, bank: "HDFC Bank", discount: "5% OFF", description: "On premium buses", code: "HDFC5BUS", validity: "Valid this week", color: "#1a5fd4", bg: "#eef4ff" },
      { id: 4, bank: "Axis Bank", discount: "₹50 OFF", description: "On night journey", code: "AXISNIGHT", validity: "Min fare ₹500", color: "#7c3aed", bg: "#f5f3ff" },
    ],
    partner: [
      { id: 1, partner: "Amazon Pay", discount: "₹250 Cashback", description: "On first bus booking", emoji: "🛒", color: "#f97316", bg: "#fff7ed" },
      { id: 2, partner: "Mobikwik", discount: "FLAT ₹150 OFF", description: "On bus tickets", emoji: "💸", color: "#0284c7", bg: "#f0f9ff" },
      { id: 3, partner: "PhonePe", discount: "₹100 Cashback", description: "On AC bus rides", emoji: "📲", color: "#7c3aed", bg: "#f5f3ff" },
      { id: 4, partner: "Google Pay", discount: "5% SuperCash", description: "On outstation buses", emoji: "💚", color: "#16a34a", bg: "#f0fdf4" },
    ],
    trending: [
      { title: "20% Cashback on Bus Travel", sub: "Weekend specials only", tag: "Trending" },
      { title: "Volvo Night Bus Deal", sub: "Flat ₹150 off on night rides", tag: "Top Pick" },
      { title: "Group Booking Discount", sub: "Book 4+ seats, save 25%", tag: "New" },
      { title: "Last Seat Alert", sub: "Grab remaining seats at 30% off", tag: "Limited" },
    ],
  },

  "bmt darshan": {
    featured: [
      {
        id: 1, title: "DARSHAN SPECIAL", description: "15% off on BMT Darshan packages",
        code: "DARSHAN15", validTill: "30 Apr 2024",
        gradient: "linear-gradient(135deg, #b45309 0%, #f59e0b 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Ticket, tag: "🙏 Spiritual",
      },
      {
        id: 2, title: "FAMILY DARSHAN", description: "Special rates for families of 4+",
        code: "FAMILYBMT", validTill: "15 May 2024",
        gradient: "linear-gradient(135deg, #dc2626 0%, #f87171 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Ticket, tag: "👨‍👩‍👧‍👦 Family",
      },
      {
        id: 3, title: "EARLY MORNING", description: "₹200 off on early slot bookings",
        code: "EARLYBMT", validTill: "31 Mar 2024",
        gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Ticket, tag: "🌅 Early Bird",
      },
    ],
    bank: [
      { id: 1, bank: "SBI Bank", discount: "10% OFF", description: "On BMT Darshan tickets", code: "SBIBMT", validity: "Limited period", color: "#059669", bg: "#ecfdf5" },
      { id: 2, bank: "HDFC Bank", discount: "₹100 OFF", description: "On weekend darshan", code: "HDFCBMT", validity: "Weekends only", color: "#1a5fd4", bg: "#eef4ff" },
      { id: 3, bank: "Bank of Baroda", discount: "5% BACK", description: "On group bookings", code: "BOBB5", validity: "Min 5 tickets", color: "#d97706", bg: "#fffbeb" },
      { id: 4, bank: "PNB Card", discount: "₹50 OFF", description: "On special darshan", code: "PNBBMT", validity: "This month only", color: "#7c3aed", bg: "#f5f3ff" },
    ],
    partner: [
      { id: 1, partner: "PhonePe", discount: "₹100 Cashback", description: "On darshan booking", emoji: "📲", color: "#7c3aed", bg: "#f5f3ff" },
      { id: 2, partner: "Paytm", discount: "₹75 Back", description: "On ticket purchase", emoji: "💙", color: "#0284c7", bg: "#f0f9ff" },
      { id: 3, partner: "Google Pay", discount: "5% SuperCash", description: "On group darshan", emoji: "💚", color: "#16a34a", bg: "#f0fdf4" },
      { id: 4, partner: "Amazon Pay", discount: "₹50 Cashback", description: "On first booking", emoji: "🛒", color: "#f97316", bg: "#fff7ed" },
    ],
    trending: [
      { title: "Special Pooja Package", sub: "Includes prasad & archana", tag: "Top Pick" },
      { title: "Sunrise Darshan Slot", sub: "Limited slots available", tag: "Limited" },
      { title: "VIP Darshan Pass", sub: "Skip the queue, save 20%", tag: "New" },
      { title: "Monthly Pass Deal", sub: "Unlimited darshan in a month", tag: "Trending" },
    ],
  },

  "night club": {
    featured: [
      {
        id: 1, title: "FRIDAY NIGHT", description: "30% off on Friday night entry",
        code: "FRIDAY30", validTill: "Every Friday",
        gradient: "linear-gradient(135deg, #1e1b4b 0%, #7c3aed 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Club, tag: "🎉 Party Night",
      },
      {
        id: 2, title: "COUPLES SPECIAL", description: "Buy 1 Get 1 on couple entry",
        code: "COUPLE2X", validTill: "Every Saturday",
        gradient: "linear-gradient(135deg, #be185d 0%, #f472b6 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Club, tag: "💑 Couples",
      },
      {
        id: 3, title: "VIP TABLE DEAL", description: "₹1000 off on VIP table booking",
        code: "VIPTABLE", validTill: "30 Apr 2024",
        gradient: "linear-gradient(135deg, #064e3b 0%, #10b981 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Club, tag: "👑 VIP",
      },
    ],
    bank: [
      { id: 1, bank: "HDFC Bank", discount: "20% OFF", description: "On VIP table bookings", code: "HDFCVIP", validity: "Weekends only", color: "#1a5fd4", bg: "#eef4ff" },
      { id: 2, bank: "Axis Bank", discount: "₹500 OFF", description: "On premium package", code: "AXISCLUB", validity: "Fri & Sat only", color: "#7c3aed", bg: "#f5f3ff" },
      { id: 3, bank: "ICICI Bank", discount: "15% BACK", description: "On food & drinks", code: "ICICICLUB", validity: "After 10 PM only", color: "#dc2626", bg: "#fff1f1" },
      { id: 4, bank: "Yes Bank", discount: "FLAT 10%", description: "On group bookings 6+", code: "YESGROUP", validity: "Limited offer", color: "#d97706", bg: "#fffbeb" },
    ],
    partner: [
      { id: 1, partner: "Paytm", discount: "₹200 Cashback", description: "On table booking", emoji: "💙", color: "#0284c7", bg: "#f0f9ff" },
      { id: 2, partner: "PhonePe", discount: "₹150 Back", description: "On entry pass", emoji: "📲", color: "#7c3aed", bg: "#f5f3ff" },
      { id: 3, partner: "Google Pay", discount: "10% SuperCash", description: "On weekend entry", emoji: "💚", color: "#16a34a", bg: "#f0fdf4" },
      { id: 4, partner: "CRED", discount: "800 CRED Coins", description: "On VIP booking", emoji: "💎", color: "#7c3aed", bg: "#f5f3ff" },
    ],
    trending: [
      { title: "New Year Bash Package", sub: "All inclusive party pass", tag: "Top Pick" },
      { title: "Ladies Night Special", sub: "Free entry for ladies on Wed", tag: "Trending" },
      { title: "DJ Night Early Bird", sub: "Book before 6 PM, save 25%", tag: "New" },
      { title: "Birthday Bash Deal", sub: "Free cake + bottle on birthday", tag: "Limited" },
    ],
  },

  cab: {
    featured: [
      {
        id: 1, title: "FIRST RIDE FREE", description: "Up to ₹150 off on first cab ride",
        code: "CABFIRST", validTill: "30 Apr 2024",
        gradient: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Car, tag: "🚕 First Ride",
      },
      {
        id: 2, title: "AIRPORT TRANSFER", description: "20% off on airport cab bookings",
        code: "AIRPORT20", validTill: "31 Mar 2024",
        gradient: "linear-gradient(135deg, #1a7fd4 0%, #0ea5e9 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Car, tag: "✈️ Airport",
      },
      {
        id: 3, title: "OUTSTATION CAB", description: "Flat ₹500 off on outstation trips",
        code: "OUTSTAY500", validTill: "15 Apr 2024",
        gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Car, tag: "🛣️ Outstation",
      },
    ],
    bank: [
      { id: 1, bank: "HDFC Bank", discount: "10% OFF", description: "On all cab rides", code: "HDFCCAB", validity: "Daily offer", color: "#1a5fd4", bg: "#eef4ff" },
      { id: 2, bank: "SBI Card", discount: "₹100 OFF", description: "On airport transfers", code: "SBIAIRPORT", validity: "Min fare ₹500", color: "#059669", bg: "#ecfdf5" },
      { id: 3, bank: "Kotak Bank", discount: "8% BACK", description: "On outstation cabs", code: "KOTAKOUT", validity: "Weekends only", color: "#d97706", bg: "#fffbeb" },
      { id: 4, bank: "Axis Bank", discount: "₹75 OFF", description: "On AC cab bookings", code: "AXISCAB", validity: "Valid this month", color: "#7c3aed", bg: "#f5f3ff" },
    ],
    partner: [
      { id: 1, partner: "Google Pay", discount: "₹100 Cashback", description: "On cab rides", emoji: "💚", color: "#16a34a", bg: "#f0fdf4" },
      { id: 2, partner: "Amazon Pay", discount: "₹150 Back", description: "On first cab booking", emoji: "🛒", color: "#f97316", bg: "#fff7ed" },
      { id: 3, partner: "Paytm", discount: "₹75 Cashback", description: "On airport cabs", emoji: "💙", color: "#0284c7", bg: "#f0f9ff" },
      { id: 4, partner: "Mobikwik", discount: "₹50 OFF", description: "On daily commute", emoji: "💸", color: "#0284c7", bg: "#f0f9ff" },
    ],
    trending: [
      { title: "Airport Pickup Deal", sub: "Flat 20% off on airport rides", tag: "Top Pick" },
      { title: "Night Cab Special", sub: "Safe rides after midnight", tag: "Trending" },
      { title: "Outstation Round Trip", sub: "Book both ways, save 30%", tag: "New" },
      { title: "Daily Commute Pass", sub: "10 rides at ₹50 off each", tag: "Limited" },
    ],
  },

  "holiday package": {
    featured: [
      {
        id: 1, title: "GOA SPECIAL", description: "₹3000 off on Goa holiday packages",
        code: "GOA3K", validTill: "30 Apr 2024",
        gradient: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Ticket, tag: "🏖️ Beach",
      },
      {
        id: 2, title: "HONEYMOON DEAL", description: "15% off on honeymoon packages",
        code: "HONEY15", validTill: "31 May 2024",
        gradient: "linear-gradient(135deg, #be185d 0%, #f472b6 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Ticket, tag: "💑 Honeymoon",
      },
      {
        id: 3, title: "FAMILY HOLIDAY", description: "₹5000 off on family of 4 packages",
        code: "FAMILY5K", validTill: "15 May 2024",
        gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Ticket, tag: "👨‍👩‍👧‍👦 Family",
      },
    ],
    bank: [
      { id: 1, bank: "HDFC Bank", discount: "10% OFF", description: "On all holiday packages", code: "HDFC10HOL", validity: "Min booking ₹20,000", color: "#1a5fd4", bg: "#eef4ff" },
      { id: 2, bank: "ICICI Bank", discount: "₹2000 OFF", description: "On international packages", code: "ICICIINTLHOL", validity: "Valid this season", color: "#dc2626", bg: "#fff1f1" },
      { id: 3, bank: "SBI Card", discount: "EMI @ 0%", description: "On packages above ₹30,000", code: "SBIHOL0EMI", validity: "3/6/9 month EMI", color: "#059669", bg: "#ecfdf5" },
      { id: 4, bank: "Axis Bank", discount: "FLAT 8%", description: "On luxury packages", code: "AXISHOL", validity: "Limited bookings", color: "#7c3aed", bg: "#f5f3ff" },
    ],
    partner: [
      { id: 1, partner: "Amazon Pay", discount: "₹500 Cashback", description: "On holiday package", emoji: "🛒", color: "#f97316", bg: "#fff7ed" },
      { id: 2, partner: "CRED", discount: "2000 CRED Coins", description: "On luxury packages", emoji: "💎", color: "#7c3aed", bg: "#f5f3ff" },
      { id: 3, partner: "Google Pay", discount: "₹300 SuperCash", description: "On domestic packages", emoji: "💚", color: "#16a34a", bg: "#f0fdf4" },
      { id: 4, partner: "PhonePe", discount: "₹400 Back", description: "On beach packages", emoji: "📲", color: "#7c3aed", bg: "#f5f3ff" },
    ],
    trending: [
      { title: "Manali Snow Package", sub: "7 nights with hotel & cab", tag: "Top Pick" },
      { title: "Maldives Honeymoon", sub: "All inclusive resort deal", tag: "Trending" },
      { title: "Europe Group Tour", sub: "5 countries in 10 days", tag: "New" },
      { title: "Last Minute Summer Deal", sub: "60% off on select packages", tag: "Limited" },
    ],
  },

  "flight + hotel": {
    featured: [
      {
        id: 1, title: "COMBO SAVER", description: "Save ₹2500 on Flight + Hotel combo",
        code: "COMBO2500", validTill: "30 Apr 2024",
        gradient: "linear-gradient(135deg, #1a7fd4 0%, #7c3aed 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Plane, tag: "🔥 Best Value",
      },
      {
        id: 2, title: "WEEKEND COMBO", description: "20% off on weekend combos",
        code: "WKNDCOMBO", validTill: "Every Weekend",
        gradient: "linear-gradient(135deg, #0f766e 0%, #0ea5e9 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Hotel, tag: "🌟 Weekend",
      },
      {
        id: 3, title: "INTL COMBO", description: "₹5000 off on international combos",
        code: "INTLCOMBO5K", validTill: "31 May 2024",
        gradient: "linear-gradient(135deg, #b45309 0%, #f59e0b 100%)",
        iconBg: "rgba(255,255,255,0.15)", icon: Plane, tag: "✈️ International",
      },
    ],
    bank: [
      { id: 1, bank: "HDFC Bank", discount: "12% OFF", description: "On combo bookings", code: "HDFC12COMBO", validity: "Min spend ₹15,000", color: "#1a5fd4", bg: "#eef4ff" },
      { id: 2, bank: "ICICI Bank", discount: "₹3000 OFF", description: "On intl combos", code: "ICICICOMBO", validity: "Valid this month", color: "#dc2626", bg: "#fff1f1" },
      { id: 3, bank: "Axis Bank", discount: "FLAT 15%", description: "On luxury combos", code: "AXISCOMBO", validity: "Limited offer", color: "#7c3aed", bg: "#f5f3ff" },
      { id: 4, bank: "Yes Bank", discount: "₹1500 OFF", description: "On domestic combos", code: "YESDOMCOMBO", validity: "Weekdays only", color: "#d97706", bg: "#fffbeb" },
    ],
    partner: [
      { id: 1, partner: "Google Pay", discount: "₹400 SuperCash", description: "On combo bookings", emoji: "💚", color: "#16a34a", bg: "#f0fdf4" },
      { id: 2, partner: "CRED", discount: "1500 CRED Coins", description: "On premium combos", emoji: "💎", color: "#7c3aed", bg: "#f5f3ff" },
      { id: 3, partner: "Amazon Pay", discount: "₹350 Cashback", description: "On first combo", emoji: "🛒", color: "#f97316", bg: "#fff7ed" },
      { id: 4, partner: "Paytm", discount: "₹500 Back", description: "On intl combos", emoji: "💙", color: "#0284c7", bg: "#f0f9ff" },
    ],
    trending: [
      { title: "Dubai Combo Mega Deal", sub: "Flight + 5-star hotel", tag: "Top Pick" },
      { title: "Goa Weekend Combo", sub: "Flight + beach resort 3N", tag: "Trending" },
      { title: "Singapore Combo Saver", sub: "Save ₹8000 on full package", tag: "New" },
      { title: "Last Minute Combo Alert", sub: "Tonight's deals at 50% off", tag: "Limited" },
    ],
  },
};

export default function OffersPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard?.writeText(code).catch(() => {});
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Get current category's data (fallback to "all")
  const data = categoryData[activeCategory] || categoryData["all"];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── STICKY HEADER ── */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900 tracking-tight">Offers</h1>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Search size={18} className="text-gray-500" />
            </button>
            <button
              className="text-sm font-semibold px-4 py-1.5 rounded-lg text-white transition-colors"
              style={{ background: BLUE }}
            >
              My Vouchers
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">

        {/* ── CATEGORY PILLS ── */}
        <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          {offerCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all flex-shrink-0"
                style={{
                  background: isActive ? BLUE : "#fff",
                  color: isActive ? "#fff" : "#6b7280",
                  border: isActive ? `1.5px solid ${BLUE}` : "1.5px solid #e5e7eb",
                  boxShadow: isActive ? `0 2px 8px ${BLUE}33` : "none",
                }}
              >
                <Icon size={15} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* ── HERO BANNER ── */}
        <div
          className="rounded-2xl p-6 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #008cff 0%, #0070d4 60%, #0050a0 100%)" }}
        >
          <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full opacity-10 bg-white" />
          <div className="absolute right-16 bottom-0 w-24 h-24 rounded-full opacity-10 bg-white" />
          <div className="relative flex items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                <Zap size={12} /> Limited Time
              </div>
              <h2 className="text-2xl font-extrabold text-white mb-1.5 leading-tight">
                Special Offers<br />Just For You! 🎉
              </h2>
              <p className="text-blue-100 text-sm mb-4">Get up to 50% off on your next booking</p>
              <button className="bg-white text-sm font-bold px-5 py-2 rounded-xl hover:bg-blue-50 transition-colors" style={{ color: BLUE }}>
                Explore Now →
              </button>
            </div>
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
              <BadgePercent size={44} className="text-white opacity-80" />
            </div>
          </div>
        </div>

        {/* ── FEATURED OFFERS ── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-gray-900">Featured Offers</h2>
            <button className="flex items-center gap-1 text-sm font-semibold" style={{ color: BLUE }}>
              View All <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.featured.map((offer) => {
              const Icon = offer.icon;
              const copied = copiedCode === offer.code;
              return (
                <div key={offer.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="p-5 text-white relative" style={{ background: offer.gradient }}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: offer.iconBg }}>
                        <Icon size={20} />
                      </div>
                      <span className="text-xs font-semibold bg-white/20 px-2.5 py-1 rounded-full">{offer.tag}</span>
                    </div>
                    <h3 className="text-xl font-extrabold tracking-tight mb-1">{offer.title}</h3>
                    <p className="text-sm opacity-85">{offer.description}</p>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3 bg-gray-50 rounded-xl px-3 py-2.5 border border-dashed border-gray-200">
                      <div className="flex items-center gap-2">
                        <Tag size={13} className="text-gray-400" />
                        <span className="font-mono text-xs font-bold text-gray-700 tracking-widest">{offer.code}</span>
                      </div>
                      <button
                        onClick={() => handleCopy(offer.code)}
                        className="flex items-center gap-1 text-xs font-bold transition-colors"
                        style={{ color: copied ? "#059669" : BLUE }}
                      >
                        {copied ? <CheckCheck size={13} /> : <Copy size={13} />}
                        {copied ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock size={12} /> Valid till {offer.validTill}
                      </span>
                      <button className="text-xs font-bold text-white px-3 py-1.5 rounded-lg transition-opacity hover:opacity-90" style={{ background: BLUE }}>
                        Apply Offer
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── BANK & CARD OFFERS ── */}
        <section>
          <h2 className="text-base font-bold text-gray-900 mb-4">Bank & Card Offers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {data.bank.map((offer) => (
              <div key={offer.id} className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold" style={{ background: offer.bg, color: offer.color }}>🏦</div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-lg" style={{ background: offer.bg, color: offer.color }}>{offer.discount}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{offer.bank}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{offer.description}</p>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-gray-100 mt-auto">
                  <span className="text-xs text-gray-400">{offer.validity}</span>
                  <span className="font-mono text-xs font-bold" style={{ color: offer.color }}>{offer.code}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PARTNER OFFERS ── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-gray-900">Partner Offers</h2>
            <button className="flex items-center gap-1 text-sm font-semibold" style={{ color: BLUE }}>
              View All <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {data.partner.map((offer) => (
              <div key={offer.id} className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-md transition-shadow duration-200 text-center">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3" style={{ background: offer.bg }}>{offer.emoji}</div>
                <p className="text-sm font-bold text-gray-900 mb-0.5">{offer.partner}</p>
                <p className="text-xs font-bold mb-1" style={{ color: offer.color }}>{offer.discount}</p>
                <p className="text-xs text-gray-400">{offer.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TRENDING OFFERS ── */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={18} style={{ color: BLUE }} />
            <h2 className="text-base font-bold text-gray-900">Trending Offers</h2>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {data.trending.map((item, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#eef4ff" }}>
                    <Percent size={16} style={{ color: BLUE }} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full hidden sm:inline" style={{ background: "#eef4ff", color: BLUE }}>{item.tag}</span>
                  <button className="text-xs font-bold" style={{ color: BLUE }}>Grab Deal</button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}