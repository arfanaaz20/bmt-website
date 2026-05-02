// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import {
// // //   Search,
// // //   MapPin,
// // //   Star,
// // //   Heart,
// // //   Camera,
// // //   Users,
// // //   Coffee,
// // //   Sunset,
// // //   Utensils,
// // //   Hotel,
// // //   Ticket,
// // //   Compass,
// // //   Globe,
// // //   Facebook,
// // //   Twitter,
// // //   Instagram,
// // //   ChevronRight,
// // //   Clock,
// // //   Wifi,
// // //   Coffee as CoffeeIcon,
// // //   Battery,
// // //   Shield,
// // //   Award,
// // //   Gift,
// // //   Sparkles,
// // //   Filter,
// // //   X,
// // //   CheckCircle,
// // // } from "lucide-react";
// // // import { getHolidayDataAPI } from "../api/holiday.js";

// // // const TripBestGallery = () => {
// // //   const navigate = useNavigate();
// // //   const [selectedExperience, setSelectedExperience] = useState(null);
// // //   const [activeFilter, setActiveFilter] = useState("all");
// // //   const [hoveredId, setHoveredId] = useState(null);
// // //   const [showFilters, setShowFilters] = useState(false);
// // //   const [filters, setFilters] = useState({
// // //     rating: "4+",
// // //     priceRange: "all",
// // //     timeOfDay: [],
// // //   });
// // //   const [experiences, setExperiences] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   // Enhanced experience data with more details
// // //   // const experiences = [
// // //   //   {
// // //   //     id: 1,
// // //   //     title: "Hong Kong Disneyland",
// // //   //     location: "Lantau Island, Hong Kong",
// // //   //     category: "attractions",
// // //   //     rating: 4.9,
// // //   //     reviews: "82.8k",
// // //   //     badge: "Top 1",
// // //   //     badgeColor: "from-yellow-400 to-amber-500",
// // //   //     image: "https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?auto=format&fit=crop&q=80&w=800",
// // //   //     price: 7699,
// // //   //     originalPrice: 9999,
// // //   //     holiday: "🎄",
// // //   //     duration: "Full Day",
// // //   //     timeOfDay: "morning",
// // //   //     amenities: ["Fast Pass", "Meal Included", "Guide", "Transport"],
// // //   //     features: ["Free Cancellation", "Instant Confirmation", "Mobile Voucher"],
// // //   //     description: "Experience the magic of Disney with exclusive access to all attractions",
// // //   //     operator: "Disney Parks",
// // //   //     operatorRating: 4.8,
// // //   //     availableSlots: 15,
// // //   //     meetingPoint: "Disneyland Main Entrance",
// // //   //     languages: ["English", "Cantonese", "Mandarin"]
// // //   //   },
// // //   //   {
// // //   //     id: 2,
// // //   //     title: "The Peak Tram Experience",
// // //   //     location: "Central, Hong Kong",
// // //   //     category: "attractions",
// // //   //     rating: 4.8,
// // //   //     reviews: "9.5k",
// // //   //     badge: "Top 2",
// // //   //     badgeColor: "from-blue-400 to-indigo-500",
// // //   //     image: "https://images.unsplash.com/photo-1542661908-144d18ec99be?auto=format&fit=crop&q=80&w=800",
// // //   //     price: 4899,
// // //   //     originalPrice: 5999,
// // //   //     holiday: "⛰️",
// // //   //     duration: "2-3 Hours",
// // //   //     timeOfDay: "afternoon",
// // //   //     amenities: ["Sky Terrace Access", "Skip Line", "Photo Service"],
// // //   //     features: ["Flexible Booking", "Best View", "Family Friendly"],
// // //   //     description: "Spectacular 360-degree views of Victoria Harbour and skyscrapers",
// // //   //     operator: "Peak Tower",
// // //   //     operatorRating: 4.7,
// // //   //     availableSlots: 28,
// // //   //     meetingPoint: "Peak Tram Lower Terminus",
// // //   //     languages: ["English", "Cantonese"]
// // //   //   },
// // //   //   {
// // //   //     id: 3,
// // //   //     title: "Ocean Park Marine World",
// // //   //     location: "Aberdeen, Hong Kong",
// // //   //     category: "attractions",
// // //   //     rating: 4.7,
// // //   //     reviews: "46.8k",
// // //   //     badge: "Top 3",
// // //   //     badgeColor: "from-blue-500 to-cyan-500",
// // //   //     image: "https://images.unsplash.com/photo-1516637174060-f463cc22863a?auto=format&fit=crop&q=80&w=800",
// // //   //     price: 4599,
// // //   //     originalPrice: 5499,
// // //   //     holiday: "🐠",
// // //   //     duration: "Full Day",
// // //   //     timeOfDay: "morning",
// // //   //     amenities: ["Dolphin Show", "Cable Car", "Aquarium", "Rides"],
// // //   //     features: ["Kids Under 12 Free", "Park Hopper", "Meal Voucher"],
// // //   //     description: "Thrilling rides, animal encounters, and marine conservation",
// // //   //     operator: "Ocean Park Corp",
// // //   //     operatorRating: 4.6,
// // //   //     availableSlots: 42,
// // //   //     meetingPoint: "Ocean Park Main Entrance",
// // //   //     languages: ["English", "Cantonese", "Mandarin", "Korean"]
// // //   //   },
// // //   //   {
// // //   //     id: 4,
// // //   //     title: "Harbour Grand Buffet Dinner",
// // //   //     location: "North Point, Hong Kong",
// // //   //     category: "dining",
// // //   //     rating: 5.0,
// // //   //     reviews: "14",
// // //   //     badge: "Up to 15% off",
// // //   //     badgeColor: "from-red-500 to-pink-500",
// // //   //     image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
// // //   //     price: 5099,
// // //   //     originalPrice: 5999,
// // //   //     holiday: "☕",
// // //   //     duration: "2 Hours",
// // //   //     timeOfDay: "evening",
// // //   //     amenities: ["Seafood", "Dessert Station", "Live Station", "Drinks"],
// // //   //     features: ["Window Seats", "Free Corkage", "Birthday Cake"],
// // //   //     description: "Luxury buffet with stunning harbour views and international cuisine",
// // //   //     operator: "Harbour Grand Hotel",
// // //   //     operatorRating: 4.9,
// // //   //     availableSlots: 8,
// // //   //     meetingPoint: "Hotel Lobby, 1/F",
// // //   //     languages: ["English", "Cantonese"]
// // //   //   },
// // //   //   {
// // //   //     id: 5,
// // //   //     title: "Victoria Harbour Night Cruise",
// // //   //     location: "Tsim Sha Tsui, Hong Kong",
// // //   //     category: "night",
// // //   //     rating: 4.9,
// // //   //     reviews: "12.4k",
// // //   //     badge: "Symphony of Lights",
// // //   //     badgeColor: "from-purple-500 to-indigo-500",
// // //   //     image: "https://images.unsplash.com/photo-1533602517006-218412615569?auto=format&fit=crop&q=80&w=800",
// // //   //     price: 6299,
// // //   //     originalPrice: 7999,
// // //   //     holiday: "✨",
// // //   //     duration: "1.5 Hours",
// // //   //     timeOfDay: "night",
// // //   //     amenities: ["Open Bar", "Dinner", "Live Music", "Photo Service"],
// // //   //     features: ["Best View", "Romantic", "Symphony Show"],
// // //   //     description: "Evening cruise with unlimited drinks and spectacular light show",
// // //   //     operator: "Star Ferry Co.",
// // //   //     operatorRating: 4.8,
// // //   //     availableSlots: 12,
// // //   //     meetingPoint: "TST Pier, Gate 3",
// // //   //     languages: ["English", "Cantonese", "Japanese"]
// // //   //   },
// // //   //   {
// // //   //     id: 6,
// // //   //     title: "Family Disney Adventure",
// // //   //     location: "Lantau Island, Hong Kong",
// // //   //     category: "family",
// // //   //     rating: 4.9,
// // //   //     reviews: "28.3k",
// // //   //     badge: "Family Favorite",
// // //   //     badgeColor: "from-green-500 to-emerald-500",
// // //   //     image: "https://images.unsplash.com/photo-1603732551658-5fabbaff8453?auto=format&fit=crop&q=80&w=800",
// // //   //     price: 8499,
// // //   //     originalPrice: 10999,
// // //   //     holiday: "👪",
// // //   //     duration: "Full Day",
// // //   //     timeOfDay: "morning",
// // //   //     amenities: ["Character Meet", "Meal Plan", "Fast Pass", "Stroller"],
// // //   //     features: ["Kids Meal", "Family Room", "Photo Package"],
// // //   //     description: "Complete family package with character dining and priority access",
// // //   //     operator: "Disney Parks",
// // //   //     operatorRating: 4.9,
// // //   //     availableSlots: 25,
// // //   //     meetingPoint: "Disneyland Entrance Plaza",
// // //   //     languages: ["English", "Cantonese", "Mandarin"]
// // //   //   }
// // //   // ];

// // //   useEffect(() => {
// // //   const fetchExperiences = async () => {
// // //     try {
// // //       setLoading(true);

// // //       const res = await getHolidayDataAPI();
// // //       console.log(res.data, "API DATA");

// // //       // ✅ correct extraction
// // //       const apiData = res?.data?.data || [];

// // //       // ✅ map API → UI format
// // //       const formattedData = apiData.map(item => ({
// // //         id: item._id,
// // //         title: item.parkName,
// // //         location: `${item.address?.area}, ${item.address?.city}`,
// // //         category: item.propertyType || "attractions",
// // //         rating: item.rating || 4,
// // //         reviews: item.totalReviews || "0",
// // //         badge: "Top",
// // //         badgeColor: "from-blue-400 to-indigo-500",
// // //         image: item.thumbnailImage || "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
// // //         price: item.pricePerNight,
// // //         originalPrice: item.pricePerNight + 1000,
// // //         holiday: "🏔️",
// // //         duration: "1 Night",
// // //         timeOfDay: "morning",

// // //         // ✅ already arrays (NO JSON.parse needed now)
// // //         amenities: item.amenities || [],
// // //         features: item.activities || [],

// // //         description: item.description,
// // //         operator: item.parkName,
// // //         operatorRating: item.rating || 4,
// // //         availableSlots: item.totalRooms || 10,
// // //         meetingPoint: item.address?.landmark,
// // //         languages: ["English"]
// // //       }));

// // //       setExperiences(formattedData);

// // //     } catch (err) {
// // //       console.error(err);
// // //       setError(err.message || "Failed to load experiences");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   fetchExperiences();
// // // }, []);

// // //   const filters_list = [
// // //     {
// // //       id: "all",
// // //       label: "All Experiences",
// // //       icon: Globe,
// // //       count: experiences.length,
// // //     },
// // //     {
// // //       id: "attractions",
// // //       label: "Attractions",
// // //       icon: Ticket,
// // //       count: experiences.filter((e) => e.category === "attractions").length,
// // //     },
// // //     {
// // //       id: "dining",
// // //       label: "Dining",
// // //       icon: Utensils,
// // //       count: experiences.filter((e) => e.category === "dining").length,
// // //     },
// // //     {
// // //       id: "night",
// // //       label: "Night Life",
// // //       icon: Sunset,
// // //       count: experiences.filter((e) => e.category === "night").length,
// // //     },
// // //     {
// // //       id: "family",
// // //       label: "Family",
// // //       icon: Users,
// // //       count: experiences.filter((e) => e.category === "family").length,
// // //     },
// // //   ];

// // //   const timeSlots = [
// // //     { id: "morning", label: "Morning (6AM-12PM)", icon: Coffee },
// // //     { id: "afternoon", label: "Afternoon (12PM-5PM)", icon: Sun },
// // //     { id: "evening", label: "Evening (5PM-8PM)", icon: Sunset },
// // //     { id: "night", label: "Night (8PM-6AM)", icon: Star },
// // //   ];

// // //   const filteredExperiences =
// // //     activeFilter === "all"
// // //       ? experiences
// // //       : experiences.filter((exp) => exp.category === activeFilter);

// // //   const handleBookNow = (experience) => {
// // //     navigate("/booking-details", {
// // //       state: {
// // //         experience,
// // //         bookingDetails: {
// // //           date: new Date().toISOString().split("T")[0],
// // //           travelers: 2,
// // //           totalPrice: experience.price * 2,
// // //           addOns: [],
// // //         },
// // //       },
// // //     });
// // //   };

// // //   const getCategoryColor = (category) => {
// // //     const colors = {
// // //       attractions: "bg-blue-100 text-blue-700",
// // //       dining: "bg-orange-100 text-orange-700",
// // //       night: "bg-purple-100 text-purple-700",
// // //       family: "bg-green-100 text-green-700",
// // //       unique: "bg-pink-100 text-pink-700",
// // //     };
// // //     return colors[category] || "bg-gray-100 text-gray-700";
// // //   };

// // //   const calculateDiscount = (price, original) => {
// // //     return Math.round(((original - price) / original) * 100);
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 font-['Inter',sans-serif]">
// // //       {/* Hero Section - Modern Travel Style */}
// // //       <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
// // //         <div className="absolute inset-0 opacity-20">
// // //           <img
// // //             src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=900&fit=crop"
// // //             alt="Hong Kong"
// // //             className="w-full h-full object-cover"
// // //           />
// // //         </div>

// // //         {/* <div className="relative max-w-7xl mx-auto px-4 py-20"> */}
// // //         <div className="relative max-w-7xl mx-auto px-4 py-16">
// // //           <div className="text-center text-white">
// // //             {/* <div className="flex items-center justify-center gap-4 mb-6">
// // //               <span className="text-6xl animate-bounce">🎄</span>
// // //               <h1 className="text-5xl md:text-6xl font-black tracking-tight">
// // //                 Holiday Bale
// // //               </h1>
// // //               <span className="text-6xl animate-bounce animation-delay-200">
// // //                 ⛄
// // //               </span>
// // //             </div> */}

// // // <h1 className="text-5xl font-bold text-white mb-2">
// // //   Holiday Package<span className="text-yellow-400">.</span>
// // // </h1>

// // // <p className="text-white text-lg mb-6">
// // //   Discover places and things to do
// // // </p>
            

// // //             {/* Search Card */}
// // //             <div className="max-w-4xl mx-auto">
// // //               {/* <div className="bg-white rounded-2xl shadow-2xl p-2">
// // //                 <div className="flex flex-col md:flex-row gap-2">
// // //                   <div className="flex-1 flex items-center bg-gray-50 rounded-xl p-2">
// // //                     <MapPin className="w-5 h-5 text-gray-400 ml-2" />
// // //                     <input
// // //                       type="text"
// // //                       placeholder="Where to?"
// // //                       className="w-full px-3 py-3 bg-transparent outline-none text-gray-800 placeholder-gray-400"
// // //                       defaultValue="Hong Kong"
// // //                     />
// // //                   </div>
// // //                   <div className="flex-1 flex items-center bg-gray-50 rounded-xl p-2">
// // //                     <Calendar className="w-5 h-5 text-gray-400 ml-2" />
// // //                     <input
// // //                       type="date"
// // //                       className="w-full px-3 py-3 bg-transparent outline-none text-gray-800"
// // //                       defaultValue={new Date().toISOString().split("T")[0]}
// // //                     />
// // //                   </div>
// // //                   <div className="flex items-center bg-gray-50 rounded-xl p-2">
// // //                     <Users className="w-5 h-5 text-gray-400 ml-2" />
// // //                     <select className="w-32 px-3 py-3 bg-transparent outline-none text-gray-800">
// // //                       <option>1 Traveler</option>
// // //                       <option>2 Travelers</option>
// // //                       <option>3 Travelers</option>
// // //                       <option>4+ Travelers</option>
// // //                     </select>
// // //                   </div>
// // //                   <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2">
// // //                     <Search className="w-5 h-5" />
// // //                     Search
// // //                   </button>
// // //                 </div>
// // //               </div> */}
// // //               <div className="max-w-4xl mx-auto mt-6">
// // //   <div className="bg-white rounded-xl shadow-md flex items-center overflow-hidden">

// // //     <input
// // //       type="text"
// // //       placeholder="Search places and things to do"
// // //       className="flex-1 px-6 py-4 outline-none text-gray-700"
// // //     />

// // //     <button className="bg-blue-600 text-white px-6 py-4 flex items-center gap-2">
// // //       <Search size={18} />
// // //       Search
// // //     </button>

// // //   </div>
// // // </div>
// // //             </div>

// // //             {/* Stats */}
// // //             <div className="flex justify-center gap-8 mt-12 text-sm text-blue-100">
// // //               <div className="flex items-center gap-2">
// // //                 <CheckCircle className="w-4 h-4" />
// // //                 <span>200+ Experiences</span>
// // //               </div>
// // //               <div className="flex items-center gap-2">
// // //                 <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
// // //                 <span>4.8 Avg Rating</span>
// // //               </div>
// // //               <div className="flex items-center gap-2">
// // //                 <Shield className="w-4 h-4" />
// // //                 <span>Free Cancellation</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Wave Separator */}
// // //         {/* <div className="absolute bottom-0 left-0 right-0">
// // //           <svg
// // //             viewBox="0 0 1440 120"
// // //             fill="none"
// // //             xmlns="http://www.w3.org/2000/svg"
// // //           >
// // //             <path
// // //               d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
// // //               fill="#F9FAFB"
// // //             />
// // //           </svg>
// // //         </div> */}
// // //       </div>

// // //       {/* Main Content */}
// // //       <div className="max-w-7xl mx-auto px-4 py-12">
// // //         {/* Category Pills */}
// // //         <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
// // //           <div className="flex flex-wrap gap-2">
// // //             {filters_list.map((filter) => {
// // //               const Icon = filter.icon;
// // //               const isActive = activeFilter === filter.id;
// // //               return (
// // //                 <button
// // //                   key={filter.id}
// // //                   onClick={() => setActiveFilter(filter.id)}
// // //                   className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
// // //                     isActive
// // //                       ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200"
// // //                       : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:shadow-md"
// // //                   }`}
// // //                 >
// // //                   <Icon className="w-4 h-4" />
// // //                   {filter.label}
// // //                   <span
// // //                     className={`ml-1 px-1.5 py-0.5 rounded-full text-xs ${
// // //                       isActive ? "bg-white/20" : "bg-gray-100 text-gray-600"
// // //                     }`}
// // //                   >
// // //                     {filter.count}
// // //                   </span>
// // //                 </button>
// // //               );
// // //             })}
// // //           </div>

// // //           {/* Filter Button & Sort */}
// // //           <div className="flex items-center gap-3">
// // //             <button
// // //               onClick={() => setShowFilters(!showFilters)}
// // //               className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-all"
// // //             >
// // //               <Filter className="w-4 h-4" />
// // //               <span className="text-sm font-medium">Filters</span>
// // //             </button>

// // //             <select className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium outline-none hover:border-blue-300 transition-all">
// // //               <option>Recommended</option>
// // //               <option>Price: Low to High</option>
// // //               <option>Price: High to Low</option>
// // //               <option>Highest Rated</option>
// // //               <option>Most Booked</option>
// // //             </select>
// // //           </div>
// // //         </div>

// // //         {/* Filter Panel */}
// // //         {showFilters && (
// // //           <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 animate-fadeIn">
// // //             <div className="flex items-center justify-between mb-4">
// // //               <h3 className="font-semibold text-gray-800">
// // //                 Filter Experiences
// // //               </h3>
// // //               <button
// // //                 onClick={() => setShowFilters(false)}
// // //                 className="p-1 hover:bg-gray-100 rounded-full"
// // //               >
// // //                 <X className="w-4 h-4" />
// // //               </button>
// // //             </div>

// // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //               {/* Rating Filter */}
// // //               <div>
// // //                 <h4 className="text-sm font-medium text-gray-700 mb-3">
// // //                   Rating
// // //                 </h4>
// // //                 <div className="space-y-2">
// // //                   {["4.5+", "4.0+", "3.5+", "Any"].map((rating) => (
// // //                     <label key={rating} className="flex items-center gap-2">
// // //                       <input
// // //                         type="radio"
// // //                         name="rating"
// // //                         className="w-4 h-4 text-blue-600"
// // //                         defaultChecked={rating === "4+"}
// // //                       />
// // //                       <span className="text-sm text-gray-600">
// // //                         {rating} Stars
// // //                       </span>
// // //                     </label>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               {/* Time of Day */}
// // //               <div>
// // //                 <h4 className="text-sm font-medium text-gray-700 mb-3">
// // //                   Time of Day
// // //                 </h4>
// // //                 <div className="space-y-2">
// // //                   {timeSlots.map((slot) => {
// // //                     const Icon = slot.icon;
// // //                     return (
// // //                       <label key={slot.id} className="flex items-center gap-2">
// // //                         <input
// // //                           type="checkbox"
// // //                           className="w-4 h-4 text-blue-600 rounded"
// // //                         />
// // //                         <Icon className="w-4 h-4 text-gray-500" />
// // //                         <span className="text-sm text-gray-600">
// // //                           {slot.label}
// // //                         </span>
// // //                       </label>
// // //                     );
// // //                   })}
// // //                 </div>
// // //               </div>

// // //               {/* Price Range */}
// // //               <div>
// // //                 <h4 className="text-sm font-medium text-gray-700 mb-3">
// // //                   Price Range
// // //                 </h4>
// // //                 <div className="space-y-2">
// // //                   {[
// // //                     "Under ₹3000",
// // //                     "₹3000 - ₹5000",
// // //                     "₹5000 - ₹8000",
// // //                     "Above ₹8000",
// // //                   ].map((range) => (
// // //                     <label key={range} className="flex items-center gap-2">
// // //                       <input
// // //                         type="radio"
// // //                         name="price"
// // //                         className="w-4 h-4 text-blue-600"
// // //                       />
// // //                       <span className="text-sm text-gray-600">{range}</span>
// // //                     </label>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
// // //               <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
// // //                 Reset
// // //               </button>
// // //               <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
// // //                 Apply Filters
// // //               </button>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Results Header */}
// // //         <div className="flex items-center justify-between mb-6">
// // //           <div className="text-sm text-gray-600">
// // //             <span className="font-semibold text-gray-900">
// // //               {filteredExperiences.length}
// // //             </span>{" "}
// // //             experiences found
// // //             {activeFilter !== "all" && ` in ${activeFilter}`}
// // //           </div>
// // //           <div className="text-sm text-green-600 flex items-center gap-1">
// // //             <Shield className="w-4 h-4" />
// // //             Free cancellation available
// // //           </div>
// // //         </div>

// // //         {/* Experiences Grid */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // //           {filteredExperiences.map((experience) => (
// // //             <div
// // //               key={experience.id}
// // //               className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all cursor-pointer"
// // //               onMouseEnter={() => setHoveredId(experience.id)}
// // //               onMouseLeave={() => setHoveredId(null)}
// // //             >
// // //               <div className="flex flex-col md:flex-row">
// // //                 {/* Image Section */}
// // //                 <div className="relative md:w-2/5 h-52 md:h-auto overflow-hidden rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl">
// // //                   <img
// // //                     src={experience.image}
// // //                     alt={experience.title}
// // //                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// // //                   />

// // //                   {/* Badges */}
// // //                   <div className="absolute top-3 left-3 flex flex-wrap gap-2">
// // //                     <span
// // //                       className={`bg-gradient-to-r ${experience.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg`}
// // //                     >
// // //                       {experience.holiday} {experience.badge}
// // //                     </span>
// // //                   </div>

// // //                   {/* Duration Badge */}
// // //                   <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
// // //                     <Clock className="w-3 h-3" />
// // //                     {experience.duration}
// // //                   </div>

// // //                   {/* Favorite Button */}
// // //                   <button className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white/40">
// // //                     <Heart className="w-4 h-4 text-white" />
// // //                   </button>
// // //                 </div>

// // //                 {/* Content Section */}
// // //                 <div className="flex-1 p-5">
// // //                   {/* Title & Location */}
// // //                   <div className="mb-3">
// // //                     <div className="flex items-start justify-between mb-1">
// // //                       <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
// // //                         {experience.title}
// // //                       </h3>
// // //                       <span
// // //                         className={`ml-2 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getCategoryColor(experience.category)}`}
// // //                       >
// // //                         {experience.category}
// // //                       </span>
// // //                     </div>

// // //                     <div className="flex items-center gap-1 text-sm text-gray-500">
// // //                       <MapPin className="w-3.5 h-3.5" />
// // //                       <span className="line-clamp-1">
// // //                         {experience.location}
// // //                       </span>
// // //                     </div>
// // //                   </div>

// // //                   {/* Rating */}
// // //                   <div className="flex items-center gap-3 mb-3">
// // //                     <div className="flex items-center gap-1">
// // //                       <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
// // //                       <span className="font-bold text-gray-800">
// // //                         {experience.rating}
// // //                       </span>
// // //                     </div>
// // //                     <span className="text-sm text-gray-500">
// // //                       ({experience.reviews} reviews)
// // //                     </span>
// // //                     <span className="text-sm text-gray-500">·</span>
// // //                     <span className="text-sm text-green-600 font-medium">
// // //                       {calculateDiscount(
// // //                         experience.price,
// // //                         experience.originalPrice,
// // //                       )}
// // //                       % OFF
// // //                     </span>
// // //                   </div>

// // //                   {/* Features */}
// // //                   <div className="flex flex-wrap gap-2 mb-4">
// // //                     {experience.features.slice(0, 2).map((feature, i) => (
// // //                       <span
// // //                         key={i}
// // //                         className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
// // //                       >
// // //                         <CheckCircle className="w-3 h-3" />
// // //                         {feature}
// // //                       </span>
// // //                     ))}
// // //                     {experience.features.length > 2 && (
// // //                       <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
// // //                         +{experience.features.length - 2} more
// // //                       </span>
// // //                     )}
// // //                   </div>

// // //                   {/* Amenities */}
// // //                   <div className="flex items-center gap-3 mb-4 text-gray-500">
// // //                     {experience.amenities.slice(0, 4).map((amenity, i) => (
// // //                       <div key={i} className="flex flex-col items-center gap-1">
// // //                         {amenity === "Fast Pass" && (
// // //                           <Ticket className="w-4 h-4" />
// // //                         )}
// // //                         {amenity === "Meal Included" && (
// // //                           <Utensils className="w-4 h-4" />
// // //                         )}
// // //                         {amenity === "Guide" && <Users className="w-4 h-4" />}
// // //                         {amenity === "Transport" && (
// // //                           <Compass className="w-4 h-4" />
// // //                         )}
// // //                         {amenity === "Wifi" && <Wifi className="w-4 h-4" />}
// // //                         {amenity === "Charging Port" && (
// // //                           <Battery className="w-4 h-4" />
// // //                         )}
// // //                         {amenity === "Open Bar" && (
// // //                           <CoffeeIcon className="w-4 h-4" />
// // //                         )}
// // //                         <span className="text-xs">{amenity}</span>
// // //                       </div>
// // //                     ))}
// // //                     {experience.amenities.length > 4 && (
// // //                       <span className="text-xs text-gray-400">
// // //                         +{experience.amenities.length - 4}
// // //                       </span>
// // //                     )}
// // //                   </div>

// // //                   {/* Price & CTA */}
// // //                   <div className="flex items-end justify-between mt-auto pt-2 border-t border-gray-100">
// // //                     <div>
// // //                       <div className="flex items-baseline gap-2">
// // //                         <span className="text-2xl font-bold text-gray-900">
// // //                           ₹{experience.price.toLocaleString()}
// // //                         </span>
// // //                         <span className="text-sm text-gray-500 line-through">
// // //                           ₹{experience.originalPrice.toLocaleString()}
// // //                         </span>
// // //                       </div>
// // //                       <span className="text-xs text-gray-500">
// // //                         per person + taxes
// // //                       </span>
// // //                     </div>

// // //                     <button
// // //                       onClick={() => handleBookNow(experience)}
// // //                       className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-200"
// // //                     >
// // //                       Book Now
// // //                       <ChevronRight className="w-4 h-4" />
// // //                     </button>
// // //                   </div>

// // //                   {/* Availability */}
// // //                   <div className="mt-3 flex items-center justify-between text-xs">
// // //                     <span className="text-green-600 flex items-center gap-1">
// // //                       <CheckCircle className="w-3 h-3" />
// // //                       Available today
// // //                     </span>
// // //                     <span className="text-gray-500">
// // //                       {experience.availableSlots} spots left
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Hover Effect - Quick Info */}
// // //               {hoveredId === experience.id && (
// // //                 <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 rounded-b-2xl transform translate-y-full group-hover:translate-y-0 transition-transform">
// // //                   <p className="text-white text-sm line-clamp-2">
// // //                     {experience.description}
// // //                   </p>
// // //                   <div className="flex items-center gap-4 mt-2 text-white/80 text-xs">
// // //                     <span className="flex items-center gap-1">
// // //                       <Users className="w-3 h-3" />
// // //                       {experience.operatorRating} Operator Rating
// // //                     </span>
// // //                     <span className="flex items-center gap-1">
// // //                       <Globe className="w-3 h-3" />
// // //                       {experience.languages.join(", ")}
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Travel Essentials */}
// // //         <div className="mt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8">
// // //           <div className="flex items-center justify-between mb-8">
// // //             <div>
// // //               <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
// // //                 <Gift className="w-7 h-7 text-blue-600" />
// // //                 Travel Essentials - Holiday Edition
// // //               </h2>
// // //               <p className="text-gray-600 mt-1">
// // //                 Everything you need for a perfect trip
// // //               </p>
// // //             </div>
// // //             <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
// // //               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
// // //               24h Flash Sale
// // //             </span>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //             {[
// // //               {
// // //                 name: "Hong Kong eSIM",
// // //                 price: 499,
// // //                 rating: 4.9,
// // //                 image:
// // //                   "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
// // //               },
// // //               {
// // //                 name: "Octopus Card",
// // //                 price: 299,
// // //                 rating: 4.8,
// // //                 image:
// // //                   "https://images.unsplash.com/photo-1579338559441-8d6252145d12?w=400&h=300&fit=crop",
// // //               },
// // //               {
// // //                 name: "Airport Express",
// // //                 price: 899,
// // //                 rating: 4.7,
// // //                 image:
// // //                   "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop",
// // //               },
// // //             ].map((item, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="bg-white rounded-xl p-4 flex items-center gap-4 hover:shadow-lg transition-all"
// // //               >
// // //                 <img
// // //                   src={item.image}
// // //                   alt={item.name}
// // //                   className="w-20 h-20 rounded-lg object-cover"
// // //                 />
// // //                 <div className="flex-1">
// // //                   <h4 className="font-semibold text-gray-800">{item.name}</h4>
// // //                   <div className="flex items-center gap-1 mt-1">
// // //                     <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
// // //                     <span className="text-sm font-medium">{item.rating}</span>
// // //                   </div>
// // //                   <div className="flex items-center justify-between mt-2">
// // //                     <span className="font-bold text-blue-600">
// // //                       ₹{item.price}
// // //                     </span>
// // //                     <button className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-all">
// // //                       Add
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Why Book With Us */}
// // //         <div className="mt-16">
// // //           <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
// // //             Why Book With Holiday Bale?
// // //           </h2>

// // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
// // //             {[
// // //               {
// // //                 icon: Shield,
// // //                 title: "Free Cancellation",
// // //                 desc: "Up to 24 hours before",
// // //               },
// // //               {
// // //                 icon: Award,
// // //                 title: "Best Price Guarantee",
// // //                 desc: "We match any price",
// // //               },
// // //               { icon: Users, title: "24/7 Support", desc: "In 10+ languages" },
// // //               {
// // //                 icon: Sparkles,
// // //                 title: "Verified Reviews",
// // //                 desc: "Real traveler feedback",
// // //               },
// // //             ].map((item, index) => {
// // //               const Icon = item.icon;
// // //               return (
// // //                 <div
// // //                   key={index}
// // //                   className="text-center p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-200 transition-all"
// // //                 >
// // //                   <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
// // //                     <Icon className="w-6 h-6 text-blue-600" />
// // //                   </div>
// // //                   <h3 className="font-semibold text-gray-800 mb-1">
// // //                     {item.title}
// // //                   </h3>
// // //                   <p className="text-sm text-gray-500">{item.desc}</p>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>

// // //         {/* Instagram Feed */}
// // //         <div className="mt-16">
// // //           <div className="text-center mb-6">
// // //             <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
// // //               <Instagram className="w-6 h-6 text-pink-600" />
// // //               #HolidayBaleMoments
// // //             </h2>
// // //             <p className="text-gray-500 text-sm mt-2">
// // //               Tag @holidaybale for a chance to be featured
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// // //             {experiences.slice(0, 4).map((exp) => (
// // //               <div
// // //                 key={exp.id}
// // //                 className="relative aspect-square rounded-xl overflow-hidden group"
// // //               >
// // //                 <img
// // //                   src={exp.image}
// // //                   alt=""
// // //                   className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
// // //                 />
// // //                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-4">
// // //                   <div className="text-white">
// // //                     <p className="text-sm font-medium">{exp.title}</p>
// // //                     <div className="flex items-center gap-2 mt-1 text-xs">
// // //                       <Heart className="w-3 h-3" />
// // //                       <span>2.3k likes</span>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Footer */}
// // //       {/* <footer className="bg-gray-900 text-white mt-20 pt-16 pb-8">
// // //         <div className="max-w-7xl mx-auto px-4">
// // //           <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
// // //             <div className="col-span-2">
// // //               <div className="flex items-center gap-2 mb-6">
// // //                 <span className="text-3xl">🎄</span>
// // //                 <span className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
// // //                   Holiday Bale
// // //                 </span>
// // //               </div>
// // //               <p className="text-gray-400 text-sm leading-relaxed max-w-md">
// // //                 Your trusted travel companion for Hong Kong and beyond. Curated experiences, 
// // //                 best prices, and magical holiday memories.
// // //               </p>
              
// // //               <div className="flex gap-4 mt-6">
// // //                 <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
// // //                   <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
// // //                 </div>
// // //                 <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
// // //                   <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
// // //                 </div>
// // //                 <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
// // //                   <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
// // //                 </div>
// // //               </div>
// // //             </div>
            
// // //             <div>
// // //               <h4 className="font-bold text-lg mb-4">Company</h4>
// // //               <ul className="space-y-3 text-gray-400 text-sm">
// // //                 <li className="hover:text-white transition cursor-pointer">About Us</li>
// // //                 <li className="hover:text-white transition cursor-pointer">Careers</li>
// // //                 <li className="hover:text-white transition cursor-pointer">Press</li>
// // //                 <li className="hover:text-white transition cursor-pointer">Blog</li>
// // //               </ul>
// // //             </div>
            
// // //             <div>
// // //               <h4 className="font-bold text-lg mb-4">Support</h4>
// // //               <ul className="space-y-3 text-gray-400 text-sm">
// // //                 <li className="hover:text-white transition cursor-pointer">Help Center</li>
// // //                 <li className="hover:text-white transition cursor-pointer">Safety Information</li>
// // //                 <li className="hover:text-white transition cursor-pointer">Cancellation Options</li>
// // //                 <li className="hover:text-white transition cursor-pointer">Contact Us</li>
// // //               </ul>
// // //             </div>
            
// // //             <div>
// // //               <h4 className="font-bold text-lg mb-4">Legal</h4>
// // //               <ul className="space-y-3 text-gray-400 text-sm">
// // //                 <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
// // //                 <li className="hover:text-white transition cursor-pointer">Terms of Service</li>
// // //                 <li className="hover:text-white transition cursor-pointer">Cookie Policy</li>
// // //                 <li className="hover:text-white transition cursor-pointer">Accessibility</li>
// // //               </ul>
// // //             </div>
// // //           </div>
          
          
// // //         </div>
// // //       </footer> */}

// // //       <style jsx>{`
// // //         @keyframes fadeIn {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(-10px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }
// // //         .animate-fadeIn {
// // //           animation: fadeIn 0.3s ease-out;
// // //         }
// // //         .animation-delay-200 {
// // //           animation-delay: 0.2s;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // // Missing icon components
// // // const Calendar = (props) => (
// // //   <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //     <path
// // //       strokeLinecap="round"
// // //       strokeLinejoin="round"
// // //       strokeWidth={2}
// // //       d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
// // //     />
// // //   </svg>
// // // );

// // // const Sun = (props) => (
// // //   <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //     <path
// // //       strokeLinecap="round"
// // //       strokeLinejoin="round"
// // //       strokeWidth={2}
// // //       d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
// // //     />
// // //   </svg>
// // // );

// // // export default TripBestGallery;


























// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import {
// // //   Search,
// // //   MapPin,
// // //   Star,
// // //   Heart,
// // //   Users,
// // //   Utensils,
// // //   Hotel,
// // //   Ticket,
// // //   Compass,
// // //   Globe,
// // //   ChevronRight,
// // //   Clock,
// // //   Wifi,
// // //   Shield,
// // //   Award,
// // //   Sparkles,
// // //   Filter,
// // //   X,
// // //   CheckCircle,
// // //   Calendar,
// // //   ChevronDown,
// // //   TrendingUp,
// // //   Zap,
// // //   Sun,
// // //   Moon,
// // //   Coffee,
// // //   Sunset,
// // //   ArrowRight,
// // //   Tag,
// // //   Percent,
// // // } from "lucide-react";
// // // import { getHolidayDataAPI } from "../api/holiday.js";

// // // const TripBestGallery = () => {
// // //   const navigate = useNavigate();
// // //   const [activeFilter, setActiveFilter] = useState("all");
// // //   const [hoveredId, setHoveredId] = useState(null);
// // //   const [showFilters, setShowFilters] = useState(false);
// // //   const [experiences, setExperiences] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [destination, setDestination] = useState("");
// // //   const [guests, setGuests] = useState("2 Adults");
// // //   const [checkIn, setCheckIn] = useState("");
// // //   const [checkOut, setCheckOut] = useState("");
// // //   const [activeQuickFilter, setActiveQuickFilter] = useState("All");

// // //   useEffect(() => {
// // //     const today = new Date();
// // //     const next = new Date(today);
// // //     next.setDate(today.getDate() + 2);
// // //     setCheckIn(today.toISOString().split("T")[0]);
// // //     setCheckOut(next.toISOString().split("T")[0]);

// // //     const fetchExperiences = async () => {
// // //       try {
// // //         setLoading(true);
// // //         const res = await getHolidayDataAPI();
// // //         const apiData = res?.data?.data || [];
// // //         const formattedData = apiData.map((item) => ({
// // //           id: item._id,
// // //           title: item.parkName,
// // //           location: `${item.address?.area}, ${item.address?.city}`,
// // //           category: item.propertyType || "attractions",
// // //           rating: item.rating || 4,
// // //           reviews: item.totalReviews || "0",
// // //           badge: "Top Pick",
// // //           badgeColor: "from-orange-400 to-pink-500",
// // //           image:
// // //             item.thumbnailImage ||
// // //             "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
// // //           price: item.pricePerNight,
// // //           originalPrice: item.pricePerNight + 1000,
// // //           holiday: "🏔️",
// // //           duration: "1 Night",
// // //           timeOfDay: "morning",
// // //           amenities: item.amenities || [],
// // //           features: item.activities || [],
// // //           description: item.description,
// // //           operator: item.parkName,
// // //           operatorRating: item.rating || 4,
// // //           availableSlots: item.totalRooms || 10,
// // //           meetingPoint: item.address?.landmark,
// // //           languages: ["English"],
// // //           nights: item.nights || 3,
// // //           days: (item.nights || 3) + 1,
// // //           inclusions: item.inclusions || ["Breakfast", "Hotel", "Sightseeing"],
// // //         }));
// // //         setExperiences(formattedData);
// // //       } catch (err) {
// // //         console.error(err);
// // //         setError(err.message || "Failed to load experiences");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchExperiences();
// // //   }, []);

// // //   const quickFilters = ["All", "Villa", "Treehouse", "Cottage", "Farmhouse", "Houseboat", "Lowest Price", "Top Rated"];

// // //   const categoryFilters = [
// // //     { id: "all", label: "All Experiences", icon: Globe, count: experiences.length },
// // //     { id: "attractions", label: "Attractions", icon: Ticket, count: experiences.filter((e) => e.category === "attractions").length },
// // //     { id: "dining", label: "Dining", icon: Utensils, count: experiences.filter((e) => e.category === "dining").length },
// // //     { id: "night", label: "Night Life", icon: Moon, count: experiences.filter((e) => e.category === "night").length },
// // //     { id: "family", label: "Family", icon: Users, count: experiences.filter((e) => e.category === "family").length },
// // //   ];

// // //   const filteredExperiences =
// // //     activeFilter === "all"
// // //       ? experiences
// // //       : experiences.filter((exp) => exp.category === activeFilter);

// // //   const handleBookNow = (experience) => {
// // //     navigate("/booking-details", {
// // //       state: {
// // //         experience,
// // //         bookingDetails: {
// // //           date: checkIn,
// // //           travelers: 2,
// // //           totalPrice: experience.price * 2,
// // //           addOns: [],
// // //         },
// // //       },
// // //     });
// // //   };

// // //   const getCategoryColor = (category) => {
// // //     const colors = {
// // //       attractions: "bg-blue-100 text-blue-700",
// // //       dining: "bg-orange-100 text-orange-700",
// // //       night: "bg-purple-100 text-purple-700",
// // //       family: "bg-green-100 text-green-700",
// // //     };
// // //     return colors[category] || "bg-gray-100 text-gray-700";
// // //   };

// // //   const calculateDiscount = (price, original) =>
// // //     Math.round(((original - price) / original) * 100);

// // //   const formatDate = (dateStr) => {
// // //     if (!dateStr) return "";
// // //     const d = new Date(dateStr);
// // //     return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
// // //   };

// // //   const popularDestinations = [
// // //     { name: "Goa", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=200&h=200&fit=crop" },
// // //     { name: "Manali", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop" },
// // //     { name: "Kerala", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=200&h=200&fit=crop" },
// // //     { name: "Rajasthan", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=200&h=200&fit=crop" },
// // //     { name: "Himalayas", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&h=200&fit=crop" },
// // //     { name: "Andaman", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=200&h=200&fit=crop" },
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

// // //       {/* ===== HERO SECTION - MakeMyTrip Style ===== */}
// // //       <div
// // //         className="relative overflow-hidden"
// // //         style={{
// // //           background: "linear-gradient(135deg, #1a5276 0%, #1a6b3c 50%, #145a32 100%)",
// // //           minHeight: "420px",
// // //         }}
// // //       >
// // //         {/* Background overlay image */}
// // //         <div
// // //           className="absolute inset-0 opacity-30"
// // //           style={{
// // //             backgroundImage: "url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&fit=crop)",
// // //             backgroundSize: "cover",
// // //             backgroundPosition: "center",
// // //           }}
// // //         />
// // //         <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />

// // //         <div className="relative max-w-6xl mx-auto px-4 pt-12 pb-8">
// // //           {/* Badge */}
// // //           <div className="flex justify-center mb-4">
// // //             <span
// // //               className="text-white text-sm px-4 py-1.5 rounded-full flex items-center gap-2"
// // //               style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}
// // //             >
// // //               🏕️ 50,000+ Unique Stays Across India
// // //             </span>
// // //           </div>

// // //           {/* Heading */}
// // //           <h1 className="text-center text-white font-black mb-2" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.5px" }}>
// // //             Discover Your Dream{" "}
// // //             <span style={{ color: "#f39c12" }}>Escape</span>
// // //           </h1>
// // //           <p className="text-center text-white/80 mb-8" style={{ fontSize: "1rem" }}>
// // //             Handpicked villas, treehouses, farms &amp; homestays · Real reviews · Best prices
// // //           </p>

// // //           {/* ===== SEARCH BOX ===== */}
// // //           <div
// // //             className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto"
// // //             style={{ border: "1px solid #e8e8e8" }}
// // //           >
// // //             <div className="grid grid-cols-1 md:grid-cols-4">
// // //               {/* Destination */}
// // //               <div className="flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
// // //                 <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: "#e74c3c" }} />
// // //                 <div className="flex-1 min-w-0">
// // //                   <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#888", fontSize: "10px" }}>
// // //                     DESTINATION / PROPERTY
// // //                   </p>
// // //                   <input
// // //                     type="text"
// // //                     placeholder="Goa, Coorg, Manali..."
// // //                     value={destination}
// // //                     onChange={(e) => setDestination(e.target.value)}
// // //                     className="w-full text-gray-800 font-semibold text-sm outline-none bg-transparent placeholder-gray-400 mt-0.5"
// // //                   />
// // //                 </div>
// // //               </div>

// // //               {/* Check-in / Check-out */}
// // //               <div className="flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors col-span-1 md:col-span-1">
// // //                 <Calendar className="w-5 h-5 flex-shrink-0" style={{ color: "#e74c3c" }} />
// // //                 <div className="flex-1">
// // //                   <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#888", fontSize: "10px" }}>
// // //                     CHECK-IN → CHECK-OUT
// // //                   </p>
// // //                   <div className="flex items-center gap-1 mt-0.5">
// // //                     <input
// // //                       type="date"
// // //                       value={checkIn}
// // //                       onChange={(e) => setCheckIn(e.target.value)}
// // //                       className="text-gray-800 font-semibold text-sm outline-none bg-transparent cursor-pointer"
// // //                       style={{ maxWidth: "110px" }}
// // //                     />
// // //                     <span className="text-gray-400 text-xs">→</span>
// // //                     <input
// // //                       type="date"
// // //                       value={checkOut}
// // //                       onChange={(e) => setCheckOut(e.target.value)}
// // //                       className="text-gray-800 font-semibold text-sm outline-none bg-transparent cursor-pointer"
// // //                       style={{ maxWidth: "110px" }}
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Guests */}
// // //               <div className="flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
// // //                 <Users className="w-5 h-5 flex-shrink-0" style={{ color: "#e74c3c" }} />
// // //                 <div className="flex-1">
// // //                   <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#888", fontSize: "10px" }}>
// // //                     GUESTS
// // //                   </p>
// // //                   <select
// // //                     value={guests}
// // //                     onChange={(e) => setGuests(e.target.value)}
// // //                     className="text-gray-800 font-semibold text-sm outline-none bg-transparent mt-0.5 cursor-pointer w-full"
// // //                   >
// // //                     <option>1 Adult</option>
// // //                     <option>2 Adults</option>
// // //                     <option>3 Adults</option>
// // //                     <option>2 Adults, 1 Child</option>
// // //                     <option>4+ Guests</option>
// // //                   </select>
// // //                 </div>
// // //               </div>

// // //               {/* Search Button */}
// // //               <button
// // //                 className="flex items-center justify-center gap-2 font-bold text-white transition-all"
// // //                 style={{
// // //                   background: "linear-gradient(135deg, #1a5276, #1e8449)",
// // //                   fontSize: "1rem",
// // //                   padding: "1rem 1.5rem",
// // //                 }}
// // //               >
// // //                 <Search className="w-5 h-5" />
// // //                 Search
// // //               </button>
// // //             </div>
// // //           </div>

// // //           {/* Quick Filters */}
// // //           <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
// // //             <span className="text-white/70 text-sm mr-1">Quick Filter:</span>
// // //             {quickFilters.map((f) => (
// // //               <button
// // //                 key={f}
// // //                 onClick={() => setActiveQuickFilter(f)}
// // //                 className="text-sm px-4 py-1.5 rounded-full transition-all font-medium"
// // //                 style={{
// // //                   background: activeQuickFilter === f ? "#f39c12" : "rgba(255,255,255,0.15)",
// // //                   color: activeQuickFilter === f ? "#fff" : "rgba(255,255,255,0.9)",
// // //                   border: activeQuickFilter === f ? "1px solid #f39c12" : "1px solid rgba(255,255,255,0.3)",
// // //                   backdropFilter: "blur(4px)",
// // //                 }}
// // //               >
// // //                 {f === "Villa" && "🏠 "}
// // //                 {f === "Treehouse" && "🌳 "}
// // //                 {f === "Cottage" && "🏡 "}
// // //                 {f === "Farmhouse" && "🌾 "}
// // //                 {f === "Houseboat" && "⛵ "}
// // //                 {f === "Lowest Price" && "💰 "}
// // //                 {f === "Top Rated" && "⭐ "}
// // //                 {f}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* ===== POPULAR IN INDIA ===== */}
// // //       <div className="max-w-6xl mx-auto px-4 py-10">
// // //         <div className="flex items-center justify-between mb-5">
// // //           <h2 className="text-xl font-bold text-gray-800">
// // //             Popular in <span style={{ color: "#1e8449" }}>India</span>
// // //           </h2>
// // //           <button className="text-sm font-semibold flex items-center gap-1" style={{ color: "#1a5276" }}>
// // //             See all <ChevronRight className="w-4 h-4" />
// // //           </button>
// // //         </div>

// // //         {/* Destination pills */}
// // //         <div className="flex gap-2 flex-wrap mb-6">
// // //           {["Goa", "Coorg", "Manali", "Kerala", "Rajasthan", "Himalayas"].map((d, i) => (
// // //             <button
// // //               key={d}
// // //               onClick={() => setDestination(d)}
// // //               className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
// // //               style={{
// // //                 background: destination === d ? "#1a5276" : "white",
// // //                 color: destination === d ? "white" : "#333",
// // //                 border: "1px solid #ddd",
// // //               }}
// // //             >
// // //               {d}
// // //             </button>
// // //           ))}
// // //         </div>

// // //         {/* Destination Cards */}
// // //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
// // //           {popularDestinations.map((dest) => (
// // //             <div
// // //               key={dest.name}
// // //               onClick={() => setDestination(dest.name)}
// // //               className="relative rounded-xl overflow-hidden cursor-pointer group"
// // //               style={{ aspectRatio: "1/1" }}
// // //             >
// // //               <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
// // //               <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
// // //               <p className="absolute bottom-2 left-0 right-0 text-center text-white font-bold text-sm">{dest.name}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* ===== PACKAGES SECTION ===== */}
// // //       <div className="max-w-6xl mx-auto px-4 pb-16">
// // //         {/* Section Header */}
// // //         <div className="flex items-center justify-between mb-5">
// // //           <div>
// // //             <h2 className="text-xl font-bold text-gray-800">Holiday Packages</h2>
// // //             <p className="text-sm text-gray-500 mt-0.5">Curated stays with best prices</p>
// // //           </div>
// // //         </div>

// // //         {/* Category Filters + Sort Row */}
// // //         <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
// // //           <div className="flex flex-wrap gap-2">
// // //             {categoryFilters.map((filter) => {
// // //               const Icon = filter.icon;
// // //               const isActive = activeFilter === filter.id;
// // //               return (
// // //                 <button
// // //                   key={filter.id}
// // //                   onClick={() => setActiveFilter(filter.id)}
// // //                   className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all"
// // //                   style={{
// // //                     background: isActive ? "#1a5276" : "white",
// // //                     color: isActive ? "white" : "#555",
// // //                     border: isActive ? "1px solid #1a5276" : "1px solid #ddd",
// // //                     boxShadow: isActive ? "0 2px 8px rgba(26,82,118,0.3)" : "none",
// // //                   }}
// // //                 >
// // //                   <Icon className="w-3.5 h-3.5" />
// // //                   {filter.label}
// // //                   <span
// // //                     className="ml-0.5 px-1.5 py-0.5 rounded-full text-xs"
// // //                     style={{
// // //                       background: isActive ? "rgba(255,255,255,0.2)" : "#f0f0f0",
// // //                       color: isActive ? "white" : "#888",
// // //                     }}
// // //                   >
// // //                     {filter.count}
// // //                   </span>
// // //                 </button>
// // //               );
// // //             })}
// // //           </div>

// // //           <div className="flex items-center gap-2">
// // //             <button
// // //               onClick={() => setShowFilters(!showFilters)}
// // //               className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-gray-400 transition-all text-sm font-medium text-gray-700"
// // //             >
// // //               <Filter className="w-4 h-4" />
// // //               Filters
// // //             </button>
// // //             <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium outline-none text-gray-700 hover:border-gray-400 transition-all">
// // //               <option>Recommended</option>
// // //               <option>Price: Low to High</option>
// // //               <option>Price: High to Low</option>
// // //               <option>Highest Rated</option>
// // //             </select>
// // //           </div>
// // //         </div>

// // //         {/* Filter Panel */}
// // //         {showFilters && (
// // //           <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-md">
// // //             <div className="flex items-center justify-between mb-4">
// // //               <h3 className="font-bold text-gray-800">Filter Packages</h3>
// // //               <button onClick={() => setShowFilters(false)} className="p-1 hover:bg-gray-100 rounded-full">
// // //                 <X className="w-4 h-4" />
// // //               </button>
// // //             </div>
// // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //               <div>
// // //                 <h4 className="text-sm font-semibold text-gray-700 mb-3">Rating</h4>
// // //                 <div className="space-y-2">
// // //                   {["4.5+", "4.0+", "3.5+", "Any"].map((r) => (
// // //                     <label key={r} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
// // //                       <input type="radio" name="rating" className="w-4 h-4" />
// // //                       {r} Stars
// // //                     </label>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //               <div>
// // //                 <h4 className="text-sm font-semibold text-gray-700 mb-3">Duration</h4>
// // //                 <div className="space-y-2">
// // //                   {["2N/3D", "3N/4D", "4N/5D", "5N+"].map((d) => (
// // //                     <label key={d} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
// // //                       <input type="checkbox" className="w-4 h-4 rounded" />
// // //                       {d}
// // //                     </label>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //               <div>
// // //                 <h4 className="text-sm font-semibold text-gray-700 mb-3">Budget Per Person</h4>
// // //                 <div className="space-y-2">
// // //                   {["Under ₹10,000", "₹10K - ₹20K", "₹20K - ₹40K", "Above ₹40K"].map((p) => (
// // //                     <label key={p} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
// // //                       <input type="radio" name="price" className="w-4 h-4" />
// // //                       {p}
// // //                     </label>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <div className="flex justify-end gap-3 mt-5 pt-4 border-t">
// // //               <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">Reset</button>
// // //               <button className="px-4 py-2 text-sm text-white rounded-lg" style={{ background: "#1a5276" }}>Apply Filters</button>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Results count */}
// // //         <div className="flex items-center justify-between mb-4">
// // //           <p className="text-sm text-gray-600">
// // //             <span className="font-bold text-gray-900">{filteredExperiences.length}</span> packages found
// // //           </p>
// // //           <p className="text-sm text-green-600 flex items-center gap-1">
// // //             <Shield className="w-3.5 h-3.5" />
// // //             Free cancellation available
// // //           </p>
// // //         </div>

// // //         {/* ===== PACKAGE CARDS - MMT Style ===== */}
// // //         {loading ? (
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // //             {[1, 2, 3, 4, 5, 6].map((i) => (
// // //               <div key={i} className="bg-white rounded-xl overflow-hidden animate-pulse">
// // //                 <div className="h-44 bg-gray-200" />
// // //                 <div className="p-4 space-y-3">
// // //                   <div className="h-4 bg-gray-200 rounded w-3/4" />
// // //                   <div className="h-3 bg-gray-200 rounded w-1/2" />
// // //                   <div className="h-3 bg-gray-200 rounded w-full" />
// // //                   <div className="h-8 bg-gray-200 rounded" />
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         ) : error ? (
// // //           <div className="text-center py-16 text-gray-500">{error}</div>
// // //         ) : filteredExperiences.length === 0 ? (
// // //           <div className="text-center py-16 text-gray-500">No packages found.</div>
// // //         ) : (
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
// // //             {filteredExperiences.map((exp) => (
// // //               <div
// // //                 key={exp.id}
// // //                 className="bg-white rounded-xl overflow-hidden group cursor-pointer transition-all"
// // //                 style={{ border: "1px solid #e8e8e8", boxShadow: hoveredId === exp.id ? "0 8px 32px rgba(0,0,0,0.15)" : "0 2px 8px rgba(0,0,0,0.06)" }}
// // //                 onMouseEnter={() => setHoveredId(exp.id)}
// // //                 onMouseLeave={() => setHoveredId(null)}
// // //               >
// // //                 {/* Image */}
// // //                 <div className="relative h-44 overflow-hidden">
// // //                   <img
// // //                     src={exp.image}
// // //                     alt={exp.title}
// // //                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// // //                   />
// // //                   {/* Discount badge */}
// // //                   <div className="absolute top-3 left-3">
// // //                     <span className="text-white text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1" style={{ background: "#e74c3c" }}>
// // //                       <Percent className="w-3 h-3" />
// // //                       {calculateDiscount(exp.price, exp.originalPrice)}% OFF
// // //                     </span>
// // //                   </div>
// // //                   {/* Duration */}
// // //                   <div className="absolute bottom-3 left-3">
// // //                     <span className="text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}>
// // //                       <Clock className="w-3 h-3" />
// // //                       {exp.nights}N/{exp.days}D
// // //                     </span>
// // //                   </div>
// // //                   {/* Wishlist */}
// // //                   <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110">
// // //                     <Heart className="w-4 h-4 text-gray-500 hover:text-red-500 transition-colors" />
// // //                   </button>
// // //                 </div>

// // //                 {/* Card Body */}
// // //                 <div className="p-4">
// // //                   {/* Title + Category */}
// // //                   <div className="flex items-start justify-between gap-2 mb-1">
// // //                     <h3 className="font-bold text-gray-900 text-base leading-tight line-clamp-1">{exp.title}</h3>
// // //                     <span className={`text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${getCategoryColor(exp.category)}`}>
// // //                       {exp.category}
// // //                     </span>
// // //                   </div>

// // //                   {/* Location */}
// // //                   <div className="flex items-center gap-1 text-gray-500 text-xs mb-3">
// // //                     <MapPin className="w-3 h-3" />
// // //                     <span className="line-clamp-1">{exp.location}</span>
// // //                   </div>

// // //                   {/* Rating */}
// // //                   <div className="flex items-center gap-2 mb-3">
// // //                     <div className="flex items-center gap-1 px-2 py-0.5 rounded text-white text-xs font-bold" style={{ background: "#1e8449" }}>
// // //                       <Star className="w-3 h-3 fill-white" />
// // //                       {exp.rating}
// // //                     </div>
// // //                     <span className="text-xs text-gray-500">({exp.reviews} reviews)</span>
// // //                     <span className="text-xs text-green-600 font-semibold ml-auto">
// // //                       Excellent
// // //                     </span>
// // //                   </div>

// // //                   {/* Inclusions */}
// // //                   <div className="flex flex-wrap gap-1.5 mb-3">
// // //                     {(exp.inclusions || exp.features).slice(0, 3).map((inc, i) => (
// // //                       <span key={i} className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full" style={{ background: "#eaf4fb", color: "#1a5276" }}>
// // //                         <CheckCircle className="w-3 h-3" />
// // //                         {inc}
// // //                       </span>
// // //                     ))}
// // //                   </div>

// // //                   {/* Divider */}
// // //                   <div className="border-t border-dashed border-gray-200 my-3" />

// // //                   {/* Price + CTA */}
// // //                   <div className="flex items-end justify-between">
// // //                     <div>
// // //                       <p className="text-xs text-gray-500 mb-0.5">Starting from</p>
// // //                       <div className="flex items-baseline gap-2">
// // //                         <span className="text-xl font-black" style={{ color: "#1a5276" }}>
// // //                           ₹{exp.price.toLocaleString()}
// // //                         </span>
// // //                         <span className="text-xs text-gray-400 line-through">
// // //                           ₹{exp.originalPrice.toLocaleString()}
// // //                         </span>
// // //                       </div>
// // //                       <p className="text-xs text-gray-400">per person</p>
// // //                     </div>
// // //                     <button
// // //                       onClick={() => handleBookNow(exp)}
// // //                       className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-white text-sm font-bold transition-all hover:opacity-90"
// // //                       style={{ background: "linear-gradient(135deg, #1a5276, #1e8449)" }}
// // //                     >
// // //                       Book Now
// // //                       <ArrowRight className="w-3.5 h-3.5" />
// // //                     </button>
// // //                   </div>

// // //                   {/* Slots */}
// // //                   <div className="mt-3 flex items-center justify-between text-xs">
// // //                     <span className="text-green-600 flex items-center gap-1">
// // //                       <CheckCircle className="w-3 h-3" />
// // //                       Available today
// // //                     </span>
// // //                     {exp.availableSlots <= 10 && (
// // //                       <span className="text-orange-500 font-medium">Only {exp.availableSlots} left!</span>
// // //                     )}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* ===== WHY BOOK WITH US ===== */}
// // //       <div style={{ background: "#f7f8fa" }} className="py-12">
// // //         <div className="max-w-6xl mx-auto px-4">
// // //           <h2 className="text-xl font-bold text-gray-800 text-center mb-8">Why Book With Us?</h2>
// // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// // //             {[
// // //               { icon: Shield, title: "Free Cancellation", desc: "Up to 24 hours before", color: "#1a5276" },
// // //               { icon: Award, title: "Best Price Guarantee", desc: "We match any price", color: "#1e8449" },
// // //               { icon: Users, title: "24/7 Support", desc: "In 10+ languages", color: "#e67e22" },
// // //               { icon: Sparkles, title: "Verified Reviews", desc: "Real traveler feedback", color: "#8e44ad" },
// // //             ].map((item, i) => {
// // //               const Icon = item.icon;
// // //               return (
// // //                 <div key={i} className="text-center p-5 bg-white rounded-xl" style={{ border: "1px solid #e8e8e8" }}>
// // //                   <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: `${item.color}15` }}>
// // //                     <Icon className="w-6 h-6" style={{ color: item.color }} />
// // //                   </div>
// // //                   <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>
// // //                   <p className="text-xs text-gray-500">{item.desc}</p>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <style>{`
// // //         @keyframes fadeIn { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }
// // //         input[type="date"]::-webkit-calendar-picker-indicator { opacity: 0.5; cursor: pointer; }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // // Calendar icon (inline since lucide may not have it)
// // // const CalendarIcon = (props) => (
// // //   <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // //   </svg>
// // // );

// // // export default TripBestGallery;





















// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   Search, MapPin, Star, Heart, Users, Utensils, Hotel, Ticket,
// //   Compass, Globe, ChevronRight, Clock, Wifi, Shield, Award,
// //   Sparkles, Filter, X, CheckCircle, Calendar, ChevronDown,
// //   TrendingUp, Zap, Sun, Moon, Coffee, ArrowRight, Tag, Percent,
// //   Plane, ChevronLeft, Check,
// // } from "lucide-react";
// // import { getHolidayDataAPI } from "../api/holiday.js";

// // // ─── STATIC FILTER / TAB DATA ─────────────────────────────────────────────────
// // const PACKAGE_TABS = ["All Packages", "Phu Quoc", "Group Tours", "Budget", "Honeymoon"];

// // const THEMES = ["Adventure", "Culture", "Offbeat", "Beach", "Wildlife", "Spiritual"];
// // const BUDGET_OPTIONS = ["Under ₹20,000", "₹20K – ₹40K", "₹40K – ₹60K", "Above ₹60K"];
// // const DURATION_OPTIONS = ["2N/3D", "3N/4D", "4N/5D", "5N/6D", "7N+"];
// // const PACKAGE_TYPES = ["Customizable", "Group Package"];

// // const POPULAR_COUNTRIES = [
// //   { name: "Vietnam",     img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&fit=crop", packages: 52 },
// //   { name: "Thailand",    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&fit=crop", packages: 38 },
// //   { name: "Bali",        img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&fit=crop", packages: 45 },
// //   { name: "Dubai",       img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&fit=crop", packages: 29 },
// //   { name: "Singapore",   img: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=600&fit=crop", packages: 33 },
// //   { name: "Maldives",    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&fit=crop", packages: 21 },
// //   { name: "Europe",      img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&fit=crop", packages: 67 },
// //   { name: "Sri Lanka",   img: "https://images.unsplash.com/photo-1556366673-38c3e64f47f7?w=600&fit=crop", packages: 18 },
// // ];

// // const INCLUSIONS_ICONS = { Breakfast: "🍳", Hotel: "🏨", Sightseeing: "🗺️", Flights: "✈️", Meals: "🍽️", Transfer: "🚌", Visa: "📋", Guide: "🧭" };

// // // ─── BOOKING MODAL ────────────────────────────────────────────────────────────
// // const BookingModal = ({ pkg, onClose, onConfirm }) => {
// //   const [step, setStep] = useState(1); // 1=form, 2=confirmed
// //   const [form, setForm] = useState({ name: "", email: "", phone: "", travelers: "2", date: "", rooms: "1", requests: "" });
// //   const [errors, setErrors] = useState({});

// //   const validate = () => {
// //     const e = {};
// //     if (!form.name.trim()) e.name = "Name required";
// //     if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = "Valid email required";
// //     if (!form.phone.match(/^\d{10}$/)) e.phone = "10-digit phone required";
// //     if (!form.date) e.date = "Travel date required";
// //     setErrors(e);
// //     return Object.keys(e).length === 0;
// //   };

// //   const handleSubmit = () => { if (validate()) setStep(2); };

// //   const total = pkg.price * parseInt(form.travelers || 1);

// //   return (
// //     <div className="fixed inset-0 z-[5000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
// //       <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">

// //         {/* Modal Header */}
// //         <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 py-4 border-b border-gray-100">
// //           <div>
// //             <h2 className="font-bold text-gray-900 text-lg">{step === 1 ? "Book Your Package" : "Booking Confirmed! 🎉"}</h2>
// //             <p className="text-sm text-gray-500 truncate max-w-xs">{pkg.title}</p>
// //           </div>
// //           <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
// //             <X className="w-4 h-4 text-gray-600" />
// //           </button>
// //         </div>

// //         {step === 1 ? (
// //           <div className="p-6">
// //             {/* Package Summary */}
// //             <div className="flex gap-4 p-4 rounded-xl mb-6" style={{ background: "#eaf4fb" }}>
// //               <img src={pkg.image} alt={pkg.title} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
// //               <div className="flex-1 min-w-0">
// //                 <h3 className="font-bold text-gray-900 text-sm line-clamp-1">{pkg.title}</h3>
// //                 <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><MapPin className="w-3 h-3" />{pkg.location}</p>
// //                 <div className="flex items-center gap-3 mt-2">
// //                   <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "#1e844920", color: "#1e8449" }}>
// //                     <Clock className="w-3 h-3 inline mr-1" />{pkg.nights}N/{pkg.days}D
// //                   </span>
// //                   <span className="text-xs font-bold" style={{ color: "#1a5276" }}>₹{pkg.price.toLocaleString()}/person</span>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Form Fields */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               {[
// //                 { label: "Full Name", key: "name", type: "text", placeholder: "Enter your full name", full: true },
// //                 { label: "Email Address", key: "email", type: "email", placeholder: "you@email.com" },
// //                 { label: "Phone Number", key: "phone", type: "tel", placeholder: "10-digit mobile number" },
// //                 { label: "Travel Date", key: "date", type: "date" },
// //                 { label: "No. of Travelers", key: "travelers", type: "select", options: ["1","2","3","4","5","6","7","8"] },
// //                 { label: "Rooms Required", key: "rooms", type: "select", options: ["1","2","3","4"] },
// //               ].map((field) => (
// //                 <div key={field.key} className={field.full ? "md:col-span-2" : ""}>
// //                   <label className="block text-xs font-semibold text-gray-600 mb-1.5">{field.label}</label>
// //                   {field.type === "select" ? (
// //                     <select
// //                       value={form[field.key]}
// //                       onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
// //                       className="w-full px-3 py-2.5 rounded-lg text-sm border outline-none transition"
// //                       style={{ border: errors[field.key] ? "1.5px solid #e74c3c" : "1.5px solid #e0e0e0" }}
// //                     >
// //                       {field.options.map((o) => <option key={o}>{o}</option>)}
// //                     </select>
// //                   ) : (
// //                     <input
// //                       type={field.type}
// //                       placeholder={field.placeholder}
// //                       value={form[field.key]}
// //                       onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
// //                       className="w-full px-3 py-2.5 rounded-lg text-sm border outline-none transition"
// //                       style={{ border: errors[field.key] ? "1.5px solid #e74c3c" : "1.5px solid #e0e0e0" }}
// //                     />
// //                   )}
// //                   {errors[field.key] && <p className="text-xs text-red-500 mt-1">{errors[field.key]}</p>}
// //                 </div>
// //               ))}
// //               <div className="md:col-span-2">
// //                 <label className="block text-xs font-semibold text-gray-600 mb-1.5">Special Requests (optional)</label>
// //                 <textarea
// //                   placeholder="Any special requirements, dietary needs, etc."
// //                   value={form.requests}
// //                   onChange={(e) => setForm({ ...form, requests: e.target.value })}
// //                   rows={3}
// //                   className="w-full px-3 py-2.5 rounded-lg text-sm border outline-none resize-none"
// //                   style={{ border: "1.5px solid #e0e0e0" }}
// //                 />
// //               </div>
// //             </div>

// //             {/* Price Breakdown */}
// //             <div className="mt-5 p-4 rounded-xl" style={{ background: "#f7f8fa", border: "1px solid #e8e8e8" }}>
// //               <h4 className="font-bold text-gray-800 text-sm mb-3">Price Breakdown</h4>
// //               <div className="space-y-2">
// //                 <div className="flex justify-between text-sm text-gray-600">
// //                   <span>₹{pkg.price.toLocaleString()} × {form.travelers} traveler(s)</span>
// //                   <span>₹{total.toLocaleString()}</span>
// //                 </div>
// //                 <div className="flex justify-between text-sm text-green-600">
// //                   <span>Discount ({Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% off)</span>
// //                   <span>-₹{((pkg.originalPrice - pkg.price) * parseInt(form.travelers)).toLocaleString()}</span>
// //                 </div>
// //                 <div className="flex justify-between text-sm text-gray-600">
// //                   <span>Taxes & Fees</span>
// //                   <span>₹{Math.round(total * 0.05).toLocaleString()}</span>
// //                 </div>
// //                 <div className="border-t border-dashed border-gray-300 my-2" />
// //                 <div className="flex justify-between font-bold text-gray-900">
// //                   <span>Total Amount</span>
// //                   <span style={{ color: "#1a5276" }}>₹{(total + Math.round(total * 0.05)).toLocaleString()}</span>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Actions */}
// //             <div className="flex gap-3 mt-5">
// //               <button onClick={onClose} className="flex-1 py-3 rounded-xl text-sm font-semibold text-gray-600 border border-gray-200 hover:bg-gray-50 transition">
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleSubmit}
// //                 className="flex-1 py-3 rounded-xl text-sm font-bold text-white transition hover:opacity-90"
// //                 style={{ background: "linear-gradient(135deg, #1a5276, #1e8449)" }}
// //               >
// //                 Confirm Booking →
// //               </button>
// //             </div>
// //           </div>
// //         ) : (
// //           // Confirmation Screen
// //           <div className="p-8 text-center">
// //             <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "#e8f8ef" }}>
// //               <Check className="w-10 h-10" style={{ color: "#1e8449" }} />
// //             </div>
// //             <h3 className="text-2xl font-black text-gray-900 mb-2">Booking Confirmed!</h3>
// //             <p className="text-gray-500 text-sm mb-6">
// //               Your booking reference is <span className="font-bold text-gray-900">#{Math.random().toString(36).substr(2, 8).toUpperCase()}</span>
// //             </p>
// //             <div className="text-left p-4 rounded-xl mb-6" style={{ background: "#eaf4fb" }}>
// //               <div className="space-y-2 text-sm">
// //                 {[
// //                   ["Package", pkg.title],
// //                   ["Traveler", form.name],
// //                   ["Email", form.email],
// //                   ["Phone", form.phone],
// //                   ["Travel Date", form.date],
// //                   ["Travelers", form.travelers],
// //                   ["Total Paid", `₹${(total + Math.round(total * 0.05)).toLocaleString()}`],
// //                 ].map(([k, v]) => (
// //                   <div key={k} className="flex justify-between">
// //                     <span className="text-gray-500">{k}</span>
// //                     <span className="font-semibold text-gray-800 text-right max-w-xs truncate">{v}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //             <p className="text-xs text-gray-400 mb-6">Confirmation details have been sent to <strong>{form.email}</strong></p>
// //             <button
// //               onClick={onClose}
// //               className="w-full py-3 rounded-xl text-sm font-bold text-white"
// //               style={{ background: "linear-gradient(135deg, #1a5276, #1e8449)" }}
// //             >
// //               Done
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // // ─── PACKAGE CARD ─────────────────────────────────────────────────────────────
// // const PackageCard = ({ exp, onBook }) => {
// //   const [liked, setLiked] = useState(false);
// //   const discount = Math.round(((exp.originalPrice - exp.price) / exp.originalPrice) * 100);

// //   return (
// //     <div
// //       className="bg-white rounded-xl overflow-hidden group cursor-pointer transition-all hover:shadow-xl"
// //       style={{ border: "1px solid #e8e8e8" }}
// //     >
// //       {/* Image */}
// //       <div className="relative overflow-hidden" style={{ height: "200px" }}>
// //         <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

// //         {/* Top labels */}
// //         <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-3">
// //           <div className="flex flex-col gap-1.5">
// //             <span className="text-white text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1 w-fit" style={{ background: "#e74c3c" }}>
// //               <Percent className="w-3 h-3" />{discount}% OFF
// //             </span>
// //             {exp.availableSlots <= 5 && (
// //               <span className="text-white text-xs font-bold px-2.5 py-1 rounded w-fit" style={{ background: "#e67e22" }}>
// //                 🔥 Only {exp.availableSlots} left
// //               </span>
// //             )}
// //           </div>
// //           <button
// //             onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
// //             className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
// //           >
// //             <Heart className={`w-4 h-4 transition-colors ${liked ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
// //           </button>
// //         </div>

// //         {/* Bottom labels */}
// //         <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-3">
// //           <span className="text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1" style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}>
// //             <Clock className="w-3 h-3" />{exp.nights}N/{exp.days}D
// //           </span>
// //           <span className="text-white text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(26,82,118,0.85)" }}>
// //             2 More Options
// //           </span>
// //         </div>
// //       </div>

// //       {/* Body */}
// //       <div className="p-4">
// //         {/* Title + duration dots */}
// //         <h3 className="font-bold text-gray-900 text-base leading-tight mb-1 line-clamp-1">{exp.title}</h3>

// //         {/* City route e.g. 3N Hanoi • 2N Da Nang */}
// //         <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
// //           <MapPin className="w-3 h-3 flex-shrink-0" />
// //           <span className="line-clamp-1">{exp.location}</span>
// //         </p>

// //         {/* Bullet features in 2 cols */}
// //         <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-3">
// //           {(exp.inclusions || []).slice(0, 4).map((inc, i) => (
// //             <span key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
// //               <span className="text-base leading-none">{INCLUSIONS_ICONS[inc] || "✅"}</span>
// //               {inc}
// //             </span>
// //           ))}
// //         </div>

// //         {/* Highlighted feature (green checkmarks like MMT) */}
// //         {exp.features && exp.features.slice(0, 2).map((f, i) => (
// //           <p key={i} className="text-xs flex items-center gap-1 mb-0.5" style={{ color: "#1e8449" }}>
// //             <Check className="w-3 h-3 flex-shrink-0" /> {f}
// //           </p>
// //         ))}

// //         <div className="border-t border-dashed border-gray-200 my-3" />

// //         {/* Rating + Price + CTA */}
// //         <div className="flex items-end justify-between gap-2">
// //           <div>
// //             <div className="flex items-center gap-1.5 mb-1">
// //               <span className="flex items-center gap-1 px-2 py-0.5 rounded text-white text-xs font-bold" style={{ background: "#1e8449" }}>
// //                 <Star className="w-3 h-3 fill-white" />{exp.rating}
// //               </span>
// //               <span className="text-xs text-gray-400">({exp.reviews} reviews)</span>
// //             </div>
// //             <p className="text-xs text-gray-400">Starting from</p>
// //             <div className="flex items-baseline gap-1.5">
// //               <span className="text-xl font-black" style={{ color: "#1a5276" }}>₹{exp.price.toLocaleString()}</span>
// //               <span className="text-xs text-gray-400 line-through">₹{exp.originalPrice.toLocaleString()}</span>
// //             </div>
// //             <p className="text-xs text-gray-400">per person</p>
// //           </div>
// //           <button
// //             onClick={() => onBook(exp)}
// //             className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-white text-sm font-bold transition hover:opacity-90 flex-shrink-0"
// //             style={{ background: "linear-gradient(135deg, #1a5276, #1e8449)" }}
// //           >
// //             Book Now <ArrowRight className="w-3.5 h-3.5" />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // ─── LEFT FILTER PANEL ────────────────────────────────────────────────────────
// // const FilterSection = ({ title, children, defaultOpen = true }) => {
// //   const [open, setOpen] = useState(defaultOpen);
// //   return (
// //     <div className="border-b border-gray-100 py-4">
// //       <button className="w-full flex items-center justify-between mb-3" onClick={() => setOpen(!open)}>
// //         <span className="font-bold text-gray-800 text-sm">{title}</span>
// //         <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
// //       </button>
// //       {open && children}
// //     </div>
// //   );
// // };

// // // ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
// // const TripBestGallery = () => {
// //   const navigate = useNavigate();
// //   const [experiences, setExperiences] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // Search bar state
// //   const [startingFrom, setStartingFrom] = useState("New Delhi");
// //   const [goingTo, setGoingTo] = useState("");
// //   const [startDate, setStartDate] = useState("");
// //   const [guests, setGuests] = useState("");

// //   // Filter state
// //   const [selectedThemes, setSelectedThemes] = useState([]);
// //   const [selectedBudgets, setSelectedBudgets] = useState([]);
// //   const [selectedDurations, setSelectedDurations] = useState([]);
// //   const [selectedTypes, setSelectedTypes] = useState([]);
// //   const [buyNowPay, setBuyNowPay] = useState(false);
// //   const [sortBy, setSortBy] = useState("Popular");

// //   // UI state
// //   const [activeTab, setActiveTab] = useState("All Packages");
// //   const [selectedCountry, setSelectedCountry] = useState(null);
// //   const [bookingPkg, setBookingPkg] = useState(null);

// //   useEffect(() => {
// //     const fetchExperiences = async () => {
// //       try {
// //         setLoading(true);
// //         const res = await getHolidayDataAPI();
// //         const apiData = res?.data?.data || [];
// //         const formattedData = apiData.map((item) => ({
// //           id: item._id,
// //           title: item.parkName,
// //           location: `${item.address?.area || ""}, ${item.address?.city || ""}`,
// //           category: item.propertyType || "attractions",
// //           rating: item.rating || 4.2,
// //           reviews: item.totalReviews || 120,
// //           image: item.thumbnailImage || "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&fit=crop",
// //           price: item.pricePerNight || 15000,
// //           originalPrice: (item.pricePerNight || 15000) + 3000,
// //           nights: item.nights || 3,
// //           days: (item.nights || 3) + 1,
// //           inclusions: item.inclusions || ["Breakfast", "Hotel", "Sightseeing", "Transfer"],
// //           features: item.activities || ["Ha Long Bay Cruise", "Walking Tour"],
// //           availableSlots: item.totalRooms || 8,
// //           amenities: item.amenities || [],
// //         }));
// //         setExperiences(formattedData);
// //       } catch (err) {
// //         setError(err.message || "Failed to load");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchExperiences();
// //   }, []);

// //   const toggleArr = (arr, setArr, val) =>
// //     setArr(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);

// //   const filteredExperiences = experiences.filter((exp) => {
// //     if (selectedThemes.length > 0 && !selectedThemes.some((t) => exp.category?.toLowerCase().includes(t.toLowerCase()))) return false;
// //     return true;
// //   });

// //   const sortedExperiences = [...filteredExperiences].sort((a, b) => {
// //     if (sortBy === "Price: Low to High") return a.price - b.price;
// //     if (sortBy === "Price: High to Low") return b.price - a.price;
// //     if (sortBy === "Highest Rated") return b.rating - a.rating;
// //     return 0;
// //   });

// //   // ── Country landing view ─────────────────────────────────────────────────
// //   if (selectedCountry) {
// //     return (
// //       <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

// //         {/* ── TOP SEARCH BAR (MMT style dark) ── */}
// //         <div style={{ background: "#0a2240" }}>
// //           <div className="max-w-7xl mx-auto px-4">
// //             <div className="grid grid-cols-2 md:grid-cols-5 border-b border-white/10">
// //               {[
// //                 { label: "STARTING FROM", val: startingFrom, set: setStartingFrom, placeholder: "New Delhi" },
// //                 { label: "GOING TO", val: goingTo || selectedCountry.name, set: setGoingTo, placeholder: "Vietnam" },
// //                 { label: "STARTING DATE", val: startDate, set: setStartDate, placeholder: "Select", type: "date" },
// //                 { label: "ROOMS & GUESTS", val: guests, set: setGuests, placeholder: "Select" },
// //               ].map((f) => (
// //                 <div key={f.label} className="px-5 py-4 border-r border-white/10 hover:bg-white/5 transition cursor-pointer">
// //                   <p className="text-xs font-bold mb-1" style={{ color: "#4a9fd4", fontSize: "10px", letterSpacing: "0.05em" }}>{f.label}</p>
// //                   {f.type === "date" ? (
// //                     <input type="date" value={f.val} onChange={(e) => f.set(e.target.value)}
// //                       className="bg-transparent text-white font-semibold text-sm outline-none w-full" />
// //                   ) : (
// //                     <input value={f.val} onChange={(e) => f.set(e.target.value)} placeholder={f.placeholder}
// //                       className="bg-transparent text-white font-semibold text-sm outline-none w-full placeholder-white/50" />
// //                   )}
// //                 </div>
// //               ))}
// //               <button className="flex items-center justify-center font-bold text-white text-sm px-6 py-4 transition hover:opacity-90"
// //                 style={{ background: "#1e90ff" }}>
// //                 <Search className="w-4 h-4 mr-2" /> SEARCH
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ── HERO BANNER with country image ── */}
// //         <div className="relative overflow-hidden" style={{ height: "220px" }}>
// //           <img src={selectedCountry.img} alt={selectedCountry.name} className="w-full h-full object-cover" />
// //           <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />
// //           <div className="absolute inset-0 flex items-center px-8">
// //             <div>
// //               <button onClick={() => setSelectedCountry(null)} className="flex items-center gap-1 text-white/70 text-sm mb-2 hover:text-white transition">
// //                 <ChevronLeft className="w-4 h-4" /> Back to all destinations
// //               </button>
// //               <h1 className="text-3xl font-black text-white">{selectedCountry.name} Packages</h1>
// //               <p className="text-white/80 text-sm mt-1">{selectedCountry.packages} packages available</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ── MAIN CONTENT: Left Filters + Right Cards ── */}
// //         <div className="max-w-7xl mx-auto px-4 py-6">
// //           <div className="flex gap-6">

// //             {/* ── LEFT: FILTERS ── */}
// //             <div className="flex-shrink-0 w-64 hidden md:block">
// //               <div className="bg-white rounded-xl sticky top-4" style={{ border: "1px solid #e8e8e8" }}>
// //                 <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
// //                   <h3 className="font-bold text-gray-800">FILTERS</h3>
// //                   <button className="text-xs font-semibold" style={{ color: "#1e8449" }}>Reset All</button>
// //                 </div>

// //                 <div className="px-4 overflow-y-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>

// //                   <FilterSection title="Buy Now, Pay Later">
// //                     <label className="flex items-center justify-between text-sm text-gray-600 cursor-pointer">
// //                       <div className="flex items-center gap-2">
// //                         <input type="checkbox" checked={buyNowPay} onChange={(e) => setBuyNowPay(e.target.checked)} className="w-4 h-4 rounded" />
// //                         Book @ ₹2,000
// //                       </div>
// //                       <span className="text-gray-400 text-xs">(1)</span>
// //                     </label>
// //                   </FilterSection>

// //                   <FilterSection title="Themes">
// //                     <div className="space-y-2">
// //                       {THEMES.map((t) => (
// //                         <label key={t} className="flex items-center justify-between text-sm text-gray-600 cursor-pointer">
// //                           <div className="flex items-center gap-2">
// //                             <input type="checkbox" checked={selectedThemes.includes(t)} onChange={() => toggleArr(selectedThemes, setSelectedThemes, t)} className="w-4 h-4 rounded" />
// //                             {t}
// //                           </div>
// //                           <span className="text-gray-400 text-xs">({Math.floor(Math.random() * 20) + 1})</span>
// //                         </label>
// //                       ))}
// //                     </div>
// //                   </FilterSection>

// //                   <FilterSection title="Package Type">
// //                     <div className="flex flex-wrap gap-2">
// //                       {PACKAGE_TYPES.map((t) => (
// //                         <button
// //                           key={t}
// //                           onClick={() => toggleArr(selectedTypes, setSelectedTypes, t)}
// //                           className="px-3 py-1.5 rounded-lg text-xs font-medium border transition"
// //                           style={{
// //                             background: selectedTypes.includes(t) ? "#1a5276" : "white",
// //                             color: selectedTypes.includes(t) ? "white" : "#555",
// //                             borderColor: selectedTypes.includes(t) ? "#1a5276" : "#ddd",
// //                           }}
// //                         >
// //                           {t}
// //                         </button>
// //                       ))}
// //                     </div>
// //                   </FilterSection>

// //                   <FilterSection title="Duration">
// //                     <div className="space-y-2">
// //                       {DURATION_OPTIONS.map((d) => (
// //                         <label key={d} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
// //                           <input type="checkbox" checked={selectedDurations.includes(d)} onChange={() => toggleArr(selectedDurations, setSelectedDurations, d)} className="w-4 h-4 rounded" />
// //                           {d}
// //                         </label>
// //                       ))}
// //                     </div>
// //                   </FilterSection>

// //                   <FilterSection title="Budget Per Person">
// //                     <div className="space-y-2">
// //                       {BUDGET_OPTIONS.map((b) => (
// //                         <label key={b} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
// //                           <input type="checkbox" checked={selectedBudgets.includes(b)} onChange={() => toggleArr(selectedBudgets, setSelectedBudgets, b)} className="w-4 h-4 rounded" />
// //                           {b}
// //                         </label>
// //                       ))}
// //                     </div>
// //                   </FilterSection>

// //                 </div>
// //               </div>
// //             </div>

// //             {/* ── RIGHT: TABS + CARDS ── */}
// //             <div className="flex-1 min-w-0">

// //               {/* Package type tabs */}
// //               <div className="bg-white rounded-xl mb-4 overflow-hidden" style={{ border: "1px solid #e8e8e8" }}>
// //                 <div className="flex items-center border-b border-gray-100 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
// //                   <button className="p-3 hover:bg-gray-50 flex-shrink-0"><ChevronLeft className="w-4 h-4 text-gray-400" /></button>
// //                   {PACKAGE_TABS.map((tab) => (
// //                     <button
// //                       key={tab}
// //                       onClick={() => setActiveTab(tab)}
// //                       className="px-4 py-3 text-sm font-semibold whitespace-nowrap flex-shrink-0 border-b-2 transition"
// //                       style={{
// //                         color: activeTab === tab ? "#1e8449" : "#555",
// //                         borderBottomColor: activeTab === tab ? "#1e8449" : "transparent",
// //                       }}
// //                     >
// //                       {tab} {tab === "All Packages" && `(${sortedExperiences.length})`}
// //                     </button>
// //                   ))}
// //                   <button className="p-3 hover:bg-gray-50 flex-shrink-0 ml-auto"><ChevronRight className="w-4 h-4 text-gray-400" /></button>
// //                 </div>

// //                 {/* Sort row */}
// //                 <div className="px-4 py-3 flex items-center justify-end gap-2">
// //                   <span className="text-sm text-gray-500">Sorted By:</span>
// //                   <select
// //                     value={sortBy}
// //                     onChange={(e) => setSortBy(e.target.value)}
// //                     className="text-sm font-semibold text-gray-800 border border-gray-200 rounded-lg px-3 py-1.5 outline-none"
// //                   >
// //                     {["Popular", "Price: Low to High", "Price: High to Low", "Highest Rated"].map((s) => (
// //                       <option key={s}>{s}</option>
// //                     ))}
// //                   </select>
// //                 </div>
// //               </div>

// //               {/* Cards */}
// //               {loading ? (
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                   {[1,2,3,4].map((i) => (
// //                     <div key={i} className="bg-white rounded-xl overflow-hidden animate-pulse">
// //                       <div className="h-48 bg-gray-200" />
// //                       <div className="p-4 space-y-3">
// //                         <div className="h-4 bg-gray-200 rounded w-3/4" />
// //                         <div className="h-3 bg-gray-200 rounded w-1/2" />
// //                         <div className="h-8 bg-gray-200 rounded" />
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               ) : error ? (
// //                 <div className="text-center py-16 text-gray-500">{error}</div>
// //               ) : sortedExperiences.length === 0 ? (
// //                 <div className="text-center py-16 text-gray-500">No packages found.</div>
// //               ) : (
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                   {sortedExperiences.map((exp) => (
// //                     <PackageCard key={exp.id} exp={exp} onBook={setBookingPkg} />
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Booking Modal */}
// //         {bookingPkg && (
// //           <BookingModal pkg={bookingPkg} onClose={() => setBookingPkg(null)} onConfirm={() => setBookingPkg(null)} />
// //         )}
// //       </div>
// //     );
// //   }

// //   // ── DEFAULT HOME VIEW ─────────────────────────────────────────────────────
// //   return (
// //     <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

// //       {/* HERO */}
// //       <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a5276 0%, #1a6b3c 50%, #145a32 100%)", minHeight: "420px" }}>
// //         <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&fit=crop)", backgroundSize: "cover", backgroundPosition: "center" }} />
// //         <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
// //         <div className="relative max-w-6xl mx-auto px-4 pt-12 pb-8">
// //           <div className="flex justify-center mb-4">
// //             <span className="text-white text-sm px-4 py-1.5 rounded-full flex items-center gap-2" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>
// //               🏕️ 50,000+ Unique Stays Across India
// //             </span>
// //           </div>
// //           <h1 className="text-center text-white font-black mb-2" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.5px" }}>
// //             Discover Your Dream <span style={{ color: "#f39c12" }}>Escape</span>
// //           </h1>
// //           <p className="text-center text-white/80 mb-8" style={{ fontSize: "1rem" }}>
// //             Handpicked holiday packages · Real reviews · Best prices
// //           </p>

// //           {/* Search Box */}
// //           <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto" style={{ border: "1px solid #e8e8e8" }}>
// //             <div className="grid grid-cols-1 md:grid-cols-4">
// //               {[
// //                 { label: "STARTING FROM", val: startingFrom, set: setStartingFrom, placeholder: "New Delhi" },
// //                 { label: "GOING TO", val: goingTo, set: setGoingTo, placeholder: "Vietnam, Bali, Dubai..." },
// //                 { label: "STARTING DATE", val: startDate, set: setStartDate, placeholder: "Select", type: "date" },
// //                 { label: "ROOMS & GUESTS", val: guests, set: setGuests, placeholder: "Select" },
// //               ].map((f, i) => (
// //                 <div key={f.label} className={`flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-gray-50 transition ${i === 3 ? "md:border-r-0" : ""}`}>
// //                   <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: "#e74c3c" }} />
// //                   <div className="flex-1 min-w-0">
// //                     <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#888", fontSize: "10px" }}>{f.label}</p>
// //                     {f.type === "date" ? (
// //                       <input type="date" value={f.val} onChange={(e) => f.set(e.target.value)} className="w-full text-gray-800 font-semibold text-sm outline-none bg-transparent mt-0.5" />
// //                     ) : (
// //                       <input value={f.val} onChange={(e) => f.set(e.target.value)} placeholder={f.placeholder} className="w-full text-gray-800 font-semibold text-sm outline-none bg-transparent placeholder-gray-400 mt-0.5" />
// //                     )}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //             <button className="w-full flex items-center justify-center gap-2 font-bold text-white py-3.5 transition hover:opacity-90" style={{ background: "linear-gradient(135deg, #1a5276, #1e8449)" }}>
// //               <Search className="w-5 h-5" /> Search Packages
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* POPULAR DESTINATIONS */}
// //       <div className="max-w-6xl mx-auto px-4 py-10">
// //         <div className="flex items-center justify-between mb-6">
// //           <h2 className="text-xl font-bold text-gray-800">Popular <span style={{ color: "#1e8449" }}>Destinations</span></h2>
// //           <button className="text-sm font-semibold flex items-center gap-1" style={{ color: "#1a5276" }}>
// //             See all <ChevronRight className="w-4 h-4" />
// //           </button>
// //         </div>

// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //           {POPULAR_COUNTRIES.map((country) => (
// //             <div
// //               key={country.name}
// //               onClick={() => { setSelectedCountry(country); setGoingTo(country.name); }}
// //               className="relative rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all"
// //               style={{ aspectRatio: "4/3" }}
// //             >
// //               <img src={country.img} alt={country.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
// //               <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)" }} />
// //               <div className="absolute bottom-0 left-0 right-0 p-3">
// //                 <p className="text-white font-bold text-base">{country.name}</p>
// //                 <p className="text-white/70 text-xs">{country.packages} packages</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* FEATURED PACKAGES (home) */}
// //       <div className="max-w-6xl mx-auto px-4 pb-16">
// //         <div className="flex items-center justify-between mb-5">
// //           <div>
// //             <h2 className="text-xl font-bold text-gray-800">Holiday Packages</h2>
// //             <p className="text-sm text-gray-500 mt-0.5">Curated stays with best prices</p>
// //           </div>
// //         </div>

// //         {loading ? (
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //             {[1,2,3].map((i) => (
// //               <div key={i} className="bg-white rounded-xl overflow-hidden animate-pulse">
// //                 <div className="h-48 bg-gray-200" />
// //                 <div className="p-4 space-y-3">
// //                   <div className="h-4 bg-gray-200 rounded w-3/4" />
// //                   <div className="h-3 bg-gray-200 rounded w-1/2" />
// //                   <div className="h-8 bg-gray-200 rounded" />
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         ) : (
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
// //             {experiences.slice(0, 6).map((exp) => (
// //               <PackageCard key={exp.id} exp={exp} onBook={setBookingPkg} />
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       {/* WHY BOOK WITH US */}
// //       <div style={{ background: "#f7f8fa" }} className="py-12">
// //         <div className="max-w-6xl mx-auto px-4">
// //           <h2 className="text-xl font-bold text-gray-800 text-center mb-8">Why Book With Us?</h2>
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //             {[
// //               { icon: Shield, title: "Free Cancellation", desc: "Up to 24 hours before", color: "#1a5276" },
// //               { icon: Award, title: "Best Price Guarantee", desc: "We match any price", color: "#1e8449" },
// //               { icon: Users, title: "24/7 Support", desc: "In 10+ languages", color: "#e67e22" },
// //               { icon: Sparkles, title: "Verified Reviews", desc: "Real traveler feedback", color: "#8e44ad" },
// //             ].map((item, i) => {
// //               const Icon = item.icon;
// //               return (
// //                 <div key={i} className="text-center p-5 bg-white rounded-xl" style={{ border: "1px solid #e8e8e8" }}>
// //                   <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: `${item.color}15` }}>
// //                     <Icon className="w-6 h-6" style={{ color: item.color }} />
// //                   </div>
// //                   <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>
// //                   <p className="text-xs text-gray-500">{item.desc}</p>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Booking Modal */}
// //       {bookingPkg && (
// //         <BookingModal pkg={bookingPkg} onClose={() => setBookingPkg(null)} onConfirm={() => setBookingPkg(null)} />
// //       )}

// //       <style>{`
// //         input[type="date"]::-webkit-calendar-picker-indicator { opacity: 0.5; cursor: pointer; }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default TripBestGallery;





















// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Search, MapPin, Star, Heart, Users, Utensils, Hotel, Ticket,
//   Globe, ChevronRight, Clock, Shield, Award, Sparkles, X,
//   CheckCircle, ChevronDown, ArrowRight, Percent, Plane,
//   ChevronLeft, Check, Share2, Car, Coffee, Zap, Tag,
// } from "lucide-react";
// import { getHolidayDataAPI } from "../api/holiday.js";

// // ─── CONSTANTS ────────────────────────────────────────────────────────────────
// const PACKAGE_TABS = ["All Packages", "Phu Quoc", "Group Tours", "Budget", "Honeymoon"];
// const THEMES = ["Adventure", "Culture", "Offbeat", "Beach", "Wildlife", "Spiritual"];
// const BUDGET_OPTIONS = ["Under ₹20,000", "₹20K – ₹40K", "₹40K – ₹60K", "Above ₹60K"];
// const DURATION_OPTIONS = ["2N/3D", "3N/4D", "4N/5D", "5N/6D", "7N+"];
// const PACKAGE_TYPES = ["Customizable", "Group Package"];
// const INCLUSIONS_ICONS = { Breakfast: "🍳", Hotel: "🏨", Sightseeing: "🗺️", Flights: "✈️", Meals: "🍽️", Transfer: "🚌", Visa: "📋", Guide: "🧭" };

// const POPULAR_COUNTRIES = [
//   { name: "Vietnam",   img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&fit=crop", packages: 52 },
//   { name: "Thailand",  img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&fit=crop", packages: 38 },
//   { name: "Bali",      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&fit=crop", packages: 45 },
//   { name: "Dubai",     img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&fit=crop", packages: 29 },
//   { name: "Singapore", img: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=600&fit=crop", packages: 33 },
//   { name: "Maldives",  img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&fit=crop", packages: 21 },
//   { name: "Europe",    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&fit=crop", packages: 67 },
//   { name: "Sri Lanka", img: "https://images.unsplash.com/photo-1556366673-38c3e64f47f7?w=600&fit=crop", packages: 18 },
// ];

// const GALLERY_EXTRAS = [
//   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&fit=crop",
//   "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&fit=crop",
//   "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&fit=crop",
//   "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=400&fit=crop",
// ];

// const COUPONS = [
//   { code: "MMTVACATION", discount: 813, desc: "Coupon Applied Successfully!", applied: true },
//   { code: "SUPERDEAL",   discount: 576, desc: "Unlock More Savings personalized for you!" },
//   { code: "SUMMERTRIP",  discount: 518, desc: "Grab Your Discount Before It's Gone!" },
//   { code: "MMTHLD",      discount: 253, desc: "Grab Your Discount Before It's Gone!" },
// ];

// // ─── HELPERS ──────────────────────────────────────────────────────────────────
// const getDayLabel = (index, startDate) => {
//   if (!startDate) return `Day ${index + 1}`;
//   const d = new Date(startDate);
//   d.setDate(d.getDate() + index);
//   return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", weekday: "short" });
// };

// // ═══════════════════════════════════════════════════════════════════════════════
// // PACKAGE DETAIL PAGE  (shown when Book Now is clicked)
// // ═══════════════════════════════════════════════════════════════════════════════
// const PackageDetailPage = ({ pkg, onBack, startingFrom }) => {
//   const [activeTab, setActiveTab] = useState("ITINERARY");
//   const [activePlanTab, setActivePlanTab] = useState("DAY PLAN");
//   const [activeDay, setActiveDay] = useState(0);
//   const [couponInput, setCouponInput] = useState("");
//   const [appliedCoupons, setAppliedCoupons] = useState(["MMTVACATION"]);
//   const [showCoupons, setShowCoupons] = useState(true);
//   const [travelers, setTravelers] = useState(2);
//   const [travelDate, setTravelDate] = useState("2026-06-12");
//   const [bookingConfirmed, setBookingConfirmed] = useState(false);
//   const [showPaymentForm, setShowPaymentForm] = useState(false);
//   const [form, setForm] = useState({ name: "", email: "", phone: "" });
//   const [formErrors, setFormErrors] = useState({});

//   const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);
//   const totalSavings = appliedCoupons.reduce((s, c) => {
//     const found = COUPONS.find((x) => x.code === c);
//     return s + (found ? found.discount : 0);
//   }, 0);
//   const baseTotal = pkg.price * travelers;
//   const tax = Math.round(baseTotal * 0.05);
//   const finalTotal = baseTotal + tax - totalSavings;

//   const days = Array.from({ length: pkg.nights }, (_, i) => i);

//   const DAY_DATA = [
//     {
//       label: "Goa", includes: "1 Hotel • 1 Transfer",
//       sections: [
//         { type: "FLIGHT", icon: Plane, detail: "Arrival in Goa", note: "Please Note: You need to reach Goa on your own", transport: true },
//         { type: "TRANSFER", icon: Car, detail: "Airport to hotel in Goa", sub: "Private Transfer — Travel comfortably in a private vehicle from either Goa Airports to your hotel in Goa.", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&fit=crop" },
//         { type: "HOTEL", icon: Hotel, detail: "4 Nights • In Goa", hotelData: { name: "Grand Continent Anjuna A Sarovar Portico Affiliate Hotel", stars: 4, rating: 3.8, ratingLabel: "Very Good", reviews: 268, location: "Anjuna | 1.5 km drive to Anjuna Beach", room: "1 Room | 2 Adults", duration: "12th Jun 2 PM - 16th Jun 11 AM, 4 Nights", roomType: "Standard Double Room (all Day Happy Hours Inclusion)", roomDetail: "(180 sq.ft | King Bed | No View)", meal: "Breakfast is included", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&fit=crop", thumbs: GALLERY_EXTRAS.slice(0, 3) } },
//       ],
//     },
//     { label: "Goa", includes: "1 Activity • 1 Meal", sections: [{ type: "ACTIVITY", icon: Ticket, detail: "9 Hours • In Goa", activityData: { name: "North Goa Sightseeing (Private Transfers from Ex North Goa)", desc: "Spend the day visiting happening markets and beaches in North Goa. Visit beautiful attractions like Fort Aguada, Sinquerim Beach, Calangute Beach, Baga Beach, Anjuna, Vagator Beach and Chapora Fort.", duration: "Duration 9 Hours • Morning", pickup: "Pick up and Drop is included", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=200&fit=crop" } }] },
//     { label: "Goa", includes: "1 Meal", sections: [] },
//     { label: "Goa", includes: "1 Meal", sections: [] },
//     { label: "Goa", includes: "Checkout", sections: [{ type: "CHECKOUT", icon: Hotel, detail: "Checkout from Hotel" }] },
//   ];

//   const SUMMARY_DAYS = [
//     { day: "Day 1", date: "Jun 12, Fri", items: [{ icon: Car, text: "Airport to hotel in Goa" }, { label: "Goa - 4 Nights Stay", isHeader: true }] },
//     { day: "Day 2", date: "Jun 13, Sat", items: [{ icon: Ticket, text: "North Goa Sightseeing (Private Transfers from Ex North Goa)" }, { icon: Coffee, text: "Day Meals: Breakfast : Included at Grand Continent Anjuna A Sarovar Portico Affiliate Hotel , Goa" }] },
//     { day: "Day 3", date: "Jun 14, Sun", items: [{ icon: Coffee, text: "Day Meals: Breakfast : Included at Grand Continent Anjuna A Sarovar Portico Affiliate Hotel , Goa" }] },
//     { day: "Day 4", date: "Jun 15, Mon", items: [{ icon: Coffee, text: "Day Meals: Breakfast : Included at Grand Continent Anjuna A Sarovar Portico Affiliate Hotel , Goa" }] },
//     { day: "Day 5", date: "Jun 16, Tue", items: [{ icon: Coffee, text: "Day Meals: Breakfast : Included at Grand Continent Anjuna A Sarovar Portico Affiliate Hotel , Goa" }, { icon: Hotel, text: "Checkout from Hotel in Goa" }] },
//   ];

//   const handleApplyCoupon = (code) => {
//     if (!appliedCoupons.includes(code)) setAppliedCoupons([...appliedCoupons, code]);
//   };
//   const handleRemoveCoupon = (code) => setAppliedCoupons(appliedCoupons.filter((c) => c !== code));

//   const validateForm = () => {
//     const e = {};
//     if (!form.name.trim()) e.name = "Name required";
//     if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = "Valid email required";
//     if (!form.phone.match(/^\d{10}$/)) e.phone = "10-digit phone required";
//     setFormErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   if (bookingConfirmed) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
//           <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "#e8f8ef" }}>
//             <Check className="w-10 h-10" style={{ color: "#1e8449" }} />
//           </div>
//           <h2 className="text-2xl font-black text-gray-900 mb-2">Booking Confirmed! 🎉</h2>
//           <p className="text-gray-500 text-sm mb-2">Reference: <strong>#{Math.random().toString(36).substr(2,8).toUpperCase()}</strong></p>
//           <div className="text-left p-4 rounded-xl mb-5" style={{ background: "#eaf4fb" }}>
//             {[["Package", pkg.title], ["Traveler", form.name], ["Email", form.email], ["Travelers", travelers], ["Travel Date", travelDate], ["Total Paid", `₹${finalTotal.toLocaleString()}`]].map(([k, v]) => (
//               <div key={k} className="flex justify-between text-sm py-1 border-b border-white/50 last:border-0">
//                 <span className="text-gray-500">{k}</span>
//                 <span className="font-semibold text-gray-800">{v}</span>
//               </div>
//             ))}
//           </div>
//           <button onClick={onBack} className="w-full py-3 rounded-xl font-bold text-white" style={{ background: "linear-gradient(135deg,#1a5276,#1e8449)" }}>
//             Back to Packages
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
//       {/* ── TOP DARK SEARCH BAR ── */}
//       <div style={{ background: "#0d1b2e" }}>
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-stretch border-b border-white/10">
//             {[
//               { label: "STARTING FROM", val: startingFrom || "New Delhi" },
//               { label: "TRAVELLING ON", val: travelDate, type: "date", set: setTravelDate },
//               { label: "ROOMS & GUESTS", val: `${travelers} Adults`, type: "select" },
//             ].map((f) => (
//               <div key={f.label} className="px-5 py-3 border-r border-white/10 min-w-0">
//                 <p className="text-xs font-bold mb-0.5" style={{ color: "#4a9fd4", fontSize: "10px" }}>{f.label}</p>
//                 {f.type === "date" ? (
//                   <input type="date" value={f.val} onChange={(e) => f.set(e.target.value)} className="bg-transparent text-white font-bold text-sm outline-none" />
//                 ) : f.type === "select" ? (
//                   <select value={travelers} onChange={(e) => setTravelers(+e.target.value)} className="bg-transparent text-white font-bold text-sm outline-none cursor-pointer">
//                     {[1,2,3,4,5,6].map((n) => <option key={n} value={n} style={{ color: "#000" }}>{n} Adult{n > 1 ? "s" : ""}</option>)}
//                   </select>
//                 ) : (
//                   <p className="text-white font-bold text-sm">{f.val}</p>
//                 )}
//               </div>
//             ))}
//             <button className="ml-auto px-8 font-black text-white text-sm tracking-widest" style={{ background: "#1e90ff", minWidth: "120px" }}>
//               SEARCH
//             </button>
//           </div>
//           {/* Warning bar */}
//           <div className="flex items-center gap-2 py-2 px-1 text-xs" style={{ background: "#fef9e7", color: "#856404", margin: "0 -16px", padding: "8px 20px" }}>
//             <span>⚠️</span>
//             <span>Please note that the start city of your package is {pkg.location?.split(",")[1]?.trim() || "Goa"}</span>
//             <button className="ml-auto">✕</button>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* Back */}
//         <button onClick={onBack} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-4 transition">
//           <ChevronLeft className="w-4 h-4" /> Back to packages
//         </button>

//         {/* Title Block */}
//         <h1 className="text-2xl font-black text-gray-900 mb-2">{pkg.title}</h1>
//         <div className="flex items-center gap-3 mb-4 flex-wrap">
//           <span className="text-white text-xs font-bold px-2.5 py-1 rounded" style={{ background: "#1e8449" }}>{pkg.nights}N/{pkg.days}D</span>
//           <span className="text-xs font-bold px-2.5 py-1 rounded border border-gray-400 text-gray-600 flex items-center gap-1">
//             ⇌ Flexi Package
//           </span>
//           <span className="text-sm text-gray-500">{pkg.nights}N {pkg.location?.split(",")[1]?.trim() || "Goa"}</span>
//         </div>

//         {/* Image Gallery */}
//         <div className="grid gap-2 mb-6 rounded-xl overflow-hidden" style={{ gridTemplateColumns: "2fr 1fr", height: "320px" }}>
//           <div className="relative">
//             <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
//             <button className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
//               🖼 VIEW GALLERY →
//             </button>
//           </div>
//           <div className="grid grid-rows-2 gap-2">
//             {GALLERY_EXTRAS.slice(0, 2).map((img, i) => (
//               <div key={i} className="relative overflow-hidden">
//                 <img src={img} alt="" className="w-full h-full object-cover" />
//                 {i === 1 && (
//                   <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//                     <span className="text-white font-bold text-sm">+{GALLERY_EXTRAS.length - 2} More</span>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Main layout: left content + right sidebar */}
//         <div className="flex gap-6 items-start">

//           {/* ── LEFT CONTENT ── */}
//           <div className="flex-1 min-w-0">
//             {/* ITINERARY / POLICIES / SUMMARY tabs */}
//             <div className="bg-white rounded-xl mb-4" style={{ border: "1px solid #e8e8e8" }}>
//               <div className="flex items-center border-b border-gray-100">
//                 {["ITINERARY", "POLICIES", "SUMMARY"].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className="px-6 py-4 text-sm font-bold border-b-2 transition"
//                     style={{ color: activeTab === tab ? "#1e90ff" : "#666", borderBottomColor: activeTab === tab ? "#1e90ff" : "transparent" }}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//                 <button className="ml-auto px-4 py-4 flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800">
//                   <Share2 className="w-4 h-4" /> Share
//                 </button>
//               </div>

//               {/* ── ITINERARY TAB ── */}
//               {activeTab === "ITINERARY" && (
//                 <div>
//                   {/* Plan stats tabs */}
//                   <div className="flex items-center gap-0 border-b border-gray-100 overflow-x-auto bg-blue-50/40" style={{ scrollbarWidth: "none" }}>
//                     {[
//                       { label: `${pkg.days} DAY PLAN`, active: activePlanTab === "DAY PLAN" },
//                       { label: `2 TRANSFERS`, active: activePlanTab === "TRANSFERS" },
//                       { label: `1 HOTEL`, active: activePlanTab === "HOTEL" },
//                       { label: `1 ACTIVITY`, active: activePlanTab === "ACTIVITY" },
//                       { label: `4 MEALS`, active: activePlanTab === "MEALS" },
//                     ].map((t) => (
//                       <button
//                         key={t.label}
//                         onClick={() => setActivePlanTab(t.label.split(" ").slice(1).join(" "))}
//                         className="px-5 py-3 text-xs font-bold whitespace-nowrap border rounded-full mx-1 my-2 transition"
//                         style={{
//                           background: t.active ? "#fff" : "transparent",
//                           color: t.active ? "#1a5276" : "#666",
//                           border: t.active ? "1.5px solid #1a5276" : "1.5px solid transparent",
//                         }}
//                       >
//                         {t.label}
//                       </button>
//                     ))}
//                   </div>

//                   {/* Day Plan layout: left days + right detail */}
//                   <div className="flex" style={{ minHeight: "400px" }}>
//                     {/* Left day nav */}
//                     <div className="w-36 border-r border-gray-100 py-4 flex-shrink-0">
//                       <p className="text-xs font-bold text-gray-500 px-4 mb-3">Day Plan</p>
//                       {DAY_DATA.map((_, i) => {
//                         const dateLabel = getDayLabel(i, travelDate);
//                         return (
//                           <button
//                             key={i}
//                             onClick={() => setActiveDay(i)}
//                             className="w-full text-left px-4 py-2.5 flex items-start gap-2 transition"
//                             style={{ background: activeDay === i ? "#eaf4fb" : "transparent" }}
//                           >
//                             <div className="flex flex-col items-center mt-1">
//                               <div className="w-3 h-3 rounded-full border-2 flex-shrink-0" style={{ borderColor: activeDay === i ? "#1e90ff" : "#ccc", background: activeDay === i ? "#1e90ff" : "white" }} />
//                               {i < DAY_DATA.length - 1 && <div className="w-0.5 h-6 bg-gray-200 mt-1" />}
//                             </div>
//                             <div>
//                               <p className="text-xs font-bold" style={{ color: activeDay === i ? "#1e90ff" : "#333" }}>{dateLabel}</p>
//                             </div>
//                           </button>
//                         );
//                       })}
//                     </div>

//                     {/* Right day detail */}
//                     <div className="flex-1 p-4">
//                       {DAY_DATA[activeDay] && (
//                         <>
//                           <div className="flex items-center gap-3 mb-4">
//                             <span className="text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: "#e74c3c" }}>
//                               Day {activeDay + 1}
//                             </span>
//                             <span className="font-semibold text-gray-700 text-sm">{DAY_DATA[activeDay].label}</span>
//                             <span className="text-xs text-gray-500">INCLUDED: 🏨 {DAY_DATA[activeDay].includes}</span>
//                           </div>

//                           {DAY_DATA[activeDay].sections.length === 0 && (
//                             <div className="flex items-center gap-3 p-4 rounded-xl mb-3" style={{ background: "#eaf4fb" }}>
//                               <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#1e90ff20" }}>
//                                 <Zap className="w-4 h-4" style={{ color: "#1e90ff" }} />
//                               </div>
//                               <div>
//                                 <p className="font-semibold text-sm text-gray-800">Add Activities to your day</p>
//                                 <p className="text-xs text-gray-500">Spend the day at leisure or add an activity to your day</p>
//                               </div>
//                               <button className="ml-auto text-xs font-bold" style={{ color: "#1e90ff" }}>ADD TO DAY</button>
//                             </div>
//                           )}

//                           {DAY_DATA[activeDay].sections.map((section, si) => (
//                             <div key={si} className="mb-4">
//                               {/* Section header */}
//                               <div className="flex items-center justify-between py-2 border-l-4 pl-3 mb-3" style={{ borderColor: "#1e90ff" }}>
//                                 <div className="flex items-center gap-2">
//                                   <section.icon className="w-4 h-4 text-gray-500" />
//                                   <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">{section.type}</span>
//                                   {section.detail && <span className="text-xs text-gray-400">• {section.detail}</span>}
//                                 </div>
//                                 {section.type !== "FLIGHT" && section.type !== "CHECKOUT" && (
//                                   <div className="flex gap-3">
//                                     <button className="text-xs font-bold" style={{ color: "#e74c3c" }}>REMOVE</button>
//                                     <button className="text-xs font-bold" style={{ color: "#1e90ff" }}>CHANGE</button>
//                                   </div>
//                                 )}
//                               </div>

//                               {/* FLIGHT section */}
//                               {section.type === "FLIGHT" && (
//                                 <div className="pl-3">
//                                   <p className="text-sm text-gray-700 mb-1">{section.detail}</p>
//                                   {section.note && <p className="text-sm font-semibold mb-2" style={{ color: "#e74c3c" }}>{section.note}</p>}
//                                   {section.transport && (
//                                     <div className="flex items-center gap-2 p-3 rounded-lg text-sm" style={{ background: "#eaf4fb" }}>
//                                       <span>There are more ways to reach your destination</span>
//                                       <button className="font-bold" style={{ color: "#1e90ff" }}>VIEW TRANSPORT OPTION(S)</button>
//                                     </div>
//                                   )}
//                                 </div>
//                               )}

//                               {/* TRANSFER section */}
//                               {section.type === "TRANSFER" && section.img && (
//                                 <div className="flex gap-3 pl-3">
//                                   <img src={section.img} alt="" className="w-24 h-20 object-cover rounded-lg flex-shrink-0" />
//                                   <div>
//                                     <p className="font-bold text-sm text-gray-900 mb-1">{section.sub?.split("—")[0]}</p>
//                                     <p className="text-xs text-gray-500">{section.sub?.split("—")[1]}</p>
//                                     <p className="text-xs text-gray-400 mt-1 flex items-center gap-1"><MapPin className="w-3 h-3" /> Airport to Hotel</p>
//                                   </div>
//                                 </div>
//                               )}

//                               {/* HOTEL section */}
//                               {section.type === "HOTEL" && section.hotelData && (
//                                 <div className="pl-3">
//                                   <div className="flex gap-3">
//                                     <div className="flex-shrink-0">
//                                       <img src={section.hotelData.img} alt="" className="w-44 h-32 object-cover rounded-lg mb-2" />
//                                       <div className="flex gap-1">
//                                         {section.hotelData.thumbs.map((t, ti) => (
//                                           <img key={ti} src={t} alt="" className="w-12 h-10 object-cover rounded" />
//                                         ))}
//                                         <div className="w-12 h-10 rounded bg-gray-800 flex items-center justify-center cursor-pointer">
//                                           <span className="text-white text-xs font-bold">1+<br/>View All</span>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div className="flex-1">
//                                       <div className="flex items-center gap-2 mb-1">
//                                         <span className="text-white text-xs font-bold px-2 py-0.5 rounded" style={{ background: "#1e8449" }}>{section.hotelData.rating}</span>
//                                         <span className="text-sm font-bold text-gray-700">{section.hotelData.ratingLabel}</span>
//                                         <span className="text-xs text-gray-400">({section.hotelData.reviews} Ratings)</span>
//                                       </div>
//                                       <h4 className="font-bold text-gray-900 text-sm mb-1">{section.hotelData.name} {"★".repeat(section.hotelData.stars)}</h4>
//                                       <p className="text-xs text-gray-500 mb-1">{section.hotelData.location}</p>
//                                       <p className="text-xs text-gray-500 mb-1 flex items-center gap-1"><Users className="w-3 h-3" /> {section.hotelData.room}</p>
//                                       <p className="text-xs text-gray-500 mb-2 flex items-center gap-1"><Clock className="w-3 h-3" /> {section.hotelData.duration}</p>
//                                       <div className="p-2.5 rounded-lg text-xs text-gray-600 mb-2" style={{ background: "#eaf4fb" }}>
//                                         Guests appreciate the cozy ambiance and well-maintained property, highlighting its great location near Anjuna beach...
//                                         <button className="font-bold ml-1" style={{ color: "#1e90ff" }}>Read more</button>
//                                       </div>
//                                       <p className="text-sm font-bold text-gray-800">{section.hotelData.roomType} <button className="text-xs font-bold ml-1" style={{ color: "#1e90ff" }}>More Room Options</button></p>
//                                       <p className="text-xs text-gray-500">{section.hotelData.roomDetail}</p>
//                                       <p className="text-xs text-gray-500 flex items-center gap-1 mt-1"><Coffee className="w-3 h-3" /> {section.hotelData.meal}</p>
//                                     </div>
//                                   </div>
//                                   {/* Destination Guide */}
//                                   <div className="mt-4 p-4 rounded-xl" style={{ background: "#eaf4fb" }}>
//                                     <h4 className="font-bold text-gray-800 mb-2">Your {DAY_DATA[activeDay].label} Destination Guide</h4>
//                                     <p className="text-xs text-gray-600 mb-3">Immerse yourself in the essence of {DAY_DATA[activeDay].label} on this {pkg.days}-day getaway! Unwind amid the calm of beautiful beaches, vibrant culture, and memorable experiences.</p>
//                                     <div className="grid grid-cols-2 gap-4 mb-3">
//                                       <div>
//                                         <p className="font-bold text-sm text-gray-800 mb-1">What To Expect</p>
//                                         <p className="text-xs text-gray-600">Rejoice in the cool nights and occasional rains during summers. Explore secluded beaches and visit architectural gems.</p>
//                                       </div>
//                                       <div>
//                                         <p className="font-bold text-sm text-gray-800 mb-1">Things You Will Love</p>
//                                         <p className="text-xs text-gray-600">Exploring secluded beaches and architectural gems in {DAY_DATA[activeDay].label}.</p>
//                                       </div>
//                                     </div>
//                                     <div className="flex items-center gap-3 pt-3 border-t border-blue-200">
//                                       <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&fit=crop" alt="" className="w-10 h-10 rounded-full object-cover" />
//                                       <div>
//                                         <p className="text-xs text-gray-500">Curated By</p>
//                                         <p className="text-sm font-bold text-gray-800">Travel Expert</p>
//                                         <p className="text-xs text-gray-500">11+ Years Experience</p>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               )}

//                               {/* ACTIVITY section */}
//                               {section.type === "ACTIVITY" && section.activityData && (
//                                 <div className="flex gap-3 pl-3">
//                                   <img src={section.activityData.img} alt="" className="w-36 h-28 object-cover rounded-lg flex-shrink-0" />
//                                   <div>
//                                     <p className="font-bold text-sm text-gray-900 mb-1">{section.activityData.name}</p>
//                                     <p className="text-xs text-gray-500 mb-2 line-clamp-3">{section.activityData.desc}</p>
//                                     <p className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3" /> {section.activityData.duration}</p>
//                                     <p className="text-xs text-gray-500 flex items-center gap-1"><Car className="w-3 h-3" /> {section.activityData.pickup}</p>
//                                   </div>
//                                 </div>
//                               )}

//                               {/* CHECKOUT */}
//                               {section.type === "CHECKOUT" && (
//                                 <div className="pl-3 text-sm text-gray-600 font-medium">Checkout from Hotel</div>
//                               )}
//                             </div>
//                           ))}

//                           {/* Add Activity CTA */}
//                           {DAY_DATA[activeDay].sections.length > 0 && (
//                             <div className="flex items-center gap-3 p-4 rounded-xl mt-3" style={{ background: "#eaf4fb" }}>
//                               <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#1e90ff20" }}>
//                                 <Zap className="w-4 h-4" style={{ color: "#1e90ff" }} />
//                               </div>
//                               <div>
//                                 <p className="font-semibold text-sm text-gray-800">Add Activities to your day</p>
//                                 <p className="text-xs text-gray-500">Spend the day at leisure or add an activity, transfer or meal to your day</p>
//                               </div>
//                               <button className="ml-auto text-xs font-bold" style={{ color: "#1e90ff" }}>ADD TO DAY</button>
//                             </div>
//                           )}
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* ── POLICIES TAB ── */}
//               {activeTab === "POLICIES" && (
//                 <div className="p-6 space-y-6">
//                   {/* Cancellation */}
//                   <div>
//                     <h3 className="text-lg font-bold text-gray-900 mb-2">Cancellation & Date Change</h3>
//                     <h4 className="font-bold text-gray-800 mb-1">Package Cancellation Policy</h4>
//                     <p className="text-sm font-semibold mb-1" style={{ color: "#1e8449" }}>Cancellation Possible till 04 Jun.*</p>
//                     <p className="text-sm text-gray-500 mb-3">After that Package is <strong>Non-Refundable.</strong></p>
//                     {/* Timeline bar */}
//                     <div className="relative h-2 rounded-full mb-3" style={{ background: "linear-gradient(to right, #1e8449 60%, #e74c3c 40%)" }}>
//                       <div className="absolute left-0 -top-1 w-4 h-4 rounded-full border-2 border-white bg-green-500 shadow" />
//                       <div className="absolute right-0 -top-1 w-4 h-4 rounded-full border-2 border-white bg-red-500 shadow" />
//                     </div>
//                     <div className="flex justify-between text-xs mb-4">
//                       <div><p className="font-bold" style={{ color: "#1e8449" }}>Till 04 Jun 26</p><p className="text-gray-500">₹0 Cancellation Fee</p></div>
//                       <div className="text-right"><p className="font-bold" style={{ color: "#e74c3c" }}>After 04 Jun 26</p><p className="text-gray-500">Non Refundable</p></div>
//                     </div>
//                     {["These are non-refundable amounts as per the current components attached.", "Please check the exact cancellation and date change policy on the review page before proceeding further.", "TCS once collected cannot be refunded in case of any cancellation / modification.", "Cancellation charges shown is exclusive of all taxes."].map((p, i) => (
//                       <div key={i} className="flex items-start gap-2 text-xs text-gray-600 mb-2">
//                         <span className="w-2 h-2 rounded-full bg-green-500 mt-1 flex-shrink-0" />
//                         <span>{p}</span>
//                       </div>
//                     ))}
//                   </div>
//                   {/* Date Change */}
//                   <div>
//                     <h4 className="font-bold text-gray-800 mb-1">Package Date Change Policy</h4>
//                     <p className="text-sm font-semibold mb-1" style={{ color: "#1e8449" }}>Date Change Possible till 04 Jun.*</p>
//                     <p className="text-sm text-gray-500 mb-3">After that Package date cannot be changed.</p>
//                     <div className="relative h-2 rounded-full mb-3" style={{ background: "linear-gradient(to right, #1e8449 60%, #e74c3c 40%)" }}>
//                       <div className="absolute left-0 -top-1 w-4 h-4 rounded-full border-2 border-white bg-green-500 shadow" />
//                       <div className="absolute right-0 -top-1 w-4 h-4 rounded-full border-2 border-white bg-red-500 shadow" />
//                     </div>
//                     <div className="flex justify-between text-xs mb-4">
//                       <div><p className="font-bold" style={{ color: "#1e8449" }}>Till 04 Jun 26</p><p className="text-gray-500">₹0 Date Change Fee</p></div>
//                       <div className="text-right"><p className="font-bold" style={{ color: "#e74c3c" }}>After 04 Jun 26</p><p className="text-gray-500">Date cannot be changed</p></div>
//                     </div>
//                   </div>
//                   {/* Terms */}
//                   <div>
//                     <h4 className="font-bold text-gray-800 mb-3">Terms and Conditions</h4>
//                     <p className="text-sm font-semibold text-gray-700 mb-2">Exclusions</p>
//                     {["Expenses of personal nature", "Mentioned cost is not valid between 6 pm and 8 am", "Anything not mentioned under inclusions"].map((e, i) => (
//                       <div key={i} className="flex items-start gap-2 text-xs text-gray-600 mb-2">
//                         <span className="w-2 h-2 rounded-full border border-gray-400 mt-1 flex-shrink-0" />
//                         <span>{e}</span>
//                       </div>
//                     ))}
//                     <p className="text-sm font-semibold text-gray-700 mb-2 mt-3">General Terms</p>
//                     {["Standard check-in time at the hotel is normally 2:00 pm and check-out is 11:00 am.", "A maximum of 3 adults are allowed in one room.", "Booking rates are subject to change without prior notice.", "Airline seats and hotel rooms are subject to availability at the time of booking."].map((t, i) => (
//                       <div key={i} className="flex items-start gap-2 text-xs text-gray-600 mb-2">
//                         <span className="w-2 h-2 rounded-full border border-gray-400 mt-1 flex-shrink-0" />
//                         <span>{t}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* ── SUMMARY TAB ── */}
//               {activeTab === "SUMMARY" && (
//                 <div className="p-6">
//                   <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
//                     <Car className="w-3 h-3" /> Airport to hotel in {DAY_DATA[0].label}
//                   </div>
//                   {/* City header */}
//                   <div className="px-4 py-2 rounded mb-3 font-semibold text-sm" style={{ background: "#f5e6d3" }}>
//                     {DAY_DATA[0].label} - {pkg.nights} Nights Stay
//                   </div>
//                   <table className="w-full text-xs border-collapse mb-3">
//                     <tbody>
//                       {SUMMARY_DAYS.map((row, ri) => (
//                         <tr key={ri} className="border-b border-gray-100">
//                           <td className="py-2 pr-3 font-bold text-gray-700 w-20 align-top">{row.day}<br /><span className="font-normal text-gray-400">{row.date}</span></td>
//                           <td className="py-2">
//                             {row.items.filter(i => !i.isHeader).map((item, ii) => (
//                               <div key={ii} className="flex items-start gap-1.5 mb-1">
//                                 <item.icon className="w-3 h-3 mt-0.5 flex-shrink-0 text-gray-400" />
//                                 <span className="text-gray-600">{item.text}</span>
//                               </div>
//                             ))}
//                           </td>
//                           <td className="py-2 pl-3 align-top text-gray-500 w-40">
//                             {ri === 1 && <div className="flex items-start gap-1.5"><Coffee className="w-3 h-3 mt-0.5 flex-shrink-0" /><span>Breakfast: Grand Continent Hotel</span></div>}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                   <div className="flex items-center gap-2 text-xs text-gray-400">
//                     <Car className="w-3 h-3" /> Hotel in {DAY_DATA[0].label} to Airport
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* ── RIGHT SIDEBAR ── */}
//           <div className="flex-shrink-0 w-80 sticky top-4">
//             <div className="bg-white rounded-xl shadow-md overflow-hidden" style={{ border: "1px solid #e8e8e8" }}>

//               {/* Price block */}
//               <div className="p-4 border-b border-gray-100">
//                 <div className="flex items-center gap-2 mb-1">
//                   <span className="text-sm text-gray-400 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
//                   <span className="text-xs font-bold" style={{ color: "#e74c3c" }}>{discount}% OFF</span>
//                 </div>
//                 <div className="flex items-baseline gap-1">
//                   <span className="text-2xl font-black" style={{ color: "#222" }}>₹{pkg.price.toLocaleString()}</span>
//                   <span className="text-sm text-gray-500">/Adult</span>
//                 </div>
//                 <p className="text-xs text-gray-400 mb-3">Excluding applicable taxes</p>

//                 <div className="flex items-start gap-2 p-2.5 rounded-lg mb-3" style={{ background: "#eafaf1" }}>
//                   <span className="text-green-500 text-base">🟢</span>
//                   <div>
//                     <p className="text-xs font-bold text-gray-800">Book this package only @ ₹1</p>
//                     <p className="text-xs" style={{ color: "#1e90ff" }}>Next installment payable by 01 Jun '26</p>
//                   </div>
//                 </div>

//                 {/* Payment form inline */}
//                 {!showPaymentForm ? (
//                   <button
//                     onClick={() => setShowPaymentForm(true)}
//                     className="w-full py-3 rounded-lg font-bold text-white text-sm tracking-wide"
//                     style={{ background: "#1e90ff" }}
//                   >
//                     PROCEED TO PAYMENT
//                   </button>
//                 ) : (
//                   <div className="space-y-2">
//                     {[{ label: "Full Name", key: "name", type: "text", placeholder: "Your name" }, { label: "Email", key: "email", type: "email", placeholder: "you@email.com" }, { label: "Phone", key: "phone", type: "tel", placeholder: "10-digit mobile" }].map((f) => (
//                       <div key={f.key}>
//                         <label className="text-xs font-semibold text-gray-600">{f.label}</label>
//                         <input
//                           type={f.type}
//                           placeholder={f.placeholder}
//                           value={form[f.key]}
//                           onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
//                           className="w-full px-3 py-2 rounded border text-sm outline-none"
//                           style={{ border: formErrors[f.key] ? "1.5px solid #e74c3c" : "1.5px solid #e0e0e0" }}
//                         />
//                         {formErrors[f.key] && <p className="text-xs text-red-500">{formErrors[f.key]}</p>}
//                       </div>
//                     ))}
//                     <button
//                       onClick={() => { if (validateForm()) setBookingConfirmed(true); }}
//                       className="w-full py-3 rounded-lg font-bold text-white text-sm"
//                       style={{ background: "#1e90ff" }}
//                     >
//                       CONFIRM BOOKING →
//                     </button>
//                     <button onClick={() => setShowPaymentForm(false)} className="w-full py-2 text-xs text-gray-400 hover:text-gray-600">Cancel</button>
//                   </div>
//                 )}
//               </div>

//               {/* Coupons & Offers */}
//               <div className="p-4 border-b border-gray-100">
//                 <h4 className="font-bold text-gray-800 mb-3">Coupons & Offers</h4>
//                 {/* EMI */}
//                 <div className="flex items-start gap-2 p-2.5 rounded-lg mb-3" style={{ background: "#f0f0ff", border: "1px solid #e0e0ff" }}>
//                   <span className="text-lg">💳</span>
//                   <div>
//                     <p className="text-xs font-bold text-gray-800">No cost EMI @ ₹3,200</p>
//                     <p className="text-xs text-gray-500">Book your holidays with <span style={{ color: "#1e90ff" }}>Easy EMI options.</span></p>
//                   </div>
//                 </div>
//                 {/* Coupon input */}
//                 <div className="flex items-center justify-between mb-3">
//                   <span className="text-sm text-gray-600">Have a Coupon Code?</span>
//                   <button className="text-sm font-bold" style={{ color: "#1e90ff" }}>Enter Code</button>
//                 </div>
//                 {/* Coupons list */}
//                 {COUPONS.slice(0, showCoupons ? 2 : COUPONS.length).map((c) => {
//                   const isApplied = appliedCoupons.includes(c.code);
//                   return (
//                     <div key={c.code} className="flex items-center justify-between p-3 rounded-lg mb-2" style={{ background: isApplied ? "#eaf4fb" : "#f7f8fa", border: isApplied ? "1.5px solid #1e90ff40" : "1px solid #eee" }}>
//                       <div className="flex items-start gap-2">
//                         <span className="text-base">🏷️</span>
//                         <div>
//                           <p className="text-xs font-bold text-gray-800">{c.code}</p>
//                           <p className="text-xs text-gray-500">{isApplied ? "Coupon Applied Successfully!" : c.desc}</p>
//                         </div>
//                       </div>
//                       <div className="text-right flex-shrink-0">
//                         <p className="text-sm font-bold" style={{ color: "#e74c3c" }}>- ₹{c.discount}</p>
//                         {isApplied ? (
//                           <button onClick={() => handleRemoveCoupon(c.code)} className="text-xs font-bold" style={{ color: "#e74c3c" }}>REMOVE</button>
//                         ) : (
//                           <button onClick={() => handleApplyCoupon(c.code)} className="text-xs font-bold" style={{ color: "#1e90ff" }}>APPLY</button>
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}
//                 <button onClick={() => setShowCoupons(!showCoupons)} className="text-xs font-bold mt-1" style={{ color: "#1e90ff" }}>
//                   {showCoupons ? "SHOW MORE ▼" : "SHOW LESS ▲"}
//                 </button>
//               </div>

//               {/* Price breakdown */}
//               <div className="p-4 border-b border-gray-100">
//                 <div className="space-y-1.5 text-sm">
//                   <div className="flex justify-between text-gray-600"><span>₹{pkg.price.toLocaleString()} × {travelers} Adult(s)</span><span>₹{baseTotal.toLocaleString()}</span></div>
//                   <div className="flex justify-between text-green-600"><span>Coupon Savings</span><span>-₹{totalSavings.toLocaleString()}</span></div>
//                   <div className="flex justify-between text-gray-600"><span>Taxes & Fees (5%)</span><span>₹{tax.toLocaleString()}</span></div>
//                   <div className="border-t border-dashed border-gray-200 my-2" />
//                   <div className="flex justify-between font-bold text-gray-900"><span>Total</span><span style={{ color: "#1a5276" }}>₹{finalTotal.toLocaleString()}</span></div>
//                 </div>
//               </div>

//               {/* Best Deals / Login */}
//               <div className="p-4">
//                 <h4 className="font-bold text-gray-800 mb-3">Best Deals For You</h4>
//                 <div className="p-3 rounded-lg" style={{ background: "linear-gradient(135deg, #1e8449, #27ae60)" }}>
//                   <div className="flex items-center justify-between mb-2">
//                     <p className="text-xs text-white/80 italic">For maximum benefits</p>
//                     <button className="flex items-center gap-1 bg-white text-xs font-bold px-3 py-1 rounded-full" style={{ color: "#1e8449" }}>
//                       LOGIN NOW →
//                     </button>
//                   </div>
//                   <div className="grid grid-cols-2 gap-1 text-xs text-white/90">
//                     {["• Redeem wallet", "• Book faster", "• Get special deals", "• Continue in any device"].map((t) => (
//                       <span key={t}>{t}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ═══════════════════════════════════════════════════════════════════════════════
// // FILTER SECTION COMPONENT
// // ═══════════════════════════════════════════════════════════════════════════════
// const FilterSection = ({ title, children, defaultOpen = true }) => {
//   const [open, setOpen] = useState(defaultOpen);
//   return (
//     <div className="border-b border-gray-100 py-4">
//       <button className="w-full flex items-center justify-between mb-3" onClick={() => setOpen(!open)}>
//         <span className="font-bold text-gray-800 text-sm">{title}</span>
//         <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
//       </button>
//       {open && children}
//     </div>
//   );
// };

// // ═══════════════════════════════════════════════════════════════════════════════
// // PACKAGE CARD COMPONENT
// // ═══════════════════════════════════════════════════════════════════════════════
// const PackageCard = ({ exp, onBook }) => {
//   const [liked, setLiked] = useState(false);
//   const discount = Math.round(((exp.originalPrice - exp.price) / exp.originalPrice) * 100);
//   return (
//     <div className="bg-white rounded-xl overflow-hidden group cursor-pointer transition-all hover:shadow-xl" style={{ border: "1px solid #e8e8e8" }}>
//       <div className="relative overflow-hidden" style={{ height: "200px" }}>
//         <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//         <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-3">
//           <div className="flex flex-col gap-1.5">
//             <span className="text-white text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1 w-fit" style={{ background: "#e74c3c" }}>
//               <Percent className="w-3 h-3" />{discount}% OFF
//             </span>
//             {exp.availableSlots <= 5 && (
//               <span className="text-white text-xs font-bold px-2.5 py-1 rounded w-fit" style={{ background: "#e67e22" }}>🔥 Only {exp.availableSlots} left</span>
//             )}
//           </div>
//           <button onClick={(e) => { e.stopPropagation(); setLiked(!liked); }} className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition">
//             <Heart className={`w-4 h-4 transition-colors ${liked ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
//           </button>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-3">
//           <span className="text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1" style={{ background: "rgba(0,0,0,0.65)" }}>
//             <Clock className="w-3 h-3" />{exp.nights}N/{exp.days}D
//           </span>
//           <span className="text-white text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(26,82,118,0.85)" }}>2 More Options</span>
//         </div>
//       </div>
//       <div className="p-4">
//         <h3 className="font-bold text-gray-900 text-base leading-tight mb-1 line-clamp-1">{exp.title}</h3>
//         <p className="text-xs text-gray-500 mb-3 flex items-center gap-1"><MapPin className="w-3 h-3 flex-shrink-0" /><span className="line-clamp-1">{exp.location}</span></p>
//         <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-3">
//           {(exp.inclusions || []).slice(0, 4).map((inc, i) => (
//             <span key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
//               <span className="text-base leading-none">{INCLUSIONS_ICONS[inc] || "✅"}</span>{inc}
//             </span>
//           ))}
//         </div>
//         {exp.features && exp.features.slice(0, 2).map((f, i) => (
//           <p key={i} className="text-xs flex items-center gap-1 mb-0.5" style={{ color: "#1e8449" }}><Check className="w-3 h-3 flex-shrink-0" /> {f}</p>
//         ))}
//         <div className="border-t border-dashed border-gray-200 my-3" />
//         <div className="flex items-end justify-between gap-2">
//           <div>
//             <div className="flex items-center gap-1.5 mb-1">
//               <span className="flex items-center gap-1 px-2 py-0.5 rounded text-white text-xs font-bold" style={{ background: "#1e8449" }}>
//                 <Star className="w-3 h-3 fill-white" />{exp.rating}
//               </span>
//               <span className="text-xs text-gray-400">({exp.reviews} reviews)</span>
//             </div>
//             <p className="text-xs text-gray-400">Starting from</p>
//             <div className="flex items-baseline gap-1.5">
//               <span className="text-xl font-black" style={{ color: "#1a5276" }}>₹{exp.price.toLocaleString()}</span>
//               <span className="text-xs text-gray-400 line-through">₹{exp.originalPrice.toLocaleString()}</span>
//             </div>
//             <p className="text-xs text-gray-400">per person</p>
//           </div>
//           <button onClick={() => onBook(exp)} className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-white text-sm font-bold transition hover:opacity-90 flex-shrink-0" style={{ background: "linear-gradient(135deg, #1a5276, #1e8449)" }}>
//             Book Now <ArrowRight className="w-3.5 h-3.5" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ═══════════════════════════════════════════════════════════════════════════════
// // MAIN COMPONENT
// // ═══════════════════════════════════════════════════════════════════════════════
// const TripBestGallery = () => {
//   const [experiences, setExperiences] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [startingFrom, setStartingFrom] = useState("New Delhi");
//   const [goingTo, setGoingTo] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [guests, setGuests] = useState("");
//   const [selectedThemes, setSelectedThemes] = useState([]);
//   const [selectedBudgets, setSelectedBudgets] = useState([]);
//   const [selectedDurations, setSelectedDurations] = useState([]);
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [buyNowPay, setBuyNowPay] = useState(false);
//   const [sortBy, setSortBy] = useState("Popular");
//   const [activeTab, setActiveTab] = useState("All Packages");
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [detailPkg, setDetailPkg] = useState(null); // ← detail page

//   useEffect(() => {
//     const fetch = async () => {
//       try {
//         setLoading(true);
//         const res = await getHolidayDataAPI();
//         const apiData = res?.data?.data || [];
//         setExperiences(apiData.map((item) => ({
//           id: item._id,
//           title: item.parkName,
//           location: `${item.address?.area || ""}, ${item.address?.city || ""}`,
//           category: item.propertyType || "attractions",
//           rating: item.rating || 4.2,
//           reviews: item.totalReviews || 120,
//           image: item.thumbnailImage || "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&fit=crop",
//           price: item.pricePerNight || 15000,
//           originalPrice: (item.pricePerNight || 15000) + 3000,
//           nights: item.nights || 3,
//           days: (item.nights || 3) + 1,
//           inclusions: item.inclusions || ["Breakfast", "Hotel", "Sightseeing", "Transfer"],
//           features: item.activities || ["Ha Long Bay Cruise", "Walking Tour"],
//           availableSlots: item.totalRooms || 8,
//           amenities: item.amenities || [],
//         })));
//       } catch (err) { setError(err.message || "Failed"); }
//       finally { setLoading(false); }
//     };
//     fetch();
//   }, []);

//   const toggleArr = (arr, setArr, val) => setArr(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
//   const sortedExperiences = [...experiences].sort((a, b) => {
//     if (sortBy === "Price: Low to High") return a.price - b.price;
//     if (sortBy === "Price: High to Low") return b.price - a.price;
//     if (sortBy === "Highest Rated") return b.rating - a.rating;
//     return 0;
//   });

//   // ── Show detail page ──────────────────────────────────────────────────────
//   if (detailPkg) {
//     return <PackageDetailPage pkg={detailPkg} onBack={() => setDetailPkg(null)} startingFrom={startingFrom} />;
//   }

//   // ── Country listing view ──────────────────────────────────────────────────
//   if (selectedCountry) {
//     return (
//       <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
//         <div style={{ background: "#0a2240" }}>
//           <div className="max-w-7xl mx-auto px-4">
//             <div className="grid grid-cols-2 md:grid-cols-5 border-b border-white/10">
//               {[{ label: "STARTING FROM", val: startingFrom, set: setStartingFrom, placeholder: "New Delhi" }, { label: "GOING TO", val: goingTo || selectedCountry.name, set: setGoingTo, placeholder: "Vietnam" }, { label: "STARTING DATE", val: startDate, set: setStartDate, placeholder: "Select", type: "date" }, { label: "ROOMS & GUESTS", val: guests, set: setGuests, placeholder: "Select" }].map((f) => (
//                 <div key={f.label} className="px-5 py-4 border-r border-white/10 hover:bg-white/5 transition cursor-pointer">
//                   <p className="text-xs font-bold mb-1" style={{ color: "#4a9fd4", fontSize: "10px" }}>{f.label}</p>
//                   {f.type === "date" ? <input type="date" value={f.val} onChange={(e) => f.set(e.target.value)} className="bg-transparent text-white font-semibold text-sm outline-none w-full" />
//                     : <input value={f.val} onChange={(e) => f.set(e.target.value)} placeholder={f.placeholder} className="bg-transparent text-white font-semibold text-sm outline-none w-full placeholder-white/50" />}
//                 </div>
//               ))}
//               <button className="flex items-center justify-center font-bold text-white text-sm px-6 py-4 hover:opacity-90" style={{ background: "#1e90ff" }}>
//                 <Search className="w-4 h-4 mr-2" /> SEARCH
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="relative overflow-hidden" style={{ height: "220px" }}>
//           <img src={selectedCountry.img} alt={selectedCountry.name} className="w-full h-full object-cover" />
//           <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />
//           <div className="absolute inset-0 flex items-center px-8">
//             <div>
//               <button onClick={() => setSelectedCountry(null)} className="flex items-center gap-1 text-white/70 text-sm mb-2 hover:text-white transition">
//                 <ChevronLeft className="w-4 h-4" /> Back to all destinations
//               </button>
//               <h1 className="text-3xl font-black text-white">{selectedCountry.name} Packages</h1>
//               <p className="text-white/80 text-sm mt-1">{selectedCountry.packages} packages available</p>
//             </div>
//           </div>
//         </div>
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           <div className="flex gap-6">
//             <div className="flex-shrink-0 w-64 hidden md:block">
//               <div className="bg-white rounded-xl sticky top-4" style={{ border: "1px solid #e8e8e8" }}>
//                 <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
//                   <h3 className="font-bold text-gray-800">FILTERS</h3>
//                   <button className="text-xs font-semibold" style={{ color: "#1e8449" }}>Reset All</button>
//                 </div>
//                 <div className="px-4 overflow-y-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
//                   <FilterSection title="Buy Now, Pay Later">
//                     <label className="flex items-center justify-between text-sm text-gray-600 cursor-pointer">
//                       <div className="flex items-center gap-2"><input type="checkbox" checked={buyNowPay} onChange={(e) => setBuyNowPay(e.target.checked)} className="w-4 h-4 rounded" />Book @ ₹2,000</div>
//                       <span className="text-gray-400 text-xs">(1)</span>
//                     </label>
//                   </FilterSection>
//                   <FilterSection title="Themes">
//                     <div className="space-y-2">{THEMES.map((t) => (<label key={t} className="flex items-center justify-between text-sm text-gray-600 cursor-pointer"><div className="flex items-center gap-2"><input type="checkbox" checked={selectedThemes.includes(t)} onChange={() => toggleArr(selectedThemes, setSelectedThemes, t)} className="w-4 h-4 rounded" />{t}</div><span className="text-gray-400 text-xs">({Math.floor(Math.random() * 20) + 1})</span></label>))}</div>
//                   </FilterSection>
//                   <FilterSection title="Package Type">
//                     <div className="flex flex-wrap gap-2">{PACKAGE_TYPES.map((t) => (<button key={t} onClick={() => toggleArr(selectedTypes, setSelectedTypes, t)} className="px-3 py-1.5 rounded-lg text-xs font-medium border transition" style={{ background: selectedTypes.includes(t) ? "#1a5276" : "white", color: selectedTypes.includes(t) ? "white" : "#555", borderColor: selectedTypes.includes(t) ? "#1a5276" : "#ddd" }}>{t}</button>))}</div>
//                   </FilterSection>
//                   <FilterSection title="Duration">
//                     <div className="space-y-2">{DURATION_OPTIONS.map((d) => (<label key={d} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"><input type="checkbox" checked={selectedDurations.includes(d)} onChange={() => toggleArr(selectedDurations, setSelectedDurations, d)} className="w-4 h-4 rounded" />{d}</label>))}</div>
//                   </FilterSection>
//                   <FilterSection title="Budget Per Person">
//                     <div className="space-y-2">{BUDGET_OPTIONS.map((b) => (<label key={b} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"><input type="checkbox" checked={selectedBudgets.includes(b)} onChange={() => toggleArr(selectedBudgets, setSelectedBudgets, b)} className="w-4 h-4 rounded" />{b}</label>))}</div>
//                   </FilterSection>
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1 min-w-0">
//               <div className="bg-white rounded-xl mb-4 overflow-hidden" style={{ border: "1px solid #e8e8e8" }}>
//                 <div className="flex items-center border-b border-gray-100 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
//                   <button className="p-3 hover:bg-gray-50 flex-shrink-0"><ChevronLeft className="w-4 h-4 text-gray-400" /></button>
//                   {PACKAGE_TABS.map((tab) => (<button key={tab} onClick={() => setActiveTab(tab)} className="px-4 py-3 text-sm font-semibold whitespace-nowrap flex-shrink-0 border-b-2 transition" style={{ color: activeTab === tab ? "#1e8449" : "#555", borderBottomColor: activeTab === tab ? "#1e8449" : "transparent" }}>{tab} {tab === "All Packages" && `(${sortedExperiences.length})`}</button>))}
//                   <button className="p-3 hover:bg-gray-50 flex-shrink-0 ml-auto"><ChevronRight className="w-4 h-4 text-gray-400" /></button>
//                 </div>
//                 <div className="px-4 py-3 flex items-center justify-end gap-2">
//                   <span className="text-sm text-gray-500">Sorted By:</span>
//                   <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="text-sm font-semibold text-gray-800 border border-gray-200 rounded-lg px-3 py-1.5 outline-none">
//                     {["Popular", "Price: Low to High", "Price: High to Low", "Highest Rated"].map((s) => <option key={s}>{s}</option>)}
//                   </select>
//                 </div>
//               </div>
//               {loading ? (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[1,2,3,4].map((i) => (<div key={i} className="bg-white rounded-xl overflow-hidden animate-pulse"><div className="h-48 bg-gray-200" /><div className="p-4 space-y-3"><div className="h-4 bg-gray-200 rounded w-3/4" /><div className="h-3 bg-gray-200 rounded w-1/2" /></div></div>))}</div>
//               ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {sortedExperiences.map((exp) => <PackageCard key={exp.id} exp={exp} onBook={setDetailPkg} />)}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // ── HOME VIEW ──────────────────────────────────────────────────────────────
//   return (
//     <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
//       <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a5276 0%, #1a6b3c 50%, #145a32 100%)", minHeight: "420px" }}>
//         <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&fit=crop)", backgroundSize: "cover", backgroundPosition: "center" }} />
//         <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
//         <div className="relative max-w-6xl mx-auto px-4 pt-12 pb-8">
//           <div className="flex justify-center mb-4">
//             <span className="text-white text-sm px-4 py-1.5 rounded-full flex items-center gap-2" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}>🏕️ 50,000+ Unique Stays Across India</span>
//           </div>
//           <h1 className="text-center text-white font-black mb-2" style={{ fontSize: "clamp(2rem,5vw,3.2rem)" }}>
//             Discover Your Dream <span style={{ color: "#f39c12" }}>Escape</span>
//           </h1>
//           <p className="text-center text-white/80 mb-8">Handpicked holiday packages · Real reviews · Best prices</p>
//           <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-4">
//               {[{ label: "STARTING FROM", val: startingFrom, set: setStartingFrom, placeholder: "New Delhi" }, { label: "GOING TO", val: goingTo, set: setGoingTo, placeholder: "Vietnam, Bali, Dubai..." }, { label: "STARTING DATE", val: startDate, set: setStartDate, placeholder: "Select", type: "date" }, { label: "ROOMS & GUESTS", val: guests, set: setGuests, placeholder: "Select" }].map((f, i) => (
//                 <div key={f.label} className={`flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-gray-50 transition ${i === 3 ? "md:border-r-0" : ""}`}>
//                   <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: "#e74c3c" }} />
//                   <div className="flex-1 min-w-0">
//                     <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#888", fontSize: "10px" }}>{f.label}</p>
//                     {f.type === "date" ? <input type="date" value={f.val} onChange={(e) => f.set(e.target.value)} className="w-full text-gray-800 font-semibold text-sm outline-none bg-transparent mt-0.5" />
//                       : <input value={f.val} onChange={(e) => f.set(e.target.value)} placeholder={f.placeholder} className="w-full text-gray-800 font-semibold text-sm outline-none bg-transparent placeholder-gray-400 mt-0.5" />}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button className="w-full flex items-center justify-center gap-2 font-bold text-white py-3.5 hover:opacity-90" style={{ background: "linear-gradient(135deg,#1a5276,#1e8449)" }}>
//               <Search className="w-5 h-5" /> Search Packages
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 py-10">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-xl font-bold text-gray-800">Popular <span style={{ color: "#1e8449" }}>Destinations</span></h2>
//           <button className="text-sm font-semibold flex items-center gap-1" style={{ color: "#1a5276" }}>See all <ChevronRight className="w-4 h-4" /></button>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {POPULAR_COUNTRIES.map((country) => (
//             <div key={country.name} onClick={() => { setSelectedCountry(country); setGoingTo(country.name); }} className="relative rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all" style={{ aspectRatio: "4/3" }}>
//               <img src={country.img} alt={country.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//               <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,0.75) 0%,transparent 50%)" }} />
//               <div className="absolute bottom-0 left-0 right-0 p-3">
//                 <p className="text-white font-bold text-base">{country.name}</p>
//                 <p className="text-white/70 text-xs">{country.packages} packages</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 pb-16">
//         <div className="flex items-center justify-between mb-5">
//           <div><h2 className="text-xl font-bold text-gray-800">Holiday Packages</h2><p className="text-sm text-gray-500 mt-0.5">Curated stays with best prices</p></div>
//         </div>
//         {loading ? (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{[1,2,3].map((i) => (<div key={i} className="bg-white rounded-xl overflow-hidden animate-pulse"><div className="h-48 bg-gray-200" /><div className="p-4 space-y-3"><div className="h-4 bg-gray-200 rounded w-3/4" /></div></div>))}</div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//             {experiences.slice(0, 6).map((exp) => <PackageCard key={exp.id} exp={exp} onBook={setDetailPkg} />)}
//           </div>
//         )}
//       </div>

//       <div style={{ background: "#f7f8fa" }} className="py-12">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-xl font-bold text-gray-800 text-center mb-8">Why Book With Us?</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[{ icon: Shield, title: "Free Cancellation", desc: "Up to 24 hours before", color: "#1a5276" }, { icon: Award, title: "Best Price Guarantee", desc: "We match any price", color: "#1e8449" }, { icon: Users, title: "24/7 Support", desc: "In 10+ languages", color: "#e67e22" }, { icon: Sparkles, title: "Verified Reviews", desc: "Real traveler feedback", color: "#8e44ad" }].map((item, i) => {
//               const Icon = item.icon;
//               return (
//                 <div key={i} className="text-center p-5 bg-white rounded-xl" style={{ border: "1px solid #e8e8e8" }}>
//                   <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: `${item.color}15` }}><Icon className="w-6 h-6" style={{ color: item.color }} /></div>
//                   <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>
//                   <p className="text-xs text-gray-500">{item.desc}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <style>{`input[type="date"]::-webkit-calendar-picker-indicator{opacity:.5;cursor:pointer;}`}</style>
//     </div>
//   );
// };

// export default TripBestGallery;


































import React, { useEffect, useState } from "react";
import {
  Search, MapPin, Star, Heart, Users, Utensils, Hotel, Ticket,
  Globe, ChevronRight, Clock, Shield, Award, Sparkles, X,
  CheckCircle, ChevronDown, ArrowRight, Percent, Plane,
  ChevronLeft, Check, Share2, Car, Coffee, Zap, Tag, Info,
  Wifi, Tv, Wind, Bath, Dumbbell, UtensilsCrossed, AlertCircle,
  Phone, Mail, Calendar, CreditCard, ChevronUp, Eye, Download,
  ThumbsUp, MessageCircle, Filter, SlidersHorizontal,
} from "lucide-react";
import { getHolidayDataAPI } from "../api/holiday.js";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const PACKAGE_TABS = ["All Packages", "Phu Quoc", "Group Tours", "Budget", "Honeymoon"];
const THEMES = ["Adventure", "Culture", "Offbeat", "Beach", "Wildlife", "Spiritual"];
const BUDGET_OPTIONS = ["Under ₹20,000", "₹20K – ₹40K", "₹40K – ₹60K", "Above ₹60K"];
const DURATION_OPTIONS = ["2N/3D", "3N/4D", "4N/5D", "5N/6D", "7N+"];
const PACKAGE_TYPES = ["Customizable", "Group Package"];
const INCLUSIONS_ICONS = {
  Breakfast: "🍳", Hotel: "🏨", Sightseeing: "🗺️", Flights: "✈️",
  Meals: "🍽️", Transfer: "🚌", Visa: "📋", Guide: "🧭",
};

const POPULAR_COUNTRIES = [
  { name: "Vietnam",   img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&fit=crop", packages: 52 },
  { name: "Thailand",  img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&fit=crop", packages: 38 },
  { name: "Bali",      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&fit=crop", packages: 45 },
  { name: "Dubai",     img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&fit=crop", packages: 29 },
  { name: "Singapore", img: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=600&fit=crop", packages: 33 },
  { name: "Maldives",  img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&fit=crop", packages: 21 },
  { name: "Europe",    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&fit=crop", packages: 67 },
  { name: "Sri Lanka", img: "https://images.unsplash.com/photo-1556366673-38c3e64f47f7?w=600&fit=crop", packages: 18 },
];

const GALLERY_EXTRAS = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&fit=crop",
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&fit=crop",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&fit=crop",
  "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=400&fit=crop",
];

const COUPONS = [
  { code: "MMTVACATION", discount: 813, desc: "Coupon Applied Successfully!", applied: true },
  { code: "SUPERDEAL",   discount: 576, desc: "Unlock More Savings personalized for you!" },
  { code: "SUMMERTRIP",  discount: 518, desc: "Grab Your Discount Before It's Gone!" },
  { code: "MMTHLD",      discount: 253, desc: "Grab Your Discount Before It's Gone!" },
];

// ─── COMPLETE MEALS DATA ──────────────────────────────────────────────────────
const MEALS_DATA = [
  {
    day: 1,
    date: "Jun 12, Fri",
    meals: [
      {
        type: "Breakfast",
        icon: "🍳",
        included: true,
        restaurant: "Grand Continent Anjuna - A Sarovar Portico Affiliate Hotel",
        time: "7:00 AM – 10:30 AM",
        location: "In-hotel restaurant, Anjuna, Goa",
        description: "Complimentary buffet breakfast with a spread of Indian and Continental options including fresh fruits, cereals, eggs, breads, hot beverages.",
        items: ["Fresh Fruits", "Assorted Cereals", "Egg Station (Made to Order)", "Indian Breakfast (Poha, Upma)", "Toast & Breads", "Tea & Coffee"],
        img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300&fit=crop",
      },
    ],
  },
  {
    day: 2,
    date: "Jun 13, Sat",
    meals: [
      {
        type: "Breakfast",
        icon: "🍳",
        included: true,
        restaurant: "Grand Continent Anjuna - A Sarovar Portico Affiliate Hotel",
        time: "7:00 AM – 10:30 AM",
        location: "In-hotel restaurant, Anjuna, Goa",
        description: "Daily complimentary buffet breakfast.",
        items: ["Fresh Fruits", "Assorted Cereals", "Egg Station", "Indian Breakfast", "Toast & Breads", "Tea & Coffee"],
        img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300&fit=crop",
      },
      {
        type: "Lunch",
        icon: "🍽️",
        included: false,
        addOnPrice: 650,
        restaurant: "Fisherman's Wharf, Cavelossim",
        time: "1:00 PM – 3:00 PM",
        location: "Cavelossim, South Goa",
        description: "Enjoy fresh seafood and Goan specialties at one of Goa's most famous restaurants on the Sal River bank.",
        items: ["Goan Fish Curry", "Prawn Balchão", "Crab Xec Xec", "Bebinca (Dessert)", "Coconut Water"],
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&fit=crop",
      },
      {
        type: "Dinner",
        icon: "🌙",
        included: false,
        addOnPrice: 850,
        restaurant: "Thalassa Greek Restaurant, Vagator",
        time: "7:30 PM – 10:30 PM",
        location: "Vagator Beach, North Goa",
        description: "Romantic cliffside Greek-Mediterranean restaurant with stunning sea views.",
        items: ["Greek Salad", "Hummus & Pita", "Grilled Seafood Platter", "Lamb Souvlaki", "Baklava", "House Wine"],
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&fit=crop",
      },
    ],
  },
  {
    day: 3,
    date: "Jun 14, Sun",
    meals: [
      {
        type: "Breakfast",
        icon: "🍳",
        included: true,
        restaurant: "Grand Continent Anjuna - A Sarovar Portico Affiliate Hotel",
        time: "7:00 AM – 10:30 AM",
        location: "In-hotel restaurant, Anjuna, Goa",
        description: "Daily complimentary buffet breakfast.",
        items: ["Fresh Fruits", "Assorted Cereals", "Egg Station", "Indian Breakfast", "Toast & Breads", "Tea & Coffee"],
        img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300&fit=crop",
      },
      {
        type: "Lunch",
        icon: "🍽️",
        included: false,
        addOnPrice: 600,
        restaurant: "Baga Beach Shacks",
        time: "12:30 PM – 2:30 PM",
        location: "Baga Beach, North Goa",
        description: "Authentic beach shack experience with fresh catch of the day and cold beverages.",
        items: ["Fish Tikka", "Prawn Masala", "Kingfish Fry", "Cold Beer / Coconut Water", "Garlic Naan"],
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&fit=crop",
      },
    ],
  },
  {
    day: 4,
    date: "Jun 15, Mon",
    meals: [
      {
        type: "Breakfast",
        icon: "🍳",
        included: true,
        restaurant: "Grand Continent Anjuna - A Sarovar Portico Affiliate Hotel",
        time: "7:00 AM – 10:30 AM",
        location: "In-hotel restaurant, Anjuna, Goa",
        description: "Daily complimentary buffet breakfast.",
        items: ["Fresh Fruits", "Assorted Cereals", "Egg Station", "Indian Breakfast", "Toast & Breads", "Tea & Coffee"],
        img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300&fit=crop",
      },
    ],
  },
  {
    day: 5,
    date: "Jun 16, Tue",
    meals: [
      {
        type: "Breakfast",
        icon: "🍳",
        included: true,
        restaurant: "Grand Continent Anjuna - A Sarovar Portico Affiliate Hotel",
        time: "7:00 AM – 10:30 AM",
        location: "In-hotel restaurant, Anjuna, Goa",
        description: "Last day breakfast before checkout.",
        items: ["Fresh Fruits", "Assorted Cereals", "Egg Station", "Indian Breakfast", "Toast & Breads", "Tea & Coffee"],
        img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300&fit=crop",
      },
    ],
  },
];

// ─── TRANSFERS DATA ───────────────────────────────────────────────────────────
const TRANSFERS_DATA = [
  {
    id: 1,
    type: "Airport Pickup",
    from: "Goa International Airport (Dabolim / Mopa)",
    to: "Grand Continent Anjuna Hotel, Anjuna",
    date: "Jun 12, Fri",
    time: "As per flight arrival",
    vehicleType: "Private AC Sedan / SUV",
    capacity: "2 Adults",
    duration: "~45 mins",
    included: true,
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&fit=crop",
    note: "Driver will wait up to 1 hour after flight landing with name board.",
    amenities: ["AC", "Water Bottle", "Wi-Fi", "GPS Tracked"],
  },
  {
    id: 2,
    type: "Sightseeing Transfer",
    from: "Grand Continent Anjuna Hotel",
    to: "North Goa Sightseeing Spots",
    date: "Jun 13, Sat",
    time: "9:00 AM – 6:00 PM",
    vehicleType: "Private AC Innova / Tempo Traveller",
    capacity: "2 Adults",
    duration: "9 Hours",
    included: true,
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300&fit=crop",
    note: "Covers Fort Aguada, Sinquerim Beach, Calangute, Baga, Anjuna, Vagator, Chapora Fort.",
    amenities: ["AC", "Professional Driver", "GPS Tracked", "Fuel Included"],
  },
];

// ─── HOTEL DATA ───────────────────────────────────────────────────────────────
const HOTEL_DETAIL_DATA = {
  name: "Grand Continent Anjuna - A Sarovar Portico Affiliate Hotel",
  stars: 4,
  rating: 3.8,
  ratingLabel: "Very Good",
  reviews: 268,
  location: "Anjuna, North Goa | 1.5 km drive to Anjuna Beach",
  checkIn: "Jun 12, 2:00 PM",
  checkOut: "Jun 16, 11:00 AM",
  nights: 4,
  room: "Standard Double Room (All Day Happy Hours Inclusion)",
  roomDetail: "180 sq.ft | King Bed | No View",
  meal: "Breakfast included daily",
  img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&fit=crop",
  thumbs: GALLERY_EXTRAS,
  amenities: [
    { icon: Wifi, label: "Free Wi-Fi" },
    { icon: Wind, label: "Air Conditioning" },
    { icon: Bath, label: "Swimming Pool" },
    { icon: Dumbbell, label: "Fitness Center" },
    { icon: UtensilsCrossed, label: "Restaurant & Bar" },
    { icon: Car, label: "Parking" },
    { icon: Tv, label: "LCD TV" },
    { icon: Coffee, label: "Coffee/Tea Maker" },
  ],
  highlights: [
    "Located in Anjuna, near famous Anjuna Flea Market",
    "Outdoor Pool with Sun Deck",
    "Multi-cuisine restaurant serving Indian & Continental",
    "Daily Housekeeping & 24x7 Front Desk",
    "Well-equipped gym",
  ],
  guestReviews: [
    { name: "Priya S.", rating: 4.5, comment: "Beautiful property, very clean rooms. Breakfast spread was amazing. Beach is a short walk.", date: "Apr 2026" },
    { name: "Rahul M.", rating: 3.5, comment: "Good location, staff was helpful. Room was a bit small but well maintained.", date: "Mar 2026" },
    { name: "Ananya K.", rating: 4.0, comment: "Loved the pool area! Food was great. Will definitely come back.", date: "Feb 2026" },
  ],
};

// ─── ACTIVITY DATA ────────────────────────────────────────────────────────────
const ACTIVITY_DATA = {
  name: "North Goa Sightseeing (Private Transfers from Ex North Goa)",
  duration: "9 Hours",
  timing: "Morning",
  pickup: "Pick up and Drop included",
  rating: 4.5,
  reviews: 1243,
  img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&fit=crop",
  desc: "Spend the day visiting happening markets and beaches in North Goa. Visit beautiful attractions like Fort Aguada, Sinquerim Beach, Calangute Beach, Baga Beach, Anjuna, Vagator Beach and Chapora Fort.",
  itinerary: [
    { time: "9:00 AM", place: "Fort Aguada", desc: "17th century Portuguese fort with stunning sea views. Great photography spot." },
    { time: "10:30 AM", place: "Sinquerim Beach", desc: "Pristine beach perfect for a relaxing walk and fresh coconut water." },
    { time: "11:30 AM", place: "Calangute Beach", desc: "Queen of Beaches – Goa's most popular beach with vibrant shacks and water sports." },
    { time: "12:30 PM", place: "Baga Beach", desc: "Lively beach famous for its nightlife, clubs, and fresh seafood restaurants." },
    { time: "2:00 PM", place: "Anjuna Beach", desc: "Famous for its rocky coastline and the iconic Anjuna Flea Market." },
    { time: "3:30 PM", place: "Vagator Beach", desc: "Scenic beach with red laterite cliffs and clear water." },
    { time: "4:30 PM", place: "Chapora Fort", desc: "Famous from the Bollywood movie Dil Chahta Hai. Panoramic views of Vagator." },
    { time: "5:30 PM", place: "Return to Hotel", desc: "Drop-off at your hotel in North Goa." },
  ],
  inclusions: ["Private AC Vehicle", "Professional Driver-cum-Guide", "Pickup & Drop from hotel", "All toll & parking charges"],
  exclusions: ["Entry tickets to any monument", "Meals & beverages", "Tips (optional)", "Personal shopping"],
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const getDayLabel = (index, startDate) => {
  if (!startDate) return `Day ${index + 1}`;
  const d = new Date(startDate);
  d.setDate(d.getDate() + index);
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", weekday: "short" });
};

// ─── GALLERY MODAL ────────────────────────────────────────────────────────────
const GalleryModal = ({ images, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.85)" }} onClick={onClose}>
    <div className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-bold text-gray-800">Gallery</h3>
        <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100"><X className="w-5 h-5" /></button>
      </div>
      <div className="overflow-y-auto p-4 grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <img key={i} src={img} alt="" className="w-full h-40 object-cover rounded-xl cursor-pointer hover:opacity-90 transition" />
        ))}
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════════
// PACKAGE DETAIL PAGE
// ═══════════════════════════════════════════════════════════════════════════════
const PackageDetailPage = ({ pkg, onBack, startingFrom }) => {
  const [activeTab, setActiveTab] = useState("ITINERARY");
  const [activePlanTab, setActivePlanTab] = useState("DAY PLAN");
  const [activeDay, setActiveDay] = useState(0);
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupons, setAppliedCoupons] = useState(["MMTVACATION"]);
  const [showCoupons, setShowCoupons] = useState(true);
  const [travelers, setTravelers] = useState(2);
  const [travelDate, setTravelDate] = useState("2026-06-12");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [formErrors, setFormErrors] = useState({});
  const [showGallery, setShowGallery] = useState(false);
  const [expandedMeal, setExpandedMeal] = useState(null);
  const [expandedActivity, setExpandedActivity] = useState(false);
  const [addedMeals, setAddedMeals] = useState([]);
  const [couponMsg, setCouponMsg] = useState("");

  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);
  const totalSavings = appliedCoupons.reduce((s, c) => {
    const found = COUPONS.find((x) => x.code === c);
    return s + (found ? found.discount : 0);
  }, 0);
  const addedMealsCost = addedMeals.reduce((s, m) => s + (m.addOnPrice || 0), 0);
  const baseTotal = pkg.price * travelers;
  const tax = Math.round((baseTotal + addedMealsCost) * 0.05);
  const finalTotal = baseTotal + addedMealsCost + tax - totalSavings;

  const DAY_DATA = [
    {
      label: "Goa", includes: "1 Hotel • 1 Transfer",
      sections: [
        { type: "FLIGHT", icon: Plane, detail: "Arrival in Goa", note: "Please Note: You need to reach Goa on your own", transport: true },
        { type: "TRANSFER", icon: Car, detail: "Airport to hotel in Goa", sub: "Private Transfer — Travel comfortably in a private vehicle from either Goa Airports to your hotel in Goa.", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&fit=crop" },
        { type: "HOTEL", icon: Hotel, detail: "4 Nights • In Goa", hotelData: HOTEL_DETAIL_DATA },
      ],
    },
    { label: "Goa", includes: "1 Activity • 1 Meal", sections: [{ type: "ACTIVITY", icon: Ticket, detail: "9 Hours • In Goa", activityData: ACTIVITY_DATA }] },
    { label: "Goa", includes: "1 Meal", sections: [] },
    { label: "Goa", includes: "1 Meal", sections: [] },
    { label: "Goa", includes: "Checkout", sections: [{ type: "CHECKOUT", icon: Hotel, detail: "Checkout from Hotel" }] },
  ];

  const SUMMARY_DAYS = [
    { day: "Day 1", date: "Jun 12, Fri", items: [{ icon: Car, text: "Airport to hotel in Goa" }, { icon: Hotel, text: "Goa - 4 Nights Stay" }] },
    { day: "Day 2", date: "Jun 13, Sat", items: [{ icon: Ticket, text: "North Goa Sightseeing (Private Transfers from Ex North Goa)" }, { icon: Coffee, text: "Breakfast: Grand Continent Anjuna Hotel, Goa" }] },
    { day: "Day 3", date: "Jun 14, Sun", items: [{ icon: Coffee, text: "Breakfast: Grand Continent Anjuna Hotel, Goa" }] },
    { day: "Day 4", date: "Jun 15, Mon", items: [{ icon: Coffee, text: "Breakfast: Grand Continent Anjuna Hotel, Goa" }] },
    { day: "Day 5", date: "Jun 16, Tue", items: [{ icon: Coffee, text: "Breakfast: Grand Continent Anjuna Hotel, Goa" }, { icon: Hotel, text: "Checkout from Hotel in Goa" }] },
  ];

  const handleApplyCoupon = (code) => {
    if (!appliedCoupons.includes(code)) {
      setAppliedCoupons([...appliedCoupons, code]);
      setCouponMsg(`✅ Coupon ${code} applied!`);
      setTimeout(() => setCouponMsg(""), 2500);
    }
  };
  const handleManualCoupon = () => {
    const found = COUPONS.find(c => c.code === couponInput.toUpperCase());
    if (found) { handleApplyCoupon(found.code); setCouponInput(""); }
    else { setCouponMsg("❌ Invalid coupon code"); setTimeout(() => setCouponMsg(""), 2500); }
  };
  const handleRemoveCoupon = (code) => setAppliedCoupons(appliedCoupons.filter((c) => c !== code));

  const toggleMealAdd = (meal) => {
    const exists = addedMeals.find(m => m.restaurant === meal.restaurant && m.type === meal.type);
    if (exists) setAddedMeals(addedMeals.filter(m => !(m.restaurant === meal.restaurant && m.type === meal.type)));
    else setAddedMeals([...addedMeals, meal]);
  };

  const validateForm = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name required";
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = "Valid email required";
    if (!form.phone.match(/^\d{10}$/)) e.phone = "10-digit phone required";
    setFormErrors(e);
    return Object.keys(e).length === 0;
  };

  // ── Booking Confirmed ──────────────────────────────────────────────────────
  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "#e8f8ef" }}>
            <Check className="w-10 h-10" style={{ color: "#1e8449" }} />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">Booking Confirmed! 🎉</h2>
          <p className="text-gray-500 text-sm mb-2">Reference: <strong>#{Math.random().toString(36).substr(2,8).toUpperCase()}</strong></p>
          <div className="text-left p-4 rounded-xl mb-5" style={{ background: "#eaf4fb" }}>
            {[["Package", pkg.title], ["Traveler", form.name], ["Email", form.email], ["Travelers", travelers], ["Travel Date", travelDate], ["Meals Added", addedMeals.length], ["Total Paid", `₹${finalTotal.toLocaleString()}`]].map(([k, v]) => (
              <div key={k} className="flex justify-between text-sm py-1 border-b border-white/50 last:border-0">
                <span className="text-gray-500">{k}</span>
                <span className="font-semibold text-gray-800">{v}</span>
              </div>
            ))}
          </div>
          <button onClick={onBack} className="w-full py-3 rounded-xl font-bold text-white" style={{ background: "linear-gradient(135deg,#1a5276,#1e8449)" }}>
            Back to Packages
          </button>
        </div>
      </div>
    );
  }

  // ── PLAN TAB: Meals View ───────────────────────────────────────────────────
  const renderMealsView = () => (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <UtensilsCrossed className="w-5 h-5" style={{ color: "#e67e22" }} />
        <h3 className="font-bold text-gray-800">Meal Plan</h3>
        <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: "#eaf4fb", color: "#1e90ff" }}>
          4 Breakfasts Included
        </span>
      </div>
      <div className="mb-3 p-3 rounded-lg text-xs flex items-start gap-2" style={{ background: "#fffbf0", border: "1px solid #f39c1230" }}>
        <Info className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#e67e22" }} />
        <span className="text-gray-600">Breakfasts are <strong>included</strong> daily. Lunch & Dinner can be added as optional add-ons for a customized experience.</span>
      </div>
      {MEALS_DATA.map((dayMeals) => (
        <div key={dayMeals.day} className="mb-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: "#e74c3c" }}>Day {dayMeals.day}</span>
            <span className="text-sm font-semibold text-gray-600">{dayMeals.date}</span>
          </div>
          {dayMeals.meals.map((meal, mi) => {
            const isAdded = addedMeals.find(m => m.restaurant === meal.restaurant && m.type === meal.type);
            const isExpanded = expandedMeal === `${dayMeals.day}-${mi}`;
            return (
              <div key={mi} className="mb-3 rounded-xl overflow-hidden" style={{ border: meal.included ? "1.5px solid #d5f5e3" : "1.5px solid #e8e8e8" }}>
                <div className="flex items-start gap-3 p-3" style={{ background: meal.included ? "#eafaf1" : "#fafafa" }}>
                  <img src={meal.img} alt={meal.type} className="w-20 h-16 object-cover rounded-lg flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-base">{meal.icon}</span>
                      <span className="font-bold text-sm text-gray-800">{meal.type}</span>
                      {meal.included ? (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "#1e8449", color: "white" }}>✓ Included</span>
                      ) : (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "#fff3cd", color: "#856404" }}>Add-on @ ₹{meal.addOnPrice}/person</span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-gray-700 mb-0.5 truncate">{meal.restaurant}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3" />{meal.time}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1"><MapPin className="w-3 h-3" />{meal.location}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <button onClick={() => setExpandedMeal(isExpanded ? null : `${dayMeals.day}-${mi}`)} className="text-xs font-bold flex items-center gap-1" style={{ color: "#1e90ff" }}>
                      {isExpanded ? "Less" : "Details"} {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                    {!meal.included && (
                      <button
                        onClick={() => toggleMealAdd(meal)}
                        className="text-xs font-bold px-3 py-1.5 rounded-lg transition"
                        style={{
                          background: isAdded ? "#e74c3c" : "#1e90ff",
                          color: "white",
                        }}
                      >
                        {isAdded ? "REMOVE" : "+ ADD"}
                      </button>
                    )}
                  </div>
                </div>
                {isExpanded && (
                  <div className="px-4 pb-3" style={{ background: meal.included ? "#eafaf1" : "#fafafa" }}>
                    <p className="text-xs text-gray-600 mb-2">{meal.description}</p>
                    <p className="text-xs font-bold text-gray-700 mb-1.5">Menu Highlights:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {meal.items.map((item, ii) => (
                        <span key={ii} className="text-xs px-2 py-1 rounded-full" style={{ background: "#e8e8e8", color: "#555" }}>🍴 {item}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );

  // ── PLAN TAB: Transfers View ───────────────────────────────────────────────
  const renderTransfersView = () => (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Car className="w-5 h-5" style={{ color: "#1e90ff" }} />
        <h3 className="font-bold text-gray-800">Included Transfers</h3>
        <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: "#eaf4fb", color: "#1e90ff" }}>
          2 Transfers
        </span>
      </div>
      {TRANSFERS_DATA.map((t, i) => (
        <div key={i} className="mb-4 rounded-xl overflow-hidden" style={{ border: "1.5px solid #d6eaf8" }}>
          <div className="p-4" style={{ background: "#eaf4fb" }}>
            <div className="flex items-start gap-3">
              <img src={t.img} alt={t.type} className="w-24 h-20 object-cover rounded-lg flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-white px-2 py-0.5 rounded" style={{ background: "#1e90ff" }}>{t.type}</span>
                  <span className="text-xs font-bold text-white px-2 py-0.5 rounded" style={{ background: "#1e8449" }}>✓ Included</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
                  <MapPin className="w-3 h-3 flex-shrink-0 text-green-600" />
                  <span className="font-semibold text-xs">{t.from}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-1 pl-4">
                  <div className="w-0.5 h-3 bg-gray-300 mr-1" />
                  <ArrowRight className="w-3 h-3" />
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                  <MapPin className="w-3 h-3 flex-shrink-0 text-red-500" />
                  <span className="font-semibold text-xs">{t.to}</span>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{t.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{t.duration}</span>
                  <span className="flex items-center gap-1"><Car className="w-3 h-3" />{t.vehicleType}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-2 border-t border-blue-100">
            <p className="text-xs text-gray-600 mb-2 flex items-start gap-1"><Info className="w-3 h-3 mt-0.5 flex-shrink-0 text-orange-500" />{t.note}</p>
            <div className="flex flex-wrap gap-2">
              {t.amenities.map((a, ai) => (
                <span key={ai} className="text-xs px-2 py-1 rounded-full" style={{ background: "#e8f4fd", color: "#1a5276" }}>✓ {a}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
      {/* Add Transfer CTA */}
      <div className="flex items-center gap-3 p-4 rounded-xl mt-2" style={{ background: "#eaf4fb", border: "1.5px dashed #1e90ff60" }}>
        <Car className="w-5 h-5 flex-shrink-0" style={{ color: "#1e90ff" }} />
        <div>
          <p className="font-semibold text-sm text-gray-800">Need More Transfers?</p>
          <p className="text-xs text-gray-500">Add inter-city or local transfers to your itinerary</p>
        </div>
        <button className="ml-auto text-xs font-bold px-3 py-1.5 rounded-lg text-white" style={{ background: "#1e90ff" }}>+ ADD</button>
      </div>
    </div>
  );

  // ── PLAN TAB: Hotel View ───────────────────────────────────────────────────
  const renderHotelView = () => (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Hotel className="w-5 h-5" style={{ color: "#1a5276" }} />
        <h3 className="font-bold text-gray-800">Hotel Details</h3>
        <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: "#eaf4fb", color: "#1e90ff" }}>
          1 Hotel • 4 Nights
        </span>
      </div>
      <div className="rounded-xl overflow-hidden mb-4" style={{ border: "1.5px solid #e8e8e8" }}>
        {/* Hotel Images */}
        <div className="relative" style={{ height: "200px" }}>
          <img src={HOTEL_DETAIL_DATA.img} alt={HOTEL_DETAIL_DATA.name} className="w-full h-full object-cover" />
          <button onClick={() => setShowGallery(true)} className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-bold px-3 py-1.5 rounded-lg" style={{ background: "rgba(0,0,0,0.6)" }}>
            <Eye className="w-3 h-3" /> VIEW ALL PHOTOS
          </button>
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded text-white text-xs font-bold" style={{ background: "#1e8449" }}>
            ★ {HOTEL_DETAIL_DATA.rating} {HOTEL_DETAIL_DATA.ratingLabel}
          </div>
        </div>
        {/* Thumbnail row */}
        <div className="flex gap-2 p-2 border-b border-gray-100 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {HOTEL_DETAIL_DATA.thumbs.map((t, ti) => (
            <img key={ti} src={t} alt="" className="w-16 h-12 object-cover rounded flex-shrink-0 cursor-pointer hover:opacity-80 transition" onClick={() => setShowGallery(true)} />
          ))}
        </div>
        <div className="p-4">
          <h4 className="font-bold text-gray-900 text-base mb-1">{HOTEL_DETAIL_DATA.name} {"★".repeat(HOTEL_DETAIL_DATA.stars)}</h4>
          <p className="text-xs text-gray-500 mb-3 flex items-center gap-1"><MapPin className="w-3 h-3" />{HOTEL_DETAIL_DATA.location}</p>
          {/* Check-in / Check-out */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="p-3 rounded-xl text-center" style={{ background: "#eafaf1" }}>
              <p className="text-xs text-gray-500 mb-1">Check-in</p>
              <p className="font-bold text-sm text-gray-800">{HOTEL_DETAIL_DATA.checkIn}</p>
            </div>
            <div className="p-3 rounded-xl text-center" style={{ background: "#fdf0ec" }}>
              <p className="text-xs text-gray-500 mb-1">Check-out</p>
              <p className="font-bold text-sm text-gray-800">{HOTEL_DETAIL_DATA.checkOut}</p>
            </div>
          </div>
          {/* Room Info */}
          <div className="p-3 rounded-xl mb-4" style={{ background: "#eaf4fb" }}>
            <p className="font-bold text-sm text-gray-800 mb-1">{HOTEL_DETAIL_DATA.room}</p>
            <p className="text-xs text-gray-500">{HOTEL_DETAIL_DATA.roomDetail}</p>
            <p className="text-xs flex items-center gap-1 mt-1" style={{ color: "#1e8449" }}><Coffee className="w-3 h-3" />{HOTEL_DETAIL_DATA.meal}</p>
          </div>
          {/* Amenities */}
          <p className="font-bold text-sm text-gray-800 mb-2">Amenities</p>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {HOTEL_DETAIL_DATA.amenities.map((a, ai) => {
              const Icon = a.icon;
              return (
                <div key={ai} className="flex flex-col items-center gap-1 p-2 rounded-lg text-center" style={{ background: "#f7f8fa" }}>
                  <Icon className="w-4 h-4" style={{ color: "#1a5276" }} />
                  <span className="text-xs text-gray-600 leading-tight">{a.label}</span>
                </div>
              );
            })}
          </div>
          {/* Highlights */}
          <p className="font-bold text-sm text-gray-800 mb-2">Highlights</p>
          <div className="mb-4 space-y-1">
            {HOTEL_DETAIL_DATA.highlights.map((h, hi) => (
              <div key={hi} className="flex items-center gap-2 text-xs text-gray-600">
                <Check className="w-3 h-3 flex-shrink-0" style={{ color: "#1e8449" }} />{h}
              </div>
            ))}
          </div>
          {/* Guest Reviews */}
          <p className="font-bold text-sm text-gray-800 mb-2">Guest Reviews</p>
          <div className="space-y-3">
            {HOTEL_DETAIL_DATA.guestReviews.map((r, ri) => (
              <div key={ri} className="p-3 rounded-xl" style={{ background: "#f7f8fa" }}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm text-gray-800">{r.name}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-bold text-gray-700">{r.rating}</span>
                    <span className="text-xs text-gray-400 ml-1">{r.date}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600">{r.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // ── PLAN TAB: Activity View ────────────────────────────────────────────────
  const renderActivityView = () => (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Ticket className="w-5 h-5" style={{ color: "#8e44ad" }} />
        <h3 className="font-bold text-gray-800">Activities</h3>
        <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: "#f5eef8", color: "#8e44ad" }}>
          1 Activity
        </span>
      </div>
      <div className="rounded-xl overflow-hidden mb-4" style={{ border: "1.5px solid #e8e8e8" }}>
        <div className="relative" style={{ height: "180px" }}>
          <img src={ACTIVITY_DATA.img} alt={ACTIVITY_DATA.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,0.6) 0%,transparent 50%)" }} />
          <div className="absolute bottom-3 left-3">
            <span className="text-white text-xs font-bold px-2 py-1 rounded-full" style={{ background: "#8e44ad" }}>⭐ {ACTIVITY_DATA.rating} ({ACTIVITY_DATA.reviews} reviews)</span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="text-white text-xs font-bold px-2 py-1 rounded" style={{ background: "#1e8449" }}>✓ Included</span>
          </div>
        </div>
        <div className="p-4">
          <h4 className="font-bold text-gray-900 text-sm mb-2">{ACTIVITY_DATA.name}</h4>
          <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{ACTIVITY_DATA.duration}</span>
            <span className="flex items-center gap-1"><Sun className="w-3 h-3" />{ACTIVITY_DATA.timing}</span>
            <span className="flex items-center gap-1"><Car className="w-3 h-3" />{ACTIVITY_DATA.pickup}</span>
          </div>
          <p className="text-xs text-gray-600 mb-3">{ACTIVITY_DATA.desc}</p>
          {/* Itinerary */}
          <p className="font-bold text-sm text-gray-800 mb-2">Activity Itinerary</p>
          <div className="space-y-0 mb-4">
            {ACTIVITY_DATA.itinerary.map((stop, si) => (
              <div key={si} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: "#8e44ad" }}>{si + 1}</div>
                  {si < ACTIVITY_DATA.itinerary.length - 1 && <div className="w-0.5 flex-1 my-1" style={{ background: "#e0c8f0", minHeight: "20px" }} />}
                </div>
                <div className="pb-3">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-bold text-sm text-gray-800">{stop.place}</span>
                    <span className="text-xs text-gray-400">{stop.time}</span>
                  </div>
                  <p className="text-xs text-gray-600">{stop.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Inclusions / Exclusions */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="font-bold text-sm text-gray-800 mb-2 flex items-center gap-1"><Check className="w-3 h-3 text-green-500" /> Inclusions</p>
              {ACTIVITY_DATA.inclusions.map((inc, i) => (
                <p key={i} className="text-xs text-gray-600 flex items-start gap-1 mb-1"><span className="text-green-500 flex-shrink-0">✓</span>{inc}</p>
              ))}
            </div>
            <div>
              <p className="font-bold text-sm text-gray-800 mb-2 flex items-center gap-1"><X className="w-3 h-3 text-red-500" /> Exclusions</p>
              {ACTIVITY_DATA.exclusions.map((exc, i) => (
                <p key={i} className="text-xs text-gray-600 flex items-start gap-1 mb-1"><span className="text-red-500 flex-shrink-0">✗</span>{exc}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Add More Activities */}
      <div className="p-4 rounded-xl" style={{ background: "#f5eef8", border: "1.5px dashed #8e44ad60" }}>
        <p className="font-semibold text-sm text-gray-800 mb-1">Explore More Activities</p>
        <p className="text-xs text-gray-500 mb-3">Water Sports, Dolphin Spotting, Spice Plantation Visit & more</p>
        <button className="text-xs font-bold px-4 py-2 rounded-lg text-white" style={{ background: "#8e44ad" }}>BROWSE ACTIVITIES</button>
      </div>
    </div>
  );

  // ── Render plan tab content ────────────────────────────────────────────────
  const renderPlanTabContent = () => {
    if (activePlanTab === "DAY PLAN") return renderDayPlanView();
    if (activePlanTab === "MEALS") return renderMealsView();
    if (activePlanTab === "TRANSFERS") return renderTransfersView();
    if (activePlanTab === "HOTEL") return renderHotelView();
    if (activePlanTab === "ACTIVITY") return renderActivityView();
    return null;
  };

  const renderDayPlanView = () => (
    <div className="flex" style={{ minHeight: "400px" }}>
      {/* Left day nav */}
      <div className="w-36 border-r border-gray-100 py-4 flex-shrink-0">
        <p className="text-xs font-bold text-gray-500 px-4 mb-3">Day Plan</p>
        {DAY_DATA.map((_, i) => {
          const dateLabel = getDayLabel(i, travelDate);
          return (
            <button
              key={i}
              onClick={() => setActiveDay(i)}
              className="w-full text-left px-4 py-2.5 flex items-start gap-2 transition"
              style={{ background: activeDay === i ? "#eaf4fb" : "transparent" }}
            >
              <div className="flex flex-col items-center mt-1">
                <div className="w-3 h-3 rounded-full border-2 flex-shrink-0" style={{ borderColor: activeDay === i ? "#1e90ff" : "#ccc", background: activeDay === i ? "#1e90ff" : "white" }} />
                {i < DAY_DATA.length - 1 && <div className="w-0.5 h-6 bg-gray-200 mt-1" />}
              </div>
              <div>
                <p className="text-xs font-bold" style={{ color: activeDay === i ? "#1e90ff" : "#333" }}>{dateLabel}</p>
              </div>
            </button>
          );
        })}
      </div>
      {/* Right day detail */}
      <div className="flex-1 p-4 overflow-y-auto">
        {DAY_DATA[activeDay] && (
          <>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: "#e74c3c" }}>Day {activeDay + 1}</span>
              <span className="font-semibold text-gray-700 text-sm">{DAY_DATA[activeDay].label}</span>
              <span className="text-xs text-gray-500">INCLUDED: 🏨 {DAY_DATA[activeDay].includes}</span>
            </div>

            {DAY_DATA[activeDay].sections.length === 0 && (
              <div className="flex items-center gap-3 p-4 rounded-xl mb-3" style={{ background: "#eaf4fb" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#1e90ff20" }}>
                  <Zap className="w-4 h-4" style={{ color: "#1e90ff" }} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-800">Add Activities to your day</p>
                  <p className="text-xs text-gray-500">Spend the day at leisure or add an activity to your day</p>
                </div>
                <button className="ml-auto text-xs font-bold" style={{ color: "#1e90ff" }}>ADD TO DAY</button>
              </div>
            )}

            {DAY_DATA[activeDay].sections.map((section, si) => (
              <div key={si} className="mb-4">
                <div className="flex items-center justify-between py-2 border-l-4 pl-3 mb-3" style={{ borderColor: "#1e90ff" }}>
                  <div className="flex items-center gap-2">
                    <section.icon className="w-4 h-4 text-gray-500" />
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">{section.type}</span>
                    {section.detail && <span className="text-xs text-gray-400">• {section.detail}</span>}
                  </div>
                  {section.type !== "FLIGHT" && section.type !== "CHECKOUT" && (
                    <div className="flex gap-3">
                      <button className="text-xs font-bold" style={{ color: "#e74c3c" }}>REMOVE</button>
                      <button className="text-xs font-bold" style={{ color: "#1e90ff" }}>CHANGE</button>
                    </div>
                  )}
                </div>

                {section.type === "FLIGHT" && (
                  <div className="pl-3">
                    <p className="text-sm text-gray-700 mb-1">{section.detail}</p>
                    {section.note && <p className="text-sm font-semibold mb-2" style={{ color: "#e74c3c" }}>{section.note}</p>}
                    {section.transport && (
                      <div className="flex items-center gap-2 p-3 rounded-lg text-sm" style={{ background: "#eaf4fb" }}>
                        <span>There are more ways to reach your destination</span>
                        <button className="font-bold" style={{ color: "#1e90ff" }}>VIEW TRANSPORT OPTION(S)</button>
                      </div>
                    )}
                  </div>
                )}

                {section.type === "TRANSFER" && section.img && (
                  <div className="flex gap-3 pl-3">
                    <img src={section.img} alt="" className="w-24 h-20 object-cover rounded-lg flex-shrink-0" />
                    <div>
                      <p className="font-bold text-sm text-gray-900 mb-1">{section.sub?.split("—")[0]}</p>
                      <p className="text-xs text-gray-500">{section.sub?.split("—")[1]}</p>
                      <p className="text-xs text-gray-400 mt-1 flex items-center gap-1"><MapPin className="w-3 h-3" /> Airport to Hotel</p>
                    </div>
                  </div>
                )}

                {section.type === "HOTEL" && section.hotelData && (
                  <div className="pl-3">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <img src={section.hotelData.img} alt="" className="w-44 h-32 object-cover rounded-lg mb-2" />
                        <div className="flex gap-1">
                          {section.hotelData.thumbs.slice(0,3).map((t, ti) => (
                            <img key={ti} src={t} alt="" className="w-12 h-10 object-cover rounded cursor-pointer" onClick={() => setShowGallery(true)} />
                          ))}
                          <div className="w-12 h-10 rounded bg-gray-800 flex items-center justify-center cursor-pointer" onClick={() => setShowGallery(true)}>
                            <span className="text-white text-xs font-bold text-center leading-tight">+{section.hotelData.thumbs.length - 3}<br />more</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-white text-xs font-bold px-2 py-0.5 rounded" style={{ background: "#1e8449" }}>{section.hotelData.rating}</span>
                          <span className="text-sm font-bold text-gray-700">{section.hotelData.ratingLabel}</span>
                          <span className="text-xs text-gray-400">({section.hotelData.reviews} Ratings)</span>
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">{section.hotelData.name} {"★".repeat(section.hotelData.stars)}</h4>
                        <p className="text-xs text-gray-500 mb-1">{section.hotelData.location}</p>
                        <p className="text-xs text-gray-500 mb-1 flex items-center gap-1"><Users className="w-3 h-3" /> {travelers} Adults · {section.hotelData.nights} Nights</p>
                        <p className="text-xs text-gray-500 mb-2 flex items-center gap-1"><Clock className="w-3 h-3" />{section.hotelData.checkIn} – {section.hotelData.checkOut}</p>
                        <div className="p-2.5 rounded-lg text-xs text-gray-600 mb-2" style={{ background: "#eaf4fb" }}>
                          Guests appreciate the cozy ambiance and well-maintained property, highlighting its great location near Anjuna beach...
                          <button className="font-bold ml-1" style={{ color: "#1e90ff" }}>Read more</button>
                        </div>
                        <p className="text-sm font-bold text-gray-800">{section.hotelData.room}</p>
                        <p className="text-xs text-gray-500">{section.hotelData.roomDetail}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1 mt-1"><Coffee className="w-3 h-3" /> {section.hotelData.meal}</p>
                      </div>
                    </div>
                    <div className="mt-4 p-4 rounded-xl" style={{ background: "#eaf4fb" }}>
                      <h4 className="font-bold text-gray-800 mb-2">Your Goa Destination Guide</h4>
                      <p className="text-xs text-gray-600 mb-3">Immerse yourself in the essence of Goa on this {pkg.days}-day getaway! Unwind amid beautiful beaches, vibrant culture, and unforgettable experiences.</p>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div><p className="font-bold text-sm text-gray-800 mb-1">What To Expect</p><p className="text-xs text-gray-600">Cool nights and occasional rains during summers. Explore secluded beaches and Portuguese architectural gems.</p></div>
                        <div><p className="font-bold text-sm text-gray-800 mb-1">Things You Will Love</p><p className="text-xs text-gray-600">Beachside shacks, vibrant nightlife, spice plantations, water sports, and fresh Goan seafood.</p></div>
                      </div>
                      <div className="flex items-center gap-3 pt-3 border-t border-blue-200">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&fit=crop" alt="" className="w-10 h-10 rounded-full object-cover" />
                        <div><p className="text-xs text-gray-500">Curated By</p><p className="text-sm font-bold text-gray-800">Travel Expert</p><p className="text-xs text-gray-500">11+ Years Experience</p></div>
                      </div>
                    </div>
                  </div>
                )}

                {section.type === "ACTIVITY" && section.activityData && (
                  <div className="pl-3">
                    <div className="flex gap-3 mb-3">
                      <img src={section.activityData.img} alt="" className="w-36 h-28 object-cover rounded-lg flex-shrink-0" />
                      <div>
                        <p className="font-bold text-sm text-gray-900 mb-1">{section.activityData.name}</p>
                        <p className="text-xs text-gray-500 mb-2">{section.activityData.desc}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3" />{section.activityData.duration}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1"><Car className="w-3 h-3" />{section.activityData.pickup}</p>
                      </div>
                    </div>
                    <button onClick={() => setActivePlanTab("ACTIVITY")} className="text-xs font-bold px-3 py-1.5 rounded-lg text-white" style={{ background: "#8e44ad" }}>
                      VIEW FULL ACTIVITY DETAILS →
                    </button>
                  </div>
                )}

                {section.type === "CHECKOUT" && (
                  <div className="pl-3 text-sm text-gray-600 font-medium flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" /> Checkout from Hotel
                  </div>
                )}
              </div>
            ))}

            {/* Meals for this day */}
            {MEALS_DATA[activeDay]?.meals?.length > 0 && (
              <div className="mt-3">
                <div className="flex items-center gap-2 mb-2 border-l-4 pl-3" style={{ borderColor: "#e67e22" }}>
                  <Utensils className="w-4 h-4 text-gray-500" />
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">MEALS</span>
                </div>
                {MEALS_DATA[activeDay].meals.map((meal, mi) => (
                  <div key={mi} className="flex items-center gap-3 p-3 rounded-xl mb-2" style={{ background: meal.included ? "#eafaf1" : "#fafafa", border: meal.included ? "1px solid #d5f5e3" : "1px solid #eee" }}>
                    <span className="text-xl">{meal.icon}</span>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-gray-800">{meal.type}</p>
                      <p className="text-xs text-gray-500 truncate">{meal.restaurant}</p>
                    </div>
                    {meal.included ? (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "#1e8449", color: "white" }}>Included</span>
                    ) : (
                      <button onClick={() => setActivePlanTab("MEALS")} className="text-xs font-bold" style={{ color: "#1e90ff" }}>+ ADD ₹{meal.addOnPrice}</button>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center gap-3 p-4 rounded-xl mt-3" style={{ background: "#eaf4fb" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#1e90ff20" }}>
                <Zap className="w-4 h-4" style={{ color: "#1e90ff" }} />
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-800">Customize Your Day</p>
                <p className="text-xs text-gray-500">Add activities, meals, or transfers</p>
              </div>
              <button className="ml-auto text-xs font-bold" style={{ color: "#1e90ff" }}>ADD TO DAY</button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      {showGallery && (
        <GalleryModal
          images={[pkg.image, ...GALLERY_EXTRAS, HOTEL_DETAIL_DATA.img]}
          onClose={() => setShowGallery(false)}
        />
      )}

      {/* ── TOP DARK SEARCH BAR ── */}
      <div style={{ background: "#0d1b2e" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-stretch border-b border-white/10">
            {[
              { label: "STARTING FROM", val: startingFrom || "New Delhi" },
              { label: "TRAVELLING ON", val: travelDate, type: "date", set: setTravelDate },
              { label: "ROOMS & GUESTS", val: `${travelers} Adults`, type: "select" },
            ].map((f) => (
              <div key={f.label} className="px-5 py-3 border-r border-white/10 min-w-0">
                <p className="text-xs font-bold mb-0.5" style={{ color: "#4a9fd4", fontSize: "10px" }}>{f.label}</p>
                {f.type === "date" ? (
                  <input type="date" value={f.val} onChange={(e) => f.set(e.target.value)} className="bg-transparent text-white font-bold text-sm outline-none" />
                ) : f.type === "select" ? (
                  <select value={travelers} onChange={(e) => setTravelers(+e.target.value)} className="bg-transparent text-white font-bold text-sm outline-none cursor-pointer">
                    {[1,2,3,4,5,6].map((n) => <option key={n} value={n} style={{ color: "#000" }}>{n} Adult{n > 1 ? "s" : ""}</option>)}
                  </select>
                ) : (
                  <p className="text-white font-bold text-sm">{f.val}</p>
                )}
              </div>
            ))}
            <button className="ml-auto px-8 font-black text-white text-sm tracking-widest" style={{ background: "#1e90ff", minWidth: "120px" }}>
              SEARCH
            </button>
          </div>
          <div className="flex items-center gap-2 py-2 px-1 text-xs" style={{ background: "#fef9e7", color: "#856404", margin: "0 -16px", padding: "8px 20px" }}>
            <span>⚠️</span>
            <span>Please note that the start city of your package is Goa</span>
            <button className="ml-auto">✕</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <button onClick={onBack} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-4 transition">
          <ChevronLeft className="w-4 h-4" /> Back to packages
        </button>

        <h1 className="text-2xl font-black text-gray-900 mb-2">{pkg.title}</h1>
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-white text-xs font-bold px-2.5 py-1 rounded" style={{ background: "#1e8449" }}>{pkg.nights}N/{pkg.days}D</span>
          <span className="text-xs font-bold px-2.5 py-1 rounded border border-gray-400 text-gray-600 flex items-center gap-1">⇌ Flexi Package</span>
          <span className="text-sm text-gray-500">{pkg.nights}N Goa</span>
          <span className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ background: "#f0f7ff", color: "#1e90ff", border: "1px solid #1e90ff30" }}>🏆 Top Rated Package</span>
        </div>

        {/* Image Gallery */}
        <div className="grid gap-2 mb-6 rounded-xl overflow-hidden" style={{ gridTemplateColumns: "2fr 1fr", height: "320px" }}>
          <div className="relative">
            <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
            <button onClick={() => setShowGallery(true)} className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
              🖼 VIEW GALLERY →
            </button>
          </div>
          <div className="grid grid-rows-2 gap-2">
            {GALLERY_EXTRAS.slice(0, 2).map((img, i) => (
              <div key={i} className="relative overflow-hidden cursor-pointer" onClick={() => setShowGallery(true)}>
                <img src={img} alt="" className="w-full h-full object-cover hover:opacity-90 transition" />
                {i === 1 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">+{GALLERY_EXTRAS.length - 2} More</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main layout */}
        <div className="flex gap-6 items-start">
          {/* ── LEFT CONTENT ── */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-xl mb-4" style={{ border: "1px solid #e8e8e8" }}>
              {/* Tabs */}
              <div className="flex items-center border-b border-gray-100">
                {["ITINERARY", "POLICIES", "SUMMARY"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="px-6 py-4 text-sm font-bold border-b-2 transition"
                    style={{ color: activeTab === tab ? "#1e90ff" : "#666", borderBottomColor: activeTab === tab ? "#1e90ff" : "transparent" }}
                  >
                    {tab}
                  </button>
                ))}
                <button className="ml-auto px-4 py-4 flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>

              {/* ── ITINERARY TAB ── */}
              {activeTab === "ITINERARY" && (
                <div>
                  {/* Plan stats tabs */}
                  <div className="flex items-center gap-0 border-b border-gray-100 overflow-x-auto bg-blue-50/40" style={{ scrollbarWidth: "none" }}>
                    {[
                      { label: `${pkg.days} DAY PLAN`, key: "DAY PLAN" },
                      { label: "2 TRANSFERS", key: "TRANSFERS" },
                      { label: "1 HOTEL", key: "HOTEL" },
                      { label: "1 ACTIVITY", key: "ACTIVITY" },
                      { label: "4 MEALS", key: "MEALS" },
                    ].map((t) => (
                      <button
                        key={t.key}
                        onClick={() => setActivePlanTab(t.key)}
                        className="px-5 py-3 text-xs font-bold whitespace-nowrap border rounded-full mx-1 my-2 transition"
                        style={{
                          background: activePlanTab === t.key ? "#fff" : "transparent",
                          color: activePlanTab === t.key ? "#1a5276" : "#666",
                          border: activePlanTab === t.key ? "1.5px solid #1a5276" : "1.5px solid transparent",
                        }}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                  {renderPlanTabContent()}
                </div>
              )}

              {/* ── POLICIES TAB ── */}
              {activeTab === "POLICIES" && (
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Cancellation & Date Change</h3>
                    <h4 className="font-bold text-gray-800 mb-1">Package Cancellation Policy</h4>
                    <p className="text-sm font-semibold mb-1" style={{ color: "#1e8449" }}>Cancellation Possible till 04 Jun.*</p>
                    <p className="text-sm text-gray-500 mb-3">After that Package is <strong>Non-Refundable.</strong></p>
                    <div className="relative h-2 rounded-full mb-3" style={{ background: "linear-gradient(to right, #1e8449 60%, #e74c3c 40%)" }}>
                      <div className="absolute left-0 -top-1 w-4 h-4 rounded-full border-2 border-white bg-green-500 shadow" />
                      <div className="absolute right-0 -top-1 w-4 h-4 rounded-full border-2 border-white bg-red-500 shadow" />
                    </div>
                    <div className="flex justify-between text-xs mb-4">
                      <div><p className="font-bold" style={{ color: "#1e8449" }}>Till 04 Jun 26</p><p className="text-gray-500">₹0 Cancellation Fee</p></div>
                      <div className="text-right"><p className="font-bold" style={{ color: "#e74c3c" }}>After 04 Jun 26</p><p className="text-gray-500">Non Refundable</p></div>
                    </div>
                    {["These are non-refundable amounts as per the current components attached.", "Please check the exact cancellation and date change policy on the review page before proceeding further.", "TCS once collected cannot be refunded in case of any cancellation / modification.", "Cancellation charges shown is exclusive of all taxes."].map((p, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-600 mb-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 mt-1 flex-shrink-0" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Package Date Change Policy</h4>
                    <p className="text-sm font-semibold mb-1" style={{ color: "#1e8449" }}>Date Change Possible till 04 Jun.*</p>
                    <p className="text-sm text-gray-500 mb-3">After that Package date cannot be changed.</p>
                    <div className="relative h-2 rounded-full mb-3" style={{ background: "linear-gradient(to right, #1e8449 60%, #e74c3c 40%)" }}>
                      <div className="absolute left-0 -top-1 w-4 h-4 rounded-full border-2 border-white bg-green-500 shadow" />
                      <div className="absolute right-0 -top-1 w-4 h-4 rounded-full border-2 border-white bg-red-500 shadow" />
                    </div>
                    <div className="flex justify-between text-xs mb-4">
                      <div><p className="font-bold" style={{ color: "#1e8449" }}>Till 04 Jun 26</p><p className="text-gray-500">₹0 Date Change Fee</p></div>
                      <div className="text-right"><p className="font-bold" style={{ color: "#e74c3c" }}>After 04 Jun 26</p><p className="text-gray-500">Date cannot be changed</p></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Terms and Conditions</h4>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Exclusions</p>
                    {["Expenses of personal nature", "Mentioned cost is not valid between 6 pm and 8 am", "Anything not mentioned under inclusions"].map((e, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-600 mb-2">
                        <span className="w-2 h-2 rounded-full border border-gray-400 mt-1 flex-shrink-0" />
                        <span>{e}</span>
                      </div>
                    ))}
                    <p className="text-sm font-semibold text-gray-700 mb-2 mt-3">General Terms</p>
                    {["Standard check-in time at the hotel is normally 2:00 pm and check-out is 11:00 am.", "A maximum of 3 adults are allowed in one room.", "Booking rates are subject to change without prior notice.", "Airline seats and hotel rooms are subject to availability at the time of booking."].map((t, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-600 mb-2">
                        <span className="w-2 h-2 rounded-full border border-gray-400 mt-1 flex-shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── SUMMARY TAB ── */}
              {activeTab === "SUMMARY" && (
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                    <Car className="w-3 h-3" /> Airport to hotel in Goa
                  </div>
                  <div className="px-4 py-2 rounded mb-3 font-semibold text-sm" style={{ background: "#f5e6d3" }}>
                    Goa - {pkg.nights} Nights Stay
                  </div>
                  <table className="w-full text-xs border-collapse mb-3">
                    <tbody>
                      {SUMMARY_DAYS.map((row, ri) => (
                        <tr key={ri} className="border-b border-gray-100">
                          <td className="py-2 pr-3 font-bold text-gray-700 w-20 align-top">{row.day}<br /><span className="font-normal text-gray-400">{row.date}</span></td>
                          <td className="py-2">
                            {row.items.map((item, ii) => (
                              <div key={ii} className="flex items-start gap-1.5 mb-1">
                                <item.icon className="w-3 h-3 mt-0.5 flex-shrink-0 text-gray-400" />
                                <span className="text-gray-600">{item.text}</span>
                              </div>
                            ))}
                          </td>
                          <td className="py-2 pl-3 align-top text-gray-500 w-40">
                            {ri === 1 && <div className="flex items-start gap-1.5"><Coffee className="w-3 h-3 mt-0.5 flex-shrink-0" /><span>Breakfast: Grand Continent Hotel</span></div>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Car className="w-3 h-3" /> Hotel in Goa to Airport
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="flex-shrink-0 w-80 sticky top-4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden" style={{ border: "1px solid #e8e8e8" }}>

              {/* Price block */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-gray-400 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                  <span className="text-xs font-bold" style={{ color: "#e74c3c" }}>{discount}% OFF</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black" style={{ color: "#222" }}>₹{pkg.price.toLocaleString()}</span>
                  <span className="text-sm text-gray-500">/Adult</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">Excluding applicable taxes</p>

                <div className="flex items-start gap-2 p-2.5 rounded-lg mb-3" style={{ background: "#eafaf1" }}>
                  <span className="text-green-500 text-base">🟢</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Book this package only @ ₹1</p>
                    <p className="text-xs" style={{ color: "#1e90ff" }}>Next installment payable by 01 Jun '26</p>
                  </div>
                </div>

                {!showPaymentForm ? (
                  <button onClick={() => setShowPaymentForm(true)} className="w-full py-3 rounded-lg font-bold text-white text-sm tracking-wide" style={{ background: "#1e90ff" }}>
                    PROCEED TO PAYMENT
                  </button>
                ) : (
                  <div className="space-y-2">
                    {[
                      { label: "Full Name", key: "name", type: "text", placeholder: "Your name" },
                      { label: "Email", key: "email", type: "email", placeholder: "you@email.com" },
                      { label: "Phone", key: "phone", type: "tel", placeholder: "10-digit mobile" },
                    ].map((f) => (
                      <div key={f.key}>
                        <label className="text-xs font-semibold text-gray-600">{f.label}</label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.key]}
                          onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                          className="w-full px-3 py-2 rounded border text-sm outline-none"
                          style={{ border: formErrors[f.key] ? "1.5px solid #e74c3c" : "1.5px solid #e0e0e0" }}
                        />
                        {formErrors[f.key] && <p className="text-xs text-red-500">{formErrors[f.key]}</p>}
                      </div>
                    ))}
                    <button onClick={() => { if (validateForm()) setBookingConfirmed(true); }} className="w-full py-3 rounded-lg font-bold text-white text-sm" style={{ background: "#1e90ff" }}>
                      CONFIRM BOOKING →
                    </button>
                    <button onClick={() => setShowPaymentForm(false)} className="w-full py-2 text-xs text-gray-400 hover:text-gray-600">Cancel</button>
                  </div>
                )}
              </div>

              {/* Coupons & Offers */}
              <div className="p-4 border-b border-gray-100">
                <h4 className="font-bold text-gray-800 mb-3">Coupons & Offers</h4>
                <div className="flex items-start gap-2 p-2.5 rounded-lg mb-3" style={{ background: "#f0f0ff", border: "1px solid #e0e0ff" }}>
                  <span className="text-lg">💳</span>
                  <div>
                    <p className="text-xs font-bold text-gray-800">No cost EMI @ ₹3,200</p>
                    <p className="text-xs text-gray-500">Book your holidays with <span style={{ color: "#1e90ff" }}>Easy EMI options.</span></p>
                  </div>
                </div>
                {/* Coupon input */}
                <div className="flex gap-2 mb-3">
                  <input
                    value={couponInput}
                    onChange={e => setCouponInput(e.target.value)}
                    placeholder="Enter coupon code"
                    className="flex-1 px-3 py-2 rounded-lg border text-xs outline-none"
                    style={{ border: "1.5px solid #e0e0e0" }}
                    onKeyDown={e => e.key === "Enter" && handleManualCoupon()}
                  />
                  <button onClick={handleManualCoupon} className="px-3 py-2 rounded-lg text-xs font-bold text-white" style={{ background: "#1e90ff" }}>APPLY</button>
                </div>
                {couponMsg && (
                  <p className="text-xs mb-2 font-semibold" style={{ color: couponMsg.startsWith("✅") ? "#1e8449" : "#e74c3c" }}>{couponMsg}</p>
                )}
                {COUPONS.slice(0, showCoupons ? 2 : COUPONS.length).map((c) => {
                  const isApplied = appliedCoupons.includes(c.code);
                  return (
                    <div key={c.code} className="flex items-center justify-between p-3 rounded-lg mb-2" style={{ background: isApplied ? "#eaf4fb" : "#f7f8fa", border: isApplied ? "1.5px solid #1e90ff40" : "1px solid #eee" }}>
                      <div className="flex items-start gap-2">
                        <span className="text-base">🏷️</span>
                        <div>
                          <p className="text-xs font-bold text-gray-800">{c.code}</p>
                          <p className="text-xs text-gray-500">{isApplied ? "Coupon Applied Successfully!" : c.desc}</p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm font-bold" style={{ color: "#e74c3c" }}>- ₹{c.discount}</p>
                        {isApplied ? (
                          <button onClick={() => handleRemoveCoupon(c.code)} className="text-xs font-bold" style={{ color: "#e74c3c" }}>REMOVE</button>
                        ) : (
                          <button onClick={() => handleApplyCoupon(c.code)} className="text-xs font-bold" style={{ color: "#1e90ff" }}>APPLY</button>
                        )}
                      </div>
                    </div>
                  );
                })}
                <button onClick={() => setShowCoupons(!showCoupons)} className="text-xs font-bold mt-1" style={{ color: "#1e90ff" }}>
                  {showCoupons ? "SHOW MORE ▼" : "SHOW LESS ▲"}
                </button>
              </div>

              {/* Price breakdown */}
              <div className="p-4 border-b border-gray-100">
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-gray-600"><span>₹{pkg.price.toLocaleString()} × {travelers} Adult(s)</span><span>₹{baseTotal.toLocaleString()}</span></div>
                  {addedMealsCost > 0 && <div className="flex justify-between text-gray-600"><span>Meals Add-ons ({addedMeals.length})</span><span>₹{addedMealsCost.toLocaleString()}</span></div>}
                  <div className="flex justify-between text-green-600"><span>Coupon Savings</span><span>-₹{totalSavings.toLocaleString()}</span></div>
                  <div className="flex justify-between text-gray-600"><span>Taxes & Fees (5%)</span><span>₹{tax.toLocaleString()}</span></div>
                  <div className="border-t border-dashed border-gray-200 my-2" />
                  <div className="flex justify-between font-bold text-gray-900"><span>Total</span><span style={{ color: "#1a5276" }}>₹{finalTotal.toLocaleString()}</span></div>
                </div>
              </div>

              {/* Best Deals / Login */}
              <div className="p-4">
                <h4 className="font-bold text-gray-800 mb-3">Best Deals For You</h4>
                <div className="p-3 rounded-lg" style={{ background: "linear-gradient(135deg, #1e8449, #27ae60)" }}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-white/80 italic">For maximum benefits</p>
                    <button className="flex items-center gap-1 bg-white text-xs font-bold px-3 py-1 rounded-full" style={{ color: "#1e8449" }}>
                      LOGIN NOW →
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs text-white/90">
                    {["• Redeem wallet", "• Book faster", "• Get special deals", "• Continue in any device"].map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Missing import for Sun icon ─────────────────────────────────────────────
// (Added inline as simple SVG component)
const Sun = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

// ═══════════════════════════════════════════════════════════════════════════════
// FILTER SECTION COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
const FilterSection = ({ title, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100 py-4">
      <button className="w-full flex items-center justify-between mb-3" onClick={() => setOpen(!open)}>
        <span className="font-bold text-gray-800 text-sm">{title}</span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && children}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// PACKAGE CARD COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
const PackageCard = ({ exp, onBook }) => {
  const [liked, setLiked] = useState(false);
  const discount = Math.round(((exp.originalPrice - exp.price) / exp.originalPrice) * 100);
  return (
    <div className="bg-white rounded-xl overflow-hidden group cursor-pointer transition-all hover:shadow-xl" style={{ border: "1px solid #e8e8e8" }}>
      <div className="relative overflow-hidden" style={{ height: "200px" }}>
        <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-3">
          <div className="flex flex-col gap-1.5">
            <span className="text-white text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1 w-fit" style={{ background: "#e74c3c" }}>
              <Percent className="w-3 h-3" />{discount}% OFF
            </span>
            {exp.availableSlots <= 5 && (
              <span className="text-white text-xs font-bold px-2.5 py-1 rounded w-fit" style={{ background: "#e67e22" }}>🔥 Only {exp.availableSlots} left</span>
            )}
          </div>
          <button onClick={(e) => { e.stopPropagation(); setLiked(!liked); }} className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition">
            <Heart className={`w-4 h-4 transition-colors ${liked ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-3">
          <span className="text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1" style={{ background: "rgba(0,0,0,0.65)" }}>
            <Clock className="w-3 h-3" />{exp.nights}N/{exp.days}D
          </span>
          <span className="text-white text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(26,82,118,0.85)" }}>2 More Options</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-base leading-tight mb-1 line-clamp-1">{exp.title}</h3>
        <p className="text-xs text-gray-500 mb-3 flex items-center gap-1"><MapPin className="w-3 h-3 flex-shrink-0" /><span className="line-clamp-1">{exp.location}</span></p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-3">
          {(exp.inclusions || []).slice(0, 4).map((inc, i) => (
            <span key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
              <span className="text-base leading-none">{INCLUSIONS_ICONS[inc] || "✅"}</span>{inc}
            </span>
          ))}
        </div>
        {exp.features && exp.features.slice(0, 2).map((f, i) => (
          <p key={i} className="text-xs flex items-center gap-1 mb-0.5" style={{ color: "#1e8449" }}><Check className="w-3 h-3 flex-shrink-0" /> {f}</p>
        ))}
        <div className="border-t border-dashed border-gray-200 my-3" />
        <div className="flex items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="flex items-center gap-1 px-2 py-0.5 rounded text-white text-xs font-bold" style={{ background: "#1e8449" }}>
                <Star className="w-3 h-3 fill-white" />{exp.rating}
              </span>
              <span className="text-xs text-gray-400">({exp.reviews} reviews)</span>
            </div>
            <p className="text-xs text-gray-400">Starting from</p>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-black" style={{ color: "#1a5276" }}>₹{exp.price.toLocaleString()}</span>
              <span className="text-xs text-gray-400 line-through">₹{exp.originalPrice.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-400">per person</p>
          </div>
          <button onClick={() => onBook(exp)} className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-white text-sm font-bold transition hover:opacity-90 flex-shrink-0" style={{ background: "linear-gradient(135deg, #1a5276, #1e8449)" }}>
            Book Now <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
const TripBestGallery = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startingFrom, setStartingFrom] = useState("New Delhi");
  const [goingTo, setGoingTo] = useState("");
  const [startDate, setStartDate] = useState("");
  const [guests, setGuests] = useState("");
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [selectedBudgets, setSelectedBudgets] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [buyNowPay, setBuyNowPay] = useState(false);
  const [sortBy, setSortBy] = useState("Popular");
  const [activeTab, setActiveTab] = useState("All Packages");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [detailPkg, setDetailPkg] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getHolidayDataAPI();
        const apiData = res?.data?.data || [];
        setExperiences(apiData.map((item) => ({
          id: item._id,
          title: item.parkName,
          location: `${item.address?.area || ""}, ${item.address?.city || ""}`,
          category: item.propertyType || "attractions",
          rating: item.rating || 4.2,
          reviews: item.totalReviews || 120,
          image: item.thumbnailImage || "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&fit=crop",
          price: item.pricePerNight || 15000,
          originalPrice: (item.pricePerNight || 15000) + 3000,
          nights: item.nights || 3,
          days: (item.nights || 3) + 1,
          inclusions: item.inclusions || ["Breakfast", "Hotel", "Sightseeing", "Transfer"],
          features: item.activities || ["Ha Long Bay Cruise", "Walking Tour"],
          availableSlots: item.totalRooms || 8,
          amenities: item.amenities || [],
        })));
      } catch (err) {
        setError(err.message || "Failed");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleArr = (arr, setArr, val) => setArr(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  const sortedExperiences = [...experiences].sort((a, b) => {
    if (sortBy === "Price: Low to High") return a.price - b.price;
    if (sortBy === "Price: High to Low") return b.price - a.price;
    if (sortBy === "Highest Rated") return b.rating - a.rating;
    return 0;
  });

  if (detailPkg) {
    return <PackageDetailPage pkg={detailPkg} onBack={() => setDetailPkg(null)} startingFrom={startingFrom} />;
  }

  if (selectedCountry) {
    return (
      <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
        <div style={{ background: "#0a2240" }}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-5 border-b border-white/10">
              {[
                { label: "STARTING FROM", val: startingFrom, set: setStartingFrom, placeholder: "New Delhi" },
                { label: "GOING TO", val: goingTo || selectedCountry.name, set: setGoingTo, placeholder: "Vietnam" },
                { label: "STARTING DATE", val: startDate, set: setStartDate, placeholder: "Select", type: "date" },
                { label: "ROOMS & GUESTS", val: guests, set: setGuests, placeholder: "Select" },
              ].map((f) => (
                <div key={f.label} className="px-5 py-4 border-r border-white/10 hover:bg-white/5 transition cursor-pointer">
                  <p className="text-xs font-bold mb-1" style={{ color: "#4a9fd4", fontSize: "10px" }}>{f.label}</p>
                  {f.type === "date"
                    ? <input type="date" value={f.val} onChange={(e) => f.set(e.target.value)} className="bg-transparent text-white font-semibold text-sm outline-none w-full" />
                    : <input value={f.val} onChange={(e) => f.set(e.target.value)} placeholder={f.placeholder} className="bg-transparent text-white font-semibold text-sm outline-none w-full placeholder-white/50" />
                  }
                </div>
              ))}
              <button className="flex items-center justify-center font-bold text-white text-sm px-6 py-4 hover:opacity-90" style={{ background: "#1e90ff" }}>
                <Search className="w-4 h-4 mr-2" /> SEARCH
              </button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden" style={{ height: "220px" }}>
          <img src={selectedCountry.img} alt={selectedCountry.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />
          <div className="absolute inset-0 flex items-center px-8">
            <div>
              {/* <button onClick={() => setSelectedCountry(null)} className="flex items-center gap-1 text-white/70 text-sm mb-2 hover:text-white transition">
                <ChevronLeft className="w-4 h-4" /> Back to all destinations
              </button> */}
              <h1 className="text-3xl font-black text-white">{selectedCountry.name} Packages</h1>
              <p className="text-white/80 text-sm mt-1">{selectedCountry.packages} packages available</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-64 hidden md:block">
              <div className="bg-white rounded-xl sticky top-4" style={{ border: "1px solid #e8e8e8" }}>
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2"><SlidersHorizontal className="w-4 h-4" /> FILTERS</h3>
                  <button className="text-xs font-semibold" style={{ color: "#1e8449" }}>Reset All</button>
                </div>
                <div className="px-4 overflow-y-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
                  <FilterSection title="Buy Now, Pay Later">
                    <label className="flex items-center justify-between text-sm text-gray-600 cursor-pointer">
                      <div className="flex items-center gap-2"><input type="checkbox" checked={buyNowPay} onChange={(e) => setBuyNowPay(e.target.checked)} className="w-4 h-4 rounded" />Book @ ₹2,000</div>
                      <span className="text-gray-400 text-xs">(1)</span>
                    </label>
                  </FilterSection>
                  <FilterSection title="Themes">
                    <div className="space-y-2">{THEMES.map((t) => (<label key={t} className="flex items-center justify-between text-sm text-gray-600 cursor-pointer"><div className="flex items-center gap-2"><input type="checkbox" checked={selectedThemes.includes(t)} onChange={() => toggleArr(selectedThemes, setSelectedThemes, t)} className="w-4 h-4 rounded" />{t}</div><span className="text-gray-400 text-xs">({Math.floor(Math.random() * 20) + 1})</span></label>))}</div>
                  </FilterSection>
                  <FilterSection title="Package Type">
                    <div className="flex flex-wrap gap-2">{PACKAGE_TYPES.map((t) => (<button key={t} onClick={() => toggleArr(selectedTypes, setSelectedTypes, t)} className="px-3 py-1.5 rounded-lg text-xs font-medium border transition" style={{ background: selectedTypes.includes(t) ? "#1a5276" : "white", color: selectedTypes.includes(t) ? "white" : "#555", borderColor: selectedTypes.includes(t) ? "#1a5276" : "#ddd" }}>{t}</button>))}</div>
                  </FilterSection>
                  <FilterSection title="Duration">
                    <div className="space-y-2">{DURATION_OPTIONS.map((d) => (<label key={d} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"><input type="checkbox" checked={selectedDurations.includes(d)} onChange={() => toggleArr(selectedDurations, setSelectedDurations, d)} className="w-4 h-4 rounded" />{d}</label>))}</div>
                  </FilterSection>
                  <FilterSection title="Budget Per Person">
                    <div className="space-y-2">{BUDGET_OPTIONS.map((b) => (<label key={b} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"><input type="checkbox" checked={selectedBudgets.includes(b)} onChange={() => toggleArr(selectedBudgets, setSelectedBudgets, b)} className="w-4 h-4 rounded" />{b}</label>))}</div>
                  </FilterSection>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-xl mb-4 overflow-hidden" style={{ border: "1px solid #e8e8e8" }}>
                <div className="flex items-center border-b border-gray-100 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                  <button className="p-3 hover:bg-gray-50 flex-shrink-0"><ChevronLeft className="w-4 h-4 text-gray-400" /></button>
                  {PACKAGE_TABS.map((tab) => (<button key={tab} onClick={() => setActiveTab(tab)} className="px-4 py-3 text-sm font-semibold whitespace-nowrap flex-shrink-0 border-b-2 transition" style={{ color: activeTab === tab ? "#1e8449" : "#555", borderBottomColor: activeTab === tab ? "#1e8449" : "transparent" }}>{tab} {tab === "All Packages" && `(${sortedExperiences.length})`}</button>))}
                  <button className="p-3 hover:bg-gray-50 flex-shrink-0 ml-auto"><ChevronRight className="w-4 h-4 text-gray-400" /></button>
                </div>
                <div className="px-4 py-3 flex items-center justify-end gap-2">
                  <span className="text-sm text-gray-500">Sorted By:</span>
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="text-sm font-semibold text-gray-800 border border-gray-200 rounded-lg px-3 py-1.5 outline-none">
                    {["Popular", "Price: Low to High", "Price: High to Low", "Highest Rated"].map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[1,2,3,4].map((i) => (<div key={i} className="bg-white rounded-xl overflow-hidden animate-pulse"><div className="h-48 bg-gray-200" /><div className="p-4 space-y-3"><div className="h-4 bg-gray-200 rounded w-3/4" /><div className="h-3 bg-gray-200 rounded w-1/2" /></div></div>))}</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sortedExperiences.map((exp) => <PackageCard key={exp.id} exp={exp} onBook={setDetailPkg} />)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── HOME VIEW ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a5276 0%, #1a6b3c 50%, #145a32 100%)", minHeight: "420px" }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&fit=crop)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
        <div className="relative max-w-6xl mx-auto px-4 pt-12 pb-8">
          <div className="flex justify-center mb-4">
            <span className="text-white text-sm px-4 py-1.5 rounded-full flex items-center gap-2" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}>🏕️ 50,000+ Unique Stays Across India</span>
          </div>
          <h1 className="text-center text-white font-black mb-2" style={{ fontSize: "clamp(2rem,5vw,3.2rem)" }}>
            Discover Your Dream <span style={{ color: "#f39c12" }}>Escape</span>
          </h1>
          <p className="text-center text-white/80 mb-8">Handpicked holiday packages · Real reviews · Best prices</p>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {[
                { label: "STARTING FROM", val: startingFrom, set: setStartingFrom, placeholder: "New Delhi" },
                { label: "GOING TO", val: goingTo, set: setGoingTo, placeholder: "Vietnam, Bali, Dubai..." },
                { label: "STARTING DATE", val: startDate, set: setStartDate, placeholder: "Select", type: "date" },
                { label: "ROOMS & GUESTS", val: guests, set: setGuests, placeholder: "Select" },
              ].map((f, i) => (
                <div key={f.label} className={`flex items-center gap-3 px-5 py-4 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-gray-50 transition ${i === 3 ? "md:border-r-0" : ""}`}>
                  <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: "#e74c3c" }} />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#888", fontSize: "10px" }}>{f.label}</p>
                    {f.type === "date"
                      ? <input type="date" value={f.val} onChange={(e) => f.set(e.target.value)} className="w-full text-gray-800 font-semibold text-sm outline-none bg-transparent mt-0.5" />
                      : <input value={f.val} onChange={(e) => f.set(e.target.value)} placeholder={f.placeholder} className="w-full text-gray-800 font-semibold text-sm outline-none bg-transparent placeholder-gray-400 mt-0.5" />
                    }
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full flex items-center justify-center gap-2 font-bold text-white py-3.5 hover:opacity-90" style={{ background: "linear-gradient(135deg,#1a5276,#1e8449)" }}>
              <Search className="w-5 h-5" /> Search Packages
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Popular <span style={{ color: "#1e8449" }}>Destinations</span></h2>
          <button className="text-sm font-semibold flex items-center gap-1" style={{ color: "#1a5276" }}>See all <ChevronRight className="w-4 h-4" /></button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {POPULAR_COUNTRIES.map((country) => (
            <div key={country.name} onClick={() => { setSelectedCountry(country); setGoingTo(country.name); }} className="relative rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all" style={{ aspectRatio: "4/3" }}>
              <img src={country.img} alt={country.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,0.75) 0%,transparent 50%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white font-bold text-base">{country.name}</p>
                <p className="text-white/70 text-xs">{country.packages} packages</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Holiday Packages</h2>
            <p className="text-sm text-gray-500 mt-0.5">Curated stays with best prices</p>
          </div>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{[1,2,3].map((i) => (<div key={i} className="bg-white rounded-xl overflow-hidden animate-pulse"><div className="h-48 bg-gray-200" /><div className="p-4 space-y-3"><div className="h-4 bg-gray-200 rounded w-3/4" /></div></div>))}</div>
        ) : error ? (
          <div className="text-center py-10 text-gray-500">
            <AlertCircle className="w-10 h-10 mx-auto mb-2 text-red-400" />
            <p>{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {experiences.slice(0, 6).map((exp) => <PackageCard key={exp.id} exp={exp} onBook={setDetailPkg} />)}
          </div>
        )}
      </div>

      <div style={{ background: "#f7f8fa" }} className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-8">Why Book With Us?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Shield, title: "Free Cancellation", desc: "Up to 24 hours before", color: "#1a5276" },
              { icon: Award, title: "Best Price Guarantee", desc: "We match any price", color: "#1e8449" },
              { icon: Users, title: "24/7 Support", desc: "In 10+ languages", color: "#e67e22" },
              { icon: Sparkles, title: "Verified Reviews", desc: "Real traveler feedback", color: "#8e44ad" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="text-center p-5 bg-white rounded-xl" style={{ border: "1px solid #e8e8e8" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: `${item.color}15` }}>
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style>{`input[type="date"]::-webkit-calendar-picker-indicator{opacity:.5;cursor:pointer;}`}</style>
    </div>
  );
};

export default TripBestGallery;