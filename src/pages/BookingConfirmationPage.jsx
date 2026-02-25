import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  CheckCircle, MapPin, Calendar, Clock, Users, Download,
  Mail, Phone, Printer, Share2, Heart, Award, Gift,
  ChevronRight, Star, MessageCircle, Headphones, FileText,
  CreditCard, Wallet, Smartphone, Ticket, Coffee, Camera,
  Sunset, Moon, Sun, Sparkles, Shield, Cloud, Send,
  ExternalLink, Copy, Check, AlertCircle, Info
} from 'lucide-react';

const BookingConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state;
  const [showCelebration, setShowCelebration] = useState(true);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('details');

  useEffect(() => {
    const timer = setTimeout(() => setShowCelebration(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const bookingId = `HK${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

  if (!bookingData) {
    navigate('/');
    return null;
  }

  const { experience, bookingDetails } = bookingData;

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  const handleCopyBookingId = () => {
    navigator.clipboard.writeText(bookingId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTimeLabel = (timeCode) => {
    const timeMap = {
      '09:00': '09:00 AM',
      '10:00': '10:00 AM',
      '11:00': '11:00 AM',
      '12:00': '12:00 PM',
      '14:00': '02:00 PM',
      '15:00': '03:00 PM',
      '16:00': '04:00 PM',
      '18:00': '06:00 PM',
      '19:00': '07:00 PM'
    };
    return timeMap[timeCode] || timeCode || '10:00 AM';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-['Inter',sans-serif]">
      {/* Celebration Overlay */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/90 via-blue-600/90 to-indigo-600/90 backdrop-blur-sm" />
          <div className="relative text-center text-white animate-[scaleIn_0.5s_ease-out]">
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-white/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
              </div>
              <div className="relative w-32 h-32 bg-white/30 rounded-full flex items-center justify-center mx-auto backdrop-blur-lg border-4 border-white/50">
                <CheckCircle className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
              Confirmed! 🎉
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-lg mx-auto">
              Your adventure awaits in Hong Kong
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse [animation-delay:200ms]" />
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse [animation-delay:400ms]" />
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Bar */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
                <span className="font-medium">Home</span>
              </button>
              <div className="h-6 w-px bg-gray-200" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Booking Confirmed</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Printer className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Success Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full mb-6 border-8 border-white shadow-lg">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            Booking Confirmed!
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your experience is secured. We've sent the e-ticket to your registered email.
          </p>
        </div>

        {/* Booking ID Card */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 mb-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-16 -mb-16" />
          
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-sm font-medium text-white/80 bg-white/20 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4" />
                Booking Reference
              </span>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl md:text-4xl font-mono font-bold tracking-wider">
                  {bookingId}
                </h2>
                <button
                  onClick={handleCopyBookingId}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors group"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-300" />
                  ) : (
                    <Copy className="w-5 h-5 text-white/80 group-hover:text-white" />
                  )}
                </button>
              </div>
              <p className="text-white/80 mt-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Booked on {new Date().toLocaleDateString('en-US', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </p>
            </div>
            
            <div className="flex gap-3 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <Download className="w-5 h-5" />
                Download
              </button>
              <button className="flex-1 md:flex-none px-6 py-3 bg-white/20 text-white rounded-xl font-semibold hover:bg-white/30 transition-all flex items-center justify-center gap-2 backdrop-blur-sm border border-white/30">
                <Mail className="w-5 h-5" />
                Email
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Booking Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience Card */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="sm:w-36 h-36 rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          <Ticket className="w-3 h-3" />
                          {experience.category}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{experience.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-50 px-3 py-2 rounded-xl">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-gray-900">{experience.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        {experience.duration || 'Full Day'}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        {bookingDetails.travelers} {bookingDetails.travelers === 1 ? 'Adult' : 'Adults'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Timeline */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Your Booking Timeline
              </h3>
              
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
                
                <div className="space-y-8">
                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 w-16 h-16 bg-blue-100 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 border-4 border-white shadow-sm">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-sm text-gray-500 mb-1">Date & Time</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {formatDate(bookingDetails.date)}
                      </p>
                      <p className="text-gray-600 flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4" />
                        {getTimeLabel(bookingDetails.time)}
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 w-16 h-16 bg-green-100 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 border-4 border-white shadow-sm">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-sm text-gray-500 mb-1">Meeting Point</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {experience.meetingPoint || 'Main Entrance'}
                      </p>
                      <p className="text-gray-600 mt-1">
                        Please arrive 15 minutes before your scheduled time
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 w-16 h-16 bg-purple-100 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 border-4 border-white shadow-sm">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-sm text-gray-500 mb-1">Your Party</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {bookingDetails.travelers} {bookingDetails.travelers === 1 ? 'Traveler' : 'Travelers'}
                      </p>
                      {bookingDetails.addOns?.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {bookingDetails.addOns.map((addOn) => (
                            <span key={addOn.id} className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs">
                              {addOn.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Payment Summary & Support */}
          <div className="space-y-8">
            {/* Payment Summary Card */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm sticky top-28">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-5">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Summary
                </h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Base Price ({bookingDetails.travelers} {bookingDetails.travelers === 1 ? 'adult' : 'adults'})</span>
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(experience.price * bookingDetails.travelers)}
                    </span>
                  </div>
                  
                  {bookingDetails.addOns?.map((addOn) => (
                    <div key={addOn.id} className="flex justify-between items-center">
                      <span className="text-gray-600 flex items-center gap-2">
                        <Gift className="w-4 h-4 text-gray-400" />
                        {addOn.name}
                      </span>
                      <span className="font-semibold text-gray-900">{formatCurrency(addOn.price)}</span>
                    </div>
                  ))}
                  
                  {bookingDetails.promoApplied && (
                    <div className="flex justify-between items-center text-green-600">
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Promo Discount (HOLIDAY10)
                      </span>
                      <span className="font-semibold">
                        -{formatCurrency(bookingDetails.discount || experience.price * bookingDetails.travelers * 0.1)}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Taxes & Fees</span>
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(bookingDetails.tax || Math.round((experience.price * bookingDetails.travelers) * 0.12))}
                    </span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">Total Amount</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {formatCurrency(bookingDetails.totalAmount)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-right">
                      Paid via {bookingDetails.paymentMethod === 'card' ? 'Credit Card' : 
                                 bookingDetails.paymentMethod === 'upi' ? 'UPI' : 'Digital Wallet'}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-700">Payment Status</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      <CheckCircle className="w-4 h-4" />
                      Paid
                    </span>
                  </div>
                  
                  <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Add to Calendar
                  </button>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 border border-blue-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">24/7 Concierge Support</h4>
                  <p className="text-sm text-gray-600">We're here to help, anytime</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <button className="w-full px-4 py-3.5 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-between group border border-gray-200">
                  <span className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                    Live Chat
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="w-full px-4 py-3.5 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-between group border border-gray-200">
                  <span className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    Call +852 1234 5678
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </button>
                
                <button className="w-full px-4 py-3.5 bg-white text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-between group border border-gray-200">
                  <span className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    Email Support
                  </span>
                  <Send className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Important Info Card */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Info className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Important Information</h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      Free cancellation up to 24 hours before
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      COVID-19 safety measures implemented
                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                      Mobile ticket accepted at entrance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Next Section */}
        <div className="mt-12 bg-white rounded-3xl border border-gray-200 p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600" />
            Your Journey Ahead
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div className="pt-8 pl-4">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <Download className="w-7 h-7 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Save Your Ticket</h4>
                <p className="text-sm text-gray-600">
                  Download or email your mobile ticket for quick access
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div className="pt-8 pl-4">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <MapPin className="w-7 h-7 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Find the Meeting Point</h4>
                <p className="text-sm text-gray-600">
                  Check the location and plan your route in advance
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div className="pt-8 pl-4">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <Camera className="w-7 h-7 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Enjoy & Share</h4>
                <p className="text-sm text-gray-600">
                  Capture memories and tag #HolidayBale for a chance to be featured
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Experiences */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-blue-600" />
              Complete Your Hong Kong Adventure
            </h3>
            <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
              View all
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop"
                    alt="Recommended experience"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                    Ocean Park Hong Kong
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">4.7</span>
                    </div>
                    <span className="text-sm text-gray-500">(12.4k reviews)</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-lg font-bold text-gray-900">₹4,599</span>
                    <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                      20% off
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Need to make changes? Contact support within 24 hours of your booking
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Browse More
            </button>
            <button
              onClick={() => navigate('/my-bookings')}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-200"
            >
              View My Bookings
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Add custom animations to Tailwind config or use inline style */}
      <style>
        {`
          @keyframes fadeOut {
            from { opacity: 1; visibility: visible; }
            to { opacity: 0; visibility: hidden; }
          }
          .animate-fadeOut {
            animation: fadeOut 0.6s ease-out forwards;
            animation-delay: 2.2s;
          }
          
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          
          @keyframes ping {
            75%, 100% {
              transform: scale(2);
              opacity: 0;
            }
          }
          
          .line-clamp-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default BookingConfirmationPage;