import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state;
  
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  });
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!bookingData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-lg mb-2">No booking data found</div>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Go Back to Search
          </button>
        </div>
      </div>
    );
  }

  const { bus, selectedSeats, passengerDetails, totalAmount, bookingId } = bookingData;

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'cardNumber') {
      // Format card number with spaces
      const formatted = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      if (formatted.replace(/\s/g, '').length <= 16) {
        setCardDetails(prev => ({ ...prev, [name]: formatted }));
      }
    } else if (name === 'cvv') {
      if (value.length <= 3 && /^\d*$/.test(value)) {
        setCardDetails(prev => ({ ...prev, [name]: value }));
      }
    } else {
      setCardDetails(prev => ({ ...prev, [name]: value }));
    }
  };

  const validatePayment = () => {
    if (paymentMethod === 'card') {
      if (!cardDetails.cardNumber || cardDetails.cardNumber.replace(/\s/g, '').length !== 16) {
        alert('Please enter a valid 16-digit card number');
        return false;
      }
      if (!cardDetails.cardHolder) {
        alert('Please enter card holder name');
        return false;
      }
      if (!cardDetails.expiryMonth || !cardDetails.expiryYear) {
        alert('Please enter card expiry date');
        return false;
      }
      if (!cardDetails.cvv || cardDetails.cvv.length !== 3) {
        alert('Please enter a valid CVV');
        return false;
      }
    } else if (paymentMethod === 'upi') {
      if (!upiId || !upiId.includes('@')) {
        alert('Please enter a valid UPI ID');
        return false;
      }
    }
    return true;
  };

  const handlePayment = async () => {
    if (!validatePayment()) return;
    
    setIsProcessing(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock payment success
      setPaymentSuccess(true);
      
      // Create booking in backend
      const bookingPayload = {
        bookingId: bookingId,
        busId: bus.id,
        busName: bus.name,
        busNumber: bus.busNumber,
        fromCity: bookingData.searchParams.fromCity,
        toCity: bookingData.searchParams.toCity,
        travelDate: bookingData.searchParams.date,
        departureTime: bus.departureTime,
        arrivalTime: bus.arrivalTime,
        seats: selectedSeats.map(s => s.number),
        passengerDetails: passengerDetails,
        totalAmount: totalAmount * 1.18, // Including tax
        paymentMethod: paymentMethod,
        paymentStatus: 'completed',
        bookingStatus: 'confirmed',
        bookingTime: new Date().toISOString()
      };
      
      // Send booking to API
      const API_BASE = 'https://bmt-aw7b.onrender.com/api';
      await axios.post(`${API_BASE}/bus-bookings`, bookingPayload);
      
      // Show success and redirect
      setTimeout(() => {
        setBookingConfirmed(true);
      }, 1000);
      
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const formatCurrency = (amount) => {
    return `₹${amount.toFixed(2)}`;
  };

  const totalWithTax = totalAmount * 1.18;

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Booking Confirmed!</h1>
            <p className="text-gray-600 mb-6">Your bus tickets have been booked successfully</p>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
              <div className="text-2xl font-bold text-green-600 mb-2">{bookingId}</div>
              <p className="text-green-700">Booking Reference Number</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-gray-700 mb-3">Journey Details</h3>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Route:</span>
                    <span className="font-medium">{bookingData.searchParams.fromCity} → {bookingData.searchParams.toCity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">{new Date(bookingData.searchParams.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium">{bus.departureTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bus:</span>
                    <span className="font-medium">{bus.name}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-gray-700 mb-3">Passenger Details</h3>
                <div className="space-y-2 text-left">
                  {passengerDetails.map((passenger, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">Passenger {index + 1}:</span>
                      <span className="font-medium">{passenger.name} (Seat: {selectedSeats[index]?.number})</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-2 border-t">
                    <span className="text-gray-600">Total Amount:</span>
                    <span className="font-bold text-blue-600">{formatCurrency(totalWithTax)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => navigate('/')}
                className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Book Another Ticket
              </button>
              
              <button
                onClick={() => window.print()}
                className="w-full md:w-auto px-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Print Ticket
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-500">
              <p>A confirmation email has been sent to your registered email address.</p>
              <p className="mt-1">Please arrive at the boarding point 30 minutes before departure.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Complete Your Payment</h1>
          <p className="text-gray-600">Secure payment powered by SSL encryption</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Payment Methods */}
          <div className="lg:w-2/3">
            {/* Payment Methods */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Select Payment Method</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 ${paymentMethod === 'card' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
                      {paymentMethod === 'card' && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">Credit/Debit Card</div>
                      <div className="text-sm text-gray-500">Visa, Mastercard, RuPay</div>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${paymentMethod === 'upi' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 ${paymentMethod === 'upi' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
                      {paymentMethod === 'upi' && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">UPI</div>
                      <div className="text-sm text-gray-500">Google Pay, PhonePe, Paytm</div>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${paymentMethod === 'netbanking' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 ${paymentMethod === 'netbanking' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
                      {paymentMethod === 'netbanking' && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">Net Banking</div>
                      <div className="text-sm text-gray-500">All major banks</div>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => setPaymentMethod('wallet')}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${paymentMethod === 'wallet' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 ${paymentMethod === 'wallet' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
                      {paymentMethod === 'wallet' && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">Wallet</div>
                      <div className="text-sm text-gray-500">Paytm, Mobikwik, Amazon Pay</div>
                    </div>
                  </div>
                </button>
              </div>

              {/* Card Payment Form */}
              {paymentMethod === 'card' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="cardNumber"
                        value={cardDetails.cardNumber}
                        onChange={handleCardChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        maxLength="19"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Holder Name</label>
                    <input
                      type="text"
                      name="cardHolder"
                      value={cardDetails.cardHolder}
                      onChange={handleCardChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Month</label>
                      <select
                        name="expiryMonth"
                        value={cardDetails.expiryMonth}
                        onChange={handleCardChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">MM</option>
                        {Array.from({ length: 12 }, (_, i) => (
                          <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                            {String(i + 1).padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Year</label>
                      <select
                        name="expiryYear"
                        value={cardDetails.expiryYear}
                        onChange={handleCardChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">YYYY</option>
                        {Array.from({ length: 10 }, (_, i) => {
                          const year = new Date().getFullYear() + i;
                          return (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                      <div className="relative">
                        <input
                          type="password"
                          name="cvv"
                          value={cardDetails.cvv}
                          onChange={handleCardChange}
                          placeholder="123"
                          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          maxLength="3"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* UPI Payment Form */}
              {paymentMethod === 'upi' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">UPI ID</label>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="username@upi"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-gray-500 mt-2">Enter your UPI ID (e.g., username@okicici, username@ybl)</p>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div className="text-sm text-blue-700">
                        After clicking "Pay Now", you will be redirected to your UPI app to complete the payment
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Other Payment Methods */}
              {(paymentMethod === 'netbanking' || paymentMethod === 'wallet') && (
                <div className="text-center py-8">
                  <div className="text-gray-500 mb-4">You will be redirected to the payment gateway</div>
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">Complete your payment on the secure payment page</p>
                </div>
              )}

              {/* Security Info */}
              <div className="mt-8 pt-6 border-t">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Your payment is secured with 256-bit SSL encryption</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Booking Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">{new Date(bookingData.searchParams.date).toLocaleDateString()}</div>
                    <div className="text-sm text-gray-600">{bus.departureTime} • {bus.duration}</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Fare</span>
                    <span>{formatCurrency(totalAmount)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxes & Fees</span>
                    <span>{formatCurrency(totalAmount * 0.18)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Convenience Fee</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Amount</span>
                      <span className="text-blue-600">{formatCurrency(totalWithTax)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Passenger List */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-700 mb-3">Passengers</h3>
                <div className="space-y-2">
                  {passengerDetails.map((passenger, index) => (
                    <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                      <div>
                        <div className="font-medium">{passenger.name || `Passenger ${index + 1}`}</div>
                        <div className="text-sm text-gray-500">
                          {passenger.age && `${passenger.age} yrs`} {passenger.gender && `• ${passenger.gender}`}
                        </div>
                      </div>
                      <div className="text-sm font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {selectedSeats[index]?.number || 'Seat'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Button */}
              <button
                onClick={handlePayment}
                disabled={isProcessing || paymentSuccess}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-colors ${isProcessing || paymentSuccess
                  ? 'bg-green-600 text-white cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing Payment...
                  </div>
                ) : paymentSuccess ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Payment Successful!
                  </div>
                ) : (
                  `Pay ${formatCurrency(totalWithTax)}`
                )}
              </button>

              {/* Terms and Conditions */}
              <div className="mt-6 text-xs text-gray-500">
                <p>By proceeding, you agree to our Terms & Conditions and Privacy Policy.</p>
                <p className="mt-2">All fares are inclusive of taxes. Free cancellation up to 24 hours before departure.</p>
              </div>

              {/* Need Help */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-medium text-sm">Need Help?</div>
                    <div className="text-sm text-gray-600">Call us at 1800-123-4567</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;