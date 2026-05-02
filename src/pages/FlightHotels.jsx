import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Building2, Globe, Landmark, MapPin, Plane, Star, ShieldCheck,
  RefreshCcw, Sparkles, Headphones, Hotel, Search, Gift, Award,
  Clock, CheckCircle, DollarSign, Users, Calendar, ChevronRight,
  Heart, Wifi, Coffee, Dumbbell, Car, Utensils, Wind, Tv,
  Briefcase, ThumbsUp, AlertCircle, Filter, X, ArrowLeftRight,
  TrendingUp, Zap, Shield
} from "lucide-react";

const FlightHotels = () => {
  const navigate = useNavigate();

  const [tripType, setTripType] = useState('round');
  const [selectedCity, setSelectedCity] = useState('london');
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showDetails, setShowDetails] = useState({});
  const [wishlist, setWishlist] = useState([]);

  const [searchParams, setSearchParams] = useState({
    fromCity: 'London', fromCode: 'LON',
    toCity: 'San Jose', toCode: 'SJC',
    departureDate: '2026-01-31', returnDate: '2026-02-03',
    rooms: 1, adults: 2, children: 0, infants: 0, cabinClass: 'economy'
  });

  const [filters, setFilters] = useState({
    priceRange: [2000, 50000], starRating: [], hotelType: [],
    amenities: [], flightTimings: [], airlines: []
  });

  const [sortOption, setSortOption] = useState('Recommended');
  const sortOptions = ['Recommended', 'Price: Low to High', 'Price: High to Low', 'Rating', 'Savings'];

  const popularCities = [
    { id: "london", name: "London", code: "LON", hotels: "2,450+", icon: Landmark, country: "UK", flag: "🇬🇧" },
    { id: "nyc", name: "New York", code: "NYC", hotels: "3,120+", icon: Building2, country: "USA", flag: "🇺🇸" },
    { id: "paris", name: "Paris", code: "CDG", hotels: "1,890+", icon: Landmark, country: "France", flag: "🇫🇷" },
    { id: "tokyo", name: "Tokyo", code: "NRT", hotels: "1,540+", icon: Globe, country: "Japan", flag: "🇯🇵" },
    { id: "dubai", name: "Dubai", code: "DXB", hotels: "980+", icon: Landmark, country: "UAE", flag: "🇦🇪" },
    { id: "singapore", name: "Singapore", code: "SIN", hotels: "1,230+", icon: Globe, country: "Singapore", flag: "🇸🇬" },
    { id: "bangkok", name: "Bangkok", code: "BKK", hotels: "1,890+", icon: Landmark, country: "Thailand", flag: "🇹🇭" },
    { id: "sydney", name: "Sydney", code: "SYD", hotels: "1,540+", icon: Globe, country: "Australia", flag: "🇦🇺" }
  ];

  const cabinClasses = ['economy', 'premium', 'business', 'first'];

  const amenitiesList = [
    { id: 'wifi', icon: Wifi, label: 'Free WiFi' },
    { id: 'pool', icon: Dumbbell, label: 'Pool' },
    { id: 'spa', icon: Sparkles, label: 'Spa' },
    { id: 'gym', icon: Dumbbell, label: 'Gym' },
    { id: 'restaurant', icon: Utensils, label: 'Restaurant' },
    { id: 'parking', icon: Car, label: 'Parking' },
  ];

  const starRatings = [5, 4, 3, 2, 1];

  const mockPackages = [
    {
      id: 1,
      hotel: {
        id: 101, name: "The Peninsula", city: "London", country: "United Kingdom", flag: "🇬🇧",
        rating: 4.9, reviews: 1287, starRating: 5, pricePerNight: 24500, discount: 25,
        badge: "Most Popular",
        amenities: ["Free WiFi", "Spa", "Pool", "Butler", "Restaurant", "Gym"],
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&auto=format&fit=crop&q=80",
        location: "Knightsbridge", checkIn: "15:00", checkOut: "11:00",
        description: "Luxury hotel in the heart of London with stunning views"
      },
      flight: {
        outbound: { airline: "British Airways", flightNumber: "BA123", departureTime: "08:30", arrivalTime: "10:45", duration: "2h 15m", class: "Economy" },
        inbound: { airline: "British Airways", flightNumber: "BA456", departureTime: "19:30", arrivalTime: "21:45", duration: "2h 15m", class: "Economy" }
      },
      packagePrice: 89750, totalSavings: 22400, originalPrice: 112150,
      nights: 3, includes: ["Flight", "Hotel", "Breakfast", "Airport Transfer"],
      availableRooms: 8, badge: "Best Seller"
    },
    {
      id: 2,
      hotel: {
        id: 102, name: "St. Regis", city: "New York", country: "United States", flag: "🇺🇸",
        rating: 4.8, reviews: 2045, starRating: 5, pricePerNight: 28900, discount: 15,
        badge: "Top Rated",
        amenities: ["Fine Dining", "Bar", "Spa", "Gym", "Concierge"],
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&auto=format&fit=crop&q=80",
        location: "Midtown Manhattan", checkIn: "16:00", checkOut: "12:00",
        description: "Iconic luxury hotel in New York City"
      },
      flight: {
        outbound: { airline: "Delta Airlines", flightNumber: "DL789", departureTime: "09:45", arrivalTime: "12:30", duration: "2h 45m", class: "Premium" },
        inbound: { airline: "Delta Airlines", flightNumber: "DL101", departureTime: "20:15", arrivalTime: "23:00", duration: "2h 45m", class: "Premium" }
      },
      packagePrice: 115600, totalSavings: 20400, originalPrice: 136000,
      nights: 4, includes: ["Flight", "Hotel", "Breakfast", "Dinner", "City Tour"],
      availableRooms: 5, badge: "Luxury"
    },
    {
      id: 3,
      hotel: {
        id: 103, name: "Four Seasons", city: "Bangkok", country: "Thailand", flag: "🇹🇭",
        rating: 4.9, reviews: 1567, starRating: 5, pricePerNight: 22300, discount: 30,
        badge: "Luxury Pick",
        amenities: ["Pool", "Spa", "Butler", "Restaurant", "Bar"],
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&auto=format&fit=crop&q=80",
        location: "Riverside", checkIn: "14:00", checkOut: "12:00",
        description: "Riverside luxury resort in Bangkok"
      },
      flight: {
        outbound: { airline: "Thai Airways", flightNumber: "TG202", departureTime: "22:30", arrivalTime: "06:30", duration: "8h", class: "Business" },
        inbound: { airline: "Thai Airways", flightNumber: "TG303", departureTime: "21:00", arrivalTime: "05:00", duration: "8h", class: "Business" }
      },
      packagePrice: 66900, totalSavings: 28700, originalPrice: 95600,
      nights: 3, includes: ["Flight", "Hotel", "All Meals", "Spa Credit", "Airport Transfer"],
      availableRooms: 3, badge: "Limited Offer"
    },
    {
      id: 4,
      hotel: {
        id: 104, name: "Marina Bay Sands", city: "Singapore", country: "Singapore", flag: "🇸🇬",
        rating: 4.8, reviews: 3241, starRating: 5, pricePerNight: 35700, discount: 20,
        badge: "Iconic",
        amenities: ["Infinity Pool", "Casino", "Spa", "SkyPark", "Restaurants"],
        image: "https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?w=800&auto=format&fit=crop&q=80",
        location: "Marina Bay", checkIn: "15:00", checkOut: "11:00",
        description: "Iconic hotel with infinity pool overlooking Singapore"
      },
      flight: {
        outbound: { airline: "Singapore Airlines", flightNumber: "SQ321", departureTime: "10:15", arrivalTime: "20:45", duration: "10h 30m", class: "Premium" },
        inbound: { airline: "Singapore Airlines", flightNumber: "SQ322", departureTime: "23:45", arrivalTime: "10:15", duration: "10h 30m", class: "Premium" }
      },
      packagePrice: 142800, totalSavings: 35700, originalPrice: 178500,
      nights: 4, includes: ["Flight", "Hotel", "Breakfast", "SkyPark Access"],
      availableRooms: 12, badge: "Popular"
    },
    {
      id: 5,
      hotel: {
        id: 105, name: "Burj Al Arab", city: "Dubai", country: "UAE", flag: "🇦🇪",
        rating: 5.0, reviews: 987, starRating: 7, pricePerNight: 125000, discount: 15,
        badge: "Ultra Luxury",
        amenities: ["Private Beach", "Helipad", "Butler", "Infinity Pool", "Luxury Spa"],
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&auto=format&fit=crop&q=80",
        location: "Jumeirah Beach", checkIn: "15:00", checkOut: "12:00",
        description: "World's only 7-star hotel, sail-shaped icon of Dubai"
      },
      flight: {
        outbound: { airline: "Emirates", flightNumber: "EK001", departureTime: "14:30", arrivalTime: "00:30", duration: "6h", class: "First" },
        inbound: { airline: "Emirates", flightNumber: "EK002", departureTime: "02:30", arrivalTime: "12:30", duration: "6h", class: "First" }
      },
      packagePrice: 500000, totalSavings: 75000, originalPrice: 575000,
      nights: 4, includes: ["First Class Flight", "Suite", "All Meals", "Limousine", "Butler"],
      availableRooms: 2, badge: "Exclusive"
    },
    {
      id: 6,
      hotel: {
        id: 106, name: "Hotel de Crillon", city: "Paris", country: "France", flag: "🇫🇷",
        rating: 4.9, reviews: 876, starRating: 5, pricePerNight: 45700, discount: 25,
        badge: "Heritage",
        amenities: ["Spa", "Michelin Restaurant", "Courtyard", "Bar", "Concierge"],
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&auto=format&fit=crop&q=80",
        location: "Place de la Concorde", checkIn: "15:00", checkOut: "12:00",
        description: "Historic luxury hotel on Place de la Concorde"
      },
      flight: {
        outbound: { airline: "Air France", flightNumber: "AF123", departureTime: "09:00", arrivalTime: "12:30", duration: "1h 30m", class: "Business" },
        inbound: { airline: "Air France", flightNumber: "AF456", departureTime: "18:30", arrivalTime: "20:00", duration: "1h 30m", class: "Business" }
      },
      packagePrice: 137100, totalSavings: 45700, originalPrice: 182800,
      nights: 3, includes: ["Flight", "Hotel", "Breakfast", "Museum Pass"],
      availableRooms: 6, badge: "Romantic"
    }
  ];

  const features = [
    { icon: <DollarSign size={20} />, title: "Best Price Guarantee", desc: "Save up to 40% on packages" },
    { icon: <RefreshCcw size={20} />, title: "Free Cancellation", desc: "Cancel within 24 hours" },
    { icon: <ShieldCheck size={20} />, title: "Secure Booking", desc: "SSL encrypted payments" },
    { icon: <Headphones size={20} />, title: "24/7 Support", desc: "We're here to help" },
    { icon: <Clock size={20} />, title: "Instant Confirmation", desc: "E-tickets instantly" },
    { icon: <Award size={20} />, title: "Reward Points", desc: "Earn on every booking" }
  ];

  const testimonials = [
    { id: 1, name: "Sarah Johnson", trip: "London → Paris", rating: 5, comment: "Amazing package! The hotel was perfect and flights were on time. Saved over ₹8,000!", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80" },
    { id: 2, name: "Michael Chen", trip: "New York → Miami", rating: 5, comment: "Best booking experience ever. The app is so easy to use and customer service is top notch.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" }
  ];

  useEffect(() => { setSearchResults(mockPackages); }, []);

  const sortPackages = (packages, option) => {
    const sorted = [...packages];
    switch (option) {
      case 'Price: Low to High': return sorted.sort((a, b) => a.packagePrice - b.packagePrice);
      case 'Price: High to Low': return sorted.sort((a, b) => b.packagePrice - a.packagePrice);
      case 'Rating': return sorted.sort((a, b) => b.hotel.rating - a.hotel.rating);
      case 'Savings': return sorted.sort((a, b) => b.totalSavings - a.totalSavings);
      default: return sorted.sort((a, b) => (b.hotel.rating * b.totalSavings) - (a.hotel.rating * a.totalSavings));
    }
  };

  const searchPackages = () => {
    setLoading(true);
    setTimeout(() => {
      let results = [...mockPackages];
      if (filters.starRating.length > 0) results = results.filter(pkg => filters.starRating.includes(pkg.hotel.starRating));
      if (filters.amenities.length > 0) results = results.filter(pkg => filters.amenities.every(a => pkg.hotel.amenities.includes(a)));
      results = sortPackages(results, sortOption);
      setSearchResults(results);
      setLoading(false);
    }, 1000);
  };

  const handleSearch = (e) => { e.preventDefault(); searchPackages(); };
  const handleInputChange = (e) => { const { name, value } = e.target; setSearchParams(prev => ({ ...prev, [name]: value })); };
  const handleCitySelect = (cityId) => {
    setSelectedCity(cityId);
    const city = popularCities.find(c => c.id === cityId);
    if (city) setSearchParams(prev => ({ ...prev, toCity: city.name, toCode: city.code }));
  };
  const swapCities = () => setSearchParams(prev => ({ ...prev, fromCity: prev.toCity, fromCode: prev.toCode, toCity: prev.fromCity, toCode: prev.fromCode }));
  const toggleDetails = (packageId, e) => { e.stopPropagation(); setShowDetails(prev => ({ ...prev, [packageId]: !prev[packageId] })); };
  const toggleWishlist = (packageId, e) => { e.stopPropagation(); setWishlist(prev => prev.includes(packageId) ? prev.filter(id => id !== packageId) : [...prev, packageId]); };
  const toggleFilter = (type, value) => { setFilters(prev => { const current = prev[type]; return current.includes(value) ? { ...prev, [type]: current.filter(v => v !== value) } : { ...prev, [type]: [...current, value] }; }); };
  const formatPrice = (price) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  const getStarRating = (rating) => '★'.repeat(Math.floor(rating)) + '½'.repeat(rating % 1 >= 0.5 ? 1 : 0);

  const handleViewPackage = (pkg) => navigate('/package-details', { state: { package: pkg, searchParams } });
  const handleBookNow = (pkg, e) => { e.stopPropagation(); navigate('/package-details', { state: { package: pkg, searchParams } }); };

  const badgeColor = (badge) => {
    const map = { 'Best Seller': 'bg-orange-500', 'Luxury': 'bg-purple-600', 'Limited Offer': 'bg-red-500', 'Popular': 'bg-blue-600', 'Exclusive': 'bg-yellow-600', 'Romantic': 'bg-pink-500', default: 'bg-gray-600' };
    return map[badge] || map.default;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f6fa', fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ── HERO ── */}
      <div className="relative overflow-hidden" style={{ minHeight: 260 }}>
        <img
          src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600&q=80"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(110deg, rgba(10,25,80,0.88) 0%, rgba(30,50,140,0.82) 45%, rgba(160,30,40,0.78) 100%)' }} />

        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 pt-8 pb-0">
          {/* Headline */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-2">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-medium text-white border border-white/30" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                <Plane size={12} /> Over 50,000 Flight+Hotel Packages
              </span>
            </div>
            <h1 className="text-4xl font-extrabold text-white leading-tight mb-1">
              Flight <span style={{ color: '#f5a623' }}>+</span> Hotel <span style={{ color: '#f5a623' }}>Perfect Packages</span>
            </h1>
            <p className="text-white/75 text-sm">Best prices · Verified hotels · Instant confirmation · No hidden charges</p>
          </div>

          {/* ── SEARCH CARD ── */}
          <div className="bg-white rounded-2xl shadow-2xl p-5 w-full" style={{ position: 'relative', zIndex: 20 }}>
            {/* Trip type tabs */}
            <div className="flex items-center gap-1 mb-5">
              {[
                { key: 'round', label: 'Round Trip' },
                { key: 'one-way', label: 'One Way' },
                { key: 'multi', label: 'Multi City' }
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTripType(key)}
                  className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                  style={tripType === key ? { background: '#1a3fa8', color: '#fff' } : { background: '#f0f2f8', color: '#555' }}
                >
                  {label}
                </button>
              ))}
              <div className="ml-auto flex items-center gap-1.5 text-xs font-medium" style={{ color: '#22a86e' }}>
                <CheckCircle size={14} /> Free cancellation on most hotels
              </div>
            </div>

            <form onSubmit={handleSearch}>
              {/* ── ROW 1: From / Swap / To / Check-in / Check-out / Rooms / Guests ── */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_1fr_1fr_1fr_1fr] gap-3 mb-3 items-end">

                {/* From */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">From</label>
                  <div className="relative">
                    <Plane className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" size={15} />
                    <input
                      type="text" name="fromCity" value={searchParams.fromCity} onChange={handleInputChange}
                      placeholder="Departure city"
                      className="w-full pl-9 pr-12 py-3 border-2 rounded-xl text-sm focus:outline-none focus:border-blue-500 font-medium"
                      style={{ borderColor: '#e0e4f0' }}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold" style={{ color: '#1a3fa8' }}>{searchParams.fromCode}</span>
                  </div>
                </div>

                {/* Swap */}
                <div className="flex justify-center pb-0.5">
                  <button type="button" onClick={swapCities}
                    className="p-2.5 rounded-xl border-2 hover:bg-blue-50 transition-colors flex-shrink-0"
                    style={{ borderColor: '#e0e4f0' }}>
                    <ArrowLeftRight size={16} style={{ color: '#1a3fa8' }} />
                  </button>
                </div>

                {/* To */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">To</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-red-500" size={15} />
                    <input
                      type="text" name="toCity" value={searchParams.toCity} onChange={handleInputChange}
                      placeholder="Arrival city"
                      className="w-full pl-9 pr-12 py-3 border-2 rounded-xl text-sm focus:outline-none focus:border-blue-500 font-medium"
                      style={{ borderColor: '#e0e4f0' }}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold" style={{ color: '#1a3fa8' }}>{searchParams.toCode}</span>
                  </div>
                </div>

                {/* Check-in */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">Check-in</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                    <input type="date" name="departureDate" value={searchParams.departureDate} onChange={handleInputChange}
                      className="w-full pl-9 pr-3 py-3 border-2 rounded-xl text-sm focus:outline-none focus:border-blue-500 font-medium"
                      style={{ borderColor: '#e0e4f0' }} />
                  </div>
                </div>

                {/* Check-out */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">Check-out</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                    <input type="date" name="returnDate" value={searchParams.returnDate} onChange={handleInputChange}
                      disabled={tripType === 'one-way'}
                      className="w-full pl-9 pr-3 py-3 border-2 rounded-xl text-sm focus:outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-400 font-medium"
                      style={{ borderColor: '#e0e4f0' }} />
                  </div>
                </div>

                {/* Rooms */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">Rooms</label>
                  <div className="relative">
                    <Hotel className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                    <select className="w-full pl-9 pr-3 py-3 border-2 rounded-xl text-sm focus:outline-none focus:border-blue-500 appearance-none bg-white font-medium" style={{ borderColor: '#e0e4f0' }}>
                      <option>1 Room</option><option>2 Rooms</option><option>3 Rooms</option>
                    </select>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                    <select className="w-full pl-9 pr-3 py-3 border-2 rounded-xl text-sm focus:outline-none focus:border-blue-500 appearance-none bg-white font-medium" style={{ borderColor: '#e0e4f0' }}>
                      <option>2 Adults</option><option>1 Adult</option><option>3 Adults</option><option>4 Adults</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* ── ROW 2: Cabin Class + Search Button + Quick Filters ── */}
              <div className="flex flex-wrap items-center gap-2">
                {/* Cabin Class */}
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                  <select name="cabinClass" value={searchParams.cabinClass} onChange={handleInputChange}
                    className="pl-9 pr-8 py-2.5 border-2 rounded-xl text-sm focus:outline-none focus:border-blue-500 appearance-none bg-white font-medium"
                    style={{ borderColor: '#e0e4f0' }}>
                    {cabinClasses.map(cls => <option key={cls} value={cls}>{cls.charAt(0).toUpperCase() + cls.slice(1)}</option>)}
                  </select>
                </div>

                {/* Search Button */}
                <button type="submit" disabled={loading}
                  className="flex items-center gap-2 px-7 py-2.5 rounded-xl text-white font-bold text-sm transition-all hover:opacity-90 active:scale-95 disabled:opacity-60 shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)', boxShadow: '0 4px 15px rgba(192,57,43,0.4)' }}>
                  {loading ? (
                    <><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>Searching...</>
                  ) : (
                    <><Search size={16} /> Search Packages</>
                  )}
                </button>

                {/* Divider */}
                <div className="h-6 w-px bg-gray-200 mx-1" />

                {/* Quick Filters */}
                <span className="text-xs text-gray-400 font-medium">Quick Filter:</span>
                {[2, 3, 4, 5].map(s => (
                  <button key={s} type="button"
                    onClick={() => toggleFilter('starRating', s)}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all"
                    style={filters.starRating.includes(s)
                      ? { background: '#1a3fa8', color: '#fff', borderColor: '#1a3fa8' }
                      : { background: 'transparent', color: '#555', borderColor: '#ddd' }}>
                    {s}★
                  </button>
                ))}
                <button type="button"
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all flex items-center gap-1"
                  style={{ background: 'transparent', color: '#555', borderColor: '#ddd' }}>
                  <Heart size={11} /> Lowest Price
                </button>
                <button type="button"
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all flex items-center gap-1"
                  style={{ background: 'transparent', color: '#555', borderColor: '#ddd' }}>
                  <TrendingUp size={11} /> Top Rated
                </button>
              </div>
            </form>

            {/* Popular Destinations */}
            <div className="mt-5 pt-4" style={{ borderTop: '1px solid #f0f2f8' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Popular Destinations</span>
                <span className="text-xs font-semibold cursor-pointer" style={{ color: '#1a3fa8' }}>View all →</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularCities.map((city) => (
                  <button key={city.id} onClick={() => handleCitySelect(city.id)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl border-2 transition-all text-left"
                    style={selectedCity === city.id
                      ? { borderColor: '#1a3fa8', background: '#eef2ff' }
                      : { borderColor: '#e8eaf0', background: '#fafbff' }}>
                    <span className="text-lg">{city.flag}</span>
                    <div>
                      <div className="text-xs font-bold text-gray-700">{city.name}</div>
                      <div className="text-xs text-gray-400">{city.code} · {city.hotels}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* extra space below card */}
        <div style={{ height: 60 }} />
      </div>

      {/* ── FEATURES BAR ── */}
      <div className="max-w-screen-2xl mx-auto px-4 mt-6 mb-6">
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl" style={{ background: '#eef2ff', color: '#1a3fa8' }}>{f.icon}</div>
                <div>
                  <div className="text-xs font-bold text-gray-700">{f.title}</div>
                  <div className="text-xs text-gray-400">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-screen-2xl mx-auto px-4 pb-12">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* ── SIDEBAR FILTERS ── */}
          <div className={`w-full lg:w-72 flex-shrink-0 ${!showFilters && 'lg:block hidden'}`}>
            <div className="bg-white rounded-2xl shadow-sm p-5 sticky top-4">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <Filter size={16} style={{ color: '#1a3fa8' }} /> Filters
                </h3>
                <button onClick={() => setShowFilters(false)} className="lg:hidden p-1 hover:bg-gray-100 rounded-lg"><X size={16} /></button>
              </div>

              {/* Price Range */}
              <div className="mb-5">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Price Range</h4>
                <input type="range" min="2000" max="500000" step="5000" value={filters.priceRange[1]}
                  onChange={(e) => setFilters(prev => ({ ...prev, priceRange: [prev.priceRange[0], parseInt(e.target.value)] }))}
                  className="w-full accent-blue-700" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{formatPrice(filters.priceRange[0])}</span>
                  <span className="font-semibold text-gray-700">{formatPrice(filters.priceRange[1])}</span>
                </div>
              </div>

              {/* Star Rating */}
              <div className="mb-5">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Star Rating</h4>
                <div className="space-y-2">
                  {starRatings.map(rating => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={filters.starRating.includes(rating)} onChange={() => toggleFilter('starRating', rating)}
                        className="w-4 h-4 rounded accent-blue-700" />
                      <span className="text-yellow-400 text-sm">{'★'.repeat(rating)}</span>
                      <span className="text-xs text-gray-600">&amp; above</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-5">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Amenities</h4>
                <div className="space-y-2">
                  {amenitiesList.map(amenity => {
                    const Icon = amenity.icon;
                    return (
                      <label key={amenity.id} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={filters.amenities.includes(amenity.label)} onChange={() => toggleFilter('amenities', amenity.label)}
                          className="w-4 h-4 rounded accent-blue-700" />
                        <Icon size={14} className="text-gray-400" />
                        <span className="text-xs text-gray-600">{amenity.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Departure Time */}
              <div className="mb-5">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Departure Time</h4>
                <div className="space-y-2">
                  {['00:00 – 06:00', '06:00 – 12:00', '12:00 – 18:00', '18:00 – 24:00'].map(slot => (
                    <label key={slot} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded accent-blue-700" />
                      <span className="text-xs text-gray-600">{slot}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button onClick={searchPackages}
                className="w-full py-2.5 rounded-xl text-white text-sm font-bold transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #1a3fa8 0%, #2563eb 100%)' }}>
                Apply Filters
              </button>
            </div>
          </div>

          {/* ── RESULTS ── */}
          <div className="flex-1 min-w-0">
            {/* Sort Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div className="flex flex-wrap items-center gap-2">
                <button onClick={() => setShowFilters(true)}
                  className="lg:hidden flex items-center gap-2 px-3 py-2 border-2 rounded-xl bg-white text-sm font-medium"
                  style={{ borderColor: '#e0e4f0' }}>
                  <Filter size={16} /> Filters
                </button>
                {sortOptions.map((option) => (
                  <button key={option} onClick={() => { setSortOption(option); setSearchResults(sortPackages(searchResults, option)); }}
                    className="px-3 py-1.5 text-xs rounded-xl border-2 transition-all font-semibold"
                    style={sortOption === option
                      ? { background: '#1a3fa8', borderColor: '#1a3fa8', color: '#fff' }
                      : { borderColor: '#e0e4f0', background: '#fff', color: '#555' }}>
                    {option}
                  </button>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-500">{searchResults.length} packages found</span>
            </div>

            {/* Package Cards */}
            <div className="space-y-4">
              {loading ? (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-sm p-6 animate-pulse">
                    <div className="flex gap-4">
                      <div className="w-52 h-52 bg-gray-200 rounded-xl"></div>
                      <div className="flex-1 space-y-3">
                        <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                searchResults.map((pkg) => (
                  <div key={pkg.id}
                    className="bg-white rounded-2xl shadow-sm border-2 transition-all cursor-pointer hover:shadow-md"
                    style={{ borderColor: selectedPackage === pkg.id ? '#1a3fa8' : 'transparent' }}
                    onClick={() => setSelectedPackage(pkg.id)}>
                    <div className="p-5">
                      <div className="flex flex-col lg:flex-row gap-5">
                        {/* Image */}
                        <div className="relative lg:w-56 flex-shrink-0">
                          <img src={pkg.hotel.image} alt={pkg.hotel.name}
                            className="w-full h-48 lg:h-full object-cover rounded-xl" style={{ minHeight: 180 }} />
                          <button onClick={(e) => toggleWishlist(pkg.id, e)}
                            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-105 transition-transform">
                            <Heart size={16} className={wishlist.includes(pkg.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
                          </button>
                          {pkg.badge && (
                            <span className={`absolute top-3 left-3 px-2 py-1 text-white text-xs font-bold rounded-lg ${badgeColor(pkg.badge)}`}>
                              {pkg.badge}
                            </span>
                          )}
                          <span className="absolute bottom-3 left-3 px-2 py-1 bg-black/70 text-white text-xs font-bold rounded-lg">
                            {pkg.hotel.discount}% OFF
                          </span>
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          {/* Hotel Name */}
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="text-lg font-extrabold text-gray-800">{pkg.hotel.name}</h3>
                                <span className="text-xl">{pkg.hotel.flag}</span>
                              </div>
                              <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                                <span className="text-yellow-400 text-sm">{getStarRating(pkg.hotel.starRating)}</span>
                                <span className="text-gray-300">·</span>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                  <MapPin size={12} className="text-red-400" />
                                  {pkg.hotel.location}, {pkg.hotel.city}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl flex-shrink-0" style={{ background: '#eef2ff' }}>
                              <Star size={14} className="text-yellow-500 fill-yellow-500" />
                              <span className="text-sm font-bold text-gray-800">{pkg.hotel.rating}</span>
                              <span className="text-xs text-gray-400">({pkg.hotel.reviews.toLocaleString()})</span>
                            </div>
                          </div>

                          {/* Flight strip */}
                          <div className="rounded-xl p-3 mb-3" style={{ background: '#f5f7ff', border: '1px solid #e0e7ff' }}>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-xs font-bold text-gray-600 flex items-center gap-1.5">
                                <Plane size={12} style={{ color: '#1a3fa8' }} /> Flight Details
                              </span>
                              <span className="text-xs font-semibold" style={{ color: '#22a86e' }}>✓ Non-stop</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="text-center">
                                <div className="text-sm font-bold text-gray-800">{pkg.flight.outbound.departureTime}</div>
                                <div className="text-xs text-gray-400">{searchParams.fromCode}</div>
                              </div>
                              <div className="flex-1 mx-3 text-center">
                                <div className="text-xs text-gray-400">{pkg.flight.outbound.duration}</div>
                                <div className="flex items-center my-1">
                                  <div className="flex-1 h-px" style={{ background: '#c7d2fe' }}></div>
                                  <Plane size={12} className="mx-1" style={{ color: '#1a3fa8' }} />
                                  <div className="flex-1 h-px" style={{ background: '#c7d2fe' }}></div>
                                </div>
                                <div className="text-xs text-gray-400">{pkg.flight.outbound.airline}</div>
                              </div>
                              <div className="text-center">
                                <div className="text-sm font-bold text-gray-800">{pkg.flight.outbound.arrivalTime}</div>
                                <div className="text-xs text-gray-400">{searchParams.toCode}</div>
                              </div>
                              <span className="ml-4 px-2 py-1 text-xs font-bold rounded-lg" style={{ background: '#dbeafe', color: '#1d4ed8' }}>
                                {pkg.flight.outbound.class}
                              </span>
                            </div>
                          </div>

                          {/* Amenities */}
                          <div className="flex flex-wrap gap-1.5 mb-2.5">
                            {pkg.hotel.amenities.slice(0, 4).map((a, i) => (
                              <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-medium" style={{ background: '#f5f6fa', color: '#555' }}>{a}</span>
                            ))}
                            {pkg.hotel.amenities.length > 4 && (
                              <span className="px-2.5 py-1 rounded-lg text-xs font-medium" style={{ background: '#f5f6fa', color: '#888' }}>+{pkg.hotel.amenities.length - 4} more</span>
                            )}
                          </div>

                          {/* Includes */}
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            {pkg.includes.map((item, i) => (
                              <span key={i} className="flex items-center gap-1 text-xs" style={{ color: '#22a86e' }}>
                                <CheckCircle size={11} /> {item}
                              </span>
                            ))}
                          </div>

                          {/* Price + Actions */}
                          <div className="flex flex-wrap items-end justify-between gap-3 pt-3" style={{ borderTop: '1px solid #f0f2f8' }}>
                            <div>
                              <div className="text-xs text-gray-400 mb-0.5">Package for {pkg.nights} nights</div>
                              <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-extrabold" style={{ color: '#1a3fa8' }}>{formatPrice(pkg.packagePrice)}</span>
                                <span className="text-sm text-gray-400 line-through">{formatPrice(pkg.originalPrice)}</span>
                              </div>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: '#dcfce7', color: '#15803d' }}>
                                  Save {formatPrice(pkg.totalSavings)}
                                </span>
                                <span className="text-xs text-orange-500 font-semibold">{pkg.availableRooms} rooms left</span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <button onClick={(e) => toggleDetails(pkg.id, e)}
                                className="px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all hover:bg-blue-50"
                                style={{ borderColor: '#1a3fa8', color: '#1a3fa8' }}>
                                Details
                              </button>
                              <button onClick={(e) => handleBookNow(pkg, e)}
                                className="px-6 py-2 rounded-xl text-white text-sm font-bold transition-all hover:opacity-90 shadow-md"
                                style={{ background: 'linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)' }}>
                                Book Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Expanded Details */}
                      {showDetails[pkg.id] && (
                        <div className="mt-5 pt-5" style={{ borderTop: '1px solid #f0f2f8' }}>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                              <h4 className="text-sm font-bold text-gray-700 mb-3">Flight Information</h4>
                              <div className="space-y-2">
                                {[{ label: 'Outbound', f: pkg.flight.outbound }, { label: 'Return', f: pkg.flight.inbound }].map(({ label, f }) => (
                                  <div key={label} className="p-3 rounded-xl" style={{ background: '#f5f7ff' }}>
                                    <div className="flex justify-between mb-1">
                                      <span className="text-xs font-bold text-gray-600">{label} Flight</span>
                                      <span className="text-xs text-gray-400">{f.flightNumber}</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-600">
                                      <span>Dep: {f.departureTime}</span>
                                      <span>Arr: {f.arrivalTime}</span>
                                      <span>{f.duration}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-gray-700 mb-3">Hotel Policies</h4>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs text-gray-600">
                                  <Clock size={14} className="text-gray-400" />
                                  Check-in: {pkg.hotel.checkIn} · Check-out: {pkg.hotel.checkOut}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-600">
                                  <ShieldCheck size={14} style={{ color: '#22a86e' }} />
                                  Free cancellation up to 24 hours before check-in
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-600">
                                  <Award size={14} style={{ color: '#1a3fa8' }} />
                                  Earn 2,500 reward points with this booking
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* No results */}
            {!loading && searchResults.length === 0 && (
              <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                <AlertCircle size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-bold text-gray-700 mb-2">No packages found</h3>
                <p className="text-sm text-gray-500 mb-6">Try adjusting your filters or search criteria</p>
                <button onClick={() => { setFilters({ priceRange: [2000, 50000], starRating: [], hotelType: [], amenities: [], flightTimings: [], airlines: [] }); searchPackages(); }}
                  className="px-6 py-2.5 rounded-xl text-white text-sm font-bold"
                  style={{ background: '#1a3fa8' }}>
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ── TRENDING PACKAGES ── */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-800 flex items-center gap-2">
                <TrendingUp size={24} style={{ color: '#1a3fa8' }} /> Trending Packages
              </h2>
              <p className="text-sm text-gray-500 mt-0.5">Most booked flight + hotel combinations</p>
            </div>
            <button className="text-sm font-semibold" style={{ color: '#c0392b' }}>View all →</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockPackages.slice(0, 4).map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-44">
                  <img src={pkg.hotel.image} alt={pkg.hotel.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-white/90 rounded-lg text-xs font-bold text-gray-700">
                    <Star size={12} className="text-yellow-500 fill-yellow-500" /> {pkg.hotel.rating}
                  </div>
                  {pkg.badge && (
                    <span className={`absolute top-3 left-3 px-2 py-1 text-white text-xs font-bold rounded-lg ${badgeColor(pkg.badge)}`}>
                      {pkg.badge}
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-white font-bold text-sm truncate">{pkg.hotel.name} {pkg.hotel.flag}</div>
                    <div className="text-white/80 text-xs">{pkg.hotel.city} · {pkg.nights} nights</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xl font-extrabold" style={{ color: '#1a3fa8' }}>{formatPrice(pkg.packagePrice)}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: '#dcfce7', color: '#15803d' }}>
                      Save {formatPrice(pkg.totalSavings)}
                    </span>
                  </div>
                  <button onClick={() => handleViewPackage(pkg)}
                    className="w-full py-2 rounded-xl text-white text-sm font-bold transition-all hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #1a3fa8 0%, #2563eb 100%)' }}>
                    View Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── TESTIMONIALS ── */}
        <div className="mt-14">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-6 flex items-center gap-2">
            <ThumbsUp size={24} style={{ color: '#1a3fa8' }} /> What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: 1, name: "Sarah Johnson", trip: "London → Paris", rating: 5, comment: "Amazing package! The hotel was perfect and flights were on time. Saved over ₹8,000!", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80" },
              { id: 2, name: "Michael Chen", trip: "New York → Miami", rating: 5, comment: "Best booking experience ever. The app is so easy to use and customer service is top notch.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" }
            ].map((t) => (
              <div key={t.id} className="bg-white rounded-2xl shadow-sm p-5">
                <div className="flex items-center gap-4 mb-3">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-gray-800 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.trip}</div>
                  </div>
                  <div className="ml-auto text-yellow-400 text-sm">{'★'.repeat(t.rating)}</div>
                </div>
                <p className="text-sm text-gray-600 italic">"{t.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightHotels;