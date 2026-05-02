// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const SeatSelectionPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { bus, searchParams, passengers } = location.state || {};
  
//   // Generate seat layout with 56 seats
//   const generateSeats = (layout) => {
//     if (layout === 'sleeper') {
//       return generateSleeperSeats();
//     } else {
//       return generateSeaterSeats();
//     }
//   };

//   const generateSleeperSeats = () => {
//     const seats = [];
//     // 56 seats for sleeper - 14 rows with 4 seats each = 56 seats
//     const rows = 14;
    
//     for (let row = 1; row <= rows; row++) {
//       for (let seat = 1; seat <= 4; seat++) {
//         const seatLetter = String.fromCharCode(64 + seat);
//         const seatNumber = `${row}${seatLetter}`;
//         seats.push({
//           id: seatNumber,
//           number: seatNumber,
//           type: seat <= 2 ? 'lower' : 'upper',
//           isAvailable: Math.random() > 0.3,
//           price: seat <= 2 ? bus.price : bus.price * 0.9,
//           isSelected: false,
//           row: row,
//           column: seatLetter, // Store as string, not number
//           position: seat <= 2 ? 'left' : 'right' // For sleeper layout
//         });
//       }
//     }
//     return seats;
//   };

//   const generateSeaterSeats = () => {
//     const seats = [];
//     const totalRows = 10; // 10 rows for 50 seats
    
//     // First 10 rows: Left side 2 seats, Right side 3 seats
//     for (let row = 1; row <= totalRows; row++) {
//       // Left side - 2 seats (A, B) - Window and Aisle
//       seats.push({
//         id: `${row}A`,
//         number: `${row}A`,
//         type: 'window-left',
//         position: 'left',
//         isAvailable: Math.random() > 0.3,
//         price: bus.price,
//         isSelected: false,
//         row: row,
//         column: 'A'
//       });
      
//       seats.push({
//         id: `${row}B`,
//         number: `${row}B`,
//         type: 'aisle-left',
//         position: 'left',
//         isAvailable: Math.random() > 0.3,
//         price: bus.price * 0.95,
//         isSelected: false,
//         row: row,
//         column: 'B'
//       });
      
//       // Right side - 3 seats (C, D, E) - Aisle, Middle, Window
//       seats.push({
//         id: `${row}C`,
//         number: `${row}C`,
//         type: 'aisle-right',
//         position: 'right',
//         isAvailable: Math.random() > 0.3,
//         price: bus.price * 0.95,
//         isSelected: false,
//         row: row,
//         column: 'C'
//       });
      
//       seats.push({
//         id: `${row}D`,
//         number: `${row}D`,
//         type: 'middle',
//         position: 'right',
//         isAvailable: Math.random() > 0.3,
//         price: bus.price * 0.95,
//         isSelected: false,
//         row: row,
//         column: 'D'
//       });
      
//       seats.push({
//         id: `${row}E`,
//         number: `${row}E`,
//         type: 'window-right',
//         position: 'right',
//         isAvailable: Math.random() > 0.3,
//         price: bus.price,
//         isSelected: false,
//         row: row,
//         column: 'E'
//       });
//     }
    
//     // Last row - 6 seats at the back (Row 11)
//     const lastRow = totalRows + 1;
    
//     // Left side - 3 seats (A, B, C)
//     seats.push({
//       id: `${lastRow}A`,
//       number: `${lastRow}A`,
//       type: 'window-left',
//       position: 'left',
//       isAvailable: Math.random() > 0.3,
//       price: bus.price,
//       isSelected: false,
//       row: lastRow,
//       column: 'A'
//     });
    
//     seats.push({
//       id: `${lastRow}B`,
//       number: `${lastRow}B`,
//       type: 'aisle-left',
//       position: 'left',
//       isAvailable: Math.random() > 0.3,
//       price: bus.price * 0.95,
//       isSelected: false,
//       row: lastRow,
//       column: 'B'
//     });
    
//     seats.push({
//       id: `${lastRow}C`,
//       number: `${lastRow}C`,
//       type: 'middle-left',
//       position: 'left',
//       isAvailable: Math.random() > 0.3,
//       price: bus.price * 0.95,
//       isSelected: false,
//       row: lastRow,
//       column: 'C'
//     });
    
//     // Right side - 3 seats (D, E, F)
//     seats.push({
//       id: `${lastRow}D`,
//       number: `${lastRow}D`,
//       type: 'aisle-right',
//       position: 'right',
//       isAvailable: Math.random() > 0.3,
//       price: bus.price * 0.95,
//       isSelected: false,
//       row: lastRow,
//       column: 'D'
//     });
    
//     seats.push({
//       id: `${lastRow}E`,
//       number: `${lastRow}E`,
//       type: 'middle-right',
//       position: 'right',
//       isAvailable: Math.random() > 0.3,
//       price: bus.price * 0.95,
//       isSelected: false,
//       row: lastRow,
//       column: 'E'
//     });
    
//     seats.push({
//       id: `${lastRow}F`,
//       number: `${lastRow}F`,
//       type: 'window-right',
//       position: 'right',
//       isAvailable: Math.random() > 0.3,
//       price: bus.price,
//       isSelected: false,
//       row: lastRow,
//       column: 'F'
//     });
    
//     return seats;
//   };

//   const [seats, setSeats] = useState(generateSeats(bus?.seatLayout || 'seater'));
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [passengerDetails, setPassengerDetails] = useState(
//     Array.from({ length: passengers || 1 }, (_, i) => ({
//       id: i + 1,
//       name: '',
//       age: '',
//       gender: 'Male',
//       seat: ''
//     }))
//   );

//   const handleSeatClick = (seat) => {
//     if (!seat.isAvailable) return;
    
//     if (selectedSeats.length >= passengers && !seat.isSelected) {
//       alert(`You can select only ${passengers} seat(s)`);
//       return;
//     }
    
//     const updatedSeats = seats.map(s => 
//       s.id === seat.id ? { ...s, isSelected: !s.isSelected } : s
//     );
    
//     setSeats(updatedSeats);
    
//     if (seat.isSelected) {
//       setSelectedSeats(selectedSeats.filter(s => s.id !== seat.id));
//     } else {
//       setSelectedSeats([...selectedSeats, seat]);
//     }
//   };

//   const handlePassengerChange = (index, field, value) => {
//     const updatedDetails = [...passengerDetails];
//     updatedDetails[index][field] = value;
    
//     if (field === 'seat' && selectedSeats[index]) {
//       const updatedSeats = seats.map(s => 
//         s.id === selectedSeats[index].id ? { ...s, isSelected: false } : s
//       );
//       setSeats(updatedSeats);
//     }
    
//     setPassengerDetails(updatedDetails);
//   };

//   const calculateTotal = () => {
//     return selectedSeats.reduce((total, seat) => total + seat.price, 0);
//   };

//   const handleProceedToPayment = () => {
//     if (selectedSeats.length !== passengers) {
//       alert(`Please select ${passengers} seat(s)`);
//       return;
//     }
    
//     for (let i = 0; i < passengerDetails.length; i++) {
//       if (!passengerDetails[i].name || !passengerDetails[i].age) {
//         alert(`Please fill all passenger details for Passenger ${i + 1}`);
//         return;
//       }
//     }
    
//     const bookingData = {
//       bus: bus,
//       searchParams: searchParams,
//       selectedSeats: selectedSeats,
//       passengerDetails: passengerDetails,
//       totalAmount: calculateTotal(),
//       bookingTime: new Date().toISOString(),
//       bookingId: `BUS${Date.now()}${Math.floor(Math.random() * 1000)}`
//     };
    
//     navigate('/payment', { state: bookingData });
//   };

//   if (!bus) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="text-red-500 text-lg mb-2">No bus selected</div>
//           <button 
//             onClick={() => navigate('/')}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg"
//           >
//             Go Back to Search
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const totalAmount = calculateTotal();

//   // Group seats by row for better display
//   const seatsByRow = seats.reduce((acc, seat) => {
//     if (!acc[seat.row]) {
//       acc[seat.row] = [];
//     }
//     acc[seat.row].push(seat);
//     return acc;
//   }, {});

//   // Sort seats within a row
//   const sortSeatsByColumn = (seats) => {
//     return seats.sort((a, b) => {
//       if (a.column < b.column) return -1;
//       if (a.column > b.column) return 1;
//       return 0;
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">Select Your Seats</h1>
//           <p className="text-gray-600">{bus.name} • {bus.class} • {bus.busNumber}</p>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Left Column - Bus Info and Seat Map */}
//           <div className="lg:w-2/3">
//             {/* Bus Journey Info */}
//             <div className="bg-white rounded-xl shadow-md p-6 mb-6">
//               <div className="flex items-center justify-between mb-4">
//                 <div>
//                   <div className="text-xl font-bold">{bus.departureTime} → {bus.arrivalTime}</div>
//                   <div className="text-gray-600">{bus.departureStation} to {bus.arrivalStation}</div>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-lg font-bold text-blue-600">₹{bus.price.toFixed(2)} per seat</div>
//                   <div className="text-sm text-gray-500">{bus.duration} journey</div>
//                 </div>
//               </div>
              
//               <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap">
//                 <div className="flex items-center gap-2">
//                   <div className="w-4 h-4 bg-green-100 border-2 border-green-500 rounded"></div>
//                   Available
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-4 h-4 bg-red-100 border-2 border-red-500 rounded"></div>
//                   Booked
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-4 h-4 bg-blue-100 border-2 border-blue-500 rounded"></div>
//                   Selected
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-4 h-4 bg-yellow-100 border-2 border-yellow-500 rounded"></div>
//                   Window Seat
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-4 h-4 bg-purple-100 border-2 border-purple-500 rounded"></div>
//                   Aisle Seat
//                 </div>
//                 {bus.seatLayout === 'sleeper' && (
//                   <>
//                     <div className="flex items-center gap-2">
//                       <div className="w-4 h-4 bg-amber-100 border-2 border-amber-500 rounded"></div>
//                       Lower Berth
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-4 h-4 bg-indigo-100 border-2 border-indigo-500 rounded"></div>
//                       Upper Berth
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>

//             {/* Seat Map */}
//             <div className="bg-white rounded-xl shadow-md p-6 mb-6 overflow-x-auto">
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl font-bold text-gray-800">Select Seats ({passengers} passenger(s))</h2>
//                 <div className="text-lg font-bold text-blue-600">Total: ₹{totalAmount.toFixed(2)}</div>
//               </div>

//               {/* Bus Front */}
//               <div className="flex justify-center mb-8">
//                 <div className="bg-gray-800 text-white px-6 py-2 rounded-lg">
//                   <div className="text-center">Driver</div>
//                   <div className="text-xs text-center">FRONT</div>
//                 </div>
//               </div>

//               {/* Seat Grid */}
//               <div className="space-y-4">
//                 {Object.keys(seatsByRow)
//                   .sort((a, b) => parseInt(a) - parseInt(b))
//                   .map(row => (
//                     <div key={row} className="flex items-center gap-4">
//                       <div className="w-8 text-center font-medium text-gray-500">Row {row}</div>
//                       <div className="flex flex-1 gap-8">
//                         {/* Left side seats */}
//                         <div className="flex gap-2">
//                           {sortSeatsByColumn(
//                             seatsByRow[row].filter(seat => 
//                               bus.seatLayout === 'sleeper' 
//                                 ? seat.position === 'left' || seat.column === 'A' || seat.column === 'B'
//                                 : seat.position === 'left' || seat.column <= 'B'
//                             )
//                           ).map(seat => (
//                             <button
//                               key={seat.id}
//                               onClick={() => handleSeatClick(seat)}
//                               disabled={!seat.isAvailable}
//                               className={`
//                                 relative w-14 h-14 rounded-lg border-2 transition-all text-center
//                                 ${!seat.isAvailable 
//                                   ? 'bg-red-100 border-red-300 cursor-not-allowed' 
//                                   : seat.isSelected 
//                                     ? 'bg-blue-100 border-blue-500' 
//                                     : bus.seatLayout === 'sleeper'
//                                       ? seat.type === 'lower'
//                                         ? 'bg-amber-50 border-amber-300 hover:border-amber-500'
//                                         : 'bg-indigo-50 border-indigo-300 hover:border-indigo-500'
//                                       : seat.type?.includes('window')
//                                         ? 'bg-yellow-50 border-yellow-300 hover:border-yellow-500'
//                                         : 'bg-purple-50 border-purple-300 hover:border-purple-500'
//                                 }
//                               `}
//                             >
//                               <div className="text-xs font-medium">{seat.number}</div>
//                               <div className="text-[10px] text-gray-500">
//                                 {bus.seatLayout === 'sleeper' 
//                                   ? seat.type === 'lower' ? 'LOW' : 'UPP'
//                                   : seat.type?.includes('window') ? 'WIN' : 
//                                     seat.type?.includes('aisle') ? 'AIS' : 
//                                     seat.type?.includes('middle') ? 'MID' : ''
//                                 }
//                               </div>
//                               {!seat.isAvailable && (
//                                 <div className="absolute inset-0 flex items-center justify-center">
//                                   <div className="w-6 h-0.5 bg-red-400 transform rotate-45"></div>
//                                 </div>
//                               )}
//                             </button>
//                           ))}
//                         </div>
                        
//                         {/* Aisle space */}
//                         <div className="w-8 flex items-center justify-center">
//                           <span className="text-gray-400 text-xs">AISLE</span>
//                         </div>
                        
//                         {/* Right side seats */}
//                         <div className="flex gap-2">
//                           {sortSeatsByColumn(
//                             seatsByRow[row].filter(seat => 
//                               bus.seatLayout === 'sleeper'
//                                 ? seat.position === 'right' || seat.column === 'C' || seat.column === 'D'
//                                 : seat.position === 'right' || seat.column >= 'C'
//                             )
//                           ).map(seat => (
//                             <button
//                               key={seat.id}
//                               onClick={() => handleSeatClick(seat)}
//                               disabled={!seat.isAvailable}
//                               className={`
//                                 relative w-14 h-14 rounded-lg border-2 transition-all text-center
//                                 ${!seat.isAvailable 
//                                   ? 'bg-red-100 border-red-300 cursor-not-allowed' 
//                                   : seat.isSelected 
//                                     ? 'bg-blue-100 border-blue-500' 
//                                     : bus.seatLayout === 'sleeper'
//                                       ? seat.type === 'lower'
//                                         ? 'bg-amber-50 border-amber-300 hover:border-amber-500'
//                                         : 'bg-indigo-50 border-indigo-300 hover:border-indigo-500'
//                                       : seat.type?.includes('window')
//                                         ? 'bg-yellow-50 border-yellow-300 hover:border-yellow-500'
//                                         : 'bg-purple-50 border-purple-300 hover:border-purple-500'
//                                 }
//                               `}
//                             >
//                               <div className="text-xs font-medium">{seat.number}</div>
//                               <div className="text-[10px] text-gray-500">
//                                 {bus.seatLayout === 'sleeper' 
//                                   ? seat.type === 'lower' ? 'LOW' : 'UPP'
//                                   : seat.type?.includes('window') ? 'WIN' : 
//                                     seat.type?.includes('aisle') ? 'AIS' : 
//                                     seat.type?.includes('middle') ? 'MID' : ''
//                                 }
//                               </div>
//                               {!seat.isAvailable && (
//                                 <div className="absolute inset-0 flex items-center justify-center">
//                                   <div className="w-6 h-0.5 bg-red-400 transform rotate-45"></div>
//                                 </div>
//                               )}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//               </div>

//               {/* Bus Back */}
//               <div className="flex justify-center mt-8">
//                 <div className="bg-gray-700 text-white px-6 py-2 rounded-lg">
//                   <div className="text-xs text-center">BACK</div>
//                 </div>
//               </div>

//               {/* Seat Legend */}
//               <div className="mt-8 p-4 bg-gray-50 rounded-lg">
//                 <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//                   <div className="flex items-center gap-2">
//                     <div className="w-6 h-6 bg-green-100 border-2 border-green-500 rounded"></div>
//                     <span className="text-sm">Available</span>
//                   </div>
//                   {bus.seatLayout === 'sleeper' ? (
//                     <>
//                       <div className="flex items-center gap-2">
//                         <div className="w-6 h-6 bg-amber-100 border-2 border-amber-500 rounded"></div>
//                         <span className="text-sm">Lower Berth</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <div className="w-6 h-6 bg-indigo-100 border-2 border-indigo-500 rounded"></div>
//                         <span className="text-sm">Upper Berth</span>
//                       </div>
//                     </>
//                   ) : (
//                     <>
//                       <div className="flex items-center gap-2">
//                         <div className="w-6 h-6 bg-yellow-100 border-2 border-yellow-500 rounded"></div>
//                         <span className="text-sm">Window Seat</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <div className="w-6 h-6 bg-purple-100 border-2 border-purple-500 rounded"></div>
//                         <span className="text-sm">Aisle/Middle Seat</span>
//                       </div>
//                     </>
//                   )}
//                   <div className="flex items-center gap-2">
//                     <div className="w-6 h-6 bg-blue-100 border-2 border-blue-500 rounded"></div>
//                     <span className="text-sm">Selected</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-6 h-6 bg-red-100 border-2 border-red-500 rounded"></div>
//                     <span className="text-sm">Booked</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Booking Summary and Passenger Details */}
//           <div className="lg:w-1/3">
//             {/* Booking Summary */}
//             <div className="bg-white rounded-xl shadow-md p-6 mb-6 sticky top-4">
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Booking Summary</h2>
              
//               <div className="space-y-4">
//                 <div>
//                   <div className="text-sm text-gray-500">Route</div>
//                   <div className="font-medium">{searchParams?.fromCity} → {searchParams?.toCity}</div>
//                 </div>
                
//                 <div>
//                   <div className="text-sm text-gray-500">Date & Time</div>
//                   <div className="font-medium">
//                     {searchParams?.date ? new Date(searchParams.date).toLocaleDateString() : 'N/A'} • {bus.departureTime}
//                   </div>
//                 </div>
                
//                 <div>
//                   <div className="text-sm text-gray-500">Bus Details</div>
//                   <div className="font-medium">{bus.name} ({bus.class})</div>
//                   <div className="text-sm text-gray-600">{bus.busNumber}</div>
//                 </div>
                
//                 <div>
//                   <div className="text-sm text-gray-500">Selected Seats</div>
//                   <div className="font-medium">
//                     {selectedSeats.length > 0 
//                       ? selectedSeats.map(s => s.number).join(', ')
//                       : 'No seats selected'
//                     }
//                   </div>
//                 </div>
                
//                 <div className="pt-4 border-t">
//                   <div className="flex justify-between mb-2">
//                     <span>Base Fare ({selectedSeats.length} seat(s))</span>
//                     <span>₹{totalAmount.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between mb-2">
//                     <span>Taxes & Fees (18%)</span>
//                     <span>₹{(totalAmount * 0.18).toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between mb-2">
//                     <span>Convenience Fee</span>
//                     <span className="text-green-600">FREE</span>
//                   </div>
//                   <div className="flex justify-between text-lg font-bold pt-4 border-t">
//                     <span>Total Amount</span>
//                     <span className="text-blue-600">₹{(totalAmount * 1.18).toFixed(2)}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Passenger Details */}
//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h2 className="text-xl font-bold text-gray-800 mb-4">Passenger Details</h2>
              
//               <div className="space-y-4">
//                 {passengerDetails.map((passenger, index) => (
//                   <div key={passenger.id} className="p-4 border rounded-lg">
//                     <h3 className="font-medium mb-3">Passenger {index + 1}</h3>
                    
//                     <div className="space-y-3">
//                       <div>
//                         <label className="block text-sm text-gray-600 mb-1">Full Name</label>
//                         <input
//                           type="text"
//                           value={passenger.name}
//                           onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
//                           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           placeholder="Enter full name"
//                         />
//                       </div>
                      
//                       <div className="grid grid-cols-2 gap-3">
//                         <div>
//                           <label className="block text-sm text-gray-600 mb-1">Age</label>
//                           <input
//                             type="number"
//                             value={passenger.age}
//                             onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Age"
//                             min="1"
//                             max="100"
//                           />
//                         </div>
                        
//                         <div>
//                           <label className="block text-sm text-gray-600 mb-1">Gender</label>
//                           <select
//                             value={passenger.gender}
//                             onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           >
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                             <option value="Other">Other</option>
//                           </select>
//                         </div>
//                       </div>
                      
//                       <div>
//                         <label className="block text-sm text-gray-600 mb-1">Seat Number</label>
//                         <div className="px-4 py-2 border rounded-lg bg-gray-50">
//                           {selectedSeats[index] ? selectedSeats[index].number : 'Not selected'}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Action Buttons */}
//               <div className="mt-6 space-y-3">
//                 <button
//                   onClick={handleProceedToPayment}
//                   disabled={selectedSeats.length !== passengers}
//                   className={`w-full py-3 rounded-lg font-medium transition-colors ${
//                     selectedSeats.length === passengers 
//                       ? 'bg-blue-600 text-white hover:bg-blue-700' 
//                       : 'bg-gray-200 text-gray-500 cursor-not-allowed'
//                   }`}
//                 >
//                   Proceed to Payment
//                 </button>
                
//                 <button
//                   onClick={() => navigate('/')}
//                   className="w-full py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
//                 >
//                   Change Bus
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SeatSelectionPage;
























import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SeatSelectionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus, searchParams, passengers } = location.state || {};

  const generateSeats = (layout) => {
    if (layout === 'sleeper') return generateSleeperSeats();
    return generateSeaterSeats();
  };

  const generateSleeperSeats = () => {
    const seats = [];
    for (let row = 1; row <= 14; row++) {
      for (let seat = 1; seat <= 4; seat++) {
        const seatLetter = String.fromCharCode(64 + seat);
        seats.push({
          id: `${row}${seatLetter}`, number: `${row}${seatLetter}`,
          type: seat <= 2 ? 'lower' : 'upper',
          isAvailable: Math.random() > 0.3,
          price: seat <= 2 ? bus.price : bus.price * 0.9,
          isSelected: false, row, column: seatLetter,
          position: seat <= 2 ? 'left' : 'right'
        });
      }
    }
    return seats;
  };

  const generateSeaterSeats = () => {
    const seats = [];
    for (let row = 1; row <= 10; row++) {
      ['A','B'].forEach(col => seats.push({
        id: `${row}${col}`, number: `${row}${col}`,
        type: col === 'A' ? 'window-left' : 'aisle-left', position: 'left',
        isAvailable: Math.random() > 0.3, price: col === 'A' ? bus.price : bus.price * 0.95,
        isSelected: false, row, column: col
      }));
      ['C','D','E'].forEach((col, i) => seats.push({
        id: `${row}${col}`, number: `${row}${col}`,
        type: i === 0 ? 'aisle-right' : i === 1 ? 'middle' : 'window-right', position: 'right',
        isAvailable: Math.random() > 0.3, price: col === 'E' ? bus.price : bus.price * 0.95,
        isSelected: false, row, column: col
      }));
    }
    // Last row
    const lr = 11;
    ['A','B','C','D','E','F'].forEach((col, i) => seats.push({
      id: `${lr}${col}`, number: `${lr}${col}`,
      type: i < 3 ? 'left' : 'right', position: i < 3 ? 'left' : 'right',
      isAvailable: Math.random() > 0.3, price: bus.price * 0.95,
      isSelected: false, row: lr, column: col
    }));
    return seats;
  };

  const [seats, setSeats] = useState(generateSeats(bus?.seatLayout || 'seater'));
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [passengerDetails, setPassengerDetails] = useState(
    Array.from({ length: passengers || 1 }, (_, i) => ({ id: i + 1, name: '', age: '', gender: 'Male', seat: '' }))
  );

  const handleSeatClick = (seat) => {
    if (!seat.isAvailable) return;
    if (selectedSeats.length >= passengers && !seat.isSelected) {
      alert(`You can only select ${passengers} seat(s)`);
      return;
    }
    setSeats(prev => prev.map(s => s.id === seat.id ? { ...s, isSelected: !s.isSelected } : s));
    if (seat.isSelected) {
      setSelectedSeats(prev => prev.filter(s => s.id !== seat.id));
    } else {
      setSelectedSeats(prev => [...prev, seat]);
    }
  };

  const handlePassengerChange = (index, field, value) => {
    const updated = [...passengerDetails];
    updated[index][field] = value;
    setPassengerDetails(updated);
  };

  const totalBase = selectedSeats.reduce((t, s) => t + s.price, 0);
  const tax = totalBase * 0.18;
  const totalFinal = totalBase + tax;

  const handleProceedToPayment = () => {
    if (selectedSeats.length !== passengers) { alert(`Please select ${passengers} seat(s)`); return; }
    for (let i = 0; i < passengerDetails.length; i++) {
      if (!passengerDetails[i].name || !passengerDetails[i].age) {
        alert(`Please fill all details for Passenger ${i + 1}`); return;
      }
    }
    navigate('/payment', {
      state: {
        bus, searchParams, selectedSeats, passengerDetails,
        totalAmount: totalFinal,
        bookingTime: new Date().toISOString(),
        bookingId: `BUS${Date.now()}${Math.floor(Math.random() * 1000)}`
      }
    });
  };

  if (!bus) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">🚌</div>
          <div className="text-lg font-semibold text-gray-700 mb-2">No bus selected</div>
          <button onClick={() => navigate(-1)} className="px-6 py-2 bg-blue-600 text-white rounded-lg">Go Back</button>
        </div>
      </div>
    );
  }

  const seatsByRow = seats.reduce((acc, seat) => {
    if (!acc[seat.row]) acc[seat.row] = [];
    acc[seat.row].push(seat);
    return acc;
  }, {});

  const getSeatStyle = (seat) => {
    if (!seat.isAvailable) return 'bg-red-100 border-red-300 cursor-not-allowed opacity-60';
    if (seat.isSelected) return 'bg-blue-500 border-blue-600 text-white scale-105 shadow-lg';
    if (bus.seatLayout === 'sleeper') {
      return seat.type === 'lower'
        ? 'bg-amber-50 border-amber-300 hover:border-amber-500 hover:bg-amber-100 cursor-pointer'
        : 'bg-indigo-50 border-indigo-300 hover:border-indigo-500 hover:bg-indigo-100 cursor-pointer';
    }
    return seat.type?.includes('window')
      ? 'bg-yellow-50 border-yellow-300 hover:border-yellow-500 hover:bg-yellow-100 cursor-pointer'
      : 'bg-purple-50 border-purple-300 hover:border-purple-500 hover:bg-purple-100 cursor-pointer';
  };

  const getLabel = (seat) => {
    if (bus.seatLayout === 'sleeper') return seat.type === 'lower' ? 'LWR' : 'UPR';
    if (seat.type?.includes('window')) return 'WIN';
    if (seat.type?.includes('aisle')) return 'AIS';
    return 'MID';
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Top Bar */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 font-medium text-sm hover:text-blue-700">
            ← Back
          </button>
          <div className="text-center">
            <div className="font-bold text-gray-800 text-sm">{bus.name}</div>
            <div className="text-xs text-gray-400">{bus.departureTime} → {bus.arrivalTime} • {bus.duration}</div>
          </div>
          <div className="text-right">
            <div className="text-base font-extrabold text-blue-600">₹{bus.price.toFixed(0)}<span className="text-xs text-gray-400 font-normal">/seat</span></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* <div className="flex flex-col lg:flex-row gap-6"> */}
        <div className="flex flex-col lg:flex-row items-start gap-6">

          {/* ── LEFT: Seat Map ── */}
          <div className="flex-1">

            {/* Legend */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-5 border border-gray-100">
              <div className="flex flex-wrap gap-3">
                {[
                  { color: 'bg-white border-gray-300', label: 'Available' },
                  { color: 'bg-blue-500 border-blue-600', label: 'Selected', textWhite: true },
                  { color: 'bg-red-100 border-red-300', label: 'Booked' },
                  bus.seatLayout === 'sleeper'
                    ? { color: 'bg-amber-50 border-amber-300', label: 'Lower Berth' }
                    : { color: 'bg-yellow-50 border-yellow-300', label: 'Window' },
                  bus.seatLayout === 'sleeper'
                    ? { color: 'bg-indigo-50 border-indigo-300', label: 'Upper Berth' }
                    : { color: 'bg-purple-50 border-purple-300', label: 'Aisle/Mid' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div className={`w-5 h-5 rounded border-2 ${item.color} flex-shrink-0`}></div>
                    <span className="text-xs text-gray-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bus diagram */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 overflow-x-auto">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-gray-800">Select {passengers} Seat{passengers > 1 ? 's' : ''}</h2>
                <span className="text-sm font-semibold text-blue-600">{selectedSeats.length}/{passengers} selected</span>
              </div>

              {/* Driver */}
              <div className="flex justify-center mb-6">
                <div className="bg-gray-800 text-white px-8 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md">
                  <span>🚍</span> Driver • FRONT
                </div>
              </div>

              {/* Seats */}
              <div className="space-y-3 min-w-[380px]">
                {Object.keys(seatsByRow).sort((a, b) => parseInt(a) - parseInt(b)).map(row => {
                  const rowSeats = seatsByRow[row].sort((a, b) => a.column < b.column ? -1 : 1);
                  const leftSeats = rowSeats.filter(s => ['A','B','C'].includes(s.column) && s.position === 'left' || s.column <= 'B');
                  const rightSeats = rowSeats.filter(s => s.position === 'right' || s.column >= 'C');

                  return (
                    <div key={row} className="flex items-center gap-3">
                      <div className="w-10 text-center text-xs font-medium text-gray-400 flex-shrink-0">{row}</div>
                      <div className="flex flex-1 gap-6 items-center">
                        {/* Left side */}
                        <div className="flex gap-1.5">
                          {rowSeats.filter(s => bus.seatLayout === 'sleeper' ? s.position === 'left' : s.column <= 'B').map(seat => (
                            <button key={seat.id} onClick={() => handleSeatClick(seat)} disabled={!seat.isAvailable}
                              className={`relative w-12 h-12 rounded-lg border-2 transition-all text-center flex flex-col items-center justify-center ${getSeatStyle(seat)}`}>
                              <div className={`text-xs font-bold leading-none ${seat.isSelected ? 'text-white' : 'text-gray-700'}`}>{seat.number}</div>
                              <div className={`text-[9px] leading-none mt-0.5 ${seat.isSelected ? 'text-blue-100' : 'text-gray-400'}`}>{getLabel(seat)}</div>
                              {!seat.isAvailable && (
                                <div className="absolute inset-0 flex items-center justify-center rounded-lg">
                                  <div className="w-7 h-0.5 bg-red-400 transform rotate-45 absolute"></div>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                        {/* Aisle */}
                        <div className="flex-shrink-0 w-8 text-center">
                          <span className="text-[9px] text-gray-300 font-medium tracking-widest" style={{ writingMode: 'vertical-rl' }}>AISLE</span>
                        </div>
                        {/* Right side */}
                        <div className="flex gap-1.5">
                          {rowSeats.filter(s => bus.seatLayout === 'sleeper' ? s.position === 'right' : s.column >= 'C').map(seat => (
                            <button key={seat.id} onClick={() => handleSeatClick(seat)} disabled={!seat.isAvailable}
                              className={`relative w-12 h-12 rounded-lg border-2 transition-all text-center flex flex-col items-center justify-center ${getSeatStyle(seat)}`}>
                              <div className={`text-xs font-bold leading-none ${seat.isSelected ? 'text-white' : 'text-gray-700'}`}>{seat.number}</div>
                              <div className={`text-[9px] leading-none mt-0.5 ${seat.isSelected ? 'text-blue-100' : 'text-gray-400'}`}>{getLabel(seat)}</div>
                              {!seat.isAvailable && (
                                <div className="absolute inset-0 flex items-center justify-center rounded-lg">
                                  <div className="w-7 h-0.5 bg-red-400 transform rotate-45 absolute"></div>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Back */}
              <div className="flex justify-center mt-6">
                <div className="bg-gray-600 text-white px-8 py-2 rounded-xl text-xs font-semibold">BACK</div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Summary + Passenger Details ── */}
          {/* <div className="w-full lg:w-80 flex-shrink-0 space-y-5"> */}
          <div className="w-full lg:w-[320px] flex-shrink-0 flex flex-col gap-5">

            {/* Booking Summary */}
            {/* <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 sticky top-20"> */}
           <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <h2 className="font-bold text-gray-800 mb-4">Booking Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Route</span>
                  <span className="font-semibold text-gray-800">{searchParams?.fromCity || '—'} → {searchParams?.toCity || '—'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date</span>
                  <span className="font-semibold">{searchParams?.date ? new Date(searchParams.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Departure</span>
                  <span className="font-semibold">{bus.departureTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Bus</span>
                  <span className="font-semibold truncate ml-2">{bus.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Selected Seats</span>
                  <span className={`font-semibold ${selectedSeats.length === 0 ? 'text-gray-400' : 'text-blue-600'}`}>
                    {selectedSeats.length > 0 ? selectedSeats.map(s => s.number).join(', ') : 'None'}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Base ({selectedSeats.length} seat{selectedSeats.length !== 1 ? 's' : ''})</span>
                  <span>₹{totalBase.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>GST (18%)</span>
                  <span>₹{tax.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Convenience fee</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
                <div className="flex justify-between font-bold text-base text-gray-800 pt-2 border-t border-gray-100">
                  <span>Total Amount</span>
                  <span className="text-blue-600">₹{totalFinal.toFixed(0)}</span>
                </div>
              </div>
            </div>

            {/* Passenger Details */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <h2 className="font-bold text-gray-800 mb-4">Passenger Details</h2>
              <div className="space-y-4">
                {passengerDetails.map((p, index) => (
                  <div key={p.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-sm font-semibold text-gray-700">Passenger {index + 1}</span>
                      {selectedSeats[index] && (
                        <span className="ml-auto text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                          Seat {selectedSeats[index].number}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <input type="text" value={p.name} onChange={e => handlePassengerChange(index, 'name', e.target.value)}
                        placeholder="Full name"
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" />
                      <div className="grid grid-cols-2 gap-2">
                        <input type="number" value={p.age} onChange={e => handlePassengerChange(index, 'age', e.target.value)}
                          placeholder="Age" min="1" max="100"
                          className="px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" />
                        <select value={p.gender} onChange={e => handlePassengerChange(index, 'gender', e.target.value)}
                          className="px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white">
                          <option>Male</option><option>Female</option><option>Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                <button onClick={handleProceedToPayment}
                  disabled={selectedSeats.length !== passengers}
                  className={`w-full py-3.5 rounded-xl font-bold text-base transition-all ${
                    selectedSeats.length === passengers
                      ? 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95 shadow-md'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}>
                  {selectedSeats.length === passengers
                    ? `Proceed to Payment • ₹${totalFinal.toFixed(0)}`
                    : `Select ${passengers - selectedSeats.length} more seat${passengers - selectedSeats.length !== 1 ? 's' : ''}`}
                </button>
                <button onClick={() => navigate(-1)}
                  className="w-full py-2.5 border border-blue-500 text-blue-600 rounded-xl text-sm font-semibold hover:bg-blue-50 transition-colors">
                  ← Change Bus
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionPage;