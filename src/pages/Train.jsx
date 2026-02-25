import React, { useState } from 'react';

const Train = () => {
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedTrain, setSelectedTrain] = useState(null);

  const trains = [
    {
      id: 1,
      class: '1st Class',
      name: 'General Manager Express',
      operator: 'National Express',
      departureStation: 'London Victoria Coach Station',
      arrivalStation: 'Manchester Central Coach Station',
      departureTime: '08:00',
      arrivalTime: '16:00',
      duration: '8h',
      type: 'Direct',
      price: 3425.48,
      originalPrice: 3800.00,
      availableSeats: 5,
      rating: 4.8,
      amenities: ['WiFi', 'Meals', 'AC', 'Power Outlets', 'Refreshments'],
      features: ['No Booking Fee', 'Flexible Ticket', 'Priority Boarding']
    },
    {
      id: 2,
      class: '2nd Class',
      name: 'Senior Developer Fast',
      operator: 'FLiXBUS',
      departureStation: 'London Finchley Road (Stop CL)',
      arrivalStation: 'Manchester (Shudehill Interchange)',
      departureTime: '10:40',
      arrivalTime: '15:20',
      duration: '4h 40m',
      type: 'Direct',
      price: 1064.08,
      originalPrice: 1200.00,
      availableSeats: 12,
      rating: 4.5,
      amenities: ['WiFi', 'AC', 'Power Outlets'],
      features: ['Fastest', 'Economy']
    },
    {
      id: 3,
      class: '3rd Class',
      name: 'Junior Developer Coach',
      operator: 'National Express',
      departureStation: 'London Victoria Coach Station',
      arrivalStation: 'Manchester Central Coach Station',
      departureTime: '09:30',
      arrivalTime: '14:10',
      duration: '4h 40m',
      type: 'Direct',
      price: 1365.05,
      originalPrice: 1500.00,
      availableSeats: 25,
      rating: 4.2,
      amenities: ['AC', 'Power Outlets'],
      features: ['Standard']
    },
    {
      id: 4,
      class: '4th Class',
      name: 'Intern Economy',
      operator: 'FLiXBUS',
      departureStation: 'London Victoria Coach Station',
      arrivalStation: 'Manchester (Shudehill Interchange)',
      departureTime: '11:00',
      arrivalTime: '16:30',
      duration: '5h 30m',
      type: 'Direct',
      price: 1400.81,
      originalPrice: 1550.00,
      availableSeats: 40,
      rating: 4.0,
      amenities: ['AC'],
      features: ['Budget']
    },
    {
      id: 5,
      class: '5th Class',
      name: 'Entry Level Basic',
      operator: 'National Express',
      departureStation: 'London Victoria Coach Station',
      arrivalStation: 'Manchester Central Coach Station',
      departureTime: '02:00',
      arrivalTime: '07:35',
      duration: '5h 35m',
      type: 'Direct',
      price: 3425.48,
      originalPrice: 3800.00,
      availableSeats: 35,
      rating: 3.8,
      amenities: ['Basic Seating'],
      features: ['Overnight', 'Economy']
    }
  ];

  const classFilters = ['All Classes', '1st Class', '2nd Class', '3rd Class', '4th Class', '5th Class'];
  const sortOptions = ['Departure (earliest)', 'Cheapest', 'Fastest', 'Direct only'];

  const filteredTrains = selectedClass === 'All Classes' 
    ? trains 
    : trains.filter(train => train.class === selectedClass);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600">Trip.com</div>
          <div className="flex gap-6 text-gray-700">
            <button className="hover:text-blue-600">Hotels & Homes</button>
            <button className="hover:text-blue-600">Flights</button>
            <button className="font-bold text-blue-600 border-b-2 border-blue-600 pb-1">Trains</button>
            <button className="hover:text-blue-600">Flight + Hotel</button>
            <button className="hover:text-blue-600">Car services</button>
            <button className="hover:text-blue-600">Attractions & Tours</button>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-600">Customer support</button>
            <button className="text-gray-600">Find bookings</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign in / Register</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Search Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">From</div>
              <div className="flex items-center border rounded-lg p-3">
                <span className="font-medium">London (Any)</span>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 mb-1">To</div>
              <div className="flex items-center border rounded-lg p-3">
                <span className="font-medium">Manchester (Any)</span>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 mb-1">Departure time</div>
              <div className="flex items-center justify-between border rounded-lg p-3">
                <span className="font-medium">Thu, Feb 12</span>
                <span className="text-gray-400">▾</span>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500 mb-1">Return time</div>
              <div className="flex items-center border rounded-lg p-3 bg-gray-50">
                <span className="text-gray-400">Add return trip</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              1 adult • No Railcards
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>

        {/* Date Selector */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-bold">Thu, Feb 12</div>
            <div className="text-blue-600 font-medium">Continue</div>
          </div>
          <div className="flex justify-between text-center">
            {['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'].map((day, i) => (
              <div key={i} className={`px-4 py-2 rounded-lg ${day === 'Thu' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}>
                <div className="font-medium">{day}</div>
                <div className="text-sm">Feb {10 + i}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            {sortOptions.map((option, i) => (
              <button 
                key={i}
                className={`px-4 py-2 rounded-lg border ${i === 0 ? 'bg-blue-100 text-blue-600 border-blue-200' : 'bg-white border-gray-300 hover:bg-gray-50'}`}
              >
                {option} {i === 0 ? '▾' : ''}
              </button>
            ))}
          </div>
          <div className="text-sm text-gray-600">No booking fee</div>
        </div>

        {/* Train Listings */}
        <div className="space-y-3">
          {filteredTrains.map((train) => (
            <div 
              key={train.id}
              className={`bg-white rounded-xl border-2 ${selectedTrain === train.id ? 'border-blue-500' : 'border-gray-200'} hover:border-blue-300 transition-colors`}
              onClick={() => setSelectedTrain(train.id)}
            >
              <div className="p-4">
                <div className="flex justify-between items-start">
                  {/* Left Column - Timing */}
                  <div className="w-32">
                    <div className="text-2xl font-bold">{train.departureTime}</div>
                    <div className="text-sm text-gray-500">{train.departureStation}</div>
                  </div>
                  
                  {/* Middle Column - Duration & Info */}
                  <div className="flex-1 px-8">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-full h-px bg-gray-300 relative">
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500"></div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-600 font-medium">{train.duration} • {train.type}</div>
                      <div className="text-sm text-gray-500">{train.operator}</div>
                    </div>
                  </div>
                  
                  {/* Right Column - Arrival & Price */}
                  <div className="w-32 text-right">
                    <div className="text-2xl font-bold">{train.arrivalTime}</div>
                    <div className="text-sm text-gray-500">{train.arrivalStation}</div>
                  </div>
                  
                  <div className="w-48 pl-8 border-l">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">₹{train.price.toFixed(2)}</div>
                      <div className="text-sm text-gray-500 line-through">₹{train.originalPrice.toFixed(2)}</div>
                      <div className="text-xs text-green-600 mt-1">Save ₹{(train.originalPrice - train.price).toFixed(2)}</div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Row - Features */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${train.class === '1st Class' ? 'bg-purple-100 text-purple-700' : train.class === '2nd Class' ? 'bg-blue-100 text-blue-700' : train.class === '3rd Class' ? 'bg-green-100 text-green-700' : train.class === '4th Class' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                      {train.class}
                    </span>
                    {train.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                    <div className="flex items-center text-amber-500 ml-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(train.rating) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-gray-600 ml-1 text-sm">{train.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                      Details
                    </button>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Class Filter Buttons */}
        <div className="mt-8 flex justify-center gap-2">
          {classFilters.map((filter, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-lg font-medium ${selectedClass === filter ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border hover:bg-gray-50'}`}
              onClick={() => setSelectedClass(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t">
          <div className="grid grid-cols-4 gap-8 text-sm text-gray-600">
            <div>
              <div className="font-medium mb-2">Contact us</div>
              <div className="space-y-1">
                <div>Customer support</div>
                <div>Service guarantee</div>
                <div>More service info</div>
              </div>
            </div>
            
            <div>
              <div className="font-medium mb-2">About</div>
              <div className="space-y-1">
                <div>About Trip.com</div>
                <div>News</div>
                <div>Careers</div>
                <div>Terms & Conditions</div>
              </div>
            </div>
            
            <div>
              <div className="font-medium mb-2">Other services</div>
              <div className="space-y-1">
                <div>Investor relations</div>
                <div>Trip.com Rewards</div>
                <div>Affiliate programme</div>
                <div>List your property</div>
              </div>
            </div>
            
            <div>
              <div className="font-medium mb-2">Payment methods</div>
              <div className="flex gap-2 text-xl">
                <span>🔒</span>
                <span>💳</span>
                <span>🏦</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm">
            <div className="mb-4">© 2025 Trip.com Travel Singapore Pte. Ltd. All rights reserved</div>
            <div>Site Operator: Trip.com Travel Singapore Pte. Ltd.</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Train;