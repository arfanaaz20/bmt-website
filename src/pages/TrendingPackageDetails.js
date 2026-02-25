// TrendingPackageDetails.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, MapPin, Star, Calendar, Award, CheckCircle } from "lucide-react";

const TrendingPackageDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { package: pkg, searchParams } = location.state || {};
  const [showBookingModal, setShowBookingModal] = useState(false);

  if (!pkg) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Package not found</h2>
          <button
            onClick={() => navigate('/flight-hotels')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft size={20} />
            <span>Back to search</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={pkg.image}
              alt={pkg.route}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h1 className="text-3xl font-bold text-white mb-2">{pkg.route}</h1>
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span>{pkg.rating}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Featured Hotels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {pkg.hotels?.map((hotel, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-bold text-gray-800">{hotel}</h3>
                  <div className="flex items-center gap-1 mt-2">
                    <Star size={14} className="text-yellow-500 fill-current" />
                    <Star size={14} className="text-yellow-500 fill-current" />
                    <Star size={14} className="text-yellow-500 fill-current" />
                    <Star size={14} className="text-yellow-500 fill-current" />
                    <Star size={14} className="text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">5.0</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Package price</div>
                  <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
                  <div className="text-sm text-green-600 mt-1">{pkg.savings}</div>
                </div>
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Confirm Booking</h3>
              <p className="text-gray-600">{pkg.route}</p>
              <p className="text-gray-600">{pkg.duration}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowBookingModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowBookingModal(false);
                  navigate('/booking-confirmation', {
                    state: {
                      package: {
                        hotel: { name: pkg.hotels?.[0], city: pkg.route.split(' → ')[1] },
                        nights: parseInt(pkg.duration),
                        packagePrice: parseInt(pkg.price.replace(/[^0-9]/g, ''))
                      },
                      bookingDetails: { passengers: 2, rooms: 1 },
                      totalPrice: parseInt(pkg.price.replace(/[^0-9]/g, ''))
                    }
                  });
                }}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrendingPackageDetails;