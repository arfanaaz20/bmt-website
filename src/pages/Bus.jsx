
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const BusSearchPage = () => {
//   const [selectedBus, setSelectedBus] = useState(null);
//   const [buses, setBuses] = useState([]);
//   const [routes, setRoutes] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [bookings, setBookings] = useState([]);
//   const [amendments, setAmendments] = useState([]);
//   const [showDetails, setShowDetails] = useState({});
//   const [filters, setFilters] = useState({
//     ac: true, nonAc: false, sleeper: true, seater: false, departureTime: []
//   });
//   const [searchParams, setSearchParams] = useState({
//     fromCity: '', toCity: '', date: '', returnDate: '',
//     passengers: 1, rooms: 1, children: 0, travelForWork: false, starRating: []
//   });
//   const [sortOption, setSortOption] = useState('Departure (earliest)');
//   const navigate = useNavigate();

//   const API_BASE = 'https://bmt-aw7b.onrender.com/api';
//   const ROUTES_API = `${API_BASE}/bus-routes`;
//   const BOOKINGS_API = `${API_BASE}/bus-bookings`;
//   const AMENDMENTS_API = `${API_BASE}/bus-amendments`;

//   const timeSlots = [
//     { label: '20:00 - 21:00', value: '20-21' },
//     { label: '21:00 - 22:00', value: '21-22' },
//     { label: '22:00 - 23:00', value: '22-23' },
//     { label: '23:00 - 24:00', value: '23-24' }
//   ];

//   const sortOptions = ['Departure (earliest)', 'Cheapest', 'Fastest', 'Rating'];
//   const classFilters = ['All Classes', 'AC Sleeper', 'Non-AC Sleeper', 'Volvo AC', 'Seater'];

//   const mockBuses = [
//     {
//       id: 1, class: 'AC Sleeper', name: 'Deluxe Express', operator: 'Delhi Travels',
//       departureStation: 'Delhi ISBT', arrivalStation: 'Jaipur Sindhi Camp',
//       departureTime: '20:30', arrivalTime: '04:30', duration: '8h',
//       type: 'AC Sleeper (2+1)', price: 1200.00, originalPrice: 1500.00,
//       availableSeats: 8, rating: 4.8,
//       amenities: ['AC', 'Sleeper', 'Charging Port', 'WiFi', 'Blanket', 'Water'],
//       features: ['No Booking Fee', 'Free Cancellation', 'Live Tracking'],
//       flag: '🇮🇳', seats: '8/36', operatorRating: 4.5,
//       boardingPoint: 'Delhi ISBT', droppingPoint: 'Jaipur Sindhi Camp',
//       busNumber: 'DL01AB1234', totalSeats: 36, seatLayout: 'sleeper'
//     },
//     {
//       id: 2, class: 'Volvo AC', name: 'Premium Coach', operator: 'Jaipur Express',
//       departureStation: 'Delhi Kashmere Gate', arrivalStation: 'Jaipur Bus Stand',
//       departureTime: '21:00', arrivalTime: '05:00', duration: '8h',
//       type: 'Volvo AC Semi Sleeper (2+2)', price: 1000.00, originalPrice: 1300.00,
//       availableSeats: 12, rating: 4.5,
//       amenities: ['AC', 'Charging Port', 'WiFi', 'Water'],
//       features: ['Fastest', 'Economy', 'On-time'],
//       flag: '🇮🇳', seats: '12/36', operatorRating: 4.3,
//       boardingPoint: 'Delhi Kashmere Gate', droppingPoint: 'Jaipur Bus Stand',
//       busNumber: 'RJ01CD5678', totalSeats: 36, seatLayout: 'seater'
//     },
//     {
//       id: 3, class: 'Non-AC Sleeper', name: 'Economy Sleeper', operator: 'Rajasthan Travels',
//       departureStation: 'Delhi Anand Vihar', arrivalStation: 'Jaipur Station',
//       departureTime: '22:30', arrivalTime: '06:30', duration: '8h',
//       type: 'Non-AC Sleeper', price: 800.00, originalPrice: 1000.00,
//       availableSeats: 25, rating: 4.2,
//       amenities: ['Sleeper', 'Water'],
//       features: ['Budget', 'Standard'],
//       flag: '🇮🇳', seats: '25/36', operatorRating: 4.0,
//       boardingPoint: 'Delhi Anand Vihar', droppingPoint: 'Jaipur Station',
//       busNumber: 'RJ02EF9012', totalSeats: 36, seatLayout: 'sleeper'
//     },
//     {
//       id: 4, class: 'Seater', name: 'Express Seater', operator: 'Fast Travels',
//       departureStation: 'Delhi Rohini', arrivalStation: 'Jaipur MI Road',
//       departureTime: '23:00', arrivalTime: '07:00', duration: '8h',
//       type: 'Seater Coach', price: 600.00, originalPrice: 750.00,
//       availableSeats: 40, rating: 4.0,
//       amenities: ['AC', 'Seater'],
//       features: ['Economy', 'Direct'],
//       flag: '🇮🇳', seats: '40/36', operatorRating: 3.8,
//       boardingPoint: 'Delhi Rohini', droppingPoint: 'Jaipur MI Road',
//       busNumber: 'DL02GH3456', totalSeats: 36, seatLayout: 'seater'
//     },
//     {
//       id: 5, class: 'AC Sleeper', name: 'Luxury Sleeper', operator: 'Royal Travels',
//       departureStation: 'Delhi Majnu Ka Tila', arrivalStation: 'Jaipur Tonk Road',
//       departureTime: '21:30', arrivalTime: '05:30', duration: '8h',
//       type: 'AC Sleeper (2+1)', price: 1400.00, originalPrice: 1800.00,
//       availableSeats: 5, rating: 4.9,
//       amenities: ['AC', 'Sleeper', 'Charging Port', 'WiFi', 'Blanket', 'Water', 'Snacks'],
//       features: ['Luxury', 'Priority Boarding', 'Free Meals'],
//       flag: '🇮🇳', seats: '5/36', operatorRating: 4.7,
//       boardingPoint: 'Delhi Majnu Ka Tila', droppingPoint: 'Jaipur Tonk Road',
//       busNumber: 'RJ03IJ7890', totalSeats: 36, seatLayout: 'sleeper'
//     }
//   ];

//   // ── Popular routes data (MMT-style bottom section) ──
//   const popularRoutes = [
//     { from: 'Delhi', to: 'Jaipur', buses: '120+', duration: '5-6 hrs', price: '₹450' },
//     { from: 'Mumbai', to: 'Pune', buses: '200+', duration: '3-4 hrs', price: '₹250' },
//     { from: 'Bangalore', to: 'Chennai', buses: '180+', duration: '6-7 hrs', price: '₹550' },
//     { from: 'Hyderabad', to: 'Bangalore', buses: '150+', duration: '9-10 hrs', price: '₹700' },
//     { from: 'Delhi', to: 'Agra', buses: '90+', duration: '4-5 hrs', price: '₹350' },
//     { from: 'Mumbai', to: 'Goa', buses: '100+', duration: '8-9 hrs', price: '₹600' },
//     { from: 'Chennai', to: 'Coimbatore', buses: '80+', duration: '7-8 hrs', price: '₹450' },
//     { from: 'Kolkata', to: 'Bhubaneswar', buses: '60+', duration: '7-8 hrs', price: '₹500' },
//   ];

//   const topAmenities = [
//     { icon: '❄️', label: 'Air Conditioning', desc: 'Stay cool on long journeys' },
//     { icon: '🛏️', label: 'Sleeper Berths', desc: 'Comfortable overnight travel' },
//     { icon: '⚡', label: 'Charging Points', desc: 'Keep your devices powered' },
//     { icon: '📶', label: 'WiFi Onboard', desc: 'Stay connected on the go' },
//     { icon: '🎥', label: 'Entertainment', desc: 'Movies & music enroute' },
//     { icon: '🧴', label: 'Clean Toilets', desc: 'Hygiene maintained throughout' },
//   ];

//   const faqs = [
//     {
//       q: 'How do I book a bus ticket online?',
//       a: 'Enter your source and destination, select the travel date, choose a bus, pick seats, fill passenger details, and pay online. You will get a confirmation instantly.'
//     },
//     {
//       q: 'Can I cancel my bus ticket?',
//       a: 'Yes. Most operators offer free cancellation up to 24 hours before departure. Cancellation charges may apply for last-minute cancellations.'
//     },
//     {
//       q: 'What is the difference between Sleeper and Seater buses?',
//       a: 'Sleeper buses have berths for lying down — ideal for overnight journeys. Seater buses have regular seats like airline economy — better for short trips.'
//     },
//     {
//       q: 'Are AC buses worth the extra cost?',
//       a: 'For journeys over 5 hours, AC buses are recommended. They offer more comfort, regulated temperature, and are generally better maintained.'
//     },
//   ];

//   const trustStats = [
//     { number: '5000+', label: 'Bus Operators' },
//     { number: '10L+', label: 'Happy Travellers' },
//     { number: '2000+', label: 'Routes Covered' },
//     { number: '4.8★', label: 'Average Rating' },
//   ];

//   useEffect(() => {
//     setBuses(mockBuses);
//     fetchRoutes();
//     fetchBookings();
//     fetchAmendments();
//   }, []);

//   const fetchRoutes = async () => {
//     try {
//       const response = await axios.get(ROUTES_API);
//       setRoutes(response.data.items || response.data);
//     } catch (error) { console.error('Error fetching routes:', error); }
//   };

//   const fetchBookings = async () => {
//     try {
//       const response = await axios.get(BOOKINGS_API);
//       setBookings(response.data);
//     } catch (error) { console.error('Error fetching bookings:', error); }
//   };

//   const fetchAmendments = async () => {
//     try {
//       const response = await axios.get(AMENDMENTS_API);
//       setAmendments(response.data);
//     } catch (error) { console.error('Error fetching amendments:', error); }
//   };

//   const searchBuses = () => {
//     setLoading(true);
//     setTimeout(() => {
//       let results = [...mockBuses];
//       if (filters.ac && !filters.nonAc) results = results.filter(b => b.class.includes('AC'));
//       else if (!filters.ac && filters.nonAc) results = results.filter(b => !b.class.includes('AC'));
//       results = sortBuses(results, sortOption);
//       setBuses(results);
//       setLoading(false);
//     }, 500);
//   };

//   const sortBuses = (buses, option) => {
//     const sorted = [...buses];
//     switch (option) {
//       case 'Cheapest': return sorted.sort((a, b) => a.price - b.price);
//       case 'Fastest': return sorted.sort((a, b) => parseDuration(a.duration) - parseDuration(b.duration));
//       case 'Rating': return sorted.sort((a, b) => b.rating - a.rating);
//       default: return sorted.sort((a, b) => a.departureTime.localeCompare(b.departureTime));
//     }
//   };

//   const parseDuration = (d) => {
//     const h = d.match(/(\d+)h/); const m = d.match(/(\d+)m/);
//     return (h ? parseInt(h[1]) : 0) * 60 + (m ? parseInt(m[1]) : 0);
//   };

//   const handleSearch = (e) => { e.preventDefault(); searchBuses(); };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setSearchParams(prev => ({ ...prev, [name]: value }));
//   };

//   const handleDetailsClick = (busId, e) => {
//     e.stopPropagation();
//     setShowDetails(prev => ({ ...prev, [busId]: !prev[busId] }));
//   };

//   const getClassColor = (busClass) => {
//     switch (busClass) {
//       case 'AC Sleeper': return 'bg-blue-100 text-blue-700';
//       case 'Volvo AC': return 'bg-purple-100 text-purple-700';
//       case 'Non-AC Sleeper': return 'bg-gray-100 text-gray-700';
//       case 'Seater': return 'bg-green-100 text-green-700';
//       default: return 'bg-gray-100 text-gray-700';
//     }
//   };

//   const handleSelectBus = (bus) => {
//     navigate('/select-seats', { state: { bus, searchParams, passengers: searchParams.passengers } });
//   };

//   const [openFaq, setOpenFaq] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-50">

//       {/* ── HERO ── */}
//       <div className="relative w-full" style={{
//         background: 'linear-gradient(135deg, #1a3a8f 0%, #2563eb 60%, #3b82f6 100%)',
//         minHeight: '300px', overflow: 'hidden'
//       }}>
//         <div style={{
//           position: 'absolute', inset: 0,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='600' height='320' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='500' cy='60' r='120' fill='rgba(255,255,255,0.05)'/%3E%3Ccircle cx='520' cy='200' r='80' fill='rgba(255,255,255,0.04)'/%3E%3C/svg%3E")`,
//           backgroundRepeat: 'no-repeat', backgroundPosition: 'right center'
//         }} />
//         <div className="relative max-w-7xl mx-auto px-4 pt-10 pb-28">
//           <h1 className="text-4xl font-extrabold text-white mb-1 tracking-tight">
//             Bus Tickets<span style={{ color: '#f59e0b' }}>.</span>
//           </h1>
//           <p className="text-blue-200 text-sm mb-8">Book bus tickets online with best offers</p>

//           {/* Search Card */}
//           <div className="bg-white rounded-2xl shadow-2xl px-4 py-3 max-w-5xl mx-auto" style={{ position: 'relative', zIndex: 10 }}>
//             <form onSubmit={handleSearch}>
//               <div className="flex flex-col lg:flex-row gap-0 divide-x divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
//                 {/* From */}
//                 <div className="flex-1 px-3 py-2 flex items-center gap-3 bg-white hover:bg-blue-50 transition-colors">
//                   <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                   </svg>
//                   <div className="flex-1 min-w-0">
//                     <div className="text-xs text-gray-400 font-medium mb-0.5">From</div>
//                     <input type="text" name="fromCity" value={searchParams.fromCity} onChange={handleInputChange}
//                       placeholder="Departure city"
//                       className="w-full text-sm font-semibold text-gray-800 bg-transparent focus:outline-none placeholder-gray-400" />
//                   </div>
//                 </div>
//                 {/* Swap */}
//                 <div className="flex items-center justify-center px-2 bg-white">
//                   <button type="button"
//                     onClick={() => setSearchParams(prev => ({ ...prev, fromCity: prev.toCity, toCity: prev.fromCity }))}
//                     className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-50 transition-colors">
//                     <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
//                     </svg>
//                   </button>
//                 </div>
//                 {/* To */}
//                 <div className="flex-1 px-4 py-3 flex items-center gap-3 bg-white hover:bg-blue-50 transition-colors">
//                   <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                   </svg>
//                   <div className="flex-1 min-w-0">
//                     <div className="text-xs text-gray-400 font-medium mb-0.5">To</div>
//                     <input type="text" name="toCity" value={searchParams.toCity} onChange={handleInputChange}
//                       placeholder="Arrival city"
//                       className="w-full text-sm font-semibold text-gray-800 bg-transparent focus:outline-none placeholder-gray-400" />
//                   </div>
//                 </div>
//                 {/* Date */}
//                 <div className="flex-1 px-4 py-3 flex items-center gap-3 bg-white hover:bg-blue-50 transition-colors">
//                   <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                   </svg>
//                   <div className="flex-1 min-w-0">
//                     <div className="text-xs text-gray-400 font-medium mb-0.5">Date</div>
//                     <input type="date" name="date" value={searchParams.date} onChange={handleInputChange}
//                       className="w-full text-sm font-semibold text-gray-800 bg-transparent focus:outline-none" />
//                   </div>
//                 </div>
//                 {/* Passengers */}
//                 <div className="flex-1 px-4 py-3 flex items-center gap-3 bg-white hover:bg-blue-50 transition-colors">
//                   <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                   <div className="flex-1 min-w-0">
//                     <div className="text-xs text-gray-400 font-medium mb-0.5">Passengers</div>
//                     <div className="flex items-center gap-2">
//                       <button type="button" onClick={() => setSearchParams(prev => ({ ...prev, passengers: Math.max(1, prev.passengers - 1) }))}
//                         className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100">
//                         <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
//                       </button>
//                       <span className="text-sm font-semibold text-gray-800 min-w-[20px] text-center">{searchParams.passengers}</span>
//                       <button type="button" onClick={() => setSearchParams(prev => ({ ...prev, passengers: prev.passengers + 1 }))}
//                         className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100">
//                         <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Search Btn */}
//                 <div className="flex items-stretch">
//                   <button type="submit" disabled={loading}
//                     className="px-8 bg-blue-600 text-white text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2 font-semibold"
//                     style={{ minWidth: '120px' }}>
//                     {loading ? (
//                       <><svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Searching...</>
//                     ) : (
//                       <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>Search</>
//                     )}
//                   </button>
//                 </div>
//               </div>
//               {/* Row 2 filters */}
//               <div className="flex flex-wrap items-center gap-4 mt-3">
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input type="checkbox" checked={searchParams.travelForWork}
//                     onChange={() => setSearchParams(prev => ({ ...prev, travelForWork: !prev.travelForWork }))}
//                     className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
//                   <span className="text-sm text-gray-600">I'm travelling for work</span>
//                 </label>
//                 <div className="flex items-center gap-2 flex-wrap">
//                   <span className="text-sm text-gray-500 font-medium">Bus Type:</span>
//                   {['AC', 'Non-AC', 'Sleeper', 'Seater'].map((type) => (
//                     <button key={type} type="button"
//                       onClick={() => {
//                         if (type === 'AC') setFilters(prev => ({ ...prev, ac: !prev.ac }));
//                         else if (type === 'Non-AC') setFilters(prev => ({ ...prev, nonAc: !prev.nonAc }));
//                         else if (type === 'Sleeper') setFilters(prev => ({ ...prev, sleeper: !prev.sleeper }));
//                         else if (type === 'Seater') setFilters(prev => ({ ...prev, seater: !prev.seater }));
//                       }}
//                       className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm border transition-colors ${
//                         (type === 'AC' && filters.ac) || (type === 'Non-AC' && filters.nonAc) ||
//                         (type === 'Sleeper' && filters.sleeper) || (type === 'Seater' && filters.seater)
//                           ? 'bg-blue-50 border-blue-300 text-blue-700'
//                           : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
//                       }`}>
//                       {type === 'AC' ? '❄️' : type === 'Sleeper' ? '🛏️' : type === 'Seater' ? '💺' : '🌬️'}
//                       <span>{type}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* ── MAIN CONTENT ── */}
//       <div className="max-w-7xl mx-auto px-4 mt-8 pb-12">
//         <div className="flex flex-col lg:flex-row lg:space-x-6">

//           {/* Sidebar */}
//           <div className="w-full lg:w-64 mb-6 lg:mb-0 flex-shrink-0">
//             <div className="bg-white rounded-xl shadow-md p-6 mb-4 sticky top-4">
//               <h3 className="font-bold text-lg text-gray-800 mb-4">Filters</h3>
//               <div className="space-y-6">
//                 <div>
//                   <h4 className="font-medium text-gray-700 mb-3 text-sm uppercase tracking-wide">Bus Type</h4>
//                   <div className="space-y-2">
//                     {[{ label: 'AC Buses', key: 'ac' }, { label: 'Non-AC Buses', key: 'nonAc' }, { label: 'Sleeper', key: 'sleeper' }, { label: 'Seater', key: 'seater' }].map(({ label, key }) => (
//                       <label key={key} className="flex items-center cursor-pointer group">
//                         <input type="checkbox" checked={filters[key]} onChange={() => setFilters(prev => ({ ...prev, [key]: !prev[key] }))}
//                           className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
//                         <span className="ml-2 text-gray-600 text-sm group-hover:text-blue-600 transition-colors">{label}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-700 mb-3 text-sm uppercase tracking-wide">Departure Time</h4>
//                   <div className="space-y-2">
//                     {timeSlots.map((slot) => (
//                       <label key={slot.value} className="flex items-center cursor-pointer group">
//                         <input type="checkbox" checked={filters.departureTime.includes(slot.value)}
//                           onChange={() => setFilters(prev => ({
//                             ...prev,
//                             departureTime: prev.departureTime.includes(slot.value)
//                               ? prev.departureTime.filter(s => s !== slot.value)
//                               : [...prev.departureTime, slot.value]
//                           }))}
//                           className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
//                         <span className="ml-2 text-gray-600 text-sm group-hover:text-blue-600 transition-colors">{slot.label}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-700 mb-3 text-sm uppercase tracking-wide">Price Range</h4>
//                   <div className="space-y-3">
//                     <input type="range" min="500" max="2000" defaultValue="1200" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
//                     <div className="flex justify-between text-sm text-gray-600">
//                       <span>₹500</span><span className="font-medium text-blue-600">₹1200</span><span>₹2000</span>
//                     </div>
//                   </div>
//                 </div>
//                 <button onClick={searchBuses} className="w-full py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
//                   Apply Filters
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Bus Listings */}
//           <div className="flex-1">
//             {/* Sort Bar */}
//             <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
//               <div className="flex gap-2 flex-wrap">
//                 {sortOptions.map((option, i) => (
//                   <button key={i}
//                     className={`px-4 py-2 rounded-lg border text-sm transition-colors ${sortOption === option ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-300 hover:bg-gray-50'}`}
//                     onClick={() => { setSortOption(option); sortBuses(buses, option); }}>
//                     {option}
//                   </button>
//                 ))}
//               </div>
//               <div className="text-sm text-gray-500 bg-green-50 text-green-700 px-3 py-1.5 rounded-full font-medium">✓ No booking fee</div>
//             </div>

//             <div className="mb-4 text-gray-600 text-sm">
//               Found <strong>{buses.length}</strong> bus{buses.length !== 1 ? 'es' : ''}
//               {searchParams.fromCity && searchParams.toCity && <span> • {searchParams.fromCity} → {searchParams.toCity}</span>}
//             </div>

//             {/* Bus Cards */}
//             <div className="space-y-4">
//               {buses.map((bus) => (
//                 <div key={bus.id}
//                   className={`bg-white rounded-xl border-2 transition-all cursor-pointer hover:shadow-lg ${selectedBus === bus.id ? 'border-blue-500 shadow-lg' : 'border-gray-200 hover:border-blue-300'}`}
//                   onClick={() => setSelectedBus(bus.id)}>
//                   <div className="p-5">
//                     <div className="flex flex-col lg:flex-row lg:items-start gap-5">
//                       {/* Timing Column */}
//                       <div className="lg:w-40 flex-shrink-0">
//                         <div className="text-2xl font-bold text-gray-900">{bus.departureTime}</div>
//                         <div className="text-xs text-gray-400 mt-0.5 truncate">{bus.departureStation}</div>
//                         <div className="my-3 relative flex items-center">
//                           <div className="flex-1 h-px bg-gray-300 relative">
//                             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"></div>
//                             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"></div>
//                           </div>
//                         </div>
//                         <div className="text-2xl font-bold text-gray-900">{bus.arrivalTime}</div>
//                         <div className="text-xs text-gray-400 mt-0.5 truncate">{bus.arrivalStation}</div>
//                         <div className="mt-2 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full inline-block">{bus.duration}</div>
//                       </div>

//                       {/* Info Column */}
//                       <div className="flex-1 min-w-0">
//                         <div className="flex items-start justify-between gap-2 mb-2">
//                           <div>
//                             <div className="flex items-center gap-2 mb-1">
//                               <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${getClassColor(bus.class)}`}>{bus.class}</span>
//                             </div>
//                             <h3 className="text-base font-bold text-gray-800">{bus.name}</h3>
//                             <p className="text-gray-400 text-xs">{bus.operator} • {bus.type}</p>
//                           </div>
//                           <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg flex-shrink-0">
//                             <span className="text-amber-500 text-xs">★</span>
//                             <span className="text-xs font-bold text-gray-700">{bus.rating}</span>
//                           </div>
//                         </div>

//                         <div className="text-xs text-gray-500 mb-2 space-y-0.5">
//                           <div>📍 <span className="font-medium">Board:</span> {bus.boardingPoint}</div>
//                           <div>🏁 <span className="font-medium">Drop:</span> {bus.droppingPoint}</div>
//                         </div>

//                         <div className="flex flex-wrap gap-1.5 mb-2">
//                           {bus.amenities.slice(0, 4).map((a, i) => (
//                             <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">{a}</span>
//                           ))}
//                           {bus.amenities.length > 4 && (
//                             <span className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-xs">+{bus.amenities.length - 4}</span>
//                           )}
//                         </div>

//                         <div className="flex flex-wrap gap-1.5">
//                           {bus.features.map((f, i) => (
//                             <span key={i} className="px-2.5 py-0.5 bg-green-50 text-green-700 rounded-full text-xs border border-green-100">{f}</span>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Price Column */}
//                       <div className="lg:w-40 flex-shrink-0">
//                         <div className="text-right mb-3">
//                           <div className="text-2xl font-extrabold text-blue-600">₹{bus.price.toFixed(0)}</div>
//                           <div className="text-xs text-gray-400 line-through">₹{bus.originalPrice.toFixed(0)}</div>
//                           <div className="text-xs font-semibold text-green-600 mt-0.5">Save ₹{(bus.originalPrice - bus.price).toFixed(0)}</div>
//                           <div className={`text-sm font-bold mt-1 ${bus.availableSeats < 10 ? 'text-red-500' : 'text-green-600'}`}>
//                             {bus.availableSeats < 10 ? `⚠ ${bus.availableSeats} seats left` : `✓ ${bus.seats} seats`}
//                           </div>
//                         </div>
//                         <div className="space-y-2">
//                           <button onClick={(e) => handleDetailsClick(bus.id, e)}
//                             className="w-full px-3 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
//                             {showDetails[bus.id] ? 'Hide Details' : 'View Details'}
//                           </button>
//                           <button
//                             onClick={(e) => { e.stopPropagation(); handleSelectBus(bus); }}
//                             className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition-all text-sm font-semibold shadow-sm">
//                             Select Seats →
//                           </button>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Expanded Details */}
//                     {showDetails[bus.id] && (
//                       <div className="mt-5 pt-5 border-t border-gray-100">
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//                           <div>
//                             <h4 className="font-semibold text-gray-700 mb-2 text-sm">All Amenities</h4>
//                             <div className="flex flex-wrap gap-1.5">
//                               {bus.amenities.map((a, i) => (
//                                 <span key={i} className="px-2.5 py-1 bg-green-50 text-green-700 rounded-full text-xs border border-green-100">{a}</span>
//                               ))}
//                             </div>
//                           </div>
//                           <div>
//                             <h4 className="font-semibold text-gray-700 mb-2 text-sm">Trip Details</h4>
//                             <div className="text-xs text-gray-600 space-y-1.5">
//                               <div>🚌 Bus No: <span className="font-medium">{bus.busNumber}</span></div>
//                               <div>⏱ Duration: <span className="font-medium">{bus.duration}</span></div>
//                               <div>🪑 Type: <span className="font-medium">{bus.type}</span></div>
//                               <div>🏢 Operator: <span className="font-medium">{bus.operator}</span></div>
//                             </div>
//                           </div>
//                           <div>
//                             <h4 className="font-semibold text-gray-700 mb-2 text-sm">Policies</h4>
//                             <div className="text-xs text-gray-600 space-y-1.5">
//                               <div className="flex items-start gap-1.5"><span className="text-green-500">✓</span> Free cancellation up to 24 hrs</div>
//                               <div className="flex items-start gap-1.5"><span className="text-green-500">✓</span> No booking fee charged</div>
//                               <div className="flex items-start gap-1.5"><span className="text-green-500">✓</span> Instant e-ticket on booking</div>
//                               <div className="flex items-start gap-1.5"><span className="text-blue-500">ℹ</span> Boarding 15 mins before departure</div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}

//               {buses.length === 0 && !loading && (
//                 <div className="text-center py-16 bg-white rounded-xl shadow-sm">
//                   <div className="text-5xl mb-4">🚌</div>
//                   <div className="text-gray-600 text-lg font-semibold mb-1">No buses found</div>
//                   <div className="text-gray-400 text-sm">Try changing your filters or search for a different route</div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* ════════════════════════════════════════════════════════
//             MMT-STYLE BOTTOM INFO SECTION
//         ════════════════════════════════════════════════════════ */}

//         {/* Trust Stats Bar */}
//         <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
//             {trustStats.map((stat, i) => (
//               <div key={i}>
//                 <div className="text-3xl font-extrabold mb-1">{stat.number}</div>
//                 <div className="text-blue-200 text-sm">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Popular Routes */}
//         <div className="mt-12">
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h2 className="text-2xl font-bold text-gray-800">Popular Bus Routes</h2>
//               <p className="text-gray-500 text-sm mt-1">Most booked routes across India</p>
//             </div>
//             <button className="text-blue-600 text-sm font-semibold hover:underline">View all routes →</button>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {popularRoutes.map((route, i) => (
//               <div key={i}
//                 className="bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
//                 onClick={() => setSearchParams(prev => ({ ...prev, fromCity: route.from, toCity: route.to }))}>
//                 <div className="flex items-center gap-2 mb-3">
//                   <div className="w-2 h-2 rounded-full bg-blue-500"></div>
//                   <span className="text-sm font-semibold text-gray-800">{route.from}</span>
//                   <div className="flex-1 h-px border-t border-dashed border-gray-300"></div>
//                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
//                   <span className="text-sm font-semibold text-gray-800">{route.to}</span>
//                 </div>
//                 <div className="flex items-center justify-between text-xs text-gray-500">
//                   <span>🚌 {route.buses} buses</span>
//                   <span>⏱ {route.duration}</span>
//                 </div>
//                 <div className="mt-3 flex items-center justify-between">
//                   <span className="text-xs text-gray-400">Starting from</span>
//                   <span className="text-base font-extrabold text-blue-600 group-hover:text-blue-700">{route.price}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Top Amenities */}
//         <div className="mt-12">
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">Why Book With Us?</h2>
//           <p className="text-gray-500 text-sm mb-6">Comfort features available on our partner buses</p>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {topAmenities.map((item, i) => (
//               <div key={i} className="bg-white rounded-xl p-4 text-center border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all">
//                 <div className="text-3xl mb-2">{item.icon}</div>
//                 <div className="text-sm font-semibold text-gray-800 mb-1">{item.label}</div>
//                 <div className="text-xs text-gray-400 leading-tight">{item.desc}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* How It Works */}
//         <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">How to Book a Bus in 3 Simple Steps</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
//             {[
//               { step: '01', icon: '🔍', title: 'Search & Compare', desc: 'Enter your source, destination and travel date. Compare hundreds of buses by price, timing, and rating.' },
//               { step: '02', icon: '💺', title: 'Choose Your Seat', desc: 'Pick your preferred seat type — window, aisle, lower or upper berth. See real-time availability.' },
//               { step: '03', icon: '✅', title: 'Pay & Confirm', desc: 'Pay securely via UPI, card or net banking. Get your e-ticket instantly on email and SMS.' },
//             ].map((item, i) => (
//               <div key={i} className="relative text-center">
//                 <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-2xl text-2xl mb-4">{item.icon}</div>
//                 <div className="absolute -top-1 -right-1 md:right-auto md:left-[calc(50%+24px)] w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">{item.step}</div>
//                 <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
//                 <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* FAQ */}
//         <div className="mt-12">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
//           <div className="space-y-3">
//             {faqs.map((faq, i) => (
//               <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
//                 <button
//                   className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
//                   onClick={() => setOpenFaq(openFaq === i ? null : i)}>
//                   <span className="font-semibold text-gray-800 text-sm pr-4">{faq.q}</span>
//                   <span className={`text-blue-500 text-lg flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
//                 </button>
//                 {openFaq === i && (
//                   <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
//                     {faq.a}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom trust badges */}
//         <div className="mt-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
//           <div className="text-center mb-6">
//             <h2 className="text-xl font-bold text-gray-800">India's Most Trusted Bus Booking Platform</h2>
//             <p className="text-gray-500 text-sm mt-1">Partnered with 5000+ bus operators across 30 states</p>
//           </div>
//           <div className="flex flex-wrap justify-center gap-6">
//             {[
//               { icon: '🔒', label: 'Secure Payments', sub: 'SSL encrypted checkout' },
//               { icon: '📱', label: 'Instant E-Ticket', sub: 'SMS + Email delivery' },
//               { icon: '🔄', label: 'Easy Refunds', sub: 'Processed in 5-7 days' },
//               { icon: '📞', label: '24/7 Support', sub: 'Call, chat or email' },
//               { icon: '🎟️', label: 'No Hidden Fees', sub: 'Price you see is final' },
//             ].map((item, i) => (
//               <div key={i} className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100">
//                 <span className="text-2xl">{item.icon}</span>
//                 <div>
//                   <div className="text-sm font-semibold text-gray-800">{item.label}</div>
//                   <div className="text-xs text-gray-400">{item.sub}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default BusSearchPage;
























import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// ── GLOBAL CSS (same pattern as Hotels.jsx) ───────────────────────────────────
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --red:#e8232a;--red-d:#c01c22;--blue:#008cff;--navy:#0a2463;
  --orange:#ff6f00;--yellow:#ffc107;--green:#00897b;
  --bg:#f5f7fa;--card:#ffffff;--border:#e8ecf0;
  --t1:#212b36;--t2:#637381;--t3:#919eab;
  --sh-card:0 2px 12px rgba(0,0,0,.08);--sh-hover:0 8px 32px rgba(0,0,0,.13);
  --r:12px;--rl:16px;
}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--t1);-webkit-tap-highlight-color:transparent}

/* ── HERO ── */
.bus-hero{background:linear-gradient(135deg,#0a2463 0%,#1a3a8f 45%,#c01c22 100%);position:relative;overflow:hidden;padding-bottom:52px}
.bus-hero::before{content:'';position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&q=60') center/cover;opacity:.10}
.bus-hero-bar{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;padding:18px 40px 0;max-width:1280px;margin:0 auto}
.bus-hero-logo{font-family:'Poppins',sans-serif;font-size:26px;font-weight:900;color:#fff;letter-spacing:-.5px}
.bus-hero-logo b{color:var(--yellow)}
.bus-hero-nav{display:flex;gap:22px}
.bus-hero-nav a{color:rgba(255,255,255,.78);font-size:13px;font-weight:500;text-decoration:none;transition:color .2s}
.bus-hero-nav a:hover{color:#fff}
.bus-hero-content{position:relative;z-index:2;text-align:center;padding:38px 16px 30px;max-width:980px;margin:0 auto}
.bus-eyebrow{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.14);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.22);padding:5px 14px;border-radius:99px;color:#fff;font-size:12px;font-weight:600;margin-bottom:14px;letter-spacing:.3px}
.bus-h1{font-family:'Poppins',sans-serif;font-size:50px;font-weight:900;color:#fff;line-height:1.1;margin-bottom:10px;text-shadow:0 2px 20px rgba(0,0,0,.18)}
.bus-h1 .acc{color:var(--yellow)}
.bus-sub{color:rgba(255,255,255,.72);font-size:15px;margin-bottom:30px}

/* ── SEARCH BOX ── */
.bus-sbox{background:#fff;border-radius:var(--rl);box-shadow:0 20px 60px rgba(0,0,0,.22);overflow:visible;max-width:980px;margin:0 auto}
.bus-srow{display:grid;grid-template-columns:1.8fr 60px 1.8fr 1.5fr 1.2fr auto;min-height:78px;border-radius:var(--rl) var(--rl) 0 0;overflow:hidden;border:1px solid var(--border);border-bottom:none}
.bus-sfield{display:flex;align-items:center;gap:12px;padding:15px 20px;border-right:1px solid var(--border);cursor:pointer;transition:background .2s;background:#fff;min-height:72px}
.bus-sfield:hover{background:#fafbfc}
.bus-sfield-ico{color:var(--red);flex-shrink:0}
.bus-sfield-lbl{font-size:10px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px}
.bus-sfield-val{font-size:15px;font-weight:700;color:var(--t1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bus-sfield-sub{font-size:11px;color:var(--t2);margin-top:1px}
.bus-sfield input{border:none;outline:none;font-size:15px;font-weight:700;color:var(--t1);background:transparent;width:100%;font-family:'Inter',sans-serif}
.bus-sfield input[type=date]{cursor:pointer}
.bus-sfield input::placeholder{color:#b0bac4;font-weight:500}
.bus-swap{display:flex;align-items:center;justify-content:center;border-right:1px solid var(--border);background:#fff;cursor:pointer;transition:background .2s;min-height:72px}
.bus-swap:hover{background:#fff5f5}
.bus-swap-btn{width:34px;height:34px;border-radius:50%;border:1.5px solid var(--border);background:#fff;display:flex;align-items:center;justify-content:center;color:var(--red);transition:all .2s;box-shadow:0 1px 4px rgba(0,0,0,.08)}
.bus-swap-btn:hover{background:var(--red);color:#fff;border-color:var(--red);transform:rotate(180deg)}
.bus-sbtn{background:linear-gradient(135deg,var(--red),var(--red-d));color:#fff;border:none;padding:0 36px;font-size:16px;font-weight:700;cursor:pointer;font-family:'Poppins',sans-serif;transition:all .25s;display:flex;align-items:center;justify-content:center;gap:8px;min-height:72px;border-radius:0 var(--rl) 0 0}
.bus-sbtn:hover{box-shadow:0 4px 20px rgba(232,35,42,.4);filter:brightness(1.05)}
.bus-sbtn:disabled{opacity:.6;cursor:not-allowed}

/* ROW 2 of search box */
.bus-srow2{border:1px solid var(--border);border-top:none;border-radius:0 0 var(--rl) var(--rl);padding:12px 20px;background:#fff;display:flex;align-items:center;gap:20px;flex-wrap:wrap}
.bus-work-chk{display:flex;align-items:center;gap:7px;cursor:pointer;font-size:13px;color:var(--t2);font-weight:500}
.bus-work-chk input{width:16px;height:16px;accent-color:var(--red);cursor:pointer}
.bus-type-lbl{font-size:13px;color:var(--t2);font-weight:600;flex-shrink:0}
.bus-type-btns{display:flex;gap:7px;flex-wrap:wrap}
.bus-type-btn{display:flex;align-items:center;gap:5px;padding:6px 14px;border-radius:99px;border:1.5px solid var(--border);font-size:12px;font-weight:600;background:#fff;color:var(--t2);cursor:pointer;transition:all .2s;min-height:34px}
.bus-type-btn.on{background:#fff5f5;border-color:var(--red);color:var(--red)}
.bus-type-btn:hover:not(.on){border-color:#c8d0da}

/* QUICK FILTER STRIP */
.bus-strip{position:relative;z-index:2;display:flex;align-items:center;gap:10px;flex-wrap:wrap;justify-content:center;padding:18px 16px 0}
.bus-strip-lbl{color:rgba(255,255,255,.68);font-size:12px;font-weight:600;letter-spacing:.3px}
.bus-spill{display:flex;align-items:center;gap:5px;padding:6px 14px;border-radius:99px;border:1px solid rgba(255,255,255,.32);background:rgba(255,255,255,.1);color:#fff;font-size:12px;font-weight:600;cursor:pointer;backdrop-filter:blur(8px);transition:all .2s;min-height:36px}
.bus-spill:hover,.bus-spill.on{background:rgba(255,255,255,.22);border-color:rgba(255,255,255,.55)}

/* ── POPULAR ROUTES CAROUSEL ── */
.pop-sec{background:#fff;padding:40px 0;border-bottom:1px solid var(--border)}
.pop-in{max-width:1280px;margin:0 auto;padding:0 20px}
.sec-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
.sec-ttl{font-family:'Poppins',sans-serif;font-size:20px;font-weight:800;color:var(--t1)}
.sec-ttl span{color:var(--red)}
.see-all{display:flex;align-items:center;gap:4px;color:var(--red);font-size:13px;font-weight:700;background:none;border:none;cursor:pointer}
.see-all:hover{text-decoration:underline}
.ctabs{display:flex;gap:8px;margin-bottom:22px;flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch}
.ctabs::-webkit-scrollbar{display:none}
.ctab{padding:7px 16px;border-radius:99px;font-size:13px;font-weight:600;border:1.5px solid var(--border);background:#fff;color:var(--t2);cursor:pointer;transition:all .2s;white-space:nowrap;flex-shrink:0;min-height:36px}
.ctab.on{background:var(--red);color:#fff;border-color:var(--red)}
.ctab:hover:not(.on){border-color:var(--red);color:var(--red)}
.cw{position:relative}
.ctrack{display:flex;gap:14px;overflow-x:auto;padding-bottom:8px;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}
.ctrack::-webkit-scrollbar{height:3px}
.ctrack::-webkit-scrollbar-track{background:#e8ecf0;border-radius:99px}
.ctrack::-webkit-scrollbar-thumb{background:var(--red);border-radius:99px}
.cbtn{position:absolute;top:50%;transform:translateY(-50%);z-index:10;width:38px;height:38px;border-radius:50%;background:#fff;border:1.5px solid var(--border);box-shadow:0 2px 12px rgba(0,0,0,.12);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;color:var(--t1)}
.cbtn:hover{background:var(--red);color:#fff;border-color:var(--red)}
.cbtn.lft{left:-10px}.cbtn.rgt{right:-10px}

/* Route card */
.rcard{flex:none;width:210px;background:#fff;border-radius:var(--r);border:1px solid var(--border);overflow:hidden;cursor:pointer;transition:all .25s;padding:14px}
.rcard:hover{box-shadow:var(--sh-hover);transform:translateY(-3px)}
.rcard-route{display:flex;align-items:center;gap:6px;margin-bottom:8px}
.rcard-city{font-size:13px;font-weight:700;color:var(--t1)}
.rcard-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}
.rcard-dot.from{background:var(--red)}
.rcard-dot.to{background:var(--green)}
.rcard-line{flex:1;height:1px;border-top:2px dashed #d0d5dd}
.rcard-arrow{font-size:13px;color:var(--t3)}
.rcard-meta{display:flex;justify-content:space-between;font-size:11px;color:var(--t2);margin-bottom:8px}
.rcard-price{font-family:'Poppins',sans-serif;font-size:16px;font-weight:800;color:var(--t1)}
.rcard-price span{font-size:11px;font-weight:500;color:var(--t2)}

/* ── MAIN LAYOUT ── */
.bus-main{max-width:1280px;margin:0 auto;padding:20px 16px;display:grid;grid-template-columns:260px 1fr;gap:20px}

/* ── FILTER PANEL ── */
.fp{background:#fff;border-radius:var(--rl);border:1px solid var(--border);overflow:hidden;align-self:start;position:sticky;top:16px}
.fp-hdr{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;background:linear-gradient(135deg,var(--navy),#1a3a8f)}
.fp-ttl{font-family:'Poppins',sans-serif;font-size:14px;font-weight:700;color:#fff;display:flex;align-items:center;gap:7px}
.fp-rst{font-size:12px;font-weight:600;color:rgba(255,255,255,.72);background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.25);border-radius:6px;padding:3px 10px;cursor:pointer}
.fp-rst:hover{background:rgba(255,255,255,.22);color:#fff}
.fs{padding:16px 18px;border-bottom:1px solid var(--border)}
.fs:last-child{border-bottom:none}
.fs-ttl{font-size:11px;font-weight:700;color:var(--t1);text-transform:uppercase;letter-spacing:.6px;margin-bottom:12px}
.fclist{display:flex;flex-direction:column;gap:9px}
.fcrow{display:flex;align-items:center;gap:9px;cursor:pointer;min-height:32px}
.cbox{width:17px;height:17px;border-radius:4px;border:1.5px solid var(--border);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .18s}
.cbox.on{background:var(--red);border-color:var(--red)}
.fc-lbl{font-size:13px;color:var(--t1);font-weight:500;flex:1}
.pslider{width:100%;accent-color:var(--red);height:4px;cursor:pointer;margin-top:4px}
.pi-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px}
.pi-box{background:#f5f7fa;border:1.5px solid var(--border);border-radius:8px;padding:8px 11px}
.pi-box label{display:block;font-size:9px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px}
.pi-box input{width:100%;background:none;border:none;outline:none;font-size:14px;font-weight:700;color:var(--t1);font-family:'Inter',sans-serif}
.mob-filter{display:none;align-items:center;gap:6px;padding:8px 14px;border:1.5px solid var(--border);border-radius:8px;background:#fff;font-size:13px;font-weight:700;cursor:pointer;min-height:40px}
.fp-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9997;backdrop-filter:blur(2px)}
.fp-overlay.show{display:block}
.fp.mob-open{display:block!important;position:fixed;bottom:0;left:0;right:0;top:auto;z-index:9998;border-radius:var(--rl) var(--rl) 0 0;max-height:88vh;overflow-y:auto;border:none;box-shadow:0 -8px 40px rgba(0,0,0,.2)}

/* ── RESULTS AREA ── */
.rs{display:flex;flex-direction:column;gap:14px}
.rh{background:#fff;border-radius:var(--r);border:1px solid var(--border);padding:14px 16px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px}
.rh-ttl{font-family:'Poppins',sans-serif;font-size:16px;font-weight:800;color:var(--t1)}
.rh-sub{font-size:12px;color:var(--t2);margin-top:2px}
.sort-tabs{display:flex;gap:6px;flex-wrap:wrap}
.sort-tab{padding:7px 14px;border-radius:8px;border:1.5px solid var(--border);font-size:12px;font-weight:700;background:#fff;color:var(--t2);cursor:pointer;transition:all .2s;min-height:36px}
.sort-tab.on{background:var(--navy);color:#fff;border-color:var(--navy)}
.sort-tab:hover:not(.on){border-color:var(--navy);color:var(--navy)}

/* ── BUS CARD ── */
.bcard{background:#fff;border-radius:var(--rl);border:2px solid var(--border);overflow:hidden;transition:all .25s;cursor:pointer}
.bcard:hover{box-shadow:var(--sh-hover);transform:translateY(-2px)}
.bcard.sel{border-color:var(--red)}
.bcard-body{padding:20px}
.bcard-inner{display:flex;gap:18px;align-items:flex-start}
.bcard-time{width:120px;flex-shrink:0}
.bcard-dep{font-family:'Poppins',sans-serif;font-size:22px;font-weight:800;color:var(--t1);line-height:1}
.bcard-station{font-size:11px;color:var(--t3);margin-top:3px;line-height:1.4;max-width:110px}
.bcard-line{margin:10px 0;display:flex;align-items:center;gap:0;position:relative}
.bcard-line-track{flex:1;height:2px;background:linear-gradient(90deg,var(--red),var(--blue));border-radius:99px;position:relative}
.bcard-line-track::before,.bcard-line-track::after{content:'';position:absolute;width:7px;height:7px;border-radius:50%;top:50%;transform:translateY(-50%)}
.bcard-line-track::before{left:0;background:var(--red)}
.bcard-line-track::after{right:0;background:var(--blue)}
.bcard-dur{font-size:10px;font-weight:700;color:var(--blue);background:#e8f4ff;padding:2px 7px;border-radius:99px;margin-top:5px;display:inline-block}
.bcard-info{flex:1;min-width:0}
.bcard-badges{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:7px}
.cls-badge{font-size:10px;font-weight:700;padding:3px 9px;border-radius:5px}
.cls-ac{background:#e8f4ff;color:#0072cc}
.cls-volvo{background:#f0e8ff;color:#6b21a8}
.cls-nonac{background:#f5f7fa;color:#637381}
.cls-seater{background:#e8fff0;color:#00695c}
.bcard-name{font-family:'Poppins',sans-serif;font-size:15px;font-weight:800;color:var(--t1);margin-bottom:2px}
.bcard-op{font-size:12px;color:var(--t2);margin-bottom:8px}
.bcard-pts{font-size:11px;color:var(--t2);margin-bottom:8px;display:flex;flex-direction:column;gap:3px}
.bcard-ams{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:7px}
.am-tag{padding:3px 8px;background:#f5f7fa;border:1px solid var(--border);border-radius:5px;font-size:10px;font-weight:600;color:var(--t2)}
.bcard-feats{display:flex;flex-wrap:wrap;gap:5px}
.feat-tag{padding:3px 9px;background:#e8fff0;border:1px solid #b2dfdb;border-radius:99px;font-size:10px;font-weight:600;color:#00695c}
.bcard-price{width:140px;flex-shrink:0;text-align:right}
.bprice-main{font-family:'Poppins',sans-serif;font-size:24px;font-weight:900;color:var(--t1);line-height:1}
.bprice-was{font-size:12px;color:var(--t3);text-decoration:line-through;margin-bottom:2px}
.bprice-save{font-size:11px;font-weight:700;color:var(--green)}
.bseats{font-size:12px;font-weight:700;margin:6px 0 12px}
.bseats.low{color:var(--red)}.bseats.ok{color:var(--green)}
.bcard-actions{display:flex;flex-direction:column;gap:7px}
.btn-det{padding:8px 12px;border:1.5px solid var(--border);border-radius:8px;font-size:12px;font-weight:700;color:var(--t1);background:#fff;cursor:pointer;transition:all .2s;min-height:36px}
.btn-det:hover{border-color:var(--red);color:var(--red)}
.btn-sel{padding:8px 12px;border:none;border-radius:8px;font-size:12px;font-weight:700;color:#fff;background:linear-gradient(135deg,var(--red),var(--red-d));cursor:pointer;transition:all .25s;min-height:36px;display:flex;align-items:center;justify-content:center;gap:4px;font-family:'Poppins',sans-serif}
.btn-sel:hover{box-shadow:0 4px 14px rgba(232,35,42,.35);transform:translateY(-1px)}
.btn-sel:active{transform:scale(.97)}
.bcard-rating{display:flex;align-items:center;gap:4px;background:#fffbeb;padding:4px 9px;border-radius:7px;font-size:12px;font-weight:700;color:var(--t1);border:1px solid #fde68a}

/* EXPANDED DETAILS */
.bcard-details{border-top:1px solid var(--border);margin:0 20px;padding:18px 0;display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.det-ttl{font-size:11px;font-weight:700;color:var(--t2);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px}
.det-row{display:flex;align-items:flex-start;gap:6px;font-size:12px;color:var(--t2);margin-bottom:7px}

/* TRUST STRIP */
.trust{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.tbadge{background:linear-gradient(135deg,#f0f7ff,#e8f4fd);border:1px solid #c8dff5;border-radius:var(--r);padding:12px 13px;display:flex;align-items:flex-start;gap:10px}
.tbadge-ico{background:#fff;padding:7px;border-radius:8px;color:var(--blue);box-shadow:0 1px 4px rgba(0,0,0,.08);flex-shrink:0;font-size:18px}
.tbadge-ttl{font-size:12px;font-weight:700;color:var(--navy);margin-bottom:2px}
.tbadge-sub{font-size:10px;color:#4a6fa5}

/* EMPTY STATE */
.empty{text-align:center;padding:60px 20px;background:#fff;border-radius:var(--rl);border:2px dashed var(--border)}
.empty-ico{font-size:48px;margin-bottom:14px}
.empty-ttl{font-family:'Poppins',sans-serif;font-size:18px;font-weight:700;margin-bottom:6px}
.empty-sub{font-size:14px;color:var(--t2);margin-bottom:18px}

/* STATS BAR */
.stats-bar{background:linear-gradient(135deg,var(--navy),#1a3a8f);border-radius:18px;padding:32px;display:grid;grid-template-columns:repeat(4,1fr);gap:20px;text-align:center;color:#fff;margin-top:32px}
.stat-num{font-family:'Poppins',sans-serif;font-size:30px;font-weight:900;margin-bottom:4px}
.stat-lbl{font-size:12px;color:rgba(255,255,255,.7)}

/* AMENITIES GRID */
.am-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;margin-top:12px}
.am-card{background:#fff;border-radius:12px;border:1px solid var(--border);padding:16px 12px;text-align:center;transition:all .2s}
.am-card:hover{border-color:var(--red);box-shadow:var(--sh-card)}
.am-card-ico{font-size:28px;margin-bottom:8px}
.am-card-ttl{font-size:12px;font-weight:700;color:var(--t1);margin-bottom:3px}
.am-card-sub{font-size:10px;color:var(--t2);line-height:1.4}

/* HOW IT WORKS */
.how-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:20px;position:relative}
.how-step{text-align:center;position:relative}
.how-ico{display:inline-flex;align-items:center;justify-content:center;width:56px;height:56px;background:#fff5f5;border-radius:16px;font-size:24px;margin-bottom:14px;position:relative;z-index:1}
.how-num{position:absolute;top:-4px;right:-4px;width:22px;height:22px;background:var(--red);color:#fff;border-radius:50%;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center}
.how-ttl{font-family:'Poppins',sans-serif;font-size:15px;font-weight:700;margin-bottom:6px}
.how-sub{font-size:13px;color:var(--t2);line-height:1.6}

/* FAQ */
.faq-item{background:#fff;border-radius:12px;border:1.5px solid var(--border);overflow:hidden;margin-bottom:10px}
.faq-q{width:100%;display:flex;justify-content:space-between;align-items:center;padding:16px 20px;text-align:left;border:none;background:none;cursor:pointer;transition:background .18s}
.faq-q:hover{background:#f9fafc}
.faq-qlbl{font-size:14px;font-weight:600;color:var(--t1);padding-right:16px}
.faq-toggle{font-size:20px;color:var(--red);flex-shrink:0;transition:transform .22s}
.faq-toggle.open{transform:rotate(45deg)}
.faq-ans{padding:0 20px 16px;font-size:13px;color:var(--t2);line-height:1.7;border-top:1px solid var(--border)}

/* BOTTOM TRUST */
.btrust-grid{display:flex;flex-wrap:wrap;justify-content:center;gap:14px;margin-top:20px}
.btrust-item{display:flex;align-items:center;gap:12px;background:#fff;padding:12px 18px;border-radius:12px;border:1px solid var(--border);box-shadow:var(--sh-card)}
.btrust-ico{font-size:24px}
.btrust-ttl{font-size:13px;font-weight:700;color:var(--t1)}
.btrust-sub{font-size:11px;color:var(--t2)}

/* ── SECTION WRAPPERS ── */
.sec-wrap{max-width:1280px;margin:0 auto;padding:0 16px}
.sec-block{margin-top:48px}
.sec-block-ttl{font-family:'Poppins',sans-serif;font-size:22px;font-weight:800;color:var(--t1);margin-bottom:4px}
.sec-block-sub{font-size:13px;color:var(--t2);margin-bottom:20px}
.how-wrap{background:#fff;border-radius:18px;padding:32px;border:1px solid var(--border)}

/* ── RESPONSIVE ── */
@media(max-width:1024px){
  .bus-main{grid-template-columns:1fr;padding:16px}
  .fp{display:none}.fp.mob-open{display:block}
  .mob-filter{display:flex!important}
  .trust{grid-template-columns:repeat(3,1fr)}
  .am-grid{grid-template-columns:repeat(3,1fr)}
  .stats-bar{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:768px){
  .bus-hero-bar{padding:14px 16px 0}
  .bus-hero-nav{display:none}
  .bus-h1{font-size:30px}
  .bus-sub{font-size:14px}
  .bus-hero-content{padding:28px 16px 24px}
  .bus-srow{grid-template-columns:1fr;border-radius:var(--rl) var(--rl) 0 0}
  .bus-sfield{border-right:none;border-bottom:1px solid var(--border);min-height:62px}
  .bus-swap{border-right:none;border-bottom:1px solid var(--border);justify-content:flex-start;padding:10px 20px;min-height:52px}
  .bus-sbtn{border-radius:0 0 0 0;padding:16px;min-height:56px;font-size:15px}
  .bcard-inner{flex-direction:column;gap:14px}
  .bcard-price{width:100%;text-align:left;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px}
  .bcard-actions{flex-direction:row}
  .btn-det,.btn-sel{flex:1;justify-content:center}
  .bcard-time{width:100%}
  .trust{grid-template-columns:1fr}
  .how-grid{grid-template-columns:1fr}
  .am-grid{grid-template-columns:repeat(2,1fr)}
  .stats-bar{grid-template-columns:repeat(2,1fr)}
  .bcard-details{grid-template-columns:1fr}
  .cbtn{display:none}
  .pop-in{padding:0 16px}
}
@media(max-width:480px){
  .bus-h1{font-size:26px}
  .bus-sub{font-size:13px;margin-bottom:20px}
  .bprice-main{font-size:20px}
  .am-grid{grid-template-columns:repeat(2,1fr)}
  .stats-bar{padding:20px;gap:14px}
  .stat-num{font-size:24px}
  .bus-strip-lbl{display:none}
}
`;

// ── DATA ──────────────────────────────────────────────────────────────────────

const POPULAR_REGIONS = ['North India', 'South India', 'West India', 'East India', 'Hill Stations'];

const POPULAR_ROUTES_DATA = {
  'North India': [
    { from: 'Delhi',     to: 'Jaipur',     buses: '120+', dur: '5-6 hrs',  price: '₹450' },
    { from: 'Delhi',     to: 'Agra',       buses: '90+',  dur: '4-5 hrs',  price: '₹350' },
    { from: 'Delhi',     to: 'Chandigarh', buses: '80+',  dur: '4-5 hrs',  price: '₹400' },
    { from: 'Jaipur',    to: 'Ajmer',      buses: '60+',  dur: '2-3 hrs',  price: '₹200' },
    { from: 'Delhi',     to: 'Dehradun',   buses: '70+',  dur: '5-6 hrs',  price: '₹500' },
    { from: 'Lucknow',   to: 'Varanasi',   buses: '55+',  dur: '6-7 hrs',  price: '₹380' },
  ],
  'South India': [
    { from: 'Bangalore', to: 'Chennai',    buses: '180+', dur: '6-7 hrs',  price: '₹550' },
    { from: 'Hyderabad', to: 'Bangalore',  buses: '150+', dur: '9-10 hrs', price: '₹700' },
    { from: 'Chennai',   to: 'Coimbatore', buses: '80+',  dur: '7-8 hrs',  price: '₹450' },
    { from: 'Bangalore', to: 'Mysore',     buses: '200+', dur: '3-4 hrs',  price: '₹250' },
    { from: 'Hyderabad', to: 'Vijayawada', buses: '110+', dur: '5-6 hrs',  price: '₹420' },
    { from: 'Kochi',     to: 'Trivandrum', buses: '70+',  dur: '4-5 hrs',  price: '₹380' },
  ],
  'West India': [
    { from: 'Mumbai',    to: 'Pune',       buses: '200+', dur: '3-4 hrs',  price: '₹250' },
    { from: 'Mumbai',    to: 'Goa',        buses: '100+', dur: '8-9 hrs',  price: '₹600' },
    { from: 'Pune',      to: 'Nashik',     buses: '90+',  dur: '3-4 hrs',  price: '₹300' },
    { from: 'Ahmedabad', to: 'Surat',      buses: '120+', dur: '3-4 hrs',  price: '₹280' },
    { from: 'Mumbai',    to: 'Aurangabad', buses: '75+',  dur: '7-8 hrs',  price: '₹550' },
    { from: 'Goa',       to: 'Mumbai',     buses: '85+',  dur: '9-10 hrs', price: '₹620' },
  ],
  'East India': [
    { from: 'Kolkata',   to: 'Bhubaneswar',buses: '60+',  dur: '7-8 hrs',  price: '₹500' },
    { from: 'Kolkata',   to: 'Siliguri',   buses: '50+',  dur: '9-10 hrs', price: '₹650' },
    { from: 'Patna',     to: 'Ranchi',     buses: '40+',  dur: '5-6 hrs',  price: '₹400' },
    { from: 'Bhubaneswar',to:'Visakhapatnam',buses:'55+', dur: '6-7 hrs',  price: '₹480' },
    { from: 'Guwahati',  to: 'Shillong',   buses: '35+',  dur: '3-4 hrs',  price: '₹300' },
    { from: 'Kolkata',   to: 'Patna',      buses: '65+',  dur: '8-9 hrs',  price: '₹580' },
  ],
  'Hill Stations': [
    { from: 'Delhi',     to: 'Manali',     buses: '40+',  dur: '13-14 hrs',price: '₹900' },
    { from: 'Delhi',     to: 'Shimla',     buses: '55+',  dur: '8-9 hrs',  price: '₹600' },
    { from: 'Dehradun',  to: 'Mussoorie',  buses: '30+',  dur: '1-2 hrs',  price: '₹150' },
    { from: 'Delhi',     to: 'Nainital',   buses: '35+',  dur: '7-8 hrs',  price: '₹550' },
    { from: 'Bangalore', to: 'Ooty',       buses: '45+',  dur: '7-8 hrs',  price: '₹600' },
    { from: 'Pune',      to: 'Mahabaleshwar',buses:'50+', dur: '3-4 hrs',  price: '₹350' },
  ],
};

const MOCK_BUSES = [
  {
    id:1, busClass:'AC Sleeper', name:'Deluxe Express', operator:'Delhi Travels',
    depStation:'Delhi ISBT', arrStation:'Jaipur Sindhi Camp',
    dep:'20:30', arr:'04:30', dur:'8h 0m',
    type:'AC Sleeper (2+1)', price:1200, origPrice:1500,
    seats:8, totalSeats:36, rating:4.8,
    amenities:['AC','Sleeper','Charging Port','WiFi','Blanket','Water'],
    features:['No Booking Fee','Free Cancellation','Live Tracking'],
    busNo:'DL01AB1234', layout:'sleeper',
  },
  {
    id:2, busClass:'Volvo AC', name:'Premium Coach', operator:'Jaipur Express',
    depStation:'Delhi Kashmere Gate', arrStation:'Jaipur Bus Stand',
    dep:'21:00', arr:'05:00', dur:'8h 0m',
    type:'Volvo AC Semi Sleeper (2+2)', price:1000, origPrice:1300,
    seats:12, totalSeats:36, rating:4.5,
    amenities:['AC','Charging Port','WiFi','Water'],
    features:['Fastest','Economy','On-time'],
    busNo:'RJ01CD5678', layout:'seater',
  },
  {
    id:3, busClass:'Non-AC Sleeper', name:'Economy Sleeper', operator:'Rajasthan Travels',
    depStation:'Delhi Anand Vihar', arrStation:'Jaipur Station',
    dep:'22:30', arr:'06:30', dur:'8h 0m',
    type:'Non-AC Sleeper', price:800, origPrice:1000,
    seats:25, totalSeats:36, rating:4.2,
    amenities:['Sleeper','Water'],
    features:['Budget','Standard'],
    busNo:'RJ02EF9012', layout:'sleeper',
  },
  {
    id:4, busClass:'Seater', name:'Express Seater', operator:'Fast Travels',
    depStation:'Delhi Rohini', arrStation:'Jaipur MI Road',
    dep:'23:00', arr:'07:00', dur:'8h 0m',
    type:'Seater Coach', price:600, origPrice:750,
    seats:40, totalSeats:40, rating:4.0,
    amenities:['AC','Seater'],
    features:['Economy','Direct'],
    busNo:'DL02GH3456', layout:'seater',
  },
  {
    id:5, busClass:'AC Sleeper', name:'Luxury Sleeper', operator:'Royal Travels',
    depStation:'Delhi Majnu Ka Tila', arrStation:'Jaipur Tonk Road',
    dep:'21:30', arr:'05:30', dur:'8h 0m',
    type:'AC Sleeper (2+1)', price:1400, origPrice:1800,
    seats:5, totalSeats:36, rating:4.9,
    amenities:['AC','Sleeper','Charging Port','WiFi','Blanket','Water','Snacks'],
    features:['Luxury','Priority Boarding','Free Meals'],
    busNo:'RJ03IJ7890', layout:'sleeper',
  },
];

const AMENITIES_SHOWCASE = [
  { ico:'❄️', lbl:'Air Conditioning', sub:'Stay cool on long journeys' },
  { ico:'🛏️', lbl:'Sleeper Berths',    sub:'Comfortable overnight travel' },
  { ico:'⚡', lbl:'Charging Points',   sub:'Keep your devices powered' },
  { ico:'📶', lbl:'WiFi Onboard',      sub:'Stay connected on the go' },
  { ico:'🎥', lbl:'Entertainment',     sub:'Movies & music enroute' },
  { ico:'🚿', lbl:'Clean Toilets',     sub:'Hygiene maintained throughout' },
];

const HOW_STEPS = [
  { ico:'🔍', ttl:'Search & Compare',    sub:'Enter your source, destination and date. Compare buses by price, timing and rating.' },
  { ico:'💺', ttl:'Choose Your Seat',    sub:'Pick your preferred seat — window, aisle, lower or upper berth. See live availability.' },
  { ico:'✅', ttl:'Pay & Get Ticket',    sub:'Pay securely via UPI, card or net banking. Get your e-ticket instantly.' },
];

const FAQS = [
  { q:'How do I book a bus ticket online?', a:'Enter your source and destination, select the travel date, choose a bus, pick seats, fill passenger details, and pay online. You get a confirmation instantly.' },
  { q:'Can I cancel my bus ticket?',         a:'Yes. Most operators offer free cancellation up to 24 hours before departure. Cancellation charges may apply for last-minute cancellations.' },
  { q:'What is the difference between Sleeper and Seater buses?', a:'Sleeper buses have berths for lying down — ideal for overnight journeys. Seater buses have regular seats — better for short trips.' },
  { q:'Are AC buses worth the extra cost?',  a:'For journeys over 5 hours, AC buses are highly recommended. They offer more comfort, regulated temperature, and are generally better maintained.' },
  { q:'Is there a booking fee?',             a:'No! We charge zero booking fees. The price you see is exactly what you pay. No hidden charges, ever.' },
];

const TRUST_BADGES = [
  { ico:'🔒', ttl:'Secure Payments',   sub:'SSL encrypted checkout' },
  { ico:'📱', ttl:'Instant E-Ticket',  sub:'SMS + Email delivery' },
  { ico:'🔄', ttl:'Easy Refunds',      sub:'Processed in 5-7 days' },
  { ico:'📞', ttl:'24/7 Support',      sub:'Call, chat or email' },
  { ico:'🎟️', ttl:'No Hidden Fees',   sub:'Price you see is final' },
];

const STATS = [
  { num:'5,000+', lbl:'Bus Operators' },
  { num:'10L+',   lbl:'Happy Travellers' },
  { num:'2,000+', lbl:'Routes Covered' },
  { num:'4.8★',   lbl:'Average Rating' },
];

const TIME_SLOTS = [
  { lbl:'Before 6 AM',   val:'before6' },
  { lbl:'6 AM – 12 PM',  val:'morning' },
  { lbl:'12 PM – 6 PM',  val:'afternoon' },
  { lbl:'6 PM – 12 AM',  val:'evening' },
];

// ── POPULAR ROUTES CAROUSEL ───────────────────────────────────────────────────
const PopularRoutes = ({ onRouteClick }) => {
  const [region, setRegion] = useState('North India');
  const [canL, setCanL] = useState(false);
  const [canR, setCanR] = useState(true);
  const ref = useRef(null);
  const routes = POPULAR_ROUTES_DATA[region] || [];
  const chk = () => {
    const el = ref.current; if (!el) return;
    setCanL(el.scrollLeft > 0);
    setCanR(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };
  useEffect(() => { chk(); }, [region]);
  const scroll = d => { ref.current?.scrollBy({ left: d === 'l' ? -230 : 230, behavior: 'smooth' }); setTimeout(chk, 360); };
  return (
    <div className="pop-sec">
      <div className="pop-in">
        <div className="sec-hdr">
          <h2 className="sec-ttl">Popular <span>Bus Routes</span></h2>
          <button className="see-all">View all routes ›</button>
        </div>
        <div className="ctabs">
          {POPULAR_REGIONS.map(r => (
            <button key={r} className={`ctab ${region === r ? 'on' : ''}`}
              onClick={() => { setRegion(r); if (ref.current) ref.current.scrollLeft = 0; }}>
              {r}
            </button>
          ))}
        </div>
        <div className="cw">
          {canL && <button className="cbtn lft" onClick={() => scroll('l')}>‹</button>}
          <div className="ctrack" ref={ref} onScroll={chk}>
            {routes.map((rt, i) => (
              <div key={i} className="rcard" onClick={() => onRouteClick(rt)}>
                <div className="rcard-route">
                  <div className="rcard-dot from" />
                  <span className="rcard-city">{rt.from}</span>
                  <div className="rcard-line" />
                  <span style={{ fontSize: 11, color: 'var(--t3)' }}>→</span>
                  <div className="rcard-dot to" />
                  <span className="rcard-city">{rt.to}</span>
                </div>
                <div className="rcard-meta">
                  <span>🚌 {rt.buses} buses</span>
                  <span>⏱ {rt.dur}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                  <span style={{ fontSize: 10, color: 'var(--t3)' }}>Starting from</span>
                  <div className="rcard-price">{rt.price} <span>/seat</span></div>
                </div>
              </div>
            ))}
          </div>
          {canR && <button className="cbtn rgt" onClick={() => scroll('r')}>›</button>}
        </div>
      </div>
    </div>
  );
};

// ── CHECK ICON ────────────────────────────────────────────────────────────────
const Chk = ({ color = '#00897b' }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 6l3 3 5-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
const BusSearchPage = () => {
  const navigate = useNavigate();

  // inject CSS once
  useEffect(() => {
    const id = 'bmt-bus-styles-v1';
    if (!document.getElementById(id)) {
      const el = document.createElement('style'); el.id = id; el.textContent = GLOBAL_CSS;
      document.head.appendChild(el);
    }
  }, []);

  const [buses, setBuses]           = useState(MOCK_BUSES);
  const [loading, setLoading]       = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);
  const [showDetails, setShowDetails] = useState({});
  const [mobF, setMobF]             = useState(false);
  const [openFaq, setOpenFaq]       = useState(null);
  const [activeQuick, setActiveQuick] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 2000]);

  const [searchParams, setSearchParams] = useState({
    fromCity: '', toCity: '', date: '', passengers: 1, travelForWork: false,
  });
  const [busTypeFilters, setBusTypeFilters] = useState({ ac: true, nonAc: false, sleeper: true, seater: false });
  const [timeFilters, setTimeFilters]       = useState([]);
  const [sortOption, setSortOption]         = useState('Departure (earliest)');

  // Lock body on mobile filter
  useEffect(() => {
    document.body.style.overflow = mobF ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobF]);

  const sortBuses = (arr, opt) => {
    const s = [...arr];
    if (opt === 'Cheapest') return s.sort((a,b) => a.price - b.price);
    if (opt === 'Rating')   return s.sort((a,b) => b.rating - a.rating);
    if (opt === 'Fastest')  return s.sort((a,b) => a.dur.localeCompare(b.dur));
    return s.sort((a,b) => a.dep.localeCompare(b.dep));
  };

  const handleSearch = (e) => {
    e?.preventDefault();
    setLoading(true);
    setTimeout(() => {
      let res = [...MOCK_BUSES].filter(b => {
        if (busTypeFilters.ac && b.busClass.includes('AC') && !b.busClass.includes('Non')) return true;
        if (busTypeFilters.nonAc && b.busClass.includes('Non-AC')) return true;
        if (busTypeFilters.sleeper && b.busClass.toLowerCase().includes('sleeper')) return true;
        if (busTypeFilters.seater && b.busClass.toLowerCase().includes('seater')) return true;
        // if nothing active, show all
        if (!busTypeFilters.ac && !busTypeFilters.nonAc && !busTypeFilters.sleeper && !busTypeFilters.seater) return true;
        return false;
      }).filter(b => b.price >= priceRange[0] && b.price <= priceRange[1]);
      setBuses(sortBuses(res, sortOption));
      setLoading(false);
    }, 500);
  };

  const toggleBusType = (key) => setBusTypeFilters(p => ({ ...p, [key]: !p[key] }));
  const toggleTime    = (val) => setTimeFilters(p => p.includes(val) ? p.filter(x => x !== val) : [...p, val]);
  const resetFilters  = () => {
    setBusTypeFilters({ ac: false, nonAc: false, sleeper: false, seater: false });
    setTimeFilters([]); setPriceRange([0, 2000]);
    setBuses(MOCK_BUSES);
  };

  const getClassBadge = (cls) => {
    if (cls.includes('Non-AC'))   return 'cls-badge cls-nonac';
    if (cls.includes('Volvo'))    return 'cls-badge cls-volvo';
    if (cls.includes('AC'))       return 'cls-badge cls-ac';
    if (cls.includes('Seater'))   return 'cls-badge cls-seater';
    return 'cls-badge cls-nonac';
  };

  const handleRouteClick = (rt) => {
    setSearchParams(p => ({ ...p, fromCity: rt.from, toCity: rt.to }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const CBoxItem = ({ on, onClick, label }) => (
    <div className="fcrow" onClick={onClick}>
      <div className={`cbox ${on ? 'on' : ''}`}>{on && <Chk color="#fff"/>}</div>
      <span className="fc-lbl">{label}</span>
    </div>
  );

  // ── Filter Panel ────────────────────────────────────────────────────────────
  const FiltersPanel = () => (
    <>
      {mobF && <div className="fp-overlay show" onClick={() => setMobF(false)}/>}
      <div className={`fp ${mobF ? 'mob-open' : ''}`}>
        <div className="fp-hdr">
          <div className="fp-ttl">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
            Filters
          </div>
          <div style={{ display:'flex', gap:8, alignItems:'center' }}>
            <button className="fp-rst" onClick={resetFilters}>Reset</button>
            {mobF && <button onClick={() => setMobF(false)} style={{ background:'rgba(255,255,255,.15)',border:'none',color:'#fff',borderRadius:6,padding:'4px 8px',cursor:'pointer',display:'flex',alignItems:'center' }}>✕</button>}
          </div>
        </div>

        <div className="fs">
          <div className="fs-ttl">🚌 Bus Type</div>
          <div className="fclist">
            <CBoxItem on={busTypeFilters.ac}     onClick={() => toggleBusType('ac')}     label="AC Buses"/>
            <CBoxItem on={busTypeFilters.nonAc}  onClick={() => toggleBusType('nonAc')}  label="Non-AC Buses"/>
            <CBoxItem on={busTypeFilters.sleeper} onClick={() => toggleBusType('sleeper')} label="Sleeper"/>
            <CBoxItem on={busTypeFilters.seater}  onClick={() => toggleBusType('seater')}  label="Seater"/>
          </div>
        </div>

        <div className="fs">
          <div className="fs-ttl">🕐 Departure Time</div>
          <div className="fclist">
            {TIME_SLOTS.map(s => (
              <CBoxItem key={s.val} on={timeFilters.includes(s.val)} onClick={() => toggleTime(s.val)} label={s.lbl}/>
            ))}
          </div>
        </div>

        <div className="fs">
          <div className="fs-ttl">💰 Price Range</div>
          <div className="pi-grid">
            <div className="pi-box"><label>Min</label><input type="number" value={priceRange[0]} onChange={e=>{const n=[...priceRange];n[0]=parseInt(e.target.value)||0;setPriceRange(n);}}/></div>
            <div className="pi-box"><label>Max</label><input type="number" value={priceRange[1]} onChange={e=>{const n=[...priceRange];n[1]=parseInt(e.target.value)||0;setPriceRange(n);}}/></div>
          </div>
          <input className="pslider" type="range" min="0" max="2000" value={priceRange[1]}
            onChange={e=>{setPriceRange(p=>[p[0],parseInt(e.target.value)])}}/>
          <div style={{display:'flex',justifyContent:'space-between',fontSize:11,color:'var(--t2)',marginTop:4}}>
            <span>₹0</span><span style={{fontWeight:700,color:'var(--red)'}}>₹{priceRange[1]}</span><span>₹2000</span>
          </div>
        </div>

        <div className="fs">
          <div className="fs-ttl">⭐ Min Rating</div>
          <div className="fclist">
            {[4.5, 4.0, 3.5].map(n => (
              <div key={n} className="fcrow" style={{cursor:'pointer'}}>
                <div className="fc-lbl">{n}+ Rating</div>
              </div>
            ))}
          </div>
        </div>

        {mobF && (
          <div style={{padding:'16px 18px',borderTop:'1px solid var(--border)',position:'sticky',bottom:0,background:'#fff'}}>
            <button onClick={() => { handleSearch(); setMobF(false); }} style={{width:'100%',padding:'14px',background:'linear-gradient(135deg,var(--red),var(--red-d))',color:'#fff',border:'none',borderRadius:10,fontWeight:700,fontFamily:'Poppins,sans-serif',fontSize:15,cursor:'pointer',minHeight:50}}>
              Show {buses.length} Buses
            </button>
          </div>
        )}
      </div>
    </>
  );

  // ── RENDER ─────────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight:'100vh', background:'var(--bg)' }}>

      {/* ════ HERO ════ */}
      <section className="bus-hero">
        {/* <div className="bus-hero-bar">
          <div className="bus-hero-logo">Book<b>My</b>Trip</div>
          <nav className="bus-hero-nav">
            <a href="#">Hotels</a>
            <a href="#">Flights</a>
            <a href="#" style={{color:'#fff',fontWeight:700,borderBottom:'2px solid var(--yellow)',paddingBottom:2}}>Bus</a>
            <a href="#">Trains</a>
            <a href="#">Holidays</a>
          </nav>
        </div> */}

        <div className="bus-hero-content">
          <div className="bus-eyebrow">
            🚌 5,000+ Bus Operators · 2,000+ Routes Across India
          </div>
          <h1 className="bus-h1">
            Book Bus Tickets <span className="acc">Online</span>
          </h1>
          <p className="bus-sub">Best prices · Verified operators · Instant e-ticket · Zero booking fee</p>

          {/* Search box */}
          <div className="bus-sbox">
            <form onSubmit={handleSearch}>
              <div className="bus-srow">
                {/* From */}
                <div className="bus-sfield">
                  <svg className="bus-sfield-ico" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" clipRule="evenodd"/>
                  </svg>
                  <div style={{flex:1}}>
                    <div className="bus-sfield-lbl">From</div>
                    <input type="text" placeholder="Departure city" value={searchParams.fromCity}
                      onChange={e => setSearchParams(p=>({...p,fromCity:e.target.value}))}/>
                  </div>
                </div>

                {/* Swap */}
                <div className="bus-swap">
                  <button type="button" className="bus-swap-btn"
                    onClick={() => setSearchParams(p=>({...p,fromCity:p.toCity,toCity:p.fromCity}))}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4M4 17l4-4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                {/* To */}
                <div className="bus-sfield">
                  <svg className="bus-sfield-ico" width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" clipRule="evenodd"/>
                  </svg>
                  <div style={{flex:1}}>
                    <div className="bus-sfield-lbl">To</div>
                    <input type="text" placeholder="Arrival city" value={searchParams.toCity}
                      onChange={e => setSearchParams(p=>({...p,toCity:e.target.value}))}/>
                  </div>
                </div>

                {/* Date */}
                <div className="bus-sfield">
                  <svg className="bus-sfield-ico" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                  </svg>
                  <div style={{flex:1}}>
                    <div className="bus-sfield-lbl">Travel Date</div>
                    <input type="date" value={searchParams.date}
                      onChange={e => setSearchParams(p=>({...p,date:e.target.value}))}/>
                  </div>
                </div>

                {/* Passengers */}
                <div className="bus-sfield" style={{borderRight:'none'}}>
                  <svg className="bus-sfield-ico" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                  </svg>
                  <div style={{flex:1}}>
                    <div className="bus-sfield-lbl">Passengers</div>
                    <div style={{display:'flex',alignItems:'center',gap:8}}>
                      <button type="button" onClick={()=>setSearchParams(p=>({...p,passengers:Math.max(1,p.passengers-1)}))}
                        style={{width:22,height:22,borderRadius:'50%',border:'1.5px solid var(--border)',background:'#fff',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,color:'var(--t2)',flexShrink:0}}>−</button>
                      <span className="bus-sfield-val" style={{minWidth:20,textAlign:'center'}}>{searchParams.passengers}</span>
                      <button type="button" onClick={()=>setSearchParams(p=>({...p,passengers:p.passengers+1}))}
                        style={{width:22,height:22,borderRadius:'50%',border:'1.5px solid var(--border)',background:'#fff',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,color:'var(--t2)',flexShrink:0}}>+</button>
                    </div>
                  </div>
                </div>

                {/* Search btn */}
                <button type="submit" className="bus-sbtn" disabled={loading}>
                  {loading ? (
                    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,.3)" strokeWidth="3"/>
                      <path d="M12 2a10 10 0 0110 10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                    </svg>
                  )}
                  {loading ? 'Searching…' : 'Search'}
                </button>
              </div>

              {/* Row 2 */}
              <div className="bus-srow2">
                <label className="bus-work-chk">
                  <input type="checkbox" checked={searchParams.travelForWork}
                    onChange={() => setSearchParams(p=>({...p,travelForWork:!p.travelForWork}))}/>
                  I'm travelling for work
                </label>
                <div style={{width:'1px',height:20,background:'var(--border)',flexShrink:0}}/>
                <span className="bus-type-lbl">Bus Type:</span>
                <div className="bus-type-btns">
                  {[
                    { label:'❄️ AC',     key:'ac' },
                    { label:'🌬️ Non-AC', key:'nonAc' },
                    { label:'🛏️ Sleeper', key:'sleeper' },
                    { label:'💺 Seater',  key:'seater' },
                  ].map(({ label, key }) => (
                    <button key={key} type="button"
                      className={`bus-type-btn ${busTypeFilters[key] ? 'on' : ''}`}
                      onClick={() => toggleBusType(key)}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Quick filter strip */}
        <div className="bus-strip">
          <span className="bus-strip-lbl">Quick Filter:</span>
          {['AC Sleeper','Volvo','Non-AC','Overnight','Budget','Top Rated'].map(t => (
            <button key={t} className={`bus-spill ${activeQuick===t?'on':''}`}
              onClick={() => setActiveQuick(p => p===t ? null : t)}>
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* ════ POPULAR ROUTES ════ */}
      <PopularRoutes onRouteClick={handleRouteClick}/>

      {/* ════ MAIN LAYOUT ════ */}
      <div className="bus-main">
        <FiltersPanel/>

        {/* Results */}
        <section className="rs">
          {/* Header */}
          <div className="rh">
            <div>
              <div className="rh-ttl">
                {loading ? 'Searching buses…' : `${buses.length} Bus${buses.length!==1?'es':''} Found`}
              </div>
              <div className="rh-sub">
                {searchParams.fromCity && searchParams.toCity
                  ? `${searchParams.fromCity} → ${searchParams.toCity}${searchParams.date ? ` • ${new Date(searchParams.date).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}` : ''}`
                  : 'Delhi → Jaipur · Showing sample results'}
              </div>
            </div>
            <div style={{display:'flex',gap:8,flexWrap:'wrap',alignItems:'center'}}>
              <button className="mob-filter" onClick={() => setMobF(true)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
                Filters
              </button>
              <div className="sort-tabs">
                {['Departure (earliest)','Cheapest','Rating'].map(opt => (
                  <button key={opt} className={`sort-tab ${sortOption===opt?'on':''}`}
                    onClick={() => { setSortOption(opt); setBuses(sortBuses(buses, opt)); }}>
                    {opt}
                  </button>
                ))}
              </div>
              <span style={{background:'#e8fff0',color:'#00695c',fontSize:11,fontWeight:700,padding:'4px 10px',borderRadius:99,border:'1px solid #b2dfdb'}}>✓ No booking fee</span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="trust">
            {[
              { ico:'🛡️', ttl:'Verified Operators', sub:'All buses safety-checked' },
              { ico:'⚡', ttl:'Instant Confirmation', sub:'E-ticket in seconds' },
              { ico:'🔄', ttl:'Free Cancellation',   sub:'Up to 24 hrs before' },
            ].map((b,i) => (
              <div key={i} className="tbadge">
                <div className="tbadge-ico">{b.ico}</div>
                <div><div className="tbadge-ttl">{b.ttl}</div><div className="tbadge-sub">{b.sub}</div></div>
              </div>
            ))}
          </div>

          {/* Loading skeleton */}
          {loading && [1,2,3].map(i => (
            <div key={i} className="bcard" style={{animation:'pulse 1.5s ease-in-out infinite'}}>
              <div className="bcard-body">
                <div style={{display:'flex',gap:18}}>
                  <div style={{width:120,height:120,background:'#e8ecf0',borderRadius:8}}/>
                  <div style={{flex:1,display:'flex',flexDirection:'column',gap:10}}>
                    <div style={{width:'40%',height:16,background:'#e8ecf0',borderRadius:6}}/>
                    <div style={{width:'60%',height:14,background:'#e8ecf0',borderRadius:6}}/>
                    <div style={{width:'80%',height:12,background:'#e8ecf0',borderRadius:6}}/>
                  </div>
                  <div style={{width:130,height:120,background:'#e8ecf0',borderRadius:8}}/>
                </div>
              </div>
            </div>
          ))}

          {/* Bus Cards */}
          {!loading && buses.map(bus => {
            const isSel = selectedBus === bus.id;
            const isExp = showDetails[bus.id];
            const disc  = Math.round((1 - bus.price / bus.origPrice) * 100);
            return (
              <div key={bus.id} className={`bcard ${isSel ? 'sel' : ''}`}
                onClick={() => setSelectedBus(bus.id)}>
                <div className="bcard-body">
                  <div className="bcard-inner">
                    {/* Time */}
                    <div className="bcard-time">
                      <div className="bcard-dep">{bus.dep}</div>
                      <div className="bcard-station">{bus.depStation}</div>
                      <div className="bcard-line"><div className="bcard-line-track"/></div>
                      <div className="bcard-dep">{bus.arr}</div>
                      <div className="bcard-station">{bus.arrStation}</div>
                      <div style={{marginTop:6}}><span className="bcard-dur">{bus.dur}</span></div>
                    </div>

                    {/* Info */}
                    <div className="bcard-info">
                      <div className="bcard-badges">
                        <span className={getClassBadge(bus.busClass)}>{bus.busClass}</span>
                        <div className="bcard-rating">⭐ {bus.rating}</div>
                      </div>
                      <div className="bcard-name">{bus.name}</div>
                      <div className="bcard-op">{bus.operator} · {bus.type}</div>
                      <div className="bcard-pts">
                        <span>📍 <strong>Board:</strong> {bus.depStation}</span>
                        <span>🏁 <strong>Drop:</strong> {bus.arrStation}</span>
                      </div>
                      <div className="bcard-ams">
                        {bus.amenities.slice(0,5).map((a,i) => <span key={i} className="am-tag">{a}</span>)}
                        {bus.amenities.length > 5 && <span className="am-tag">+{bus.amenities.length-5}</span>}
                      </div>
                      <div className="bcard-feats">
                        {bus.features.map((f,i) => <span key={i} className="feat-tag">{f}</span>)}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="bcard-price">
                      <div>
                        {disc > 0 && <div className="bprice-was">₹{bus.origPrice.toLocaleString()}</div>}
                        <div className="bprice-main">₹{bus.price.toLocaleString()}</div>
                        {disc > 0 && <div className="bprice-save">Save ₹{(bus.origPrice - bus.price).toLocaleString()}</div>}
                        <div style={{fontSize:11,color:'var(--t3)',marginTop:2}}>per seat</div>
                        <div className={`bseats ${bus.seats < 10 ? 'low' : 'ok'}`}>
                          {bus.seats < 10 ? `⚠ ${bus.seats} seats left` : `✓ ${bus.seats} seats avail.`}
                        </div>
                      </div>
                      <div className="bcard-actions">
                        <button className="btn-det"
                          onClick={e => { e.stopPropagation(); setShowDetails(p=>({...p,[bus.id]:!p[bus.id]})); }}>
                          {isExp ? 'Hide Details' : 'View Details'}
                        </button>
                        <button className="btn-sel"
                          onClick={e => { e.stopPropagation(); navigate('/select-seats', { state:{ bus, searchParams, passengers:searchParams.passengers }}); }}>
                          Select Seats →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded details */}
                {isExp && (
                  <div className="bcard-details">
                    <div>
                      <div className="det-ttl">All Amenities</div>
                      <div style={{display:'flex',flexWrap:'wrap',gap:5}}>
                        {bus.amenities.map((a,i) => (
                          <span key={i} style={{display:'inline-flex',alignItems:'center',gap:4,padding:'4px 8px',background:'#e8fff0',border:'1px solid #b2dfdb',borderRadius:5,fontSize:11,fontWeight:600,color:'#00695c'}}><Chk/>{a}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="det-ttl">Trip Details</div>
                      <div className="det-row">🚌 <strong>Bus No:</strong>&nbsp;{bus.busNo}</div>
                      <div className="det-row">⏱ <strong>Duration:</strong>&nbsp;{bus.dur}</div>
                      <div className="det-row">🪑 <strong>Type:</strong>&nbsp;{bus.type}</div>
                      <div className="det-row">🏢 <strong>Operator:</strong>&nbsp;{bus.operator}</div>
                    </div>
                    <div>
                      <div className="det-ttl">Policies</div>
                      <div className="det-row"><Chk/>&nbsp;Free cancellation up to 24 hrs</div>
                      <div className="det-row"><Chk/>&nbsp;No booking fee charged</div>
                      <div className="det-row"><Chk/>&nbsp;Instant e-ticket on booking</div>
                      <div className="det-row" style={{color:'var(--blue)'}}>ℹ&nbsp;Board 15 mins before departure</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Empty */}
          {!loading && buses.length === 0 && (
            <div className="empty">
              <div className="empty-ico">🚌</div>
              <div className="empty-ttl">No buses found</div>
              <div className="empty-sub">Try changing your filters or search for a different route</div>
              <button onClick={resetFilters} style={{color:'var(--red)',fontWeight:700,background:'none',border:'none',cursor:'pointer',fontSize:14,textDecoration:'underline'}}>Clear all filters</button>
            </div>
          )}
        </section>
      </div>

      {/* ════ BOTTOM INFO SECTIONS ════ */}
      <div className="sec-wrap" style={{ paddingBottom: 60 }}>

        {/* Stats bar */}
        <div className="stats-bar">
          {STATS.map((s,i) => (
            <div key={i}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="sec-block">
          <div className="sec-block-ttl">Why Book With Us?</div>
          <div className="sec-block-sub">Comfort features available on our partner buses</div>
          <div className="am-grid">
            {AMENITIES_SHOWCASE.map((a,i) => (
              <div key={i} className="am-card">
                <div className="am-card-ico">{a.ico}</div>
                <div className="am-card-ttl">{a.lbl}</div>
                <div className="am-card-sub">{a.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="sec-block">
          <div className="how-wrap">
            <div className="sec-block-ttl" style={{textAlign:'center',marginBottom:4}}>Book a Bus in 3 Simple Steps</div>
            <div className="sec-block-sub" style={{textAlign:'center'}}>Fast, secure, and hassle-free</div>
            <div className="how-grid">
              {HOW_STEPS.map((s,i) => (
                <div key={i} className="how-step">
                  <div className="how-ico">
                    {s.ico}
                    <div className="how-num">{String(i+1).padStart(2,'0')}</div>
                  </div>
                  <div className="how-ttl">{s.ttl}</div>
                  <div className="how-sub">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="sec-block">
          <div className="sec-block-ttl">Frequently Asked Questions</div>
          <div className="sec-block-sub">Everything you need to know about bus booking</div>
          {FAQS.map((f,i) => (
            <div key={i} className="faq-item">
              <button className="faq-q" onClick={() => setOpenFaq(openFaq===i ? null : i)}>
                <span className="faq-qlbl">{f.q}</span>
                <span className={`faq-toggle ${openFaq===i?'open':''}`}>+</span>
              </button>
              {openFaq === i && <div className="faq-ans">{f.a}</div>}
            </div>
          ))}
        </div>

        {/* Bottom trust */}
        <div className="sec-block" style={{background:'linear-gradient(135deg,#f5f7fa,#e8f0fd)',borderRadius:18,padding:32,border:'1px solid var(--border)'}}>
          <div style={{textAlign:'center',marginBottom:20}}>
            <div style={{fontFamily:'Poppins,sans-serif',fontSize:20,fontWeight:800,marginBottom:4}}>India's Most Trusted Bus Booking Platform</div>
            <div style={{fontSize:13,color:'var(--t2)'}}>Partnered with 5,000+ operators across 30 states</div>
          </div>
          <div className="btrust-grid">
            {TRUST_BADGES.map((b,i) => (
              <div key={i} className="btrust-item">
                <span className="btrust-ico">{b.ico}</span>
                <div>
                  <div className="btrust-ttl">{b.ttl}</div>
                  <div className="btrust-sub">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}} @keyframes spin{to{transform:rotate(360deg)}} .animate-spin{animation:spin 0.8s linear infinite}`}</style>
    </div>
  );
};

export default BusSearchPage;