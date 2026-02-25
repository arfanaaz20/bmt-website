import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Music, Ticket, X, ChevronRight, Star, Search, ArrowLeft } from 'lucide-react';

// Sample party images (using Unsplash for demo images)
const partyImages = {
  neon: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=200&fit=crop",
  rooftop: "https://images.unsplash.com/photo-1574739782594-db4ead022697?w=400&h=200&fit=crop",
  bollywood: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=200&fit=crop",
  sunrise: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=200&fit=crop",
  techno: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=400&h=200&fit=crop",
  pool: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=200&fit=crop"
};

// Party List Component (Page 1)
const PartyListPage = ({ parties, onPartySelect, searchTerm, onSearchChange, onViewDetails }) => {
  const filteredParties = parties.filter(party =>
    party.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    party.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
    party.djs.some(dj => dj.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Night Party Booking</h1>
          <p className="text-blue-100 text-lg">Discover the best night parties in your city</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search parties by name, venue, or DJ..."
              value={searchTerm}
              onChange={onSearchChange}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex space-x-3 mb-8 overflow-x-auto pb-2">
          <button className="px-6 py-2.5 bg-blue-500 text-white rounded-full text-sm font-medium whitespace-nowrap shadow-sm">
            All Parties
          </button>
          <button className="px-6 py-2.5 bg-white text-gray-700 rounded-full text-sm font-medium whitespace-nowrap border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-colors">
            This Weekend
          </button>
          <button className="px-6 py-2.5 bg-white text-gray-700 rounded-full text-sm font-medium whitespace-nowrap border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-colors">
            Beach Party
          </button>
          <button className="px-6 py-2.5 bg-white text-gray-700 rounded-full text-sm font-medium whitespace-nowrap border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-colors">
            Rooftop
          </button>
          <button className="px-6 py-2.5 bg-white text-gray-700 rounded-full text-sm font-medium whitespace-nowrap border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-colors">
            Pool Party
          </button>
        </div>

        {/* Party Cards Grid */}
        {filteredParties.length === 0 ? (
          <div className="text-center py-16">
            <Music className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No parties found matching your search.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredParties.map((party) => (
              <PartyCard 
                key={party.id} 
                party={party} 
                onSelect={() => onPartySelect(party)}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white text-blue-500 border-2 border-blue-500 px-8 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors">
            Load More Parties
          </button>
        </div>
      </div>
    </div>
  );
};

// Party Card Component
const PartyCard = ({ party, onSelect, onViewDetails }) => {
  const getPartyImage = () => {
    switch(party.id) {
      case 1: return partyImages.neon;
      case 2: return partyImages.rooftop;
      case 3: return partyImages.bollywood;
      case 4: return partyImages.sunrise;
      case 5: return partyImages.techno;
      case 6: return partyImages.pool;
      default: return partyImages.neon;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src={getPartyImage()} 
          alt={party.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {party.featured && (
          <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
            <Star className="w-3 h-3 inline mr-1" />
            Featured
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-blue-500 shadow-lg">
          ₹{party.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{party.name}</h3>

        {/* Details */}
        <div className="space-y-2.5 mb-5">
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="w-4 h-4 mr-3 text-blue-500" />
            {party.date}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Clock className="w-4 h-4 mr-3 text-blue-500" />
            {party.time}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-3 text-blue-500" />
            {party.venue}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Music className="w-4 h-4 mr-3 text-blue-500" />
            {party.djs.join(' • ')}
          </div>
        </div>

        {/* Capacity & Book Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-400 flex items-center">
            <Users className="w-4 h-4 mr-1.5" />
            {party.capacity} capacity
          </span>
          <button 
            onClick={onSelect}
            className="bg-blue-500 text-white px-5 py-2 rounded-xl text-sm font-medium flex items-center hover:bg-blue-600 transition-colors shadow-sm"
          >
            Book Now
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Booking Page (Page 2)
const BookingPage = ({ selectedParty, onBack, onSubmit }) => {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 2,
    ticketType: 'general'
  });

  const [step, setStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(bookingDetails);
  };

  const calculateTotal = () => {
    const pricePerTicket = bookingDetails.ticketType === 'vip' 
      ? parseInt(selectedParty.price) + 1000 
      : parseInt(selectedParty.price);
    return pricePerTicket * bookingDetails.guests;
  };

  const getPartyImage = () => {
    switch(selectedParty.id) {
      case 1: return partyImages.neon;
      case 2: return partyImages.rooftop;
      case 3: return partyImages.bollywood;
      case 4: return partyImages.sunrise;
      case 5: return partyImages.techno;
      case 6: return partyImages.pool;
      default: return partyImages.neon;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-8">
        <div className="max-w-3xl mx-auto px-4">
          <button 
            onClick={onBack}
            className="flex items-center text-white/90 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Parties
          </button>
          <h1 className="text-2xl font-bold">Complete Your Booking</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Party Summary */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8 shadow-sm">
          <div className="flex items-start space-x-4">
            <img 
              src={getPartyImage()} 
              alt={selectedParty.name}
              className="w-24 h-24 rounded-xl object-cover"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{selectedParty.name}</h2>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                  {selectedParty.date}
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="w-4 h-4 mr-2 text-blue-500" />
                  {selectedParty.time}
                </div>
                <div className="flex items-center text-gray-600 text-sm col-span-2">
                  <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                  {selectedParty.venue}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
              step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500'
            }`}>
              1
            </div>
            <div className={`flex-1 h-1 mx-3 ${
              step >= 2 ? 'bg-blue-500' : 'bg-gray-200'
            }`} />
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
              step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500'
            }`}>
              2
            </div>
          </div>
          <span className="text-sm text-gray-500 ml-4">
            Step {step} of 2
          </span>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <div className="space-y-6">
                {/* Ticket Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Select Ticket Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setBookingDetails({...bookingDetails, ticketType: 'general'})}
                      className={`p-4 border-2 rounded-xl text-left transition-all ${
                        bookingDetails.ticketType === 'general' 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-200'
                      }`}
                    >
                      <span className="block text-base font-semibold text-gray-900">General</span>
                      <span className="block text-sm text-gray-500 mt-1">Early Bird</span>
                      <span className="block text-lg font-bold text-blue-500 mt-2">₹{selectedParty.price}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setBookingDetails({...bookingDetails, ticketType: 'vip'})}
                      className={`p-4 border-2 rounded-xl text-left transition-all ${
                        bookingDetails.ticketType === 'vip' 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-200'
                      }`}
                    >
                      <span className="block text-base font-semibold text-gray-900">VIP</span>
                      <span className="block text-sm text-gray-500 mt-1">Premium Access</span>
                      <span className="block text-lg font-bold text-blue-500 mt-2">₹{parseInt(selectedParty.price) + 1000}</span>
                    </button>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={bookingDetails.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full bg-blue-500 text-white py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors text-lg shadow-sm"
                >
                  Continue to Details
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Personal Details */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={bookingDetails.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingDetails.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingDetails.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Price Summary */}
                <div className="bg-gray-50 p-5 rounded-xl mt-6">
                  <div className="flex justify-between items-center text-sm mb-3">
                    <span className="text-gray-600">Ticket Price ({bookingDetails.ticketType})</span>
                    <span className="font-semibold text-gray-900">
                      ₹{bookingDetails.ticketType === 'vip' 
                        ? parseInt(selectedParty.price) + 1000 
                        : selectedParty.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-4">
                    <span className="text-gray-600">Number of Guests</span>
                    <span className="font-semibold text-gray-900">x {bookingDetails.guests}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                    <span className="font-semibold text-gray-900 text-lg">Total Amount</span>
                    <span className="text-2xl font-bold text-blue-500">
                      ₹{calculateTotal()}
                    </span>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="flex-1 border-2 border-gray-200 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-lg"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-500 text-white py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors text-lg shadow-sm"
                  >
                    Confirm Booking
                  </button>
                </div>

                <p className="text-xs text-gray-400 text-center mt-4">
                  By continuing, you agree to our terms and conditions
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

// Main Component
const NightPartyBooking = () => {
  const [currentPage, setCurrentPage] = useState('list'); // 'list' or 'booking'
  const [selectedParty, setSelectedParty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const parties = [
    {
      id: 1,
      name: "Neon Beach Party",
      date: "Sat, March 15",
      time: "8:00 PM - 2:00 AM",
      venue: "Juhu Beach, Mumbai",
      price: "1999",
      djs: ["DJ Khushi", "Zaeden"],
      capacity: "1000",
      featured: true
    },
    {
      id: 2,
      name: "Rooftop Sessions",
      date: "Fri, March 21",
      time: "9:00 PM - 1:00 AM",
      venue: "The Dome, Bangalore",
      price: "1499",
      djs: ["Lost Stories", "Nucleya"],
      capacity: "500",
      featured: false
    },
    {
      id: 3,
      name: "Bollywood Night",
      date: "Sat, March 22",
      time: "10:00 PM - 3:00 AM",
      venue: "Lords, Delhi",
      price: "1299",
      djs: ["DJ Aqeel", "DJ Suketu"],
      capacity: "800",
      featured: false
    },
    {
      id: 4,
      name: "Sunrise Edition",
      date: "Sun, March 23",
      time: "6:00 AM - 12:00 PM",
      venue: "Alibaug Beach",
      price: "2499",
      djs: ["Ankytrix", "BLOT!"],
      capacity: "600",
      featured: true
    },
    {
      id: 5,
      name: "Techno Temple",
      date: "Fri, March 28",
      time: "10:00 PM - 4:00 AM",
      venue: "AntiSOCIAL, Mumbai",
      price: "999",
      djs: ["Arjun Vagale", "Shantam"],
      capacity: "300",
      featured: false
    },
    {
      id: 6,
      name: "Pool Party",
      date: "Sat, March 29",
      time: "2:00 PM - 8:00 PM",
      venue: "W Goa",
      price: "3999",
      djs: ["Nikhil Chinapa", "Pearl"],
      capacity: "400",
      featured: true
    }
  ];

  const handlePartySelect = (party) => {
    setSelectedParty(party);
    setCurrentPage('booking');
  };

  const handleBackToList = () => {
    setCurrentPage('list');
    setSelectedParty(null);
  };

  const handleBookingSubmit = (bookingDetails) => {
    alert(`Booking confirmed for ${selectedParty.name}! Check your email for details.`);
    handleBackToList();
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      {currentPage === 'list' ? (
        <PartyListPage 
          parties={parties}
          onPartySelect={handlePartySelect}
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />
      ) : (
        <BookingPage 
          selectedParty={selectedParty}
          onBack={handleBackToList}
          onSubmit={handleBookingSubmit}
        />
      )}
    </>
  );
};

export default NightPartyBooking;