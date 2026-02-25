import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BusSearchPage = () => {
  const [selectedBus, setSelectedBus] = useState(null);
  const [buses, setBuses] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [amendments, setAmendments] = useState([]);
  const [showDetails, setShowDetails] = useState({});
  const [filters, setFilters] = useState({
    ac: true,
    nonAc: false,
    sleeper: true,
    seater: false,
    departureTime: []
  });

  const [searchParams, setSearchParams] = useState({
    fromCity: 'Delhi',
    toCity: 'Jaipur',
    date: new Date().toISOString().split('T')[0],
    passengers: 1
  });

  const [sortOption, setSortOption] = useState('Departure (earliest)');
  const navigate = useNavigate();

  // API URLs
  const API_BASE = 'https://bmt-aw7b.onrender.com/api';
  const ROUTES_API = `${API_BASE}/bus-routes`;
  const BOOKINGS_API = `${API_BASE}/bus-bookings`;
  const AMENDMENTS_API = `${API_BASE}/bus-amendments`;

  const timeSlots = [
    { label: '20:00 - 21:00', value: '20-21' },
    { label: '21:00 - 22:00', value: '21-22' },
    { label: '22:00 - 23:00', value: '22-23' },
    { label: '23:00 - 24:00', value: '23-24' }
  ];

  const sortOptions = ['Departure (earliest)', 'Cheapest', 'Fastest', 'Rating'];
  const classFilters = ['All Classes', 'AC Sleeper', 'Non-AC Sleeper', 'Volvo AC', 'Seater'];

  // Mock data for initial display
  const mockBuses = [
    {
      id: 1,
      class: 'AC Sleeper',
      name: 'Deluxe Express',
      operator: 'Delhi Travels',
      departureStation: 'Delhi ISBT',
      arrivalStation: 'Jaipur Sindhi Camp',
      departureTime: '20:30',
      arrivalTime: '04:30',
      duration: '8h',
      type: 'AC Sleeper (2+1)',
      price: 1200.00,
      originalPrice: 1500.00,
      availableSeats: 8,
      rating: 4.8,
      amenities: ['AC', 'Sleeper', 'Charging Port', 'WiFi', 'Blanket', 'Water'],
      features: ['No Booking Fee', 'Free Cancellation', 'Live Tracking'],
      flag: '🇮🇳',
      seats: '8/36',
      operatorRating: 4.5,
      boardingPoint: 'Delhi ISBT',
      droppingPoint: 'Jaipur Sindhi Camp',
      busNumber: 'DL01AB1234',
      totalSeats: 36,
      seatLayout: 'sleeper'
    },
    {
      id: 2,
      class: 'Volvo AC',
      name: 'Premium Coach',
      operator: 'Jaipur Express',
      departureStation: 'Delhi Kashmere Gate',
      arrivalStation: 'Jaipur Bus Stand',
      departureTime: '21:00',
      arrivalTime: '05:00',
      duration: '8h',
      type: 'Volvo AC Semi Sleeper (2+2)',
      price: 1000.00,
      originalPrice: 1300.00,
      availableSeats: 12,
      rating: 4.5,
      amenities: ['AC', 'Charging Port', 'WiFi', 'Water'],
      features: ['Fastest', 'Economy', 'On-time'],
      flag: '🇮🇳',
      seats: '12/36',
      operatorRating: 4.3,
      boardingPoint: 'Delhi Kashmere Gate',
      droppingPoint: 'Jaipur Bus Stand',
      busNumber: 'RJ01CD5678',
      totalSeats: 36,
      seatLayout: 'seater'
    },
    {
      id: 3,
      class: 'Non-AC Sleeper',
      name: 'Economy Sleeper',
      operator: 'Rajasthan Travels',
      departureStation: 'Delhi Anand Vihar',
      arrivalStation: 'Jaipur Station',
      departureTime: '22:30',
      arrivalTime: '06:30',
      duration: '8h',
      type: 'Non-AC Sleeper',
      price: 800.00,
      originalPrice: 1000.00,
      availableSeats: 25,
      rating: 4.2,
      amenities: ['Sleeper', 'Water'],
      features: ['Budget', 'Standard'],
      flag: '🇮🇳',
      seats: '25/36',
      operatorRating: 4.0,
      boardingPoint: 'Delhi Anand Vihar',
      droppingPoint: 'Jaipur Station',
      busNumber: 'RJ02EF9012',
      totalSeats: 36,
      seatLayout: 'sleeper'
    },
    {
      id: 4,
      class: 'Seater',
      name: 'Express Seater',
      operator: 'Fast Travels',
      departureStation: 'Delhi Rohini',
      arrivalStation: 'Jaipur MI Road',
      departureTime: '23:00',
      arrivalTime: '07:00',
      duration: '8h',
      type: 'Seater Coach',
      price: 600.00,
      originalPrice: 750.00,
      availableSeats: 40,
      rating: 4.0,
      amenities: ['AC', 'Seater'],
      features: ['Economy', 'Direct'],
      flag: '🇮🇳',
      seats: '40/36',
      operatorRating: 3.8,
      boardingPoint: 'Delhi Rohini',
      droppingPoint: 'Jaipur MI Road',
      busNumber: 'DL02GH3456',
      totalSeats: 36,
      seatLayout: 'seater'
    },
    {
      id: 5,
      class: 'AC Sleeper',
      name: 'Luxury Sleeper',
      operator: 'Royal Travels',
      departureStation: 'Delhi Majnu Ka Tila',
      arrivalStation: 'Jaipur Tonk Road',
      departureTime: '21:30',
      arrivalTime: '05:30',
      duration: '8h',
      type: 'AC Sleeper (2+1)',
      price: 1400.00,
      originalPrice: 1800.00,
      availableSeats: 5,
      rating: 4.9,
      amenities: ['AC', 'Sleeper', 'Charging Port', 'WiFi', 'Blanket', 'Water', 'Snacks'],
      features: ['Luxury', 'Priority Boarding', 'Free Meals'],
      flag: '🇮🇳',
      seats: '5/36',
      operatorRating: 4.7,
      boardingPoint: 'Delhi Majnu Ka Tila',
      droppingPoint: 'Jaipur Tonk Road',
      busNumber: 'RJ03IJ7890',
      totalSeats: 36,
      seatLayout: 'sleeper'
    }
  ];

  // Initialize with mock data
  useEffect(() => {
    setBuses(mockBuses);
    fetchRoutes();
    fetchBookings();
    fetchAmendments();
  }, []);

  const fetchRoutes = async () => {
    try {
      const response = await axios.get(ROUTES_API);
      setRoutes(response.data.items || response.data);
    } catch (error) {
      console.error('Error fetching routes:', error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await axios.get(BOOKINGS_API);
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const fetchAmendments = async () => {
    try {
      const response = await axios.get(AMENDMENTS_API);
      setAmendments(response.data);
    } catch (error) {
      console.error('Error fetching amendments:', error);
    }
  };

  const searchBuses = () => {
    setLoading(true);
    setTimeout(() => {
      let results = [...mockBuses];
      
      // Filter by class
      if (filters.ac && !filters.nonAc) {
        results = results.filter(bus => bus.class.includes('AC'));
      } else if (!filters.ac && filters.nonAc) {
        results = results.filter(bus => !bus.class.includes('AC'));
      }
      
      // Sort results
      results = sortBuses(results, sortOption);
      
      setBuses(results);
      setLoading(false);
    }, 500);
  };

  const sortBuses = (buses, option) => {
    const sorted = [...buses];
    
    switch (option) {
      case 'Cheapest':
        return sorted.sort((a, b) => a.price - b.price);
      case 'Fastest':
        return sorted.sort((a, b) => {
          const durationA = parseDuration(a.duration);
          const durationB = parseDuration(b.duration);
          return durationA - durationB;
        });
      case 'Rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'Departure (earliest)':
      default:
        return sorted.sort((a, b) => a.departureTime.localeCompare(b.departureTime));
    }
  };

  const parseDuration = (durationStr) => {
    const hoursMatch = durationStr.match(/(\d+)h/);
    const minutesMatch = durationStr.match(/(\d+)m/);
    
    const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;
    
    return hours * 60 + minutes;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchBuses();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDetailsClick = (busId, e) => {
    e.stopPropagation();
    setShowDetails(prev => ({
      ...prev,
      [busId]: !prev[busId]
    }));
  };

  const handleSortOptionClick = (option) => {
    setSortOption(option);
    searchBuses();
  };

  const toggleTimeSlot = (slot) => {
    setFilters(prev => ({
      ...prev,
      departureTime: prev.departureTime.includes(slot)
        ? prev.departureTime.filter(s => s !== slot)
        : [...prev.departureTime, slot]
    }));
  };

  const calculateSavings = (price, originalPrice) => {
    return (originalPrice - price).toFixed(2);
  };

  const getClassColor = (busClass) => {
    switch (busClass) {
      case 'AC Sleeper': return 'bg-blue-100 text-blue-700';
      case 'Volvo AC': return 'bg-purple-100 text-purple-700';
      case 'Non-AC Sleeper': return 'bg-gray-100 text-gray-700';
      case 'Seater': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handleSelectBus = (bus) => {
    // Navigate to seat selection page with bus details
    navigate('/select-seats', { 
      state: { 
        bus, 
        searchParams,
        passengers: searchParams.passengers 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Bus Ticket Booking</h1>
          <p className="text-gray-600">Book bus tickets online with best offers</p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
              {/* From Location */}
              <div>
                <div className="text-sm text-gray-500 mb-1">From</div>
                <div className="relative">
                  <input
                    type="text"
                    name="fromCity"
                    value={searchParams.fromCity}
                    onChange={handleInputChange}
                    placeholder="Enter departure city"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* To Location */}
              <div>
                <div className="text-sm text-gray-500 mb-1">To</div>
                <div className="relative">
                  <input
                    type="text"
                    name="toCity"
                    value={searchParams.toCity}
                    onChange={handleInputChange}
                    placeholder="Enter arrival city"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Date */}
              <div>
                <div className="text-sm text-gray-500 mb-1">Date</div>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={searchParams.date}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Passengers */}
              <div>
                <div className="text-sm text-gray-500 mb-1">Passengers</div>
                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3">
                  <button 
                    type="button"
                    onClick={() => setSearchParams(prev => ({ ...prev, passengers: Math.max(1, prev.passengers - 1) }))}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="flex-1 text-center font-medium">{searchParams.passengers}</span>
                  <button 
                    type="button"
                    onClick={() => setSearchParams(prev => ({ ...prev, passengers: prev.passengers + 1 }))}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
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
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Search Buses
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 mb-6 lg:mb-0">
            <div className="bg-white rounded-xl shadow-md p-6 mb-4">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Filters</h3>
              
              <div className="space-y-6">
                {/* Bus Type */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Bus Type</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.ac}
                        onChange={() => setFilters(prev => ({ ...prev, ac: !prev.ac }))}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-600">AC Buses</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.nonAc}
                        onChange={() => setFilters(prev => ({ ...prev, nonAc: !prev.nonAc }))}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-600">Non-AC Buses</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.sleeper}
                        onChange={() => setFilters(prev => ({ ...prev, sleeper: !prev.sleeper }))}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-600">Sleeper</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.seater}
                        onChange={() => setFilters(prev => ({ ...prev, seater: !prev.seater }))}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-600">Seater</span>
                    </label>
                  </div>
                </div>

                {/* Departure Time */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Departure Time</h4>
                  <div className="space-y-2">
                    {timeSlots.map((slot) => (
                      <label key={slot.value} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.departureTime.includes(slot.value)}
                          onChange={() => toggleTimeSlot(slot.value)}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-600">{slot.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="500"
                      max="2000"
                      defaultValue="1200"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>₹500</span>
                      <span className="font-medium text-blue-600">₹1200</span>
                      <span>₹2000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* API Data Summary */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">System Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Available Routes</span>
                  <span className="font-bold text-blue-600">{routes.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Bookings</span>
                  <span className="font-bold text-green-600">{bookings.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pending Amendments</span>
                  <span className="font-bold text-yellow-600">
                    {amendments.filter(a => a.status === 'pending').length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Filters Bar */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-2">
                {sortOptions.map((option, i) => (
                  <button 
                    key={i}
                    className={`px-4 py-2 rounded-lg border ${sortOption === option ? 'bg-blue-100 text-blue-600 border-blue-200' : 'bg-white border-gray-300 hover:bg-gray-50'} transition-colors`}
                    onClick={() => handleSortOptionClick(option)}
                  >
                    {option} {sortOption === option ? '▾' : ''}
                  </button>
                ))}
              </div>
              <div className="text-sm text-gray-600">No booking fee</div>
            </div>

            {/* Results Count */}
            <div className="mb-4 text-gray-600">
              Found {buses.length} bus{buses.length !== 1 ? 'es' : ''} • {searchParams.fromCity} → {searchParams.toCity}
            </div>

            {/* Bus Listings */}
            <div className="space-y-4">
              {buses.map((bus) => (
                <div 
                  key={bus.id}
                  className={`bg-white rounded-xl border-2 ${selectedBus === bus.id ? 'border-blue-500' : 'border-gray-200'} hover:border-blue-300 transition-colors cursor-pointer`}
                  onClick={() => setSelectedBus(bus.id)}
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Timing Section */}
                      <div className="lg:w-48">
                        <div className="text-2xl font-bold">{bus.departureTime}</div>
                        <div className="text-sm text-gray-500">{bus.departureStation}</div>
                        
                        <div className="my-4 flex items-center justify-center">
                          <div className="w-full h-px bg-gray-300 relative">
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500"></div>
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500"></div>
                          </div>
                        </div>
                        
                        <div className="text-2xl font-bold">{bus.arrivalTime}</div>
                        <div className="text-sm text-gray-500">{bus.arrivalStation}</div>
                      </div>

                      {/* Bus Info Section */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getClassColor(bus.class)}`}>
                                {bus.class}
                              </span>
                              <span className="text-xl">{bus.flag}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">{bus.name}</h3>
                            <p className="text-gray-600">{bus.operator}</p>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-sm text-gray-500">Operator Rating</div>
                            <div className="flex items-center text-amber-500">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`w-4 h-4 ${i < Math.floor(bus.operatorRating) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                              <span className="text-gray-600 ml-1">{bus.operatorRating}</span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-blue-600 font-medium">{bus.duration} • {bus.type}</div>
                            <div className="text-sm text-gray-500">
                              <div>Boarding: {bus.boardingPoint}</div>
                              <div>Dropping: {bus.droppingPoint}</div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium text-gray-700">Amenities:</span>
                              <div className="flex flex-wrap gap-1">
                                {bus.amenities.slice(0, 3).map((amenity, index) => (
                                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                    {amenity}
                                  </span>
                                ))}
                                {bus.amenities.length > 3 && (
                                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                    +{bus.amenities.length - 3} more
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Free cancellation
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {bus.features.map((feature, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              {feature}
                            </span>
                          ))}
                          <div className="flex items-center text-amber-500 ml-auto">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-4 h-4 ${i < Math.floor(bus.rating) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <span className="text-gray-600 ml-1">{bus.rating}</span>
                          </div>
                        </div>
                      </div>

                      {/* Price Section */}
                      <div className="lg:w-48">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">₹{bus.price.toFixed(2)}</div>
                          <div className="text-sm text-gray-500 line-through">₹{bus.originalPrice.toFixed(2)}</div>
                          <div className="text-sm text-green-600 mt-1">Save ₹{calculateSavings(bus.price, bus.originalPrice)}</div>
                        </div>
                        
                        <div className="mt-4">
                          <div className="text-sm text-gray-500 mb-1">Available Seats</div>
                          <div className={`text-lg font-bold ${bus.availableSeats < 10 ? 'text-red-600' : 'text-green-600'}`}>
                            {bus.seats}
                          </div>
                        </div>
                        
                        <div className="mt-4 space-y-2">
                          <button 
                            className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                            onClick={(e) => handleDetailsClick(bus.id, e)}
                          >
                            {showDetails[bus.id] ? 'Hide Details' : 'Details'}
                          </button>
                          <button 
                            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectBus(bus);
                            }}
                          >
                            Select Seats
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Additional Details Section */}
                    {showDetails[bus.id] && (
                      <div className="mt-6 pt-6 border-t">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">All Amenities:</h4>
                            <div className="flex flex-wrap gap-2">
                              {bus.amenities.map((amenity, i) => (
                                <span key={i} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                                  {amenity}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Trip Details:</h4>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div>Departure: {bus.departureTime} from {bus.boardingPoint}</div>
                              <div>Arrival: {bus.arrivalTime} at {bus.droppingPoint}</div>
                              <div>Duration: {bus.duration}</div>
                              <div>Bus Type: {bus.type}</div>
                              <div>Operator: {bus.operator} (Rating: {bus.operatorRating})</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Class Filter Buttons */}
            <div className="mt-8 flex justify-center gap-2">
              {classFilters.map((filter, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${filter === 'All Classes' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border hover:bg-gray-50'}`}
                  onClick={() => {
                    // Handle class filter logic
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* No Results Message */}
            {buses.length === 0 && !loading && (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg mb-2">No buses found</div>
                <div className="text-gray-400">Try changing your filters or search criteria</div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>All prices include taxes and fees. Free cancellation up to 24 hours before departure.</p>
          <p className="mt-1">Showing results for: {searchParams.fromCity} → {searchParams.toCity} on {new Date(searchParams.date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default BusSearchPage;