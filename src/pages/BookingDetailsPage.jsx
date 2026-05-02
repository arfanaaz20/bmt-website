// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import {
//   Calendar, MapPin, Star, Users, Clock, Shield, CheckCircle,
//   ChevronRight, CreditCard, Wallet, Smartphone,
//   Gift, Award, Heart, Share2, Minus, Plus, 
//   Utensils, Ticket, Camera, ArrowLeft, Download, 
//   MessageCircle, Headphones, Lock, CalendarDays, 
//   Clock3, UserCircle, CreditCard as CardIcon,
//   Sparkles, ShoppingBag, CircleCheck, Circle,
//   Hash, Mail, Phone, Printer, Coffee, Wifi,
//   Sun, Sunset, Moon, ChevronLeft, FileText
// } from 'lucide-react';

// const BookingDetailsPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { experience, bookingDetails: initialDetails } = location.state || {};

//   const [bookingDate, setBookingDate] = useState(initialDetails?.date || new Date().toISOString().split('T')[0]);
//   const [travelers, setTravelers] = useState(initialDetails?.travelers || 2);
//   const [selectedTime, setSelectedTime] = useState('10:00');
//   const [selectedAddOns, setSelectedAddOns] = useState([]);
//   const [paymentMethod, setPaymentMethod] = useState('card');
//   const [activeTab, setActiveTab] = useState('details');
//   const [promoCode, setPromoCode] = useState('');
//   const [promoApplied, setPromoApplied] = useState(false);
//   const [agreeTerms, setAgreeTerms] = useState(false);

//   // If no experience data, redirect to home
//   if (!experience) {
//     navigate('/');
//     return null;
//   }

//   // Available time slots
//   const timeSlots = [
//     { time: '09:00', label: '09:00 AM', icon: Sun },
//     { time: '10:00', label: '10:00 AM', icon: Sun },
//     { time: '11:00', label: '11:00 AM', icon: Sun },
//     { time: '12:00', label: '12:00 PM', icon: Sun },
//     { time: '14:00', label: '02:00 PM', icon: Sun },
//     { time: '15:00', label: '03:00 PM', icon: Sun },
//     { time: '16:00', label: '04:00 PM', icon: Sun },
//     { time: '18:00', label: '06:00 PM', icon: Sunset },
//     { time: '19:00', label: '07:00 PM', icon: Moon }
//   ];

//   // Add-ons available for this experience
//   const addOns = [
//     { id: 1, name: 'Hotel Pickup & Drop', price: 1299, description: 'Round-trip transfer from your hotel', icon: MapPin },
//     { id: 2, name: 'Professional Photography', price: 2499, description: '30 mins photo session + 10 digital copies', icon: Camera },
//     { id: 3, name: 'Meal Upgrade', price: 899, description: 'Premium dining experience', icon: Utensils },
//     { id: 4, name: 'Fast Pass Access', price: 1599, description: 'Skip all queues and priority entry', icon: Ticket },
//     { id: 5, name: 'Audio Guide', price: 399, description: 'Multi-language audio commentary', icon: Headphones },
//     { id: 6, name: 'Souvenir Package', price: 699, description: 'Exclusive memorabilia box', icon: Gift }
//   ];

//   // Price calculation
//   const basePrice = experience.price * travelers;
//   const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
//     const addOn = addOns.find(a => a.id === addOnId);
//     return sum + (addOn?.price || 0);
//   }, 0);
//   const discount = promoApplied ? basePrice * 0.1 : 0;
//   const tax = Math.round((basePrice + addOnsTotal - discount) * 0.12);
//   const totalAmount = basePrice + addOnsTotal - discount + tax;

//   const formatCurrency = (amount) => {
//     return `₹${amount.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
//   };

//   const handleAddOnToggle = (addOnId) => {
//     setSelectedAddOns(prev =>
//       prev.includes(addOnId)
//         ? prev.filter(id => id !== addOnId)
//         : [...prev, addOnId]
//     );
//   };

//   const handleApplyPromo = () => {
//     if (promoCode.toUpperCase() === 'HOLIDAY10') {
//       setPromoApplied(true);
//     }
//   };

//   const handleProceedToPayment = () => {
//     // Create a clean copy of booking data WITHOUT any React components
//     const cleanAddOns = selectedAddOns.map(id => {
//       const addOn = addOns.find(a => a.id === id);
//       return {
//         id: addOn.id,
//         name: addOn.name,
//         price: addOn.price,
//         description: addOn.description
//       };
//     });

//     const bookingData = {
//       experience: {
//         id: experience.id,
//         title: experience.title,
//         location: experience.location,
//         category: experience.category,
//         rating: experience.rating,
//         reviews: experience.reviews,
//         image: experience.image,
//         price: experience.price,
//         originalPrice: experience.originalPrice,
//         duration: experience.duration,
//         meetingPoint: experience.meetingPoint || 'Main entrance of the attraction'
//       },
//       bookingDetails: {
//         date: bookingDate,
//         time: selectedTime,
//         travelers,
//         addOns: cleanAddOns,
//         basePrice,
//         addOnsTotal,
//         discount,
//         tax,
//         totalAmount,
//         paymentMethod,
//         promoApplied,
//         promoCode: promoApplied ? promoCode : null
//       }
//     };
    
//     navigate('/booking-confirmation', { state: bookingData });
//   };

//   // Get day name
//   const getDayName = (dateStr) => {
//     const date = new Date(dateStr);
//     return date.toLocaleDateString('en-US', { weekday: 'short' });
//   };

//   // Get month name
//   const getMonthName = (dateStr) => {
//     const date = new Date(dateStr);
//     return date.toLocaleDateString('en-US', { month: 'short' });
//   };

//   // Get day number
//   const getDayNumber = (dateStr) => {
//     const date = new Date(dateStr);
//     return date.getDate();
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 font-['Inter',sans-serif]">
//       {/* Header */}
//       <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <button 
//                 onClick={() => navigate(-1)}
//                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//               >
//                 <ArrowLeft className="w-5 h-5 text-gray-600" />
//               </button>
//               <div>
//                 <h1 className="text-xl font-bold text-gray-800">Complete Your Booking</h1>
//                 <p className="text-sm text-gray-500">Secure your spot in just a few steps</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                 <Share2 className="w-5 h-5 text-gray-600" />
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                 <Heart className="w-5 h-5 text-gray-600" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Main Content - Left Column */}
//           <div className="flex-1 lg:w-2/3">
//             {/* Experience Summary Card */}
//             <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
//               <div className="flex gap-4">
//                 <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
//                   <img 
//                     src={experience.image} 
//                     alt={experience.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-start justify-between">
//                     <div>
//                       <div className="flex items-center gap-2 mb-1">
//                         <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium capitalize flex items-center gap-1">
//                           <Ticket className="w-3 h-3" />
//                           {experience.category}
//                         </span>
//                         <div className="flex items-center gap-1">
//                           <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                           <span className="text-sm font-medium">{experience.rating}</span>
//                           <span className="text-sm text-gray-500">({experience.reviews})</span>
//                         </div>
//                       </div>
//                       <h2 className="text-xl font-bold text-gray-800 mb-1">{experience.title}</h2>
//                       <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <MapPin className="w-4 h-4" />
//                         {experience.location}
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
//                         <Clock className="w-4 h-4" />
//                         {experience.duration || 'Full Day'}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Booking Tabs */}
//             <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6">
//               <div className="flex border-b border-gray-200">
//                 {[
//                   { id: 'details', label: 'Select Date & Time', icon: CalendarDays },
//                   { id: 'addons', label: 'Add-ons', icon: ShoppingBag },
//                   { id: 'review', label: 'Review Booking', icon: FileText }
//                 ].map((tab) => {
//                   const Icon = tab.icon;
//                   return (
//                     <button
//                       key={tab.id}
//                       onClick={() => setActiveTab(tab.id)}
//                       className={`flex-1 px-6 py-4 text-sm font-medium capitalize transition-colors relative flex items-center justify-center gap-2 ${
//                         activeTab === tab.id 
//                           ? 'text-blue-600 border-b-2 border-blue-600' 
//                           : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
//                       }`}
//                     >
//                       <Icon className="w-4 h-4" />
//                       {tab.label}
//                     </button>
//                   );
//                 })}
//               </div>

//               <div className="p-6">
//                 {/* Tab 1: Date & Time Selection */}
//                 {activeTab === 'details' && (
//                   <div className="space-y-6">
//                     {/* Date Selection */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
//                         <Calendar className="w-4 h-4" />
//                         Select Date
//                       </label>
//                       <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
//                         {[...Array(7)].map((_, i) => {
//                           const date = new Date();
//                           date.setDate(date.getDate() + i);
//                           const dateStr = date.toISOString().split('T')[0];
//                           const isSelected = bookingDate === dateStr;
//                           const isToday = i === 0;
                          
//                           return (
//                             <button
//                               key={i}
//                               onClick={() => setBookingDate(dateStr)}
//                               className={`p-3 rounded-xl border text-center transition-all ${
//                                 isSelected
//                                   ? 'bg-blue-600 border-blue-600 text-white'
//                                   : isToday
//                                   ? 'border-blue-200 bg-blue-50/50 hover:bg-blue-50'
//                                   : 'hover:border-blue-300 hover:bg-blue-50'
//                               }`}
//                             >
//                               <div className="text-xs font-medium">
//                                 {getDayName(dateStr)}
//                               </div>
//                               <div className="text-lg font-bold">
//                                 {getDayNumber(dateStr)}
//                               </div>
//                               <div className="text-xs">
//                                 {getMonthName(dateStr)}
//                               </div>
//                               {isToday && (
//                                 <span className="text-[10px] mt-1 block font-medium text-blue-600">
//                                   Today
//                                 </span>
//                               )}
//                             </button>
//                           );
//                         })}
//                       </div>
//                     </div>

//                     {/* Time Slots */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
//                         <Clock3 className="w-4 h-4" />
//                         Select Time Slot
//                       </label>
//                       <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
//                         {timeSlots.map((slot) => {
//                           const Icon = slot.icon;
//                           const isSelected = selectedTime === slot.time;
//                           return (
//                             <button
//                               key={slot.time}
//                               onClick={() => setSelectedTime(slot.time)}
//                               className={`px-4 py-3 rounded-xl border text-sm transition-all flex flex-col items-center gap-1 ${
//                                 isSelected
//                                   ? 'bg-blue-600 border-blue-600 text-white'
//                                   : 'hover:border-blue-300 hover:bg-blue-50'
//                               }`}
//                             >
//                               <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-gray-500'}`} />
//                               <span className="font-medium">{slot.label}</span>
//                             </button>
//                           );
//                         })}
//                       </div>
//                     </div>

//                     {/* Travelers */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
//                         <Users className="w-4 h-4" />
//                         Number of Travelers
//                       </label>
//                       <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
//                         <button
//                           onClick={() => setTravelers(Math.max(1, travelers - 1))}
//                           className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all"
//                         >
//                           <Minus className="w-4 h-4" />
//                         </button>
//                         <div className="flex-1 text-center">
//                           <span className="text-2xl font-bold text-gray-800">{travelers}</span>
//                           <span className="text-sm text-gray-500 ml-2">
//                             {travelers === 1 ? 'Adult' : 'Adults'}
//                           </span>
//                         </div>
//                         <button
//                           onClick={() => setTravelers(Math.min(10, travelers + 1))}
//                           className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all"
//                         >
//                           <Plus className="w-4 h-4" />
//                         </button>
//                       </div>
//                       <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
//                         <Award className="w-3 h-3" />
//                         Children under 12 get 50% off
//                       </p>
//                     </div>

//                     <div className="flex justify-end">
//                       <button
//                         onClick={() => setActiveTab('addons')}
//                         className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
//                       >
//                         Continue to Add-ons
//                         <ChevronRight className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {/* Tab 2: Add-ons */}
//                 {activeTab === 'addons' && (
//                   <div className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {addOns.map((addOn) => {
//                         const Icon = addOn.icon;
//                         const isSelected = selectedAddOns.includes(addOn.id);
//                         return (
//                           <div
//                             key={addOn.id}
//                             onClick={() => handleAddOnToggle(addOn.id)}
//                             className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
//                               isSelected
//                                 ? 'border-blue-500 bg-blue-50'
//                                 : 'border-gray-200 hover:border-blue-300'
//                             }`}
//                           >
//                             <div className="flex items-start gap-3">
//                               <div className={`p-2 rounded-lg ${
//                                 isSelected ? 'bg-blue-600' : 'bg-gray-100'
//                               }`}>
//                                 <Icon className={`w-5 h-5 ${
//                                   isSelected ? 'text-white' : 'text-gray-600'
//                                 }`} />
//                               </div>
//                               <div className="flex-1">
//                                 <div className="flex items-start justify-between">
//                                   <div>
//                                     <h4 className="font-medium text-gray-800">{addOn.name}</h4>
//                                     <p className="text-xs text-gray-500 mt-1">{addOn.description}</p>
//                                   </div>
//                                   <div className="text-right">
//                                     <span className="font-bold text-gray-900">
//                                       {formatCurrency(addOn.price)}
//                                     </span>
//                                     {isSelected && (
//                                       <CheckCircle className="w-4 h-4 text-blue-600 ml-2 inline" />
//                                     )}
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>

//                     <div className="flex justify-between">
//                       <button
//                         onClick={() => setActiveTab('details')}
//                         className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
//                       >
//                         <ChevronLeft className="w-4 h-4" />
//                         Back
//                       </button>
//                       <button
//                         onClick={() => setActiveTab('review')}
//                         className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
//                       >
//                         Review Booking
//                         <ChevronRight className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {/* Tab 3: Review Booking */}
//                 {activeTab === 'review' && (
//                   <div className="space-y-6">
//                     <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
//                       <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
//                       <div>
//                         <h4 className="font-medium text-green-800">Almost there!</h4>
//                         <p className="text-sm text-green-700">
//                           Please review your booking details before proceeding to payment
//                         </p>
//                       </div>
//                     </div>

//                     {/* Booking Summary */}
//                     <div className="space-y-4">
//                       <div className="flex justify-between items-center py-2 border-b">
//                         <span className="text-gray-600 flex items-center gap-2">
//                           <Calendar className="w-4 h-4" />
//                           Date
//                         </span>
//                         <span className="font-medium text-gray-900">
//                           {new Date(bookingDate).toLocaleDateString('en-US', {
//                             weekday: 'long',
//                             year: 'numeric',
//                             month: 'long',
//                             day: 'numeric'
//                           })}
//                         </span>
//                       </div>
//                       <div className="flex justify-between items-center py-2 border-b">
//                         <span className="text-gray-600 flex items-center gap-2">
//                           <Clock className="w-4 h-4" />
//                           Time
//                         </span>
//                         <span className="font-medium text-gray-900">
//                           {timeSlots.find(s => s.time === selectedTime)?.label || selectedTime}
//                         </span>
//                       </div>
//                       <div className="flex justify-between items-center py-2 border-b">
//                         <span className="text-gray-600 flex items-center gap-2">
//                           <Users className="w-4 h-4" />
//                           Travelers
//                         </span>
//                         <span className="font-medium text-gray-900">{travelers} {travelers === 1 ? 'Adult' : 'Adults'}</span>
//                       </div>
//                       {selectedAddOns.length > 0 && (
//                         <div className="py-2 border-b">
//                           <span className="text-gray-600 block mb-2 flex items-center gap-2">
//                             <Gift className="w-4 h-4" />
//                             Add-ons
//                           </span>
//                           {selectedAddOns.map(id => {
//                             const addOn = addOns.find(a => a.id === id);
//                             return (
//                               <div key={id} className="flex justify-between items-center ml-4 mb-2">
//                                 <span className="text-sm text-gray-600 flex items-center gap-2">
//                                   <CircleCheck className="w-3 h-3 text-blue-600" />
//                                   {addOn.name}
//                                 </span>
//                                 <span className="text-sm font-medium text-gray-900">
//                                   {formatCurrency(addOn.price)}
//                                 </span>
//                               </div>
//                             );
//                           })}
//                         </div>
//                       )}
//                     </div>

//                     <div className="flex justify-between">
//                       <button
//                         onClick={() => setActiveTab('addons')}
//                         className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
//                       >
//                         <ChevronLeft className="w-4 h-4" />
//                         Back
//                       </button>
//                       <button
//                         onClick={handleProceedToPayment}
//                         disabled={!agreeTerms}
//                         className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//                       >
//                         <Lock className="w-4 h-4" />
//                         Proceed to Payment
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Cancellation Policy */}
//             <div className="bg-white rounded-2xl border border-gray-200 p-6">
//               <div className="flex items-start gap-3">
//                 <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
//                 <div>
//                   <h3 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
//                     <CheckCircle className="w-4 h-4 text-green-600" />
//                     Free Cancellation
//                   </h3>
//                   <p className="text-sm text-gray-600">
//                     Cancel up to 24 hours before the experience starts for a full refund. 
//                     No questions asked.
//                   </p>
//                   <button className="text-sm text-blue-600 font-medium mt-2 hover:text-blue-700 flex items-center gap-1">
//                     View full policy
//                     <ChevronRight className="w-3 h-3" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Price Summary & Payment */}
//           <div className="lg:w-1/3">
//             <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
//                 <Hash className="w-5 h-5" />
//                 Price Details
//               </h3>
              
//               {/* Price Breakdown */}
//               <div className="space-y-3 mb-6">
//                 <div className="flex justify-between text-gray-600">
//                   <span>Base Price ({travelers} {travelers === 1 ? 'Adult' : 'Adults'})</span>
//                   <span className="font-medium">{formatCurrency(experience.price * travelers)}</span>
//                 </div>
                
//                 {selectedAddOns.length > 0 && (
//                   <div className="flex justify-between text-gray-600">
//                     <span>Add-ons ({selectedAddOns.length})</span>
//                     <span className="font-medium">{formatCurrency(addOnsTotal)}</span>
//                   </div>
//                 )}
                
//                 {promoApplied && (
//                   <div className="flex justify-between text-green-600">
//                     <span>Promo Discount (HOLIDAY10)</span>
//                     <span className="font-medium">-{formatCurrency(discount)}</span>
//                   </div>
//                 )}
                
//                 <div className="flex justify-between text-gray-600">
//                   <span>Taxes & Fees (12%)</span>
//                   <span className="font-medium">{formatCurrency(tax)}</span>
//                 </div>
                
//                 <div className="border-t border-gray-200 pt-3 mt-3">
//                   <div className="flex justify-between items-center">
//                     <span className="text-lg font-bold text-gray-800">Total Amount</span>
//                     <span className="text-2xl font-bold text-blue-600">
//                       {formatCurrency(totalAmount)}
//                     </span>
//                   </div>
//                   <p className="text-xs text-gray-500 mt-1">
//                     Inclusive of all taxes
//                   </p>
//                 </div>
//               </div>

//               {/* Promo Code */}
//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
//                   <Gift className="w-4 h-4" />
//                   Apply Promo Code
//                 </label>
//                 <div className="flex gap-2">
//                   <input
//                     type="text"
//                     value={promoCode}
//                     onChange={(e) => setPromoCode(e.target.value)}
//                     placeholder="Enter code"
//                     className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     disabled={promoApplied}
//                   />
//                   <button
//                     onClick={handleApplyPromo}
//                     disabled={!promoCode || promoApplied}
//                     className="px-4 py-2 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     Apply
//                   </button>
//                 </div>
//                 {promoApplied && (
//                   <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
//                     <CheckCircle className="w-4 h-4" />
//                     Promo code applied successfully!
//                   </p>
//                 )}
//                 <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
//                   <Sparkles className="w-3 h-3" />
//                   Try: HOLIDAY10 for 10% off
//                 </p>
//               </div>

//               {/* Payment Methods */}
//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
//                   <CardIcon className="w-4 h-4" />
//                   Select Payment Method
//                 </label>
//                 <div className="space-y-3">
//                   <label className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${
//                     paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
//                   }`}>
//                     <input
//                       type="radio"
//                       name="payment"
//                       value="card"
//                       checked={paymentMethod === 'card'}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                       className="w-4 h-4 text-blue-600"
//                     />
//                     <div className="flex items-center gap-3 ml-3 flex-1">
//                       <CreditCard className="w-5 h-5 text-gray-600" />
//                       <span className="text-sm font-medium text-gray-700">Credit/Debit Card</span>
//                     </div>
//                   </label>

//                   <label className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${
//                     paymentMethod === 'upi' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
//                   }`}>
//                     <input
//                       type="radio"
//                       name="payment"
//                       value="upi"
//                       checked={paymentMethod === 'upi'}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                       className="w-4 h-4 text-blue-600"
//                     />
//                     <div className="flex items-center gap-3 ml-3 flex-1">
//                       <Smartphone className="w-5 h-5 text-gray-600" />
//                       <span className="text-sm font-medium text-gray-700">UPI / Google Pay</span>
//                     </div>
//                   </label>

//                   <label className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${
//                     paymentMethod === 'wallet' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
//                   }`}>
//                     <input
//                       type="radio"
//                       name="payment"
//                       value="wallet"
//                       checked={paymentMethod === 'wallet'}
//                       onChange={(e) => setPaymentMethod(e.target.value)}
//                       className="w-4 h-4 text-blue-600"
//                     />
//                     <div className="flex items-center gap-3 ml-3 flex-1">
//                       <Wallet className="w-5 h-5 text-gray-600" />
//                       <span className="text-sm font-medium text-gray-700">Digital Wallet</span>
//                     </div>
//                   </label>
//                 </div>
//               </div>

//               {/* Terms Agreement */}
//               <div className="mb-6">
//                 <label className="flex items-start gap-3 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={agreeTerms}
//                     onChange={(e) => setAgreeTerms(e.target.checked)}
//                     className="w-4 h-4 mt-1 text-blue-600 rounded"
//                   />
//                   <span className="text-sm text-gray-600">
//                     I agree to the <button className="text-blue-600 hover:underline">Terms & Conditions</button> and 
//                     <button className="text-blue-600 hover:underline"> Cancellation Policy</button>
//                   </span>
//                 </label>
//               </div>

//               {/* Proceed Button */}
//               <button
//                 onClick={handleProceedToPayment}
//                 disabled={!agreeTerms}
//                 className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
//               >
//                 <Lock className="w-5 h-5" />
//                 Proceed to Pay {formatCurrency(totalAmount)}
//               </button>

//               {/* Trust Badges */}
//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <div className="grid grid-cols-3 gap-4">
//                   <div className="text-center">
//                     <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
//                       <Shield className="w-4 h-4 text-green-600" />
//                     </div>
//                     <p className="text-xs text-gray-600">Secure Payment</p>
//                   </div>
//                   <div className="text-center">
//                     <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
//                       <CheckCircle className="w-4 h-4 text-blue-600" />
//                     </div>
//                     <p className="text-xs text-gray-600">Instant Confirmation</p>
//                   </div>
//                   <div className="text-center">
//                     <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
//                       <Headphones className="w-4 h-4 text-purple-600" />
//                     </div>
//                     <p className="text-xs text-gray-600">24/7 Support</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Need Help */}
//               <div className="mt-4 p-4 bg-gray-50 rounded-xl">
//                 <div className="flex items-center gap-3">
//                   <MessageCircle className="w-5 h-5 text-gray-600" />
//                   <div>
//                     <p className="text-sm font-medium text-gray-800">Need help with booking?</p>
//                     <p className="text-xs text-gray-500">Chat with our travel experts</p>
//                   </div>
//                   <button className="ml-auto px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
//                     Chat Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Similar Experiences Section */}
//       <div className="bg-white mt-12 py-12 border-t border-gray-200">
//         <div className="max-w-7xl mx-auto px-4">
//           <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//             <Sparkles className="w-5 h-5 text-blue-600" />
//             You might also like
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {[1, 2, 3, 4].map((i) => (
//               <div key={i} className="group cursor-pointer">
//                 <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
//                   <img 
//                     src="https://images.unsplash.com/photo-1545558014-8692072184b0?w=400&h=300&fit=crop" 
//                     alt="Similar experience"
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                 </div>
//                 <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
//                   Hong Kong Ocean Park
//                 </h4>
//                 <div className="flex items-center gap-2 mt-1">
//                   <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                   <span className="text-sm font-medium">4.7</span>
//                   <span className="text-sm text-gray-500">(12.4k reviews)</span>
//                 </div>
//                 <p className="text-lg font-bold text-gray-900 mt-2">₹4,599</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingDetailsPage;















import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Calendar, MapPin, Star, Users, Clock, Shield, CheckCircle,
  ChevronRight, CreditCard, Wallet, Smartphone,
  Gift, Award, Heart, Share2, Minus, Plus,
  Utensils, Ticket, Camera, ArrowLeft,
  MessageCircle, Headphones, Lock, CalendarDays,
  Clock3, Sparkles, ShoppingBag, CircleCheck,
  Hash, FileText, Sun, Sunset, Moon, ChevronLeft
} from 'lucide-react';

// ── GLOBAL CSS (same Hotels.jsx injection pattern) ────────────────────────────
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --red:#e8232a;--red-d:#c01c22;--blue:#008cff;--navy:#0a2463;
  --yellow:#ffc107;--green:#00897b;--purple:#7c3aed;
  --bg:#f5f7fa;--card:#ffffff;--border:#e8ecf0;
  --t1:#212b36;--t2:#637381;--t3:#919eab;
  --sh-card:0 2px 12px rgba(0,0,0,.08);--sh-hover:0 8px 32px rgba(0,0,0,.13);
  --r:12px;--rl:16px;
}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--t1)}

/* ── STICKY HEADER ── */
.bk-header{position:sticky;top:0;z-index:40;background:rgba(255,255,255,.97);backdrop-filter:blur(10px);border-bottom:1px solid var(--border);box-shadow:0 1px 8px rgba(0,0,0,.06)}
.bk-header-in{max-width:1280px;margin:0 auto;padding:14px 20px;display:flex;align-items:center;justify-content:space-between}
.bk-back{display:flex;align-items:center;gap:10px;cursor:pointer;border:none;background:none;padding:0}
.bk-back-btn{width:38px;height:38px;border-radius:50%;border:1.5px solid var(--border);background:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;color:var(--t1)}
.bk-back-btn:hover{background:var(--navy);color:#fff;border-color:var(--navy)}
.bk-header-title{font-family:'Poppins',sans-serif;font-size:18px;font-weight:800;color:var(--t1)}
.bk-header-sub{font-size:12px;color:var(--t2);margin-top:1px}
.bk-header-actions{display:flex;gap:8px}
.bk-icon-btn{width:38px;height:38px;border-radius:50%;border:1.5px solid var(--border);background:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;color:var(--t2)}
.bk-icon-btn:hover{border-color:var(--red);color:var(--red)}

/* ── PROGRESS BAR ── */
.bk-progress{background:linear-gradient(135deg,var(--navy),#1a3a8f,var(--red-d));padding:16px 0}
.bk-progress-in{max-width:1280px;margin:0 auto;padding:0 20px;display:flex;align-items:center;justify-content:center;gap:0}
.bk-step{display:flex;align-items:center;gap:8px}
.bk-step-circle{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Poppins',sans-serif;font-size:13px;font-weight:700;transition:all .3s;flex-shrink:0}
.bk-step-circle.done{background:var(--yellow);color:var(--navy)}
.bk-step-circle.active{background:#fff;color:var(--navy);box-shadow:0 0 0 3px rgba(255,255,255,.4)}
.bk-step-circle.pending{background:rgba(255,255,255,.2);color:rgba(255,255,255,.6);border:1.5px solid rgba(255,255,255,.3)}
.bk-step-lbl{font-size:12px;font-weight:600;color:#fff;white-space:nowrap}
.bk-step-lbl.pending{opacity:.55}
.bk-step-line{width:40px;height:2px;background:rgba(255,255,255,.25);margin:0 4px;flex-shrink:0}
.bk-step-line.done{background:var(--yellow)}

/* ── MAIN LAYOUT ── */
.bk-main{max-width:1280px;margin:0 auto;padding:28px 20px 60px;display:grid;grid-template-columns:1fr 360px;gap:24px;align-items:start}

/* ── CARDS ── */
.bk-card{background:#fff;border-radius:var(--rl);border:1px solid var(--border);box-shadow:var(--sh-card);overflow:hidden;margin-bottom:18px}
.bk-card-hdr{padding:18px 22px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}
.bk-card-ttl{font-family:'Poppins',sans-serif;font-size:15px;font-weight:700;color:var(--t1);display:flex;align-items:center;gap:8px}
.bk-card-body{padding:22px}

/* ── EXPERIENCE SUMMARY ── */
.exp-img{width:90px;height:90px;border-radius:12px;object-fit:cover;flex-shrink:0}
.exp-cat{display:inline-flex;align-items:center;gap:4px;padding:3px 9px;background:#e8f4ff;color:#0072cc;font-size:10px;font-weight:700;border-radius:5px;text-transform:uppercase;letter-spacing:.3px}
.exp-name{font-family:'Poppins',sans-serif;font-size:18px;font-weight:800;color:var(--t1);margin:6px 0 4px;line-height:1.3}
.exp-meta{display:flex;flex-wrap:wrap;gap:12px;margin-top:6px}
.exp-meta-item{display:flex;align-items:center;gap:5px;font-size:12px;color:var(--t2)}
.exp-rating{display:flex;align-items:center;gap:5px;background:#fffbeb;border:1px solid #fde68a;padding:4px 10px;border-radius:7px;font-size:13px;font-weight:700;color:var(--t1)}

/* ── TABS ── */
.bk-tabs{display:flex;border-bottom:1px solid var(--border)}
.bk-tab{flex:1;padding:14px 10px;border:none;background:none;cursor:pointer;font-size:13px;font-weight:600;color:var(--t2);display:flex;align-items:center;justify-content:center;gap:6px;transition:all .2s;position:relative}
.bk-tab:hover{color:var(--t1);background:#fafbfc}
.bk-tab.active{color:var(--navy)}
.bk-tab.active::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2.5px;background:linear-gradient(90deg,var(--navy),var(--red))}
.bk-tab-num{width:20px;height:20px;border-radius:50%;background:var(--border);color:var(--t2);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s}
.bk-tab.active .bk-tab-num{background:linear-gradient(135deg,var(--navy),var(--red));color:#fff}
.bk-tab.done .bk-tab-num{background:var(--green);color:#fff}

/* ── DATE GRID ── */
.date-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:8px}
.date-btn{padding:10px 6px;border-radius:10px;border:1.5px solid var(--border);text-align:center;cursor:pointer;transition:all .2s;background:#fff}
.date-btn:hover{border-color:var(--navy);background:#f0f3ff}
.date-btn.active{background:linear-gradient(135deg,var(--navy),#1a3a8f);border-color:var(--navy);color:#fff}
.date-btn.today:not(.active){border-color:#93b4ff;background:#f0f3ff}
.date-day{font-size:10px;font-weight:600;margin-bottom:2px}
.date-num{font-family:'Poppins',sans-serif;font-size:16px;font-weight:800;line-height:1}
.date-mon{font-size:10px;margin-top:2px}
.date-today-lbl{font-size:9px;font-weight:700;color:var(--blue);margin-top:2px}

/* ── TIME SLOTS ── */
.time-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}
.time-btn{padding:10px 6px;border-radius:10px;border:1.5px solid var(--border);text-align:center;cursor:pointer;transition:all .2s;background:#fff;display:flex;flex-direction:column;align-items:center;gap:4px;font-size:12px;font-weight:600;color:var(--t2)}
.time-btn:hover{border-color:var(--red);color:var(--red)}
.time-btn.active{background:linear-gradient(135deg,var(--red),var(--red-d));border-color:var(--red);color:#fff}

/* ── TRAVELER COUNTER ── */
.traveler-box{display:flex;align-items:center;gap:0;border:1.5px solid var(--border);border-radius:12px;overflow:hidden;width:fit-content}
.trav-btn{width:44px;height:44px;border:none;background:#f5f7fa;cursor:pointer;font-size:20px;font-weight:600;color:var(--t1);transition:all .2s;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.trav-btn:hover{background:var(--navy);color:#fff}
.trav-val{font-family:'Poppins',sans-serif;font-size:20px;font-weight:800;padding:0 24px;border-left:1.5px solid var(--border);border-right:1.5px solid var(--border);min-width:80px;text-align:center;line-height:44px;color:var(--t1)}

/* ── ADD-ON CARDS ── */
.addon-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.addon-card{padding:14px;border-radius:12px;border:2px solid var(--border);cursor:pointer;transition:all .22s;background:#fff;display:flex;align-items:flex-start;gap:12px}
.addon-card:hover{border-color:var(--navy);box-shadow:var(--sh-card)}
.addon-card.on{border-color:var(--navy);background:#f0f3ff}
.addon-ico{width:38px;height:38px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s}
.addon-ico.off{background:#f5f7fa;color:var(--t2)}
.addon-ico.on{background:linear-gradient(135deg,var(--navy),#1a3a8f);color:#fff}
.addon-name{font-size:13px;font-weight:700;color:var(--t1);margin-bottom:3px}
.addon-desc{font-size:11px;color:var(--t2);line-height:1.4}
.addon-price{font-family:'Poppins',sans-serif;font-size:14px;font-weight:800;color:var(--t1);white-space:nowrap}

/* ── REVIEW TABLE ── */
.rev-row{display:flex;justify-content:space-between;align-items:center;padding:11px 0;border-bottom:1px solid var(--border)}
.rev-row:last-child{border-bottom:none}
.rev-lbl{display:flex;align-items:center;gap:7px;font-size:13px;color:var(--t2);font-weight:500}
.rev-val{font-size:13px;font-weight:700;color:var(--t1);text-align:right;max-width:60%}

/* ── PROMO BOX ── */
.promo-row{display:flex;gap:8px}
.promo-input{flex:1;padding:10px 14px;border:1.5px solid var(--border);border-radius:10px;font-size:14px;font-family:'Inter',sans-serif;outline:none;transition:border-color .2s;color:var(--t1)}
.promo-input:focus{border-color:var(--navy)}
.promo-btn{padding:10px 18px;background:var(--navy);color:#fff;border:none;border-radius:10px;font-weight:700;cursor:pointer;transition:all .2s;font-family:'Poppins',sans-serif;font-size:13px;white-space:nowrap}
.promo-btn:hover{background:#0a1d4f}
.promo-btn:disabled{opacity:.45;cursor:not-allowed}

/* ── PAYMENT METHODS ── */
.pay-opt{display:flex;align-items:center;gap:12px;padding:13px 15px;border:2px solid var(--border);border-radius:11px;cursor:pointer;transition:all .2s;margin-bottom:9px;background:#fff}
.pay-opt:hover{border-color:var(--navy)}
.pay-opt.on{border-color:var(--navy);background:#f0f3ff}
.pay-opt input[type=radio]{accent-color:var(--navy);width:16px;height:16px;cursor:pointer;flex-shrink:0}
.pay-lbl{font-size:13px;font-weight:600;color:var(--t1)}
.pay-sub{font-size:11px;color:var(--t2);margin-top:1px}
.pay-ico{width:36px;height:36px;border-radius:8px;background:#f5f7fa;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--t2)}

/* ── PRICE SUMMARY ── */
.price-row{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--t2);padding:7px 0}
.price-row.discount{color:var(--green)}
.price-row.total{padding-top:14px;border-top:2px solid var(--border);margin-top:6px}
.price-total-lbl{font-family:'Poppins',sans-serif;font-size:16px;font-weight:800;color:var(--t1)}
.price-total-val{font-family:'Poppins',sans-serif;font-size:26px;font-weight:900;color:var(--navy)}

/* ── BUTTONS ── */
.btn-primary{padding:14px 24px;background:linear-gradient(135deg,var(--navy),#1a3a8f);color:#fff;border:none;border-radius:11px;font-family:'Poppins',sans-serif;font-size:15px;font-weight:700;cursor:pointer;transition:all .25s;display:flex;align-items:center;justify-content:center;gap:8px;width:100%}
.btn-primary:hover{box-shadow:0 6px 20px rgba(10,36,99,.35);transform:translateY(-1px)}
.btn-primary:disabled{opacity:.45;cursor:not-allowed;transform:none}
.btn-secondary{padding:11px 20px;border:1.5px solid var(--border);background:#fff;color:var(--t1);border-radius:11px;font-weight:700;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:6px;font-size:13px;font-family:'Poppins',sans-serif}
.btn-secondary:hover{border-color:var(--navy);color:var(--navy)}
.btn-next{padding:11px 22px;background:linear-gradient(135deg,var(--red),var(--red-d));color:#fff;border:none;border-radius:11px;font-family:'Poppins',sans-serif;font-size:13px;font-weight:700;cursor:pointer;transition:all .25s;display:flex;align-items:center;gap:6px}
.btn-next:hover{box-shadow:0 4px 16px rgba(232,35,42,.35);transform:translateY(-1px)}

/* ── TERMS CHECKBOX ── */
.terms-row{display:flex;align-items:flex-start;gap:10px;cursor:pointer;margin:16px 0}
.terms-chk{width:18px;height:18px;border:2px solid var(--border);border-radius:4px;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;transition:all .2s;cursor:pointer}
.terms-chk.on{background:var(--navy);border-color:var(--navy)}
.terms-txt{font-size:12px;color:var(--t2);line-height:1.6}
.terms-link{color:var(--blue);font-weight:600;background:none;border:none;cursor:pointer;padding:0}

/* ── TRUST MINI BADGES ── */
.trust-mini{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:16px;padding-top:16px;border-top:1px solid var(--border)}
.tm-item{text-align:center}
.tm-ico{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 6px;font-size:16px}
.tm-lbl{font-size:10px;color:var(--t2);font-weight:600;line-height:1.3}

/* ── HELP BOX ── */
.help-box{background:linear-gradient(135deg,#f0f3ff,#e8f0ff);border:1px solid #c5d3f5;border-radius:12px;padding:14px;display:flex;align-items:center;gap:12px;margin-top:14px}
.help-ico{width:40px;height:40px;background:#fff;border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--navy);box-shadow:var(--sh-card);flex-shrink:0}
.help-ttl{font-size:13px;font-weight:700;color:var(--navy)}
.help-sub{font-size:11px;color:var(--t2)}
.help-btn{margin-left:auto;padding:8px 14px;background:var(--navy);color:#fff;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap;transition:all .2s;flex-shrink:0}
.help-btn:hover{background:#0a1d4f}

/* ── CANCELLATION ── */
.cancel-box{background:linear-gradient(135deg,#e8fff4,#f0fffb);border:1px solid #a7f3d0;border-radius:12px;padding:16px;display:flex;align-items:flex-start;gap:12px}
.cancel-ico{width:36px;height:36px;background:#fff;border-radius:9px;display:flex;align-items:center;justify-content:center;color:var(--green);box-shadow:var(--sh-card);flex-shrink:0}

/* ── SUCCESS ALERT ── */
.success-alert{background:linear-gradient(135deg,#e8fff4,#f0fffb);border:1px solid #a7f3d0;border-radius:12px;padding:14px;display:flex;align-items:flex-start;gap:10px;margin-bottom:18px}

/* ── SIMILAR EXPERIENCES ── */
.sim-sec{background:#fff;border-top:1px solid var(--border);padding:40px 0;margin-top:8px}
.sim-in{max-width:1280px;margin:0 auto;padding:0 20px}
.sim-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:20px}
.sim-card{cursor:pointer;transition:all .25s;border-radius:12px;overflow:hidden;border:1px solid var(--border)}
.sim-card:hover{box-shadow:var(--sh-hover);transform:translateY(-3px)}
.sim-img{height:160px;overflow:hidden;position:relative}
.sim-img img{width:100%;height:100%;object-fit:cover;transition:transform .5s}
.sim-card:hover .sim-img img{transform:scale(1.07)}
.sim-body{padding:12px 14px}
.sim-name{font-size:14px;font-weight:700;color:var(--t1);margin-bottom:5px;line-height:1.3;transition:color .2s}
.sim-card:hover .sim-name{color:var(--red)}
.sim-price{font-family:'Poppins',sans-serif;font-size:17px;font-weight:800;color:var(--t1);margin-top:7px}

/* ── RESPONSIVE ── */
@media(max-width:1024px){
  .bk-main{grid-template-columns:1fr;padding:16px}
  .sim-grid{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:768px){
  .date-grid{grid-template-columns:repeat(4,1fr)}
  .time-grid{grid-template-columns:repeat(3,1fr)}
  .addon-grid{grid-template-columns:1fr}
  .bk-step-lbl{display:none}
  .sim-grid{grid-template-columns:repeat(2,1fr)}
  .bk-header-in{padding:12px 16px}
  .bk-main{padding:14px 14px 48px}
}
@media(max-width:480px){
  .date-grid{grid-template-columns:repeat(4,1fr)}
  .time-grid{grid-template-columns:repeat(2,1fr)}
  .sim-grid{grid-template-columns:1fr 1fr}
  .price-total-val{font-size:22px}
}
`;

// ── DATA ──────────────────────────────────────────────────────────────────────
const ADD_ONS = [
  { id:1, name:'Hotel Pickup & Drop', price:1299, desc:'Round-trip transfer from your hotel', Ico: MapPin },
  { id:2, name:'Professional Photography', price:2499, desc:'30 min session + 10 digital copies', Ico: Camera },
  { id:3, name:'Meal Upgrade', price:899, desc:'Premium dining experience included', Ico: Utensils },
  { id:4, name:'Fast Pass Access', price:1599, desc:'Skip all queues, priority entry', Ico: Ticket },
  { id:5, name:'Audio Guide', price:399, desc:'Multi-language audio commentary', Ico: Headphones },
  { id:6, name:'Souvenir Package', price:699, desc:'Exclusive memorabilia box', Ico: Gift },
];

const TIME_SLOTS = [
  { time:'09:00', label:'09:00 AM', Ico: Sun },
  { time:'10:00', label:'10:00 AM', Ico: Sun },
  { time:'11:00', label:'11:00 AM', Ico: Sun },
  { time:'12:00', label:'12:00 PM', Ico: Sun },
  { time:'14:00', label:'02:00 PM', Ico: Sun },
  { time:'15:00', label:'03:00 PM', Ico: Sun },
  { time:'16:00', label:'04:00 PM', Ico: Sun },
  { time:'18:00', label:'06:00 PM', Ico: Sunset },
  { time:'19:00', label:'07:00 PM', Ico: Moon },
  { time:'20:00', label:'08:00 PM', Ico: Moon },
];

const SIMILAR = [
  { title:'Hong Kong Ocean Park', rating:4.7, reviews:'12.4k', price:4599, img:'https://images.unsplash.com/photo-1545558014-8692072184b0?w=400&q=80' },
  { title:'Disneyland Adventure', rating:4.9, reviews:'28.1k', price:6299, img:'https://images.unsplash.com/photo-1605472616967-7317f4f0abb7?w=400&q=80' },
  { title:'Macau Tower Bungee', rating:4.6, reviews:'8.9k',  price:8999, img:'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=400&q=80' },
  { title:'Victoria Peak Tram',  rating:4.8, reviews:'19.3k', price:3499, img:'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&q=80' },
];

const fmt = (n) => `₹${Number(n).toLocaleString('en-IN')}`;

const getDayName   = (d) => new Date(d).toLocaleDateString('en-US',{weekday:'short'});
const getMonthName = (d) => new Date(d).toLocaleDateString('en-US',{month:'short'});
const getDayNum    = (d) => new Date(d).getDate();

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
const BookingDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { experience, bookingDetails: initDetails } = location.state || {};

  // Inject CSS once
  useEffect(() => {
    const id = 'bmt-booking-styles-v1';
    if (!document.getElementById(id)) {
      const el = document.createElement('style'); el.id = id; el.textContent = GLOBAL_CSS;
      document.head.appendChild(el);
    }
  }, []);

  const [activeTab,      setActiveTab]      = useState('details');
  const [bookingDate,    setBookingDate]    = useState(initDetails?.date || new Date().toISOString().split('T')[0]);
  const [travelers,      setTravelers]      = useState(initDetails?.travelers || 2);
  const [selectedTime,   setSelectedTime]   = useState('10:00');
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [paymentMethod,  setPaymentMethod]  = useState('card');
  const [promoCode,      setPromoCode]      = useState('');
  const [promoApplied,   setPromoApplied]   = useState(false);
  const [agreeTerms,     setAgreeTerms]     = useState(false);
  const [wishlisted,     setWishlisted]     = useState(false);

  // If no experience passed, show a fallback demo
  const exp = experience || {
    id: 'demo', title: 'Sentosa Island Full Day Experience', location: 'Sentosa, Singapore',
    category: 'adventure', rating: 4.8, reviews: '15.2k', price: 4299, originalPrice: 5299,
    duration: '8 Hours', meetingPoint: 'Main Entrance Gate A',
    image: 'https://images.unsplash.com/photo-1545558014-8692072184b0?w=400&q=80',
  };

  // ── Price calc ────────────────────────────────────────────────────────────
  const basePrice   = exp.price * travelers;
  const addOnsTotal = selectedAddOns.reduce((s, id) => s + (ADD_ONS.find(a => a.id === id)?.price || 0), 0);
  const discount    = promoApplied ? Math.round(basePrice * 0.1) : 0;
  const tax         = Math.round((basePrice + addOnsTotal - discount) * 0.12);
  const totalAmount = basePrice + addOnsTotal - discount + tax;

  const toggleAddOn = (id) => setSelectedAddOns(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  const applyPromo  = () => { if (promoCode.toUpperCase() === 'HOLIDAY10') setPromoApplied(true); };

  const handlePay = () => {
    const bookingData = {
      experience: {
        id: exp.id, title: exp.title, location: exp.location,
        category: exp.category, rating: exp.rating, reviews: exp.reviews,
        image: exp.image, price: exp.price, originalPrice: exp.originalPrice,
        duration: exp.duration, meetingPoint: exp.meetingPoint || 'Main entrance',
      },
      bookingDetails: {
        date: bookingDate, time: selectedTime, travelers,
        addOns: selectedAddOns.map(id => {
          const a = ADD_ONS.find(x => x.id === id);
          return { id: a.id, name: a.name, price: a.price, description: a.desc };
        }),
        basePrice, addOnsTotal, discount, tax, totalAmount,
        paymentMethod, promoApplied, promoCode: promoApplied ? promoCode : null,
      },
    };
    navigate('/booking-confirmation', { state: bookingData });
  };

  // ── 7-day date strip ──────────────────────────────────────────────────────
  const dates7 = [...Array(7)].map((_, i) => {
    const d = new Date(); d.setDate(d.getDate() + i);
    return d.toISOString().split('T')[0];
  });

  // ── Tab step labels ───────────────────────────────────────────────────────
  const TABS = [
    { id:'details', lbl:'Date & Time',   num:1, Ico: CalendarDays },
    { id:'addons',  lbl:'Add-ons',       num:2, Ico: ShoppingBag },
    { id:'review',  lbl:'Review & Pay',  num:3, Ico: FileText },
  ];
  const tabIdx   = TABS.findIndex(t => t.id === activeTab);
  const goNext   = () => setActiveTab(TABS[Math.min(tabIdx + 1, 2)].id);
  const goPrev   = () => setActiveTab(TABS[Math.max(tabIdx - 1, 0)].id);

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight:'100vh', background:'var(--bg)' }}>

      {/* ── STICKY HEADER ── */}
      <div className="bk-header">
        <div className="bk-header-in">
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <button className="bk-back-btn" onClick={() => navigate(-1)}>
              <ArrowLeft size={18}/>
            </button>
            <div>
              <div className="bk-header-title">Complete Your Booking</div>
              <div className="bk-header-sub">Secure your spot in just a few steps</div>
            </div>
          </div>
          <div className="bk-header-actions">
            <button className="bk-icon-btn" onClick={() => setWishlisted(w=>!w)} style={{ color: wishlisted ? '#e8232a' : undefined, borderColor: wishlisted ? '#e8232a' : undefined }}>
              <Heart size={17} fill={wishlisted ? 'currentColor' : 'none'}/>
            </button>
            <button className="bk-icon-btn"><Share2 size={17}/></button>
          </div>
        </div>
      </div>

      {/* ── PROGRESS BAR ── */}
      <div className="bk-progress">
        <div className="bk-progress-in">
          {TABS.map((tab, i) => {
            const state = i < tabIdx ? 'done' : i === tabIdx ? 'active' : 'pending';
            return (
              <React.Fragment key={tab.id}>
                <div className="bk-step" style={{ cursor: i <= tabIdx ? 'pointer' : 'default' }} onClick={() => i <= tabIdx && setActiveTab(tab.id)}>
                  <div className={`bk-step-circle ${state}`}>
                    {state === 'done' ? '✓' : tab.num}
                  </div>
                  <span className={`bk-step-lbl ${state === 'pending' ? 'pending' : ''}`}>{tab.lbl}</span>
                </div>
                {i < TABS.length - 1 && <div className={`bk-step-line ${i < tabIdx ? 'done' : ''}`}/>}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* ── MAIN ── */}
      <div className="bk-main">

        {/* ── LEFT COLUMN ── */}
        <div>
          {/* Experience Summary */}
          <div className="bk-card">
            <div className="bk-card-body" style={{ display:'flex', gap:16, alignItems:'flex-start' }}>
              <img className="exp-img" src={exp.image} alt={exp.title} onError={e=>{e.target.src='https://images.unsplash.com/photo-1545558014-8692072184b0?w=400&q=80';}}/>
              <div style={{ flex:1 }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:8 }}>
                  <div>
                    <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6 }}>
                      <span className="exp-cat"><Ticket size={10}/>{exp.category}</span>
                      <div className="exp-rating"><Star size={13} fill="#f59e0b" stroke="#f59e0b"/>{exp.rating} <span style={{fontSize:11,color:'var(--t2)',fontWeight:400}}>({exp.reviews})</span></div>
                    </div>
                    <div className="exp-name">{exp.title}</div>
                  </div>
                  <div style={{ textAlign:'right' }}>
                    {exp.originalPrice && <div style={{ fontSize:12, color:'var(--t3)', textDecoration:'line-through' }}>{fmt(exp.originalPrice)}</div>}
                    <div style={{ fontFamily:'Poppins,sans-serif', fontSize:22, fontWeight:900, color:'var(--navy)' }}>{fmt(exp.price)}</div>
                    <div style={{ fontSize:11, color:'var(--t2)' }}>per person</div>
                  </div>
                </div>
                <div className="exp-meta">
                  <span className="exp-meta-item"><MapPin size={13}/>{exp.location}</span>
                  <span className="exp-meta-item"><Clock size={13}/>{exp.duration || 'Full Day'}</span>
                  {exp.meetingPoint && <span className="exp-meta-item"><MapPin size={13} color="var(--green)"/>Meet at: {exp.meetingPoint}</span>}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bk-card">
            <div className="bk-tabs">
              {TABS.map((tab, i) => {
                const state = i < tabIdx ? 'done' : i === tabIdx ? 'active' : '';
                return (
                  <button key={tab.id} className={`bk-tab ${state}`}
                    onClick={() => i <= tabIdx && setActiveTab(tab.id)}>
                    <div className={`bk-tab-num ${state}`}>{state === 'done' ? '✓' : tab.num}</div>
                    <tab.Ico size={14}/>{tab.lbl}
                  </button>
                );
              })}
            </div>

            <div style={{ padding:24 }}>

              {/* ── TAB 1: DATE & TIME ── */}
              {activeTab === 'details' && (
                <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
                  {/* Date */}
                  <div>
                    <div style={{ fontSize:12, fontWeight:700, color:'var(--t2)', textTransform:'uppercase', letterSpacing:.6, marginBottom:12, display:'flex', alignItems:'center', gap:6 }}>
                      <Calendar size={14}/> Select Travel Date
                    </div>
                    <div className="date-grid">
                      {dates7.map((dateStr, i) => (
                        <button key={dateStr} className={`date-btn ${bookingDate===dateStr?'active':''} ${i===0&&bookingDate!==dateStr?'today':''}`}
                          onClick={() => setBookingDate(dateStr)}>
                          <div className="date-day" style={{ color: bookingDate===dateStr ? 'rgba(255,255,255,.75)' : 'var(--t2)' }}>{getDayName(dateStr)}</div>
                          <div className="date-num">{getDayNum(dateStr)}</div>
                          <div className="date-mon" style={{ color: bookingDate===dateStr ? 'rgba(255,255,255,.75)' : 'var(--t3)' }}>{getMonthName(dateStr)}</div>
                          {i===0 && <div className="date-today-lbl" style={{ color: bookingDate===dateStr ? 'var(--yellow)' : undefined }}>Today</div>}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <div style={{ fontSize:12, fontWeight:700, color:'var(--t2)', textTransform:'uppercase', letterSpacing:.6, marginBottom:12, display:'flex', alignItems:'center', gap:6 }}>
                      <Clock3 size={14}/> Select Time Slot
                    </div>
                    <div className="time-grid">
                      {TIME_SLOTS.map(s => (
                        <button key={s.time} className={`time-btn ${selectedTime===s.time?'active':''}`}
                          onClick={() => setSelectedTime(s.time)}>
                          <s.Ico size={14}/>
                          <span>{s.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Travelers */}
                  <div>
                    <div style={{ fontSize:12, fontWeight:700, color:'var(--t2)', textTransform:'uppercase', letterSpacing:.6, marginBottom:12, display:'flex', alignItems:'center', gap:6 }}>
                      <Users size={14}/> Number of Travelers
                    </div>
                    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', background:'#f5f7fa', borderRadius:12, padding:'14px 18px' }}>
                      <div>
                        <div style={{ fontFamily:'Poppins,sans-serif', fontSize:14, fontWeight:700, color:'var(--t1)' }}>Adults</div>
                        <div style={{ fontSize:11, color:'var(--t2)', marginTop:2 }}>Ages 13 and above</div>
                      </div>
                      <div className="traveler-box">
                        <button className="trav-btn" onClick={() => setTravelers(t => Math.max(1, t-1))}>−</button>
                        <div className="trav-val">{travelers}</div>
                        <button className="trav-btn" onClick={() => setTravelers(t => Math.min(10, t+1))}>+</button>
                      </div>
                    </div>
                    <div style={{ fontSize:11, color:'var(--green)', marginTop:8, display:'flex', alignItems:'center', gap:5 }}>
                      <Award size={12}/> Children under 12 get 50% off — add at checkout
                    </div>
                  </div>

                  <div style={{ display:'flex', justifyContent:'flex-end' }}>
                    <button className="btn-next" onClick={goNext}>
                      Continue to Add-ons <ChevronRight size={16}/>
                    </button>
                  </div>
                </div>
              )}

              {/* ── TAB 2: ADD-ONS ── */}
              {activeTab === 'addons' && (
                <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                  <div style={{ background:'#f0f3ff', border:'1px solid #c5d3f5', borderRadius:12, padding:'12px 16px', fontSize:13, color:'var(--navy)', fontWeight:500 }}>
                    ✨ Enhance your experience with these optional add-ons
                  </div>
                  <div className="addon-grid">
                    {ADD_ONS.map(a => {
                      const isSel = selectedAddOns.includes(a.id);
                      return (
                        <div key={a.id} className={`addon-card ${isSel?'on':''}`} onClick={() => toggleAddOn(a.id)}>
                          <div className={`addon-ico ${isSel?'on':'off'}`}><a.Ico size={18}/></div>
                          <div style={{ flex:1 }}>
                            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
                              <div>
                                <div className="addon-name">{a.name}</div>
                                <div className="addon-desc">{a.desc}</div>
                              </div>
                              <div style={{ textAlign:'right', marginLeft:8 }}>
                                <div className="addon-price">{fmt(a.price)}</div>
                                {isSel && <CheckCircle size={15} color="var(--navy)" style={{ marginTop:4, marginLeft:'auto' }}/>}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {selectedAddOns.length > 0 && (
                    <div style={{ background:'#e8fff4', border:'1px solid #a7f3d0', borderRadius:10, padding:'10px 14px', fontSize:13, color:' var(--green)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                      <span>✓ {selectedAddOns.length} add-on{selectedAddOns.length!==1?'s':''} selected</span>
                      <span style={{ fontFamily:'Poppins,sans-serif', fontWeight:700 }}>+{fmt(addOnsTotal)}</span>
                    </div>
                  )}
                  <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:10 }}>
                    <button className="btn-secondary" onClick={goPrev}><ChevronLeft size={15}/>Back</button>
                    <button className="btn-next" onClick={goNext}>Review Booking <ChevronRight size={16}/></button>
                  </div>
                </div>
              )}

              {/* ── TAB 3: REVIEW ── */}
              {activeTab === 'review' && (
                <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
                  <div className="success-alert">
                    <CheckCircle size={18} color="var(--green)" style={{ flexShrink:0, marginTop:1 }}/>
                    <div>
                      <div style={{ fontWeight:700, color:'#065f46', fontSize:14 }}>Almost there!</div>
                      <div style={{ fontSize:12, color:'#047857', marginTop:2 }}>Review your booking before proceeding to payment</div>
                    </div>
                  </div>

                  {/* Summary table */}
                  <div style={{ background:'#f9fafc', borderRadius:12, padding:'4px 16px' }}>
                    <div className="rev-row">
                      <span className="rev-lbl"><Calendar size={14}/>Date</span>
                      <span className="rev-val">{new Date(bookingDate).toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}</span>
                    </div>
                    <div className="rev-row">
                      <span className="rev-lbl"><Clock size={14}/>Time</span>
                      <span className="rev-val">{TIME_SLOTS.find(s=>s.time===selectedTime)?.label || selectedTime}</span>
                    </div>
                    <div className="rev-row">
                      <span className="rev-lbl"><Users size={14}/>Travelers</span>
                      <span className="rev-val">{travelers} Adult{travelers!==1?'s':''}</span>
                    </div>
                    {selectedAddOns.length > 0 && (
                      <div className="rev-row" style={{ alignItems:'flex-start' }}>
                        <span className="rev-lbl" style={{ paddingTop:2 }}><Gift size={14}/>Add-ons</span>
                        <div style={{ textAlign:'right', maxWidth:'60%' }}>
                          {selectedAddOns.map(id => {
                            const a = ADD_ONS.find(x => x.id === id);
                            return (
                              <div key={id} style={{ display:'flex', justifyContent:'space-between', gap:12, marginBottom:4 }}>
                                <span style={{ fontSize:12, color:'var(--t2)', textAlign:'left' }}>✓ {a.name}</span>
                                <span style={{ fontSize:12, fontWeight:700 }}>{fmt(a.price)}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    <div className="rev-row">
                      <span className="rev-lbl"><MapPin size={14}/>Meeting Point</span>
                      <span className="rev-val">{exp.meetingPoint || 'Main Entrance'}</span>
                    </div>
                  </div>

                  <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:10 }}>
                    <button className="btn-secondary" onClick={goPrev}><ChevronLeft size={15}/>Back</button>
                    <button className="btn-next" disabled={!agreeTerms}
                      onClick={handlePay}
                      style={{ opacity: agreeTerms ? 1 : .45, cursor: agreeTerms ? 'pointer' : 'not-allowed' }}>
                      <Lock size={15}/>Proceed to Payment
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="bk-card" style={{ marginBottom:0 }}>
            <div className="bk-card-body">
              <div className="cancel-box">
                <div className="cancel-ico"><Shield size={18}/></div>
                <div>
                  <div style={{ fontFamily:'Poppins,sans-serif', fontSize:14, fontWeight:700, color:'#065f46', marginBottom:4, display:'flex', alignItems:'center', gap:6 }}>
                    <CheckCircle size={15} color="var(--green)"/> Free Cancellation
                  </div>
                  <div style={{ fontSize:13, color:'#047857', lineHeight:1.6 }}>
                    Cancel up to 24 hours before the experience starts for a full refund. No questions asked.
                  </div>
                  <button style={{ background:'none', border:'none', color:'var(--blue)', fontSize:12, fontWeight:700, cursor:'pointer', marginTop:6, display:'flex', alignItems:'center', gap:4 }}>
                    View full policy <ChevronRight size={12}/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div style={{ position:'sticky', top:80, display:'flex', flexDirection:'column', gap:18 }}>

          {/* Price Details */}
          <div className="bk-card" style={{ marginBottom:0 }}>
            <div className="bk-card-hdr">
              <div className="bk-card-ttl"><Hash size={16}/>Price Details</div>
              {exp.originalPrice && (
                <span style={{ background:'#e8fff4', color:'var(--green)', fontSize:11, fontWeight:700, padding:'3px 8px', borderRadius:5, border:'1px solid #a7f3d0' }}>
                  Save {fmt(exp.originalPrice - exp.price)}/person
                </span>
              )}
            </div>
            <div style={{ padding:'16px 22px' }}>
              <div className="price-row">
                <span>Base Price ({travelers} {travelers===1?'Adult':'Adults'})</span>
                <span style={{ fontWeight:600, color:'var(--t1)' }}>{fmt(basePrice)}</span>
              </div>
              {addOnsTotal > 0 && (
                <div className="price-row">
                  <span>Add-ons ({selectedAddOns.length})</span>
                  <span style={{ fontWeight:600, color:'var(--t1)' }}>{fmt(addOnsTotal)}</span>
                </div>
              )}
              {promoApplied && (
                <div className="price-row discount">
                  <span>Promo (HOLIDAY10)</span>
                  <span style={{ fontWeight:700 }}>−{fmt(discount)}</span>
                </div>
              )}
              <div className="price-row">
                <span>Taxes & Fees (12%)</span>
                <span style={{ fontWeight:600, color:'var(--t1)' }}>{fmt(tax)}</span>
              </div>
              <div className="price-row total">
                <span className="price-total-lbl">Total Amount</span>
                <span className="price-total-val">{fmt(totalAmount)}</span>
              </div>
              <div style={{ fontSize:10, color:'var(--t3)', marginTop:4, textAlign:'right' }}>Inclusive of all taxes & fees</div>
            </div>
          </div>

          {/* Promo Code */}
          <div className="bk-card" style={{ marginBottom:0 }}>
            <div className="bk-card-hdr">
              <div className="bk-card-ttl"><Gift size={16}/>Promo Code</div>
            </div>
            <div style={{ padding:'14px 22px' }}>
              <div className="promo-row">
                <input className="promo-input" type="text" placeholder="Enter promo code" value={promoCode}
                  onChange={e => setPromoCode(e.target.value)} disabled={promoApplied}/>
                <button className="promo-btn" disabled={!promoCode || promoApplied} onClick={applyPromo}>Apply</button>
              </div>
              {promoApplied ? (
                <div style={{ fontSize:12, color:'var(--green)', marginTop:8, display:'flex', alignItems:'center', gap:5 }}>
                  <CheckCircle size={13}/> Promo applied! You saved {fmt(discount)}
                </div>
              ) : (
                <div style={{ fontSize:11, color:'var(--t3)', marginTop:7, display:'flex', alignItems:'center', gap:4 }}>
                  <Sparkles size={11}/> Try <strong style={{ color:'var(--navy)', fontWeight:700 }}>HOLIDAY10</strong> for 10% off
                </div>
              )}
            </div>
          </div>

          {/* Payment Method */}
          <div className="bk-card" style={{ marginBottom:0 }}>
            <div className="bk-card-hdr">
              <div className="bk-card-ttl"><CreditCard size={16}/>Payment Method</div>
            </div>
            <div style={{ padding:'14px 22px' }}>
              {[
                { val:'card',   lbl:'Credit / Debit Card', sub:'Visa, Mastercard, Rupay',          Ico: CreditCard },
                { val:'upi',    lbl:'UPI / Google Pay',    sub:'PhonePe, Paytm, BHIM UPI',          Ico: Smartphone },
                { val:'wallet', lbl:'Digital Wallet',      sub:'Paytm, Amazon Pay, Freecharge',     Ico: Wallet },
              ].map(p => (
                <label key={p.val} className={`pay-opt ${paymentMethod===p.val?'on':''}`}
                  onClick={() => setPaymentMethod(p.val)}>
                  <input type="radio" name="pay" value={p.val} readOnly checked={paymentMethod===p.val}/>
                  <div className="pay-ico"><p.Ico size={16}/></div>
                  <div style={{ flex:1 }}>
                    <div className="pay-lbl">{p.lbl}</div>
                    <div className="pay-sub">{p.sub}</div>
                  </div>
                  {paymentMethod === p.val && <CheckCircle size={16} color="var(--navy)"/>}
                </label>
              ))}
            </div>
          </div>

          {/* Terms + CTA */}
          <div className="bk-card" style={{ marginBottom:0 }}>
            <div style={{ padding:'16px 22px' }}>
              <div className="terms-row" onClick={() => setAgreeTerms(v => !v)}>
                <div className={`terms-chk ${agreeTerms?'on':''}`}>
                  {agreeTerms && <span style={{ color:'#fff', fontSize:11, lineHeight:1 }}>✓</span>}
                </div>
                <div className="terms-txt">
                  I agree to the <button className="terms-link">Terms & Conditions</button> and&nbsp;
                  <button className="terms-link">Cancellation Policy</button> of this booking.
                </div>
              </div>

              <button className="btn-primary" disabled={!agreeTerms} onClick={handlePay}>
                <Lock size={17}/>
                Pay {fmt(totalAmount)} Securely
              </button>

              {/* Trust mini badges */}
              <div className="trust-mini">
                <div className="tm-item">
                  <div className="tm-ico" style={{ background:'#e8fff4', color:'var(--green)' }}>🔒</div>
                  <div className="tm-lbl">Secure Payment</div>
                </div>
                <div className="tm-item">
                  <div className="tm-ico" style={{ background:'#e8f4ff', color:' var(--blue)' }}>⚡</div>
                  <div className="tm-lbl">Instant Confirmation</div>
                </div>
                <div className="tm-item">
                  <div className="tm-ico" style={{ background:'#f3e8ff', color:'var(--purple)' }}>📞</div>
                  <div className="tm-lbl">24/7 Support</div>
                </div>
              </div>

              {/* Help box */}
              <div className="help-box">
                <div className="help-ico"><MessageCircle size={18}/></div>
                <div>
                  <div className="help-ttl">Need help with booking?</div>
                  <div className="help-sub">Chat with our travel experts</div>
                </div>
                <button className="help-btn">Chat Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SIMILAR EXPERIENCES ── */}
      <div className="sim-sec">
        <div className="sim-in">
          <div style={{ fontFamily:'Poppins,sans-serif', fontSize:20, fontWeight:800, color:'var(--t1)', display:'flex', alignItems:'center', gap:8, marginBottom:4 }}>
            <Sparkles size={18} color="var(--red)"/> You Might Also Like
          </div>
          <div style={{ fontSize:13, color:'var(--t2)', marginBottom:20 }}>Similar experiences loved by travellers</div>
          <div className="sim-grid">
            {SIMILAR.map((s, i) => (
              <div key={i} className="sim-card">
                <div className="sim-img">
                  <img src={s.img} alt={s.title} onError={e=>{e.target.src='https://images.unsplash.com/photo-1545558014-8692072184b0?w=400&q=80';}}/>
                </div>
                <div className="sim-body">
                  <div className="sim-name">{s.title}</div>
                  <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                    <Star size={13} fill="#f59e0b" stroke="#f59e0b"/>
                    <span style={{ fontSize:12, fontWeight:700 }}>{s.rating}</span>
                    <span style={{ fontSize:11, color:'var(--t2)' }}>({s.reviews} reviews)</span>
                  </div>
                  <div className="sim-price">{fmt(s.price)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsPage;







