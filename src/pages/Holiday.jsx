import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, MapPin, Star, Heart, Camera, Users, Coffee, Sunset, Utensils, 
  Hotel, Ticket, Compass, Globe, Facebook, Twitter, Instagram, 
  ChevronRight, Clock, Wifi, Coffee as CoffeeIcon, Battery, 
  Shield, Award, Gift, Sparkles, Filter, X, CheckCircle
} from 'lucide-react';

const TripBestGallery = () => {
  const navigate = useNavigate();
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    rating: '4+',
    priceRange: 'all',
    timeOfDay: []
  });

  // Enhanced experience data with more details
  const experiences = [
    {
      id: 1,
      title: "Hong Kong Disneyland",
      location: "Lantau Island, Hong Kong",
      category: "attractions",
      rating: 4.9,
      reviews: "82.8k",
      badge: "Top 1",
      badgeColor: "from-yellow-400 to-amber-500",
      image: "https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?auto=format&fit=crop&q=80&w=800",
      price: 7699,
      originalPrice: 9999,
      holiday: "🎄",
      duration: "Full Day",
      timeOfDay: "morning",
      amenities: ["Fast Pass", "Meal Included", "Guide", "Transport"],
      features: ["Free Cancellation", "Instant Confirmation", "Mobile Voucher"],
      description: "Experience the magic of Disney with exclusive access to all attractions",
      operator: "Disney Parks",
      operatorRating: 4.8,
      availableSlots: 15,
      meetingPoint: "Disneyland Main Entrance",
      languages: ["English", "Cantonese", "Mandarin"]
    },
    {
      id: 2,
      title: "The Peak Tram Experience",
      location: "Central, Hong Kong",
      category: "attractions",
      rating: 4.8,
      reviews: "9.5k",
      badge: "Top 2",
      badgeColor: "from-blue-400 to-indigo-500",
      image: "https://images.unsplash.com/photo-1542661908-144d18ec99be?auto=format&fit=crop&q=80&w=800",
      price: 4899,
      originalPrice: 5999,
      holiday: "⛰️",
      duration: "2-3 Hours",
      timeOfDay: "afternoon",
      amenities: ["Sky Terrace Access", "Skip Line", "Photo Service"],
      features: ["Flexible Booking", "Best View", "Family Friendly"],
      description: "Spectacular 360-degree views of Victoria Harbour and skyscrapers",
      operator: "Peak Tower",
      operatorRating: 4.7,
      availableSlots: 28,
      meetingPoint: "Peak Tram Lower Terminus",
      languages: ["English", "Cantonese"]
    },
    {
      id: 3,
      title: "Ocean Park Marine World",
      location: "Aberdeen, Hong Kong",
      category: "attractions",
      rating: 4.7,
      reviews: "46.8k",
      badge: "Top 3",
      badgeColor: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1516637174060-f463cc22863a?auto=format&fit=crop&q=80&w=800",
      price: 4599,
      originalPrice: 5499,
      holiday: "🐠",
      duration: "Full Day",
      timeOfDay: "morning",
      amenities: ["Dolphin Show", "Cable Car", "Aquarium", "Rides"],
      features: ["Kids Under 12 Free", "Park Hopper", "Meal Voucher"],
      description: "Thrilling rides, animal encounters, and marine conservation",
      operator: "Ocean Park Corp",
      operatorRating: 4.6,
      availableSlots: 42,
      meetingPoint: "Ocean Park Main Entrance",
      languages: ["English", "Cantonese", "Mandarin", "Korean"]
    },
    {
      id: 4,
      title: "Harbour Grand Buffet Dinner",
      location: "North Point, Hong Kong",
      category: "dining",
      rating: 5.0,
      reviews: "14",
      badge: "Up to 15% off",
      badgeColor: "from-red-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
      price: 5099,
      originalPrice: 5999,
      holiday: "☕",
      duration: "2 Hours",
      timeOfDay: "evening",
      amenities: ["Seafood", "Dessert Station", "Live Station", "Drinks"],
      features: ["Window Seats", "Free Corkage", "Birthday Cake"],
      description: "Luxury buffet with stunning harbour views and international cuisine",
      operator: "Harbour Grand Hotel",
      operatorRating: 4.9,
      availableSlots: 8,
      meetingPoint: "Hotel Lobby, 1/F",
      languages: ["English", "Cantonese"]
    },
    {
      id: 5,
      title: "Victoria Harbour Night Cruise",
      location: "Tsim Sha Tsui, Hong Kong",
      category: "night",
      rating: 4.9,
      reviews: "12.4k",
      badge: "Symphony of Lights",
      badgeColor: "from-purple-500 to-indigo-500",
      image: "https://images.unsplash.com/photo-1533602517006-218412615569?auto=format&fit=crop&q=80&w=800",
      price: 6299,
      originalPrice: 7999,
      holiday: "✨",
      duration: "1.5 Hours",
      timeOfDay: "night",
      amenities: ["Open Bar", "Dinner", "Live Music", "Photo Service"],
      features: ["Best View", "Romantic", "Symphony Show"],
      description: "Evening cruise with unlimited drinks and spectacular light show",
      operator: "Star Ferry Co.",
      operatorRating: 4.8,
      availableSlots: 12,
      meetingPoint: "TST Pier, Gate 3",
      languages: ["English", "Cantonese", "Japanese"]
    },
    {
      id: 6,
      title: "Family Disney Adventure",
      location: "Lantau Island, Hong Kong",
      category: "family",
      rating: 4.9,
      reviews: "28.3k",
      badge: "Family Favorite",
      badgeColor: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1603732551658-5fabbaff8453?auto=format&fit=crop&q=80&w=800",
      price: 8499,
      originalPrice: 10999,
      holiday: "👪",
      duration: "Full Day",
      timeOfDay: "morning",
      amenities: ["Character Meet", "Meal Plan", "Fast Pass", "Stroller"],
      features: ["Kids Meal", "Family Room", "Photo Package"],
      description: "Complete family package with character dining and priority access",
      operator: "Disney Parks",
      operatorRating: 4.9,
      availableSlots: 25,
      meetingPoint: "Disneyland Entrance Plaza",
      languages: ["English", "Cantonese", "Mandarin"]
    }
  ];

  const filters_list = [
    { id: 'all', label: 'All Experiences', icon: Globe, count: experiences.length },
    { id: 'attractions', label: 'Attractions', icon: Ticket, count: experiences.filter(e => e.category === 'attractions').length },
    { id: 'dining', label: 'Dining', icon: Utensils, count: experiences.filter(e => e.category === 'dining').length },
    { id: 'night', label: 'Night Life', icon: Sunset, count: experiences.filter(e => e.category === 'night').length },
    { id: 'family', label: 'Family', icon: Users, count: experiences.filter(e => e.category === 'family').length }
  ];

  const timeSlots = [
    { id: 'morning', label: 'Morning (6AM-12PM)', icon: Coffee },
    { id: 'afternoon', label: 'Afternoon (12PM-5PM)', icon: Sun },
    { id: 'evening', label: 'Evening (5PM-8PM)', icon: Sunset },
    { id: 'night', label: 'Night (8PM-6AM)', icon: Star }
  ];

  const filteredExperiences = activeFilter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === activeFilter);

  const handleBookNow = (experience) => {
    navigate('/booking-details', { 
      state: { 
        experience,
        bookingDetails: {
          date: new Date().toISOString().split('T')[0],
          travelers: 2,
          totalPrice: experience.price * 2,
          addOns: []
        }
      } 
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      attractions: 'bg-blue-100 text-blue-700',
      dining: 'bg-orange-100 text-orange-700',
      night: 'bg-purple-100 text-purple-700',
      family: 'bg-green-100 text-green-700',
      unique: 'bg-pink-100 text-pink-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  const calculateDiscount = (price, original) => {
    return Math.round(((original - price) / original) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-['Inter',sans-serif]">
      {/* Hero Section - Modern Travel Style */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=900&fit=crop" 
            alt="Hong Kong" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-6xl animate-bounce">🎄</span>
              <h1 className="text-5xl md:text-6xl font-black tracking-tight">
                Holiday Bale
              </h1>
              <span className="text-6xl animate-bounce animation-delay-200">⛄</span>
            </div>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Hong Kong's Most Magical Holiday Experiences
            </p>

            {/* Search Card */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-2">
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex-1 flex items-center bg-gray-50 rounded-xl p-2">
                    <MapPin className="w-5 h-5 text-gray-400 ml-2" />
                    <input 
                      type="text" 
                      placeholder="Where to?" 
                      className="w-full px-3 py-3 bg-transparent outline-none text-gray-800 placeholder-gray-400"
                      defaultValue="Hong Kong"
                    />
                  </div>
                  <div className="flex-1 flex items-center bg-gray-50 rounded-xl p-2">
                    <Calendar className="w-5 h-5 text-gray-400 ml-2" />
                    <input 
                      type="date" 
                      className="w-full px-3 py-3 bg-transparent outline-none text-gray-800"
                      defaultValue={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="flex items-center bg-gray-50 rounded-xl p-2">
                    <Users className="w-5 h-5 text-gray-400 ml-2" />
                    <select className="w-32 px-3 py-3 bg-transparent outline-none text-gray-800">
                      <option>1 Traveler</option>
                      <option>2 Travelers</option>
                      <option>3 Travelers</option>
                      <option>4+ Travelers</option>
                    </select>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2">
                    <Search className="w-5 h-5" />
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-8 mt-12 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>200+ Experiences</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.8 Avg Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Free Cancellation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {filters_list.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200' 
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {filter.label}
                  <span className={`ml-1 px-1.5 py-0.5 rounded-full text-xs ${
                    isActive ? 'bg-white/20' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {filter.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Filter Button & Sort */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-all"
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filters</span>
            </button>
            
            <select className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium outline-none hover:border-blue-300 transition-all">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
              <option>Most Booked</option>
            </select>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Filter Experiences</h3>
              <button 
                onClick={() => setShowFilters(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Rating Filter */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Rating</h4>
                <div className="space-y-2">
                  {['4.5+', '4.0+', '3.5+', 'Any'].map((rating) => (
                    <label key={rating} className="flex items-center gap-2">
                      <input 
                        type="radio" 
                        name="rating" 
                        className="w-4 h-4 text-blue-600"
                        defaultChecked={rating === '4+'}
                      />
                      <span className="text-sm text-gray-600">{rating} Stars</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Time of Day */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Time of Day</h4>
                <div className="space-y-2">
                  {timeSlots.map((slot) => {
                    const Icon = slot.icon;
                    return (
                      <label key={slot.id} className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                        <Icon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{slot.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Price Range</h4>
                <div className="space-y-2">
                  {['Under ₹3000', '₹3000 - ₹5000', '₹5000 - ₹8000', 'Above ₹8000'].map((range) => (
                    <label key={range} className="flex items-center gap-2">
                      <input type="radio" name="price" className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">{range}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
              <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                Reset
              </button>
              <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">{filteredExperiences.length}</span> experiences found
            {activeFilter !== 'all' && ` in ${activeFilter}`}
          </div>
          <div className="text-sm text-green-600 flex items-center gap-1">
            <Shield className="w-4 h-4" />
            Free cancellation available
          </div>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredExperiences.map((experience) => (
            <div
              key={experience.id}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all cursor-pointer"
              onMouseEnter={() => setHoveredId(experience.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="relative md:w-2/5 h-52 md:h-auto overflow-hidden rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className={`bg-gradient-to-r ${experience.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg`}>
                      {experience.holiday} {experience.badge}
                    </span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {experience.duration}
                  </div>

                  {/* Favorite Button */}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white/40">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-5">
                  {/* Title & Location */}
                  <div className="mb-3">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
                        {experience.title}
                      </h3>
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getCategoryColor(experience.category)}`}>
                        {experience.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="line-clamp-1">{experience.location}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-gray-800">{experience.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      ({experience.reviews} reviews)
                    </span>
                    <span className="text-sm text-gray-500">·</span>
                    <span className="text-sm text-green-600 font-medium">
                      {calculateDiscount(experience.price, experience.originalPrice)}% OFF
                    </span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.features.slice(0, 2).map((feature, i) => (
                      <span key={i} className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                        <CheckCircle className="w-3 h-3" />
                        {feature}
                      </span>
                    ))}
                    {experience.features.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{experience.features.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Amenities */}
                  <div className="flex items-center gap-3 mb-4 text-gray-500">
                    {experience.amenities.slice(0, 4).map((amenity, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        {amenity === 'Fast Pass' && <Ticket className="w-4 h-4" />}
                        {amenity === 'Meal Included' && <Utensils className="w-4 h-4" />}
                        {amenity === 'Guide' && <Users className="w-4 h-4" />}
                        {amenity === 'Transport' && <Compass className="w-4 h-4" />}
                        {amenity === 'Wifi' && <Wifi className="w-4 h-4" />}
                        {amenity === 'Charging Port' && <Battery className="w-4 h-4" />}
                        {amenity === 'Open Bar' && <CoffeeIcon className="w-4 h-4" />}
                        <span className="text-xs">{amenity}</span>
                      </div>
                    ))}
                    {experience.amenities.length > 4 && (
                      <span className="text-xs text-gray-400">+{experience.amenities.length - 4}</span>
                    )}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-end justify-between mt-auto pt-2 border-t border-gray-100">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900">
                          ₹{experience.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ₹{experience.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">per person + taxes</span>
                    </div>
                    
                    <button 
                      onClick={() => handleBookNow(experience)}
                      className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-200"
                    >
                      Book Now
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Availability */}
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="text-green-600 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Available today
                    </span>
                    <span className="text-gray-500">
                      {experience.availableSlots} spots left
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Effect - Quick Info */}
              {hoveredId === experience.id && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 rounded-b-2xl transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white text-sm line-clamp-2">{experience.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-white/80 text-xs">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {experience.operatorRating} Operator Rating
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      {experience.languages.join(', ')}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Travel Essentials */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <Gift className="w-7 h-7 text-blue-600" />
                Travel Essentials - Holiday Edition
              </h2>
              <p className="text-gray-600 mt-1">Everything you need for a perfect trip</p>
            </div>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              24h Flash Sale
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Hong Kong eSIM", price: 499, rating: 4.9, image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop" },
              { name: "Octopus Card", price: 299, rating: 4.8, image: "https://images.unsplash.com/photo-1579338559441-8d6252145d12?w=400&h=300&fit=crop" },
              { name: "Airport Express", price: 899, rating: 4.7, image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 flex items-center gap-4 hover:shadow-lg transition-all">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-blue-600">₹{item.price}</span>
                    <button className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-all">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Book With Us */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Why Book With Holiday Bale?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Free Cancellation", desc: "Up to 24 hours before" },
              { icon: Award, title: "Best Price Guarantee", desc: "We match any price" },
              { icon: Users, title: "24/7 Support", desc: "In 10+ languages" },
              { icon: Sparkles, title: "Verified Reviews", desc: "Real traveler feedback" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-200 transition-all">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Instagram Feed */}
        <div className="mt-16">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
              <Instagram className="w-6 h-6 text-pink-600" />
              #HolidayBaleMoments
            </h2>
            <p className="text-gray-500 text-sm mt-2">Tag @holidaybale for a chance to be featured</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {experiences.slice(0, 4).map((exp) => (
              <div key={exp.id} className="relative aspect-square rounded-xl overflow-hidden group">
                <img src={exp.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-4">
                  <div className="text-white">
                    <p className="text-sm font-medium">{exp.title}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs">
                      <Heart className="w-3 h-3" />
                      <span>2.3k likes</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-3xl">🎄</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
                  Holiday Bale
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Your trusted travel companion for Hong Kong and beyond. Curated experiences, 
                best prices, and magical holiday memories.
              </p>
              
              <div className="flex gap-4 mt-6">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
                  <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition cursor-pointer">
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-white transition cursor-pointer">About Us</li>
                <li className="hover:text-white transition cursor-pointer">Careers</li>
                <li className="hover:text-white transition cursor-pointer">Press</li>
                <li className="hover:text-white transition cursor-pointer">Blog</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-white transition cursor-pointer">Help Center</li>
                <li className="hover:text-white transition cursor-pointer">Safety Information</li>
                <li className="hover:text-white transition cursor-pointer">Cancellation Options</li>
                <li className="hover:text-white transition cursor-pointer">Contact Us</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white transition cursor-pointer">Terms of Service</li>
                <li className="hover:text-white transition cursor-pointer">Cookie Policy</li>
                <li className="hover:text-white transition cursor-pointer">Accessibility</li>
              </ul>
            </div>
          </div>
          
          
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

// Missing icon components
const Calendar = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const Sun = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export default TripBestGallery;