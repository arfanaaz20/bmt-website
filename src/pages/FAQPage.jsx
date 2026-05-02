// import React, { useState } from 'react';
// import {
//   Search,
//   Ticket,
//   DollarSign,
//   Bus,
//   CreditCard,
//   User,
//   MessageCircle,
//   Clock,
//   CheckCircle,
//   XCircle,
//   HelpCircle,
//   Phone,
//   Mail,
//   ChevronDown,
//   Tag,
//   BarChart3,
//   Award,
//   Shield,
//   BookOpen,
//   TrendingUp,
//   ArrowRight,
//   Sparkles
// } from 'lucide-react';

// const FAQPage = () => {
//   const [activeCategory, setActiveCategory] = useState('booking');
//   const [expandedQuestions, setExpandedQuestions] = useState({});
//   const [searchQuery, setSearchQuery] = useState('');

//   const faqCategories = [
//     { id: 'booking', name: 'Booking & Tickets', icon: Ticket, color: 'text-blue-600' },
//     { id: 'cancellation', name: 'Cancellation & Refund', icon: DollarSign, color: 'text-emerald-600' },
//     { id: 'travel', name: 'Travel & Boarding', icon: Bus, color: 'text-amber-600' },
//     { id: 'payment', name: 'Payment', icon: CreditCard, color: 'text-purple-600' },
//     { id: 'account', name: 'Account', icon: User, color: 'text-rose-600' }
//   ];

//   const faqData = {
//     booking: [
//       {
//         id: 1,
//         question: 'How can I book a bus ticket?',
//         answer: 'You can book a bus ticket by entering your source and destination, selecting a date, choosing your preferred bus, and selecting seats. Complete the payment to confirm your booking. You\'ll receive a confirmation email and SMS with your ticket details.',
//         tags: ['booking', 'process']
//       },
//       {
//         id: 2,
//         question: 'Can I book tickets for someone else?',
//         answer: 'Yes, you can book tickets for friends or family. During the booking process, enter the passenger details of the person who will be traveling. The ticket will be issued in their name.',
//         tags: ['booking', 'passenger']
//       },
//       {
//         id: 3,
//         question: 'How do I get my ticket after booking?',
//         answer: 'After successful booking, you will receive an e-ticket via email and SMS. You can also download your ticket from the "My Bookings" section in your account. No physical ticket is required.',
//         tags: ['ticket', 'confirmation']
//       },
//       {
//         id: 4,
//         question: 'Is it mandatory to take a printout of the ticket?',
//         answer: 'No, you can show the e-ticket on your mobile device at the time of boarding. However, we recommend carrying a printout as backup.',
//         tags: ['ticket', 'boarding']
//       }
//     ],
//     cancellation: [
//       {
//         id: 5,
//         question: 'What is your cancellation policy?',
//         answer: 'Cancellation charges vary based on when you cancel:\n• More than 48 hours before departure: 75% refund\n• 24-48 hours before departure: 50% refund\n• Less than 24 hours: No refund\n• No-show: No refund',
//         tags: ['cancellation', 'refund', 'policy']
//       },
//       {
//         id: 6,
//         question: 'How do I cancel my booking?',
//         answer: 'Go to "My Bookings", select the trip you want to cancel, and click on "Cancel Booking". Follow the instructions to complete the cancellation process. Refund will be processed to your original payment method.',
//         tags: ['cancellation', 'process']
//       },
//       {
//         id: 7,
//         question: 'How long does refund take?',
//         answer: 'Refunds are typically processed within 5-7 business days. The time for the amount to reflect in your account depends on your bank/payment method. UPI payments usually reflect within 24-48 hours.',
//         tags: ['refund', 'timeline']
//       },
//       {
//         id: 8,
//         question: 'Can I cancel only some passengers from my booking?',
//         answer: 'Yes, partial cancellation is allowed. You can cancel specific seats from your booking. Refund will be calculated based on the number of seats cancelled and the cancellation timing.',
//         tags: ['cancellation', 'partial']
//       }
//     ],
//     travel: [
//       {
//         id: 9,
//         question: 'When should I arrive at the boarding point?',
//         answer: 'Please arrive at the boarding point at least 15-20 minutes before the scheduled departure time. Buses usually depart exactly on time and may not wait for late passengers.',
//         tags: ['boarding', 'timing']
//       },
//       {
//         id: 10,
//         question: 'What documents do I need for boarding?',
//         answer: 'You need to show your e-ticket (mobile or print) and a valid government ID proof (Aadhar card, Driving License, Passport, or Voter ID) matching the passenger name on the ticket.',
//         tags: ['boarding', 'documents']
//       },
//       {
//         id: 11,
//         question: 'What if my bus is delayed?',
//         answer: 'You can track your bus in real-time through the "Track Bus" option in your booking. If the delay exceeds 30 minutes, you\'re eligible for compensation as per our on-time guarantee policy.',
//         tags: ['delay', 'tracking']
//       },
//       {
//         id: 12,
//         question: 'Can I change my boarding point?',
//         answer: 'Boarding point changes can be requested up to 6 hours before departure through the "Amend Booking" option. Additional charges may apply based on availability.',
//         tags: ['boarding', 'amendment']
//       }
//     ],
//     payment: [
//       {
//         id: 13,
//         question: 'What payment methods do you accept?',
//         answer: 'We accept all major payment methods including Credit/Debit Cards, UPI (Google Pay, PhonePe, Paytm), Net Banking, and Wallets. All payments are processed securely.',
//         tags: ['payment', 'methods']
//       },
//       {
//         id: 14,
//         question: 'Is it safe to pay online?',
//         answer: 'Yes, we use industry-standard 256-bit SSL encryption for all transactions. We are PCI DSS compliant and never store your card details.',
//         tags: ['payment', 'security']
//       },
//       {
//         id: 15,
//         question: 'Why was my payment deducted but booking not confirmed?',
//         answer: 'This rarely happens due to network issues. The amount will be automatically refunded within 24 hours. If not received, please contact our support team with the transaction ID.',
//         tags: ['payment', 'failure']
//       }
//     ],
//     account: [
//       {
//         id: 16,
//         question: 'How do I create an account?',
//         answer: 'Click on "Sign Up" and enter your email or mobile number. You can also sign up using Google or Facebook. After verification, your account will be created.',
//         tags: ['account', 'registration']
//       },
//       {
//         id: 17,
//         question: 'I forgot my password. How can I reset it?',
//         answer: 'Click on "Forgot Password" on the login page. Enter your registered email address. You will receive a password reset link. Follow the instructions to set a new password.',
//         tags: ['account', 'password']
//       },
//       {
//         id: 18,
//         question: 'How do I update my profile information?',
//         answer: 'Go to "My Account" → "Profile Settings". You can update your name, email, phone number, and other details. Save the changes after updating.',
//         tags: ['account', 'profile']
//       }
//     ]
//   };

//   const toggleQuestion = (questionId) => {
//     setExpandedQuestions(prev => ({
//       ...prev,
//       [questionId]: !prev[questionId]
//     }));
//   };

//   const filteredFAQs = () => {
//     let questions = faqData[activeCategory] || [];
    
//     if (searchQuery.trim()) {
//       questions = questions.filter(
//         q => 
//           q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           q.tags.some(tag => tag.includes(searchQuery.toLowerCase()))
//       );
//     }
    
//     return questions;
//   };

//   const getCategoryIcon = (categoryId) => {
//     const category = faqCategories.find(c => c.id === categoryId);
//     return category ? <category.icon className={`w-5 h-5 ${category.color}`} /> : null;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
//         <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-6">
//               <HelpCircle className="w-6 h-6 mr-2" />
//               <span className="text-sm font-medium">24/7 Support Available</span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               How can we help you?
//             </h1>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
//               Find answers to commonly asked questions about bus bookings, cancellations, payments, and more.
//             </p>
            
//             {/* Search Bar - Hero */}
//             <div className="max-w-3xl mx-auto">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search for answers (e.g., cancellation, refund, booking)..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-14 pr-6 py-5 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:outline-none focus:border-white focus:bg-white/20 text-lg transition-all"
//                 />
//                 <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-blue-200" />
//                 {searchQuery && (
//                   <button 
//                     onClick={() => setSearchQuery('')}
//                     className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
//                   >
//                     <XCircle className="w-5 h-5 text-blue-200" />
//                   </button>
//                 )}
//               </div>
//               <div className="flex items-center justify-center gap-4 mt-4 text-sm text-blue-100">
//                 <span>Popular:</span>
//                 {['Cancellation', 'Refund', 'Boarding', 'Payment'].map((term, i) => (
//                   <button 
//                     key={i}
//                     onClick={() => setSearchQuery(term)}
//                     className="px-3 py-1 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
//                   >
//                     {term}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Wave Divider */}
//         <div className="relative h-16">
//           <svg className="absolute bottom-0 w-full h-16 text-gray-50 fill-current" preserveAspectRatio="none" viewBox="0 0 1440 54">
//             <path d="M0 22L120 16.7C240 11 480 1 720 7.7C960 14 1200 38 1320 50L1440 62V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z" />
//           </svg>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="flex flex-col lg:flex-row lg:space-x-8">
//           {/* Sidebar Categories */}
//           <div className="w-full lg:w-80 mb-8 lg:mb-0">
//             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="font-bold text-xl text-gray-800 flex items-center">
//                   <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
//                   Categories
//                 </h3>
//                 <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
//                   {Object.values(faqData).flat().length} total
//                 </span>
//               </div>
              
//               <div className="space-y-2">
//                 {faqCategories.map((category) => {
//                   const Icon = category.icon;
//                   const isActive = activeCategory === category.id;
//                   return (
//                     <button
//                       key={category.id}
//                       onClick={() => setActiveCategory(category.id)}
//                       className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${
//                         isActive
//                           ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200 shadow-sm'
//                           : 'hover:bg-gray-50 text-gray-700 border border-transparent'
//                       }`}
//                     >
//                       <div className={`p-2 rounded-lg ${isActive ? 'bg-white shadow-sm' : 'bg-gray-100'} mr-3`}>
//                         <Icon className={`w-5 h-5 ${category.color}`} />
//                       </div>
//                       <span className="font-medium flex-1 text-left">{category.name}</span>
//                       <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
//                         isActive 
//                           ? 'bg-white text-blue-600' 
//                           : 'bg-gray-100 text-gray-600'
//                       }`}>
//                         {faqData[category.id]?.length || 0}
//                       </span>
//                       {isActive && (
//                         <ArrowRight className="w-4 h-4 ml-2 text-blue-600" />
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>

             

//               {/* Quick Stats - Redesigned */}
//               <div className="mt-6 p-5 bg-gray-50 rounded-xl border border-gray-100">
//                 <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
//                   <BarChart3 className="w-4 h-4 mr-2 text-blue-600" />
//                   FAQ Insights
//                 </h4>
//                 <div className="space-y-3">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-gray-600 flex items-center">
//                       <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
//                       Resolution Rate
//                     </span>
//                     <span className="font-bold text-green-600">98%</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-gray-600 flex items-center">
//                       <Clock className="w-4 h-4 mr-2 text-amber-500" />
//                       Avg. Response
//                     </span>
//                     <span className="font-bold text-amber-600">&lt; 2 hrs</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-gray-600 flex items-center">
//                       <Award className="w-4 h-4 mr-2 text-purple-500" />
//                       Satisfaction
//                     </span>
//                     <span className="font-bold text-purple-600">4.8/5</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content - FAQ List */}
//           <div className="flex-1">
//             {/* Category Header */}
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-3">
//                 {/* <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg shadow-blue-200">
//                   {getCategoryIcon(activeCategory)}
//                 </div> */}
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-800">
//                     {faqCategories.find(c => c.id === activeCategory)?.name}
//                   </h2>
//                   <p className="text-sm text-gray-500 mt-1">
//                     {filteredFAQs().length} {filteredFAQs().length === 1 ? 'answer' : 'answers'} available
//                   </p>
//                 </div>
//               </div>
              
//               {searchQuery && (
//                 <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
//                   Search: "{searchQuery}"
//                 </div>
//               )}
//             </div>

//             {/* FAQ Accordion */}
//             <div className="space-y-4">
//               {filteredFAQs().map((faq, index) => (
//                 <div
//                   key={faq.id}
//                   className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
//                   style={{ animationDelay: `${index * 50}ms` }}
//                 >
//                   <button
//                     onClick={() => toggleQuestion(faq.id)}
//                     className="w-full p-6 text-left"
//                   >
//                     <div className="flex items-start justify-between">
//                       <div className="flex-1 pr-8">
//                         <div className="flex items-center gap-3 mb-2">
//                           <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
//                             FAQ
//                           </span>
//                           {faq.tags.slice(0, 1).map((tag, i) => (
//                             <span
//                               key={i}
//                               className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs flex items-center"
//                             >
//                               <Tag className="w-3 h-3 mr-1" />
//                               {tag}
//                             </span>
//                           ))}
//                         </div>
//                         <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
//                           {faq.question}
//                         </h3>
//                         {expandedQuestions[faq.id] && (
//                           <div className="mt-4 text-gray-600 whitespace-pre-line bg-gray-50 p-4 rounded-xl border border-gray-100">
//                             {faq.answer}
//                           </div>
//                         )}
//                       </div>
//                       <div className="flex flex-col items-end">
//                         <div className={`p-2 rounded-full transition-all ${
//                           expandedQuestions[faq.id] 
//                             ? 'bg-blue-100 text-blue-600 rotate-180' 
//                             : 'bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600'
//                         }`}>
//                           <ChevronDown className="w-5 h-5" />
//                         </div>
//                       </div>
//                     </div>
//                   </button>
//                 </div>
//               ))}

//               {/* No Results - Redesigned */}
//               {filteredFAQs().length === 0 && (
//                 <div className="bg-white rounded-2xl border border-gray-200 p-16 text-center">
//                   <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-6">
//                     <Search className="w-10 h-10 text-blue-600" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">No results found</h3>
//                   <p className="text-gray-500 mb-6 max-w-md mx-auto">
//                     We couldn't find any questions matching "{searchQuery}". Try adjusting your search or browse other categories.
//                   </p>
//                   <button
//                     onClick={() => {
//                       setSearchQuery('');
//                       setActiveCategory('booking');
//                     }}
//                     className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
//                   >
//                     <Sparkles className="w-4 h-4" />
//                     Clear Search
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Popular Topics - Enhanced */}
//             {!searchQuery && filteredFAQs().length > 0 && (
//               <div className="mt-12">
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-xl font-bold text-gray-800 flex items-center">
//                     <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
//                     Popular Topics
//                   </h3>
//                   <span className="text-sm text-gray-500">Most searched questions</span>
//                 </div>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   {[
//                     { name: 'Cancellation', icon: XCircle, color: 'text-red-500', bg: 'bg-red-50' },
//                     { name: 'Refund Timeline', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50' },
//                     { name: 'Boarding Points', icon: Bus, color: 'text-green-500', bg: 'bg-green-50' },
//                     { name: 'Payment Issues', icon: CreditCard, color: 'text-purple-500', bg: 'bg-purple-50' }
//                   ].map((topic, i) => {
//                     const Icon = topic.icon;
//                     return (
//                       <button
//                         key={i}
//                         onClick={() => setSearchQuery(topic.name)}
//                         className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center"
//                       >
//                         <div className={`inline-flex p-3 ${topic.bg} rounded-xl mb-3 group-hover:scale-110 transition-transform`}>
//                           <Icon className={`w-5 h-5 ${topic.color}`} />
//                         </div>
//                         <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
//                           {topic.name}
//                         </span>
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}

//             {/* Help Footer */}
//             <div className="mt-12 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-white">
//               <div className="flex flex-col md:flex-row items-center justify-between">
//                 <div className="flex items-center gap-4 mb-4 md:mb-0">
//                   <div className="p-3 bg-white/10 rounded-xl">
//                     <Shield className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-lg mb-1">Still need assistance?</h4>
//                     <p className="text-gray-300 text-sm">Our support team is ready to help 24/7</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-3">
//                   <button className="px-6 py-3 bg-white text-gray-900 rounded-xl font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
//                     <MessageCircle className="w-4 h-4" />
//                     Live Chat
//                   </button>
//                   <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
//                     <Phone className="w-4 h-4" />
//                     Call Now
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Footer Note */}
//             <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-200 pt-8">
//               <p className="flex items-center justify-center gap-2">
//                 <Clock className="w-4 h-4" />
//                 Last updated: February 2024 • Available 24/7, 365 days
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQPage;















import React, { useState } from 'react';

const data = {
  booking: [
    { id: 1, q: 'How can I book a bus ticket?', a: 'Enter source and destination, select a date, choose your preferred bus, and pick seats. Complete payment to confirm. A confirmation email and SMS will be sent with your ticket details.', tags: ['booking', 'process'] },
    { id: 2, q: 'Can I book tickets for someone else?', a: 'Yes. During booking, enter the passenger details of the person travelling. The ticket will be issued in their name.', tags: ['booking', 'passenger'] },
    { id: 3, q: 'How do I get my ticket after booking?', a: 'After successful booking, you will receive an e-ticket via email and SMS. You can also download it from the "My Bookings" section. No physical ticket required.', tags: ['ticket', 'confirmation'] },
    { id: 4, q: 'Is it mandatory to take a printout?', a: 'No, you can show the e-ticket on your mobile at boarding. However, carrying a printout as backup is recommended.', tags: ['ticket', 'boarding'] }
  ],
  cancellation: [
    { id: 5, q: 'What is your cancellation policy?', a: '• More than 48 hrs before departure → 75% refund\n• 24–48 hrs before departure → 50% refund\n• Less than 24 hrs → No refund\n• No-show → No refund', tags: ['cancellation', 'policy'] },
    { id: 6, q: 'How do I cancel my booking?', a: 'Go to "My Bookings", select the trip, and click "Cancel Booking". Follow the steps. Refund will be processed to your original payment method.', tags: ['cancellation', 'process'] },
    { id: 7, q: 'How long does a refund take?', a: 'Refunds are processed within 5–7 business days. UPI payments usually reflect within 24–48 hours depending on your bank.', tags: ['refund', 'timeline'] },
    { id: 8, q: 'Can I cancel only some passengers?', a: 'Yes, partial cancellation is allowed. You can cancel specific seats. Refund is calculated based on seats cancelled and timing.', tags: ['cancellation', 'partial'] }
  ],
  travel: [
    { id: 9, q: 'When should I arrive at the boarding point?', a: 'Arrive at least 15–20 minutes before scheduled departure. Buses depart on time and may not wait for late passengers.', tags: ['boarding', 'timing'] },
    { id: 10, q: 'What documents do I need for boarding?', a: 'Show your e-ticket (on mobile or printed) and a valid government ID — Aadhaar, Driving Licence, Passport, or Voter ID — matching the passenger name on the ticket.', tags: ['boarding', 'documents'] },
    { id: 11, q: 'What if my bus is delayed?', a: 'Track your bus in real-time via the "Track Bus" option in your booking. If the delay exceeds 30 minutes, you are eligible for compensation per our on-time guarantee.', tags: ['delay', 'tracking'] },
    { id: 12, q: 'Can I change my boarding point?', a: 'Boarding point changes can be requested up to 6 hours before departure via "Amend Booking". Additional charges may apply.', tags: ['boarding', 'amendment'] }
  ],
  payment: [
    { id: 13, q: 'What payment methods do you accept?', a: 'We accept Credit/Debit Cards, UPI (Google Pay, PhonePe, Paytm), Net Banking, and Wallets. All payments are processed securely.', tags: ['payment', 'methods'] },
    { id: 14, q: 'Is it safe to pay online?', a: 'Yes. We use 256-bit SSL encryption for all transactions and are PCI DSS compliant. We never store your card details.', tags: ['payment', 'security'] },
    { id: 15, q: 'Payment deducted but booking not confirmed?', a: 'This may happen due to network issues. The amount is automatically refunded within 24 hours. If not received, contact support with your transaction ID.', tags: ['payment', 'failure'] }
  ],
  account: [
    { id: 16, q: 'How do I create an account?', a: 'Click "Sign Up" and enter your email or mobile number. You can also sign up via Google or Facebook. After verification, your account is ready.', tags: ['account', 'registration'] },
    { id: 17, q: 'How do I reset my password?', a: 'Click "Forgot Password" on the login page. Enter your registered email. A reset link will be sent — follow the instructions to set a new password.', tags: ['account', 'password'] },
    { id: 18, q: 'How do I update my profile?', a: 'Go to "My Account" → "Profile Settings". Update your name, email, phone number, or other details and save.', tags: ['account', 'profile'] }
  ]
};

const catNames = {
  booking: 'Booking & Tickets',
  cancellation: 'Cancellation & Refund',
  travel: 'Travel & Boarding',
  payment: 'Payment',
  account: 'Account'
};

const catIcons = {
  booking: '🎫',
  cancellation: '💸',
  travel: '🚌',
  payment: '💳',
  account: '👤'
};

const ChevronDown = ({ open }) => (
  <svg
    style={{
      width: 18, height: 18, flexShrink: 0, marginTop: 2,
      color: open ? '#2563eb' : '#9ca3af',
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.2s'
    }}
    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const SearchIcon = () => (
  <svg style={{ width: 16, height: 16, position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}
    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export default function FAQPage() {
  const [activeCat, setActiveCat] = useState('booking');
  const [openIds, setOpenIds] = useState(new Set());
  const [search, setSearch] = useState('');

  const toggleItem = (id) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleCatChange = (cat) => {
    setActiveCat(cat);
    setOpenIds(new Set());
  };

  const getFiltered = () => {
    const q = search.toLowerCase().trim();
    const items = data[activeCat] || [];
    if (!q) return items;
    return items.filter(f =>
      f.q.toLowerCase().includes(q) ||
      f.a.toLowerCase().includes(q) ||
      f.tags.some(t => t.includes(q))
    );
  };

  const filtered = getFiltered();

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb', fontFamily: 'system-ui, sans-serif' }}>

      {/* Hero */}
      <div style={{ background: '#eff6ff', padding: '2rem 1.5rem 2.5rem', textAlign: 'center', borderRadius: '0 0 16px 16px' }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: '#1d4ed8', marginBottom: 6 }}>
          How can we help you?
        </h1>
        <p style={{ fontSize: 14, color: '#6b7280', marginBottom: '1.25rem' }}>
          Find answers about bookings, cancellations, payments & more
        </p>

        {/* Search */}
        <div style={{ position: 'relative', maxWidth: 520, margin: '0 auto' }}>
          <SearchIcon />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search questions… e.g. refund, boarding"
            style={{
              width: '100%', padding: '10px 36px 10px 34px',
              borderRadius: 10, border: '1px solid #bfdbfe',
              background: '#fff', fontSize: 14, outline: 'none',
              boxSizing: 'border-box'
            }}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              style={{
                position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
                background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, color: '#9ca3af', padding: 0
              }}
            >×</button>
          )}
        </div>

        {/* Popular chips */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center', marginTop: 10 }}>
          {['Cancellation', 'Refund', 'Boarding', 'Payment'].map(term => (
            <button
              key={term}
              onClick={() => setSearch(term)}
              style={{
                padding: '4px 12px', borderRadius: 999,
                border: '1px solid #bfdbfe', background: '#fff',
                fontSize: 12, color: '#2563eb', cursor: 'pointer'
              }}
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* Layout */}
      <div style={{
        display: 'grid', gridTemplateColumns: '220px 1fr',
        gap: '1rem', padding: '1.25rem',
        maxWidth: 900, margin: '0 auto'
      }}>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Categories */}
          <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1rem' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#9ca3af', letterSpacing: '.5px', textTransform: 'uppercase', marginBottom: 10 }}>
              Categories
            </div>
            {Object.keys(catNames).map(cat => {
              const isActive = activeCat === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCatChange(cat)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: 8,
                    padding: '8px 10px', borderRadius: 8, border: 'none',
                    background: isActive ? '#eff6ff' : 'transparent',
                    cursor: 'pointer', fontSize: 13,
                    color: isActive ? '#1d4ed8' : '#374151',
                    textAlign: 'left', marginBottom: 2
                  }}
                >
                  <span style={{ fontSize: 14, width: 20, textAlign: 'center' }}>{catIcons[cat]}</span>
                  <span style={{ flex: 1 }}>{catNames[cat]}</span>
                  <span style={{
                    fontSize: 11, padding: '2px 7px', borderRadius: 999,
                    background: isActive ? '#fff' : '#f3f4f6',
                    color: isActive ? '#2563eb' : '#6b7280'
                  }}>
                    {data[cat].length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Stats */}
          <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1rem' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#9ca3af', letterSpacing: '.5px', textTransform: 'uppercase', marginBottom: 10 }}>
              Support stats
            </div>
            {[
              { label: 'Resolution rate', val: '98%', color: '#16a34a' },
              { label: 'Avg. response', val: '< 2 hrs', color: '#d97706' },
              { label: 'Satisfaction', val: '4.8 / 5', color: '#2563eb' }
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0', borderBottom: '1px solid #f3f4f6', fontSize: 12 }}>
                <span style={{ color: '#6b7280' }}>{s.label}</span>
                <span style={{ fontWeight: 600, color: s.color }}>{s.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <span style={{ fontSize: 18, fontWeight: 600 }}>{catNames[activeCat]}</span>
            <span style={{ fontSize: 12, color: '#6b7280', background: '#f3f4f6', padding: '3px 10px', borderRadius: 999 }}>
              {filtered.length} {filtered.length === 1 ? 'answer' : 'answers'}
            </span>
          </div>

          {/* FAQ Items */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#6b7280', fontSize: 14, background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb' }}>
              <p style={{ fontSize: 32, marginBottom: 8 }}>🔍</p>
              <p style={{ fontWeight: 500, marginBottom: 4 }}>No results found</p>
              <p style={{ fontSize: 12 }}>Try a different search term or browse another category.</p>
              <button
                onClick={() => setSearch('')}
                style={{ marginTop: 12, padding: '7px 16px', borderRadius: 8, border: '1px solid #bfdbfe', background: '#eff6ff', color: '#2563eb', fontSize: 13, cursor: 'pointer' }}
              >
                Clear search
              </button>
            </div>
          ) : (
            filtered.map(faq => {
              const isOpen = openIds.has(faq.id);
              return (
                <div
                  key={faq.id}
                  style={{
                    background: '#fff',
                    border: `1px solid ${isOpen ? '#bfdbfe' : '#e5e7eb'}`,
                    borderRadius: 12,
                    marginBottom: 8,
                    overflow: 'hidden',
                    transition: 'border-color 0.2s'
                  }}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'flex-start',
                      justifyContent: 'space-between', gap: 12,
                      padding: '14px 16px', background: 'none', border: 'none',
                      cursor: 'pointer', textAlign: 'left'
                    }}
                  >
                    <span style={{ fontSize: 14, fontWeight: 500, color: isOpen ? '#1d4ed8' : '#111827', lineHeight: 1.5 }}>
                      {faq.q}
                    </span>
                    <ChevronDown open={isOpen} />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 16px 14px', borderTop: '1px solid #f3f4f6' }}>
                      <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', padding: '10px 0 8px' }}>
                        {faq.tags.map(t => (
                          <span key={t} style={{ fontSize: 11, padding: '2px 8px', borderRadius: 999, background: '#f3f4f6', color: '#6b7280' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <p style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.7, whiteSpace: 'pre-line', margin: 0 }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}

          {/* Help Footer */}
          <div style={{
            background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 12,
            padding: '1.25rem 1.5rem', display: 'flex',
            alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 12, marginTop: '1.25rem'
          }}>
            <div>
              <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 3 }}>Still need help?</p>
              <p style={{ fontSize: 12, color: '#6b7280' }}>Our support team is available 24/7</p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ padding: '7px 14px', borderRadius: 8, fontSize: 13, cursor: 'pointer', border: '1px solid #d1d5db', background: '#fff', color: '#374151' }}>
                💬 Live Chat
              </button>
              <button style={{ padding: '7px 14px', borderRadius: 8, fontSize: 13, cursor: 'pointer', border: '1px solid #bfdbfe', background: '#eff6ff', color: '#1d4ed8' }}>
                📞 Call Now
              </button>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: 11, color: '#9ca3af', marginTop: '1rem', paddingBottom: '1rem' }}>
            Last updated February 2024 • Available 24/7
          </p>
        </div>
      </div>
    </div>
  );
}






