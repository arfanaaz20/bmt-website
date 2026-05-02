// import React, { useState } from 'react';
// import { 
//   ArrowLeft,
//   User,
//   Calendar,
//   Flag,
//   Smartphone,
//   FileCheck,
//   UserPlus,
//   Info,
//   CheckCircle2,
//   ChevronRight,
//   ChevronDown,
//   X,
//   Mail,
//   Phone,
//   MapPin,
//   CreditCard,
//   Lock,
//   AlertCircle,
//   Download,
//   Shield,
//   Clock,
//   Globe,
//   Plane,
//   Luggage,
//   HeartPulse
// } from 'lucide-react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const TravelInsuranceBooking = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const selectedPlan = location.state?.selectedPlan;

//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     // Personal Details
//     fullName: '',
//     dob: '',
//     nationality: 'Indian',
//     visaType: 'Tourist/Visitor Visa',
//     passportNumber: '',
//     passportExpiry: '',
//     panNumber: '',
//     noPan: false,
//     email: '',
//     phoneNumber: '',
//     alternatePhone: '',
//     address: '',
//     city: '',
//     pincode: '',
    
//     // Nominee Details
//     nomineeName: '',
//     nomineeRelation: '',
//     nomineeDob: '',
    
//     // Medical Details
//     hasMedicalConditions: false,
//     medicalConditions: '',
//     isPregnant: false,
//     pregnancyWeeks: '',
    
//     // Payment Details
//     cardNumber: '',
//     cardName: '',
//     cardExpiry: '',
//     cardCvv: '',
//     saveCard: false
//   });

//   const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [acceptedTerms, setAcceptedTerms] = useState(false);

//   if (!selectedPlan) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//           <p className="text-gray-600 mb-4">No plan selected</p>
//           <button 
//             onClick={() => navigate('/travel-insurance')}
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
//           >
//             Back to Plans
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Get insurer specific styling
//   const getInsurerColors = () => {
//     switch(selectedPlan.insurerCode) {
//       case 'bajaj':
//         return {
//           primary: 'bg-blue-600',
//           primaryHover: 'hover:bg-blue-700',
//           secondary: 'bg-blue-50',
//           text: 'text-blue-700',
//           border: 'border-blue-200',
//           gradient: 'from-blue-50 to-indigo-50',
//           light: 'bg-blue-100'
//         };
//       case 'icici':
//         return {
//           primary: 'bg-red-600',
//           primaryHover: 'hover:bg-red-700',
//           secondary: 'bg-red-50',
//           text: 'text-red-700',
//           border: 'border-red-200',
//           gradient: 'from-red-50 to-orange-50',
//           light: 'bg-red-100'
//         };
//       case 'tata':
//         return {
//           primary: 'bg-purple-600',
//           primaryHover: 'hover:bg-purple-700',
//           secondary: 'bg-purple-50',
//           text: 'text-purple-700',
//           border: 'border-purple-200',
//           gradient: 'from-purple-50 to-pink-50',
//           light: 'bg-purple-100'
//         };
//       case 'reliance':
//         return {
//           primary: 'bg-green-600',
//           primaryHover: 'hover:bg-green-700',
//           secondary: 'bg-green-50',
//           text: 'text-green-700',
//           border: 'border-green-200',
//           gradient: 'from-green-50 to-emerald-50',
//           light: 'bg-green-100'
//         };
//       case 'care':
//         return {
//           primary: 'bg-amber-600',
//           primaryHover: 'hover:bg-amber-700',
//           secondary: 'bg-amber-50',
//           text: 'text-amber-700',
//           border: 'border-amber-200',
//           gradient: 'from-amber-50 to-yellow-50',
//           light: 'bg-amber-100'
//         };
//       default:
//         return {
//           primary: 'bg-blue-600',
//           primaryHover: 'hover:bg-blue-700',
//           secondary: 'bg-blue-50',
//           text: 'text-blue-700',
//           border: 'border-blue-200',
//           gradient: 'from-blue-50 to-indigo-50',
//           light: 'bg-blue-100'
//         };
//     }
//   };

//   const colors = getInsurerColors();

//   const steps = [
//     { id: 1, name: 'Personal Details', icon: User },
//     { id: 2, name: 'Nominee & Medical', icon: UserPlus },
//     { id: 3, name: 'Payment', icon: CreditCard }
//   ];

//   const validateStep = () => {
//     const newErrors = {};
    
//     if (currentStep === 1) {
//       if (!formData.fullName) newErrors.fullName = 'Full name is required';
//       if (!formData.dob) newErrors.dob = 'Date of birth is required';
//       if (!formData.passportNumber) newErrors.passportNumber = 'Passport number is required';
//       if (!formData.email) newErrors.email = 'Email is required';
//       else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//       if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
//       if (!formData.passportExpiry) newErrors.passportExpiry = 'Passport expiry date is required';
//     }
    
//     if (currentStep === 2) {
//       if (!formData.nomineeName) newErrors.nomineeName = 'Nominee name is required';
//       if (!formData.nomineeRelation) newErrors.nomineeRelation = 'Nominee relation is required';
//     }
    
//     if (currentStep === 3) {
//       if (!acceptedTerms) newErrors.terms = 'Please accept terms and conditions';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleNext = () => {
//     if (validateStep()) {
//       if (currentStep < 3) {
//         setCurrentStep(currentStep + 1);
//         window.scrollTo(0, 0);
//       } else {
//         setShowPaymentModal(true);
//       }
//     }
//   };

//   const handlePrevious = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//       window.scrollTo(0, 0);
//     }
//   };

//   const handlePayment = () => {
//     setShowPaymentModal(false);
//     setShowSuccessModal(true);
    
//     // Simulate payment processing
//     setTimeout(() => {
//       // Navigate to success page or show success state
//     }, 2000);
//   };

//   const calculateAge = (dob) => {
//     if (!dob) return '';
//     const today = new Date();
//     const birthDate = new Date(dob);
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
//     return age;
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <button 
//               onClick={() => navigate('/travel-insurance')}
//               className="flex items-center text-gray-600 hover:text-blue-600 transition"
//             >
//               <ArrowLeft className="w-4 h-4 mr-2" />
//               Back to plans
//             </button>
            
//             <div className="flex items-center text-sm text-gray-500">
//               <Lock className="w-4 h-4 mr-1" />
//               Secure Checkout
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Progress Bar */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex items-center justify-between">
//           {steps.map((step, index) => (
//             <div key={step.id} className="flex items-center flex-1">
//               <div className="flex items-center relative">
//                 <div className={`
//                   w-10 h-10 rounded-full flex items-center justify-center
//                   ${currentStep > step.id 
//                     ? 'bg-green-500 text-white' 
//                     : currentStep === step.id 
//                       ? `${colors.primary} text-white` 
//                       : 'bg-gray-200 text-gray-600'
//                   }
//                 `}>
//                   {currentStep > step.id ? (
//                     <CheckCircle2 className="w-5 h-5" />
//                   ) : (
//                     <step.icon className="w-5 h-5" />
//                   )}
//                 </div>
//                 <div className="ml-3 hidden sm:block">
//                   <p className="text-sm font-medium text-gray-900">{step.name}</p>
//                   <p className="text-xs text-gray-500">
//                     {step.id === 1 && 'Your information'}
//                     {step.id === 2 && 'Additional details'}
//                     {step.id === 3 && 'Complete payment'}
//                   </p>
//                 </div>
//               </div>
//               {index < steps.length - 1 && (
//                 <div className={`
//                   flex-1 h-1 mx-4 rounded
//                   ${currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'}
//                 `} />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Left Column - Forms */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Insurer Banner */}
//             <div className={`bg-gradient-to-r ${colors.gradient} ${colors.border} border rounded-xl p-6`}>
//               <div className="flex items-center justify-between">
//                 <div>
//                   <span className={`text-xs font-semibold ${colors.text} bg-white px-3 py-1 rounded-full`}>
//                     {selectedPlan.insurer}
//                   </span>
//                   <h1 className="text-2xl font-bold text-gray-900 mt-4">{selectedPlan.name}</h1>
//                   <p className="text-gray-600 mt-2">
//                     Over 1 lakh+ travellers already trusted {selectedPlan.insurer} in 2025 for protection abroad.
//                   </p>
//                 </div>
//                 <div className="hidden sm:block">
//                   <div className={`w-16 h-16 ${colors.primary} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
//                     {selectedPlan.insurer.charAt(0)}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Step 1: Personal Details */}
//             {currentStep === 1 && (
//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                 <div className="flex items-center mb-6">
//                   <div className={`${colors.light} p-2 rounded-lg`}>
//                     <User className={`w-5 h-5 ${colors.text}`} />
//                   </div>
//                   <h2 className="text-lg font-semibold text-gray-900 ml-3">
//                     Personal Details
//                   </h2>
//                 </div>

//                 <div className="space-y-5">
//                   {/* Full Name */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Full name (as on passport) <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                         errors.fullName ? 'border-red-500' : 'border-gray-300'
//                       }`}
//                       placeholder="Enter your full name"
//                       value={formData.fullName}
//                       onChange={(e) => setFormData({...formData, fullName: e.target.value})}
//                     />
//                     {errors.fullName && (
//                       <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
//                     )}
//                   </div>

//                   {/* Date of Birth & Age */}
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Date of birth <span className="text-red-500">*</span>
//                       </label>
//                       <div className="relative">
//                         <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                         <input
//                           type="date"
//                           className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                             errors.dob ? 'border-red-500' : 'border-gray-300'
//                           }`}
//                           value={formData.dob}
//                           onChange={(e) => setFormData({...formData, dob: e.target.value})}
//                         />
//                       </div>
//                       {errors.dob && (
//                         <p className="text-xs text-red-500 mt-1">{errors.dob}</p>
//                       )}
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Age
//                       </label>
//                       <input
//                         type="text"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
//                         placeholder="Auto-calculated"
//                         value={calculateAge(formData.dob) || ''}
//                         readOnly
//                         disabled
//                       />
//                     </div>
//                   </div>

//                   {/* Nationality & Visa Type */}
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Nationality
//                       </label>
//                       <div className="relative">
//                         <Flag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                         <select 
//                           className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
//                           value={formData.nationality}
//                           onChange={(e) => setFormData({...formData, nationality: e.target.value})}
//                         >
//                           <option>Indian</option>
//                           <option>Other</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Visa type
//                       </label>
//                       <select 
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         value={formData.visaType}
//                         onChange={(e) => setFormData({...formData, visaType: e.target.value})}
//                       >
//                         <option>Tourist/Visitor Visa</option>
//                         <option>Business Visa</option>
//                         <option>Student Visa</option>
//                         <option>Employment Visa</option>
//                         <option>Medical Visa</option>
//                       </select>
//                     </div>
//                   </div>

//                   {/* Passport Details */}
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <div className="flex justify-between items-center mb-1">
//                         <label className="block text-sm font-medium text-gray-700">
//                           Passport number <span className="text-red-500">*</span>
//                         </label>
//                         <button 
//                           onClick={() => setShowWhatsAppModal(true)}
//                           className="flex items-center text-sm text-green-600 hover:text-green-700"
//                         >
//                           <Smartphone className="w-4 h-4 mr-1" />
//                           Don't remember?
//                         </button>
//                       </div>
//                       <input
//                         type="text"
//                         className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                           errors.passportNumber ? 'border-red-500' : 'border-gray-300'
//                         }`}
//                         placeholder="Enter passport number"
//                         value={formData.passportNumber}
//                         onChange={(e) => setFormData({...formData, passportNumber: e.target.value.toUpperCase()})}
//                       />
//                       {errors.passportNumber && (
//                         <p className="text-xs text-red-500 mt-1">{errors.passportNumber}</p>
//                       )}
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Passport expiry <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="date"
//                         className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                           errors.passportExpiry ? 'border-red-500' : 'border-gray-300'
//                         }`}
//                         value={formData.passportExpiry}
//                         onChange={(e) => setFormData({...formData, passportExpiry: e.target.value})}
//                       />
//                       {errors.passportExpiry && (
//                         <p className="text-xs text-red-500 mt-1">{errors.passportExpiry}</p>
//                       )}
//                     </div>
//                   </div>

//                   {/* PAN Number */}
//                   <div>
//                     <div className="flex items-center mb-1">
//                       <label className="block text-sm font-medium text-gray-700 mr-4">
//                         PAN number
//                       </label>
//                       <label className="flex items-center text-sm text-gray-600">
//                         <input
//                           type="checkbox"
//                           className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                           checked={formData.noPan}
//                           onChange={(e) => setFormData({...formData, noPan: e.target.checked})}
//                         />
//                         I don't have a PAN card
//                       </label>
//                     </div>
//                     <input
//                       type="text"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="Enter PAN number"
//                       disabled={formData.noPan}
//                       value={formData.panNumber}
//                       onChange={(e) => setFormData({...formData, panNumber: e.target.value.toUpperCase()})}
//                     />
//                   </div>

//                   {/* Contact Details */}
//                   <div className="pt-4 border-t border-gray-200">
//                     <h3 className="text-md font-medium text-gray-900 mb-4">Contact Details</h3>
                    
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           Email <span className="text-red-500">*</span>
//                         </label>
//                         <div className="relative">
//                           <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                           <input
//                             type="email"
//                             className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                               errors.email ? 'border-red-500' : 'border-gray-300'
//                             }`}
//                             placeholder="your@email.com"
//                             value={formData.email}
//                             onChange={(e) => setFormData({...formData, email: e.target.value})}
//                           />
//                         </div>
//                         {errors.email && (
//                           <p className="text-xs text-red-500 mt-1">{errors.email}</p>
//                         )}
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           Phone number <span className="text-red-500">*</span>
//                         </label>
//                         <div className="relative">
//                           <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                           <input
//                             type="tel"
//                             className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                               errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
//                             }`}
//                             placeholder="10-digit mobile number"
//                             value={formData.phoneNumber}
//                             onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
//                           />
//                         </div>
//                         {errors.phoneNumber && (
//                           <p className="text-xs text-red-500 mt-1">{errors.phoneNumber}</p>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Address */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Residential address
//                     </label>
//                     <div className="relative">
//                       <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                       <input
//                         type="text"
//                         className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="Enter your address"
//                         value={formData.address}
//                         onChange={(e) => setFormData({...formData, address: e.target.value})}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Step 2: Nominee & Medical Details */}
//             {currentStep === 2 && (
//               <div className="space-y-6">
//                 {/* Nominee Details */}
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                   <div className="flex items-center mb-6">
//                     <div className="bg-purple-100 p-2 rounded-lg">
//                       <UserPlus className="w-5 h-5 text-purple-600" />
//                     </div>
//                     <h2 className="text-lg font-semibold text-gray-900 ml-3">
//                       Nominee Details
//                     </h2>
//                   </div>

//                   <div className="space-y-5">
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           Nominee full name <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                             errors.nomineeName ? 'border-red-500' : 'border-gray-300'
//                           }`}
//                           placeholder="Enter nominee name"
//                           value={formData.nomineeName}
//                           onChange={(e) => setFormData({...formData, nomineeName: e.target.value})}
//                         />
//                         {errors.nomineeName && (
//                           <p className="text-xs text-red-500 mt-1">{errors.nomineeName}</p>
//                         )}
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           Nominee relation <span className="text-red-500">*</span>
//                         </label>
//                         <select 
//                           className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                             errors.nomineeRelation ? 'border-red-500' : 'border-gray-300'
//                           }`}
//                           value={formData.nomineeRelation}
//                           onChange={(e) => setFormData({...formData, nomineeRelation: e.target.value})}
//                         >
//                           <option value="">Select relation</option>
//                           <option>Spouse</option>
//                           <option>Parent</option>
//                           <option>Child</option>
//                           <option>Sibling</option>
//                           <option>Grandparent</option>
//                           <option>Other</option>
//                         </select>
//                         {errors.nomineeRelation && (
//                           <p className="text-xs text-red-500 mt-1">{errors.nomineeRelation}</p>
//                         )}
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Nominee date of birth
//                       </label>
//                       <input
//                         type="date"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         value={formData.nomineeDob}
//                         onChange={(e) => setFormData({...formData, nomineeDob: e.target.value})}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Medical Details */}
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                   <div className="flex items-center mb-6">
//                     <div className="bg-pink-100 p-2 rounded-lg">
//                       <HeartPulse className="w-5 h-5 text-pink-600" />
//                     </div>
//                     <h2 className="text-lg font-semibold text-gray-900 ml-3">
//                       Medical Information
//                     </h2>
//                   </div>

//                   <div className="space-y-5">
//                     <div>
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                           checked={formData.hasMedicalConditions}
//                           onChange={(e) => setFormData({...formData, hasMedicalConditions: e.target.checked})}
//                         />
//                         <span className="text-sm text-gray-700">
//                           Do you have any pre-existing medical conditions?
//                         </span>
//                       </label>
//                     </div>

//                     {formData.hasMedicalConditions && (
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           Please specify medical conditions
//                         </label>
//                         <textarea
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                           rows="3"
//                           placeholder="List all pre-existing medical conditions"
//                           value={formData.medicalConditions}
//                           onChange={(e) => setFormData({...formData, medicalConditions: e.target.value})}
//                         />
//                       </div>
//                     )}

//                     <div>
//                       <label className="flex items-center">
//                         <input
//                           type="checkbox"
//                           className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                           checked={formData.isPregnant}
//                           onChange={(e) => setFormData({...formData, isPregnant: e.target.checked})}
//                         />
//                         <span className="text-sm text-gray-700">
//                           Are you currently pregnant?
//                         </span>
//                       </label>
//                     </div>

//                     {formData.isPregnant && (
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           Weeks of pregnancy
//                         </label>
//                         <input
//                           type="number"
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                           placeholder="Enter weeks"
//                           min="1"
//                           max="40"
//                           value={formData.pregnancyWeeks}
//                           onChange={(e) => setFormData({...formData, pregnancyWeeks: e.target.value})}
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Step 3: Payment */}
//             {currentStep === 3 && (
//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                 <div className="flex items-center mb-6">
//                   <div className="bg-green-100 p-2 rounded-lg">
//                     <CreditCard className="w-5 h-5 text-green-600" />
//                   </div>
//                   <h2 className="text-lg font-semibold text-gray-900 ml-3">
//                     Payment Details
//                   </h2>
//                 </div>

//                 <div className="space-y-5">
//                   {/* Card Number */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Card number
//                     </label>
//                     <div className="relative">
//                       <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                       <input
//                         type="text"
//                         className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="1234 5678 9012 3456"
//                         maxLength="19"
//                         value={formData.cardNumber}
//                         onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
//                       />
//                     </div>
//                   </div>

//                   {/* Card Holder Name */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Card holder name
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="As on card"
//                       value={formData.cardName}
//                       onChange={(e) => setFormData({...formData, cardName: e.target.value})}
//                     />
//                   </div>

//                   {/* Expiry & CVV */}
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Expiry date
//                       </label>
//                       <input
//                         type="text"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="MM/YY"
//                         maxLength="5"
//                         value={formData.cardExpiry}
//                         onChange={(e) => setFormData({...formData, cardExpiry: e.target.value})}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         CVV
//                       </label>
//                       <input
//                         type="password"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="***"
//                         maxLength="3"
//                         value={formData.cardCvv}
//                         onChange={(e) => setFormData({...formData, cardCvv: e.target.value})}
//                       />
//                     </div>
//                   </div>

//                   {/* Save Card */}
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                       checked={formData.saveCard}
//                       onChange={(e) => setFormData({...formData, saveCard: e.target.checked})}
//                     />
//                     <span className="text-sm text-gray-600">
//                       Save this card for future payments
//                     </span>
//                   </div>

//                   {/* Terms and Conditions */}
//                   <div className="pt-4 border-t border-gray-200">
//                     <div className="flex items-start">
//                       <input
//                         type="checkbox"
//                         className="mt-1 mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                         checked={acceptedTerms}
//                         onChange={(e) => setAcceptedTerms(e.target.checked)}
//                       />
//                       <div className="text-sm text-gray-600">
//                         I have read and agree to the{' '}
//                         <button className="text-blue-600 hover:underline">
//                           Terms & Conditions
//                         </button>
//                         ,{' '}
//                         <button className="text-blue-600 hover:underline">
//                           Privacy Policy
//                         </button>
//                         , and confirm that all information provided is accurate.
//                       </div>
//                     </div>
//                     {errors.terms && (
//                       <p className="text-xs text-red-500 mt-2">{errors.terms}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Navigation Buttons */}
//             <div className="flex justify-between pt-4">
//               <button
//                 onClick={handlePrevious}
//                 className={`px-6 py-2 border rounded-lg font-medium transition ${
//                   currentStep === 1
//                     ? 'border-gray-200 text-gray-400 cursor-not-allowed'
//                     : 'border-gray-300 text-gray-700 hover:bg-gray-50'
//                 }`}
//                 disabled={currentStep === 1}
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={handleNext}
//                 className={`px-8 py-2 ${colors.primary} text-white rounded-lg font-medium ${colors.primaryHover} transition flex items-center`}
//               >
//                 {currentStep === 3 ? 'Pay Now' : 'Continue'}
//                 <ChevronRight className="w-4 h-4 ml-2" />
//               </button>
//             </div>
//           </div>

//           {/* Right Column - Premium Summary */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                 <FileCheck className={`w-5 h-5 ${colors.text} mr-2`} />
//                 Premium Summary
//               </h3>
              
//               {/* Plan Details */}
//               <div className="mb-6">
//                 <div className={`${colors.secondary} rounded-lg p-4 ${colors.border} border`}>
//                   <div className="flex justify-between items-start mb-2">
//                     <div>
//                       <p className="font-medium text-gray-900">{selectedPlan.name}</p>
//                       <p className="text-xs text-gray-500 mt-1">{selectedPlan.insurer}</p>
//                     </div>
//                     <span className={`${colors.light} ${colors.text} text-xs px-2 py-1 rounded`}>
//                       {selectedPlan.medical}
//                     </span>
//                   </div>
                  
//                   {/* Trip Details */}
//                   <div className="mt-3 pt-3 border-t border-gray-200">
//                     <div className="flex items-center text-xs text-gray-600 mb-2">
//                       <Globe className="w-3 h-3 mr-1" />
//                       International Travel
//                     </div>
//                     <div className="flex items-center text-xs text-gray-600">
//                       <Calendar className="w-3 h-3 mr-1" />
//                       13 Feb 2026 - 28 Feb 2026
//                     </div>
//                   </div>

//                   {/* Key Coverages */}
//                   <div className="mt-3 pt-3 border-t border-gray-200">
//                     <p className="text-xs font-medium text-gray-700 mb-2">Key Coverages</p>
//                     <div className="space-y-1.5">
//                       <div className="flex justify-between text-xs">
//                         <span className="text-gray-600">Medical Expenses</span>
//                         <span className="font-medium text-gray-900">{selectedPlan.medical}</span>
//                       </div>
//                       <div className="flex justify-between text-xs">
//                         <span className="text-gray-600">Passport</span>
//                         <span className="font-medium text-gray-900">{selectedPlan.passport}</span>
//                       </div>
//                       <div className="flex justify-between text-xs">
//                         <span className="text-gray-600">Baggage</span>
//                         <span className="font-medium text-gray-900">{selectedPlan.baggage}</span>
//                       </div>
//                       <div className="flex justify-between text-xs">
//                         <span className="text-gray-600">Trip Cancellation</span>
//                         <span className="font-medium text-gray-900">{selectedPlan.tripCancellation}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Traveller Premium */}
//               <div className="mb-6">
//                 <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
//                   Premium Breakup
//                 </p>
//                 <div className="space-y-3">
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center">
//                       <User className="w-4 h-4 text-gray-400 mr-2" />
//                       <span className="text-sm text-gray-700">
//                         Traveller 1 ({calculateAge(formData.dob) || '24'} yrs)
//                       </span>
//                     </div>
//                     <span className="font-medium text-gray-900">₹{selectedPlan.premium}/-</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Base Premium */}
//               <div className="border-t border-gray-200 pt-4">
//                 <div className="space-y-2">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">Base Premium</span>
//                     <span className="text-gray-900">₹{selectedPlan.premium}</span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">GST @0%</span>
//                     <span className="text-gray-900">₹0</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Total Premium */}
//               <div className="border-t border-gray-200 pt-4 mt-4">
//                 <div className="flex justify-between items-center">
//                   <span className="text-base font-semibold text-gray-900">TOTAL PREMIUM</span>
//                   <span className={`text-2xl font-bold ${colors.text}`}>
//                     ₹{selectedPlan.premium}/-
//                   </span>
//                 </div>
//                 <p className="text-xs text-gray-500 mt-1">
//                   Inclusive of all taxes
//                 </p>
//               </div>

//               {/* Full Features List */}
//               <div className="border-t border-gray-200 pt-6 mt-4">
//                 <details className="group">
//                   <summary className="flex items-center justify-between text-sm font-medium text-blue-600 cursor-pointer list-none">
//                     View all policy features
//                     <ChevronDown className="w-4 h-4 group-open:rotate-180 transition" />
//                   </summary>
//                   <div className="mt-4 space-y-2">
//                     {selectedPlan.fullFeatures?.map((feature, idx) => (
//                       <div key={idx} className="flex items-start">
//                         <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
//                         <span className="text-xs text-gray-700">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </details>
//               </div>

//               {/* Secure Payment Badge */}
//               <div className="mt-6 pt-4 border-t border-gray-200">
//                 <div className="flex items-center justify-center space-x-4">
//                   <div className="flex items-center text-xs text-gray-500">
//                     <Lock className="w-3 h-3 mr-1" />
//                     256-bit SSL
//                   </div>
//                   <div className="flex items-center text-xs text-gray-500">
//                     <Shield className="w-3 h-3 mr-1" />
//                     PCI DSS
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* WhatsApp Modal */}
//       {showWhatsAppModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl max-w-md w-full p-6">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold text-gray-900">Get form completion link</h3>
//               <button 
//                 onClick={() => setShowWhatsAppModal(false)}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//             <div className="text-center py-4">
//               <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Smartphone className="w-10 h-10 text-green-600" />
//               </div>
//               <p className="text-gray-700 mb-6">
//                 We'll send you a WhatsApp message with a link to complete your form
//               </p>
//               <input
//                 type="tel"
//                 placeholder="Enter WhatsApp number"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-green-500 focus:border-transparent"
//               />
//               <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition">
//                 Send Link
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Payment Confirmation Modal */}
//       {showPaymentModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl max-w-md w-full p-6">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold text-gray-900">Confirm Payment</h3>
//               <button 
//                 onClick={() => setShowPaymentModal(false)}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//             <div className="py-4">
//               <div className="bg-blue-50 rounded-lg p-4 mb-4">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-sm text-gray-600">Amount to pay</span>
//                   <span className={`text-2xl font-bold ${colors.text}`}>₹{selectedPlan.premium}</span>
//                 </div>
//                 <p className="text-xs text-gray-500">for {selectedPlan.name}</p>
//               </div>
              
//               <div className="space-y-3 mb-6">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-600">Card</span>
//                   <span className="text-gray-900">**** {formData.cardNumber?.slice(-4) || '1234'}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-600">Name on card</span>
//                   <span className="text-gray-900">{formData.cardName || 'Card Holder'}</span>
//                 </div>
//               </div>

//               <button
//                 onClick={handlePayment}
//                 className={`w-full ${colors.primary} text-white py-3 rounded-lg font-medium ${colors.primaryHover} transition flex items-center justify-center`}
//               >
//                 Pay ₹{selectedPlan.premium}
//                 <Lock className="w-4 h-4 ml-2" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl max-w-md w-full p-6">
//             <div className="text-center py-4">
//               <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <CheckCircle2 className="w-10 h-10 text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
//               <p className="text-gray-600 mb-6">
//                 Your travel insurance policy has been issued successfully.
//               </p>
              
//               <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-sm text-gray-600">Policy Number</span>
//                   <span className="text-sm font-semibold text-gray-900">TRAV{Math.floor(Math.random() * 1000000)}</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm text-gray-600">Valid Until</span>
//                   <span className="text-sm font-semibold text-gray-900">28 Feb 2026</span>
//                 </div>
//               </div>

//               <div className="flex space-x-3">
//                 <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition flex items-center justify-center">
//                   <Download className="w-4 h-4 mr-2" />
//                   Download
//                 </button>
//                 <button 
//                   onClick={() => navigate('/travel-insurance')}
//                   className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
//                 >
//                   Done
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TravelInsuranceBooking;
























import React, { useState } from 'react';
import {
  ArrowLeft, User, Calendar, Flag, Smartphone, FileCheck, UserPlus,
  CheckCircle2, ChevronRight, ChevronDown, X, Mail, Phone, MapPin,
  CreditCard, Lock, AlertCircle, Download, Shield, Globe, HeartPulse
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const TravelInsuranceBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan;

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '', dob: '', nationality: 'Indian', visaType: 'Tourist/Visitor Visa',
    passportNumber: '', passportExpiry: '', panNumber: '', noPan: false,
    email: '', phoneNumber: '', address: '', city: '', pincode: '',
    nomineeName: '', nomineeRelation: '', nomineeDob: '',
    hasMedicalConditions: false, medicalConditions: '',
    isPregnant: false, pregnancyWeeks: '',
    cardNumber: '', cardName: '', cardExpiry: '', cardCvv: '', saveCard: false
  });

  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  if (!selectedPlan) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8FAFF' }}>
        <div style={{ textAlign: 'center' }}>
          <AlertCircle size={48} color="#94A3B8" style={{ marginBottom: '16px' }} />
          <p style={{ color: '#64748B', marginBottom: '16px' }}>No plan selected</p>
          <button onClick={() => navigate('/travel-insurance')} style={{
            background: '#4F46E5', color: 'white', padding: '10px 24px',
            borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: '600'
          }}>Back to Plans</button>
        </div>
      </div>
    );
  }

  // Insurer color themes
  const colorThemes = {
    bajaj: { primary: '#2563EB', light: '#EFF6FF', border: '#BFDBFE', text: '#1D4ED8', gradient: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)' },
    icici: { primary: '#DC2626', light: '#FEF2F2', border: '#FECACA', text: '#B91C1C', gradient: 'linear-gradient(135deg, #FEF2F2, #FEE2E2)' },
    tata: { primary: '#7C3AED', light: '#F5F3FF', border: '#DDD6FE', text: '#6D28D9', gradient: 'linear-gradient(135deg, #F5F3FF, #EDE9FE)' },
    reliance: { primary: '#059669', light: '#ECFDF5', border: '#A7F3D0', text: '#047857', gradient: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)' },
    care: { primary: '#D97706', light: '#FFFBEB', border: '#FDE68A', text: '#B45309', gradient: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)' },
  };
  const C = colorThemes[selectedPlan.insurerCode] || colorThemes.bajaj;

  const steps = [
    { id: 1, name: 'Personal Details', icon: User, sub: 'Your information' },
    { id: 2, name: 'Nominee & Medical', icon: UserPlus, sub: 'Additional details' },
    { id: 3, name: 'Payment', icon: CreditCard, sub: 'Complete payment' }
  ];

  const validateStep = () => {
    const e = {};
    if (currentStep === 1) {
      if (!formData.fullName) e.fullName = 'Full name is required';
      if (!formData.dob) e.dob = 'Date of birth is required';
      if (!formData.passportNumber) e.passportNumber = 'Passport number is required';
      if (!formData.email) e.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Invalid email address';
      if (!formData.phoneNumber) e.phoneNumber = 'Phone number is required';
      if (!formData.passportExpiry) e.passportExpiry = 'Passport expiry is required';
    }
    if (currentStep === 2) {
      if (!formData.nomineeName) e.nomineeName = 'Nominee name is required';
      if (!formData.nomineeRelation) e.nomineeRelation = 'Nominee relation is required';
    }
    if (currentStep === 3) {
      if (!acceptedTerms) e.terms = 'Please accept terms and conditions';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < 3) { setCurrentStep(s => s + 1); window.scrollTo(0, 0); }
      else setShowPaymentModal(true);
    }
  };

  const calculateAge = (dob) => {
    if (!dob) return '';
    const today = new Date(), birth = new Date(dob);
    let age = today.getFullYear() - birth.getFullYear();
    if (today.getMonth() < birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) age--;
    return age;
  };

  const inputStyle = (hasError) => ({
    width: '100%', padding: '11px 14px', borderRadius: '10px', fontSize: '14px',
    border: `1.5px solid ${hasError ? '#EF4444' : '#E2E8F0'}`,
    outline: 'none', color: '#0F172A', background: hasError ? '#FFF5F5' : '#F8FAFC',
    boxSizing: 'border-box', transition: 'border-color 0.2s',
    fontFamily: 'inherit'
  });

  const inputWithIcon = (hasError) => ({
    ...inputStyle(hasError),
    paddingLeft: '40px'
  });

  const labelStyle = {
    fontSize: '12px', fontWeight: '600', color: '#64748B',
    display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.4px'
  };

  const sectionCard = (children, title, Icon, iconBg, iconColor) => (
    <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '24px', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
        <div style={{ background: iconBg, borderRadius: '10px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon size={18} color={iconColor} />
        </div>
        <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#0F172A' }}>{title}</h2>
      </div>
      {children}
    </div>
  );

  const policyNumber = `TRAV${Math.floor(Math.random() * 9000000 + 1000000)}`;

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFF', fontFamily: "'DM Sans', system-ui, sans-serif" }}>

      {/* ===== STICKY HEADER ===== */}
      <div style={{ background: 'white', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={() => navigate('/travel-insurance')} style={{
            display: 'flex', alignItems: 'center', gap: '6px', color: '#64748B',
            background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500'
          }}>
            <ArrowLeft size={16} /> Back to plans
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#94A3B8', fontWeight: '600' }}>
            <Lock size={14} color="#10B981" /> 256-bit SSL Secured Checkout
          </div>
        </div>
      </div>

      {/* ===== PROGRESS STEPPER ===== */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0' }}>
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '120px' }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: currentStep > step.id ? '#10B981' : currentStep === step.id ? C.primary : '#E2E8F0',
                  color: currentStep >= step.id ? 'white' : '#94A3B8',
                  fontWeight: '700', marginBottom: '8px', transition: 'all 0.3s',
                  boxShadow: currentStep === step.id ? `0 0 0 4px ${C.border}` : 'none'
                }}>
                  {currentStep > step.id ? <CheckCircle2 size={20} /> : <step.icon size={18} />}
                </div>
                <div style={{ fontSize: '13px', fontWeight: currentStep === step.id ? '700' : '500', color: currentStep === step.id ? C.text : '#94A3B8', textAlign: 'center' }}>
                  {step.name}
                </div>
                <div style={{ fontSize: '11px', color: '#CBD5E1', marginTop: '2px' }}>{step.sub}</div>
              </div>
              {index < steps.length - 1 && (
                <div style={{ flex: 1, height: '2px', background: currentStep > step.id ? '#10B981' : '#E2E8F0', margin: '0 8px', marginBottom: '32px', transition: 'background 0.3s' }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '24px', alignItems: 'start' }}>

          {/* ===== LEFT COLUMN ===== */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Insurer Banner */}
            <div style={{ background: C.gradient, border: `1px solid ${C.border}`, borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span style={{ background: 'white', color: C.text, fontSize: '11px', fontWeight: '700', padding: '4px 12px', borderRadius: '20px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                    {selectedPlan.insurer}
                  </span>
                  <h1 style={{ fontSize: '22px', fontWeight: '800', color: '#0F172A', marginTop: '12px', marginBottom: '6px' }}>
                    {selectedPlan.name}
                  </h1>
                  <p style={{ fontSize: '14px', color: '#64748B' }}>
                    Trusted by 1 lakh+ travellers in 2025 for worldwide protection.
                  </p>
                </div>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%', background: C.primary,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: '22px', fontWeight: '800', flexShrink: 0
                }}>
                  {selectedPlan.insurer.charAt(0)}
                </div>
              </div>
            </div>

            {/* ===== STEP 1: PERSONAL DETAILS ===== */}
            {currentStep === 1 && sectionCard(
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {/* Full Name */}
                <div>
                  <label style={labelStyle}>Full name (as on passport) <span style={{ color: '#EF4444' }}>*</span></label>
                  <input type="text" placeholder="Enter your full name" value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    style={inputStyle(errors.fullName)}
                    onFocus={e => e.target.style.borderColor = C.primary}
                    onBlur={e => e.target.style.borderColor = errors.fullName ? '#EF4444' : '#E2E8F0'}
                  />
                  {errors.fullName && <p style={{ fontSize: '11px', color: '#EF4444', marginTop: '4px' }}>{errors.fullName}</p>}
                </div>

                {/* DOB + Age */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>Date of birth <span style={{ color: '#EF4444' }}>*</span></label>
                    <div style={{ position: 'relative' }}>
                      <Calendar size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
                      <input type="date" value={formData.dob} onChange={e => setFormData({ ...formData, dob: e.target.value })}
                        style={inputWithIcon(errors.dob)}
                        onFocus={e => e.target.style.borderColor = C.primary}
                        onBlur={e => e.target.style.borderColor = errors.dob ? '#EF4444' : '#E2E8F0'}
                      />
                    </div>
                    {errors.dob && <p style={{ fontSize: '11px', color: '#EF4444', marginTop: '4px' }}>{errors.dob}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Age (auto-calculated)</label>
                    <input type="text" value={calculateAge(formData.dob) ? `${calculateAge(formData.dob)} years` : ''} readOnly
                      placeholder="—" style={{ ...inputStyle(false), background: '#F1F5F9', color: '#64748B' }} />
                  </div>
                </div>

                {/* Nationality + Visa */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>Nationality</label>
                    <div style={{ position: 'relative' }}>
                      <Flag size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
                      <select value={formData.nationality} onChange={e => setFormData({ ...formData, nationality: e.target.value })}
                        style={{ ...inputWithIcon(false), appearance: 'none', cursor: 'pointer' }}>
                        <option>Indian</option><option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Visa type</label>
                    <select value={formData.visaType} onChange={e => setFormData({ ...formData, visaType: e.target.value })}
                      style={{ ...inputStyle(false), appearance: 'none', cursor: 'pointer' }}>
                      <option>Tourist/Visitor Visa</option>
                      <option>Business Visa</option>
                      <option>Student Visa</option>
                      <option>Employment Visa</option>
                      <option>Medical Visa</option>
                    </select>
                  </div>
                </div>

                {/* Passport */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <label style={{ ...labelStyle, marginBottom: 0 }}>Passport number <span style={{ color: '#EF4444' }}>*</span></label>
                      <button onClick={() => setShowWhatsAppModal(true)} style={{ fontSize: '11px', color: '#16A34A', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Smartphone size={12} /> Don't remember?
                      </button>
                    </div>
                    <input type="text" placeholder="e.g. A1234567" value={formData.passportNumber}
                      onChange={e => setFormData({ ...formData, passportNumber: e.target.value.toUpperCase() })}
                      style={inputStyle(errors.passportNumber)}
                      onFocus={e => e.target.style.borderColor = C.primary}
                      onBlur={e => e.target.style.borderColor = errors.passportNumber ? '#EF4444' : '#E2E8F0'}
                    />
                    {errors.passportNumber && <p style={{ fontSize: '11px', color: '#EF4444', marginTop: '4px' }}>{errors.passportNumber}</p>}
                  </div>
                  <div>
                    <label style={labelStyle}>Passport expiry <span style={{ color: '#EF4444' }}>*</span></label>
                    <input type="date" value={formData.passportExpiry} onChange={e => setFormData({ ...formData, passportExpiry: e.target.value })}
                      style={inputStyle(errors.passportExpiry)}
                      onFocus={e => e.target.style.borderColor = C.primary}
                      onBlur={e => e.target.style.borderColor = errors.passportExpiry ? '#EF4444' : '#E2E8F0'}
                    />
                    {errors.passportExpiry && <p style={{ fontSize: '11px', color: '#EF4444', marginTop: '4px' }}>{errors.passportExpiry}</p>}
                  </div>
                </div>

                {/* PAN */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '6px' }}>
                    <label style={{ ...labelStyle, marginBottom: 0 }}>PAN number</label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#64748B', cursor: 'pointer' }}>
                      <input type="checkbox" checked={formData.noPan} onChange={e => setFormData({ ...formData, noPan: e.target.checked })} style={{ accentColor: C.primary }} />
                      I don't have a PAN
                    </label>
                  </div>
                  <input type="text" placeholder="e.g. ABCDE1234F" disabled={formData.noPan}
                    value={formData.panNumber} onChange={e => setFormData({ ...formData, panNumber: e.target.value.toUpperCase() })}
                    style={{ ...inputStyle(false), opacity: formData.noPan ? 0.5 : 1 }}
                    onFocus={e => !formData.noPan && (e.target.style.borderColor = C.primary)}
                    onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                  />
                </div>

                {/* Contact */}
                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '18px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#0F172A', marginBottom: '14px' }}>Contact Details</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={labelStyle}>Email <span style={{ color: '#EF4444' }}>*</span></label>
                      <div style={{ position: 'relative' }}>
                        <Mail size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
                        <input type="email" placeholder="you@email.com" value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          style={inputWithIcon(errors.email)}
                          onFocus={e => e.target.style.borderColor = C.primary}
                          onBlur={e => e.target.style.borderColor = errors.email ? '#EF4444' : '#E2E8F0'}
                        />
                      </div>
                      {errors.email && <p style={{ fontSize: '11px', color: '#EF4444', marginTop: '4px' }}>{errors.email}</p>}
                    </div>
                    <div>
                      <label style={labelStyle}>Phone number <span style={{ color: '#EF4444' }}>*</span></label>
                      <div style={{ position: 'relative' }}>
                        <Phone size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
                        <input type="tel" placeholder="10-digit mobile" value={formData.phoneNumber}
                          onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                          style={inputWithIcon(errors.phoneNumber)}
                          onFocus={e => e.target.style.borderColor = C.primary}
                          onBlur={e => e.target.style.borderColor = errors.phoneNumber ? '#EF4444' : '#E2E8F0'}
                        />
                      </div>
                      {errors.phoneNumber && <p style={{ fontSize: '11px', color: '#EF4444', marginTop: '4px' }}>{errors.phoneNumber}</p>}
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label style={labelStyle}>Residential address</label>
                  <div style={{ position: 'relative' }}>
                    <MapPin size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
                    <input type="text" placeholder="Enter your address" value={formData.address}
                      onChange={e => setFormData({ ...formData, address: e.target.value })}
                      style={inputWithIcon(false)}
                      onFocus={e => e.target.style.borderColor = C.primary}
                      onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                    />
                  </div>
                </div>
              </div>,
              'Personal Details', User, C.light, C.text
            )}

            {/* ===== STEP 2 ===== */}
            {currentStep === 2 && (
              <>
                {sectionCard(
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div>
                        <label style={labelStyle}>Nominee full name <span style={{ color: '#EF4444' }}>*</span></label>
                        <input type="text" placeholder="Nominee's name" value={formData.nomineeName}
                          onChange={e => setFormData({ ...formData, nomineeName: e.target.value })}
                          style={inputStyle(errors.nomineeName)}
                          onFocus={e => e.target.style.borderColor = C.primary}
                          onBlur={e => e.target.style.borderColor = errors.nomineeName ? '#EF4444' : '#E2E8F0'}
                        />
                        {errors.nomineeName && <p style={{ fontSize: '11px', color: '#EF4444', marginTop: '4px' }}>{errors.nomineeName}</p>}
                      </div>
                      <div>
                        <label style={labelStyle}>Relation <span style={{ color: '#EF4444' }}>*</span></label>
                        <select value={formData.nomineeRelation} onChange={e => setFormData({ ...formData, nomineeRelation: e.target.value })}
                          style={{ ...inputStyle(errors.nomineeRelation), appearance: 'none', cursor: 'pointer' }}
                          onFocus={e => e.target.style.borderColor = C.primary}
                          onBlur={e => e.target.style.borderColor = errors.nomineeRelation ? '#EF4444' : '#E2E8F0'}
                        >
                          <option value="">Select relation</option>
                          {['Spouse', 'Parent', 'Child', 'Sibling', 'Grandparent', 'Other'].map(r => <option key={r}>{r}</option>)}
                        </select>
                        {errors.nomineeRelation && <p style={{ fontSize: '11px', color: '#EF4444', marginTop: '4px' }}>{errors.nomineeRelation}</p>}
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Nominee date of birth</label>
                      <input type="date" value={formData.nomineeDob} onChange={e => setFormData({ ...formData, nomineeDob: e.target.value })}
                        style={inputStyle(false)}
                        onFocus={e => e.target.style.borderColor = C.primary}
                        onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                      />
                    </div>
                  </div>,
                  'Nominee Details', UserPlus, '#F5F3FF', '#7C3AED'
                )}
                {sectionCard(
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {[
                      { label: 'Do you have any pre-existing medical conditions?', key: 'hasMedicalConditions' },
                      { label: 'Are you currently pregnant?', key: 'isPregnant' }
                    ].map(({ label, key }) => (
                      <div key={key}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                          <input type="checkbox" checked={formData[key]} onChange={e => setFormData({ ...formData, [key]: e.target.checked })}
                            style={{ accentColor: C.primary, width: '16px', height: '16px' }} />
                          <span style={{ fontSize: '14px', color: '#374151' }}>{label}</span>
                        </label>
                        {key === 'hasMedicalConditions' && formData.hasMedicalConditions && (
                          <textarea placeholder="List all pre-existing conditions..." value={formData.medicalConditions}
                            onChange={e => setFormData({ ...formData, medicalConditions: e.target.value })}
                            rows={3} style={{ ...inputStyle(false), marginTop: '10px', resize: 'vertical', fontFamily: 'inherit' }}
                            onFocus={e => e.target.style.borderColor = C.primary}
                            onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                          />
                        )}
                        {key === 'isPregnant' && formData.isPregnant && (
                          <input type="number" placeholder="Weeks of pregnancy" min="1" max="40"
                            value={formData.pregnancyWeeks} onChange={e => setFormData({ ...formData, pregnancyWeeks: e.target.value })}
                            style={{ ...inputStyle(false), marginTop: '10px' }}
                            onFocus={e => e.target.style.borderColor = C.primary}
                            onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                          />
                        )}
                      </div>
                    ))}
                  </div>,
                  'Medical Information', HeartPulse, '#FFF1F2', '#E11D48'
                )}
              </>
            )}

            {/* ===== STEP 3 ===== */}
            {currentStep === 3 && sectionCard(
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {/* Card number */}
                <div>
                  <label style={labelStyle}>Card number</label>
                  <div style={{ position: 'relative' }}>
                    <CreditCard size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', pointerEvents: 'none' }} />
                    <input type="text" placeholder="1234 5678 9012 3456" maxLength={19}
                      value={formData.cardNumber} onChange={e => setFormData({ ...formData, cardNumber: e.target.value })}
                      style={inputWithIcon(false)}
                      onFocus={e => e.target.style.borderColor = C.primary}
                      onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Card holder name</label>
                  <input type="text" placeholder="As printed on card" value={formData.cardName}
                    onChange={e => setFormData({ ...formData, cardName: e.target.value })}
                    style={inputStyle(false)}
                    onFocus={e => e.target.style.borderColor = C.primary}
                    onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                  />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>Expiry date</label>
                    <input type="text" placeholder="MM/YY" maxLength={5} value={formData.cardExpiry}
                      onChange={e => setFormData({ ...formData, cardExpiry: e.target.value })}
                      style={inputStyle(false)}
                      onFocus={e => e.target.style.borderColor = C.primary}
                      onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>CVV</label>
                    <input type="password" placeholder="•••" maxLength={3} value={formData.cardCvv}
                      onChange={e => setFormData({ ...formData, cardCvv: e.target.value })}
                      style={inputStyle(false)}
                      onFocus={e => e.target.style.borderColor = C.primary}
                      onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                    />
                  </div>
                </div>

                {/* Save card */}
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', color: '#64748B' }}>
                  <input type="checkbox" checked={formData.saveCard} onChange={e => setFormData({ ...formData, saveCard: e.target.checked })} style={{ accentColor: C.primary }} />
                  Save this card for future payments
                </label>

                {/* Terms */}
                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                    <input type="checkbox" checked={acceptedTerms} onChange={e => setAcceptedTerms(e.target.checked)}
                      style={{ accentColor: C.primary, marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>
                      I have read and agree to the{' '}
                      <span style={{ color: C.primary, fontWeight: '600', cursor: 'pointer' }}>Terms & Conditions</span>
                      {' '}and{' '}
                      <span style={{ color: C.primary, fontWeight: '600', cursor: 'pointer' }}>Privacy Policy</span>
                      , and confirm all information is accurate.
                    </span>
                  </label>
                  {errors.terms && <p style={{ fontSize: '11px', color: '#EF4444', marginTop: '6px', marginLeft: '24px' }}>{errors.terms}</p>}
                </div>
              </div>,
              'Payment Details', CreditCard, '#ECFDF5', '#059669'
            )}

            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button onClick={() => { if (currentStep > 1) { setCurrentStep(s => s - 1); window.scrollTo(0, 0); } }}
                disabled={currentStep === 1}
                style={{
                  padding: '12px 24px', border: '1.5px solid #E2E8F0', borderRadius: '10px',
                  fontSize: '14px', fontWeight: '600', color: currentStep === 1 ? '#CBD5E1' : '#374151',
                  background: 'white', cursor: currentStep === 1 ? 'not-allowed' : 'pointer', transition: 'all 0.15s'
                }}>
                ← Previous
              </button>
              <button onClick={handleNext} style={{
                padding: '12px 32px', borderRadius: '10px', background: C.primary,
                color: 'white', fontWeight: '700', fontSize: '14px', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '8px',
                boxShadow: `0 4px 16px ${C.border}`,
                transition: 'opacity 0.15s'
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                {currentStep === 3 ? <><Lock size={16} /> Pay ₹{selectedPlan.premium?.toLocaleString()}</> : <>Continue <ChevronRight size={16} /></>}
              </button>
            </div>
          </div>

          {/* ===== RIGHT: PREMIUM SUMMARY ===== */}
          <div style={{ position: 'sticky', top: '80px' }}>
            <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '22px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#0F172A', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileCheck size={16} color={C.primary} /> Premium Summary
              </h3>

              {/* Plan card */}
              <div style={{ background: C.gradient, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '16px', marginBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '700', color: '#0F172A' }}>{selectedPlan.name}</p>
                    <p style={{ fontSize: '11px', color: '#94A3B8', marginTop: '2px' }}>{selectedPlan.insurer}</p>
                  </div>
                  <span style={{ background: C.primary, color: 'white', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '20px' }}>
                    {selectedPlan.medical}
                  </span>
                </div>

                {/* Trip info */}
                <div style={{ borderTop: `1px dashed ${C.border}`, paddingTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#64748B' }}>
                    <Globe size={12} /> {selectedPlan.destination || 'International Travel'}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#64748B' }}>
                    <Calendar size={12} />
                    {selectedPlan.startDate && new Date(selectedPlan.startDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} →{' '}
                    {selectedPlan.endDate && new Date(selectedPlan.endDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </div>
                </div>

                {/* Coverage */}
                <div style={{ borderTop: `1px dashed ${C.border}`, paddingTop: '10px', marginTop: '10px' }}>
                  <p style={{ fontSize: '11px', fontWeight: '700', color: '#374151', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Key Coverages</p>
                  {[
                    { label: 'Medical', value: selectedPlan.medical },
                    { label: 'Baggage', value: selectedPlan.baggage },
                    { label: 'Trip Cancel', value: selectedPlan.tripCancellation },
                    { label: 'Passport', value: selectedPlan.passport }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '5px' }}>
                      <span style={{ color: '#94A3B8' }}>{item.label}</span>
                      <span style={{ fontWeight: '700', color: '#374151' }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Breakup */}
              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', marginBottom: '16px' }}>
                <p style={{ fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>Premium Breakup</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#374151' }}>
                    <User size={13} color="#94A3B8" />
                    Traveller 1 ({calculateAge(formData.dob) || '—'} yrs)
                  </div>
                  <span style={{ fontWeight: '700' }}>₹{selectedPlan.premium?.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#94A3B8' }}>
                  <span>GST @0%</span><span>₹0</span>
                </div>
              </div>

              {/* Total */}
              <div style={{ background: C.light, border: `1px solid ${C.border}`, borderRadius: '10px', padding: '14px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#374151' }}>TOTAL PREMIUM</span>
                  <span style={{ fontSize: '26px', fontWeight: '800', color: C.text }}>₹{selectedPlan.premium?.toLocaleString()}</span>
                </div>
                <p style={{ fontSize: '11px', color: '#94A3B8', marginTop: '4px' }}>Inclusive of all taxes</p>
              </div>

              {/* Features accordion */}
              <details style={{ marginBottom: '16px' }}>
                <summary style={{
                  fontSize: '13px', fontWeight: '600', color: C.primary, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', listStyle: 'none'
                }}>
                  View all policy features <ChevronDown size={14} />
                </summary>
                <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedPlan.fullFeatures?.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2 size={13} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '12px', color: '#374151' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </details>

              {/* Security badges */}
              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '14px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                {[
                  { icon: <Lock size={12} />, label: '256-bit SSL' },
                  { icon: <Shield size={12} />, label: 'PCI DSS' },
                ].map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#94A3B8', fontWeight: '600' }}>
                    {b.icon} {b.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== WHATSAPP MODAL ===== */}
      {showWhatsAppModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(4px)', padding: '16px' }}>
          <div style={{ background: 'white', borderRadius: '16px', width: '100%', maxWidth: '400px', padding: '24px', boxShadow: '0 24px 80px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A' }}>Get form link on WhatsApp</h3>
              <button onClick={() => setShowWhatsAppModal(false)} style={{ background: '#F1F5F9', border: 'none', borderRadius: '8px', padding: '6px', cursor: 'pointer', color: '#64748B' }}><X size={18} /></button>
            </div>
            <div style={{ textAlign: 'center', padding: '12px 0' }}>
              <div style={{ width: '64px', height: '64px', background: '#DCFCE7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Smartphone size={28} color="#16A34A" />
              </div>
              <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '20px', lineHeight: '1.6' }}>We'll send you a WhatsApp link to complete your form easily.</p>
              <input type="tel" placeholder="Enter WhatsApp number" style={{ ...inputStyle(false), marginBottom: '12px', textAlign: 'center' }} />
              <button style={{ width: '100%', padding: '12px', background: '#16A34A', color: 'white', fontWeight: '700', fontSize: '14px', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>
                Send Link
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== PAYMENT CONFIRMATION MODAL ===== */}
      {showPaymentModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(4px)', padding: '16px' }}>
          <div style={{ background: 'white', borderRadius: '16px', width: '100%', maxWidth: '420px', padding: '28px', boxShadow: '0 24px 80px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0F172A' }}>Confirm Payment</h3>
              <button onClick={() => setShowPaymentModal(false)} style={{ background: '#F1F5F9', border: 'none', borderRadius: '8px', padding: '6px', cursor: 'pointer', color: '#64748B' }}><X size={18} /></button>
            </div>
            <div style={{ background: C.light, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '18px', marginBottom: '18px', textAlign: 'center' }}>
              <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '6px' }}>Amount to pay</p>
              <p style={{ fontSize: '36px', fontWeight: '800', color: C.text }}>₹{selectedPlan.premium?.toLocaleString()}</p>
              <p style={{ fontSize: '12px', color: '#94A3B8' }}>for {selectedPlan.name}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              {[
                { label: 'Card', value: `**** **** **** ${formData.cardNumber?.slice(-4) || '—'}` },
                { label: 'Card holder', value: formData.cardName || '—' },
                { label: 'Plan', value: selectedPlan.name },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span style={{ color: '#94A3B8' }}>{row.label}</span>
                  <span style={{ fontWeight: '600', color: '#374151' }}>{row.value}</span>
                </div>
              ))}
            </div>
            <button onClick={() => { setShowPaymentModal(false); setShowSuccessModal(true); }}
              style={{
                width: '100%', padding: '14px', background: C.primary, color: 'white',
                fontWeight: '700', fontSize: '15px', border: 'none', borderRadius: '12px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                boxShadow: `0 4px 20px ${C.border}`
              }}>
              <Lock size={16} /> Pay ₹{selectedPlan.premium?.toLocaleString()} Securely
            </button>
          </div>
        </div>
      )}

      {/* ===== SUCCESS MODAL ===== */}
      {showSuccessModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(4px)', padding: '16px' }}>
          <div style={{ background: 'white', borderRadius: '20px', width: '100%', maxWidth: '420px', padding: '32px', boxShadow: '0 32px 100px rgba(0,0,0,0.25)', textAlign: 'center' }}>
            <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #DCFCE7, #BBF7D0)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <CheckCircle2 size={36} color="#16A34A" />
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>Payment Successful! 🎉</h3>
            <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '24px' }}>
              Your travel insurance policy has been issued. Policy documents sent to your email.
            </p>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px', marginBottom: '24px', textAlign: 'left' }}>
              {[
                { label: 'Policy Number', value: policyNumber },
                { label: 'Plan', value: selectedPlan.name },
                { label: 'Insurer', value: selectedPlan.insurer },
                { label: 'Valid Until', value: selectedPlan.endDate ? new Date(selectedPlan.endDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—' },
                { label: 'Premium Paid', value: `₹${selectedPlan.premium?.toLocaleString()}` },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: i < 4 ? '10px' : '0' }}>
                  <span style={{ color: '#94A3B8' }}>{row.label}</span>
                  <span style={{ fontWeight: '700', color: '#0F172A' }}>{row.value}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={{
                flex: 1, padding: '12px', border: '1.5px solid #E2E8F0', borderRadius: '10px',
                fontSize: '13px', fontWeight: '600', color: '#374151', background: 'white', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
              }}>
                <Download size={15} /> Download Policy
              </button>
              <button onClick={() => navigate('/travel-insurance')} style={{
                flex: 1, padding: '12px', background: C.primary, color: 'white',
                fontWeight: '700', fontSize: '13px', border: 'none', borderRadius: '10px', cursor: 'pointer'
              }}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelInsuranceBooking;