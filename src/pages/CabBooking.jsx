// src/pages/CabBooking.jsx
import React, { useState } from 'react';
import { 
  ArrowLeft, Check, Clock, MapPin, Car, CreditCard, 
  User, Phone, Mail, Calendar, Shield, CheckCircle,
  X, AlertCircle, Truck, Wifi, Briefcase, Users, Fuel, Gauge,Star
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const CabBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state?.booking;
  
  const [bookingStep, setBookingStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // Form states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});

  if (!bookingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center p-8">
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-10 h-10 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Booking Data</h2>
          <p className="text-gray-600 mb-6">Please select a car to book first.</p>
          <button 
            onClick={() => navigate('/cab')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg"
          >
            Browse Cars
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'Today';
    const date = new Date(dateString);
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be at least 10 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (bookingStep === 1) {
      if (validateStep1()) {
        setBookingStep(2);
      }
    } else if (bookingStep === 2) {
      setBookingStep(3);
    } else if (bookingStep === 3) {
      setShowConfirmation(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleConfirmBooking = () => {
    // Here you would typically make an API call to create the booking
    navigate('/booking-confirmation', { 
      state: { 
        booking: {
          ...bookingData,
          customer: formData,
          paymentMethod,
          bookingDate: new Date().toISOString(),
          bookingId: 'BK' + Math.floor(Math.random() * 1000000)
        }
      }
    });
  };

  const calculateTotal = () => {
    return bookingData.totalPrice || bookingData.price || 8495;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            <span className="text-sm text-gray-500 ml-2"> Checkout</span>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="max-w-[1280px] mx-auto px-4 py-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center w-full max-w-3xl">
            <div className={`flex items-center ${bookingStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                bookingStep >= 1 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
              }`}>
                {bookingStep > 1 ? <Check className="w-5 h-5" /> : '1'}
              </div>
              <span className="ml-2 text-sm font-medium hidden sm:block">Details</span>
            </div>
            <div className={`flex-1 h-1 mx-4 ${bookingStep >= 2 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
            
            <div className={`flex items-center ${bookingStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                bookingStep >= 2 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
              }`}>
                {bookingStep > 2 ? <Check className="w-5 h-5" /> : '2'}
              </div>
              <span className="ml-2 text-sm font-medium hidden sm:block">Payment</span>
            </div>
            <div className={`flex-1 h-1 mx-4 ${bookingStep >= 3 ? 'bg-blue-500' : 'bg-gray-200'}`}></div>
            
            <div className={`flex items-center ${bookingStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                bookingStep >= 3 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'
              }`}>
                3
              </div>
              <span className="ml-2 text-sm font-medium hidden sm:block">Confirm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Step 1: Personal Details */}
            {bookingStep === 1 && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-500" />
                  Personal Details
                </h2>
                
                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all`}
                        placeholder="John"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all`}
                        placeholder="Doe"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all`}
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all`}
                        placeholder="9876543210"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                    )}
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Billing Address</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1.5">Address Line</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          placeholder="Street address"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-600 mb-1.5">City</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="City"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-1.5">Zip Code</label>
                          <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="400001"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                      placeholder="Any special requirements? (e.g., child seat, wheelchair access)"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 2: Payment Method */}
            {bookingStep === 2 && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-500" />
                  Payment Method
                </h2>
                
                <div className="space-y-4">
                  <div 
                    className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      paymentMethod === 'credit' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setPaymentMethod('credit')}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          paymentMethod === 'credit' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          <CreditCard className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Credit / Debit Card</p>
                          <p className="text-sm text-gray-500">Pay securely with your card</p>
                        </div>
                      </div>
                      {paymentMethod === 'credit' && (
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                      )}
                    </div>
                  </div>
                  
                  <div 
                    className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      paymentMethod === 'paypal' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setPaymentMethod('paypal')}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          paymentMethod === 'paypal' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          <span className="text-sm font-bold">P</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">PayPal</p>
                          <p className="text-sm text-gray-500">Pay with your PayPal account</p>
                        </div>
                      </div>
                      {paymentMethod === 'paypal' && (
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                      )}
                    </div>
                  </div>
                  
                  <div 
                    className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      paymentMethod === 'cod' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setPaymentMethod('cod')}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          paymentMethod === 'cod' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          <Truck className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Pay at Counter</p>
                          <p className="text-sm text-gray-500">Pay when you pick up the car</p>
                        </div>
                      </div>
                      {paymentMethod === 'cod' && (
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                      )}
                    </div>
                  </div>
                  
                  {paymentMethod === 'credit' && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-gray-600 mb-1.5">Card Number</label>
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-2">
                            <label className="block text-sm text-gray-600 mb-1.5">Expiry Date</label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-gray-600 mb-1.5">CVV</label>
                            <input
                              type="text"
                              placeholder="123"
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-1.5">Card Holder Name</label>
                          <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Step 3: Confirm Booking */}
            {bookingStep === 3 && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Confirm Your Booking
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Almost there!</p>
                        <p className="text-sm text-gray-600">Please review your booking details before confirming.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Customer Details</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Name</p>
                        <p className="font-medium text-gray-900">{formData.firstName} {formData.lastName}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Email</p>
                        <p className="font-medium text-gray-900">{formData.email}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Phone</p>
                        <p className="font-medium text-gray-900">{formData.phone}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Payment Method</p>
                        <p className="font-medium text-gray-900 capitalize">{paymentMethod}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Booking Summary</h3>
                    <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Car</span>
                        <span className="font-medium text-gray-900">{bookingData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Category</span>
                        <span className="text-gray-900">{bookingData.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration</span>
                        <span className="text-gray-900">1 day</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pickup Date</span>
                        <span className="text-gray-900">{formatDate(bookingData.rentalPickupDate)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Order Summary Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Your Booking</h3>
                
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                  <img 
                    src={bookingData.image} 
                    alt={bookingData.name}
                    className="w-20 h-16 object-contain bg-gray-50 rounded-lg"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{bookingData.name}</p>
                    <p className="text-xs text-gray-500">{bookingData.category}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs font-medium">{bookingData.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">Pickup: </span>
                    <span className="font-medium text-gray-900">{bookingData.pickupLocation || 'Airport'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">Date: </span>
                    <span className="font-medium text-gray-900">{formatDate(bookingData.rentalPickupDate)}</span>
                  </div>
                </div>
                
                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Base Price</span>
                    <span className="font-medium text-gray-900">₹{bookingData.price?.toLocaleString()}</span>
                  </div>
                  
                  {bookingData.selectedAddons && bookingData.selectedAddons.length > 0 && (
                    <div className="pt-2">
                      <p className="text-xs text-gray-500 mb-2">Add-ons</p>
                      {bookingData.selectedAddons.map((addon, idx) => (
                        <div key={idx} className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">{addon.name}</span>
                          <span className="text-gray-900">+₹{addon.price}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">GST</span>
                    <span className="text-gray-900">Included</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                  <span className="font-bold text-gray-900">Total Amount</span>
                  <span className="text-2xl font-bold text-blue-600">₹{calculateTotal().toLocaleString()}</span>
                </div>
              </div>
              
              {/* Cancellation Policy */}
              <div className="bg-blue-50 rounded-2xl border border-blue-200 p-5">
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Free Cancellation</h4>
                    <p className="text-xs text-gray-600">
                      You can cancel this booking free of charge up to 24 hours before pickup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={() => bookingStep > 1 ? setBookingStep(bookingStep - 1) : navigate(-1)}
            className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-all"
          >
            Back
          </button>
          
          <button
            onClick={handleContinue}
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
          >
            {bookingStep === 3 ? 'Confirm Booking' : 'Continue'}
          </button>
        </div>
      </div>
      
      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Confirm Booking?</h3>
              <p className="text-gray-600">
                You're about to confirm your booking. Please ensure all details are correct.
              </p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50"
              >
                Review
              </button>
              <button
                onClick={handleConfirmBooking}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CabBooking;