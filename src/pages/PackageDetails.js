import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Plane,
  Hotel,
  MapPin,
  Star,
  Calendar,
  Users,
  Clock,
  ShieldCheck,
  Award,
  Gift,
  Wifi,
  Dumbbell,
  Utensils,
  Wind,
  Tv,
  Car,
  ChevronLeft,
  Heart,
  Share2,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const PackageDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { package: pkg, searchParams } = location.state || {};
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
  // FIX: Add nights property with default value from pkg.nights
  const [bookingDetails, setBookingDetails] = useState({
    roomType: 'deluxe',
    mealPlan: 'breakfast',
    addOns: [],
    passengers: searchParams?.adults || 2,
    rooms: searchParams?.rooms || 1,
    nights: pkg?.nights || 3,  // ✅ YEH IMPORTANT LINE
    specialRequest: ''
  });

  if (!pkg) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle size={48} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Package not found</h2>
          <button
            onClick={() => navigate('/flight-hotels')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const roomTypes = [
    { id: 'standard', name: 'Standard Room', price: 0, amenities: ['City View', 'Queen Bed', 'Work Desk'] },
    { id: 'deluxe', name: 'Deluxe Room', price: 5000, amenities: ['Sea View', 'King Bed', 'Sitting Area', 'Mini Bar'] },
    { id: 'suite', name: 'Executive Suite', price: 12000, amenities: ['Panoramic View', 'Separate Living', 'Butler Service', 'Jacuzzi'] },
    { id: 'presidential', name: 'Presidential Suite', price: 25000, amenities: ['Private Terrace', 'Dining Room', 'Study', 'Private Pool'] }
  ];

  const mealPlans = [
    { id: 'room-only', name: 'Room Only', price: 0 },
    { id: 'breakfast', name: 'Breakfast Included', price: 1500 },
    { id: 'half-board', name: 'Half Board (Breakfast + Dinner)', price: 3500 },
    { id: 'full-board', name: 'Full Board (All Meals)', price: 5500 },
    { id: 'all-inclusive', name: 'All Inclusive', price: 8500 }
  ];

  const addOns = [
    { id: 'airport-transfer', name: 'Airport Transfer', price: 2500, icon: Car },
    { id: 'spa', name: 'Spa Package', price: 3500, icon: Gift },
    { id: 'city-tour', name: 'City Tour', price: 2000, icon: MapPin },
    { id: 'museum-pass', name: 'Museum Pass', price: 1500, icon: Award },
    { id: 'travel-insurance', name: 'Travel Insurance', price: 1200, icon: ShieldCheck }
  ];

  const calculateTotalPrice = () => {
    let total = pkg.packagePrice;
    
    // Add room upgrade cost
    const selectedRoom = roomTypes.find(r => r.id === bookingDetails.roomType);
    total += (selectedRoom?.price || 0) * bookingDetails.nights * bookingDetails.rooms;
    
    // Add meal plan cost
    const selectedMeal = mealPlans.find(m => m.id === bookingDetails.mealPlan);
    total += (selectedMeal?.price || 0) * bookingDetails.nights * bookingDetails.rooms * bookingDetails.passengers;
    
    // Add add-ons
    bookingDetails.addOns.forEach(addonId => {
      const addon = addOns.find(a => a.id === addonId);
      total += addon?.price || 0;
    });
    
    return total;
  };

  const handleBooking = () => {
    setShowBookingModal(true);
  };

  const confirmBooking = () => {
    setShowBookingModal(false);
    navigate('/booking-confirmation', {
      state: {
        package: pkg,
        bookingDetails,
        totalPrice: calculateTotalPrice()
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft size={20} />
              <span>Back to search</span>
            </button>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Share2 size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Heart size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hotel Header */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-96">
                <img
                  src={pkg.hotel.image}
                  alt={pkg.hotel.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <span className="text-2xl">{pkg.hotel.flag}</span>
                    <h1 className="text-3xl font-bold">{pkg.hotel.name}</h1>
                  </div>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{pkg.hotel.location}, {pkg.hotel.city}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span>{pkg.hotel.rating} ({pkg.hotel.reviews?.toLocaleString() || 0} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-md">
              <div className="border-b px-6">
                <div className="flex gap-6">
                  {['overview', 'rooms', 'amenities'].map((tab) => (
                    <button
                      key={tab}
                      className={`py-4 px-2 font-medium capitalize border-b-2 transition-colors ${
                        activeTab === tab
                          ? 'border-blue-600 text-blue-600'
                          : 'border-transparent text-gray-600 hover:text-gray-900'
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">About the hotel</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {pkg.hotel.description || `Experience luxury at its finest at ${pkg.hotel.name}. 
                        Located in the heart of ${pkg.hotel.city}, this ${pkg.hotel.starRating || 5}-star property 
                        offers world-class amenities and exceptional service.`}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">Flight Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-3">
                            <Plane size={18} className="text-blue-600" />
                            <span className="font-medium">Outbound Flight</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded ml-auto">
                              {pkg.flight?.outbound?.flightNumber || 'BA123'}
                            </span>
                          </div>
                          <div className="flex justify-between mb-2">
                            <div>
                              <div className="text-lg font-bold">{pkg.flight?.outbound?.departureTime || '08:30'}</div>
                              <div className="text-sm text-gray-600">{searchParams?.fromCity || 'London'} ({searchParams?.fromCode || 'LON'})</div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold">{pkg.flight?.outbound?.arrivalTime || '10:45'}</div>
                              <div className="text-sm text-gray-600">{pkg.hotel.city} ({searchParams?.toCode || pkg.hotel.city?.slice(0,3).toUpperCase() || 'PAR'})</div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">
                            {pkg.flight?.outbound?.airline || 'British Airways'} • {pkg.flight?.outbound?.duration || '2h 15m'} • {pkg.flight?.outbound?.class || 'Economy'}
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-3">
                            <Plane size={18} className="text-gray-600" />
                            <span className="font-medium">Return Flight</span>
                            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded ml-auto">
                              {pkg.flight?.inbound?.flightNumber || 'BA456'}
                            </span>
                          </div>
                          <div className="flex justify-between mb-2">
                            <div>
                              <div className="text-lg font-bold">{pkg.flight?.inbound?.departureTime || '19:30'}</div>
                              <div className="text-sm text-gray-600">{pkg.hotel.city} ({searchParams?.toCode || pkg.hotel.city?.slice(0,3).toUpperCase() || 'PAR'})</div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold">{pkg.flight?.inbound?.arrivalTime || '21:45'}</div>
                              <div className="text-sm text-gray-600">{searchParams?.fromCity || 'London'} ({searchParams?.fromCode || 'LON'})</div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">
                            {pkg.flight?.inbound?.airline || 'British Airways'} • {pkg.flight?.inbound?.duration || '2h 15m'} • {pkg.flight?.inbound?.class || 'Economy'}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">Package Includes</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {pkg.includes?.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle size={16} className="text-green-500" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        )) || (
                          <>
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle size={16} className="text-green-500" />
                              <span className="text-gray-700">Flight</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle size={16} className="text-green-500" />
                              <span className="text-gray-700">Hotel</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle size={16} className="text-green-500" />
                              <span className="text-gray-700">Breakfast</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'rooms' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Available Room Types</h3>
                    {roomTypes.map((room) => (
                      <div
                        key={room.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          bookingDetails.roomType === room.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'hover:border-gray-400'
                        }`}
                        onClick={() => setBookingDetails(prev => ({ ...prev, roomType: room.id }))}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-gray-800">{room.name}</h4>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {room.amenities.map((amenity, idx) => (
                                <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                  {amenity}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            {room.price > 0 ? (
                              <>
                                <div className="text-lg font-bold text-blue-600">
                                  +₹{room.price.toLocaleString()}
                                </div>
                                <div className="text-xs text-gray-500">per night</div>
                              </>
                            ) : (
                              <span className="text-green-600 font-medium">Included</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'amenities' && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Hotel Amenities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {pkg.hotel.amenities?.map((amenity, idx) => {
                        let Icon = Wifi;
                        if (amenity.includes('Pool')) Icon = Dumbbell;
                        if (amenity.includes('Spa')) Icon = Gift;
                        if (amenity.includes('Restaurant')) Icon = Utensils;
                        if (amenity.includes('AC')) Icon = Wind;
                        if (amenity.includes('TV')) Icon = Tv;
                        if (amenity.includes('Parking')) Icon = Car;
                        
                        return (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Icon size={20} className="text-blue-600" />
                            <span className="text-gray-700">{amenity}</span>
                          </div>
                        );
                      }) || (
                        <>
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Wifi size={20} className="text-blue-600" />
                            <span className="text-gray-700">Free WiFi</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Dumbbell size={20} className="text-blue-600" />
                            <span className="text-gray-700">Pool</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Utensils size={20} className="text-blue-600" />
                            <span className="text-gray-700">Restaurant</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-20">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Customize Your Package</h3>
              
              {/* Room Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Room Type
                </label>
                <select
                  value={bookingDetails.roomType}
                  onChange={(e) => setBookingDetails(prev => ({ ...prev, roomType: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {roomTypes.map(room => (
                    <option key={room.id} value={room.id}>
                      {room.name} {room.price > 0 ? `(+₹${room.price}/night)` : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Meal Plan */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meal Plan
                </label>
                <select
                  value={bookingDetails.mealPlan}
                  onChange={(e) => setBookingDetails(prev => ({ ...prev, mealPlan: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {mealPlans.map(meal => (
                    <option key={meal.id} value={meal.id}>
                      {meal.name} {meal.price > 0 ? `(+₹${meal.price}/person/day)` : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Add-ons */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Add-ons
                </label>
                <div className="space-y-2">
                  {addOns.map((addon) => {
                    const Icon = addon.icon;
                    return (
                      <label key={addon.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={bookingDetails.addOns.includes(addon.id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setBookingDetails(prev => ({
                                  ...prev,
                                  addOns: [...prev.addOns, addon.id]
                                }));
                              } else {
                                setBookingDetails(prev => ({
                                  ...prev,
                                  addOns: prev.addOns.filter(id => id !== addon.id)
                                }));
                              }
                            }}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <Icon size={16} className="text-gray-500" />
                          <span className="text-sm text-gray-700">{addon.name}</span>
                        </div>
                        <span className="text-sm font-medium">₹{addon.price}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Special Request */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Request (Optional)
                </label>
                <textarea
                  value={bookingDetails.specialRequest}
                  onChange={(e) => setBookingDetails(prev => ({ ...prev, specialRequest: e.target.value }))}
                  placeholder="e.g., Late check-in, high floor, etc."
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Price Breakdown */}
              <div className="border-t pt-4 mb-6">
                <h4 className="font-medium text-gray-800 mb-3">Price Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Package ({bookingDetails.nights} nights)</span>
                    <span className="font-medium">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(pkg.packagePrice)}</span>
                  </div>
                  
                  {bookingDetails.roomType !== 'standard' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Room Upgrade</span>
                      <span className="font-medium text-blue-600">
                        +{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(
                          (roomTypes.find(r => r.id === bookingDetails.roomType)?.price || 0) * bookingDetails.nights * bookingDetails.rooms
                        )}
                      </span>
                    </div>
                  )}
                  
                  {bookingDetails.mealPlan !== 'room-only' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Meal Plan</span>
                      <span className="font-medium text-blue-600">
                        +{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(
                          (mealPlans.find(m => m.id === bookingDetails.mealPlan)?.price || 0) * bookingDetails.nights * bookingDetails.rooms * bookingDetails.passengers
                        )}
                      </span>
                    </div>
                  )}
                  
                  {bookingDetails.addOns.map(addonId => {
                    const addon = addOns.find(a => a.id === addonId);
                    return (
                      <div key={addonId} className="flex justify-between">
                        <span className="text-gray-600">{addon?.name}</span>
                        <span className="font-medium text-blue-600">
                          +{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(addon?.price || 0)}
                        </span>
                      </div>
                    );
                  })}
                  
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between text-base font-bold">
                      <span>Total</span>
                      <span className="text-blue-600">
                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(calculateTotalPrice())}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <button
                onClick={handleBooking}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar size={18} />
                Book Now
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                ✓ Free cancellation • ✓ No booking fee • ✓ Instant confirmation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Confirm Your Booking</h3>
              <p className="text-gray-600">Please review your booking details</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Hotel</span>
                <span className="font-medium text-gray-800">{pkg.hotel.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Room Type</span>
                <span className="font-medium text-gray-800">
                  {roomTypes.find(r => r.id === bookingDetails.roomType)?.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Meal Plan</span>
                <span className="font-medium text-gray-800">
                  {mealPlans.find(m => m.id === bookingDetails.mealPlan)?.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration</span>
                <span className="font-medium text-gray-800">{bookingDetails.nights} nights</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Travelers</span>
                <span className="font-medium text-gray-800">{bookingDetails.passengers} Adults</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Rooms</span>
                <span className="font-medium text-gray-800">{bookingDetails.rooms}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-4">
                <span>Total Amount</span>
                <span className="text-blue-600">
                  {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(calculateTotalPrice())}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowBookingModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmBooking}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageDetails;