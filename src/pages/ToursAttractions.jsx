// import React, { useState } from 'react';
// import { Search, ChevronLeft, ChevronRight, MapPin, Star, Award, Facebook, Twitter, Instagram, Globe } from 'lucide-react';

// const TripBest = () => {
//   const [activeTab, setActiveTab] = useState('Popular');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [selectedDateIndex, setSelectedDateIndex] = useState(2);
//   const [passengerCount, setPassengerCount] = useState(1);
//   const [showPassengerOptions, setShowPassengerOptions] = useState(false);
//   const [showDetails, setShowDetails] = useState({});
//   const [selectedDestination, setSelectedDestination] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('All Categories');

//   // Date data
//   const dates = [
//     { day: 'Tue', date: 'Feb 10' },
//     { day: 'Wed', date: 'Feb 11' },
//     { day: 'Thu', date: 'Feb 12' },
//     { day: 'Fri', date: 'Feb 13' },
//     { day: 'Sat', date: 'Feb 14' },
//     { day: 'Sun', date: 'Feb 15' },
//     { day: 'Mon', date: 'Feb 16' }
//   ];

//   // Category filters
//   const categoryFilters = ['All Categories', 'Hotels', 'Attractions', 'Restaurants', 'Nightlife', 'Activities'];

//   // --- MOCK DATA ---
//   const popularDestinations = [
//     { 
//       id: 1, 
//       name: "Florence", 
//       image: "https://images.unsplash.com/photo-1529307474898-e854236b67eb?w=600&h=400&fit=crop",
//       country: "Italy",
//       rating: 4.8,
//       reviewCount: 1250,
//       price: 899,
//       originalPrice: 1200,
//       features: ["Historic Architecture", "Art Galleries", "Italian Cuisine"],
//       amenities: ["Free WiFi", "Guided Tours", "Transportation"],
//       description: "The birthplace of the Renaissance, known for its art and architecture."
//     },
//     { 
//       id: 2, 
//       name: "Los Angeles", 
//       image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=600&h=400&fit=crop",
//       country: "USA",
//       rating: 4.5,
//       reviewCount: 980,
//       price: 1200,
//       originalPrice: 1500,
//       features: ["Hollywood", "Beaches", "Entertainment"],
//       amenities: ["City Tours", "Beach Access", "Shopping"],
//       description: "The entertainment capital of the world with sunny beaches."
//     },
//     { 
//       id: 3, 
//       name: "Rome", 
//       image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop",
//       country: "Italy",
//       rating: 4.9,
//       reviewCount: 2100,
//       price: 950,
//       originalPrice: 1300,
//       features: ["Ancient History", "Colosseum", "Vatican City"],
//       amenities: ["Historical Sites", "Museums", "Local Food"],
//       description: "Eternal city with ancient ruins and world-famous landmarks."
//     },
//     { 
//       id: 4, 
//       name: "London", 
//       image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
//       country: "UK",
//       rating: 4.7,
//       reviewCount: 1850,
//       price: 1100,
//       originalPrice: 1400,
//       features: ["Royal Heritage", "Museums", "Theatre"],
//       amenities: ["City Pass", "River Cruise", "West End Shows"],
//       description: "Historic capital with royal palaces and modern attractions."
//     },
//     { 
//       id: 5, 
//       name: "New York", 
//       image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop",
//       country: "USA",
//       rating: 4.6,
//       reviewCount: 1950,
//       price: 1300,
//       originalPrice: 1650,
//       features: ["Broadway", "Statue of Liberty", "Central Park"],
//       amenities: ["City Tours", "Shopping", "Dining"],
//       description: "The city that never sleeps with iconic skyscrapers."
//     },
//     { 
//       id: 6, 
//       name: "Kyoto", 
//       image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop",
//       country: "Japan",
//       rating: 4.8,
//       reviewCount: 920,
//       price: 1150,
//       originalPrice: 1450,
//       features: ["Temples", "Traditional Gardens", "Cherry Blossoms"],
//       amenities: ["Cultural Tours", "Tea Ceremonies", "Hot Springs"],
//       description: "Ancient capital with traditional temples and gardens."
//     },
//     { 
//       id: 7, 
//       name: "Phuket", 
//       image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&h=400&fit=crop",
//       country: "Thailand",
//       rating: 4.4,
//       reviewCount: 870,
//       price: 650,
//       originalPrice: 850,
//       features: ["Beaches", "Islands", "Night Markets"],
//       amenities: ["Beach Resorts", "Water Sports", "Thai Massage"],
//       description: "Tropical paradise with stunning beaches and islands."
//     },
//     { 
//       id: 8, 
//       name: "Barcelona", 
//       image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop",
//       country: "Spain",
//       rating: 4.7,
//       reviewCount: 1320,
//       price: 1050,
//       originalPrice: 1350,
//       features: ["Gaudi Architecture", "Beaches", "Tapas"],
//       amenities: ["Art Tours", "Beach Clubs", "Catalan Culture"],
//       description: "Vibrant city with unique architecture and Mediterranean beaches."
//     }
//   ];

//   const categories = [
//     {
//       title: " Stays",
//       items: [
//         { 
//           name: "Luxury Hotels", 
//           image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=350&fit=crop",
//           price: 350,
//           rating: 4.8,
//           description: "5-star accommodations with premium services"
//         },
//         { 
//           name: "Family Hotels", 
//           image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?w=600&h=350&fit=crop",
//           price: 180,
//           rating: 4.5,
//           description: "Kid-friendly amenities and spacious rooms"
//         },
//         { 
//           name: "Scenic Hotels", 
//           image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=350&fit=crop",
//           price: 220,
//           rating: 4.7,
//           description: "Breathtaking views and natural surroundings"
//         },
//         { 
//           name: "Cultural Hotels", 
//           image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=350&fit=crop",
//           price: 195,
//           rating: 4.6,
//           description: "Local architecture and cultural experiences"
//         }
//       ]
//     },
//     {
//       title: " Things to Do",
//       items: [
//         { 
//           name: "Best Things to Do", 
//           image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=350&fit=crop",
//           price: 75,
//           rating: 4.8,
//           description: "Top-rated activities and experiences"
//         },
//         { 
//           name: "Family-friendly Attractions", 
//           image: "https://images.unsplash.com/photo-1502086223501-681a981c2522?w=600&h=350&fit=crop",
//           price: 45,
//           rating: 4.5,
//           description: "Fun activities for all ages"
//         },
//         { 
//           name: "Spring Outings", 
//           image: "https://images.unsplash.com/photo-1490750967868-58cb75069faf?w=600&h=400&fit=crop",
//           price: 60,
//           rating: 4.6,
//           description: "Seasonal activities and events"
//         },
//         { 
//           name: "Cool Water Escapes", 
//           image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc452e?w=600&h=350&fit=crop",
//           price: 85,
//           rating: 4.7,
//           description: "Water-based activities and attractions"
//         }
//       ]
//     }
//   ];

//   const tabs = ["Popular", "Asia", "Europe", "North America", "Oceania", "Africa", "South America"];
//   const sortOptions = ['Recommended', 'Price: Low to High', 'Price: High to Low', 'Top Rated'];

//   // Filter destinations based on active tab and search
//   const filteredDestinations = popularDestinations.filter(dest => {
//     const query = searchQuery.toLowerCase();
//     const searchMatch = 
//       dest.name.toLowerCase().includes(query) || 
//       dest.country.toLowerCase().includes(query) ||
//       dest.description.toLowerCase().includes(query);
    
//     // Category filter
//     const categoryMatch = selectedCategory === 'All Categories' || true;
    
//     return searchMatch && categoryMatch;
//   });

//   const handleDateSelect = (index) => {
//     setSelectedDateIndex(index);
//     setShowDatePicker(false);
//   };

//   const handlePassengerChange = (change) => {
//     const newCount = passengerCount + change;
//     if (newCount >= 1 && newCount <= 10) {
//       setPassengerCount(newCount);
//     }
//   };

//   const handleDetailsClick = (destId, e) => {
//     e.stopPropagation();
//     setShowDetails(prev => ({
//       ...prev,
//       [destId]: !prev[destId]
//     }));
//   };

//   const calculateSavings = (price, originalPrice) => {
//     return (originalPrice - price).toFixed(2);
//   };

//   const getRatingColor = (rating) => {
//     if (rating >= 4.5) return 'bg-green-100 text-green-700';
//     if (rating >= 4.0) return 'bg-blue-100 text-blue-700';
//     if (rating >= 3.5) return 'bg-yellow-100 text-yellow-700';
//     return 'bg-red-100 text-red-700';
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-7xl mx-auto">
        
       

//         {/* Search Section - Clean White Design */}
//         <div className="bg-white rounded-xl shadow-md p-6 mb-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
//             {/* Destination */}
//             <div>
//               <div className="text-sm text-gray-500 mb-1">Destination</div>
//               <div className="relative">
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Enter destination"
//                   className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//                 <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//                   <Search className="w-4 h-4 text-blue-500" />
//                 </div>
//               </div>
//             </div>
            
//             {/* Check-in Date */}
//             <div>
//               <div className="text-sm text-gray-500 mb-1">Check-in Date</div>
//               <div 
//                 className="flex items-center justify-between border rounded-lg p-3 cursor-pointer hover:border-blue-400 transition-colors"
//                 onClick={() => setShowDatePicker(!showDatePicker)}
//               >
//                 <div>
//                   <div className="font-medium">{dates[selectedDateIndex].day}, {dates[selectedDateIndex].date}</div>
//                   <div className="text-sm text-gray-500">After 2:00 PM</div>
//                 </div>
//                 <span className="text-gray-400">▾</span>
//               </div>
//             </div>
            
//             {/* Check-out Date */}
//             <div>
//               <div className="text-sm text-gray-500 mb-1">Check-out Date</div>
//               <div className="flex items-center justify-between border rounded-lg p-3">
//                 <div>
//                   <div className="font-medium">Sun, Feb 15</div>
//                   <div className="text-sm text-gray-500">Before 12:00 PM</div>
//                 </div>
//                 <span className="text-gray-400">▾</span>
//               </div>
//             </div>
            
//             {/* Guests */}
//             <div>
//               <div className="text-sm text-gray-500 mb-1">Guests</div>
//               <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3">
//                 <button 
//                   type="button"
//                   onClick={() => handlePassengerChange(-1)}
//                   className="p-1 hover:bg-gray-100 rounded"
//                 >
//                   <span className="w-4 h-4 text-gray-600">-</span>
//                 </button>
//                 <span className="flex-1 text-center font-medium">{passengerCount}</span>
//                 <button 
//                   type="button"
//                   onClick={() => handlePassengerChange(1)}
//                   className="p-1 hover:bg-gray-100 rounded"
//                 >
//                   <span className="w-4 h-4 text-gray-600">+</span>
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           {/* Date Picker Dropdown */}
//           {showDatePicker && (
//             <div className="mb-4 bg-white border rounded-lg shadow-lg p-4">
//               <div className="flex justify-between mb-2">
//                 <div className="font-medium">Select check-in date:</div>
//                 <button 
//                   className="text-blue-600 hover:text-blue-800"
//                   onClick={() => setShowDatePicker(false)}
//                 >
//                   ✕
//                 </button>
//               </div>
//               <div className="grid grid-cols-7 gap-2">
//                 {dates.map((date, index) => (
//                   <div
//                     key={index}
//                     className={`text-center p-2 rounded-lg cursor-pointer ${selectedDateIndex === index ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
//                     onClick={() => handleDateSelect(index)}
//                   >
//                     <div className="font-medium">{date.day}</div>
//                     <div className="text-sm">{date.date}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
          
//           <div className="flex justify-between items-center">
//             <div 
//               className="text-sm text-gray-600 cursor-pointer hover:text-blue-600"
//               onClick={() => setShowPassengerOptions(true)}
//             >
//               {passengerCount} guest{passengerCount > 1 ? 's' : ''} • 1 room
//             </div>
//             <button 
//               className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
//               onClick={() => alert('Searching for trips...')}
//             >
//               <Search className="w-4 h-4" />
//               Search
//             </button>
//           </div>
//         </div>

//         {/* Date Selector */}
//         <div className="bg-white rounded-xl shadow-md p-4 mb-6">
//           <div className="flex justify-between items-center mb-4">
//             <div className="text-lg font-bold">{dates[selectedDateIndex].day}, {dates[selectedDateIndex].date}</div>
//             <div className="text-blue-600 font-medium cursor-pointer hover:text-blue-800">
//               Continue
//             </div>
//           </div>
//           <div className="flex justify-between text-center">
//             {dates.map((date, i) => (
//               <div 
//                 key={i}
//                 className={`px-4 py-2 rounded-lg cursor-pointer ${selectedDateIndex === i ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
//                 onClick={() => handleDateSelect(i)}
//               >
//                 <div className="font-medium">{date.day}</div>
//                 <div className="text-sm">{date.date}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex flex-col">
//           {/* Hero Section */}
          

//           {/* Filters Bar */}
//           <div className="flex justify-between items-center mb-6">
//             <div className="flex gap-2 flex-wrap">
//               {sortOptions.map((option, i) => (
//                 <button 
//                   key={i}
//                   className={`px-4 py-2 rounded-lg border ${'recommended' === option ? 'bg-blue-100 text-blue-600 border-blue-200' : 'bg-white border-gray-300 hover:bg-gray-50'} transition-colors`}
//                 >
//                   {option} {'recommended' === option ? '▾' : ''}
//                 </button>
//               ))}
//             </div>
//             <div className="text-sm text-gray-600">2026 GLOBAL 100 Rankings</div>
//           </div>

//           {/* Tabs */}
//           <div className="bg-white rounded-xl shadow-md p-4 mb-6">
//             <div className="flex gap-4 mb-4 overflow-x-auto">
//               {tabs.map(tab => (
//                 <button 
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
//                     activeTab === tab 
//                     ? 'bg-blue-600 text-white' 
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   } transition-colors`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
            
//             {/* Results Count */}
//             <div className="mb-4 text-gray-600">
//               Found {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
//               {selectedCategory !== 'All Categories' && ` in ${selectedCategory}`}
//             </div>
//           </div>

//           {/* Destinations Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//             {filteredDestinations.map(dest => (
//               <div 
//                 key={dest.id}
//                 className={`bg-white rounded-xl border-2 ${selectedDestination === dest.id ? 'border-blue-500' : 'border-gray-200'} hover:border-blue-300 transition-colors cursor-pointer`}
//                 onClick={() => setSelectedDestination(dest.id)}
//               >
//                 <div className="p-6">
//                   <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
//                     <img 
//                       src={dest.image} 
//                       alt={dest.name}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute top-2 right-2">
//                       <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRatingColor(dest.rating)}`}>
//                         {dest.rating} ★
//                       </span>
//                     </div>
//                   </div>
                  
//                   <div className="flex justify-between items-start mb-3">
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-800">{dest.name}</h3>
//                       <p className="text-gray-600">{dest.country}</p>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-2xl font-bold text-blue-600">₹{dest.price}</div>
//                       <div className="text-sm text-gray-500 line-through">₹{dest.originalPrice}</div>
//                     </div>
//                   </div>
                  
//                   <p className="text-gray-600 text-sm mb-4">{dest.description}</p>
                  
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {dest.features.slice(0, 3).map((feature, i) => (
//                       <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
//                         {feature}
//                       </span>
//                     ))}
//                   </div>
                  
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center text-gray-600">
//                       <Star className="w-4 h-4 text-amber-500 fill-current mr-1" />
//                       <span className="text-sm">{dest.rating} ({dest.reviewCount} reviews)</span>
//                     </div>
//                     <button 
//                       className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleDetailsClick(dest.id, e);
//                       }}
//                     >
//                       {showDetails[dest.id] ? 'Hide Details' : 'Details'}
//                     </button>
//                   </div>
                  
//                   {/* Additional Details Section */}
//                   {showDetails[dest.id] && (
//                     <div className="mt-4 pt-4 border-t">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                           <h4 className="font-medium text-gray-700 mb-2">Amenities:</h4>
//                           <div className="flex flex-wrap gap-2">
//                             {dest.amenities.map((amenity, i) => (
//                               <span key={i} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
//                                 {amenity}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
                        
//                         <div>
//                           <h4 className="font-medium text-gray-700 mb-2">Travel Details:</h4>
//                           <div className="text-sm text-gray-600 space-y-1">
//                             <div>Best Time to Visit: Spring & Autumn</div>
//                             <div>Average Stay: 5-7 days</div>
//                             <div>Visa Requirements: Tourist Visa</div>
//                             <div>Language: English widely spoken</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Categories Sections */}
//           {categories.map((category, index) => (
//             <div key={index} className="bg-white rounded-xl shadow-md p-6 mb-6">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">{category.title}</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {category.items.map((item, idx) => (
//                   <div 
//                     key={idx} 
//                     className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors cursor-pointer"
//                   >
//                     <div className="h-40 overflow-hidden">
//                       <img 
//                         src={item.image} 
//                         alt={item.name}
//                         className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                       />
//                     </div>
//                     <div className="p-4">
//                       <h3 className="font-bold text-gray-800 mb-2">{item.name}</h3>
//                       <div className="flex items-center justify-between mb-2">
//                         <div className="flex items-center">
//                           <Star className="w-4 h-4 text-amber-500 fill-current mr-1" />
//                           <span className="text-sm text-gray-600">{item.rating}</span>
//                         </div>
//                         <div className="text-blue-600 font-bold">₹{item.price}</div>
//                       </div>
//                       <p className="text-gray-600 text-sm">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}

//           {/* Category Filter Buttons */}
//           <div className="mt-8 flex justify-center gap-2 flex-wrap">
//             {categoryFilters.map((filter, index) => (
//               <button
//                 key={index}
//                 className={`px-6 py-3 rounded-lg font-medium transition-colors ${selectedCategory === filter ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border hover:bg-gray-50'}`}
//                 onClick={() => setSelectedCategory(filter)}
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>
//         </div>

       
//       </div>
//     </div>
//   );
// };

// export default TripBest;





import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, MapPin, Star, Award, Facebook, Twitter, Instagram, Globe, Menu, X } from 'lucide-react';

const TripBest = () => {
  const [activeTab, setActiveTab] = useState('Popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDateIndex, setSelectedDateIndex] = useState(2);
  const [passengerCount, setPassengerCount] = useState(1);
  const [showPassengerOptions, setShowPassengerOptions] = useState(false);
  const [showDetails, setShowDetails] = useState({});
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Date data
  const dates = [
    { day: 'Tue', date: 'Feb 10' },
    { day: 'Wed', date: 'Feb 11' },
    { day: 'Thu', date: 'Feb 12' },
    { day: 'Fri', date: 'Feb 13' },
    { day: 'Sat', date: 'Feb 14' },
    { day: 'Sun', date: 'Feb 15' },
    { day: 'Mon', date: 'Feb 16' }
  ];

  // Category filters
  const categoryFilters = ['All Categories', 'Hotels', 'Attractions', 'Restaurants', 'Nightlife', 'Activities'];

  // --- MOCK DATA ---
  const popularDestinations = [
    { 
      id: 1, 
      name: "Florence", 
      image: "https://images.unsplash.com/photo-1529307474898-e854236b67eb?w=600&h=400&fit=crop",
      country: "Italy",
      rating: 4.8,
      reviewCount: 1250,
      price: 899,
      originalPrice: 1200,
      features: ["Historic Architecture", "Art Galleries", "Italian Cuisine"],
      amenities: ["Free WiFi", "Guided Tours", "Transportation"],
      description: "The birthplace of the Renaissance, known for its art and architecture."
    },
    { 
      id: 2, 
      name: "Los Angeles", 
      image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=600&h=400&fit=crop",
      country: "USA",
      rating: 4.5,
      reviewCount: 980,
      price: 1200,
      originalPrice: 1500,
      features: ["Hollywood", "Beaches", "Entertainment"],
      amenities: ["City Tours", "Beach Access", "Shopping"],
      description: "The entertainment capital of the world with sunny beaches."
    },
    { 
      id: 3, 
      name: "Rome", 
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop",
      country: "Italy",
      rating: 4.9,
      reviewCount: 2100,
      price: 950,
      originalPrice: 1300,
      features: ["Ancient History", "Colosseum", "Vatican City"],
      amenities: ["Historical Sites", "Museums", "Local Food"],
      description: "Eternal city with ancient ruins and world-famous landmarks."
    },
    { 
      id: 4, 
      name: "London", 
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
      country: "UK",
      rating: 4.7,
      reviewCount: 1850,
      price: 1100,
      originalPrice: 1400,
      features: ["Royal Heritage", "Museums", "Theatre"],
      amenities: ["City Pass", "River Cruise", "West End Shows"],
      description: "Historic capital with royal palaces and modern attractions."
    },
    { 
      id: 5, 
      name: "New York", 
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop",
      country: "USA",
      rating: 4.6,
      reviewCount: 1950,
      price: 1300,
      originalPrice: 1650,
      features: ["Broadway", "Statue of Liberty", "Central Park"],
      amenities: ["City Tours", "Shopping", "Dining"],
      description: "The city that never sleeps with iconic skyscrapers."
    },
    { 
      id: 6, 
      name: "Kyoto", 
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop",
      country: "Japan",
      rating: 4.8,
      reviewCount: 920,
      price: 1150,
      originalPrice: 1450,
      features: ["Temples", "Traditional Gardens", "Cherry Blossoms"],
      amenities: ["Cultural Tours", "Tea Ceremonies", "Hot Springs"],
      description: "Ancient capital with traditional temples and gardens."
    },
    { 
      id: 7, 
      name: "Phuket", 
      image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600&h=400&fit=crop",
      country: "Thailand",
      rating: 4.4,
      reviewCount: 870,
      price: 650,
      originalPrice: 850,
      features: ["Beaches", "Islands", "Night Markets"],
      amenities: ["Beach Resorts", "Water Sports", "Thai Massage"],
      description: "Tropical paradise with stunning beaches and islands."
    },
    { 
      id: 8, 
      name: "Barcelona", 
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop",
      country: "Spain",
      rating: 4.7,
      reviewCount: 1320,
      price: 1050,
      originalPrice: 1350,
      features: ["Gaudi Architecture", "Beaches", "Tapas"],
      amenities: ["Art Tours", "Beach Clubs", "Catalan Culture"],
      description: "Vibrant city with unique architecture and Mediterranean beaches."
    }
  ];

  const categories = [
    {
      title: " Stays",
      items: [
        { 
          name: "Luxury Hotels", 
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=350&fit=crop",
          price: 350,
          rating: 4.8,
          description: "5-star accommodations with premium services"
        },
        { 
          name: "Family Hotels", 
          image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?w=600&h=350&fit=crop",
          price: 180,
          rating: 4.5,
          description: "Kid-friendly amenities and spacious rooms"
        },
        { 
          name: "Scenic Hotels", 
          image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=350&fit=crop",
          price: 220,
          rating: 4.7,
          description: "Breathtaking views and natural surroundings"
        },
        { 
          name: "Cultural Hotels", 
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=350&fit=crop",
          price: 195,
          rating: 4.6,
          description: "Local architecture and cultural experiences"
        }
      ]
    },
    {
      title: " Things to Do",
      items: [
        { 
          name: "Best Things to Do", 
          image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=350&fit=crop",
          price: 75,
          rating: 4.8,
          description: "Top-rated activities and experiences"
        },
        { 
          name: "Family-friendly Attractions", 
          image: "https://images.unsplash.com/photo-1502086223501-681a981c2522?w=600&h=350&fit=crop",
          price: 45,
          rating: 4.5,
          description: "Fun activities for all ages"
        },
        { 
          name: "Spring Outings", 
          image: "https://images.unsplash.com/photo-1490750967868-58cb75069faf?w=600&h=400&fit=crop",
          price: 60,
          rating: 4.6,
          description: "Seasonal activities and events"
        },
        { 
          name: "Cool Water Escapes", 
          image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc452e?w=600&h=350&fit=crop",
          price: 85,
          rating: 4.7,
          description: "Water-based activities and attractions"
        }
      ]
    }
  ];

  const tabs = ["Popular", "Asia", "Europe", "North America", "Oceania", "Africa", "South America"];
  const sortOptions = ['Recommended', 'Price: Low to High', 'Price: High to Low', 'Top Rated'];

  // Filter destinations based on active tab and search
  const filteredDestinations = popularDestinations.filter(dest => {
    const query = searchQuery.toLowerCase();
    const searchMatch = 
      dest.name.toLowerCase().includes(query) || 
      dest.country.toLowerCase().includes(query) ||
      dest.description.toLowerCase().includes(query);
    
    const categoryMatch = selectedCategory === 'All Categories' || true;
    
    return searchMatch && categoryMatch;
  });

  const handleDateSelect = (index) => {
    setSelectedDateIndex(index);
    setShowDatePicker(false);
  };

  const handlePassengerChange = (change) => {
    const newCount = passengerCount + change;
    if (newCount >= 1 && newCount <= 10) {
      setPassengerCount(newCount);
    }
  };

  const handleDetailsClick = (destId, e) => {
    e.stopPropagation();
    setShowDetails(prev => ({
      ...prev,
      [destId]: !prev[destId]
    }));
  };

  const calculateSavings = (price, originalPrice) => {
    return (originalPrice - price).toFixed(2);
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'bg-green-100 text-green-700';
    if (rating >= 4.0) return 'bg-blue-100 text-blue-700';
    if (rating >= 3.5) return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile-friendly padding */}
      <div className="px-3 sm:px-4 py-3 sm:py-4 max-w-7xl mx-auto">
        
        {/* Search Section */}
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
            {/* Destination */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="text-sm text-gray-500 mb-1">Destination</div>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter destination"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Search className="w-4 h-4 text-blue-500" />
                </div>
              </div>
            </div>
            
            {/* Check-in Date */}
            <div>
              <div className="text-sm text-gray-500 mb-1">Check-in Date</div>
              <div 
                className="flex items-center justify-between border rounded-lg p-3 cursor-pointer hover:border-blue-400 transition-colors"
                onClick={() => setShowDatePicker(!showDatePicker)}
              >
                <div>
                  <div className="font-medium text-sm sm:text-base">{dates[selectedDateIndex].day}, {dates[selectedDateIndex].date}</div>
                  <div className="text-xs sm:text-sm text-gray-500">After 2:00 PM</div>
                </div>
                <span className="text-gray-400">▾</span>
              </div>
            </div>
            
            {/* Check-out Date */}
            <div>
              <div className="text-sm text-gray-500 mb-1">Check-out Date</div>
              <div className="flex items-center justify-between border rounded-lg p-3">
                <div>
                  <div className="font-medium text-sm sm:text-base">Sun, Feb 15</div>
                  <div className="text-xs sm:text-sm text-gray-500">Before 12:00 PM</div>
                </div>
                <span className="text-gray-400">▾</span>
              </div>
            </div>
            
            {/* Guests */}
            <div>
              <div className="text-sm text-gray-500 mb-1">Guests</div>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3">
                <button 
                  type="button"
                  onClick={() => handlePassengerChange(-1)}
                  className="p-1 hover:bg-gray-100 rounded text-gray-600 font-bold text-lg leading-none"
                >
                  -
                </button>
                <span className="flex-1 text-center font-medium text-sm sm:text-base">{passengerCount}</span>
                <button 
                  type="button"
                  onClick={() => handlePassengerChange(1)}
                  className="p-1 hover:bg-gray-100 rounded text-gray-600 font-bold text-lg leading-none"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          
          {/* Date Picker Dropdown */}
          {showDatePicker && (
            <div className="mb-4 bg-white border rounded-lg shadow-lg p-3 sm:p-4">
              <div className="flex justify-between mb-2">
                <div className="font-medium text-sm sm:text-base">Select check-in date:</div>
                <button 
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => setShowDatePicker(false)}
                >
                  ✕
                </button>
              </div>
              {/* Scrollable on mobile */}
              <div className="flex gap-2 overflow-x-auto pb-1 sm:grid sm:grid-cols-7">
                {dates.map((date, index) => (
                  <div
                    key={index}
                    className={`text-center p-2 rounded-lg cursor-pointer flex-shrink-0 min-w-[52px] sm:min-w-0 ${selectedDateIndex === index ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                    onClick={() => handleDateSelect(index)}
                  >
                    <div className="font-medium text-xs sm:text-sm">{date.day}</div>
                    <div className="text-xs">{date.date}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
            <div 
              className="text-sm text-gray-600 cursor-pointer hover:text-blue-600"
              onClick={() => setShowPassengerOptions(true)}
            >
              {passengerCount} guest{passengerCount > 1 ? 's' : ''} • 1 room
            </div>
            <button 
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              onClick={() => alert('Searching for trips...')}
            >
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </div>

        {/* Date Selector - Horizontal scroll on mobile */}
        <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 mb-4 sm:mb-6">
          <div className="flex justify-between items-center mb-3">
            <div className="text-base sm:text-lg font-bold">{dates[selectedDateIndex].day}, {dates[selectedDateIndex].date}</div>
            <div className="text-blue-600 font-medium cursor-pointer hover:text-blue-800 text-sm sm:text-base">
              Continue
            </div>
          </div>
          <div className="flex gap-1 overflow-x-auto pb-1 sm:justify-between">
            {dates.map((date, i) => (
              <div 
                key={i}
                className={`px-3 sm:px-4 py-2 rounded-lg cursor-pointer flex-shrink-0 text-center ${selectedDateIndex === i ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                onClick={() => handleDateSelect(i)}
              >
                <div className="font-medium text-xs sm:text-sm">{date.day}</div>
                <div className="text-xs">{date.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col">

          {/* Filters Bar - horizontal scroll on mobile */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 sm:mb-6">
            <div className="flex gap-2 overflow-x-auto pb-1 w-full sm:w-auto">
              {sortOptions.map((option, i) => (
                <button 
                  key={i}
                  className={`px-3 sm:px-4 py-2 rounded-lg border whitespace-nowrap flex-shrink-0 text-sm ${'recommended' === option ? 'bg-blue-100 text-blue-600 border-blue-200' : 'bg-white border-gray-300 hover:bg-gray-50'} transition-colors`}
                >
                  {option} {'recommended' === option ? '▾' : ''}
                </button>
              ))}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">2026 GLOBAL 100 Rankings</div>
          </div>

          {/* Tabs - horizontal scroll on mobile */}
          <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 mb-4 sm:mb-6">
            <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
              {tabs.map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 sm:px-4 py-2 rounded-lg font-medium whitespace-nowrap flex-shrink-0 text-sm ${
                    activeTab === tab 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="mb-2 text-sm sm:text-base text-gray-600">
              Found {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
              {selectedCategory !== 'All Categories' && ` in ${selectedCategory}`}
            </div>
          </div>

          {/* Destinations Grid - 1 col on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {filteredDestinations.map(dest => (
              <div 
                key={dest.id}
                className={`bg-white rounded-xl border-2 ${selectedDestination === dest.id ? 'border-blue-500' : 'border-gray-200'} hover:border-blue-300 transition-colors cursor-pointer`}
                onClick={() => setSelectedDestination(dest.id)}
              >
                <div className="p-4 sm:p-6">
                  <div className="relative h-40 sm:h-48 w-full mb-3 sm:mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={dest.image} 
                      alt={dest.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getRatingColor(dest.rating)}`}>
                        {dest.rating} ★
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-2 sm:mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800">{dest.name}</h3>
                      <p className="text-gray-600 text-sm">{dest.country}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">₹{dest.price}</div>
                      <div className="text-xs sm:text-sm text-gray-500 line-through">₹{dest.originalPrice}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-2">{dest.description}</p>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {dest.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 fill-current mr-1" />
                      <span className="text-xs sm:text-sm">{dest.rating} ({dest.reviewCount})</span>
                    </div>
                    <button 
                      className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDetailsClick(dest.id, e);
                      }}
                    >
                      {showDetails[dest.id] ? 'Hide' : 'Details'}
                    </button>
                  </div>
                  
                  {/* Additional Details Section */}
                  {showDetails[dest.id] && (
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-4">
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2 text-sm">Amenities:</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {dest.amenities.map((amenity, i) => (
                              <span key={i} className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm">
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2 text-sm">Travel Details:</h4>
                          <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                            <div>Best Time to Visit: Spring & Autumn</div>
                            <div>Average Stay: 5-7 days</div>
                            <div>Visa Requirements: Tourist Visa</div>
                            <div>Language: English widely spoken</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Categories Sections - 1 col on mobile, 2 on tablet, 4 on desktop */}
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">{category.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {category.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors cursor-pointer"
                  >
                    <div className="h-36 sm:h-40 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">{item.name}</h3>
                      <div className="flex items-center justify-between mb-1 sm:mb-2">
                        <div className="flex items-center">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 fill-current mr-1" />
                          <span className="text-xs sm:text-sm text-gray-600">{item.rating}</span>
                        </div>
                        <div className="text-blue-600 font-bold text-sm sm:text-base">₹{item.price}</div>
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Category Filter Buttons - horizontal scroll on mobile */}
          <div className="mt-6 sm:mt-8">
            <div className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
              {categoryFilters.map((filter, index) => (
                <button
                  key={index}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex-shrink-0 text-sm sm:text-base ${selectedCategory === filter ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border hover:bg-gray-50'}`}
                  onClick={() => setSelectedCategory(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripBest;