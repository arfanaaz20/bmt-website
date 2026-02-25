import React, { useState, useRef, useEffect } from 'react';
import { 
  Filter, Star, Check, Clock, MapPin, Zap, Infinity, Shield, 
  Users, Calendar, Car, Search, ChevronLeft, ChevronRight,
  Settings, Globe, User, Tag, X, ThumbsUp, Info, Fuel, Gauge, Briefcase,
  Sparkles, BadgePercent, Navigation, Wifi, Coffee, Snowflake, CreditCard,
  ArrowRight, Heart
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cab = () => {
  const navigate = useNavigate();
  
  // --- STATE MANAGEMENT ---
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSuppliers, setSelectedSuppliers] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [sortOption, setSortOption] = useState('recommended');
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [searchMode, setSearchMode] = useState('quick');
  const [favourites, setFavourites] = useState([]);
  
  // Quick search states
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  
  // Rental search states
  const [rentalPickupDate, setRentalPickupDate] = useState('');
  const [rentalDropoffDate, setRentalDropoffDate] = useState('');
  const [rentalLocation, setRentalLocation] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  const carouselRef = useRef(null);

  // Initialize dates
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (!rentalPickupDate) {
      const pickupDateStr = today.toISOString().split('T')[0];
      const dropoffDateStr = tomorrow.toISOString().split('T')[0];
      setRentalPickupDate(pickupDateStr);
      setRentalDropoffDate(dropoffDateStr);
    }
  }, []);

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // --- MOCK DATA (NO JSX IN DATA) ---
  const miniCars = [
    { 
      id: 101, 
      name: "Mitsubishi Xpander", 
      type: "SUV", 
      price: "5,700", 
      image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=200&h=120&fit=crop",
      seats: 7,
      transmission: "Automatic",
      fuel: "Petrol",
      category: "SUV"
    },
    { 
      id: 102, 
      name: "Honda City", 
      type: "Sedan", 
      price: "3,790", 
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=200&h=120&fit=crop",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      category: "Sedan"
    },
    { 
      id: 103, 
      name: "Toyota Vios", 
      type: "Sedan", 
      price: "3,950", 
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=120&fit=crop",
      seats: 5,
      transmission: "Manual",
      fuel: "Petrol",
      category: "Sedan"
    },
    { 
      id: 104, 
      name: "Fortuner", 
      type: "Premium SUV", 
      price: "7,500", 
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=200&h=120&fit=crop",
      seats: 7,
      transmission: "Automatic",
      fuel: "Diesel",
      category: "SUV"
    },
    { 
      id: 105, 
      name: "Innova Crysta", 
      type: "MPV", 
      price: "6,200", 
      image: "https://images.unsplash.com/photo-1626847037657-fd34d2ca3b18?w=200&h=120&fit=crop",
      seats: 8,
      transmission: "Manual",
      fuel: "Diesel",
      category: "MPV"
    },
    { 
      id: 106, 
      name: "Swift Dzire", 
      type: "Economy", 
      price: "3,100", 
      image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=200&h=120&fit=crop",
      seats: 5,
      transmission: "Manual",
      fuel: "Petrol",
      category: "Economy"
    },
  ];

  const allCars = [
    {
      id: 1,
      name: "Volkswagen Jetta",
      category: "Standard Car",
      badge: "Premium",
      seats: 5,
      bags: 2,
      transmission: "Automatic",
      fuel: "Petrol",
      supplier: "AVIS",
      rating: 4.3,
      reviewCount: 461,
      featureIcons: ["Wifi", "Coffee", "Snowflake", "Users"],
      tags: [
        "Near the airport, free shuttle bus",
        "Instant confirmation",
        "Open 24 hours",
        "Full to Full fuel policy"
      ],
      mileage: "Unlimited mileage",
      originalPrice: 10500,
      price: 8495,
      total: 8495,
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=250&fit=crop",
      color: "Silver",
      year: 2023,
      ac: true
    },
    {
      id: 2,
      name: "Hyundai Creta",
      category: "SUV",
      badge: "Popular",
      seats: 5,
      bags: 3,
      transmission: "Automatic",
      fuel: "Petrol",
      supplier: "AVIS",
      rating: 4.5,
      reviewCount: 632,
      featureIcons: ["Wifi", "Coffee", "Snowflake", "Users"],
      tags: [
        "Near the airport, free shuttle bus",
        "Instant confirmation",
        "Free Cancellation",
        "Includes Additional Liability Insurance",
        "Full to Full fuel policy"
      ],
      mileage: "Unlimited mileage",
      originalPrice: 12500,
      price: 10680,
      total: 10680,
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=250&fit=crop",
      color: "White",
      year: 2024,
      ac: true
    },
    {
      id: 3,
      name: "Tesla Model 3",
      category: "Electric Vehicle",
      badge: "EV",
      seats: 5,
      bags: 2,
      transmission: "Automatic",
      fuel: "Electric",
      supplier: "AVIS",
      rating: 4.7,
      reviewCount: 321,
      featureIcons: ["Wifi", "Coffee", "Snowflake", "Zap"],
      tags: [
        "Near the airport, free shuttle bus",
        "Instant confirmation",
        "Free Cancellation",
        "Open 24 hours",
        "Full to Full charging"
      ],
      mileage: "Unlimited mileage",
      originalPrice: 9500,
      price: 8514,
      total: 8514,
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=250&fit=crop",
      color: "Red",
      year: 2024,
      ac: true
    },
    {
      id: 4,
      name: "Ford F-150",
      category: "Pickup Truck",
      badge: "Heavy Duty",
      seats: 5,
      bags: 4,
      transmission: "Automatic",
      fuel: "Petrol",
      supplier: "AVIS",
      rating: 4.4,
      reviewCount: 289,
      featureIcons: ["Wifi", "Coffee", "Snowflake", "Briefcase"],
      tags: [
        "Near the airport, free shuttle bus",
        "Instant confirmation",
        "Free Cancellation",
        "Open 24 hours",
        "Full to Full fuel policy"
      ],
      mileage: "Unlimited mileage",
      originalPrice: 13000,
      price: 12355,
      total: 12355,
      image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=250&fit=crop",
      color: "Black",
      year: 2023,
      ac: true
    }
  ];

  const suppliers = ["AVIS", "European Car Rent", "Economy Rent A Car", "Avia Star River", "Fox", "Seats"];
  const seatOptions = ["4-5 seats", "6-7 seats", "8+ seats"];
  const promoCodes = [
    { code: "PROMO8", discount: "8% Off", value: "8.00", minAmount: "₹5000" },
    { code: "SAVE10", discount: "₹10.00 Off", value: "10.00", minAmount: "No minimum" },
    { code: "TRIP15", discount: "₹15.00 Off", value: "15.00", minAmount: "No minimum" },
    { code: "BIG30", discount: "₹30.00 Off", value: "30.00", minAmount: "₹10000" }
  ];

  // --- LOGIC ---

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const toggleFavourite = (carId) => {
    if (favourites.includes(carId)) {
      setFavourites(favourites.filter(id => id !== carId));
    } else {
      setFavourites([...favourites, carId]);
    }
  };

  const handleCarClick = (car) => {
    // Create a clean copy without any JSX or functions
    const cleanCar = {
      id: car.id,
      name: car.name,
      category: car.category,
      badge: car.badge,
      seats: car.seats,
      bags: car.bags,
      transmission: car.transmission,
      fuel: car.fuel,
      supplier: car.supplier,
      rating: car.rating,
      reviewCount: car.reviewCount,
      featureIcons: car.featureIcons || [],
      tags: car.tags || [],
      mileage: car.mileage,
      originalPrice: car.originalPrice,
      price: car.price,
      total: car.total,
      image: car.image,
      color: car.color,
      year: car.year,
      ac: car.ac,
      pickupLocation: pickupLocation || 'Airport',
      dropoffLocation: dropoffLocation || '',
      rentalLocation: rentalLocation || '',
      rentalPickupDate: rentalPickupDate || '',
      rentalDropoffDate: rentalDropoffDate || '',
      searchMode: searchMode
    };
    
    navigate(`/cab-detail/${car.id}`, { 
      state: { car: cleanCar }
    });
  };

  const filteredCars = allCars
    .filter(car => {
      const query = searchQuery.toLowerCase();
      const searchMatch = 
        car.name.toLowerCase().includes(query) || 
        car.category.toLowerCase().includes(query) ||
        car.supplier.toLowerCase().includes(query);

      const supplierMatch = selectedSuppliers.length === 0 || selectedSuppliers.includes(car.supplier);
      const seatsMatch = selectedSeats.length === 0 || selectedSeats.some(seat => {
        if (seat === "4-5 seats") return car.seats <= 5;
        if (seat === "6-7 seats") return car.seats >= 6 && car.seats <= 7;
        if (seat === "8+ seats") return car.seats >= 8;
        return false;
      });
      
      return searchMatch && supplierMatch && seatsMatch;
    })
    .sort((a, b) => {
      if (sortOption === 'price_asc') return a.price - b.price;
      if (sortOption === 'price_desc') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      return 0;
    });

  const toggleSupplier = (supplier) => {
    setSelectedSuppliers(prev => 
      prev.includes(supplier) ? prev.filter(s => s !== supplier) : [...prev, supplier]
    );
  };

  const toggleSeat = (seat) => {
    setSelectedSeats(prev => 
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const handleQuickSearch = () => {
    if (pickupLocation && dropoffLocation) {
      document.getElementById('car-listings')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRentalSearch = () => {
    if (rentalLocation && rentalPickupDate && rentalDropoffDate) {
      document.getElementById('car-listings')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const calculateDays = () => {
    if (rentalPickupDate && rentalDropoffDate) {
      const start = new Date(rentalPickupDate);
      const end = new Date(rentalDropoffDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays || 1;
    }
    return 1;
  };

  // Helper function to render feature icons
  const renderFeatureIcon = (iconName) => {
    switch(iconName) {
      case 'Wifi': return <Wifi className="w-4 h-4" />;
      case 'Coffee': return <Coffee className="w-4 h-4" />;
      case 'Snowflake': return <Snowflake className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'Zap': return <Zap className="w-4 h-4" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4" />;
      default: return <Check className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* --- HEADER --- */}
      <div className="bg-white border-b border-blue-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            
            <div className="flex gap-1 bg-blue-50 p-1 rounded-full">
              <button 
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  searchMode === 'quick' 
                    ? 'bg-white text-blue-600 shadow-sm border border-blue-200' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setSearchMode('quick')}
              >
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Quick Cab
                </span>
              </button>
              <button 
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  searchMode === 'rental' 
                    ? 'bg-white text-blue-600 shadow-sm border border-blue-200' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setSearchMode('rental')}
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Car Rental
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- SEARCH SECTION --- */}
      <div className="bg-white border-b border-blue-100">
        <div className="max-w-[1280px] mx-auto px-4 py-6">
          
          {searchMode === 'quick' ? (
            /* --- QUICK SEARCH MODE --- */
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Zap className="w-6 h-6 text-blue-500" />
                Book a cab instantly
              </h2>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Pickup Location</label>
                  <div className="flex items-center gap-3 border border-gray-200 rounded-xl p-3.5 hover:border-blue-500 hover:shadow-sm transition-all bg-white">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <input 
                      type="text" 
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      placeholder="Enter pickup location"
                      className="flex-1 outline-none text-gray-900 placeholder-gray-400 bg-transparent"
                    />
                    {pickupLocation && (
                      <button onClick={() => setPickupLocation('')} className="text-gray-400 hover:text-gray-600">
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Dropoff Location</label>
                  <div className="flex items-center gap-3 border border-gray-200 rounded-xl p-3.5 hover:border-blue-500 hover:shadow-sm transition-all bg-white">
                    <Navigation className="w-5 h-5 text-blue-500" />
                    <input 
                      type="text" 
                      value={dropoffLocation}
                      onChange={(e) => setDropoffLocation(e.target.value)}
                      placeholder="Enter dropoff location"
                      className="flex-1 outline-none text-gray-900 placeholder-gray-400 bg-transparent"
                    />
                    {dropoffLocation && (
                      <button onClick={() => setDropoffLocation('')} className="text-gray-400 hover:text-gray-600">
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-end">
                  <button 
                    onClick={handleQuickSearch}
                    className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                  >
                    <Search className="w-5 h-5" />
                    Search Cab
                  </button>
                </div>
              </div>

              {/* Top Picks Section */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-500" />
                    Top Picks for Today
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    {formatDate(new Date().toISOString().split('T')[0])}
                  </div>
                </div>

                <div className="relative group">
                  <button 
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:border-blue-500 hover:text-blue-500"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <div 
                    ref={carouselRef}
                    className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {miniCars.map(car => (
                      <div 
                        key={car.id} 
                        onClick={() => handleCarClick(car)}
                        className="min-w-[220px] border border-gray-200 rounded-xl p-4 hover:border-blue-500 hover:shadow-lg cursor-pointer transition-all bg-white group"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                            {car.type}
                          </span>
                          <button 
                            onClick={(e) => { e.stopPropagation(); toggleFavourite(car.id); }}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Heart className={`w-4 h-4 ${favourites.includes(car.id) ? 'fill-red-500 text-red-500' : ''}`} />
                          </button>
                        </div>
                        <img src={car.image} className="w-full h-32 object-contain mb-3 group-hover:scale-105 transition-transform" alt={car.name} />
                        <p className="font-bold text-gray-900 mb-1">{car.name}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <Users className="w-3 h-3" /> {car.seats} seats
                          <span className="w-1 h-1 bg-gray-300 rounded-full" />
                          <Gauge className="w-3 h-3" /> {car.transmission}
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-lg font-bold text-gray-900">₹{car.price}</span>
                            <span className="text-xs text-gray-500 ml-1">+ taxes</span>
                          </div>
                          <button className="text-blue-500 text-sm font-medium hover:text-blue-600 flex items-center gap-1">
                            Book <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:border-blue-500 hover:text-blue-500"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* --- RENTAL SEARCH MODE --- */
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-blue-500" />
                Rent a car for your trip
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Pickup Location</label>
                  <div className="flex items-center gap-3 border border-gray-200 rounded-xl p-3.5 hover:border-blue-500 hover:shadow-sm transition-all bg-white">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <input 
                      type="text" 
                      value={rentalLocation}
                      onChange={(e) => setRentalLocation(e.target.value)}
                      placeholder="City, airport or area"
                      className="flex-1 outline-none text-gray-900 placeholder-gray-400 bg-transparent"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Pickup Date & Time</label>
                  <div 
                    className="flex items-center gap-3 border border-gray-200 rounded-xl p-3.5 hover:border-blue-500 hover:shadow-sm transition-all bg-white cursor-pointer"
                    onClick={() => setShowDatePicker(!showDatePicker)}
                  >
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <div className="flex-1">
                      <div className="text-gray-900 font-medium">{formatDate(rentalPickupDate)}</div>
                      <div className="text-xs text-gray-500">10:00 AM</div>
                    </div>
                  </div>

                  {showDatePicker && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-xl z-50 p-5">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-gray-900">Select Dates</h4>
                        <button onClick={() => setShowDatePicker(false)} className="text-gray-400 hover:text-gray-600">
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1.5">Pickup Date</label>
                          <input 
                            type="date" 
                            value={rentalPickupDate}
                            onChange={(e) => setRentalPickupDate(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1.5">Return Date</label>
                          <input 
                            type="date" 
                            value={rentalDropoffDate}
                            onChange={(e) => setRentalDropoffDate(e.target.value)}
                            min={rentalPickupDate}
                            className="w-full border border-gray-200 rounded-lg p-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                          />
                        </div>
                        <button 
                          onClick={() => setShowDatePicker(false)}
                          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-lg font-medium transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Return Date & Time</label>
                  <div className="flex items-center gap-3 border border-gray-200 rounded-xl p-3.5 bg-gray-50">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                      <div className="text-gray-900 font-medium">{formatDate(rentalDropoffDate)}</div>
                      <div className="text-xs text-gray-500">10:00 AM</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-end">
                  <button 
                    onClick={handleRentalSearch}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                  >
                    <Search className="w-5 h-5" />
                    Search
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm pt-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
                  <span className="text-gray-700 group-hover:text-blue-600">Different drop-off location</span>
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Driver's Age:</span>
                  <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none">
                    <option>30-65</option>
                    <option>25-30</option>
                    <option>65+</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold text-blue-600">{calculateDays()} days</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <div className="flex gap-8">
          
          {/* --- LEFT SIDEBAR (FILTERS) --- */}
          <aside className="hidden lg:block w-[280px] flex-shrink-0">
            <div className="space-y-6 sticky top-28">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-blue-500" />
                  Filters
                </h3>
                {(selectedSuppliers.length > 0 || selectedSeats.length > 0) && (
                  <button 
                    onClick={() => {setSelectedSuppliers([]); setSelectedSeats([]); setSearchQuery('');}}
                    className="text-blue-500 text-sm font-medium hover:text-blue-600 hover:underline"
                  >
                    Clear all
                  </button>
                )}
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h4 className="font-bold text-sm mb-4 text-gray-900">Supplier</h4>
                <div className="space-y-3">
                  {suppliers.map((s, idx) => (
                    <label key={s} className="flex items-center justify-between gap-2 cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 border-gray-300 rounded text-blue-500 focus:ring-blue-500"
                          checked={selectedSuppliers.includes(s)}
                          onChange={() => toggleSupplier(s)}
                        />
                        <span className="text-sm text-gray-700 group-hover:text-blue-600">{s}</span>
                      </div>
                      <span className="text-xs text-gray-400">12</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h4 className="font-bold text-sm mb-4 text-gray-900 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Seats
                </h4>
                <div className="space-y-3">
                  {seatOptions.map(seat => (
                    <label key={seat} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 border-gray-300 rounded text-blue-500 focus:ring-blue-500" 
                        checked={selectedSeats.includes(seat)}
                        onChange={() => toggleSeat(seat)}
                      />
                      <span className="text-sm text-gray-700 group-hover:text-blue-600">{seat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h4 className="font-bold text-sm mb-4 text-gray-900">Price Range</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <input 
                      type="range" 
                      min="3000" 
                      max="15000" 
                      className="w-full accent-blue-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">₹3,000</span>
                    <span className="text-sm text-gray-600">₹15,000+</span>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h4 className="font-bold text-sm mb-4 text-gray-900 flex items-center gap-2">
                  <BadgePercent className="w-4 h-4 text-blue-500" /> 
                  Promo codes
                </h4>
                <div className="space-y-3">
                  {promoCodes.map((promo, index) => (
                    <div 
                      key={promo.code}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        selectedPromo === promo.code 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
                      }`}
                      onClick={() => setSelectedPromo(promo.code)}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm font-bold text-gray-900">{promo.discount}</span>
                        <span className="text-xs font-medium text-blue-600 bg-white px-2 py-1 rounded-full border border-blue-200">
                          {promo.code}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">Min. amount: {promo.minAmount}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="flex-1 min-w-0">
            
            <div className="lg:hidden mb-4">
              <button className="w-full bg-white border border-gray-200 rounded-xl p-3.5 flex items-center justify-center gap-2 font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all">
                <Filter className="w-5 h-5" />
                Show Filters
              </button>
            </div>

            {/* SORTING BAR */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl p-4 flex flex-col sm:flex-row justify-between items-center gap-3 shadow-md">
              <div className="flex flex-wrap gap-4">
                <button 
                  className={`font-bold text-sm px-3 py-1.5 rounded-lg transition-all ${
                    sortOption === 'recommended' 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setSortOption('recommended')}
                >
                  Recommended
                </button>
                <button 
                  className={`font-bold text-sm px-3 py-1.5 rounded-lg transition-all ${
                    sortOption === 'price_asc' 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setSortOption('price_asc')}
                >
                  Price: Low to High
                </button>
                <button 
                  className={`font-bold text-sm px-3 py-1.5 rounded-lg transition-all ${
                    sortOption === 'rating' 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setSortOption('rating')}
                >
                  Rating
                </button>
              </div>
              <span className="text-sm bg-white/20 px-3 py-1.5 rounded-lg">{filteredCars.length} cars found</span>
            </div>

            {/* CAR LISTINGS */}
            <div id="car-listings" className="space-y-4 mt-4">
              {filteredCars.map(car => (
                <div 
                  key={car.id} 
                  onClick={() => handleCarClick(car)}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="flex flex-col lg:flex-row">
                    
                    <div className="w-full lg:w-[280px] p-6 bg-white relative">
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleFavourite(car.id); }}
                        className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform z-10"
                      >
                        <Heart className={`w-4 h-4 ${favourites.includes(car.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                      </button>
                      <div className="h-40 flex items-center justify-center mb-4">
                        <img 
                          src={car.image} 
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                          alt={car.name} 
                        />
                      </div>
                      <div className="text-center">
                        <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-2">
                          {car.badge}
                        </span>
                        <h3 className="font-bold text-gray-900">{car.name}</h3>
                        <p className="text-xs text-gray-500 mb-3">{car.category}</p>
                        
                        <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5" />
                            <span>{car.seats}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5" />
                            <span>{car.bags}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Gauge className="w-3.5 h-3.5" />
                            <span>{car.transmission}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Fuel className="w-3.5 h-3.5" />
                            <span>{car.fuel}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 p-6 border-t lg:border-t-0 lg:border-l border-gray-100 bg-white">
                      <div className="h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm font-semibold text-gray-900">{car.supplier}</span>
                          <div className="flex items-center gap-1.5">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                              <span className="text-sm font-bold text-gray-900 ml-1">{car.rating}</span>
                            </div>
                            <span className="text-xs text-gray-500">({car.reviewCount} reviews)</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                          {car.featureIcons.map((iconName, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                              <span className="text-blue-500">
                                {renderFeatureIcon(iconName)}
                              </span>
                              <span>{iconName}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          {car.tags.slice(0, 3).map((tag, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-gray-600">
                              <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" /> 
                              <span>✓ {tag}</span>
                            </div>
                          ))}
                          <button className="text-xs text-blue-600 hover:text-blue-700 font-medium mt-1">
                            + Show {car.tags.length - 3} more
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-[240px] bg-gradient-to-br from-blue-50 to-white p-6 flex flex-col justify-center items-center border-t lg:border-t-0 lg:border-l border-gray-100">
                      <div className="text-center w-full">
                        <div className="mb-3">
                          <span className="text-xs text-gray-500 mb-1 block">Starting from</span>
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-xs text-gray-400 line-through">₹{car.originalPrice.toLocaleString()}</span>
                            <span className="text-3xl font-bold text-gray-900">₹{car.price.toLocaleString()}</span>
                          </div>
                          {searchMode === 'rental' && (
                            <span className="text-xs text-gray-500">/day</span>
                          )}
                        </div>
                        
                        {searchMode === 'rental' && (
                          <div className="mb-4 p-3 bg-white rounded-lg border border-blue-100">
                            <div className="flex justify-between items-center text-sm mb-1">
                              <span className="text-gray-600">Total for {calculateDays()} days</span>
                              <span className="font-bold text-blue-600">₹{(car.price * calculateDays()).toLocaleString()}</span>
                            </div>
                            <p className="text-xs text-green-600 flex items-center justify-center gap-1">
                              <Check className="w-3 h-3" />
                              Save ₹{(car.originalPrice * calculateDays() - car.price * calculateDays()).toLocaleString()}
                            </p>
                          </div>
                        )}
                        
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleCarClick(car); }}
                          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        
                        <div className="mt-4 flex items-center justify-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Check className="w-3 h-3 text-green-500" />
                            Free cancellation
                          </span>
                          <span className="flex items-center gap-1">
                            <CreditCard className="w-3 h-3 text-blue-500" />
                            Pay at counter
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {filteredCars.length === 0 && (
                <div className="p-16 text-center bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="w-10 h-10 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No cars found</h3>
                  <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
                    We couldn't find any cars matching your criteria. Try adjusting your filters or search terms.
                  </p>
                  <button 
                    onClick={() => {setSelectedSuppliers([]); setSelectedSeats([]); setSearchQuery('');}}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>

            {filteredCars.length > 0 && (
              <div className="mt-8 flex justify-center pb-10">
                <button className="bg-white border-2 border-blue-500 text-blue-600 px-8 py-3 rounded-full text-sm font-bold hover:bg-blue-50 transition-all flex items-center gap-2 shadow-sm hover:shadow-md">
                  Show more results 
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Cab;