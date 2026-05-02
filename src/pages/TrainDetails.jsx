// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import trains from "../data/trainData";
// import "./TrainDetails.css";

// export default function TrainDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const train = trains.find((t) => t.id === Number(id));
//   if (!train) return <h2>Train not found</h2>;

//   return (
//     <div className="train-details">
//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ← Back
//       </button>

//       <img src={train.image} alt={train.name} className="detail-img" />

//       <h2>{train.name}</h2>
//       <p>{train.from} → {train.to}</p>
//       <p>{train.time}</p>
//       <p>{train.type}</p>

//       <h3>₹{train.price}</h3>

//       <button
//         className="book-btn"
//         onClick={() => navigate(`/book-train/${train.id}`)}
//       >
//         Book Train
//       </button>
//     </div>
//   );
// }



















import React from "react";

const Train = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      
      <div className="text-center px-6">
        
        {/* Icon */}
        <div className="text-6xl mb-4">🚆</div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-blue-600 mb-3">
          Train Booking
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Coming Soon
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6 max-w-md mx-auto">
          We are working hard to bring train booking feature for you.
          Stay tuned for exciting updates!
        </p>

        {/* Button */}
        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back
        </button>

      </div>
    </div>
  );
};

export default Train;