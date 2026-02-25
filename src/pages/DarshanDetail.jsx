import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, Clock, Users, X, ChevronRight, Star, Church, 
  Bell, Calendar, Phone, Mail, User, Gift, Shield, 
  Car, Coffee, Camera, Music, Sun, Moon, Flower2,
  AlertCircle, CheckCircle, Award, ThumbsUp, HelpCircle,
  Ticket, CreditCard, ArrowRight, Home, Info, ShieldCheck,
  Leaf, Heart, Bookmark, Sparkles, Crown, Zap,  Droplets, Flame, BookOpen 
} from 'lucide-react';

// Temple Images - 100% Working High-Quality URLs
const templeImages = {
  kedarnath: "https://images.unsplash.com/photo-1624431679708-5c7c24cdf2e8?q=80&w=400&h=200&fit=crop&auto=format",
  badrinath: "https://images.unsplash.com/photo-1624431679708-5c7c24cdf2e8?q=80&w=400&h=200&fit=crop&auto=format",
  kashi: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=400&h=200&fit=crop&auto=format",
  tirupati: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=400&h=200&fit=crop&auto=format",
  golden: "https://images.unsplash.com/photo-1622037022824-0c71d511efc3?q=80&w=400&h=200&fit=crop&auto=format",
  siddhivinayak: "https://images.unsplash.com/photo-1622037022824-0c71d511efc3?q=80&w=400&h=200&fit=crop&auto=format",
  jagannath: "https://images.unsplash.com/photo-1624431679708-5c7c24cdf2e8?q=80&w=400&h=200&fit=crop&auto=format",
  meenakshi: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=400&h=200&fit=crop&auto=format",
  ayodhya: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=400&h=200&fit=crop&auto=format"
};

const temples = [
  {
    id: 1,
    name: "Shri Kedarnath Temple",
    location: "Kedarnath, Uttarakhand",
    state: "Uttarakhand",
    deity: "Lord Shiva",
    price: "2500",
    image: templeImages.kedarnath,
    timings: "4:00 AM - 9:00 PM",
    vipTimings: "6:00 AM - 8:00 AM",
    darshanDuration: "15-20 mins",
    queueTime: "VIP: 10 mins | Regular: 3-4 hrs",
    features: ["VIP Queue Skip", "Special Aarti", "Prasadam", "Photography Allowed"],
    rating: 4.8,
    reviews: "12.5k+",
    trending: true,
    distance: "18 km from city",
    description: "One of the holiest Hindu temples dedicated to Lord Shiva, located in the Garhwal Himalayan range.",
    history: "The temple is believed to be 1200 years old and was built by Adi Shankaracharya.",
    facilities: ["Parking", "Restrooms", "Medical Room", "Prasadam Counter", "Shoe Stand"],
    festivals: ["Maha Shivratri", "Savani", "Janmashtami"],
    weather: "Cold - 5°C to 15°C",
    bestTime: "May to October",
    address: "Kedarnath, Rudraprayag District, Uttarakhand - 246445"
  },
  {
    id: 2,
    name: "Shri Badrinath Temple",
    location: "Badrinath, Uttarakhand",
    state: "Uttarakhand",
    deity: "Lord Vishnu",
    price: "2200",
    image: templeImages.badrinath,
    timings: "4:30 AM - 9:00 PM",
    vipTimings: "5:30 AM - 7:30 AM",
    darshanDuration: "15-20 mins",
    queueTime: "VIP: 15 mins | Regular: 2-3 hrs",
    features: ["VIP Darshan", "Maha Aarti Pass", "Prasadam Box", "Guided Tour"],
    rating: 4.7,
    reviews: "10.2k+",
    trending: true,
    distance: "3 km from city",
    description: "Part of the Char Dham pilgrimage, dedicated to Lord Vishnu.",
    history: "Mentioned in ancient scriptures, the temple has been a pilgrimage site for centuries.",
    facilities: ["Parking", "Restrooms", "Medical Room", "Prasadam Counter"],
    festivals: ["Badri Kedar Festival", "Janmashtami"],
    weather: "Cold - 7°C to 18°C",
    bestTime: "May to October",
    address: "Badrinath, Chamoli District, Uttarakhand - 246422"
  },
  {
    id: 3,
    name: "Shri Kashi Vishwanath",
    location: "Varanasi, Uttar Pradesh",
    state: "Uttar Pradesh",
    deity: "Lord Shiva",
    price: "1800",
    image: templeImages.kashi,
    timings: "3:00 AM - 11:00 PM",
    vipTimings: "4:00 AM - 6:00 AM",
    darshanDuration: "10-15 mins",
    queueTime: "VIP: 5 mins | Regular: 2-3 hrs",
    features: ["Special Entry", "Ganga Aarti Access", "Pandit Assistance", "Prasadam"],
    rating: 4.9,
    reviews: "15.8k+",
    trending: true,
    distance: "2 km from city",
    description: "One of the most famous temples dedicated to Lord Shiva, located on the banks of Ganges.",
    history: "The temple has been destroyed and rebuilt several times, with the current structure from 1780.",
    facilities: ["Parking", "Restrooms", "Prasadam Counter", "Shoe Stand"],
    festivals: ["Maha Shivratri", "Shravan", "Dev Deepawali"],
    weather: "Hot - 25°C to 40°C",
    bestTime: "October to March",
    address: "Vishwanath Temple, Varanasi, Uttar Pradesh - 221001"
  },
  {
    id: 4,
    name: "Tirupati Balaji",
    location: "Tirupati, Andhra Pradesh",
    state: "Andhra Pradesh",
    deity: "Lord Venkateswara",
    price: "3000",
    image: templeImages.tirupati,
    timings: "3:00 AM - 12:00 AM",
    vipTimings: "3:30 AM - 5:30 AM",
    darshanDuration: "10-15 mins",
    queueTime: "VIP: 20 mins | Regular: 4-6 hrs",
    features: ["VIP Break Darshan", "Laddu Prasadam", "AC Lounge Wait", "Shoe Keep"],
    rating: 4.8,
    reviews: "20.3k+",
    trending: true,
    distance: "5 km from city",
    description: "One of the richest and most visited temples in the world, dedicated to Lord Venkateswara.",
    history: "The temple's origins date back to the 5th century, with contributions from various dynasties.",
    facilities: ["Parking", "Restrooms", "Medical Room", "Laddu Counter", "AC Lounge"],
    festivals: ["Brahmotsavam", "Vaikuntha Ekadashi", "Rathasaptami"],
    weather: "Moderate - 20°C to 35°C",
    bestTime: "September to February",
    address: "Tirumala, Tirupati, Andhra Pradesh - 517504"
  },
  {
    id: 5,
    name: "Golden Temple",
    location: "Amritsar, Punjab",
    state: "Punjab",
    deity: "Harmandir Sahib",
    price: "1500",
    image: templeImages.golden,
    timings: "24 Hours",
    vipTimings: "4:00 AM - 6:00 AM",
    darshanDuration: "Flexible",
    queueTime: "VIP: No wait | Regular: 30-45 mins",
    features: ["Sikh Museum Tour", "Langar Service", "Prasadam", "Guided Tour"],
    rating: 4.9,
    reviews: "18.6k+",
    trending: false,
    distance: "1 km from city",
    description: "The holiest Gurdwara of Sikhism, known for its gold-plated dome and sarovar.",
    history: "Built in 1589, the temple has been a symbol of equality and brotherhood.",
    facilities: ["Parking", "Restrooms", "Langar Hall", "Shoe Stand", "Information Center"],
    festivals: ["Gurpurab", "Vaisakhi", "Diwali"],
    weather: "Moderate - 10°C to 35°C",
    bestTime: "November to March",
    address: "Golden Temple, Amritsar, Punjab - 143001"
  },
  {
    id: 6,
    name: "Siddhivinayak Temple",
    location: "Mumbai, Maharashtra",
    state: "Maharashtra",
    deity: "Lord Ganesha",
    price: "1200",
    image: templeImages.siddhivinayak,
    timings: "5:30 AM - 9:00 PM",
    vipTimings: "5:30 AM - 7:30 AM",
    darshanDuration: "5-10 mins",
    queueTime: "VIP: 5 mins | Regular: 1-2 hrs",
    features: ["Quick Darshan", "Modak Prasadam", "Special Aarti", "Photo Point"],
    rating: 4.6,
    reviews: "8.9k+",
    trending: false,
    distance: "2 km from city",
    description: "One of Mumbai's most popular temples, dedicated to Lord Ganesha.",
    history: "Built in 1801, the temple has a unique idol with the trunk on the right side.",
    facilities: ["Parking", "Restrooms", "Prasadam Counter", "Shoe Stand"],
    festivals: ["Ganesh Chaturthi", "Angarki Chaturthi"],
    weather: "Humid - 20°C to 35°C",
    bestTime: "October to March",
    address: "Prabhadevi, Mumbai, Maharashtra - 400028"
  },
  {
    id: 7,
    name: "Jagannath Puri",
    location: "Puri, Odisha",
    state: "Odisha",
    deity: "Lord Jagannath",
    price: "2000",
    image: templeImages.jagannath,
    timings: "5:00 AM - 10:00 PM",
    vipTimings: "6:00 AM - 8:00 AM",
    darshanDuration: "15-20 mins",
    queueTime: "VIP: 10 mins | Regular: 2-3 hrs",
    features: ["Mahaprasadam", "Special Rituals", "Temple History Tour", "Photography"],
    rating: 4.7,
    reviews: "11.2k+",
    trending: true,
    distance: "2 km from city",
    description: "Part of Char Dham, famous for its annual Rath Yatra festival.",
    history: "The temple was built in the 12th century by King Anantavarman Chodaganga Deva.",
    facilities: ["Parking", "Restrooms", "Mahaprasad Counter", "Shoe Stand"],
    festivals: ["Rath Yatra", "Chandan Yatra", "Snana Yatra"],
    weather: "Humid - 20°C to 32°C",
    bestTime: "October to March",
    address: "Puri, Odisha - 752001"
  },
  {
    id: 8,
    name: "Meenakshi Temple",
    location: "Madurai, Tamil Nadu",
    state: "Tamil Nadu",
    deity: "Goddess Meenakshi",
    price: "1600",
    image: templeImages.meenakshi,
    timings: "5:00 AM - 9:00 PM",
    vipTimings: "6:00 AM - 8:00 AM",
    darshanDuration: "15-20 mins",
    queueTime: "VIP: 10 mins | Regular: 1-2 hrs",
    features: ["Temple Architecture Tour", "Special Abhishekam", "Prasadam", "Guide"],
    rating: 4.8,
    reviews: "9.4k+",
    trending: false,
    distance: "2 km from city",
    description: "Historic temple with stunning architecture and 14 gopurams.",
    history: "Most of the current structure was built between 1623 and 1655.",
    facilities: ["Parking", "Restrooms", "Prasadam Counter", "Information Center"],
    festivals: ["Meenakshi Thirukalyanam", "Chithirai Festival"],
    weather: "Hot - 25°C to 38°C",
    bestTime: "October to March",
    address: "Madurai, Tamil Nadu - 625001"
  },
  {
    id: 9,
    name: "Ram Janmabhoomi",
    location: "Ayodhya, Uttar Pradesh",
    state: "Uttar Pradesh",
    deity: "Lord Ram",
    price: "2800",
    image: templeImages.ayodhya,
    timings: "6:00 AM - 8:00 PM",
    vipTimings: "6:30 AM - 8:30 AM",
    darshanDuration: "10-15 mins",
    queueTime: "VIP: 15 mins | Regular: 3-4 hrs",
    features: ["VIP Entry", "Special Aarti", "Prasadam", "Temple Museum"],
    rating: 4.9,
    reviews: "7.6k+",
    trending: true,
    distance: "3 km from city",
    description: "The birthplace of Lord Ram, one of the most significant pilgrimage sites.",
    history: "The new temple construction began in 2020, fulfilling a centuries-old dream.",
    facilities: ["Parking", "Restrooms", "Prasadam Counter", "Museum"],
    festivals: ["Ram Navami", "Diwali", "Vivah Panchami"],
    weather: "Moderate - 15°C to 35°C",
    bestTime: "October to March",
    address: "Ram Janmabhoomi, Ayodhya, Uttar Pradesh - 224123"
  }
];

const pujaOptions = [
  { id: 'none', name: 'No Puja', price: 0, icon: X },
  { id: 'abhishekam', name: 'Abhishekam', price: 1100, icon: Droplets },
  { id: 'aarti', name: 'Special Aarti', price: 800, icon: Flame },
  { id: 'rudrabhishek', name: 'Rudrabhishek', price: 2100, icon: Zap },
  { id: 'satyanarayan', name: 'Satyanarayan Katha', price: 3100, icon: BookOpen }
];

const DarshanDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 2,
    darshanType: 'vip',
    pujaType: 'none',
    specialRequests: '',
    date: new Date().toISOString().split('T')[0],
    time: '06:00'
  });

  const temple = temples.find(t => t.id === parseInt(id));

  if (!temple) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 pt-24 flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-2xl shadow-xl">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Temple not found</h2>
          <p className="text-gray-600 mb-6">The temple you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/darshan')}
            className="bg-gradient-to-r from-orange-600 to-red-700 text-white px-8 py-3 rounded-xl font-medium hover:from-orange-700 hover:to-red-800 transition-all inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Temples
          </button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setShowBookingForm(false);
    }, 3000);
  };

  const getPujaPrice = () => {
    const puja = pujaOptions.find(p => p.id === bookingDetails.pujaType);
    return puja ? puja.price : 0;
  };

  const calculateTotal = () => {
    const basePrice = bookingDetails.darshanType === 'vip' 
      ? parseInt(temple.price) 
      : parseInt(temple.price) + 1200;
    return (basePrice + getPujaPrice()) * bookingDetails.guests;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 pt-24">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src={temple.image} 
          alt={temple.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/darshan')}
          className="absolute top-6 left-6 bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-full hover:bg-white/30 transition-colors flex items-center gap-2 border border-white/30"
        >
          <ChevronRight className="w-4 h-4 rotate-180" />
          Back to Temples
        </button>

        {/* Temple Info on Hero */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-orange-500 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {temple.state}
              </span>
              {temple.trending && (
                <span className="bg-red-500 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Trending Now
                </span>
              )}
              <span className="bg-blue-500/80 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
                <Award className="w-3 h-3" />
                {temple.rating} Rating
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-3">{temple.name}</h1>
            <p className="text-xl text-orange-200 mb-4 flex items-center gap-2">
              <Church className="w-5 h-5" />
              {temple.deity}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4" />
                {temple.location}
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                {temple.rating} ({temple.reviews} reviews)
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                {temple.timings}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-md top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('about')}
              className={`py-4 px-2 font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'about' 
                  ? 'border-orange-500 text-orange-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Info className="w-4 h-4 inline mr-2" />
              About Temple
            </button>
            <button
              onClick={() => setActiveTab('facilities')}
              className={`py-4 px-2 font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'facilities' 
                  ? 'border-orange-500 text-orange-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Shield className="w-4 h-4 inline mr-2" />
              Facilities
            </button>
            <button
              onClick={() => setActiveTab('festivals')}
              className={`py-4 px-2 font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'festivals' 
                  ? 'border-orange-500 text-orange-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Sparkles className="w-4 h-4 inline mr-2" />
              Festivals
            </button>
            <button
              onClick={() => setActiveTab('location')}
              className={`py-4 px-2 font-medium border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'location' 
                  ? 'border-orange-500 text-orange-600' 
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <MapPin className="w-4 h-4 inline mr-2" />
              Location
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Temple Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
                <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-sm text-gray-600">Timings</p>
                <p className="font-semibold text-gray-900">{temple.timings}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
                <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm text-gray-600">Queue Time</p>
                <p className="font-semibold text-green-600">{temple.queueTime.split('|')[0]}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">Distance</p>
                <p className="font-semibold text-gray-900">{temple.distance}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
                <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                  <Sun className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Best Time</p>
                <p className="font-semibold text-gray-900">{temple.bestTime}</p>
              </div>
            </div>

            {/* About Section */}
            {activeTab === 'about' && (
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Info className="w-6 h-6 text-orange-600" />
                  About the Temple
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">{temple.description}</p>
                <p className="text-gray-600 leading-relaxed">{temple.history}</p>
                
                <div className="mt-6 grid grid-cols-2 gap-4 p-4 bg-orange-50 rounded-xl">
                  <div>
                    <p className="text-sm text-gray-600">Weather</p>
                    <p className="font-semibold flex items-center gap-1">
                      <Sun className="w-4 h-4 text-orange-500" />
                      {temple.weather}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Darshan Duration</p>
                    <p className="font-semibold flex items-center gap-1">
                      <Clock className="w-4 h-4 text-orange-500" />
                      {temple.darshanDuration}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Facilities Section */}
            {activeTab === 'facilities' && (
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-orange-600" />
                  Temple Facilities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {temple.facilities.map((facility, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Festivals Section */}
            {activeTab === 'festivals' && (
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-orange-600" />
                  Major Festivals
                </h2>
                <div className="flex flex-wrap gap-3">
                  {temple.festivals.map((festival, idx) => (
                    <span key={idx} className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-2.5 rounded-full flex items-center gap-2 shadow-md">
                      <Heart className="w-4 h-4" />
                      {festival}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Location Section */}
            {activeTab === 'location' && (
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-orange-600" />
                  Location
                </h2>
                <p className="text-gray-600 mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  {temple.address}
                </p>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Interactive map will be displayed here</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-28 border border-orange-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">VIP Darshan</h3>
                <Crown className="w-6 h-6 text-orange-500" />
              </div>
              
              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-orange-600">₹{temple.price}</span>
                <span className="text-gray-500 ml-2">per devotee</span>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {temple.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* VIP Info */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-5 rounded-xl mb-6 border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  VIP Benefits
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2 text-orange-700">
                    <Clock className="w-4 h-4" />
                    {temple.vipTimings}
                  </li>
                  <li className="flex items-center gap-2 text-orange-700">
                    <Users className="w-4 h-4" />
                    {temple.queueTime.split('|')[0]}
                  </li>
                  <li className="flex items-center gap-2 text-orange-700">
                    <Gift className="w-4 h-4" />
                    Special Prasadam
                  </li>
                  <li className="flex items-center gap-2 text-orange-700">
                    <Ticket className="w-4 h-4" />
                    Guaranteed Entry
                  </li>
                </ul>
              </div>

              {/* Book Button */}
              <button 
                onClick={() => setShowBookingForm(true)}
                className="w-full bg-gradient-to-r from-orange-600 to-red-700 text-white py-4 rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-red-800 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Church className="w-5 h-5" />
                Book VIP Darshan
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>Secure booking • Instant confirmation</span>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4 text-blue-500" />
                  <span>98% satisfied</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-green-500" />
                  <span>5k+ booked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Booking Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-orange-600 to-red-700 text-white sticky top-0">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Church className="w-6 h-6" />
                    Book VIP Darshan
                  </h2>
                  <p className="text-orange-100 mt-1 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {temple.name} • {temple.location}
                  </p>
                </div>
                <button 
                  onClick={() => setShowBookingForm(false)}
                  className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-5">
                {/* Temple Details Card */}
                <div className="bg-orange-50 p-5 rounded-xl border border-orange-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Duration
                      </p>
                      <p className="font-medium">{temple.darshanDuration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> VIP Timings
                      </p>
                      <p className="font-medium">{temple.vipTimings}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Users className="w-3 h-3" /> Queue Time
                      </p>
                      <p className="font-medium text-green-600">{temple.queueTime.split('|')[0]}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Gift className="w-3 h-3" /> Prasadam
                      </p>
                      <p className="font-medium">Included</p>
                    </div>
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Select Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={bookingDetails.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                {/* Darshan Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Darshan Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setBookingDetails({...bookingDetails, darshanType: 'vip'})}
                      className={`p-4 border rounded-xl text-left transition-all ${
                        bookingDetails.darshanType === 'vip' 
                          ? 'border-orange-500 bg-orange-50 ring-2 ring-orange-200' 
                          : 'border-gray-200 hover:border-orange-200'
                      }`}
                    >
                      <span className="block font-medium text-gray-900">VIP Darshan</span>
                      <span className="block text-sm text-gray-500 mt-1">Skip queue • Special entry</span>
                      <span className="block text-sm font-semibold text-orange-600 mt-2">₹{temple.price}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setBookingDetails({...bookingDetails, darshanType: 'premium'})}
                      className={`p-4 border rounded-xl text-left transition-all ${
                        bookingDetails.darshanType === 'premium' 
                          ? 'border-orange-500 bg-orange-50 ring-2 ring-orange-200' 
                          : 'border-gray-200 hover:border-orange-200'
                      }`}
                    >
                      <span className="block font-medium text-gray-900">Premium VIP</span>
                      <span className="block text-sm text-gray-500 mt-1">+ Aarti pass • Guide</span>
                      <span className="block text-sm font-semibold text-orange-600 mt-2">₹{parseInt(temple.price) + 1200}</span>
                    </button>
                  </div>
                </div>

                {/* Add Puja */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                    <Flower2 className="w-4 h-4" />
                    Add Puja Services
                  </label>
                  <select
                    name="pujaType"
                    value={bookingDetails.pujaType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  >
                    {pujaOptions.map(puja => {
                      const PujaIcon = puja.icon;
                      return (
                        <option key={puja.id} value={puja.id}>
                          {puja.name} {puja.price > 0 ? `(+₹${puja.price})` : ''}
                        </option>
                      );
                    })}
                  </select>
                </div>

                {/* Personal Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                      <User className="w-4 h-4" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={bookingDetails.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      placeholder="As per ID proof"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={bookingDetails.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingDetails.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      placeholder="10-digit mobile"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Number of Devotees
                    </label>
                    <select
                      name="guests"
                      value={bookingDetails.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Devotee' : 'Devotees'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                    <HelpCircle className="w-4 h-4" />
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={bookingDetails.specialRequests}
                    onChange={handleInputChange}
                    rows="2"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    placeholder="Wheelchair access, Prasadam preferences, etc."
                  ></textarea>
                </div>

                {/* Price Summary */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-5 rounded-xl border border-orange-200">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    Booking Summary
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Darshan ({bookingDetails.darshanType === 'vip' ? 'VIP' : 'Premium'})</span>
                      <span className="font-medium">₹{bookingDetails.darshanType === 'vip' ? temple.price : parseInt(temple.price) + 1200}</span>
                    </div>
                    {bookingDetails.pujaType !== 'none' && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Puja Service</span>
                        <span className="font-medium">₹{getPujaPrice()}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Devotees</span>
                      <span className="font-medium">x {bookingDetails.guests}</span>
                    </div>
                    <div className="border-t border-orange-200 mt-3 pt-3 flex justify-between items-center">
                      <span className="font-bold text-gray-900">Total Amount</span>
                      <span className="text-xl font-bold text-orange-600">
                        ₹{calculateTotal()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-red-700 text-white py-4 rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-red-800 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Church className="w-5 h-5" />
                  Confirm Booking
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  By booking, you agree to temple timings and guidelines. E-pass will be sent via SMS/Email.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-4">
              Your VIP darshan for {temple.name} has been booked successfully.
            </p>
            <div className="bg-orange-50 p-5 rounded-xl mb-4 text-left border border-orange-200">
              <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                <Ticket className="w-4 h-4" />
                Booking Details:
              </p>
              <p className="font-semibold font-mono">#DK{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              <div className="mt-3 space-y-1 text-sm">
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  Date: {bookingDetails.date}
                </p>
                <p className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  Devotees: {bookingDetails.guests}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  {temple.name}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setShowSuccess(false);
                setShowBookingForm(false);
              }}
              className="w-full bg-gradient-to-r from-orange-600 to-red-700 text-white py-3 rounded-xl font-medium hover:from-orange-700 hover:to-red-800 transition-all flex items-center justify-center gap-2"
            >
              <Bookmark className="w-4 h-4" />
              View My Bookings
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DarshanDetail;