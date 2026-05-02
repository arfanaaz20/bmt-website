// import "./AirlinePartners.css";
// import { useNavigate } from "react-router-dom";

// // ✅ CORRECT PATH (assets/flights)
// import flight1 from "../assets/flights/AirA.jpeg";
// import flight2 from "../assets/flights/AirE.png";
// import flight3 from "../assets/flights/AirM.jpeg";

// export default function AirlinePartners() {
//   const navigate = useNavigate();

//   const airlines = [
//     { name: "AirAsia", img: flight1, route: "/flights" },
//     { name: "Etihad Airways", img: flight2, route: "/flights" },
//     { name: "Malaysia Airlines", img: flight3, route: "/flights" },
//   ];

//   return (
//     <section className="airline-section">
//       <div className="airline-container">
//         <h2>Experience Flying with our Airline Partners</h2>

//         <div className="airline-grid">
//           {airlines.map((a, i) => (
//             <div
//               key={i}
//               className="airline-card"
//               style={{ backgroundImage: `url(${a.img})` }}
//               onClick={() => navigate(a.route)}
//             >
//               <div className="airline-overlay">
//                 <span>{a.name}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


















import "./AirlinePartners.css";
import { useNavigate } from "react-router-dom";

import flight1 from "../assets/flights/AirA.jpeg";
import flight2 from "../assets/flights/AirE.png";
import flight3 from "../assets/flights/AirM.jpeg";

export default function AirlinePartners() {
  const navigate = useNavigate();

  const airlines = [
    { name: "AirAsia", img: flight1, route: "/flights" },
    { name: "Etihad Airways", img: flight2, route: "/flights" },
    { name: "Malaysia Airlines", img: flight3, route: "/flights" },
  ];

  return (
    <section className="airline-section">
      <div className="airline-container">
        <h2>Experience Flying with our Airline Partners</h2>

        <div className="airline-grid ">
          {airlines.map((a, i) => (
            <div
              key={i}
              className="airline-card"
              style={{ backgroundImage: `url(${a.img})` }}
              onClick={() => navigate(a.route)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


