import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
  Building2,
  Globe,
  Landmark,
  MapPin,
  Plane,
  Star,
  ShieldCheck,
  RefreshCcw,
  Sparkles,
  Headphones,
  Hotel,
  Search,
  Gift,
  Award,
  Clock,
  CheckCircle,
  DollarSign,
  Users,
  Calendar,
  ChevronRight,
  Heart,
  Wifi,
  Coffee,
  Dumbbell,
  Car,
  Utensils,
  Wind,
  Tv,
  Briefcase,
  ThumbsUp,
  AlertCircle,
  Filter,
  X
} from "lucide-react";

const FlightHotels = () => {
  const navigate = useNavigate();
  
  // State Management
  const [tripType, setTripType] = useState('round');
  const [selectedCity, setSelectedCity] = useState('london');
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showDetails, setShowDetails] = useState({});
  const [wishlist, setWishlist] = useState([]);
  
  // Search Parameters
  const [searchParams, setSearchParams] = useState({
    fromCity: 'London',
    fromCode: 'LON',
    toCity: 'San Jose',
    toCode: 'SJC',
    departureDate: '2026-01-31',
    returnDate: '2026-02-03',
    rooms: 1,
    adults: 2,
    children: 0,
    infants: 0,
    cabinClass: 'economy'
  });

  // Filters
  const [filters, setFilters] = useState({
    priceRange: [2000, 50000],
    starRating: [],
    hotelType: [],
    amenities: [],
    flightTimings: [],
    airlines: []
  });

  // Sort Options
  const [sortOption, setSortOption] = useState('Recommended');
  const sortOptions = ['Recommended', 'Price: Low to High', 'Price: High to Low', 'Rating', 'Savings'];

  // Popular Cities
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

  // Cabin Classes
  const cabinClasses = ['economy', 'premium', 'business', 'first'];

  // Amenities
  const amenitiesList = [
    { id: 'wifi', icon: Wifi, label: 'Free WiFi' },
    { id: 'pool', icon: Dumbbell, label: 'Pool' },
    { id: 'spa', icon: Sparkles, label: 'Spa' },
    { id: 'gym', icon: Dumbbell, label: 'Gym' },
    { id: 'restaurant', icon: Utensils, label: 'Restaurant' },
    { id: 'parking', icon: Car, label: 'Parking' },
    { id: 'ac', icon: Wind, label: 'Air Conditioning' },
    { id: 'tv', icon: Tv, label: 'TV' }
  ];

  // Star Ratings
  const starRatings = [5, 4, 3, 2, 1];

  // Mock Flight + Hotel Packages Data
  const mockPackages = [
    {
      id: 1,
      hotel: {
        id: 101,
        name: "The Peninsula",
        city: "London",
        country: "United Kingdom",
        flag: "🇬🇧",
        rating: 4.9,
        reviews: 1287,
        starRating: 5,
        pricePerNight: 24500,
        discount: 25,
        badge: "Most Popular",
        amenities: ["Free WiFi", "Spa", "Pool", "Butler", "Restaurant", "Gym"],
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&auto=format&fit=crop&q=80",
        location: "Knightsbridge",
        checkIn: "15:00",
        checkOut: "11:00",
        description: "Luxury hotel in the heart of London with stunning views"
      },
      flight: {
        outbound: {
          airline: "British Airways",
          flightNumber: "BA123",
          departureTime: "08:30",
          arrivalTime: "10:45",
          duration: "2h 15m",
          class: "Economy"
        },
        inbound: {
          airline: "British Airways",
          flightNumber: "BA456",
          departureTime: "19:30",
          arrivalTime: "21:45",
          duration: "2h 15m",
          class: "Economy"
        }
      },
      packagePrice: 89750,
      totalSavings: 22400,
      originalPrice: 112150,
      nights: 3,
      includes: ["Flight", "Hotel", "Breakfast", "Airport Transfer"],
      availableRooms: 8,
      badge: "Best Seller"
    },
    {
      id: 2,
      hotel: {
        id: 102,
        name: "St. Regis",
        city: "New York",
        country: "United States",
        flag: "🇺🇸",
        rating: 4.8,
        reviews: 2045,
        starRating: 5,
        pricePerNight: 28900,
        discount: 15,
        badge: "Top Rated",
        amenities: ["Fine Dining", "Bar", "Spa", "Gym", "Concierge"],
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&auto=format&fit=crop&q=80",
        location: "Midtown Manhattan",
        checkIn: "16:00",
        checkOut: "12:00",
        description: "Iconic luxury hotel in New York City"
      },
      flight: {
        outbound: {
          airline: "Delta Airlines",
          flightNumber: "DL789",
          departureTime: "09:45",
          arrivalTime: "12:30",
          duration: "2h 45m",
          class: "Premium"
        },
        inbound: {
          airline: "Delta Airlines",
          flightNumber: "DL101",
          departureTime: "20:15",
          arrivalTime: "23:00",
          duration: "2h 45m",
          class: "Premium"
        }
      },
      packagePrice: 115600,
      totalSavings: 20400,
      originalPrice: 136000,
      nights: 4,
      includes: ["Flight", "Hotel", "Breakfast", "Dinner", "City Tour"],
      availableRooms: 5,
      badge: "Luxury"
    },
    {
      id: 3,
      hotel: {
        id: 103,
        name: "Four Seasons",
        city: "Bangkok",
        country: "Thailand",
        flag: "🇹🇭",
        rating: 4.9,
        reviews: 1567,
        starRating: 5,
        pricePerNight: 22300,
        discount: 30,
        badge: "Luxury Pick",
        amenities: ["Pool", "Spa", "Butler", "Restaurant", "Bar"],
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&auto=format&fit=crop&q=80",
        location: "Riverside",
        checkIn: "14:00",
        checkOut: "12:00",
        description: "Riverside luxury resort in Bangkok"
      },
      flight: {
        outbound: {
          airline: "Thai Airways",
          flightNumber: "TG202",
          departureTime: "22:30",
          arrivalTime: "06:30",
          duration: "8h",
          class: "Business"
        },
        inbound: {
          airline: "Thai Airways",
          flightNumber: "TG303",
          departureTime: "21:00",
          arrivalTime: "05:00",
          duration: "8h",
          class: "Business"
        }
      },
      packagePrice: 66900,
      totalSavings: 28700,
      originalPrice: 95600,
      nights: 3,
      includes: ["Flight", "Hotel", "All Meals", "Spa Credit", "Airport Transfer"],
      availableRooms: 3,
      badge: "Limited Offer"
    },
    {
      id: 4,
      hotel: {
        id: 104,
        name: "Marina Bay Sands",
        city: "Singapore",
        country: "Singapore",
        flag: "🇸🇬",
        rating: 4.8,
        reviews: 3241,
        starRating: 5,
        pricePerNight: 35700,
        discount: 20,
        badge: "Iconic",
        amenities: ["Infinity Pool", "Casino", "Spa", "SkyPark", "Restaurants"],
       image: "https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?w=800&auto=format&fit=crop&q=80",
        location: "Marina Bay",
        checkIn: "15:00",
        checkOut: "11:00",
        description: "Iconic hotel with infinity pool overlooking Singapore"
      },
      flight: {
        outbound: {
          airline: "Singapore Airlines",
          flightNumber: "SQ321",
          departureTime: "10:15",
          arrivalTime: "20:45",
          duration: "10h 30m",
          class: "Premium"
        },
        inbound: {
          airline: "Singapore Airlines",
          flightNumber: "SQ322",
          departureTime: "23:45",
          arrivalTime: "10:15",
          duration: "10h 30m",
          class: "Premium"
        }
      },
      packagePrice: 142800,
      totalSavings: 35700,
      originalPrice: 178500,
      nights: 4,
      includes: ["Flight", "Hotel", "Breakfast", "SkyPark Access"],
      availableRooms: 12,
      badge: "Popular"
    },
    {
      id: 5,
      hotel: {
        id: 105,
        name: "Burj Al Arab",
        city: "Dubai",
        country: "UAE",
        flag: "🇦🇪",
        rating: 5.0,
        reviews: 987,
        starRating: 7,
        pricePerNight: 125000,
        discount: 15,
        badge: "Ultra Luxury",
        amenities: ["Private Beach", "Helipad", "Butler", "Infinity Pool", "Luxury Spa"],
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&auto=format&fit=crop&q=80",
        location: "Jumeirah Beach",
        checkIn: "15:00",
        checkOut: "12:00",
        description: "World's only 7-star hotel, sail-shaped icon of Dubai"
      },
      flight: {
        outbound: {
          airline: "Emirates",
          flightNumber: "EK001",
          departureTime: "14:30",
          arrivalTime: "00:30",
          duration: "6h",
          class: "First"
        },
        inbound: {
          airline: "Emirates",
          flightNumber: "EK002",
          departureTime: "02:30",
          arrivalTime: "12:30",
          duration: "6h",
          class: "First"
        }
      },
      packagePrice: 500000,
      totalSavings: 75000,
      originalPrice: 575000,
      nights: 4,
      includes: ["First Class Flight", "Suite", "All Meals", "Limousine", "Butler"],
      availableRooms: 2,
      badge: "Exclusive"
    },
    {
      id: 6,
      hotel: {
        id: 106,
        name: "Hotel de Crillon",
        city: "Paris",
        country: "France",
        flag: "🇫🇷",
        rating: 4.9,
        reviews: 876,
        starRating: 5,
        pricePerNight: 45700,
        discount: 25,
        badge: "Heritage",
        amenities: ["Spa", "Michelin Restaurant", "Courtyard", "Bar", "Concierge"],
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&auto=format&fit=crop&q=80",
        location: "Place de la Concorde",
        checkIn: "15:00",
        checkOut: "12:00",
        description: "Historic luxury hotel on Place de la Concorde"
      },
      flight: {
        outbound: {
          airline: "Air France",
          flightNumber: "AF123",
          departureTime: "09:00",
          arrivalTime: "12:30",
          duration: "1h 30m",
          class: "Business"
        },
        inbound: {
          airline: "Air France",
          flightNumber: "AF456",
          departureTime: "18:30",
          arrivalTime: "20:00",
          duration: "1h 30m",
          class: "Business"
        }
      },
      packagePrice: 137100,
      totalSavings: 45700,
      originalPrice: 182800,
      nights: 3,
      includes: ["Flight", "Hotel", "Breakfast", "Museum Pass"],
      availableRooms: 6,
      badge: "Romantic"
    }
  ];

  // Trending Packages
  const trendingPackages = [
    {
      id: 1,
      route: "London → Paris",
      duration: "3 nights",
      price: "₹45,999",
      savings: "Save ₹8,400",
      hotels: ["The Ritz", "Hotel de Crillon"],
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&auto=format&fit=crop&q=80",
      rating: 4.8
    },
    {
      id: 2,
      route: "New York → Miami",
      duration: "4 nights",
      price: "₹52,500",
      savings: "Save ₹9,200",
      hotels: ["The Plaza", "Fontainebleau"],
      image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=400&auto=format&fit=crop&q=80",
      rating: 4.7
    },
    {
      id: 3,
      route: "Dubai → Maldives",
      duration: "5 nights",
      price: "₹89,999",
      savings: "Save ₹15,000",
      hotels: ["Conrad Maldives", "Soneva Fushi"],
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=400&auto=format&fit=crop&q=80",
      rating: 4.9
    },
    {
      id: 4,
      route: "Singapore → Bali",
      duration: "4 nights",
      price: "₹42,800",
      savings: "Save ₹7,500",
      hotels: ["Four Seasons Bali", "Mandapa"],
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&auto=format&fit=crop&q=80",
      rating: 4.8
    }
  ];

  // Features
  const features = [
    { icon: <DollarSign size={20} />, title: "Best Price Guarantee", desc: "Save up to 40% on packages" },
    { icon: <RefreshCcw size={20} />, title: "Free Cancellation", desc: "Cancel within 24 hours" },
    { icon: <ShieldCheck size={20} />, title: "Secure Booking", desc: "SSL encrypted payments" },
    { icon: <Headphones size={20} />, title: "24/7 Support", desc: "We're here to help" },
    { icon: <Clock size={20} />, title: "Instant Confirmation", desc: "E-tickets instantly" },
    { icon: <Award size={20} />, title: "Reward Points", desc: "Earn on every booking" }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      trip: "London → Paris",
      rating: 5,
      comment: "Amazing package! The hotel was perfect and flights were on time. Saved over ₹8,000!",
      // Updated stable Unsplash link for Sarah
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      trip: "New York → Miami",
      rating: 5,
      comment: "Best booking experience ever. The app is so easy to use and customer service is top notch.",
      // Updated stable Unsplash link for Michael
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
    }
];

  // API URLs (configurable)
  const API_BASE = 'https://api.example.com/api';
  const PACKAGES_API = `${API_BASE}/flight-hotel-packages`;
  const BOOKINGS_API = `${API_BASE}/bookings`;
  const WISHLIST_API = `${API_BASE}/wishlist`;

  // Initialize with mock data
  useEffect(() => {
    setSearchResults(mockPackages);
  }, []);

  // Search Packages
  const searchPackages = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      let results = [...mockPackages];
      
      // Apply filters
      if (filters.starRating.length > 0) {
        results = results.filter(pkg => 
          filters.starRating.includes(pkg.hotel.starRating)
        );
      }
      
      if (filters.amenities.length > 0) {
        results = results.filter(pkg =>
          filters.amenities.every(amenity =>
            pkg.hotel.amenities.includes(amenity)
          )
        );
      }
      
      // Apply sorting
      results = sortPackages(results, sortOption);
      
      setSearchResults(results);
      setLoading(false);
    }, 1000);
  };

  // Sort Packages
  const sortPackages = (packages, option) => {
    const sorted = [...packages];
    
    switch (option) {
      case 'Price: Low to High':
        return sorted.sort((a, b) => a.packagePrice - b.packagePrice);
      case 'Price: High to Low':
        return sorted.sort((a, b) => b.packagePrice - a.packagePrice);
      case 'Rating':
        return sorted.sort((a, b) => b.hotel.rating - a.hotel.rating);
      case 'Savings':
        return sorted.sort((a, b) => b.totalSavings - a.totalSavings);
      case 'Recommended':
      default:
        return sorted.sort((a, b) => (b.hotel.rating * b.totalSavings) - (a.hotel.rating * a.totalSavings));
    }
  };

  // Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    searchPackages();
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle City Select
  const handleCitySelect = (cityId) => {
    setSelectedCity(cityId);
    const city = popularCities.find(c => c.id === cityId);
    if (city) {
      setSearchParams(prev => ({
        ...prev,
        toCity: city.name,
        toCode: city.code
      }));
    }
  };

  // Swap Cities
  const swapCities = () => {
    setSearchParams(prev => ({
      ...prev,
      fromCity: prev.toCity,
      fromCode: prev.toCode,
      toCity: prev.fromCity,
      toCode: prev.fromCode
    }));
  };

  // Toggle Details
  const toggleDetails = (packageId, e) => {
    e.stopPropagation();
    setShowDetails(prev => ({
      ...prev,
      [packageId]: !prev[packageId]
    }));
  };

  // Toggle Wishlist
  const toggleWishlist = (packageId, e) => {
    e.stopPropagation();
    setWishlist(prev => {
      if (prev.includes(packageId)) {
        return prev.filter(id => id !== packageId);
      } else {
        return [...prev, packageId];
      }
    });
  };

  // Toggle Filter
  const toggleFilter = (type, value) => {
    setFilters(prev => {
      const current = prev[type];
      if (current.includes(value)) {
        return { ...prev, [type]: current.filter(v => v !== value) };
      } else {
        return { ...prev, [type]: [...current, value] };
      }
    });
  };

  // Format Price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Get Star Rating Display
  const getStarRating = (rating) => {
    return '★'.repeat(Math.floor(rating)) + '½'.repeat(rating % 1 >= 0.5 ? 1 : 0);
  };

  // Handle View Package
  const handleViewPackage = (pkg) => {
    navigate('/package-details', {
      state: {
        package: pkg,
        searchParams
      }
    });
  };

  // Handle Booking
  const handleBookNow = (pkg) => {
    navigate('/package-details', {
      state: {
        package: pkg,
        passengers: searchParams.adults + searchParams.children,
        rooms: searchParams.rooms,
        totalPrice: pkg.packagePrice
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
       

        {/* Main Search Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-4">
              {['round', 'one-way', 'multi'].map((type) => (
                <button
                  key={type}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    tripType === type
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setTripType(type)}
                >
                  {type === 'round' ? 'Round Trip' : type === 'one-way' ? 'One Way' : 'Multi City'}
                </button>
              ))}
            </div>
            <div className="text-sm text-green-600 flex items-center gap-1">
              <CheckCircle size={16} />
              <span>Free cancellation on most hotels</span>
            </div>
          </div>

          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {/* From Location */}
              <div className="relative">
                <label className="block text-sm text-gray-500 mb-1">From</label>
                <div className="relative">
                  <input
                    type="text"
                    name="fromCity"
                    value={searchParams.fromCity}
                    onChange={handleInputChange}
                    placeholder="Departure city"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={18} />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                    {searchParams.fromCode}
                  </span>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={swapCities}
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 mb-1"
                >
                  <RefreshCcw size={18} className="text-gray-600" />
                </button>
              </div>

              {/* To Location */}
              <div className="relative">
                <label className="block text-sm text-gray-500 mb-1">To</label>
                <div className="relative">
                  <input
                    type="text"
                    name="toCity"
                    value={searchParams.toCity}
                    onChange={handleInputChange}
                    placeholder="Arrival city"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={18} />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                    {searchParams.toCode}
                  </span>
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <label className="block text-sm text-gray-500 mb-1">Departure</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="departureDate"
                      value={searchParams.departureDate}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm text-gray-500 mb-1">Return</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="returnDate"
                      value={searchParams.returnDate}
                      onChange={handleInputChange}
                      disabled={tripType === 'one-way'}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400"
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>
              </div>

              {/* Travelers & Class */}
              <div className="relative">
                <label className="block text-sm text-gray-500 mb-1">Travelers & Class</label>
                <div className="relative">
                  <select
                    className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                    value={`${searchParams.adults} adults, ${searchParams.rooms} rooms`}
                    onChange={(e) => {
                      // This would open a modal for detailed selection
                    }}
                  >
                    <option>1 room, 2 adults</option>
                    <option>1 room, 1 adult</option>
                    <option>2 rooms, 4 adults</option>
                    <option>1 room, 2 adults, 1 child</option>
                  </select>
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">▼</span>
                </div>
              </div>

              {/* Cabin Class */}
              <div className="relative">
                <label className="block text-sm text-gray-500 mb-1">Cabin Class</label>
                <div className="relative">
                  <select
                    name="cabinClass"
                    value={searchParams.cabinClass}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                  >
                    {cabinClasses.map(cls => (
                      <option key={cls} value={cls}>
                        {cls.charAt(0).toUpperCase() + cls.slice(1)}
                      </option>
                    ))}
                  </select>
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">▼</span>
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search size={18} />
                      Search Packages
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Popular Destinations */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700">Popular Destinations:</span>
              <span className="text-xs text-blue-600 cursor-pointer hover:underline">View all</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularCities.slice(0, 8).map((city) => {
                const IconComponent = city.icon;
                return (
                  <button
                    key={city.id}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
                      selectedCity === city.id
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                    onClick={() => handleCitySelect(city.id)}
                  >
                    <span className="text-lg">{city.flag}</span>
                    <div className="text-left">
                      <div className="text-sm font-medium">{city.name}</div>
                      <div className="text-xs text-gray-500">{city.code} • {city.hotels} hotels</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-800">{feature.title}</h4>
                  <p className="text-xs text-gray-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className={`w-full lg:w-80 ${!showFilters && 'lg:block hidden'}`}>
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-800">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden p-1 hover:bg-gray-100 rounded"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Price Range (per night)</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="2000"
                    max="50000"
                    step="1000"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters(prev => ({
                      ...prev,
                      priceRange: [prev.priceRange[0], parseInt(e.target.value)]
                    }))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{formatPrice(filters.priceRange[0])}</span>
                    <span className="text-gray-600">{formatPrice(filters.priceRange[1])}</span>
                  </div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Star Rating</h4>
                <div className="space-y-2">
                  {starRatings.map(rating => (
                    <label key={rating} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.starRating.includes(rating)}
                        onChange={() => toggleFilter('starRating', rating)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">
                        {Array(rating).fill('★').join('')} & above
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Hotel Amenities</h4>
                <div className="space-y-2">
                  {amenitiesList.slice(0, 6).map(amenity => {
                    const Icon = amenity.icon;
                    return (
                      <label key={amenity.id} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.amenities.includes(amenity.label)}
                          onChange={() => toggleFilter('amenities', amenity.label)}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <Icon size={16} className="ml-2 mr-2 text-gray-500" />
                        <span className="text-gray-700">{amenity.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Flight Timings */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Departure Time</h4>
                <div className="space-y-2">
                  {['00:00 - 06:00', '06:00 - 12:00', '12:00 - 18:00', '18:00 - 24:00'].map(slot => (
                    <label key={slot} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">{slot}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Apply Filters Button */}
              <button
                onClick={searchPackages}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div className="flex-1">
            {/* Sort and Filter Bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden px-4 py-2 border border-gray-300 rounded-lg bg-white flex items-center gap-2"
                >
                  <Filter size={18} />
                  Filters
                </button>
                <div className="flex flex-wrap gap-2">
                  {sortOptions.map((option, i) => (
                    <button
                      key={i}
                      className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                        sortOption === option
                          ? 'bg-blue-100 border-blue-300 text-blue-700'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                      onClick={() => {
                        setSortOption(option);
                        sortPackages(searchResults, option);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-600">
                {searchResults.length} packages found
              </div>
            </div>

            {/* Results Grid */}
            <div className="space-y-4">
              {loading ? (
                // Loading Skeleton
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md p-6 animate-pulse">
                    <div className="flex gap-4">
                      <div className="w-48 h-48 bg-gray-200 rounded-lg"></div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                searchResults.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`bg-white rounded-xl shadow-md border-2 transition-all cursor-pointer ${
                      selectedPackage === pkg.id
                        ? 'border-blue-500 shadow-lg'
                        : 'border-transparent hover:border-blue-300'
                    }`}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Hotel Image */}
                        <div className="relative lg:w-64">
                          <img
                            src={pkg.hotel.image}
                            alt={pkg.hotel.name}
                            className="w-full h-48 lg:h-64 object-cover rounded-lg"
                          />
                          <button
                            onClick={(e) => toggleWishlist(pkg.id, e)}
                            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-105 transition-transform"
                          >
                            <Heart
                              size={18}
                              className={wishlist.includes(pkg.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}
                            />
                          </button>
                          {pkg.badge && (
                            <div className="absolute top-3 left-3 px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                              {pkg.badge}
                            </div>
                          )}
                          <div className="absolute bottom-3 left-3 px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded">
                            {pkg.hotel.discount}% OFF
                          </div>
                        </div>

                        {/* Package Details */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-xl font-bold text-gray-800">
                                  {pkg.hotel.name}
                                </h3>
                                <span className="text-xl">{pkg.hotel.flag}</span>
                              </div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="flex items-center text-yellow-500">
                                  {getStarRating(pkg.hotel.starRating)}
                                </div>
                                <span className="text-sm text-gray-500">•</span>
                                <div className="flex items-center gap-1 text-sm">
                                  <MapPin size={14} className="text-gray-400" />
                                  <span className="text-gray-600">{pkg.hotel.location}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded">
                                <Star size={16} className="text-yellow-500 fill-current" />
                                <span className="font-bold text-gray-800">{pkg.hotel.rating}</span>
                                <span className="text-xs text-gray-500">({pkg.hotel.reviews.toLocaleString()})</span>
                              </div>
                            </div>
                          </div>

                          {/* Flight Details */}
                          <div className="bg-gray-50 p-3 rounded-lg mb-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">Flight Details</span>
                              <span className="text-xs text-green-600 flex items-center gap-1">
                                <CheckCircle size={12} />
                                Non-stop
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div>
                                  <div className="text-sm font-medium">{pkg.flight.outbound.departureTime}</div>
                                  <div className="text-xs text-gray-500">{searchParams.fromCode}</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-xs text-gray-500">{pkg.flight.outbound.duration}</div>
                                  <div className="w-16 h-px bg-gray-300 my-1"></div>
                                  <div className="text-xs text-gray-500">{pkg.flight.outbound.airline}</div>
                                </div>
                                <div>
                                  <div className="text-sm font-medium">{pkg.flight.outbound.arrivalTime}</div>
                                  <div className="text-xs text-gray-500">{searchParams.toCode}</div>
                                </div>
                              </div>
                              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                {pkg.flight.outbound.class}
                              </span>
                            </div>
                          </div>

                          {/* Hotel Amenities */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {pkg.hotel.amenities.slice(0, 4).map((amenity, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                {amenity}
                              </span>
                            ))}
                            {pkg.hotel.amenities.length > 4 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                +{pkg.hotel.amenities.length - 4} more
                              </span>
                            )}
                          </div>

                          {/* Package Includes */}
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs text-gray-600">Includes:</span>
                            {pkg.includes.map((item, idx) => (
                              <span key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                                <CheckCircle size={12} className="text-green-500" />
                                {item}
                              </span>
                            ))}
                          </div>

                          {/* Price and Actions */}
                          <div className="flex items-end justify-between mt-4 pt-4 border-t">
                            <div>
                              <div className="text-xs text-gray-500 mb-1">Package price for {pkg.nights} nights</div>
                              <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-bold text-blue-600">
                                  {formatPrice(pkg.packagePrice)}
                                </span>
                                <span className="text-sm text-gray-500 line-through">
                                  {formatPrice(pkg.originalPrice)}
                                </span>
                              </div>
                              <div className="flex items-center gap-1 mt-1">
                                <span className="text-xs text-green-600 font-medium">
                                  Save {formatPrice(pkg.totalSavings)}
                                </span>
                                <span className="text-xs text-gray-500">•</span>
                                <span className="text-xs text-gray-500">
                                  {pkg.availableRooms} rooms left
                                </span>
                              </div>
                            </div>
                            
                            <div className="flex gap-2">
                              <button
                                onClick={(e) => toggleDetails(pkg.id, e)}
                                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                              >
                                Details
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleBookNow(pkg);
                                }}
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                              >
                                Book Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Additional Details */}
                      {showDetails[pkg.id] && (
                        <div className="mt-6 pt-6 border-t">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-medium text-gray-800 mb-3">Flight Details</h4>
                              <div className="space-y-3">
                                <div className="bg-gray-50 p-3 rounded">
                                  <div className="flex justify-between mb-2">
                                    <span className="text-sm font-medium">Outbound Flight</span>
                                    <span className="text-xs text-gray-500">{pkg.flight.outbound.flightNumber}</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span>Departure: {pkg.flight.outbound.departureTime}</span>
                                    <span>Arrival: {pkg.flight.outbound.arrivalTime}</span>
                                  </div>
                                </div>
                                <div className="bg-gray-50 p-3 rounded">
                                  <div className="flex justify-between mb-2">
                                    <span className="text-sm font-medium">Return Flight</span>
                                    <span className="text-xs text-gray-500">{pkg.flight.inbound.flightNumber}</span>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                    <span>Departure: {pkg.flight.inbound.departureTime}</span>
                                    <span>Arrival: {pkg.flight.inbound.arrivalTime}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-medium text-gray-800 mb-3">Hotel Policies</h4>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm">
                                  <Clock size={16} className="text-gray-400" />
                                  <span>Check-in: {pkg.hotel.checkIn} | Check-out: {pkg.hotel.checkOut}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <ShieldCheck size={16} className="text-green-500" />
                                  <span>Free cancellation up to 24 hours before check-in</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Award size={16} className="text-blue-500" />
                                  <span>Earn 2,500 reward points with this booking</span>
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

            {/* No Results */}
            {!loading && searchResults.length === 0 && (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <div className="mb-4">
                  <AlertCircle size={48} className="mx-auto text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No packages found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search criteria
                </p>
                <button
                  onClick={() => {
                    setFilters({
                      priceRange: [2000, 50000],
                      starRating: [],
                      hotelType: [],
                      amenities: [],
                      flightTimings: [],
                      airlines: []
                    });
                    searchPackages();
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Trending Packages Section */}
<div className="mt-12">
  <div className="flex items-center justify-between mb-6">
    <div>
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <Award size={24} className="text-blue-600" />
        Trending Packages
      </h2>
      <p className="text-gray-600">Most booked flight + hotel combinations</p>
    </div>
    <button className="text-blue-600 text-sm font-medium hover:underline">
      View all →
    </button>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {mockPackages.slice(0, 4).map((pkg) => (
      <div key={pkg.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-40">
          <img 
            src={pkg.hotel.image} 
            alt={pkg.hotel.name} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute top-3 right-3 px-2 py-1 bg-white rounded text-xs font-medium shadow">
            ⭐ {pkg.hotel.rating}
          </div>
          <div className="absolute top-3 left-3 px-2 py-1 bg-orange-500 text-white rounded text-xs font-medium">
            {pkg.badge}
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-gray-800 truncate">{pkg.hotel.name}</h3>
            <span className="text-lg">{pkg.hotel.flag}</span>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            {pkg.hotel.city} • {pkg.nights} nights
          </p>
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-xl font-bold text-blue-600">
                {formatPrice(pkg.packagePrice)}
              </span>
              <span className="text-xs text-green-600 ml-2">
                Save {formatPrice(pkg.totalSavings)}
              </span>
            </div>
          </div>
          <button
            onClick={() => handleViewPackage(pkg)}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            View Package
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Testimonials Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <ThumbsUp size={24} className="text-blue-600" />
            What Our Travelers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.trip}</p>
                  </div>
                  <div className="ml-auto flex text-yellow-500">
                    {Array(testimonial.rating).fill('★').join('')}
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default FlightHotels;