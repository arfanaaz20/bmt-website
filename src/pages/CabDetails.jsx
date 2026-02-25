// src/pages/CabDetails.jsx
import React, { useState } from 'react';
import { 
  ArrowLeft, Star, Check, Clock, MapPin, Shield, 
  Users, Calendar, Car, Fuel, Gauge, Briefcase, Wifi,
  CreditCard, Heart, Share2, ChevronRight,
  User, Phone, X, CheckCircle, CircleDashed, Award
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

// ✅ FORMAT DATE FUNCTION - FIXES THE ERROR
const formatDate = (dateString) => {
  if (!dateString) return 'Today';
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Today';
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  } catch (error) {
    return 'Today';
  }
};

const CabDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const car = location.state?.car;
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Car className="w-10 h-10 text-blue-500" />
          </div>
          <p className="text-gray-600 mb-4">No car details found</p>
          <button 
            onClick={() => navigate('/cab')}
            className="bg-blue-500 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-blue-600 transition-all shadow-md"
          >
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  const carImages = [
    car.image || "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&h=500&fit=crop"
  ];

  const addons = [
    { id: 1, name: "GPS Navigation", price: 350, icon: <MapPin className="w-5 h-5" /> },
    { id: 2, name: "Child Seat", price: 250, icon: <Users className="w-5 h-5" /> },
    { id: 3, name: "Additional Driver", price: 500, icon: <User className="w-5 h-5" /> },
    { id: 4, name: "WiFi Hotspot", price: 400, icon: <Wifi className="w-5 h-5" /> },
    { id: 5, name: "Insurance Premium", price: 800, icon: <Shield className="w-5 h-5" /> },
    { id: 6, name: "Extra Luggage", price: 300, icon: <Briefcase className="w-5 h-5" /> }
  ];

  const reviews = [
    { id: 1, name: "Rajesh Kumar", rating: 5, date: "2 days ago", comment: "Excellent car condition. Very smooth drive. The pickup and drop process was seamless.", avatar: "RK" },
    { id: 2, name: "Priya Sharma", rating: 4, date: "1 week ago", comment: "Good service. Car was clean and well maintained. Would recommend.", avatar: "PS" },
    { id: 3, name: "Amit Patel", rating: 5, date: "2 weeks ago", comment: "Great experience. The staff was very helpful and the car was in perfect condition.", avatar: "AP" }
  ];

  const toggleAddon = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const calculateTotal = () => {
    const basePrice = car.price || 8495;
    const addonTotal = selectedAddons.reduce((sum, id) => {
      const addon = addons.find(a => a.id === id);
      return sum + (addon?.price || 0);
    }, 0);
    return basePrice + addonTotal;
  };

  const handleBookNow = () => {
    const bookingData = {
      ...car,
      selectedAddons: selectedAddons.map(id => addons.find(a => a.id === id)),
      totalPrice: calculateTotal(),
      bookingDate: new Date().toISOString()
    };
    navigate('/cab-booking', { state: { booking: bookingData } });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <div className="bg-white border-b border-blue-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate(-1)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-50 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
              
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                <span className="text-sm text-gray-700">{isFavorite ? 'Saved' : 'Save'}</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-700">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Car Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="relative h-[400px] bg-gray-50">
                <img 
                  src={carImages[selectedImage]} 
                  className="w-full h-full object-contain p-8"
                  alt={car.name}
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  {car.badge || "Premium"}
                </span>
              </div>
              <div className="flex gap-3 p-4 border-t border-gray-100 overflow-x-auto">
                {carImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-24 h-20 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      selectedImage === idx 
                        ? 'border-blue-500 shadow-md' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`View ${idx + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Car Title & Rating */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{car.name}</h1>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-lg text-gray-600">{car.category}</span>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-lg font-bold text-gray-900 ml-1">{car.rating || 4.5}</span>
                      </div>
                      <span className="text-gray-500">({car.reviewCount || 461} reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Starting from</span>
                    <div className="flex items-center gap-2">
                      {car.originalPrice && (
                        <span className="text-gray-400 line-through">₹{car.originalPrice?.toLocaleString()}</span>
                      )}
                      <span className="text-3xl font-bold text-blue-600">₹{car.price?.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Seats</p>
                    <p className="font-semibold text-gray-900">{car.seats || 5} Passengers</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Luggage</p>
                    <p className="font-semibold text-gray-900">{car.bags || 2} Bags</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Gauge className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Transmission</p>
                    <p className="font-semibold text-gray-900">{car.transmission || 'Automatic'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Fuel className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Fuel</p>
                    <p className="font-semibold text-gray-900">{car.fuel || 'Petrol'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features & Amenities */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">Air Conditioning</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">Bluetooth</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">USB Charger</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">Rear Camera</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">GPS Navigation</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">ABS</span>
                </div>
              </div>
            </div>

            {/* Add-ons */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Optional Add-ons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addons.map(addon => (
                  <div 
                    key={addon.id}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      selectedAddons.includes(addon.id)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => toggleAddon(addon.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        selectedAddons.includes(addon.id) ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {addon.icon}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{addon.name}</p>
                        <p className="text-sm text-gray-500">+₹{addon.price}/day</p>
                      </div>
                    </div>
                    {selectedAddons.includes(addon.id) && (
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <h2 className="text-xl font-bold text-gray-900">Customer Reviews</h2>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">{car.rating || 4.5}</span>
                  <span className="text-gray-500">/5</span>
                  <div className="flex ml-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(car.rating || 4.5) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {reviews.map(review => (
                  <div key={review.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-600">{review.avatar}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{review.name}</p>
                          <p className="text-xs text-gray-500">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium text-gray-900 ml-1">{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 ml-13">{review.comment}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 font-medium text-sm hover:text-blue-700 flex items-center justify-center gap-2">
                View all reviews
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Booking Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Base Price</span>
                    <span className="font-semibold text-gray-900">₹{car.price?.toLocaleString()}</span>
                  </div>
                  
                  {selectedAddons.length > 0 && (
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm font-medium text-gray-900 mb-3">Selected Add-ons</p>
                      {selectedAddons.map(id => {
                        const addon = addons.find(a => a.id === id);
                        return (
                          <div key={id} className="flex justify-between items-center mb-2 text-sm">
                            <span className="text-gray-600">{addon?.name}</span>
                            <span className="font-medium text-gray-900">+₹{addon?.price}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium text-gray-900">1 day</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">GST</span>
                      <span className="font-medium text-gray-900">Included</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-gray-900">Total Amount</span>
                    <span className="text-2xl font-bold text-blue-600">₹{calculateTotal().toLocaleString()}</span>
                  </div>
                  
                  <button 
                    onClick={() => setShowBookingModal(true)}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
                  >
                    <CreditCard className="w-5 h-5" />
                    Book Now
                  </button>
                  
                  <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Check className="w-4 h-4 text-green-500" />
                      Free Cancellation
                    </span>
                    <span className="flex items-center gap-1">
                      <Shield className="w-4 h-4 text-blue-500" />
                      Secure Payment
                    </span>
                  </div>
                </div>
              </div>

              {/* Supplier Info */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full border-2 border-blue-200 flex items-center justify-center">
                    <Car className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{car.supplier || 'AVIS'}</h4>
                    <p className="text-xs text-gray-600">Verified Partner</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700">Near Airport</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-700">Open 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h4 className="font-bold text-gray-900 mb-3">Cancellation Policy</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span className="text-gray-600">Free cancellation up to 24 hours before pickup</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CircleDashed className="w-4 h-4 text-gray-400 mt-0.5" />
                    <span className="text-gray-600">50% refund for cancellations within 24 hours</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="w-4 h-4 text-gray-400 mt-0.5" />
                    <span className="text-gray-600">No refund for no-shows</span>
                  </div>
                </div>
              </div>

              {/* Pickup Information - Shows the date using formatDate */}
              {car.rentalPickupDate && (
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    Pickup Information
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium text-gray-900">{formatDate(car.rentalPickupDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium text-gray-900">{car.pickupLocation || 'Airport'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium text-gray-900">10:00 AM</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Confirm Booking</h3>
              <button 
                onClick={() => setShowBookingModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                <img src={car.image} className="w-20 h-16 object-contain" alt={car.name} />
                <div>
                  <p className="font-bold text-gray-900">{car.name}</p>
                  <p className="text-sm text-gray-600">{car.category}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Pickup</span>
                  <span className="font-medium text-gray-900">{car.pickupLocation || 'Airport'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Date</span>
                  <span className="font-medium text-gray-900">{formatDate(car.rentalPickupDate)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Amount</span>
                  <span className="text-lg font-bold text-blue-600">₹{calculateTotal().toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setShowBookingModal(false)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={handleBookNow}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-medium transition-colors"
              >
                Confirm & Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CabDetail;