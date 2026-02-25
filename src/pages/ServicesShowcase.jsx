import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHotel, FaHome, FaPlane, FaBuilding, FaBus, FaTaxi,
  FaSuitcase, FaTrain, FaGlassCheers, FaTicketAlt, FaPassport,
  FaShieldAlt, FaShip, FaMapMarkedAlt, FaInfoCircle, FaGift,
  FaUserFriends, FaUmbrella, FaCar, FaGlobe, FaCreditCard
} from 'react-icons/fa';

export default function ServicesShowcase() {
  const services = {
    book: [
      { name: 'Hotels', icon: FaHotel, path: '/hotels', count: '12K+' },
      { name: 'Homestay & Villas', icon: FaHome, path: '/homestay', count: '5K+' },
      { name: 'Flights', icon: FaPlane, path: '/flights', count: '100+' },
      { name: 'Flights + Hotel', icon: FaBuilding, path: '/hotels&flights', count: 'Save 30%' },
      { name: 'Bus', icon: FaBus, path: '/bus', count: '20K+' },
      { name: 'Cab', icon: FaTaxi, path: '/cab', count: 'Instant' },
      { name: 'Holiday Packages', icon: FaSuitcase, path: '/holiday', count: '500+' },
      { name: 'Train', icon: FaTrain, path: '/train', count: 'IRCTC' },
      { name: 'Night Club', icon: FaGlassCheers, path: '/night-club', count: 'New' },
    ],
    explore: [
      { name: 'Tours & Attractions', icon: FaTicketAlt, path: '/tours', count: '1000+' },
      { name: 'Visa', icon: FaPassport, path: '/visa', count: '60+' },
      { name: 'Travel Insurance', icon: FaShieldAlt, path: '/travel-insurance', highlight: true, count: 'From ₹49' },
      { name: 'Cruise', icon: FaShip, path: '/cruise', count: 'Luxury' },
    ],
    tools: [
      { name: 'Trip Planner', icon: FaMapMarkedAlt, path: '/trip-planner' },
      { name: 'Flight Status', icon: FaPlane, path: '/flight-status' },
      { name: 'PNR Status', icon: FaInfoCircle, path: '/pnr' },
    ],
    more: [
      { name: 'Gift Card', icon: FaGift, path: '/gift' },
      { name: 'Invite & Earn', icon: FaUserFriends, path: '/invite', count: '₹500' },
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          All Travel Services
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Book flights, hotels, buses, trains, holiday packages and more at best prices
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search services, destinations, or experiences..."
            className="w-full px-5 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Quick Categories */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">All</span>
        <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer transition-colors">Popular</span>
        <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer transition-colors">New</span>
        <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer transition-colors">Offers</span>
        <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer transition-colors">International</span>
        <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 cursor-pointer transition-colors">Domestic</span>
      </div>

      {/* Services Grid */}
      <div className="space-y-12">
        
        {/* BOOK Section */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
              <h3 className="text-xl font-bold text-gray-800">BOOK</h3>
            </div>
            <span className="text-sm text-blue-600 font-medium">9 Services</span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.book.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-white p-5 rounded-xl border border-gray-100 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-50 group-hover:bg-blue-600 p-3 rounded-xl transition-colors mb-3">
                    <service.icon className="text-blue-600 group-hover:text-white text-2xl transition-colors" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </span>
                  {service.count && (
                    <span className="text-xs text-gray-500 mt-1 bg-gray-100 px-2 py-0.5 rounded-full">
                      {service.count}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* EXPLORE Section */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
              <h3 className="text-xl font-bold text-gray-800">EXPLORE</h3>
            </div>
            <span className="text-sm text-blue-600 font-medium">4 Services</span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.explore.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className={`group p-5 rounded-xl border transition-all ${
                  service.highlight 
                    ? 'border-blue-600 bg-blue-50/30 hover:bg-blue-50' 
                    : 'border-gray-100 hover:border-blue-600 hover:shadow-lg'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-3 rounded-xl transition-colors mb-3 ${
                    service.highlight 
                      ? 'bg-blue-600' 
                      : 'bg-blue-50 group-hover:bg-blue-600'
                  }`}>
                    <service.icon className={`text-2xl transition-colors ${
                      service.highlight 
                        ? 'text-white' 
                        : 'text-blue-600 group-hover:text-white'
                    }`} />
                  </div>
                  <span className={`text-sm font-semibold transition-colors ${
                    service.highlight ? 'text-blue-600' : 'text-gray-800 group-hover:text-blue-600'
                  }`}>
                    {service.name}
                  </span>
                  {service.count && (
                    <span className={`text-xs mt-1 px-2 py-0.5 rounded-full ${
                      service.highlight 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {service.count}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* TOOLS Section */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
              <h3 className="text-xl font-bold text-gray-800">TOOLS</h3>
            </div>
            <span className="text-sm text-blue-600 font-medium">3 Services</span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
            {services.tools.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-white p-5 rounded-xl border border-gray-100 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-50 group-hover:bg-blue-600 p-3 rounded-xl transition-colors mb-3">
                    <service.icon className="text-blue-600 group-hover:text-white text-2xl transition-colors" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* MORE Section */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
              <h3 className="text-xl font-bold text-gray-800">MORE</h3>
            </div>
            <span className="text-sm text-blue-600 font-medium">2 Services</span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
            {services.more.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-white p-5 rounded-xl border border-gray-100 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-50 group-hover:bg-blue-600 p-3 rounded-xl transition-colors mb-3">
                    <service.icon className="text-blue-600 group-hover:text-white text-2xl transition-colors" />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </span>
                  {service.count && (
                    <span className="text-xs text-gray-500 mt-1 bg-gray-100 px-2 py-0.5 rounded-full">
                      Earn {service.count}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Offer */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">First booking? Get 20% OFF!</h3>
            <p className="text-blue-100">Use code: WELCOME20 on your first booking</p>
          </div>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
            Book Now
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
            <div className="text-sm text-gray-500">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">10M+</div>
            <div className="text-sm text-gray-500">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
            <div className="text-sm text-gray-500">Customer Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">₹500</div>
            <div className="text-sm text-gray-500">Min. Savings</div>
          </div>
        </div>
      </div>
    </div>
  );
}