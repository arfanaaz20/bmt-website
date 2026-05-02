// import React, { useState, useRef } from 'react';
// import { 
//   Shield, 
//   Globe, 
//   Plane, 
//   Luggage, 
//   Passport, 
//   Clock, 
//   ChevronRight, 
//   Search, 
//   HeartPulse,
//   Sparkles,
//   CheckCircle2,
//   AlertCircle,
//   Briefcase,
//   Users,
//   Phone,
//   FileText,
//   Star,
//   ChevronDown,
//   ChevronUp,
//   Calendar,
//   Plus,
//   Minus,
//   User,
//   X
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const TravelInsurance = () => {
//   const navigate = useNavigate();
//   const plansSectionRef = useRef(null);
  
//   const [travelDetails, setTravelDetails] = useState({
//     destination: '',
//     startDate: '2026-02-13',
//     endDate: '2026-02-28',
//     travellers: [
//       { id: 1, age: 24 }
//     ]
//   });
  
//   const [openFaq, setOpenFaq] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredDestinations, setFilteredDestinations] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [showTravellerModal, setShowTravellerModal] = useState(false);
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const popularDestinations = [
//     'Schengen', 'UAE', 'Thailand', 'USA', 'Singapore', 'Germany', 'UK', 
//     'Canada', 'Australia', 'France', 'Italy', 'Switzerland', 'Japan', 
//     'South Korea', 'Malaysia', 'Vietnam', 'Indonesia', 'Sri Lanka', 
//     'Maldives', 'Mauritius', 'South Africa', 'Brazil', 'Mexico'
//   ];

//   // Format date for display
//   const formatDate = (dateString) => {
//     const options = { day: '2-digit', month: 'short', year: 'numeric' };
//     return new Date(dateString).toLocaleDateString('en-GB', options);
//   };

//   // Calculate number of days between dates
//   const getDaysDifference = () => {
//     const start = new Date(travelDetails.startDate);
//     const end = new Date(travelDetails.endDate);
//     const diffTime = Math.abs(end - start);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     return diffDays;
//   };

//   // Filter destinations based on search
//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setTravelDetails({...travelDetails, destination: query});
//     setSearchQuery(query);
    
//     if (query.length > 0) {
//       const filtered = popularDestinations.filter(dest => 
//         dest.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredDestinations(filtered);
//       setShowSuggestions(true);
//     } else {
//       setFilteredDestinations([]);
//       setShowSuggestions(false);
//     }
//   };

//   const handleSelectDestination = (destination) => {
//     setTravelDetails({...travelDetails, destination});
//     setSearchQuery(destination);
//     setShowSuggestions(false);
//   };

//   const handleExplorePlans = () => {
//     if (plansSectionRef.current) {
//       plansSectionRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Traveller management
//   const addTraveller = () => {
//     if (travelDetails.travellers.length < 10) {
//       const newId = Math.max(...travelDetails.travellers.map(t => t.id)) + 1;
//       setTravelDetails({
//         ...travelDetails,
//         travellers: [...travelDetails.travellers, { id: newId, age: 24 }]
//       });
//     }
//   };

//   const removeTraveller = (id) => {
//     if (travelDetails.travellers.length > 1) {
//       setTravelDetails({
//         ...travelDetails,
//         travellers: travelDetails.travellers.filter(t => t.id !== id)
//       });
//     }
//   };

//   const updateTravellerAge = (id, age) => {
//     setTravelDetails({
//       ...travelDetails,
//       travellers: travelDetails.travellers.map(t => 
//         t.id === id ? { ...t, age: parseInt(age) || 0 } : t
//       )
//     });
//   };

//   // Date management
//   const updateStartDate = (date) => {
//     let newStartDate = date;
//     let newEndDate = travelDetails.endDate;
    
//     // If end date is before start date, update end date to start date + 15 days
//     if (new Date(newEndDate) < new Date(newStartDate)) {
//       const end = new Date(newStartDate);
//       end.setDate(end.getDate() + 15);
//       newEndDate = end.toISOString().split('T')[0];
//     }
    
//     setTravelDetails({
//       ...travelDetails,
//       startDate: newStartDate,
//       endDate: newEndDate
//     });
//   };

//   const updateEndDate = (date) => {
//     if (new Date(date) >= new Date(travelDetails.startDate)) {
//       setTravelDetails({
//         ...travelDetails,
//         endDate: date
//       });
//     }
//   };

//   const plans = [
//     {
//       id: 1,
//       name: 'Travel Ace Lite - Gold',
//       insurer: 'Bajaj General',
//       insurerCode: 'bajaj',
//       basePremium: 979,
//       premium: 979,
//       medical: '$250,000',
//       passport: '$300',
//       baggage: '$750',
//       tripCancellation: '$2,500',
//       personalAccident: '$25,000',
//       features: ['Trip interruptions covered upto USD 1000'],
//       badge: 'POPULAR',
//       badgeColor: 'blue',
//       fullFeatures: [
//         'Trip interruption cover up to USD 1000',
//         'Medical expenses cover up to $250,000',
//         'Loss of passport cover up to $300',
//         'Baggage loss cover up to $750',
//         'Trip cancellation cover up to $2,500',
//         'Personal accident cover up to $25,000',
//         'Flight delay cover up to USD 100',
//         'Emergency dental treatment',
//         'Repatriation of remains',
//         '24x7 assistance services'
//       ]
//     },
//     {
//       id: 2,
//       name: 'Trip Secure Plus',
//       insurer: 'ICICI Lombard',
//       insurerCode: 'icici',
//       basePremium: 1196,
//       premium: 1196,
//       medical: '$250,000',
//       passport: '$500',
//       baggage: '$500',
//       tripCancellation: '$1,500',
//       personalAccident: '$15,000',
//       features: ['Home to Home cover'],
//       badge: 'RECOMMENDED',
//       badgeColor: 'green',
//       fullFeatures: [
//         'Home to Home coverage',
//         'Medical expenses cover up to $250,000',
//         'Loss of passport cover up to $500',
//         'Baggage loss cover up to $500',
//         'Trip cancellation cover up to $1,500',
//         'Personal accident cover up to $15,000',
//         'Adventure sports add-on available',
//         'Pre-existing disease cover available',
//         'Electronic equipment cover',
//         '24x7 global assistance'
//       ]
//     },
//     {
//       id: 3,
//       name: 'International Plus Gold',
//       insurer: 'Tata AIG',
//       insurerCode: 'tata',
//       basePremium: 1023,
//       premium: 1023,
//       medical: '$250,000',
//       passport: '$250',
//       baggage: '$300',
//       tripCancellation: '$750',
//       personalAccident: '₹15,000,000',
//       features: ['Home to Home cover', 'Personal Accident in India'],
//       badge: null,
//       fullFeatures: [
//         'Home to Home cover',
//         'Personal accident cover in India',
//         'Medical expenses cover up to $250,000',
//         'Loss of passport cover up to $250',
//         'Baggage loss cover up to $300',
//         'Trip cancellation cover up to $750',
//         'Personal accident cover in India ₹15,000,000',
//         'Flight delay cover',
//         'Missed connection cover',
//         'Emergency cash advance'
//       ]
//     },
//     {
//       id: 4,
//       name: 'Travel Care Individual',
//       insurer: 'Reliance',
//       insurerCode: 'reliance',
//       basePremium: 988,
//       premium: 988,
//       medical: '$250,000',
//       passport: '$300',
//       baggage: '$1,200',
//       tripCancellation: '$600',
//       personalAccident: '$25,000',
//       features: ['Home Burglary covered upto INR 2,00,000'],
//       badge: 'VALUE',
//       badgeColor: 'purple',
//       fullFeatures: [
//         'Home burglary cover up to INR 2,00,000',
//         'Medical expenses cover up to $250,000',
//         'Loss of passport cover up to $300',
//         'Baggage loss cover up to $1,200',
//         'Trip cancellation cover up to $600',
//         'Personal accident cover up to $25,000',
//         'Flight delay cover',
//         'Lost baggage protection',
//         'Personal liability cover',
//         '24x7 assistance'
//       ]
//     },
//     {
//       id: 5,
//       name: 'Explore Asia',
//       insurer: 'Care Health',
//       insurerCode: 'care',
//       basePremium: 647,
//       premium: 647,
//       medical: '$250,000',
//       passport: '$300',
//       baggage: '$500',
//       tripCancellation: '$1,000',
//       personalAccident: '$15,000',
//       features: ['Luggage Tracking Service Available'],
//       badge: 'BUDGET',
//       badgeColor: 'amber',
//       fullFeatures: [
//         'Luggage tracking service',
//         'Medical expenses cover up to $250,000',
//         'Loss of passport cover up to $300',
//         'Baggage loss cover up to $500',
//         'Trip cancellation cover up to $1,000',
//         'Personal accident cover up to $15,000',
//         'Flight delay cover',
//         'Emergency medical evacuation',
//         'Daily hospital cash allowance',
//         'COVID-19 coverage'
//       ]
//     }
//   ];

//   const features = [
//     {
//       icon: <HeartPulse className="w-6 h-6 text-blue-600" />,
//       title: 'Medical emergencies',
//       description: 'Hospitalisation expenses for illness and injury'
//     },
//     {
//       icon: <Plane className="w-6 h-6 text-blue-600" />,
//       title: 'Flight delays or cancellations',
//       description: 'Reimbursement for eligible expenses'
//     },
//     {
//       icon: <Luggage className="w-6 h-6 text-blue-600" />,
//       title: 'Lost baggage & passport',
//       description: 'Coverage for loss, delay or damage'
//     },
//     {
//       icon: <Shield className="w-6 h-6 text-blue-600" />,
//       title: 'Theft or personal loss',
//       description: 'Protection for belongings during travel'
//     }
//   ];

//   const faqs = [
//     {
//       id: 1,
//       question: 'Can I buy travel insurance after leaving the country?',
//       answer: 'Yes, you can buy travel insurance even after leaving India. However, we recommend purchasing it before your trip to ensure coverage from day one. Some benefits like trip cancellation are only available if you buy before departure.'
//     },
//     {
//       id: 2,
//       question: 'What is the validity period of travel insurance?',
//       answer: 'Travel insurance validity can range from 1 day to 1 year depending on your plan. Single trip policies cover you for the specific duration of your journey, while multi-trip policies can cover you for multiple trips throughout the year.'
//     },
//     {
//       id: 3,
//       question: 'Will my travel insurance cover pre-existing diseases?',
//       answer: 'Coverage for pre-existing diseases varies by insurer. Some plans offer coverage for life-threatening pre-existing conditions via add-ons. You need to disclose all pre-existing conditions during purchase for valid coverage.'
//     },
//     {
//       id: 4,
//       question: 'Is GST exemption applicable on all types of travel insurance?',
//       answer: 'Yes, the 18% GST exemption applies to all individual and family travel insurance policies purchased from India for international travel. This makes travel insurance more affordable with zero tax component.'
//     },
//     {
//       id: 5,
//       question: 'How many times can we extend the policy?',
//       answer: 'Most travel insurance policies can be extended multiple times during your trip, subject to maximum policy limits. You can extend online before your current policy expires.'
//     },
//     {
//       id: 6,
//       question: 'How can I cancel my travel insurance policy?',
//       answer: 'You can cancel your policy online through your account or by contacting customer support within the free-look period (usually 15 days) for a full refund, provided no claims have been made.'
//     }
//   ];

//   const toggleFaq = (id) => {
//     setOpenFaq(openFaq === id ? null : id);
//   };

//   const handleViewFeatures = (plan) => {
//     // Calculate premium based on number of travellers and days
//     const days = getDaysDifference();
//     const travellersCount = travelDetails.travellers.length;
    
//     // Simple premium calculation (base * travellers * (days/15))
//     const calculatedPremium = Math.round(plan.basePremium * travellersCount * (days / 15));
    
//     const planWithDetails = {
//       ...plan,
//       premium: calculatedPremium,
//       travellers: travelDetails.travellers,
//       startDate: travelDetails.startDate,
//       endDate: travelDetails.endDate,
//       destination: travelDetails.destination,
//       tripDuration: days
//     };
    
//     navigate('/travel-insurance-booking', { state: { selectedPlan: planWithDetails } });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section with Search */}
//       <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 border-b border-blue-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div>
//               <div className="inline-flex items-center bg-green-100 px-3 py-1 rounded-full text-sm font-medium text-green-800 mb-6">
//                 <Sparkles className="w-4 h-4 mr-1" />
//                 Starting at just ₹19/day*
//               </div>
//               <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
//                 Travel worry free with 
//                 <span className="text-blue-600 block mt-2">instant quotes & global coverage</span>
//               </h1>
//               <p className="text-xl text-gray-600 mb-8">
//                 Your passport to travelling with peace of mind. Easy claims, 24x7 support.
//               </p>
              
//               {/* Feature List */}
//               <div className="grid sm:grid-cols-2 gap-4 mb-8">
//                 {features.map((feature, idx) => (
//                   <div key={idx} className="flex items-start">
//                     <div className="flex-shrink-0 mt-1">
//                       {feature.icon}
//                     </div>
//                     <div className="ml-3">
//                       <h3 className="text-sm font-medium text-gray-900">{feature.title}</h3>
//                       <p className="text-xs text-gray-500">{feature.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Search Card */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
//               <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
//                 <Globe className="w-5 h-5 text-blue-600 mr-2" />
//                 Where are you travelling to?
//               </h2>
              
//               <div className="space-y-4">
//                 {/* Destination Search */}
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="text"
//                     placeholder="Search country"
//                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     value={travelDetails.destination}
//                     onChange={handleSearchChange}
//                     onFocus={() => setShowSuggestions(true)}
//                     onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
//                   />
                  
//                   {/* Search Suggestions */}
//                   {showSuggestions && filteredDestinations.length > 0 && (
//                     <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
//                       {filteredDestinations.map((dest, index) => (
//                         <button
//                           key={index}
//                           className="w-full text-left px-4 py-2 hover:bg-blue-50 transition flex items-center"
//                           onClick={() => handleSelectDestination(dest)}
//                         >
//                           <Globe className="w-4 h-4 text-gray-400 mr-2" />
//                           {dest}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Popular Choices */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Popular choices
//                   </label>
//                   <div className="flex flex-wrap gap-2">
//                     {popularDestinations.slice(0, 6).map((dest) => (
//                       <button
//                         key={dest}
//                         onClick={() => handleSelectDestination(dest)}
//                         className="px-3 py-1.5 bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-700 rounded-full text-sm transition"
//                       >
//                         {dest}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Date Selection */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Start date
//                     </label>
//                     <div className="relative">
//                       <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                       <input
//                         type="date"
//                         className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         value={travelDetails.startDate}
//                         min={new Date().toISOString().split('T')[0]}
//                         onChange={(e) => updateStartDate(e.target.value)}
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       End date
//                     </label>
//                     <div className="relative">
//                       <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                       <input
//                         type="date"
//                         className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         value={travelDetails.endDate}
//                         min={travelDetails.startDate}
//                         onChange={(e) => updateEndDate(e.target.value)}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Trip Duration */}
//                 <div className="text-xs text-gray-500 text-right">
//                   Trip duration: <span className="font-semibold text-blue-600">{getDaysDifference()} days</span>
//                 </div>

//                 {/* Traveller Selection */}
//                 <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
//                   <div className="flex items-center justify-between mb-3">
//                     <div className="flex items-center">
//                       <Users className="w-5 h-5 text-gray-600 mr-2" />
//                       <span className="text-sm font-medium text-gray-700">
//                         {travelDetails.travellers.length} Traveller(s)
//                       </span>
//                     </div>
//                     <button
//                       onClick={() => setShowTravellerModal(true)}
//                       className="text-blue-600 text-sm font-medium hover:text-blue-700"
//                     >
//                       Edit details
//                     </button>
//                   </div>
                  
//                   {/* Quick age summary */}
//                   <div className="flex flex-wrap gap-2">
//                     {travelDetails.travellers.map((traveller, index) => (
//                       <span key={traveller.id} className="inline-flex items-center bg-white px-2 py-1 rounded border border-gray-200 text-xs">
//                         <User className="w-3 h-3 text-gray-500 mr-1" />
//                         T{index + 1}: {traveller.age} yrs
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Explore Plans Button */}
//                 <button 
//                   onClick={handleExplorePlans}
//                   className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center"
//                 >
//                   Explore Plans
//                   <ChevronRight className="w-4 h-4 ml-1" />
//                 </button>

//                 <p className="text-xs text-gray-500 text-center">
//                   *Terms & conditions apply. 0% GST as per government notification.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Traveller Details Modal */}
//       {showTravellerModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl max-w-lg w-full p-6">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold text-gray-900">Traveller Details</h3>
//               <button 
//                 onClick={() => setShowTravellerModal(false)}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
            
//             <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
//               {travelDetails.travellers.map((traveller, index) => (
//                 <div key={traveller.id} className="border border-gray-200 rounded-lg p-4">
//                   <div className="flex items-center justify-between mb-3">
//                     <h4 className="font-medium text-gray-900">Traveller {index + 1}</h4>
//                     {travelDetails.travellers.length > 1 && (
//                       <button
//                         onClick={() => removeTraveller(traveller.id)}
//                         className="text-red-500 hover:text-red-700 text-sm"
//                       >
//                         Remove
//                       </button>
//                     )}
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Age
//                     </label>
//                     <select
//                       value={traveller.age}
//                       onChange={(e) => updateTravellerAge(traveller.id, e.target.value)}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       {Array.from({ length: 100 }, (_, i) => i + 1).map(age => (
//                         <option key={age} value={age}>{age} years</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Add Traveller Button */}
//             {travelDetails.travellers.length < 10 && (
//               <button
//                 onClick={addTraveller}
//                 className="w-full mt-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600 transition flex items-center justify-center"
//               >
//                 <Plus className="w-4 h-4 mr-2" />
//                 Add another traveller
//               </button>
//             )}

//             <div className="mt-6 flex justify-end">
//               <button
//                 onClick={() => setShowTravellerModal(false)}
//                 className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
//               >
//                 Done
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Plans Section */}
//       <div ref={plansSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-900">
//               {travelDetails.destination 
//                 ? `Travel insurance plans for ${travelDetails.destination}`
//                 : `Showing ${plans.length} plans for ${travelDetails.travellers.length} traveller(s)`
//               }
//             </h2>
//             <p className="text-gray-600 mt-1">
//               {formatDate(travelDetails.startDate)} - {formatDate(travelDetails.endDate)} • {getDaysDifference()} days
//             </p>
//           </div>
          
//           {/* Filters */}
//           <div className="hidden lg:flex items-center space-x-3">
//             <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm">
//               <option>Plan Type</option>
//             </select>
//             <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm">
//               <option>Sum Insured</option>
//             </select>
//             <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm">
//               <option>Sort by: Premium</option>
//             </select>
//           </div>
//         </div>

//         {/* Selected Destination Banner */}
//         {travelDetails.destination && (
//           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-center justify-between">
//             <div className="flex items-center">
//               <Globe className="w-5 h-5 text-blue-600 mr-2" />
//               <span className="text-blue-800">
//                 Showing plans for <strong>{travelDetails.destination}</strong> | {formatDate(travelDetails.startDate)} - {formatDate(travelDetails.endDate)} | {travelDetails.travellers.length} traveller(s)
//               </span>
//             </div>
//             <button 
//               onClick={() => setTravelDetails({...travelDetails, destination: ''})}
//               className="text-sm text-blue-600 hover:text-blue-800"
//             >
//               Change destination
//             </button>
//           </div>
//         )}

//         {/* Plans Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {plans.map((plan) => {
//             // Calculate dynamic premium based on travellers and days
//             const days = getDaysDifference();
//             const travellersCount = travelDetails.travellers.length;
//             const calculatedPremium = Math.round(plan.basePremium * travellersCount * (days / 15));
            
//             return (
//               <div key={plan.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 relative">
//                 {plan.badge && (
//                   <div className={`absolute -top-2 -right-2 bg-${plan.badgeColor}-500 text-white px-3 py-1 rounded-full text-xs font-bold`}>
//                     {plan.badge}
//                   </div>
//                 )}
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-3">
//                     <div>
//                       <p className="text-sm text-gray-600">{plan.insurer}</p>
//                       <h3 className="font-bold text-gray-900 mt-1">{plan.name}</h3>
//                     </div>
//                     <button className="text-blue-600 border border-blue-600 px-4 py-1 rounded-full text-sm hover:bg-blue-50">
//                       Compare
//                     </button>
//                   </div>

//                   <div className="space-y-2 my-4">
//                     {plan.features.map((feature, idx) => (
//                       <div key={idx} className="flex items-start">
//                         <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                         <span className="text-xs text-gray-700">{feature}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="space-y-2 mb-4">
//                     <div className="flex justify-between text-sm">
//                       <span className="text-gray-600">Medical Expenses</span>
//                       <span className="font-semibold">{plan.medical}</span>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                       <span className="text-gray-600">Loss of Passport</span>
//                       <span className="font-semibold">{plan.passport}</span>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                       <span className="text-gray-600">Baggage Loss</span>
//                       <span className="font-semibold">{plan.baggage}</span>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                       <span className="text-gray-600">Trip Cancellation</span>
//                       <span className="font-semibold">{plan.tripCancellation}</span>
//                     </div>
//                   </div>

//                   <div className="border-t border-gray-200 pt-4 mt-4">
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-2xl font-bold text-gray-900">₹{calculatedPremium}</span>
//                       <span className="text-xs text-gray-500">Total premium</span>
//                     </div>
//                     <p className="text-xs text-gray-500 mb-3">
//                       For {travellersCount} traveller(s) • {days} days
//                     </p>
//                     <button 
//                       onClick={() => handleViewFeatures({
//                         ...plan,
//                         premium: calculatedPremium
//                       })}
//                       className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
//                     >
//                       View all features
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="text-center mt-8">
//           <button className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
//             Show more plans
//             <ChevronRight className="w-4 h-4 ml-1" />
//           </button>
//         </div>
//       </div>

//       {/* Why Choose Us */}
//       <div className="bg-blue-600 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Phone className="w-8 h-8" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">24x7 Global Assistance</h3>
//               <p className="text-blue-100">Claim assistance anytime, anywhere in the world</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FileText className="w-8 h-8" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Compare & Choose</h3>
//               <p className="text-blue-100">13+ plans to compare as per your requirements</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Sparkles className="w-8 h-8" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Instant Policy</h3>
//               <p className="text-blue-100">Get your policy instantly with quick KYC</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             Frequently asked questions about travel insurance
//           </h2>
//           <p className="text-lg text-gray-600">
//             Everything you need to know about travel insurance
//           </p>
//         </div>
        
//         <div className="space-y-4">
//           {faqs.map((faq) => (
//             <div 
//               key={faq.id} 
//               className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-blue-200 transition"
//             >
//               <button
//                 onClick={() => toggleFaq(faq.id)}
//                 className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
//               >
//                 <span className="font-medium text-gray-900">{faq.question}</span>
//                 {openFaq === faq.id ? (
//                   <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
//                 ) : (
//                   <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
//                 )}
//               </button>
              
//               <div 
//                 className={`transition-all duration-300 ease-in-out ${
//                   openFaq === faq.id 
//                     ? 'max-h-96 opacity-100' 
//                     : 'max-h-0 opacity-0'
//                 } overflow-hidden`}
//               >
//                 <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4">
//                   {faq.answer}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default TravelInsurance;












import React, { useState, useRef } from 'react';
import {
  Shield, Globe, Plane, Luggage, Clock, ChevronRight, Search,
  HeartPulse, Sparkles, CheckCircle2, Users, Phone, FileText,
  ChevronDown, ChevronUp, Calendar, Plus, User, X, Star, Zap, Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TravelInsurance = () => {
  const navigate = useNavigate();
  const plansSectionRef = useRef(null);

  const [travelDetails, setTravelDetails] = useState({
    destination: '',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 15 * 86400000).toISOString().split('T')[0],
    travellers: [{ id: 1, age: 24 }]
  });

  const [openFaq, setOpenFaq] = useState(null);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showTravellerModal, setShowTravellerModal] = useState(false);

  const popularDestinations = [
    'Schengen', 'UAE', 'Thailand', 'USA', 'Singapore', 'Germany',
    'UK', 'Canada', 'Australia', 'France', 'Italy', 'Switzerland',
    'Japan', 'South Korea', 'Malaysia', 'Vietnam', 'Indonesia',
    'Sri Lanka', 'Maldives', 'Mauritius', 'South Africa', 'Brazil', 'Mexico'
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const getDaysDifference = () => {
    const diff = Math.abs(new Date(travelDetails.endDate) - new Date(travelDetails.startDate));
    return Math.ceil(diff / (1000 * 60 * 60 * 24)) || 1;
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setTravelDetails({ ...travelDetails, destination: query });
    if (query.length > 0) {
      setFilteredDestinations(popularDestinations.filter(d => d.toLowerCase().includes(query.toLowerCase())));
      setShowSuggestions(true);
    } else {
      setFilteredDestinations([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectDestination = (destination) => {
    setTravelDetails({ ...travelDetails, destination });
    setShowSuggestions(false);
  };

  const handleExplorePlans = () => {
    plansSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addTraveller = () => {
    if (travelDetails.travellers.length < 10) {
      const newId = Math.max(...travelDetails.travellers.map(t => t.id)) + 1;
      setTravelDetails({ ...travelDetails, travellers: [...travelDetails.travellers, { id: newId, age: 24 }] });
    }
  };

  const removeTraveller = (id) => {
    if (travelDetails.travellers.length > 1) {
      setTravelDetails({ ...travelDetails, travellers: travelDetails.travellers.filter(t => t.id !== id) });
    }
  };

  const updateTravellerAge = (id, age) => {
    setTravelDetails({
      ...travelDetails,
      travellers: travelDetails.travellers.map(t => t.id === id ? { ...t, age: parseInt(age) || 0 } : t)
    });
  };

  const updateStartDate = (date) => {
    let endDate = travelDetails.endDate;
    if (new Date(endDate) < new Date(date)) {
      const e = new Date(date);
      e.setDate(e.getDate() + 15);
      endDate = e.toISOString().split('T')[0];
    }
    setTravelDetails({ ...travelDetails, startDate: date, endDate });
  };

  const updateEndDate = (date) => {
    if (new Date(date) >= new Date(travelDetails.startDate)) {
      setTravelDetails({ ...travelDetails, endDate: date });
    }
  };

  const plans = [
    {
      id: 1, name: 'Travel Ace Lite - Gold', insurer: 'Bajaj General', insurerCode: 'bajaj',
      basePremium: 979, medical: '$250,000', passport: '$300', baggage: '$750',
      tripCancellation: '$2,500', personalAccident: '$25,000',
      features: ['Trip interruptions covered upto USD 1000'],
      badge: 'POPULAR', badgeColor: '#3B82F6',
      fullFeatures: ['Trip interruption cover up to USD 1000', 'Medical expenses cover up to $250,000', 'Loss of passport cover up to $300', 'Baggage loss cover up to $750', 'Trip cancellation cover up to $2,500', 'Personal accident cover up to $25,000', 'Flight delay cover up to USD 100', 'Emergency dental treatment', 'Repatriation of remains', '24x7 assistance services']
    },
    {
      id: 2, name: 'Trip Secure Plus', insurer: 'ICICI Lombard', insurerCode: 'icici',
      basePremium: 1196, medical: '$250,000', passport: '$500', baggage: '$500',
      tripCancellation: '$1,500', personalAccident: '$15,000',
      features: ['Home to Home cover'],
      badge: 'RECOMMENDED', badgeColor: '#10B981',
      fullFeatures: ['Home to Home coverage', 'Medical expenses cover up to $250,000', 'Loss of passport cover up to $500', 'Baggage loss cover up to $500', 'Trip cancellation cover up to $1,500', 'Personal accident cover up to $15,000', 'Adventure sports add-on available', 'Pre-existing disease cover available', 'Electronic equipment cover', '24x7 global assistance']
    },
    {
      id: 3, name: 'International Plus Gold', insurer: 'Tata AIG', insurerCode: 'tata',
      basePremium: 1023, medical: '$250,000', passport: '$250', baggage: '$300',
      tripCancellation: '$750', personalAccident: '₹15,000,000',
      features: ['Home to Home cover', 'Personal Accident in India'],
      badge: null, badgeColor: null,
      fullFeatures: ['Home to Home cover', 'Personal accident cover in India', 'Medical expenses cover up to $250,000', 'Loss of passport cover up to $250', 'Baggage loss cover up to $300', 'Trip cancellation cover up to $750', 'Personal accident cover in India ₹15,000,000', 'Flight delay cover', 'Missed connection cover', 'Emergency cash advance']
    },
    {
      id: 4, name: 'Travel Care Individual', insurer: 'Reliance', insurerCode: 'reliance',
      basePremium: 988, medical: '$250,000', passport: '$300', baggage: '$1,200',
      tripCancellation: '$600', personalAccident: '$25,000',
      features: ['Home Burglary covered upto INR 2,00,000'],
      badge: 'VALUE', badgeColor: '#8B5CF6',
      fullFeatures: ['Home burglary cover up to INR 2,00,000', 'Medical expenses cover up to $250,000', 'Loss of passport cover up to $300', 'Baggage loss cover up to $1,200', 'Trip cancellation cover up to $600', 'Personal accident cover up to $25,000', 'Flight delay cover', 'Lost baggage protection', 'Personal liability cover', '24x7 assistance']
    },
    {
      id: 5, name: 'Explore Asia', insurer: 'Care Health', insurerCode: 'care',
      basePremium: 647, medical: '$250,000', passport: '$300', baggage: '$500',
      tripCancellation: '$1,000', personalAccident: '$15,000',
      features: ['Luggage Tracking Service Available'],
      badge: 'BUDGET', badgeColor: '#F59E0B',
      fullFeatures: ['Luggage tracking service', 'Medical expenses cover up to $250,000', 'Loss of passport cover up to $300', 'Baggage loss cover up to $500', 'Trip cancellation cover up to $1,000', 'Personal accident cover up to $15,000', 'Flight delay cover', 'Emergency medical evacuation', 'Daily hospital cash allowance', 'COVID-19 coverage']
    }
  ];

  const faqs = [
    { id: 1, question: 'Can I buy travel insurance after leaving the country?', answer: 'Yes, you can buy travel insurance even after leaving India. However, we recommend purchasing it before your trip to ensure coverage from day one. Some benefits like trip cancellation are only available if you buy before departure.' },
    { id: 2, question: 'What is the validity period of travel insurance?', answer: 'Travel insurance validity can range from 1 day to 1 year depending on your plan. Single trip policies cover you for the specific duration of your journey, while multi-trip policies can cover you for multiple trips throughout the year.' },
    { id: 3, question: 'Will my travel insurance cover pre-existing diseases?', answer: 'Coverage for pre-existing diseases varies by insurer. Some plans offer coverage for life-threatening pre-existing conditions via add-ons. You need to disclose all pre-existing conditions during purchase for valid coverage.' },
    { id: 4, question: 'Is GST exemption applicable on all types of travel insurance?', answer: 'Yes, the 18% GST exemption applies to all individual and family travel insurance policies purchased from India for international travel. This makes travel insurance more affordable with zero tax component.' },
    { id: 5, question: 'How many times can we extend the policy?', answer: 'Most travel insurance policies can be extended multiple times during your trip, subject to maximum policy limits. You can extend online before your current policy expires.' },
    { id: 6, question: 'How can I cancel my travel insurance policy?', answer: 'You can cancel your policy online through your account or by contacting customer support within the free-look period (usually 15 days) for a full refund, provided no claims have been made.' }
  ];

  const handleViewFeatures = (plan) => {
    const days = getDaysDifference();
    const travellersCount = travelDetails.travellers.length;
    const calculatedPremium = Math.round(plan.basePremium * travellersCount * (days / 15));
    navigate('/travel-insurance-booking', {
      state: {
        selectedPlan: {
          ...plan, premium: calculatedPremium,
          travellers: travelDetails.travellers,
          startDate: travelDetails.startDate,
          endDate: travelDetails.endDate,
          destination: travelDetails.destination,
          tripDuration: days
        }
      }
    });
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFF', fontFamily: "'DM Sans', system-ui, sans-serif" }}>

      {/* ===== HERO SECTION ===== */}
      <div style={{
        background: 'linear-gradient(135deg, #EEF2FF 0%, #F0F9FF 50%, #ECFDF5 100%)',
        borderBottom: '1px solid #E0E7FF',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background circles */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>

            {/* Left */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: 'linear-gradient(135deg, #D1FAE5, #A7F3D0)',
                border: '1px solid #6EE7B7',
                padding: '6px 14px', borderRadius: '50px',
                fontSize: '13px', fontWeight: '600', color: '#065F46', marginBottom: '24px'
              }}>
                <Sparkles size={14} /> Starting at just ₹19/day • 0% GST
              </div>

              <h1 style={{ fontSize: '48px', fontWeight: '800', lineHeight: '1.1', color: '#0F172A', marginBottom: '16px', letterSpacing: '-1px' }}>
                Travel worry-free<br />
                <span style={{ background: 'linear-gradient(135deg, #4F46E5, #0EA5E9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  with global coverage
                </span>
              </h1>

              <p style={{ fontSize: '18px', color: '#64748B', marginBottom: '40px', lineHeight: '1.6' }}>
                Instant policies from India's top insurers. Easy claims, 24x7 worldwide support.
              </p>

              {/* Feature grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { icon: <HeartPulse size={20} />, title: 'Medical emergencies', desc: 'Hospitalisation for illness & injury', color: '#EF4444' },
                  { icon: <Plane size={20} />, title: 'Flight delays', desc: 'Reimbursement for eligible expenses', color: '#3B82F6' },
                  { icon: <Luggage size={20} />, title: 'Lost baggage', desc: 'Coverage for loss, delay or damage', color: '#F59E0B' },
                  { icon: <Shield size={20} />, title: 'Theft & personal loss', desc: 'Protection for your belongings', color: '#10B981' }
                ].map((f, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '12px',
                    padding: '16px', background: 'white', borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
                  }}>
                    <div style={{ color: f.color, flexShrink: 0, marginTop: '2px' }}>{f.icon}</div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: '#0F172A' }}>{f.title}</div>
                      <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '2px' }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div style={{ display: 'flex', gap: '20px', marginTop: '32px', alignItems: 'center' }}>
                {[
                  { label: '10 Lakh+', sub: 'Policies issued' },
                  { label: '13+', sub: 'Insurers' },
                  { label: '4.8★', sub: 'Avg rating' }
                ].map((b, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '20px', fontWeight: '800', color: '#4F46E5' }}>{b.label}</div>
                    <div style={{ fontSize: '11px', color: '#94A3B8', marginTop: '2px' }}>{b.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Search Card */}
            <div style={{
              background: 'white', borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(79,70,229,0.12)',
              border: '1px solid #E0E7FF', padding: '28px'
            }}>
              <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Globe size={18} color="#4F46E5" /> Where are you travelling to?
              </h2>

              {/* Destination Search */}
              <div style={{ position: 'relative', marginBottom: '16px' }}>
                <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                <input
                  type="text"
                  placeholder="Search country or region..."
                  style={{
                    width: '100%', paddingLeft: '38px', paddingRight: '16px', paddingTop: '12px', paddingBottom: '12px',
                    border: '1.5px solid #E2E8F0', borderRadius: '10px', fontSize: '14px', outline: 'none',
                    color: '#0F172A', background: '#F8FAFC', boxSizing: 'border-box',
                    transition: 'border-color 0.2s'
                  }}
                  value={travelDetails.destination}
                  onChange={handleSearchChange}
                  onFocus={(e) => { e.target.style.borderColor = '#4F46E5'; setShowSuggestions(true); }}
                  onBlur={(e) => { e.target.style.borderColor = '#E2E8F0'; setTimeout(() => setShowSuggestions(false), 200); }}
                />
                {showSuggestions && filteredDestinations.length > 0 && (
                  <div style={{
                    position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '4px',
                    background: 'white', border: '1px solid #E2E8F0', borderRadius: '10px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)', zIndex: 10, maxHeight: '200px', overflowY: 'auto'
                  }}>
                    {filteredDestinations.map((dest, i) => (
                      <button key={i} onClick={() => handleSelectDestination(dest)} style={{
                        width: '100%', textAlign: 'left', padding: '10px 16px',
                        background: 'none', border: 'none', cursor: 'pointer',
                        fontSize: '14px', color: '#374151', display: 'flex', alignItems: 'center', gap: '8px'
                      }}
                        onMouseEnter={e => e.target.style.background = '#F0F4FF'}
                        onMouseLeave={e => e.target.style.background = 'none'}
                      >
                        <Globe size={14} color="#94A3B8" /> {dest}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Popular choices */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '11px', fontWeight: '600', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Popular choices</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {popularDestinations.slice(0, 7).map(dest => (
                    <button key={dest} onClick={() => handleSelectDestination(dest)} style={{
                      padding: '5px 12px', background: travelDetails.destination === dest ? '#EEF2FF' : '#F1F5F9',
                      border: travelDetails.destination === dest ? '1px solid #C7D2FE' : '1px solid transparent',
                      borderRadius: '20px', fontSize: '12px', fontWeight: '500',
                      color: travelDetails.destination === dest ? '#4F46E5' : '#64748B',
                      cursor: 'pointer', transition: 'all 0.15s'
                    }}>
                      {dest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date pickers */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '8px' }}>
                {[
                  { label: 'Start date', val: travelDetails.startDate, min: new Date().toISOString().split('T')[0], onChange: e => updateStartDate(e.target.value) },
                  { label: 'End date', val: travelDetails.endDate, min: travelDetails.startDate, onChange: e => updateEndDate(e.target.value) }
                ].map((d, i) => (
                  <div key={i}>
                    <label style={{ fontSize: '11px', fontWeight: '600', color: '#64748B', display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{d.label}</label>
                    <div style={{ position: 'relative' }}>
                      <Calendar size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
                      <input type="date" value={d.val} min={d.min} onChange={d.onChange} style={{
                        width: '100%', paddingLeft: '32px', paddingRight: '8px', paddingTop: '10px', paddingBottom: '10px',
                        border: '1.5px solid #E2E8F0', borderRadius: '10px', fontSize: '13px',
                        color: '#0F172A', background: '#F8FAFC', boxSizing: 'border-box', outline: 'none'
                      }} />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'right', fontSize: '12px', color: '#94A3B8', marginBottom: '16px' }}>
                Trip duration: <strong style={{ color: '#4F46E5' }}>{getDaysDifference()} days</strong>
              </div>

              {/* Travellers */}
              <div style={{
                border: '1.5px solid #E2E8F0', borderRadius: '10px', padding: '14px',
                background: '#F8FAFC', marginBottom: '16px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: '#374151' }}>
                    <Users size={16} color="#4F46E5" />
                    {travelDetails.travellers.length} Traveller{travelDetails.travellers.length > 1 ? 's' : ''}
                  </div>
                  <button onClick={() => setShowTravellerModal(true)} style={{
                    fontSize: '12px', fontWeight: '600', color: '#4F46E5',
                    background: 'none', border: 'none', cursor: 'pointer'
                  }}>Edit details</button>
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {travelDetails.travellers.map((t, i) => (
                    <span key={t.id} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      background: 'white', border: '1px solid #E2E8F0',
                      borderRadius: '6px', padding: '4px 8px', fontSize: '12px', color: '#374151'
                    }}>
                      <User size={11} color="#94A3B8" /> T{i + 1}: {t.age} yrs
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button onClick={handleExplorePlans} style={{
                width: '100%', padding: '14px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #4F46E5, #0EA5E9)',
                color: 'white', fontWeight: '700', fontSize: '15px',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                boxShadow: '0 4px 20px rgba(79,70,229,0.35)',
                transition: 'transform 0.15s, box-shadow 0.15s'
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(79,70,229,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(79,70,229,0.35)'; }}
              >
                Explore Plans <ChevronRight size={18} />
              </button>
              <p style={{ textAlign: 'center', fontSize: '11px', color: '#94A3B8', marginTop: '10px' }}>
                *Terms & conditions apply. 0% GST as per government notification.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== TRAVELLER MODAL ===== */}
      {showTravellerModal && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '16px',
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{ background: 'white', borderRadius: '16px', width: '100%', maxWidth: '440px', padding: '24px', boxShadow: '0 24px 80px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A' }}>Traveller Details</h3>
              <button onClick={() => setShowTravellerModal(false)} style={{ background: '#F1F5F9', border: 'none', borderRadius: '8px', padding: '6px', cursor: 'pointer', color: '#64748B' }}>
                <X size={18} />
              </button>
            </div>
            <div style={{ maxHeight: '320px', overflowY: 'auto' }}>
              {travelDetails.travellers.map((traveller, index) => (
                <div key={traveller.id} style={{ border: '1px solid #E2E8F0', borderRadius: '10px', padding: '16px', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontWeight: '600', fontSize: '14px', color: '#374151' }}>Traveller {index + 1}</span>
                    {travelDetails.travellers.length > 1 && (
                      <button onClick={() => removeTraveller(traveller.id)} style={{ fontSize: '12px', color: '#EF4444', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600' }}>Remove</button>
                    )}
                  </div>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#64748B', display: 'block', marginBottom: '6px' }}>Age</label>
                  <select value={traveller.age} onChange={(e) => updateTravellerAge(traveller.id, e.target.value)} style={{
                    width: '100%', padding: '10px 12px', border: '1.5px solid #E2E8F0', borderRadius: '8px',
                    fontSize: '14px', color: '#0F172A', background: '#F8FAFC', outline: 'none', boxSizing: 'border-box'
                  }}>
                    {Array.from({ length: 100 }, (_, i) => i + 1).map(age => (
                      <option key={age} value={age}>{age} years</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            {travelDetails.travellers.length < 10 && (
              <button onClick={addTraveller} style={{
                width: '100%', marginTop: '8px', padding: '10px',
                border: '2px dashed #C7D2FE', borderRadius: '10px',
                color: '#4F46E5', fontSize: '13px', fontWeight: '600',
                background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
              }}>
                <Plus size={16} /> Add another traveller
              </button>
            )}
            <button onClick={() => setShowTravellerModal(false)} style={{
              width: '100%', marginTop: '16px', padding: '12px',
              background: 'linear-gradient(135deg, #4F46E5, #0EA5E9)',
              color: 'white', fontWeight: '700', fontSize: '14px',
              border: 'none', borderRadius: '10px', cursor: 'pointer'
            }}>
              Done
            </button>
          </div>
        </div>
      )}

      {/* ===== PLANS SECTION ===== */}
      <div ref={plansSectionRef} style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0F172A', marginBottom: '6px' }}>
              {travelDetails.destination
                ? `Plans for ${travelDetails.destination}`
                : `${plans.length} plans for ${travelDetails.travellers.length} traveller${travelDetails.travellers.length > 1 ? 's' : ''}`}
            </h2>
            <p style={{ fontSize: '14px', color: '#64748B' }}>
              {formatDate(travelDetails.startDate)} → {formatDate(travelDetails.endDate)} • {getDaysDifference()} days
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['Plan Type', 'Sum Insured', 'Sort: Premium ↑'].map((f, i) => (
              <select key={i} style={{
                padding: '8px 14px', border: '1.5px solid #E2E8F0', borderRadius: '8px',
                fontSize: '13px', color: '#374151', background: 'white', outline: 'none', cursor: 'pointer'
              }}>
                <option>{f}</option>
              </select>
            ))}
          </div>
        </div>

        {travelDetails.destination && (
          <div style={{
            background: '#EEF2FF', border: '1px solid #C7D2FE', borderRadius: '12px',
            padding: '14px 20px', marginBottom: '24px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#3730A3' }}>
              <Globe size={16} />
              Showing plans for <strong>{travelDetails.destination}</strong> • {travelDetails.travellers.length} traveller(s)
            </div>
            <button onClick={() => setTravelDetails({ ...travelDetails, destination: '' })} style={{
              fontSize: '13px', color: '#4F46E5', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600'
            }}>Change destination</button>
          </div>
        )}

        {/* Plans Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
          {plans.map((plan) => {
            const days = getDaysDifference();
            const travellersCount = travelDetails.travellers.length;
            const premium = Math.round(plan.basePremium * travellersCount * (days / 15));

            return (
              <div key={plan.id} style={{
                background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                transition: 'transform 0.2s, box-shadow 0.2s', overflow: 'hidden', position: 'relative'
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(79,70,229,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'; }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div style={{
                    position: 'absolute', top: '14px', right: '14px',
                    background: plan.badgeColor, color: 'white',
                    padding: '3px 10px', borderRadius: '20px', fontSize: '10px', fontWeight: '700', letterSpacing: '0.5px'
                  }}>
                    {plan.badge}
                  </div>
                )}

                {/* Card header */}
                <div style={{ padding: '20px 20px 0' }}>
                  <div style={{ marginBottom: '4px', fontSize: '12px', fontWeight: '600', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {plan.insurer}
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: '800', color: '#0F172A', marginBottom: '14px', paddingRight: plan.badge ? '72px' : '0' }}>
                    {plan.name}
                  </div>

                  {/* Highlight features */}
                  {plan.features.map((f, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '6px',
                      background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '8px',
                      padding: '8px 10px', marginBottom: '14px'
                    }}>
                      <CheckCircle2 size={14} color="#16A34A" style={{ flexShrink: 0, marginTop: '1px' }} />
                      <span style={{ fontSize: '12px', color: '#166534', fontWeight: '500' }}>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Coverage details */}
                <div style={{ padding: '0 20px', marginBottom: '16px' }}>
                  {[
                    { label: 'Medical Expenses', value: plan.medical, color: '#EF4444' },
                    { label: 'Baggage Loss', value: plan.baggage, color: '#F59E0B' },
                    { label: 'Trip Cancellation', value: plan.tripCancellation, color: '#3B82F6' },
                    { label: 'Loss of Passport', value: plan.passport, color: '#8B5CF6' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < 3 ? '1px dashed #F1F5F9' : 'none' }}>
                      <span style={{ fontSize: '13px', color: '#64748B' }}>{item.label}</span>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: '#0F172A' }}>{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div style={{ padding: '16px 20px', background: 'linear-gradient(135deg, #F8FAFF, #EEF2FF)', borderTop: '1px solid #E0E7FF' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div>
                      <span style={{ fontSize: '28px', fontWeight: '800', color: '#0F172A' }}>₹{premium.toLocaleString()}</span>
                      <div style={{ fontSize: '11px', color: '#94A3B8', marginTop: '2px' }}>
                        {travellersCount} traveller(s) • {days} days
                      </div>
                    </div>
                    <button style={{
                      padding: '6px 14px', border: '1.5px solid #C7D2FE', borderRadius: '20px',
                      fontSize: '12px', fontWeight: '600', color: '#4F46E5', background: 'white', cursor: 'pointer'
                    }}>
                      Compare
                    </button>
                  </div>
                  <button onClick={() => handleViewFeatures({ ...plan, premium })} style={{
                    width: '100%', padding: '12px', borderRadius: '10px',
                    background: 'linear-gradient(135deg, #4F46E5, #0EA5E9)',
                    color: 'white', fontWeight: '700', fontSize: '14px',
                    border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                    transition: 'opacity 0.15s'
                  }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    View all features <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <button style={{
            padding: '12px 28px', border: '1.5px solid #C7D2FE', borderRadius: '10px',
            fontSize: '14px', fontWeight: '600', color: '#4F46E5', background: 'white', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: '6px'
          }}>
            Show more plans <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* ===== WHY CHOOSE US ===== */}
      <div style={{ background: 'linear-gradient(135deg, #1E1B4B, #312E81, #1E40AF)', padding: '64px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: 'white', marginBottom: '10px' }}>Why travellers choose us</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px' }}>Trusted by 10 lakh+ travellers across India</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { icon: <Phone size={28} />, title: '24x7 Global Assistance', desc: 'Claim help anytime, anywhere worldwide', accent: '#6EE7B7' },
              { icon: <FileText size={28} />, title: 'Compare & Choose', desc: '13+ plans from India\'s top insurers', accent: '#93C5FD' },
              { icon: <Zap size={28} />, title: 'Instant Policy', desc: 'Policy issued in under 5 minutes with quick KYC', accent: '#FCD34D' }
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px', padding: '28px', textAlign: 'center'
              }}>
                <div style={{
                  width: '60px', height: '60px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px', color: item.accent
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== FAQ ===== */}
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0F172A', marginBottom: '10px' }}>Frequently asked questions</h2>
          <p style={{ fontSize: '16px', color: '#64748B' }}>Everything you need to know about travel insurance</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((faq) => (
            <div key={faq.id} style={{
              background: 'white', borderRadius: '12px',
              border: openFaq === faq.id ? '1.5px solid #C7D2FE' : '1.5px solid #E2E8F0',
              overflow: 'hidden', transition: 'border-color 0.2s'
            }}>
              <button onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)} style={{
                width: '100%', padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '12px'
              }}>
                <span style={{ fontSize: '15px', fontWeight: '600', color: '#0F172A' }}>{faq.question}</span>
                <div style={{ flexShrink: 0, color: openFaq === faq.id ? '#4F46E5' : '#94A3B8', transition: 'transform 0.2s', transform: openFaq === faq.id ? 'rotate(180deg)' : 'none' }}>
                  <ChevronDown size={18} />
                </div>
              </button>
              {openFaq === faq.id && (
                <div style={{ padding: '0 20px 18px', fontSize: '14px', color: '#64748B', lineHeight: '1.7', borderTop: '1px solid #F1F5F9', paddingTop: '14px' }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelInsurance;