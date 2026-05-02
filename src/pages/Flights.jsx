// import React, { useState, useEffect, useCallback, useRef } from "react";
// import axios from "axios";
// import {
//   Plane,
//   Filter,
//   X,
//   ChevronDown,
//   Calendar,
//   MapPin,
//   Users,
//   ArrowLeftRight,
//   Star,
//   Clock,
//   Check,
//   Loader2,
//   Search,
//   AlertCircle,
//   ChevronLeft,
//   ChevronRight,
//   Wallet,
//   Shield,
//   BaggageClaim,
//   ChefHat,
//   Wifi,
//   ChevronUp,
//   User,
//   Mail,
//   Phone,
//   CreditCard,
//   CheckCircle,
//   Globe,
//   FileText,
//   Ticket
// } from "lucide-react";

// // Create axios instance
// const api = axios.create({
//   timeout: 150000,
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   }
// });

// /* ---------------------------------------------------------------
//  * ── REUSABLE COMPONENTS ──
//  --------------------------------------------------------------- */

// function FilterGroup({ filter, checked, onChange }) {
//   const id = `flt-${filter.label.replace(/\s+/g, "-").toLowerCase()}`;
  
//   return (
//     <div className="flex items-center justify-between py-3 hover:bg-gray-50 px-2 rounded-lg transition-colors">
//       <div className="flex items-center">
//         <input 
//           type="checkbox" 
//           id={id} 
//           checked={checked}
//           onChange={(e) => onChange(filter.label, e.target.checked)}
//           className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//         />
//         <label htmlFor={id} className="ml-3 cursor-pointer select-none text-sm font-medium text-gray-700">
//           {filter.label}
//         </label>
//       </div>
      
//       <div className="flex items-center gap-2">
//         <span className="text-sm font-semibold text-blue-600">{filter.price}</span>
//         <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{filter.count}</span>
//       </div>
//     </div>
//   );
// }

// function AirlineChip({ airline, selected, onClick }) {
//   return (
//     <button 
//       onClick={() => onClick(airline.airlineName)}
//       className={`flex items-center gap-3 p-3 border rounded-xl transition-all duration-200 w-full ${
//         selected 
//           ? "border-blue-600 bg-blue-50 shadow-sm" 
//           : "border-gray-200 hover:border-blue-300 hover:shadow-sm"
//       }`}
//     >
//       {airline.airlineImage ? (
//         <img 
//           src={airline.airlineImage} 
//           alt={airline.airlineName}
//           className="w-8 h-8 object-contain"
//           onError={(e) => {
//             e.target.style.display = 'none';
//             e.target.nextSibling.style.display = 'flex';
//           }}
//         />
//       ) : null}
//       <div 
//         className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white ${airline.airlineImage ? 'hidden' : 'flex'}`}
//         style={{ backgroundColor: airline.color || '#666666' }}
//       >
//         {airline.airlineCode || airline.airlineName?.charAt(0)}
//       </div>
//       <div className="text-left flex-1">
//         <span className="text-sm font-semibold text-gray-800 block">{airline.airlineName}</span>
//         <span className="text-xs text-gray-500">{airline.airlineCode || airline.callsign}</span>
//       </div>
//     </button>
//   );
// }

// function TimeBox({ range, price, active = false, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`border rounded-xl p-3 text-center cursor-pointer transition-all duration-200 w-full ${
//         active 
//           ? "border-blue-600 bg-blue-50 shadow-sm" 
//           : "border-gray-200 hover:border-blue-300 hover:shadow-sm"
//       }`}
//     >
//       <div className="text-sm font-semibold text-gray-800">{range}</div>
//       <div className="text-xs text-gray-500 mt-1">from</div>
//       <div className="text-sm font-bold text-blue-600 mt-1">{price}</div>
//     </button>
//   );
// }

// function AirportDropdown({ 
//   value, 
//   onChange, 
//   label, 
//   placeholder, 
//   airports, 
//   loading,
//   icon: Icon 
// }) {
//   const [search, setSearch] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [filteredAirports, setFilteredAirports] = useState([]);

//   useEffect(() => {
//     if (search.length > 0) {
//       const filtered = airports.filter(airport =>
//         airport.airportName?.toLowerCase().includes(search.toLowerCase()) ||
//         airport.airportCode?.toLowerCase().includes(search.toLowerCase()) ||
//         airport.cityCode?.toLowerCase().includes(search.toLowerCase())
//       );
//       setFilteredAirports(filtered.slice(0, 8));
//     } else {
//       setFilteredAirports([]);
//     }
//   }, [search, airports]);

//   const selectedAirport = airports.find(a => a.airportCode === value);

//   return (
//     <div className="relative">
//       <div className="flex items-center mb-2">
//         <Icon size={16} className="text-gray-500 mr-2" />
//         <label className="text-sm font-medium text-gray-700">{label}</label>
//       </div>
//       <div className="relative">
//         <input
//           type="text"
//           value={search || (selectedAirport ? `${selectedAirport.airportCode} - ${selectedAirport.cityCode}` : "")}
//           onChange={(e) => {
//             setSearch(e.target.value);
//             setShowDropdown(true);
//           }}
//           onFocus={() => setShowDropdown(true)}
//           onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
//           placeholder={placeholder}
//           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-sm"
//         />
//         {loading && (
//           <div className="absolute right-3 top-3">
//             <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
//           </div>
//         )}
//         {showDropdown && search.length > 0 && (
//           <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
//             {filteredAirports.length > 0 ? (
//               filteredAirports.map((airport) => (
//                 <button
//                   key={airport._id || airport.airportCode}
//                   type="button"
//                   className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b last:border-b-0 transition-colors"
//                   onMouseDown={() => {
//                     onChange(airport.airportCode);
//                     setSearch("");
//                     setShowDropdown(false);
//                   }}
//                 >
//                   <div className="font-semibold text-gray-900">
//                     {airport.airportCode} - {airport.cityCode}
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     {airport.airportName}
//                   </div>
//                 </button>
//               ))
//             ) : (
//               <div className="px-4 py-3 text-gray-500 text-sm">
//                 No airports found
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// /* ---------------------------------------------------------------
//  * ── BOOKING FORM COMPONENT ──
//  --------------------------------------------------------------- */

// function BookingForm({ flight, onClose, onBookingComplete }) {
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [bookingSuccess, setBookingSuccess] = useState(false);
//   const [bookingDetails, setBookingDetails] = useState(null);
//   const [errors, setErrors] = useState({});

//   // Passenger form state
//   const [passenger, setPassenger] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     gender: "Male",
//     dateOfBirth: "",
//     nationality: "IN",
//     passportNumber: "",
//     passportExpiry: "",
//     frequentFlyer: {
//       program: "",
//       number: ""
//     }
//   });

//   // Payment form state
//   const [payment, setPayment] = useState({
//     cardNumber: "",
//     cardHolder: "",
//     expiryMonth: "",
//     expiryYear: "",
//     cvv: "",
//     saveCard: false
//   });

//   // Promo codes state
//   const [promoCodes, setPromoCodes] = useState([
//     { id: 1, code: "NEWUSER500", description: "New user promo (1st booking)", discount: "₹500 OFF", valid: true },
//     { id: 2, code: "FLIGHT600", description: "New user promo (2nd booking)", discount: "₹600 OFF", valid: true },
//     { id: 3, code: "FLYER10", description: "Flyer Exclusive offer", discount: "10% off (up to ₹600)", valid: true },
//   ]);
//   const [selectedPromoCode, setSelectedPromoCode] = useState("");
//   const [promoApplied, setPromoApplied] = useState(false);
//   const [promoDiscount, setPromoDiscount] = useState(0);

//   // Calculate total price
//   const calculateTotal = () => {
//     let total = flight.basePrice || 11105;
//     if (promoApplied) {
//       if (selectedPromoCode === "NEWUSER500") {
//         total = Math.max(0, total - 500);
//       } else if (selectedPromoCode === "FLIGHT600") {
//         total = Math.max(0, total - 600);
//       } else if (selectedPromoCode === "FLYER10") {
//         const discount = Math.min(total * 0.1, 600);
//         total = Math.max(0, total - discount);
//       }
//     }
//     return total;
//   };

//   const totalPrice = calculateTotal();

//   // Handle passenger input change
//   const handlePassengerChange = (field, value) => {
//     setPassenger(prev => ({
//       ...prev,
//       [field]: value
//     }));
    
//     // Clear error for this field
//     if (errors[field]) {
//       setErrors(prev => ({
//         ...prev,
//         [field]: ""
//       }));
//     }
//   };

//   // Handle payment input change
//   const handlePaymentChange = (field, value) => {
//     setPayment(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   // Validate step 1 (passenger details)
//   const validatePassengerDetails = () => {
//     const newErrors = {};
    
//     if (!passenger.firstName.trim()) {
//       newErrors.firstName = "First name is required";
//     }
    
//     if (!passenger.lastName.trim()) {
//       newErrors.lastName = "Last name is required";
//     }
    
//     if (!passenger.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(passenger.email)) {
//       newErrors.email = "Email is invalid";
//     }
    
//     if (!passenger.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\d{10}$/.test(passenger.phone.replace(/\D/g, ''))) {
//       newErrors.phone = "Phone number must be 10 digits";
//     }
    
//     if (!passenger.dateOfBirth) {
//       newErrors.dateOfBirth = "Date of birth is required";
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Validate step 2 (payment details)
//   const validatePaymentDetails = () => {
//     const newErrors = {};
    
//     if (!payment.cardNumber.trim()) {
//       newErrors.cardNumber = "Card number is required";
//     } else if (!/^\d{16}$/.test(payment.cardNumber.replace(/\D/g, ''))) {
//       newErrors.cardNumber = "Card number must be 16 digits";
//     }
    
//     if (!payment.cardHolder.trim()) {
//       newErrors.cardHolder = "Card holder name is required";
//     }
    
//     if (!payment.expiryMonth || !payment.expiryYear) {
//       newErrors.expiry = "Expiry date is required";
//     } else {
//       const now = new Date();
//       const expiryDate = new Date(
//         parseInt(payment.expiryYear),
//         parseInt(payment.expiryMonth) - 1
//       );
//       if (expiryDate < now) {
//         newErrors.expiry = "Card has expired";
//       }
//     }
    
//     if (!payment.cvv.trim()) {
//       newErrors.cvv = "CVV is required";
//     } else if (!/^\d{3,4}$/.test(payment.cvv)) {
//       newErrors.cvv = "CVV must be 3 or 4 digits";
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Apply promo code
//   const applyPromoCode = () => {
//     if (!selectedPromoCode) return;
    
//     const promo = promoCodes.find(p => p.code === selectedPromoCode);
//     if (promo && promo.valid) {
//       setPromoApplied(true);
      
//       // Calculate discount amount
//       let discount = 0;
//       if (promo.code === "NEWUSER500") discount = 500;
//       else if (promo.code === "FLIGHT600") discount = 600;
//       else if (promo.code === "FLYER10") {
//         discount = Math.min((flight.basePrice || 11105) * 0.1, 600);
//       }
      
//       setPromoDiscount(discount);
//       alert(`Promo code "${promo.code}" applied! You saved ₹${discount}`);
//     } else {
//       alert("Invalid or expired promo code");
//     }
//   };

//   // Handle next step
//   const handleNext = () => {
//     if (step === 1) {
//       if (validatePassengerDetails()) {
//         setStep(2);
//       }
//     } else if (step === 2) {
//       if (validatePaymentDetails()) {
//         handleBooking();
//       }
//     }
//   };

//   // Handle booking submission
//   const handleBooking = async () => {
//     setLoading(true);
    
//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       // Generate booking reference
//       const bookingRef = `TRP${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
      
//       const bookingData = {
//         bookingReference: bookingRef,
//         flight: {
//           airline: flight.airline,
//           flightNumber: flight.flightNumber,
//           departure: `${flight.from} → ${flight.to}`,
//           departureTime: flight.departureTime?.toLocaleString() || flight.departure,
//           arrivalTime: flight.arrivalTime?.toLocaleString() || flight.arrival,
//           duration: flight.duration,
//         },
//         passenger: passenger,
//         payment: {
//           lastFour: payment.cardNumber.slice(-4),
//           amount: totalPrice,
//         },
//         bookingTime: new Date().toLocaleString(),
//         status: "Confirmed",
//         tripCoins: Math.floor(totalPrice / 100) * 25,
//       };
      
//       setBookingDetails(bookingData);
//       setBookingSuccess(true);
      
//       // Callback to parent with booking details
//       if (onBookingComplete) {
//         onBookingComplete(bookingData);
//       }
      
//     } catch (error) {
//       console.error("Booking failed:", error);
//       alert("Booking failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ArrowRight component for flight details
//   const ArrowRight = ({ size = 16, className = "" }) => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <line x1="5" y1="12" x2="19" y2="12" />
//       <polyline points="12 5 19 12 12 19" />
//     </svg>
//   );

//   // Render step 1 - Passenger Details
//   const renderPassengerDetails = () => (
//     <div className="space-y-6">
//       <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
//         <div className="flex items-center justify-between mb-2">
//           <h3 className="font-bold text-gray-900">Flight Details</h3>
//           <span className="text-sm font-semibold text-blue-600">{flight.price}</span>
//         </div>
//         <div className="flex items-center justify-between text-sm">
//           <div className="flex items-center gap-2">
//             <Plane size={14} className="text-blue-500" />
//             <span className="font-medium">{flight.airline}</span>
//             <span className="text-gray-500">{flight.flightNumber}</span>
//           </div>
//           <span className="text-gray-600">{flight.duration}</span>
//         </div>
//         <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
//           <div className="text-center">
//             <div className="font-semibold">{flight.departure}</div>
//             <div>{flight.from}</div>
//           </div>
//           <ArrowRight size={16} className="text-gray-400" />
//           <div className="text-center">
//             <div className="font-semibold">{flight.arrival}</div>
//             <div>{flight.to}</div>
//           </div>
//         </div>
//       </div>

//       <div className="border-t pt-6">
//         <h3 className="text-lg font-bold text-gray-900 mb-4">Passenger Details</h3>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               First Name *
//             </label>
//             <input
//               type="text"
//               value={passenger.firstName}
//               onChange={(e) => handlePassengerChange("firstName", e.target.value)}
//               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
//                 errors.firstName ? "border-red-500" : "border-gray-300"
//               }`}
//               placeholder="Enter first name"
//             />
//             {errors.firstName && (
//               <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
//             )}
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Last Name *
//             </label>
//             <input
//               type="text"
//               value={passenger.lastName}
//               onChange={(e) => handlePassengerChange("lastName", e.target.value)}
//               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
//                 errors.lastName ? "border-red-500" : "border-gray-300"
//               }`}
//               placeholder="Enter last name"
//             />
//             {errors.lastName && (
//               <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email *
//             </label>
//             <input
//               type="email"
//               value={passenger.email}
//               onChange={(e) => handlePassengerChange("email", e.target.value)}
//               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
//                 errors.email ? "border-red-500" : "border-gray-300"
//               }`}
//               placeholder="Enter email"
//             />
//             {errors.email && (
//               <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//             )}
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Phone Number *
//             </label>
//             <div className="flex">
//               <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
//                 <span className="text-gray-700">+91</span>
//               </div>
//               <input
//                 type="tel"
//                 value={passenger.phone}
//                 onChange={(e) => handlePassengerChange("phone", e.target.value)}
//                 className={`flex-1 px-4 py-3 border rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
//                   errors.phone ? "border-red-500" : "border-gray-300"
//                 }`}
//                 placeholder="9876543210"
//                 maxLength="10"
//               />
//             </div>
//             {errors.phone && (
//               <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Gender
//             </label>
//             <select
//               value={passenger.gender}
//               onChange={(e) => handlePassengerChange("gender", e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//             >
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Date of Birth *
//             </label>
//             <input
//               type="date"
//               value={passenger.dateOfBirth}
//               onChange={(e) => handlePassengerChange("dateOfBirth", e.target.value)}
//               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
//                 errors.dateOfBirth ? "border-red-500" : "border-gray-300"
//               }`}
//               max={new Date().toISOString().split("T")[0]}
//             />
//             {errors.dateOfBirth && (
//               <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth}</p>
//             )}
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Nationality
//             </label>
//             <select
//               value={passenger.nationality}
//               onChange={(e) => handlePassengerChange("nationality", e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//             >
//               <option value="IN">India</option>
//               <option value="US">United States</option>
//               <option value="UK">United Kingdom</option>
//               <option value="AE">UAE</option>
//               <option value="SG">Singapore</option>
//             </select>
//           </div>
//         </div>

//         <div className="mb-6">
//           <h4 className="text-sm font-medium text-gray-700 mb-3">
//             Frequent Flyer Program (Optional)
//           </h4>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <select
//                 value={passenger.frequentFlyer.program}
//                 onChange={(e) => handlePassengerChange("frequentFlyer", {
//                   ...passenger.frequentFlyer,
//                   program: e.target.value
//                 })}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//               >
//                 <option value="">Select program</option>
//                 <option value="AI">Air India</option>
//                 <option value="6E">IndiGo</option>
//                 <option value="SG">SpiceJet</option>
//                 <option value="UK">Vistara</option>
//                 <option value="AK">AirAsia</option>
//               </select>
//             </div>
//             <div>
//               <input
//                 type="text"
//                 value={passenger.frequentFlyer.number}
//                 onChange={(e) => handlePassengerChange("frequentFlyer", {
//                   ...passenger.frequentFlyer,
//                   number: e.target.value
//                 })}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//                 placeholder="Frequent flyer number"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // Render step 2 - Payment Details
//   const renderPaymentDetails = () => (
//     <div className="space-y-6">
//       <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
//         <h3 className="font-bold text-gray-900 mb-3">Price Summary</h3>
//         <div className="space-y-2">
//           <div className="flex justify-between text-sm">
//             <span className="text-gray-600">Base Fare</span>
//             <span className="font-medium">₹ {(flight.basePrice || 11105).toLocaleString()}</span>
//           </div>
//           <div className="flex justify-between text-sm">
//             <span className="text-gray-600">Taxes & Fees</span>
//             <span className="font-medium">₹ 0</span>
//           </div>
//           {promoApplied && (
//             <div className="flex justify-between text-sm">
//               <span className="text-green-600">Promo Discount</span>
//               <span className="font-medium text-green-600">-₹ {promoDiscount.toLocaleString()}</span>
//             </div>
//           )}
//           <div className="border-t pt-2 mt-2">
//             <div className="flex justify-between">
//               <span className="font-bold">Total</span>
//               <span className="text-xl font-bold text-blue-600">₹ {totalPrice.toLocaleString()}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="border-t pt-6">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-lg font-bold text-gray-900">Payment Details</h3>
//           <div className="flex items-center gap-1 text-sm text-green-600">
//             <Shield size={16} />
//             <span>Secure Payment</span>
//           </div>
//         </div>

//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Card Number *
//           </label>
//           <input
//             type="text"
//             value={payment.cardNumber}
//             onChange={(e) => handlePaymentChange("cardNumber", e.target.value.replace(/\D/g, '').slice(0, 16))}
//             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
//               errors.cardNumber ? "border-red-500" : "border-gray-300"
//             }`}
//             placeholder="1234 5678 9012 3456"
//             maxLength="19"
//           />
//           {errors.cardNumber && (
//             <p className="mt-1 text-sm text-red-600">{errors.cardNumber}</p>
//           )}
//         </div>

//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Card Holder Name *
//           </label>
//           <input
//             type="text"
//             value={payment.cardHolder}
//             onChange={(e) => handlePaymentChange("cardHolder", e.target.value)}
//             className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
//               errors.cardHolder ? "border-red-500" : "border-gray-300"
//             }`}
//             placeholder="JOHN DOE"
//           />
//           {errors.cardHolder && (
//             <p className="mt-1 text-sm text-red-600">{errors.cardHolder}</p>
//           )}
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//           <div className="col-span-2 md:col-span-1">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Expiry Month *
//             </label>
//             <select
//               value={payment.expiryMonth}
//               onChange={(e) => handlePaymentChange("expiryMonth", e.target.value)}
//               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
//                 errors.expiry ? "border-red-500" : "border-gray-300"
//               }`}
//             >
//               <option value="">Month</option>
//               {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
//                 <option key={month} value={month.toString().padStart(2, '0')}>
//                   {month.toString().padStart(2, '0')}
//                 </option>
//               ))}
//             </select>
//           </div>
          
//           <div className="col-span-2 md:col-span-1">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Expiry Year *
//             </label>
//             <select
//               value={payment.expiryYear}
//               onChange={(e) => handlePaymentChange("expiryYear", e.target.value)}
//               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
//                 errors.expiry ? "border-red-500" : "border-gray-300"
//               }`}
//             >
//               <option value="">Year</option>
//               {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map(year => (
//                 <option key={year} value={year}>
//                   {year}
//                 </option>
//               ))}
//             </select>
//           </div>
          
//           <div className="col-span-2 md:col-span-1">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               CVV *
//             </label>
//             <input
//               type="password"
//               value={payment.cvv}
//               onChange={(e) => handlePaymentChange("cvv", e.target.value.replace(/\D/g, '').slice(0, 4))}
//               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
//                 errors.cvv ? "border-red-500" : "border-gray-300"
//               }`}
//               placeholder="123"
//               maxLength="4"
//             />
//             {errors.cvv && (
//               <p className="mt-1 text-sm text-red-600">{errors.cvv}</p>
//             )}
//           </div>
          
//           <div className="col-span-2 md:col-span-1 flex items-end">
//             <label className="flex items-center text-sm text-gray-700">
//               <input
//                 type="checkbox"
//                 checked={payment.saveCard}
//                 onChange={(e) => handlePaymentChange("saveCard", e.target.checked)}
//                 className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2"
//               />
//               Save card for future
//             </label>
//           </div>
//         </div>

//         {errors.expiry && (
//           <p className="mt-1 text-sm text-red-600">{errors.expiry}</p>
//         )}
//       </div>

//       <div className="border-t pt-6">
//         <h3 className="text-lg font-bold text-gray-900 mb-4">Apply Promo Code</h3>
//         <div className="flex gap-2 mb-4">
//           <select
//             value={selectedPromoCode}
//             onChange={(e) => setSelectedPromoCode(e.target.value)}
//             className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//           >
//             <option value="">Select promo code</option>
//             {promoCodes.map(promo => (
//               <option key={promo.id} value={promo.code}>
//                 {promo.code} - {promo.description}
//               </option>
//             ))}
//           </select>
//           <button
//             type="button"
//             onClick={applyPromoCode}
//             disabled={!selectedPromoCode || promoApplied}
//             className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Apply
//           </button>
//         </div>
        
//         {promoApplied && (
//           <div className="bg-green-50 border border-green-200 rounded-lg p-4">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <CheckCircle size={20} className="text-green-600" />
//                 <span className="font-medium text-green-800">
//                   Promo code applied! You saved ₹{promoDiscount}
//                 </span>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => {
//                   setPromoApplied(false);
//                   setSelectedPromoCode("");
//                   setPromoDiscount(0);
//                 }}
//                 className="text-sm text-red-600 hover:text-red-800"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );

//   // Render success screen
//   const renderSuccessScreen = () => (
//     <div className="text-center py-8">
//       <div className="mb-6">
//         <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
//           <CheckCircle size={48} className="text-green-600" />
//         </div>
//       </div>
      
//       <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
//       <p className="text-gray-600 mb-6">
//         Your flight has been successfully booked
//       </p>
      
//       <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-md mx-auto mb-6">
//         <div className="text-center mb-4">
//           <div className="text-sm text-gray-500 mb-1">Booking Reference</div>
//           <div className="text-2xl font-bold text-blue-600">
//             {bookingDetails?.bookingReference}
//           </div>
//         </div>
        
//         <div className="space-y-3 text-left">
//           <div className="flex justify-between">
//             <span className="text-gray-600">Flight</span>
//             <span className="font-medium">
//               {bookingDetails?.flight.airline} {bookingDetails?.flight.flightNumber}
//             </span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-gray-600">Passenger</span>
//             <span className="font-medium">
//               {bookingDetails?.passenger.firstName} {bookingDetails?.passenger.lastName}
//             </span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-gray-600">Amount Paid</span>
//             <span className="font-medium">
//               ₹ {bookingDetails?.payment.amount.toLocaleString()}
//             </span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-gray-600">Status</span>
//             <span className="font-medium text-green-600">
//               {bookingDetails?.status}
//             </span>
//           </div>
//         </div>
//       </div>
      
//       <div className="flex flex-col sm:flex-row gap-3 justify-center">
//         <button
//           type="button"
//           onClick={() => window.print()}
//           className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50"
//         >
//           Print Ticket
//         </button>
//         <button
//           type="button"
//           onClick={onClose}
//           className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         {/* Header */}
//         <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
//           <div>
//             <h2 className="text-xl font-bold text-gray-900">
//               {bookingSuccess ? "Booking Confirmed" : "Complete Your Booking"}
//             </h2>
//             {!bookingSuccess && (
//               <div className="flex items-center gap-2 mt-1">
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${flight.airlineLogo ? 'hidden' : 'flex'}`}
//                   style={{ backgroundColor: flight.airlineColor }}>
//                   {flight.airlineCode}
//                 </div>
//                 <span className="text-sm text-gray-600">
//                   {flight.airline} • {flight.flightNumber} • {flight.duration}
//                 </span>
//               </div>
//             )}
//           </div>
//           <button
//             onClick={onClose}
//             className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         {/* Progress Steps */}
//         {!bookingSuccess && (
//           <div className="px-6 py-4 border-b border-gray-200">
//             <div className="flex items-center justify-between">
//               {[1, 2].map((stepNum) => (
//                 <React.Fragment key={stepNum}>
//                   <div className="flex flex-col items-center">
//                     <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
//                       step === stepNum
//                         ? "bg-blue-600 text-white"
//                         : step > stepNum
//                         ? "bg-green-100 text-green-600"
//                         : "bg-gray-100 text-gray-400"
//                     }`}>
//                       {step > stepNum ? <CheckCircle size={20} /> : stepNum}
//                     </div>
//                     <span className="text-xs mt-1 font-medium">
//                       {stepNum === 1 ? "Passenger" : "Payment"}
//                     </span>
//                   </div>
//                   {stepNum < 2 && (
//                     <div className={`flex-1 h-1 mx-2 ${
//                       step > stepNum ? "bg-green-500" : "bg-gray-200"
//                     }`} />
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Content */}
//         <div className="p-6">
//           {loading ? (
//             <div className="text-center py-12">
//               <Loader2 className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto" />
//               <p className="mt-4 text-gray-600">Processing your booking...</p>
//             </div>
//           ) : bookingSuccess ? (
//             renderSuccessScreen()
//           ) : step === 1 ? (
//             renderPassengerDetails()
//           ) : (
//             renderPaymentDetails()
//           )}
//         </div>

//         {/* Footer */}
//         {!bookingSuccess && !loading && (
//           <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//               <div>
//                 <div className="text-sm text-gray-600">Total Amount</div>
//                 <div className="text-2xl font-bold text-blue-600">
//                   ₹ {totalPrice.toLocaleString()}
//                 </div>
//                 {promoApplied && (
//                   <div className="text-sm text-green-600 mt-1">
//                     You saved ₹{promoDiscount} with promo code
//                   </div>
//                 )}
//               </div>
//               <div className="flex gap-3">
//                 {step > 1 && (
//                   <button
//                     type="button"
//                     onClick={() => setStep(step - 1)}
//                     className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
//                   >
//                     Back
//                   </button>
//                 )}
//                 <button
//                   type="button"
//                   onClick={handleNext}
//                   disabled={loading}
//                   className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 flex-1 sm:flex-none"
//                 >
//                   {step === 1 ? "Continue to Payment" : "Confirm & Pay"}
//                 </button>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
//               <Shield size={12} />
//               <span>Your payment is secure and encrypted</span>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// /* ---------------------------------------------------------------
//  * ── FLIGHT SEARCH HEADER COMPONENT ──
//  --------------------------------------------------------------- */

// function FlightSearchHeader({ 
//   from, 
//   to, 
//   onSearch, 
//   loading,
//   airports,
//   airportsLoading
// }) {
//   const [fromCity, setFromCity] = useState(from || "DEL");
//   const [toCity, setToCity] = useState(to || "BOM");
//   const [tripType, setTripType] = useState("Return");
//   const [departureDate, setDepartureDate] = useState(
//     new Date(Date.now() + 86400000).toISOString().split("T")[0]
//   );
//   const [returnDate, setReturnDate] = useState(
//     new Date(Date.now() + 172800000).toISOString().split("T")[0]
//   );
//   const [travelers, setTravelers] = useState({ adults: 1, children: 0, infants: 0 });
//   const [travelClass, setTravelClass] = useState("Economy");
//   const [showTravelerMenu, setShowTravelerMenu] = useState(false);
//   const [directOnly, setDirectOnly] = useState(false);

//   const handleSwap = () => {
//     const temp = fromCity;
//     setFromCity(toCity);
//     setToCity(temp);
//   };

//   const handleSearch = () => {
//     if (fromCity && toCity) {
//       onSearch(fromCity, toCity);
//     }
//   };

//   const handleTravelerChange = (type, value) => {
//     setTravelers(prev => {
//       const newValue = prev[type] + value;
//       if (newValue >= 0 && newValue <= 9) {
//         return { ...prev, [type]: newValue };
//       }
//       return prev;
//     });
//   };

//   const getTotalTravelers = () => {
//     return travelers.adults + travelers.children + travelers.infants;
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-IN', {
//       day: 'numeric',
//       month: 'short',
//     });
//   };

//   const selectedFromAirport = airports.find(a => a.airportCode === fromCity);
//   const selectedToAirport = airports.find(a => a.airportCode === toCity);

//   return (
//     <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-4 mb-6 shadow-lg">
//       {/* Trip Type Tabs */}
//       <div className="flex gap-1 mb-6 bg-blue-500 p-1 rounded-xl max-w-md">
//         {["Return", "One-way", "Multi-city"].map((type) => (
//           <button
//             key={type}
//             className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors ${
//               tripType === type
//                 ? "bg-white text-blue-600 shadow-sm"
//                 : "text-white hover:bg-blue-400"
//             }`}
//             onClick={() => setTripType(type)}
//           >
//             {type}
//           </button>
//         ))}
//       </div>

//       {/* Airport Inputs - Compact Row */}
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
//         {/* From */}
//         <div className="md:col-span-5 bg-white rounded-xl p-4 shadow-sm">
//           <div className="flex items-center justify-between mb-1">
//             <label className="text-xs font-medium text-gray-500">From</label>
//             <MapPin size={14} className="text-gray-400" />
//           </div>
//           <input
//             type="text"
//             value={selectedFromAirport ? `${selectedFromAirport.airportCode} - ${selectedFromAirport.cityCode}` : fromCity}
//             onChange={(e) => setFromCity(e.target.value.toUpperCase())}
//             placeholder="City or airport"
//             className="w-full text-lg font-bold text-gray-900 bg-transparent border-none outline-none placeholder-gray-400"
//           />
//           <div className="text-sm text-gray-500 mt-1 truncate">
//             {selectedFromAirport?.airportName?.split(' ').slice(0, 3).join(' ')}
//           </div>
//         </div>

//         {/* Swap Button */}
//         <div className="md:col-span-2 flex items-center justify-center">
//           <button
//             onClick={handleSwap}
//             className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow -mt-4 md:mt-0"
//             type="button"
//           >
//             <ArrowLeftRight size={18} className="text-blue-600" />
//           </button>
//         </div>

//         {/* To */}
//         <div className="md:col-span-5 bg-white rounded-xl p-4 shadow-sm">
//           <div className="flex items-center justify-between mb-1">
//             <label className="text-xs font-medium text-gray-500">To</label>
//             <MapPin size={14} className="text-gray-400" />
//           </div>
//           <input
//             type="text"
//             value={selectedToAirport ? `${selectedToAirport.airportCode} - ${selectedToAirport.cityCode}` : toCity}
//             onChange={(e) => setToCity(e.target.value.toUpperCase())}
//             placeholder="City or airport"
//             className="w-full text-lg font-bold text-gray-900 bg-transparent border-none outline-none placeholder-gray-400"
//           />
//           <div className="text-sm text-gray-500 mt-1 truncate">
//             {selectedToAirport?.airportName?.split(' ').slice(0, 3).join(' ')}
//           </div>
//         </div>
//       </div>

//       {/* Dates and Travelers - Compact Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
//         <div className="bg-white rounded-xl p-3 shadow-sm">
//           <div className="flex items-center justify-between mb-1">
//             <label className="text-xs font-medium text-gray-500">Departure</label>
//             <Calendar size={14} className="text-gray-400" />
//           </div>
//           <div className="text-sm font-semibold text-gray-900">{formatDate(departureDate)}</div>
//           <input
//             type="date"
//             value={departureDate}
//             onChange={(e) => setDepartureDate(e.target.value)}
//             min={new Date().toISOString().split("T")[0]}
//             className="hidden"
//           />
//         </div>

//         {tripType === "Return" && (
//           <div className="bg-white rounded-xl p-3 shadow-sm">
//             <div className="flex items-center justify-between mb-1">
//               <label className="text-xs font-medium text-gray-500">Return</label>
//               <Calendar size={14} className="text-gray-400" />
//             </div>
//             <div className="text-sm font-semibold text-gray-900">{formatDate(returnDate)}</div>
//             <input
//               type="date"
//               value={returnDate}
//               onChange={(e) => setReturnDate(e.target.value)}
//               min={departureDate}
//               className="hidden"
//             />
//           </div>
//         )}

//         <div className="bg-white rounded-xl p-3 shadow-sm relative">
//           <div className="flex items-center justify-between mb-1">
//             <label className="text-xs font-medium text-gray-500">Travellers & Class</label>
//             <Users size={14} className="text-gray-400" />
//           </div>
//           <button
//             onClick={() => setShowTravelerMenu(!showTravelerMenu)}
//             className="w-full text-left"
//             type="button"
//           >
//             <div className="text-sm font-semibold text-gray-900">{getTotalTravelers()} Traveller</div>
//             <div className="text-xs text-gray-500">{travelClass}</div>
//           </button>

//           {showTravelerMenu && (
//             <div className="absolute z-50 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4 right-0">
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <div className="font-medium text-sm">Adults (12+)</div>
//                     <div className="text-xs text-gray-500">Economy, Premium, Business</div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <button
//                       type="button"
//                       onClick={() => handleTravelerChange('adults', -1)}
//                       disabled={travelers.adults <= 1}
//                       className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
//                     >
//                       -
//                     </button>
//                     <span className="font-medium w-4 text-center">{travelers.adults}</span>
//                     <button
//                       type="button"
//                       onClick={() => handleTravelerChange('adults', 1)}
//                       disabled={travelers.adults >= 9}
//                       className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <div>
//                     <div className="font-medium text-sm">Children (2-11)</div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <button
//                       type="button"
//                       onClick={() => handleTravelerChange('children', -1)}
//                       disabled={travelers.children <= 0}
//                       className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
//                     >
//                       -
//                     </button>
//                     <span className="font-medium w-4 text-center">{travelers.children}</span>
//                     <button
//                       type="button"
//                       onClick={() => handleTravelerChange('children', 1)}
//                       disabled={travelers.children >= 9}
//                       className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <div>
//                     <div className="font-medium text-sm">Infants (under 2)</div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <button
//                       type="button"
//                       onClick={() => handleTravelerChange('infants', -1)}
//                       disabled={travelers.infants <= 0}
//                       className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
//                     >
//                       -
//                     </button>
//                     <span className="font-medium w-4 text-center">{travelers.infants}</span>
//                     <button
//                       type="button"
//                       onClick={() => handleTravelerChange('infants', 1)}
//                       disabled={travelers.infants >= 9}
//                       className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>

//                 <div className="pt-3 border-t">
//                   <div className="text-sm font-medium mb-2">Cabin Class</div>
//                   <div className="grid grid-cols-2 gap-2">
//                     {["Economy", "Premium", "Business", "First"].map((cls) => (
//                       <button
//                         key={cls}
//                         type="button"
//                         className={`px-3 py-2 rounded text-xs ${
//                           travelClass === cls
//                             ? "border-blue-600 bg-blue-50 text-blue-600 font-medium"
//                             : "border-gray-200 hover:border-gray-300"
//                         }`}
//                         onClick={() => setTravelClass(cls)}
//                       >
//                         {cls}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => setShowTravelerMenu(false)}
//                   className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
//                 >
//                   Apply
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="bg-white rounded-xl p-3 shadow-sm flex items-center justify-between">
//           <div>
//             <div className="text-xs font-medium text-gray-500 mb-1">Direct flights</div>
//             <div className="text-sm font-semibold text-gray-900">{directOnly ? "Yes" : "No"}</div>
//           </div>
//           <button
//             type="button"
//             onClick={() => setDirectOnly(!directOnly)}
//             className="relative"
//           >
//             <div className={`w-10 h-6 rounded-full transition-colors ${directOnly ? 'bg-blue-600' : 'bg-gray-300'}`}>
//               <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform ${directOnly ? 'translate-x-5' : 'translate-x-1'} translate-y-1`}></div>
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Search Button */}
//       <div>
//         <button
//           onClick={handleSearch}
//           disabled={loading || !fromCity || !toCity}
//           className={`w-full py-3.5 rounded-xl font-bold text-white text-base transition-all duration-200 shadow-lg ${
//             loading || !fromCity || !toCity
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 active:scale-[0.98]"
//           }`}
//           type="button"
//         >
//           {loading ? (
//             <div className="flex items-center justify-center gap-2">
//               <Loader2 className="w-5 h-5 animate-spin" />
//               <span>Searching...</span>
//             </div>
//           ) : (
//             <div className="flex items-center justify-center gap-2">
//               <Search size={18} />
//               <span>SEARCH FLIGHTS</span>
//             </div>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// }

// /* ---------------------------------------------------------------
//  * ── FILTERS DATA ──
//  --------------------------------------------------------------- */

// const staticIndianAirports = [
//   {
//     _id: "1",
//     airportCode: "DEL",
//     airportName: "Indira Gandhi International Airport",
//     cityCode: "Delhi",
//     countryName: "India"
//   },
//   {
//     _id: "2",
//     airportCode: "BOM",
//     airportName: "Chhatrapati Shivaji Maharaj International Airport",
//     cityCode: "Mumbai",
//     countryName: "India"
//   },
//   {
//     _id: "3",
//     airportCode: "BLR",
//     airportName: "Kempegowda International Airport",
//     cityCode: "Bengaluru",
//     countryName: "India"
//   },
//   {
//     _id: "4",
//     airportCode: "MAA",
//     airportName: "Chennai International Airport",
//     cityCode: "Chennai",
//     countryName: "India"
//   },
//   {
//     _id: "5",
//     airportCode: "HYD",
//     airportName: "Rajiv Gandhi International Airport",
//     cityCode: "Hyderabad",
//     countryName: "India"
//   },
//   {
//     _id: "6",
//     airportCode: "CCU",
//     airportName: "Netaji Subhash Chandra Bose International Airport",
//     cityCode: "Kolkata",
//     countryName: "India"
//   },
//   {
//     _id: "7",
//     airportCode: "AMD",
//     airportName: "Sardar Vallabhbhai Patel International Airport",
//     cityCode: "Ahmedabad",
//     countryName: "India"
//   },
//   {
//     _id: "8",
//     airportCode: "GOI",
//     airportName: "Goa International Airport",
//     cityCode: "Goa",
//     countryName: "India"
//   },
//   {
//     _id: "9",
//     airportCode: "PNQ",
//     airportName: "Pune International Airport",
//     cityCode: "Pune",
//     countryName: "India"
//   },
//   {
//     _id: "10",
//     airportCode: "LKO",
//     airportName: "Chaudhary Charan Singh International Airport",
//     cityCode: "Lucknow",
//     countryName: "India"
//   }
// ];

// /* ---------------------------------------------------------------
//  * ── PAGINATION COMPONENT ──
//  --------------------------------------------------------------- */

// function Pagination({ currentPage, totalPages, onPageChange }) {
//   const pages = [];
//   const maxVisible = 5;
  
//   let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
//   let endPage = Math.min(totalPages, startPage + maxVisible - 1);
  
//   if (endPage - startPage + 1 < maxVisible) {
//     startPage = Math.max(1, endPage - maxVisible + 1);
//   }

//   for (let i = startPage; i <= endPage; i++) {
//     pages.push(i);
//   }

//   return (
//     <div className="flex items-center justify-center space-x-2 mt-6">
//       <button
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//         className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
//       >
//         <ChevronLeft size={16} />
//       </button>
      
//       {startPage > 1 && (
//         <>
//           <button
//             onClick={() => onPageChange(1)}
//             className={`px-3 py-2 text-sm font-medium ${
//               1 === currentPage
//                 ? 'bg-blue-600 text-white'
//                 : 'border border-gray-300 hover:bg-gray-50'
//             } rounded-lg`}
//           >
//             1
//           </button>
//           {startPage > 2 && <span className="px-1 text-gray-500">...</span>}
//         </>
//       )}
      
//       {pages.map((page) => (
//         <button
//           key={page}
//           onClick={() => onPageChange(page)}
//           className={`px-3 py-2 min-w-[36px] text-sm font-medium ${
//             page === currentPage
//               ? 'bg-blue-600 text-white'
//               : 'border border-gray-300 hover:bg-gray-50'
//           } rounded-lg`}
//         >
//           {page}
//         </button>
//       ))}
      
//       {endPage < totalPages && (
//         <>
//           {endPage < totalPages - 1 && <span className="px-1 text-gray-500">...</span>}
//           <button
//             onClick={() => onPageChange(totalPages)}
//             className={`px-3 py-2 text-sm font-medium ${
//               totalPages === currentPage
//                 ? 'bg-blue-600 text-white'
//                 : 'border border-gray-300 hover:bg-gray-50'
//             } rounded-lg`}
//           >
//             {totalPages}
//           </button>
//         </>
//       )}
      
//       <button
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//         className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
//       >
//         <ChevronRight size={16} />
//       </button>
//     </div>
//   );
// }

// /* ---------------------------------------------------------------
//  * ── MAIN FLIGHT SEARCH PAGE ──
//  --------------------------------------------------------------- */

// export default function FlightSearchPage() {
//   // Search states
//   const [origin, setOrigin] = useState("DEL");
//   const [destination, setDestination] = useState("BOM");
  
//   // Flight data states
//   const [flights, setFlights] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
  
//   // Airport data
//   const [airports, setAirports] = useState(staticIndianAirports);
//   const [airportsLoading, setAirportsLoading] = useState(false);
  
//   // Airline logos data
//   const [airlines, setAirlines] = useState([]);
//   const [airlinesLoading, setAirlinesLoading] = useState(false);
  
//   // Filter states
//   const [showFilters, setShowFilters] = useState(false);
//   const [selectedFilters, setSelectedFilters] = useState({
//     "Non Stop": true,
//     "Evening Flights": true,
//   });
//   const [selectedAirlines, setSelectedAirlines] = useState([]);
//   const [selectedTimeRange, setSelectedTimeRange] = useState("6 AM – 12 PM");
  
//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const [flightsPerPage] = useState(30);
  
//   // Booking form states
//   const [showBookingForm, setShowBookingForm] = useState(false);
//   const [selectedFlight, setSelectedFlight] = useState(null);
//   const [bookingCompleted, setBookingCompleted] = useState(false);
  
//   // Use refs to track initial load
//   const initialLoadRef = useRef(false);
//   const airlinesFetchedRef = useRef(false);
  
//   // Fetch airlines from API - RUNS ONLY ONCE
//   const fetchAirlines = useCallback(async () => {
//     if (airlinesFetchedRef.current) return;
    
//     try {
//       setAirlinesLoading(true);
//       airlinesFetchedRef.current = true;
      
//       const response = await api.get("https://bmt-aw7b.onrender.com/api/world-airlines");
      
//       if (response.data && Array.isArray(response.data)) {
//         const filteredAirlines = response.data
//           .filter(airline => airline.airlineCode && airline.airlineCode.trim() !== "")
//           .slice(0, 50);
        
//         console.log(`Loaded ${filteredAirlines.length} airlines with logos`);
//         setAirlines(filteredAirlines);
//       }
//     } catch (err) {
//       console.error("Error fetching airlines:", err);
//       const fallbackAirlines = [
//         { airlineName: "IndiGo", airlineCode: "6E", airlineImage: null, color: "#004184" },
//         { airlineName: "Air India", airlineCode: "AI", airlineImage: null, color: "#004080" },
//         { airlineName: "Vistara", airlineCode: "UK", airlineImage: null, color: "#7b1fa2" },
//         { airlineName: "SpiceJet", airlineCode: "SG", airlineImage: null, color: "#d32f2f" },
//         { airlineName: "AirAsia", airlineCode: "AK", airlineImage: null, color: "#f44336" },
//         { airlineName: "Akasa Air", airlineCode: "QP", airlineImage: null, color: "#E61313" },
//       ];
//       setAirlines(fallbackAirlines);
//     } finally {
//       setAirlinesLoading(false);
//     }
//   }, []);
  
//   // Fetch airports from API - RUNS ONLY ONCE
//   const fetchAirports = useCallback(async () => {
//     try {
//       setAirportsLoading(true);
//       setAirports(staticIndianAirports);
      
//       try {
//         const response = await api.get("https://bmt-aw7b.onrender.com/api/airports");
//         if (response.data && Array.isArray(response.data) && response.data.length > 0) {
//           setAirports(response.data);
//         }
//       } catch (apiErr) {
//         console.log("Airports API failed, using static data");
//       }
//     } catch (err) {
//       console.error("Error in fetchAirports:", err);
//     } finally {
//       setAirportsLoading(false);
//     }
//   }, []);
  
//   // Fetch flights from API - MAIN FUNCTION
//   const fetchFlights = useCallback(async (searchOrigin = null, searchDestination = null) => {
//     setLoading(true);
//     setError(null);
//     setFlights([]);
//     setCurrentPage(1);
    
//     try {
//       let url;
//       if (searchOrigin && searchDestination) {
//         url = `https://bmt-aw7b.onrender.com/api/live-flights/fetch?origin=${searchOrigin}&destination=${searchDestination}`;
//       } else {
//         url = "https://bmt-aw7b.onrender.com/api/live-flights/all";
//       }
      
//       const response = await api.get(url);
      
//       if (response.data && Array.isArray(response.data)) {
//         if (response.data.length === 0) {
//           setError("No flights found for this route");
//           return;
//         }
        
//         const mappedFlights = response.data
//           .filter(flight => {
//             const totalFare = flight.totalFare || 
//               (flight.baseFare || 0) + (flight.tax || 0) + (flight.convenienceFee || 0);
//             return totalFare > 0;
//           })
//           .map((flight, index) => {
//             const departureTime = new Date(flight.departure_time);
//             const arrivalTime = new Date(flight.arrival_time);
//             const durationMs = arrivalTime - departureTime;
//             const hours = Math.floor(durationMs / (1000 * 60 * 60));
//             const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
            
//             const duration = `${hours}h ${minutes}m`;
//             const isNonStop = true;
//             const airlineName = flight.airline || "Unknown Airline";
            
//             // Find airline logo from airlines data
//             const airlineData = airlines.find(a => 
//               a.airlineName === airlineName || 
//               a.airlineCode === flight.airlineCode ||
//               a.callsign === flight.callsign
//             );
            
//             const baseFare = flight.baseFare || 0;
//             const tax = flight.tax || 0;
            
//             let convenienceFee = 0;
//             let convenienceFeeType = "Fixed";
//             if (flight.convenienceFee !== undefined) {
//               convenienceFee = flight.convenienceFee;
//             } else if (flight.convenienceFeeValue !== undefined) {
//               convenienceFee = flight.convenienceFeeValue;
//               convenienceFeeType = flight.convenienceFeeType || "Fixed";
//             }
            
//             const totalFare = flight.totalFare || 
//               (flight.baseFare || 0) + (flight.tax || 0) + convenienceFee;
            
//             const convenienceFeeDisplay = convenienceFeeType === "Fixed" 
//               ? `₹${convenienceFee}`
//               : `${convenienceFee}%`;
            
//             const departureDisplay = departureTime.toLocaleTimeString('en-IN', { 
//               hour: '2-digit', 
//               minute: '2-digit',
//               hour12: false 
//             }).replace(':', ' ');
            
//             const arrivalDisplay = arrivalTime.toLocaleTimeString('en-IN', { 
//               hour: '2-digit', 
//               minute: '2-digit',
//               hour12: false 
//             }).replace(':', ' ');
            
//             return {
//               id: flight._id || `flight-${index}`,
//               airline: airlineName,
//               airlineCode: flight.airlineCode || getAirlineCode(airlineName),
//               airlineLogo: airlineData?.airlineImage || null,
//               airlineColor: airlineData?.color || getAirlineColor(airlineName),
//               flightNumber: flight.flightNumber || `${getAirlineCode(airlineName)}${Math.floor(100 + Math.random() * 900)}`,
//               departureTime: departureTime,
//               arrivalTime: arrivalTime,
//               departure: departureDisplay,
//               arrival: arrivalDisplay,
//               duration: duration,
//               from: flight.origin,
//               to: flight.destination,
//               price: `₹${totalFare.toLocaleString('en-IN')}`,
//               basePrice: totalFare,
//               baseFare: baseFare,
//               tax: tax,
//               convenienceFee: convenienceFeeDisplay,
//               totalFare: totalFare,
//               rating: (Math.random() * 1.5 + 3.5).toFixed(1),
//               isNonStop: isNonStop,
//               terminal: flight.terminal || (Math.random() > 0.5 ? "1" : "2"),
//               offer: getRandomOffer(),
//               offerColor: getRandomOfferColor(),
//               offerTextColor: getRandomOfferTextColor(),
//               badge: getFlightBadge(totalFare),
//               badgeColor: getBadgeColor(totalFare),
//               amenities: getRandomAmenities(),
//               apiData: flight,
//               createdAt: new Date(flight.createdAt),
//               updatedAt: new Date(flight.updatedAt || flight.createdAt)
//             };
//           });
        
//         console.log(`Loaded ${mappedFlights.length} flights with valid fares`);
//         setFlights(mappedFlights);
//       } else {
//         setError("Invalid response from server");
//       }
//     } catch (err) {
//       console.error("Error fetching flights:", err);
//       setError("Failed to fetch flights. Please check your connection and try again.");
//     } finally {
//       setLoading(false);
//     }
//   }, []);
  
//   // Helper functions
//   const getAirlineCode = (airline) => {
//     const codes = {
//       'IndiGo': '6E',
//       'Air India': 'AI',
//       'Vistara': 'UK',
//       'SpiceJet': 'SG',
//       'AirAsia': 'AK',
//       'Air India Express': 'IX',
//       'Akasa Air': 'QP',
//       'Virgin Atlantic': 'VS',
//       'Singapore Airlines': 'SQ',
//       'Lufthansa': 'LH',
//       'KLM': 'KL',
//       'SWISS': 'LX',
//       'Japan Airlines': 'JL',
//       'Qantas': 'QF',
//       'American Airlines': 'AA',
//       'Delta Air Lines': 'DL',
//       'United Airlines': 'UA',
//       'Emirates': 'EK',
//       'Qatar Airways': 'QR',
//       'Turkish Airlines': 'TK',
//     };
//     return codes[airline] || airline?.substring(0, 2).toUpperCase() || 'XX';
//   };
  
//   const getRandomOffer = () => {
//     const offers = [
//       "Get ₹500 OFF using FLIGHT500",
//       "Free Meal + Priority Check‑in",
//       "No Cancellation Charges",
//       "Extra 10kg Baggage Free",
//       "Business Class Upgrade at ₹3,000",
//     ];
//     return offers[Math.floor(Math.random() * offers.length)];
//   };
  
//   const getRandomOfferColor = () => {
//     return '#e8f5e9';
//   };
  
//   const getRandomOfferTextColor = () => {
//     return '#2e7d32';
//   };
  
//   const getRandomAmenities = () => {
//     const amenities = [
//       { icon: BaggageClaim, label: "20kg", color: "#3b82f6" },
//       { icon: ChefHat, label: "Meal", color: "#ef4444" },
//       { icon: Wifi, label: "Wi-Fi", color: "#8b5cf6" },
//       { icon: Shield, label: "Refundable", color: "#10b981" },
//     ];
//     return amenities.slice(0, Math.floor(Math.random() * 3) + 1);
//   };
  
//   const getFlightBadge = (price) => {
//     if (price < 4000) return "Cheapest";
//     if (price < 6000) return "Popular";
//     if (price > 8000) return "Premium";
//     return "Best Value";
//   };
  
//   const getBadgeColor = (price) => {
//     if (price < 4000) return "#10b981";
//     if (price < 6000) return "#3b82f6";
//     if (price > 8000) return "#8b5cf6";
//     return "#f59e0b";
//   };
  
//   // Dynamic filters based on available flights
//   const generateFilters = useCallback(() => {
//     const nonStopFlights = flights.filter(f => f.isNonStop).length;
//     const morningFlights = flights.filter(f => {
//       const hour = parseInt(f.departure.split(' ')[0]);
//       return hour >= 6 && hour < 12;
//     }).length;
//     const eveningFlights = flights.filter(f => {
//       const hour = parseInt(f.departure.split(' ')[0]);
//       return hour >= 18 && hour < 24;
//     }).length;
    
//     // Count airlines
//     const airlineCounts = {};
//     flights.forEach(flight => {
//       airlineCounts[flight.airline] = (airlineCounts[flight.airline] || 0) + 1;
//     });
    
//     const airlineFilters = airlines
//       .filter(airline => airlineCounts[airline.airlineName] > 0)
//       .map(airline => ({
//         ...airline,
//         price: `₹ ${Math.floor(4000 + Math.random() * 6000).toLocaleString()}`,
//         count: airlineCounts[airline.airlineName] || 0
//       }))
//       .slice(0, 8); // Top 8 airlines
    
//     return {
//       popularFilters: [
//         { label: "Non Stop", price: `₹ ${Math.floor(6000 + Math.random() * 3000).toLocaleString()}`, count: nonStopFlights },
//         { label: "Refundable Fares", price: `₹ ${Math.floor(8000 + Math.random() * 2000).toLocaleString()}`, count: Math.floor(flights.length * 0.6) },
//         { label: "Morning Flights", price: `₹ ${Math.floor(6000 + Math.random() * 2000).toLocaleString()}`, count: morningFlights },
//         { label: "Evening Flights", price: `₹ ${Math.floor(7000 + Math.random() * 2000).toLocaleString()}`, count: eveningFlights },
//       ],
//       airlineFilters
//     };
//   }, [flights, airlines]);
  
//   const { popularFilters, airlineFilters: dynamicAirlineFilters } = generateFilters();
  
//   // Handle search
//   const handleSearch = (searchOrigin, searchDestination) => {
//     setOrigin(searchOrigin);
//     setDestination(searchDestination);
//     fetchFlights(searchOrigin, searchDestination);
//   };
  
//   // Handle filter changes
//   const handleFilterChange = (filterName, checked) => {
//     setSelectedFilters(prev => ({
//       ...prev,
//       [filterName]: checked
//     }));
//   };
  
//   const handleAirlineSelect = (airlineName) => {
//     setSelectedAirlines(prev => 
//       prev.includes(airlineName)
//         ? prev.filter(name => name !== airlineName)
//         : [...prev, airlineName]
//     );
//   };
  
//   // Handle book now
//   const handleBookNow = (flight) => {
//     setSelectedFlight(flight);
//     setShowBookingForm(true);
//   };
  
//   // Handle booking complete
//   const handleBookingComplete = (bookingData) => {
//     console.log("Booking completed:", bookingData);
//     setBookingCompleted(true);
//     alert(`Booking confirmed! Reference: ${bookingData.bookingReference}`);
//     setShowBookingForm(false);
//   };
  
//   // Close filters when clicking outside on mobile
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (showFilters && window.innerWidth < 1024) {
//         const sidebar = document.querySelector('aside');
//         if (sidebar && !sidebar.contains(event.target) && !event.target.closest('button[class*="lg:hidden"]')) {
//           setShowFilters(false);
//         }
//       }
//     };
    
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [showFilters]);
  
//   // Initialize on component mount - RUNS ONLY ONCE
//   useEffect(() => {
//     if (initialLoadRef.current) return;
    
//     initialLoadRef.current = true;
    
//     // Fetch initial data
//     fetchAirports();
//     fetchAirlines();
//     fetchFlights();
//   }, [fetchAirports, fetchAirlines, fetchFlights]);
  
//   // Apply filters to flights
//   const filteredFlights = flights.filter(flight => {
//     if (selectedAirlines.length > 0 && !selectedAirlines.includes(flight.airline)) {
//       return false;
//     }
    
//     const departureHour = parseInt(flight.departure.split(' ')[0]);
//     if (selectedTimeRange === "Before 6 AM" && departureHour >= 6) return false;
//     if (selectedTimeRange === "6 AM – 12 PM" && (departureHour < 6 || departureHour >= 12)) return false;
//     if (selectedTimeRange === "12 PM – 6 PM" && (departureHour < 12 || departureHour >= 18)) return false;
//     if (selectedTimeRange === "After 6 PM" && departureHour < 18) return false;
    
//     if (selectedFilters["Non Stop"] && !flight.isNonStop) return false;
    
//     return true;
//   });
  
//   // Sort by price (cheapest first)
//   const sortedFlights = [...filteredFlights].sort((a, b) => a.basePrice - b.basePrice);
  
//   // Calculate pagination
//   const indexOfLastFlight = currentPage * flightsPerPage;
//   const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
//   const currentFlights = sortedFlights.slice(indexOfFirstFlight, indexOfLastFlight);
//   const totalPages = Math.ceil(sortedFlights.length / flightsPerPage);
  
//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
//       {/* Main Container */}
//       <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
//         {/* Flight Search Header */}
//         <FlightSearchHeader 
//           from={origin}
//           to={destination}
//           onSearch={handleSearch}
//           loading={loading}
//           airports={airports}
//           airportsLoading={airportsLoading}
//         />
        
//         {/* Error State */}
//         {error && !loading && (
//           <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <AlertCircle className="h-5 w-5 text-red-400" />
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-red-700 font-medium">Error</p>
//                 <p className="text-sm text-red-600 mt-1">{error}</p>
//                 <button 
//                   onClick={() => fetchFlights()} 
//                   className="mt-2 text-sm text-red-600 hover:text-red-800 font-medium"
//                 >
//                   Try Again
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
        
//         {/* Main Layout */}
//         <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
//           {/* Mobile Filters Button */}
//           <button
//             type="button"
//             className="lg:hidden mb-4 flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-xl px-4 py-3 text-blue-600 font-semibold shadow-sm hover:bg-gray-50 w-full"
//             onClick={() => setShowFilters(!showFilters)}
//           >
//             <Filter size={18} />
//             {showFilters ? "Hide Filters" : "Filters & Sort"}
//           </button>
          
//           {/* Filters Sidebar */}
//           <aside className={`fixed inset-y-0 left-0 z-50 w-full bg-white p-5 shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
//             showFilters ? "translate-x-0" : "-translate-x-full"
//           } lg:relative lg:translate-x-0 lg:shadow-none lg:sticky lg:top-4 lg:self-start lg:h-auto lg:w-72 lg:bg-transparent lg:z-0 lg:p-0`}>
//             {/* Mobile Header with Close Button */}
//             <div className="lg:hidden mb-6">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-xl font-bold text-gray-900">Filters & Sort</h3>
//                 <button
//                   type="button"
//                   className="text-gray-600 hover:text-gray-800 p-2 hover:bg-gray-100 rounded-lg"
//                   onClick={() => setShowFilters(false)}
//                 >
//                   <X size={24} />
//                 </button>
//               </div>
//             </div>
            
//             {/* Sort Options */}
//             <div className="mb-8">
//               <h3 className="text-lg font-bold text-gray-900 mb-4">Sort by</h3>
//               <div className="space-y-2">
//                 {["Cheapest", "Fastest", "Earliest departure", "Latest departure"].map((option) => (
//                   <button
//                     key={option}
//                     className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm ${
//                       option === "Cheapest" 
//                         ? "bg-blue-50 text-blue-600 border border-blue-200"
//                         : "text-gray-700 hover:bg-gray-50"
//                     }`}
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             </div>
            
//             {/* Filters Header */}
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-bold text-gray-900">Filters</h3>
//               <button 
//                 type="button"
//                 className="text-sm text-blue-600 hover:text-blue-800 font-medium"
//                 onClick={() => {
//                   setSelectedFilters({});
//                   setSelectedAirlines([]);
//                   setSelectedTimeRange("6 AM – 12 PM");
//                 }}
//               >
//                 CLEAR ALL
//               </button>
//             </div>
            
//             {/* Popular Filters */}
//             <section className="mb-8">
//               <h4 className="text-sm font-semibold text-gray-900 mb-3">
//                 Popular Filters
//               </h4>
//               <div className="bg-gray-50 rounded-xl p-3">
//                 {popularFilters.map((filter, i) => (
//                   <FilterGroup
//                     key={i}
//                     filter={filter}
//                     checked={!!selectedFilters[filter.label]}
//                     onChange={handleFilterChange}
//                   />
//                 ))}
//               </div>
//             </section>
            
//             {/* Airlines */}
//             <section className="mb-8">
//               <h4 className="text-sm font-semibold text-gray-900 mb-3">
//                 Airlines ({dynamicAirlineFilters.length})
//               </h4>
//               <div className="space-y-3">
//                 {dynamicAirlineFilters.map((airline, i) => (
//                   <AirlineChip
//                     key={i}
//                     airline={airline}
//                     selected={selectedAirlines.includes(airline.airlineName)}
//                     onClick={handleAirlineSelect}
//                   />
//                 ))}
//               </div>
//               {dynamicAirlineFilters.length === 0 && !airlinesLoading && (
//                 <div className="text-center py-4 text-gray-500 text-sm">
//                   No airlines found
//                 </div>
//               )}
//               {airlinesLoading && (
//                 <div className="text-center py-4">
//                   <Loader2 className="w-5 h-5 animate-spin text-gray-400 mx-auto" />
//                 </div>
//               )}
//             </section>
            
//             {/* Departure Time */}
//             <section>
//               <h4 className="text-sm font-semibold text-gray-900 mb-3">
//                 Departure Time
//               </h4>
//               <div className="grid grid-cols-2 gap-3">
//                 <TimeBox
//                   range="Before 6 AM"
//                   price="₹ 6,250"
//                   active={selectedTimeRange === "Before 6 AM"}
//                   onClick={() => setSelectedTimeRange("Before 6 AM")}
//                 />
//                 <TimeBox
//                   range="6 AM – 12 PM"
//                   price="₹ 7,045"
//                   active={selectedTimeRange === "6 AM – 12 PM"}
//                   onClick={() => setSelectedTimeRange("6 AM – 12 PM")}
//                 />
//                 <TimeBox
//                   range="12 PM – 6 PM"
//                   price="₹ 8,450"
//                   active={selectedTimeRange === "12 PM – 6 PM"}
//                   onClick={() => setSelectedTimeRange("12 PM – 6 PM")}
//                 />
//                 <TimeBox
//                   range="After 6 PM"
//                   price="₹ 6,945"
//                   active={selectedTimeRange === "After 6 PM"}
//                   onClick={() => setSelectedTimeRange("After 6 PM")}
//                 />
//               </div>
//             </section>
//           </aside>
          
//           {/* Flight Results */}
//           <section className="flex-1">
//             {/* Result Count */}
//             <div className="mb-6">
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
//                 <div>
//                   <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
//                     {origin} → {destination}
//                   </h2>
//                   <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
//                     <Calendar size={14} />
//                     <span>{new Date().toLocaleDateString('en-IN', { 
//                       day: 'numeric', 
//                       month: 'short', 
//                       year: 'numeric' 
//                     })} • 1 Adult • Economy</span>
//                   </div>
//                 </div>
//                 <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg inline-block">
//                   {sortedFlights.length} flights found
//                 </div>
//               </div>
//             </div>
            
//             {/* Flight Cards */}
//             <div className="flex flex-col gap-3 sm:gap-4">
//               {loading ? (
//                 <div className="text-center py-12">
//                   <Loader2 className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto" />
//                   <p className="mt-4 text-gray-600">Searching for flights...</p>
//                 </div>
//               ) : sortedFlights.length === 0 ? (
//                 <div className="text-center py-12 bg-white rounded-xl shadow-sm">
//                   <Plane size={48} className="mx-auto text-gray-400" />
//                   <h3 className="mt-4 text-lg font-medium text-gray-900">No flights found</h3>
//                   <p className="mt-2 text-gray-500">
//                     {error ? error : "Try adjusting your search or filters"}
//                   </p>
//                 </div>
//               ) : (
//                 <>
//                   {currentFlights.map((flight) => (
//                     <article
//                       key={flight.id}
//                       className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden"
//                     >
//                       {/* Top Row - Airline & Price */}
//                       <div className="p-4 border-b border-gray-100">
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center gap-3">
//                             <div className="flex items-center">
//                               {flight.airlineLogo ? (
//                                 <img 
//                                   src={flight.airlineLogo} 
//                                   alt={flight.airline}
//                                   className="w-10 h-10 object-contain"
//                                   onError={(e) => {
//                                     e.target.style.display = 'none';
//                                     e.target.nextSibling.style.display = 'flex';
//                                   }}
//                                 />
//                               ) : null}
//                               <div 
//                                 className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold text-white shadow-sm ${flight.airlineLogo ? 'hidden' : 'flex'}`}
//                                 style={{ backgroundColor: flight.airlineColor }}
//                               >
//                                 {flight.airlineCode}
//                               </div>
//                             </div>
//                             <div>
//                               <div className="font-semibold text-gray-900 text-sm sm:text-base">{flight.airline}</div>
//                               <div className="text-xs text-gray-500">{flight.flightNumber}</div>
//                             </div>
//                           </div>
//                           <div className="text-right">
//                             <div className="text-xl sm:text-2xl font-bold text-gray-900">{flight.price}</div>
//                             <div className="text-xs text-gray-500">per person</div>
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Middle Row - Flight Details */}
//                       <div className="p-4">
//                         <div className="flex items-center justify-between mb-4">
//                           {/* Departure */}
//                           <div className="text-center flex-1">
//                             <div className="text-xl sm:text-2xl font-bold text-gray-900">
//                               {flight.departure}
//                             </div>
//                             <div className="text-sm text-gray-600">{flight.from}</div>
//                             <div className="text-xs text-gray-500">
//                               {flight.departureTime.toLocaleDateString('en-IN', { 
//                                 day: 'numeric', 
//                                 month: 'short' 
//                               })}
//                             </div>
//                           </div>
                          
//                           {/* Duration */}
//                           <div className="flex flex-col items-center px-2 sm:px-4">
//                             <div className="text-sm font-medium text-gray-700 mb-1 whitespace-nowrap">
//                               {flight.duration}
//                             </div>
//                             <div className="flex items-center w-16 sm:w-24">
//                               <div className="w-2 h-2 bg-blue-500 rounded-full" />
//                               <div className="flex-1 h-0.5 bg-blue-300 mx-1" />
//                               <Plane size={12} className="text-blue-500" />
//                               <div className="flex-1 h-0.5 bg-blue-300 mx-1" />
//                               <div className="w-2 h-2 bg-blue-500 rounded-full" />
//                             </div>
//                             <div className="text-xs font-medium text-blue-600 mt-1 whitespace-nowrap">
//                               {flight.isNonStop ? "Non‑Stop" : "1 Stop"}
//                             </div>
//                           </div>
                          
//                           {/* Arrival */}
//                           <div className="text-center flex-1">
//                             <div className="text-xl sm:text-2xl font-bold text-gray-900">
//                               {flight.arrival}
//                             </div>
//                             <div className="text-sm text-gray-600">{flight.to}</div>
//                             <div className="text-xs text-gray-500">
//                               {flight.arrivalTime.toLocaleDateString('en-IN', { 
//                                 day: 'numeric', 
//                                 month: 'short' 
//                               })}
//                             </div>
//                           </div>
//                         </div>
                        
//                         {/* Amenities */}
//                         <div className="flex items-center gap-3 sm:gap-4 mt-4 flex-wrap">
//                           {flight.amenities.map((amenity, idx) => (
//                             <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
//                               <amenity.icon size={12} style={{ color: amenity.color }} />
//                               <span className="whitespace-nowrap">{amenity.label}</span>
//                             </div>
//                           ))}
//                           {flight.badge && (
//                             <span
//                               className="text-xs font-semibold text-white px-2 py-1 rounded ml-auto"
//                               style={{ backgroundColor: flight.badgeColor }}
//                             >
//                               {flight.badge}
//                             </span>
//                           )}
//                         </div>
//                       </div>
                      
//                       {/* Bottom Row - Actions */}
//                       <div className="bg-gray-50 p-4 border-t border-gray-100">
//                         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
//                           <div className="flex items-center gap-2">
//                             <div className="text-xs text-gray-600 flex items-center gap-1">
//                               <Star size={10} className="text-yellow-500 fill-yellow-500" />
//                               {flight.rating} (Good)
//                             </div>
//                             <button
//                               type="button"
//                               className="text-xs font-medium text-blue-600 hover:text-blue-800 ml-2"
//                             >
//                               Flight details
//                             </button>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <button
//                               type="button"
//                               className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-colors shadow-sm flex-1 sm:flex-none"
//                               onClick={() => handleBookNow(flight)}
//                             >
//                               Book Now
//                             </button>
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Offer */}
//                       {flight.offer && (
//                         <div
//                           className="px-4 py-2 text-sm font-medium"
//                           style={{
//                             backgroundColor: flight.offerColor,
//                           }}
//                         >
//                           <span
//                             className="font-semibold mr-2"
//                             style={{ color: flight.offerTextColor }}
//                           >
//                             ✓
//                           </span>
//                           <span style={{ color: flight.offerTextColor }} className="text-sm">
//                             {flight.offer}
//                           </span>
//                         </div>
//                       )}
//                     </article>
//                   ))}
                  
//                   {/* Pagination */}
//                   {totalPages > 1 && (
//                     <Pagination
//                       currentPage={currentPage}
//                       totalPages={totalPages}
//                       onPageChange={handlePageChange}
//                     />
//                   )}
//                 </>
//               )}
//             </div>
            
//             {/* Showing X of Y flights */}
//             {sortedFlights.length > 0 && (
//               <div className="mt-6 text-center text-sm text-gray-600">
//                 Showing {indexOfFirstFlight + 1} to {Math.min(indexOfLastFlight, sortedFlights.length)} of {sortedFlights.length} flights
//               </div>
//             )}
//           </section>
//         </div>
//       </div>
      
//       {/* Booking Form Modal */}
//       {showBookingForm && selectedFlight && (
//         <BookingForm
//           flight={selectedFlight}
//           onClose={() => {
//             setShowBookingForm(false);
//             setSelectedFlight(null);
//           }}
//           onBookingComplete={handleBookingComplete}
//         />
//       )}
//     </div>
//   );
// }

// // Helper function to get airline color
// function getAirlineColor(airline) {
//   const colors = {
//     'IndiGo': '#004184',
//     'Air India': '#004080',
//     'Vistara': '#7b1fa2',
//     'SpiceJet': '#d32f2f',
//     'AirAsia': '#f44336',
//     'Air India Express': '#666666',
//     'Akasa Air': '#E61313',
//     'Virgin Atlantic': '#e41f23',
//     'Singapore Airlines': '#004d77',
//     'Lufthansa': '#1a1a1a',
//     'KLM': '#00a1de',
//     'SWISS': '#e2001a',
//     'Japan Airlines': '#c70025',
//     'Qantas': '#e00000',
//     'American Airlines': '#1E4FA1',
//     'Delta Air Lines': '#003366',
//     'United Airlines': '#002244',
//     'Emirates': '#D71921',
//     'Qatar Airways': '#8A1538',
//     'Turkish Airlines': '#C60C30',
//   };
//   return colors[airline] || '#666666';
// }





























import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import {
  Plane, Filter, X, ChevronDown, Calendar, MapPin, Users,
  ArrowLeftRight, Star, Clock, Check, Loader2, Search,
  AlertCircle, ChevronLeft, ChevronRight, Wallet, Shield,
  BaggageClaim, ChefHat, Wifi, ChevronUp, User, Mail, Phone,
  CreditCard, CheckCircle, Globe, FileText, Ticket, Minus, Plus
} from "lucide-react";

const api = axios.create({
  timeout: 150000,
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
});

/* ─────────────────────────────────────────────
   REUSABLE COMPONENTS
───────────────────────────────────────────── */

function FilterGroup({ filter, checked, onChange }) {
  const id = `flt-${filter.label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className="flex items-center justify-between py-2.5 hover:bg-gray-50 px-2 rounded-lg transition-colors">
      <div className="flex items-center">
        <input type="checkbox" id={id} checked={checked}
          onChange={(e) => onChange(filter.label, e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
        <label htmlFor={id} className="ml-3 cursor-pointer select-none text-sm font-medium text-gray-700">{filter.label}</label>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-blue-600">{filter.price}</span>
        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{filter.count}</span>
      </div>
    </div>
  );
}

function AirlineChip({ airline, selected, onClick }) {
  return (
    <button onClick={() => onClick(airline.airlineName)}
      className={`flex items-center gap-3 p-3 border rounded-xl transition-all duration-200 w-full ${
        selected ? "border-blue-600 bg-blue-50 shadow-sm" : "border-gray-200 hover:border-blue-300 hover:shadow-sm"
      }`}>
      {airline.airlineImage ? (
        <img src={airline.airlineImage} alt={airline.airlineName} className="w-8 h-8 object-contain"
          onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
      ) : null}
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white ${airline.airlineImage ? 'hidden' : 'flex'}`}
        style={{ backgroundColor: airline.color || '#666' }}>
        {airline.airlineCode || airline.airlineName?.charAt(0)}
      </div>
      <div className="text-left flex-1">
        <span className="text-sm font-semibold text-gray-800 block">{airline.airlineName}</span>
        <span className="text-xs text-gray-500">{airline.airlineCode || airline.callsign}</span>
      </div>
    </button>
  );
}

function TimeBox({ range, price, active = false, onClick }) {
  return (
    <button onClick={onClick}
      className={`border rounded-xl p-3 text-center cursor-pointer transition-all duration-200 w-full ${
        active ? "border-blue-600 bg-blue-50 shadow-sm" : "border-gray-200 hover:border-blue-300 hover:shadow-sm"
      }`}>
      <div className="text-sm font-semibold text-gray-800">{range}</div>
      <div className="text-xs text-gray-500 mt-1">from</div>
      <div className="text-sm font-bold text-blue-600 mt-1">{price}</div>
    </button>
  );
}

/* ─────────────────────────────────────────────
   BOOKING FORM
───────────────────────────────────────────── */

function BookingForm({ flight, onClose, onBookingComplete }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [errors, setErrors] = useState({});

  const [passenger, setPassenger] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    gender: "Male", dateOfBirth: "", nationality: "IN",
    passportNumber: "", passportExpiry: "",
    frequentFlyer: { program: "", number: "" }
  });

  const [payment, setPayment] = useState({
    cardNumber: "", cardHolder: "", expiryMonth: "", expiryYear: "", cvv: "", saveCard: false
  });

  const [promoCodes] = useState([
    { id: 1, code: "NEWUSER500", description: "New user promo (1st booking)", discount: "₹500 OFF", valid: true },
    { id: 2, code: "FLIGHT600", description: "New user promo (2nd booking)", discount: "₹600 OFF", valid: true },
    { id: 3, code: "FLYER10", description: "Flyer Exclusive offer", discount: "10% off (up to ₹600)", valid: true },
  ]);
  const [selectedPromoCode, setSelectedPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);

  const calculateTotal = () => {
    let total = flight.basePrice || 11105;
    if (promoApplied) {
      if (selectedPromoCode === "NEWUSER500") total = Math.max(0, total - 500);
      else if (selectedPromoCode === "FLIGHT600") total = Math.max(0, total - 600);
      else if (selectedPromoCode === "FLYER10") { const d = Math.min(total * 0.1, 600); total = Math.max(0, total - d); }
    }
    return total;
  };
  const totalPrice = calculateTotal();

  const handlePassengerChange = (field, value) => {
    setPassenger(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: "" }));
  };
  const handlePaymentChange = (field, value) => setPayment(prev => ({ ...prev, [field]: value }));

  const validatePassengerDetails = () => {
    const e = {};
    if (!passenger.firstName.trim()) e.firstName = "First name is required";
    if (!passenger.lastName.trim()) e.lastName = "Last name is required";
    if (!passenger.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(passenger.email)) e.email = "Email is invalid";
    if (!passenger.phone.trim()) e.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(passenger.phone.replace(/\D/g, ''))) e.phone = "Phone number must be 10 digits";
    if (!passenger.dateOfBirth) e.dateOfBirth = "Date of birth is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validatePaymentDetails = () => {
    const e = {};
    if (!payment.cardNumber.trim()) e.cardNumber = "Card number is required";
    else if (!/^\d{16}$/.test(payment.cardNumber.replace(/\D/g, ''))) e.cardNumber = "Card number must be 16 digits";
    if (!payment.cardHolder.trim()) e.cardHolder = "Card holder name is required";
    if (!payment.expiryMonth || !payment.expiryYear) e.expiry = "Expiry date is required";
    else { const exp = new Date(parseInt(payment.expiryYear), parseInt(payment.expiryMonth) - 1); if (exp < new Date()) e.expiry = "Card has expired"; }
    if (!payment.cvv.trim()) e.cvv = "CVV is required";
    else if (!/^\d{3,4}$/.test(payment.cvv)) e.cvv = "CVV must be 3 or 4 digits";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const applyPromoCode = () => {
    if (!selectedPromoCode) return;
    const promo = promoCodes.find(p => p.code === selectedPromoCode);
    if (promo?.valid) {
      setPromoApplied(true);
      let discount = 0;
      if (promo.code === "NEWUSER500") discount = 500;
      else if (promo.code === "FLIGHT600") discount = 600;
      else if (promo.code === "FLYER10") discount = Math.min((flight.basePrice || 11105) * 0.1, 600);
      setPromoDiscount(discount);
      alert(`Promo code "${promo.code}" applied! You saved ₹${discount}`);
    } else { alert("Invalid or expired promo code"); }
  };

  const handleNext = () => {
    if (step === 1) { if (validatePassengerDetails()) setStep(2); }
    else if (step === 2) { if (validatePaymentDetails()) handleBooking(); }
  };

  const handleBooking = async () => {
    setLoading(true);
    try {
      await new Promise(r => setTimeout(r, 2000));
      const bookingRef = `TRP${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
      const bookingData = {
        bookingReference: bookingRef,
        flight: { airline: flight.airline, flightNumber: flight.flightNumber, departure: `${flight.from} → ${flight.to}`, departureTime: flight.departure, arrivalTime: flight.arrival, duration: flight.duration },
        passenger, payment: { lastFour: payment.cardNumber.slice(-4), amount: totalPrice },
        bookingTime: new Date().toLocaleString(), status: "Confirmed",
        tripCoins: Math.floor(totalPrice / 100) * 25,
      };
      setBookingDetails(bookingData);
      setBookingSuccess(true);
      if (onBookingComplete) onBookingComplete(bookingData);
    } catch (error) { alert("Booking failed. Please try again."); }
    finally { setLoading(false); }
  };

  const inputCls = (err) => `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm ${err ? "border-red-500" : "border-gray-300"}`;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{bookingSuccess ? "Booking Confirmed" : "Complete Your Booking"}</h2>
            {!bookingSuccess && (
              <p className="text-sm text-gray-500 mt-0.5">{flight.airline} · {flight.flightNumber} · {flight.duration}</p>
            )}
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600"><X size={22} /></button>
        </div>

        {/* Progress */}
        {!bookingSuccess && (
          <div className="px-6 py-4 border-b">
            <div className="flex items-center justify-between max-w-xs mx-auto">
              {[1, 2].map((s) => (
                <React.Fragment key={s}>
                  <div className="flex flex-col items-center gap-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${step === s ? "bg-blue-600 text-white" : step > s ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}>
                      {step > s ? <CheckCircle size={20} /> : s}
                    </div>
                    <span className="text-xs font-medium text-gray-500">{s === 1 ? "Passenger" : "Payment"}</span>
                  </div>
                  {s < 2 && <div className={`flex-1 h-1 mx-3 rounded-full ${step > s ? "bg-green-400" : "bg-gray-200"}`} />}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        <div className="p-6">
          {loading ? (
            <div className="text-center py-12">
              <Loader2 className="animate-spin h-12 w-12 text-blue-600 mx-auto" />
              <p className="mt-4 text-gray-600 font-medium">Processing your booking...</p>
            </div>
          ) : bookingSuccess ? (
            <div className="text-center py-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Booking Confirmed!</h2>
              <p className="text-gray-500 mb-6">Your flight has been successfully booked</p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 max-w-sm mx-auto mb-6">
                <div className="text-sm text-gray-500 mb-1">Booking Reference</div>
                <div className="text-2xl font-bold text-blue-600 mb-4">{bookingDetails?.bookingReference}</div>
                <div className="space-y-2 text-sm text-left">
                  {[["Flight", `${bookingDetails?.flight.airline} ${bookingDetails?.flight.flightNumber}`], ["Passenger", `${bookingDetails?.passenger.firstName} ${bookingDetails?.passenger.lastName}`], ["Amount Paid", `₹ ${bookingDetails?.payment.amount.toLocaleString()}`], ["Status", bookingDetails?.status]].map(([k, v]) => (
                    <div key={k} className="flex justify-between"><span className="text-gray-500">{k}</span><span className="font-semibold text-gray-800">{v}</span></div>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 justify-center">
                <button onClick={() => window.print()} className="px-5 py-2.5 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 text-sm">Print Ticket</button>
                <button onClick={onClose} className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 text-sm">Close</button>
              </div>
            </div>
          ) : step === 1 ? (
            <div className="space-y-5">
              {/* Flight summary */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">Flight Details</h3>
                  <span className="text-sm font-semibold text-blue-600">{flight.price}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="font-medium">{flight.departure} · {flight.from}</span>
                  <span className="text-gray-400 text-xs">{flight.duration}</span>
                  <span className="font-medium">{flight.arrival} · {flight.to}</span>
                </div>
              </div>
              <h3 className="text-base font-bold text-gray-900">Passenger Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">First Name *</label>
                  <input type="text" value={passenger.firstName} onChange={(e) => handlePassengerChange("firstName", e.target.value)} className={inputCls(errors.firstName)} placeholder="First name" />
                  {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}</div>
                <div><label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Last Name *</label>
                  <input type="text" value={passenger.lastName} onChange={(e) => handlePassengerChange("lastName", e.target.value)} className={inputCls(errors.lastName)} placeholder="Last name" />
                  {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Email *</label>
                  <input type="email" value={passenger.email} onChange={(e) => handlePassengerChange("email", e.target.value)} className={inputCls(errors.email)} placeholder="Email address" />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}</div>
                <div><label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Phone *</label>
                  <div className="flex">
                    <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-sm text-gray-600">+91</div>
                    <input type="tel" value={passenger.phone} onChange={(e) => handlePassengerChange("phone", e.target.value)} className={`flex-1 px-4 py-3 border rounded-r-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm ${errors.phone ? "border-red-500" : "border-gray-300"}`} placeholder="9876543210" maxLength="10" />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div><label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Gender</label>
                  <select value={passenger.gender} onChange={(e) => handlePassengerChange("gender", e.target.value)} className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm">
                    <option>Male</option><option>Female</option><option>Other</option></select></div>
                <div><label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Date of Birth *</label>
                  <input type="date" value={passenger.dateOfBirth} onChange={(e) => handlePassengerChange("dateOfBirth", e.target.value)} max={new Date().toISOString().split("T")[0]} className={inputCls(errors.dateOfBirth)} />
                  {errors.dateOfBirth && <p className="mt-1 text-xs text-red-600">{errors.dateOfBirth}</p>}</div>
                <div><label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Nationality</label>
                  <select value={passenger.nationality} onChange={(e) => handlePassengerChange("nationality", e.target.value)} className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm">
                    <option value="IN">India</option><option value="US">United States</option><option value="UK">United Kingdom</option><option value="AE">UAE</option><option value="SG">Singapore</option></select></div>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="bg-gray-50 border rounded-xl p-4">
                <h3 className="font-bold text-gray-900 mb-3">Price Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-gray-500">Base Fare</span><span className="font-medium">₹ {(flight.basePrice || 11105).toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Taxes & Fees</span><span className="font-medium">₹ 0</span></div>
                  {promoApplied && <div className="flex justify-between text-green-600"><span>Promo Discount</span><span className="font-medium">-₹ {promoDiscount.toLocaleString()}</span></div>}
                  <div className="border-t pt-2 flex justify-between"><span className="font-bold text-gray-800">Total</span><span className="text-xl font-bold text-blue-600">₹ {totalPrice.toLocaleString()}</span></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-gray-900">Payment Details</h3>
                <div className="flex items-center gap-1 text-xs text-green-600"><Shield size={14} /><span>Secure Payment</span></div>
              </div>
              <div><label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Card Number *</label>
                <input type="text" value={payment.cardNumber} onChange={(e) => handlePaymentChange("cardNumber", e.target.value.replace(/\D/g, '').slice(0, 16))} className={inputCls(errors.cardNumber)} placeholder="1234 5678 9012 3456" />
                {errors.cardNumber && <p className="mt-1 text-xs text-red-600">{errors.cardNumber}</p>}</div>
              <div><label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Card Holder Name *</label>
                <input type="text" value={payment.cardHolder} onChange={(e) => handlePaymentChange("cardHolder", e.target.value)} className={inputCls(errors.cardHolder)} placeholder="JOHN DOE" />
                {errors.cardHolder && <p className="mt-1 text-xs text-red-600">{errors.cardHolder}</p>}</div>
              <div className="grid grid-cols-4 gap-3">
                <div className="col-span-1"><label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Month *</label>
                  <select value={payment.expiryMonth} onChange={(e) => handlePaymentChange("expiryMonth", e.target.value)} className={`w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm ${errors.expiry ? "border-red-500" : "border-gray-300"}`}>
                    <option value="">MM</option>{Array.from({ length: 12 }, (_, i) => i + 1).map(m => <option key={m} value={m.toString().padStart(2, '0')}>{m.toString().padStart(2, '0')}</option>)}</select></div>
                <div className="col-span-1"><label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Year *</label>
                  <select value={payment.expiryYear} onChange={(e) => handlePaymentChange("expiryYear", e.target.value)} className={`w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm ${errors.expiry ? "border-red-500" : "border-gray-300"}`}>
                    <option value="">YYYY</option>{Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map(y => <option key={y} value={y}>{y}</option>)}</select></div>
                <div className="col-span-1"><label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">CVV *</label>
                  <input type="password" value={payment.cvv} onChange={(e) => handlePaymentChange("cvv", e.target.value.replace(/\D/g, '').slice(0, 4))} className={inputCls(errors.cvv)} placeholder="•••" maxLength="4" />
                  {errors.cvv && <p className="mt-1 text-xs text-red-600">{errors.cvv}</p>}</div>
                <div className="col-span-1 flex items-end pb-3"><label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                  <input type="checkbox" checked={payment.saveCard} onChange={(e) => handlePaymentChange("saveCard", e.target.checked)} className="h-4 w-4 rounded border-gray-300 text-blue-600" />Save card</label></div>
              </div>
              {errors.expiry && <p className="text-xs text-red-600">{errors.expiry}</p>}
              <div className="border-t pt-4">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Apply Promo Code</h3>
                <div className="flex gap-2 mb-3">
                  <select value={selectedPromoCode} onChange={(e) => setSelectedPromoCode(e.target.value)} className="flex-1 px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm">
                    <option value="">Select promo code</option>
                    {promoCodes.map(p => <option key={p.id} value={p.code}>{p.code} — {p.description}</option>)}
                  </select>
                  <button type="button" onClick={applyPromoCode} disabled={!selectedPromoCode || promoApplied} className="px-5 py-3 bg-gray-800 text-white rounded-lg text-sm font-semibold hover:bg-gray-900 disabled:opacity-50">Apply</button>
                </div>
                {promoApplied && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-green-700"><CheckCircle size={16} />Saved ₹{promoDiscount}!</div>
                    <button type="button" onClick={() => { setPromoApplied(false); setSelectedPromoCode(""); setPromoDiscount(0); }} className="text-xs text-red-600 hover:text-red-800">Remove</button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {!bookingSuccess && !loading && (
          <div className="sticky bottom-0 bg-white border-t px-6 py-4 rounded-b-2xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs text-gray-500">Total Amount</div>
                <div className="text-2xl font-bold text-blue-600">₹ {totalPrice.toLocaleString()}</div>
              </div>
              <div className="flex gap-3">
                {step > 1 && <button type="button" onClick={() => setStep(step - 1)} className="px-5 py-3 border border-gray-300 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50">Back</button>}
                <button type="button" onClick={handleNext} disabled={loading}
                  className="px-7 py-3 rounded-xl text-white text-sm font-bold disabled:opacity-50"
                  style={{ background: 'linear-gradient(135deg, #1a3fa8, #2563eb)' }}>
                  {step === 1 ? "Continue to Payment" : "Confirm & Pay"}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-3 text-xs text-gray-400"><Shield size={11} /><span>Your payment is secure and encrypted</span></div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FLIGHT SEARCH HEADER  ← REDESIGNED
───────────────────────────────────────────── */

function FlightSearchHeader({ from, to, onSearch, loading, airports, airportsLoading }) {
  const [fromCity, setFromCity] = useState(from || "DEL");
  const [toCity, setToCity] = useState(to || "BOM");
  const [tripType, setTripType] = useState("Return");
  const [departureDate, setDepartureDate] = useState(new Date(Date.now() + 86400000).toISOString().split("T")[0]);
  const [returnDate, setReturnDate] = useState(new Date(Date.now() + 172800000).toISOString().split("T")[0]);
  const [travelers, setTravelers] = useState({ adults: 1, children: 0, infants: 0 });
  const [travelClass, setTravelClass] = useState("Economy");
  const [showTravelerMenu, setShowTravelerMenu] = useState(false);
  const [directOnly, setDirectOnly] = useState(false);

  const handleSwap = () => { const t = fromCity; setFromCity(toCity); setToCity(t); };
  const handleSearch = () => { if (fromCity && toCity) onSearch(fromCity, toCity); };
  const totalTravelers = travelers.adults + travelers.children + travelers.infants;

  const changeTraveler = (type, delta) => {
    setTravelers(prev => {
      const next = prev[type] + delta;
      const min = type === 'adults' ? 1 : 0;
      return next >= min && next <= 9 ? { ...prev, [type]: next } : prev;
    });
  };

  const selectedFrom = airports.find(a => a.airportCode === fromCity);
  const selectedTo = airports.find(a => a.airportCode === toCity);

  // format date like "23 Apr"
  const fmtDate = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });

  return (
    /* ── HERO WRAPPER ── */
    <div className="relative overflow-hidden mb-0" style={{ minHeight: 420 }}>
      {/* BG image */}
      <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80"
        alt="hero" className="absolute inset-0 w-full h-full object-cover" />
      {/* Brand gradient overlay matching reference: navy-blue left → red right */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(110deg, rgba(10,25,80,0.92) 0%, rgba(25,50,140,0.88) 45%, rgba(150,25,35,0.85) 100%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-10 pb-12">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white border border-white/25"
            style={{ background: 'rgba(255,255,255,0.13)', backdropFilter: 'blur(8px)' }}>
            <Plane size={13} /> 1,000+ Airlines · 5,000+ Routes Worldwide
          </span>
        </div>

        {/* Headline */}
        <div className="text-center mb-7">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-2">
            Book Flight Tickets <span style={{ color: '#f5a623' }}>Online</span>
          </h1>
          <p className="text-white/75 text-base">Best prices · Verified airlines · Instant e-ticket · Zero booking fee</p>
        </div>

        {/* ── SEARCH CARD ── */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* Trip type tabs inside card */}
          <div className="flex items-center gap-1 px-5 pt-4 pb-0">
            {["Return", "One-way", "Multi-city"].map((type) => (
              <button key={type} onClick={() => setTripType(type)}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                style={tripType === type ? { background: '#1a3fa8', color: '#fff' } : { background: '#f0f3fb', color: '#555' }}>
                {type}
              </button>
            ))}
          </div>

          {/* ── MAIN SEARCH ROW ── */}
          <div className="flex items-stretch border-b border-gray-100 px-0 mt-3">

            {/* FROM */}
            <div className="flex-1 min-w-0 px-5 py-4 border-r border-gray-100">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <MapPin size={12} className="text-red-500" /> FROM
              </div>
              <input type="text" value={fromCity} onChange={(e) => setFromCity(e.target.value.toUpperCase())}
                placeholder="Departure city"
                className="w-full text-lg font-bold text-gray-900 bg-transparent border-none outline-none placeholder-gray-300" />
              <div className="text-xs text-gray-400 mt-0.5 truncate">{selectedFrom?.airportName?.split(' ').slice(0, 4).join(' ') || 'City or airport code'}</div>
            </div>

            {/* SWAP */}
            <div className="flex items-center px-3 border-r border-gray-100">
              <button type="button" onClick={handleSwap}
                className="p-2.5 rounded-full border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all">
                <ArrowLeftRight size={16} style={{ color: '#1a3fa8' }} />
              </button>
            </div>

            {/* TO */}
            <div className="flex-1 min-w-0 px-5 py-4 border-r border-gray-100">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <MapPin size={12} className="text-red-500" /> TO
              </div>
              <input type="text" value={toCity} onChange={(e) => setToCity(e.target.value.toUpperCase())}
                placeholder="Arrival city"
                className="w-full text-lg font-bold text-gray-900 bg-transparent border-none outline-none placeholder-gray-300" />
              <div className="text-xs text-gray-400 mt-0.5 truncate">{selectedTo?.airportName?.split(' ').slice(0, 4).join(' ') || 'City or airport code'}</div>
            </div>

            {/* TRAVEL DATE */}
            <div className="px-5 py-4 border-r border-gray-100 min-w-[130px]">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Calendar size={12} className="text-blue-500" /> TRAVEL DATE
              </div>
              <div className="text-lg font-bold text-gray-900">{fmtDate(departureDate)}</div>
              <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} min={new Date().toISOString().split("T")[0]}
                className="opacity-0 absolute w-0 h-0" id="depDate" />
              <label htmlFor="depDate" className="text-xs text-blue-600 cursor-pointer hover:underline">Change</label>
            </div>

            {/* RETURN DATE (only for Return) */}
            {tripType === "Return" && (
              <div className="px-5 py-4 border-r border-gray-100 min-w-[130px]">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Calendar size={12} className="text-blue-500" /> RETURN DATE
                </div>
                <div className="text-lg font-bold text-gray-900">{fmtDate(returnDate)}</div>
                <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} min={departureDate}
                  className="opacity-0 absolute w-0 h-0" id="retDate" />
                <label htmlFor="retDate" className="text-xs text-blue-600 cursor-pointer hover:underline">Change</label>
              </div>
            )}

            {/* PASSENGERS */}
            <div className="px-5 py-4 border-r border-gray-100 min-w-[140px] relative">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Users size={12} className="text-blue-500" /> PASSENGERS
              </div>
              <button type="button" onClick={() => setShowTravelerMenu(!showTravelerMenu)} className="text-left w-full">
                <div className="text-lg font-bold text-gray-900">{totalTravelers} Traveller{totalTravelers > 1 ? 's' : ''}</div>
                <div className="text-xs text-gray-400">{travelClass}</div>
              </button>

              {showTravelerMenu && (
                <div className="absolute z-50 top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-2xl shadow-xl p-5">
                  {[['adults', 'Adults (12+)', ''], ['children', 'Children (2–11)', ''], ['infants', 'Infants (<2)', '']].map(([key, label]) => (
                    <div key={key} className="flex justify-between items-center mb-4 last:mb-0">
                      <span className="text-sm font-medium text-gray-700">{label}</span>
                      <div className="flex items-center gap-3">
                        <button type="button" onClick={() => changeTraveler(key, -1)} disabled={travelers[key] <= (key === 'adults' ? 1 : 0)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-40 text-gray-600">−</button>
                        <span className="w-5 text-center font-bold text-gray-800">{travelers[key]}</span>
                        <button type="button" onClick={() => changeTraveler(key, 1)} disabled={travelers[key] >= 9}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-40 text-gray-600">+</button>
                      </div>
                    </div>
                  ))}
                  <div className="border-t pt-4 mt-2">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-2">Cabin Class</div>
                    <div className="grid grid-cols-2 gap-2">
                      {["Economy", "Premium", "Business", "First"].map((cls) => (
                        <button key={cls} type="button" onClick={() => setTravelClass(cls)}
                          className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${travelClass === cls ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 text-gray-600 hover:border-gray-300"}`}>
                          {cls}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button type="button" onClick={() => setShowTravelerMenu(false)}
                    className="w-full mt-4 py-2 rounded-xl text-white text-sm font-bold"
                    style={{ background: '#1a3fa8' }}>Done</button>
                </div>
              )}
            </div>

            {/* SEARCH BUTTON */}
            <button type="button" onClick={handleSearch} disabled={loading || !fromCity || !toCity}
              className="flex items-center justify-center gap-2 px-8 font-bold text-white text-base transition-all hover:opacity-90 disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)', minWidth: 130 }}>
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Search size={18} /> Search</>}
            </button>
          </div>

          {/* ── SECOND ROW: direct flights toggle + quick filters ── */}
          <div className="flex flex-wrap items-center gap-3 px-5 py-3">
            {/* Direct flights toggle */}
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 font-medium pr-4 border-r border-gray-200">
              <input type="checkbox" checked={directOnly} onChange={(e) => setDirectOnly(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600" />
              Direct flights only
            </label>

            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Quick Filter:</span>
            {[
              { label: "Non-Stop", color: '#1a3fa8' },
              { label: "Morning", color: '#1a3fa8' },
              { label: "Evening", color: '#1a3fa8' },
              { label: "Budget", color: '#1a3fa8' },
              { label: "Refundable", color: '#1a3fa8' },
              { label: "Top Rated", color: '#1a3fa8' },
            ].map(({ label }) => (
              <button key={label} type="button"
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold border-2 transition-all hover:border-blue-500 hover:text-blue-700"
                style={{ borderColor: '#dde3f0', color: '#444', background: '#f7f9ff' }}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STATIC DATA
───────────────────────────────────────────── */

const staticIndianAirports = [
  { _id: "1", airportCode: "DEL", airportName: "Indira Gandhi International Airport", cityCode: "Delhi", countryName: "India" },
  { _id: "2", airportCode: "BOM", airportName: "Chhatrapati Shivaji Maharaj International Airport", cityCode: "Mumbai", countryName: "India" },
  { _id: "3", airportCode: "BLR", airportName: "Kempegowda International Airport", cityCode: "Bengaluru", countryName: "India" },
  { _id: "4", airportCode: "MAA", airportName: "Chennai International Airport", cityCode: "Chennai", countryName: "India" },
  { _id: "5", airportCode: "HYD", airportName: "Rajiv Gandhi International Airport", cityCode: "Hyderabad", countryName: "India" },
  { _id: "6", airportCode: "CCU", airportName: "Netaji Subhash Chandra Bose International Airport", cityCode: "Kolkata", countryName: "India" },
  { _id: "7", airportCode: "AMD", airportName: "Sardar Vallabhbhai Patel International Airport", cityCode: "Ahmedabad", countryName: "India" },
  { _id: "8", airportCode: "GOI", airportName: "Goa International Airport", cityCode: "Goa", countryName: "India" },
  { _id: "9", airportCode: "PNQ", airportName: "Pune International Airport", cityCode: "Pune", countryName: "India" },
  { _id: "10", airportCode: "LKO", airportName: "Chaudhary Charan Singh International Airport", cityCode: "Lucknow", countryName: "India" },
];

/* ─────────────────────────────────────────────
   PAGINATION
───────────────────────────────────────────── */

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  const maxV = 5;
  let start = Math.max(1, currentPage - Math.floor(maxV / 2));
  let end = Math.min(totalPages, start + maxV - 1);
  if (end - start + 1 < maxV) start = Math.max(1, end - maxV + 1);
  for (let i = start; i <= end; i++) pages.push(i);

  const Btn = ({ page, active, disabled, onClick, children }) => (
    <button onClick={onClick} disabled={disabled}
      className={`px-3 py-2 min-w-[36px] text-sm font-medium rounded-lg transition-colors ${active ? 'bg-blue-600 text-white' : 'border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'}`}>
      {children}
    </button>
  );

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <Btn disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}><ChevronLeft size={16} /></Btn>
      {start > 1 && <><Btn active={currentPage === 1} onClick={() => onPageChange(1)}>1</Btn>{start > 2 && <span className="text-gray-400">...</span>}</>}
      {pages.map(p => <Btn key={p} active={p === currentPage} onClick={() => onPageChange(p)}>{p}</Btn>)}
      {end < totalPages && <>{end < totalPages - 1 && <span className="text-gray-400">...</span>}<Btn active={currentPage === totalPages} onClick={() => onPageChange(totalPages)}>{totalPages}</Btn></>}
      <Btn disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}><ChevronRight size={16} /></Btn>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */

function getAirlineColor(airline) {
  const c = { 'IndiGo': '#004184', 'Air India': '#004080', 'Vistara': '#7b1fa2', 'SpiceJet': '#d32f2f', 'AirAsia': '#f44336', 'Air India Express': '#666', 'Akasa Air': '#E61313', 'Virgin Atlantic': '#e41f23', 'Singapore Airlines': '#004d77', 'Lufthansa': '#1a1a1a', 'KLM': '#00a1de', 'SWISS': '#e2001a', 'Japan Airlines': '#c70025', 'Qantas': '#e00000', 'American Airlines': '#1E4FA1', 'Delta Air Lines': '#003366', 'United Airlines': '#002244', 'Emirates': '#D71921', 'Qatar Airways': '#8A1538', 'Turkish Airlines': '#C60C30' };
  return c[airline] || '#666';
}

function getAirlineCode(airline) {
  const c = { 'IndiGo': '6E', 'Air India': 'AI', 'Vistara': 'UK', 'SpiceJet': 'SG', 'AirAsia': 'AK', 'Air India Express': 'IX', 'Akasa Air': 'QP', 'Virgin Atlantic': 'VS', 'Singapore Airlines': 'SQ', 'Lufthansa': 'LH', 'KLM': 'KL', 'SWISS': 'LX', 'Japan Airlines': 'JL', 'Qantas': 'QF', 'American Airlines': 'AA', 'Delta Air Lines': 'DL', 'United Airlines': 'UA', 'Emirates': 'EK', 'Qatar Airways': 'QR', 'Turkish Airlines': 'TK' };
  return c[airline] || airline?.substring(0, 2).toUpperCase() || 'XX';
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */

export default function FlightSearchPage() {
  const [origin, setOrigin] = useState("DEL");
  const [destination, setDestination] = useState("BOM");
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [airports, setAirports] = useState(staticIndianAirports);
  const [airportsLoading, setAirportsLoading] = useState(false);
  const [airlines, setAirlines] = useState([]);
  const [airlinesLoading, setAirlinesLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({ "Non Stop": true, "Evening Flights": true });
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedTimeRange, setSelectedTimeRange] = useState("6 AM – 12 PM");
  const [currentPage, setCurrentPage] = useState(1);
  const flightsPerPage = 30;
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const initialLoadRef = useRef(false);
  const airlinesFetchedRef = useRef(false);

  const fetchAirlines = useCallback(async () => {
    if (airlinesFetchedRef.current) return;
    try {
      setAirlinesLoading(true); airlinesFetchedRef.current = true;
      const res = await api.get("https://bmt-aw7b.onrender.com/api/world-airlines");
      if (res.data && Array.isArray(res.data)) setAirlines(res.data.filter(a => a.airlineCode?.trim()).slice(0, 50));
    } catch {
      setAirlines([
        { airlineName: "IndiGo", airlineCode: "6E", airlineImage: null, color: "#004184" },
        { airlineName: "Air India", airlineCode: "AI", airlineImage: null, color: "#004080" },
        { airlineName: "Vistara", airlineCode: "UK", airlineImage: null, color: "#7b1fa2" },
        { airlineName: "SpiceJet", airlineCode: "SG", airlineImage: null, color: "#d32f2f" },
        { airlineName: "AirAsia", airlineCode: "AK", airlineImage: null, color: "#f44336" },
        { airlineName: "Akasa Air", airlineCode: "QP", airlineImage: null, color: "#E61313" },
      ]);
    } finally { setAirlinesLoading(false); }
  }, []);

  const fetchAirports = useCallback(async () => {
    try {
      setAirportsLoading(true); setAirports(staticIndianAirports);
      try {
        const res = await api.get("https://bmt-aw7b.onrender.com/api/airports");
        if (res.data?.length > 0) setAirports(res.data);
      } catch { /* use static */ }
    } finally { setAirportsLoading(false); }
  }, []);

  const fetchFlights = useCallback(async (searchOrigin = null, searchDest = null) => {
    setLoading(true); setError(null); setFlights([]); setCurrentPage(1);
    try {
      const url = searchOrigin && searchDest
        ? `https://bmt-aw7b.onrender.com/api/live-flights/fetch?origin=${searchOrigin}&destination=${searchDest}`
        : "https://bmt-aw7b.onrender.com/api/live-flights/all";
      const res = await api.get(url);
      if (res.data && Array.isArray(res.data)) {
        if (!res.data.length) { setError("No flights found for this route"); return; }
        const mapped = res.data
          .filter(f => (f.totalFare || (f.baseFare || 0) + (f.tax || 0) + (f.convenienceFee || 0)) > 0)
          .map((f, i) => {
            const dep = new Date(f.departure_time), arr = new Date(f.arrival_time);
            const ms = arr - dep, h = Math.floor(ms / 3600000), m = Math.floor((ms % 3600000) / 60000);
            const airlineData = airlines.find(a => a.airlineName === f.airline || a.airlineCode === f.airlineCode);
            const totalFare = f.totalFare || (f.baseFare || 0) + (f.tax || 0) + (f.convenienceFee || 0);
            const depDisplay = dep.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false }).replace(':', ' ');
            const arrDisplay = arr.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false }).replace(':', ' ');
            return {
              id: f._id || `flight-${i}`,
              airline: f.airline || "Unknown Airline",
              airlineCode: f.airlineCode || getAirlineCode(f.airline),
              airlineLogo: airlineData?.airlineImage || null,
              airlineColor: airlineData?.color || getAirlineColor(f.airline),
              flightNumber: f.flightNumber || `${getAirlineCode(f.airline)}${Math.floor(100 + Math.random() * 900)}`,
              departureTime: dep, arrivalTime: arr,
              departure: depDisplay, arrival: arrDisplay,
              duration: `${h}h ${m}m`, from: f.origin, to: f.destination,
              price: `₹${totalFare.toLocaleString('en-IN')}`, basePrice: totalFare,
              baseFare: f.baseFare || 0, tax: f.tax || 0,
              convenienceFee: `₹${f.convenienceFee || 0}`,
              rating: (Math.random() * 1.5 + 3.5).toFixed(1), isNonStop: true,
              badge: totalFare < 4000 ? "Cheapest" : totalFare < 6000 ? "Popular" : totalFare > 8000 ? "Premium" : "Best Value",
              badgeColor: totalFare < 4000 ? "#10b981" : totalFare < 6000 ? "#3b82f6" : totalFare > 8000 ? "#8b5cf6" : "#f59e0b",
              offer: ["Get ₹500 OFF using FLIGHT500", "Free Meal + Priority Check-in", "No Cancellation Charges", "Extra 10kg Baggage Free"][Math.floor(Math.random() * 4)],
              offerColor: '#e8f5e9', offerTextColor: '#2e7d32',
              amenities: [
                { icon: BaggageClaim, label: "20kg", color: "#3b82f6" },
                { icon: ChefHat, label: "Meal", color: "#ef4444" },
                { icon: Shield, label: "Refundable", color: "#10b981" },
              ].slice(0, Math.floor(Math.random() * 3) + 1),
            };
          });
        setFlights(mapped);
      } else { setError("Invalid response from server"); }
    } catch { setError("Failed to fetch flights. Please check your connection and try again."); }
    finally { setLoading(false); }
  }, [airlines]);

  const generateFilters = useCallback(() => {
    const airlineCounts = {};
    flights.forEach(f => { airlineCounts[f.airline] = (airlineCounts[f.airline] || 0) + 1; });
    return {
      popularFilters: [
        { label: "Non Stop", price: "₹ 7,250", count: flights.filter(f => f.isNonStop).length },
        { label: "Refundable Fares", price: "₹ 8,500", count: Math.floor(flights.length * 0.6) },
        { label: "Morning Flights", price: "₹ 6,800", count: flights.filter(f => { const h = parseInt(f.departure.split(' ')[0]); return h >= 6 && h < 12; }).length },
        { label: "Evening Flights", price: "₹ 7,200", count: flights.filter(f => { const h = parseInt(f.departure.split(' ')[0]); return h >= 18; }).length },
      ],
      airlineFilters: airlines.filter(a => airlineCounts[a.airlineName] > 0).map(a => ({ ...a, price: `₹ ${Math.floor(4000 + Math.random() * 6000).toLocaleString()}`, count: airlineCounts[a.airlineName] || 0 })).slice(0, 8),
    };
  }, [flights, airlines]);

  const { popularFilters, airlineFilters: dynamicAirlineFilters } = generateFilters();

  const handleSearch = (o, d) => { setOrigin(o); setDestination(d); fetchFlights(o, d); };
  const handleFilterChange = (name, checked) => setSelectedFilters(prev => ({ ...prev, [name]: checked }));
  const handleAirlineSelect = (name) => setSelectedAirlines(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]);
  const handleBookNow = (flight) => { setSelectedFlight(flight); setShowBookingForm(true); };

  useEffect(() => {
    if (initialLoadRef.current) return;
    initialLoadRef.current = true;
    fetchAirports(); fetchAirlines(); fetchFlights();
  }, [fetchAirports, fetchAirlines, fetchFlights]);

  const filteredFlights = flights.filter(f => {
    if (selectedAirlines.length > 0 && !selectedAirlines.includes(f.airline)) return false;
    const h = parseInt(f.departure.split(' ')[0]);
    if (selectedTimeRange === "Before 6 AM" && h >= 6) return false;
    if (selectedTimeRange === "6 AM – 12 PM" && (h < 6 || h >= 12)) return false;
    if (selectedTimeRange === "12 PM – 6 PM" && (h < 12 || h >= 18)) return false;
    if (selectedTimeRange === "After 6 PM" && h < 18) return false;
    if (selectedFilters["Non Stop"] && !f.isNonStop) return false;
    return true;
  });

  const sortedFlights = [...filteredFlights].sort((a, b) => a.basePrice - b.basePrice);
  const indexOfLast = currentPage * flightsPerPage;
  const indexOfFirst = indexOfLast - flightsPerPage;
  const currentFlights = sortedFlights.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedFlights.length / flightsPerPage);

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ── HERO + SEARCH ── */}
      <FlightSearchHeader from={origin} to={destination} onSearch={handleSearch}
        loading={loading} airports={airports} airportsLoading={airportsLoading} />

      {/* ── BODY ── */}
      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* Error */}
        {error && !loading && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-5 rounded-r-xl flex items-start gap-3">
            <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={18} />
            <div>
              <p className="text-sm font-semibold text-red-700">Error</p>
              <p className="text-sm text-red-600 mt-0.5">{error}</p>
              <button onClick={() => fetchFlights()} className="mt-1.5 text-sm font-semibold text-red-600 hover:text-red-800 underline">Try Again</button>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-5">

          {/* ── MOBILE FILTER BUTTON ── */}
          <button type="button"
            className="lg:hidden flex items-center justify-center gap-2 bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-blue-700 shadow-sm"
            onClick={() => setShowFilters(!showFilters)}>
            <Filter size={16} />{showFilters ? "Hide Filters" : "Filters & Sort"}
          </button>

          {/* ── SIDEBAR ── */}
          <aside className={`fixed inset-y-0 left-0 z-50 w-80 bg-white p-5 shadow-2xl transform transition-transform duration-300 overflow-y-auto ${showFilters ? "translate-x-0" : "-translate-x-full"} lg:relative lg:translate-x-0 lg:shadow-none lg:sticky lg:top-4 lg:self-start lg:h-auto lg:w-72 lg:bg-transparent lg:z-0 lg:p-0`}>
            <div className="lg:hidden flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-gray-900">Filters</h3>
              <button type="button" onClick={() => setShowFilters(false)} className="p-2 hover:bg-gray-100 rounded-lg"><X size={20} /></button>
            </div>

            {/* Sort */}
            <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">Sort by</h3>
              <div className="space-y-1">
                {["Cheapest", "Fastest", "Earliest departure", "Latest departure"].map((opt) => (
                  <button key={opt} className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${opt === "Cheapest" ? "bg-blue-50 text-blue-700 border border-blue-200" : "text-gray-600 hover:bg-gray-50"}`}>{opt}</button>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Filters</h3>
                <button type="button" className="text-xs text-blue-600 font-semibold hover:text-blue-800"
                  onClick={() => { setSelectedFilters({}); setSelectedAirlines([]); setSelectedTimeRange("6 AM – 12 PM"); }}>
                  CLEAR ALL
                </button>
              </div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Popular Filters</h4>
              {popularFilters.map((f, i) => <FilterGroup key={i} filter={f} checked={!!selectedFilters[f.label]} onChange={handleFilterChange} />)}
            </div>

            {/* Airlines */}
            {dynamicAirlineFilters.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-4 mb-4">
                <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">Airlines ({dynamicAirlineFilters.length})</h4>
                <div className="space-y-2">
                  {dynamicAirlineFilters.map((a, i) => <AirlineChip key={i} airline={a} selected={selectedAirlines.includes(a.airlineName)} onClick={handleAirlineSelect} />)}
                </div>
              </div>
            )}

            {/* Departure Time */}
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">Departure Time</h4>
              <div className="grid grid-cols-2 gap-2">
                {[["Before 6 AM", "₹ 6,250"], ["6 AM – 12 PM", "₹ 7,045"], ["12 PM – 6 PM", "₹ 8,450"], ["After 6 PM", "₹ 6,945"]].map(([range, price]) => (
                  <TimeBox key={range} range={range} price={price} active={selectedTimeRange === range} onClick={() => setSelectedTimeRange(range)} />
                ))}
              </div>
            </div>
          </aside>

          {/* ── RESULTS ── */}
          <section className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div>
                <h2 className="text-xl font-extrabold text-gray-800">{origin} → {destination}</h2>
                <p className="text-sm text-gray-500 mt-0.5 flex items-center gap-1.5">
                  <Calendar size={13} />
                  {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} · 1 Adult · Economy
                </p>
              </div>
              <span className="text-sm font-bold px-4 py-2 rounded-xl" style={{ background: '#eef2ff', color: '#1a3fa8' }}>
                {sortedFlights.length} flights found
              </span>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-3">
              {loading ? (
                <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
                  <Loader2 className="animate-spin h-12 w-12 text-blue-600 mx-auto" />
                  <p className="mt-4 text-gray-500 font-medium">Searching for flights...</p>
                </div>
              ) : sortedFlights.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
                  <Plane size={52} className="mx-auto text-gray-300 mb-3" />
                  <h3 className="text-lg font-bold text-gray-700">No flights found</h3>
                  <p className="text-gray-400 text-sm mt-1">{error || "Try adjusting your search or filters"}</p>
                </div>
              ) : (
                <>
                  {currentFlights.map((flight) => (
                    <article key={flight.id}
                      className="bg-white rounded-2xl shadow-sm border-2 border-transparent hover:border-blue-200 hover:shadow-md transition-all overflow-hidden">

                      {/* Top: airline + price */}
                      <div className="px-5 pt-4 pb-3 flex items-center justify-between border-b border-gray-50">
                        <div className="flex items-center gap-3">
                          {flight.airlineLogo
                            ? <img src={flight.airlineLogo} alt={flight.airline} className="w-10 h-10 object-contain rounded-lg" onError={(e) => { e.target.style.display = 'none'; }} />
                            : <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow-sm" style={{ background: flight.airlineColor }}>{flight.airlineCode}</div>
                          }
                          <div>
                            <div className="font-bold text-gray-900 text-sm">{flight.airline}</div>
                            <div className="text-xs text-gray-400">{flight.flightNumber}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-extrabold text-gray-900">{flight.price}</div>
                          <div className="text-xs text-gray-400">per person</div>
                        </div>
                      </div>

                      {/* Middle: route */}
                      <div className="px-5 py-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-center">
                            <div className="text-2xl font-extrabold text-gray-900">{flight.departure}</div>
                            <div className="text-sm font-semibold text-gray-600">{flight.from}</div>
                            <div className="text-xs text-gray-400">{flight.departureTime.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</div>
                          </div>
                          <div className="flex flex-col items-center px-4 flex-1">
                            <div className="text-xs font-semibold text-gray-500 mb-1">{flight.duration}</div>
                            <div className="flex items-center w-full">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                              <div className="flex-1 h-0.5 bg-blue-200 mx-1" />
                              <Plane size={14} className="text-blue-500" />
                              <div className="flex-1 h-0.5 bg-blue-200 mx-1" />
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                            </div>
                            <div className="text-xs font-bold mt-1" style={{ color: '#1a3fa8' }}>{flight.isNonStop ? "Non‑Stop" : "1 Stop"}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-extrabold text-gray-900">{flight.arrival}</div>
                            <div className="text-sm font-semibold text-gray-600">{flight.to}</div>
                            <div className="text-xs text-gray-400">{flight.arrivalTime.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</div>
                          </div>
                        </div>

                        {/* Amenities + badge */}
                        <div className="flex items-center gap-3 flex-wrap">
                          {flight.amenities.map((a, i) => (
                            <div key={i} className="flex items-center gap-1 text-xs text-gray-500">
                              <a.icon size={12} style={{ color: a.color }} />{a.label}
                            </div>
                          ))}
                          {flight.badge && (
                            <span className="ml-auto text-xs font-bold text-white px-2.5 py-1 rounded-lg" style={{ background: flight.badgeColor }}>{flight.badge}</span>
                          )}
                        </div>
                      </div>

                      {/* Bottom: actions */}
                      <div className="px-5 py-3 flex items-center justify-between bg-gray-50 border-t border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Star size={11} className="text-yellow-500 fill-yellow-500" />{flight.rating} (Good)
                          </div>
                          <button type="button" className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline">Flight details</button>
                        </div>
                        <button type="button" onClick={() => handleBookNow(flight)}
                          className="px-6 py-2.5 rounded-xl text-white text-sm font-bold transition-all hover:opacity-90 shadow-sm"
                          style={{ background: 'linear-gradient(135deg, #1a3fa8 0%, #2563eb 100%)' }}>
                          Book Now
                        </button>
                      </div>

                      {/* Offer strip */}
                      {flight.offer && (
                        <div className="px-5 py-2 text-xs font-medium" style={{ background: flight.offerColor, color: flight.offerTextColor }}>
                          <span className="font-bold mr-1.5">✓</span>{flight.offer}
                        </div>
                      )}
                    </article>
                  ))}

                  {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(p) => { setCurrentPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />}
                </>
              )}
            </div>

            {sortedFlights.length > 0 && (
              <p className="mt-5 text-center text-xs text-gray-400">
                Showing {indexOfFirst + 1}–{Math.min(indexOfLast, sortedFlights.length)} of {sortedFlights.length} flights
              </p>
            )}
          </section>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingForm && selectedFlight && (
        <BookingForm flight={selectedFlight}
          onClose={() => { setShowBookingForm(false); setSelectedFlight(null); }}
          onBookingComplete={(data) => { console.log("Booking:", data); setShowBookingForm(false); }} />
      )}
    </div>
  );
}