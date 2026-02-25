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






// import React, { useRef } from "react";
// import "./AirlinePartners.css";
// import { useNavigate } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import flight1 from "../assets/flights/AirA.jpeg";
// import flight2 from "../assets/flights/AirE.png";
// import flight3 from "../assets/flights/AirM.jpeg";

// export default function AirlinePartners() {
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);

//   const airlines = [
//     { img: flight1, route: "/flights" },
//     { img: flight2, route: "/flights" },
//     { img: flight3, route: "/flights" },
//     { img: flight1, route: "/flights" }, 
//     { img: flight2, route: "/flights" },
//   ];

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = window.innerWidth > 768 ? 400 : 300;
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section className="airline-section">
//       <div className="airline-container">
//         <h2 className="airline-title">Experience Flying with our Airline Partners</h2>

//         <div className="carousel-relative">
//           <button className="airline-nav left" onClick={() => scroll("left")}>
//             <ChevronLeft size={24} />
//           </button>

//           <div className="airline-wrapper" ref={scrollRef}>
//             {airlines.map((a, i) => (
//               <div
//                 key={i}
//                 className="airline-card"
//                 onClick={() => navigate(a.route)}
//               >
//                 <img src={a.img} alt="Airline Partner" className="airline-img" />
//               </div>
//             ))}
//           </div>

//           <button className="airline-nav right" onClick={() => scroll("right")}>
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }