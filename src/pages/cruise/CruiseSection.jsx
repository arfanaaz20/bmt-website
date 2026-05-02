// // Cruises.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Search, Filter, Star, Calendar, MapPin, Ship, Users,
//   ChevronDown, ChevronUp, X, Heart, Share2, Check,
//   Globe, Award, Shield, CreditCard, HelpCircle,
//   Facebook, Twitter, Instagram, Youtube, ArrowRight,
//   Clock, Tag, Navigation, Info, ChevronRight, ExternalLink, CheckCircle
// } from 'lucide-react';

// const Cruises = () => {
//   const navigate = useNavigate();
//   const [selectedFilters, setSelectedFilters] = useState(['Dream Cruises']);
//   const [selectedDuration, setSelectedDuration] = useState('1-3 days');
//   const [showMoreFilters, setShowMoreFilters] = useState(false);
//   const [showMorePorts, setShowMorePorts] = useState(false);
//   const [sortBy, setSortBy] = useState('Best reviews');
//   const [likedCruises, setLikedCruises] = useState([]);

//   // Filter options
//   const durations = ['1-3 days', '4-6 days', '7-9 days', '10-11 days', '12-16 days', '17-33 days'];
//   const cruiseCompanies = ['Dream Cruises', 'Royal Caribbean', 'Carnival', 'MSC', 'Norwegian'];
//   const starRatings = ['5 stars', '4 stars', '3 stars', '2 stars and below'];
//   const voyageDates = ['Within 1 year', 'Within 3 years', 'Within 5 years'];
//   const productTypes = ['Cruise ticket', 'Cruise package'];
//   const packageInclusions = ['Hotel included', 'Round-trip flight ticket'];

//   // Cruise data with images - Single image per cruise
//  const cruises = [
//     {
//       id: 1,
//       name: 'Celestyal Journey',
//       title: '3-day - Singapore - Melaka - Singapore',
//       description: 'In Malacca, a city with diverse historical relics, see the colorful street scenes and feel the rich Nanyang charm.',
//       company: 'Dream Cruises',
//       ship: 'Genting Dream',
//       duration: '3 days',
//       embarkation: 'Singapore',
//       disembarkation: 'Singapore',
//       ports: ['Singapore', 'Melaka', 'Singapore'],
//       dates: ['Feb 25', 'Mar 1', 'Mar 11', 'Mar 15', 'Mar 22', 'Mar 29', 'Apr 5', 'Apr 12', 'Apr 26', 'May 3', 'May 10'],
//       reviews: 212,
//       booked: 3233,
//       price: '11,809',
//       originalPrice: '15,200',
//       discount: '4%',
//       type: 'Cruise ticket',
//       flashSale: true,
//       rating: 4.8,
//       image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=900&h=600&fit=crop',
//       featured: true,
//       highlights: ['Free Cancellation', 'All Inclusive', 'WiFi Included']
//     },
//     {
//       id: 2,
//       name: 'CenturyStar',
//       title: '2-day - Singapore - Ocean voyage - Melaka',
//       description: 'Embark in Singapore and disembark in Malacca. Experience the rich Nanyang style without going back.',
//       company: 'Dream Cruises',
//       ship: 'Genting Dream',
//       duration: '2 days',
//       embarkation: 'Singapore',
//       disembarkation: 'Melaka',
//       ports: ['Singapore', 'Ocean voyage', 'Melaka'],
//       dates: ['Mar 1', 'Mar 8', 'Apr 5', 'May 3', 'Jun 28', 'Jul 26', 'Aug 16', 'Oct 4', 'Nov 1', 'Dec 27'],
//       reviews: 212,
//       booked: 178,
//       price: '5,869',
//       originalPrice: '7,800',
//       discount: '4%',
//       type: 'Cruise ticket',
//       rating: 4.6,
//       image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=900&h=600&fit=crop',
//       highlights: ['Family Friendly', 'Kids Club', 'Swimming Pools']
//     },
//     {
//       id: 3,
//       name: 'Celestyal Discovery',
//       title: '3-day - Singapore - Ocean voyage - Singapore',
//       description: 'Get on board Singapore and experience the charm of the garden city and multiculturalism.',
//       company: 'Dream Cruises',
//       ship: 'Genting Dream',
//       duration: '3 days',
//       embarkation: 'Singapore',
//       disembarkation: 'Singapore',
//       ports: ['Singapore', 'Ocean voyage', 'Singapore'],
//       dates: ['Feb 20', 'Feb 27', 'Mar 6', 'Mar 13', 'Mar 20', 'Mar 27', 'Apr 3', 'Apr 10', 'Apr 17', 'Apr 24'],
//       reviews: 212,
//       booked: 1644,
//       price: '20,827',
//       originalPrice: '26,000',
//       discount: '4%',
//       type: 'Cruise package',
//       inclusions: ['Hotel included', 'Round-trip flight ticket'],
//       rating: 4.9,
//       featured: true,
//       image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&h=600&fit=crop',
//       highlights: ['Luxury Suite', 'Butler Service', 'Premium Dining']
//     },
//     {
//       id: 4,
//       name: 'Royal Caribbean',
//       title: '4-day - Singapore - Phuket - Singapore',
//       description: 'Experience Phuket\'s beautiful beaches, unique cuisine and rich Thai culture.',
//       company: 'Royal Caribbean',
//       ship: 'Symphony of the Seas',
//       duration: '4 days',
//       embarkation: 'Singapore',
//       disembarkation: 'Singapore',
//       ports: ['Singapore', 'Phuket', 'Singapore'],
//       dates: ['Mar 17', 'Mar 31', 'Apr 14', 'Apr 28', 'May 12', 'May 26', 'Jun 9', 'Jul 7', 'Jul 21', 'Aug 4'],
//       reviews: 456,
//       booked: 2560,
//       price: '24,763',
//       originalPrice: '32,000',
//       discount: '6%',
//       type: 'Cruise ticket',
//       rating: 4.7,
//       featured: true,
//       image: 'https://images.unsplash.com/photo-1544164559-0010837f8f63?w=900&h=600&fit=crop',
//       highlights: ['Rock Climbing', 'Surf Simulator', 'Ice Rink']
//     },
//     {
//       id: 5,
//       name: 'MSC Cruises',
//       title: '4-day - Singapore - Penang - Melaka - Singapore',
//       description: 'Experience the best of Malaysia with visits to Penang and Melaka.',
//       company: 'MSC',
//       ship: 'MSC Seashore',
//       duration: '4 days',
//       embarkation: 'Singapore',
//       disembarkation: 'Singapore',
//       ports: ['Singapore', 'Penang', 'Melaka', 'Singapore'],
//       dates: ['Mar 24', 'Apr 7', 'May 5', 'Jun 30', 'Jul 28', 'Aug 18', 'Oct 6', 'Nov 3', 'Dec 29'],
//       reviews: 312,
//       booked: 1570,
//       price: '24,763',
//       originalPrice: '31,500',
//       discount: '5%',
//       type: 'Cruise ticket',
//       rating: 4.5,
//       featured: true,
//       image: 'https://images.unsplash.com/photo-1500021804447-2ca2eaaaabeb?w=900&h=600&fit=crop',
//       highlights: ['Mediterranean Dining', 'Broadway Shows', 'Spa']
//     },
//     {
//       id: 6,
//       name: 'Norwegian',
//       title: '2-day - Melaka - Ocean voyage - Singapore',
//       description: 'Get on board in Malacca and get off in Singapore, experience the rich Nanyang style without going back.',
//       company: 'Norwegian',
//       ship: 'Norwegian Joy',
//       duration: '2 days',
//       embarkation: 'Melaka',
//       disembarkation: 'Singapore',
//       ports: ['Melaka', 'Ocean voyage', 'Singapore'],
//       dates: ['Mar 12', 'Apr 9', 'May 7', 'Jul 2', 'Jul 30', 'Aug 20', 'Oct 8', 'Nov 5', 'Dec 31'],
//       reviews: 189,
//       booked: 865,
//       price: '5,869',
//       originalPrice: '7,400',
//       discount: '3%',
//       type: 'Cruise ticket',
//       rating: 4.3,
//       image: 'https://images.unsplash.com/photo-1554254114-1928ade2606e?w=900&h=600&fit=crop',
//       highlights: ['FreeStyle Dining', 'Casino', 'Entertainment']
//     },
//     {
//       id: 7,
//       name: 'Carnival',
//       title: '3-day - Singapore - Port Klang (Kuala Lumpur) - Singapore',
//       description: 'Visit Kuala Lumpur through Port Klang and experience Malaysian culture.',
//       company: 'Carnival',
//       ship: 'Carnival Vista',
//       duration: '3 days',
//       embarkation: 'Singapore',
//       disembarkation: 'Singapore',
//       ports: ['Singapore', 'Port Klang (Kuala Lumpur)', 'Singapore'],
//       dates: ['Apr 19', 'May 17', 'Jun 14', 'Jul 12', 'Aug 30', 'Oct 18', 'Nov 15'],
//       reviews: 267,
//       booked: 1236,
//       price: '15,602',
//       originalPrice: '20,500',
//       discount: '4%',
//       type: 'Cruise ticket',
//       rating: 4.4,
//       image: 'https://images.unsplash.com/photo-1540759786422-c60d5ecd5707?w=900&h=600&fit=crop',
//       highlights: ['Water Park', 'Mini Golf', 'Comedy Club']
//     },
//     {
//       id: 8,
//       name: 'Princess Cruises',
//       title: '2-day - Singapore - Ocean voyage - Port Klang',
//       description: 'Short cruise from Singapore to Port Klang with ocean voyage experience.',
//       company: 'Princess',
//       ship: 'Majestic Princess',
//       duration: '2 days',
//       embarkation: 'Singapore',
//       disembarkation: 'Port Klang',
//       ports: ['Singapore', 'Ocean voyage', 'Port Klang'],
//       dates: ['Apr 19', 'May 17', 'Jun 14', 'Jul 12', 'Aug 30', 'Oct 18', 'Nov 15'],
//       reviews: 198,
//       booked: 908,
//       price: '6,227',
//       originalPrice: '8,100',
//       discount: '5%',
//       type: 'Cruise ticket',
//       rating: 4.2,
//       image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&h=600&fit=crop',
//       highlights: ['Movies Under Stars', 'Piazza', 'Sanctuary']
//     }
//   ];

//   const ports = ['Algeria', 'Angola', 'Benin', 'Luanda', 'Mindelo', 'Ain Sokhna', 'Singapore', 'Melaka', 'Phuket', 'Penang', 'Port Klang', 'Bali', 'Koh Samui', 'Redang Island', 'Bangkok'];

//   const removeFilter = (filter) => {
//     setSelectedFilters(selectedFilters.filter(f => f !== filter));
//   };

//   const clearAllFilters = () => {
//     setSelectedFilters([]);
//   };

//   const sortOptions = ['Best reviews', 'Sales (high to low)', 'Price (low to high)', 'Price (high to low)'];

//   const toggleLike = (cruiseId) => {
//     if (likedCruises.includes(cruiseId)) {
//       setLikedCruises(likedCruises.filter(id => id !== cruiseId));
//     } else {
//       setLikedCruises([...likedCruises, cruiseId]);
//     }
//   };

//   const handleViewDetails = (cruiseId) => {
//     navigate(`/cruise/${cruiseId}`);
//   };

//   const handleSeeAvailability = (cruiseId) => {
//     navigate(`/cruise/${cruiseId}/availability`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 text-sm">
      

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-3 py-4">
//         {/* Search Filters */}
//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 mb-6">
//           <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
//             <Search className="w-5 h-5 text-blue-600" />
//             Find Your Perfect Cruise
//           </h2>
          
//           {/* Search Inputs Row */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
//             {/* Departure City */}
//             <div className="relative group">
//               <label className="block text-xs font-semibold text-gray-700 mb-1.5 pl-1">
//                 Departure city
//               </label>
//               <div className="relative">
//                 <select className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white appearance-none cursor-pointer transition-all duration-200 hover:border-blue-400 focus:shadow-md">
//                   <option value="">All departure cities</option>
//                   <option value="singapore">Singapore</option>
//                   <option value="melaka">Melaka</option>
//                   <option value="port-klang">Port Klang</option>
//                   <option value="bangkok">Bangkok</option>
//                   <option value="phuket">Phuket</option>
//                 </select>
//                 <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                   <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" />
//                 </div>
//                 <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                   <MapPin className="w-4 h-4 text-blue-500" />
//                 </div>
//               </div>
//             </div>
            
//             {/* Destination */}
//             <div className="relative group">
//               <label className="block text-xs font-semibold text-gray-700 mb-1.5 pl-1">
//                 Destination
//               </label>
//               <div className="relative">
//                 <select className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white appearance-none cursor-pointer transition-all duration-200 hover:border-blue-400 focus:shadow-md">
//                   <option value="">All destinations</option>
//                   <option value="southeast-asia">Southeast Asia</option>
//                   <option value="mediterranean">Mediterranean</option>
//                   <option value="caribbean">Caribbean</option>
//                   <option value="baltic">Baltic Sea</option>
//                   <option value="alaska">Alaska</option>
//                   <option value="australia">Australia & New Zealand</option>
//                 </select>
//                 <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                   <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" />
//                 </div>
//                 <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                   <Globe className="w-4 h-4 text-blue-500" />
//                 </div>
//               </div>
//             </div>
            
//             {/* Departure Month */}
//             <div className="relative group">
//               <label className="block text-xs font-semibold text-gray-700 mb-1.5 pl-1">
//                 Departure month
//               </label>
//               <div className="relative">
//                 <select className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white appearance-none cursor-pointer transition-all duration-200 hover:border-blue-400 focus:shadow-md">
//                   <option value="">All departure months</option>
//                   <option value="feb-2026">February 2026</option>
//                   <option value="mar-2026">March 2026</option>
//                   <option value="apr-2026">April 2026</option>
//                   <option value="may-2026">May 2026</option>
//                   <option value="jun-2026">June 2026</option>
//                   <option value="jul-2026">July 2026</option>
//                   <option value="aug-2026">August 2026</option>
//                   <option value="sep-2026">September 2026</option>
//                   <option value="oct-2026">October 2026</option>
//                 </select>
//                 <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                   <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" />
//                 </div>
//                 <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                   <Calendar className="w-4 h-4 text-blue-500" />
//                 </div>
//               </div>
//             </div>
            
//             {/* Cruise Duration */}
//             <div className="relative group">
//               <label className="block text-xs font-semibold text-gray-700 mb-1.5 pl-1">
//                 Cruise duration
//               </label>
//               <div className="relative">
//                 <select 
//                   className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white appearance-none cursor-pointer transition-all duration-200 hover:border-blue-400 focus:shadow-md"
//                   value={selectedDuration}
//                   onChange={(e) => setSelectedDuration(e.target.value)}
//                 >
//                   {durations.map((duration) => (
//                     <option key={duration} value={duration}>{duration}</option>
//                   ))}
//                 </select>
//                 <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                   <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" />
//                 </div>
//                 <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                   <Clock className="w-4 h-4 text-blue-500" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Advanced Search Toggle */}
//           <div className="mb-4">
//             <button className="text-blue-600 hover:text-blue-800 font-medium text-xs flex items-center gap-1 transition-colors">
//               <Filter className="w-3 h-3" />
//               Advanced search options
//               <ChevronDown className="w-3 h-3" />
//             </button>
//           </div>

//           {/* Search Button */}
//           <div className="flex justify-end">
//             <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3.5 px-8 rounded-xl flex items-center gap-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg">
//               <Search className="w-4 h-4" />
//               Search Cruises
//             </button>
//           </div>

//           {/* Selected Filters Chips */}
//           {selectedFilters.length > 0 && (
//             <div className="mt-5 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
//               <div className="flex flex-wrap items-center gap-2">
//                 <div className="flex items-center gap-2">
//                   <Filter className="w-3.5 h-3.5 text-blue-600" />
//                   <span className="text-gray-700 font-semibold text-xs">Active filters:</span>
//                 </div>
                
//                 {selectedFilters.map((filter) => (
//                   <div 
//                     key={filter} 
//                     className="inline-flex items-center bg-white border border-blue-300 rounded-full pl-3 pr-2 py-1.5 group hover:border-blue-500 transition-all duration-200"
//                   >
//                     <span className="text-xs font-medium text-gray-800 mr-1.5">{filter}</span>
//                     <button 
//                       onClick={() => removeFilter(filter)}
//                       className="w-5 h-5 rounded-full bg-blue-100 hover:bg-red-100 flex items-center justify-center transition-colors group-hover:text-red-600"
//                     >
//                       <X className="w-2.5 h-2.5 text-gray-500 group-hover:text-red-600" />
//                     </button>
//                   </div>
//                 ))}
                
//                 <button 
//                   onClick={clearAllFilters}
//                   className="ml-auto text-blue-700 hover:text-blue-900 font-semibold text-xs flex items-center gap-1 transition-colors"
//                 >
//                   <X className="w-3 h-3" />
//                   Clear all filters
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Quick Filter Tags */}
//           <div className="mt-4 pt-4 border-t border-gray-100">
//             <div className="flex flex-wrap items-center gap-2">
//               <span className="text-xs font-semibold text-gray-600">Popular filters:</span>
//               {['Free Cancellation', 'All Inclusive', 'Family Friendly', 'Luxury', 'Last Minute Deals', 'New Ships'].map((tag) => (
//                 <button
//                   key={tag}
//                   className="px-3 py-1.5 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-xs font-medium rounded-full border border-gray-200 hover:border-blue-300 transition-all duration-200"
//                 >
//                   {tag}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-4">
//           {/* Left Sidebar - Filters */}
//           <div className="lg:w-1/4">
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-4">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-sm font-bold text-gray-900">Filters</h3>
//                 <Filter className="w-4 h-4 text-gray-500" />
//               </div>

//               {/* Cruise Name */}
//               <div className="mb-6">
//                 <h4 className="font-bold text-gray-800 mb-2 text-xs">Cruise name</h4>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Search cruise name"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                   <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                 </div>
//                 <button className="mt-1 text-blue-600 hover:text-blue-800 text-xs">
//                   Clear
//                 </button>
//               </div>

//               {/* Duration Filter */}
//               <div className="mb-6">
//                 <h4 className="font-bold text-gray-800 mb-2 text-xs">Duration (days)</h4>
//                 <div className="flex flex-wrap gap-1">
//                   {durations.map((duration) => (
//                     <button
//                       key={duration}
//                       onClick={() => setSelectedDuration(duration)}
//                       className={`px-3 py-1.5 rounded-lg border text-xs transition-colors ${
//                         selectedDuration === duration
//                           ? 'bg-blue-600 text-white border-blue-600'
//                           : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
//                       }`}
//                     >
//                       {duration}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Ports of Call */}
//               <div className="mb-6">
//                 <div className="flex justify-between items-center mb-2">
//                   <h4 className="font-bold text-gray-800 text-xs">Ports of call</h4>
//                   <button
//                     onClick={() => setShowMorePorts(!showMorePorts)}
//                     className="text-blue-600 hover:text-blue-800 text-xs"
//                   >
//                     {showMorePorts ? 'Show less' : 'Show more >'}
//                   </button>
//                 </div>
//                 <div className="space-y-1">
//                   {ports.slice(0, showMorePorts ? ports.length : 6).map((port) => (
//                     <div key={port} className="flex items-center">
//                       <input type="checkbox" id={`port-${port}`} className="rounded text-blue-600 w-3.5 h-3.5" />
//                       <label htmlFor={`port-${port}`} className="ml-2 text-gray-700 text-xs cursor-pointer">
//                         {port}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Embarkation & Disembarkation */}
//               <div className="mb-6">
//                 <h4 className="font-bold text-gray-800 mb-2 text-xs">Embarkation city</h4>
//                 <div className="space-y-1">
//                   {['Singapore', 'Melaka', 'Port Klang', 'Luanda', 'Mindelo', 'Ain Sokhna'].map((city) => (
//                     <div key={city} className="flex items-center">
//                       <input type="checkbox" id={`embark-${city}`} className="rounded text-blue-600 w-3.5 h-3.5" />
//                       <label htmlFor={`embark-${city}`} className="ml-2 text-gray-700 text-xs cursor-pointer">
//                         {city}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Show More Filters */}
//               <button
//                 onClick={() => setShowMoreFilters(!showMoreFilters)}
//                 className="w-full py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center text-xs transition-colors"
//               >
//                 {showMoreFilters ? (
//                   <>
//                     <ChevronUp className="w-4 h-4 mr-1" />
//                     Show less filters
//                   </>
//                 ) : (
//                   <>
//                     <ChevronDown className="w-4 h-4 mr-1" />
//                     Show more filters
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Main Content - Cruise Listings */}
//           <div className="lg:w-3/4">
//             {/* Sort and Results Header */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
//               <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
//                 <div>
//                   <h2 className="text-lg font-bold text-gray-900">Cruise Results</h2>
//                   <p className="text-gray-600 text-xs mt-0.5">Showing {cruises.length} of 193 cruises</p>
//                 </div>
                
//                 <div className="flex items-center space-x-2 mt-2 md:mt-0">
//                   <span className="text-gray-700 font-medium text-xs">Sort by:</span>
//                   <div className="flex flex-wrap gap-1">
//                     {sortOptions.map((option) => (
//                       <button
//                         key={option}
//                         onClick={() => setSortBy(option)}
//                         className={`px-3 py-1.5 rounded-lg border text-xs transition-colors ${
//                           sortBy === option
//                             ? 'bg-blue-600 text-white border-blue-600'
//                             : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
//                         }`}
//                       >
//                         {option}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* CNY Flash Sales Banner */}
//               <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-3 mb-4">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <div className="bg-white text-red-600 font-bold px-2 py-0.5 rounded text-xs mr-2">
//                       CNY
//                     </div>
//                     <div>
//                       <h3 className="text-white font-bold text-sm">Flash Sales</h3>
//                       <p className="text-white text-xs opacity-90">Limited time offers ending soon!</p>
//                     </div>
//                   </div>
//                   <button 
//                     onClick={() => navigate('/flash-sales')}
//                     className="bg-white text-red-600 font-bold px-3 py-1 rounded text-xs hover:bg-gray-100 transition-colors"
//                   >
//                     View All Deals
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Cruise Listings */}
//             <div className="space-y-5">
//               {cruises.map((cruise) => (
//                 <div key={cruise.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
//                   <div className="p-5">
//                     <div className="flex flex-col lg:flex-row lg:items-start gap-5">
//                       {/* Cruise Image Section - Larger */}
//                       <div className="lg:w-2/5">
//                         <div className="relative rounded-xl overflow-hidden h-64 lg:h-80">
//                           <img
//                             src={cruise.image}
//                             alt={cruise.name}
//                             className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                          
//                           {/* Top Badges */}
//                           <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
//                             <div className="flex flex-col gap-1">
//                               {cruise.flashSale && (
//                                 <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
//                                   Flash Sale
//                                 </div>
//                               )}
//                               {cruise.featured && (
//                                 <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
//                                   Featured
//                                 </div>
//                               )}
//                             </div>
                            
//                             {/* Like Button */}
//                             <button 
//                               onClick={() => toggleLike(cruise.id)}
//                               className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors shadow-md"
//                             >
//                               <Heart 
//                                 className={`w-5 h-5 ${
//                                   likedCruises.includes(cruise.id) 
//                                     ? 'text-red-500 fill-red-500' 
//                                     : 'text-gray-600'
//                                 }`}
//                               />
//                             </button>
//                           </div>
                          
//                           {/* Bottom Info */}
//                           <div className="absolute bottom-4 left-4 right-4">
//                             <div className="flex items-start justify-between">
//                               <div>
//                                 <h3 className="text-white font-bold text-lg">{cruise.name}</h3>
//                                 <div className="flex items-center mt-1">
//                                   <div className="flex items-center">
//                                     {[...Array(5)].map((_, i) => (
//                                       <Star 
//                                         key={i} 
//                                         className={`w-3.5 h-3.5 ${
//                                           i < Math.floor(cruise.rating)
//                                             ? 'text-yellow-400 fill-yellow-400'
//                                             : 'text-gray-300'
//                                         }`}
//                                       />
//                                     ))}
//                                   </div>
//                                   <span className="ml-1 text-white font-bold text-sm">{cruise.rating}</span>
//                                   <span className="mx-2 text-white text-xs">•</span>
//                                   <span className="text-white opacity-90 text-xs">{cruise.reviews} reviews</span>
//                                 </div>
//                               </div>
//                               <div className="bg-black/80 text-white text-sm font-bold px-3 py-1 rounded-lg">
//                                 {cruise.discount} OFF
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Cruise Highlights */}
//                         <div className="mt-4">
//                           <div className="flex flex-wrap gap-2">
//                             {cruise.highlights?.slice(0, 3).map((highlight, idx) => (
//                               <div key={idx} className="flex items-center bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-lg">
//                                 <CheckCircle className="w-3 h-3 mr-1" />
//                                 {highlight}
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>

//                       {/* Cruise Details - Better Layout */}
//                       <div className="lg:w-3/5">
//                         <div className="mb-4">
//                           <h4 className="font-bold text-gray-900 text-base mb-2">{cruise.title}</h4>
//                           <p className="text-gray-600 text-sm mb-3 leading-relaxed">{cruise.description}</p>
                          
//                           <div className="flex flex-wrap items-center gap-2 mb-3">
//                             <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-lg">
//                               {cruise.type}
//                             </span>
//                             {cruise.inclusions?.map((incl, idx) => (
//                               <span key={idx} className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-lg">
//                                 ✓ {incl}
//                               </span>
//                             ))}
//                           </div>
                          
//                           {/* Cruise Info Icons */}
//                           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
//                             <div className="flex items-center p-2 bg-gray-50 rounded-lg">
//                               <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
//                                 <Ship className="w-4 h-4 text-blue-600" />
//                               </div>
//                               <div>
//                                 <div className="text-xs text-gray-500">Cruise Line</div>
//                                 <div className="text-sm font-semibold text-gray-800">{cruise.company}</div>
//                               </div>
//                             </div>
                            
//                             <div className="flex items-center p-2 bg-gray-50 rounded-lg">
//                               <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
//                                 <Clock className="w-4 h-4 text-blue-600" />
//                               </div>
//                               <div>
//                                 <div className="text-xs text-gray-500">Duration</div>
//                                 <div className="text-sm font-semibold text-gray-800">{cruise.duration}</div>
//                               </div>
//                             </div>
                            
//                             <div className="flex items-center p-2 bg-gray-50 rounded-lg">
//                               <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
//                                 <MapPin className="w-4 h-4 text-blue-600" />
//                               </div>
//                               <div>
//                                 <div className="text-xs text-gray-500">From</div>
//                                 <div className="text-sm font-semibold text-gray-800">{cruise.embarkation}</div>
//                               </div>
//                             </div>
                            
//                             <div className="flex items-center p-2 bg-gray-50 rounded-lg">
//                               <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
//                                 <Users className="w-4 h-4 text-blue-600" />
//                               </div>
//                               <div>
//                                 <div className="text-xs text-gray-500">Booked</div>
//                                 <div className="text-sm font-semibold text-gray-800">{cruise.booked.toLocaleString()}+</div>
//                               </div>
//                             </div>
//                           </div>
                          
//                           {/* Departure Dates */}
//                           <div className="mb-4">
//                             <h5 className="font-bold text-gray-800 text-sm mb-2 flex items-center">
//                               <Calendar className="w-4 h-4 mr-2" />
//                               Departure Dates:
//                             </h5>
//                             <div className="flex flex-wrap gap-2">
//                               {cruise.dates.slice(0, 6).map((date, idx) => (
//                                 <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium">
//                                   {date}
//                                 </span>
//                               ))}
//                               {cruise.dates.length > 6 && (
//                                 <button 
//                                   onClick={() => navigate(`/cruise/${cruise.id}/dates`)}
//                                   className="text-blue-600 hover:text-blue-800 font-semibold text-xs"
//                                 >
//                                   +{cruise.dates.length - 6} more dates
//                                 </button>
//                               )}
//                             </div>
//                           </div>
                          
//                           {/* Ports of Call */}
//                           <div className="mb-4">
//                             <h5 className="font-bold text-gray-800 text-sm mb-2">Ports of Call:</h5>
//                             <div className="flex flex-wrap items-center gap-2">
//                               {cruise.ports.map((port, idx) => (
//                                 <React.Fragment key={idx}>
//                                   <div className="flex items-center">
//                                     <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                                     <span className="ml-2 text-gray-700 text-sm font-medium">{port}</span>
//                                   </div>
//                                   {idx < cruise.ports.length - 1 && (
//                                     <ArrowRight className="w-4 h-4 text-gray-400" />
//                                   )}
//                                 </React.Fragment>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
                        
//                         {/* Price and Booking Section */}
//                         <div className="border-t pt-4">
//                           <div className="flex flex-col md:flex-row md:items-center justify-between">
//                             <div>
//                               <div className="flex items-baseline mb-1">
//                                 <span className="text-2xl font-bold text-gray-900">₹ {cruise.price}</span>
//                                 <span className="ml-2 text-gray-400 line-through text-sm">₹ {cruise.originalPrice}</span>
//                                 <span className="ml-2 text-green-600 font-bold text-sm">Save ₹ {(parseInt(cruise.originalPrice.replace(/,/g, '')) - parseInt(cruise.price.replace(/,/g, ''))).toLocaleString()}</span>
//                               </div>
//                               <div className="text-gray-500 text-xs">per person (including port fee)</div>
//                               <div className="flex items-center mt-1">
//                                 <Check className="w-3 h-3 text-green-500 mr-1" />
//                                 <span className="text-green-600 font-medium text-xs">All taxes and fees included</span>
//                               </div>
//                             </div>
                            
//                             <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
//                               <button 
//                                 onClick={() => handleViewDetails(cruise.id)}
//                                 className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors flex items-center justify-center shadow-md hover:shadow-lg"
//                               >
//                                 View Details
//                                 <ChevronRight className="w-4 h-4 ml-2" />
//                               </button>
                              
                            
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* No More Results */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center mt-6">
//               <Ship className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//               <h3 className="text-lg font-bold text-gray-700 mb-2">No more results</h3>
//               <p className="text-gray-600 text-sm mb-4">You've reached the end of available cruises</p>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl text-sm transition-colors shadow-md hover:shadow-lg">
//                 Load More Cruises
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>

    

//       {/* Add CSS for better dropdown styling */}
//       <style jsx>{`
//         select {
//           padding-left: 2.5rem !important;
//           padding-right: 2rem !important;
//           background-image: none !important;
//         }
        
//         select:focus {
//           outline: none;
//           box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
//         }
        
//         /* Remove default arrow in Firefox */
//         select {
//           -moz-appearance: none;
//           -webkit-appearance: none;
//         }
        
//         /* For IE */
//         select::-ms-expand {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Cruises;
























// Cruises.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search, Filter, Star, Calendar, MapPin, Ship, Users,
  ChevronDown, ChevronUp, X, Heart, Share2, Check,
  Globe, Award, Shield, CreditCard, HelpCircle,
  Facebook, Twitter, Instagram, Youtube, ArrowRight,
  Clock, Tag, Navigation, Info, ChevronRight, ExternalLink, CheckCircle,
  Anchor, Compass, Waves
} from 'lucide-react';

const Cruises = () => {
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState(['Dream Cruises']);
  const [selectedDuration, setSelectedDuration] = useState('1-3 days');
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [showMorePorts, setShowMorePorts] = useState(false);
  const [sortBy, setSortBy] = useState('Best reviews');
  const [likedCruises, setLikedCruises] = useState([]);
  const [activeTab, setActiveTab] = useState('roundtrip');

  const durations = ['1-3 days', '4-6 days', '7-9 days', '10-11 days', '12-16 days', '17-33 days'];
  const cruiseCompanies = ['Dream Cruises', 'Royal Caribbean', 'Carnival', 'MSC', 'Norwegian'];
  const starRatings = ['5 stars', '4 stars', '3 stars', '2 stars and below'];
  const voyageDates = ['Within 1 year', 'Within 3 years', 'Within 5 years'];
  const productTypes = ['Cruise ticket', 'Cruise package'];
  const packageInclusions = ['Hotel included', 'Round-trip flight ticket'];

  const cruises = [
    {
      id: 1,
      name: 'Celestyal Journey',
      title: '3-day - Singapore - Melaka - Singapore',
      description: 'In Malacca, a city with diverse historical relics, see the colorful street scenes and feel the rich Nanyang charm.',
      company: 'Dream Cruises',
      ship: 'Genting Dream',
      duration: '3 days',
      embarkation: 'Singapore',
      disembarkation: 'Singapore',
      ports: ['Singapore', 'Melaka', 'Singapore'],
      dates: ['Feb 25', 'Mar 1', 'Mar 11', 'Mar 15', 'Mar 22', 'Mar 29', 'Apr 5', 'Apr 12', 'Apr 26', 'May 3', 'May 10'],
      reviews: 212,
      booked: 3233,
      price: '11,809',
      originalPrice: '15,200',
      discount: '4%',
      type: 'Cruise ticket',
      flashSale: true,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=900&h=600&fit=crop',
      featured: true,
      highlights: ['Free Cancellation', 'All Inclusive', 'WiFi Included']
    },
    {
      id: 2,
      name: 'CenturyStar',
      title: '2-day - Singapore - Ocean voyage - Melaka',
      description: 'Embark in Singapore and disembark in Malacca. Experience the rich Nanyang style without going back.',
      company: 'Dream Cruises',
      ship: 'Genting Dream',
      duration: '2 days',
      embarkation: 'Singapore',
      disembarkation: 'Melaka',
      ports: ['Singapore', 'Ocean voyage', 'Melaka'],
      dates: ['Mar 1', 'Mar 8', 'Apr 5', 'May 3', 'Jun 28', 'Jul 26', 'Aug 16', 'Oct 4', 'Nov 1', 'Dec 27'],
      reviews: 212,
      booked: 178,
      price: '5,869',
      originalPrice: '7,800',
      discount: '4%',
      type: 'Cruise ticket',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=900&h=600&fit=crop',
      highlights: ['Family Friendly', 'Kids Club', 'Swimming Pools']
    },
    {
      id: 3,
      name: 'Celestyal Discovery',
      title: '3-day - Singapore - Ocean voyage - Singapore',
      description: 'Get on board Singapore and experience the charm of the garden city and multiculturalism.',
      company: 'Dream Cruises',
      ship: 'Genting Dream',
      duration: '3 days',
      embarkation: 'Singapore',
      disembarkation: 'Singapore',
      ports: ['Singapore', 'Ocean voyage', 'Singapore'],
      dates: ['Feb 20', 'Feb 27', 'Mar 6', 'Mar 13', 'Mar 20', 'Mar 27', 'Apr 3', 'Apr 10', 'Apr 17', 'Apr 24'],
      reviews: 212,
      booked: 1644,
      price: '20,827',
      originalPrice: '26,000',
      discount: '4%',
      type: 'Cruise package',
      inclusions: ['Hotel included', 'Round-trip flight ticket'],
      rating: 4.9,
      featured: true,
      image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=900&h=600&fit=crop',
      highlights: ['Luxury Suite', 'Butler Service', 'Premium Dining']
    },
    {
      id: 4,
      name: 'Royal Caribbean',
      title: '4-day - Singapore - Phuket - Singapore',
      description: "Experience Phuket's beautiful beaches, unique cuisine and rich Thai culture.",
      company: 'Royal Caribbean',
      ship: 'Symphony of the Seas',
      duration: '4 days',
      embarkation: 'Singapore',
      disembarkation: 'Singapore',
      ports: ['Singapore', 'Phuket', 'Singapore'],
      dates: ['Mar 17', 'Mar 31', 'Apr 14', 'Apr 28', 'May 12', 'May 26', 'Jun 9', 'Jul 7', 'Jul 21', 'Aug 4'],
      reviews: 456,
      booked: 2560,
      price: '24,763',
      originalPrice: '32,000',
      discount: '6%',
      type: 'Cruise ticket',
      rating: 4.7,
      featured: true,
      image: 'https://images.unsplash.com/photo-1544164559-0010837f8f63?w=900&h=600&fit=crop',
      highlights: ['Rock Climbing', 'Surf Simulator', 'Ice Rink']
    },
    {
      id: 5,
      name: 'MSC Cruises',
      title: '4-day - Singapore - Penang - Melaka - Singapore',
      description: 'Experience the best of Malaysia with visits to Penang and Melaka.',
      company: 'MSC',
      ship: 'MSC Seashore',
      duration: '4 days',
      embarkation: 'Singapore',
      disembarkation: 'Singapore',
      ports: ['Singapore', 'Penang', 'Melaka', 'Singapore'],
      dates: ['Mar 24', 'Apr 7', 'May 5', 'Jun 30', 'Jul 28', 'Aug 18', 'Oct 6', 'Nov 3', 'Dec 29'],
      reviews: 312,
      booked: 1570,
      price: '24,763',
      originalPrice: '31,500',
      discount: '5%',
      type: 'Cruise ticket',
      rating: 4.5,
      featured: true,
      image: 'https://images.unsplash.com/photo-1500021804447-2ca2eaaaabeb?w=900&h=600&fit=crop',
      highlights: ['Mediterranean Dining', 'Broadway Shows', 'Spa']
    },
    {
      id: 6,
      name: 'Norwegian',
      title: '2-day - Melaka - Ocean voyage - Singapore',
      description: 'Get on board in Malacca and get off in Singapore, experience the rich Nanyang style without going back.',
      company: 'Norwegian',
      ship: 'Norwegian Joy',
      duration: '2 days',
      embarkation: 'Melaka',
      disembarkation: 'Singapore',
      ports: ['Melaka', 'Ocean voyage', 'Singapore'],
      dates: ['Mar 12', 'Apr 9', 'May 7', 'Jul 2', 'Jul 30', 'Aug 20', 'Oct 8', 'Nov 5', 'Dec 31'],
      reviews: 189,
      booked: 865,
      price: '5,869',
      originalPrice: '7,400',
      discount: '3%',
      type: 'Cruise ticket',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1554254114-1928ade2606e?w=900&h=600&fit=crop',
      highlights: ['FreeStyle Dining', 'Casino', 'Entertainment']
    },
    {
      id: 7,
      name: 'Carnival',
      title: '3-day - Singapore - Port Klang (Kuala Lumpur) - Singapore',
      description: 'Visit Kuala Lumpur through Port Klang and experience Malaysian culture.',
      company: 'Carnival',
      ship: 'Carnival Vista',
      duration: '3 days',
      embarkation: 'Singapore',
      disembarkation: 'Singapore',
      ports: ['Singapore', 'Port Klang (Kuala Lumpur)', 'Singapore'],
      dates: ['Apr 19', 'May 17', 'Jun 14', 'Jul 12', 'Aug 30', 'Oct 18', 'Nov 15'],
      reviews: 267,
      booked: 1236,
      price: '15,602',
      originalPrice: '20,500',
      discount: '4%',
      type: 'Cruise ticket',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1540759786422-c60d5ecd5707?w=900&h=600&fit=crop',
      highlights: ['Water Park', 'Mini Golf', 'Comedy Club']
    },
    {
      id: 8,
      name: 'Princess Cruises',
      title: '2-day - Singapore - Ocean voyage - Port Klang',
      description: 'Short cruise from Singapore to Port Klang with ocean voyage experience.',
      company: 'Princess',
      ship: 'Majestic Princess',
      duration: '2 days',
      embarkation: 'Singapore',
      disembarkation: 'Port Klang',
      ports: ['Singapore', 'Ocean voyage', 'Port Klang'],
      dates: ['Apr 19', 'May 17', 'Jun 14', 'Jul 12', 'Aug 30', 'Oct 18', 'Nov 15'],
      reviews: 198,
      booked: 908,
      price: '6,227',
      originalPrice: '8,100',
      discount: '5%',
      type: 'Cruise ticket',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&h=600&fit=crop',
      highlights: ['Movies Under Stars', 'Piazza', 'Sanctuary']
    }
  ];

  const ports = ['Algeria', 'Angola', 'Benin', 'Luanda', 'Mindelo', 'Ain Sokhna', 'Singapore', 'Melaka', 'Phuket', 'Penang', 'Port Klang', 'Bali', 'Koh Samui', 'Redang Island', 'Bangkok'];

  const removeFilter = (filter) => setSelectedFilters(selectedFilters.filter(f => f !== filter));
  const clearAllFilters = () => setSelectedFilters([]);
  const sortOptions = ['Best reviews', 'Sales (high to low)', 'Price (low to high)', 'Price (high to low)'];

  const toggleLike = (cruiseId) => {
    if (likedCruises.includes(cruiseId)) {
      setLikedCruises(likedCruises.filter(id => id !== cruiseId));
    } else {
      setLikedCruises([...likedCruises, cruiseId]);
    }
  };

  const handleViewDetails = (cruiseId) => navigate(`/cruise/${cruiseId}`);

  return (
    <div className="min-h-screen bg-gray-50 text-sm">

      {/* ═══════════════════════════════════════════
          HERO SECTION — cruise style like cab reference
      ═══════════════════════════════════════════ */}
      <div className="relative overflow-hidden" style={{ minHeight: '520px' }}>
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1600&h=800&fit=crop')`,
          }}
        />
        {/* Gradient overlay — blue-purple like the reference */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(15,23,80,0.82) 0%, rgba(59,42,120,0.75) 50%, rgba(180,30,60,0.65) 100%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-10 pb-0">
          {/* Stats pill — top center like reference */}
          <div className="flex justify-center mb-6">
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-medium border border-white/30"
              style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}
            >
              <Anchor className="w-4 h-4 text-yellow-300" />
              <span>500+ Verified Cruise Lines &nbsp;·&nbsp; 2,000+ Routes Worldwide</span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-2">
              Book Cruise{' '}
              <span style={{ color: '#FFD234', fontStyle: 'italic' }}>Online</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg">
              Best prices &nbsp;·&nbsp; Verified operators &nbsp;·&nbsp; Instant e-ticket &nbsp;·&nbsp; Zero booking fee
            </p>
          </div>

          {/* Tab switcher — Roundtrip / One-way / Multi-city */}
          <div className="flex justify-center gap-2 mb-5">
            {['Round Trip', 'One Way', 'Multi-City'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().replace(' ', ''))}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                  activeTab === tab.toLowerCase().replace(' ', '')
                    ? 'text-white shadow-lg'
                    : 'bg-white/15 text-white/80 hover:bg-white/25 border border-white/25'
                }`}
                style={
                  activeTab === tab.toLowerCase().replace(' ', '')
                    ? { background: '#E53E3E' }
                    : {}
                }
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Card */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50">
                <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer select-none">
                  <input type="checkbox" className="rounded" />
                  Drop off at a different port
                </label>
                <span className="text-xs text-gray-500">Passengers: 1–9 &nbsp;|&nbsp; Cruise Line: All</span>
              </div>

              {/* Fields row */}
              <div className="flex flex-col md:flex-row items-stretch">
                {/* FROM */}
                <div className="flex-1 px-5 py-4 border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">From</div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <select className="w-full text-sm text-gray-700 bg-transparent border-none outline-none cursor-pointer font-medium">
                      <option value="">Select departure port...</option>
                      <option>Singapore</option>
                      <option>Mumbai</option>
                      <option>Bali</option>
                      <option>Bangkok</option>
                      <option>Dubai</option>
                    </select>
                  </div>
                </div>

                {/* TO */}
                <div className="flex-1 px-5 py-4 border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">To</div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <select className="w-full text-sm text-gray-700 bg-transparent border-none outline-none cursor-pointer font-medium">
                      <option value="">Destination port...</option>
                      <option>Maldives</option>
                      <option>Phuket</option>
                      <option>Melaka</option>
                      <option>Penang</option>
                      <option>Darwin</option>
                    </select>
                  </div>
                </div>

                {/* DATE */}
                <div className="flex-1 px-5 py-4 border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Departure</div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <input
                      type="month"
                      className="w-full text-sm text-gray-700 bg-transparent border-none outline-none cursor-pointer font-medium"
                      placeholder="Select month"
                    />
                  </div>
                </div>

                {/* PASSENGERS */}
                <div className="flex-1 px-5 py-4 border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Passengers</div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <button className="w-7 h-7 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-red-400 font-bold">−</button>
                    <span className="text-base font-bold text-gray-800 w-4 text-center">1</span>
                    <button className="w-7 h-7 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-red-400 font-bold">+</button>
                  </div>
                </div>

                {/* SEARCH BUTTON */}
                <button
                  className="flex items-center justify-center gap-2 px-8 py-4 text-white font-bold text-base transition-all duration-200 hover:opacity-90 active:scale-95 min-w-[140px]"
                  style={{ background: 'linear-gradient(135deg, #E53E3E, #C53030)' }}
                >
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Popular routes quick chips */}
          <div className="max-w-5xl mx-auto mt-5 pb-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">Popular Routes:</span>
              {['Singapore → Bali', 'Mumbai → Maldives', 'Dubai → Med', 'Singapore → Phuket', 'Bali → Darwin'].map((route) => (
                <button
                  key={route}
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-white/90 border border-white/25 hover:bg-white/20 transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.10)' }}
                >
                  {route}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="relative z-10 -mb-1">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '60px' }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f9fafb" />
          </svg>
        </div>
      </div>
      {/* ═══════════════ END HERO ═══════════════ */}

      {/* Trust Badges row */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { icon: <Shield className="w-4 h-4 text-green-600" />, label: 'Secure Booking' },
              { icon: <Award className="w-4 h-4 text-blue-600" />, label: 'Best Price Guarantee' },
              { icon: <Check className="w-4 h-4 text-purple-600" />, label: 'Instant Confirmation' },
              { icon: <Users className="w-4 h-4 text-orange-500" />, label: '50,000+ Happy Cruisers' },
              { icon: <CreditCard className="w-4 h-4 text-red-500" />, label: 'Zero Booking Fee' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 py-6">

        {/* Popular Cruise Routes Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">
              Popular <span className="text-red-600">Cruise Routes</span>
            </h2>
            <button className="text-red-600 font-semibold text-sm hover:text-red-700 flex items-center gap-1">
              View all routes <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Region tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            {['Southeast Asia', 'Mediterranean', 'Caribbean', 'Middle East', 'Pacific Islands'].map((region, i) => (
              <button
                key={region}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  i === 0
                    ? 'text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-red-300 hover:text-red-600'
                }`}
                style={i === 0 ? { background: '#E53E3E' } : {}}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Route cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { from: 'Singapore', to: 'Bali', price: '₹11,809', duration: '5 days', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=250&fit=crop' },
              { from: 'Mumbai', to: 'Maldives', price: '₹24,500', duration: '7 days', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop' },
              { from: 'Singapore', to: 'Phuket', price: '₹15,200', duration: '4 days', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=250&fit=crop' },
              { from: 'Dubai', to: 'Mediterranean', price: '₹45,000', duration: '10 days', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop' },
            ].map((route, i) => (
              <button
                key={i}
                className="relative rounded-xl overflow-hidden group cursor-pointer text-left"
                style={{ height: '130px' }}
              >
                <img src={route.img} alt={route.to} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-white text-xs font-semibold">{route.from} → {route.to}</div>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-white/80 text-xs">{route.duration}</span>
                    <span className="text-yellow-300 text-xs font-bold">from {route.price}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ─── Advanced Filters + Listings ─── */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-900">Filters</h3>
                <Filter className="w-4 h-4 text-gray-500" />
              </div>

              {/* Cruise Name */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2 text-xs">Cruise name</h4>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search cruise name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 pr-8"
                  />
                  <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
                <button className="mt-1 text-blue-600 hover:text-blue-800 text-xs">Clear</button>
              </div>

              {/* Duration */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2 text-xs">Duration (days)</h4>
                <div className="flex flex-wrap gap-1">
                  {durations.map((duration) => (
                    <button
                      key={duration}
                      onClick={() => setSelectedDuration(duration)}
                      className={`px-3 py-1.5 rounded-lg border text-xs transition-colors ${
                        selectedDuration === duration
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {duration}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ports of Call */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-gray-800 text-xs">Ports of call</h4>
                  <button onClick={() => setShowMorePorts(!showMorePorts)} className="text-blue-600 hover:text-blue-800 text-xs">
                    {showMorePorts ? 'Show less' : 'Show more >'}
                  </button>
                </div>
                <div className="space-y-1">
                  {ports.slice(0, showMorePorts ? ports.length : 6).map((port) => (
                    <div key={port} className="flex items-center">
                      <input type="checkbox" id={`port-${port}`} className="rounded text-blue-600 w-3.5 h-3.5" />
                      <label htmlFor={`port-${port}`} className="ml-2 text-gray-700 text-xs cursor-pointer">{port}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Embarkation */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2 text-xs">Embarkation city</h4>
                <div className="space-y-1">
                  {['Singapore', 'Melaka', 'Port Klang', 'Luanda', 'Mindelo', 'Ain Sokhna'].map((city) => (
                    <div key={city} className="flex items-center">
                      <input type="checkbox" id={`embark-${city}`} className="rounded text-blue-600 w-3.5 h-3.5" />
                      <label htmlFor={`embark-${city}`} className="ml-2 text-gray-700 text-xs cursor-pointer">{city}</label>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setShowMoreFilters(!showMoreFilters)}
                className="w-full py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center text-xs transition-colors"
              >
                {showMoreFilters ? (
                  <><ChevronUp className="w-4 h-4 mr-1" /> Show less filters</>
                ) : (
                  <><ChevronDown className="w-4 h-4 mr-1" /> Show more filters</>
                )}
              </button>
            </div>
          </div>

          {/* Main Listings */}
          <div className="lg:w-3/4">
            {/* Sort + Header */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Cruise Results</h2>
                  <p className="text-gray-600 text-xs mt-0.5">Showing {cruises.length} of 193 cruises</p>
                </div>
                <div className="flex items-center space-x-2 mt-2 md:mt-0">
                  <span className="text-gray-700 font-medium text-xs">Sort by:</span>
                  <div className="flex flex-wrap gap-1">
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSortBy(option)}
                        className={`px-3 py-1.5 rounded-lg border text-xs transition-colors ${
                          sortBy === option
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* CNY Flash Sales Banner */}
              <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-white text-red-600 font-bold px-2 py-0.5 rounded text-xs mr-2">CNY</div>
                    <div>
                      <h3 className="text-white font-bold text-sm">Flash Sales</h3>
                      <p className="text-white text-xs opacity-90">Limited time offers ending soon!</p>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate('/flash-sales')}
                    className="bg-white text-red-600 font-bold px-3 py-1 rounded text-xs hover:bg-gray-100 transition-colors"
                  >
                    View All Deals
                  </button>
                </div>
              </div>

              {/* Active filter chips */}
              {selectedFilters.length > 0 && (
                <div className="mt-4 p-3 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="flex flex-wrap items-center gap-2">
                    <Filter className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-gray-700 font-semibold text-xs">Active filters:</span>
                    {selectedFilters.map((filter) => (
                      <div key={filter} className="inline-flex items-center bg-white border border-blue-300 rounded-full pl-3 pr-2 py-1.5 group">
                        <span className="text-xs font-medium text-gray-800 mr-1.5">{filter}</span>
                        <button onClick={() => removeFilter(filter)} className="w-5 h-5 rounded-full bg-blue-100 hover:bg-red-100 flex items-center justify-center">
                          <X className="w-2.5 h-2.5 text-gray-500 group-hover:text-red-600" />
                        </button>
                      </div>
                    ))}
                    <button onClick={clearAllFilters} className="ml-auto text-blue-700 hover:text-blue-900 font-semibold text-xs flex items-center gap-1">
                      <X className="w-3 h-3" /> Clear all
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Cruise Cards */}
            <div className="space-y-5">
              {cruises.map((cruise) => (
                <div key={cruise.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="p-5">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-5">
                      {/* Image */}
                      <div className="lg:w-2/5">
                        <div className="relative rounded-xl overflow-hidden h-64 lg:h-80">
                          <img
                            src={cruise.image}
                            alt={cruise.name}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                            <div className="flex flex-col gap-1">
                              {cruise.flashSale && (
                                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">Flash Sale</div>
                              )}
                              {cruise.featured && (
                                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">Featured</div>
                              )}
                            </div>
                            <button onClick={() => toggleLike(cruise.id)} className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors shadow-md">
                              <Heart className={`w-5 h-5 ${likedCruises.includes(cruise.id) ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
                            </button>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-white font-bold text-lg">{cruise.name}</h3>
                                <div className="flex items-center mt-1">
                                  <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                      <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(cruise.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                    ))}
                                  </div>
                                  <span className="ml-1 text-white font-bold text-sm">{cruise.rating}</span>
                                  <span className="mx-2 text-white text-xs">•</span>
                                  <span className="text-white opacity-90 text-xs">{cruise.reviews} reviews</span>
                                </div>
                              </div>
                              <div className="bg-black/80 text-white text-sm font-bold px-3 py-1 rounded-lg">{cruise.discount} OFF</div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex flex-wrap gap-2">
                            {cruise.highlights?.slice(0, 3).map((highlight, idx) => (
                              <div key={idx} className="flex items-center bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-lg">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                {highlight}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="lg:w-3/5">
                        <div className="mb-4">
                          <h4 className="font-bold text-gray-900 text-base mb-2">{cruise.title}</h4>
                          <p className="text-gray-600 text-sm mb-3 leading-relaxed">{cruise.description}</p>
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-lg">{cruise.type}</span>
                            {cruise.inclusions?.map((incl, idx) => (
                              <span key={idx} className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-lg">✓ {incl}</span>
                            ))}
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                            {[
                              { icon: <Ship className="w-4 h-4 text-blue-600" />, label: 'Cruise Line', value: cruise.company },
                              { icon: <Clock className="w-4 h-4 text-blue-600" />, label: 'Duration', value: cruise.duration },
                              { icon: <MapPin className="w-4 h-4 text-blue-600" />, label: 'From', value: cruise.embarkation },
                              { icon: <Users className="w-4 h-4 text-blue-600" />, label: 'Booked', value: `${cruise.booked.toLocaleString()}+` },
                            ].map((item, i) => (
                              <div key={i} className="flex items-center p-2 bg-gray-50 rounded-lg">
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">{item.icon}</div>
                                <div>
                                  <div className="text-xs text-gray-500">{item.label}</div>
                                  <div className="text-sm font-semibold text-gray-800">{item.value}</div>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Dates */}
                          <div className="mb-4">
                            <h5 className="font-bold text-gray-800 text-sm mb-2 flex items-center">
                              <Calendar className="w-4 h-4 mr-2" /> Departure Dates:
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {cruise.dates.slice(0, 6).map((date, idx) => (
                                <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium">{date}</span>
                              ))}
                              {cruise.dates.length > 6 && (
                                <button onClick={() => navigate(`/cruise/${cruise.id}/dates`)} className="text-blue-600 hover:text-blue-800 font-semibold text-xs">
                                  +{cruise.dates.length - 6} more dates
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Ports */}
                          <div className="mb-4">
                            <h5 className="font-bold text-gray-800 text-sm mb-2">Ports of Call:</h5>
                            <div className="flex flex-wrap items-center gap-2">
                              {cruise.ports.map((port, idx) => (
                                <React.Fragment key={idx}>
                                  <div className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="ml-2 text-gray-700 text-sm font-medium">{port}</span>
                                  </div>
                                  {idx < cruise.ports.length - 1 && <ArrowRight className="w-4 h-4 text-gray-400" />}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Price & CTA */}
                        <div className="border-t pt-4">
                          <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <div>
                              <div className="flex items-baseline mb-1">
                                <span className="text-2xl font-bold text-gray-900">₹ {cruise.price}</span>
                                <span className="ml-2 text-gray-400 line-through text-sm">₹ {cruise.originalPrice}</span>
                                <span className="ml-2 text-green-600 font-bold text-sm">
                                  Save ₹ {(parseInt(cruise.originalPrice.replace(/,/g, '')) - parseInt(cruise.price.replace(/,/g, ''))).toLocaleString()}
                                </span>
                              </div>
                              <div className="text-gray-500 text-xs">per person (including port fee)</div>
                              <div className="flex items-center mt-1">
                                <Check className="w-3 h-3 text-green-500 mr-1" />
                                <span className="text-green-600 font-medium text-xs">All taxes and fees included</span>
                              </div>
                            </div>
                            <div className="mt-4 md:mt-0">
                              <button
                                onClick={() => handleViewDetails(cruise.id)}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors flex items-center justify-center shadow-md hover:shadow-lg"
                              >
                                View Details <ChevronRight className="w-4 h-4 ml-2" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No More Results */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center mt-6">
              <Ship className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-700 mb-2">No more results</h3>
              <p className="text-gray-600 text-sm mb-4">You've reached the end of available cruises</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl text-sm transition-colors shadow-md hover:shadow-lg">
                Load More Cruises
              </button>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        select {
          -moz-appearance: none;
          -webkit-appearance: none;
          background-image: none !important;
        }
        select::-ms-expand { display: none; }
      `}</style>
    </div>
  );
};

export default Cruises;