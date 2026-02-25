import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, Clock, Users, Star, Church, Bell, Search, Filter,
  ChevronRight, TrendingUp, Award, Sun, Moon, Calendar,
  Gift, Sparkles, Shield, Heart, Zap, Crown, Ticket,
  ThumbsUp, Bookmark, X, Home, Info, Navigation,
  Mountain
} from 'lucide-react';

const DarshanList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const temples = [
    {
      id: 1,
      name: "Shri Kedarnath Temple",
      location: "Kedarnath, Uttarakhand",
      state: "Uttarakhand",
      deity: "Lord Shiva",
      price: "2500",
      image: "https://images.pexels.com/photos/161254/pexels-photo-161254.jpeg?w=400&h=250&fit=crop",
      timings: "4:00 AM - 9:00 PM",
      vipTimings: "6:00 AM - 8:00 AM",
      darshanDuration: "15-20 mins",
      queueTime: "VIP: 10 mins | Regular: 3-4 hrs",
      features: ["VIP Queue Skip", "Special Aarti", "Prasadam", "Photography Allowed"],
      rating: 4.8,
      reviews: "12.5k+",
      trending: true,
      distance: "18 km from city",
      bookedToday: 234
    },
    {
      id: 2,
      name: "Shri Badrinath Temple",
      location: "Badrinath, Uttarakhand",
      state: "Uttarakhand",
      deity: "Lord Vishnu",
      price: "2200",
      image: "https://images.pexels.com/photos/161254/pexels-photo-161254.jpeg?w=400&h=250&fit=crop",
      timings: "4:30 AM - 9:00 PM",
      vipTimings: "5:30 AM - 7:30 AM",
      darshanDuration: "15-20 mins",
      queueTime: "VIP: 15 mins | Regular: 2-3 hrs",
      features: ["VIP Darshan", "Maha Aarti Pass", "Prasadam Box", "Guided Tour"],
      rating: 4.7,
      reviews: "10.2k+",
      trending: true,
      distance: "3 km from city",
      bookedToday: 189
    },
    {
      id: 3,
      name: "Shri Kashi Vishwanath",
      location: "Varanasi, Uttar Pradesh",
      state: "Uttar Pradesh",
      deity: "Lord Shiva",
      price: "1800",
      image: "https://images.pexels.com/photos/4236828/pexels-photo-4236828.jpeg?w=400&h=250&fit=crop",
      timings: "3:00 AM - 11:00 PM",
      vipTimings: "4:00 AM - 6:00 AM",
      darshanDuration: "10-15 mins",
      queueTime: "VIP: 5 mins | Regular: 2-3 hrs",
      features: ["Special Entry", "Ganga Aarti Access", "Pandit Assistance", "Prasadam"],
      rating: 4.9,
      reviews: "15.8k+",
      trending: true,
      distance: "2 km from city",
      bookedToday: 312
    },
    {
      id: 4,
      name: "Tirupati Balaji",
      location: "Tirupati, Andhra Pradesh",
      state: "Andhra Pradesh",
      deity: "Lord Venkateswara",
      price: "3000",
      image: "https://images.pexels.com/photos/4236828/pexels-photo-4236828.jpeg?w=400&h=250&fit=crop",
      timings: "3:00 AM - 12:00 AM",
      vipTimings: "3:30 AM - 5:30 AM",
      darshanDuration: "10-15 mins",
      queueTime: "VIP: 20 mins | Regular: 4-6 hrs",
      features: ["VIP Break Darshan", "Laddu Prasadam", "AC Lounge Wait", "Shoe Keep"],
      rating: 4.8,
      reviews: "20.3k+",
      trending: true,
      distance: "5 km from city",
      bookedToday: 456
    },
    {
      id: 5,
      name: "Golden Temple",
      location: "Amritsar, Punjab",
      state: "Punjab",
      deity: "Harmandir Sahib",
      price: "1500",
      image: "https://images.pexels.com/photos/1362555/pexels-photo-1362555.jpeg?w=400&h=250&fit=crop",
      timings: "24 Hours",
      vipTimings: "4:00 AM - 6:00 AM",
      darshanDuration: "Flexible",
      queueTime: "VIP: No wait | Regular: 30-45 mins",
      features: ["Sikh Museum Tour", "Langar Service", "Prasadam", "Guided Tour"],
      rating: 4.9,
      reviews: "18.6k+",
      trending: false,
      distance: "1 km from city",
      bookedToday: 278
    },
    {
      id: 6,
      name: "Siddhivinayak Temple",
      location: "Mumbai, Maharashtra",
      state: "Maharashtra",
      deity: "Lord Ganesha",
      price: "1200",
      image: "https://images.pexels.com/photos/1362555/pexels-photo-1362555.jpeg?w=400&h=250&fit=crop",
      timings: "5:30 AM - 9:00 PM",
      vipTimings: "5:30 AM - 7:30 AM",
      darshanDuration: "5-10 mins",
      queueTime: "VIP: 5 mins | Regular: 1-2 hrs",
      features: ["Quick Darshan", "Modak Prasadam", "Special Aarti", "Photo Point"],
      rating: 4.6,
      reviews: "8.9k+",
      trending: false,
      distance: "2 km from city",
      bookedToday: 167
    },
    {
      id: 7,
      name: "Jagannath Puri",
      location: "Puri, Odisha",
      state: "Odisha",
      deity: "Lord Jagannath",
      price: "2000",
      image: "https://images.pexels.com/photos/161254/pexels-photo-161254.jpeg?w=400&h=250&fit=crop",
      timings: "5:00 AM - 10:00 PM",
      vipTimings: "6:00 AM - 8:00 AM",
      darshanDuration: "15-20 mins",
      queueTime: "VIP: 10 mins | Regular: 2-3 hrs",
      features: ["Mahaprasadam", "Special Rituals", "Temple History Tour", "Photography"],
      rating: 4.7,
      reviews: "11.2k+",
      trending: true,
      distance: "2 km from city",
      bookedToday: 198
    },
    {
      id: 8,
      name: "Meenakshi Temple",
      location: "Madurai, Tamil Nadu",
      state: "Tamil Nadu",
      deity: "Goddess Meenakshi",
      price: "1600",
      image: "https://images.pexels.com/photos/4236828/pexels-photo-4236828.jpeg?w=400&h=250&fit=crop",
      timings: "5:00 AM - 9:00 PM",
      vipTimings: "6:00 AM - 8:00 AM",
      darshanDuration: "15-20 mins",
      queueTime: "VIP: 10 mins | Regular: 1-2 hrs",
      features: ["Temple Architecture Tour", "Special Abhishekam", "Prasadam", "Guide"],
      rating: 4.8,
      reviews: "9.4k+",
      trending: false,
      distance: "2 km from city",
      bookedToday: 145
    },
    {
      id: 9,
      name: "Ram Janmabhoomi",
      location: "Ayodhya, Uttar Pradesh",
      state: "Uttar Pradesh",
      deity: "Lord Ram",
      price: "2800",
      image: "https://images.pexels.com/photos/4236828/pexels-photo-4236828.jpeg?w=400&h=250&fit=crop",
      timings: "6:00 AM - 8:00 PM",
      vipTimings: "6:30 AM - 8:30 AM",
      darshanDuration: "10-15 mins",
      queueTime: "VIP: 15 mins | Regular: 3-4 hrs",
      features: ["VIP Entry", "Special Aarti", "Prasadam", "Temple Museum"],
      rating: 4.9,
      reviews: "7.6k+",
      trending: true,
      distance: "3 km from city",
      bookedToday: 223
    }
  ];

  const states = [
    { name: 'All States', value: 'all' },
    { name: 'Uttarakhand', value: 'Uttarakhand' },
    { name: 'Uttar Pradesh', value: 'Uttar Pradesh' },
    { name: 'Maharashtra', value: 'Maharashtra' },
    { name: 'Tamil Nadu', value: 'Tamil Nadu' },
    { name: 'Andhra Pradesh', value: 'Andhra Pradesh' },
    { name: 'Punjab', value: 'Punjab' },
    { name: 'Odisha', value: 'Odisha' }
  ];

  const priceRanges = [
    { name: 'All Prices', value: 'all' },
    { name: 'Under ₹1500', value: 'budget' },
    { name: '₹1500 - ₹2500', value: 'mid' },
    { name: 'Above ₹2500', value: 'premium' }
  ];

  const filteredTemples = temples.filter(temple => {
    const matchesSearch = temple.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         temple.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         temple.deity.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesState = selectedState === 'all' || selectedState === 'All States' || temple.state === selectedState;
    
    const price = parseInt(temple.price);
    let matchesPrice = true;
    if (selectedPriceRange === 'budget') matchesPrice = price < 1500;
    else if (selectedPriceRange === 'mid') matchesPrice = price >= 1500 && price <= 2500;
    else if (selectedPriceRange === 'premium') matchesPrice = price > 2500;
    
    return matchesSearch && matchesState && matchesPrice;
  });

  const handleBookNow = (templeId) => {
    navigate(`/darshan/${templeId}`);
  };

  const totalBookingsToday = temples.reduce((sum, temple) => sum + temple.bookedToday, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white overflow-hidden">
        {/* Simple background pattern instead of SVG data URL */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 py-16 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur">
                  <Church className="w-12 h-12" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold">Shri Darshan</h1>
                  <p className="text-xl text-orange-100 mt-2">Divine Encounters, Simplified</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  <span>Mangal Aarti: 4:00 AM Daily</span>
                </div>
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{totalBookingsToday}+ Devotees Today</span>
                </div>
                <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>9 Sacred Temples</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 bg-white/10 backdrop-blur p-4 rounded-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold">{temples.length}</div>
                <div className="text-xs text-orange-200">Temples</div>
              </div>
              <div className="text-center border-x border-white/20 px-3">
                <div className="text-3xl font-bold">{temples.filter(t => t.trending).length}</div>
                <div className="text-xs text-orange-200">Trending</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.8</div>
                <div className="text-xs text-orange-200">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.1"/>
          </svg>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 pb-16 -mt-8 relative z-10">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8 border border-orange-100">
          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-6 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search temples, cities, deities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              />
            </div>
            
            <div className="md:col-span-3 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select 
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 appearance-none bg-white cursor-pointer"
              >
                {states.map(state => (
                  <option key={state.value} value={state.value}>{state.name}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-3 relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select 
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 appearance-none bg-white cursor-pointer"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.name}</option>
                ))}
              </select>
            </div>
          </div>

          {(searchTerm || selectedState !== 'all' || selectedPriceRange !== 'all') && (
            <div className="mt-4 flex flex-wrap items-center gap-2 pt-4 border-t border-gray-100">
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <Filter className="w-4 h-4" />
                Active Filters:
              </span>
              {searchTerm && (
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  Search: {searchTerm}
                  <button onClick={() => setSearchTerm('')} className="hover:text-orange-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedState !== 'all' && (
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  State: {selectedState}
                  <button onClick={() => setSelectedState('all')} className="hover:text-orange-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedPriceRange !== 'all' && (
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  Price: {priceRanges.find(r => r.value === selectedPriceRange)?.name}
                  <button onClick={() => setSelectedPriceRange('all')} className="hover:text-orange-900">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Temples</p>
                <p className="text-3xl font-bold text-orange-600">{temples.length}</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-xl">
                <Church className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Trending Now</p>
                <p className="text-3xl font-bold text-red-600">{temples.filter(t => t.trending).length}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-xl">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Devotees Today</p>
                <p className="text-3xl font-bold text-green-600">{totalBookingsToday.toLocaleString()}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-xl">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Rating</p>
                <p className="text-3xl font-bold text-yellow-600">4.8</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-xl">
                <Star className="w-6 h-6 text-yellow-600 fill-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Trending Section */}
        {filteredTemples.filter(t => t.trending).length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-orange-600" />
                Trending Darshan
              </h2>
              <span className="text-sm text-gray-500">{filteredTemples.filter(t => t.trending).length} temples</span>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
              {filteredTemples.filter(t => t.trending).map(temple => (
                <button
                  key={temple.id}
                  onClick={() => handleBookNow(temple.id)}
                  className="flex-none group bg-white px-6 py-3 rounded-full border-2 border-orange-200 hover:border-orange-500 hover:bg-orange-50 transition-all shadow-md hover:shadow-lg"
                >
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-orange-500 group-hover:text-orange-600" />
                    <span className="text-orange-700 font-medium">{temple.name}</span>
                    <ChevronRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-orange-600">{filteredTemples.length}</span> temples
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <Sparkles className="w-4 h-4" />
            {filteredTemples.filter(t => t.rating >= 4.8).length} with 4.8+ rating
          </p>
        </div>

        {/* Temple Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemples.map((temple) => (
            <div 
              key={temple.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-orange-100 hover:border-orange-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={temple.image} 
                  alt={temple.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>{temple.rating}</span>
                  <span className="text-gray-400 text-xs">({temple.reviews})</span>
                </div>
                
                {/* Title on Image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-xl font-bold leading-tight">{temple.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm bg-orange-500/80 backdrop-blur px-2 py-0.5 rounded-full">
                      {temple.deity}
                    </span>
                    <span className="text-xs text-orange-200 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {temple.distance}
                    </span>
                  </div>
                </div>

                {/* Trending Badge */}
                {temple.trending && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
                    <Zap className="w-3 h-3" />
                    Trending
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Location and Price */}
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-1 text-orange-500 flex-shrink-0" />
                    <span className="truncate">{temple.location}</span>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    ₹{temple.price}
                  </div>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center text-gray-600 text-sm bg-orange-50 p-2 rounded-lg">
                    <Clock className="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" />
                    <span className="truncate">{temple.timings}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm bg-orange-50 p-2 rounded-lg">
                    <Users className="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" />
                    <span className="truncate">{temple.queueTime.split('|')[0]}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {temple.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="text-xs bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      {feature}
                    </span>
                  ))}
                  {temple.features.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                      +{temple.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* Bookings Today */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{temple.bookedToday} booked today</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4 text-green-500" />
                    <span className="text-green-600">98%</span>
                  </div>
                </div>

                {/* Book Button */}
                <button 
                  onClick={() => handleBookNow(temple.id)}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-700 text-white py-3.5 rounded-xl font-medium hover:from-orange-700 hover:to-red-800 transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
                >
                  <Church className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Book VIP Darshan
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTemples.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No temples found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedState('all');
                setSelectedPriceRange('all');
              }}
              className="bg-orange-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-orange-700 transition-colors inline-flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Clear all filters
            </button>
          </div>
        )}
      </main>

      {/* Footer Note */}
      <div className="bg-white border-t border-orange-100 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500 flex items-center justify-center gap-4">
          <span className="flex items-center gap-1">
            <Shield className="w-4 h-4 text-green-500" />
            Secure Booking
          </span>
          <span className="flex items-center gap-1">
            <Ticket className="w-4 h-4 text-orange-500" />
            Instant Confirmation
          </span>
          <span className="flex items-center gap-1">
            <Heart className="w-4 h-4 text-red-500" />
            24/7 Support
          </span>
        </div>
      </div>
    </div>
  );
};

export default DarshanList;