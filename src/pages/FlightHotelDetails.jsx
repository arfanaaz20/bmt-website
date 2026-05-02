import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft, MapPin, Star, Clock, CheckCircle, Plane, Hotel,
  Shield, Award, Users, Calendar, ChevronRight, Heart, Share2,
  AlertCircle, Wifi, Utensils, Car, Zap, TrendingDown, Tag,
  Phone, Mail, Info, Coffee
} from "lucide-react";

export default function FlightHotelDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [wishlisted, setWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const pkg = location.state?.package;
  const searchParams = location.state?.searchParams;

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency", currency: "INR", maximumFractionDigits: 0
    }).format(price);

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ background: '#f5f6fa' }}>
        <AlertCircle size={52} className="text-gray-300" />
        <h2 className="text-xl font-bold text-gray-600">Package not found</h2>
        <p className="text-gray-400 text-sm">We couldn't load the package details. Please try again.</p>
        <button onClick={() => navigate(-1)}
          className="px-6 py-2.5 rounded-xl text-white text-sm font-bold"
          style={{ background: 'linear-gradient(135deg, #1a3fa8 0%, #2563eb 100%)' }}>
          Go Back
        </button>
      </div>
    );
  }

  const { hotel, flight, packagePrice, originalPrice, totalSavings, nights, includes, availableRooms, badge } = pkg;
  const discountPct = Math.round((totalSavings / originalPrice) * 100);

  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "flights", label: "Flights" },
    { key: "hotel", label: "Hotel" },
    { key: "inclusions", label: "What's Included" },
  ];

  return (
    <div className="min-h-screen" style={{ background: '#f5f6fa', fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ── HERO IMAGE ── */}
      <div className="relative h-80 md:h-96 w-full overflow-hidden">
        <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
        {/* Gradient: same brand style - dark navy to transparent */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,25,80,0.85) 0%, rgba(10,25,80,0.3) 50%, transparent 100%)' }} />

        {/* Nav */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold shadow-lg transition-all hover:bg-white"
            style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', color: '#1a1a2e' }}>
            <ArrowLeft size={15} /> Back
          </button>
          <div className="flex gap-2">
            <button onClick={() => setWishlisted(w => !w)}
              className="p-2.5 rounded-xl shadow-lg transition-all"
              style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)' }}>
              <Heart size={17} className={wishlisted ? "fill-red-500 text-red-500" : "text-gray-500"} />
            </button>
            <button className="p-2.5 rounded-xl shadow-lg"
              style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)' }}>
              <Share2 size={17} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {badge && (
              <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">{badge}</span>
            )}
            <span className="px-3 py-1 text-white text-xs font-bold rounded-full" style={{ background: '#22a86e' }}>
              {discountPct}% OFF
            </span>
            <span className="px-3 py-1 text-white text-xs font-bold rounded-full" style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }}>
              {nights} Nights Package
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-1">
            {hotel.name} <span className="text-2xl">{hotel.flag}</span>
          </h1>
          <div className="flex items-center gap-2 text-white/85 text-sm">
            <MapPin size={14} className="text-red-400" />
            {hotel.location}, {hotel.city}, {hotel.country}
          </div>
        </div>
      </div>

      {/* ── STICKY TABS ── */}
      <div className="bg-white shadow-sm sticky top-0 z-30" style={{ borderBottom: '2px solid #f0f2f8' }}>
        <div className="max-w-5xl mx-auto px-4 flex items-center gap-1 overflow-x-auto">
          {tabs.map(({ key, label }) => (
            <button key={key} onClick={() => setActiveTab(key)}
              className="px-5 py-3.5 text-sm font-bold whitespace-nowrap transition-all relative"
              style={activeTab === key ? { color: '#1a3fa8' } : { color: '#888' }}>
              {label}
              {activeTab === key && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{ background: '#1a3fa8' }} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-5xl mx-auto px-4 py-7">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-5">

            {/* Rating Card */}
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl" style={{ background: '#eef2ff' }}>
                    <div className="text-xl font-extrabold" style={{ color: '#1a3fa8' }}>{hotel.rating}</div>
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-0.5">
                      {Array(Math.floor(hotel.starRating)).fill(0).map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                      ))}
                      {hotel.starRating > Math.floor(hotel.starRating) && <span className="text-yellow-400 text-sm">½</span>}
                    </div>
                    <div className="text-xs text-gray-400">{hotel.reviews.toLocaleString()} verified reviews</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 max-w-xs">{hotel.description}</p>
              </div>
            </div>

            {/* Flight Details */}
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <h2 className="text-base font-extrabold text-gray-800 mb-4 flex items-center gap-2">
                <div className="p-1.5 rounded-lg" style={{ background: '#eef2ff' }}>
                  <Plane size={16} style={{ color: '#1a3fa8' }} />
                </div>
                Flight Details
              </h2>
              <div className="space-y-3">
                {[
                  { label: "Outbound Flight", data: flight.outbound, from: searchParams?.fromCode || "DEP", to: searchParams?.toCode || "ARR" },
                  ...(flight.inbound ? [{ label: "Return Flight", data: flight.inbound, from: searchParams?.toCode || "ARR", to: searchParams?.fromCode || "DEP" }] : [])
                ].map(({ label, data, from, to }) => (
                  <div key={label} className="rounded-xl p-4" style={{ background: '#f5f7ff', border: '1px solid #e0e7ff' }}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-gray-600">{label}</span>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-lg text-xs font-bold" style={{ background: '#dbeafe', color: '#1d4ed8' }}>
                          {data.class}
                        </span>
                        <span className="text-xs text-gray-400">{data.flightNumber}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <div className="text-2xl font-extrabold text-gray-800">{data.departureTime}</div>
                        <div className="text-xs font-bold mt-0.5" style={{ color: '#1a3fa8' }}>{from}</div>
                      </div>
                      <div className="flex-1 mx-4 text-center">
                        <div className="text-xs text-gray-400 mb-1">{data.duration}</div>
                        <div className="flex items-center">
                          <div className="flex-1 h-px" style={{ background: '#c7d2fe' }}></div>
                          <div className="mx-2 p-1.5 rounded-full" style={{ background: '#eef2ff' }}>
                            <Plane size={12} style={{ color: '#1a3fa8' }} />
                          </div>
                          <div className="flex-1 h-px" style={{ background: '#c7d2fe' }}></div>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">{data.airline}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-extrabold text-gray-800">{data.arrivalTime}</div>
                        <div className="text-xs font-bold mt-0.5" style={{ color: '#c0392b' }}>{to}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hotel Details */}
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <h2 className="text-base font-extrabold text-gray-800 mb-4 flex items-center gap-2">
                <div className="p-1.5 rounded-lg" style={{ background: '#eef2ff' }}>
                  <Hotel size={16} style={{ color: '#1a3fa8' }} />
                </div>
                Hotel Details
              </h2>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { label: "Check-in", value: hotel.checkIn, icon: <Clock size={15} style={{ color: '#1a3fa8' }} /> },
                  { label: "Check-out", value: hotel.checkOut, icon: <Clock size={15} style={{ color: '#c0392b' }} /> },
                ].map(({ label, value, icon }) => (
                  <div key={label} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: '#f5f7ff' }}>
                    {icon}
                    <div>
                      <div className="text-xs text-gray-400">{label}</div>
                      <div className="text-sm font-bold text-gray-800">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Amenities</div>
                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.map((amenity, idx) => (
                    <span key={idx}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors"
                      style={{ background: '#eef2ff', color: '#1a3fa8' }}>
                      <CheckCircle size={12} />
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <h2 className="text-base font-extrabold text-gray-800 mb-4 flex items-center gap-2">
                <div className="p-1.5 rounded-lg" style={{ background: '#dcfce7' }}>
                  <CheckCircle size={16} style={{ color: '#16a34a' }} />
                </div>
                What's Included
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {includes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: '#f0fdf4' }}>
                    <div className="p-1 rounded-full" style={{ background: '#dcfce7' }}>
                      <CheckCircle size={14} style={{ color: '#16a34a' }} />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies */}
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <h2 className="text-base font-extrabold text-gray-800 mb-4 flex items-center gap-2">
                <div className="p-1.5 rounded-lg" style={{ background: '#eef2ff' }}>
                  <Shield size={16} style={{ color: '#1a3fa8' }} />
                </div>
                Policies & Perks
              </h2>
              <div className="space-y-3">
                {[
                  { icon: <Shield size={16} style={{ color: '#16a34a' }} />, text: "Free cancellation up to 24 hours before check-in", bg: '#f0fdf4' },
                  { icon: <Award size={16} style={{ color: '#1a3fa8' }} />, text: "Earn 2,500 reward points with this booking", bg: '#eef2ff' },
                  { icon: <Users size={16} className="text-orange-500" />, text: `Only ${availableRooms} rooms left at this price — hurry!`, bg: '#fff7ed' },
                  { icon: <Zap size={16} className="text-yellow-500" />, text: "Instant confirmation — e-tickets within minutes", bg: '#fefce8' },
                ].map(({ icon, text, bg }, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: bg }}>
                    <div className="mt-0.5 flex-shrink-0">{icon}</div>
                    <span className="text-sm text-gray-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — sticky price card */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-4">

              {/* Price Summary */}
              <div className="bg-white rounded-2xl shadow-md p-5" style={{ border: '2px solid #e0e7ff' }}>
                <h2 className="text-base font-extrabold text-gray-800 mb-4">Price Summary</h2>

                <div className="space-y-2.5 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Original price</span>
                    <span className="text-sm text-gray-400 line-through">{formatPrice(originalPrice)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold" style={{ color: '#16a34a' }}>Package savings</span>
                    <span className="text-sm font-bold" style={{ color: '#16a34a' }}>– {formatPrice(totalSavings)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Taxes & fees</span>
                    <span className="text-sm font-medium text-gray-600">Included</span>
                  </div>
                  <div className="h-px" style={{ background: '#f0f2f8' }} />
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold text-gray-800">Total ({nights} nights)</span>
                    <span className="text-2xl font-extrabold" style={{ color: '#1a3fa8' }}>{formatPrice(packagePrice)}</span>
                  </div>
                </div>

                {/* Savings badge */}
                <div className="flex items-center gap-2 p-3 rounded-xl mb-4" style={{ background: '#dcfce7' }}>
                  <TrendingDown size={16} style={{ color: '#16a34a' }} />
                  <span className="text-sm font-bold" style={{ color: '#15803d' }}>
                    You're saving {formatPrice(totalSavings)} ({discountPct}% off)!
                  </span>
                </div>

                <button
                  onClick={() => navigate(`/book-flight-hotel/${pkg.id}`, { state: { package: pkg, searchParams } })}
                  className="w-full py-3.5 rounded-xl text-white font-extrabold text-base transition-all hover:opacity-90 active:scale-95 shadow-lg flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)', boxShadow: '0 4px 20px rgba(192,57,43,0.4)' }}>
                  Book Package <ChevronRight size={18} />
                </button>
                <p className="text-center text-xs text-gray-400 mt-2">No hidden charges · Instant confirmation</p>
              </div>

              {/* Availability */}
              <div className="bg-white rounded-2xl shadow-sm p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                  <span className="text-sm font-bold text-orange-600">Only {availableRooms} rooms left!</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className="h-2 rounded-full bg-orange-500 transition-all"
                    style={{ width: `${Math.min(100, ((12 - availableRooms) / 12) * 100)}%` }}></div>
                </div>
                <p className="text-xs text-gray-400 mt-2">High demand · Book before it sells out</p>
              </div>

              {/* Need Help */}
              <div className="bg-white rounded-2xl shadow-sm p-4">
                <div className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <Info size={15} style={{ color: '#1a3fa8' }} /> Need Help?
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Phone size={13} className="text-gray-400" /> 1800-123-4567 (Toll Free)
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Mail size={13} className="text-gray-400" /> support@birdmytrip.com
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock size={13} className="text-gray-400" /> Available 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}