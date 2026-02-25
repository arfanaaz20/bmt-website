
// import "./Visa.css";
// import VisaCard from "./VisaCard";

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
//     desc: "Smooth transit visa processing.",
//     points: [
//       "Short stay permissions",
//       "Airport transit guidance",
//       "Fast-track processing",
//       "24×7 support",
//     ],
//   },
// ];

// const countries = [
//   { name: "Dubai", time: "3–5 Days" },
//   { name: "Thailand", time: "4–6 Days" },
//   { name: "Singapore", time: "5–7 Days" },
//   { name: "Malaysia", time: "6–8 Days" },
//   { name: "United Kingdom", time: "10–15 Days" },
//   { name: "United States", time: "15–30 Days" },
//   { name: "Canada", time: "20–35 Days" },
//   { name: "Australia", time: "15–25 Days" },
//   { name: "Schengen Countries", time: "10–15 Days" },
// ];

// export default function VisaSection() {
//   return (
//     <section className="visa-section">

//       {/* COMPLETE VISA SERVICES */}
//       <div className="visa-service-shell">
//         <h2 className="visa-title">Complete Visa Services</h2>
//         <p className="visa-subtitle">
//           End-to-end visa assistance with high approval success rate.
//         </p>

//         <div className="visa-grid">
//           {visaTypes.map((item, index) => (
//             <VisaCard key={index} {...item} />
//           ))}
//         </div>
//       </div>

//       <div className="visa-container">

//         {/* DOCUMENTS */}
//         <div className="visa-docs">
//           <h3>Documents We Assist With</h3>
//           <ul>
//             <li>✔ Passport & Photographs</li>
//             <li>✔ Visa Application Form</li>
//             <li>✔ Flight & Hotel Bookings</li>
//             <li>✔ Bank Statements</li>
//             <li>✔ Travel Insurance</li>
//             <li>✔ Invitation Letter</li>
//             <li>✔ Cover Letter</li>
//           </ul>
//         </div>

//         {/* COUNTRIES */}
//         <div className="visa-countries">
//           <h3>Countries & Processing Time</h3>
//           <div className="country-list">
//             {countries.map((c, i) => (
//               <div className="country-card" key={i}>
//                 <strong>{c.name}</strong>
//                 <span>{c.time}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* WHY CHOOSE US – OUTER DIV */}
//         <div className="why-outer-div">
//           <h3 className="why-title">Why Choose Us?</h3>

//           <div className="why-grid">
//             <div>✅ High Approval Rate</div>
//             <div>⚡ Fast Processing</div>
//             <div>🧑‍💼 Expert Consultants</div>
//             <div>📞 24×7 Support</div>
//             <div>💰 Transparent Pricing</div>
//             <div>🌍 Worldwide Coverage</div>
//           </div>
//         </div>

//         {/* CTA – SEPARATE DIV */}
//         <div className="visa-cta-section">
//           <h3>Start Your Visa Process Today</h3>
//           <p>Get expert guidance from our visa specialists.</p>

//           <div className="cta-buttons">
//             <button
//               className="apply-btn"
//               onClick={() => (window.location.href = "/apply-visa")}
//             >
//               Apply Now
//             </button>

//             <button
//               className="contact-btn"
//               onClick={() =>
//                 window.open("https://wa.me/919876543210", "_blank")
//               }
//             >
//               Talk to Expert
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }




import "./Visa.css";
import VisaCard from "./VisaCard";
import { useLocation } from "react-router-dom";

const visaTypes = [
  {
    icon: "✈️",
    title: "Tourist Visa",
    desc: "Explore the world with our fast tourist visa service.",
    points: [
      "Single & multiple entry",
      "Hotel & flight support",
      "Travel insurance guidance",
      "Fast approval assistance",
    ],
  },
  {
    icon: "💼",
    title: "Business Visa",
    desc: "Professional visa support for global business travel.",
    points: [
      "Meeting & conference visa",
      "Invitation letter assistance",
      "Priority processing",
      "Multiple entry options",
    ],
  },
  {
    icon: "🎓",
    title: "Student Visa",
    desc: "Complete student visa support for abroad education.",
    points: [
      "University offer guidance",
      "Financial document support",
      "Embassy interview prep",
      "Long-term visa assistance",
    ],
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family / Visit Visa",
    desc: "Visit family members without stress.",
    points: [
      "Invitation letter help",
      "Relationship proof guidance",
      "Short & long-term stay",
      "Quick documentation check",
    ],
  },
  {
    icon: "💍",
    title: "Marriage / Partner Visa",
    desc: "Settle abroad with spouse visa assistance.",
    points: [
      "Marriage proof support",
      "Dependent visa filing",
      "Legal documentation help",
      "Long-term settlement guidance",
    ],
  },
  {
    icon: "🛂",
    title: "Transit Visa",
    desc: "Smooth transit visa processing.",
    points: [
      "Short stay permissions",
      "Airport transit guidance",
      "Fast-track processing",
      "24×7 support",
    ],
  },
];

const countries = [
  { name: "Dubai", time: "3–5 Days" },
  { name: "Thailand", time: "4–6 Days" },
  { name: "Singapore", time: "5–7 Days" },
  { name: "Malaysia", time: "6–8 Days" },
  { name: "United Kingdom", time: "10–15 Days" },
  { name: "United States", time: "15–30 Days" },
  { name: "Canada", time: "20–35 Days" },
  { name: "Australia", time: "15–25 Days" },
  { name: "Schengen Countries", time: "10–15 Days" },
];

export default function VisaSection() {
  const location = useLocation();

  // ❌ Home / Hero page par Visa section hide
  if (location.pathname === "/" || location.pathname === "/home") {
    return null;
  }

  return (
    <section className="visa-section">
      {/* COMPLETE VISA SERVICES */}
      <div className="visa-service-shell">
        <h2 className="visa-title">Complete Visa Services</h2>
        <p className="visa-subtitle">
          End-to-end visa assistance with high approval success rate.
        </p>

        <div className="visa-grid">
          {visaTypes.map((item, index) => (
            <VisaCard key={index} {...item} />
          ))}
        </div>
      </div>

      <div className="visa-container">
        {/* DOCUMENTS */}
        <div className="visa-docs">
          <h3>Documents We Assist With</h3>
          <ul>
            <li>✔ Passport & Photographs</li>
            <li>✔ Visa Application Form</li>
            <li>✔ Flight & Hotel Bookings</li>
            <li>✔ Bank Statements</li>
            <li>✔ Travel Insurance</li>
            <li>✔ Invitation Letter</li>
            <li>✔ Cover Letter</li>
          </ul>
        </div>

        {/* COUNTRIES */}
        <div className="visa-countries">
          <h3>Countries & Processing Time</h3>
          <div className="country-list">
            {countries.map((c, i) => (
              <div className="country-card" key={i}>
                <strong>{c.name}</strong>
                <span>{c.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="why-outer-div">
          <h3 className="why-title">Why Choose Us?</h3>
          <div className="why-grid">
            <div>✅ High Approval Rate</div>
            <div>⚡ Fast Processing</div>
            <div>🧑‍💼 Expert Consultants</div>
            <div>📞 24×7 Support</div>
            <div>💰 Transparent Pricing</div>
            <div>🌍 Worldwide Coverage</div>
          </div>
        </div>

        {/* CTA */}
        <div className="visa-cta-section">
          <h3>Start Your Visa Process Today</h3>
          <p>Get expert guidance from our visa specialists.</p>

          <div className="cta-buttons">
            <button
              className="apply-btn"
              onClick={() => (window.location.href = "/apply-visa")}
            >
              Apply Now
            </button>

            <button
              className="contact-btn"
              onClick={() =>
                window.open("https://wa.me/919876543210", "_blank")
              }
            >
              Talk to Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
