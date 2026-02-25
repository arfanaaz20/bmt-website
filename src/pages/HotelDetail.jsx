import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Star, MapPin, Wifi, Coffee, ChevronLeft, Check, 
  Info, Heart, Share2, ShieldCheck, Waves, Car,
  Dumbbell, Sparkles, ChefHat, ShoppingBag, Users,
  Calendar, ChevronRight, X, Plus, Minus,
  Clock, Award, Shield, Maximize2, Navigation,
  Phone, Mail, Globe, CreditCard, Bed, Bath
} from 'lucide-react';

const HotelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGuestsPicker, setShowGuestsPicker] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [checkInDate, setCheckInDate] = useState(new Date(2026, 1, 14));
  const [checkOutDate, setCheckOutDate] = useState(new Date(2026, 1, 16));
  const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const getHotelData = () => {
    const hotels = [
      {
        id: 1,
        name: "Grand Hyatt Mumbai",
        stars: 5,
        address: "Bandra Kurla Complex, Mumbai, 400051, India",
        rating: 4.8,
        ratingText: "Excellent",
        reviews: "1,248",
        description: "A sanctuary of luxury in the heart of Mumbai's business district.",
        detailedDescription: "Experience unparalleled luxury at Grand Hyatt Mumbai. Our award-winning hotel combines traditional Indian hospitality with modern luxury. Enjoy panoramic city views from our infinity pool, indulge in world-class dining at our 5 restaurants, or unwind at our 10,000 sq ft spa. Perfectly situated for both business and leisure travelers.",
        images: [
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600",
          "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=600",
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600",
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600"
        ],
        amenities: [
          { id: 'wifi', name: "Free High-Speed WiFi", icon: <Wifi size={20} />, description: "Available throughout the property" },
          { id: 'pool', name: "Infinity Swimming Pool", icon: <Waves size={20} />, description: "Heated pool with city view" },
          { id: 'parking', name: "Valet Parking", icon: <Car size={20} />, description: "Complimentary for guests" },
          { id: 'breakfast', name: "Gourmet Breakfast", icon: <Coffee size={20} />, description: "Buffet & à la carte options" },
          { id: 'gym', name: "24/7 Fitness Center", icon: <Dumbbell size={20} />, description: "State-of-the-art equipment" },
          { id: 'spa', name: "Luxury Spa", icon: <Sparkles size={20} />, description: "Full-service wellness center" },
          { id: 'restaurant', name: "5 Restaurants", icon: <ChefHat size={20} />, description: "International & local cuisine" },
          { id: 'shop', name: "Shopping Arcade", icon: <ShoppingBag size={20} />, description: "Premium brand stores" },
          { id: 'concierge', name: "24-Hour Concierge", icon: <Clock size={20} />, description: "Personalized service" },
          { id: 'business', name: "Business Center", icon: <Globe size={20} />, description: "Full office facilities" },
          { id: 'kids', name: "Kids Club", icon: <Users size={20} />, description: "Supervised activities" },
          { id: 'pets', name: "Pet Friendly", icon: <ShieldCheck size={20} />, description: "Special amenities for pets" }
        ],
        rooms: [
          {
            id: 1,
            name: "Deluxe King Room",
            description: "Spacious room with king bed and city view",
            size: "45 m²",
            occupancy: "2 adults",
            bed: "1 King Bed",
            amenities: ["Free WiFi", "Mini Bar", "Coffee Maker", "Safe"],
            price: 12500,
            discountPrice: 9999,
            images: ["https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600"],
            available: 3
          },
          {
            id: 2,
            name: "Executive Suite",
            description: "Luxurious suite with separate living area",
            size: "85 m²",
            occupancy: "3 adults",
            bed: "1 King Bed + 1 Sofa Bed",
            amenities: ["Free WiFi", "Mini Bar", "Nespresso", "Bathrobe", "Evening Cocktails"],
            price: 22000,
            discountPrice: 18500,
            images: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600"],
            available: 1
          },
          {
            id: 3,
            name: "Presidential Suite",
            description: "Ultimate luxury with panoramic views",
            size: "220 m²",
            occupancy: "4 adults",
            bed: "2 King Beds",
            amenities: ["Private Butler", "Jacuzzi", "Private Dining", "Limousine Service"],
            price: 65000,
            discountPrice: 55000,
            images: ["https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600"],
            available: 1
          }
        ],
        policies: [
          "Check-in: 3:00 PM",
          "Check-out: 12:00 PM",
          "Free cancellation until 48 hours before check-in",
          "No smoking",
          "Pets allowed with additional fee",
          "Credit cards accepted"
        ],
        reviewsData: {
          average: 4.8,
          categories: [
            { name: "Cleanliness", score: 9.4 },
            { name: "Comfort", score: 9.2 },
            { name: "Location", score: 9.5 },
            { name: "Facilities", score: 9.0 },
            { name: "Staff", score: 9.3 },
            { name: "Value", score: 8.8 }
          ],
          highlights: [
            "96% of guests recommend this property",
            "Exceptional service mentioned in 423 reviews",
            "Best location in Mumbai according to 892 guests"
          ]
        },
        trustBadges: [
          { icon: <Shield size={20} />, title: "Price Match Guarantee", desc: "We'll match any lower price" },
          { icon: <Award size={20} />, title: "Verified Reviews", desc: "From real guests like you" },
          { icon: <Clock size={20} />, title: "24/7 Support", desc: "Always here to help" }
        ]
      },
      {
        id: 2,
        name: "Taj Lands End",
        stars: 5,
        address: "Bandra West, Mumbai, 400050, India",
        rating: 4.9,
        ratingText: "Exceptional",
        reviews: "856",
        description: "Experience royal hospitality with breathtaking views of the Arabian Sea.",
        detailedDescription: "Located on the edge of the Arabian Sea, Taj Lands End offers breathtaking ocean views and luxurious accommodations. Enjoy direct beach access, multiple swimming pools, and award-winning restaurants. The property combines traditional Indian architecture with modern luxury amenities.",
        images: [
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200",
          "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=600",
          "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600",
          "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600"
        ],
        amenities: [
          { id: 'wifi', name: "Free High-Speed WiFi", icon: <Wifi size={20} />, description: "Available throughout the property" },
          { id: 'pool', name: "Infinity Swimming Pool", icon: <Waves size={20} />, description: "Heated pool with ocean view" },
          { id: 'spa', name: "Luxury Spa", icon: <Sparkles size={20} />, description: "Full-service wellness center" },
          { id: 'restaurant', name: "4 Restaurants", icon: <ChefHat size={20} />, description: "International & local cuisine" },
          { id: 'beach', name: "Private Beach Access", icon: <Waves size={20} />, description: "Direct access to beach" }
        ],
        rooms: [
          {
            id: 1,
            name: "Sea View Room",
            description: "Room with stunning views of the Arabian Sea",
            size: "48 m²",
            occupancy: "2 adults",
            bed: "1 King Bed",
            amenities: ["Free WiFi", "Mini Bar", "Coffee Maker", "Safe", "Sea View"],
            price: 18000,
            discountPrice: 14999,
            images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600"],
            available: 2
          }
        ],
        policies: [
          "Check-in: 2:00 PM",
          "Check-out: 12:00 PM",
          "Free cancellation until 72 hours before check-in",
          "No smoking",
          "Pets not allowed",
          "Credit cards accepted"
        ],
        reviewsData: {
          average: 4.9,
          categories: [
            { name: "Cleanliness", score: 9.6 },
            { name: "Comfort", score: 9.4 },
            { name: "Location", score: 9.8 },
            { name: "Facilities", score: 9.2 },
            { name: "Staff", score: 9.7 },
            { name: "Value", score: 9.0 }
          ],
          highlights: [
            "98% of guests recommend this property",
            "Best beach location in Mumbai",
            "Exceptional service mentioned in 520 reviews"
          ]
        },
        trustBadges: [
          { icon: <Shield size={20} />, title: "Price Match Guarantee", desc: "We'll match any lower price" },
          { icon: <Award size={20} />, title: "Verified Reviews", desc: "From real guests like you" },
          { icon: <Clock size={20} />, title: "24/7 Support", desc: "Always here to help" }
        ]
      }
    ];

    const foundHotel = hotels.find(h => h.id === parseInt(id));
    return foundHotel || hotels[0];
  };

  const hotel = getHotelData();

  const amenitiesToShow = showAllAmenities ? hotel.amenities : hotel.amenities.slice(0, 8);

  const handleGuestChange = (type, operation) => {
    setGuests(prev => ({
      ...prev,
      [type]: operation === 'add' 
        ? prev[type] + 1 
        : Math.max(type === 'children' ? 0 : 1, prev[type] - 1)
    }));
  };

  const calculateNights = () => {
    const diffTime = Math.abs(checkOutDate - checkInDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const calculateTotal = (roomPrice) => {
    const nights = calculateNights();
    return roomPrice * nights;
  };

  const PhotoGalleryModal = () => {
    if (!showAllPhotos) return null;

    return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col">
        <div className="p-4 flex justify-between items-center bg-black/90">
          <h3 className="text-white font-bold text-lg">Photo Gallery</h3>
          <button 
            onClick={() => setShowAllPhotos(false)}
            className="text-white p-2 hover:bg-white/10 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-4">
            {hotel.images.map((img, idx) => (
              <img 
                key={idx}
                src={img}
                alt={`Hotel ${idx + 1}`}
                className="w-full mb-4 rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setCurrentImage(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const DatePickerModal = () => {
    if (!showDatePicker) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Select Dates</h3>
              <button onClick={() => setShowDatePicker(false)} className="text-slate-500 hover:text-slate-700">
                <X size={24} />
              </button>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-sm font-bold text-blue-800">Select your check-in and check-out dates</p>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-all">
              Apply Selected Dates
            </button>
          </div>
        </div>
      </div>
    );
  };

  const GuestsPickerModal = () => {
    if (!showGuestsPicker) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Select Guests</h3>
              <button onClick={() => setShowGuestsPicker(false)} className="text-slate-500 hover:text-slate-700">
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-6">
              {['adults', 'children', 'rooms'].map((item) => (
                <div key={item} className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-slate-800 capitalize">{item}</p>
                    <p className="text-sm text-slate-500">
                      {item === 'adults' ? 'Ages 13 or above' : 
                       item === 'children' ? 'Ages 2-12' : 
                       'Number of rooms'}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleGuestChange(item, 'sub')}
                      className="w-8 h-8 flex items-center justify-center border border-slate-300 rounded-lg hover:bg-slate-50"
                    >
                      <Minus size={16} className="text-slate-600" />
                    </button>
                    <span className="w-8 text-center font-bold">{guests[item]}</span>
                    <button
                      onClick={() => handleGuestChange(item, 'add')}
                      className="w-8 h-8 flex items-center justify-center border border-slate-300 rounded-lg hover:bg-slate-50"
                    >
                      <Plus size={16} className="text-slate-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowGuestsPicker(false)}
              className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-all"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    );
  };

  const handleReserve = () => {
    if (!selectedRoom) {
      alert('Please select a room first');
      return;
    }

    const bookingData = {
      hotelId: hotel.id,
      hotelName: hotel.name,
      roomId: selectedRoom,
      roomName: hotel.rooms.find(r => r.id === selectedRoom)?.name,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests: guests,
      total: calculateTotal(hotel.rooms.find(r => r.id === selectedRoom)?.discountPrice) + 2850 + 1200,
      nights: calculateNights()
    };

    console.log('Booking Data:', bookingData);
    alert(`Booking confirmed for ${hotel.name}! Total: ₹${bookingData.total.toLocaleString()}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <PhotoGalleryModal />
      <DatePickerModal />
      <GuestsPickerModal />

      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)} 
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <span className="font-bold text-slate-700 hidden md:inline">Back to hotels</span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setWishlisted(!wishlisted)}
              className={`p-2 rounded-full transition-all ${wishlisted ? 'text-rose-500' : 'text-slate-400 hover:text-rose-500'}`}
            >
              <Heart size={20} fill={wishlisted ? "currentColor" : "none"} />
            </button>
            <button className="p-2 text-slate-400 hover:text-blue-600 rounded-full transition-colors">
              <Share2 size={20} />
            </button>
            <button 
              onClick={() => setShowAllPhotos(true)}
              className="p-2 text-slate-400 hover:text-blue-600 rounded-full transition-colors"
            >
              <Maximize2 size={20} />
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-amber-400">
                  {[...Array(hotel.stars)].map((_, i) => 
                    <Star key={i} size={14} fill="currentColor" />
                  )}
                </div>
                <span className="text-xs text-slate-500 font-medium">• {hotel.reviews} reviews</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{hotel.name}</h1>
              <div className="flex items-center text-sm text-slate-600 mb-1">
                <MapPin size={16} className="mr-2 text-blue-500" />
                <span>{hotel.address}</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-semibold">
                  <Navigation size={16} />
                  Show on map
                </button>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-semibold">
                  <Phone size={16} />
                  Contact hotel
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Guest Rating</p>
                <p className="font-bold text-lg text-slate-900">{hotel.ratingText}</p>
                <p className="text-xs text-slate-500">{hotel.reviews} verified reviews</p>
              </div>
              <div className="bg-blue-600 text-white font-bold h-14 w-14 flex flex-col items-center justify-center rounded-xl">
                <span className="text-xl leading-none">{hotel.rating}</span>
                <div className="flex">
                  <Star size={10} fill="white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[400px] md:h-[500px] mb-8">
          <div 
            className="col-span-2 row-span-2 relative group cursor-pointer rounded-xl overflow-hidden"
            onClick={() => setCurrentImage(0)}
          >
            <img 
              src={hotel.images[0]} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              alt="Main view" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          {hotel.images.slice(1, 4).map((img, idx) => (
            <div 
              key={idx + 1}
              className="relative group cursor-pointer rounded-xl overflow-hidden"
              onClick={() => setCurrentImage(idx + 1)}
            >
              <img 
                src={img} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt={`Hotel ${idx + 2}`} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
          <div 
            className="relative group cursor-pointer rounded-xl overflow-hidden"
            onClick={() => setShowAllPhotos(true)}
          >
            <img 
              src={hotel.images[4] || hotel.images[hotel.images.length - 1]} 
              className="w-full h-full object-cover brightness-75" 
              alt="More photos" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <span className="text-2xl font-bold">+{hotel.images.length - 4}</span>
              <span className="text-sm">View all photos</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About this hotel</h2>
              <p className="text-slate-700 leading-relaxed mb-6">{hotel.description}</p>
              <p className="text-slate-600 leading-relaxed">{hotel.detailedDescription}</p>
            </section>

            <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Hotel Amenities</h2>
                <button 
                  onClick={() => setShowAllAmenities(!showAllAmenities)}
                  className="text-blue-600 text-sm font-semibold hover:text-blue-700"
                >
                  {showAllAmenities ? 'Show less' : 'Show all'}
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {amenitiesToShow.map((amenity, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors">
                    <div className="text-blue-600 p-2 bg-blue-50 rounded-lg">
                      {amenity.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{amenity.name}</p>
                      <p className="text-sm text-slate-500 mt-1">{amenity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Available Rooms</h2>
              <div className="space-y-6">
                {hotel.rooms.map(room => (
                  <div 
                    key={room.id}
                    className={`border rounded-xl p-6 transition-all ${selectedRoom === room.id ? 'border-blue-500 bg-blue-50/50' : 'border-slate-200 hover:border-slate-300'}`}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-48 shrink-0">
                        <img 
                          src={room.images[0]} 
                          alt={room.name} 
                          className="w-full h-40 object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{room.name}</h3>
                            <p className="text-slate-600 mb-4">{room.description}</p>
                            <div className="flex flex-wrap gap-4 mb-4">
                              <div className="flex items-center gap-2 text-sm text-slate-500">
                                <span>{room.size}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-slate-500">
                                <Users size={16} />
                                <span>{room.occupancy}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-slate-500">
                                <Bed size={16} />
                                <span>{room.bed}</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {room.amenities.map((am, idx) => (
                                <span 
                                  key={idx}
                                  className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                                >
                                  <Check size={12} />
                                  {am}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-bold text-slate-400 line-through">
                                ₹{room.price.toLocaleString()}
                              </span>
                              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                                Save {Math.round((1 - room.discountPrice/room.price) * 100)}%
                              </span>
                            </div>
                            <div className="text-3xl font-bold text-slate-900 mb-2">
                              ₹{room.discountPrice.toLocaleString()}
                              <span className="text-sm text-slate-500 font-normal"> /night</span>
                            </div>
                            <p className="text-xs text-slate-500 mb-4">
                              + taxes and fees • {room.available} room{room.available !== 1 ? 's' : ''} left
                            </p>
                            <button
                              onClick={() => setSelectedRoom(room.id)}
                              className={`px-6 py-3 rounded-lg font-bold transition-all ${selectedRoom === room.id ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}
                            >
                              {selectedRoom === room.id ? 'Selected' : 'Select Room'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Guest Reviews</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {hotel.reviewsData?.categories?.map((cat, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-600 mb-2">{cat.name}</p>
                    <div className="flex items-center justify-between">
                      <div className="w-3/4 bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${cat.score * 10}%` }}
                        />
                      </div>
                      <span className="font-bold text-slate-900">{cat.score}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {hotel.reviewsData?.highlights?.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 shrink-0 mt-0.5" />
                    <p className="text-slate-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-md">
                <h3 className="font-bold text-lg mb-4">Select Dates & Guests</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase mb-2">Dates</p>
                    <button 
                      onClick={() => setShowDatePicker(true)}
                      className="w-full p-3 border border-slate-200 rounded-lg text-left hover:border-slate-300 transition-colors flex items-center justify-between"
                    >
                      <div>
                        <p className="text-sm text-slate-500">Check-in — Check-out</p>
                        <p className="font-bold text-slate-800">
                          {checkInDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} — 
                          {checkOutDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                      </div>
                      <Calendar size={20} className="text-slate-400" />
                    </button>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase mb-2">Guests</p>
                    <button 
                      onClick={() => setShowGuestsPicker(true)}
                      className="w-full p-3 border border-slate-200 rounded-lg text-left hover:border-slate-300 transition-colors flex items-center justify-between"
                    >
                      <div>
                        <p className="text-sm text-slate-500">Travelers</p>
                        <p className="font-bold text-slate-800">
                          {guests.adults} Adult{guests.adults !== 1 ? 's' : ''}, {guests.children} Child{guests.children !== 1 ? 'ren' : ''}
                        </p>
                      </div>
                      <Users size={20} className="text-slate-400" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-md">
                <h3 className="font-bold text-lg mb-6">Booking Summary</h3>
                {selectedRoom ? (
                  <>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-bold text-slate-800">
                            {hotel.rooms.find(r => r.id === selectedRoom)?.name}
                          </p>
                          <p className="text-sm text-slate-500">
                            {calculateNights()} night{calculateNights() !== 1 ? 's' : ''} • {guests.adults} adult{guests.adults !== 1 ? 's' : ''}
                          </p>
                        </div>
                        <span className="font-bold text-slate-900">
                          ₹{calculateTotal(hotel.rooms.find(r => r.id === selectedRoom)?.discountPrice).toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Room price ({calculateNights()} nights)</span>
                          <span className="font-medium">
                            ₹{calculateTotal(hotel.rooms.find(r => r.id === selectedRoom)?.discountPrice).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Taxes and fees</span>
                          <span className="font-medium">₹2,850</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Service charge</span>
                          <span className="font-medium">₹1,200</span>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-slate-900">Total</span>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-slate-900">
                              ₹{(calculateTotal(hotel.rooms.find(r => r.id === selectedRoom)?.discountPrice) + 2850 + 1200).toLocaleString()}
                            </div>
                            <p className="text-xs text-slate-500">Includes all charges</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={handleReserve}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg mt-6 transition-all flex items-center justify-center gap-2"
                    >
                      Reserve Now
                      <ChevronRight size={20} />
                    </button>
                    
                    <p className="text-center text-xs text-slate-500 mt-4">
                      Free cancellation until {new Date(checkInDate.getTime() - 48*60*60*1000).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Info size={32} className="mx-auto text-slate-300 mb-4" />
                    <p className="text-slate-600 font-medium">Select a room to see pricing</p>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                {hotel.trustBadges.map((badge, idx) => (
                  <div key={idx} className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl flex items-start gap-3">
                    <div className="text-blue-600 bg-white p-2 rounded-lg shadow-sm">
                      {badge.icon}
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-blue-900">{badge.title}</h5>
                      <p className="text-xs text-blue-700/70">{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4">Hotel Policies</h4>
                <ul className="space-y-2">
                  {hotel.policies.map((policy, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                      {policy}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HotelDetail;