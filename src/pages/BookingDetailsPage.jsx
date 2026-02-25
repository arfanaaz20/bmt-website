import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Calendar, MapPin, Star, Users, Clock, Shield, CheckCircle,
  ChevronRight, CreditCard, Wallet, Smartphone,
  Gift, Award, Heart, Share2, Minus, Plus, 
  Utensils, Ticket, Camera, ArrowLeft, Download, 
  MessageCircle, Headphones, Lock, CalendarDays, 
  Clock3, UserCircle, CreditCard as CardIcon,
  Sparkles, ShoppingBag, CircleCheck, Circle,
  Hash, Mail, Phone, Printer, Coffee, Wifi,
  Sun, Sunset, Moon, ChevronLeft, FileText
} from 'lucide-react';

const BookingDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { experience, bookingDetails: initialDetails } = location.state || {};

  const [bookingDate, setBookingDate] = useState(initialDetails?.date || new Date().toISOString().split('T')[0]);
  const [travelers, setTravelers] = useState(initialDetails?.travelers || 2);
  const [selectedTime, setSelectedTime] = useState('10:00');
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [activeTab, setActiveTab] = useState('details');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  // If no experience data, redirect to home
  if (!experience) {
    navigate('/');
    return null;
  }

  // Available time slots
  const timeSlots = [
    { time: '09:00', label: '09:00 AM', icon: Sun },
    { time: '10:00', label: '10:00 AM', icon: Sun },
    { time: '11:00', label: '11:00 AM', icon: Sun },
    { time: '12:00', label: '12:00 PM', icon: Sun },
    { time: '14:00', label: '02:00 PM', icon: Sun },
    { time: '15:00', label: '03:00 PM', icon: Sun },
    { time: '16:00', label: '04:00 PM', icon: Sun },
    { time: '18:00', label: '06:00 PM', icon: Sunset },
    { time: '19:00', label: '07:00 PM', icon: Moon }
  ];

  // Add-ons available for this experience
  const addOns = [
    { id: 1, name: 'Hotel Pickup & Drop', price: 1299, description: 'Round-trip transfer from your hotel', icon: MapPin },
    { id: 2, name: 'Professional Photography', price: 2499, description: '30 mins photo session + 10 digital copies', icon: Camera },
    { id: 3, name: 'Meal Upgrade', price: 899, description: 'Premium dining experience', icon: Utensils },
    { id: 4, name: 'Fast Pass Access', price: 1599, description: 'Skip all queues and priority entry', icon: Ticket },
    { id: 5, name: 'Audio Guide', price: 399, description: 'Multi-language audio commentary', icon: Headphones },
    { id: 6, name: 'Souvenir Package', price: 699, description: 'Exclusive memorabilia box', icon: Gift }
  ];

  // Price calculation
  const basePrice = experience.price * travelers;
  const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
    const addOn = addOns.find(a => a.id === addOnId);
    return sum + (addOn?.price || 0);
  }, 0);
  const discount = promoApplied ? basePrice * 0.1 : 0;
  const tax = Math.round((basePrice + addOnsTotal - discount) * 0.12);
  const totalAmount = basePrice + addOnsTotal - discount + tax;

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  const handleAddOnToggle = (addOnId) => {
    setSelectedAddOns(prev =>
      prev.includes(addOnId)
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'HOLIDAY10') {
      setPromoApplied(true);
    }
  };

  const handleProceedToPayment = () => {
    // Create a clean copy of booking data WITHOUT any React components
    const cleanAddOns = selectedAddOns.map(id => {
      const addOn = addOns.find(a => a.id === id);
      return {
        id: addOn.id,
        name: addOn.name,
        price: addOn.price,
        description: addOn.description
      };
    });

    const bookingData = {
      experience: {
        id: experience.id,
        title: experience.title,
        location: experience.location,
        category: experience.category,
        rating: experience.rating,
        reviews: experience.reviews,
        image: experience.image,
        price: experience.price,
        originalPrice: experience.originalPrice,
        duration: experience.duration,
        meetingPoint: experience.meetingPoint || 'Main entrance of the attraction'
      },
      bookingDetails: {
        date: bookingDate,
        time: selectedTime,
        travelers,
        addOns: cleanAddOns,
        basePrice,
        addOnsTotal,
        discount,
        tax,
        totalAmount,
        paymentMethod,
        promoApplied,
        promoCode: promoApplied ? promoCode : null
      }
    };
    
    navigate('/booking-confirmation', { state: bookingData });
  };

  // Get day name
  const getDayName = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  // Get month name
  const getMonthName = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short' });
  };

  // Get day number
  const getDayNumber = (dateStr) => {
    const date = new Date(dateStr);
    return date.getDate();
  };

  return (
    <div className="min-h-screen bg-gray-50 font-['Inter',sans-serif]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Complete Your Booking</h1>
                <p className="text-sm text-gray-500">Secure your spot in just a few steps</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Left Column */}
          <div className="flex-1 lg:w-2/3">
            {/* Experience Summary Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium capitalize flex items-center gap-1">
                          <Ticket className="w-3 h-3" />
                          {experience.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{experience.rating}</span>
                          <span className="text-sm text-gray-500">({experience.reviews})</span>
                        </div>
                      </div>
                      <h2 className="text-xl font-bold text-gray-800 mb-1">{experience.title}</h2>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <Clock className="w-4 h-4" />
                        {experience.duration || 'Full Day'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Tabs */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6">
              <div className="flex border-b border-gray-200">
                {[
                  { id: 'details', label: 'Select Date & Time', icon: CalendarDays },
                  { id: 'addons', label: 'Add-ons', icon: ShoppingBag },
                  { id: 'review', label: 'Review Booking', icon: FileText }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 px-6 py-4 text-sm font-medium capitalize transition-colors relative flex items-center justify-center gap-2 ${
                        activeTab === tab.id 
                          ? 'text-blue-600 border-b-2 border-blue-600' 
                          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="p-6">
                {/* Tab 1: Date & Time Selection */}
                {activeTab === 'details' && (
                  <div className="space-y-6">
                    {/* Date Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Select Date
                      </label>
                      <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
                        {[...Array(7)].map((_, i) => {
                          const date = new Date();
                          date.setDate(date.getDate() + i);
                          const dateStr = date.toISOString().split('T')[0];
                          const isSelected = bookingDate === dateStr;
                          const isToday = i === 0;
                          
                          return (
                            <button
                              key={i}
                              onClick={() => setBookingDate(dateStr)}
                              className={`p-3 rounded-xl border text-center transition-all ${
                                isSelected
                                  ? 'bg-blue-600 border-blue-600 text-white'
                                  : isToday
                                  ? 'border-blue-200 bg-blue-50/50 hover:bg-blue-50'
                                  : 'hover:border-blue-300 hover:bg-blue-50'
                              }`}
                            >
                              <div className="text-xs font-medium">
                                {getDayName(dateStr)}
                              </div>
                              <div className="text-lg font-bold">
                                {getDayNumber(dateStr)}
                              </div>
                              <div className="text-xs">
                                {getMonthName(dateStr)}
                              </div>
                              {isToday && (
                                <span className="text-[10px] mt-1 block font-medium text-blue-600">
                                  Today
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Slots */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                        <Clock3 className="w-4 h-4" />
                        Select Time Slot
                      </label>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                        {timeSlots.map((slot) => {
                          const Icon = slot.icon;
                          const isSelected = selectedTime === slot.time;
                          return (
                            <button
                              key={slot.time}
                              onClick={() => setSelectedTime(slot.time)}
                              className={`px-4 py-3 rounded-xl border text-sm transition-all flex flex-col items-center gap-1 ${
                                isSelected
                                  ? 'bg-blue-600 border-blue-600 text-white'
                                  : 'hover:border-blue-300 hover:bg-blue-50'
                              }`}
                            >
                              <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-gray-500'}`} />
                              <span className="font-medium">{slot.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Travelers */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Number of Travelers
                      </label>
                      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                        <button
                          onClick={() => setTravelers(Math.max(1, travelers - 1))}
                          className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <div className="flex-1 text-center">
                          <span className="text-2xl font-bold text-gray-800">{travelers}</span>
                          <span className="text-sm text-gray-500 ml-2">
                            {travelers === 1 ? 'Adult' : 'Adults'}
                          </span>
                        </div>
                        <button
                          onClick={() => setTravelers(Math.min(10, travelers + 1))}
                          className="w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        Children under 12 get 50% off
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={() => setActiveTab('addons')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        Continue to Add-ons
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Tab 2: Add-ons */}
                {activeTab === 'addons' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {addOns.map((addOn) => {
                        const Icon = addOn.icon;
                        const isSelected = selectedAddOns.includes(addOn.id);
                        return (
                          <div
                            key={addOn.id}
                            onClick={() => handleAddOnToggle(addOn.id)}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                              isSelected
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`p-2 rounded-lg ${
                                isSelected ? 'bg-blue-600' : 'bg-gray-100'
                              }`}>
                                <Icon className={`w-5 h-5 ${
                                  isSelected ? 'text-white' : 'text-gray-600'
                                }`} />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h4 className="font-medium text-gray-800">{addOn.name}</h4>
                                    <p className="text-xs text-gray-500 mt-1">{addOn.description}</p>
                                  </div>
                                  <div className="text-right">
                                    <span className="font-bold text-gray-900">
                                      {formatCurrency(addOn.price)}
                                    </span>
                                    {isSelected && (
                                      <CheckCircle className="w-4 h-4 text-blue-600 ml-2 inline" />
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={() => setActiveTab('details')}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Back
                      </button>
                      <button
                        onClick={() => setActiveTab('review')}
                        className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        Review Booking
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Tab 3: Review Booking */}
                {activeTab === 'review' && (
                  <div className="space-y-6">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-800">Almost there!</h4>
                        <p className="text-sm text-green-700">
                          Please review your booking details before proceeding to payment
                        </p>
                      </div>
                    </div>

                    {/* Booking Summary */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Date
                        </span>
                        <span className="font-medium text-gray-900">
                          {new Date(bookingDate).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Time
                        </span>
                        <span className="font-medium text-gray-900">
                          {timeSlots.find(s => s.time === selectedTime)?.label || selectedTime}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-gray-600 flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Travelers
                        </span>
                        <span className="font-medium text-gray-900">{travelers} {travelers === 1 ? 'Adult' : 'Adults'}</span>
                      </div>
                      {selectedAddOns.length > 0 && (
                        <div className="py-2 border-b">
                          <span className="text-gray-600 block mb-2 flex items-center gap-2">
                            <Gift className="w-4 h-4" />
                            Add-ons
                          </span>
                          {selectedAddOns.map(id => {
                            const addOn = addOns.find(a => a.id === id);
                            return (
                              <div key={id} className="flex justify-between items-center ml-4 mb-2">
                                <span className="text-sm text-gray-600 flex items-center gap-2">
                                  <CircleCheck className="w-3 h-3 text-blue-600" />
                                  {addOn.name}
                                </span>
                                <span className="text-sm font-medium text-gray-900">
                                  {formatCurrency(addOn.price)}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={() => setActiveTab('addons')}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Back
                      </button>
                      <button
                        onClick={handleProceedToPayment}
                        disabled={!agreeTerms}
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        <Lock className="w-4 h-4" />
                        Proceed to Payment
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Free Cancellation
                  </h3>
                  <p className="text-sm text-gray-600">
                    Cancel up to 24 hours before the experience starts for a full refund. 
                    No questions asked.
                  </p>
                  <button className="text-sm text-blue-600 font-medium mt-2 hover:text-blue-700 flex items-center gap-1">
                    View full policy
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Price Summary & Payment */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Hash className="w-5 h-5" />
                Price Details
              </h3>
              
              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Base Price ({travelers} {travelers === 1 ? 'Adult' : 'Adults'})</span>
                  <span className="font-medium">{formatCurrency(experience.price * travelers)}</span>
                </div>
                
                {selectedAddOns.length > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Add-ons ({selectedAddOns.length})</span>
                    <span className="font-medium">{formatCurrency(addOnsTotal)}</span>
                  </div>
                )}
                
                {promoApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Promo Discount (HOLIDAY10)</span>
                    <span className="font-medium">-{formatCurrency(discount)}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-gray-600">
                  <span>Taxes & Fees (12%)</span>
                  <span className="font-medium">{formatCurrency(tax)}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800">Total Amount</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {formatCurrency(totalAmount)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Inclusive of all taxes
                  </p>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Gift className="w-4 h-4" />
                  Apply Promo Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={promoApplied}
                  />
                  <button
                    onClick={handleApplyPromo}
                    disabled={!promoCode || promoApplied}
                    className="px-4 py-2 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Apply
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Promo code applied successfully!
                  </p>
                )}
                <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Try: HOLIDAY10 for 10% off
                </p>
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                  <CardIcon className="w-4 h-4" />
                  Select Payment Method
                </label>
                <div className="space-y-3">
                  <label className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${
                    paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <div className="flex items-center gap-3 ml-3 flex-1">
                      <CreditCard className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">Credit/Debit Card</span>
                    </div>
                  </label>

                  <label className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${
                    paymentMethod === 'upi' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <div className="flex items-center gap-3 ml-3 flex-1">
                      <Smartphone className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">UPI / Google Pay</span>
                    </div>
                  </label>

                  <label className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${
                    paymentMethod === 'wallet' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="wallet"
                      checked={paymentMethod === 'wallet'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <div className="flex items-center gap-3 ml-3 flex-1">
                      <Wallet className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">Digital Wallet</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-4 h-4 mt-1 text-blue-600 rounded"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the <button className="text-blue-600 hover:underline">Terms & Conditions</button> and 
                    <button className="text-blue-600 hover:underline"> Cancellation Policy</button>
                  </span>
                </label>
              </div>

              {/* Proceed Button */}
              <button
                onClick={handleProceedToPayment}
                disabled={!agreeTerms}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
              >
                <Lock className="w-5 h-5" />
                Proceed to Pay {formatCurrency(totalAmount)}
              </button>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Shield className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-xs text-gray-600">Secure Payment</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">Instant Confirmation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Headphones className="w-4 h-4 text-purple-600" />
                    </div>
                    <p className="text-xs text-gray-600">24/7 Support</p>
                  </div>
                </div>
              </div>

              {/* Need Help */}
              <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">Need help with booking?</p>
                    <p className="text-xs text-gray-500">Chat with our travel experts</p>
                  </div>
                  <button className="ml-auto px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                    Chat Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Experiences Section */}
      <div className="bg-white mt-12 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            You might also like
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1545558014-8692072184b0?w=400&h=300&fit=crop" 
                    alt="Similar experience"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                  Hong Kong Ocean Park
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.7</span>
                  <span className="text-sm text-gray-500">(12.4k reviews)</span>
                </div>
                <p className="text-lg font-bold text-gray-900 mt-2">₹4,599</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsPage;