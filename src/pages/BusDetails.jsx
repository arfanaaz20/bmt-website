// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import buses from "../data/busData";
// import "./BusDetails.css";

// export default function BusDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const bus = buses.find((b) => b.id === Number(id));
//   if (!bus) return <h2>Bus not found</h2>;

//   return (
//     <div className="bus-details">

//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ← Back
//       </button>

//       <img src={bus.image} alt={bus.operator} className="detail-img" />

//       <h2>{bus.operator}</h2>
//       <p>{bus.from} → {bus.to}</p>
//       <p>{bus.time}</p>
//       <p>{bus.type}</p>

//       <h3>₹{bus.price}</h3>

//       <button
//         className="book-btn"
//         onClick={() => navigate(`/book-bus/${bus.id}`)}
//       >
//         Book Bus
//       </button>
//     </div>
//   );
// }




















import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// BusDetails uses location.state (passed via navigate from BusSearchPage)
// If your old code used useParams + separate data file, migrate to this pattern.
export default function BusDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [wishlisted, setWishlisted] = useState(false);

  // Accept bus from navigate state OR from a fallback
  const bus = location.state?.bus;
  const searchParams = location.state?.searchParams;

  if (!bus) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
        <div className="text-5xl">🚌</div>
        <h2 className="text-xl font-bold text-gray-700">Bus not found</h2>
        <p className="text-gray-400 text-sm">We couldn't load this bus. Please go back and try again.</p>
        <button onClick={() => navigate(-1)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
          ← Go Back
        </button>
      </div>
    );
  }

  const savings = (bus.originalPrice - bus.price).toFixed(0);
  const discountPct = Math.round(((bus.originalPrice - bus.price) / bus.originalPrice) * 100);

  const getClassColor = (cls) => {
    switch (cls) {
      case 'AC Sleeper': return 'bg-blue-100 text-blue-700';
      case 'Volvo AC': return 'bg-purple-100 text-purple-700';
      case 'Non-AC Sleeper': return 'bg-gray-100 text-gray-700';
      case 'Seater': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const amenityIcons = {
    'AC': '❄️', 'WiFi': '📶', 'Charging Port': '⚡', 'Blanket': '🛏️',
    'Water': '💧', 'Sleeper': '🛌', 'Snacks': '🍿', 'Entertainment': '🎥',
    'Toilet': '🚿', 'Tracking': '📍'
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Banner */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a3a8f 0%, #2563eb 60%, #3b82f6 100%)' }}>
        {/* decorative circles */}
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white opacity-5"></div>
        <div className="absolute -right-4 bottom-0 w-40 h-40 rounded-full bg-white opacity-5"></div>

        {/* Top nav */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors text-sm font-medium border border-white/20">
            ← Back
          </button>
          <button onClick={() => setWishlisted(w => !w)}
            className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors border border-white/20">
            <span className={`text-lg ${wishlisted ? '' : 'opacity-70'}`}>{wishlisted ? '❤️' : '🤍'}</span>
          </button>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${getClassColor(bus.class)}`}>{bus.class}</span>
            {discountPct > 0 && (
              <span className="px-2.5 py-0.5 bg-green-500 text-white text-xs font-semibold rounded-full">{discountPct}% OFF</span>
            )}
            {bus.availableSeats < 10 && (
              <span className="px-2.5 py-0.5 bg-red-500 text-white text-xs font-semibold rounded-full">Only {bus.availableSeats} left!</span>
            )}
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow">{bus.name}</h1>
          <p className="text-blue-200 text-sm mt-0.5">{bus.operator} • {bus.busNumber}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-5">

        {/* Journey Card */}
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <h2 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>🗺️</span> Journey Details
          </h2>
          <div className="flex items-center gap-4">
            {/* Departure */}
            <div className="flex-1 text-center">
              <div className="text-2xl font-extrabold text-gray-900">{bus.departureTime}</div>
              <div className="text-sm font-semibold text-gray-700 mt-1">{searchParams?.fromCity || 'Departure'}</div>
              <div className="text-xs text-gray-400 mt-0.5 truncate">{bus.departureStation}</div>
            </div>
            {/* Line */}
            <div className="flex-1 text-center">
              <div className="text-xs text-blue-600 font-semibold mb-1">{bus.duration}</div>
              <div className="relative flex items-center mx-2">
                <div className="flex-1 h-0.5 bg-blue-200"></div>
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mx-1 flex-shrink-0">
                  <span className="text-white text-xs">🚌</span>
                </div>
                <div className="flex-1 h-0.5 bg-blue-200"></div>
              </div>
              <div className="text-xs text-gray-400 mt-1">{bus.type}</div>
            </div>
            {/* Arrival */}
            <div className="flex-1 text-center">
              <div className="text-2xl font-extrabold text-gray-900">{bus.arrivalTime}</div>
              <div className="text-sm font-semibold text-gray-700 mt-1">{searchParams?.toCity || 'Arrival'}</div>
              <div className="text-xs text-gray-400 mt-0.5 truncate">{bus.arrivalStation}</div>
            </div>
          </div>
        </div>

        {/* Operator & Rating */}
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <h2 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>🏢</span> Operator Info
          </h2>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-lg font-bold text-gray-800">{bus.operator}</div>
              <div className="text-sm text-gray-500">{bus.type}</div>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-sm ${i < Math.floor(bus.operatorRating) ? 'text-amber-400' : 'text-gray-200'}`}>★</span>
                ))}
                <span className="text-sm font-semibold text-gray-700 ml-1">{bus.operatorRating}</span>
                <span className="text-xs text-gray-400 ml-1">Operator Rating</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-blue-600">{bus.rating}</div>
                <div className="text-xs text-gray-400">Trip Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-green-600">{bus.seats}</div>
                <div className="text-xs text-gray-400">Seats Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <h2 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>✨</span> Amenities & Features
          </h2>
          <div className="flex flex-wrap gap-3 mb-4">
            {bus.amenities.map((amenity, idx) => (
              <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg border border-blue-100">
                <span className="text-base">{amenityIcons[amenity] || '✓'}</span>
                <span className="text-sm font-medium text-blue-700">{amenity}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
            {bus.features.map((feature, idx) => (
              <span key={idx} className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-100 font-medium">
                ✓ {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Boarding & Dropping */}
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <h2 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>📍</span> Boarding & Dropping Points
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <div className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-1">Boarding Point</div>
              <div className="font-semibold text-gray-800">{bus.boardingPoint}</div>
              <div className="text-xs text-gray-500 mt-1">⏰ Arrive 15 mins before {bus.departureTime}</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <div className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">Dropping Point</div>
              <div className="font-semibold text-gray-800">{bus.droppingPoint}</div>
              <div className="text-xs text-gray-500 mt-1">🏁 Expected arrival: {bus.arrivalTime}</div>
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <h2 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>📋</span> Policies
          </h2>
          <div className="space-y-2.5">
            {[
              { icon: '✅', text: 'Free cancellation up to 24 hours before departure', color: 'text-green-600' },
              { icon: '🎟️', text: 'No booking fee — price shown is the final price', color: 'text-green-600' },
              { icon: '📧', text: 'E-ticket sent instantly to your email and SMS', color: 'text-blue-600' },
              { icon: '⚠️', text: 'Please carry a valid government ID for boarding', color: 'text-amber-600' },
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex-shrink-0">{p.icon}</span>
                <span className={`${p.color}`}>{p.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price Summary & Book */}
        <div className="bg-white rounded-xl shadow-md p-5 border border-blue-100">
          <h2 className="text-base font-bold text-gray-800 mb-4">Price Summary</h2>
          <div className="space-y-2 text-sm mb-5">
            <div className="flex justify-between text-gray-500">
              <span>Base fare (per seat)</span>
              <span className="line-through">₹{bus.originalPrice.toFixed(0)}</span>
            </div>
            <div className="flex justify-between text-green-600 font-medium">
              <span>Discount ({discountPct}% off)</span>
              <span>- ₹{savings}</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Booking fee</span>
              <span className="text-green-600 font-medium">FREE</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold text-lg text-gray-800">
              <span>Total per seat</span>
              <span className="text-blue-600">₹{bus.price.toFixed(0)}</span>
            </div>
          </div>
          <button
            onClick={() => navigate('/select-seats', { state: { bus, searchParams, passengers: searchParams?.passengers || 1 } })}
            className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold text-base hover:bg-blue-700 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2">
            Select Seats & Book →
          </button>
          <p className="text-center text-xs text-gray-400 mt-2">No hidden charges · Instant e-ticket</p>
        </div>

      </div>
    </div>
  );
}