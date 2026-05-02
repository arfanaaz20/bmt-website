// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./HotelDetails.css";
// import { useLocation } from "react-router-dom";

// export default function BookHotel() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
// const { totalPrice } = location.state || {};

//   const [hotel, setHotel] = useState(null);

//   useEffect(() => {
//     const fetchHotel = async () => {
//       try {
//         const res = await axios.get("https://bmtadmin.onrender.com/api/hotels/all");

//         // 👉 id match (_id API se aa raha h)
//         const found = res.data.find(h => h._id === id);

//         setHotel(found);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchHotel();
//   }, [id]);

//   if (!hotel) return <h2>Loading...</h2>;
//   return (
//   <div className="hotel-container">

//     <button className="back-btn" onClick={() => navigate(-1)}>
//       Back
//     </button>

//     <div className="hotel-card">

//       <h2>Booking Confirmation</h2>

//       <h3 className="hotel-title">{hotel.hotelName}</h3>
//       <p className="hotel-city">{hotel.city}</p>

//       <div className="price">₹{hotel.pricePerNight}</div>

//       <button className="confirm-btn">
//         Confirm Booking
//       </button>

//     </div>
//   </div>
// );
// }













// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";
// import "./HotelDetails.css";

// export default function BookHotel() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();

//   // ✅ receive data from previous page
//   const { totalPrice, checkIn, checkOut, breakfast, pickup } =
//     location.state || {};

//   const [hotel, setHotel] = useState(null);

//   useEffect(() => {
//     const fetchHotel = async () => {
//       try {
//         const res = await axios.get(
//           "https://bmtadmin.onrender.com/api/hotels/all"
//         );
//         const found = res.data.find((h) => h._id === id);
//         setHotel(found);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchHotel();
//   }, [id]);

//   if (!hotel) return <h2>Loading...</h2>;

//   return (
//     <div className="hotel-container">
//       <button className="back-btn" onClick={() => navigate(-1)}>
//          Back
//       </button>

//       <div className="hotel-card">
//         <h2>Booking Confirmation</h2>

//         <h3 className="hotel-title">{hotel.hotelName}</h3>
//         <p className="hotel-city">{hotel.city}</p>

//         {/* ✅ FINAL PRICE FIX */}
//         <div className="price">
//           ₹{totalPrice || hotel.pricePerNight}
//         </div>

//         {/* ✅ EXTRA INFO (optional but useful) */}
//         {checkIn && <p>Check-in: {new Date(checkIn).toDateString()}</p>}
//         {checkOut && <p>Check-out: {new Date(checkOut).toDateString()}</p>}

//         {breakfast && <p>✔ Breakfast included</p>}
//         {pickup && <p>✔ Pickup included</p>}

//         <button className="confirm-btn">
//           Confirm Booking
//         </button>
//       </div>
//     </div>
//   );
// }


















import React, { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import axios from "axios";
import "./HotelDetails.css";

export default function BookHotel() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { totalPrice, checkIn, checkOut, breakfast, pickup } =
    location.state || {};

  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotel = async () => {
      const res = await axios.get(
        "https://bmtadmin.onrender.com/api/hotels/all"
      );
      const found = res.data.find((h) => h._id === id);
      setHotel(found);
    };
    fetchHotel();
  }, [id]);

  // ✅ BOOKING API
  const handleBooking = async () => {
    try {
      const payload = {
        hotelId: id,
        hotelName: hotel.hotelName,
        city: hotel.city,
        checkIn,
        checkOut,
        breakfast,
        pickup,
        totalPrice: totalPrice || hotel.pricePerNight,
      };

      const res = await axios.post(
        "https://bmtadmin.onrender.com/api/hotel-bookings/create",
        payload
      );

      console.log(res.data);

      alert("Booking Successful ✅");

      navigate("/booking-confirmation");

    } catch (error) {
      console.error(error);
      alert("Booking Failed ❌");
    }
  };

  if (!hotel) return <h2>Loading...</h2>;

  return (
    <div className="hotel-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="hotel-card">
        <h2>Booking Confirmation</h2>

        <h3 className="hotel-title">{hotel.hotelName}</h3>
        <p className="hotel-city">{hotel.city}</p>

        <div className="price">
          ₹{totalPrice || hotel.pricePerNight}
        </div>

        {checkIn && (
          <p>Check-in: {new Date(checkIn).toDateString()}</p>
        )}
        {checkOut && (
          <p>Check-out: {new Date(checkOut).toDateString()}</p>
        )}

        {breakfast && <p>✔ Breakfast included</p>}
        {pickup && <p>✔ Pickup included</p>}

        <button className="confirm-btn" onClick={handleBooking}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
}