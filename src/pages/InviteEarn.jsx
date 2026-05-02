// // import React from "react";
// // import "./InviteEarn.css";

// // const InviteEarn = () => {
// //   return (
// //     <div className="invite-wrapper">
// //       <div className="invite-container">

// //         {/* HEADER */}
// //         <div className="invite-header">
// //           <h1>Invite Friends. Earn Travel Rewards.</h1>
// //           <p>
// //             Share the joy of travel with your friends and get rewarded every time
// //             they book.
// //           </p>
// //         </div>

// //         {/* INFO */}
// //         <div className="invite-info">
// //           Invite your friends to experience seamless travel bookings. When they
// //           sign up using your referral link and complete their first booking, you
// //           earn exciting rewards that can be redeemed on flights, hotels,
// //           holidays, and more.
// //         </div>

// //         {/* STEPS */}
// //         <div className="invite-steps">
// //           <h2>How It Works</h2>

// //           <div className="steps-grid">
// //             <div className="step-card">
// //               <span>1</span>
// //               <h3>Invite Friends</h3>
// //               <p>Share your referral link via WhatsApp, email or social media.</p>
// //             </div>

// //             <div className="step-card">
// //               <span>2</span>
// //               <h3>Friend Signs Up</h3>
// //               <p>Your friend registers using your referral link.</p>
// //             </div>

// //             <div className="step-card">
// //               <span>3</span>
// //               <h3>Booking Completed</h3>
// //               <p>Friend completes their first successful booking.</p>
// //             </div>

// //             <div className="step-card">
// //               <span>4</span>
// //               <h3>You Earn Rewards</h3>
// //               <p>Rewards are credited to your wallet instantly.</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* BENEFITS */}
// //         <div className="invite-benefits">
// //           <h2>Rewards & Benefits</h2>
// //           <ul>
// //             <li>Earn travel credits on every successful referral</li>
// //             <li>No limit on referrals or earnings</li>
// //             <li>Use rewards on flights, hotels & holidays</li>
// //             <li>Rewards valid for up to 12 months</li>
// //           </ul>
// //         </div>

// //         {/* CTA */}
// //         <div className="invite-cta">
// //           <button className="btn-primary">Invite Now</button>
// //           <button className="btn-outline">Share & Earn</button>
// //         </div>

// //         {/* TERMS */}
// //         <div className="invite-terms">
// //           Referral rewards are credited only after the referred user completes
// //           their first eligible booking. Self-referrals are not allowed. Rewards
// //           are non-transferable and cannot be redeemed as cash. The company
// //           reserves the right to modify or discontinue the program at any time.
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default InviteEarn;






















// import { useState } from "react";

// const referralHistory = [
//   { name: "Raj Kumar", date: "25 Nov 2025", initial: "R", status: "Completed", amount: "₹500" },
//   { name: "Priya Sharma", date: "22 Nov 2025", initial: "P", status: "Completed", amount: "₹500" },
//   { name: "Amit Singh", date: "20 Nov 2025", initial: "A", status: "Pending", amount: "₹0" },
// ];

// const howItWorks = [
//   { icon: "↗", title: "Share Your Code", desc: "Send your referral code to friends" },
//   { icon: "👤+", title: "Friend Signs Up", desc: "They create account using your code" },
//   { icon: "✓", title: "Friend Books", desc: "They complete their first booking" },
//   { icon: "🎁", title: "Both Get Rewarded", desc: "You both receive ₹500 credits" },
// ];

// export default function ReferAndEarn() {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText("BIRD2025");
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", background: "#f0f4ff" }}>

//       {/* HEADER */}
//       <div style={{ background: "#fff", padding: "16px 20px", display: "flex", alignItems: "center", gap: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
//         <button style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#333" }}></button>
//         <span style={{ fontWeight: 700, fontSize: 18, color: "#1a1a2e" }}>Refer &amp; Earn</span>
//       </div>

//       {/* HERO BANNER */}
//       <div
//         style={{
//           background: "linear-gradient(135deg, #1a73e8 0%, #1557b0 100%)",
//           padding: "2.5rem 2rem",
//           textAlign: "center",
//           color: "#fff",
//         }}
//       >
//         <div
//           style={{
//             width: 70,
//             height: 70,
//             borderRadius: "50%",
//             background: "rgba(255,255,255,0.2)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             margin: "0 auto 16px",
//             fontSize: 32,
//           }}
//         >
//           👥
//         </div>
//         <h1 style={{ margin: "0 0 12px", fontSize: 24, fontWeight: 700 }}>Refer Friends &amp; Earn</h1>
//         <div
//           style={{
//             display: "inline-block",
//             background: "#e74c3c",
//             borderRadius: 30,
//             padding: "8px 24px",
//             fontWeight: 700,
//             fontSize: 16,
//             marginBottom: 12,
//           }}
//         >
//           Give ₹500 • Get ₹500
//         </div>
//         <p style={{ margin: 0, opacity: 0.9, fontSize: 14 }}>Share your code and both get rewarded!</p>
//       </div>

//       <div style={{ maxWidth: 600, margin: "0 auto", padding: "1.5rem" }}>

//         {/* REFERRAL CODE CARD */}
//         <div
//           style={{
//             background: "#fff",
//             borderRadius: 16,
//             padding: "1.5rem",
//             marginBottom: 16,
//             boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
//           }}
//         >
//           <p style={{ textAlign: "center", color: "#555", fontSize: 14, margin: "0 0 16px", fontWeight: 600 }}>
//             Your Referral Code
//           </p>
//           <div
//             style={{
//               border: "2px solid #1a73e8",
//               borderRadius: 12,
//               padding: "14px 20px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               marginBottom: 20,
//               background: "#f0f7ff",
//             }}
//           >
//             <span style={{ fontWeight: 800, fontSize: 24, color: "#1a73e8", letterSpacing: 3 }}>BIRD2025</span>
//             <button
//               onClick={handleCopy}
//               style={{
//                 background: copied ? "#e8f5e9" : "#e8f0fe",
//                 border: "none",
//                 borderRadius: 8,
//                 padding: "8px 12px",
//                 cursor: "pointer",
//                 fontSize: 18,
//                 color: copied ? "#2e7d32" : "#1a73e8",
//                 transition: "all 0.2s",
//               }}
//             >
//               {copied ? "✓" : "⧉"}
//             </button>
//           </div>

//           {/* SHARE OPTIONS */}
//           <p style={{ textAlign: "center", color: "#888", fontSize: 13, margin: "0 0 14px" }}>Share via</p>
//           <div style={{ display: "flex", justifyContent: "center", gap: 24 }}>
//             {[
//               { icon: "↗", label: "Share", bg: "#e3f2fd", color: "#1a73e8" },
//               { icon: "💬", label: "WhatsApp", bg: "#e8f5e9", color: "#25D366" },
//               { icon: "✉", label: "Email", bg: "#fce4ec", color: "#e53935" },
//               { icon: "···", label: "More", bg: "#f5f5f5", color: "#555" },
//             ].map((item) => (
//               <div key={item.label} style={{ textAlign: "center", cursor: "pointer" }}>
//                 <div
//                   style={{
//                     width: 48,
//                     height: 48,
//                     borderRadius: "50%",
//                     background: item.bg,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontSize: 18,
//                     color: item.color,
//                     margin: "0 auto 6px",
//                     fontWeight: 700,
//                   }}
//                 >
//                   {item.icon}
//                 </div>
//                 <span style={{ fontSize: 12, color: "#555" }}>{item.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* HOW IT WORKS */}
//         <div
//           style={{
//             background: "#fff",
//             borderRadius: 16,
//             padding: "1.5rem",
//             marginBottom: 16,
//             boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
//           }}
//         >
//           <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e", margin: "0 0 20px" }}>How It Works</h2>
//           <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
//             {[
//               { num: 1, icon: "↗", title: "Share Your Code", desc: "Send your referral code to friends" },
//               { num: 2, icon: "👤", title: "Friend Signs Up", desc: "They create account using your code" },
//               { num: 3, icon: "✓", title: "Friend Books", desc: "They complete their first booking" },
//               { num: 4, icon: "🎁", title: "Both Get Rewarded", desc: "You both receive ₹500 credits" },
//             ].map((step, i) => (
//               <div key={step.num} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
//                 <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//                   <div
//                     style={{
//                       width: 36,
//                       height: 36,
//                       borderRadius: "50%",
//                       background: "#1a73e8",
//                       color: "#fff",
//                       fontWeight: 700,
//                       fontSize: 16,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       flexShrink: 0,
//                     }}
//                   >
//                     {step.num}
//                   </div>
//                   {i < 3 && (
//                     <div style={{ width: 2, height: 32, background: "#1a73e8", opacity: 0.3, margin: "4px 0" }} />
//                   )}
//                 </div>
//                 <div
//                   style={{
//                     background: "#f8f9ff",
//                     border: "1px solid #e3e8f8",
//                     borderRadius: 12,
//                     padding: "12px 16px",
//                     flex: 1,
//                     marginBottom: i < 3 ? 0 : 0,
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 12,
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: 36,
//                       height: 36,
//                       borderRadius: 10,
//                       background: "#e3eeff",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       fontSize: 16,
//                       flexShrink: 0,
//                     }}
//                   >
//                     {step.icon}
//                   </div>
//                   <div>
//                     <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a2e", marginBottom: 2 }}>
//                       {step.title}
//                     </div>
//                     <div style={{ fontSize: 12, color: "#666" }}>{step.desc}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* YOUR REWARDS */}
//         <div
//           style={{
//             background: "#fff",
//             borderRadius: 16,
//             padding: "1.5rem",
//             marginBottom: 16,
//             boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
//           }}
//         >
//           <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e", margin: "0 0 16px" }}>Your Rewards</h2>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//             <div
//               style={{
//                 background: "#f0f7ff",
//                 border: "1px solid #c5d8f8",
//                 borderRadius: 12,
//                 padding: "16px",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 10,
//               }}
//             >
//               <span style={{ fontSize: 22, color: "#1a73e8" }}>👥</span>
//               <div>
//                 <div style={{ fontWeight: 800, fontSize: 20, color: "#1a73e8" }}>5</div>
//                 <div style={{ fontSize: 12, color: "#555" }}>Successful Referrals</div>
//               </div>
//             </div>
//             <div
//               style={{
//                 background: "#e8f8f0",
//                 border: "1px solid #a8dfc0",
//                 borderRadius: 12,
//                 padding: "16px",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 10,
//               }}
//             >
//               <span style={{ fontSize: 22, color: "#0f6e56" }}>💳</span>
//               <div>
//                 <div style={{ fontWeight: 800, fontSize: 20, color: "#0f6e56" }}>₹2,500</div>
//                 <div style={{ fontSize: 12, color: "#555" }}>Total Earned</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* REFERRAL HISTORY */}
//         <div
//           style={{
//             background: "#fff",
//             borderRadius: 16,
//             padding: "1.5rem",
//             marginBottom: 16,
//             boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
//           }}
//         >
//           <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e", margin: "0 0 16px" }}>Referral History</h2>
//           <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//             {referralHistory.map((ref, i) => (
//               <div
//                 key={i}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 14,
//                   padding: "12px 14px",
//                   background: "#fafbff",
//                   borderRadius: 12,
//                   border: "1px solid #eef0f8",
//                 }}
//               >
//                 <div
//                   style={{
//                     width: 42,
//                     height: 42,
//                     borderRadius: "50%",
//                     background: "#1a73e8",
//                     color: "#fff",
//                     fontWeight: 700,
//                     fontSize: 18,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     flexShrink: 0,
//                   }}
//                 >
//                   {ref.initial}
//                 </div>
//                 <div style={{ flex: 1 }}>
//                   <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a2e" }}>{ref.name}</div>
//                   <div style={{ fontSize: 12, color: "#888" }}>{ref.date}</div>
//                 </div>
//                 <div style={{ textAlign: "right" }}>
//                   <span
//                     style={{
//                       display: "inline-block",
//                       background: ref.status === "Completed" ? "#e8f8f0" : "#fff3e0",
//                       color: ref.status === "Completed" ? "#0f6e56" : "#e67e22",
//                       fontWeight: 700,
//                       fontSize: 11,
//                       borderRadius: 20,
//                       padding: "3px 10px",
//                       marginBottom: 4,
//                     }}
//                   >
//                     {ref.status}
//                   </span>
//                   <div style={{ fontWeight: 700, fontSize: 15, color: ref.status === "Completed" ? "#0f6e56" : "#aaa" }}>
//                     {ref.amount}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* TERMS & CONDITIONS */}
//         <div
//           style={{
//             background: "#fff",
//             borderRadius: 16,
//             padding: "1.5rem",
//             marginBottom: 16,
//             boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
//           }}
//         >
//           <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e", margin: "0 0 12px", display: "flex", alignItems: "center", gap: 6 }}>
//             <span style={{ background: "#e3eeff", borderRadius: "50%", width: 22, height: 22, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#1a73e8", fontWeight: 700 }}>i</span>
//             Terms &amp; Conditions
//           </h3>
//           {[
//             "Referral reward valid on first booking only",
//             "Minimum booking amount: ₹1,000",
//             "Credits valid for 90 days from date of issue",
//             "Cannot be combined with other offers",
//           ].map((term, i) => (
//             <div key={i} style={{ fontSize: 13, color: "#555", display: "flex", gap: 8, marginBottom: 8 }}>
//               <span style={{ color: "#1a73e8", flexShrink: 0 }}>•</span>
//               {term}
//             </div>
//           ))}
//         </div>

//         {/* INVITE NOW BUTTON */}
//         <button
//           style={{
//             width: "100%",
//             padding: "16px 0",
//             borderRadius: 12,
//             border: "none",
//             background: "linear-gradient(135deg, #1a73e8, #1557b0)",
//             color: "#fff",
//             fontWeight: 700,
//             fontSize: 16,
//             cursor: "pointer",
//             letterSpacing: 0.5,
//             marginBottom: 24,
//           }}
//         >
//           Invite Now &amp; Earn ₹500
//         </button>

//       </div>
//     </div>
//   );
// }

















// import { useState } from "react";

// const referralHistory = [
//   { name: "Raj Kumar", date: "25 Nov 2025", initial: "R", status: "Completed", amount: "₹500" },
//   { name: "Priya Sharma", date: "22 Nov 2025", initial: "P", status: "Completed", amount: "₹500" },
//   { name: "Amit Singh", date: "20 Nov 2025", initial: "A", status: "Pending", amount: "₹0" },
// ];

// const steps = [
//   { num: 1, title: "Share your code", desc: "Send your referral code to friends" },
//   { num: 2, title: "Friend signs up", desc: "They register using your code" },
//   { num: 3, title: "Friend books", desc: "They complete their first booking" },
//   { num: 4, title: "Both get rewarded", desc: "You both receive ₹500 credits" },
// ];

// export default function ReferAndEarn() {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText("BIRD2025");
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const cardStyle = {
//     background: "#fff",
//     borderRadius: 16,
//     padding: "18px",
//     marginBottom: 12,
//     border: "0.5px solid #e5e7eb",
//     boxShadow: "none",
//   };

//   const cardTitle = {
//     fontSize: 16,
//     fontWeight: 600,
//     color: "#111827",
//     marginBottom: 14,
//   };

//   return (
//     <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", background: "#f3f4f6" }}>

//       {/* TOP BAR */}
//       <div style={{ background: "#fff", padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, borderBottom: "0.5px solid #e5e7eb" }}>
//         <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}>
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//             <path d="M15 5l-7 7 7 7" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>
//         <span style={{ fontWeight: 600, fontSize: 17, color: "#111827" }}>Refer &amp; Earn</span>
//       </div>

//       {/* HERO */}
//       {/* <div style={{ background: "#1a5fd4", padding: "32px 20px 28px", textAlign: "center" }}>
//         <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
//           <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
//             <circle cx="9" cy="7" r="3" stroke="#fff" strokeWidth="1.5" />
//             <circle cx="17" cy="9" r="2.5" stroke="#fff" strokeWidth="1.5" />
//             <path d="M2 19c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
//             <path d="M17 13c2.21 0 4 1.567 4 3.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
//           </svg>
//         </div>
//         <h1 style={{ color: "#fff", fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>Refer Friends &amp; Earn</h1>
//         <div style={{ display: "inline-block", background: "#c0392b", borderRadius: 20, padding: "7px 22px", color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 10 }}>
//           Give ₹500 &bull; Get ₹500
//         </div>
//         <p style={{ color: "rgba(255,255,255,0.88)", fontSize: 13, margin: 0 }}>Share your code and both get rewarded!</p>
//       </div> */}

//       <div
//   style={{
//     background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)",
//     padding: "50px 20px 80px",
//     textAlign: "center",
//     color: "#fff",
//     position: "relative",
//     overflow: "hidden",
//   }}
// >
//   {/* BLUR CIRCLES */}
//   <div style={{
//     position: "absolute",
//     width: 200,
//     height: 200,
//     background: "rgba(255,255,255,0.05)",
//     borderRadius: "50%",
//     top: -60,
//     left: -60
//   }} />
//   <div style={{
//     position: "absolute",
//     width: 220,
//     height: 220,
//     background: "rgba(255,255,255,0.05)",
//     borderRadius: "50%",
//     bottom: -80,
//     right: -60
//   }} />

//   {/* ICON */}
//   <div
//     style={{
//       width: 70,
//       height: 70,
//       borderRadius: "50%",
//       background: "rgba(255,255,255,0.12)",
//       backdropFilter: "blur(10px)",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       margin: "0 auto 18px",
//       boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
//     }}
//   >
//     👥
//   </div>

//   {/* TITLE */}
//   <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 12 }}>
//     Refer & <span style={{ color: "#60a5fa" }}>Earn Rewards</span>
//   </h1>

//   {/* BADGE (FIXED 🔥) */}
//   <div
//     style={{
//       display: "inline-block",
//       background: "rgba(255,255,255,0.12)",
//       border: "1px solid rgba(255,255,255,0.2)",
//       backdropFilter: "blur(8px)",
//       borderRadius: 30,
//       padding: "10px 26px",
//       fontWeight: 700,
//       fontSize: 15,
//       marginBottom: 14
//     }}
//   >
//     🎁 Give ₹500 • Get ₹500
//   </div>

//   {/* SUBTEXT */}
//   <p style={{ fontSize: 14, opacity: 0.85, maxWidth: 320, margin: "0 auto" }}>
//     Invite friends & earn rewards instantly when they book
//   </p>
// </div>

//       <div style={{ padding: 14, maxWidth: 480, margin: "0 auto" }}>

//         {/* REFERRAL CODE CARD */}
//         <div style={cardStyle}>
//           <p style={{ textAlign: "center", fontSize: 13, color: "#6b7280", fontWeight: 600, marginBottom: 10 }}>Your Referral Code</p>
//           <div style={{ border: "1.5px solid #1a5fd4", borderRadius: 10, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#f0f7ff", marginBottom: 18 }}>
//             <span style={{ fontWeight: 800, fontSize: 22, color: "#1a5fd4", letterSpacing: 3 }}>BIRD2025</span>
//             <button
//               onClick={handleCopy}
//               style={{ background: copied ? "#e8f8f0" : "#e8f0fe", border: "none", borderRadius: 8, padding: "8px 11px", cursor: "pointer", color: copied ? "#0f6e56" : "#1a5fd4", transition: "all 0.2s" }}
//             >
//               {copied ? "✓ Copied" : "Copy"}
//             </button>
//           </div>

//           <p style={{ textAlign: "center", fontSize: 12, color: "#9ca3af", marginBottom: 12 }}>Share via</p>
//           <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
//             {[
//               { label: "Share", bg: "#e3f2fd", color: "#1a5fd4", icon: "↗" },
//               { label: "WhatsApp", bg: "#e8f5e9", color: "#25D366", icon: "💬" },
//               { label: "Email", bg: "#fce4ec", color: "#e53935", icon: "✉" },
//               { label: "More", bg: "#f3f4f6", color: "#6b7280", icon: "···" },
//             ].map((item) => (
//               <div key={item.label} style={{ textAlign: "center", cursor: "pointer" }}>
//                 <div style={{ width: 46, height: 46, borderRadius: "50%", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, color: item.color, margin: "0 auto 5px", fontWeight: 700 }}>
//                   {item.icon}
//                 </div>
//                 <span style={{ fontSize: 11, color: "#6b7280" }}>{item.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* HOW IT WORKS */}
//         <div style={cardStyle}>
//           <p style={cardTitle}>How it works</p>
//           <div style={{ display: "flex", flexDirection: "column" }}>
//             {steps.map((step, i) => (
//               <div key={step.num} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
//                 <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//                   <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#1a5fd4", color: "#fff", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                     {step.num}
//                   </div>
//                   {i < 3 && <div style={{ width: 2, height: 28, background: "#1a5fd4", opacity: 0.25, margin: "3px 0" }} />}
//                 </div>
//                 <div style={{ background: "#f9fafb", border: "0.5px solid #e5e7eb", borderRadius: 10, padding: "10px 14px", flex: 1, marginBottom: i < 3 ? 0 : 0 }}>
//                   <div style={{ fontWeight: 600, fontSize: 13, color: "#111827", marginBottom: 2 }}>{step.title}</div>
//                   <div style={{ fontSize: 11, color: "#6b7280" }}>{step.desc}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* YOUR REWARDS */}
//         <div style={cardStyle}>
//           <p style={cardTitle}>Your rewards</p>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
//             <div style={{ background: "#eef4ff", border: "0.5px solid #c5d8f8", borderRadius: 10, padding: "14px 12px", display: "flex", alignItems: "center", gap: 10 }}>
//               <span style={{ fontSize: 22 }}>👥</span>
//               <div>
//                 <div style={{ fontWeight: 800, fontSize: 20, color: "#1a5fd4" }}>5</div>
//                 <div style={{ fontSize: 11, color: "#6b7280" }}>Referrals done</div>
//               </div>
//             </div>
//             <div style={{ background: "#e8f8f0", border: "0.5px solid #a8dfc0", borderRadius: 10, padding: "14px 12px", display: "flex", alignItems: "center", gap: 10 }}>
//               <span style={{ fontSize: 22 }}>💳</span>
//               <div>
//                 <div style={{ fontWeight: 800, fontSize: 20, color: "#0f6e56" }}>₹2,500</div>
//                 <div style={{ fontSize: 11, color: "#6b7280" }}>Total earned</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* REFERRAL HISTORY */}
//         <div style={cardStyle}>
//           <p style={cardTitle}>Referral history</p>
//           <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//             {referralHistory.map((ref, i) => (
//               <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 12px", background: "#f9fafb", borderRadius: 10, border: "0.5px solid #e5e7eb" }}>
//                 <div style={{ width: 40, height: 40, borderRadius: "50%", background: ref.status === "Completed" ? "#1a5fd4" : "#9ca3af", color: "#fff", fontWeight: 700, fontSize: 17, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                   {ref.initial}
//                 </div>
//                 <div style={{ flex: 1 }}>
//                   <div style={{ fontWeight: 600, fontSize: 13, color: "#111827" }}>{ref.name}</div>
//                   <div style={{ fontSize: 11, color: "#9ca3af" }}>{ref.date}</div>
//                 </div>
//                 <div style={{ textAlign: "right" }}>
//                   <span style={{ display: "inline-block", background: ref.status === "Completed" ? "#e8f8f0" : "#fff3e0", color: ref.status === "Completed" ? "#0f6e56" : "#b05a00", fontWeight: 700, fontSize: 11, borderRadius: 20, padding: "2px 9px", marginBottom: 3 }}>
//                     {ref.status}
//                   </span>
//                   <div style={{ fontWeight: 700, fontSize: 14, color: ref.status === "Completed" ? "#0f6e56" : "#9ca3af" }}>
//                     {ref.amount}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* TERMS */}
//         <div style={cardStyle}>
//           <p style={{ fontSize: 14, fontWeight: 600, color: "#111827", marginBottom: 12, display: "flex", alignItems: "center", gap: 7 }}>
//             <span style={{ background: "#eef4ff", borderRadius: "50%", width: 20, height: 20, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#1a5fd4", fontWeight: 700 }}>i</span>
//             Terms &amp; conditions
//           </p>
//           {[
//             "Referral reward valid on first booking only",
//             "Minimum booking amount: ₹1,000",
//             "Credits valid for 90 days from date of issue",
//             "Cannot be combined with other offers",
//           ].map((term, i) => (
//             <div key={i} style={{ fontSize: 12, color: "#6b7280", display: "flex", gap: 8, marginBottom: 7 }}>
//               <span style={{ color: "#1a5fd4", flexShrink: 0 }}>•</span>
//               {term}
//             </div>
//           ))}
//         </div>

//         {/* INVITE BUTTON */}
//         <button style={{ width: "100%", padding: "14px 0", borderRadius: 10, border: "none", background: "#1a5fd4", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", marginBottom: 24 }}>
//           Invite now &amp; earn ₹500
//         </button>

//       </div>
//     </div>
//   );
// }























import { useState } from "react";

const referralHistory = [
  { name: "Raj Kumar", date: "25 Nov 2025", initial: "R", status: "Completed", amount: "₹500" },
  { name: "Priya Sharma", date: "22 Nov 2025", initial: "P", status: "Completed", amount: "₹500" },
  { name: "Amit Singh", date: "20 Nov 2025", initial: "A", status: "Pending", amount: "₹0" },
];

const steps = [
  { num: 1, title: "Share your code", desc: "Send your referral code to friends" },
  { num: 2, title: "Friend signs up", desc: "They register using your code" },
  { num: 3, title: "Friend books", desc: "They complete their first booking" },
  { num: 4, title: "Both get rewarded", desc: "You both receive ₹500 credits" },
];

const terms = [
  "Referral reward valid on first booking only",
  "Minimum booking amount: ₹1,000",
  "Credits valid for 90 days from date of issue",
  "Cannot be combined with other offers",
];

export default function ReferAndEarn() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("BIRD2025");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", background: "#f0f4f8" }}>

      {/* TOP BAR */}
      <div style={{
        background: "#fff",
        padding: "14px 32px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        borderBottom: "1px solid #e2e8f0",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)"
      }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 5l-7 7 7 7" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span style={{ fontWeight: 700, fontSize: 18, color: "#111827" }}>Refer &amp; Earn</span>
      </div>

      {/* HERO BANNER — full width */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)",
        padding: "56px 60px",
        textAlign: "center",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", width: 340, height: 340, background: "rgba(255,255,255,0.04)", borderRadius: "50%", top: -120, left: -80 }} />
        <div style={{ position: "absolute", width: 300, height: 300, background: "rgba(255,255,255,0.04)", borderRadius: "50%", bottom: -100, right: -60 }} />
        <div style={{ position: "absolute", width: 200, height: 200, background: "rgba(96,165,250,0.08)", borderRadius: "50%", top: 20, right: "20%" }} />

        <div style={{
          width: 80, height: 80, borderRadius: "50%",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(10px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 20px",
          fontSize: 34,
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
        }}>👥</div>

        <h1 style={{ fontSize: 34, fontWeight: 800, marginBottom: 14, letterSpacing: "-0.5px" }}>
          Refer Friends &amp; <span style={{ color: "#60a5fa" }}>Earn Rewards</span>
        </h1>
        <div style={{
          display: "inline-block",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.22)",
          backdropFilter: "blur(8px)",
          borderRadius: 40,
          padding: "12px 32px",
          fontWeight: 700,
          fontSize: 17,
          marginBottom: 16,
        }}>
          🎁 Give ₹500 &bull; Get ₹500
        </div>
        <p style={{ fontSize: 15, opacity: 0.85, maxWidth: 480, margin: "0 auto" }}>
          Invite friends &amp; earn rewards instantly when they complete their first booking
        </p>
      </div>

      {/* MAIN CONTENT — two-column layout */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "32px 40px 48px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 24,
        alignItems: "start",
      }}>

        {/* ── LEFT COLUMN ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          {/* REFERRAL CODE CARD */}
          <div style={card}>
            <p style={sectionLabel}>Your Referral Code</p>
            <div style={{
              border: "2px solid #2563eb",
              borderRadius: 12,
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#eff6ff",
              marginBottom: 20,
            }}>
              <span style={{ fontWeight: 900, fontSize: 28, color: "#1d4ed8", letterSpacing: 5 }}>BIRD2025</span>
              <button
                onClick={handleCopy}
                style={{
                  background: copied ? "#dcfce7" : "#dbeafe",
                  border: "none", borderRadius: 8,
                  padding: "10px 18px",
                  cursor: "pointer",
                  color: copied ? "#166534" : "#1d4ed8",
                  fontWeight: 700,
                  fontSize: 14,
                  transition: "all 0.2s"
                }}
              >
                {copied ? "✓ Copied!" : "Copy"}
              </button>
            </div>

            <p style={{ textAlign: "center", fontSize: 13, color: "#94a3b8", marginBottom: 14, fontWeight: 600 }}>Share via</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 28 }}>
              {[
                { label: "Share", bg: "#e0f2fe", color: "#0369a1", icon: "↗" },
                { label: "WhatsApp", bg: "#dcfce7", color: "#16a34a", icon: "💬" },
                { label: "Email", bg: "#fee2e2", color: "#dc2626", icon: "✉" },
                { label: "More", bg: "#f1f5f9", color: "#64748b", icon: "···" },
              ].map((item) => (
                <div key={item.label} style={{ textAlign: "center", cursor: "pointer" }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%",
                    background: item.bg,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, color: item.color,
                    margin: "0 auto 6px",
                    fontWeight: 700,
                    transition: "transform 0.15s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  >
                    {item.icon}
                  </div>
                  <span style={{ fontSize: 12, color: "#64748b" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* YOUR REWARDS */}
          <div style={card}>
            <p style={{ ...cardTitle }}>Your Rewards</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ background: "linear-gradient(135deg, #eff6ff, #dbeafe)", border: "1px solid #bfdbfe", borderRadius: 14, padding: "20px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 28 }}>👥</span>
                <div>
                  <div style={{ fontWeight: 900, fontSize: 30, color: "#1d4ed8", lineHeight: 1 }}>5</div>
                  <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>Total Referrals</div>
                </div>
              </div>
              <div style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", border: "1px solid #bbf7d0", borderRadius: 14, padding: "20px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 28 }}>💳</span>
                <div>
                  <div style={{ fontWeight: 900, fontSize: 28, color: "#15803d", lineHeight: 1 }}>₹2,500</div>
                  <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>Total Earned</div>
                </div>
              </div>
            </div>
          </div>

          {/* TERMS */}
          <div style={card}>
            <p style={{ ...cardTitle, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ background: "#eff6ff", borderRadius: "50%", width: 24, height: 24, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#2563eb", fontWeight: 700 }}>i</span>
              Terms &amp; Conditions
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {terms.map((t, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, color: "#475569" }}>
                  <span style={{ color: "#2563eb", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>•</span>
                  {t}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── RIGHT COLUMN ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          {/* HOW IT WORKS */}
          <div style={card}>
            <p style={cardTitle}>How It Works</p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {steps.map((step, i) => (
                <div key={step.num} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
                      color: "#fff", fontWeight: 800, fontSize: 16,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: "0 4px 12px rgba(37,99,235,0.3)"
                    }}>
                      {step.num}
                    </div>
                    {i < 3 && <div style={{ width: 2, height: 32, background: "#bfdbfe", margin: "4px 0" }} />}
                  </div>
                  <div style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: 12,
                    padding: "14px 18px",
                    flex: 1,
                    marginBottom: i < 3 ? 0 : 0
                  }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b", marginBottom: 4 }}>{step.title}</div>
                    <div style={{ fontSize: 12, color: "#94a3b8" }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* REFERRAL HISTORY */}
          <div style={card}>
            <p style={cardTitle}>Referral History</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {referralHistory.map((ref, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "14px 16px",
                  background: "#f8fafc",
                  borderRadius: 12,
                  border: "1px solid #e2e8f0",
                  transition: "box-shadow 0.2s"
                }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
                >
                  <div style={{
                    width: 46, height: 46, borderRadius: "50%",
                    background: ref.status === "Completed"
                      ? "linear-gradient(135deg, #1d4ed8, #3b82f6)"
                      : "linear-gradient(135deg, #9ca3af, #d1d5db)",
                    color: "#fff", fontWeight: 800, fontSize: 18,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {ref.initial}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>{ref.name}</div>
                    <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{ref.date}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span style={{
                      display: "inline-block",
                      background: ref.status === "Completed" ? "#dcfce7" : "#fef3c7",
                      color: ref.status === "Completed" ? "#166534" : "#92400e",
                      fontWeight: 700, fontSize: 12,
                      borderRadius: 20, padding: "3px 12px", marginBottom: 4
                    }}>
                      {ref.status}
                    </span>
                    <div style={{ fontWeight: 800, fontSize: 16, color: ref.status === "Completed" ? "#16a34a" : "#9ca3af" }}>
                      {ref.amount}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INVITE BUTTON */}
          <button style={{
            width: "100%",
            padding: "16px 0",
            borderRadius: 12,
            border: "none",
            background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
            color: "#fff",
            fontWeight: 800,
            fontSize: 16,
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(37,99,235,0.35)",
            letterSpacing: "0.3px",
            transition: "transform 0.15s, box-shadow 0.15s",
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 10px 28px rgba(37,99,235,0.45)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(37,99,235,0.35)";
            }}
          >
            🎁 Invite Now &amp; Earn ₹500
          </button>

        </div>
      </div>
    </div>
  );
}

/* ── Shared styles ── */
const card = {
  background: "#fff",
  borderRadius: 18,
  padding: "24px",
  border: "1px solid #e2e8f0",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const sectionLabel = {
  textAlign: "center",
  fontSize: 13,
  color: "#64748b",
  fontWeight: 700,
  marginBottom: 14,
  textTransform: "uppercase",
  letterSpacing: "0.8px",
};

const cardTitle = {
  fontSize: 17,
  fontWeight: 700,
  color: "#1e293b",
  marginBottom: 18,
};