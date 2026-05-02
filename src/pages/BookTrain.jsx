// import React, { useState, useEffect } from 'react';

// const Train = () => {
//   const [selectedClass, setSelectedClass] = useState('All Classes');
//   const [selectedTrain, setSelectedTrain] = useState(null);
//   const [fromLocation, setFromLocation] = useState('London (Any)');
//   const [toLocation, setToLocation] = useState('Manchester (Any)');
//   const [departureDate, setDepartureDate] = useState('Thu, Feb 12');
//   const [returnDate, setReturnDate] = useState(null);
//   const [showReturnDate, setShowReturnDate] = useState(false);
//   const [searchResults, setSearchResults] = useState([]);
//   const [sortOption, setSortOption] = useState('Departure (earliest)');
//   const [showDetails, setShowDetails] = useState({});
//   const [passengerCount, setPassengerCount] = useState(1);
//   const [showPassengerOptions, setShowPassengerOptions] = useState(false);
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [selectedDateIndex, setSelectedDateIndex] = useState(2); // Default to Thu, Feb 12

//   const initialTrains = [
//     {
//       id: 1,
//       class: '1st Class',
//       name: 'General Manager Express',
//       operator: 'National Express',
//       departureStation: 'London Victoria Coach Station',
//       arrivalStation: 'Manchester Central Coach Station',
//       departureTime: '08:00',
//       arrivalTime: '16:00',
//       duration: '8h',
//       type: 'Direct',
//       price: 3425.48,
//       originalPrice: 3800.00,
//       availableSeats: 5,
//       rating: 4.8,
//       amenities: ['WiFi', 'Meals', 'AC', 'Power Outlets', 'Refreshments'],
//       features: ['No Booking Fee', 'Flexible Ticket', 'Priority Boarding']
//     },
//     {
//       id: 2,
//       class: '2nd Class',
//       name: 'Senior Developer Fast',
//       operator: 'FLiXBUS',
//       departureStation: 'London Finchley Road (Stop CL)',
//       arrivalStation: 'Manchester (Shudehill Interchange)',
//       departureTime: '10:40',
//       arrivalTime: '15:20',
//       duration: '4h 40m',
//       type: 'Direct',
//       price: 1064.08,
//       originalPrice: 1200.00,
//       availableSeats: 12,
//       rating: 4.5,
//       amenities: ['WiFi', 'AC', 'Power Outlets'],
//       features: ['Fastest', 'Economy']
//     },
//     {
//       id: 3,
//       class: '3rd Class',
//       name: 'Junior Developer Coach',
//       operator: 'National Express',
//       departureStation: 'London Victoria Coach Station',
//       arrivalStation: 'Manchester Central Coach Station',
//       departureTime: '09:30',
//       arrivalTime: '14:10',
//       duration: '4h 40m',
//       type: 'Direct',
//       price: 1365.05,
//       originalPrice: 1500.00,
//       availableSeats: 25,
//       rating: 4.2,
//       amenities: ['AC', 'Power Outlets'],
//       features: ['Standard']
//     },
//     {
//       id: 4,
//       class: '4th Class',
//       name: 'Intern Economy',
//       operator: 'FLiXBUS',
//       departureStation: 'London Victoria Coach Station',
//       arrivalStation: 'Manchester (Shudehill Interchange)',
//       departureTime: '11:00',
//       arrivalTime: '16:30',
//       duration: '5h 30m',
//       type: 'Direct',
//       price: 1400.81,
//       originalPrice: 1550.00,
//       availableSeats: 40,
//       rating: 4.0,
//       amenities: ['AC'],
//       features: ['Budget']
//     },
//     {
//       id: 5,
//       class: '5th Class',
//       name: 'Entry Level Basic',
//       operator: 'National Express',
//       departureStation: 'London Victoria Coach Station',
//       arrivalStation: 'Manchester Central Coach Station',
//       departureTime: '02:00',
//       arrivalTime: '07:35',
//       duration: '5h 35m',
//       type: 'Direct',
//       price: 3425.48,
//       originalPrice: 3800.00,
//       availableSeats: 35,
//       rating: 3.8,
//       amenities: ['Basic Seating'],
//       features: ['Overnight', 'Economy']
//     }
//   ];

//   const classFilters = ['All Classes', '1st Class', '2nd Class', '3rd Class', '4th Class', '5th Class'];
//   const sortOptions = ['Departure (earliest)', 'Cheapest', 'Fastest', 'Direct only'];
//   const locations = ['London (Any)', 'Manchester (Any)', 'Birmingham (Any)', 'Liverpool (Any)', 'Glasgow (Any)', 'Edinburgh (Any)'];
  
//   const dates = [
//     { day: 'Tue', date: 'Feb 10' },
//     { day: 'Wed', date: 'Feb 11' },
//     { day: 'Thu', date: 'Feb 12' },
//     { day: 'Fri', date: 'Feb 13' },
//     { day: 'Sat', date: 'Feb 14' },
//     { day: 'Sun', date: 'Feb 15' },
//     { day: 'Mon', date: 'Feb 16' }
//   ];

//   // Initialize search results with all trains
//   useEffect(() => {
//     setSearchResults(initialTrains);
//   }, []);

//   // Filter trains based on selected class
//   useEffect(() => {
//     let filtered = initialTrains;
    
//     if (selectedClass !== 'All Classes') {
//       filtered = filtered.filter(train => train.class === selectedClass);
//     }
    
//     // Apply sorting
//     filtered = sortTrains(filtered, sortOption);
    
//     setSearchResults(filtered);
//   }, [selectedClass, sortOption]);

//   const sortTrains = (trains, option) => {
//     const sorted = [...trains];
    
//     switch (option) {
//       case 'Cheapest':
//         return sorted.sort((a, b) => a.price - b.price);
//       case 'Fastest':
//         return sorted.sort((a, b) => {
//           const durationA = parseDuration(a.duration);
//           const durationB = parseDuration(b.duration);
//           return durationA - durationB;
//         });
//       case 'Direct only':
//         return sorted.filter(train => train.type === 'Direct');
//       case 'Departure (earliest)':
//       default:
//         return sorted.sort((a, b) => a.departureTime.localeCompare(b.departureTime));
//     }
//   };

//   const parseDuration = (durationStr) => {
//     // Convert duration like "4h 40m" or "8h" to minutes
//     const hoursMatch = durationStr.match(/(\d+)h/);
//     const minutesMatch = durationStr.match(/(\d+)m/);
    
//     const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;
//     const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;
    
//     return hours * 60 + minutes;
//   };

//   const handleSearch = () => {
//     // In a real app, this would make an API call
//     // For now, we'll just filter based on locations and sort
//     let results = initialTrains;
    
//     // Filter by class if selected
//     if (selectedClass !== 'All Classes') {
//       results = results.filter(train => train.class === selectedClass);
//     }
    
//     // Sort based on current sort option
//     results = sortTrains(results, sortOption);
    
//     setSearchResults(results);
    
//     // Show success message (in a real app, this would be a toast or notification)
//     alert(`Searching for trains from ${fromLocation} to ${toLocation} on ${departureDate}`);
//   };

//   const handleSelectTrain = (trainId) => {
//     setSelectedTrain(trainId);
//     // In a real app, this would navigate to booking page
//     alert(`Selected train ${trainId}. Proceeding to booking...`);
//   };

//   const handleDetailsClick = (trainId, e) => {
//     e.stopPropagation();
//     setShowDetails(prev => ({
//       ...prev,
//       [trainId]: !prev[trainId]
//     }));
//   };

//   const handleSortOptionClick = (option) => {
//     setSortOption(option);
//   };

//   const handleDateSelect = (index) => {
//     setSelectedDateIndex(index);
//     const selected = dates[index];
//     setDepartureDate(`${selected.day}, ${selected.date}`);
//     setShowDatePicker(false);
//   };

//   const handleReturnDateToggle = () => {
//     if (!showReturnDate) {
//       const nextDayIndex = (selectedDateIndex + 1) % dates.length;
//       const nextDay = dates[nextDayIndex];
//       setReturnDate(`${nextDay.day}, ${nextDay.date}`);
//     } else {
//       setReturnDate(null);
//     }
//     setShowReturnDate(!showReturnDate);
//   };

//   const handlePassengerChange = (change) => {
//     const newCount = passengerCount + change;
//     if (newCount >= 1 && newCount <= 10) {
//       setPassengerCount(newCount);
//     }
//   };

//   const togglePassengerOptions = () => {
//     setShowPassengerOptions(!showPassengerOptions);
//   };

//   const handleLocationChange = (type) => {
//     const currentIndex = locations.indexOf(type === 'from' ? fromLocation : toLocation);
//     const nextIndex = (currentIndex + 1) % locations.length;
    
//     if (type === 'from') {
//       setFromLocation(locations[nextIndex]);
//     } else {
//       setToLocation(locations[nextIndex]);
//     }
//   };

//   const calculateSavings = (price, originalPrice) => {
//     return (originalPrice - price).toFixed(2);
//   };

//   const getClassColor = (trainClass) => {
//     switch (trainClass) {
//       case '1st Class': return 'bg-purple-100 text-purple-700';
//       case '2nd Class': return 'bg-blue-100 text-blue-700';
//       case '3rd Class': return 'bg-green-100 text-green-700';
//       case '4th Class': return 'bg-yellow-100 text-yellow-700';
//       case '5th Class': return 'bg-red-100 text-red-700';
//       default: return 'bg-gray-100 text-gray-700';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Search Section */}
//         <div className="bg-white rounded-xl shadow-md p-6 mb-6">
//           <div className="grid grid-cols-4 gap-4 mb-4">
//             {/* From Location */}
//             <div>
//               <div className="text-sm text-gray-500 mb-1">From</div>
//               <div 
//                 className="flex items-center border rounded-lg p-3 cursor-pointer hover:border-blue-400 transition-colors"
//                 onClick={() => handleLocationChange('from')}
//               >
//                 <span className="font-medium">{fromLocation}</span>
//                 <span className="ml-auto text-gray-400">↻</span>
//               </div>
//             </div>
            
//             {/* To Location */}
//             <div>
//               <div className="text-sm text-gray-500 mb-1">To</div>
//               <div 
//                 className="flex items-center border rounded-lg p-3 cursor-pointer hover:border-blue-400 transition-colors"
//                 onClick={() => handleLocationChange('to')}
//               >
//                 <span className="font-medium">{toLocation}</span>
//                 <span className="ml-auto text-gray-400">↻</span>
//               </div>
//             </div>
            
//             {/* Departure Date */}
//             <div>
//               <div className="text-sm text-gray-500 mb-1">Departure time</div>
//               <div 
//                 className="flex items-center justify-between border rounded-lg p-3 cursor-pointer hover:border-blue-400 transition-colors"
//                 onClick={() => setShowDatePicker(!showDatePicker)}
//               >
//                 <span className="font-medium">{departureDate}</span>
//                 <span className="text-gray-400">▾</span>
//               </div>
//             </div>
            
//             {/* Return Date */}
//             <div>
//               <div className="text-sm text-gray-500 mb-1">Return time</div>
//               <div 
//                 className={`flex items-center justify-between border rounded-lg p-3 cursor-pointer ${showReturnDate ? 'bg-white' : 'bg-gray-50'} hover:border-blue-400 transition-colors`}
//                 onClick={handleReturnDateToggle}
//               >
//                 <span className={showReturnDate ? 'font-medium' : 'text-gray-400'}>
//                   {showReturnDate ? returnDate : 'Add return trip'}
//                 </span>
//                 <span className="text-gray-400">▾</span>
//               </div>
//             </div>
//           </div>
          
//           {/* Date Picker Dropdown */}
//           {showDatePicker && (
//             <div className="mb-4 bg-white border rounded-lg shadow-lg p-4">
//               <div className="flex justify-between mb-2">
//                 <div className="font-medium">Select departure date:</div>
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
          
//           {/* Passenger Options */}
//           {showPassengerOptions && (
//             <div className="mb-4 bg-white border rounded-lg shadow-lg p-4">
//               <div className="flex justify-between items-center mb-2">
//                 <div className="font-medium">Passengers</div>
//                 <button 
//                   className="text-blue-600 hover:text-blue-800"
//                   onClick={() => setShowPassengerOptions(false)}
//                 >
//                   ✕
//                 </button>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div>Adults</div>
//                 <div className="flex items-center gap-2">
//                   <button 
//                     className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
//                     onClick={() => handlePassengerChange(-1)}
//                   >
//                     -
//                   </button>
//                   <span className="font-medium">{passengerCount}</span>
//                   <button 
//                     className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
//                     onClick={() => handlePassengerChange(1)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
          
//           <div className="flex justify-between items-center">
//             <div 
//               className="text-sm text-gray-600 cursor-pointer hover:text-blue-600"
//               onClick={togglePassengerOptions}
//             >
//               {passengerCount} adult{passengerCount > 1 ? 's' : ''} • No Railcards
//             </div>
//             <button 
//               className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
//               onClick={handleSearch}
//             >
//               Search
//             </button>
//           </div>
//         </div>

//         {/* Date Selector */}
//         <div className="bg-white rounded-xl shadow-md p-4 mb-6">
//           <div className="flex justify-between items-center mb-4">
//             <div className="text-lg font-bold">{departureDate}</div>
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

//         {/* Filters */}
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex gap-2">
//             {sortOptions.map((option, i) => (
//               <button 
//                 key={i}
//                 className={`px-4 py-2 rounded-lg border ${sortOption === option ? 'bg-blue-100 text-blue-600 border-blue-200' : 'bg-white border-gray-300 hover:bg-gray-50'} transition-colors`}
//                 onClick={() => handleSortOptionClick(option)}
//               >
//                 {option} {sortOption === option ? '▾' : ''}
//               </button>
//             ))}
//           </div>
//           <div className="text-sm text-gray-600">No booking fee</div>
//         </div>

//         {/* Results Count */}
//         <div className="mb-4 text-gray-600">
//           Found {searchResults.length} train{searchResults.length !== 1 ? 's' : ''}
//           {selectedClass !== 'All Classes' && ` in ${selectedClass}`}
//         </div>

//         {/* Train Listings */}
//         <div className="space-y-3">
//           {searchResults.map((train) => (
//             <div 
//               key={train.id}
//               className={`bg-white rounded-xl border-2 ${selectedTrain === train.id ? 'border-blue-500' : 'border-gray-200'} hover:border-blue-300 transition-colors cursor-pointer`}
//               onClick={() => setSelectedTrain(train.id)}
//             >
//               <div className="p-4">
//                 <div className="flex justify-between items-start">
//                   {/* Left Column - Timing */}
//                   <div className="w-32">
//                     <div className="text-2xl font-bold">{train.departureTime}</div>
//                     <div className="text-sm text-gray-500">{train.departureStation}</div>
//                   </div>
                  
//                   {/* Middle Column - Duration & Info */}
//                   <div className="flex-1 px-8">
//                     <div className="flex items-center justify-center mb-2">
//                       <div className="w-full h-px bg-gray-300 relative">
//                         <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500"></div>
//                         <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500"></div>
//                       </div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-blue-600 font-medium">{train.duration} • {train.type}</div>
//                       <div className="text-sm text-gray-500">{train.operator}</div>
//                     </div>
//                   </div>
                  
//                   {/* Right Column - Arrival & Price */}
//                   <div className="w-32 text-right">
//                     <div className="text-2xl font-bold">{train.arrivalTime}</div>
//                     <div className="text-sm text-gray-500">{train.arrivalStation}</div>
//                   </div>
                  
//                   <div className="w-48 pl-8 border-l">
//                     <div className="text-right">
//                       <div className="text-2xl font-bold text-blue-600">₹{train.price.toFixed(2)}</div>
//                       <div className="text-sm text-gray-500 line-through">₹{train.originalPrice.toFixed(2)}</div>
//                       <div className="text-xs text-green-600 mt-1">Save ₹{calculateSavings(train.price, train.originalPrice)}</div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Bottom Row - Features */}
//                 <div className="flex justify-between items-center mt-4 pt-4 border-t">
//                   <div className="flex gap-2 flex-wrap">
//                     <span className={`px-3 py-1 rounded-full text-sm font-medium ${getClassColor(train.class)}`}>
//                       {train.class}
//                     </span>
//                     {train.features.map((feature, i) => (
//                       <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
//                         {feature}
//                       </span>
//                     ))}
//                     <div className="flex items-center text-amber-500 ml-2">
//                       {[...Array(5)].map((_, i) => (
//                         <svg key={i} className={`w-4 h-4 ${i < Math.floor(train.rating) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                       <span className="text-gray-600 ml-1 text-sm">{train.rating}</span>
//                     </div>
//                   </div>
                  
//                   <div className="flex gap-2">
//                     <button 
//                       className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
//                       onClick={(e) => handleDetailsClick(train.id, e)}
//                     >
//                       {showDetails[train.id] ? 'Hide Details' : 'Details'}
//                     </button>
//                     <button 
//                       className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleSelectTrain(train.id);
//                       }}
//                     >
//                       Select
//                     </button>
//                   </div>
//                 </div>
                
//                 {/* Additional Details Section */}
//                 {showDetails[train.id] && (
//                   <div className="mt-4 pt-4 border-t">
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <div className="font-medium mb-2">Amenities:</div>
//                         <div className="flex flex-wrap gap-2">
//                           {train.amenities.map((amenity, i) => (
//                             <span key={i} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
//                               {amenity}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                       <div>
//                         <div className="font-medium mb-2">Trip Details:</div>
//                         <div className="text-sm text-gray-600">
//                           <div>Departure: {train.departureTime} from {train.departureStation}</div>
//                           <div>Arrival: {train.arrivalTime} at {train.arrivalStation}</div>
//                           <div>Available Seats: {train.availableSeats}</div>
//                           <div>Train Name: {train.name}</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Class Filter Buttons */}
//         <div className="mt-8 flex justify-center gap-2">
//           {classFilters.map((filter, index) => (
//             <button
//               key={index}
//               className={`px-6 py-3 rounded-lg font-medium transition-colors ${selectedClass === filter ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border hover:bg-gray-50'}`}
//               onClick={() => setSelectedClass(filter)}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         {/* No Results Message */}
//         {searchResults.length === 0 && (
//           <div className="text-center py-12">
//             <div className="text-gray-500 text-lg mb-2">No trains found</div>
//             <div className="text-gray-400">Try changing your filters or search criteria</div>
//           </div>
//         )}

//         {/* Footer Info */}
//         <div className="mt-8 text-center text-gray-500 text-sm">
//           <p>All prices include taxes and fees. Free cancellation up to 24 hours before departure.</p>
//           <p className="mt-1">Showing results for: {fromLocation} → {toLocation} on {departureDate}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Train;
























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