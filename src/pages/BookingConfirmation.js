import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  Plane,
  Hotel,
  MapPin,
  Calendar,
  Users,
  Clock,
  Download,
  Mail,
  Printer,
  Home,
  Award
} from "lucide-react";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { package: pkg, bookingDetails, totalPrice } = location.state || {};
  const [bookingId, setBookingId] = useState('');
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Generate random booking ID
    setBookingId('BK' + Math.random().toString(36).substr(2, 9).toUpperCase());
    
    // Redirect countdown
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/my-bookings');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  if (!pkg) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No booking found</h2>
          <button
            onClick={() => navigate('/flight-hotels')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Book a Package
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600">
            Your booking has been successfully confirmed. Check your email for details.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
            <div className="flex justify-between items-center text-white">
              <div>
                <p className="text-sm opacity-90">Booking ID</p>
                <p className="text-xl font-bold">{bookingId}</p>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-90">Booked on</p>
                <p className="font-medium">{new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
              </div>
            </div>
          </div>

          {/* Hotel Details */}
          <div className="p-6">
            <div className="flex items-start gap-4 mb-6">
              <img
                src={pkg.hotel.image}
                alt={pkg.hotel.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Hotel size={18} className="text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-800">{pkg.hotel.name}</h2>
                </div>
                <div className="flex items-center gap-1 text-gray-600 mb-2">
                  <MapPin size={14} />
                  <span className="text-sm">{pkg.hotel.location}, {pkg.hotel.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    {pkg.hotel.starRating} Star
                  </span>
                  <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
                    {bookingDetails.roomType} Room
                  </span>
                </div>
              </div>
            </div>

            {/* Booking Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Calendar size={14} />
                  <span className="text-xs">Check-in</span>
                </div>
                <p className="font-medium text-gray-800">31 Jan 2026</p>
                <p className="text-xs text-gray-500">From 15:00</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Calendar size={14} />
                  <span className="text-xs">Check-out</span>
                </div>
                <p className="font-medium text-gray-800">3 Feb 2026</p>
                <p className="text-xs text-gray-500">Until 11:00</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Users size={14} />
                  <span className="text-xs">Guests</span>
                </div>
                <p className="font-medium text-gray-800">{bookingDetails.passengers} Adults</p>
                <p className="text-xs text-gray-500">{bookingDetails.rooms} Room</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Clock size={14} />
                  <span className="text-xs">Duration</span>
                </div>
                <p className="font-medium text-gray-800">{pkg.nights} Nights</p>
                <p className="text-xs text-gray-500">{pkg.nights + 1} Days</p>
              </div>
            </div>

            {/* Flight Details */}
            <div className="border-t pt-6 mb-6">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Plane size={18} className="text-blue-600" />
                Flight Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{pkg.flight.outbound.departureTime}</div>
                    <div className="text-sm text-gray-600">LHR • London</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500">{pkg.flight.outbound.duration}</div>
                    <div className="w-20 h-px bg-gray-300 my-1"></div>
                    <div className="text-xs text-gray-500">Direct</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{pkg.flight.outbound.arrivalTime}</div>
                    <div className="text-sm text-gray-600">{pkg.hotel.city.slice(0,3).toUpperCase()} • {pkg.hotel.city}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{pkg.flight.inbound.departureTime}</div>
                    <div className="text-sm text-gray-600">{pkg.hotel.city.slice(0,3).toUpperCase()} • {pkg.hotel.city}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500">{pkg.flight.inbound.duration}</div>
                    <div className="w-20 h-px bg-gray-300 my-1"></div>
                    <div className="text-xs text-gray-500">Direct</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{pkg.flight.inbound.arrivalTime}</div>
                    <div className="text-sm text-gray-600">LHR • London</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Summary */}
            <div className="border-t pt-6">
              <h3 className="font-bold text-gray-800 mb-4">Payment Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Package</span>
                  <span className="font-medium">₹{pkg.packagePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Room Upgrade</span>
                  <span className="font-medium">₹{(totalPrice - pkg.packagePrice - (bookingDetails.addOns?.length * 1000 || 0)).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes & Fees</span>
                  <span className="font-medium">₹{(totalPrice * 0.12).toFixed(0)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t font-bold">
                  <span>Total Paid</span>
                  <span className="text-blue-600">₹{totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Download size={18} />
            Download Receipt
          </button>
          <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Mail size={18} />
            Email Confirmation
          </button>
          <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <Printer size={18} />
            Print Voucher
          </button>
        </div>

        {/* Redirect Message */}
        <div className="text-center text-gray-600 text-sm">
          <p>Redirecting to My Bookings in {countdown} seconds...</p>
          <button
            onClick={() => navigate('/my-bookings')}
            className="text-blue-600 hover:underline mt-2 flex items-center gap-1 justify-center"
          >
            <Home size={16} />
            Go to My Bookings now
          </button>
        </div>

        {/* Rewards Points */}
        <div className="mt-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <Award size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">You earned 2,500 reward points!</h4>
              <p className="text-sm text-white/90">
                These points can be redeemed for discounts on your next booking.
              </p>
              <button className="mt-3 px-4 py-2 bg-white text-amber-600 rounded-lg text-sm font-medium hover:bg-gray-100">
                View My Rewards
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;