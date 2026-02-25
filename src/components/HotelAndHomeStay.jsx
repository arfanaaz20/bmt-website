import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import { 
  Search, MapPin, Calendar, Users, Star, Filter, Heart, ChevronRight, 
  ChevronDown, X, Check, Menu, Hotel as HotelIcon, Home,
  Wifi, Coffee, Car, Dumbbell, Waves, ChefHat, ShoppingBag, 
  Sparkles, Shield, Award, Clock, ChevronLeft
} from 'lucide-react';

const AMENITIES_OPTIONS = [
  { id: 'wifi', label: 'Free WiFi', icon: <Wifi size={16} /> },
  { id: 'breakfast', label: 'Breakfast', icon: <Coffee size={16} /> },
  { id: 'parking', label: 'Parking', icon: <Car size={16} /> },
  { id: 'pool', label: 'Swimming Pool', icon: <Waves size={16} /> },
  { id: 'gym', label: 'Gym', icon: <Dumbbell size={16} /> },
  { id: 'spa', label: 'Spa', icon: <Sparkles size={16} /> },
  { id: 'restaurant', label: 'Restaurant', icon: <ChefHat size={16} /> },
  { id: 'shop', label: 'Shopping', icon: <ShoppingBag size={16} /> }
];

const TRUST_BADGES = [
  { id: 1, icon: <Shield size={20} />, title: 'Price Match Guarantee', desc: "We'll match any lower price" },
  { id: 2, icon: <Award size={20} />, title: 'Verified Reviews', desc: 'From real guests like you' },
  { id: 3, icon: <Clock size={20} />, title: '24/7 Support', desc: 'Always here to help' }
];

const INITIAL_PROPERTIES = [
  {
    id: 1,
    name: "Grand Hyatt Mumbai",
    location: "Bandra Kurla Complex, Mumbai",
    distance: "2.5 km from city center",
    rating: 4.8,
    reviews: 1248,
    price: 12500,
    discountPrice: 9999,
    images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80"],
    amenities: ['wifi', 'breakfast', 'pool', 'gym', 'spa'],
    tags: ['Luxury', 'Best Seller'],
    deal: 'Save 25%',
    description: "A sanctuary of luxury in the heart of Mumbai's business district.",
    type: 'hotel'
  },
  {
    id: 2,
    name: "Taj Lands End",
    location: "Bandra West, Mumbai",
    distance: "On the beach",
    rating: 4.9,
    reviews: 856,
    price: 18000,
    discountPrice: 14999,
    images: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80", "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=800&q=80"],
    amenities: ['wifi', 'breakfast', 'pool', 'spa', 'restaurant'],
    tags: ['Luxury', 'Sea View'],
    deal: 'Breakfast Included',
    description: "Experience royal hospitality with breathtaking views of the Arabian Sea.",
    type: 'hotel'
  },
  {
    id: 3,
    name: "Modern Loft Apartment",
    location: "Nanshan District, Shenzhen",
    distance: "In city center",
    rating: 4.5,
    reviews: 342,
    price: 5200,
    discountPrice: 4500,
    images: ["https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80"],
    amenities: ['wifi', 'parking', 'gym'],
    tags: ['Home Stay', 'Apartment'],
    deal: 'Great Deal',
    description: "Modern loft with all amenities in prime location.",
    type: 'homestay'
  },
  {
    id: 4,
    name: "Luxury Villa with Pool",
    location: "Yantian District, Shenzhen",
    distance: "On the beach",
    rating: 4.9,
    reviews: 128,
    price: 28000,
    discountPrice: 23500,
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"],
    amenities: ['wifi', 'pool', 'spa', 'parking'],
    tags: ['Home Stay', 'Villa'],
    deal: 'Limited Offer',
    description: "Private villa with swimming pool and sea view.",
    type: 'homestay'
  },
  {
    id: 5,
    name: "Park Hyatt Shenzhen",
    location: "Futian Central District, Shenzhen",
    distance: "1.2 km from city center",
    rating: 4.7,
    reviews: 850,
    price: 14500,
    discountPrice: 12100,
    images: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"],
    amenities: ['wifi', 'breakfast', 'parking', 'gym', 'restaurant'],
    tags: ['Hotel', '5 stars'],
    deal: 'Save 20%',
    description: "Experience royal hospitality with breathtaking city views.",
    type: 'hotel'
  },
  {
    id: 6,
    name: "Cozy Studio Apartment",
    location: "Bao'an District, Shenzhen",
    distance: "Near airport",
    rating: 4.0,
    reviews: 89,
    price: 3800,
    discountPrice: 3200,
    images: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80"],
    amenities: ['wifi', 'parking'],
    tags: ['Home Stay', 'Studio'],
    deal: 'Budget Friendly',
    description: "Cozy studio perfect for solo travelers or couples.",
    type: 'homestay'
  }
];

const HotelAndHomeStay = () => {
  const navigate = useNavigate(); // Add this hook
  const [properties] = useState(INITIAL_PROPERTIES);
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [filters, setFilters] = useState({
    searchQuery: '',
    priceRange: [0, 50000],
    stars: [3, 4, 5],
    amenities: [],
    propertyType: ['hotel', 'homestay'],
    sort: 'recommended'
  });

  // Dates state
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [checkInDate, setCheckInDate] = useState(new Date(2026, 0, 29));
  const [checkOutDate, setCheckOutDate] = useState(new Date(2026, 1, 5));

  // Guests state
  const [showGuestsSelector, setShowGuestsSelector] = useState(false);
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    rooms: 1
  });

  const filteredProperties = useMemo(() => {
    return properties.filter(h => {
      const matchesSearch = h.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) || 
                           h.location.toLowerCase().includes(filters.searchQuery.toLowerCase());
      const matchesPrice = h.discountPrice >= filters.priceRange[0] && h.discountPrice <= filters.priceRange[1];
      const matchesStars = filters.stars.includes(Math.floor(h.rating));
      const matchesAmenities = filters.amenities.length === 0 || 
                              filters.amenities.every(a => h.amenities.includes(a));
      const matchesPropertyType = filters.propertyType.includes(h.type);
      return matchesSearch && matchesPrice && matchesStars && matchesAmenities && matchesPropertyType;
    }).sort((a, b) => {
      if (filters.sort === 'price_low') return a.discountPrice - b.discountPrice;
      if (filters.sort === 'price_high') return b.discountPrice - a.discountPrice;
      if (filters.sort === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [properties, filters]);

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  // Add this function to handle navigation
  const handleBookNow = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };

  // Add this function to handle details click
  const handleDetailsClick = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };

  const handlePriceChange = (index, val) => {
    const newRange = [...filters.priceRange];
    newRange[index] = parseInt(val) || 0;
    setFilters({ ...filters, priceRange: newRange });
  };

  const formatDateRange = (start, end) => {
    const options = { month: 'short', day: 'numeric' };
    const startStr = start.toLocaleDateString('en-US', options);
    const endStr = end.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
    return `${startStr} — ${endStr}`;
  };

  const handleDateSelect = (start, end) => {
    setCheckInDate(start);
    setCheckOutDate(end);
    setShowDatePicker(false);
  };

  const handleGuestsSelect = (adults, children, rooms) => {
    setGuests({ adults, children, rooms });
    setShowGuestsSelector(false);
  };

  const DatePicker = ({ isOpen, onClose, onDateSelect }) => {
    const [selectedStart, setSelectedStart] = useState(checkInDate);
    const [selectedEnd, setSelectedEnd] = useState(checkOutDate);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const getDaysInMonth = (year, month) => {
      return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
      return new Date(year, month, 1).getDay();
    };

    const generateCalendar = () => {
      const days = [];
      const daysInMonth = getDaysInMonth(currentYear, currentMonth);
      const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
      
      for (let i = 0; i < firstDay; i++) {
        days.push(null);
      }
      
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentYear, currentMonth, day);
        days.push(date);
      }
      
      return days;
    };

    const handleDateClick = (date) => {
      if (!selectedStart || (selectedStart && selectedEnd)) {
        setSelectedStart(date);
        setSelectedEnd(null);
      } else if (selectedStart && !selectedEnd) {
        if (date < selectedStart) {
          setSelectedEnd(selectedStart);
          setSelectedStart(date);
        } else {
          setSelectedEnd(date);
        }
      }
    };

    const formatDate = (date) => {
      if (!date) return '';
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: '2-digit',
        year: 'numeric'
      });
    };

    const calendarDays = generateCalendar();

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Select Dates</h3>
              <button onClick={onClose} className="text-slate-500 hover:text-slate-700">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <button 
                onClick={() => {
                  if (currentMonth === 0) {
                    setCurrentMonth(11);
                    setCurrentYear(currentYear - 1);
                  } else {
                    setCurrentMonth(currentMonth - 1);
                  }
                }}
                className="p-2 hover:bg-slate-100 rounded-lg"
              >
                <ChevronLeft size={20} />
              </button>
              <h4 className="font-bold">{months[currentMonth]} {currentYear}</h4>
              <button 
                onClick={() => {
                  if (currentMonth === 11) {
                    setCurrentMonth(0);
                    setCurrentYear(currentYear + 1);
                  } else {
                    setCurrentMonth(currentMonth + 1);
                  }
                }}
                className="p-2 hover:bg-slate-100 rounded-lg"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} className="text-center text-sm font-medium text-slate-500 py-2">
                  {day}
                </div>
              ))}
              {calendarDays.map((date, index) => {
                if (!date) {
                  return <div key={`empty-${index}`} className="h-10"></div>;
                }
                
                const isSelected = date >= selectedStart && date <= selectedEnd;
                const isStart = date.getTime() === selectedStart?.getTime();
                const isEnd = date.getTime() === selectedEnd?.getTime();
                
                return (
                  <button
                    key={date.toISOString()}
                    onClick={() => handleDateClick(date)}
                    className={`
                      h-10 flex items-center justify-center rounded-lg text-sm font-medium
                      ${isSelected ? 'bg-blue-100 text-blue-600' : 'hover:bg-slate-100'}
                      ${isStart ? 'bg-blue-600 text-white rounded-r-none' : ''}
                      ${isEnd ? 'bg-blue-600 text-white rounded-l-none' : ''}
                      ${isStart && isEnd ? 'rounded-lg' : ''}
                      ${date < new Date() ? 'text-slate-300 cursor-not-allowed' : 'text-slate-700'}
                    `}
                    disabled={date < new Date()}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg mb-6">
              <div>
                <p className="text-xs text-slate-500 font-bold">CHECK-IN</p>
                <p className="font-bold">{selectedStart ? formatDate(selectedStart) : 'Select date'}</p>
              </div>
              <div className="w-6 h-px bg-slate-300"></div>
              <div>
                <p className="text-xs text-slate-500 font-bold">CHECK-OUT</p>
                <p className="font-bold">{selectedEnd ? formatDate(selectedEnd) : 'Select date'}</p>
              </div>
            </div>

            <button
              onClick={() => {
                if (selectedStart && selectedEnd) {
                  onDateSelect(selectedStart, selectedEnd);
                }
              }}
              disabled={!selectedStart || !selectedEnd}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Apply Dates
            </button>
          </div>
        </div>
      </div>
    );
  };

  const GuestsSelector = ({ isOpen, onClose, onGuestsSelect }) => {
    const [adults, setAdults] = useState(guests.adults);
    const [children, setChildren] = useState(guests.children);
    const [rooms, setRooms] = useState(guests.rooms);

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Select Guests</h3>
              <button onClick={onClose} className="text-slate-500 hover:text-slate-700">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-slate-800">Adults</p>
                  <p className="text-sm text-slate-500">Ages 13 or above</p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setAdults(prev => Math.max(1, prev - 1))}
                    className="w-8 h-8 flex items-center justify-center border border-slate-300 rounded-lg hover:bg-slate-50"
                  >
                    <span className="text-slate-600">-</span>
                  </button>
                  <span className="w-8 text-center font-bold">{adults}</span>
                  <button
                    onClick={() => setAdults(prev => prev + 1)}
                    className="w-8 h-8 flex items-center justify-center border border-slate-300 rounded-lg hover:bg-slate-50"
                  >
                    <span className="text-slate-600">+</span>
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-slate-800">Children</p>
                  <p className="text-sm text-slate-500">Ages 2-12</p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setChildren(prev => Math.max(0, prev - 1))}
                    className="w-8 h-8 flex items-center justify-center border border-slate-300 rounded-lg hover:bg-slate-50"
                  >
                    <span className="text-slate-600">-</span>
                  </button>
                  <span className="w-8 text-center font-bold">{children}</span>
                  <button
                    onClick={() => setChildren(prev => prev + 1)}
                    className="w-8 h-8 flex items-center justify-center border border-slate-300 rounded-lg hover:bg-slate-50"
                  >
                    <span className="text-slate-600">+</span>
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-slate-800">Rooms</p>
                  <p className="text-sm text-slate-500">Number of rooms</p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setRooms(prev => Math.max(1, prev - 1))}
                    className="w-8 h-8 flex items-center justify-center border border-slate-300 rounded-lg hover:bg-slate-50"
                  >
                    <span className="text-slate-600">-</span>
                  </button>
                  <span className="w-8 text-center font-bold">{rooms}</span>
                  <button
                    onClick={() => setRooms(prev => prev + 1)}
                    className="w-8 h-8 flex items-center justify-center border border-slate-300 rounded-lg hover:bg-slate-50"
                  >
                    <span className="text-slate-600">+</span>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onGuestsSelect(adults, children, rooms);
              }}
              className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-900 overflow-x-hidden bg-slate-50">
      {/* Search Section */}
      <section className=" border-b border-slate-200 pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-2 rounded-2xl shadow-lg border border-slate-200 flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border-r border-slate-100">
                <MapPin className="text-blue-500" size={20} />
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Destination</p>
                  <input 
                    type="text" 
                    placeholder="Where are you going?" 
                    className="w-full focus:outline-none font-semibold text-slate-800"
                    value={filters.searchQuery}
                    onChange={(e) => setFilters({...filters, searchQuery: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border-r border-slate-100">
                <Calendar className="text-blue-500" size={20} />
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Dates</p>
                  <button 
                    onClick={() => setShowDatePicker(true)}
                    className="w-full text-left font-semibold text-slate-800 truncate hover:text-blue-600 transition-colors"
                  >
                    {formatDateRange(checkInDate, checkOutDate)}
                  </button>
                </div>
              </div>
              
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border-r border-slate-100">
                <Users className="text-blue-500" size={20} />
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Guests</p>
                  <button 
                    onClick={() => setShowGuestsSelector(true)}
                    className="w-full text-left font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    {guests.adults} Adult{guests.adults !== 1 ? 's' : ''}, {guests.rooms} Room{guests.rooms !== 1 ? 's' : ''}
                    {guests.children > 0 && `, ${guests.children} Child${guests.children !== 1 ? 'ren' : ''}`}
                  </button>
                </div>
              </div>
              
              <button className="bg-blue-600 text-white p-4 md:px-8 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 font-bold">
                <Search size={20} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className={`lg:w-80 shrink-0 space-y-6 ${showFilters ? 'fixed inset-0 z-40 bg-white p-6 overflow-y-auto' : 'hidden lg:block'}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Filter size={18} className="text-blue-600" />
              Filters
            </h3>
            {showFilters && (
              <button onClick={() => setShowFilters(false)} className="lg:hidden text-slate-500">
                <X size={24} />
              </button>
            )}
            <button 
              onClick={() => setFilters({
                searchQuery: '', 
                priceRange: [0, 50000], 
                stars: [3,4,5], 
                amenities: [], 
                propertyType: ['hotel', 'homestay'],
                sort: 'recommended'
              })}
              className="text-blue-600 text-xs font-bold hover:underline"
            >
              Reset All
            </button>
          </div>

          {/* Property Type */}
          <div className="border-b border-slate-100 pb-6">
            <h4 className="font-bold text-sm text-slate-700 mb-4">Property Type</h4>
            <div className="space-y-3">
              {[
                { id: 'hotel', label: 'Hotels', icon: <HotelIcon size={16} /> },
                { id: 'homestay', label: 'Home Stays', icon: <Home size={16} /> }
              ].map(type => (
                <label key={type.id} className="flex items-center gap-3 cursor-pointer group">
                  <div 
                    onClick={() => {
                      const newTypes = filters.propertyType.includes(type.id) 
                        ? filters.propertyType.filter(t => t !== type.id)
                        : [...filters.propertyType, type.id];
                      setFilters({...filters, propertyType: newTypes});
                    }}
                    className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${filters.propertyType.includes(type.id) ? 'bg-blue-600 border-blue-600' : 'border-slate-300 group-hover:border-blue-400'}`}
                  >
                    {filters.propertyType.includes(type.id) && <Check size={14} className="text-white" />}
                  </div>
                  <div className="text-slate-500">{type.icon}</div>
                  <span className="text-sm font-medium text-slate-600">{type.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="border-b border-slate-100 pb-6">
            <h4 className="font-bold text-sm text-slate-700 mb-4">Price Range</h4>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex-1 bg-slate-100 rounded-lg p-3">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Min</p>
                <div className="flex items-center">
                  <span className="text-slate-400 text-sm">₹</span>
                  <input 
                    type="number" 
                    value={filters.priceRange[0]} 
                    onChange={(e) => handlePriceChange(0, e.target.value)}
                    className="bg-transparent font-bold w-full focus:outline-none" 
                  />
                </div>
              </div>
              <div className="w-4 h-[2px] bg-slate-300"></div>
              <div className="flex-1 bg-slate-100 rounded-lg p-3">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Max</p>
                <div className="flex items-center">
                  <span className="text-slate-400 text-sm">₹</span>
                  <input 
                    type="number" 
                    value={filters.priceRange[1]} 
                    onChange={(e) => handlePriceChange(1, e.target.value)}
                    className="bg-transparent font-bold w-full focus:outline-none" 
                  />
                </div>
              </div>
            </div>
            <input 
              type="range" 
              min="0" 
              max="50000" 
              value={filters.priceRange[1]} 
              onChange={(e) => handlePriceChange(1, e.target.value)}
              className="w-full accent-blue-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer" 
            />
          </div>

          {/* Star Rating */}
          <div className="border-b border-slate-100 pb-6">
            <h4 className="font-bold text-sm text-slate-700 mb-4">Guest Rating</h4>
            <div className="space-y-3">
              {[5, 4, 3, 2].map(num => (
                <label key={num} className="flex items-center gap-3 cursor-pointer group">
                  <div 
                    onClick={() => {
                      const newStars = filters.stars.includes(num) ? filters.stars.filter(s => s !== num) : [...filters.stars, num];
                      setFilters({...filters, stars: newStars});
                    }}
                    className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${filters.stars.includes(num) ? 'bg-blue-600 border-blue-600' : 'border-slate-300 group-hover:border-blue-400'}`}
                  >
                    {filters.stars.includes(num) && <Check size={14} className="text-white" />}
                  </div>
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < num ? "currentColor" : "none"} />)}
                  </div>
                  <span className="text-sm font-medium text-slate-600">{num} Star & Above</span>
                </label>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h4 className="font-bold text-sm text-slate-700 mb-4">Amenities</h4>
            <div className="grid grid-cols-1 gap-3">
              {AMENITIES_OPTIONS.map(opt => (
                <label key={opt.id} className="flex items-center gap-3 cursor-pointer group">
                  <div 
                    onClick={() => {
                      const newAms = filters.amenities.includes(opt.id) ? filters.amenities.filter(a => a !== opt.id) : [...filters.amenities, opt.id];
                      setFilters({...filters, amenities: newAms});
                    }}
                    className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${filters.amenities.includes(opt.id) ? 'bg-blue-600 border-blue-600' : 'border-slate-300 group-hover:border-blue-400'}`}
                  >
                    {filters.amenities.includes(opt.id) && <Check size={14} className="text-white" />}
                  </div>
                  <div className="text-slate-500">{opt.icon}</div>
                  <span className="text-sm font-medium text-slate-600">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Listings Section */}
        <section className="flex-1 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200">
            <div>
              <h2 className="text-xl font-bold">Properties {filters.searchQuery ? `in ${filters.searchQuery}` : ''}</h2>
              <p className="text-sm text-slate-500 font-medium">{filteredProperties.length} properties found</p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button 
                onClick={() => setShowFilters(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold hover:bg-slate-50"
              >
                <Filter size={16} /> Filters
              </button>
              <div className="relative flex-1 sm:flex-initial">
                <select 
                  value={filters.sort}
                  onChange={(e) => setFilters({...filters, sort: e.target.value})}
                  className="appearance-none bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 pr-10 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                >
                  <option value="recommended">Sort by: Recommended</option>
                  <option value="price_low">Price: Low to High</option>
                  <option value="price_high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500" />
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TRUST_BADGES.map(badge => (
              <div key={badge.id} className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl flex items-start gap-3">
                <div className="text-blue-600 bg-white p-2 rounded-lg shadow-sm">{badge.icon}</div>
                <div>
                  <h5 className="text-sm font-bold text-blue-900">{badge.title}</h5>
                  <p className="text-xs text-blue-700/70">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Properties Grid */}
          <div className="space-y-6">
            {filteredProperties.length > 0 ? (
              filteredProperties.map(property => (
                <div key={property.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:shadow-lg transition-all duration-300">
                  <div className="md:w-80 shrink-0 relative overflow-hidden h-64 md:h-auto">
                    <img src={property.images[0]} alt={property.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <button 
                      onClick={() => toggleWishlist(property.id)}
                      className={`absolute top-4 right-4 p-2.5 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 ${wishlist.includes(property.id) ? 'bg-rose-500 text-white' : 'bg-white/80 text-slate-400 hover:text-rose-500'}`}
                    >
                      <Heart size={20} fill={wishlist.includes(property.id) ? "currentColor" : "none"} />
                    </button>
                    {property.deal && (
                      <div className="absolute bottom-4 left-4 bg-rose-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-lg">
                        {property.deal}
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-md">
                      {property.type === 'hotel' ? 'HOTEL' : 'HOME STAY'}
                    </div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">{property.name}</h3>
                          <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-1">
                            <MapPin size={14} className="text-blue-500" />
                            <span>{property.location}</span>
                            <span className="text-slate-300 mx-1">•</span>
                            <span className="font-medium text-slate-400">{property.distance}</span>
                          </div>
                        </div>
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-lg flex items-center gap-1.5">
                          <span className="text-lg font-bold">{property.rating}</span>
                          <Star size={16} fill="white" />
                        </div>
                      </div>

                      <p className="text-slate-600 text-sm mt-4 leading-relaxed line-clamp-2">
                        {property.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {property.amenities.map(id => {
                          const am = AMENITIES_OPTIONS.find(a => a.id === id);
                          return am && (
                            <div key={id} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-lg text-slate-500 text-xs font-semibold">
                              {am.icon}
                              <span>{am.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-end gap-6">
                      <div className="w-full sm:w-auto">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-bold text-slate-400 line-through">₹{property.price.toLocaleString()}</span>
                          <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Great Price</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-extrabold text-slate-900">₹{property.discountPrice.toLocaleString()}</span>
                          <span className="text-slate-400 text-sm font-medium">/ night</span>
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">+ taxes and fees included</p>
                      </div>
                      <div className="flex gap-2 w-full sm:w-auto">
                        <button 
                          onClick={() => handleDetailsClick(property.id)}
                          className="flex-1 sm:flex-initial px-6 py-3 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                        >
                          Details
                        </button>
                        <button 
                          onClick={() => handleBookNow(property.id)}
                          className="flex-1 sm:flex-initial px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                        >
                          Book Now
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  <Search size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">No properties found</h3>
                <p className="text-slate-500">Try adjusting your filters or search terms.</p>
                <button 
                  onClick={() => setFilters({
                    searchQuery: '', 
                    priceRange: [0, 50000], 
                    stars: [3,4,5], 
                    amenities: [], 
                    propertyType: ['hotel', 'homestay'],
                    sort: 'recommended'
                  })}
                  className="mt-6 text-blue-600 font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Date Picker Modal */}
      <DatePicker 
        isOpen={showDatePicker}
        onClose={() => setShowDatePicker(false)}
        onDateSelect={handleDateSelect}
      />

      {/* Guests Selector Modal */}
      <GuestsSelector 
        isOpen={showGuestsSelector}
        onClose={() => setShowGuestsSelector(false)}
        onGuestsSelect={handleGuestsSelect}
      />
    </div>
  );
};

export default HotelAndHomeStay;