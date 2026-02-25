import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  CreditCard,
  Shield,
  CheckCircle,
  Loader2,
  AlertCircle,
  Plane,
  Clock,
  MapPin,
  X
} from "lucide-react";

const BookingForm = ({ 
  flight, 
  onClose, 
  onBookingComplete 
}) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [errors, setErrors] = useState({});

  // Passenger form state
  const [passenger, setPassenger] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "Male",
    dateOfBirth: "",
    nationality: "IN",
    passportNumber: "",
    passportExpiry: "",
    frequentFlyer: {
      program: "",
      number: ""
    }
  });

  // Payment form state
  const [payment, setPayment] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    saveCard: false
  });

  // Promo codes state
  const [promoCodes, setPromoCodes] = useState([
    { id: 1, code: "NEWUSER500", description: "New user promo (1st booking)", discount: "₹500 OFF", valid: true },
    { id: 2, code: "FLIGHT600", description: "New user promo (2nd booking)", discount: "₹600 OFF", valid: true },
    { id: 3, code: "FLYER10", description: "Flyer Exclusive offer", discount: "10% off (up to ₹600)", valid: true },
  ]);
  const [selectedPromoCode, setSelectedPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);

  // Calculate total price
  const calculateTotal = () => {
    let total = flight.basePrice || 11105;
    if (promoApplied) {
      if (selectedPromoCode === "NEWUSER500") {
        total = Math.max(0, total - 500);
      } else if (selectedPromoCode === "FLIGHT600") {
        total = Math.max(0, total - 600);
      } else if (selectedPromoCode === "FLYER10") {
        const discount = Math.min(total * 0.1, 600);
        total = Math.max(0, total - discount);
      }
    }
    return total;
  };

  const totalPrice = calculateTotal();

  // Handle passenger input change
  const handlePassengerChange = (field, value) => {
    setPassenger(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  // Handle payment input change
  const handlePaymentChange = (field, value) => {
    setPayment(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Validate step 1 (passenger details)
  const validatePassengerDetails = () => {
    const newErrors = {};
    
    if (!passenger.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    
    if (!passenger.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    
    if (!passenger.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(passenger.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!passenger.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(passenger.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    
    if (!passenger.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate step 2 (payment details)
  const validatePaymentDetails = () => {
    const newErrors = {};
    
    if (!payment.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
    } else if (!/^\d{16}$/.test(payment.cardNumber.replace(/\D/g, ''))) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }
    
    if (!payment.cardHolder.trim()) {
      newErrors.cardHolder = "Card holder name is required";
    }
    
    if (!payment.expiryMonth || !payment.expiryYear) {
      newErrors.expiry = "Expiry date is required";
    } else {
      const now = new Date();
      const expiryDate = new Date(
        parseInt(payment.expiryYear),
        parseInt(payment.expiryMonth) - 1
      );
      if (expiryDate < now) {
        newErrors.expiry = "Card has expired";
      }
    }
    
    if (!payment.cvv.trim()) {
      newErrors.cvv = "CVV is required";
    } else if (!/^\d{3,4}$/.test(payment.cvv)) {
      newErrors.cvv = "CVV must be 3 or 4 digits";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Apply promo code
  const applyPromoCode = () => {
    if (!selectedPromoCode) return;
    
    const promo = promoCodes.find(p => p.code === selectedPromoCode);
    if (promo && promo.valid) {
      setPromoApplied(true);
      
      // Calculate discount amount
      let discount = 0;
      if (promo.code === "NEWUSER500") discount = 500;
      else if (promo.code === "FLIGHT600") discount = 600;
      else if (promo.code === "FLYER10") {
        discount = Math.min((flight.basePrice || 11105) * 0.1, 600);
      }
      
      setPromoDiscount(discount);
      alert(`Promo code "${promo.code}" applied! You saved ₹${discount}`);
    } else {
      alert("Invalid or expired promo code");
    }
  };

  // Handle next step
  const handleNext = () => {
    if (step === 1) {
      if (validatePassengerDetails()) {
        setStep(2);
      }
    } else if (step === 2) {
      if (validatePaymentDetails()) {
        handleBooking();
      }
    }
  };

  // Handle booking submission
  const handleBooking = async () => {
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate booking reference
      const bookingRef = `TRP${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
      
      const bookingData = {
        bookingReference: bookingRef,
        flight: {
          airline: flight.airline,
          flightNumber: flight.flightNumber,
          departure: `${flight.from} → ${flight.to}`,
          departureTime: flight.departureTime?.toLocaleString() || flight.departure,
          arrivalTime: flight.arrivalTime?.toLocaleString() || flight.arrival,
          duration: flight.duration,
        },
        passenger: passenger,
        payment: {
          lastFour: payment.cardNumber.slice(-4),
          amount: totalPrice,
        },
        bookingTime: new Date().toLocaleString(),
        status: "Confirmed",
        tripCoins: Math.floor(totalPrice / 100) * 25, // 25 coins per 100 rupees
      };
      
      setBookingDetails(bookingData);
      setBookingSuccess(true);
      
      // Callback to parent with booking details
      if (onBookingComplete) {
        onBookingComplete(bookingData);
      }
      
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Format flight date
  const formatFlightDate = (date) => {
    if (date instanceof Date) {
      return date.toLocaleDateString('en-IN', { 
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    }
    return date;
  };

  // Render step 1 - Passenger Details
  const renderPassengerDetails = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-gray-900">Flight Details</h3>
          <span className="text-sm font-semibold text-blue-600">{flight.price}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Plane size={14} className="text-blue-500" />
            <span className="font-medium">{flight.airline}</span>
            <span className="text-gray-500">{flight.flightNumber}</span>
          </div>
          <span className="text-gray-600">{flight.duration}</span>
        </div>
        <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
          <div className="text-center">
            <div className="font-semibold">{flight.departure}</div>
            <div>{flight.from}</div>
          </div>
          <ArrowRight size={16} className="text-gray-400" />
          <div className="text-center">
            <div className="font-semibold">{flight.arrival}</div>
            <div>{flight.to}</div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Passenger Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <input
              type="text"
              value={passenger.firstName}
              onChange={(e) => handlePassengerChange("firstName", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter first name"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              value={passenger.lastName}
              onChange={(e) => handlePassengerChange("lastName", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter last name"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              value={passenger.email}
              onChange={(e) => handlePassengerChange("email", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <div className="flex">
              <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
                <span className="text-gray-700">+91</span>
              </div>
              <input
                type="tel"
                value={passenger.phone}
                onChange={(e) => handlePassengerChange("phone", e.target.value)}
                className={`flex-1 px-4 py-3 border rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="9876543210"
                maxLength="10"
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              value={passenger.gender}
              onChange={(e) => handlePassengerChange("gender", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth *
            </label>
            <input
              type="date"
              value={passenger.dateOfBirth}
              onChange={(e) => handlePassengerChange("dateOfBirth", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
                errors.dateOfBirth ? "border-red-500" : "border-gray-300"
              }`}
              max={new Date().toISOString().split("T")[0]}
            />
            {errors.dateOfBirth && (
              <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nationality
            </label>
            <select
              value={passenger.nationality}
              onChange={(e) => handlePassengerChange("nationality", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="IN">India</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="AE">UAE</option>
              <option value="SG">Singapore</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Frequent Flyer Program (Optional)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <select
                value={passenger.frequentFlyer.program}
                onChange={(e) => handlePassengerChange("frequentFlyer", {
                  ...passenger.frequentFlyer,
                  program: e.target.value
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="">Select program</option>
                <option value="AI">Air India</option>
                <option value="6E">IndiGo</option>
                <option value="SG">SpiceJet</option>
                <option value="UK">Vistara</option>
                <option value="AK">AirAsia</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                value={passenger.frequentFlyer.number}
                onChange={(e) => handlePassengerChange("frequentFlyer", {
                  ...passenger.frequentFlyer,
                  number: e.target.value
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Frequent flyer number"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render step 2 - Payment Details
  const renderPaymentDetails = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
        <h3 className="font-bold text-gray-900 mb-3">Price Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Base Fare</span>
            <span className="font-medium">₹ {(flight.basePrice || 11105).toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Taxes & Fees</span>
            <span className="font-medium">₹ 0</span>
          </div>
          {promoApplied && (
            <div className="flex justify-between text-sm">
              <span className="text-green-600">Promo Discount</span>
              <span className="font-medium text-green-600">-₹ {promoDiscount.toLocaleString()}</span>
            </div>
          )}
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between">
              <span className="font-bold">Total</span>
              <span className="text-xl font-bold text-blue-600">₹ {totalPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Payment Details</h3>
          <div className="flex items-center gap-1 text-sm text-green-600">
            <Shield size={16} />
            <span>Secure Payment</span>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Number *
          </label>
          <input
            type="text"
            value={payment.cardNumber}
            onChange={(e) => handlePaymentChange("cardNumber", e.target.value.replace(/\D/g, '').slice(0, 16))}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
              errors.cardNumber ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="1234 5678 9012 3456"
            maxLength="19"
          />
          {errors.cardNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.cardNumber}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Holder Name *
          </label>
          <input
            type="text"
            value={payment.cardHolder}
            onChange={(e) => handlePaymentChange("cardHolder", e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
              errors.cardHolder ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="JOHN DOE"
          />
          {errors.cardHolder && (
            <p className="mt-1 text-sm text-red-600">{errors.cardHolder}</p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Month *
            </label>
            <select
              value={payment.expiryMonth}
              onChange={(e) => handlePaymentChange("expiryMonth", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
                errors.expiry ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Month</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                <option key={month} value={month.toString().padStart(2, '0')}>
                  {month.toString().padStart(2, '0')}
                </option>
              ))}
            </select>
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Year *
            </label>
            <select
              value={payment.expiryYear}
              onChange={(e) => handlePaymentChange("expiryYear", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
                errors.expiry ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Year</option>
              {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVV *
            </label>
            <input
              type="password"
              value={payment.cvv}
              onChange={(e) => handlePaymentChange("cvv", e.target.value.replace(/\D/g, '').slice(0, 4))}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
                errors.cvv ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="123"
              maxLength="4"
            />
            {errors.cvv && (
              <p className="mt-1 text-sm text-red-600">{errors.cvv}</p>
            )}
          </div>
          
          <div className="col-span-2 md:col-span-1 flex items-end">
            <label className="flex items-center text-sm text-gray-700">
              <input
                type="checkbox"
                checked={payment.saveCard}
                onChange={(e) => handlePaymentChange("saveCard", e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2"
              />
              Save card for future
            </label>
          </div>
        </div>

        {errors.expiry && (
          <p className="mt-1 text-sm text-red-600">{errors.expiry}</p>
        )}
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Apply Promo Code</h3>
        <div className="flex gap-2 mb-4">
          <select
            value={selectedPromoCode}
            onChange={(e) => setSelectedPromoCode(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            <option value="">Select promo code</option>
            {promoCodes.map(promo => (
              <option key={promo.id} value={promo.code}>
                {promo.code} - {promo.description}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={applyPromoCode}
            disabled={!selectedPromoCode || promoApplied}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Apply
          </button>
        </div>
        
        {promoApplied && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-600" />
                <span className="font-medium text-green-800">
                  Promo code applied! You saved ₹{promoDiscount}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setPromoApplied(false);
                  setSelectedPromoCode("");
                  setPromoDiscount(0);
                }}
                className="text-sm text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Render success screen
  const renderSuccessScreen = () => (
    <div className="text-center py-8">
      <div className="mb-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle size={48} className="text-green-600" />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
      <p className="text-gray-600 mb-6">
        Your flight has been successfully booked
      </p>
      
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-md mx-auto mb-6">
        <div className="text-center mb-4">
          <div className="text-sm text-gray-500 mb-1">Booking Reference</div>
          <div className="text-2xl font-bold text-blue-600">
            {bookingDetails?.bookingReference}
          </div>
        </div>
        
        <div className="space-y-3 text-left">
          <div className="flex justify-between">
            <span className="text-gray-600">Flight</span>
            <span className="font-medium">
              {bookingDetails?.flight.airline} {bookingDetails?.flight.flightNumber}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Passenger</span>
            <span className="font-medium">
              {bookingDetails?.passenger.firstName} {bookingDetails?.passenger.lastName}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Amount Paid</span>
            <span className="font-medium">
              ₹ {bookingDetails?.payment.amount.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Status</span>
            <span className="font-medium text-green-600">
              {bookingDetails?.status}
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          type="button"
          onClick={() => window.print()}
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50"
        >
          Print Ticket
        </button>
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {bookingSuccess ? "Booking Confirmed" : "Complete Your Booking"}
            </h2>
            {!bookingSuccess && (
              <div className="flex items-center gap-2 mt-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${flight.airlineLogo ? 'hidden' : 'flex'}`}
                  style={{ backgroundColor: flight.airlineColor }}>
                  {flight.airlineCode}
                </div>
                <span className="text-sm text-gray-600">
                  {flight.airline} • {flight.flightNumber} • {flight.duration}
                </span>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Steps */}
        {!bookingSuccess && (
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              {[1, 2].map((stepNum) => (
                <React.Fragment key={stepNum}>
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      step === stepNum
                        ? "bg-blue-600 text-white"
                        : step > stepNum
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-400"
                    }`}>
                      {step > stepNum ? <CheckCircle size={20} /> : stepNum}
                    </div>
                    <span className="text-xs mt-1 font-medium">
                      {stepNum === 1 ? "Passenger" : "Payment"}
                    </span>
                  </div>
                  {stepNum < 2 && (
                    <div className={`flex-1 h-1 mx-2 ${
                      step > stepNum ? "bg-green-500" : "bg-gray-200"
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {loading ? (
            <div className="text-center py-12">
              <Loader2 className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto" />
              <p className="mt-4 text-gray-600">Processing your booking...</p>
            </div>
          ) : bookingSuccess ? (
            renderSuccessScreen()
          ) : step === 1 ? (
            renderPassengerDetails()
          ) : (
            renderPaymentDetails()
          )}
        </div>

        {/* Footer */}
        {!bookingSuccess && !loading && (
          <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm text-gray-600">Total Amount</div>
                <div className="text-2xl font-bold text-blue-600">
                  ₹ {totalPrice.toLocaleString()}
                </div>
                {promoApplied && (
                  <div className="text-sm text-green-600 mt-1">
                    You saved ₹{promoDiscount} with promo code
                  </div>
                )}
              </div>
              <div className="flex gap-3">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
                  >
                    Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={loading}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 flex-1 sm:flex-none"
                >
                  {step === 1 ? "Continue to Payment" : "Confirm & Pay"}
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
              <Shield size={12} />
              <span>Your payment is secure and encrypted</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingForm;

// ArrowRight component for flight details
const ArrowRight = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);