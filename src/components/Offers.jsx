import React from "react";
import { Search, Tag, Percent, Gift, Clock, TrendingUp, Hotel, Plane, Car, Coffee, Ticket, BadgePercent, ArrowRight } from "lucide-react";

export default function OffersPage() {
  const offerCategories = [
    { id: 1, name: "All Offers", icon: Tag, active: true },
    { id: 2, name: "Flights", icon: Plane },
    { id: 3, name: "Hotels", icon: Hotel },
    { id: 4, name: "Bus", icon: Car },
    { id: 5, name: "Activities", icon: Ticket },
    { id: 6, name: "Dining", icon: Coffee },
  ];

  const featuredOffers = [
    {
      id: 1,
      title: "FLAT 25% OFF",
      description: "On domestic flight bookings",
      code: "FLYHIGH25",
      validTill: "31 Mar 2024",
      bgColor: "from-blue-500 to-blue-600",
      icon: Plane
    },
    {
      id: 2,
      title: "WEEKEND GETAWAY",
      description: "On hotel bookings above ₹3000",
      code: "WEEKEND20",
      validTill: "31 Mar 2024",
      bgColor: "from-purple-500 to-purple-600",
      icon: Hotel
    },
    {
      id: 3,
      title: "BUS TRAVEL OFFER",
      description: "Save up to ₹200 on bus tickets",
      code: "BUS200",
      validTill: "31 Mar 2024",
      bgColor: "from-green-500 to-green-600",
      icon: Car
    },
  ];

  const bankOffers = [
    {
      id: 1,
      bank: "HDFC Bank",
      discount: "15% OFF",
      description: "On flight & hotel bookings",
      code: "HDFC15",
      validity: "Limited Period Offer",
      logo: "🏦"
    },
    {
      id: 2,
      bank: "ICICI Bank",
      discount: "₹1000 OFF",
      description: "On international flights",
      code: "ICICI1000",
      validity: "Valid till 31 Mar",
      logo: "🏦"
    },
    {
      id: 3,
      bank: "SBI Credit Card",
      discount: "10% CASHBACK",
      description: "On bus ticket bookings",
      code: "SBIBUS",
      validity: "Limited seats",
      logo: "💳"
    },
    {
      id: 4,
      bank: "Axis Bank",
      discount: "FLAT 20%",
      description: "On luxury hotels",
      code: "AXISLUXE",
      validity: "Min spend ₹5000",
      logo: "🏦"
    },
  ];

  const partnerOffers = [
    {
      id: 1,
      partner: "Amazon Pay",
      discount: "₹250 Cashback",
      description: "On first bus booking",
      icon: "🛒"
    },
    {
      id: 2,
      partner: "Google Pay",
      discount: "15% SuperCash",
      description: "On flight bookings",
      icon: "📱"
    },
    {
      id: 3,
      partner: "PhonePe",
      discount: "Up to ₹300 OFF",
      description: "On hotel stays",
      icon: "📲"
    },
    {
      id: 4,
      partner: "Mobikwik",
      discount: "FLAT ₹150 OFF",
      description: "On bus & flight",
      icon: "💸"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold text-gray-900">Offers</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search size={20} className="text-gray-600" />
              </button>
              <button className="bg-[#008cff] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition">
                My Vouchers
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Category Pills */}
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-none">
          {offerCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition ${
                  category.active
                    ? "bg-[#008cff] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-6 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Special Offers Just for You! 🎉</h2>
              <p className="text-orange-100 mb-4">Get up to 50% off on your next booking</p>
              <button className="bg-white text-orange-500 px-6 py-2 rounded-lg font-medium hover:bg-orange-50 transition">
                Explore Now
              </button>
            </div>
            <BadgePercent size={80} className="text-white opacity-30" />
          </div>
        </div>

        {/* Featured Offers */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Featured Offers</h2>
            <button className="text-[#008cff] text-sm font-medium flex items-center gap-1">
              View All <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredOffers.map((offer) => {
              const Icon = offer.icon;
              return (
                <div key={offer.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
                  <div className={`bg-gradient-to-r ${offer.bgColor} p-4 text-white`}>
                    <div className="flex items-center justify-between">
                      <Icon size={24} />
                      <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
                        Limited Time
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mt-2">{offer.title}</h3>
                    <p className="text-sm opacity-90">{offer.description}</p>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Tag size={16} className="text-gray-400" />
                        <span className="font-mono text-sm font-medium text-gray-600">
                          CODE: {offer.code}
                        </span>
                      </div>
                      <button className="text-[#008cff] text-sm font-medium hover:underline">
                        Copy
                      </button>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>Valid till {offer.validTill}</span>
                      </div>
                      <button className="bg-[#008cff] text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-blue-600 transition">
                        Apply Offer
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bank Offers */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Bank & Card Offers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bankOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{offer.logo}</span>
                  <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded">
                    {offer.discount}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900">{offer.bank}</h3>
                <p className="text-sm text-gray-600 mb-2">{offer.description}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-400">{offer.validity}</span>
                  <span className="font-mono text-xs font-medium text-[#008cff]">{offer.code}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Offers */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Partner Offers</h2>
            <button className="text-[#008cff] text-sm font-medium flex items-center gap-1">
              View All <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {partnerOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition text-center">
                <span className="text-3xl mb-2 block">{offer.icon}</span>
                <h3 className="font-semibold text-gray-900 text-sm">{offer.partner}</h3>
                <p className="text-xs text-gray-600 mb-2">{offer.discount}</p>
                <p className="text-xs text-gray-500">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Offers */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={20} className="text-[#008cff]" />
            <h2 className="text-lg font-semibold text-gray-900">Trending Offers</h2>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-between py-2 border-b last:border-0">
                <div className="flex items-center gap-3">
                  <Percent size={18} className="text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">FLAT 30% OFF + Extra 5%</p>
                    <p className="text-xs text-gray-500">On international flight bookings</p>
                  </div>
                </div>
                <button className="text-[#008cff] text-sm font-medium hover:underline">
                  Grab Deal
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}