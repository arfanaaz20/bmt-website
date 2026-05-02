// // import React, { useState } from 'react';
// // import { Search, ChevronLeft, ChevronRight, MapPin, Star, Award, Facebook, Twitter, Instagram, Globe, Menu, X } from 'lucide-react';

// // const TripBest = () => {
// //   const [activeTab, setActiveTab] = useState('Popular');
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [showDatePicker, setShowDatePicker] = useState(false);
// //   const [selectedDateIndex, setSelectedDateIndex] = useState(2);
// //   const [passengerCount, setPassengerCount] = useState(1);
// //   const [showPassengerOptions, setShowPassengerOptions] = useState(false);
// //   const [showDetails, setShowDetails] = useState({});
// //   const [selectedDestination, setSelectedDestination] = useState(null);
// //   const [selectedCategory, setSelectedCategory] = useState('All Categories');

// //   // Date data
// //   const dates = [
// //     { day: 'Tue', date: 'Feb 10' },
// //     { day: 'Wed', date: 'Feb 11' },
// //     { day: 'Thu', date: 'Feb 12' },
// //     { day: 'Fri', date: 'Feb 13' },
// //     { day: 'Sat', date: 'Feb 14' },
// //     { day: 'Sun', date: 'Feb 15' },
// //     { day: 'Mon', date: 'Feb 16' }
// //   ];

// //   // Category filters
// //   const categoryFilters = ['All Categories', 'Hotels', 'Attractions', 'Restaurants', 'Nightlife', 'Activities'];

// //   // --- MOCK DATA ---
// //   const popularDestinations = [
// //     { 
// //       id: 1, 
// //       name: "Florence", 
// //       image: "https://images.unsplash.com/photo-1529307474898-e854236b67eb?w=600&h=400&fit=crop",
// //       country: "Italy",
// //       rating: 4.8,
// //       reviewCount: 1250,
// //       price: 899,
// //       originalPrice: 1200,
// //       features: ["Historic Architecture", "Art Galleries", "Italian Cuisine"],
// //       amenities: ["Free WiFi", "Guided Tours", "Transportation"],
// //       description: "The birthplace of the Renaissance, known for its art and architecture."
// //     },
// //     { 
// //       id: 2, 
// //       name: "Los Angeles", 
// //       image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=600&h=400&fit=crop",
// //       country: "USA",
// //       rating: 4.5,
// //       reviewCount: 980,
// //       price: 1200,
// //       originalPrice: 1500,
// //       features: ["Hollywood", "Beaches", "Entertainment"],
// //       amenities: ["City Tours", "Beach Access", "Shopping"],
// //       description: "The entertainment capital of the world with sunny beaches."
// //     },
// //     { 
// //       id: 3, 
// //       name: "Rome", 
// //       image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop",
// //       country: "Italy",
// //       rating: 4.9,
// //       reviewCount: 2100,
// //       price: 950,
// //       originalPrice: 1300,
// //       features: ["Ancient History", "Colosseum", "Vatican City"],
// //       amenities: ["Historical Sites", "Museums", "Local Food"],
// //       description: "Eternal city with ancient ruins and world-famous landmarks."
// //     },
// //     { 
// //       id: 4, 
// //       name: "London", 
// //       image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
// //       country: "UK",
// //       rating: 4.7,
// //       reviewCount: 1850,
// //       price: 1100,
// //       originalPrice: 1400,
// //       features: ["Royal Heritage", "Museums", "Theatre"],
// //       amenities: ["City Pass", "River Cruise", "West End Shows"],
// //       description: "Historic capital with royal palaces and modern attractions."
// //     },
// //     { 
// //       id: 5, 
// //       name: "New York", 
// //       image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop",
// //       country: "USA",
// //       rating: 4.6,
// //       reviewCount: 1950,
// //       price: 1300,
// //       originalPrice: 1650,
// //       features: ["Broadway", "Statue of Liberty", "Central Park"],
// //       amenities: ["City Tours", "Shopping", "Dining"],
// //       description: "The city that never sleeps with iconic skyscrapers."
// //     },
// //     { 
// //       id: 6, 
// //       name: "Kyoto", 
// //       image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop",
// //       country: "Japan",
// //       rating: 4.8,
// //       reviewCount: 920,
// //       price: 1150,
// //       originalPrice: 1450,
// //       features: ["Temples", "Traditional Gardens", "Cherry Blossoms"],
// //       amenities: ["Cultural Tours", "Tea Ceremonies", "Hot Springs"],
// //       description: "Ancient capital with traditional temples and gardens."
// //     },
// //     { 
// //       id: 7, 
// //       name: "Phuket", 
// //       image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&h=400&fit=crop",
// //       country: "Thailand",
// //       rating: 4.4,
// //       reviewCount: 870,
// //       price: 650,
// //       originalPrice: 850,
// //       features: ["Beaches", "Islands", "Night Markets"],
// //       amenities: ["Beach Resorts", "Water Sports", "Thai Massage"],
// //       description: "Tropical paradise with stunning beaches and islands."
// //     },
// //     { 
// //       id: 8, 
// //       name: "Barcelona", 
// //       image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop",
// //       country: "Spain",
// //       rating: 4.7,
// //       reviewCount: 1320,
// //       price: 1050,
// //       originalPrice: 1350,
// //       features: ["Gaudi Architecture", "Beaches", "Tapas"],
// //       amenities: ["Art Tours", "Beach Clubs", "Catalan Culture"],
// //       description: "Vibrant city with unique architecture and Mediterranean beaches."
// //     }
// //   ];

// //   const categories = [
// //     {
// //       title: " Stays",
// //       items: [
// //         { 
// //           name: "Luxury Hotels", 
// //           image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=350&fit=crop",
// //           price: 350,
// //           rating: 4.8,
// //           description: "5-star accommodations with premium services"
// //         },
// //         { 
// //           name: "Family Hotels", 
// //           image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?w=600&h=350&fit=crop",
// //           price: 180,
// //           rating: 4.5,
// //           description: "Kid-friendly amenities and spacious rooms"
// //         },
// //         { 
// //           name: "Scenic Hotels", 
// //           image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=350&fit=crop",
// //           price: 220,
// //           rating: 4.7,
// //           description: "Breathtaking views and natural surroundings"
// //         },
// //         { 
// //           name: "Cultural Hotels", 
// //           image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=350&fit=crop",
// //           price: 195,
// //           rating: 4.6,
// //           description: "Local architecture and cultural experiences"
// //         }
// //       ]
// //     },
// //     {
// //       title: " Things to Do",
// //       items: [
// //         { 
// //           name: "Best Things to Do", 
// //           image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=350&fit=crop",
// //           price: 75,
// //           rating: 4.8,
// //           description: "Top-rated activities and experiences"
// //         },
// //         { 
// //           name: "Family-friendly Attractions", 
// //           image: "https://images.unsplash.com/photo-1502086223501-681a981c2522?w=600&h=350&fit=crop",
// //           price: 45,
// //           rating: 4.5,
// //           description: "Fun activities for all ages"
// //         },
// //         { 
// //           name: "Spring Outings", 
// //           image: "https://images.unsplash.com/photo-1490750967868-58cb75069faf?w=600&h=400&fit=crop",
// //           price: 60,
// //           rating: 4.6,
// //           description: "Seasonal activities and events"
// //         },
// //         { 
// //           name: "Cool Water Escapes", 
// //           image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc452e?w=600&h=350&fit=crop",
// //           price: 85,
// //           rating: 4.7,
// //           description: "Water-based activities and attractions"
// //         }
// //       ]
// //     }
// //   ];

// //   const tabs = ["Popular", "Asia", "Europe", "North America", "Oceania", "Africa", "South America"];
// //   const sortOptions = ['Recommended', 'Price: Low to High', 'Price: High to Low', 'Top Rated'];

// //   // Filter destinations based on active tab and search
// //   const filteredDestinations = popularDestinations.filter(dest => {
// //     const query = searchQuery.toLowerCase();
// //     const searchMatch = 
// //       dest.name.toLowerCase().includes(query) || 
// //       dest.country.toLowerCase().includes(query) ||
// //       dest.description.toLowerCase().includes(query);
    
// //     const categoryMatch = selectedCategory === 'All Categories' || true;
    
// //     return searchMatch && categoryMatch;
// //   });

// //   const handleDateSelect = (index) => {
// //     setSelectedDateIndex(index);
// //     setShowDatePicker(false);
// //   };

// //   const handlePassengerChange = (change) => {
// //     const newCount = passengerCount + change;
// //     if (newCount >= 1 && newCount <= 10) {
// //       setPassengerCount(newCount);
// //     }
// //   };

// //   const handleDetailsClick = (destId, e) => {
// //     e.stopPropagation();
// //     setShowDetails(prev => ({
// //       ...prev,
// //       [destId]: !prev[destId]
// //     }));
// //   };

// //   const calculateSavings = (price, originalPrice) => {
// //     return (originalPrice - price).toFixed(2);
// //   };

// //   const getRatingColor = (rating) => {
// //     if (rating >= 4.5) return 'bg-green-100 text-green-700';
// //     if (rating >= 4.0) return 'bg-blue-100 text-blue-700';
// //     if (rating >= 3.5) return 'bg-yellow-100 text-yellow-700';
// //     return 'bg-red-100 text-red-700';
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Mobile-friendly padding */}
// //       <div className="px-3 sm:px-4 py-3 sm:py-4 max-w-7xl mx-auto">
        
// //         {/* Search Section */}
// //         <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
// //             {/* Destination */}
// //             <div className="sm:col-span-2 lg:col-span-1">
// //               <div className="text-sm text-gray-500 mb-1">Destination</div>
// //               <div className="relative">
// //                 <input
// //                   type="text"
// //                   value={searchQuery}
// //                   onChange={(e) => setSearchQuery(e.target.value)}
// //                   placeholder="Enter destination"
// //                   className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
// //                 />
// //                 <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
// //                   <Search className="w-4 h-4 text-blue-500" />
// //                 </div>
// //               </div>
// //             </div>
            
// //             {/* Check-in Date */}
// //             <div>
// //               <div className="text-sm text-gray-500 mb-1">Check-in Date</div>
// //               <div 
// //                 className="flex items-center justify-between border rounded-lg p-3 cursor-pointer hover:border-blue-400 transition-colors"
// //                 onClick={() => setShowDatePicker(!showDatePicker)}
// //               >
// //                 <div>
// //                   <div className="font-medium text-sm sm:text-base">{dates[selectedDateIndex].day}, {dates[selectedDateIndex].date}</div>
// //                   <div className="text-xs sm:text-sm text-gray-500">After 2:00 PM</div>
// //                 </div>
// //                 <span className="text-gray-400">▾</span>
// //               </div>
// //             </div>
            
// //             {/* Check-out Date */}
// //             <div>
// //               <div className="text-sm text-gray-500 mb-1">Check-out Date</div>
// //               <div className="flex items-center justify-between border rounded-lg p-3">
// //                 <div>
// //                   <div className="font-medium text-sm sm:text-base">Sun, Feb 15</div>
// //                   <div className="text-xs sm:text-sm text-gray-500">Before 12:00 PM</div>
// //                 </div>
// //                 <span className="text-gray-400">▾</span>
// //               </div>
// //             </div>
            
// //             {/* Guests */}
// //             <div>
// //               <div className="text-sm text-gray-500 mb-1">Guests</div>
// //               <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3">
// //                 <button 
// //                   type="button"
// //                   onClick={() => handlePassengerChange(-1)}
// //                   className="p-1 hover:bg-gray-100 rounded text-gray-600 font-bold text-lg leading-none"
// //                 >
// //                   -
// //                 </button>
// //                 <span className="flex-1 text-center font-medium text-sm sm:text-base">{passengerCount}</span>
// //                 <button 
// //                   type="button"
// //                   onClick={() => handlePassengerChange(1)}
// //                   className="p-1 hover:bg-gray-100 rounded text-gray-600 font-bold text-lg leading-none"
// //                 >
// //                   +
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
          
// //           {/* Date Picker Dropdown */}
// //           {showDatePicker && (
// //             <div className="mb-4 bg-white border rounded-lg shadow-lg p-3 sm:p-4">
// //               <div className="flex justify-between mb-2">
// //                 <div className="font-medium text-sm sm:text-base">Select check-in date:</div>
// //                 <button 
// //                   className="text-blue-600 hover:text-blue-800"
// //                   onClick={() => setShowDatePicker(false)}
// //                 >
// //                   ✕
// //                 </button>
// //               </div>
// //               {/* Scrollable on mobile */}
// //               <div className="flex gap-2 overflow-x-auto pb-1 sm:grid sm:grid-cols-7">
// //                 {dates.map((date, index) => (
// //                   <div
// //                     key={index}
// //                     className={`text-center p-2 rounded-lg cursor-pointer flex-shrink-0 min-w-[52px] sm:min-w-0 ${selectedDateIndex === index ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
// //                     onClick={() => handleDateSelect(index)}
// //                   >
// //                     <div className="font-medium text-xs sm:text-sm">{date.day}</div>
// //                     <div className="text-xs">{date.date}</div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}
          
// //           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
// //             <div 
// //               className="text-sm text-gray-600 cursor-pointer hover:text-blue-600"
// //               onClick={() => setShowPassengerOptions(true)}
// //             >
// //               {passengerCount} guest{passengerCount > 1 ? 's' : ''} • 1 room
// //             </div>
// //             <button 
// //               className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
// //               onClick={() => alert('Searching for trips...')}
// //             >
// //               <Search className="w-4 h-4" />
// //               Search
// //             </button>
// //           </div>
// //         </div>

// //         {/* Date Selector - Horizontal scroll on mobile */}
// //         <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 mb-4 sm:mb-6">
// //           <div className="flex justify-between items-center mb-3">
// //             <div className="text-base sm:text-lg font-bold">{dates[selectedDateIndex].day}, {dates[selectedDateIndex].date}</div>
// //             <div className="text-blue-600 font-medium cursor-pointer hover:text-blue-800 text-sm sm:text-base">
// //               Continue
// //             </div>
// //           </div>
// //           <div className="flex gap-1 overflow-x-auto pb-1 sm:justify-between">
// //             {dates.map((date, i) => (
// //               <div 
// //                 key={i}
// //                 className={`px-3 sm:px-4 py-2 rounded-lg cursor-pointer flex-shrink-0 text-center ${selectedDateIndex === i ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
// //                 onClick={() => handleDateSelect(i)}
// //               >
// //                 <div className="font-medium text-xs sm:text-sm">{date.day}</div>
// //                 <div className="text-xs">{date.date}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Main Content */}
// //         <div className="flex flex-col">

// //           {/* Filters Bar - horizontal scroll on mobile */}
// //           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 sm:mb-6">
// //             <div className="flex gap-2 overflow-x-auto pb-1 w-full sm:w-auto">
// //               {sortOptions.map((option, i) => (
// //                 <button 
// //                   key={i}
// //                   className={`px-3 sm:px-4 py-2 rounded-lg border whitespace-nowrap flex-shrink-0 text-sm ${'recommended' === option ? 'bg-blue-100 text-blue-600 border-blue-200' : 'bg-white border-gray-300 hover:bg-gray-50'} transition-colors`}
// //                 >
// //                   {option} {'recommended' === option ? '▾' : ''}
// //                 </button>
// //               ))}
// //             </div>
// //             <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">2026 GLOBAL 100 Rankings</div>
// //           </div>

// //           {/* Tabs - horizontal scroll on mobile */}
// //           <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 mb-4 sm:mb-6">
// //             <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
// //               {tabs.map(tab => (
// //                 <button 
// //                   key={tab}
// //                   onClick={() => setActiveTab(tab)}
// //                   className={`px-3 sm:px-4 py-2 rounded-lg font-medium whitespace-nowrap flex-shrink-0 text-sm ${
// //                     activeTab === tab 
// //                     ? 'bg-blue-600 text-white' 
// //                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// //                   } transition-colors`}
// //                 >
// //                   {tab}
// //                 </button>
// //               ))}
// //             </div>
            
// //             <div className="mb-2 text-sm sm:text-base text-gray-600">
// //               Found {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
// //               {selectedCategory !== 'All Categories' && ` in ${selectedCategory}`}
// //             </div>
// //           </div>

// //           {/* Destinations Grid - 1 col on mobile, 2 on tablet, 3 on desktop */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
// //             {filteredDestinations.map(dest => (
// //               <div 
// //                 key={dest.id}
// //                 className={`bg-white rounded-xl border-2 ${selectedDestination === dest.id ? 'border-blue-500' : 'border-gray-200'} hover:border-blue-300 transition-colors cursor-pointer`}
// //                 onClick={() => setSelectedDestination(dest.id)}
// //               >
// //                 <div className="p-4 sm:p-6">
// //                   <div className="relative h-40 sm:h-48 w-full mb-3 sm:mb-4 rounded-lg overflow-hidden">
// //                     <img 
// //                       src={dest.image} 
// //                       alt={dest.name}
// //                       className="w-full h-full object-cover"
// //                     />
// //                     <div className="absolute top-2 right-2">
// //                       <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getRatingColor(dest.rating)}`}>
// //                         {dest.rating} ★
// //                       </span>
// //                     </div>
// //                   </div>
                  
// //                   <div className="flex justify-between items-start mb-2 sm:mb-3">
// //                     <div>
// //                       <h3 className="text-lg sm:text-xl font-bold text-gray-800">{dest.name}</h3>
// //                       <p className="text-gray-600 text-sm">{dest.country}</p>
// //                     </div>
// //                     <div className="text-right">
// //                       <div className="text-xl sm:text-2xl font-bold text-blue-600">₹{dest.price}</div>
// //                       <div className="text-xs sm:text-sm text-gray-500 line-through">₹{dest.originalPrice}</div>
// //                     </div>
// //                   </div>
                  
// //                   <p className="text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-2">{dest.description}</p>
                  
// //                   <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
// //                     {dest.features.slice(0, 3).map((feature, i) => (
// //                       <span key={i} className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm">
// //                         {feature}
// //                       </span>
// //                     ))}
// //                   </div>
                  
// //                   <div className="flex items-center justify-between">
// //                     <div className="flex items-center text-gray-600">
// //                       <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 fill-current mr-1" />
// //                       <span className="text-xs sm:text-sm">{dest.rating} ({dest.reviewCount})</span>
// //                     </div>
// //                     <button 
// //                       className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
// //                       onClick={(e) => {
// //                         e.stopPropagation();
// //                         handleDetailsClick(dest.id, e);
// //                       }}
// //                     >
// //                       {showDetails[dest.id] ? 'Hide' : 'Details'}
// //                     </button>
// //                   </div>
                  
// //                   {/* Additional Details Section */}
// //                   {showDetails[dest.id] && (
// //                     <div className="mt-4 pt-4 border-t">
// //                       <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-4">
// //                         <div>
// //                           <h4 className="font-medium text-gray-700 mb-2 text-sm">Amenities:</h4>
// //                           <div className="flex flex-wrap gap-1 sm:gap-2">
// //                             {dest.amenities.map((amenity, i) => (
// //                               <span key={i} className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm">
// //                                 {amenity}
// //                               </span>
// //                             ))}
// //                           </div>
// //                         </div>
                        
// //                         <div>
// //                           <h4 className="font-medium text-gray-700 mb-2 text-sm">Travel Details:</h4>
// //                           <div className="text-xs sm:text-sm text-gray-600 space-y-1">
// //                             <div>Best Time to Visit: Spring & Autumn</div>
// //                             <div>Average Stay: 5-7 days</div>
// //                             <div>Visa Requirements: Tourist Visa</div>
// //                             <div>Language: English widely spoken</div>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Categories Sections - 1 col on mobile, 2 on tablet, 4 on desktop */}
// //           {categories.map((category, index) => (
// //             <div key={index} className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
// //               <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">{category.title}</h2>
// //               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
// //                 {category.items.map((item, idx) => (
// //                   <div 
// //                     key={idx} 
// //                     className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors cursor-pointer"
// //                   >
// //                     <div className="h-36 sm:h-40 overflow-hidden">
// //                       <img 
// //                         src={item.image} 
// //                         alt={item.name}
// //                         className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
// //                       />
// //                     </div>
// //                     <div className="p-3 sm:p-4">
// //                       <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">{item.name}</h3>
// //                       <div className="flex items-center justify-between mb-1 sm:mb-2">
// //                         <div className="flex items-center">
// //                           <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 fill-current mr-1" />
// //                           <span className="text-xs sm:text-sm text-gray-600">{item.rating}</span>
// //                         </div>
// //                         <div className="text-blue-600 font-bold text-sm sm:text-base">₹{item.price}</div>
// //                       </div>
// //                       <p className="text-gray-600 text-xs sm:text-sm">{item.description}</p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}

// //           {/* Category Filter Buttons - horizontal scroll on mobile */}
// //           <div className="mt-6 sm:mt-8">
// //             <div className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
// //               {categoryFilters.map((filter, index) => (
// //                 <button
// //                   key={index}
// //                   className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex-shrink-0 text-sm sm:text-base ${selectedCategory === filter ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border hover:bg-gray-50'}`}
// //                   onClick={() => setSelectedCategory(filter)}
// //                 >
// //                   {filter}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TripBest;






























// import React, { useState, useEffect } from 'react';
// import {
//   Search, ChevronLeft, ChevronRight, MapPin, Star, Award,
//   X, Heart, Share2, Wifi, Coffee, Car, Dumbbell, Waves,
//   Utensils, Clock, Shield, Check, ChevronDown, ChevronUp,
//   Camera, Phone, Mail, Globe, Users, Calendar, ArrowRight,
//   ThumbsUp, MessageSquare, Info, Sparkles, Building2,
//   BadgeCheck, Zap, TrendingUp
// } from 'lucide-react';

// // ────────────────────────────────────────────────────────────────
// // DATA
// // ────────────────────────────────────────────────────────────────
// const popularDestinations = [
//   {
//     id: 1, name: "Florence", country: "Italy",
//     image: "https://images.unsplash.com/photo-1529307474898-e854236b67eb?w=800&h=500&fit=crop",
//     gallery: [
//       "https://images.unsplash.com/photo-1529307474898-e854236b67eb?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1571321346935-41e6b3fa5c3b?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop"
//     ],
//     rating: 4.8, reviewCount: 1250, price: 899, originalPrice: 1200,
//     features: ["Historic Architecture", "Art Galleries", "Italian Cuisine"],
//     amenities: ["Free WiFi", "Guided Tours", "Transportation", "Breakfast", "Pool", "Spa"],
//     description: "The birthplace of the Renaissance, known for its art and architecture.",
//     longDesc: "Florence, the cradle of the Italian Renaissance, is a city that breathes art and history at every corner. Walk across the iconic Ponte Vecchio, marvel at Michelangelo's David in the Accademia Gallery, or lose yourself in the Uffizi — one of the world's greatest art museums. The city's terracotta rooftops and cobblestone alleys make it an unforgettable destination.",
//     faq: [
//       { q: "What is the best time to visit Florence?", a: "April–June and September–October offer mild weather and fewer crowds." },
//       { q: "Is a visa required?", a: "EU citizens don't need a visa. Others require a Schengen visa." },
//       { q: "How many days should I plan?", a: "3–5 days is ideal to cover the main highlights comfortably." },
//       { q: "Is Florence family-friendly?", a: "Absolutely! Many museums offer kids' programs and the piazzas are great for strolling." }
//     ],
//     reviews: [
//       { name: "Priya Sharma", avatar: "PS", rating: 5, date: "March 2026", comment: "Absolutely breathtaking! The art scene is unmatched and every street is a postcard." },
//       { name: "Rajesh Kumar", avatar: "RK", rating: 4, date: "February 2026", comment: "Loved the food and the Duomo. A bit crowded in peak season but totally worth it." },
//       { name: "Ananya Singh", avatar: "AS", rating: 5, date: "January 2026", comment: "Florence stole my heart. The guided tour was incredibly informative." }
//     ]
//   },
//   {
//     id: 2, name: "Los Angeles", country: "USA",
//     image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&h=500&fit=crop",
//     gallery: [
//       "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?w=800&h=500&fit=crop"
//     ],
//     rating: 4.5, reviewCount: 980, price: 1200, originalPrice: 1500,
//     features: ["Hollywood", "Beaches", "Entertainment"],
//     amenities: ["City Tours", "Beach Access", "Shopping", "Rooftop Pool", "Valet", "Bar"],
//     description: "The entertainment capital of the world with sunny beaches.",
//     longDesc: "Los Angeles is a sprawling metropolis of glamour, creativity, and sunshine. From the star-studded Hollywood Walk of Fame to the sandy shores of Santa Monica and Venice Beach, LA has something for everyone. Explore world-class museums like LACMA, catch a Lakers game at Crypto.com Arena, or splurge on dining in Beverly Hills.",
//     faq: [
//       { q: "Do I need a car in LA?", a: "Yes, LA is a car-centric city. Renting a car or using rideshares is highly recommended." },
//       { q: "What are the must-see spots?", a: "Hollywood Sign, Griffith Observatory, Getty Center, and Santa Monica Pier." },
//       { q: "Is LA safe for tourists?", a: "Tourist areas are generally safe. Exercise normal precautions in unfamiliar neighborhoods." },
//       { q: "Best time to visit?", a: "March–May and September–November for pleasant weather." }
//     ],
//     reviews: [
//       { name: "Vikram Nair", avatar: "VN", rating: 5, date: "April 2026", comment: "Beverly Hills and Santa Monica were highlights. The city is massive but incredibly fun!" },
//       { name: "Meera Patel", avatar: "MP", rating: 4, date: "March 2026", comment: "Great experience overall. Traffic is intense but the beaches make up for everything." }
//     ]
//   },
//   {
//     id: 3, name: "Rome", country: "Italy",
//     image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=500&fit=crop",
//     gallery: [
//       "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&h=500&fit=crop"
//     ],
//     rating: 4.9, reviewCount: 2100, price: 950, originalPrice: 1300,
//     features: ["Ancient History", "Colosseum", "Vatican City"],
//     amenities: ["Historical Sites", "Museums", "Local Food", "Concierge", "WiFi", "Breakfast"],
//     description: "Eternal city with ancient ruins and world-famous landmarks.",
//     longDesc: "Rome is a living museum where ancient history meets vibrant modern life. Walk through the Forum Romanum where Julius Caesar once walked, toss a coin into the Trevi Fountain, and stand in awe inside the Pantheon. A visit to Vatican City — home to St. Peter's Basilica and the Sistine Chapel — is an absolute must.",
//     faq: [
//       { q: "How many days do I need in Rome?", a: "4–5 days gives you enough time for the major sights without rushing." },
//       { q: "Is the Vatican included?", a: "Vatican is a separate state but very accessible from central Rome." },
//       { q: "Is the food really that good?", a: "Absolutely. Roman pasta, gelato, and pizza are world-class." },
//       { q: "Best way to get around Rome?", a: "Walking and metro are best. Many top sights are clustered together." }
//     ],
//     reviews: [
//       { name: "Sunita Reddy", avatar: "SR", rating: 5, date: "March 2026", comment: "Rome exceeded all my expectations. The Colosseum at sunset is magical." },
//       { name: "Arjun Mehta", avatar: "AM", rating: 5, date: "February 2026", comment: "Vatican City was surreal. The guided tour was worth every rupee." },
//       { name: "Deepa Iyer", avatar: "DI", rating: 4, date: "January 2026", comment: "Wonderful city but very busy. Book tickets in advance for everything!" }
//     ]
//   },
//   {
//     id: 4, name: "London", country: "UK",
//     image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop",
//     gallery: [
//       "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=500&fit=crop"
//     ],
//     rating: 4.7, reviewCount: 1850, price: 1100, originalPrice: 1400,
//     features: ["Royal Heritage", "Museums", "Theatre"],
//     amenities: ["City Pass", "River Cruise", "West End Shows", "Concierge", "Bar", "WiFi"],
//     description: "Historic capital with royal palaces and modern attractions.",
//     longDesc: "London is a city of extraordinary contrasts — ancient traditions alongside cutting-edge culture. Visit Buckingham Palace, explore the Tower of London, and cross the iconic Tower Bridge. World-class free museums like the British Museum and Natural History Museum make it a paradise for the intellectually curious.",
//     faq: [
//       { q: "Is London expensive?", a: "London can be pricey, but many museums are free. Budget ₹5,000–₹8,000/day for comfort." },
//       { q: "Do I need a UK visa?", a: "Indian passport holders require a UK Standard Visitor Visa." },
//       { q: "Oyster card or contactless?", a: "Both work on London transport. Contactless is most convenient for visitors." },
//       { q: "Best area to stay in London?", a: "Covent Garden, South Bank, or Kensington for easy access to attractions." }
//     ],
//     reviews: [
//       { name: "Kiran Bose", avatar: "KB", rating: 5, date: "April 2026", comment: "London is endlessly fascinating. The British Museum alone is worth the trip!" },
//       { name: "Pooja Tiwari", avatar: "PT", rating: 4, date: "March 2026", comment: "Loved the West End show and the Thames riverboat. Very organized city." }
//     ]
//   },
//   {
//     id: 5, name: "New York", country: "USA",
//     image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop",
//     gallery: [
//       "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&h=500&fit=crop"
//     ],
//     rating: 4.6, reviewCount: 1950, price: 1300, originalPrice: 1650,
//     features: ["Broadway", "Statue of Liberty", "Central Park"],
//     amenities: ["City Tours", "Shopping", "Dining", "Rooftop Bar", "Gym", "24hr Concierge"],
//     description: "The city that never sleeps with iconic skyscrapers.",
//     longDesc: "New York City is arguably the most iconic city in the world. Times Square dazzles at night, Central Park offers a green escape from the urban rush, and the Statue of Liberty stands as a global symbol of freedom. Catch a Broadway show, eat world-class food in every cuisine imaginable, and shop on Fifth Avenue.",
//     faq: [
//       { q: "What is the New York City Pass?", a: "A bundle ticket that covers major attractions like the Empire State Building, MoMA, and more." },
//       { q: "Best time to visit NYC?", a: "Spring (April–June) and Fall (September–November) are ideal weather-wise." },
//       { q: "Is NYC safe for tourists?", a: "Most tourist areas are very safe. Times Square, Midtown, and Manhattan in general are well-policed." },
//       { q: "How to get from JFK to Manhattan?", a: "AirTrain + Subway is cheapest; taxi/rideshare is most convenient (~₹3,000–₹4,500)." }
//     ],
//     reviews: [
//       { name: "Rahul Gupta", avatar: "RG", rating: 5, date: "April 2026", comment: "NYC is just electric. Times Square at midnight felt surreal." },
//       { name: "Nisha Joshi", avatar: "NJ", rating: 5, date: "March 2026", comment: "Broadway show + Central Park + Brooklyn Bridge = perfect trip." }
//     ]
//   },
//   {
//     id: 6, name: "Kyoto", country: "Japan",
//     image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=500&fit=crop",
//     gallery: [
//       "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&h=500&fit=crop"
//     ],
//     rating: 4.8, reviewCount: 920, price: 1150, originalPrice: 1450,
//     features: ["Temples", "Traditional Gardens", "Cherry Blossoms"],
//     amenities: ["Cultural Tours", "Tea Ceremonies", "Hot Springs", "Ryokan Stay", "WiFi", "Breakfast"],
//     description: "Ancient capital with traditional temples and gardens.",
//     longDesc: "Kyoto is the soul of Japan — a city where geisha still walk cobblestone streets and ancient temples rise above bamboo forests. The Fushimi Inari Shrine with its thousands of red torii gates is otherworldly. Experience a traditional tea ceremony, stay in a ryokan inn, and witness the surreal beauty of cherry blossoms in spring.",
//     faq: [
//       { q: "When do cherry blossoms bloom in Kyoto?", a: "Late March to early April, though exact timing varies each year." },
//       { q: "Is Kyoto good for solo travelers?", a: "Extremely so. Kyoto is safe, clean, and easy to navigate even without Japanese." },
//       { q: "Kyoto vs Osaka — which is better?", a: "Both are great! Kyoto for culture and history, Osaka for food and nightlife. Many visit both." },
//       { q: "What should I wear at temples?", a: "Dress modestly. Cover shoulders and knees when entering sacred spaces." }
//     ],
//     reviews: [
//       { name: "Sanjay Kapoor", avatar: "SK", rating: 5, date: "April 2026", comment: "Fushimi Inari at dawn is something I'll never forget. Pure magic." },
//       { name: "Lakshmi Rao", avatar: "LR", rating: 5, date: "March 2026", comment: "The ryokan experience was transformative. Kyoto is unlike anywhere else." }
//     ]
//   },
//   {
//     id: 7, name: "Phuket", country: "Thailand",
//     image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&h=500&fit=crop",
//     gallery: [
//       "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop"
//     ],
//     rating: 4.4, reviewCount: 870, price: 650, originalPrice: 850,
//     features: ["Beaches", "Islands", "Night Markets"],
//     amenities: ["Beach Resorts", "Water Sports", "Thai Massage", "Pool", "Bar", "Snorkeling"],
//     description: "Tropical paradise with stunning beaches and islands.",
//     longDesc: "Phuket is Thailand's most celebrated island destination, known for its gorgeous beaches, turquoise waters, and vibrant nightlife. Explore Phi Phi Island by speedboat, snorkel in crystal-clear bays, or simply relax on Patong Beach with a fresh coconut. The night markets are a foodie's dream.",
//     faq: [
//       { q: "Best beaches in Phuket?", a: "Kata Beach, Karon Beach, and Freedom Beach are top picks for cleaner, calmer waters." },
//       { q: "Do I need visa for Thailand?", a: "Indian passport holders get visa-on-arrival or e-visa. Check current regulations." },
//       { q: "Is Phuket safe for solo travelers?", a: "Yes, it's generally safe. Use reputable transport and stay in well-reviewed areas." },
//       { q: "Best time to visit Phuket?", a: "November to April (dry season) is ideal. May–October is monsoon season." }
//     ],
//     reviews: [
//       { name: "Mohit Sharma", avatar: "MS", rating: 4, date: "March 2026", comment: "Beaches are beautiful! Phi Phi Island tour was the highlight of my trip." },
//       { name: "Neha Gupta", avatar: "NG", rating: 5, date: "February 2026", comment: "Best value destination. Amazing food, hospitality, and scenery." }
//     ]
//   },
//   {
//     id: 8, name: "Barcelona", country: "Spain",
//     image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=500&fit=crop",
//     gallery: [
//       "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&h=500&fit=crop"
//     ],
//     rating: 4.7, reviewCount: 1320, price: 1050, originalPrice: 1350,
//     features: ["Gaudi Architecture", "Beaches", "Tapas"],
//     amenities: ["Art Tours", "Beach Clubs", "Catalan Culture", "Rooftop Pool", "Bar", "WiFi"],
//     description: "Vibrant city with unique architecture and Mediterranean beaches.",
//     longDesc: "Barcelona is a feast for the senses — Gaudí's fantastical Sagrada Família, the mosaic wonderland of Park Güell, and the lively La Boqueria market. The city seamlessly blends world-class architecture, beachside relaxation, and a passionate food culture. Stroll down Las Ramblas, eat pintxos in the Gothic Quarter, and dance the night away.",
//     faq: [
//       { q: "How do I get tickets for Sagrada Família?", a: "Book online in advance — it sells out weeks ahead during peak season." },
//       { q: "Is Barcelona safe?", a: "Generally safe, but watch for pickpockets in tourist-heavy areas like Las Ramblas." },
//       { q: "Best area to stay?", a: "Gothic Quarter for culture, Eixample for style, Barceloneta for beach access." },
//       { q: "Can I get by with English?", a: "Yes, English is widely spoken in tourist areas. Knowing basic Spanish helps." }
//     ],
//     reviews: [
//       { name: "Amit Verma", avatar: "AV", rating: 5, date: "April 2026", comment: "Sagrada Família is mind-blowing. Gaudí was truly a genius." },
//       { name: "Ritu Nair", avatar: "RN", rating: 4, date: "March 2026", comment: "The tapas and nightlife are incredible. Barcelona has so much energy!" }
//     ]
//   }
// ];

// const amenityIcons = {
//   "Free WiFi": <Wifi className="w-4 h-4" />, "Wifi": <Wifi className="w-4 h-4" />, "WiFi": <Wifi className="w-4 h-4" />,
//   "Breakfast": <Coffee className="w-4 h-4" />, "Local Food": <Utensils className="w-4 h-4" />,
//   "Pool": <Waves className="w-4 h-4" />, "Rooftop Pool": <Waves className="w-4 h-4" />,
//   "Beach Clubs": <Waves className="w-4 h-4" />, "Beach Access": <Waves className="w-4 h-4" />, "Beach Resorts": <Waves className="w-4 h-4" />,
//   "Gym": <Dumbbell className="w-4 h-4" />, "Spa": <Sparkles className="w-4 h-4" />,
//   "Transportation": <Car className="w-4 h-4" />, "Valet": <Car className="w-4 h-4" />,
//   "Shopping": <Award className="w-4 h-4" />,
// };

// const tabs = ["Popular", "Asia", "Europe", "North America", "Oceania", "Africa", "South America"];
// const dates = [
//   { day: 'Tue', date: 'Feb 10' }, { day: 'Wed', date: 'Feb 11' },
//   { day: 'Thu', date: 'Feb 12' }, { day: 'Fri', date: 'Feb 13' },
//   { day: 'Sat', date: 'Feb 14' }, { day: 'Sun', date: 'Feb 15' },
//   { day: 'Mon', date: 'Feb 16' }
// ];

// // ────────────────────────────────────────────────────────────────
// // DETAIL MODAL
// // ────────────────────────────────────────────────────────────────
// const DetailModal = ({ dest, onClose }) => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const [activeImg, setActiveImg] = useState(0);
//   const [expandedFaq, setExpandedFaq] = useState(null);
//   const [liked, setLiked] = useState(false);
//   const [bookingStep, setBookingStep] = useState(0); // 0=none,1,2,3
//   const [guests, setGuests] = useState(2);
//   const [checkIn, setCheckIn] = useState('');
//   const [checkOut, setCheckOut] = useState('');
//   const [booked, setBooked] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => { document.body.style.overflow = ''; };
//   }, []);

//   const modalTabs = ['overview', 'facilities', 'reviews', 'faq'];

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
//       style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}
//       onClick={onClose}
//     >
//       <div
//         className="relative bg-white w-full md:max-w-4xl md:rounded-2xl shadow-2xl overflow-hidden"
//         style={{ maxHeight: '95vh', borderRadius: '20px 20px 0 0' }}
//         onClick={e => e.stopPropagation()}
//       >
//         {/* Drag handle (mobile) */}
//         <div className="flex justify-center pt-3 md:hidden">
//           <div className="w-12 h-1.5 rounded-full bg-gray-300" />
//         </div>

//         {/* Gallery */}
//         <div className="relative h-56 md:h-72 overflow-hidden">
//           <img
//             src={dest.gallery[activeImg]}
//             alt={dest.name}
//             className="w-full h-full object-cover transition-all duration-500"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//           {/* Prev/Next */}
//           {dest.gallery.length > 1 && (
//             <>
//               <button
//                 onClick={() => setActiveImg((activeImg - 1 + dest.gallery.length) % dest.gallery.length)}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow"
//               ><ChevronLeft className="w-4 h-4 text-gray-800" /></button>
//               <button
//                 onClick={() => setActiveImg((activeImg + 1) % dest.gallery.length)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow"
//               ><ChevronRight className="w-4 h-4 text-gray-800" /></button>
//             </>
//           )}
//           {/* Dots */}
//           <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
//             {dest.gallery.map((_, i) => (
//               <button key={i} onClick={() => setActiveImg(i)}
//                 className={`w-2 h-2 rounded-full transition-all ${activeImg === i ? 'bg-white w-5' : 'bg-white/50'}`}
//               />
//             ))}
//           </div>
//           {/* Close */}
//           <button
//             onClick={onClose}
//             className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-lg transition-all"
//           ><X className="w-4 h-4 text-gray-700" /></button>
//           {/* Like */}
//           <button
//             onClick={() => setLiked(!liked)}
//             className="absolute top-3 right-12 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-lg transition-all"
//           ><Heart className={`w-4 h-4 ${liked ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} /></button>
//           {/* Name overlay */}
//           <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
//             <div className="flex items-end justify-between">
//               <div>
//                 <h2 className="text-white text-2xl font-bold leading-tight">{dest.name}</h2>
//                 <div className="flex items-center gap-2 mt-0.5">
//                   <MapPin className="w-3.5 h-3.5 text-white/80" />
//                   <span className="text-white/80 text-sm">{dest.country}</span>
//                   <span className="text-white/40">·</span>
//                   <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
//                   <span className="text-white text-sm font-semibold">{dest.rating}</span>
//                   <span className="text-white/60 text-xs">({dest.reviewCount.toLocaleString()} reviews)</span>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <div className="text-white text-xs opacity-70 line-through">₹{dest.originalPrice}</div>
//                 <div className="text-white text-xl font-bold">₹{dest.price}</div>
//                 <div className="text-green-300 text-xs font-semibold">per person</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Tab Nav */}
//         <div className="flex border-b border-gray-100 bg-gray-50 px-1">
//           {modalTabs.map(t => (
//             <button
//               key={t}
//               onClick={() => setActiveTab(t)}
//               className={`flex-1 py-3 text-xs font-semibold uppercase tracking-wider transition-all ${
//                 activeTab === t
//                   ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
//                   : 'text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               {t}
//             </button>
//           ))}
//         </div>

//         {/* Scrollable body */}
//         <div className="overflow-y-auto" style={{ maxHeight: 'calc(95vh - 380px)' }}>

//           {/* OVERVIEW */}
//           {activeTab === 'overview' && (
//             <div className="p-5">
//               <p className="text-gray-600 text-sm leading-relaxed mb-5">{dest.longDesc}</p>

//               {/* Highlights */}
//               <div className="flex flex-wrap gap-2 mb-5">
//                 {dest.features.map((f, i) => (
//                   <span key={i} className="flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100">
//                     <BadgeCheck className="w-3 h-3" />{f}
//                   </span>
//                 ))}
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-3 mb-5">
//                 {[
//                   { label: 'Best Season', value: 'Apr – Jun', icon: <Zap className="w-4 h-4 text-amber-500" /> },
//                   { label: 'Avg Stay', value: '5–7 days', icon: <Clock className="w-4 h-4 text-blue-500" /> },
//                   { label: 'Trend', value: 'Rising ↑', icon: <TrendingUp className="w-4 h-4 text-green-500" /> },
//                 ].map((s, i) => (
//                   <div key={i} className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
//                     <div className="flex justify-center mb-1">{s.icon}</div>
//                     <div className="text-xs text-gray-500">{s.label}</div>
//                     <div className="text-sm font-bold text-gray-800">{s.value}</div>
//                   </div>
//                 ))}
//               </div>

//               {/* Booking */}
//               {!booked ? (
//                 <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
//                   <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
//                     <Calendar className="w-4 h-4 text-blue-600" /> Book This Trip
//                   </h3>
//                   <div className="grid grid-cols-2 gap-3 mb-3">
//                     <div>
//                       <label className="text-xs font-semibold text-gray-500 mb-1 block">Check-in</label>
//                       <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)}
//                         className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none bg-white"
//                       />
//                     </div>
//                     <div>
//                       <label className="text-xs font-semibold text-gray-500 mb-1 block">Check-out</label>
//                       <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)}
//                         className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none bg-white"
//                       />
//                     </div>
//                   </div>
//                   <div className="mb-4">
//                     <label className="text-xs font-semibold text-gray-500 mb-1 block">Guests</label>
//                     <div className="flex items-center border border-gray-200 rounded-xl bg-white px-3 py-2 w-36">
//                       <button onClick={() => setGuests(g => Math.max(1, g - 1))} className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700">−</button>
//                       <span className="flex-1 text-center font-bold text-gray-800">{guests}</span>
//                       <button onClick={() => setGuests(g => Math.min(10, g + 1))} className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700">+</button>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between mb-4 py-3 border-t border-blue-100">
//                     <span className="text-gray-600 text-sm">Total ({guests} guests)</span>
//                     <span className="text-xl font-bold text-blue-600">₹{(dest.price * guests).toLocaleString()}</span>
//                   </div>
//                   <button
//                     onClick={() => setBooked(true)}
//                     className="w-full py-3.5 rounded-xl font-bold text-white text-sm shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
//                     style={{ background: 'linear-gradient(135deg, #2563EB, #1d4ed8)' }}
//                   >
//                     Confirm Booking — ₹{(dest.price * guests).toLocaleString()}
//                   </button>
//                   <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-500">
//                     <Shield className="w-3.5 h-3.5 text-green-500" />
//                     Free cancellation · No booking fee · Instant confirmation
//                   </div>
//                 </div>
//               ) : (
//                 <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
//                   <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                     <Check className="w-7 h-7 text-green-600" />
//                   </div>
//                   <h3 className="text-green-800 font-bold text-lg mb-1">Booking Confirmed!</h3>
//                   <p className="text-green-600 text-sm">Your trip to {dest.name} is booked. Check your email for details.</p>
//                   <button onClick={() => setBooked(false)} className="mt-4 text-xs text-gray-500 underline">Cancel booking</button>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* FACILITIES */}
//           {activeTab === 'facilities' && (
//             <div className="p-5">
//               <h3 className="font-bold text-gray-800 mb-4 text-base">What's Included</h3>
//               <div className="grid grid-cols-2 gap-3">
//                 {dest.amenities.map((a, i) => (
//                   <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
//                     <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
//                       {amenityIcons[a] || <Check className="w-4 h-4" />}
//                     </div>
//                     <span className="text-sm font-medium text-gray-700">{a}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-6">
//                 <h3 className="font-bold text-gray-800 mb-3 text-base">Travel Essentials</h3>
//                 <div className="space-y-2">
//                   {[
//                     { label: 'Languages', value: 'Local + English spoken' },
//                     { label: 'Currency', value: 'Varies by country' },
//                     { label: 'Power Plugs', value: 'Adapter recommended' },
//                     { label: 'Health', value: 'Standard vaccinations' },
//                     { label: 'Emergency', value: '112 (Intl. standard)' },
//                   ].map((item, i) => (
//                     <div key={i} className="flex justify-between items-center py-2.5 border-b border-gray-100">
//                       <span className="text-sm text-gray-500">{item.label}</span>
//                       <span className="text-sm font-semibold text-gray-800">{item.value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* REVIEWS */}
//           {activeTab === 'reviews' && (
//             <div className="p-5">
//               <div className="flex items-center gap-4 mb-5 p-4 bg-blue-50 rounded-2xl">
//                 <div className="text-center">
//                   <div className="text-4xl font-black text-blue-600">{dest.rating}</div>
//                   <div className="flex gap-0.5 justify-center mt-1">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(dest.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`} />
//                     ))}
//                   </div>
//                   <div className="text-xs text-gray-500 mt-1">{dest.reviewCount.toLocaleString()} reviews</div>
//                 </div>
//                 <div className="flex-1">
//                   {[5,4,3,2,1].map(star => (
//                     <div key={star} className="flex items-center gap-2 mb-1">
//                       <span className="text-xs text-gray-500 w-3">{star}</span>
//                       <div className="flex-1 bg-gray-200 rounded-full h-1.5">
//                         <div className="h-1.5 rounded-full bg-yellow-400" style={{ width: `${star === 5 ? 65 : star === 4 ? 25 : star === 3 ? 7 : 2}%` }} />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 {dest.reviews.map((r, i) => (
//                   <div key={i} className="p-4 border border-gray-100 rounded-2xl">
//                     <div className="flex items-start gap-3">
//                       <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
//                         {r.avatar}
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex items-center justify-between">
//                           <div className="font-semibold text-gray-800 text-sm">{r.name}</div>
//                           <div className="text-xs text-gray-400">{r.date}</div>
//                         </div>
//                         <div className="flex gap-0.5 mt-0.5 mb-2">
//                           {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
//                         </div>
//                         <p className="text-gray-600 text-sm leading-relaxed">{r.comment}</p>
//                         <button className="flex items-center gap-1 mt-2 text-xs text-gray-400 hover:text-blue-500 transition-colors">
//                           <ThumbsUp className="w-3 h-3" /> Helpful
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <button className="w-full mt-4 py-3 border-2 border-blue-100 text-blue-600 font-semibold text-sm rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
//                 <MessageSquare className="w-4 h-4" /> Write a Review
//               </button>
//             </div>
//           )}

//           {/* FAQ */}
//           {activeTab === 'faq' && (
//             <div className="p-5">
//               <h3 className="font-bold text-gray-800 mb-4 text-base flex items-center gap-2">
//                 <Info className="w-4 h-4 text-blue-500" /> Frequently Asked Questions
//               </h3>
//               <div className="space-y-2">
//                 {dest.faq.map((item, i) => (
//                   <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
//                     <button
//                       className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
//                       onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
//                     >
//                       <span className="text-sm font-semibold text-gray-800 pr-3">{item.q}</span>
//                       {expandedFaq === i
//                         ? <ChevronUp className="w-4 h-4 text-blue-500 flex-shrink-0" />
//                         : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
//                     </button>
//                     {expandedFaq === i && (
//                       <div className="px-4 pb-4 bg-blue-50">
//                         <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ────────────────────────────────────────────────────────────────
// // DESTINATION CARD
// // ────────────────────────────────────────────────────────────────
// const DestCard = ({ dest, onClick }) => {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <div
//       className="bg-white rounded-2xl border border-gray-150 overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//       onClick={() => onClick(dest)}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{ boxShadow: hovered ? '0 20px 40px rgba(0,0,0,0.10)' : '0 2px 8px rgba(0,0,0,0.05)' }}
//     >
//       <div className="relative h-44 overflow-hidden">
//         <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//         <div className="absolute top-3 left-3">
//           <span className="bg-white/90 backdrop-blur text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full shadow">
//             {dest.country}
//           </span>
//         </div>
//         <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur px-2 py-0.5 rounded-full">
//           <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
//           <span className="text-xs font-bold text-gray-800">{dest.rating}</span>
//         </div>
//         <div className="absolute bottom-3 right-3">
//           <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
//             Save ₹{dest.originalPrice - dest.price}
//           </span>
//         </div>
//       </div>

//       <div className="p-4">
//         <div className="flex items-start justify-between mb-2">
//           <h3 className="text-base font-bold text-gray-900">{dest.name}</h3>
//           <div className="text-right flex-shrink-0 ml-2">
//             <div className="text-xs text-gray-400 line-through">₹{dest.originalPrice}</div>
//             <div className="text-base font-black text-blue-600">₹{dest.price}</div>
//           </div>
//         </div>
//         <p className="text-gray-500 text-xs mb-3 leading-relaxed line-clamp-2">{dest.description}</p>
//         <div className="flex flex-wrap gap-1 mb-3">
//           {dest.features.slice(0, 2).map((f, i) => (
//             <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">{f}</span>
//           ))}
//         </div>
//         <div className="flex items-center justify-between pt-3 border-t border-gray-100">
//           <span className="text-xs text-gray-400">{dest.reviewCount.toLocaleString()} reviews</span>
//           <button className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors">
//             View Details <ArrowRight className="w-3 h-3" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ────────────────────────────────────────────────────────────────
// // MAIN COMPONENT
// // ────────────────────────────────────────────────────────────────
// const TripBest = () => {
//   const [activeTab, setActiveTab] = useState('Popular');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedDateIndex, setSelectedDateIndex] = useState(2);
//   const [passengerCount, setPassengerCount] = useState(1);
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [selectedDest, setSelectedDest] = useState(null);
//   const [sortBy, setSortBy] = useState('Recommended');

//   const sortOptions = ['Recommended', 'Price: Low to High', 'Price: High to Low', 'Top Rated'];

//   const filtered = popularDestinations
//     .filter(d => {
//       const q = searchQuery.toLowerCase();
//       return !q || d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q);
//     })
//     .sort((a, b) => {
//       if (sortBy === 'Price: Low to High') return a.price - b.price;
//       if (sortBy === 'Price: High to Low') return b.price - a.price;
//       if (sortBy === 'Top Rated') return b.rating - a.rating;
//       return 0;
//     });

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* ── HERO / SEARCH ── */}
//       <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 pt-8 pb-16 px-4 relative overflow-hidden">
//         {/* Background decoration */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white" />
//           <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white" />
//         </div>

//         <div className="max-w-4xl mx-auto relative z-10">
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-white/90 text-xs font-semibold mb-4">
//               <Globe className="w-3.5 h-3.5" /> 2026 Global 100 Rankings
//             </div>
//             <h1 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
//               Discover Your Next <br />
//               <span style={{ color: '#FCD34D' }}>Dream Destination</span>
//             </h1>
//             <p className="text-white/70 text-sm">Best prices · Verified stays · Instant booking · Zero fees</p>
//           </div>

//           {/* Search Card */}
//           <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-5">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
//               {/* Destination */}
//               <div className="md:col-span-2">
//                 <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 block">Where to?</label>
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={e => setSearchQuery(e.target.value)}
//                     placeholder="Search destinations..."
//                     className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
//                   />
//                 </div>
//               </div>

//               {/* Check-in */}
//               <div>
//                 <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 block">Check-in</label>
//                 <div
//                   className="flex items-center justify-between border border-gray-200 rounded-xl px-3 py-3 cursor-pointer hover:border-blue-400 transition-colors"
//                   onClick={() => setShowDatePicker(!showDatePicker)}
//                 >
//                   <div>
//                     <div className="text-sm font-semibold text-gray-800">{dates[selectedDateIndex].day}, {dates[selectedDateIndex].date}</div>
//                     <div className="text-xs text-gray-400">After 2:00 PM</div>
//                   </div>
//                   <ChevronDown className="w-4 h-4 text-gray-400" />
//                 </div>
//               </div>

//               {/* Guests */}
//               <div>
//                 <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 block">Guests</label>
//                 <div className="flex items-center border border-gray-200 rounded-xl px-3 py-3 gap-2">
//                   <Users className="w-4 h-4 text-blue-500" />
//                   <button onClick={() => setPassengerCount(g => Math.max(1, g - 1))} className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700 text-sm">−</button>
//                   <span className="flex-1 text-center font-bold text-gray-800 text-sm">{passengerCount}</span>
//                   <button onClick={() => setPassengerCount(g => Math.min(10, g + 1))} className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700 text-sm">+</button>
//                 </div>
//               </div>
//             </div>

//             {showDatePicker && (
//               <div className="mb-4 border border-gray-100 rounded-xl p-3 bg-gray-50">
//                 <div className="flex gap-1 overflow-x-auto">
//                   {dates.map((d, i) => (
//                     <button
//                       key={i}
//                       onClick={() => { setSelectedDateIndex(i); setShowDatePicker(false); }}
//                       className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-center text-xs font-semibold transition-all ${
//                         selectedDateIndex === i ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
//                       }`}
//                     >
//                       <div>{d.day}</div>
//                       <div className="font-normal opacity-80">{d.date}</div>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             <button className="w-full py-3.5 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-200 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
//               style={{ background: 'linear-gradient(135deg, #2563EB, #1d4ed8)' }}
//             >
//               <Search className="w-4 h-4" /> Search Destinations
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ── CONTENT ── */}
//       <div className="max-w-7xl mx-auto px-4 -mt-6 pb-12">

//         {/* Date strip */}
//         <div className="bg-white rounded-2xl shadow-md p-4 mb-5 overflow-x-auto flex gap-2">
//           {dates.map((d, i) => (
//             <button
//               key={i}
//               onClick={() => setSelectedDateIndex(i)}
//               className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-xs font-semibold text-center transition-all ${
//                 selectedDateIndex === i ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
//               }`}
//             >
//               <div>{d.day}</div>
//               <div className={`font-normal ${selectedDateIndex === i ? 'text-blue-200' : 'text-gray-400'}`}>{d.date}</div>
//             </button>
//           ))}
//         </div>

//         {/* Tabs + Sort */}
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
//           <div className="flex gap-2 overflow-x-auto pb-1">
//             {tabs.map(t => (
//               <button
//                 key={t}
//                 onClick={() => setActiveTab(t)}
//                 className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex-shrink-0 transition-all ${
//                   activeTab === t ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'
//                 }`}
//               >
//                 {t}
//               </button>
//             ))}
//           </div>
//           <div className="flex gap-2 flex-shrink-0">
//             {sortOptions.map(o => (
//               <button
//                 key={o}
//                 onClick={() => setSortBy(o)}
//                 className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
//                   sortBy === o ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-200'
//                 }`}
//               >
//                 {o}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Results count */}
//         <p className="text-xs text-gray-400 font-medium mb-4">Showing {filtered.length} destination{filtered.length !== 1 ? 's' : ''}</p>

//         {/* Destinations Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
//           {filtered.map(dest => (
//             <DestCard key={dest.id} dest={dest} onClick={setSelectedDest} />
//           ))}
//         </div>

//         {/* Stays Section */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
//           <div className="flex items-center justify-between mb-5">
//             <h2 className="text-lg font-black text-gray-800 flex items-center gap-2">
//               <Building2 className="w-5 h-5 text-blue-500" /> Top Stays
//             </h2>
//             <button className="text-blue-600 text-xs font-semibold hover:text-blue-800 flex items-center gap-1">
//               See all <ArrowRight className="w-3 h-3" />
//             </button>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {[
//               { name: "Luxury Hotels", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=350&fit=crop", price: 350, rating: 4.8, desc: "5-star accommodations" },
//               { name: "Family Hotels", image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?w=600&h=350&fit=crop", price: 180, rating: 4.5, desc: "Kid-friendly amenities" },
//               { name: "Scenic Hotels", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=350&fit=crop", price: 220, rating: 4.7, desc: "Breathtaking views" },
//               { name: "Cultural Hotels", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=350&fit=crop", price: 195, rating: 4.6, desc: "Local architecture" },
//             ].map((item, i) => (
//               <div key={i}
//                 className="border border-gray-100 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
//                 onClick={() => setSelectedDest(popularDestinations[i % popularDestinations.length])}
//               >
//                 <div className="h-36 overflow-hidden relative">
//                   <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//                   <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-0.5 flex items-center gap-1">
//                     <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
//                     <span className="text-xs font-bold text-gray-700">{item.rating}</span>
//                   </div>
//                 </div>
//                 <div className="p-3">
//                   <h3 className="font-bold text-gray-800 text-sm mb-0.5">{item.name}</h3>
//                   <p className="text-gray-500 text-xs mb-2">{item.desc}</p>
//                   <div className="flex items-center justify-between">
//                     <span className="text-blue-600 font-black text-sm">₹{item.price}<span className="text-gray-400 font-normal text-xs">/night</span></span>
//                     <button className="text-xs text-blue-600 font-semibold hover:underline">Book →</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Things to Do */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
//           <div className="flex items-center justify-between mb-5">
//             <h2 className="text-lg font-black text-gray-800 flex items-center gap-2">
//               <Sparkles className="w-5 h-5 text-amber-500" /> Things To Do
//             </h2>
//             <button className="text-blue-600 text-xs font-semibold hover:text-blue-800 flex items-center gap-1">
//               See all <ArrowRight className="w-3 h-3" />
//             </button>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {[
//               { name: "Best Activities", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=350&fit=crop", price: 75, rating: 4.8 },
//               { name: "Family Attractions", image: "https://images.unsplash.com/photo-1502086223501-681a981c2522?w=600&h=350&fit=crop", price: 45, rating: 4.5 },
//               { name: "Spring Outings", image: "https://images.unsplash.com/photo-1490750967868-58cb75069faf?w=600&h=400&fit=crop", price: 60, rating: 4.6 },
//               { name: "Water Escapes", image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc452e?w=600&h=350&fit=crop", price: 85, rating: 4.7 },
//             ].map((item, i) => (
//               <div key={i}
//                 className="border border-gray-100 rounded-2xl overflow-hidden hover:border-amber-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
//                 onClick={() => setSelectedDest(popularDestinations[(i + 4) % popularDestinations.length])}
//               >
//                 <div className="h-36 overflow-hidden relative">
//                   <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//                   <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-0.5 flex items-center gap-1">
//                     <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
//                     <span className="text-xs font-bold text-gray-700">{item.rating}</span>
//                   </div>
//                 </div>
//                 <div className="p-3">
//                   <h3 className="font-bold text-gray-800 text-sm mb-2">{item.name}</h3>
//                   <div className="flex items-center justify-between">
//                     <span className="text-amber-600 font-black text-sm">₹{item.price}<span className="text-gray-400 font-normal text-xs">/person</span></span>
//                     <button className="text-xs text-blue-600 font-semibold hover:underline">Book →</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── DETAIL MODAL ── */}
//       {selectedDest && (
//         <DetailModal dest={selectedDest} onClose={() => setSelectedDest(null)} />
//       )}
//     </div>
//   );
// };

// export default TripBest;




















// import React, { useState, useEffect, useCallback } from 'react';
// import {
//   Search, ChevronLeft, ChevronRight, MapPin, Star, Award,
//   Heart, Wifi, Coffee, Car, Dumbbell, Waves,
//   Utensils, Clock, Shield, Check, ChevronDown, ChevronUp,
//   Phone, Users, Calendar, ArrowRight,
//   ThumbsUp, MessageSquare, Info, Sparkles, Building2,
//   BadgeCheck, Zap, TrendingUp, Globe
// } from 'lucide-react';

// // ────────────────────────────────────────────────────────────────
// // DATA
// // ────────────────────────────────────────────────────────────────
// const heroImages = [
//   "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=700&fit=crop",
//   "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1200&h=700&fit=crop",
//   "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&h=700&fit=crop",
//   "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop",
//   "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=700&fit=crop",
// ];

// const popularDestinations = [
//   {
//     id: 1, name: "Florence", country: "Italy",
//     image: "https://images.unsplash.com/photo-1529307474898-e854236b67eb?w=800&h=500&fit=crop",
//     gallery: [
//       "https://images.unsplash.com/photo-1529307474898-e854236b67eb?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1571321346935-41e6b3fa5c3b?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop"
//     ],
//     rating: 4.8, reviewCount: 1250, price: 899, originalPrice: 1200,
//     features: ["Historic Architecture", "Art Galleries", "Italian Cuisine"],
//     amenities: ["Free WiFi", "Guided Tours", "Transportation", "Breakfast", "Pool", "Spa"],
//     description: "The birthplace of the Renaissance, known for its art and architecture.",
//     longDesc: "Florence, the cradle of the Italian Renaissance, is a city that breathes art and history at every corner. Walk across the iconic Ponte Vecchio, marvel at Michelangelo's David in the Accademia Gallery, or lose yourself in the Uffizi — one of the world's greatest art museums. The city's terracotta rooftops and cobblestone alleys make it an unforgettable destination.",
//     faq: [
//       { q: "What is the best time to visit Florence?", a: "April–June and September–October offer mild weather and fewer crowds." },
//       { q: "Is a visa required?", a: "EU citizens don't need a visa. Others require a Schengen visa." },
//       { q: "How many days should I plan?", a: "3–5 days is ideal to cover the main highlights comfortably." },
//       { q: "Is Florence family-friendly?", a: "Absolutely! Many museums offer kids' programs and the piazzas are great for strolling." }
//     ],
//     reviews: [
//       { name: "Priya Sharma", avatar: "PS", rating: 5, date: "March 2026", comment: "Absolutely breathtaking! The art scene is unmatched and every street is a postcard." },
//       { name: "Rajesh Kumar", avatar: "RK", rating: 4, date: "February 2026", comment: "Loved the food and the Duomo. A bit crowded in peak season but totally worth it." },
//       { name: "Ananya Singh", avatar: "AS", rating: 5, date: "January 2026", comment: "Florence stole my heart. The guided tour was incredibly informative." }
//     ]
//   },
//   {
//     id: 2, name: "Los Angeles", country: "USA",
//     image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&h=500&fit=crop",
//     gallery: [
//       "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?w=800&h=500&fit=crop"
//     ],
//     rating: 4.5, reviewCount: 980, price: 1200, originalPrice: 1500,
//     features: ["Hollywood", "Beaches", "Entertainment"],
//     amenities: ["City Tours", "Beach Access", "Shopping", "Rooftop Pool", "Valet", "Bar"],
//     description: "The entertainment capital of the world with sunny beaches.",
//     longDesc: "Los Angeles is a sprawling metropolis of glamour, creativity, and sunshine. From the star-studded Hollywood Walk of Fame to the sandy shores of Santa Monica and Venice Beach, LA has something for everyone. Explore world-class museums like LACMA, catch a Lakers game at Crypto.com Arena, or splurge on dining in Beverly Hills.",
//     faq: [
//       { q: "Do I need a car in LA?", a: "Yes, LA is a car-centric city. Renting a car or using rideshares is highly recommended." },
//       { q: "What are the must-see spots?", a: "Hollywood Sign, Griffith Observatory, Getty Center, and Santa Monica Pier." },
//       { q: "Is LA safe for tourists?", a: "Tourist areas are generally safe. Exercise normal precautions in unfamiliar neighborhoods." },
//       { q: "Best time to visit?", a: "March–May and September–November for pleasant weather." }
//     ],
//     reviews: [
//       { name: "Vikram Nair", avatar: "VN", rating: 5, date: "April 2026", comment: "Beverly Hills and Santa Monica were highlights. The city is massive but incredibly fun!" },
//       { name: "Meera Patel", avatar: "MP", rating: 4, date: "March 2026", comment: "Great experience overall. Traffic is intense but the beaches make up for everything." }
//     ]
//   },
//   {
//     id: 3, name: "Rome", country: "Italy",
//     image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=500&fit=crop",
//     gallery: [
//       "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&h=500&fit=crop"
//     ],
//     rating: 4.9, reviewCount: 2100, price: 950, originalPrice: 1300,
//     features: ["Ancient History", "Colosseum", "Vatican City"],
//     amenities: ["Historical Sites", "Museums", "Local Food", "Concierge", "WiFi", "Breakfast"],
//     description: "Eternal city with ancient ruins and world-famous landmarks.",
//     longDesc: "Rome is a living museum where ancient history meets vibrant modern life. Walk through the Forum Romanum where Julius Caesar once walked, toss a coin into the Trevi Fountain, and stand in awe inside the Pantheon. A visit to Vatican City — home to St. Peter's Basilica and the Sistine Chapel — is an absolute must.",
//     faq: [
//       { q: "How many days do I need in Rome?", a: "4–5 days gives you enough time for the major sights without rushing." },
//       { q: "Is the Vatican included?", a: "Vatican is a separate state but very accessible from central Rome." },
//       { q: "Is the food really that good?", a: "Absolutely. Roman pasta, gelato, and pizza are world-class." },
//       { q: "Best way to get around Rome?", a: "Walking and metro are best. Many top sights are clustered together." }
//     ],
//     reviews: [
//       { name: "Sunita Reddy", avatar: "SR", rating: 5, date: "March 2026", comment: "Rome exceeded all my expectations. The Colosseum at sunset is magical." },
//       { name: "Arjun Mehta", avatar: "AM", rating: 5, date: "February 2026", comment: "Vatican City was surreal. The guided tour was worth every rupee." },
//       { name: "Deepa Iyer", avatar: "DI", rating: 4, date: "January 2026", comment: "Wonderful city but very busy. Book tickets in advance for everything!" }
//     ]
//   },
//   {
//     id: 4, name: "London", country: "UK",
//     image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop",
//     gallery: [
//       "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=500&fit=crop"
//     ],
//     rating: 4.7, reviewCount: 1850, price: 1100, originalPrice: 1400,
//     features: ["Royal Heritage", "Museums", "Theatre"],
//     amenities: ["City Pass", "River Cruise", "West End Shows", "Concierge", "Bar", "WiFi"],
//     description: "Historic capital with royal palaces and modern attractions.",
//     longDesc: "London is a city of extraordinary contrasts — ancient traditions alongside cutting-edge culture. Visit Buckingham Palace, explore the Tower of London, and cross the iconic Tower Bridge. World-class free museums like the British Museum and Natural History Museum make it a paradise for the intellectually curious.",
//     faq: [
//       { q: "Is London expensive?", a: "London can be pricey, but many museums are free. Budget ₹5,000–₹8,000/day for comfort." },
//       { q: "Do I need a UK visa?", a: "Indian passport holders require a UK Standard Visitor Visa." },
//       { q: "Oyster card or contactless?", a: "Both work on London transport. Contactless is most convenient for visitors." },
//       { q: "Best area to stay in London?", a: "Covent Garden, South Bank, or Kensington for easy access to attractions." }
//     ],
//     reviews: [
//       { name: "Kiran Bose", avatar: "KB", rating: 5, date: "April 2026", comment: "London is endlessly fascinating. The British Museum alone is worth the trip!" },
//       { name: "Pooja Tiwari", avatar: "PT", rating: 4, date: "March 2026", comment: "Loved the West End show and the Thames riverboat. Very organized city." }
//     ]
//   },
//   {
//     id: 5, name: "New York", country: "USA",
//     image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop",
//     gallery: [
//       "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&h=500&fit=crop"
//     ],
//     rating: 4.6, reviewCount: 1950, price: 1300, originalPrice: 1650,
//     features: ["Broadway", "Statue of Liberty", "Central Park"],
//     amenities: ["City Tours", "Shopping", "Dining", "Rooftop Bar", "Gym", "24hr Concierge"],
//     description: "The city that never sleeps with iconic skyscrapers.",
//     longDesc: "New York City is arguably the most iconic city in the world. Times Square dazzles at night, Central Park offers a green escape from the urban rush, and the Statue of Liberty stands as a global symbol of freedom. Catch a Broadway show, eat world-class food in every cuisine imaginable, and shop on Fifth Avenue.",
//     faq: [
//       { q: "What is the New York City Pass?", a: "A bundle ticket that covers major attractions like the Empire State Building, MoMA, and more." },
//       { q: "Best time to visit NYC?", a: "Spring (April–June) and Fall (September–November) are ideal weather-wise." },
//       { q: "Is NYC safe for tourists?", a: "Most tourist areas are very safe. Times Square, Midtown, and Manhattan in general are well-policed." },
//       { q: "How to get from JFK to Manhattan?", a: "AirTrain + Subway is cheapest; taxi/rideshare is most convenient (~₹3,000–₹4,500)." }
//     ],
//     reviews: [
//       { name: "Rahul Gupta", avatar: "RG", rating: 5, date: "April 2026", comment: "NYC is just electric. Times Square at midnight felt surreal." },
//       { name: "Nisha Joshi", avatar: "NJ", rating: 5, date: "March 2026", comment: "Broadway show + Central Park + Brooklyn Bridge = perfect trip." }
//     ]
//   },
//   {
//     id: 6, name: "Kyoto", country: "Japan",
//     image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=500&fit=crop",
//     gallery: [
//       "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&h=500&fit=crop"
//     ],
//     rating: 4.8, reviewCount: 920, price: 1150, originalPrice: 1450,
//     features: ["Temples", "Traditional Gardens", "Cherry Blossoms"],
//     amenities: ["Cultural Tours", "Tea Ceremonies", "Hot Springs", "Ryokan Stay", "WiFi", "Breakfast"],
//     description: "Ancient capital with traditional temples and gardens.",
//     longDesc: "Kyoto is the soul of Japan — a city where geisha still walk cobblestone streets and ancient temples rise above bamboo forests. The Fushimi Inari Shrine with its thousands of red torii gates is otherworldly. Experience a traditional tea ceremony, stay in a ryokan inn, and witness the surreal beauty of cherry blossoms in spring.",
//     faq: [
//       { q: "When do cherry blossoms bloom in Kyoto?", a: "Late March to early April, though exact timing varies each year." },
//       { q: "Is Kyoto good for solo travelers?", a: "Extremely so. Kyoto is safe, clean, and easy to navigate even without Japanese." },
//       { q: "Kyoto vs Osaka — which is better?", a: "Both are great! Kyoto for culture and history, Osaka for food and nightlife. Many visit both." },
//       { q: "What should I wear at temples?", a: "Dress modestly. Cover shoulders and knees when entering sacred spaces." }
//     ],
//     reviews: [
//       { name: "Sanjay Kapoor", avatar: "SK", rating: 5, date: "April 2026", comment: "Fushimi Inari at dawn is something I'll never forget. Pure magic." },
//       { name: "Lakshmi Rao", avatar: "LR", rating: 5, date: "March 2026", comment: "The ryokan experience was transformative. Kyoto is unlike anywhere else." }
//     ]
//   },
//   {
//     id: 7, name: "Phuket", country: "Thailand",
//     image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&h=500&fit=crop",
//     gallery: [
//       "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop"
//     ],
//     rating: 4.4, reviewCount: 870, price: 650, originalPrice: 850,
//     features: ["Beaches", "Islands", "Night Markets"],
//     amenities: ["Beach Resorts", "Water Sports", "Thai Massage", "Pool", "Bar", "Snorkeling"],
//     description: "Tropical paradise with stunning beaches and islands.",
//     longDesc: "Phuket is Thailand's most celebrated island destination, known for its gorgeous beaches, turquoise waters, and vibrant nightlife. Explore Phi Phi Island by speedboat, snorkel in crystal-clear bays, or simply relax on Patong Beach with a fresh coconut. The night markets are a foodie's dream.",
//     faq: [
//       { q: "Best beaches in Phuket?", a: "Kata Beach, Karon Beach, and Freedom Beach are top picks for cleaner, calmer waters." },
//       { q: "Do I need visa for Thailand?", a: "Indian passport holders get visa-on-arrival or e-visa. Check current regulations." },
//       { q: "Is Phuket safe for solo travelers?", a: "Yes, it's generally safe. Use reputable transport and stay in well-reviewed areas." },
//       { q: "Best time to visit Phuket?", a: "November to April (dry season) is ideal. May–October is monsoon season." }
//     ],
//     reviews: [
//       { name: "Mohit Sharma", avatar: "MS", rating: 4, date: "March 2026", comment: "Beaches are beautiful! Phi Phi Island tour was the highlight of my trip." },
//       { name: "Neha Gupta", avatar: "NG", rating: 5, date: "February 2026", comment: "Best value destination. Amazing food, hospitality, and scenery." }
//     ]
//   },
//   {
//     id: 8, name: "Barcelona", country: "Spain",
//     image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=500&fit=crop",
//     gallery: [
//       "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=500&fit=crop",
//       "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&h=500&fit=crop"
//     ],
//     rating: 4.7, reviewCount: 1320, price: 1050, originalPrice: 1350,
//     features: ["Gaudi Architecture", "Beaches", "Tapas"],
//     amenities: ["Art Tours", "Beach Clubs", "Catalan Culture", "Rooftop Pool", "Bar", "WiFi"],
//     description: "Vibrant city with unique architecture and Mediterranean beaches.",
//     longDesc: "Barcelona is a feast for the senses — Gaudí's fantastical Sagrada Família, the mosaic wonderland of Park Güell, and the lively La Boqueria market. The city seamlessly blends world-class architecture, beachside relaxation, and a passionate food culture. Stroll down Las Ramblas, eat pintxos in the Gothic Quarter, and dance the night away.",
//     faq: [
//       { q: "How do I get tickets for Sagrada Família?", a: "Book online in advance — it sells out weeks ahead during peak season." },
//       { q: "Is Barcelona safe?", a: "Generally safe, but watch for pickpockets in tourist-heavy areas like Las Ramblas." },
//       { q: "Best area to stay?", a: "Gothic Quarter for culture, Eixample for style, Barceloneta for beach access." },
//       { q: "Can I get by with English?", a: "Yes, English is widely spoken in tourist areas. Knowing basic Spanish helps." }
//     ],
//     reviews: [
//       { name: "Amit Verma", avatar: "AV", rating: 5, date: "April 2026", comment: "Sagrada Família is mind-blowing. Gaudí was truly a genius." },
//       { name: "Ritu Nair", avatar: "RN", rating: 4, date: "March 2026", comment: "The tapas and nightlife are incredible. Barcelona has so much energy!" }
//     ]
//   }
// ];

// const amenityIcons = {
//   "Free WiFi": <Wifi className="w-4 h-4" />, "Wifi": <Wifi className="w-4 h-4" />, "WiFi": <Wifi className="w-4 h-4" />,
//   "Breakfast": <Coffee className="w-4 h-4" />, "Local Food": <Utensils className="w-4 h-4" />,
//   "Pool": <Waves className="w-4 h-4" />, "Rooftop Pool": <Waves className="w-4 h-4" />,
//   "Beach Clubs": <Waves className="w-4 h-4" />, "Beach Access": <Waves className="w-4 h-4" />, "Beach Resorts": <Waves className="w-4 h-4" />,
//   "Gym": <Dumbbell className="w-4 h-4" />, "Spa": <Sparkles className="w-4 h-4" />,
//   "Transportation": <Car className="w-4 h-4" />, "Valet": <Car className="w-4 h-4" />,
//   "Shopping": <Award className="w-4 h-4" />,
// };

// const tabs = ["Popular", "Asia", "Europe", "North America", "Oceania", "Africa", "South America"];
// const dates = [
//   { day: 'Tue', date: 'Feb 10' }, { day: 'Wed', date: 'Feb 11' },
//   { day: 'Thu', date: 'Feb 12' }, { day: 'Fri', date: 'Feb 13' },
//   { day: 'Sat', date: 'Feb 14' }, { day: 'Sun', date: 'Feb 15' },
//   { day: 'Mon', date: 'Feb 16' }
// ];

// // ────────────────────────────────────────────────────────────────
// // DETAIL PAGE (Full Page — replaces modal)
// // ────────────────────────────────────────────────────────────────
// const DetailPage = ({ dest, onBack }) => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const [activeImg, setActiveImg] = useState(0);
//   const [expandedFaq, setExpandedFaq] = useState(null);
//   const [liked, setLiked] = useState(false);
//   const [guests, setGuests] = useState(2);
//   const [checkIn, setCheckIn] = useState('');
//   const [checkOut, setCheckOut] = useState('');
//   const [booked, setBooked] = useState(false);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const modalTabs = ['overview', 'facilities', 'reviews', 'faq'];

//   return (
//     <div className="min-h-screen bg-gray-50">

//       {/* ── Hero Image with Gallery ── */}
//       {/* <div className="relative h-72 md:h-96 overflow-hidden"> */}
//       <div className="relative h-64 sm:h-72 md:h-96 overflow-hidden">
//         <img
//           src={dest.gallery[activeImg]}
//           alt={dest.name}
//           className="w-full h-full object-cover transition-all duration-500"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />

//         {/* Prev/Next */}
//         {dest.gallery.length > 1 && (
//           <>
//             <button
//               onClick={() => setActiveImg((activeImg - 1 + dest.gallery.length) % dest.gallery.length)}
//               className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
//             ><ChevronLeft className="w-5 h-5 text-gray-800" /></button>
//             <button
//               onClick={() => setActiveImg((activeImg + 1) % dest.gallery.length)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
//             ><ChevronRight className="w-5 h-5 text-gray-800" /></button>
//           </>
//         )}

//         {/* Gallery dots */}
//         <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
//           {dest.gallery.map((_, i) => (
//             <button key={i} onClick={() => setActiveImg(i)}
//               className={`h-1.5 rounded-full transition-all ${activeImg === i ? 'bg-white w-6' : 'bg-white/50 w-2'}`}
//             />
//           ))}
//         </div>

//         {/* Back button */}
//         <button
//           onClick={onBack}
//           className="absolute top-4 left-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
//         >
//           <ChevronLeft className="w-5 h-5 text-gray-800" />
//         </button>

//         {/* Like button */}
//         <button
//           onClick={() => setLiked(!liked)}
//           className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
//         >
//           <Heart className={`w-5 h-5 ${liked ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
//         </button>

//         {/* Name + info overlay */}
//         <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
//           <div className="flex items-end justify-between">
//             <div>
//               <h1 className="text-white text-2xl sm:text-3xl font-bold leading-tight">{dest.name}</h1>
//               <div className="flex items-center gap-2 mt-1">
//                 <MapPin className="w-4 h-4 text-white/80" />
//                 <span className="text-white/80 text-sm">{dest.country}</span>
//                 <span className="text-white/40">·</span>
//                 <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
//                 <span className="text-white font-semibold text-sm">{dest.rating}</span>
//                 <span className="text-white/60 text-xs">({dest.reviewCount.toLocaleString()} reviews)</span>
//               </div>
//             </div>
//             <div className="text-right">
//               <div className="text-white/60 text-sm line-through">₹{dest.originalPrice}</div>
//               <div className="text-white text-2xl font-bold">₹{dest.price}</div>
//               <div className="text-green-300 text-xs font-semibold">per person</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Gallery thumbnails strip */}
//       <div className="flex gap-2 px-4 py-3 bg-white overflow-x-auto border-b border-gray-100">
//         {dest.gallery.map((src, i) => (
//           <button key={i} onClick={() => setActiveImg(i)}
//             className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${activeImg === i ? 'border-blue-500 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
//           >
//             <img src={src} alt="" className="w-full h-full object-cover" />
//           </button>
//         ))}
//       </div>

//       {/* Tab Navigation */}
//       <div className="flex border-b border-gray-200 bg-white sticky top-0 z-10 shadow-sm">
//         {modalTabs.map(t => (
//           <button
//             key={t}
//             onClick={() => setActiveTab(t)}
//             className={`flex-1 py-3.5 text-xs font-bold uppercase tracking-wider transition-all ${
//               activeTab === t
//                 ? 'text-blue-600 border-b-2 border-blue-600'
//                 : 'text-gray-400 hover:text-gray-600'
//             }`}
//           >
//             {t}
//           </button>
//         ))}
//       </div>

//       {/* ── OVERVIEW TAB ── */}
//       {activeTab === 'overview' && (
//         <div className="max-w-3xl mx-auto px-4 py-6">
//           <p className="text-gray-600 leading-relaxed mb-5">{dest.longDesc}</p>

//           {/* Feature badges */}
//           <div className="flex flex-wrap gap-2 mb-6">
//             {dest.features.map((f, i) => (
//               <span key={i} className="flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm font-semibold px-3 py-1.5 rounded-full border border-blue-100">
//                 <BadgeCheck className="w-4 h-4" />{f}
//               </span>
//             ))}
//           </div>

//           {/* Stats */}
//           {/* <div className="grid grid-cols-3 gap-3 mb-6"> */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
//             {[
//               { label: 'Best Season', value: 'Apr – Jun', icon: <Zap className="w-5 h-5 text-amber-500" /> },
//               { label: 'Avg Stay', value: '5–7 days', icon: <Clock className="w-5 h-5 text-blue-500" /> },
//               { label: 'Trend', value: 'Rising ↑', icon: <TrendingUp className="w-5 h-5 text-green-500" /> },
//             ].map((s, i) => (
//               <div key={i} className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
//                 <div className="flex justify-center mb-1.5">{s.icon}</div>
//                 <div className="text-xs text-gray-500 mb-1">{s.label}</div>
//                 <div className="text-sm font-bold text-gray-800">{s.value}</div>
//               </div>
//             ))}
//           </div>

//           {/* Booking Section */}
//           {!booked ? (
//             <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
//               <h3 className="font-bold text-gray-800 mb-5 flex items-center gap-2 text-base">
//                 <Calendar className="w-5 h-5 text-blue-600" /> Book This Trip
//               </h3>
//               {/* <div className="grid grid-cols-2 gap-4 mb-4"> */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="text-xs font-semibold text-gray-500 mb-1.5 block uppercase tracking-wide">Check-in</label>
//                   <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)}
//                     className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none bg-white"
//                   />
//                 </div>
//                 <div>
//                   <label className="text-xs font-semibold text-gray-500 mb-1.5 block uppercase tracking-wide">Check-out</label>
//                   <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)}
//                     className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none bg-white"
//                   />
//                 </div>
//               </div>
//               <div className="mb-5">
//                 <label className="text-xs font-semibold text-gray-500 mb-1.5 block uppercase tracking-wide">Guests</label>
//                 <div className="flex items-center border border-gray-200 rounded-xl bg-white px-3 py-2 w-40">
//                   <button onClick={() => setGuests(g => Math.max(1, g - 1))} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700 text-lg">−</button>
//                   <span className="flex-1 text-center font-bold text-gray-800">{guests}</span>
//                   <button onClick={() => setGuests(g => Math.min(10, g + 1))} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700 text-lg">+</button>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between mb-5 py-4 border-t border-blue-100">
//                 <span className="text-gray-600">Total ({guests} guests)</span>
//                 <span className="text-2xl font-bold text-blue-600">₹{(dest.price * guests).toLocaleString()}</span>
//               </div>
//               <button
//                 onClick={() => setBooked(true)}
//                 className="w-full py-4 rounded-xl font-bold text-white shadow-lg hover:shadow-blue-300 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-base"
//                 style={{ background: 'linear-gradient(135deg, #2563EB, #1d4ed8)' }}
//               >
//                 Confirm Booking — ₹{(dest.price * guests).toLocaleString()}
//               </button>
//               <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-500">
//                 <Shield className="w-3.5 h-3.5 text-green-500" />
//                 Free cancellation · No booking fee · Instant confirmation
//               </div>
//             </div>
//           ) : (
//             <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Check className="w-8 h-8 text-green-600" />
//               </div>
//               <h3 className="text-green-800 font-bold text-xl mb-2">Booking Confirmed!</h3>
//               <p className="text-green-600">Your trip to {dest.name} is booked. Check your email for details.</p>
//               <button onClick={() => setBooked(false)} className="mt-4 text-sm text-gray-400 underline">Cancel booking</button>
//             </div>
//           )}
//         </div>
//       )}

//       {/* ── FACILITIES TAB ── */}
//       {activeTab === 'facilities' && (
//         <div className="max-w-3xl mx-auto px-4 py-6">
//           <h3 className="font-bold text-gray-800 mb-4 text-lg">What's Included</h3>
//           <div className="grid grid-cols-2 gap-3 mb-8">
//             {dest.amenities.map((a, i) => (
//               <div key={i} className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-gray-100 shadow-sm">
//                 <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
//                   {amenityIcons[a] || <Check className="w-4 h-4" />}
//                 </div>
//                 <span className="text-sm font-medium text-gray-700">{a}</span>
//               </div>
//             ))}
//           </div>

//           <h3 className="font-bold text-gray-800 mb-4 text-lg">Travel Essentials</h3>
//           <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
//             {[
//               { label: 'Languages', value: 'Local + English spoken' },
//               { label: 'Currency', value: 'Varies by country' },
//               { label: 'Power Plugs', value: 'Adapter recommended' },
//               { label: 'Health', value: 'Standard vaccinations' },
//               { label: 'Emergency', value: '112 (Intl. standard)' },
//             ].map((item, i) => (
//               <div key={i} className="flex justify-between items-center px-5 py-3.5 border-b border-gray-50 last:border-b-0">
//                 <span className="text-gray-500">{item.label}</span>
//                 <span className="font-semibold text-gray-800">{item.value}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* ── REVIEWS TAB ── */}
//       {activeTab === 'reviews' && (
//         <div className="max-w-3xl mx-auto px-4 py-6">
//           <div className="flex items-center gap-5 mb-6 p-5 bg-blue-50 rounded-2xl">
//             <div className="text-center">
//               <div className="text-5xl font-black text-blue-600">{dest.rating}</div>
//               <div className="flex gap-0.5 justify-center mt-1">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className={`w-4 h-4 ${i < Math.floor(dest.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`} />
//                 ))}
//               </div>
//               <div className="text-xs text-gray-500 mt-1">{dest.reviewCount.toLocaleString()} reviews</div>
//             </div>
//             <div className="flex-1">
//               {[5, 4, 3, 2, 1].map(star => (
//                 <div key={star} className="flex items-center gap-2 mb-1.5">
//                   <span className="text-xs text-gray-500 w-3">{star}</span>
//                   <div className="flex-1 bg-gray-200 rounded-full h-2">
//                     <div className="h-2 rounded-full bg-yellow-400" style={{ width: `${star === 5 ? 65 : star === 4 ? 25 : star === 3 ? 7 : 2}%` }} />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="space-y-4">
//             {dest.reviews.map((r, i) => (
//               <div key={i} className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
//                 <div className="flex items-start gap-3">
//                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
//                     {r.avatar}
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between">
//                       <div className="font-semibold text-gray-800">{r.name}</div>
//                       <div className="text-xs text-gray-400">{r.date}</div>
//                     </div>
//                     <div className="flex gap-0.5 mt-1 mb-2">
//                       {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
//                     </div>
//                     <p className="text-gray-600 leading-relaxed">{r.comment}</p>
//                     <button className="flex items-center gap-1 mt-3 text-xs text-gray-400 hover:text-blue-500 transition-colors">
//                       <ThumbsUp className="w-3.5 h-3.5" /> Helpful
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button className="w-full mt-5 py-3.5 border-2 border-blue-100 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
//             <MessageSquare className="w-4 h-4" /> Write a Review
//           </button>
//         </div>
//       )}

//       {/* ── FAQ TAB ── */}
//       {activeTab === 'faq' && (
//         <div className="max-w-3xl mx-auto px-4 py-6">
//           <h3 className="font-bold text-gray-800 mb-5 text-lg flex items-center gap-2">
//             <Info className="w-5 h-5 text-blue-500" /> Frequently Asked Questions
//           </h3>
//           <div className="space-y-2">
//             {dest.faq.map((item, i) => (
//               <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
//                 <button
//                   className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
//                   onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
//                 >
//                   <span className="font-semibold text-gray-800 pr-4">{item.q}</span>
//                   {expandedFaq === i
//                     ? <ChevronUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
//                     : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
//                 </button>
//                 {expandedFaq === i && (
//                   <div className="px-5 pb-5 bg-blue-50">
//                     <p className="text-gray-600 leading-relaxed">{item.a}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // ────────────────────────────────────────────────────────────────
// // DESTINATION CARD
// // ────────────────────────────────────────────────────────────────
// const DestCard = ({ dest, onClick }) => {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <div
//       className="bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//       onClick={() => onClick(dest)}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{ boxShadow: hovered ? '0 20px 40px rgba(0,0,0,0.10)' : '0 2px 8px rgba(0,0,0,0.05)' }}
//     >
//       {/* <div className="relative h-44 overflow-hidden"> */}
//       <div className="relative h-40 sm:h-44 overflow-hidden">
//         <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//         <div className="absolute top-3 left-3">
//           <span className="bg-white/90 backdrop-blur text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full shadow">
//             {dest.country}
//           </span>
//         </div>
//         <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur px-2 py-0.5 rounded-full">
//           <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
//           <span className="text-xs font-bold text-gray-800">{dest.rating}</span>
//         </div>
//         <div className="absolute bottom-3 right-3">
//           <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
//             Save ₹{dest.originalPrice - dest.price}
//           </span>
//         </div>
//       </div>

//       <div className="p-4">
//         <div className="flex items-start justify-between mb-2">
//           <h3 className="text-base font-bold text-gray-900">{dest.name}</h3>
//           <div className="text-right flex-shrink-0 ml-2">
//             <div className="text-xs text-gray-400 line-through">₹{dest.originalPrice}</div>
//             <div className="text-base font-black text-blue-600">₹{dest.price}</div>
//           </div>
//         </div>
//         <p className="text-gray-500 text-xs mb-3 leading-relaxed line-clamp-2">{dest.description}</p>
//         <div className="flex flex-wrap gap-1 mb-3">
//           {dest.features.slice(0, 2).map((f, i) => (
//             <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">{f}</span>
//           ))}
//         </div>
//         <div className="flex items-center justify-between pt-3 border-t border-gray-100">
//           <span className="text-xs text-gray-400">{dest.reviewCount.toLocaleString()} reviews</span>
//           <button className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors">
//             View Details <ArrowRight className="w-3 h-3" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ────────────────────────────────────────────────────────────────
// // HERO SLIDESHOW
// // ────────────────────────────────────────────────────────────────
// const HeroSlideshow = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide(prev => (prev + 1) % heroImages.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="absolute inset-0">
//       {heroImages.map((src, i) => (
//         <div
//           key={i}
//           className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
//           style={{
//             backgroundImage: `url(${src})`,
//             opacity: currentSlide === i ? 1 : 0,
//           }}
//         />
//       ))}
//       {/* Dots */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
//         {heroImages.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentSlide(i)}
//             className={`h-1.5 rounded-full transition-all ${currentSlide === i ? 'bg-white w-6' : 'bg-white/50 w-1.5'}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// // ────────────────────────────────────────────────────────────────
// // MAIN COMPONENT
// // ────────────────────────────────────────────────────────────────
// const TripBest = () => {
//   const [activeTab, setActiveTab] = useState('Popular');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedDateIndex, setSelectedDateIndex] = useState(2);
//   const [passengerCount, setPassengerCount] = useState(1);
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [selectedDest, setSelectedDest] = useState(null);
//   const [sortBy, setSortBy] = useState('Recommended');

//   const sortOptions = ['Recommended', 'Price: Low to High', 'Price: High to Low', 'Top Rated'];

//   const filtered = popularDestinations
//     .filter(d => {
//       const q = searchQuery.toLowerCase();
//       return !q || d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q);
//     })
//     .sort((a, b) => {
//       if (sortBy === 'Price: Low to High') return a.price - b.price;
//       if (sortBy === 'Price: High to Low') return b.price - a.price;
//       if (sortBy === 'Top Rated') return b.rating - a.rating;
//       return 0;
//     });

//   // ── Show Detail Full Page ──
//   if (selectedDest) {
//     return <DetailPage dest={selectedDest} onBack={() => setSelectedDest(null)} />;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">

//       {/* ── HERO / SEARCH ── */}
//       {/* <div className="relative pt-8 pb-16 px-4 overflow-hidden" style={{ minHeight: 420 }}> */}
//       <div className="relative pt-6 pb-12 px-3 sm:px-4 overflow-hidden min-h-[380px] sm:min-h-[420px]">
//         {/* Slideshow background */}
//         <HeroSlideshow />
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/45 z-0" />

//         <div className="max-w-4xl mx-auto relative z-10">
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-white/90 text-xs font-semibold mb-4">
//               <Globe className="w-3.5 h-3.5" /> 2026 Global 100 Rankings
//             </div>
//             {/* <h1 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight"> */}
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
//               Discover Your Next <br />
//               <span style={{ color: '#FCD34D' }}>Dream Destination</span>
//             </h1>
//             <p className="text-white/70 text-sm">Best prices · Verified stays · Instant booking · Zero fees</p>
//           </div>

//           {/* Search Card */}
//           <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-5">
//             {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4"> */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-4">
//               {/* Destination */}
//               <div className="md:col-span-2">
//                 <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 block">Where to?</label>
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={e => setSearchQuery(e.target.value)}
//                     placeholder="Search destinations..."
//                     className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
//                   />
//                 </div>
//               </div>

//               {/* Check-in */}
//               <div>
//                 <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 block">Check-in</label>
//                 <div
//                   className="flex items-center justify-between border border-gray-200 rounded-xl px-3 py-3 cursor-pointer hover:border-blue-400 transition-colors"
//                   onClick={() => setShowDatePicker(!showDatePicker)}
//                 >
//                   <div>
//                     <div className="text-sm font-semibold text-gray-800">{dates[selectedDateIndex].day}, {dates[selectedDateIndex].date}</div>
//                     <div className="text-xs text-gray-400">After 2:00 PM</div>
//                   </div>
//                   <ChevronDown className="w-4 h-4 text-gray-400" />
//                 </div>
//               </div>

//               {/* Guests */}
//               <div>
//                 <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 block">Guests</label>
//                 <div className="flex items-center border border-gray-200 rounded-xl px-3 py-3 gap-2">
//                   <Users className="w-4 h-4 text-blue-500" />
//                   <button onClick={() => setPassengerCount(g => Math.max(1, g - 1))} className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700 text-sm">−</button>
//                   <span className="flex-1 text-center font-bold text-gray-800 text-sm">{passengerCount}</span>
//                   <button onClick={() => setPassengerCount(g => Math.min(10, g + 1))} className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700 text-sm">+</button>
//                 </div>
//               </div>
//             </div>

//             {showDatePicker && (
//               <div className="mb-4 border border-gray-100 rounded-xl p-3 bg-gray-50">
//                 <div className="flex gap-1 overflow-x-auto">
//                   {dates.map((d, i) => (
//                     <button
//                       key={i}
//                       onClick={() => { setSelectedDateIndex(i); setShowDatePicker(false); }}
//                       className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-center text-xs font-semibold transition-all ${
//                         selectedDateIndex === i ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
//                       }`}
//                     >
//                       <div>{d.day}</div>
//                       <div className="font-normal opacity-80">{d.date}</div>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             <button className="w-full py-3.5 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-200 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
//               style={{ background: 'linear-gradient(135deg, #2563EB, #1d4ed8)' }}
//             >
//               <Search className="w-4 h-4" /> Search Destinations
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ── CONTENT ── */}
//       <div className="max-w-7xl mx-auto px-4 -mt-6 pb-12">

//         {/* Date strip */}
//         <div className="bg-white rounded-2xl shadow-md p-4 mb-5 overflow-x-auto flex gap-2">
//           {dates.map((d, i) => (
//             <button
//               key={i}
//               onClick={() => setSelectedDateIndex(i)}
//               className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-xs font-semibold text-center transition-all ${
//                 selectedDateIndex === i ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
//               }`}
//             >
//               <div>{d.day}</div>
//               <div className={`font-normal ${selectedDateIndex === i ? 'text-blue-200' : 'text-gray-400'}`}>{d.date}</div>
//             </button>
//           ))}
//         </div>

//         {/* Tabs + Sort */}
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
//           <div className="flex gap-2 overflow-x-auto pb-1">
//             {tabs.map(t => (
//               <button
//                 key={t}
//                 onClick={() => setActiveTab(t)}
//                 className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex-shrink-0 transition-all ${
//                   activeTab === t ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'
//                 }`}
//               >
//                 {t}
//               </button>
//             ))}
//           </div>
//           <div className="flex gap-2 flex-shrink-0">
//             {sortOptions.map(o => (
//               <button
//                 key={o}
//                 onClick={() => setSortBy(o)}
//                 className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
//                   sortBy === o ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-200'
//                 }`}
//               >
//                 {o}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Results count */}
//         <p className="text-xs text-gray-400 font-medium mb-4">Showing {filtered.length} destination{filtered.length !== 1 ? 's' : ''}</p>

//         {/* Destinations Grid */}
//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10"> */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mb-10">
//           {filtered.map(dest => (
//             <DestCard key={dest.id} dest={dest} onClick={setSelectedDest} />
//           ))}
//         </div>

//         {/* Stays Section */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
//           <div className="flex items-center justify-between mb-5">
//             <h2 className="text-lg font-black text-gray-800 flex items-center gap-2">
//               <Building2 className="w-5 h-5 text-blue-500" /> Top Stays
//             </h2>
//             <button className="text-blue-600 text-xs font-semibold hover:text-blue-800 flex items-center gap-1">
//               See all <ArrowRight className="w-3 h-3" />
//             </button>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {[
//               { name: "Luxury Hotels", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=350&fit=crop", price: 350, rating: 4.8, desc: "5-star accommodations" },
//               { name: "Family Hotels", image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?w=600&h=350&fit=crop", price: 180, rating: 4.5, desc: "Kid-friendly amenities" },
//               { name: "Scenic Hotels", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=350&fit=crop", price: 220, rating: 4.7, desc: "Breathtaking views" },
//               { name: "Cultural Hotels", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=350&fit=crop", price: 195, rating: 4.6, desc: "Local architecture" },
//             ].map((item, i) => (
//               <div key={i}
//                 className="border border-gray-100 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
//                 onClick={() => setSelectedDest(popularDestinations[i % popularDestinations.length])}
//               >
//                 <div className="h-36 overflow-hidden relative">
//                   <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//                   <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-0.5 flex items-center gap-1">
//                     <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
//                     <span className="text-xs font-bold text-gray-700">{item.rating}</span>
//                   </div>
//                 </div>
//                 <div className="p-3">
//                   <h3 className="font-bold text-gray-800 text-sm mb-0.5">{item.name}</h3>
//                   <p className="text-gray-500 text-xs mb-2">{item.desc}</p>
//                   <div className="flex items-center justify-between">
//                     <span className="text-blue-600 font-black text-sm">₹{item.price}<span className="text-gray-400 font-normal text-xs">/night</span></span>
//                     <button className="text-xs text-blue-600 font-semibold hover:underline">Book →</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Things to Do */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
//           <div className="flex items-center justify-between mb-5">
//             <h2 className="text-lg font-black text-gray-800 flex items-center gap-2">
//               <Sparkles className="w-5 h-5 text-amber-500" /> Things To Do
//             </h2>
//             <button className="text-blue-600 text-xs font-semibold hover:text-blue-800 flex items-center gap-1">
//               See all <ArrowRight className="w-3 h-3" />
//             </button>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {[
//               { name: "Best Activities", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=350&fit=crop", price: 75, rating: 4.8 },
//               { name: "Family Attractions", image: "https://images.unsplash.com/photo-1502086223501-681a981c2522?w=600&h=350&fit=crop", price: 45, rating: 4.5 },
//               { name: "Spring Outings", image: "https://images.unsplash.com/photo-1490750967868-58cb75069faf?w=600&h=400&fit=crop", price: 60, rating: 4.6 },
//               { name: "Water Escapes", image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc452e?w=600&h=350&fit=crop", price: 85, rating: 4.7 },
//             ].map((item, i) => (
//               <div key={i}
//                 className="border border-gray-100 rounded-2xl overflow-hidden hover:border-amber-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
//                 onClick={() => setSelectedDest(popularDestinations[(i + 4) % popularDestinations.length])}
//               >
//                 <div className="h-36 overflow-hidden relative">
//                   <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//                   <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-0.5 flex items-center gap-1">
//                     <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
//                     <span className="text-xs font-bold text-gray-700">{item.rating}</span>
//                   </div>
//                 </div>
//                 <div className="p-3">
//                   <h3 className="font-bold text-gray-800 text-sm mb-2">{item.name}</h3>
//                   <div className="flex items-center justify-between">
//                     <span className="text-amber-600 font-black text-sm">₹{item.price}<span className="text-gray-400 font-normal text-xs">/person</span></span>
//                     <button className="text-xs text-blue-600 font-semibold hover:underline">Book →</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TripBest;

































import React, { useState, useEffect, useCallback } from 'react';
import {
  Search, ChevronLeft, ChevronRight, MapPin, Star, Award,
  Heart, Wifi, Coffee, Car, Dumbbell, Waves,
  Utensils, Clock, Shield, Check, ChevronDown, ChevronUp,
  Phone, Users, Calendar, ArrowRight,
  ThumbsUp, MessageSquare, Info, Sparkles, Building2,
  BadgeCheck, Zap, TrendingUp, Globe, Camera,
  Bus, UtensilsCrossed, X, AlertCircle, List,
  Sunrise, Sunset, Map, FileText, CheckCircle2,
  XCircle, Ticket, Tag, Share2, Download, PlayCircle,
  Navigation, Languages, CreditCard, Thermometer
} from 'lucide-react';

// ────────────────────────────────────────────────────────────────
// DATA
// ────────────────────────────────────────────────────────────────
const heroImages = [
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=700&fit=crop",
  "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1200&h=700&fit=crop",
  "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&h=700&fit=crop",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=700&fit=crop",
];

const popularDestinations = [
  {
    id: 1, name: "Florence", country: "Italy",
    tourTitle: "Florence: Renaissance Art & Architecture Full-Day Tour",
    tourType: "Group Tour · 8 Hours · English Guide",
    image: "https://images.unsplash.com/photo-1529307474898-e854236b67eb?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1529307474898-e854236b67eb?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571321346935-41e6b3fa5c3b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop"
    ],
    rating: 4.8, reviewCount: 1250, price: 899, originalPrice: 1200,
    features: ["Historic Architecture", "Art Galleries", "Italian Cuisine"],
    amenities: ["Free WiFi", "Guided Tours", "Transportation", "Breakfast", "Pool", "Spa"],
    description: "The birthplace of the Renaissance, known for its art and architecture.",
    longDesc: "Florence, the cradle of the Italian Renaissance, is a city that breathes art and history at every corner. Walk across the iconic Ponte Vecchio, marvel at Michelangelo's David in the Accademia Gallery, or lose yourself in the Uffizi — one of the world's greatest art museums.",
    highlights: [
      "Skip-the-line access to Uffizi Gallery and Accademia",
      "Expert licensed guide with deep art history knowledge",
      "Stroll across the iconic Ponte Vecchio bridge",
      "Panoramic views from Piazzale Michelangelo",
      "Traditional Florentine lunch at a local trattoria",
      "Small group max 15 people for personalized experience"
    ],
    itinerary: [
      { time: "8:00 AM", title: "Hotel Pickup & Welcome", desc: "AC coach pickup from your hotel. Welcome briefing and orientation by your guide." },
      { time: "9:00 AM", title: "Accademia Gallery", desc: "Skip-the-line entry. See Michelangelo's David up close — a 5-meter masterpiece carved in 1504." },
      { time: "11:00 AM", title: "Duomo & Cathedral Complex", desc: "Explore the iconic Florence Cathedral, Baptistery with its golden doors, and Giotto's Campanile." },
      { time: "1:00 PM", title: "Lunch Break", desc: "Traditional Florentine lunch at a curated local trattoria. Try ribollita, bistecca, and cantucci." },
      { time: "2:30 PM", title: "Uffizi Gallery", desc: "One of the world's greatest art museums. Botticelli's Birth of Venus, da Vinci sketches, and more." },
      { time: "4:30 PM", title: "Ponte Vecchio & Oltrarno", desc: "Walk the medieval jewellers' bridge and explore the artisan quarter of Oltrarno." },
      { time: "6:00 PM", title: "Piazzale Michelangelo", desc: "End the day with a panoramic sunset view of Florence's terracotta skyline." },
      { time: "7:30 PM", title: "Hotel Drop-off", desc: "Return to your hotel. Trip ends here." }
    ],
    inclusions: [
      "AC transportation throughout",
      "Skip-the-line Uffizi Gallery entry",
      "Skip-the-line Accademia Gallery entry",
      "Licensed English-speaking guide (8 hrs)",
      "Traditional Florentine lunch",
      "Bottled water & welcome snacks",
      "All entrance fees included",
      "Headsets for clear audio in crowded spaces"
    ],
    exclusions: [
      "International flights",
      "Travel insurance (strongly recommended)",
      "Personal shopping & souvenirs",
      "Alcoholic beverages",
      "Tips for guide (optional but appreciated)",
      "Duomo dome climb (optional €20)"
    ],
    importantInfo: [
      { icon: "walk", text: "Moderate walking involved (~5–6 km). Comfortable shoes essential." },
      { icon: "dress", text: "Covered shoulders & knees required for churches. Carry a scarf." },
      { icon: "camera", text: "Photography allowed in most areas. Flash strictly prohibited." },
      { icon: "child", text: "Children under 5 are free. Ages 6–12 get 20% discount." },
      { icon: "cancel", text: "Free cancellation up to 48 hours before tour start." },
      { icon: "language", text: "Tour conducted in English. Spanish & French guides available on request." }
    ],
    faq: [
      { q: "What is the best time to visit Florence?", a: "April–June and September–October offer mild weather and fewer crowds." },
      { q: "Is a visa required?", a: "EU citizens don't need a visa. Others require a Schengen visa." },
      { q: "How many days should I plan?", a: "3–5 days is ideal to cover the main highlights comfortably." },
      { q: "Is Florence family-friendly?", a: "Absolutely! Many museums offer kids' programs and the piazzas are great for strolling." }
    ],
    reviews: [
      { name: "Priya Sharma", avatar: "PS", rating: 5, date: "March 2026", tripType: "Couple", comment: "Absolutely breathtaking! The art scene is unmatched and every street is a postcard." },
      { name: "Rajesh Kumar", avatar: "RK", rating: 4, date: "February 2026", tripType: "Family", comment: "Loved the food and the Duomo. A bit crowded in peak season but totally worth it." },
      { name: "Ananya Singh", avatar: "AS", rating: 5, date: "January 2026", tripType: "Solo", comment: "Florence stole my heart. The guided tour was incredibly informative." }
    ]
  },
  {
    id: 2, name: "Los Angeles", country: "USA",
    tourTitle: "Los Angeles: Hollywood, Beverly Hills & Santa Monica Day Tour",
    tourType: "Group Tour · 10 Hours · English Guide",
    image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?w=800&h=500&fit=crop"
    ],
    rating: 4.5, reviewCount: 980, price: 1200, originalPrice: 1500,
    features: ["Hollywood", "Beaches", "Entertainment"],
    amenities: ["City Tours", "Beach Access", "Shopping", "Rooftop Pool", "Valet", "Bar"],
    description: "The entertainment capital of the world with sunny beaches.",
    longDesc: "Los Angeles is a sprawling metropolis of glamour, creativity, and sunshine. From the star-studded Hollywood Walk of Fame to the sandy shores of Santa Monica and Venice Beach, LA has something for everyone.",
    highlights: [
      "Walk the Hollywood Walk of Fame and see star plaques",
      "Visit Griffith Observatory for city panoramas",
      "Drive through Beverly Hills celebrity neighborhoods",
      "Santa Monica Pier and boardwalk experience",
      "Venice Beach and Muscle Beach visit",
      "Optional Warner Bros Studio Tour"
    ],
    itinerary: [
      { time: "8:30 AM", title: "Hotel Pickup", desc: "Pickup from select LA hotels and landmarks." },
      { time: "9:30 AM", title: "Hollywood Walk of Fame", desc: "See 2,700+ star plaques and visit TCL Chinese Theatre." },
      { time: "11:00 AM", title: "Griffith Observatory", desc: "Panoramic views of the Hollywood Sign, downtown LA and the Pacific." },
      { time: "12:30 PM", title: "Beverly Hills Drive-Through", desc: "Pass celebrity mansions on Rodeo Drive and see the iconic Beverly Hills Hotel." },
      { time: "1:30 PM", title: "Lunch on Rodeo Drive", desc: "Free time for lunch in the heart of Beverly Hills." },
      { time: "3:00 PM", title: "Santa Monica Pier", desc: "Walk the iconic pier, ride the Ferris wheel and enjoy the Pacific Ocean." },
      { time: "4:30 PM", title: "Venice Beach", desc: "Explore the eclectic boardwalk, street performers and Muscle Beach." },
      { time: "6:30 PM", title: "Hotel Drop-off", desc: "Return to your hotel. Tour ends." }
    ],
    inclusions: ["AC minibus transportation", "Licensed guide (10 hrs)", "Griffith Observatory entry", "Hotel pickup & drop-off", "Bottled water"],
    exclusions: ["Meals (unless specified)", "Warner Bros Studio ticket", "Personal expenses", "Gratuities"],
    importantInfo: [
      { icon: "walk", text: "Light to moderate walking. Comfortable shoes recommended." },
      { icon: "camera", text: "Bring sunscreen. LA sun is strong year-round." },
      { icon: "cancel", text: "Free cancellation 24 hours before tour." },
      { icon: "child", text: "Children under 3 free. Ages 4–12 at 30% discount." }
    ],
    faq: [
      { q: "Do I need a car in LA?", a: "Yes, LA is a car-centric city. Renting a car or using rideshares is highly recommended." },
      { q: "What are the must-see spots?", a: "Hollywood Sign, Griffith Observatory, Getty Center, and Santa Monica Pier." },
      { q: "Is LA safe for tourists?", a: "Tourist areas are generally safe. Exercise normal precautions in unfamiliar neighborhoods." },
      { q: "Best time to visit?", a: "March–May and September–November for pleasant weather." }
    ],
    reviews: [
      { name: "Vikram Nair", avatar: "VN", rating: 5, date: "April 2026", tripType: "Friends", comment: "Beverly Hills and Santa Monica were highlights. The city is massive but incredibly fun!" },
      { name: "Meera Patel", avatar: "MP", rating: 4, date: "March 2026", tripType: "Couple", comment: "Great experience overall. Traffic is intense but the beaches make up for everything." }
    ]
  },
  {
    id: 3, name: "Rome", country: "Italy",
    tourTitle: "Rome: Colosseum, Vatican & Ancient Ruins Full-Day Tour",
    tourType: "Group Tour · 9 Hours · English/Hindi Guide",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800&h=500&fit=crop"
    ],
    rating: 4.9, reviewCount: 2100, price: 950, originalPrice: 1300,
    features: ["Ancient History", "Colosseum", "Vatican City"],
    amenities: ["Historical Sites", "Museums", "Local Food", "Concierge", "WiFi", "Breakfast"],
    description: "Eternal city with ancient ruins and world-famous landmarks.",
    longDesc: "Rome is a living museum where ancient history meets vibrant modern life. Walk through the Forum Romanum where Julius Caesar once walked, toss a coin into the Trevi Fountain, and stand in awe inside the Pantheon.",
    highlights: [
      "Skip-the-line Colosseum with arena floor access",
      "Roman Forum & Palatine Hill exploration",
      "Vatican Museums & Sistine Chapel",
      "St. Peter's Basilica & Square",
      "Trevi Fountain coin toss tradition",
      "Authentic gelato & Roman pizza tasting"
    ],
    itinerary: [
      { time: "7:30 AM", title: "Hotel Pickup", desc: "AC coach collection from your accommodation." },
      { time: "8:30 AM", title: "Colosseum", desc: "Skip-the-line entry to Rome's iconic amphitheatre. Includes arena floor access." },
      { time: "10:30 AM", title: "Roman Forum & Palatine Hill", desc: "Walk where emperors and senators once debated the fate of the world." },
      { time: "12:00 PM", title: "Trevi Fountain", desc: "Toss a coin and make a wish at this 18th-century baroque masterpiece." },
      { time: "1:00 PM", title: "Lunch in Trastevere", desc: "Authentic Roman lunch — cacio e pepe, supplì, and tiramisu." },
      { time: "2:30 PM", title: "Vatican Museums", desc: "Walk through 54 galleries of papal collections leading to the Sistine Chapel." },
      { time: "4:30 PM", title: "Sistine Chapel", desc: "Gaze up at Michelangelo's ceiling — one of humanity's greatest artistic achievements." },
      { time: "5:30 PM", title: "St. Peter's Basilica", desc: "Enter the world's largest church. Climb the dome for panoramic Vatican views." },
      { time: "7:00 PM", title: "Hotel Drop-off", desc: "Return to your hotel. Tour concludes." }
    ],
    inclusions: ["AC coach transportation", "Skip-the-line Colosseum", "Vatican Museums + Sistine Chapel", "Licensed guide", "Traditional Roman lunch", "Water & gelato"],
    exclusions: ["Flights & airport transfers", "Travel insurance", "Dome climb (optional €8)", "Personal items"],
    importantInfo: [
      { icon: "dress", text: "Strict dress code for Vatican: covered knees and shoulders mandatory." },
      { icon: "walk", text: "High walking activity (~8km). Good walking shoes required." },
      { icon: "cancel", text: "Free cancellation 48 hours prior. No refund after." },
      { icon: "camera", text: "No photography in Sistine Chapel. Allowed elsewhere." }
    ],
    faq: [
      { q: "How many days do I need in Rome?", a: "4–5 days gives you enough time for the major sights without rushing." },
      { q: "Is the Vatican included?", a: "Vatican is a separate state but very accessible from central Rome." },
      { q: "Is the food really that good?", a: "Absolutely. Roman pasta, gelato, and pizza are world-class." },
      { q: "Best way to get around Rome?", a: "Walking and metro are best. Many top sights are clustered together." }
    ],
    reviews: [
      { name: "Sunita Reddy", avatar: "SR", rating: 5, date: "March 2026", tripType: "Couple", comment: "Rome exceeded all my expectations. The Colosseum at sunset is magical." },
      { name: "Arjun Mehta", avatar: "AM", rating: 5, date: "February 2026", tripType: "Solo", comment: "Vatican City was surreal. The guided tour was worth every rupee." },
      { name: "Deepa Iyer", avatar: "DI", rating: 4, date: "January 2026", tripType: "Family", comment: "Wonderful city but very busy. Book tickets in advance for everything!" }
    ]
  },
  {
    id: 4, name: "London", country: "UK",
    tourTitle: "London: Royal Heritage, Tower & Thames River Cruise Tour",
    tourType: "Group Tour · 8 Hours · English Guide",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=500&fit=crop"
    ],
    rating: 4.7, reviewCount: 1850, price: 1100, originalPrice: 1400,
    features: ["Royal Heritage", "Museums", "Theatre"],
    amenities: ["City Pass", "River Cruise", "West End Shows", "Concierge", "Bar", "WiFi"],
    description: "Historic capital with royal palaces and modern attractions.",
    longDesc: "London is a city of extraordinary contrasts — ancient traditions alongside cutting-edge culture. Visit Buckingham Palace, explore the Tower of London, and cross the iconic Tower Bridge.",
    highlights: [
      "Buckingham Palace & Changing of the Guard",
      "Tower of London with Crown Jewels viewing",
      "Thames River Cruise from Westminster to Greenwich",
      "Tower Bridge crossing on foot",
      "Westminster Abbey exterior walk",
      "Borough Market food tasting"
    ],
    itinerary: [
      { time: "9:00 AM", title: "Buckingham Palace", desc: "Witness the famous Changing of the Guard ceremony (seasonal)." },
      { time: "10:30 AM", title: "Westminster & St. James's Park", desc: "Walk through the Royal Park and past the Houses of Parliament." },
      { time: "12:00 PM", title: "Thames River Cruise", desc: "Hop aboard a sightseeing cruise from Westminster Pier to Tower Bridge." },
      { time: "1:00 PM", title: "Borough Market Lunch", desc: "London's oldest food market. Sample British street food, artisan cheese, and more." },
      { time: "2:30 PM", title: "Tower of London", desc: "Enter one of the world's most famous fortresses. See the Crown Jewels and Beefeaters." },
      { time: "4:30 PM", title: "Tower Bridge Walk", desc: "Cross the iconic Victorian bridge and enjoy panoramic Thames views." },
      { time: "5:30 PM", title: "Soho & Covent Garden", desc: "Explore London's entertainment district with street performers and cafes." },
      { time: "7:00 PM", title: "Hotel Drop-off", desc: "Return to central London hotel. Tour ends." }
    ],
    inclusions: ["River Thames cruise ticket", "Tower of London entry", "Licensed guide", "Hotel pickup & drop-off", "Oyster card top-up (₹500)"],
    exclusions: ["Meals (Borough Market on own account)", "West End show tickets", "Personal shopping"],
    importantInfo: [
      { icon: "walk", text: "Moderate walking. Cobblestones in some areas. Flat shoes advised." },
      { icon: "cancel", text: "Free cancellation up to 24 hours before tour." },
      { icon: "child", text: "Children under 5 free. Tower of London free for under-5s." },
      { icon: "language", text: "Tour in English only." }
    ],
    faq: [
      { q: "Is London expensive?", a: "London can be pricey, but many museums are free. Budget ₹5,000–₹8,000/day for comfort." },
      { q: "Do I need a UK visa?", a: "Indian passport holders require a UK Standard Visitor Visa." },
      { q: "Oyster card or contactless?", a: "Both work on London transport. Contactless is most convenient for visitors." },
      { q: "Best area to stay in London?", a: "Covent Garden, South Bank, or Kensington for easy access to attractions." }
    ],
    reviews: [
      { name: "Kiran Bose", avatar: "KB", rating: 5, date: "April 2026", tripType: "Couple", comment: "London is endlessly fascinating. The British Museum alone is worth the trip!" },
      { name: "Pooja Tiwari", avatar: "PT", rating: 4, date: "March 2026", tripType: "Family", comment: "Loved the West End show and the Thames riverboat. Very organized city." }
    ]
  },
  {
    id: 5, name: "New York", country: "USA",
    tourTitle: "New York: Iconic Landmarks, Broadway & Statue of Liberty Tour",
    tourType: "Group Tour · 9 Hours · English Guide",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&h=500&fit=crop"
    ],
    rating: 4.6, reviewCount: 1950, price: 1300, originalPrice: 1650,
    features: ["Broadway", "Statue of Liberty", "Central Park"],
    amenities: ["City Tours", "Shopping", "Dining", "Rooftop Bar", "Gym", "24hr Concierge"],
    description: "The city that never sleeps with iconic skyscrapers.",
    longDesc: "New York City is arguably the most iconic city in the world. Times Square dazzles at night, Central Park offers a green escape from the urban rush, and the Statue of Liberty stands as a global symbol of freedom.",
    highlights: [
      "Statue of Liberty ferry & island access",
      "Ellis Island immigration museum",
      "Top of the Rock or Empire State Building observation deck",
      "Central Park walking tour with a guide",
      "Times Square evening visit",
      "Brooklyn Bridge walk with skyline views"
    ],
    itinerary: [
      { time: "8:00 AM", title: "Hotel Pickup — Midtown", desc: "Pickup from select Midtown Manhattan hotels." },
      { time: "8:45 AM", title: "Battery Park & Statue of Liberty Ferry", desc: "Board the ferry to Liberty Island. Explore the statue and grounds." },
      { time: "11:00 AM", title: "Ellis Island", desc: "The gateway for millions of immigrants. Moving and fascinating museum." },
      { time: "12:30 PM", title: "Lunch in Lower Manhattan", desc: "Free time for lunch near Wall Street or the South Street Seaport." },
      { time: "2:00 PM", title: "Brooklyn Bridge Walk", desc: "Walk across the 1883 suspension bridge for spectacular city views." },
      { time: "3:30 PM", title: "Central Park Tour", desc: "Guided walk through Bethesda Fountain, Strawberry Fields, and the Mall." },
      { time: "5:00 PM", title: "Top of the Rock", desc: "360° views of Manhattan at the Rockefeller Center observatory." },
      { time: "7:00 PM", title: "Times Square", desc: "Experience the sensory explosion of the Crossroads of the World at dusk." },
      { time: "8:00 PM", title: "Hotel Drop-off", desc: "Return to hotel. Tour ends here." }
    ],
    inclusions: ["Statue of Liberty ferry ticket", "Top of the Rock entry", "Licensed guide", "AC coach for select transfers", "Water & snacks"],
    exclusions: ["Flights", "Meals", "Broadway show tickets", "Personal expenses"],
    importantInfo: [
      { icon: "walk", text: "High walking activity (~7–9 km). Athletic/comfortable footwear required." },
      { icon: "camera", text: "NYC is extremely photogenic. Bring extra battery/power bank." },
      { icon: "cancel", text: "Free cancellation 48 hours before tour. 50% refund 24–48 hours prior." },
      { icon: "child", text: "Children under 4 free on ferry. Ages 4–12 at 25% discount." }
    ],
    faq: [
      { q: "What is the New York City Pass?", a: "A bundle ticket that covers major attractions like the Empire State Building, MoMA, and more." },
      { q: "Best time to visit NYC?", a: "Spring (April–June) and Fall (September–November) are ideal weather-wise." },
      { q: "Is NYC safe for tourists?", a: "Most tourist areas are very safe. Times Square, Midtown, and Manhattan in general are well-policed." },
      { q: "How to get from JFK to Manhattan?", a: "AirTrain + Subway is cheapest; taxi/rideshare is most convenient (~₹3,000–₹4,500)." }
    ],
    reviews: [
      { name: "Rahul Gupta", avatar: "RG", rating: 5, date: "April 2026", tripType: "Friends", comment: "NYC is just electric. Times Square at midnight felt surreal." },
      { name: "Nisha Joshi", avatar: "NJ", rating: 5, date: "March 2026", tripType: "Couple", comment: "Broadway show + Central Park + Brooklyn Bridge = perfect trip." }
    ]
  },
  {
    id: 6, name: "Kyoto", country: "Japan",
    tourTitle: "Kyoto: Temples, Tea Ceremony & Geisha District Private Tour",
    tourType: "Private Tour · 9 Hours · English/Japanese Guide",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&h=500&fit=crop"
    ],
    rating: 4.8, reviewCount: 920, price: 1150, originalPrice: 1450,
    features: ["Temples", "Traditional Gardens", "Cherry Blossoms"],
    amenities: ["Cultural Tours", "Tea Ceremonies", "Hot Springs", "Ryokan Stay", "WiFi", "Breakfast"],
    description: "Ancient capital with traditional temples and gardens.",
    longDesc: "Kyoto is the soul of Japan — a city where geisha still walk cobblestone streets and ancient temples rise above bamboo forests. The Fushimi Inari Shrine with its thousands of red torii gates is otherworldly.",
    highlights: [
      "Fushimi Inari Shrine at dawn before crowds arrive",
      "Arashiyama Bamboo Grove walk",
      "Authentic Japanese tea ceremony experience",
      "Gion district evening geisha spotting walk",
      "Kinkaku-ji (Golden Pavilion) visit",
      "Nishiki Market local food tasting"
    ],
    itinerary: [
      { time: "6:00 AM", title: "Fushimi Inari at Dawn", desc: "Thousands of vermilion torii gates winding up Mount Inari. Magical at sunrise." },
      { time: "8:30 AM", title: "Traditional Breakfast", desc: "Japanese breakfast (tamago gohan, miso soup, pickles) at a local establishment." },
      { time: "9:30 AM", title: "Kinkaku-ji (Golden Pavilion)", desc: "Zen Buddhist temple covered in gold leaf, reflecting beautifully in the mirror pond." },
      { time: "11:00 AM", title: "Ryoan-ji Rock Garden", desc: "UNESCO World Heritage site. 15 stones in a sea of raked gravel — meditative perfection." },
      { time: "12:30 PM", title: "Nishiki Market Lunch", desc: "Kyoto's 'Kitchen.' Sample tofu, matcha, pickled vegetables, and fresh sushi." },
      { time: "2:00 PM", title: "Tea Ceremony", desc: "Private 45-minute authentic tea ceremony with a certified tea master." },
      { time: "3:30 PM", title: "Arashiyama Bamboo Grove", desc: "Walk through the ethereal bamboo forest and visit Tenryu-ji garden." },
      { time: "5:30 PM", title: "Gion District", desc: "Evening walk through Kyoto's geisha district. Spot maiko in traditional dress." },
      { time: "7:00 PM", title: "Hotel Drop-off", desc: "Return to your ryokan or hotel. Tour ends." }
    ],
    inclusions: ["Private AC vehicle", "Licensed guide (English/Japanese)", "Tea ceremony session", "Traditional Japanese breakfast", "All entrance fees", "Nishiki Market tasting"],
    exclusions: ["Lunch (self-funded at Nishiki)", "Rickshaw ride (optional ¥3,000)", "Sake tasting add-on"],
    importantInfo: [
      { icon: "dress", text: "Dress respectfully for temple visits. Remove shoes when instructed." },
      { icon: "walk", text: "Moderate walking on uneven stone paths. Comfortable footwear essential." },
      { icon: "camera", text: "Photography: Check individual temple rules. Many gardens allow it freely." },
      { icon: "cancel", text: "Free cancellation 72 hours before. Private tours are non-refundable inside 72 hrs." }
    ],
    faq: [
      { q: "When do cherry blossoms bloom in Kyoto?", a: "Late March to early April, though exact timing varies each year." },
      { q: "Is Kyoto good for solo travelers?", a: "Extremely so. Kyoto is safe, clean, and easy to navigate even without Japanese." },
      { q: "Kyoto vs Osaka — which is better?", a: "Both are great! Kyoto for culture and history, Osaka for food and nightlife. Many visit both." },
      { q: "What should I wear at temples?", a: "Dress modestly. Cover shoulders and knees when entering sacred spaces." }
    ],
    reviews: [
      { name: "Sanjay Kapoor", avatar: "SK", rating: 5, date: "April 2026", tripType: "Solo", comment: "Fushimi Inari at dawn is something I'll never forget. Pure magic." },
      { name: "Lakshmi Rao", avatar: "LR", rating: 5, date: "March 2026", tripType: "Couple", comment: "The ryokan experience was transformative. Kyoto is unlike anywhere else." }
    ]
  },
  {
    id: 7, name: "Phuket", country: "Thailand",
    tourTitle: "Phuket: Phi Phi Islands, Snorkeling & Maya Bay Day Trip",
    tourType: "Group Tour · 8 Hours · English/Thai Guide",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop"
    ],
    rating: 4.4, reviewCount: 870, price: 650, originalPrice: 850,
    features: ["Beaches", "Islands", "Night Markets"],
    amenities: ["Beach Resorts", "Water Sports", "Thai Massage", "Pool", "Bar", "Snorkeling"],
    description: "Tropical paradise with stunning beaches and islands.",
    longDesc: "Phuket is Thailand's most celebrated island destination, known for its gorgeous beaches, turquoise waters, and vibrant nightlife. Explore Phi Phi Island by speedboat, snorkel in crystal-clear bays.",
    highlights: [
      "High-speed speedboat to Phi Phi Islands",
      "Snorkeling at coral-rich Monkey Beach",
      "Maya Bay — filming location of The Beach",
      "Pileh Lagoon swim in emerald waters",
      "Fresh seafood BBQ lunch on Phi Phi Don",
      "Phang Nga Bay sea caves exploration"
    ],
    itinerary: [
      { time: "7:30 AM", title: "Hotel Pickup", desc: "Pickup from Phuket hotels by AC minibus to Chalong Pier." },
      { time: "8:30 AM", title: "Speedboat Departure", desc: "45-minute scenic speedboat ride through the Andaman Sea to Phi Phi Islands." },
      { time: "9:30 AM", title: "Monkey Beach Snorkeling", desc: "Snorkel over vibrant coral reefs. Equipment provided. Meet the resident monkeys!" },
      { time: "11:00 AM", title: "Maya Bay", desc: "The iconic beach from 'The Beach' with Leonardo DiCaprio. Crystal waters await." },
      { time: "12:30 PM", title: "BBQ Seafood Lunch", desc: "Fresh grilled prawns, fish, rice, and fruit on Phi Phi Don beach." },
      { time: "2:00 PM", title: "Pileh Lagoon", desc: "Swim in the stunning enclosed emerald lagoon surrounded by limestone cliffs." },
      { time: "3:30 PM", title: "Viking Cave & Bamboo Island", desc: "See ancient cave paintings and relax on pristine white sand beach." },
      { time: "4:30 PM", title: "Return Journey", desc: "Speedboat back to Chalong Pier. Transfer to hotel." },
      { time: "6:00 PM", title: "Hotel Drop-off", desc: "Arrive back at your hotel." }
    ],
    inclusions: ["Speedboat transfers", "Life jackets & snorkel gear", "BBQ seafood lunch", "Fresh fruit & drinking water", "Hotel pickup & drop-off", "National park fees"],
    exclusions: ["Soft drinks & alcohol", "Underwater photos (available for purchase)", "Travel insurance"],
    importantInfo: [
      { icon: "walk", text: "Swimming & snorkeling activity. Non-swimmers provided with buoyancy vests." },
      { icon: "camera", text: "Bring waterproof phone case or rent underwater camera on board." },
      { icon: "cancel", text: "Free cancellation 24 hours before. Weather cancellations fully refunded." },
      { icon: "child", text: "Children under 3 not permitted on speedboat tours for safety." }
    ],
    faq: [
      { q: "Best beaches in Phuket?", a: "Kata Beach, Karon Beach, and Freedom Beach are top picks for cleaner, calmer waters." },
      { q: "Do I need visa for Thailand?", a: "Indian passport holders get visa-on-arrival or e-visa. Check current regulations." },
      { q: "Is Phuket safe for solo travelers?", a: "Yes, it's generally safe. Use reputable transport and stay in well-reviewed areas." },
      { q: "Best time to visit Phuket?", a: "November to April (dry season) is ideal. May–October is monsoon season." }
    ],
    reviews: [
      { name: "Mohit Sharma", avatar: "MS", rating: 4, date: "March 2026", tripType: "Friends", comment: "Beaches are beautiful! Phi Phi Island tour was the highlight of my trip." },
      { name: "Neha Gupta", avatar: "NG", rating: 5, date: "February 2026", tripType: "Couple", comment: "Best value destination. Amazing food, hospitality, and scenery." }
    ]
  },
  {
    id: 8, name: "Barcelona", country: "Spain",
    tourTitle: "Barcelona: Gaudí Masterpieces, Gothic Quarter & Tapas Tour",
    tourType: "Group Tour · 8 Hours · English/Spanish Guide",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&h=500&fit=crop"
    ],
    rating: 4.7, reviewCount: 1320, price: 1050, originalPrice: 1350,
    features: ["Gaudi Architecture", "Beaches", "Tapas"],
    amenities: ["Art Tours", "Beach Clubs", "Catalan Culture", "Rooftop Pool", "Bar", "WiFi"],
    description: "Vibrant city with unique architecture and Mediterranean beaches.",
    longDesc: "Barcelona is a feast for the senses — Gaudí's fantastical Sagrada Família, the mosaic wonderland of Park Güell, and the lively La Boqueria market. The city seamlessly blends world-class architecture, beachside relaxation, and a passionate food culture.",
    highlights: [
      "Skip-the-line Sagrada Família with tower access",
      "Park Güell mosaic terraces and gardens",
      "La Boqueria market tapas tasting trail",
      "Gothic Quarter medieval streets walk",
      "La Barceloneta beach & waterfront",
      "Palau de la Música Catalana exterior visit"
    ],
    itinerary: [
      { time: "9:00 AM", title: "Sagrada Família", desc: "Gaudí's unfinished masterpiece. Skip-the-line entry. Tower elevator included." },
      { time: "11:00 AM", title: "Park Güell", desc: "Gaudí's mosaic-covered park with dragon staircase and city panoramas." },
      { time: "12:30 PM", title: "La Boqueria Tapas Trail", desc: "Barcelona's iconic market. Sample jamón ibérico, pa amb tomàquet, patatas bravas, and croquetas." },
      { time: "2:00 PM", title: "Gothic Quarter Walk", desc: "Explore 2,000 years of history in Barcelona's ancient Roman quarter." },
      { time: "3:30 PM", title: "Picasso Museum", desc: "Over 4,000 works by Pablo Picasso spanning his formative Barcelona years." },
      { time: "5:00 PM", title: "Barceloneta Beach", desc: "Relax on the Mediterranean beach or grab a cold cerveza at a beachside chiringuito." },
      { time: "6:30 PM", title: "Las Ramblas Evening Stroll", desc: "Evening walk down Barcelona's most famous pedestrian boulevard." },
      { time: "8:00 PM", title: "Hotel Drop-off", desc: "Return to hotel. Tour ends." }
    ],
    inclusions: ["Skip-the-line Sagrada Família + tower", "Park Güell ticket", "Picasso Museum entry", "Licensed guide", "La Boqueria tasting", "Hotel pickup"],
    exclusions: ["Personal meals", "Flamenco show (optional)", "Alcoholic beverages at Boqueria"],
    importantInfo: [
      { icon: "walk", text: "Moderate walking on mixed terrain. Sagrada Família has steps — elevator available." },
      { icon: "camera", text: "Beware pickpockets on Las Ramblas. Use a cross-body bag." },
      { icon: "cancel", text: "Free cancellation 48 hours before tour." },
      { icon: "child", text: "Children under 11 free at Picasso Museum. Sagrada Família discounted." }
    ],
    faq: [
      { q: "How do I get tickets for Sagrada Família?", a: "Book online in advance — it sells out weeks ahead during peak season." },
      { q: "Is Barcelona safe?", a: "Generally safe, but watch for pickpockets in tourist-heavy areas like Las Ramblas." },
      { q: "Best area to stay?", a: "Gothic Quarter for culture, Eixample for style, Barceloneta for beach access." },
      { q: "Can I get by with English?", a: "Yes, English is widely spoken in tourist areas. Knowing basic Spanish helps." }
    ],
    reviews: [
      { name: "Amit Verma", avatar: "AV", rating: 5, date: "April 2026", tripType: "Couple", comment: "Sagrada Família is mind-blowing. Gaudí was truly a genius." },
      { name: "Ritu Nair", avatar: "RN", rating: 4, date: "March 2026", tripType: "Friends", comment: "The tapas and nightlife are incredible. Barcelona has so much energy!" }
    ]
  }
];

const amenityIcons = {
  "Free WiFi": <Wifi className="w-4 h-4" />, "Wifi": <Wifi className="w-4 h-4" />, "WiFi": <Wifi className="w-4 h-4" />,
  "Breakfast": <Coffee className="w-4 h-4" />, "Local Food": <Utensils className="w-4 h-4" />,
  "Pool": <Waves className="w-4 h-4" />, "Rooftop Pool": <Waves className="w-4 h-4" />,
  "Beach Clubs": <Waves className="w-4 h-4" />, "Beach Access": <Waves className="w-4 h-4" />, "Beach Resorts": <Waves className="w-4 h-4" />,
  "Gym": <Dumbbell className="w-4 h-4" />, "Spa": <Sparkles className="w-4 h-4" />,
  "Transportation": <Car className="w-4 h-4" />, "Valet": <Car className="w-4 h-4" />,
  "Shopping": <Award className="w-4 h-4" />,
};

const tabs = ["Popular", "Asia", "Europe", "North America", "Oceania", "Africa", "South America"];
const dates = [
  { day: 'Tue', date: 'Feb 10' }, { day: 'Wed', date: 'Feb 11' },
  { day: 'Thu', date: 'Feb 12' }, { day: 'Fri', date: 'Feb 13' },
  { day: 'Sat', date: 'Feb 14' }, { day: 'Sun', date: 'Feb 15' },
  { day: 'Mon', date: 'Feb 16' }
];

// ────────────────────────────────────────────────────────────────
// TOUR DETAIL PAGE — MMT Style
// ────────────────────────────────────────────────────────────────
const DetailPage = ({ dest, onBack }) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeImg, setActiveImg] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [expandedItinerary, setExpandedItinerary] = useState(0);
  const [liked, setLiked] = useState(false);
  const [guests, setGuests] = useState(2);
  const [checkIn, setCheckIn] = useState('');
  const [booked, setBooked] = useState(false);
  const [reviewFilter, setReviewFilter] = useState('All');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const sections = ['overview', 'itinerary', 'inclusions', 'reviews', 'faq'];

  const infoIconMap = {
    walk: <Navigation className="w-4 h-4 text-blue-500" />,
    dress: <Sparkles className="w-4 h-4 text-purple-500" />,
    camera: <Camera className="w-4 h-4 text-amber-500" />,
    child: <Users className="w-4 h-4 text-green-500" />,
    cancel: <CheckCircle2 className="w-4 h-4 text-teal-500" />,
    language: <Languages className="w-4 h-4 text-indigo-500" />,
  };

  const discount = Math.round(((dest.originalPrice - dest.price) / dest.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero Gallery ── */}
      <div className="relative h-56 sm:h-72 md:h-96 overflow-hidden bg-gray-900">
        <img
          src={dest.gallery[activeImg]}
          alt={dest.name}
          className="w-full h-full object-cover transition-all duration-500 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

        {dest.gallery.length > 1 && (
          <>
            <button
              onClick={() => setActiveImg((activeImg - 1 + dest.gallery.length) % dest.gallery.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-lg"
            ><ChevronLeft className="w-5 h-5 text-gray-800" /></button>
            <button
              onClick={() => setActiveImg((activeImg + 1) % dest.gallery.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow-lg"
            ><ChevronRight className="w-5 h-5 text-gray-800" /></button>
          </>
        )}

        {/* Dots */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5">
          {dest.gallery.map((_, i) => (
            <button key={i} onClick={() => setActiveImg(i)}
              className={`h-1.5 rounded-full transition-all ${activeImg === i ? 'bg-white w-5' : 'bg-white/50 w-1.5'}`}
            />
          ))}
        </div>

        {/* Back + Share */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
          <button onClick={onBack} className="bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all">
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
          <div className="flex gap-2">
            <button className="bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all">
              <Share2 className="w-4 h-4 text-gray-700" />
            </button>
            <button onClick={() => setLiked(!liked)} className="bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all">
              <Heart className={`w-4 h-4 ${liked ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
            </button>
          </div>
        </div>

        {/* Photo count badge */}
        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
          <Camera className="w-3 h-3" /> {dest.gallery.length} Photos
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
          <span className="inline-block bg-blue-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full mb-1">{dest.country}</span>
          <h1 className="text-white text-lg sm:text-xl font-bold leading-snug line-clamp-2">{dest.tourTitle}</h1>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 px-3 py-2 bg-white border-b border-gray-100 overflow-x-auto">
        {dest.gallery.map((src, i) => (
          <button key={i} onClick={() => setActiveImg(i)}
            className={`flex-shrink-0 w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${activeImg === i ? 'border-blue-500' : 'border-transparent opacity-60'}`}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
        <button className="flex-shrink-0 w-14 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-white text-xs font-bold border-2 border-transparent">
          +8
        </button>
      </div>

      {/* ── Quick Info Bar ── */}
      <div className="bg-white px-4 py-3 border-b border-gray-100">
        <p className="text-xs text-gray-500 mb-2 font-medium">{dest.tourType}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="font-bold text-gray-800 text-sm">{dest.rating}</span>
            <span className="text-gray-400 text-xs">({dest.reviewCount.toLocaleString()})</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="w-3.5 h-3.5 text-blue-500" />
            <span>{dest.tourType.split('·')[1]?.trim() || '8 Hours'}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <MapPin className="w-3.5 h-3.5 text-red-400" />
            <span>{dest.country}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-green-600 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Instant Confirmation</span>
          </div>
        </div>
      </div>

      {/* ── Price Bar ── */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-blue-600">₹{dest.price.toLocaleString()}</span>
            <span className="text-gray-400 text-sm line-through">₹{dest.originalPrice.toLocaleString()}</span>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">{discount}% OFF</span>
          </div>
          <p className="text-xs text-gray-400">per person · taxes included</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2.5 rounded-xl border-2 border-blue-600 text-blue-600 text-sm font-bold hover:bg-blue-50 transition-colors">
            Customize
          </button>
          <button
            onClick={() => setBooked(true)}
            className="px-4 py-2.5 rounded-xl text-white text-sm font-bold shadow-lg transition-all hover:shadow-blue-200"
            style={{ background: 'linear-gradient(135deg, #2563EB, #1d4ed8)' }}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* ── Section Nav (sticky) ── */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm overflow-x-auto">
        <div className="flex min-w-max">
          {sections.map(s => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              className={`px-4 sm:px-5 py-3.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeSection === s ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* ── OVERVIEW ── */}
      {activeSection === 'overview' && (
        <div className="max-w-3xl mx-auto px-4 py-5 space-y-5">

          {/* About */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h2 className="font-bold text-gray-800 text-base mb-3 flex items-center gap-2">
              <Info className="w-4 h-4 text-blue-500" /> About This Tour
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">{dest.longDesc}</p>
          </div>

          {/* Highlights */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h2 className="font-bold text-gray-800 text-base mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" /> Tour Highlights
            </h2>
            <div className="space-y-2.5">
              {dest.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-700 leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Best Season', value: 'Apr – Jun', icon: <Zap className="w-5 h-5 text-amber-500" /> },
              { label: 'Duration', value: dest.tourType.split('·')[1]?.trim() || '8 Hours', icon: <Clock className="w-5 h-5 text-blue-500" /> },
              { label: 'Group Size', value: 'Max 15', icon: <Users className="w-5 h-5 text-purple-500" /> },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-3 text-center border border-gray-100 shadow-sm">
                <div className="flex justify-center mb-1">{s.icon}</div>
                <div className="text-xs text-gray-400 mb-0.5">{s.label}</div>
                <div className="text-xs font-bold text-gray-800">{s.value}</div>
              </div>
            ))}
          </div>

          {/* Important Info */}
          <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
            <h2 className="font-bold text-gray-800 text-base mb-4 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600" /> Important Information
            </h2>
            <div className="space-y-3">
              {dest.importantInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">{infoIconMap[info.icon] || <Info className="w-4 h-4 text-blue-500" />}</div>
                  <span className="text-sm text-gray-700 leading-snug">{info.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Widget */}
          {!booked ? (
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-base">
                <Ticket className="w-5 h-5 text-blue-600" /> Book Your Spot
              </h3>
              <div className="space-y-3 mb-4">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1.5 block">Select Date</label>
                  <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1.5 block">Adults</label>
                  <div className="flex items-center border border-gray-200 rounded-xl bg-white px-3 py-2 w-36">
                    <button onClick={() => setGuests(g => Math.max(1, g - 1))} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700">−</button>
                    <span className="flex-1 text-center font-bold text-gray-800">{guests}</span>
                    <button onClick={() => setGuests(g => Math.min(10, g + 1))} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700">+</button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between py-3 border-t border-gray-100 mb-4">
                <span className="text-gray-600 text-sm">Total ({guests} adults)</span>
                <div className="text-right">
                  <div className="text-xs text-gray-400 line-through">₹{(dest.originalPrice * guests).toLocaleString()}</div>
                  <div className="text-xl font-black text-blue-600">₹{(dest.price * guests).toLocaleString()}</div>
                </div>
              </div>
              <button
                onClick={() => setBooked(true)}
                className="w-full py-3.5 rounded-xl font-bold text-white text-sm shadow-lg hover:shadow-blue-200 transition-all hover:scale-[1.01]"
                style={{ background: 'linear-gradient(135deg, #2563EB, #1d4ed8)' }}
              >
                Confirm & Pay — ₹{(dest.price * guests).toLocaleString()}
              </button>
              <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-400">
                <Shield className="w-3.5 h-3.5 text-green-500" />
                Free cancellation · No booking fee · Instant confirmation
              </div>
            </div>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-green-800 font-bold text-lg mb-1">Booking Confirmed! 🎉</h3>
              <p className="text-green-600 text-sm mb-1">Your tour in {dest.name} is booked for {guests} guest{guests > 1 ? 's' : ''}.</p>
              <p className="text-green-600 text-sm">Check your email for voucher and details.</p>
              <button onClick={() => setBooked(false)} className="mt-4 text-xs text-gray-400 underline">Cancel booking</button>
            </div>
          )}
        </div>
      )}

      {/* ── ITINERARY ── */}
      {activeSection === 'itinerary' && (
        <div className="max-w-3xl mx-auto px-4 py-5">
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Map className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>Day 1 of 1 · {dest.itinerary.length} stops · {dest.tourType.split('·')[1]?.trim() || '8 Hours'}</span>
            </div>
          </div>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-100" />
            <div className="space-y-3">
              {dest.itinerary.map((stop, i) => (
                <div key={i} className="relative pl-14">
                  {/* dot */}
                  <div className={`absolute left-3 top-3.5 w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs font-black ${
                    expandedItinerary === i ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-blue-300 text-blue-600'
                  }`} style={{ zIndex: 1 }}>
                    {i + 1}
                  </div>
                  <button
                    className="w-full text-left"
                    onClick={() => setExpandedItinerary(expandedItinerary === i ? null : i)}
                  >
                    <div className={`rounded-2xl p-4 border transition-all ${
                      expandedItinerary === i ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-100 shadow-sm'
                    }`}>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">{stop.time}</span>
                          </div>
                          <h3 className="font-bold text-gray-800 text-sm">{stop.title}</h3>
                          {expandedItinerary === i && (
                            <p className="text-gray-600 text-sm mt-2 leading-relaxed">{stop.desc}</p>
                          )}
                        </div>
                        {expandedItinerary === i
                          ? <ChevronUp className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                          : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />}
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── INCLUSIONS ── */}
      {activeSection === 'inclusions' && (
        <div className="max-w-3xl mx-auto px-4 py-5 space-y-4">
          {/* What's Included */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h2 className="font-bold text-gray-800 text-base mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" /> What's Included
            </h2>
            <div className="space-y-2.5">
              {dest.inclusions.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What's Not Included */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h2 className="font-bold text-gray-800 text-base mb-4 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-400" /> Not Included
            </h2>
            <div className="space-y-2.5">
              {dest.exclusions.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-sm text-gray-500">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h2 className="font-bold text-gray-800 text-base mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-500" /> Facilities & Amenities
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {dest.amenities.map((a, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    {amenityIcons[a] || <Check className="w-4 h-4" />}
                  </div>
                  <span className="text-xs font-medium text-gray-700">{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Travel Essentials */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h2 className="font-bold text-gray-800 text-base mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-indigo-500" /> Travel Essentials
            </h2>
            <div className="divide-y divide-gray-50">
              {[
                { label: 'Languages', value: 'Local + English', icon: <Languages className="w-4 h-4 text-blue-400" /> },
                { label: 'Currency', value: 'Varies by country', icon: <CreditCard className="w-4 h-4 text-green-400" /> },
                { label: 'Power Plugs', value: 'Adapter recommended', icon: <Zap className="w-4 h-4 text-amber-400" /> },
                { label: 'Best Temperature', value: '18–28°C', icon: <Thermometer className="w-4 h-4 text-red-400" /> },
                { label: 'Emergency', value: '112 (International)', icon: <Phone className="w-4 h-4 text-red-500" /> },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-sm text-gray-500">{item.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── REVIEWS ── */}
      {activeSection === 'reviews' && (
        <div className="max-w-3xl mx-auto px-4 py-5">
          {/* Rating summary */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm mb-4">
            <div className="flex items-center gap-5">
              <div className="text-center flex-shrink-0">
                <div className="text-5xl font-black text-blue-600">{dest.rating}</div>
                <div className="flex gap-0.5 justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(dest.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`} />
                  ))}
                </div>
                <div className="text-xs text-gray-400 mt-1">{dest.reviewCount.toLocaleString()} reviews</div>
              </div>
              <div className="flex-1 space-y-1.5">
                {[5, 4, 3, 2, 1].map(star => (
                  <div key={star} className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 w-2">{star}</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2">
                      <div className="h-2 rounded-full bg-yellow-400" style={{ width: `${star === 5 ? 65 : star === 4 ? 25 : star === 3 ? 7 : 2}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trip type filter */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
            {['All', 'Couple', 'Family', 'Solo', 'Friends'].map(f => (
              <button
                key={f}
                onClick={() => setReviewFilter(f)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-all border ${
                  reviewFilter === f ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Review cards */}
          <div className="space-y-3">
            {dest.reviews
              .filter(r => reviewFilter === 'All' || r.tripType === reviewFilter)
              .map((r, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {r.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="font-semibold text-gray-800 text-sm">{r.name}</div>
                        <div className="text-xs text-gray-400">{r.date}</div>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5 mb-2">
                        <div className="flex gap-0.5">
                          {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                        </div>
                        <span className="bg-blue-50 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">{r.tripType}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{r.comment}</p>
                      <button className="flex items-center gap-1 mt-2 text-xs text-gray-400 hover:text-blue-500 transition-colors">
                        <ThumbsUp className="w-3 h-3" /> Helpful
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            {dest.reviews.filter(r => reviewFilter === 'All' || r.tripType === reviewFilter).length === 0 && (
              <div className="text-center py-8 text-gray-400 text-sm">No reviews for this trip type yet.</div>
            )}
          </div>

          <button className="w-full mt-4 py-3.5 border-2 border-blue-100 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-sm">
            <MessageSquare className="w-4 h-4" /> Write a Review
          </button>
        </div>
      )}

      {/* ── FAQ ── */}
      {activeSection === 'faq' && (
        <div className="max-w-3xl mx-auto px-4 py-5">
          <div className="space-y-2">
            {dest.faq.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <button
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                >
                  <span className="font-semibold text-gray-800 text-sm pr-4 leading-snug">{item.q}</span>
                  {expandedFaq === i
                    ? <ChevronUp className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                </button>
                {expandedFaq === i && (
                  <div className="px-4 pb-4 pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed bg-blue-50 p-3 rounded-xl">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Need Help */}
          <div className="mt-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100 text-center">
            <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="font-bold text-gray-800 mb-1">Need More Help?</h3>
            <p className="text-gray-500 text-sm mb-3">Our travel experts are available 24/7</p>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors">
              Call / Chat Support
            </button>
          </div>
        </div>
      )}

      {/* Sticky Bottom Book Bar (mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-between sm:hidden z-30 shadow-xl">
        <div>
          <div className="text-xs text-gray-400 line-through">₹{dest.originalPrice.toLocaleString()}</div>
          <div className="text-lg font-black text-blue-600">₹{dest.price.toLocaleString()}</div>
          <div className="text-xs text-gray-400">per person</div>
        </div>
        <button
          onClick={() => setBooked(true)}
          className="px-6 py-3 rounded-xl text-white text-sm font-bold shadow-lg transition-all"
          style={{ background: 'linear-gradient(135deg, #2563EB, #1d4ed8)' }}
        >
          Book Now →
        </button>
      </div>
      {/* Spacer for sticky bar on mobile */}
      <div className="h-20 sm:h-0" />
    </div>
  );
};

// ────────────────────────────────────────────────────────────────
// DESTINATION CARD
// ────────────────────────────────────────────────────────────────
const DestCard = ({ dest, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onClick={() => onClick(dest)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ boxShadow: hovered ? '0 20px 40px rgba(0,0,0,0.10)' : '0 2px 8px rgba(0,0,0,0.05)' }}
    >
      <div className="relative h-40 sm:h-44 overflow-hidden">
        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full shadow">
            {dest.country}
          </span>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur px-2 py-0.5 rounded-full">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-bold text-gray-800">{dest.rating}</span>
        </div>
        <div className="absolute bottom-3 right-3">
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
            Save ₹{dest.originalPrice - dest.price}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-1.5">
          <h3 className="text-base font-bold text-gray-900 leading-tight">{dest.name}</h3>
          <div className="text-right flex-shrink-0 ml-2">
            <div className="text-xs text-gray-400 line-through">₹{dest.originalPrice}</div>
            <div className="text-base font-black text-blue-600">₹{dest.price}</div>
          </div>
        </div>
        <p className="text-gray-500 text-xs mb-2.5 leading-relaxed line-clamp-2">{dest.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {dest.features.slice(0, 2).map((f, i) => (
            <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">{f}</span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2.5 border-t border-gray-100">
          <span className="text-xs text-gray-400">{dest.reviewCount.toLocaleString()} reviews</span>
          <button className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors">
            View Tour <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────────────────────
// HERO SLIDESHOW
// ────────────────────────────────────────────────────────────────
const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0">
      {heroImages.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${src})`, opacity: currentSlide === i ? 1 : 0 }}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all ${currentSlide === i ? 'bg-white w-6' : 'bg-white/50 w-1.5'}`}
          />
        ))}
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ────────────────────────────────────────────────────────────────
const TripBest = () => {
  const [activeTab, setActiveTab] = useState('Popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDateIndex, setSelectedDateIndex] = useState(2);
  const [passengerCount, setPassengerCount] = useState(1);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDest, setSelectedDest] = useState(null);
  const [sortBy, setSortBy] = useState('Recommended');

  const sortOptions = ['Recommended', 'Price: Low to High', 'Price: High to Low', 'Top Rated'];

  const filtered = popularDestinations
    .filter(d => {
      const q = searchQuery.toLowerCase();
      return !q || d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q);
    })
    .sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price;
      if (sortBy === 'Price: High to Low') return b.price - a.price;
      if (sortBy === 'Top Rated') return b.rating - a.rating;
      return 0;
    });

  if (selectedDest) {
    return <DetailPage dest={selectedDest} onBack={() => setSelectedDest(null)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── HERO / SEARCH ── */}
      <div className="relative pt-6 pb-12 px-3 sm:px-4 overflow-hidden min-h-[380px] sm:min-h-[420px]">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-black/45 z-0" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-white/90 text-xs font-semibold mb-4">
              <Globe className="w-3.5 h-3.5" /> 2026 Global 100 Rankings
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
              Discover Your Next <br />
              <span style={{ color: '#FCD34D' }}>Dream Destination</span>
            </h1>
            <p className="text-white/70 text-sm">Best prices · Verified stays · Instant booking · Zero fees</p>
          </div>

          {/* Search Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 block">Where to?</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search destinations..."
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 block">Check-in</label>
                <div
                  className="flex items-center justify-between border border-gray-200 rounded-xl px-3 py-3 cursor-pointer hover:border-blue-400 transition-colors"
                  onClick={() => setShowDatePicker(!showDatePicker)}
                >
                  <div>
                    <div className="text-sm font-semibold text-gray-800">{dates[selectedDateIndex].day}, {dates[selectedDateIndex].date}</div>
                    <div className="text-xs text-gray-400">After 2:00 PM</div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 block">Guests</label>
                <div className="flex items-center border border-gray-200 rounded-xl px-3 py-3 gap-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <button onClick={() => setPassengerCount(g => Math.max(1, g - 1))} className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700 text-sm">−</button>
                  <span className="flex-1 text-center font-bold text-gray-800 text-sm">{passengerCount}</span>
                  <button onClick={() => setPassengerCount(g => Math.min(10, g + 1))} className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-700 text-sm">+</button>
                </div>
              </div>
            </div>

            {showDatePicker && (
              <div className="mb-4 border border-gray-100 rounded-xl p-3 bg-gray-50">
                <div className="flex gap-1 overflow-x-auto">
                  {dates.map((d, i) => (
                    <button
                      key={i}
                      onClick={() => { setSelectedDateIndex(i); setShowDatePicker(false); }}
                      className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-center text-xs font-semibold transition-all ${
                        selectedDateIndex === i ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                      }`}
                    >
                      <div>{d.day}</div>
                      <div className="font-normal opacity-80">{d.date}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button className="w-full py-3.5 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-200 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
              style={{ background: 'linear-gradient(135deg, #2563EB, #1d4ed8)' }}
            >
              <Search className="w-4 h-4" /> Search Destinations
            </button>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 -mt-6 pb-12">

        {/* Date strip */}
        <div className="bg-white rounded-2xl shadow-md p-3 sm:p-4 mb-5 overflow-x-auto flex gap-2">
          {dates.map((d, i) => (
            <button
              key={i}
              onClick={() => setSelectedDateIndex(i)}
              className={`flex-shrink-0 px-3 sm:px-4 py-2.5 rounded-xl text-xs font-semibold text-center transition-all ${
                selectedDateIndex === i ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div>{d.day}</div>
              <div className={`font-normal ${selectedDateIndex === i ? 'text-blue-200' : 'text-gray-400'}`}>{d.date}</div>
            </button>
          ))}
        </div>

        {/* Tabs + Sort */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {tabs.map(t => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex-shrink-0 transition-all ${
                  activeTab === t ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 flex-shrink-0">
            {sortOptions.map(o => (
              <button
                key={o}
                onClick={() => setSortBy(o)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-all border ${
                  sortBy === o ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-200'
                }`}
              >
                {o}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 font-medium mb-4">Showing {filtered.length} destination{filtered.length !== 1 ? 's' : ''}</p>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {filtered.map(dest => (
            <DestCard key={dest.id} dest={dest} onClick={setSelectedDest} />
          ))}
        </div>

        {/* Top Stays */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 mb-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base sm:text-lg font-black text-gray-800 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-500" /> Top Stays
            </h2>
            <button className="text-blue-600 text-xs font-semibold hover:text-blue-800 flex items-center gap-1">
              See all <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Luxury Hotels", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=350&fit=crop", price: 350, rating: 4.8, desc: "5-star accommodations" },
              { name: "Family Hotels", image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?w=600&h=350&fit=crop", price: 180, rating: 4.5, desc: "Kid-friendly amenities" },
              { name: "Scenic Hotels", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=350&fit=crop", price: 220, rating: 4.7, desc: "Breathtaking views" },
              { name: "Cultural Hotels", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=350&fit=crop", price: 195, rating: 4.6, desc: "Local architecture" },
            ].map((item, i) => (
              <div key={i}
                className="border border-gray-100 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedDest(popularDestinations[i % popularDestinations.length])}
              >
                <div className="h-32 sm:h-36 overflow-hidden relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-0.5 flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-bold text-gray-700">{item.rating}</span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-gray-800 text-sm mb-0.5">{item.name}</h3>
                  <p className="text-gray-500 text-xs mb-2">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-black text-sm">₹{item.price}<span className="text-gray-400 font-normal text-xs">/night</span></span>
                    <button className="text-xs text-blue-600 font-semibold hover:underline">Book →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Things to Do */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base sm:text-lg font-black text-gray-800 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" /> Things To Do
            </h2>
            <button className="text-blue-600 text-xs font-semibold hover:text-blue-800 flex items-center gap-1">
              See all <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Best Activities", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=350&fit=crop", price: 75, rating: 4.8 },
              { name: "Family Attractions", image: "https://images.unsplash.com/photo-1502086223501-681a981c2522?w=600&h=350&fit=crop", price: 45, rating: 4.5 },
              { name: "Spring Outings", image: "https://images.unsplash.com/photo-1490750967868-58cb75069faf?w=600&h=400&fit=crop", price: 60, rating: 4.6 },
              { name: "Water Escapes", image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc452e?w=600&h=350&fit=crop", price: 85, rating: 4.7 },
            ].map((item, i) => (
              <div key={i}
                className="border border-gray-100 rounded-2xl overflow-hidden hover:border-amber-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedDest(popularDestinations[(i + 4) % popularDestinations.length])}
              >
                <div className="h-32 sm:h-36 overflow-hidden relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-0.5 flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-bold text-gray-700">{item.rating}</span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-gray-800 text-sm mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-600 font-black text-sm">₹{item.price}<span className="text-gray-400 font-normal text-xs">/person</span></span>
                    <button className="text-xs text-blue-600 font-semibold hover:underline">Book →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripBest;