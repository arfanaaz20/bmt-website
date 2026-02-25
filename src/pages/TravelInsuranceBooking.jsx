import React, { useState } from 'react';
import { 
  ArrowLeft,
  User,
  Calendar,
  Flag,
  Smartphone,
  FileCheck,
  UserPlus,
  Info,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  X,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Lock,
  AlertCircle,
  Download,
  Shield,
  Clock,
  Globe,
  Plane,
  Luggage,
  HeartPulse
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const TravelInsuranceBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan;

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: '',
    dob: '',
    nationality: 'Indian',
    visaType: 'Tourist/Visitor Visa',
    passportNumber: '',
    passportExpiry: '',
    panNumber: '',
    noPan: false,
    email: '',
    phoneNumber: '',
    alternatePhone: '',
    address: '',
    city: '',
    pincode: '',
    
    // Nominee Details
    nomineeName: '',
    nomineeRelation: '',
    nomineeDob: '',
    
    // Medical Details
    hasMedicalConditions: false,
    medicalConditions: '',
    isPregnant: false,
    pregnancyWeeks: '',
    
    // Payment Details
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    saveCard: false
  });

  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">No plan selected</p>
          <button 
            onClick={() => navigate('/travel-insurance')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Back to Plans
          </button>
        </div>
      </div>
    );
  }

  // Get insurer specific styling
  const getInsurerColors = () => {
    switch(selectedPlan.insurerCode) {
      case 'bajaj':
        return {
          primary: 'bg-blue-600',
          primaryHover: 'hover:bg-blue-700',
          secondary: 'bg-blue-50',
          text: 'text-blue-700',
          border: 'border-blue-200',
          gradient: 'from-blue-50 to-indigo-50',
          light: 'bg-blue-100'
        };
      case 'icici':
        return {
          primary: 'bg-red-600',
          primaryHover: 'hover:bg-red-700',
          secondary: 'bg-red-50',
          text: 'text-red-700',
          border: 'border-red-200',
          gradient: 'from-red-50 to-orange-50',
          light: 'bg-red-100'
        };
      case 'tata':
        return {
          primary: 'bg-purple-600',
          primaryHover: 'hover:bg-purple-700',
          secondary: 'bg-purple-50',
          text: 'text-purple-700',
          border: 'border-purple-200',
          gradient: 'from-purple-50 to-pink-50',
          light: 'bg-purple-100'
        };
      case 'reliance':
        return {
          primary: 'bg-green-600',
          primaryHover: 'hover:bg-green-700',
          secondary: 'bg-green-50',
          text: 'text-green-700',
          border: 'border-green-200',
          gradient: 'from-green-50 to-emerald-50',
          light: 'bg-green-100'
        };
      case 'care':
        return {
          primary: 'bg-amber-600',
          primaryHover: 'hover:bg-amber-700',
          secondary: 'bg-amber-50',
          text: 'text-amber-700',
          border: 'border-amber-200',
          gradient: 'from-amber-50 to-yellow-50',
          light: 'bg-amber-100'
        };
      default:
        return {
          primary: 'bg-blue-600',
          primaryHover: 'hover:bg-blue-700',
          secondary: 'bg-blue-50',
          text: 'text-blue-700',
          border: 'border-blue-200',
          gradient: 'from-blue-50 to-indigo-50',
          light: 'bg-blue-100'
        };
    }
  };

  const colors = getInsurerColors();

  const steps = [
    { id: 1, name: 'Personal Details', icon: User },
    { id: 2, name: 'Nominee & Medical', icon: UserPlus },
    { id: 3, name: 'Payment', icon: CreditCard }
  ];

  const validateStep = () => {
    const newErrors = {};
    
    if (currentStep === 1) {
      if (!formData.fullName) newErrors.fullName = 'Full name is required';
      if (!formData.dob) newErrors.dob = 'Date of birth is required';
      if (!formData.passportNumber) newErrors.passportNumber = 'Passport number is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
      if (!formData.passportExpiry) newErrors.passportExpiry = 'Passport expiry date is required';
    }
    
    if (currentStep === 2) {
      if (!formData.nomineeName) newErrors.nomineeName = 'Nominee name is required';
      if (!formData.nomineeRelation) newErrors.nomineeRelation = 'Nominee relation is required';
    }
    
    if (currentStep === 3) {
      if (!acceptedTerms) newErrors.terms = 'Please accept terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
        window.scrollTo(0, 0);
      } else {
        setShowPaymentModal(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePayment = () => {
    setShowPaymentModal(false);
    setShowSuccessModal(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // Navigate to success page or show success state
    }, 2000);
  };

  const calculateAge = (dob) => {
    if (!dob) return '';
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/travel-insurance')}
              className="flex items-center text-gray-600 hover:text-blue-600 transition"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to plans
            </button>
            
            <div className="flex items-center text-sm text-gray-500">
              <Lock className="w-4 h-4 mr-1" />
              Secure Checkout
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex items-center relative">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${currentStep > step.id 
                    ? 'bg-green-500 text-white' 
                    : currentStep === step.id 
                      ? `${colors.primary} text-white` 
                      : 'bg-gray-200 text-gray-600'
                  }
                `}>
                  {currentStep > step.id ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <div className="ml-3 hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">{step.name}</p>
                  <p className="text-xs text-gray-500">
                    {step.id === 1 && 'Your information'}
                    {step.id === 2 && 'Additional details'}
                    {step.id === 3 && 'Complete payment'}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={`
                  flex-1 h-1 mx-4 rounded
                  ${currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'}
                `} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Insurer Banner */}
            <div className={`bg-gradient-to-r ${colors.gradient} ${colors.border} border rounded-xl p-6`}>
              <div className="flex items-center justify-between">
                <div>
                  <span className={`text-xs font-semibold ${colors.text} bg-white px-3 py-1 rounded-full`}>
                    {selectedPlan.insurer}
                  </span>
                  <h1 className="text-2xl font-bold text-gray-900 mt-4">{selectedPlan.name}</h1>
                  <p className="text-gray-600 mt-2">
                    Over 1 lakh+ travellers already trusted {selectedPlan.insurer} in 2025 for protection abroad.
                  </p>
                </div>
                <div className="hidden sm:block">
                  <div className={`w-16 h-16 ${colors.primary} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
                    {selectedPlan.insurer.charAt(0)}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-6">
                  <div className={`${colors.light} p-2 rounded-lg`}>
                    <User className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 ml-3">
                    Personal Details
                  </h2>
                </div>

                <div className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full name (as on passport) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Date of Birth & Age */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date of birth <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="date"
                          className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            errors.dob ? 'border-red-500' : 'border-gray-300'
                          }`}
                          value={formData.dob}
                          onChange={(e) => setFormData({...formData, dob: e.target.value})}
                        />
                      </div>
                      {errors.dob && (
                        <p className="text-xs text-red-500 mt-1">{errors.dob}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Age
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                        placeholder="Auto-calculated"
                        value={calculateAge(formData.dob) || ''}
                        readOnly
                        disabled
                      />
                    </div>
                  </div>

                  {/* Nationality & Visa Type */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nationality
                      </label>
                      <div className="relative">
                        <Flag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select 
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                          value={formData.nationality}
                          onChange={(e) => setFormData({...formData, nationality: e.target.value})}
                        >
                          <option>Indian</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Visa type
                      </label>
                      <select 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.visaType}
                        onChange={(e) => setFormData({...formData, visaType: e.target.value})}
                      >
                        <option>Tourist/Visitor Visa</option>
                        <option>Business Visa</option>
                        <option>Student Visa</option>
                        <option>Employment Visa</option>
                        <option>Medical Visa</option>
                      </select>
                    </div>
                  </div>

                  {/* Passport Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="block text-sm font-medium text-gray-700">
                          Passport number <span className="text-red-500">*</span>
                        </label>
                        <button 
                          onClick={() => setShowWhatsAppModal(true)}
                          className="flex items-center text-sm text-green-600 hover:text-green-700"
                        >
                          <Smartphone className="w-4 h-4 mr-1" />
                          Don't remember?
                        </button>
                      </div>
                      <input
                        type="text"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.passportNumber ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter passport number"
                        value={formData.passportNumber}
                        onChange={(e) => setFormData({...formData, passportNumber: e.target.value.toUpperCase()})}
                      />
                      {errors.passportNumber && (
                        <p className="text-xs text-red-500 mt-1">{errors.passportNumber}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Passport expiry <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          errors.passportExpiry ? 'border-red-500' : 'border-gray-300'
                        }`}
                        value={formData.passportExpiry}
                        onChange={(e) => setFormData({...formData, passportExpiry: e.target.value})}
                      />
                      {errors.passportExpiry && (
                        <p className="text-xs text-red-500 mt-1">{errors.passportExpiry}</p>
                      )}
                    </div>
                  </div>

                  {/* PAN Number */}
                  <div>
                    <div className="flex items-center mb-1">
                      <label className="block text-sm font-medium text-gray-700 mr-4">
                        PAN number
                      </label>
                      <label className="flex items-center text-sm text-gray-600">
                        <input
                          type="checkbox"
                          className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          checked={formData.noPan}
                          onChange={(e) => setFormData({...formData, noPan: e.target.checked})}
                        />
                        I don't have a PAN card
                      </label>
                    </div>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter PAN number"
                      disabled={formData.noPan}
                      value={formData.panNumber}
                      onChange={(e) => setFormData({...formData, panNumber: e.target.value.toUpperCase()})}
                    />
                  </div>

                  {/* Contact Details */}
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-md font-medium text-gray-900 mb-4">Contact Details</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="email"
                            className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                              errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="tel"
                            className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                              errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="10-digit mobile number"
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                          />
                        </div>
                        {errors.phoneNumber && (
                          <p className="text-xs text-red-500 mt-1">{errors.phoneNumber}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Residential address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Nominee & Medical Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                {/* Nominee Details */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <UserPlus className="w-5 h-5 text-purple-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 ml-3">
                      Nominee Details
                    </h2>
                  </div>

                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nominee full name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            errors.nomineeName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter nominee name"
                          value={formData.nomineeName}
                          onChange={(e) => setFormData({...formData, nomineeName: e.target.value})}
                        />
                        {errors.nomineeName && (
                          <p className="text-xs text-red-500 mt-1">{errors.nomineeName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nominee relation <span className="text-red-500">*</span>
                        </label>
                        <select 
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            errors.nomineeRelation ? 'border-red-500' : 'border-gray-300'
                          }`}
                          value={formData.nomineeRelation}
                          onChange={(e) => setFormData({...formData, nomineeRelation: e.target.value})}
                        >
                          <option value="">Select relation</option>
                          <option>Spouse</option>
                          <option>Parent</option>
                          <option>Child</option>
                          <option>Sibling</option>
                          <option>Grandparent</option>
                          <option>Other</option>
                        </select>
                        {errors.nomineeRelation && (
                          <p className="text-xs text-red-500 mt-1">{errors.nomineeRelation}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nominee date of birth
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.nomineeDob}
                        onChange={(e) => setFormData({...formData, nomineeDob: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                {/* Medical Details */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-pink-100 p-2 rounded-lg">
                      <HeartPulse className="w-5 h-5 text-pink-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 ml-3">
                      Medical Information
                    </h2>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          checked={formData.hasMedicalConditions}
                          onChange={(e) => setFormData({...formData, hasMedicalConditions: e.target.checked})}
                        />
                        <span className="text-sm text-gray-700">
                          Do you have any pre-existing medical conditions?
                        </span>
                      </label>
                    </div>

                    {formData.hasMedicalConditions && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Please specify medical conditions
                        </label>
                        <textarea
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          rows="3"
                          placeholder="List all pre-existing medical conditions"
                          value={formData.medicalConditions}
                          onChange={(e) => setFormData({...formData, medicalConditions: e.target.value})}
                        />
                      </div>
                    )}

                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          checked={formData.isPregnant}
                          onChange={(e) => setFormData({...formData, isPregnant: e.target.checked})}
                        />
                        <span className="text-sm text-gray-700">
                          Are you currently pregnant?
                        </span>
                      </label>
                    </div>

                    {formData.isPregnant && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Weeks of pregnancy
                        </label>
                        <input
                          type="number"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter weeks"
                          min="1"
                          max="40"
                          value={formData.pregnancyWeeks}
                          onChange={(e) => setFormData({...formData, pregnancyWeeks: e.target.value})}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {currentStep === 3 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CreditCard className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 ml-3">
                    Payment Details
                  </h2>
                </div>

                <div className="space-y-5">
                  {/* Card Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card number
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Card Holder Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card holder name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="As on card"
                      value={formData.cardName}
                      onChange={(e) => setFormData({...formData, cardName: e.target.value})}
                    />
                  </div>

                  {/* Expiry & CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry date
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="MM/YY"
                        maxLength="5"
                        value={formData.cardExpiry}
                        onChange={(e) => setFormData({...formData, cardExpiry: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="***"
                        maxLength="3"
                        value={formData.cardCvv}
                        onChange={(e) => setFormData({...formData, cardCvv: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Save Card */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={formData.saveCard}
                      onChange={(e) => setFormData({...formData, saveCard: e.target.checked})}
                    />
                    <span className="text-sm text-gray-600">
                      Save this card for future payments
                    </span>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        className="mt-1 mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                      />
                      <div className="text-sm text-gray-600">
                        I have read and agree to the{' '}
                        <button className="text-blue-600 hover:underline">
                          Terms & Conditions
                        </button>
                        ,{' '}
                        <button className="text-blue-600 hover:underline">
                          Privacy Policy
                        </button>
                        , and confirm that all information provided is accurate.
                      </div>
                    </div>
                    {errors.terms && (
                      <p className="text-xs text-red-500 mt-2">{errors.terms}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4">
              <button
                onClick={handlePrevious}
                className={`px-6 py-2 border rounded-lg font-medium transition ${
                  currentStep === 1
                    ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                disabled={currentStep === 1}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className={`px-8 py-2 ${colors.primary} text-white rounded-lg font-medium ${colors.primaryHover} transition flex items-center`}
              >
                {currentStep === 3 ? 'Pay Now' : 'Continue'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Right Column - Premium Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FileCheck className={`w-5 h-5 ${colors.text} mr-2`} />
                Premium Summary
              </h3>
              
              {/* Plan Details */}
              <div className="mb-6">
                <div className={`${colors.secondary} rounded-lg p-4 ${colors.border} border`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-gray-900">{selectedPlan.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{selectedPlan.insurer}</p>
                    </div>
                    <span className={`${colors.light} ${colors.text} text-xs px-2 py-1 rounded`}>
                      {selectedPlan.medical}
                    </span>
                  </div>
                  
                  {/* Trip Details */}
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="flex items-center text-xs text-gray-600 mb-2">
                      <Globe className="w-3 h-3 mr-1" />
                      International Travel
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Calendar className="w-3 h-3 mr-1" />
                      13 Feb 2026 - 28 Feb 2026
                    </div>
                  </div>

                  {/* Key Coverages */}
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-xs font-medium text-gray-700 mb-2">Key Coverages</p>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Medical Expenses</span>
                        <span className="font-medium text-gray-900">{selectedPlan.medical}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Passport</span>
                        <span className="font-medium text-gray-900">{selectedPlan.passport}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Baggage</span>
                        <span className="font-medium text-gray-900">{selectedPlan.baggage}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Trip Cancellation</span>
                        <span className="font-medium text-gray-900">{selectedPlan.tripCancellation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Traveller Premium */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                  Premium Breakup
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-700">
                        Traveller 1 ({calculateAge(formData.dob) || '24'} yrs)
                      </span>
                    </div>
                    <span className="font-medium text-gray-900">₹{selectedPlan.premium}/-</span>
                  </div>
                </div>
              </div>

              {/* Base Premium */}
              <div className="border-t border-gray-200 pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Base Premium</span>
                    <span className="text-gray-900">₹{selectedPlan.premium}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">GST @0%</span>
                    <span className="text-gray-900">₹0</span>
                  </div>
                </div>
              </div>

              {/* Total Premium */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-base font-semibold text-gray-900">TOTAL PREMIUM</span>
                  <span className={`text-2xl font-bold ${colors.text}`}>
                    ₹{selectedPlan.premium}/-
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Inclusive of all taxes
                </p>
              </div>

              {/* Full Features List */}
              <div className="border-t border-gray-200 pt-6 mt-4">
                <details className="group">
                  <summary className="flex items-center justify-between text-sm font-medium text-blue-600 cursor-pointer list-none">
                    View all policy features
                    <ChevronDown className="w-4 h-4 group-open:rotate-180 transition" />
                  </summary>
                  <div className="mt-4 space-y-2">
                    {selectedPlan.fullFeatures?.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </details>
              </div>

              {/* Secure Payment Badge */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center text-xs text-gray-500">
                    <Lock className="w-3 h-3 mr-1" />
                    256-bit SSL
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Shield className="w-3 h-3 mr-1" />
                    PCI DSS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Get form completion link</h3>
              <button 
                onClick={() => setShowWhatsAppModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="text-center py-4">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-10 h-10 text-green-600" />
              </div>
              <p className="text-gray-700 mb-6">
                We'll send you a WhatsApp message with a link to complete your form
              </p>
              <input
                type="tel"
                placeholder="Enter WhatsApp number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition">
                Send Link
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Confirmation Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Confirm Payment</h3>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="py-4">
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Amount to pay</span>
                  <span className={`text-2xl font-bold ${colors.text}`}>₹{selectedPlan.premium}</span>
                </div>
                <p className="text-xs text-gray-500">for {selectedPlan.name}</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Card</span>
                  <span className="text-gray-900">**** {formData.cardNumber?.slice(-4) || '1234'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Name on card</span>
                  <span className="text-gray-900">{formData.cardName || 'Card Holder'}</span>
                </div>
              </div>

              <button
                onClick={handlePayment}
                className={`w-full ${colors.primary} text-white py-3 rounded-lg font-medium ${colors.primaryHover} transition flex items-center justify-center`}
              >
                Pay ₹{selectedPlan.premium}
                <Lock className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="text-center py-4">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
              <p className="text-gray-600 mb-6">
                Your travel insurance policy has been issued successfully.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Policy Number</span>
                  <span className="text-sm font-semibold text-gray-900">TRAV{Math.floor(Math.random() * 1000000)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Valid Until</span>
                  <span className="text-sm font-semibold text-gray-900">28 Feb 2026</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
                <button 
                  onClick={() => navigate('/travel-insurance')}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelInsuranceBooking;