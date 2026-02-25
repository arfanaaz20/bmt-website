import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Bed, Plane, Hotel, Car, MapPin, 
  Search, ChevronDown, ArrowLeftRight, Info,
  Calendar, Users, Building, Navigation,
  Clock, X, Check, Plus, Minus, Ship,
  Bus, Umbrella, Palmtree
} from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Hotels');
  
  // States for different tabs
  const [hotelsData, setHotelsData] = useState({
    destination: '',
    checkIn: 'Tue, Feb 18',
    checkOut: 'Wed, Feb 19',
    rooms: 1,
    adults: 2,
    children: 0,
  });

  const [flightsData, setFlightsData] = useState({
    tripType: 'return',
    from: 'Delhi',
    to: 'Mumbai',
    departure: 'Wed, Feb 19',
    returnDate: 'Mon, Feb 24',
    travelers: 1,
    class: 'Economy',
  });

  const [flightHotelData, setFlightHotelData] = useState({
    from: 'Delhi',
    to: 'Goa',
    departure: 'Wed, Feb 19',
    return: 'Sat, Feb 22',
    rooms: 1,
    adults: 2,
  });

  const [busData, setBusData] = useState({
    from: '',
    to: '',
    departureDate: 'Tue, Feb 18',
    passengers: 1,
  });

  const [cabData, setCabData] = useState({
    pickup: 'Delhi Airport (DEL)',
    dropoff: 'Same as pickup',
    pickupDate: 'Thu, Feb 20',
    dropoffDate: 'Sun, Feb 23',
    differentLocation: false,
    licenseCountry: 'India',
    age: '30-60',
  });

  const [cruiseData, setCruiseData] = useState({
    destination: '',
    departurePort: 'Mumbai',
    departureDate: 'Wed, Feb 19',
    returnDate: 'Sat, Feb 22',
    rooms: 1,
    adults: 2,
    children: 0,
  });

  const [tourData, setTourData] = useState({
    destination: '',
    checkIn: 'Wed, Feb 19',
    checkOut: 'Sat, Feb 22',
    rooms: 1,
    adults: 2,
    children: 0,
  });

  const [holidayData, setHolidayData] = useState({
    from: 'Delhi',
    to: 'Goa',
    departure: 'Wed, Feb 19',
    return: 'Sat, Feb 22',
    rooms: 1,
    adults: 2,
    children: 0,
  });

  // Modal states
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [showGuestsModal, setShowGuestsModal] = useState(false);
  const [showClassModal, setShowClassModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [showCityModal, setShowCityModal] = useState(false);
  const [showPassengerModal, setShowPassengerModal] = useState(false);
  const [showPortModal, setShowPortModal] = useState(false);
  
  // Current modal type
  const [modalType, setModalType] = useState('');
  const [currentDateSelection, setCurrentDateSelection] = useState('checkin');

  // Refs to track input values without re-renders
  const hotelsDestinationRef = useRef('');
  const flightsFromRef = useRef('Delhi');
  const flightsToRef = useRef('Mumbai');
  const flightHotelFromRef = useRef('Delhi');
  const flightHotelToRef = useRef('Goa');
  const busFromRef = useRef('');
  const busToRef = useRef('');
  const cabPickupRef = useRef('Delhi Airport (DEL)');
  const cruiseDestinationRef = useRef('');
  const tourDestinationRef = useRef('');
  const holidayFromRef = useRef('Delhi');
  const holidayToRef = useRef('Goa');

  const tabs = [
    { id: 'hotels', name: 'Hotels', icon: <Bed size={18} /> },
    { id: 'hotels-homes', name: 'Homestay & Villas', icon: <Building size={18} /> },
    { id: 'flights', name: 'Flights', icon: <Plane size={18} /> },
    { id: 'flight-hotel', name: 'Flights + Hotel', icon: <Hotel size={18} /> },
    { id: 'bus', name: 'Bus', icon: <Bus size={18} /> },
    { id: 'cab', name: 'Cab', icon: <Car size={18} /> },
    { id: 'holiday', name: 'Holiday Packages', icon: <Palmtree size={18} /> },
    { id: 'tour', name: 'Tour & Attraction', icon: <Umbrella size={18} /> },
       { id: 'cruise', name: 'Cruise', icon: <Ship size={18} /> },
  ];

  // Data for suggestions
  const popularDestinations = [
    { name: 'Mumbai', type: 'city', country: 'India', code: 'BOM' },
    { name: 'Delhi', type: 'city', country: 'India', code: 'DEL' },
    { name: 'Bangalore', type: 'city', country: 'India', code: 'BLR' },
    { name: 'Goa', type: 'city', country: 'India', code: 'GOI' },
    { name: 'Kolkata', type: 'city', country: 'India', code: 'CCU' },
    { name: 'Chennai', type: 'city', country: 'India', code: 'MAA' },
    { name: 'Hyderabad', type: 'city', country: 'India', code: 'HYD' },
    { name: 'Jaipur', type: 'city', country: 'India', code: 'JAI' },
    { name: 'Dubai', type: 'city', country: 'UAE', code: 'DXB' },
    { name: 'Singapore', type: 'city', country: 'Singapore', code: 'SIN' },
    { name: 'Bangkok', type: 'city', country: 'Thailand', code: 'BKK' },
    { name: 'Paris', type: 'city', country: 'France', code: 'CDG' },
    { name: 'London', type: 'city', country: 'UK', code: 'LHR' },
  ];

  const busStations = [
    'Delhi ISBT Kashmiri Gate',
    'Mumbai Central Bus Station',
    'Bangalore Kempegowda Bus Station',
    'Chennai Koyambedu',
    'Kolkata Esplanade',
    'Hyderabad MGBS',
    'Jaipur Sindhi Camp',
    'Goa Panaji Bus Stand',
  ];

  const cruisePorts = [
    'Mumbai Port',
    'Goa Port',
    'Chennai Port',
    'Kochi Port',
    'Singapore Cruise Centre',
    'Dubai Cruise Terminal',
    'Bangkok Port',
    'Phuket Cruise Port',
  ];

  const tourDestinations = [
    'Goa Beach Tour',
    'Rajasthan Heritage',
    'Kerala Backwaters',
    'Himachal Adventure',
    'Uttarakhand Pilgrimage',
    'Andaman Islands',
    'Ladakh Expedition',
    'Golden Triangle',
  ];

  const timesList = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', 
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', 
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', 
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
  ];

  // Date functions
  const getFutureDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return {
      formatted: `${daysOfWeek[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`,
      date: date
    };
  };

  const datesList = Array.from({ length: 30 }, (_, i) => getFutureDate(i + 1));

  // Search handler - Now gets values from refs
  const handleSearch = () => {
    let data;
    let navigatePath = '';
    
    switch(activeTab) {
      case 'Hotels':
        setHotelsData(prev => ({...prev, destination: hotelsDestinationRef.current}));
        data = { 
          type: 'hotels', 
          ...hotelsData,
          destination: hotelsDestinationRef.current
        };
        navigatePath = '/hotels';
        break;
      case 'Homestay & Villas':
        setHotelsData(prev => ({...prev, destination: hotelsDestinationRef.current}));
        data = { 
          type: 'hotels-homes', 
          ...hotelsData,
          destination: hotelsDestinationRef.current
        };
        navigatePath = '/homestay';
        break;
      case 'Flights':
        setFlightsData(prev => ({...prev, from: flightsFromRef.current, to: flightsToRef.current}));
        data = { 
          type: 'flights', 
          ...flightsData,
          from: flightsFromRef.current,
          to: flightsToRef.current
        };
        navigatePath = '/flights';
        break;
      case 'Flights + Hotel':
        setFlightHotelData(prev => ({...prev, from: flightHotelFromRef.current, to: flightHotelToRef.current}));
        data = { 
          type: 'flight-hotel', 
          ...flightHotelData,
          from: flightHotelFromRef.current,
          to: flightHotelToRef.current
        };
        navigatePath = '/hotels&Flights';
        break;
      case 'Bus':
        setBusData(prev => ({...prev, from: busFromRef.current, to: busToRef.current}));
        data = { 
          type: 'bus', 
          ...busData,
          from: busFromRef.current,
          to: busToRef.current
        };
        navigatePath = '/bus';
        break;
      case 'Cab':
        setCabData(prev => ({...prev, pickup: cabPickupRef.current}));
        data = { 
          type: 'cab', 
          ...cabData,
          pickup: cabPickupRef.current
        };
        navigatePath = '/cab';
        break;
      case 'Cruise':
        setCruiseData(prev => ({...prev, destination: cruiseDestinationRef.current}));
        data = { 
          type: 'cruise', 
          ...cruiseData,
          destination: cruiseDestinationRef.current
        };
        navigatePath = '/cruise';
        break;
      case 'Tour & Attraction':
        setTourData(prev => ({...prev, destination: tourDestinationRef.current}));
        data = { 
          type: 'tour', 
          ...tourData,
          destination: tourDestinationRef.current
        };
        navigatePath = '/tours';
        break;
      case 'Holiday Packages':
        setHolidayData(prev => ({...prev, from: holidayFromRef.current, to: holidayToRef.current}));
        data = { 
          type: 'holiday', 
          ...holidayData,
          from: holidayFromRef.current,
          to: holidayToRef.current
        };
        navigatePath = '/holiday';
        break;
    }
    
    navigate(navigatePath, { state: data });
  };

  // Calendar Modal Component
  const CalendarModal = () => {
    const [tempStartDate, setTempStartDate] = useState(null);
    const [tempEndDate, setTempEndDate] = useState(null);
    const [isSelectingEndDate, setIsSelectingEndDate] = useState(false);

    const handleDateSelect = (date) => {
      if (!isSelectingEndDate) {
        setTempStartDate(date.formatted);
        setIsSelectingEndDate(true);
        setTempEndDate(null);
      } else {
        setTempEndDate(date.formatted);
        setIsSelectingEndDate(false);
      }
    };

    const handleApply = () => {
      if (modalType.includes('hotels') || modalType.includes('hotels-homes')) {
        if (tempStartDate && tempEndDate) {
          setHotelsData({
            ...hotelsData,
            checkIn: tempStartDate,
            checkOut: tempEndDate
          });
        }
      } else if (modalType.includes('flights')) {
        if (currentDateSelection === 'departure' && tempStartDate) {
          setFlightsData({...flightsData, departure: tempStartDate});
        } else if (currentDateSelection === 'return' && tempEndDate) {
          setFlightsData({...flightsData, returnDate: tempEndDate});
        }
      } else if (modalType.includes('flight-hotel')) {
        if (currentDateSelection === 'departure' && tempStartDate) {
          setFlightHotelData({...flightHotelData, departure: tempStartDate});
        } else if (currentDateSelection === 'return' && tempEndDate) {
          setFlightHotelData({...flightHotelData, return: tempEndDate});
        }
      } else if (modalType.includes('bus') && tempStartDate) {
        setBusData({...busData, departureDate: tempStartDate});
      } else if (modalType.includes('cab')) {
        if (currentDateSelection === 'pickup' && tempStartDate) {
          setCabData({...cabData, pickupDate: tempStartDate});
        } else if (currentDateSelection === 'dropoff' && tempEndDate) {
          setCabData({...cabData, dropoffDate: tempEndDate});
        }
      } else if (modalType.includes('cruise')) {
        if (tempStartDate && tempEndDate) {
          setCruiseData({
            ...cruiseData,
            departureDate: tempStartDate,
            returnDate: tempEndDate
          });
        }
      } else if (modalType.includes('tour')) {
        if (tempStartDate && tempEndDate) {
          setTourData({
            ...tourData,
            checkIn: tempStartDate,
            checkOut: tempEndDate
          });
        }
      } else if (modalType.includes('holiday')) {
        if (tempStartDate && tempEndDate) {
          setHolidayData({
            ...holidayData,
            departure: tempStartDate,
            return: tempEndDate
          });
        }
      }
      
      setShowCalendarModal(false);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                {modalType.includes('hotels') ? 'Select Dates' : 
                 modalType.includes('departure') ? 'Select Departure Date' : 
                 modalType.includes('return') ? 'Select Return Date' :
                 modalType.includes('pickup') ? 'Select Pick-up Date' :
                 'Select Date'}
              </h2>
              <button 
                onClick={() => setShowCalendarModal(false)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
            {modalType.includes('hotels') && (
              <div className="mt-2">
                <p className="text-sm text-gray-600">
                  {isSelectingEndDate 
                    ? 'Now select check-out date' 
                    : 'Select check-in date'}
                </p>
              </div>
            )}
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="space-y-3">
              {datesList.map((dateObj, idx) => {
                const date = dateObj.formatted;
                const isSelectedStart = tempStartDate === date;
                const isSelectedEnd = tempEndDate === date;
                const isInRange = tempStartDate && tempEndDate && 
                  datesList.findIndex(d => d.formatted === tempStartDate) <= idx &&
                  datesList.findIndex(d => d.formatted === tempEndDate) >= idx;

                return (
                  <button
                    key={idx}
                    onClick={() => handleDateSelect(dateObj)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isSelectedStart 
                        ? 'border-blue-500 bg-blue-100' 
                        : isSelectedEnd
                        ? 'border-green-500 bg-green-100'
                        : isInRange
                        ? 'border-blue-200 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-gray-900">{date}</div>
                        <div className="text-sm text-gray-500 mt-1">
                          {idx === 0 ? 'Tomorrow' : idx === 1 ? 'Day after tomorrow' : `In ${idx + 1} days`}
                        </div>
                      </div>
                      {(isSelectedStart || isSelectedEnd) && (
                        <Check size={20} className={isSelectedStart ? "text-blue-600" : "text-green-600"} />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-200">
            <div className="flex items-center justify-between mb-4">
              {tempStartDate && (
                <div className="text-sm">
                  <span className="font-medium text-gray-700">Start:</span>
                  <span className="font-bold text-blue-600 ml-2">{tempStartDate}</span>
                </div>
              )}
              {tempEndDate && (
                <div className="text-sm">
                  <span className="font-medium text-gray-700">End:</span>
                  <span className="font-bold text-green-600 ml-2">{tempEndDate}</span>
                </div>
              )}
            </div>
            <button
              onClick={handleApply}
              disabled={modalType.includes('hotels') && (!tempStartDate || !tempEndDate)}
              className={`w-full py-3 rounded-xl font-bold transition ${
                modalType.includes('hotels') && (!tempStartDate || !tempEndDate)
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {modalType.includes('hotels') 
                ? (tempStartDate && tempEndDate ? `Select ${tempStartDate} - ${tempEndDate}` : 'Select Dates')
                : 'Done'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Guests Modal Component
  const GuestsModal = () => {
    const [tempGuests, setTempGuests] = useState({
      rooms: hotelsData.rooms,
      adults: hotelsData.adults,
      children: hotelsData.children,
    });

    const handleApply = () => {
      if (modalType === 'hotels-guests' || modalType === 'hotels-homes-guests') {
        setHotelsData({...hotelsData, ...tempGuests});
      } else if (modalType === 'flight-hotel-guests') {
        setFlightHotelData({...flightHotelData, ...tempGuests});
      } else if (modalType === 'cruise-guests') {
        setCruiseData({...cruiseData, ...tempGuests});
      } else if (modalType === 'tour-guests') {
        setTourData({...tourData, ...tempGuests});
      } else if (modalType === 'holiday-guests') {
        setHolidayData({...holidayData, ...tempGuests});
      }
      setShowGuestsModal(false);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Rooms & Guests</h2>
              <button 
                onClick={() => setShowGuestsModal(false)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="space-y-6">
              {/* Rooms */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">Rooms</div>
                  <div className="text-sm text-gray-500">Maximum 9 rooms</div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => tempGuests.rooms > 1 && setTempGuests({...tempGuests, rooms: tempGuests.rooms - 1})}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                      tempGuests.rooms > 1 
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <Minus size={18} />
                  </button>
                  <span className="text-2xl font-bold text-gray-900 w-10 text-center">{tempGuests.rooms}</span>
                  <button
                    onClick={() => tempGuests.rooms < 9 && setTempGuests({...tempGuests, rooms: tempGuests.rooms + 1})}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                      tempGuests.rooms < 9 
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Adults */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">Adults</div>
                  <div className="text-sm text-gray-500">Age 18+</div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => tempGuests.adults > 1 && setTempGuests({...tempGuests, adults: tempGuests.adults - 1})}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                      tempGuests.adults > 1 
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <Minus size={18} />
                  </button>
                  <span className="text-2xl font-bold text-gray-900 w-10 text-center">{tempGuests.adults}</span>
                  <button
                    onClick={() => tempGuests.adults < 30 && setTempGuests({...tempGuests, adults: tempGuests.adults + 1})}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                      tempGuests.adults < 30 
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">Children</div>
                  <div className="text-sm text-gray-500">Age 0-17</div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => tempGuests.children > 0 && setTempGuests({...tempGuests, children: tempGuests.children - 1})}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                      tempGuests.children > 0 
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <Minus size={18} />
                  </button>
                  <span className="text-2xl font-bold text-gray-900 w-10 text-center">{tempGuests.children}</span>
                  <button
                    onClick={() => tempGuests.children < 10 && setTempGuests({...tempGuests, children: tempGuests.children + 1})}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                      tempGuests.children < 10 
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-200">
            <button
              onClick={handleApply}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
            >
              Apply ({tempGuests.rooms} room, {tempGuests.adults} adults, {tempGuests.children} children)
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Class Modal Component
  const ClassModal = () => {
    const [tempClass, setTempClass] = useState(flightsData.class);
    const [tempTravelers, setTempTravelers] = useState(flightsData.travelers);

    const handleApply = () => {
      setFlightsData({...flightsData, class: tempClass, travelers: tempTravelers});
      setShowClassModal(false);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Travelers & Class</h2>
              <button 
                onClick={() => setShowClassModal(false)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="space-y-6">
              {/* Travelers */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">Travelers</div>
                  <div className="text-sm text-gray-500">Maximum 9 passengers</div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => tempTravelers > 1 && setTempTravelers(tempTravelers - 1)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                      tempTravelers > 1 
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <Minus size={18} />
                  </button>
                  <span className="text-2xl font-bold text-gray-900 w-10 text-center">{tempTravelers}</span>
                  <button
                    onClick={() => tempTravelers < 9 && setTempTravelers(tempTravelers + 1)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                      tempTravelers < 9 
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                        : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Class */}
              <div>
                <div className="font-bold text-gray-900 mb-3">Class</div>
                <div className="grid grid-cols-2 gap-3">
                  {['Economy', 'Premium', 'Business', 'First'].map(cls => (
                    <button
                      key={cls}
                      onClick={() => setTempClass(cls)}
                      className={`py-3 rounded-xl font-medium transition-all ${
                        tempClass === cls
                          ? 'bg-blue-600 text-white border-2 border-blue-700 shadow-sm'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                      }`}
                    >
                      {cls}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-200">
            <button
              onClick={handleApply}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
            >
              Apply ({tempTravelers} traveler{tempTravelers !== 1 ? 's' : ''}, {tempClass})
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Passenger Modal Component for Bus
  const BusPassengerModal = () => {
    const [tempPassengers, setTempPassengers] = useState(busData.passengers);

    const handleApply = () => {
      setBusData({...busData, passengers: tempPassengers});
      setShowPassengerModal(false);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Passengers</h2>
              <button 
                onClick={() => setShowPassengerModal(false)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-900">Passengers</div>
                <div className="text-sm text-gray-500">Maximum 6 passengers</div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => tempPassengers > 1 && setTempPassengers(tempPassengers - 1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                    tempPassengers > 1 
                      ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                      : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  <Minus size={18} />
                </button>
                <span className="text-2xl font-bold text-gray-900 w-10 text-center">{tempPassengers}</span>
                <button
                  onClick={() => tempPassengers < 6 && setTempPassengers(tempPassengers + 1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                    tempPassengers < 6 
                      ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                      : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-200">
            <button
              onClick={handleApply}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
            >
              Apply ({tempPassengers} passenger{tempPassengers !== 1 ? 's' : ''})
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Port Modal Component for Cruise
  const PortModal = () => {
    const [tempPort, setTempPort] = useState(cruiseData.departurePort);

    const handleApply = () => {
      setCruiseData({...cruiseData, departurePort: tempPort});
      setShowPortModal(false);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Select Departure Port</h2>
              <button 
                onClick={() => setShowPortModal(false)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="space-y-2">
              {cruisePorts.map((port, idx) => (
                <button
                  key={idx}
                  onClick={() => setTempPort(port)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    tempPort === port
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div>
                    <div className="font-bold text-gray-900">{port}</div>
                  </div>
                  {tempPort === port && <Check size={20} className="text-blue-600" />}
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-200">
            <button
              onClick={handleApply}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
            >
              Select Port
            </button>
          </div>
        </div>
      </div>
    );
  };

  // SIMPLE Input Component - Using uncontrolled inputs with defaultValue
  const SimpleInput = ({ 
    label, 
    defaultValue, 
    onChangeRef,
    placeholder, 
    className = "",
    icon: Icon,
    type = "text",
    readOnly = false,
    list,
    name
  }) => {
    const inputRef = useRef(null);

    const handleInput = () => {
      if (inputRef.current && onChangeRef) {
        onChangeRef.current = inputRef.current.value;
      }
    };

    return (
      <div className={`relative ${className}`}>
        {/* FIX: h-full added so SimpleInput box stretches to same height as siblings */}
        <div className={`flex flex-col px-4 py-2 border border-gray-300 rounded-lg focus-within:border-blue-500 transition-all h-full justify-center ${readOnly ? 'bg-gray-50' : 'bg-white'}`}>
          <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">{label}</label>
          <div className="flex items-center">
            {Icon && <Icon size={16} className="text-gray-400 mr-2" />}
            <input 
              ref={inputRef}
              type={type}
              defaultValue={defaultValue}
              onInput={handleInput}
              placeholder={placeholder}
              readOnly={readOnly}
              className="text-[#1a2b48] font-bold text-[15px] outline-none bg-transparent w-full placeholder:font-normal placeholder:text-gray-400"
              list={list}
              name={name}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    );
  };

  // Hotels Tab
  const renderHotelsTab = (isHomes = false) => {
    return (
      // FIX 1: gap-2, no items-stretch — use explicit h-[58px] on all boxes for equal height
      <div className="flex flex-col lg:flex-row gap-2">
        {/* Destination — fixed height */}
        <div className="relative flex-1 mb-2 lg:mb-0">
          <div className="flex flex-col justify-center px-4 border border-gray-300 rounded-lg bg-white focus-within:border-blue-500 transition-all h-[58px]">
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">Destination/Hotel Name</label>
            <div className="flex items-center">
              <MapPin size={16} className="text-gray-400 mr-2 flex-shrink-0" />
              <input
                type="text"
                defaultValue={hotelsData.destination}
                onInput={e => { hotelsDestinationRef.current = e.target.value; }}
                placeholder="City, airport, landmark..."
                className="text-[#1a2b48] font-bold text-[15px] outline-none bg-transparent w-full placeholder:font-normal placeholder:text-gray-400"
                list="destination-suggestions"
                autoComplete="off"
              />
            </div>
          </div>
          <datalist id="destination-suggestions">
            {popularDestinations.map((item, idx) => (
              <option key={idx} value={item.name}>{item.name} ({item.country})</option>
            ))}
          </datalist>
        </div>

        {/* Check-in/Check-out — same fixed height h-[58px] */}
        <div className="flex flex-1 border border-gray-300 rounded-lg mb-2 lg:mb-0 h-[58px] min-w-0">
          <div
            className="flex-1 min-w-0 flex flex-col justify-center px-4 cursor-pointer hover:bg-gray-50 rounded-l-lg"
            onClick={() => {
              setModalType(isHomes ? 'hotels-homes-dates' : 'hotels-dates');
              setCurrentDateSelection('checkin');
              setShowCalendarModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase leading-none mb-0.5">CHECK-IN</label>
            <p className="font-bold text-[15px] text-[#1a2b48] whitespace-nowrap leading-none">{hotelsData.checkIn}</p>
          </div>

          <div className="flex items-center flex-shrink-0">
            <div className="text-[10px] text-gray-600 px-2 py-1 border border-gray-200 rounded-full bg-white font-medium">
              {hotelsData.checkOut ? `${Math.ceil((new Date(hotelsData.checkOut) - new Date(hotelsData.checkIn)) / (1000 * 60 * 60 * 24))} night` : '1 night'}
            </div>
          </div>

          <div
            className="flex-1 min-w-0 flex flex-col justify-center px-4 text-right border-l border-gray-100 cursor-pointer hover:bg-gray-50 rounded-r-lg"
            onClick={() => {
              setModalType(isHomes ? 'hotels-homes-dates' : 'hotels-dates');
              setCurrentDateSelection('checkout');
              setShowCalendarModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase leading-none mb-0.5">CHECK-OUT</label>
            <p className="font-bold text-[15px] text-[#1a2b48] whitespace-nowrap leading-none">{hotelsData.checkOut}</p>
          </div>
        </div>

        {/* Rooms and Guests — same fixed height h-[58px] */}
        <div className="flex-1 mb-2 lg:mb-0">
          <div
            className="flex flex-col justify-center px-4 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white h-[58px]"
            onClick={() => {
              setModalType(isHomes ? 'hotels-homes-guests' : 'hotels-guests');
              setShowGuestsModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight leading-none mb-0.5">
              Rooms and Guests
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px] leading-none">
                {hotelsData.rooms} room, {hotelsData.adults} adults, {hotelsData.children} children
              </span>
              <ChevronDown size={16} className="text-gray-400 flex-shrink-0 ml-1" />
            </div>
          </div>
        </div>

        {/* Search button — same fixed height h-[58px] */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-8 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 whitespace-nowrap flex-shrink-0 h-[58px]"
        >
          <Search size={20} /> SEARCH
        </button>
      </div>
    );
  };

  // Flights Tab
  const renderFlightsTab = () => {
    return (
      <div className="space-y-4">
        {/* Trip Type */}
        <div className="flex flex-wrap gap-4 lg:gap-6 text-sm font-medium mb-2">
          {['Return', 'One-way', 'Multi-city'].map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer select-none">
              <input 
                type="radio" 
                name="trip" 
                checked={flightsData.tripType === type.toLowerCase()}
                onChange={() => setFlightsData({...flightsData, tripType: type.toLowerCase()})}
                className="w-4 h-4 cursor-pointer"
              /> 
              <span className="cursor-pointer">{type}</span>
            </label>
          ))}
        </div>
        
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          {/* From/To with Swap */}
          <div className="flex flex-col lg:flex-row flex-1 gap-1 w-full">
            <div className="relative flex-1 mb-2 lg:mb-0">
              <SimpleInput 
                label="From" 
                defaultValue={flightsData.from}
                onChangeRef={flightsFromRef}
                placeholder="City or airport"
                icon={Navigation}
                list="from-suggestions"
                name="from"
              />
              <datalist id="from-suggestions">
                {popularDestinations.map((item, idx) => (
                  <option key={idx} value={item.name}>
                    {item.name} ({item.code})
                  </option>
                ))}
              </datalist>
            </div>
            
            <div className="flex items-center justify-center lg:justify-normal lg:-mx-4 z-10 mb-2 lg:mb-0">
              <button
                onClick={() => {
                  const temp = flightsFromRef.current;
                  flightsFromRef.current = flightsToRef.current;
                  flightsToRef.current = temp;
                  setFlightsData(prev => ({
                    ...prev,
                    from: flightsFromRef.current,
                    to: flightsToRef.current
                  }));
                }}
                className="p-2 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer hover:bg-gray-50 transition hover:scale-105"
                aria-label="Swap locations"
              >
                <ArrowLeftRight size={16} className="text-blue-500" />
              </button>
            </div>
            
            <div className="relative flex-1">
              <SimpleInput 
                label="To" 
                defaultValue={flightsData.to}
                onChangeRef={flightsToRef}
                placeholder="City or airport"
                icon={Navigation}
                list="to-suggestions"
                name="to"
              />
              <datalist id="to-suggestions">
                {popularDestinations.map((item, idx) => (
                  <option key={idx} value={item.name}>
                    {item.name} ({item.code})
                  </option>
                ))}
              </datalist>
            </div>
          </div>
          
          {/* Dates */}
          <div className="relative flex-1 w-full lg:w-auto mb-2 lg:mb-0">
            <div 
              className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white"
              onClick={() => {
                setModalType('flights-dates');
                setCurrentDateSelection('departure');
                setShowCalendarModal(true);
              }}
            >
              <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
                Departure - Return
              </label>
              <div className="flex items-center justify-between">
                <span className="text-[#1a2b48] font-bold text-[15px]">
                  {flightsData.departure} — {flightsData.returnDate}
                </span>
                <Calendar size={14} className="text-gray-400" />
              </div>
            </div>
          </div>
          
          {/* Travelers & Class */}
          <div className="relative flex-1 lg:flex-[0.7] w-full lg:w-auto mb-2 lg:mb-0">
            <div 
              className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white"
              onClick={() => setShowClassModal(true)}
            >
              <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
                Passengers
              </label>
              <div className="flex items-center justify-between">
                <span className="text-[#1a2b48] font-bold text-[15px]">
                  {flightsData.travelers} adult · {flightsData.class}
                </span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
          
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition whitespace-nowrap w-full lg:w-auto"
          >
            SEARCH
          </button>
        </div>
      </div>
    );
  };

  // Flight + Hotel Tab
  const renderFlightHotelTab = () => {
    return (
      <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        {/* From/To with Swap */}
        <div className="flex flex-col lg:flex-row flex-[1.5] gap-1 w-full mb-2 lg:mb-0">
          <div className="relative flex-1">
            <SimpleInput 
              label="From" 
              defaultValue={flightHotelData.from}
              onChangeRef={flightHotelFromRef}
              placeholder="City or airport"
              icon={Navigation}
              list="flight-from-suggestions"
              name="flight-from"
            />
            <datalist id="flight-from-suggestions">
              {popularDestinations.map((item, idx) => (
                <option key={idx} value={item.name}>
                  {item.name} ({item.code})
                </option>
              ))}
            </datalist>
          </div>
          
          <div className="flex items-center justify-center lg:justify-normal lg:-mx-4 z-10 my-2 lg:my-0">
            <button
              onClick={() => {
                const temp = flightHotelFromRef.current;
                flightHotelFromRef.current = flightHotelToRef.current;
                flightHotelToRef.current = temp;
                setFlightHotelData(prev => ({
                  ...prev,
                  from: flightHotelFromRef.current,
                  to: flightHotelToRef.current
                }));
              }}
              className="p-2 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer hover:bg-gray-50 transition hover:scale-105"
              aria-label="Swap locations"
            >
              <ArrowLeftRight size={16} className="text-blue-500" />
            </button>
          </div>
          
          <div className="relative flex-1">
            <SimpleInput 
              label="To" 
              defaultValue={flightHotelData.to}
              onChangeRef={flightHotelToRef}
              placeholder="City or airport"
              icon={Navigation}
              list="flight-to-suggestions"
              name="flight-to"
            />
            <datalist id="flight-to-suggestions">
              {popularDestinations.map((item, idx) => (
                <option key={idx} value={item.name}>
                  {item.name} ({item.code})
                </option>
              ))}
            </datalist>
          </div>
        </div>
        
        {/* Dates */}
        <div className="relative flex-1 mb-2 lg:mb-0">
          <div 
            className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white h-full justify-center"
            onClick={() => {
              setModalType('flight-hotel-dates');
              setCurrentDateSelection('departure');
              setShowCalendarModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
              Depart - Return
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {flightHotelData.departure} — {flightHotelData.return}
              </span>
              <Calendar size={14} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Rooms & Guests */}
        <div className="relative flex-1 mb-2 lg:mb-0">
          <div 
            className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white h-full justify-center"
            onClick={() => {
              setModalType('flight-hotel-guests');
              setShowGuestsModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
              Rooms & Guests
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {flightHotelData.rooms} room, {flightHotelData.adults} adults
              </span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <Search size={20}/> Search
        </button>
      </div>
    );
  };

  // Bus Tab
  const renderBusTab = () => {
    return (
      <div className="flex flex-col lg:flex-row gap-2 items-center">
        {/* From/To with Swap */}
        <div className="flex flex-col lg:flex-row flex-[2] gap-1 w-full mb-2 lg:mb-0">
          <div className="relative flex-1">
            <SimpleInput 
              label="From" 
              defaultValue={busData.from}
              onChangeRef={busFromRef}
              placeholder="Departure Bus Station"
              icon={Bus}
              list="bus-from-suggestions"
              name="bus-from"
            />
            <datalist id="bus-from-suggestions">
              {busStations.map((station, idx) => (
                <option key={idx} value={station} />
              ))}
            </datalist>
          </div>
          
          <div className="flex items-center justify-center lg:justify-normal lg:-mx-3 z-10 my-2 lg:my-0">
            <button
              onClick={() => {
                const temp = busFromRef.current;
                busFromRef.current = busToRef.current;
                busToRef.current = temp;
                setBusData(prev => ({
                  ...prev,
                  from: busFromRef.current,
                  to: busToRef.current
                }));
              }}
              className="p-1.5 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer hover:bg-gray-50 transition hover:scale-105"
              aria-label="Swap stations"
            >
              <ArrowLeftRight size={14} className="text-blue-400" />
            </button>
          </div>
          
          <div className="relative flex-1">
            <SimpleInput 
              label="To" 
              defaultValue={busData.to}
              onChangeRef={busToRef}
              placeholder="Arrival Bus Station"
              icon={Bus}
              list="bus-to-suggestions"
              name="bus-to"
            />
            <datalist id="bus-to-suggestions">
              {busStations.map((station, idx) => (
                <option key={idx} value={station} />
              ))}
            </datalist>
          </div>
        </div>
        
        {/* Departure Date */}
        <div className="flex flex-1 border border-gray-300 rounded-lg hover:border-gray-400 transition-all w-full lg:w-auto mb-2 lg:mb-0">
          <div 
            className="relative flex-1 px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-lg"
            onClick={() => {
              setModalType('bus-date');
              setCurrentDateSelection('departure');
              setShowCalendarModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase">DEPARTURE DATE</label>
            <div className="flex items-center justify-between">
              <p className="font-bold text-[#1a2b48] whitespace-nowrap">{busData.departureDate}</p>
              <Calendar size={14} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Passengers */}
        <div className="flex-1 mb-2 lg:mb-0">
          <div 
            className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white"
            onClick={() => {
              setModalType('bus-passengers');
              setShowPassengerModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
              Passengers
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {busData.passengers} passenger{busData.passengers !== 1 ? 's' : ''}
              </span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 whitespace-nowrap w-full lg:w-auto"
        >
          <Search size={20}/> Search
        </button>
      </div>
    );
  };

  // Cab Tab
  const renderCabTab = () => {
    return (
      <div className="space-y-4">
        <div className="flex flex-col lg:flex-row gap-2 items-stretch">
          {/* Pickup Location */}
          <div className="relative flex-1 lg:flex-[1.5] mb-2 lg:mb-0">
            <SimpleInput 
              label="Pick-up location" 
              defaultValue={cabData.pickup}
              onChangeRef={cabPickupRef}
              placeholder="Airport, city, or address"
              icon={MapPin}
              list="pickup-suggestions"
              name="pickup"
            />
            <datalist id="pickup-suggestions">
              {popularDestinations.map((item, idx) => (
                <option key={idx} value={item.name}>
                  {item.name} ({item.code})
                </option>
              ))}
            </datalist>
          </div>
          
          {/* Dates */}
          <div className="flex flex-1 border border-gray-300 rounded-lg hover:border-gray-400 transition-all mb-2 lg:mb-0">
            <div 
              className="flex-1 px-4 py-2 border-r border-gray-100 cursor-pointer hover:bg-gray-50 rounded-l-lg"
              onClick={() => {
                setModalType('cab-pickup');
                setCurrentDateSelection('pickup');
                setShowCalendarModal(true);
              }}
            >
              <label className="text-[11px] text-gray-500 font-medium uppercase">PICK-UP DATE</label>
              <p className="font-bold text-[15px] text-[#1a2b48] whitespace-nowrap">{cabData.pickupDate}</p>
            </div>
            <div 
              className="flex-1 px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-r-lg"
              onClick={() => {
                setModalType('cab-dropoff');
                setCurrentDateSelection('dropoff');
                setShowCalendarModal(true);
              }}
            >
              <label className="text-[11px] text-gray-500 font-medium uppercase">DROP-OFF DATE</label>
              <p className="font-bold text-[15px] text-[#1a2b48] whitespace-nowrap">{cabData.dropoffDate}</p>
            </div>
          </div>
          
          {/* License Country */}
          <div className="flex-1 mb-2 lg:mb-0">
            <div className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all bg-white h-full justify-center">
              <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
                Driving licence country
              </label>
              <select
                value={cabData.licenseCountry}
                onChange={(e) => setCabData({...cabData, licenseCountry: e.target.value})}
                className="text-[#1a2b48] font-bold text-[15px] outline-none bg-transparent w-full cursor-pointer"
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
          </div>
          
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Search size={20}/> Search
          </button>
        </div>
        
        {/* Options */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
            <input
              type="checkbox"
              id="differentLocation"
              checked={cabData.differentLocation}
              onChange={(e) => setCabData({...cabData, differentLocation: e.target.checked})}
              className="h-4 w-4 cursor-pointer"
            />
            Drop off at a different location
          </label>
        </div>
      </div>
    );
  };

  // Cruise Tab
  const renderCruiseTab = () => {
    return (
      <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        {/* Destination */}
        <div className="relative flex-1 lg:flex-[1.5] mb-2 lg:mb-0">
          <SimpleInput 
            label="Cruise Destination" 
            defaultValue={cruiseData.destination}
            onChangeRef={cruiseDestinationRef}
            placeholder="Enter cruise destination"
            icon={Ship}
            list="cruise-destinations"
            name="cruise-destination"
          />
          <datalist id="cruise-destinations">
            {cruisePorts.map((port, idx) => (
              <option key={idx} value={port} />
            ))}
          </datalist>
        </div>

        {/* Departure Port */}
        <div className="flex-1 mb-2 lg:mb-0">
          <div 
            className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white h-full justify-center"
            onClick={() => setShowPortModal(true)}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
              Departure Port
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {cruiseData.departurePort}
              </span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="flex flex-1 border border-gray-300 rounded-lg items-center mb-2 lg:mb-0">
          <div 
            className="flex-1 px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-l-lg"
            onClick={() => {
              setModalType('cruise-dates');
              setCurrentDateSelection('departure');
              setShowCalendarModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase">DEPARTURE</label>
            <p className="font-bold text-[15px] text-[#1a2b48] whitespace-nowrap">{cruiseData.departureDate}</p>
          </div>
          
          <div 
            className="flex-1 px-4 py-2 text-right border-l border-gray-100 cursor-pointer hover:bg-gray-50 rounded-r-lg"
            onClick={() => {
              setModalType('cruise-dates');
              setCurrentDateSelection('return');
              setShowCalendarModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase">RETURN</label>
            <p className="font-bold text-[15px] text-[#1a2b48] whitespace-nowrap">{cruiseData.returnDate}</p>
          </div>
        </div>

        {/* Rooms and Guests */}
        <div className="flex-1 mb-2 lg:mb-0">
          <div 
            className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white h-full justify-center"
            onClick={() => {
              setModalType('cruise-guests');
              setShowGuestsModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
              Cabins & Guests
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {cruiseData.rooms} cabin, {cruiseData.adults} adults, {cruiseData.children} children
              </span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-10 py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <Search size={20} /> SEARCH
        </button>
      </div>
    );
  };

  // Tour Tab
  const renderTourTab = () => {
    return (
      <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        {/* Destination */}
        <div className="relative flex-1 lg:flex-[1.5] mb-2 lg:mb-0">
          <SimpleInput 
            label="Tour Destination" 
            defaultValue={tourData.destination}
            onChangeRef={tourDestinationRef}
            placeholder="Enter tour destination"
            icon={Umbrella}
            list="tour-destinations"
            name="tour-destination"
          />
          <datalist id="tour-destinations">
            {tourDestinations.map((tour, idx) => (
              <option key={idx} value={tour} />
            ))}
          </datalist>
        </div>

        {/* Check-in/Check-out */}
        <div className="flex flex-1 border border-gray-300 rounded-lg items-center mb-2 lg:mb-0">
          <div 
            className="flex-1 px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-l-lg"
            onClick={() => {
              setModalType('tour-dates');
              setCurrentDateSelection('checkin');
              setShowCalendarModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase">START DATE</label>
            <p className="font-bold text-[15px] text-[#1a2b48] whitespace-nowrap">{tourData.checkIn}</p>
          </div>
          
          <div 
            className="flex-1 px-4 py-2 text-right border-l border-gray-100 cursor-pointer hover:bg-gray-50 rounded-r-lg"
            onClick={() => {
              setModalType('tour-dates');
              setCurrentDateSelection('checkout');
              setShowCalendarModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase">END DATE</label>
            <p className="font-bold text-[15px] text-[#1a2b48] whitespace-nowrap">{tourData.checkOut}</p>
          </div>
        </div>

        {/* Guests */}
        <div className="flex-1 mb-2 lg:mb-0">
          <div 
            className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white h-full justify-center"
            onClick={() => {
              setModalType('tour-guests');
              setShowGuestsModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
              Guests
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {tourData.adults} adults, {tourData.children} children
              </span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-10 py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <Search size={20} /> SEARCH
        </button>
      </div>
    );
  };

  // Holiday Tab
  const renderHolidayTab = () => {
    return (
      <div className="flex flex-col lg:flex-row gap-2 items-stretch">
        {/* From/To with Swap */}
        <div className="flex flex-col lg:flex-row flex-[1.5] gap-1 w-full mb-2 lg:mb-0">
          <div className="relative flex-1">
            <SimpleInput 
              label="From" 
              defaultValue={holidayData.from}
              onChangeRef={holidayFromRef}
              placeholder="Departure city"
              icon={Navigation}
              list="holiday-from-suggestions"
              name="holiday-from"
            />
            <datalist id="holiday-from-suggestions">
              {popularDestinations.map((item, idx) => (
                <option key={idx} value={item.name}>
                  {item.name} ({item.code})
                </option>
              ))}
            </datalist>
          </div>
          
          <div className="flex items-center justify-center lg:justify-normal lg:-mx-4 z-10 my-2 lg:my-0">
            <button
              onClick={() => {
                const temp = holidayFromRef.current;
                holidayFromRef.current = holidayToRef.current;
                holidayToRef.current = temp;
                setHolidayData(prev => ({
                  ...prev,
                  from: holidayFromRef.current,
                  to: holidayToRef.current
                }));
              }}
              className="p-2 bg-white border border-gray-300 rounded-full shadow-sm cursor-pointer hover:bg-gray-50 transition hover:scale-105"
              aria-label="Swap locations"
            >
              <ArrowLeftRight size={16} className="text-blue-500" />
            </button>
          </div>
          
          <div className="relative flex-1">
            <SimpleInput 
              label="To" 
              defaultValue={holidayData.to}
              onChangeRef={holidayToRef}
              placeholder="Destination"
              icon={Palmtree}
              list="holiday-to-suggestions"
              name="holiday-to"
            />
            <datalist id="holiday-to-suggestions">
              {popularDestinations.map((item, idx) => (
                <option key={idx} value={item.name}>
                  {item.name} ({item.country})
                </option>
              ))}
            </datalist>
          </div>
        </div>
        
        {/* Dates */}
        <div className="relative flex-1 mb-2 lg:mb-0">
          <div 
            className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white h-full justify-center"
            onClick={() => {
              setModalType('holiday-dates');
              setCurrentDateSelection('departure');
              setShowCalendarModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
              Depart - Return
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {holidayData.departure} — {holidayData.return}
              </span>
              <Calendar size={14} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Rooms & Guests */}
        <div className="relative flex-1 mb-2 lg:mb-0">
          <div 
            className="flex flex-col px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-all cursor-pointer bg-white h-full justify-center"
            onClick={() => {
              setModalType('holiday-guests');
              setShowGuestsModal(true);
            }}
          >
            <label className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
              Rooms & Guests
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[#1a2b48] font-bold text-[15px]">
                {holidayData.rooms} room, {holidayData.adults} adults, {holidayData.children} children
              </span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <Search size={20}/> Search
        </button>
      </div>
    );
  };

  return (
    <div className="w-full min-h-[500px] bg-blue-900 bg-cover bg-center flex flex-col items-center pt-16 px-4" 
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1608332311307-2d533ae0fd2d?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      
      {/* Tab Navigation */}
      <div className="bg-[#0a1121]/80 backdrop-blur-md p-0.5 rounded-full flex flex-wrap justify-center items-center mb-0 border border-white/10 max-w-8xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.name);
              setShowCalendarModal(false);
              setShowGuestsModal(false);
              setShowClassModal(false);
              setShowTimeModal(false);
              setShowCityModal(false);
              setShowPassengerModal(false);
              setShowPortModal(false);
            }}
            className={`flex items-center gap-2 px-3 lg:px-5 py-2 lg:py-2.5 rounded-full text-[12px] lg:text-[14px] font-bold transition-all my-1 mx-1 ${
              activeTab === tab.name ? 'bg-white text-blue-900 shadow-md' : 'text-white hover:bg-white/10'
            }`}
          >
            {tab.icon} <span className="hidden sm:inline">{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Main Search Container */}
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-2xl p-4 lg:p-6 relative mt-4 transition-all duration-300">
        {activeTab === 'Hotels' && renderHotelsTab(false)}
        {activeTab === 'Homestay & Villas' && renderHotelsTab(true)}
        {activeTab === 'Flights' && renderFlightsTab()}
        {activeTab === 'Flights + Hotel' && renderFlightHotelTab()}
        {activeTab === 'Bus' && renderBusTab()}
        {activeTab === 'Cab' && renderCabTab()}
        {activeTab === 'Cruise' && renderCruiseTab()}
        {activeTab === 'Tour & Attraction' && renderTourTab()}
        {activeTab === 'Holiday Packages' && renderHolidayTab()}
      </div>

      {/* Modals */}
      {showCalendarModal && <CalendarModal />}
      {showGuestsModal && <GuestsModal />}
      {showClassModal && <ClassModal />}
      {showPassengerModal && modalType === 'bus-passengers' && <BusPassengerModal />}
      {showPortModal && <PortModal />}
    </div>
  );
};

export default Hero;