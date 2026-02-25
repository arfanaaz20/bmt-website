import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Star, Calendar, MapPin, Users, Ship, Check,
  ChevronRight, Heart, Share2, Clock, DollarSign, Shield,
  Info, Filter, X, ChevronDown, ChevronUp, CreditCard,
  Award, Coffee, Wifi, Utensils, Waves, Sun, Briefcase,
  Camera, Phone, Mail, Facebook, Twitter, Instagram, Youtube
} from 'lucide-react';

export default function CruiseDetailsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('itinerary');
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [liked, setLiked] = useState(false);
  
  const cruiseData = {
    id: 87452,
    name: 'Le Soléal',
    title: '13D12N • Bali - Komodo - East Nusa Tenggara - Kalabahi Timur - Maluku Barat Daya Regency - Maluku - Saria - Kei Kecil - Darwin',
    rating: 4.5,
    reviews: 42,
    company: 'Ponant',
    duration: '13 days',
    departureDate: 'Wed, Jun 17, 2026',
    departureCity: 'Bali, Indonesia',
    arrivalCity: 'Darwin, Australia',
    originalPrice: '₹832,603',
    price: '₹790,973',
    discount: '5%',
    images: [
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200&h=800&fit=crop', // Luxury cruise at sea
      'https://images.unsplash.com/photo-1567337710282-00832b4159d1?w=1200&h=800&fit=crop', // Ship deck and pool
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&h=800&fit=crop', // Large ship aerial view
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=800&fit=crop'  // Luxury yacht style
    ]
  };

  const staterooms = [
    { 
      id: 1, 
      name: 'Oceanview Stateroom', 
      price: '₹790,973', 
      originalPrice: '₹832,603',
      image: 'https://images.unsplash.com/photo-1611892440504-4e1a7f9b5838?w=800&h=600&fit=crop&auto=format', 
      available: true,
      capacity: '2 guests',
      size: '18 sqm',
      features: ['Ocean view', 'King bed', 'Private bathroom', 'TV', 'Mini-bar'],
      amenities: ['24-hour room service', 'Daily housekeeping', 'Free Wi-Fi']
    },
    { 
      id: 2, 
      name: 'Balcony Stateroom', 
      price: '₹1,014,961', 
      originalPrice: '₹1,068,380',
      image: 'https://images.unsplash.com/photo-1598488561332-864c6a34b2b6?w=800&h=600&fit=crop&auto=format', 
      available: true,
      capacity: '2 guests',
      size: '24 sqm',
      features: ['Private balcony', 'King bed', 'Separate sitting area', 'TV', 'Mini-bar'],
      amenities: ['24-hour room service', 'Daily housekeeping', 'Free Wi-Fi', 'Priority boarding']
    },
    { 
      id: 3, 
      name: 'Premium Suite', 
      price: '₹1,245,890', 
      originalPrice: 'Sold out',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56509?w=800&h=600&fit=crop&auto=format', 
      available: false,
      capacity: '4 guests',
      size: '42 sqm',
      features: ['Private balcony', 'Two bedrooms', 'Living room', 'Jacuzzi', 'Butler service'],
      amenities: ['24-hour room service', 'Daily housekeeping', 'Free Wi-Fi', 'Priority boarding', 'Lounge access']
    }
  ];

  const itinerary = [
    { date: 'Jun 17, 2026', port: 'Bali, Indonesia', arrival: '--', departure: 'Boarding closes at 16:00\nSails at 18:00' },
    { date: 'Jun 19, 2026', port: 'Komodo, Indonesia', arrival: '08:00', departure: '18:00' },
    { date: 'Jun 20, 2026', port: 'Komodo, Indonesia', arrival: '07:00', departure: '17:00' },
    { date: 'Jun 21, 2026', port: 'East Nusa Tenggara, Indonesia', arrival: '09:00', departure: '16:00' },
    { date: 'Jun 22, 2026', port: 'Kalabahi Timur, Indonesia', arrival: '08:30', departure: '17:30' },
    { date: 'Jun 23, 2026', port: 'Maluku Barat Daya Regency, Indonesia', arrival: '10:00', departure: '19:00' },
    { date: 'Jun 24, 2026', port: 'Maluku, Indonesia', arrival: '08:00', departure: '18:00' },
    { date: 'Jun 25, 2026', port: 'Getaway at sea', arrival: '--', departure: '--' },
    { date: 'Jun 26, 2026', port: 'Saria, Indonesia', arrival: '09:00', departure: '16:00' },
    { date: 'Jun 27, 2026', port: 'Kei Kecil, Indonesia', arrival: '08:00', departure: '17:00' },
    { date: 'Jun 28, 2026', port: 'Getaway at sea', arrival: '--', departure: '--' },
    { date: 'Jun 29, 2026', port: 'Darwin, Australia', arrival: '06:00', departure: '--' }
  ];

  const shipInfo = {
    name: 'Le Soléal',
    tonnage: '10,944 ton',
    capacity: '264 guests',
    serviceYear: 2013,
    decks: 7,
    crew: 140,
    length: '142m',
    speed: '16 knots',
    amenities: ['Spa & Wellness Center', 'Gourmet Restaurants', 'Pool & Jacuzzi', 'Theater', 'Casino', 'Fitness Center', 'Bars & Lounges']
  };

  const handleBookNow = (room) => {
    setSelectedRoom(room);
    setShowBookingModal(true);
    setBookingStep(1);
  };

  const handleBookingComplete = () => {
    // In real app, this would process payment and confirm booking
    alert(`Booking confirmed for ${selectedRoom.name}! You will receive a confirmation email shortly.`);
    setShowBookingModal(false);
    navigate('/my-bookings');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 py-4">
        {/* Cruise Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          {/* Image Gallery */}
          <div className="relative h-64 md:h-96">
            <img 
              src={cruiseData.images[0]} 
              alt="Cruise Ship" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            {/* Image Gallery Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {cruiseData.images.map((_, idx) => (
                <div key={idx} className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-white' : 'bg-white/50'}`}></div>
              ))}
            </div>
            
            {/* View All Photos */}
            <button className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-lg font-medium flex items-center transition-colors">
              <Camera className="w-4 h-4 mr-2" />
              See all photos
            </button>
          </div>
          
          {/* Cruise Info */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900 mb-3">{cruiseData.title}</h1>
                
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-current mr-1" />
                    <span className="font-bold">{cruiseData.rating}</span>
                    <span className="ml-1">({cruiseData.reviews} reviews)</span>
                  </div>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-600">{cruiseData.company}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-600">Cruise ID: {cruiseData.id}</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="text-xs text-gray-500">Departure date</div>
                      <div className="font-medium">{cruiseData.departureDate}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="text-xs text-gray-500">Departure city</div>
                      <div className="font-medium">{cruiseData.departureCity}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="text-xs text-gray-500">Duration</div>
                      <div className="font-medium">{cruiseData.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Price & Booking CTA */}
              <div className="md:w-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">Price per person (including port fee)</div>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">{cruiseData.price}</span>
                    <span className="ml-2 text-gray-400 line-through">{cruiseData.originalPrice}</span>
                    <span className="ml-3 bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                      Save {cruiseData.discount}
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <Check className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-xs text-green-600 font-medium">All taxes and fees included</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setShowBookingModal(true)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl text-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  Book Now
                </button>
                
                <div className="mt-4 text-center">
                  <button 
                    onClick={() => document.getElementById('staterooms').scrollIntoView({ behavior: 'smooth' })}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Or select stateroom first
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-xl shadow-sm mb-8 overflow-hidden sticky top-20 z-40">
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto">
              {[
                { id: 'itinerary', label: 'Itinerary', icon: <MapPin className="w-4 h-4 mr-2" /> },
                { id: 'staterooms', label: 'Staterooms', icon: <Users className="w-4 h-4 mr-2" /> },
                { id: 'ship', label: 'Ship Info', icon: <Ship className="w-4 h-4 mr-2" /> },
                { id: 'travel-docs', label: 'Travel Docs', icon: <Briefcase className="w-4 h-4 mr-2" /> },
                { id: 'fee-details', label: 'Fees', icon: <DollarSign className="w-4 h-4 mr-2" /> },
                { id: 'reviews', label: 'Reviews', icon: <Star className="w-4 h-4 mr-2" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 font-medium text-sm transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600 border-b-2 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {/* Itinerary Tab */}
          {activeTab === 'itinerary' && (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-6">Itinerary Details</h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Port</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Arrival</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departure</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activities</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {itinerary.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{item.date}</div>
                            <div className="text-xs text-gray-500">Day {index + 1}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{item.port}</div>
                            {item.port.includes('Komodo') && (
                              <button className="mt-1 text-xs text-blue-600 hover:text-blue-800 hover:underline">
                                View Komodo activities
                              </button>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {item.arrival}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{item.departure.split('\n')[0]}</div>
                            {item.departure.includes('\n') && (
                              <div className="text-xs text-gray-500">{item.departure.split('\n')[1]}</div>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                              View Activities
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Staterooms Tab */}
          {activeTab === 'staterooms' && (
            <div id="staterooms" className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Choose Your Stateroom</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {staterooms.map((room) => (
                    <div key={room.id} className={`border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                      selectedRoom?.id === room.id ? 'border-blue-500 shadow-lg' : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                    }`}>
                      <div className="relative">
                        <img 
                          src={room.image} 
                          alt={room.name} 
                          className="w-full h-48 object-cover"
                        />
                        {!room.available && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold">SOLD OUT</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-bold text-lg text-gray-900">{room.name}</h3>
                            <div className="flex items-center mt-1 text-sm text-gray-600">
                              <Users className="w-4 h-4 mr-1" />
                              <span className="mr-3">{room.capacity}</span>
                              <span className="mr-3">•</span>
                              <span>{room.size}</span>
                            </div>
                          </div>
                          <div className={`text-sm font-bold px-2 py-1 rounded ${
                            room.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {room.available ? 'AVAILABLE' : 'SOLD OUT'}
                          </div>
                        </div>
                        
                        {/* Features */}
                        <div className="mb-4">
                          <div className="text-sm font-medium text-gray-700 mb-2">Features:</div>
                          <div className="flex flex-wrap gap-1">
                            {room.features.map((feature, idx) => (
                              <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Price */}
                        <div className="border-t pt-4">
                          <div className="text-sm text-gray-600 mb-1">Price per person (including port fee)</div>
                          <div className="flex items-baseline justify-between">
                            <div>
                              <span className="text-2xl font-bold text-gray-900">{room.price}</span>
                              {room.originalPrice !== 'Sold out' && (
                                <span className="ml-2 text-gray-400 line-through text-sm">{room.originalPrice}</span>
                              )}
                            </div>
                            {room.available ? (
                              <button 
                                onClick={() => handleBookNow(room)}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
                              >
                                Select
                              </button>
                            ) : (
                              <button 
                                disabled
                                className="bg-gray-300 text-gray-500 font-bold px-6 py-3 rounded-lg cursor-not-allowed"
                              >
                                Sold Out
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Ship Info Tab */}
          {activeTab === 'ship' && (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2">{shipInfo.name}</h2>
                  <p className="text-gray-600 mb-6">A luxurious expedition cruise ship offering intimate voyages to remote destinations</p>
                </div>

                {/* Ship Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Tonnage', value: shipInfo.tonnage, icon: <Ship className="w-5 h-5" /> },
                    { label: 'Guest Capacity', value: shipInfo.capacity, icon: <Users className="w-5 h-5" /> },
                    { label: 'Service Year', value: shipInfo.serviceYear, icon: <Calendar className="w-5 h-5" /> },
                    { label: 'Number of Decks', value: shipInfo.decks, icon: <ChevronUp className="w-5 h-5" /> },
                    { label: 'Crew Members', value: shipInfo.crew, icon: <Users className="w-5 h-5" /> },
                    { label: 'Length', value: shipInfo.length, icon: <ChevronRight className="w-5 h-5" /> },
                    { label: 'Speed', value: shipInfo.speed, icon: <Waves className="w-5 h-5" /> },
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4 text-center">
                      <div className="text-blue-600 flex justify-center mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Amenities */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Ship Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {shipInfo.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center bg-gray-50 rounded-lg p-3">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deck Plan */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Deck Plan</h3>
                  <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-6 text-center">
                    <div className="text-6xl mb-4">🚢</div>
                    <h4 className="text-lg font-bold mb-2">Interactive Deck Plan</h4>
                    <p className="text-gray-600 mb-4">Explore the layout of {shipInfo.name} with our interactive deck plan</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                      View Deck Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-8 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-12 h-12 text-yellow-400" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Be the first to review!</h2>
                <p className="text-gray-600 mb-6">No reviews yet for this cruise. Share your experience with fellow travelers!</p>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-bold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Write a Review
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {bookingStep === 1 && 'Select Stateroom'}
                  {bookingStep === 2 && 'Guest Information'}
                  {bookingStep === 3 && 'Payment Details'}
                </h2>
                <button 
                  onClick={() => setShowBookingModal(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Step 1: Room Selection */}
              {bookingStep === 1 && (
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="flex items-center">
                      <Info className="w-5 h-5 text-blue-600 mr-2" />
                      <p className="text-sm text-blue-800">
                        Please select your preferred stateroom type to continue with booking
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {staterooms.filter(room => room.available).map((room) => (
                      <div 
                        key={room.id} 
                        className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                          selectedRoom?.id === room.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                        }`}
                        onClick={() => setSelectedRoom(room)}
                      >
                        <div className="flex items-start">
                          <img 
                            src={room.image} 
                            alt={room.name} 
                            className="w-24 h-24 object-cover rounded-lg mr-4"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-bold text-lg">{room.name}</h3>
                                <p className="text-sm text-gray-600">{room.capacity} • {room.size}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold">{room.price}</div>
                                <div className="text-sm text-gray-500">per person</div>
                              </div>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {room.features.slice(0, 3).map((feature, idx) => (
                                <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between pt-6 border-t">
                    <button 
                      onClick={() => setShowBookingModal(false)}
                      className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={() => selectedRoom && setBookingStep(2)}
                      disabled={!selectedRoom}
                      className={`px-8 py-3 rounded-lg font-bold transition-colors ${
                        selectedRoom 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Guest Information */}
              {bookingStep === 2 && selectedRoom && (
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold">{selectedRoom.name}</h3>
                        <p className="text-sm text-gray-600">{selectedRoom.capacity}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold">{selectedRoom.price}</div>
                        <div className="text-sm text-gray-500">per person</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between pt-6 border-t">
                    <button 
                      onClick={() => setBookingStep(1)}
                      className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      onClick={() => setBookingStep(3)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {bookingStep === 3 && selectedRoom && (
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-2" />
                      <p className="text-sm text-green-800">
                        Almost there! Complete your booking by entering payment details
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Stateroom:</span>
                      <span className="font-bold">{selectedRoom.name}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-bold">{selectedRoom.price}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Taxes & Fees:</span>
                      <span className="font-bold">₹12,345</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">Total:</span>
                        <span className="text-2xl font-bold text-blue-600">
                          ₹{parseInt(selectedRoom.price.replace(/[^0-9]/g, '')) + 12345}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" id="terms" className="mr-2" />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the Terms & Conditions and Privacy Policy
                    </label>
                  </div>

                  <div className="flex justify-between pt-6 border-t">
                    <button 
                      onClick={() => setBookingStep(2)}
                      className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      onClick={handleBookingComplete}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-200 transform hover:scale-105"
                    >
                      Complete Booking
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
}