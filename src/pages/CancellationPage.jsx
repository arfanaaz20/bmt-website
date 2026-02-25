// import React, { useState } from 'react';

// const CancellationPage = () => {
//   const [bookingId, setBookingId] = useState('');
//   const [email, setEmail] = useState('');
//   const [selectedBus, setSelectedBus] = useState(null);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [cancellationStep, setCancellationStep] = useState('search');
//   const [showDetails, setShowDetails] = useState({});

//   const mockBookings = [
//     {
//       id: 'BMT123456',
//       busName: 'Deluxe Express',
//       operator: 'Delhi Travels',
//       from: 'Delhi ISBT',
//       to: 'Jaipur Sindhi Camp',
//       date: '2024-03-15',
//       departureTime: '20:30',
//       arrivalTime: '04:30',
//       passengers: [
//         { name: 'Rahul Sharma', seat: 'S1', age: 28, gender: 'Male' },
//         { name: 'Priya Sharma', seat: 'S2', age: 26, gender: 'Female' }
//       ],
//       totalAmount: 2400.00,
//       bookingDate: '2024-03-10',
//       status: 'Confirmed',
//       cancellationDeadline: '2024-03-14 20:30',
//       refundEligible: 1800.00,
//       cancellationCharges: 600.00
//     },
//     {
//       id: 'BMT789012',
//       busName: 'Premium Coach',
//       operator: 'Jaipur Express',
//       from: 'Delhi Kashmere Gate',
//       to: 'Jaipur Bus Stand',
//       date: '2024-03-20',
//       departureTime: '21:00',
//       arrivalTime: '05:00',
//       passengers: [
//         { name: 'Amit Kumar', seat: 'A1', age: 32, gender: 'Male' }
//       ],
//       totalAmount: 1000.00,
//       bookingDate: '2024-03-12',
//       status: 'Confirmed',
//       cancellationDeadline: '2024-03-19 21:00',
//       refundEligible: 750.00,
//       cancellationCharges: 250.00
//     }
//   ];

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setCancellationStep('select');
//   };

//   const handleCancelBooking = () => {
//     setCancellationStep('confirm');
//   };

//   const handleConfirmCancellation = () => {
//     setCancellationStep('completed');
//   };

//   const toggleSeatSelection = (seat) => {
//     setSelectedSeats(prev =>
//       prev.includes(seat)
//         ? prev.filter(s => s !== seat)
//         : [...prev, seat]
//     );
//   };

//   const getClassColor = (status) => {
//     switch (status) {
//       case 'Confirmed': return 'bg-green-100 text-green-700';
//       case 'Cancelled': return 'bg-red-100 text-red-700';
//       case 'Completed': return 'bg-gray-100 text-gray-700';
//       default: return 'bg-gray-100 text-gray-700';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">Cancel Booking</h1>
//           <p className="text-gray-600">Cancel your bus tickets and request refund</p>
//         </div>

//         {/* Progress Bar */}
//         {cancellationStep !== 'search' && (
//           <div className="bg-white rounded-xl shadow-md p-6 mb-6">
//             <div className="flex items-center justify-between">
//               {['Search Booking', 'Select Booking', 'Confirm Cancellation', 'Completed'].map((step, index) => {
//                 const steps = ['search', 'select', 'confirm', 'completed'];
//                 const currentIndex = steps.indexOf(cancellationStep);
                
//                 return (
//                   <div key={step} className="flex-1 relative">
//                     <div className="flex items-center">
//                       <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                         index <= currentIndex
//                           ? 'bg-blue-600 text-white'
//                           : 'bg-gray-200 text-gray-600'
//                       }`}>
//                         {index < currentIndex ? (
//                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                           </svg>
//                         ) : (
//                           index + 1
//                         )}
//                       </div>
//                       <div className={`ml-2 text-sm ${
//                         index <= currentIndex ? 'text-gray-800 font-medium' : 'text-gray-400'
//                       }`}>
//                         {step}
//                       </div>
//                     </div>
//                     {index < 3 && (
//                       <div className={`absolute top-4 left-8 w-full h-0.5 ${
//                         index < currentIndex ? 'bg-blue-600' : 'bg-gray-200'
//                       }`} />
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}

//         {/* Main Content */}
//         <div className="bg-white rounded-xl shadow-md p-6">
//           {cancellationStep === 'search' && (
//             <div>
//               <h2 className="text-xl font-bold text-gray-800 mb-6">Find Your Booking</h2>
//               <form onSubmit={handleSearch}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div>
//                     <label className="block text-sm text-gray-500 mb-1">Booking ID</label>
//                     <input
//                       type="text"
//                       value={bookingId}
//                       onChange={(e) => setBookingId(e.target.value)}
//                       placeholder="e.g., BMT123456"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-gray-500 mb-1">Email Address</label>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Enter registered email"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex justify-end">
//                   <button
//                     type="submit"
//                     className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
//                   >
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                     </svg>
//                     Search Booking
//                   </button>
//                 </div>
//               </form>

//               <div className="mt-8 border-t pt-8">
//                 <h3 className="font-semibold text-gray-800 mb-4">Recent Bookings</h3>
//                 <div className="space-y-4">
//                   {mockBookings.map((booking) => (
//                     <div
//                       key={booking.id}
//                       className="border rounded-lg p-4 hover:border-blue-300 cursor-pointer"
//                       onClick={() => {
//                         setBookingId(booking.id);
//                         setEmail('user@example.com');
//                         setCancellationStep('select');
//                       }}
//                     >
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <div className="flex items-center gap-2 mb-2">
//                             <span className={`px-3 py-1 rounded-full text-sm font-medium ${getClassColor(booking.status)}`}>
//                               {booking.status}
//                             </span>
//                             <span className="text-sm text-gray-500">ID: {booking.id}</span>
//                           </div>
//                           <div className="flex items-center gap-4">
//                             <div>
//                               <div className="font-bold">{booking.departureTime}</div>
//                               <div className="text-sm text-gray-500">{booking.from}</div>
//                             </div>
//                             <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                             </svg>
//                             <div>
//                               <div className="font-bold">{booking.arrivalTime}</div>
//                               <div className="text-sm text-gray-500">{booking.to}</div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="text-right">
//                           <div className="font-bold text-lg">₹{booking.totalAmount}</div>
//                           <div className="text-sm text-gray-500">{booking.date}</div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {cancellationStep === 'select' && (
//             <div>
//               <h2 className="text-xl font-bold text-gray-800 mb-6">Select Booking to Cancel</h2>
              
//               <div className="border rounded-lg p-6 mb-6">
//                 <div className="flex items-start justify-between mb-4">
//                   <div>
//                     <div className="flex items-center gap-2 mb-2">
//                       <span className={`px-3 py-1 rounded-full text-sm font-medium ${getClassColor('Confirmed')}`}>
//                         Active Booking
//                       </span>
//                       <span className="text-lg font-bold text-gray-800">{mockBookings[0].busName}</span>
//                     </div>
//                     <div className="text-sm text-gray-600">{mockBookings[0].operator}</div>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-sm text-gray-500">Booking ID</div>
//                     <div className="font-mono font-bold">{mockBookings[0].id}</div>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//                   <div>
//                     <div className="text-sm text-gray-500 mb-1">Journey Details</div>
//                     <div className="font-medium">{mockBookings[0].from} → {mockBookings[0].to}</div>
//                     <div className="text-sm text-gray-600">{mockBookings[0].date}</div>
//                     <div className="text-sm text-gray-600">{mockBookings[0].departureTime} - {mockBookings[0].arrivalTime}</div>
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500 mb-1">Passengers</div>
//                     {mockBookings[0].passengers.map((p, i) => (
//                       <div key={i} className="text-sm">
//                         <span className="font-medium">{p.name}</span> ({p.seat})
//                       </div>
//                     ))}
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500 mb-1">Cancellation Deadline</div>
//                     <div className="font-medium text-amber-600">{mockBookings[0].cancellationDeadline}</div>
//                     <div className="text-sm text-green-600 mt-2">
//                       Refund Eligible: ₹{mockBookings[0].refundEligible}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border-t pt-6">
//                   <h3 className="font-semibold text-gray-800 mb-4">Select Seats to Cancel</h3>
//                   <div className="flex flex-wrap gap-3 mb-6">
//                     {mockBookings[0].passengers.map((p) => (
//                       <label key={p.seat} className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
//                         <input
//                           type="checkbox"
//                           checked={selectedSeats.includes(p.seat)}
//                           onChange={() => toggleSeatSelection(p.seat)}
//                           className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
//                         />
//                         <div>
//                           <div className="font-medium">{p.seat}</div>
//                           <div className="text-sm text-gray-600">{p.name}</div>
//                         </div>
//                       </label>
//                     ))}
//                   </div>

//                   {selectedSeats.length > 0 && (
//                     <div className="bg-gray-50 p-4 rounded-lg mb-6">
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="font-medium">Cancellation Summary</span>
//                         <span className="text-sm text-gray-500">Partial cancellation allowed</span>
//                       </div>
//                       <div className="flex justify-between items-center">
//                         <div>
//                           <div className="text-sm text-gray-600">Cancelling {selectedSeats.length} seat(s)</div>
//                           <div className="text-sm text-gray-600">Cancellation charges: ₹{selectedSeats.length * 300}</div>
//                         </div>
//                         <div className="text-right">
//                           <div className="text-sm text-gray-500">Refund amount</div>
//                           <div className="text-2xl font-bold text-green-600">
//                             ₹{selectedSeats.length * 900}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <div className="flex justify-end gap-4">
//                   <button
//                     onClick={() => setCancellationStep('search')}
//                     className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
//                   >
//                     Back
//                   </button>
//                   <button
//                     onClick={handleCancelBooking}
//                     disabled={selectedSeats.length === 0}
//                     className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//                   >
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                     Cancel Selected Seats
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {cancellationStep === 'confirm' && (
//             <div>
//               <h2 className="text-xl font-bold text-gray-800 mb-6">Confirm Cancellation</h2>
              
//               <div className="border border-red-200 bg-red-50 rounded-lg p-6 mb-6">
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-red-100 rounded-full">
//                     <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-gray-800 mb-2">Are you sure you want to cancel?</h3>
//                     <p className="text-gray-600 text-sm">
//                       This action cannot be undone. The selected seats will be released and refund will be processed to your original payment method.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="border rounded-lg p-6 mb-6">
//                 <h3 className="font-semibold text-gray-800 mb-4">Cancellation Summary</h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Booking ID</span>
//                     <span className="font-mono font-medium">{mockBookings[0].id}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Cancelled Seats</span>
//                     <span className="font-medium">{selectedSeats.join(', ')}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Original Amount</span>
//                     <span className="font-medium">₹{mockBookings[0].totalAmount}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Cancellation Charges</span>
//                     <span className="font-medium text-red-600">-₹{selectedSeats.length * 300}</span>
//                   </div>
//                   <div className="flex justify-between pt-3 border-t">
//                     <span className="font-bold text-gray-800">Refund Amount</span>
//                     <span className="font-bold text-2xl text-green-600">₹{selectedSeats.length * 900}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-end gap-4">
//                 <button
//                   onClick={() => setCancellationStep('select')}
//                   className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
//                 >
//                   Back
//                 </button>
//                 <button
//                   onClick={handleConfirmCancellation}
//                   className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center gap-2"
//                 >
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                   Confirm Cancellation
//                 </button>
//               </div>
//             </div>
//           )}

//           {cancellationStep === 'completed' && (
//             <div className="text-center py-12">
//               <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
//                 <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
              
//               <h2 className="text-2xl font-bold text-gray-800 mb-2">Cancellation Successful!</h2>
//               <p className="text-gray-600 mb-6">
//                 Your booking has been cancelled successfully. Refund of ₹{selectedSeats.length * 900} will be processed within 5-7 business days.
//               </p>
              
//               <div className="max-w-md mx-auto bg-gray-50 rounded-lg p-6 mb-8">
//                 <div className="space-y-3 text-left">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Cancellation ID</span>
//                     <span className="font-mono font-bold">CNL{Math.floor(Math.random() * 10000)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Booking ID</span>
//                     <span className="font-mono">{mockBookings[0].id}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Refund Amount</span>
//                     <span className="font-bold text-green-600">₹{selectedSeats.length * 900}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Payment Method</span>
//                     <span>Credit Card (XXXX-1234)</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Expected by</span>
//                     <span className="font-medium">March 25, 2024</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="flex justify-center gap-4">
//                 <button
//                   onClick={() => setCancellationStep('search')}
//                   className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
//                 >
//                   Cancel Another Booking
//                 </button>
//                 <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
//                   Download Receipt
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Cancellation Policy */}
//         <div className="mt-8 bg-white rounded-xl shadow-md p-6">
//           <h3 className="font-bold text-lg text-gray-800 mb-4">Cancellation Policy</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="p-4 bg-green-50 rounded-lg">
//               <div className="font-semibold text-green-700 mb-2">More than 48 hours</div>
//               <div className="text-2xl font-bold text-gray-800 mb-1">75% Refund</div>
//               <div className="text-sm text-gray-600">Cancellation charge: 25%</div>
//             </div>
//             <div className="p-4 bg-yellow-50 rounded-lg">
//               <div className="font-semibold text-yellow-700 mb-2">24 - 48 hours</div>
//               <div className="text-2xl font-bold text-gray-800 mb-1">50% Refund</div>
//               <div className="text-sm text-gray-600">Cancellation charge: 50%</div>
//             </div>
//             <div className="p-4 bg-red-50 rounded-lg">
//               <div className="font-semibold text-red-700 mb-2">Less than 24 hours</div>
//               <div className="text-2xl font-bold text-gray-800 mb-1">No Refund</div>
//               <div className="text-sm text-gray-600">Cancellation charge: 100%</div>
//             </div>
//           </div>
//           <p className="text-sm text-gray-500 mt-4">
//             * Partial cancellation allowed. Refund will be processed to the original payment method within 5-7 business days.
//             For UPI payments, refund is typically processed within 24-48 hours.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CancellationPage;

























import React, { useState } from 'react';

const CancellationPage = () => {
  const [bookingId, setBookingId] = useState('');
  const [email, setEmail] = useState('');
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [cancellationStep, setCancellationStep] = useState('search');
  const [showDetails, setShowDetails] = useState({});

  const mockBookings = [
    {
      id: 'BMT123456',
      busName: 'Deluxe Express',
      operator: 'Delhi Travels',
      from: 'Delhi ISBT',
      to: 'Jaipur Sindhi Camp',
      date: '2024-03-15',
      departureTime: '20:30',
      arrivalTime: '04:30',
      passengers: [
        { name: 'Rahul Sharma', seat: 'S1', age: 28, gender: 'Male' },
        { name: 'Priya Sharma', seat: 'S2', age: 26, gender: 'Female' }
      ],
      totalAmount: 2400.00,
      bookingDate: '2024-03-10',
      status: 'Confirmed',
      cancellationDeadline: '2024-03-14 20:30',
      refundEligible: 1800.00,
      cancellationCharges: 600.00
    },
    {
      id: 'BMT789012',
      busName: 'Premium Coach',
      operator: 'Jaipur Express',
      from: 'Delhi Kashmere Gate',
      to: 'Jaipur Bus Stand',
      date: '2024-03-20',
      departureTime: '21:00',
      arrivalTime: '05:00',
      passengers: [
        { name: 'Amit Kumar', seat: 'A1', age: 32, gender: 'Male' }
      ],
      totalAmount: 1000.00,
      bookingDate: '2024-03-12',
      status: 'Confirmed',
      cancellationDeadline: '2024-03-19 21:00',
      refundEligible: 750.00,
      cancellationCharges: 250.00
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setCancellationStep('select');
  };

  const handleCancelBooking = () => {
    setCancellationStep('confirm');
  };

  const handleConfirmCancellation = () => {
    setCancellationStep('completed');
  };

  const toggleSeatSelection = (seat) => {
    setSelectedSeats(prev =>
      prev.includes(seat)
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  const getClassColor = (status) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-100 text-green-700';
      case 'Cancelled': return 'bg-red-100 text-red-700';
      case 'Completed': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Cancel Booking</h1>
          <p className="text-gray-600">Cancel your bus tickets and request refund</p>
        </div>

        {/* Progress Bar */}
        {cancellationStep !== 'search' && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="flex items-center justify-between">
              {['Search Booking', 'Select Booking', 'Confirm Cancellation', 'Completed'].map((step, index) => {
                const steps = ['search', 'select', 'confirm', 'completed'];
                const currentIndex = steps.indexOf(cancellationStep);
                return (
                  <div key={step} className="flex-1 relative">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        index <= currentIndex ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {index < currentIndex ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (index + 1)}
                      </div>
                      <div className={`ml-2 text-sm hidden sm:block ${
                        index <= currentIndex ? 'text-gray-800 font-medium' : 'text-gray-400'
                      }`}>
                        {step}
                      </div>
                    </div>
                    {index < 3 && (
                      <div className={`absolute top-4 left-8 w-full h-0.5 ${
                        index < currentIndex ? 'bg-blue-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          {cancellationStep === 'search' && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Find Your Booking</h2>
              <form onSubmit={handleSearch}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Booking ID</label>
                    <input
                      type="text"
                      value={bookingId}
                      onChange={(e) => setBookingId(e.target.value)}
                      placeholder="e.g., BMT123456"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter registered email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search Booking
                  </button>
                </div>
              </form>

              {/* ✅ FIXED: Recent Bookings - Mobile friendly cards */}
              <div className="mt-8 border-t pt-8">
                <h3 className="font-semibold text-gray-800 mb-4">Recent Bookings</h3>
                <div className="space-y-3">
                  {mockBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="border rounded-xl p-4 hover:border-blue-300 active:bg-blue-50 cursor-pointer transition-colors"
                      onClick={() => {
                        setBookingId(booking.id);
                        setEmail('user@example.com');
                        setCancellationStep('select');
                      }}
                    >
                      {/* Row 1: Status + Price */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getClassColor(booking.status)}`}>
                          {booking.status}
                        </span>
                        <span className="font-bold text-lg text-gray-800">
                          ₹{booking.totalAmount.toLocaleString()}
                        </span>
                      </div>

                      {/* Row 2: From → To with times */}
                      <div className="flex items-center gap-2 mb-3">
                        {/* Departure */}
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-gray-800 text-base">{booking.departureTime}</div>
                          <div className="text-xs text-gray-500 truncate">{booking.from}</div>
                        </div>

                        {/* Arrow */}
                        <div className="flex flex-col items-center flex-shrink-0 px-1">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>

                        {/* Arrival */}
                        <div className="flex-1 min-w-0 text-right">
                          <div className="font-bold text-gray-800 text-base">{booking.arrivalTime}</div>
                          <div className="text-xs text-gray-500 truncate">{booking.to}</div>
                        </div>
                      </div>

                      {/* Row 3: Booking ID + Date */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <span className="text-xs text-gray-400">ID: {booking.id}</span>
                        <span className="text-xs text-gray-500 whitespace-nowrap">{booking.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {cancellationStep === 'select' && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Select Booking to Cancel</h2>
              <div className="border rounded-lg p-4 md:p-6 mb-6">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getClassColor('Confirmed')}`}>
                        Active Booking
                      </span>
                      <span className="text-lg font-bold text-gray-800">{mockBookings[0].busName}</span>
                    </div>
                    <div className="text-sm text-gray-600">{mockBookings[0].operator}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Booking ID</div>
                    <div className="font-mono font-bold">{mockBookings[0].id}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Journey Details</div>
                    <div className="font-medium text-sm">{mockBookings[0].from} → {mockBookings[0].to}</div>
                    <div className="text-sm text-gray-600">{mockBookings[0].date}</div>
                    <div className="text-sm text-gray-600">{mockBookings[0].departureTime} - {mockBookings[0].arrivalTime}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Passengers</div>
                    {mockBookings[0].passengers.map((p, i) => (
                      <div key={i} className="text-sm">
                        <span className="font-medium">{p.name}</span> ({p.seat})
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Cancellation Deadline</div>
                    <div className="font-medium text-amber-600 text-sm">{mockBookings[0].cancellationDeadline}</div>
                    <div className="text-sm text-green-600 mt-2">
                      Refund Eligible: ₹{mockBookings[0].refundEligible}
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Select Seats to Cancel</h3>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {mockBookings[0].passengers.map((p) => (
                      <label key={p.seat} className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="checkbox"
                          checked={selectedSeats.includes(p.seat)}
                          onChange={() => toggleSeatSelection(p.seat)}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <div>
                          <div className="font-medium">{p.seat}</div>
                          <div className="text-sm text-gray-600">{p.name}</div>
                        </div>
                      </label>
                    ))}
                  </div>

                  {selectedSeats.length > 0 && (
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">Cancellation Summary</span>
                        <span className="text-xs text-gray-500">Partial cancellation allowed</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm text-gray-600">Cancelling {selectedSeats.length} seat(s)</div>
                          <div className="text-sm text-gray-600">Charges: ₹{selectedSeats.length * 300}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500">Refund amount</div>
                          <div className="text-2xl font-bold text-green-600">₹{selectedSeats.length * 900}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-end gap-3 flex-wrap">
                  <button
                    onClick={() => setCancellationStep('search')}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleCancelBooking}
                    disabled={selectedSeats.length === 0}
                    className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Cancel Selected Seats
                  </button>
                </div>
              </div>
            </div>
          )}

          {cancellationStep === 'confirm' && (
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Confirm Cancellation</h2>
              <div className="border border-red-200 bg-red-50 rounded-lg p-4 md:p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Are you sure you want to cancel?</h3>
                    <p className="text-gray-600 text-sm">
                      This action cannot be undone. The selected seats will be released and refund will be processed to your original payment method.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4 md:p-6 mb-6">
                <h3 className="font-semibold text-gray-800 mb-4">Cancellation Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Booking ID</span>
                    <span className="font-mono font-medium text-sm">{mockBookings[0].id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Cancelled Seats</span>
                    <span className="font-medium text-sm">{selectedSeats.join(', ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Original Amount</span>
                    <span className="font-medium text-sm">₹{mockBookings[0].totalAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm">Cancellation Charges</span>
                    <span className="font-medium text-red-600 text-sm">-₹{selectedSeats.length * 300}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t">
                    <span className="font-bold text-gray-800">Refund Amount</span>
                    <span className="font-bold text-2xl text-green-600">₹{selectedSeats.length * 900}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 flex-wrap">
                <button
                  onClick={() => setCancellationStep('select')}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleConfirmCancellation}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Confirm Cancellation
                </button>
              </div>
            </div>
          )}

          {cancellationStep === 'completed' && (
            <div className="text-center py-8 md:py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Cancellation Successful!</h2>
              <p className="text-gray-600 mb-6 text-sm px-4">
                Your booking has been cancelled. Refund of ₹{selectedSeats.length * 900} will be processed within 5-7 business days.
              </p>
              <div className="max-w-md mx-auto bg-gray-50 rounded-lg p-4 md:p-6 mb-8">
                <div className="space-y-3 text-left">
                  {[
                    { label: 'Cancellation ID', value: `CNL${Math.floor(Math.random() * 10000)}`, mono: true },
                    { label: 'Booking ID', value: mockBookings[0].id, mono: true },
                    { label: 'Refund Amount', value: `₹${selectedSeats.length * 900}`, green: true },
                    { label: 'Payment Method', value: 'Credit Card (XXXX-1234)' },
                    { label: 'Expected by', value: 'March 25, 2024', bold: true },
                  ].map(({ label, value, mono, green, bold }) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">{label}</span>
                      <span className={`text-sm ${mono ? 'font-mono font-bold' : ''} ${green ? 'font-bold text-green-600' : ''} ${bold ? 'font-medium' : ''}`}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-3 flex-wrap px-4">
                <button
                  onClick={() => setCancellationStep('search')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Cancel Another Booking
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Download Receipt
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Cancellation Policy */}
        <div className="mt-6 bg-white rounded-xl shadow-md p-4 md:p-6">
          <h3 className="font-bold text-lg text-gray-800 mb-4">Cancellation Policy</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="font-semibold text-green-700 mb-1 text-sm">More than 48 hours</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">75% Refund</div>
              <div className="text-sm text-gray-600">Cancellation charge: 25%</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="font-semibold text-yellow-700 mb-1 text-sm">24 - 48 hours</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">50% Refund</div>
              <div className="text-sm text-gray-600">Cancellation charge: 50%</div>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <div className="font-semibold text-red-700 mb-1 text-sm">Less than 24 hours</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">No Refund</div>
              <div className="text-sm text-gray-600">Cancellation charge: 100%</div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            * Partial cancellation allowed. Refund will be processed to the original payment method within 5-7 business days.
            For UPI payments, refund is typically processed within 24-48 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CancellationPage;