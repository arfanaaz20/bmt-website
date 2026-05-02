// // // import React from 'react';
// // // import { Link } from 'react-router-dom';

// // // const SupportPage = () => {
// // //   return (
// // //     <div className="min-h-screen bg-gray-50 p-4">
// // //       <div className="max-w-7xl mx-auto">
// // //         {/* Header */}
// // //         <div className="mb-8">
// // //           <h1 className="text-3xl font-bold text-gray-800">Customer Support</h1>
// // //           <p className="text-gray-600">How can we help you today?</p>
// // //         </div>

// // //         {/* Quick Search */}
// // //         <div className="bg-white rounded-xl shadow-md p-6 mb-8">
// // //           <div className="relative">
// // //             <input
// // //               type="text"
// // //               placeholder="Search for help (e.g., cancellation, refund, booking)..."
// // //               className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
// // //             />
// // //             <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
// // //               <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// // //               </svg>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Support Options Grid */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// // //           <Link to="/faq" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-300">
// // //             <div className="inline-flex p-3 bg-blue-100 rounded-lg mb-4">
// // //               <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //               </svg>
// // //             </div>
// // //             <h3 className="text-xl font-bold text-gray-800 mb-2">FAQ</h3>
// // //             <p className="text-gray-600 text-sm mb-4">Find answers to commonly asked questions about bookings, cancellations, and more.</p>
// // //             <span className="text-blue-600 font-medium flex items-center">
// // //               View FAQs
// // //               <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // //               </svg>
// // //             </span>
// // //           </Link>

// // //           <Link to="/cancellation" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-300">
// // //             <div className="inline-flex p-3 bg-red-100 rounded-lg mb-4">
// // //               <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// // //               </svg>
// // //             </div>
// // //             <h3 className="text-xl font-bold text-gray-800 mb-2">Cancellation</h3>
// // //             <p className="text-gray-600 text-sm mb-4">Cancel your booking, check cancellation policy, and manage your reservations.</p>
// // //             <span className="text-blue-600 font-medium flex items-center">
// // //               Cancel Booking
// // //               <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // //               </svg>
// // //             </span>
// // //           </Link>

// // //           <Link to="/refund-policy" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-300">
// // //             <div className="inline-flex p-3 bg-green-100 rounded-lg mb-4">
// // //               <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //               </svg>
// // //             </div>
// // //             <h3 className="text-xl font-bold text-gray-800 mb-2">Refund Policy</h3>
// // //             <p className="text-gray-600 text-sm mb-4">Track your refund status, check refund timelines and policy details.</p>
// // //             <span className="text-blue-600 font-medium flex items-center">
// // //               View Policy
// // //               <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // //               </svg>
// // //             </span>
// // //           </Link>

// // //           <Link to="/contact-us" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-300">
// // //             <div className="inline-flex p-3 bg-purple-100 rounded-lg mb-4">
// // //               <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
// // //               </svg>
// // //             </div>
// // //             <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Us</h3>
// // //             <p className="text-gray-600 text-sm mb-4">Get in touch with our 24/7 support team via call, email, or live chat.</p>
// // //             <span className="text-blue-600 font-medium flex items-center">
// // //               Contact Now
// // //               <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // //               </svg>
// // //             </span>
// // //           </Link>
// // //         </div>

// // //         {/* Additional Help Section */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // //           <div className="bg-white rounded-xl shadow-md p-6">
// // //             <h3 className="font-bold text-lg text-gray-800 mb-4">Need Immediate Assistance?</h3>
// // //             <div className="flex items-center gap-4">
// // //               <div className="p-3 bg-blue-100 rounded-full">
// // //                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
// // //                 </svg>
// // //               </div>
// // //               <div>
// // //                 <p className="text-2xl font-bold text-gray-800">1800-123-4567</p>
// // //                 <p className="text-sm text-gray-600">Toll-free, available 24/7</p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white rounded-xl shadow-md p-6">
// // //             <h3 className="font-bold text-lg text-gray-800 mb-4">Self Service</h3>
// // //             <div className="space-y-2">
// // //               <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between">
// // //                 <span>Track My Bus</span>
// // //                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // //                 </svg>
// // //               </button>
// // //               <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between">
// // //                 <span>Download Invoice</span>
// // //                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // //                 </svg>
// // //               </button>
// // //               <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between">
// // //                 <span>Change Travel Date</span>
// // //                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // //                 </svg>
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SupportPage;




















// import React from 'react';
// import { Link } from 'react-router-dom';

// const SupportPage = () => {
//   const cards = [
//     {
//       to: '/faq',
//       iconBg: 'bg-blue-50',
//       iconColor: 'text-blue-600',
//       icon: (
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//           d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//       ),
//       title: 'FAQ',
//       desc: 'Answers to commonly asked questions about bookings, cancellations, and more.',
//       linkText: 'View FAQs',
//     },
//     {
//       to: '/cancellation',
//       iconBg: 'bg-red-50',
//       iconColor: 'text-red-500',
//       icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />,
//       title: 'Cancellation',
//       desc: 'Cancel your booking, check cancellation policy, and manage reservations.',
//       linkText: 'Cancel Booking',
//     },
//     {
//       to: '/refund-policy',
//       iconBg: 'bg-green-50',
//       iconColor: 'text-green-600',
//       icon: (
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//           d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//       ),
//       title: 'Refund Policy',
//       desc: 'Track refund status, check timelines and policy details.',
//       linkText: 'View Policy',
//     },
//     {
//       to: '/contact-us',
//       iconBg: 'bg-purple-50',
//       iconColor: 'text-purple-600',
//       icon: (
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//           d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//       ),
//       title: 'Contact Us',
//       desc: 'Get in touch with our 24/7 support team via call, email, or live chat.',
//       linkText: 'Contact Now',
//     },
//   ];

//   const selfServiceItems = [
//     'Track My Bus',
//     'Download Invoice',
//     'Change Travel Date',
//   ];

//   const ChevronRight = () => (
//     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//     </svg>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
//       <div className="max-w-5xl mx-auto">

//         {/* Header */}
//         <div className="mb-6">
//           <h1 className="text-2xl font-semibold text-gray-900">Customer Support</h1>
//           <p className="text-gray-500 mt-1">How can we help you today?</p>
//         </div>

//         {/* Search */}
//         <div className="bg-white rounded-xl border border-gray-200 px-4 py-3 mb-6 flex items-center gap-3 shadow-sm">
//           <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//           </svg>
//           <input
//             type="text"
//             placeholder="Search for help (e.g., cancellation, refund, booking)..."
//             className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
//           />
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           {cards.map((card) => (
//             <Link
//               key={card.to}
//               to={card.to}
//               className="bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-sm transition-all group"
//             >
//               <div className={`inline-flex p-2.5 rounded-lg mb-3 ${card.iconBg}`}>
//                 <svg className={`w-5 h-5 ${card.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   {card.icon}
//                 </svg>
//               </div>
//               <h3 className="text-sm font-semibold text-gray-800 mb-1">{card.title}</h3>
//               <p className="text-xs text-gray-500 leading-relaxed mb-3">{card.desc}</p>
//               <span className="text-xs text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
//                 {card.linkText}
//                 <ChevronRight />
//               </span>
//             </Link>
//           ))}
//         </div>

//         {/* Bottom Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

//           {/* Phone Support */}
//           <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
//             <h3 className="text-sm font-semibold text-gray-800 mb-4">Need Immediate Assistance?</h3>
//             <div className="flex items-center gap-4">
//               <div className="p-2.5 bg-blue-50 rounded-full">
//                 <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-xl font-semibold text-gray-900">1800-123-4567</p>
//                 <p className="text-xs text-gray-400 mt-0.5">Toll-free · Available 24/7</p>
//               </div>
//             </div>
//           </div>

//           {/* Self Service */}
//           <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
//             <h3 className="text-sm font-semibold text-gray-800 mb-3">Self Service</h3>
//             <div className="space-y-1">
//               {selfServiceItems.map((item) => (
//                 <button
//                   key={item}
//                   className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between text-sm text-gray-700 group"
//                 >
//                   <span>{item}</span>
//                   <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-400 transition-colors"
//                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };
// export default SupportPage;























// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // const SupportPage = () => {
// //   const [activeTab, setActiveTab] = useState('Bus');
// //   const [activeCategory, setActiveCategory] = useState('Hot Topics');
// //   const [searchQuery, setSearchQuery] = useState('');

// //   const tabs = [
// //     {
// //       key: 'Bus',
// //       label: 'Bus',
// //       icon: (
// //         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// //             d="M8 17v1a1 1 0 001 1h6a1 1 0 001-1v-1M3 10h18M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
// //         </svg>
// //       ),
// //     },
// //     {
// //       key: 'Flights',
// //       label: 'Flights',
// //       icon: (
// //         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// //             d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
// //         </svg>
// //       ),
// //     },
// //     {
// //       key: 'Hotels',
// //       label: 'Hotels',
// //       icon: (
// //         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// //             d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
// //         </svg>
// //       ),
// //     },
// //     {
// //       key: 'Trains',
// //       label: 'Trains',
// //       icon: (
// //         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// //             d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
// //         </svg>
// //       ),
// //     },
// //   ];

// //   const faqData = {
// //     Bus: [
// //       { q: 'How do I cancel my bus ticket?', id: 'cancel-bus' },
// //       { q: 'How do I change my travel date?', id: 'change-date' },
// //       { q: 'Are there any ongoing bus promotions?', id: 'promotions' },
// //       { q: 'Have a different question? Chat with us now.', id: 'chat', isChat: true },
// //     ],
// //     Flights: [
// //       { q: 'Are there any flight ticket promotions going on?', id: 'flight-promo' },
// //       { q: 'How do I change my flight ticket?', id: 'change-flight' },
// //       { q: 'How can I cancel my flight ticket?', id: 'cancel-flight' },
// //       { q: 'Have a different question? Chat with us now.', id: 'chat-flight', isChat: true },
// //     ],
// //     Hotels: [
// //       { q: 'How do I cancel my hotel booking?', id: 'cancel-hotel' },
// //       { q: 'Can I modify my check-in date?', id: 'modify-hotel' },
// //       { q: 'What is the refund policy for hotels?', id: 'hotel-refund' },
// //       { q: 'Have a different question? Chat with us now.', id: 'chat-hotel', isChat: true },
// //     ],
// //     Trains: [
// //       { q: 'How do I book a train ticket?', id: 'book-train' },
// //       { q: 'Can I cancel my train ticket?', id: 'cancel-train' },
// //       { q: 'How do I check my train status?', id: 'train-status' },
// //       { q: 'Have a different question? Chat with us now.', id: 'chat-train', isChat: true },
// //     ],
// //   };

// //   const categories = ['Hot Topics', 'Booking & Price', 'Ticketing & Payment', 'Booking Query', 'Passenger Info'];

// //   const bottomLinks = [
// //     {
// //       icon: (
// //         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// //             d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
// //         </svg>
// //       ),
// //       label: 'Chat',
// //     },
// //     {
// //       icon: (
// //         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// //             d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
// //         </svg>
// //       ),
// //       label: 'Call us',
// //     },
// //     {
// //       icon: (
// //         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// //             d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //         </svg>
// //       ),
// //       label: 'FAQ',
// //     },
// //     {
// //       icon: (
// //         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// //             d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
// //         </svg>
// //       ),
// //       label: 'Emergency',
// //     },
// //   ];

// //   const currentFaqs = faqData[activeTab] || [];

// //   return (
// //     <div className="min-h-screen bg-gray-100 font-sans">

// //       {/* Hero Banner */}
// //       <div className="relative bg-teal-600 overflow-hidden">
// //         <div className="absolute inset-0 opacity-10">
// //           <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-32 -translate-y-16" />
// //           <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-teal-300 rounded-full translate-y-20" />
// //         </div>

// //         <div className="relative max-w-5xl mx-auto px-6 py-10 flex items-center justify-between">
// //           <div>
// //             <h1 className="text-3xl font-bold text-white mb-1">
// //               Customer support <span className="text-yellow-400">•</span>
// //             </h1>
// //             <div className="flex items-center gap-2 mb-6">
// //               <svg className="w-4 h-4 text-teal-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// //                   d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
// //               </svg>
// //               <p className="text-teal-100 text-sm">Support in approx. 30s</p>
// //             </div>
// //             <div className="flex gap-3">
// //               <Link
// //                 to="/bookings"
// //                 className="px-5 py-2 bg-white text-teal-700 rounded-lg text-sm font-semibold hover:bg-teal-50 transition-colors"
// //               >
// //                 Search Bookings
// //               </Link>
// //               <Link
// //                 to="/login"
// //                 className="px-5 py-2 border border-white text-white rounded-lg text-sm font-semibold hover:bg-teal-500 transition-colors"
// //               >
// //                 Sign in or register
// //               </Link>
// //             </div>
// //           </div>

// //           {/* Agent illustration */}
// //           <div className="hidden md:flex items-end justify-center w-44 h-36 relative">
// //             <div className="absolute bottom-0 right-0 w-36 h-36 bg-teal-500 rounded-full opacity-30" />
// //             <div className="relative z-10 flex flex-col items-center">
// //               {/* Chat bubbles */}
// //               <div className="flex gap-2 mb-1">
// //                 <div className="bg-orange-400 rounded-xl rounded-bl-sm px-3 py-1.5 text-white text-xs font-medium shadow">
// //                   Hi! 👋
// //                 </div>
// //                 <div className="bg-white rounded-xl rounded-br-sm px-3 py-1.5 text-teal-700 text-xs font-medium shadow mt-2">
// //                   How can I help?
// //                 </div>
// //               </div>
// //               {/* Agent avatar */}
// //               <div className="w-20 h-20 bg-teal-400 rounded-full flex items-center justify-center border-4 border-teal-300">
// //                 <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
// //                   <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
// //                 </svg>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Search bar overlapping hero */}
// //         <div className="relative max-w-5xl mx-auto px-6 pb-0">
// //           <div className="bg-white rounded-t-xl shadow-lg px-4 py-3 flex items-center gap-3">
// //             <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// //                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
// //             </svg>
// //             <input
// //               type="text"
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //               placeholder="Search for help (e.g., cancellation, refund, tracking...)"
// //               className="w-full text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="max-w-5xl mx-auto px-6 pb-8">

// //         {/* Service Chat Card */}
// //         <div className="bg-white rounded-b-xl rounded-tr-xl shadow-md mb-4 overflow-hidden">
// //           {/* Card Header */}
// //           <div className="px-6 pt-5 pb-4 border-b border-gray-100">
// //             <div className="flex items-center gap-2 mb-4">
// //               <span className="w-3 h-3 rounded-full bg-teal-500 ring-4 ring-teal-100" />
// //               <h2 className="text-lg font-bold text-gray-900">Service chat</h2>
// //             </div>

// //             {/* Tabs */}
// //             <div className="flex gap-2 flex-wrap">
// //               {tabs.map((tab) => (
// //                 <button
// //                   key={tab.key}
// //                   onClick={() => setActiveTab(tab.key)}
// //                   className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
// //                     activeTab === tab.key
// //                       ? 'bg-gray-900 text-white border-gray-900'
// //                       : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
// //                   }`}
// //                 >
// //                   {tab.icon}
// //                   {tab.label}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           {/* FAQ Rows */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
// //             {currentFaqs.map((faq, i) => (
// //               <Link
// //                 key={faq.id}
// //                 to={`/faq/${faq.id}`}
// //                 className={`flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors group ${
// //                   i < 2 ? 'border-b border-gray-100' : ''
// //                 }`}
// //               >
// //                 <span className={`text-sm ${faq.isChat ? 'text-teal-600 font-medium' : 'text-gray-700'}`}>
// //                   {faq.q}
// //                 </span>
// //                 <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 flex-shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //                 </svg>
// //               </Link>
// //             ))}
// //           </div>

// //           {/* FAQ Categories */}
// //           <div className="px-6 py-4 border-t border-gray-100">
// //             <p className="text-sm font-semibold text-gray-800 mb-3">More {activeTab} FAQ</p>
// //             <div className="flex flex-wrap gap-2">
// //               {categories.map((cat) => (
// //                 <button
// //                   key={cat}
// //                   onClick={() => setActiveCategory(cat)}
// //                   className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
// //                     activeCategory === cat
// //                       ? 'bg-teal-600 text-white border-teal-600'
// //                       : 'bg-white text-gray-600 border-gray-200 hover:border-teal-300 hover:text-teal-600'
// //                   }`}
// //                 >
// //                   {cat}
// //                 </button>
// //               ))}
// //               <button className="px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 text-gray-500 hover:border-gray-300 transition-all">
// //                 •••
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Contact Options */}
// //         <div className="grid grid-cols-4 gap-3 mb-4">
// //           {bottomLinks.map((link) => (
// //             <button
// //               key={link.label}
// //               className="bg-white rounded-xl border border-gray-200 py-4 flex flex-col items-center gap-2 hover:border-teal-300 hover:shadow-sm transition-all group"
// //             >
// //               <span className="text-gray-500 group-hover:text-teal-600 transition-colors">
// //                 {link.icon}
// //               </span>
// //               <span className="text-xs text-gray-600 font-medium">{link.label}</span>
// //             </button>
// //           ))}
// //         </div>

// //         {/* App Download Section */}
// //         <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
// //           <div className="flex flex-col md:flex-row">
// //             {/* Left: Phone mockup */}
// //             <div className="md:w-2/5 bg-gradient-to-br from-sky-100 to-teal-50 p-6 flex items-center justify-center min-h-40">
// //               <div className="relative w-28 h-48">
// //                 {/* Phone frame */}
// //                 <div className="absolute inset-0 bg-gray-900 rounded-2xl shadow-xl" />
// //                 {/* Screen */}
// //                 <div className="absolute inset-1 bg-teal-500 rounded-xl overflow-hidden">
// //                   <div className="bg-teal-600 h-10 flex items-center px-3">
// //                     <div className="w-16 h-2 bg-teal-400 rounded" />
// //                   </div>
// //                   <div className="p-2 space-y-2 mt-1">
// //                     {[
// //                       { color: 'bg-red-400', w: 'w-5' },
// //                       { color: 'bg-blue-400', w: 'w-5' },
// //                       { color: 'bg-green-400', w: 'w-5' },
// //                     ].map((item, i) => (
// //                       <div key={i} className="flex items-center gap-2 bg-white bg-opacity-90 rounded-lg p-1.5">
// //                         <div className={`${item.w} h-5 ${item.color} rounded flex-shrink-0`} />
// //                         <div className="flex-1 space-y-1">
// //                           <div className="h-1.5 bg-gray-200 rounded w-full" />
// //                           <div className="h-1.5 bg-gray-200 rounded w-3/4" />
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //                 {/* Notch */}
// //                 <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-gray-800 rounded-full z-10" />
// //               </div>
// //             </div>

// //             {/* Right: Content */}
// //             <div className="md:w-3/5 p-6 flex flex-col justify-center">
// //               <h3 className="text-lg font-bold text-gray-900 mb-1">
// //                 For fast and personalised support, download the app!
// //               </h3>

// //               <div className="flex items-center gap-1.5 mb-4">
// //                 <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
// //                   <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
// //                 </svg>
// //                 <span className="text-sm text-teal-600 font-medium">Easy download</span>
// //               </div>

// //               <div className="flex items-start gap-6">
// //                 {/* QR code placeholder */}
// //                 <div className="flex-shrink-0 w-24 h-24 bg-gray-50 border border-gray-200 rounded-lg flex flex-col items-center justify-center gap-1">
// //                   <div className="grid grid-cols-5 gap-0.5 p-2">
// //                     {Array.from({ length: 25 }).map((_, i) => (
// //                       <div
// //                         key={i}
// //                         className={`w-2 h-2 rounded-sm ${Math.random() > 0.4 ? 'bg-gray-900' : 'bg-transparent'}`}
// //                       />
// //                     ))}
// //                   </div>
// //                   <p className="text-xs text-gray-400">Scan QR code</p>
// //                 </div>

// //                 {/* Features */}
// //                 <div className="space-y-2">
// //                   {[
// //                     'Get help in one click',
// //                     'Effortless booking management',
// //                     'Free in-app calls',
// //                   ].map((feature) => (
// //                     <div key={feature} className="flex items-center gap-2">
// //                       <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
// //                       </svg>
// //                       <span className="text-sm text-gray-700">{feature}</span>
// //                     </div>
// //                   ))}
// //                   <Link
// //                     to="/app-features"
// //                     className="flex items-center gap-1 text-sm text-teal-600 font-medium hover:text-teal-700 mt-2"
// //                   >
// //                     More reasons to download
// //                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //                     </svg>
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default SupportPage;

























import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState('Bus');
  const [activeCategory, setActiveCategory] = useState('Hot Topics');
  const [searchQuery, setSearchQuery] = useState('');

  const ChevronRight = ({ className = 'w-4 h-4' }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  // ── Tabs ─────────────────────────────────────────────────
  const tabs = [
    {
      key: 'Bus',
      label: 'Bus',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 17v1a1 1 0 001 1h6a1 1 0 001-1v-1M3 10h18M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      key: 'Flights',
      label: 'Flights',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      key: 'Hotels',
      label: 'Hotels',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      key: 'Trains',
      label: 'Trains',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11m0 0H5a2 2 0 01-2-2V9m6 5h10a2 2 0 002-2V9m-6 5v4m0 0H9m6 0h-6" />
        </svg>
      ),
    },
  ];

  // ── FAQ Data — each item has a `to` route ─────────────────
  const faqData = {
    Bus: [
      { q: 'How do I cancel my bus ticket?', id: 'cancel-bus', to: '/cancellation' },
      { q: 'How do I change my travel date?', id: 'change-date', to: '/faq/change-date' },
      { q: 'Are there any ongoing bus promotions?', id: 'promotions', to: '/faq/promotions' },
      { q: 'Have a different question? Chat with us now.', id: 'chat', to: '/contact-us', isChat: true },
    ],
    Flights: [
      { q: 'Are there any flight ticket promotions?', id: 'flight-promo', to: '/faq/flight-promo' },
      { q: 'How do I change my flight ticket?', id: 'change-flight', to: '/faq/change-flight' },
      { q: 'How can I cancel my flight ticket?', id: 'cancel-flight', to: '/cancellation' },
      { q: 'Have a different question? Chat with us now.', id: 'chat-flight', to: '/contact-us', isChat: true },
    ],
    Hotels: [
      { q: 'How do I cancel my hotel booking?', id: 'cancel-hotel', to: '/cancellation' },
      { q: 'Can I modify my check-in date?', id: 'modify-hotel', to: '/faq/modify-hotel' },
      { q: 'What is the refund policy for hotels?', id: 'hotel-refund', to: '/refund-policy' },
      { q: 'Have a different question? Chat with us now.', id: 'chat-hotel', to: '/contact-us', isChat: true },
    ],
    Trains: [
      { q: 'How do I book a train ticket?', id: 'book-train', to: '/faq/book-train' },
      { q: 'Can I cancel my train ticket?', id: 'cancel-train', to: '/cancellation' },
      { q: 'How do I check my train status?', id: 'train-status', to: '/faq/train-status' },
      { q: 'Have a different question? Chat with us now.', id: 'chat-train', to: '/contact-us', isChat: true },
    ],
  };

  const categories = ['Hot Topics', 'Booking & Price', 'Ticketing & Payment', 'Booking Query', 'Passenger Info'];

  // ── Quick Access Cards ────────────────────────────────────
  const quickCards = [
    {
      to: '/faq',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: 'FAQ',
      desc: 'Answers to commonly asked questions about bookings, cancellations, and more.',
      linkText: 'View FAQs',
    },
    {
      to: '/cancellation',
      iconBg: 'bg-red-50',
      iconColor: 'text-red-500',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      ),
      title: 'Cancellation',
      desc: 'Cancel your booking, check cancellation policy, and manage reservations.',
      linkText: 'Cancel Booking',
    },
    {
      to: '/refund-policy',
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: 'Refund Policy',
      desc: 'Track refund status, check timelines and policy details.',
      linkText: 'View Policy',
    },
    {
      to: '/contact-us',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      title: 'Contact Us',
      desc: 'Get in touch with our 24/7 support team via call, email, or live chat.',
      linkText: 'Contact Now',
    },
  ];

  // ── Self Service ──────────────────────────────────────────
  const selfServiceItems = [
    { label: 'Track My Bus', to: '/track-bus' },
    { label: 'Download Invoice', to: '/invoice' },
    { label: 'Change Travel Date', to: '/change-date' },
  ];

  // ── Bottom Contact Icons ──────────────────────────────────
  const bottomLinks = [
    {
      to: '/contact-us',
      label: 'Chat',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      to: '/contact-us',
      label: 'Call us',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      to: '/faq',
      label: 'FAQ',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      to: '/contact-us',
      label: 'Emergency',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
  ];

  const currentFaqs = faqData[activeTab] || [];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">

      {/* ── Hero Banner ─────────────────────────────────────── */}
      <div className="relative bg-teal-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-32 -translate-y-16" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-teal-300 rounded-full translate-y-20" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">
              Customer support <span className="text-yellow-400">•</span>
            </h1>
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-4 h-4 text-teal-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-teal-100 text-sm">Support in approx. 30s</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link to="/bookings"
                className="px-5 py-2 bg-white text-teal-700 rounded-lg text-sm font-semibold hover:bg-teal-50 transition-colors">
                Search Bookings
              </Link>
              <Link to="/login"
                className="px-5 py-2 border border-white text-white rounded-lg text-sm font-semibold hover:bg-teal-500 transition-colors">
                Sign in or register
              </Link>
            </div>
          </div>

          {/* Agent avatar */}
          <div className="hidden md:flex items-end justify-center w-44 h-36 relative">
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-teal-500 rounded-full opacity-30" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex gap-2 mb-1">
                <div className="bg-orange-400 rounded-xl rounded-bl-sm px-3 py-1.5 text-white text-xs font-medium shadow">
                  Hi! 👋
                </div>
                <div className="bg-white rounded-xl rounded-br-sm px-3 py-1.5 text-teal-700 text-xs font-medium shadow mt-2">
                  How can I help?
                </div>
              </div>
              <div className="w-20 h-20 bg-teal-400 rounded-full flex items-center justify-center border-4 border-teal-300">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Search bar — merges into card below */}
        <div className="relative max-w-5xl mx-auto px-6 pb-0">
          <div className="bg-white rounded-t-xl shadow-lg px-4 py-3 flex items-center gap-3">
            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help (e.g., cancellation, refund, tracking...)"
              className="w-full text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* ── Main Content ──────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pb-10">

        {/* ── Service Chat Card ──────────────────────────────── */}
        <div className="bg-white rounded-b-xl rounded-tr-xl shadow-md mb-4 overflow-hidden">
          <div className="px-6 pt-5 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-teal-500 ring-4 ring-teal-100" />
              <h2 className="text-lg font-bold text-gray-900">Service chat</h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                    activeTab === tab.key
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ rows — each is a Link */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {currentFaqs.map((faq, i) => (
              <Link
                key={faq.id}
                to={faq.to}
                className={`flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors group ${
                  i < 2 ? 'border-b border-gray-100' : ''
                }`}
              >
                <span className={`text-sm ${faq.isChat ? 'text-teal-600 font-medium' : 'text-gray-700'}`}>
                  {faq.q}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 flex-shrink-0 ml-3" />
              </Link>
            ))}
          </div>

          {/* Category pills */}
          <div className="px-6 py-4 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-800 mb-3">More {activeTab} FAQ</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    activeCategory === cat
                      ? 'bg-teal-600 text-white border-teal-600'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-teal-300 hover:text-teal-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
              <button className="px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 text-gray-500 hover:border-gray-300 transition-all">
                •••
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom Contact Icons ──────────────────────────── */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {bottomLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="bg-white rounded-xl border border-gray-200 py-4 flex flex-col items-center gap-2 hover:border-teal-300 hover:shadow-sm transition-all group"
            >
              <span className="text-gray-500 group-hover:text-teal-600 transition-colors">
                {link.icon}
              </span>
              <span className="text-xs text-gray-600 font-medium">{link.label}</span>
            </Link>
          ))}
        </div>

        {/* ── Quick Access Cards ────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {quickCards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:border-teal-300 hover:shadow-sm transition-all group"
            >
              <div className={`inline-flex p-2.5 rounded-lg mb-3 ${card.iconBg}`}>
                <svg className={`w-5 h-5 ${card.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {card.icon}
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">{card.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">{card.desc}</p>
              <span className="text-xs text-teal-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                {card.linkText}
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>

        {/* ── Phone Support + Self Service ─────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">

          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-800 mb-4">Need Immediate Assistance?</h3>
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-teal-50 rounded-full flex-shrink-0">
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-900">1800-123-4567</p>
                <p className="text-xs text-gray-400 mt-0.5">Toll-free · Available 24/7</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-800 mb-3">Self Service</h3>
            <div className="space-y-1">
              {selfServiceItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700 group"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── App Download Section ──────────────────────────── */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-gradient-to-br from-sky-100 to-teal-50 p-6 flex items-center justify-center min-h-40">
              <div className="relative w-28 h-48">
                <div className="absolute inset-0 bg-gray-900 rounded-2xl shadow-xl" />
                <div className="absolute inset-1 bg-teal-500 rounded-xl overflow-hidden">
                  <div className="bg-teal-600 h-10 flex items-center px-3">
                    <div className="w-16 h-2 bg-teal-400 rounded" />
                  </div>
                  <div className="p-2 space-y-2 mt-1">
                    {[{ color: 'bg-red-400' }, { color: 'bg-blue-400' }, { color: 'bg-green-400' }].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white bg-opacity-90 rounded-lg p-1.5">
                        <div className={`w-5 h-5 ${item.color} rounded flex-shrink-0`} />
                        <div className="flex-1 space-y-1">
                          <div className="h-1.5 bg-gray-200 rounded w-full" />
                          <div className="h-1.5 bg-gray-200 rounded w-3/4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-gray-800 rounded-full z-10" />
              </div>
            </div>

            <div className="md:w-3/5 p-6 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                For fast and personalised support, download the app!
              </h3>
              <div className="flex items-center gap-1.5 mb-4">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                </svg>
                <span className="text-sm text-teal-600 font-medium">Easy download</span>
              </div>
              <div className="flex items-start gap-6">
                {/* QR placeholder */}
                <div className="flex-shrink-0 w-24 h-28 bg-gray-50 border border-gray-200 rounded-lg flex flex-col items-center justify-center gap-1 p-2">
                  <div className="grid grid-cols-5 gap-0.5">
                    {[1,1,1,1,1, 1,0,0,0,1, 1,0,1,0,1, 1,0,0,0,1, 1,1,1,1,1].map((v, i) => (
                      <div key={i} className={`w-2.5 h-2.5 rounded-sm ${v ? 'bg-gray-900' : 'bg-transparent'}`} />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Scan QR</p>
                </div>
                <div className="space-y-2.5">
                  {['Get help in one click', 'Effortless booking management', 'Free in-app calls'].map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                  <Link to="/app-download"
                    className="flex items-center gap-1 text-sm text-teal-600 font-medium hover:text-teal-700 mt-2 transition-colors">
                    More reasons to download
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SupportPage;