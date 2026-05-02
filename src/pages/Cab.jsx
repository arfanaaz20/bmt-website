// import React, { useState, useRef, useEffect } from 'react';
// import { 
//   Filter, Star, Check, Clock, MapPin, Zap, Infinity, Shield, 
//   Users, Calendar, Car, Search, ChevronLeft, ChevronRight,
//   Settings, Globe, User, Tag, X, ThumbsUp, Info, Fuel, Gauge, Briefcase,
//   Sparkles, BadgePercent, Navigation, Wifi, Coffee, Snowflake, CreditCard,
//   ArrowRight, Heart, ChevronDown
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { getCabsDataAPI } from '../api/cabs';

// const Cab = () => {
//   const navigate = useNavigate();
  
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedSuppliers, setSelectedSuppliers] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [sortOption, setSortOption] = useState('recommended');
//   const [selectedPromo, setSelectedPromo] = useState(null);
//   const [searchMode, setSearchMode] = useState('quick');
//   const [favourites, setFavourites] = useState([]);
//   const [miniCars, setMiniCars] = useState([]);
//   const [allCars, setAllCars] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [pickupLocation, setPickupLocation] = useState('');
//   const [dropoffLocation, setDropoffLocation] = useState('');
//   const [rentalPickupDate, setRentalPickupDate] = useState('');
//   const [rentalDropoffDate, setRentalDropoffDate] = useState('');
//   const [rentalLocation, setRentalLocation] = useState('');
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [sortDropdown, setSortDropdown] = useState(false);
  
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const today = new Date();
//     const tomorrow = new Date(today);
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     if (!rentalPickupDate) {
//       setRentalPickupDate(today.toISOString().split('T')[0]);
//       setRentalDropoffDate(tomorrow.toISOString().split('T')[0]);
//     }
//   }, []);

//   useEffect(() => {
//     const fetchCars = async() => {
//       try {
//         setLoading(true);
//         const res = await getCabsDataAPI();
//         const carsData = res?.data?.cars || [];
//         const formattedCars = carsData.map(car => ({
//           id: car._id,
//           name: car.name,
//           category: car.carCategory,
//           badge: car.carType,
//           seats: Number(car.seatCapacity),
//           bags: 2,
//           transmission: car.gearType,
//           fuel: car.fuelType,
//           supplier: "AVIS",
//           rating: car.rating || 0,
//           reviewCount: 0,
//           featureIcons: ["Wifi", "Snowflake"],
//           tags: ["Instant confirmation"],
//           mileage: "Unlimited mileage",
//           originalPrice: car.price + 1000,
//           price: car.price,
//           total: car.price,
//           image: car.image,
//           color: car.carColor,
//           year: car.carModel,
//           ac: true
//         }));
//         setAllCars(formattedCars);
//         setMiniCars(formattedCars.slice(0, 6));
//       } catch (err) {
//         setError(err.message || "Failed to fetch cars data");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCars();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gray-50">
//         <div className="text-center">
//           <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-600 font-medium">Loading cars...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-red-500">Error: {error}</p>
//       </div>
//     );
//   }

//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     const options = { month: 'short', day: 'numeric', year: 'numeric' };
//     return date.toLocaleDateString('en-US', options);
//   };

//   const formatDateShort = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     const options = { weekday: 'short', month: 'short', day: 'numeric' };
//     return date.toLocaleDateString('en-US', options);
//   };

//   const suppliers = ["AVIS", "European Car Rent", "Economy Rent A Car", "Avia Star River", "Fox", "Seats"];
//   const seatOptions = ["4-5 seats", "6-7 seats", "8+ seats"];
//   const promoCodes = [
//     { code: "PROMO8", discount: "8% Off", value: "8.00", minAmount: "₹5000" },
//     { code: "SAVE10", discount: "₹10 Off", value: "10.00", minAmount: "No minimum" },
//     { code: "TRIP15", discount: "₹15 Off", value: "15.00", minAmount: "No minimum" },
//     { code: "BIG30", discount: "₹30 Off", value: "30.00", minAmount: "₹10000" }
//   ];

//   const scroll = (direction) => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
//     }
//   };

//   const toggleFavourite = (carId) => {
//     setFavourites(prev => prev.includes(carId) ? prev.filter(id => id !== carId) : [...prev, carId]);
//   };

//   const handleCarClick = (car) => {
//     const cleanCar = {
//       ...car,
//       pickupLocation: pickupLocation || 'Airport',
//       dropoffLocation: dropoffLocation || '',
//       rentalLocation: rentalLocation || '',
//       rentalPickupDate: rentalPickupDate || '',
//       rentalDropoffDate: rentalDropoffDate || '',
//       searchMode
//     };
//     navigate(`/cab-detail/${car.id}`, { state: { car: cleanCar } });
//   };

//   const filteredCars = allCars
//     .filter(car => {
//       const query = searchQuery.toLowerCase();
//       const searchMatch = car.name.toLowerCase().includes(query) || car.category.toLowerCase().includes(query) || car.supplier.toLowerCase().includes(query);
//       const supplierMatch = selectedSuppliers.length === 0 || selectedSuppliers.includes(car.supplier);
//       const seatsMatch = selectedSeats.length === 0 || selectedSeats.some(seat => {
//         if (seat === "4-5 seats") return car.seats <= 5;
//         if (seat === "6-7 seats") return car.seats >= 6 && car.seats <= 7;
//         if (seat === "8+ seats") return car.seats >= 8;
//         return false;
//       });
//       return searchMatch && supplierMatch && seatsMatch;
//     })
//     .sort((a, b) => {
//       if (sortOption === 'price_asc') return a.price - b.price;
//       if (sortOption === 'price_desc') return b.price - a.price;
//       if (sortOption === 'rating') return b.rating - a.rating;
//       return 0;
//     });

//   const toggleSupplier = (supplier) => {
//     setSelectedSuppliers(prev => prev.includes(supplier) ? prev.filter(s => s !== supplier) : [...prev, supplier]);
//   };

//   const toggleSeat = (seat) => {
//     setSelectedSeats(prev => prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]);
//   };

//   const calculateDays = () => {
//     if (rentalPickupDate && rentalDropoffDate) {
//       const diffDays = Math.ceil(Math.abs(new Date(rentalDropoffDate) - new Date(rentalPickupDate)) / (1000 * 60 * 60 * 24));
//       return diffDays || 1;
//     }
//     return 1;
//   };

//   const renderFeatureIcon = (iconName) => {
//     switch(iconName) {
//       case 'Wifi': return <Wifi className="w-4 h-4" />;
//       case 'Coffee': return <Coffee className="w-4 h-4" />;
//       case 'Snowflake': return <Snowflake className="w-4 h-4" />;
//       case 'Users': return <Users className="w-4 h-4" />;
//       case 'Zap': return <Zap className="w-4 h-4" />;
//       case 'Briefcase': return <Briefcase className="w-4 h-4" />;
//       default: return <Check className="w-4 h-4" />;
//     }
//   };

//   const sortLabels = {
//     recommended: 'Recommended',
//     price_asc: 'Price: Low to High',
//     price_desc: 'Price: High to Low',
//     rating: 'Top Rated'
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans text-gray-900">

//       {/* ===== HERO BANNER ===== */}
//       <div className="relative h-[340px] overflow-hidden">
//         {/* Background image with overlay */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&h=600&fit=crop')`,
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-blue-900/80" />

//         {/* Hero Text */}
//         <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-[1280px] mx-auto px-6 pb-20">
//           <h1 className="text-5xl font-extrabold text-white tracking-tight mb-1">
//             Cabs<span className="text-yellow-400">.</span>
//           </h1>
//           <p className="text-blue-100 text-base mt-1">Find and book a ride — quick cab or rental, your choice.</p>
//         </div>

//         {/* ===== SEARCH BAR (floating over hero bottom) ===== */}
//         {/* <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2"> */}
//         <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-[5%]">
//           <div className="max-w-[1280px] mx-auto px-6">
//             <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-visible">
              
//               {/* Mode Tabs inside card */}
//               <div className="flex border-b border-gray-100 px-2 pt-2">
//                 <button
//                   onClick={() => setSearchMode('quick')}
//                   className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-t-xl transition-all border-b-2 ${
//                     searchMode === 'quick'
//                       ? 'border-blue-500 text-blue-600'
//                       : 'border-transparent text-gray-500 hover:text-gray-800'
//                   }`}
//                 >
//                   <Zap className="w-4 h-4" /> Quick Cab
//                 </button>
//                 <button
//                   onClick={() => setSearchMode('rental')}
//                   className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-t-xl transition-all border-b-2 ${
//                     searchMode === 'rental'
//                       ? 'border-blue-500 text-blue-600'
//                       : 'border-transparent text-gray-500 hover:text-gray-800'
//                   }`}
//                 >
//                   <Calendar className="w-4 h-4" /> Car Rental
//                 </button>
//               </div>

//               <div className="p-4">
//                 {searchMode === 'quick' ? (
//                   /* Quick Search */
//                   <div className="flex flex-col md:flex-row gap-3 items-end">
//                     <div className="flex-1">
//                       <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Pickup Location</label>
//                       <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all bg-white">
//                         <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
//                         <input
//                           type="text"
//                           value={pickupLocation}
//                           onChange={(e) => setPickupLocation(e.target.value)}
//                           placeholder="Enter pickup location"
//                           className="flex-1 outline-none text-gray-900 placeholder-gray-400 bg-transparent text-sm"
//                         />
//                         {pickupLocation && (
//                           <button onClick={() => setPickupLocation('')}><X className="w-4 h-4 text-gray-400" /></button>
//                         )}
//                       </div>
//                     </div>

//                     <div className="flex-1">
//                       <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Dropoff Location</label>
//                       <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all bg-white">
//                         <Navigation className="w-4 h-4 text-blue-500 flex-shrink-0" />
//                         <input
//                           type="text"
//                           value={dropoffLocation}
//                           onChange={(e) => setDropoffLocation(e.target.value)}
//                           placeholder="Enter dropoff location"
//                           className="flex-1 outline-none text-gray-900 placeholder-gray-400 bg-transparent text-sm"
//                         />
//                         {dropoffLocation && (
//                           <button onClick={() => setDropoffLocation('')}><X className="w-4 h-4 text-gray-400" /></button>
//                         )}
//                       </div>
//                     </div>

//                     <button
//                       onClick={() => document.getElementById('car-listings')?.scrollIntoView({ behavior: 'smooth' })}
//                       className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-md hover:shadow-lg whitespace-nowrap text-sm"
//                     >
//                       <Search className="w-4 h-4" />
//                       Search
//                     </button>
//                   </div>
//                 ) : (
//                   /* Rental Search */
//                   <div className="flex flex-col lg:flex-row gap-3 items-end">
//                     <div className="flex-1">
//                       <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Pickup Location</label>
//                       <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all bg-white">
//                         <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
//                         <input
//                           type="text"
//                           value={rentalLocation}
//                           onChange={(e) => setRentalLocation(e.target.value)}
//                           placeholder="City, airport or area"
//                           className="flex-1 outline-none text-gray-900 placeholder-gray-400 bg-transparent text-sm"
//                         />
//                       </div>
//                     </div>

//                     <div className="relative flex-1">
//                       <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Dates</label>
//                       <div
//                         onClick={() => setShowDatePicker(!showDatePicker)}
//                         className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-blue-400 cursor-pointer transition-all bg-white"
//                       >
//                         <Calendar className="w-4 h-4 text-blue-500 flex-shrink-0" />
//                         <span className="text-sm text-gray-900 font-medium">
//                           {formatDate(rentalPickupDate)} — {formatDate(rentalDropoffDate)}
//                         </span>
//                       </div>

//                       {showDatePicker && (
//                         <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 p-5">
//                           <div className="flex justify-between items-center mb-4">
//                             <h4 className="font-bold text-gray-900">Select Dates</h4>
//                             <button onClick={() => setShowDatePicker(false)}><X className="w-5 h-5 text-gray-400" /></button>
//                           </div>
//                           <div className="space-y-4">
//                             <div>
//                               <label className="block text-xs text-gray-500 mb-1.5 font-medium">Pickup Date</label>
//                               <input type="date" value={rentalPickupDate} onChange={(e) => setRentalPickupDate(e.target.value)} className="w-full border border-gray-200 rounded-xl p-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm" />
//                             </div>
//                             <div>
//                               <label className="block text-xs text-gray-500 mb-1.5 font-medium">Return Date</label>
//                               <input type="date" value={rentalDropoffDate} min={rentalPickupDate} onChange={(e) => setRentalDropoffDate(e.target.value)} className="w-full border border-gray-200 rounded-xl p-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm" />
//                             </div>
//                             <button onClick={() => setShowDatePicker(false)} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-xl font-semibold transition-colors text-sm">Apply</button>
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     <div className="lg:w-40">
//                       <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Driver Age</label>
//                       <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 bg-white">
//                         <User className="w-4 h-4 text-blue-500 flex-shrink-0" />
//                         <select className="flex-1 outline-none text-sm text-gray-900 bg-transparent">
//                           <option>30–65</option>
//                           <option>25–30</option>
//                           <option>65+</option>
//                         </select>
//                       </div>
//                     </div>

//                     <button
//                       onClick={() => document.getElementById('car-listings')?.scrollIntoView({ behavior: 'smooth' })}
//                       className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-md hover:shadow-lg whitespace-nowrap text-sm"
//                     >
//                       <Search className="w-4 h-4" />
//                       Search
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ===== SPACER for hero overlap ===== */}
//       {/* <div className="h-24" /> */}
//       {/* <div className="h-28 md:h-48" /> */}
//       <div className="h-16 md:h-20" />

//       {/* ===== TOP PICKS CAROUSEL (Quick mode only) ===== */}
//       {searchMode === 'quick' && (
//         // <div className="max-w-[1280px] mx-auto px-6 py-4 -mt-6">
//         <div className="max-w-[1280px] mx-auto px-6 py-2 -mt-12">
//           <div className="flex justify-between items-center mb-5">
//             <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
//               <Sparkles className="w-5 h-5 text-blue-500" />
//               Top Picks for Today
//             </h3>
//             <span className="text-sm text-gray-500 flex items-center gap-1.5">
//               <Calendar className="w-4 h-4 text-blue-400" />
//               {formatDateShort(new Date().toISOString().split('T')[0])}
//             </span>
//           </div>

//           <div className="relative group">
//             <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:border-blue-500 hover:text-blue-500">
//               <ChevronLeft className="w-5 h-5" />
//             </button>

//             <div ref={carouselRef} className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide scroll-smooth">
//               {miniCars.map(car => (
//                 <div
//                   key={car.id}
//                   onClick={() => handleCarClick(car)}
//                   className="min-w-[210px] border border-gray-200 rounded-2xl p-4 hover:border-blue-400 hover:shadow-xl cursor-pointer transition-all bg-white group/card"
//                 >
//                   <div className="flex items-start justify-between mb-3">
//                     <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">{car.badge}</span>
//                     <button onClick={(e) => { e.stopPropagation(); toggleFavourite(car.id); }} className="text-gray-300 hover:text-red-500 transition-colors">
//                       <Heart className={`w-4 h-4 ${favourites.includes(car.id) ? 'fill-red-500 text-red-500' : ''}`} />
//                     </button>
//                   </div>
//                   <img src={car.image} className="w-full h-28 object-contain mb-3 group-hover/card:scale-105 transition-transform duration-300" alt={car.name} />
//                   <p className="font-bold text-gray-900 text-sm mb-1">{car.name}</p>
//                   <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
//                     <Users className="w-3 h-3" /> {car.seats}
//                     <span className="w-1 h-1 bg-gray-300 rounded-full" />
//                     <Gauge className="w-3 h-3" /> {car.transmission}
//                   </div>
//                   <div className="flex justify-between items-center pt-2 border-t border-gray-100">
//                     <div>
//                       <span className="text-base font-bold text-gray-900">₹{car.price?.toLocaleString()}</span>
//                       <span className="text-xs text-gray-400 ml-1">+tax</span>
//                     </div>
//                     <button className="text-blue-500 text-xs font-semibold hover:text-blue-600 flex items-center gap-1">
//                       Book <ArrowRight className="w-3 h-3" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:border-blue-500 hover:text-blue-500">
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       )}

//       {/* ===== MAIN CONTENT ===== */}
//       <div className="max-w-[1280px] mx-auto px-6 pb-12">
//         <div className="flex gap-7">

//           {/* ===== SIDEBAR ===== */}
//           <aside className="hidden lg:block w-[260px] flex-shrink-0">
//             <div className="space-y-5 sticky top-6">

//               {/* Filters Header */}
//               <div className="flex justify-between items-center">
//                 <h3 className="font-bold text-base text-gray-900 flex items-center gap-2">
//                   <Filter className="w-4 h-4 text-blue-500" /> Filters
//                 </h3>
//                 {(selectedSuppliers.length > 0 || selectedSeats.length > 0) && (
//                   <button onClick={() => { setSelectedSuppliers([]); setSelectedSeats([]); setSearchQuery(''); }} className="text-blue-500 text-xs font-semibold hover:underline">
//                     Reset All
//                   </button>
//                 )}
//               </div>

//               {/* Search box */}
//               <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 bg-white focus-within:border-blue-400 transition-all">
//                 <Search className="w-4 h-4 text-gray-400" />
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search cars..."
//                   className="flex-1 outline-none text-sm text-gray-900 placeholder-gray-400 bg-transparent"
//                 />
//               </div>

//               {/* Supplier */}
//               <div className="bg-white rounded-2xl border border-gray-200 p-4">
//                 <h4 className="font-bold text-sm mb-3 text-gray-900">Supplier</h4>
//                 <div className="space-y-2.5">
//                   {suppliers.map(s => (
//                     <label key={s} className="flex items-center justify-between cursor-pointer group">
//                       <div className="flex items-center gap-2.5">
//                         <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-400" checked={selectedSuppliers.includes(s)} onChange={() => toggleSupplier(s)} />
//                         <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">{s}</span>
//                       </div>
//                       <span className="text-xs text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded-full">12</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Seats */}
//               <div className="bg-white rounded-2xl border border-gray-200 p-4">
//                 <h4 className="font-bold text-sm mb-3 text-gray-900 flex items-center gap-1.5"><Users className="w-4 h-4" /> Seats</h4>
//                 <div className="space-y-2.5">
//                   {seatOptions.map(seat => (
//                     <label key={seat} className="flex items-center gap-2.5 cursor-pointer group">
//                       <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-400" checked={selectedSeats.includes(seat)} onChange={() => toggleSeat(seat)} />
//                       <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">{seat}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Price Range */}
//               <div className="bg-white rounded-2xl border border-gray-200 p-4">
//                 <h4 className="font-bold text-sm mb-3 text-gray-900">Price Range</h4>
//                 <input type="range" min="3000" max="15000" className="w-full accent-blue-500" />
//                 <div className="flex justify-between text-xs text-gray-500 mt-1">
//                   <span>₹3,000</span><span>₹15,000+</span>
//                 </div>
//               </div>

//               {/* Promo Codes */}
//               <div className="bg-white rounded-2xl border border-gray-200 p-4">
//                 <h4 className="font-bold text-sm mb-3 text-gray-900 flex items-center gap-1.5">
//                   <BadgePercent className="w-4 h-4 text-blue-500" /> Promo Codes
//                 </h4>
//                 <div className="space-y-2.5">
//                   {promoCodes.map(promo => (
//                     <div
//                       key={promo.code}
//                       onClick={() => setSelectedPromo(promo.code)}
//                       className={`p-3 rounded-xl border cursor-pointer transition-all ${selectedPromo === promo.code ? 'border-blue-400 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
//                     >
//                       <div className="flex justify-between items-center mb-0.5">
//                         <span className="text-sm font-bold text-gray-900">{promo.discount}</span>
//                         <span className="text-xs font-semibold text-blue-600 bg-white border border-blue-200 px-2 py-0.5 rounded-full">{promo.code}</span>
//                       </div>
//                       <p className="text-xs text-gray-500">Min: {promo.minAmount}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </aside>

//           {/* ===== LISTINGS ===== */}
//           <main className="flex-1 min-w-0">

//             {/* Mobile filter button */}
//             <div className="lg:hidden mb-4">
//               <button className="w-full bg-white border border-gray-200 rounded-xl p-3 flex items-center justify-center gap-2 font-semibold text-gray-700 text-sm hover:border-blue-400 transition-all">
//                 <Filter className="w-4 h-4" /> Show Filters
//               </button>
//             </div>

//             {/* Sort + Count Bar */}
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-5 pb-4 border-b border-gray-200">
//               <div>
//                 <h2 className="text-lg font-bold text-gray-900">Available Cars</h2>
//                 <p className="text-sm text-gray-500">{filteredCars.length} properties found</p>
//               </div>
//               <div className="relative">
//                 <button
//                   onClick={() => setSortDropdown(!sortDropdown)}
//                   className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 bg-white hover:border-blue-400 transition-all"
//                 >
//                   Sort by: {sortLabels[sortOption]}
//                   <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${sortDropdown ? 'rotate-180' : ''}`} />
//                 </button>
//                 {sortDropdown && (
//                   <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-xl z-30 overflow-hidden">
//                     {Object.entries(sortLabels).map(([key, label]) => (
//                       <button
//                         key={key}
//                         onClick={() => { setSortOption(key); setSortDropdown(false); }}
//                         className={`w-full text-left px-4 py-3 text-sm transition-colors ${sortOption === key ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
//                       >
//                         {label}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Car Cards */}
//             <div id="car-listings" className="space-y-4">
//               {filteredCars.map(car => (
//                 <div
//                   key={car.id}
//                   onClick={() => handleCarClick(car)}
//                   className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all cursor-pointer group"
//                 >
//                   <div className="flex flex-col lg:flex-row">

//                     {/* Image Panel */}
//                     <div className="w-full lg:w-[260px] p-5 bg-white relative flex-shrink-0">
//                       <button
//                         onClick={(e) => { e.stopPropagation(); toggleFavourite(car.id); }}
//                         className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full shadow border border-gray-100 flex items-center justify-center hover:scale-110 transition-transform z-10"
//                       >
//                         <Heart className={`w-4 h-4 ${favourites.includes(car.id) ? 'fill-red-500 text-red-500' : 'text-gray-300'}`} />
//                       </button>
//                       <div className="h-36 flex items-center justify-center mb-3">
//                         <img src={car.image} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" alt={car.name} />
//                       </div>
//                       <div className="text-center">
//                         <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-2">{car.badge}</span>
//                         <h3 className="font-bold text-gray-900 text-sm">{car.name}</h3>
//                         <p className="text-xs text-gray-500 mb-2">{car.category}</p>
//                         <div className="flex items-center justify-center gap-3 text-xs text-gray-500">
//                           <span className="flex items-center gap-1"><Users className="w-3 h-3" />{car.seats}</span>
//                           <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{car.bags}</span>
//                           <span className="flex items-center gap-1"><Gauge className="w-3 h-3" />{car.transmission}</span>
//                           <span className="flex items-center gap-1"><Fuel className="w-3 h-3" />{car.fuel}</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Details Panel */}
//                     <div className="flex-1 p-5 border-t lg:border-t-0 lg:border-l border-gray-100">
//                       <div className="flex items-center gap-3 mb-4">
//                         <span className="font-bold text-sm text-gray-900">{car.supplier}</span>
//                         {car.rating > 0 && (
//                           <div className="flex items-center gap-1.5">
//                             <div className="flex items-center bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">
//                               <Star className="w-3 h-3 mr-0.5 fill-white" />{car.rating}
//                             </div>
//                             {car.reviewCount > 0 && <span className="text-xs text-gray-400">({car.reviewCount} reviews)</span>}
//                           </div>
//                         )}
//                       </div>

//                       <div className="grid grid-cols-2 gap-2 mb-4">
//                         {car.featureIcons.map((iconName, i) => (
//                           <div key={i} className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 rounded-lg px-2.5 py-1.5">
//                             <span className="text-blue-500">{renderFeatureIcon(iconName)}</span>
//                             <span>{iconName}</span>
//                           </div>
//                         ))}
//                       </div>

//                       <div className="space-y-1.5">
//                         {car.tags.map((tag, i) => (
//                           <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
//                             <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
//                             <span>{tag}</span>
//                           </div>
//                         ))}
//                       </div>

//                       <div className="mt-4 flex flex-wrap gap-2">
//                         <span className="text-xs text-gray-500 flex items-center gap-1 bg-gray-50 rounded-full px-2.5 py-1">
//                           <Infinity className="w-3 h-3 text-blue-400" /> {car.mileage}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Price Panel */}
//                     <div className="w-full lg:w-[220px] bg-gradient-to-b from-blue-50/60 to-white p-5 flex flex-col justify-center items-center border-t lg:border-t-0 lg:border-l border-gray-100 flex-shrink-0">
//                       <p className="text-xs text-gray-400 mb-1">Starting from</p>
//                       <div className="flex items-baseline gap-1.5 mb-0.5">
//                         <span className="text-xs text-gray-400 line-through">₹{car.originalPrice?.toLocaleString()}</span>
//                       </div>
//                       <div className="text-3xl font-extrabold text-gray-900 mb-1">₹{car.price?.toLocaleString()}</div>

//                       {searchMode === 'rental' && (
//                         <div className="w-full mb-3 p-3 bg-white rounded-xl border border-blue-100">
//                           <div className="flex justify-between text-xs mb-1">
//                             <span className="text-gray-500">Total ({calculateDays()} days)</span>
//                             <span className="font-bold text-blue-600">₹{(car.price * calculateDays())?.toLocaleString()}</span>
//                           </div>
//                           <p className="text-xs text-green-600 flex items-center gap-1 justify-center">
//                             <Check className="w-3 h-3" /> Save ₹{((car.originalPrice - car.price) * calculateDays())?.toLocaleString()}
//                           </p>
//                         </div>
//                       )}

//                       <button
//                         onClick={(e) => { e.stopPropagation(); handleCarClick(car); }}
//                         className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg text-sm"
//                       >
//                         View Details <ArrowRight className="w-4 h-4" />
//                       </button>

//                       <div className="mt-3 flex flex-col gap-1.5 text-xs text-gray-400 w-full">
//                         <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-500" /> Free cancellation</span>
//                         <span className="flex items-center gap-1.5"><CreditCard className="w-3 h-3 text-blue-400" /> Pay at counter</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {filteredCars.length === 0 && (
//                 <div className="p-16 text-center bg-white rounded-2xl border border-gray-200">
//                   <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <Car className="w-10 h-10 text-blue-400" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">No cars found</h3>
//                   <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">Try adjusting your filters or search terms.</p>
//                   <button
//                     onClick={() => { setSelectedSuppliers([]); setSelectedSeats([]); setSearchQuery(''); }}
//                     className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md"
//                   >
//                     Clear All Filters
//                   </button>
//                 </div>
//               )}
//             </div>

//             {filteredCars.length > 0 && (
//               <div className="mt-8 flex justify-center">
//                 <button className="bg-white border-2 border-blue-500 text-blue-600 px-8 py-3 rounded-full text-sm font-bold hover:bg-blue-50 transition-all flex items-center gap-2 shadow-sm">
//                   Show more results <ChevronRight className="w-4 h-4" />
//                 </button>
//               </div>
//             )}
//           </main>
//         </div>
//       </div>

//       <style>{`
//         .scrollbar-hide::-webkit-scrollbar { display: none; }
//         .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>
//     </div>
//   );
// };

// export default Cab;


































import React, { useState, useRef, useEffect } from 'react';
import {
  Filter, Star, Check, Clock, MapPin, Zap, Infinity, Shield,
  Users, Calendar, Car, Search, ChevronLeft, ChevronRight,
  Settings, Globe, User, Tag, X, ThumbsUp, Info, Fuel, Gauge, Briefcase,
  Sparkles, BadgePercent, Navigation, Wifi, Coffee, Snowflake, CreditCard,
  ArrowRight, Heart, ChevronDown, ArrowLeftRight, Minus, Plus, Bus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getCabsDataAPI } from '../api/cabs';

/* ─────────────────────────────────────────────
   Quick-filter pill data
───────────────────────────────────────────── */
// const QUICK_FILTERS = ['AC Sleeper', 'Volvo', 'Non-AC', 'Overnight', 'Budget', 'Top Rated'];
// const BUS_TYPES = [
//   { label: 'AC', icon: <Snowflake className="w-3.5 h-3.5" /> },
//   { label: 'Non-AC', icon: <Bus className="w-3.5 h-3.5" /> },
//   { label: 'Sleeper', icon: <Zap className="w-3.5 h-3.5" /> },
//   { label: 'Seater', icon: <Users className="w-3.5 h-3.5" /> },
// ];

const Cab = () => {
  const navigate = useNavigate();

  /* ── state ── */
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSuppliers, setSelectedSuppliers] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [sortOption, setSortOption] = useState('recommended');
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [miniCars, setMiniCars] = useState([]);
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  // const [busTypes, setBusTypes] = useState([]);
  // const [quickFilters, setQuickFilters] = useState([]);
  const [sortDropdown, setSortDropdown] = useState(false);
  // const [workTravel, setWorkTravel] = useState(false);
  const [activeRegion, setActiveRegion] = useState('North India');
  const [tripType, setTripType] = useState('outstation');
  const [differentDrop, setDifferentDrop] = useState(false);
const [returnDate, setReturnDate] = useState('');

  const carouselRef = useRef(null);

  /* ── init date ── */
  useEffect(() => {
    const today = new Date();
    setTravelDate(today.toISOString().split('T')[0]);
  }, []);

  /* ── fetch ── */
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const res = await getCabsDataAPI();
        const carsData = res?.data?.cars || [];
        const formatted = carsData.map(car => ({
          id: car._id,
          name: car.name,
          category: car.carCategory,
          badge: car.carType,
          seats: Number(car.seatCapacity),
          bags: 2,
          transmission: car.gearType,
          fuel: car.fuelType,
          supplier: 'AVIS',
          rating: car.rating || 0,
          reviewCount: 0,
          featureIcons: ['Wifi', 'Snowflake'],
          tags: ['Instant confirmation'],
          mileage: 'Unlimited mileage',
          originalPrice: car.price + 1000,
          price: car.price,
          total: car.price,
          image: car.image,
          color: car.carColor,
          year: car.carModel,
          ac: true,
        }));
        setAllCars(formatted);
        setMiniCars(formatted.slice(0, 6));
      } catch (err) {
        setError(err.message || 'Failed to fetch cars');
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  /* ── helpers ── */
  // const toggleBusType = t =>
  //   setBusTypes(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t]);

  // const toggleQuickFilter = f =>
  //   setQuickFilters(p => p.includes(f) ? p.filter(x => x !== f) : [...p, f]);

  const toggleFavourite = id =>
    setFavourites(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);

  const toggleSupplier = s =>
    setSelectedSuppliers(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s]);

  const toggleSeat = s =>
    setSelectedSeats(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s]);

  const handleCarClick = car => {
    const cleanCar = { ...car, pickupLocation, dropoffLocation, travelDate };
    navigate(`/cab-detail/${car.id}`, { state: { car: cleanCar } });
  };

  const swapLocations = () => {
    setPickupLocation(dropoffLocation);
    setDropoffLocation(pickupLocation);
  };

  const renderFeatureIcon = name => {
    const map = { Wifi: <Wifi />, Coffee: <Coffee />, Snowflake: <Snowflake />, Users: <Users />, Zap: <Zap />, Briefcase: <Briefcase /> };
    return React.cloneElement(map[name] || <Check />, { className: 'w-4 h-4' });
  };

  const sortLabels = { recommended: 'Recommended', price_asc: 'Price: Low to High', price_desc: 'Price: High to Low', rating: 'Top Rated' };
  const suppliers = ['AVIS', 'European Car Rent', 'Economy Rent A Car', 'Avia Star River', 'Fox'];
  const seatOptions = ['4-5 seats', '6-7 seats', '8+ seats'];
  const promoCodes = [
    { code: 'PROMO8', discount: '8% Off', minAmount: '₹5000' },
    { code: 'SAVE10', discount: '₹10 Off', minAmount: 'No minimum' },
    { code: 'TRIP15', discount: '₹15 Off', minAmount: 'No minimum' },
    { code: 'BIG30', discount: '₹30 Off', minAmount: '₹10000' },
  ];
  const popularRoutes = {
    'North India': ['Delhi → Chandigarh', 'Delhi → Jaipur', 'Delhi → Agra', 'Amritsar → Delhi', 'Delhi → Shimla'],
    'South India': ['Bangalore → Chennai', 'Hyderabad → Goa', 'Chennai → Coimbatore'],
    'West India': ['Mumbai → Pune', 'Ahmedabad → Mumbai', 'Surat → Mumbai'],
    'East India': ['Kolkata → Patna', 'Kolkata → Bhubaneswar'],
    'Hill Stations': ['Delhi → Manali', 'Chandigarh → Manali', 'Bangalore → Ooty'],
  };

  const filteredCars = allCars
    .filter(car => {
      const q = searchQuery.toLowerCase();
      const sm = !q || car.name.toLowerCase().includes(q) || car.category.toLowerCase().includes(q);
      const supp = !selectedSuppliers.length || selectedSuppliers.includes(car.supplier);
      const seat = !selectedSeats.length || selectedSeats.some(s => {
        if (s === '4-5 seats') return car.seats <= 5;
        if (s === '6-7 seats') return car.seats >= 6 && car.seats <= 7;
        return car.seats >= 8;
      });
      return sm && supp && seat;
    })
    .sort((a, b) => {
      if (sortOption === 'price_asc') return a.price - b.price;
      if (sortOption === 'price_desc') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      return 0;
    });

  /* ── loaders ── */
  if (loading) return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-600 font-medium">Loading cabs...</p>
      </div>
    </div>
  );
  if (error) return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-red-500">Error: {error}</p>
    </div>
  );

  /* ══════════════════════════════════════════
     RENDER
  ══════════════════════════════════════════ */
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">

      {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
      <div className="relative overflow-hidden" style={{ minHeight: 520 }}>

        {/* Gradient background — deep blue → red like reference */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #1a237e 0%, #283593 30%, #7b1fa2 60%, #b71c1c 100%)',
          }}
        />
        {/* Bus silhouette overlay for atmosphere */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          // style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&h=600&fit=crop')` }}
          style={{ 
  backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&h=600&fit=crop')` 
}}
        />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }} />

        {/* ── Badge row ── */}
        <div className="relative z-10 flex justify-center pt-8">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-white text-sm font-medium">
            <Car className="w-4 h-4 text-yellow-400" />
            {/* <span>5,000+ Cab Operators · 2,000+ Routes Across India</span> */}
            <span>5,000+ Verified Drivers · 2,000+ Cab Routes Across India</span>
          </div>
        </div>

        {/* ── Headline ── */}
        <div className="relative z-10 text-center mt-6 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Book Cab{' '}
            <span className="text-yellow-400" style={{ fontStyle: 'italic' }}>Online</span>
          </h1>
          <p className="mt-3 text-blue-100 text-base font-medium">
            Best prices · Verified operators · Instant e-ticket · Zero booking fee
          </p>
        </div>

        {/* ── Floating Search Card ── */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 mt-8">

          <div className="flex justify-center gap-3 mb-4">
  {['outstation', 'airport', 'local'].map(type => (
    <button
      key={type}
      onClick={() => setTripType(type)}
      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
        tripType === type
          ? 'bg-red-600 text-white'
          : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
      }`}
    >
      {type === 'outstation' && 'Outstation'}
      {type === 'airport' && 'Airport'}
      {type === 'local' && 'Local'}
    </button>
  ))}
</div>

          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-visible">

            {/* 🔥 NEW TOP BAR */}
<div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-gray-200 text-sm">

  {/* LEFT */}
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      checked={differentDrop}
      onChange={(e) => setDifferentDrop(e.target.checked)}
    />
    Drop off at a different location
  </label>

  {/* RIGHT */}
  <div className="text-gray-600 text-sm">
    Driver's age: 30-60 | License: India
  </div>

</div>

            {/* Top row: From / Swap / To / Date / Passengers / Search */}
            <div className="flex flex-col lg:flex-row items-stretch">

              {/* FROM */}
              <div className="flex-1 p-4 lg:border-r border-gray-100">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">From</label>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <input
                    type="text"
                    value={pickupLocation}
                    onChange={e => setPickupLocation(e.target.value)}
                    // placeholder="Departure city"
                    placeholder="Select airport, city, station..."
                    className="flex-1 outline-none text-gray-800 text-base font-medium placeholder-gray-400 bg-transparent"
                  />
                </div>
              </div>

              {/* SWAP */}
              {/* <button
                onClick={swapLocations}
                className="hidden lg:flex items-center justify-center w-10 self-center -mx-5 z-10 w-10 h-10 bg-white border-2 border-gray-200 rounded-full shadow hover:border-red-400 hover:text-red-500 transition-all flex-shrink-0"
              >
                <ArrowLeftRight className="w-4 h-4" />
              </button> */}

              {/* TO */}
              <div className="flex-1 p-4 border-t lg:border-t-0 lg:border-r border-gray-100">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">To</label>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <input
                    type="text"
                    value={dropoffLocation}
                    onChange={e => setDropoffLocation(e.target.value)}
                    placeholder="Arrival city"
                    className="flex-1 outline-none text-gray-800 text-base font-medium placeholder-gray-400 bg-transparent"
                  />
                </div>
              </div>

              {/* DATE */}
              {/* <div className="flex-1 p-4 border-t lg:border-t-0 lg:border-r border-gray-100">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Travel Date</label>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <input
                    type="date"
                    value={travelDate}
                    onChange={e => setTravelDate(e.target.value)}
                    className="flex-1 outline-none text-gray-800 text-base font-medium bg-transparent"
                  />
                </div>
              </div> */}

              {/* PASSENGERS */}
              <div className="w-full lg:w-44 p-4 border-t lg:border-t-0 lg:border-r border-gray-100">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Passengers</label>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <button onClick={() => setPassengers(p => Math.max(1, p - 1))} className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 hover:border-red-400 transition-colors">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-base font-bold w-4 text-center">{passengers}</span>
                  <button onClick={() => setPassengers(p => p + 1)} className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 hover:border-red-400 transition-colors">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* SEARCH BUTTON */}
              <button
                onClick={() => document.getElementById('car-listings')?.scrollIntoView({ behavior: 'smooth' })}
                className="m-3 lg:m-0 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-8 font-bold flex items-center justify-center gap-2 transition-all rounded-xl lg:rounded-none lg:rounded-r-2xl text-base shadow-lg py-4"
              >
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>

            {/* Bottom row: work travel + bus types */}
            {/* <div className="flex flex-wrap items-center gap-3 px-4 py-3 border-t border-gray-100">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 select-none">
                <input
                  type="checkbox"
                  checked={workTravel}
                  onChange={e => setWorkTravel(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-red-500 accent-red-500"
                />
                I'm travelling for work
              </label>
              <span className="text-gray-300">|</span>
              <span className="text-sm font-semibold text-gray-500">Bus Type:</span>
              {BUS_TYPES.map(bt => (
                <button
                  key={bt.label}
                  onClick={() => toggleBusType(bt.label)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-semibold transition-all ${
                    busTypes.includes(bt.label)
                      ? 'border-red-500 bg-red-50 text-red-600'
                      : 'border-gray-300 text-gray-600 hover:border-red-400 hover:text-red-500'
                  }`}
                >
                  {bt.icon} {bt.label}
                </button>
              ))}
            </div> */}
          </div>
        </div>

        {/* ── Quick filters ── */}
        {/* <div className="relative z-10 max-w-5xl mx-auto px-4 mt-5 pb-8 flex flex-wrap items-center gap-2">
          <span className="text-white/70 text-sm font-medium mr-1">Quick Filter:</span>
          {QUICK_FILTERS.map(f => (
            <button
              key={f}
              onClick={() => toggleQuickFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                quickFilters.includes(f)
                  ? 'bg-red-500 border-red-500 text-white'
                  : 'bg-white/10 border-white/30 text-white hover:bg-white/20'
              }`}
            >
              {f}
            </button>
          ))}
        </div> */}
      </div>

      {/* ════════════════════════════════════
          POPULAR BUS ROUTES
      ════════════════════════════════════ */}
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-extrabold text-gray-900">
            Popular <span className="text-red-600">Cab Routes</span>
          </h2>
          <button className="text-red-600 text-sm font-bold hover:underline">View all routes &rsaquo;</button>
        </div>
        {/* Region tabs */}
        <div className="flex flex-wrap gap-2 mb-5">
          {Object.keys(popularRoutes).map(region => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                activeRegion === region
                  ? 'bg-red-600 text-white border-red-600'
                  : 'border-gray-300 text-gray-600 hover:border-red-400 hover:text-red-500'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {popularRoutes[activeRegion].map(route => (
            <button
              key={route}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:border-red-400 hover:text-red-600 hover:shadow-md transition-all text-left"
            >
              <Navigation className="w-4 h-4 text-red-400 flex-shrink-0" />
              {route}
            </button>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════
          TOP PICKS CAROUSEL
      ════════════════════════════════════ */}
      {miniCars.length > 0 && (
        <div className="max-w-[1280px] mx-auto px-6 pb-4">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-red-500" />
              Top Picks for Today
            </h3>
          </div>
          <div className="relative group">
            <button
              onClick={() => carouselRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-9 h-9 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:border-red-400 hover:text-red-500"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div ref={carouselRef} className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide scroll-smooth">
              {miniCars.map(car => (
                <div
                  key={car.id}
                  onClick={() => handleCarClick(car)}
                  className="min-w-[200px] border border-gray-200 rounded-2xl p-4 hover:border-red-400 hover:shadow-xl cursor-pointer transition-all bg-white group/card"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded-full">{car.badge}</span>
                    <button onClick={e => { e.stopPropagation(); toggleFavourite(car.id); }}>
                      <Heart className={`w-4 h-4 ${favourites.includes(car.id) ? 'fill-red-500 text-red-500' : 'text-gray-300 hover:text-red-400'}`} />
                    </button>
                  </div>
                  <img src={car.image} className="w-full h-28 object-contain mb-3 group-hover/card:scale-105 transition-transform duration-300" alt={car.name} />
                  <p className="font-bold text-gray-900 text-sm mb-1">{car.name}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <Users className="w-3 h-3" />{car.seats}
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <Gauge className="w-3 h-3" />{car.transmission}
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <div>
                      <span className="text-base font-bold text-gray-900">₹{car.price?.toLocaleString()}</span>
                      <span className="text-xs text-gray-400 ml-1">+tax</span>
                    </div>
                    <button className="text-red-500 text-xs font-semibold flex items-center gap-1">
                      Book <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => carouselRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-9 h-9 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:border-red-400 hover:text-red-500"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════
          MAIN: SIDEBAR + LISTINGS
      ════════════════════════════════════ */}
      <div className="max-w-[1280px] mx-auto px-6 pb-12 pt-4">
        <div className="flex gap-7">

          {/* ── SIDEBAR ── */}
          <aside className="hidden lg:block w-[260px] flex-shrink-0">
            <div className="space-y-5 sticky top-6">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-base text-gray-900 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-red-500" /> Filters
                </h3>
                {(selectedSuppliers.length > 0 || selectedSeats.length > 0 || searchQuery) && (
                  <button onClick={() => { setSelectedSuppliers([]); setSelectedSeats([]); setSearchQuery(''); }} className="text-red-500 text-xs font-semibold hover:underline">
                    Reset All
                  </button>
                )}
              </div>

              {/* Search box */}
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 bg-white focus-within:border-red-400 transition-all">
                <Search className="w-4 h-4 text-gray-400" />
                <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search cars..." className="flex-1 outline-none text-sm text-gray-900 placeholder-gray-400 bg-transparent" />
              </div>

              {/* Supplier */}
              <div className="bg-white rounded-2xl border border-gray-200 p-4">
                <h4 className="font-bold text-sm mb-3 text-gray-900">Supplier</h4>
                <div className="space-y-2.5">
                  {suppliers.map(s => (
                    <label key={s} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center gap-2.5">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-red-500" checked={selectedSuppliers.includes(s)} onChange={() => toggleSupplier(s)} />
                        <span className="text-sm text-gray-700 group-hover:text-red-600 transition-colors">{s}</span>
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded-full">12</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Seats */}
              <div className="bg-white rounded-2xl border border-gray-200 p-4">
                <h4 className="font-bold text-sm mb-3 text-gray-900 flex items-center gap-1.5"><Users className="w-4 h-4" /> Seats</h4>
                <div className="space-y-2.5">
                  {seatOptions.map(seat => (
                    <label key={seat} className="flex items-center gap-2.5 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-red-500" checked={selectedSeats.includes(seat)} onChange={() => toggleSeat(seat)} />
                      <span className="text-sm text-gray-700 group-hover:text-red-600 transition-colors">{seat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="bg-white rounded-2xl border border-gray-200 p-4">
                <h4 className="font-bold text-sm mb-3 text-gray-900">Price Range</h4>
                <input type="range" min="3000" max="15000" className="w-full accent-red-500" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹3,000</span><span>₹15,000+</span>
                </div>
              </div>

              {/* Promo */}
              <div className="bg-white rounded-2xl border border-gray-200 p-4">
                <h4 className="font-bold text-sm mb-3 text-gray-900 flex items-center gap-1.5">
                  <BadgePercent className="w-4 h-4 text-red-500" /> Promo Codes
                </h4>
                <div className="space-y-2.5">
                  {promoCodes.map(promo => (
                    <div
                      key={promo.code}
                      onClick={() => setSelectedPromo(promo.code)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${selectedPromo === promo.code ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-red-300'}`}
                    >
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-sm font-bold text-gray-900">{promo.discount}</span>
                        <span className="text-xs font-semibold text-red-600 bg-white border border-red-200 px-2 py-0.5 rounded-full">{promo.code}</span>
                      </div>
                      <p className="text-xs text-gray-500">Min: {promo.minAmount}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* ── LISTINGS ── */}
          <main className="flex-1 min-w-0">
            <div className="lg:hidden mb-4">
              <button className="w-full bg-white border border-gray-200 rounded-xl p-3 flex items-center justify-center gap-2 font-semibold text-gray-700 text-sm hover:border-red-400 transition-all">
                <Filter className="w-4 h-4" /> Show Filters
              </button>
            </div>

            {/* Sort + count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-5 pb-4 border-b border-gray-200">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Available Cars</h2>
                <p className="text-sm text-gray-500">{filteredCars.length} results found</p>
              </div>
              <div className="relative">
                <button
                  onClick={() => setSortDropdown(!sortDropdown)}
                  className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 bg-white hover:border-red-400 transition-all"
                >
                  Sort by: {sortLabels[sortOption]}
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${sortDropdown ? 'rotate-180' : ''}`} />
                </button>
                {sortDropdown && (
                  <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-xl z-30 overflow-hidden">
                    {Object.entries(sortLabels).map(([key, label]) => (
                      <button
                        key={key}
                        onClick={() => { setSortOption(key); setSortDropdown(false); }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors ${sortOption === key ? 'bg-red-50 text-red-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Car Cards */}
            <div id="car-listings" className="space-y-4">
              {filteredCars.map(car => (
                <div
                  key={car.id}
                  onClick={() => handleCarClick(car)}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-red-400 hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="w-full lg:w-[260px] p-5 bg-white relative flex-shrink-0">
                      <button
                        onClick={e => { e.stopPropagation(); toggleFavourite(car.id); }}
                        className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full shadow border border-gray-100 flex items-center justify-center hover:scale-110 transition-transform z-10"
                      >
                        <Heart className={`w-4 h-4 ${favourites.includes(car.id) ? 'fill-red-500 text-red-500' : 'text-gray-300'}`} />
                      </button>
                      <div className="h-36 flex items-center justify-center mb-3">
                        <img src={car.image} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" alt={car.name} />
                      </div>
                      <div className="text-center">
                        <span className="inline-block text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full mb-2">{car.badge}</span>
                        <h3 className="font-bold text-gray-900 text-sm">{car.name}</h3>
                        <p className="text-xs text-gray-500 mb-2">{car.category}</p>
                        <div className="flex items-center justify-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1"><Users className="w-3 h-3" />{car.seats}</span>
                          <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{car.bags}</span>
                          <span className="flex items-center gap-1"><Gauge className="w-3 h-3" />{car.transmission}</span>
                          <span className="flex items-center gap-1"><Fuel className="w-3 h-3" />{car.fuel}</span>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 p-5 border-t lg:border-t-0 lg:border-l border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-bold text-sm text-gray-900">{car.supplier}</span>
                        {car.rating > 0 && (
                          <div className="flex items-center gap-1.5">
                            <div className="flex items-center bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                              <Star className="w-3 h-3 mr-0.5 fill-white" />{car.rating}
                            </div>
                            {car.reviewCount > 0 && <span className="text-xs text-gray-400">({car.reviewCount} reviews)</span>}
                          </div>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {car.featureIcons.map((iconName, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 rounded-lg px-2.5 py-1.5">
                            <span className="text-red-500">{renderFeatureIcon(iconName)}</span>
                            <span>{iconName}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-1.5">
                        {car.tags.map((tag, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                            <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4">
                        <span className="text-xs text-gray-500 flex items-center gap-1 bg-gray-50 rounded-full px-2.5 py-1 w-fit">
                          <Infinity className="w-3 h-3 text-red-400" /> {car.mileage}
                        </span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="w-full lg:w-[220px] bg-gradient-to-b from-red-50/60 to-white p-5 flex flex-col justify-center items-center border-t lg:border-t-0 lg:border-l border-gray-100 flex-shrink-0">
                      <p className="text-xs text-gray-400 mb-1">Starting from</p>
                      <div className="text-xs text-gray-400 line-through mb-0.5">₹{car.originalPrice?.toLocaleString()}</div>
                      <div className="text-3xl font-extrabold text-gray-900 mb-3">₹{car.price?.toLocaleString()}</div>
                      <button
                        onClick={e => { e.stopPropagation(); handleCarClick(car); }}
                        className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg text-sm"
                      >
                        View Details <ArrowRight className="w-4 h-4" />
                      </button>
                      <div className="mt-3 flex flex-col gap-1.5 text-xs text-gray-400 w-full">
                        <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-green-500" /> Free cancellation</span>
                        <span className="flex items-center gap-1.5"><CreditCard className="w-3 h-3 text-red-400" /> Pay at counter</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {filteredCars.length === 0 && (
                <div className="p-16 text-center bg-white rounded-2xl border border-gray-200">
                  <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="w-10 h-10 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No cars found</h3>
                  <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">Try adjusting your filters or search terms.</p>
                  <button
                    onClick={() => { setSelectedSuppliers([]); setSelectedSeats([]); setSearchQuery(''); }}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>

            {filteredCars.length > 0 && (
              <div className="mt-8 flex justify-center">
                <button className="bg-white border-2 border-red-500 text-red-600 px-8 py-3 rounded-full text-sm font-bold hover:bg-red-50 transition-all flex items-center gap-2 shadow-sm">
                  Show more results <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Cab;