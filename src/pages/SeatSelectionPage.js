import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SeatSelectionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bus, searchParams, passengers } = location.state || {};
  
  // Generate seat layout with 56 seats
  const generateSeats = (layout) => {
    if (layout === 'sleeper') {
      return generateSleeperSeats();
    } else {
      return generateSeaterSeats();
    }
  };

  const generateSleeperSeats = () => {
    const seats = [];
    // 56 seats for sleeper - 14 rows with 4 seats each = 56 seats
    const rows = 14;
    
    for (let row = 1; row <= rows; row++) {
      for (let seat = 1; seat <= 4; seat++) {
        const seatLetter = String.fromCharCode(64 + seat);
        const seatNumber = `${row}${seatLetter}`;
        seats.push({
          id: seatNumber,
          number: seatNumber,
          type: seat <= 2 ? 'lower' : 'upper',
          isAvailable: Math.random() > 0.3,
          price: seat <= 2 ? bus.price : bus.price * 0.9,
          isSelected: false,
          row: row,
          column: seatLetter, // Store as string, not number
          position: seat <= 2 ? 'left' : 'right' // For sleeper layout
        });
      }
    }
    return seats;
  };

  const generateSeaterSeats = () => {
    const seats = [];
    const totalRows = 10; // 10 rows for 50 seats
    
    // First 10 rows: Left side 2 seats, Right side 3 seats
    for (let row = 1; row <= totalRows; row++) {
      // Left side - 2 seats (A, B) - Window and Aisle
      seats.push({
        id: `${row}A`,
        number: `${row}A`,
        type: 'window-left',
        position: 'left',
        isAvailable: Math.random() > 0.3,
        price: bus.price,
        isSelected: false,
        row: row,
        column: 'A'
      });
      
      seats.push({
        id: `${row}B`,
        number: `${row}B`,
        type: 'aisle-left',
        position: 'left',
        isAvailable: Math.random() > 0.3,
        price: bus.price * 0.95,
        isSelected: false,
        row: row,
        column: 'B'
      });
      
      // Right side - 3 seats (C, D, E) - Aisle, Middle, Window
      seats.push({
        id: `${row}C`,
        number: `${row}C`,
        type: 'aisle-right',
        position: 'right',
        isAvailable: Math.random() > 0.3,
        price: bus.price * 0.95,
        isSelected: false,
        row: row,
        column: 'C'
      });
      
      seats.push({
        id: `${row}D`,
        number: `${row}D`,
        type: 'middle',
        position: 'right',
        isAvailable: Math.random() > 0.3,
        price: bus.price * 0.95,
        isSelected: false,
        row: row,
        column: 'D'
      });
      
      seats.push({
        id: `${row}E`,
        number: `${row}E`,
        type: 'window-right',
        position: 'right',
        isAvailable: Math.random() > 0.3,
        price: bus.price,
        isSelected: false,
        row: row,
        column: 'E'
      });
    }
    
    // Last row - 6 seats at the back (Row 11)
    const lastRow = totalRows + 1;
    
    // Left side - 3 seats (A, B, C)
    seats.push({
      id: `${lastRow}A`,
      number: `${lastRow}A`,
      type: 'window-left',
      position: 'left',
      isAvailable: Math.random() > 0.3,
      price: bus.price,
      isSelected: false,
      row: lastRow,
      column: 'A'
    });
    
    seats.push({
      id: `${lastRow}B`,
      number: `${lastRow}B`,
      type: 'aisle-left',
      position: 'left',
      isAvailable: Math.random() > 0.3,
      price: bus.price * 0.95,
      isSelected: false,
      row: lastRow,
      column: 'B'
    });
    
    seats.push({
      id: `${lastRow}C`,
      number: `${lastRow}C`,
      type: 'middle-left',
      position: 'left',
      isAvailable: Math.random() > 0.3,
      price: bus.price * 0.95,
      isSelected: false,
      row: lastRow,
      column: 'C'
    });
    
    // Right side - 3 seats (D, E, F)
    seats.push({
      id: `${lastRow}D`,
      number: `${lastRow}D`,
      type: 'aisle-right',
      position: 'right',
      isAvailable: Math.random() > 0.3,
      price: bus.price * 0.95,
      isSelected: false,
      row: lastRow,
      column: 'D'
    });
    
    seats.push({
      id: `${lastRow}E`,
      number: `${lastRow}E`,
      type: 'middle-right',
      position: 'right',
      isAvailable: Math.random() > 0.3,
      price: bus.price * 0.95,
      isSelected: false,
      row: lastRow,
      column: 'E'
    });
    
    seats.push({
      id: `${lastRow}F`,
      number: `${lastRow}F`,
      type: 'window-right',
      position: 'right',
      isAvailable: Math.random() > 0.3,
      price: bus.price,
      isSelected: false,
      row: lastRow,
      column: 'F'
    });
    
    return seats;
  };

  const [seats, setSeats] = useState(generateSeats(bus?.seatLayout || 'seater'));
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [passengerDetails, setPassengerDetails] = useState(
    Array.from({ length: passengers || 1 }, (_, i) => ({
      id: i + 1,
      name: '',
      age: '',
      gender: 'Male',
      seat: ''
    }))
  );

  const handleSeatClick = (seat) => {
    if (!seat.isAvailable) return;
    
    if (selectedSeats.length >= passengers && !seat.isSelected) {
      alert(`You can select only ${passengers} seat(s)`);
      return;
    }
    
    const updatedSeats = seats.map(s => 
      s.id === seat.id ? { ...s, isSelected: !s.isSelected } : s
    );
    
    setSeats(updatedSeats);
    
    if (seat.isSelected) {
      setSelectedSeats(selectedSeats.filter(s => s.id !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handlePassengerChange = (index, field, value) => {
    const updatedDetails = [...passengerDetails];
    updatedDetails[index][field] = value;
    
    if (field === 'seat' && selectedSeats[index]) {
      const updatedSeats = seats.map(s => 
        s.id === selectedSeats[index].id ? { ...s, isSelected: false } : s
      );
      setSeats(updatedSeats);
    }
    
    setPassengerDetails(updatedDetails);
  };

  const calculateTotal = () => {
    return selectedSeats.reduce((total, seat) => total + seat.price, 0);
  };

  const handleProceedToPayment = () => {
    if (selectedSeats.length !== passengers) {
      alert(`Please select ${passengers} seat(s)`);
      return;
    }
    
    for (let i = 0; i < passengerDetails.length; i++) {
      if (!passengerDetails[i].name || !passengerDetails[i].age) {
        alert(`Please fill all passenger details for Passenger ${i + 1}`);
        return;
      }
    }
    
    const bookingData = {
      bus: bus,
      searchParams: searchParams,
      selectedSeats: selectedSeats,
      passengerDetails: passengerDetails,
      totalAmount: calculateTotal(),
      bookingTime: new Date().toISOString(),
      bookingId: `BUS${Date.now()}${Math.floor(Math.random() * 1000)}`
    };
    
    navigate('/payment', { state: bookingData });
  };

  if (!bus) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-lg mb-2">No bus selected</div>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Go Back to Search
          </button>
        </div>
      </div>
    );
  }

  const totalAmount = calculateTotal();

  // Group seats by row for better display
  const seatsByRow = seats.reduce((acc, seat) => {
    if (!acc[seat.row]) {
      acc[seat.row] = [];
    }
    acc[seat.row].push(seat);
    return acc;
  }, {});

  // Sort seats within a row
  const sortSeatsByColumn = (seats) => {
    return seats.sort((a, b) => {
      if (a.column < b.column) return -1;
      if (a.column > b.column) return 1;
      return 0;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Select Your Seats</h1>
          <p className="text-gray-600">{bus.name} • {bus.class} • {bus.busNumber}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Bus Info and Seat Map */}
          <div className="lg:w-2/3">
            {/* Bus Journey Info */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xl font-bold">{bus.departureTime} → {bus.arrivalTime}</div>
                  <div className="text-gray-600">{bus.departureStation} to {bus.arrivalStation}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">₹{bus.price.toFixed(2)} per seat</div>
                  <div className="text-sm text-gray-500">{bus.duration} journey</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-100 border-2 border-green-500 rounded"></div>
                  Available
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-100 border-2 border-red-500 rounded"></div>
                  Booked
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-100 border-2 border-blue-500 rounded"></div>
                  Selected
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-100 border-2 border-yellow-500 rounded"></div>
                  Window Seat
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-100 border-2 border-purple-500 rounded"></div>
                  Aisle Seat
                </div>
                {bus.seatLayout === 'sleeper' && (
                  <>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-amber-100 border-2 border-amber-500 rounded"></div>
                      Lower Berth
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-indigo-100 border-2 border-indigo-500 rounded"></div>
                      Upper Berth
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Seat Map */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 overflow-x-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Select Seats ({passengers} passenger(s))</h2>
                <div className="text-lg font-bold text-blue-600">Total: ₹{totalAmount.toFixed(2)}</div>
              </div>

              {/* Bus Front */}
              <div className="flex justify-center mb-8">
                <div className="bg-gray-800 text-white px-6 py-2 rounded-lg">
                  <div className="text-center">Driver</div>
                  <div className="text-xs text-center">FRONT</div>
                </div>
              </div>

              {/* Seat Grid */}
              <div className="space-y-4">
                {Object.keys(seatsByRow)
                  .sort((a, b) => parseInt(a) - parseInt(b))
                  .map(row => (
                    <div key={row} className="flex items-center gap-4">
                      <div className="w-8 text-center font-medium text-gray-500">Row {row}</div>
                      <div className="flex flex-1 gap-8">
                        {/* Left side seats */}
                        <div className="flex gap-2">
                          {sortSeatsByColumn(
                            seatsByRow[row].filter(seat => 
                              bus.seatLayout === 'sleeper' 
                                ? seat.position === 'left' || seat.column === 'A' || seat.column === 'B'
                                : seat.position === 'left' || seat.column <= 'B'
                            )
                          ).map(seat => (
                            <button
                              key={seat.id}
                              onClick={() => handleSeatClick(seat)}
                              disabled={!seat.isAvailable}
                              className={`
                                relative w-14 h-14 rounded-lg border-2 transition-all text-center
                                ${!seat.isAvailable 
                                  ? 'bg-red-100 border-red-300 cursor-not-allowed' 
                                  : seat.isSelected 
                                    ? 'bg-blue-100 border-blue-500' 
                                    : bus.seatLayout === 'sleeper'
                                      ? seat.type === 'lower'
                                        ? 'bg-amber-50 border-amber-300 hover:border-amber-500'
                                        : 'bg-indigo-50 border-indigo-300 hover:border-indigo-500'
                                      : seat.type?.includes('window')
                                        ? 'bg-yellow-50 border-yellow-300 hover:border-yellow-500'
                                        : 'bg-purple-50 border-purple-300 hover:border-purple-500'
                                }
                              `}
                            >
                              <div className="text-xs font-medium">{seat.number}</div>
                              <div className="text-[10px] text-gray-500">
                                {bus.seatLayout === 'sleeper' 
                                  ? seat.type === 'lower' ? 'LOW' : 'UPP'
                                  : seat.type?.includes('window') ? 'WIN' : 
                                    seat.type?.includes('aisle') ? 'AIS' : 
                                    seat.type?.includes('middle') ? 'MID' : ''
                                }
                              </div>
                              {!seat.isAvailable && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-6 h-0.5 bg-red-400 transform rotate-45"></div>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                        
                        {/* Aisle space */}
                        <div className="w-8 flex items-center justify-center">
                          <span className="text-gray-400 text-xs">AISLE</span>
                        </div>
                        
                        {/* Right side seats */}
                        <div className="flex gap-2">
                          {sortSeatsByColumn(
                            seatsByRow[row].filter(seat => 
                              bus.seatLayout === 'sleeper'
                                ? seat.position === 'right' || seat.column === 'C' || seat.column === 'D'
                                : seat.position === 'right' || seat.column >= 'C'
                            )
                          ).map(seat => (
                            <button
                              key={seat.id}
                              onClick={() => handleSeatClick(seat)}
                              disabled={!seat.isAvailable}
                              className={`
                                relative w-14 h-14 rounded-lg border-2 transition-all text-center
                                ${!seat.isAvailable 
                                  ? 'bg-red-100 border-red-300 cursor-not-allowed' 
                                  : seat.isSelected 
                                    ? 'bg-blue-100 border-blue-500' 
                                    : bus.seatLayout === 'sleeper'
                                      ? seat.type === 'lower'
                                        ? 'bg-amber-50 border-amber-300 hover:border-amber-500'
                                        : 'bg-indigo-50 border-indigo-300 hover:border-indigo-500'
                                      : seat.type?.includes('window')
                                        ? 'bg-yellow-50 border-yellow-300 hover:border-yellow-500'
                                        : 'bg-purple-50 border-purple-300 hover:border-purple-500'
                                }
                              `}
                            >
                              <div className="text-xs font-medium">{seat.number}</div>
                              <div className="text-[10px] text-gray-500">
                                {bus.seatLayout === 'sleeper' 
                                  ? seat.type === 'lower' ? 'LOW' : 'UPP'
                                  : seat.type?.includes('window') ? 'WIN' : 
                                    seat.type?.includes('aisle') ? 'AIS' : 
                                    seat.type?.includes('middle') ? 'MID' : ''
                                }
                              </div>
                              {!seat.isAvailable && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-6 h-0.5 bg-red-400 transform rotate-45"></div>
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Bus Back */}
              <div className="flex justify-center mt-8">
                <div className="bg-gray-700 text-white px-6 py-2 rounded-lg">
                  <div className="text-xs text-center">BACK</div>
                </div>
              </div>

              {/* Seat Legend */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-100 border-2 border-green-500 rounded"></div>
                    <span className="text-sm">Available</span>
                  </div>
                  {bus.seatLayout === 'sleeper' ? (
                    <>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-amber-100 border-2 border-amber-500 rounded"></div>
                        <span className="text-sm">Lower Berth</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-indigo-100 border-2 border-indigo-500 rounded"></div>
                        <span className="text-sm">Upper Berth</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-yellow-100 border-2 border-yellow-500 rounded"></div>
                        <span className="text-sm">Window Seat</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-purple-100 border-2 border-purple-500 rounded"></div>
                        <span className="text-sm">Aisle/Middle Seat</span>
                      </div>
                    </>
                  )}
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-100 border-2 border-blue-500 rounded"></div>
                    <span className="text-sm">Selected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-100 border-2 border-red-500 rounded"></div>
                    <span className="text-sm">Booked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary and Passenger Details */}
          <div className="lg:w-1/3">
            {/* Booking Summary */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Booking Summary</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500">Route</div>
                  <div className="font-medium">{searchParams?.fromCity} → {searchParams?.toCity}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500">Date & Time</div>
                  <div className="font-medium">
                    {searchParams?.date ? new Date(searchParams.date).toLocaleDateString() : 'N/A'} • {bus.departureTime}
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500">Bus Details</div>
                  <div className="font-medium">{bus.name} ({bus.class})</div>
                  <div className="text-sm text-gray-600">{bus.busNumber}</div>
                </div>
                
                <div>
                  <div className="text-sm text-gray-500">Selected Seats</div>
                  <div className="font-medium">
                    {selectedSeats.length > 0 
                      ? selectedSeats.map(s => s.number).join(', ')
                      : 'No seats selected'
                    }
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex justify-between mb-2">
                    <span>Base Fare ({selectedSeats.length} seat(s))</span>
                    <span>₹{totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Taxes & Fees (18%)</span>
                    <span>₹{(totalAmount * 0.18).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Convenience Fee</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-4 border-t">
                    <span>Total Amount</span>
                    <span className="text-blue-600">₹{(totalAmount * 1.18).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Passenger Details */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Passenger Details</h2>
              
              <div className="space-y-4">
                {passengerDetails.map((passenger, index) => (
                  <div key={passenger.id} className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-3">Passenger {index + 1}</h3>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                        <input
                          type="text"
                          value={passenger.name}
                          onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter full name"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Age</label>
                          <input
                            type="number"
                            value={passenger.age}
                            onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Age"
                            min="1"
                            max="100"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Gender</label>
                          <select
                            value={passenger.gender}
                            onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Seat Number</label>
                        <div className="px-4 py-2 border rounded-lg bg-gray-50">
                          {selectedSeats[index] ? selectedSeats[index].number : 'Not selected'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={handleProceedToPayment}
                  disabled={selectedSeats.length !== passengers}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    selectedSeats.length === passengers 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Proceed to Payment
                </button>
                
                <button
                  onClick={() => navigate('/')}
                  className="w-full py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Change Bus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionPage;