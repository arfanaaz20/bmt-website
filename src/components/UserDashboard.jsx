// import React, { useState, useEffect, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { 
//   Bell, User, Briefcase, Shield, CreditCard, 
//   MapPin, Plane, ChevronRight, Search, Settings,
//   Calendar, TrendingDown, Globe, Smartphone, Mail,
//   Lock, Eye, EyeOff, X, FileText, Headphones,
//   Download, Clock, Star, CheckCircle, AlertCircle,
//   BarChart3, Award, Gift, Users, HelpCircle, LogOut
// } from 'lucide-react';
// import { AuthContext } from '../contexts/AuthContext';

// // Mock data for the dashboard
// const mockFlights = [
//   { id: 1, from: 'DEL', to: 'BOM', airline: 'IndiGo', date: '15 Mar 2026', price: '₹4,567', status: 'Upcoming', bookingId: 'BK20260315', passengers: 2 },
//   { id: 2, from: 'BLR', to: 'DEL', airline: 'Air India', date: '22 Feb 2026', price: '₹6,899', status: 'Completed', bookingId: 'BK20260222', passengers: 1 },
//   { id: 3, from: 'MAA', to: 'CCU', airline: 'SpiceJet', date: '10 Apr 2026', price: '₹3,245', status: 'Upcoming', bookingId: 'BK20260410', passengers: 3 },
//   { id: 4, from: 'HYD', to: 'GOI', airline: 'Vistara', date: '05 Jan 2026', price: '₹5,432', status: 'Completed', bookingId: 'BK20260105', passengers: 2 },
// ];

// const mockPriceAlerts = [
//   { id: 1, route: 'DEL → BOM', targetPrice: '₹4,000', currentPrice: '₹4,567', active: true, created: '2 days ago' },
//   { id: 2, route: 'BLR → GOI', targetPrice: '₹3,500', currentPrice: '₹4,200', active: true, created: '1 week ago' },
//   { id: 3, route: 'MAA → DEL', targetPrice: '₹5,000', currentPrice: '₹4,800', active: false, created: '3 weeks ago' },
// ];

// const mockDevices = [
//   { id: 1, name: 'iPhone 14 Pro', os: 'iOS 17.2', location: 'New Delhi', lastActive: 'Now' },
//   { id: 2, name: 'MacBook Pro', os: 'macOS 14.1', location: 'Mumbai', lastActive: '2 hours ago' },
//   { id: 3, name: 'Samsung Galaxy S23', os: 'Android 14', location: 'Bangalore', lastActive: '1 day ago' },
// ];

// const mockTransactions = [
//   { id: 1, type: 'Flight Booking', amount: '₹4,567', date: '15 Feb 2026', status: 'Completed' },
//   { id: 2, type: 'Coin Purchase', amount: '₹999', date: '10 Feb 2026', status: 'Completed' },
//   { id: 3, type: 'Refund', amount: '₹2,500', date: '05 Feb 2026', status: 'Processing' },
// ];

// const UserDashboard = () => {
//   const navigate = useNavigate();
//   const { logout, user } = useContext(AuthContext);
//   const [activeTab, setActiveTab] = useState('Dashboard');
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const [notifications, setNotifications] = useState(3);
//   const [userData, setUserData] = useState({
//     name: user?.name || 'Akshay Kumar',
//     email: user?.email || 'akshaykumar200221@gmail.com',
//     phone: '+91 98765 43210',
//     verified: true,
//     memberSince: 'Feb 2026',
//     nationality: 'Indian',
//     coins: 1250,
//     tier: 'Premium',
//     alerts: 2,
//     bookings: 4
//   });

//   const [editMode, setEditMode] = useState(false);
//   const [tempUserData, setTempUserData] = useState({});
//   const [is2FAEnabled, setIs2FAEnabled] = useState(false);
//   const [recentActivity, setRecentActivity] = useState([
//     { id: 1, action: 'Logged in', device: 'iPhone 14 Pro', time: 'Just now' },
//     { id: 2, action: 'Created price alert', details: 'DEL → BOM', time: '2 days ago' },
//     { id: 3, action: 'Booked flight', details: 'BLR → DEL', time: '1 week ago' },
//   ]);

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//   };

//   const navigationItems = [
//     { id: 'Dashboard', icon: BarChart3, color: 'text-blue-600' },
//     { id: 'Bookings', icon: Briefcase, color: 'text-blue-600' },
//     { id: 'Price Alerts', icon: Bell, color: 'text-blue-600' },
//     { id: 'Profile', icon: User, color: 'text-blue-600' },
//     { id: 'Security', icon: Shield, color: 'text-blue-600' },
//     { id: 'Settings', icon: Settings, color: 'text-blue-600' },
//   ];

//   useEffect(() => {
//     setTempUserData({ ...userData });
//   }, [editMode]);

//   const handleEdit = () => setEditMode(true);
//   const handleSave = () => {
//     setUserData(tempUserData);
//     setEditMode(false);
//   };
//   const handleCancel = () => {
//     setEditMode(false);
//     setTempUserData({ ...userData });
//   };
//   const handleInputChange = (field, value) => {
//     setTempUserData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleDeleteAlert = (id) => {
//     console.log('Delete alert:', id);
//   };

//   const handleDownloadInvoice = (bookingId) => {
//     console.log('Download invoice for:', bookingId);
//     alert(`Downloading invoice for ${bookingId}`);
//   };

//   const toggle2FA = () => setIs2FAEnabled(!is2FAEnabled);

//   const getInitials = (name) => {
//     return name
//       .split(' ')
//       .map(word => word[0])
//       .join('')
//       .toUpperCase()
//       .slice(0, 2);
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'Dashboard':
//         return (
//           <div className="space-y-6">
//             {/* Welcome Banner */}
//             <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
//               <div className="flex flex-col md:flex-row md:items-center justify-between">
//                 <div>
//                   <h1 className="text-2xl font-bold">Welcome back, {userData.name}! 👋</h1>
//                   <p className="text-blue-100 mt-2">Here's what's happening with your account today</p>
//                 </div>
//                 <div className="mt-4 md:mt-0 flex items-center gap-3">
//                   <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
//                     <span className="text-sm">Member Since</span>
//                     <div className="font-semibold">{userData.memberSince}</div>
//                   </div>
//                   <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
//                     <span className="text-sm">Tier</span>
//                     <div className="font-semibold flex items-center gap-1">
//                       <Award size={16} />
//                       {userData.tier}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//               <div className="bg-white rounded-xl border border-gray-200 p-5">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-600 text-sm font-medium">Travel Coins</p>
//                     <h3 className="text-2xl font-bold text-gray-800 mt-2">🪙 {userData.coins.toLocaleString()}</h3>
//                   </div>
//                   <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
//                     <Gift className="text-blue-600" size={24} />
//                   </div>
//                 </div>
//                 <button className="text-blue-600 text-sm font-semibold mt-4 hover:underline">
//                   Redeem Now →
//                 </button>
//               </div>

//               <div className="bg-white rounded-xl border border-gray-200 p-5">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-600 text-sm font-medium">Active Bookings</p>
//                     <h3 className="text-2xl font-bold text-gray-800 mt-2">{mockFlights.filter(f => f.status === 'Upcoming').length}</h3>
//                   </div>
//                   <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
//                     <Briefcase className="text-green-600" size={24} />
//                   </div>
//                 </div>
//                 <button className="text-blue-600 text-sm font-semibold mt-4 hover:underline">
//                   View All →
//                 </button>
//               </div>

//               <div className="bg-white rounded-xl border border-gray-200 p-5">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-600 text-sm font-medium">Price Alerts</p>
//                     <h3 className="text-2xl font-bold text-gray-800 mt-2">{mockPriceAlerts.filter(a => a.active).length}</h3>
//                   </div>
//                   <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
//                     <Bell className="text-orange-600" size={24} />
//                   </div>
//                 </div>
//                 <button className="text-blue-600 text-sm font-semibold mt-4 hover:underline">
//                   Manage →
//                 </button>
//               </div>

//               <div className="bg-white rounded-xl border border-gray-200 p-5">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-gray-600 text-sm font-medium">Savings</p>
//                     <h3 className="text-2xl font-bold text-gray-800 mt-2">₹2,150</h3>
//                   </div>
//                   <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
//                     <TrendingDown className="text-purple-600" size={24} />
//                   </div>
//                 </div>
//                 <p className="text-green-600 text-xs font-semibold mt-2">+12.5% from last month</p>
//               </div>
//             </div>

//             {/* Quick Actions & Recent Activity */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {/* Quick Actions */}
//               <div className="bg-white rounded-xl border border-gray-200 p-6">
//                 <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h2>
//                 <div className="grid grid-cols-2 gap-3">
//                   <button className="p-4 border border-blue-100 rounded-xl hover:bg-blue-50 transition-colors flex flex-col items-center">
//                     <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
//                       <Plane className="text-blue-600" size={20} />
//                     </div>
//                     <span className="text-sm font-medium text-gray-700">Book Flight</span>
//                   </button>
//                   <button className="p-4 border border-blue-100 rounded-xl hover:bg-blue-50 transition-colors flex flex-col items-center">
//                     <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
//                       <Bell className="text-blue-600" size={20} />
//                     </div>
//                     <span className="text-sm font-medium text-gray-700">Set Alert</span>
//                   </button>
//                   <button className="p-4 border border-blue-100 rounded-xl hover:bg-blue-50 transition-colors flex flex-col items-center">
//                     <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
//                       <Download className="text-blue-600" size={20} />
//                     </div>
//                     <span className="text-sm font-medium text-gray-700">Export Data</span>
//                   </button>
//                   <button className="p-4 border border-blue-100 rounded-xl hover:bg-blue-50 transition-colors flex flex-col items-center">
//                     <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
//                       <Headphones className="text-blue-600" size={20} />
//                     </div>
//                     <span className="text-sm font-medium text-gray-700">Support</span>
//                   </button>
//                 </div>
//               </div>

//               {/* Recent Activity */}
//               <div className="bg-white rounded-xl border border-gray-200 p-6">
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-lg font-bold text-gray-800">Recent Activity</h2>
//                   <button className="text-blue-600 text-sm font-semibold hover:underline">
//                     View All
//                   </button>
//                 </div>
//                 <div className="space-y-4">
//                   {recentActivity.map((activity) => (
//                     <div key={activity.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
//                       <div className="flex items-center gap-3">
//                         <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                           <Clock className="text-blue-600" size={14} />
//                         </div>
//                         <div>
//                           <p className="font-medium text-gray-800">{activity.action}</p>
//                           <p className="text-gray-500 text-sm">{activity.details}</p>
//                         </div>
//                       </div>
//                       <span className="text-gray-400 text-sm">{activity.time}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case 'Bookings':
//         return (
//           <div className="space-y-6">
//             <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
//               <div className="p-6 border-b border-gray-200 flex justify-between items-center">
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-800">Flight Bookings</h2>
//                   <p className="text-gray-500 text-sm mt-1">All your flight reservations in one place</p>
//                 </div>
//                 <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
//                   <Plane size={18} />
//                   New Booking
//                 </button>
//               </div>
              
//               <div className="p-6">
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="border-b border-gray-200">
//                         <th className="text-left py-3 px-4 text-gray-600 font-medium">Flight</th>
//                         <th className="text-left py-3 px-4 text-gray-600 font-medium">Date</th>
//                         <th className="text-left py-3 px-4 text-gray-600 font-medium">Passengers</th>
//                         <th className="text-left py-3 px-4 text-gray-600 font-medium">Price</th>
//                         <th className="text-left py-3 px-4 text-gray-600 font-medium">Status</th>
//                         <th className="text-left py-3 px-4 text-gray-600 font-medium">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {mockFlights.map((flight) => (
//                         <tr key={flight.id} className="border-b border-gray-100 hover:bg-gray-50">
//                           <td className="py-4 px-4">
//                             <div>
//                               <div className="font-medium text-gray-800">{flight.from} → {flight.to}</div>
//                               <div className="text-gray-500 text-sm">{flight.airline} • {flight.bookingId}</div>
//                             </div>
//                           </td>
//                           <td className="py-4 px-4">
//                             <div className="flex items-center gap-2">
//                               <Calendar size={14} className="text-gray-400" />
//                               {flight.date}
//                             </div>
//                           </td>
//                           <td className="py-4 px-4">
//                             <div className="flex items-center gap-1">
//                               <Users size={14} className="text-gray-400" />
//                               {flight.passengers} Passenger{flight.passengers > 1 ? 's' : ''}
//                             </div>
//                           </td>
//                           <td className="py-4 px-4 font-bold text-gray-800">{flight.price}</td>
//                           <td className="py-4 px-4">
//                             <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
//                               flight.status === 'Upcoming' 
//                                 ? 'bg-blue-100 text-blue-600'
//                                 : 'bg-green-100 text-green-600'
//                             }`}>
//                               {flight.status === 'Upcoming' ? 'Upcoming' : 'Completed'}
//                             </span>
//                           </td>
//                           <td className="py-4 px-4">
//                             <div className="flex items-center gap-2">
//                               <button 
//                                 onClick={() => handleDownloadInvoice(flight.bookingId)}
//                                 className="text-blue-600 hover:text-blue-800 p-2"
//                                 title="Download Invoice"
//                               >
//                                 <Download size={16} />
//                               </button>
//                               <button className="text-gray-600 hover:text-gray-800 p-2" title="View Details">
//                                 <Eye size={16} />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
                
//                 {mockFlights.length === 0 && (
//                   <div className="text-center py-12">
//                     <div className="bg-blue-50 p-6 rounded-full inline-flex mb-4">
//                       <Plane className="text-blue-400" size={48} />
//                     </div>
//                     <h4 className="text-gray-800 font-semibold text-lg">No bookings yet!</h4>
//                     <p className="text-gray-500 mt-2 max-w-md mx-auto">
//                       Start planning your next trip. Book your first flight and get 500 bonus coins!
//                     </p>
//                     <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md">
//                       Search Flights
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Transaction History */}
//             <div className="bg-white rounded-xl border border-gray-200 p-6">
//               <h2 className="text-lg font-bold text-gray-800 mb-4">Transaction History</h2>
//               <div className="space-y-3">
//                 {mockTransactions.map((transaction) => (
//                   <div key={transaction.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
//                     <div className="flex items-center gap-3">
//                       <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
//                         transaction.type === 'Flight Booking' ? 'bg-blue-100' :
//                         transaction.type === 'Coin Purchase' ? 'bg-green-100' :
//                         'bg-yellow-100'
//                       }`}>
//                         <CreditCard className={
//                           transaction.type === 'Flight Booking' ? 'text-blue-600' :
//                           transaction.type === 'Coin Purchase' ? 'text-green-600' :
//                           'text-yellow-600'
//                         } size={20} />
//                       </div>
//                       <div>
//                         <p className="font-medium text-gray-800">{transaction.type}</p>
//                         <p className="text-gray-500 text-sm">{transaction.date}</p>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <div className={`font-bold ${
//                         transaction.type === 'Refund' ? 'text-green-600' : 'text-gray-800'
//                       }`}>
//                         {transaction.type === 'Refund' ? '+' : ''}{transaction.amount}
//                       </div>
//                       <span className={`text-xs px-2 py-1 rounded-full ${
//                         transaction.status === 'Completed' ? 'bg-green-100 text-green-600' :
//                         'bg-yellow-100 text-yellow-600'
//                       }`}>
//                         {transaction.status}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );

//       case 'Price Alerts':
//         return (
//           <div className="space-y-6">
//             <div className="bg-white rounded-xl border border-gray-200 p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-800">Price Alerts</h2>
//                   <p className="text-gray-500 text-sm mt-1">Get notified when flight prices drop</p>
//                 </div>
//                 <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
//                   + Create Alert
//                 </button>
//               </div>

//               <div className="space-y-4">
//                 {mockPriceAlerts.map((alert) => (
//                   <div key={alert.id} className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-4">
//                         <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
//                           <Bell className="text-blue-600" size={20} />
//                         </div>
//                         <div>
//                           <h4 className="font-semibold text-gray-800">{alert.route}</h4>
//                           <div className="flex items-center gap-4 mt-1">
//                             <div className="text-sm">
//                               <span className="text-gray-500">Target: </span>
//                               <span className="font-medium text-gray-800">{alert.targetPrice}</span>
//                             </div>
//                             <div className="text-sm">
//                               <span className="text-gray-500">Current: </span>
//                               <span className="font-medium text-gray-800">{alert.currentPrice}</span>
//                             </div>
//                             <div className="text-sm text-gray-500">
//                               Created {alert.created}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-3">
//                         <div className="flex items-center gap-2">
//                           <div className={`w-2 h-2 rounded-full ${alert.active ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></div>
//                           <span className={`text-sm ${alert.active ? 'text-green-600' : 'text-gray-500'}`}>
//                             {alert.active ? 'Active' : 'Inactive'}
//                           </span>
//                         </div>
//                         <button 
//                           onClick={() => handleDeleteAlert(alert.id)}
//                           className="text-gray-400 hover:text-red-500 p-1"
//                         >
//                           <X size={18} />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <button className="w-full mt-6 border-2 border-dashed border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-400 rounded-xl py-4 font-medium transition-colors flex items-center justify-center gap-2">
//                 + Add New Price Alert
//               </button>
//             </div>

//             {/* Statistics */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="bg-white rounded-xl border border-gray-200 p-5">
//                 <p className="text-gray-600 text-sm font-medium">Total Alerts</p>
//                 <h3 className="text-2xl font-bold text-gray-800 mt-2">{mockPriceAlerts.length}</h3>
//               </div>
//               <div className="bg-white rounded-xl border border-gray-200 p-5">
//                 <p className="text-gray-600 text-sm font-medium">Active Alerts</p>
//                 <h3 className="text-2xl font-bold text-gray-800 mt-2">{mockPriceAlerts.filter(a => a.active).length}</h3>
//               </div>
//               <div className="bg-white rounded-xl border border-gray-200 p-5">
//                 <p className="text-gray-600 text-sm font-medium">Average Savings</p>
//                 <h3 className="text-2xl font-bold text-gray-800 mt-2">₹1,245</h3>
//               </div>
//             </div>
//           </div>
//         );

//       case 'Profile':
//         return (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             <div className="lg:col-span-2 space-y-6">
//               {/* Profile Information */}
//               <div className="bg-white rounded-xl border border-gray-200 p-6">
//                 <div className="flex justify-between items-center mb-6">
//                   <div>
//                     <h2 className="text-xl font-bold text-gray-800">Profile Information</h2>
//                     <p className="text-gray-500 text-sm mt-1">Update your personal details</p>
//                   </div>
//                   {editMode ? (
//                     <div className="flex gap-2">
//                       <button 
//                         onClick={handleSave}
//                         className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
//                       >
//                         Save Changes
//                       </button>
//                       <button 
//                         onClick={handleCancel}
//                         className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   ) : (
//                     <button 
//                       onClick={handleEdit}
//                       className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
//                     >
//                       Edit Profile
//                     </button>
//                   )}
//                 </div>

//                 <div className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//                       {editMode ? (
//                         <input
//                           type="text"
//                           value={tempUserData.name}
//                           onChange={(e) => handleInputChange('name', e.target.value)}
//                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//                           placeholder="Enter your full name"
//                         />
//                       ) : (
//                         <div className="p-3 bg-gray-50 rounded-lg">
//                           <div className="font-medium text-gray-800">{userData.name}</div>
//                         </div>
//                       )}
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                       <div className="p-3 bg-gray-50 rounded-lg">
//                         <div className="flex items-center justify-between">
//                           <div className="font-medium text-gray-800">{userData.email}</div>
//                           <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
//                             <CheckCircle size={14} />
//                             Verified
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
//                       {editMode ? (
//                         <input
//                           type="tel"
//                           value={tempUserData.phone || ''}
//                           onChange={(e) => handleInputChange('phone', e.target.value)}
//                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//                           placeholder="+91 98765 43210"
//                         />
//                       ) : (
//                         <div className="p-3 bg-gray-50 rounded-lg">
//                           <div className="font-medium text-gray-800">{userData.phone || 'Not provided'}</div>
//                         </div>
//                       )}
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
//                       {editMode ? (
//                         <select
//                           value={tempUserData.nationality}
//                           onChange={(e) => handleInputChange('nationality', e.target.value)}
//                           className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//                         >
//                           <option value="">Select Nationality</option>
//                           <option value="Indian">Indian</option>
//                           <option value="American">American</option>
//                           <option value="British">British</option>
//                           <option value="Canadian">Canadian</option>
//                           <option value="Australian">Australian</option>
//                         </select>
//                       ) : (
//                         <div className="p-3 bg-gray-50 rounded-lg flex items-center gap-2">
//                           <Globe size={16} className="text-gray-400" />
//                           <span className="font-medium text-gray-800">{userData.nationality || 'Not specified'}</span>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Account Summary */}
//             <div className="space-y-6">
//               <div className="bg-white rounded-xl border border-gray-200 p-6">
//                 <h3 className="font-bold text-gray-800 mb-4">Account Summary</h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                     <span className="text-gray-600">Member Since</span>
//                     <span className="font-medium">{userData.memberSince}</span>
//                   </div>
//                   <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                     <span className="text-gray-600">Account Tier</span>
//                     <span className="font-medium text-blue-600 flex items-center gap-1">
//                       <Award size={14} />
//                       {userData.tier}
//                     </span>
//                   </div>
//                   <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                     <span className="text-gray-600">Travel Coins</span>
//                     <span className="font-medium">🪙 {userData.coins.toLocaleString()}</span>
//                   </div>
//                   <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                     <span className="text-gray-600">Email Verified</span>
//                     <span className="text-green-600 font-semibold">Yes</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Support Card */}
//               <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6">
//                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//                   <Headphones className="text-blue-600" size={24} />
//                 </div>
//                 <h3 className="font-bold text-gray-800 mb-2">Need Help?</h3>
//                 <p className="text-gray-600 text-sm mb-4">
//                   Our 24/7 support team is ready to assist you with any questions.
//                 </p>
//                 <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors">
//                   Contact Support
//                 </button>
//               </div>
//             </div>
//           </div>
//         );

//       case 'Security':
//         return (
//           <div className="space-y-6">
//             <div className="bg-white rounded-xl border border-gray-200 p-6">
//               <h2 className="text-xl font-bold text-gray-800 mb-6">Security Settings</h2>
              
//               <div className="space-y-4">
//                 {/* Password */}
//                 <div className="p-4 border border-gray-200 rounded-xl">
//                   <div className="flex items-center justify-between mb-3">
//                     <div>
//                       <h4 className="font-semibold text-gray-800">Password</h4>
//                       <p className="text-gray-500 text-sm">Last changed 2 months ago</p>
//                     </div>
//                     <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
//                       Change Password
//                     </button>
//                   </div>
//                   <div className="relative">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       value="••••••••••••"
//                       readOnly
//                       className="w-full p-3 bg-gray-50 rounded-lg pr-12 font-mono"
//                     />
//                     <button 
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                     >
//                       {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                     </button>
//                   </div>
//                 </div>

//                 {/* 2FA */}
//                 <div className="p-4 border border-gray-200 rounded-xl">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h4 className="font-semibold text-gray-800">Two-Factor Authentication</h4>
//                       <p className="text-gray-500 text-sm">Add an extra layer of security to your account</p>
//                     </div>
//                     <button 
//                       onClick={toggle2FA}
//                       className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
//                         is2FAEnabled ? 'bg-blue-600' : 'bg-gray-300'
//                       }`}
//                     >
//                       <span 
//                         className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                           is2FAEnabled ? 'translate-x-6' : 'translate-x-1'
//                         }`}
//                       />
//                     </button>
//                   </div>
//                   {is2FAEnabled && (
//                     <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
//                       <p className="text-blue-700 text-sm">
//                         ✅ 2FA is now enabled. You'll need to verify login attempts with your authenticator app.
//                       </p>
//                     </div>
//                   )}
//                 </div>

//                 {/* Active Sessions */}
//                 <div className="p-4 border border-gray-200 rounded-xl">
//                   <div className="flex justify-between items-center mb-4">
//                     <div>
//                       <h4 className="font-semibold text-gray-800">Active Sessions</h4>
//                       <p className="text-gray-500 text-sm">Devices where you're currently logged in</p>
//                     </div>
//                     <button className="text-blue-600 font-medium hover:underline text-sm">
//                       View All
//                     </button>
//                   </div>
//                   <div className="space-y-3">
//                     {mockDevices.map((device) => (
//                       <div key={device.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
//                         <div className="flex items-center gap-3">
//                           <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
//                             <Smartphone className="text-gray-600" size={18} />
//                           </div>
//                           <div>
//                             <p className="font-medium text-gray-800">{device.name}</p>
//                             <p className="text-gray-500 text-sm">{device.os} • {device.location}</p>
//                           </div>
//                         </div>
//                         <div className="text-right">
//                           <div className="text-sm text-gray-600">{device.lastActive}</div>
//                           {device.id === 1 && (
//                             <div className="text-xs text-green-600 font-medium mt-1">Current Session</div>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Security Tips */}
//             <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-xl p-6">
//               <h3 className="font-bold text-gray-800 mb-3">Security Tips</h3>
//               <ul className="space-y-2 text-sm text-gray-600">
//                 <li className="flex items-center gap-2">
//                   <CheckCircle size={14} className="text-green-500" />
//                   Use a strong, unique password
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle size={14} className="text-green-500" />
//                   Enable two-factor authentication
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle size={14} className="text-green-500" />
//                   Regularly review active sessions
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle size={14} className="text-green-500" />
//                   Keep your recovery email updated
//                 </li>
//               </ul>
//             </div>
//           </div>
//         );

//       case 'Settings':
//         return (
//           <div className="space-y-6">
//             <div className="bg-white rounded-xl border border-gray-200 p-6">
//               <h2 className="text-xl font-bold text-gray-800 mb-6">Account Settings</h2>
              
//               <div className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="p-4 border border-gray-200 rounded-xl">
//                     <div className="flex items-center gap-3 mb-3">
//                       <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
//                         <Bell className="text-blue-600" size={20} />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-gray-800">Notifications</h4>
//                         <p className="text-gray-500 text-sm">Manage email and push notifications</p>
//                       </div>
//                     </div>
//                     <button className="text-blue-600 font-medium hover:underline">
//                       Configure →
//                     </button>
//                   </div>

//                   <div className="p-4 border border-gray-200 rounded-xl">
//                     <div className="flex items-center gap-3 mb-3">
//                       <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
//                         <Globe className="text-purple-600" size={20} />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-gray-800">Language & Region</h4>
//                         <p className="text-gray-500 text-sm">Set your preferred language</p>
//                       </div>
//                     </div>
//                     <button className="text-blue-600 font-medium hover:underline">
//                       Change →
//                     </button>
//                   </div>

//                   <div className="p-4 border border-gray-200 rounded-xl">
//                     <div className="flex items-center gap-3 mb-3">
//                       <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
//                         <Download className="text-green-600" size={20} />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-gray-800">Data & Privacy</h4>
//                         <p className="text-gray-500 text-sm">Download your data or delete account</p>
//                       </div>
//                     </div>
//                     <button className="text-blue-600 font-medium hover:underline">
//                       Manage →
//                     </button>
//                   </div>

//                   <div className="p-4 border border-gray-200 rounded-xl">
//                     <div className="flex items-center gap-3 mb-3">
//                       <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
//                         <HelpCircle className="text-orange-600" size={20} />
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-gray-800">Help & Support</h4>
//                         <p className="text-gray-500 text-sm">FAQs and contact information</p>
//                       </div>
//                     </div>
//                     <button className="text-blue-600 font-medium hover:underline">
//                       Get Help →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Mobile Header */}
//       <header className="bg-white border-b border-gray-200 p-4 sticky top-0 z-50 md:hidden">
//         <div className="flex items-center justify-between">
//           <button 
//             onClick={() => setShowMobileMenu(!showMobileMenu)}
//             className="p-2"
//           >
//             <div className="space-y-1">
//               <div className="w-6 h-0.5 bg-gray-600"></div>
//               <div className="w-6 h-0.5 bg-gray-600"></div>
//               <div className="w-6 h-0.5 bg-gray-600"></div>
//             </div>
//           </button>
//           <h1 className="text-lg font-semibold text-gray-800">{activeTab}</h1>
//           <div className="relative">
//             <button 
//               onClick={() => setShowProfileMenu(!showProfileMenu)}
//               className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 border-2 border-blue-200 font-semibold"
//             >
//               {getInitials(userData.name)}
//             </button>
//             {notifications > 0 && (
//               <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
//                 {notifications}
//               </span>
//             )}
            
//             {/* Mobile Profile Dropdown Menu */}
//             {showProfileMenu && (
//               <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
//                 <div className="px-4 py-3 border-b border-gray-100">
//                   <p className="font-medium text-gray-800">{userData.name}</p>
//                   <p className="text-sm text-gray-500 truncate">{userData.email}</p>
//                 </div>
//                 <button
//                   onClick={() => {
//                     setActiveTab('Profile');
//                     setShowProfileMenu(false);
//                   }}
//                   className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 flex items-center gap-2"
//                 >
//                   <User size={16} />
//                   Profile
//                 </button>
//                 <button
//                   onClick={() => {
//                     setActiveTab('Settings');
//                     setShowProfileMenu(false);
//                   }}
//                   className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 flex items-center gap-2"
//                 >
//                   <Settings size={16} />
//                   Settings
//                 </button>
//                 <div className="border-t border-gray-100 my-1"></div>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 flex items-center gap-2"
//                 >
//                   <LogOut size={16} />
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>

//       <div className="flex">
//         {/* Mobile Sidebar */}
//         {showMobileMenu && (
//           <div className="fixed inset-0 z-40 md:hidden">
//             <div 
//               className="absolute inset-0 bg-black bg-opacity-50"
//               onClick={() => setShowMobileMenu(false)}
//             ></div>
//             <div className="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl">
//               <div className="p-6 border-b border-gray-200">
//                 <div className="flex items-center gap-3">
//                   <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
//                     {getInitials(userData.name)}
//                   </div>
//                   <div>
//                     <div className="font-medium text-gray-800">{userData.name}</div>
//                     <div className="text-sm text-gray-500">{userData.email}</div>
//                   </div>
//                 </div>
//               </div>
//               <nav className="mt-4 px-4 space-y-1">
//                 {navigationItems.map((item) => (
//                   <button
//                     key={item.id}
//                     onClick={() => {
//                       setActiveTab(item.id);
//                       setShowMobileMenu(false);
//                     }}
//                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
//                       activeTab === item.id 
//                         ? 'bg-blue-600 text-white' 
//                         : 'text-gray-600 hover:bg-gray-100'
//                     }`}
//                   >
//                     <item.icon size={20} />
//                     <span className="font-medium">{item.id}</span>
//                     {activeTab === item.id && (
//                       <ChevronRight size={16} className="ml-auto" />
//                     )}
//                   </button>
//                 ))}
                
//                 {/* Mobile Logout Button */}
//                 <button
//                   onClick={handleLogout}
//                   className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-red-600 hover:bg-red-50 mt-4 border-t border-gray-200 pt-4"
//                 >
//                   <LogOut size={20} />
//                   <span className="font-medium">Logout</span>
//                 </button>
//               </nav>
//             </div>
//           </div>
//         )}

//         {/* Desktop Sidebar */}
//         <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col fixed h-screen">
//           <div className="p-6 border-b border-gray-200">
//             <div className="text-xl font-bold text-blue-600">USER DASHBOARD</div>
//           </div>
          
//           <nav className="mt-4 px-4 space-y-1 flex-1">
//             {navigationItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => setActiveTab(item.id)}
//                 className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
//                   activeTab === item.id 
//                     ? 'bg-blue-600 text-white shadow-sm' 
//                     : 'text-gray-600 hover:bg-gray-100'
//                 }`}
//               >
//                 <item.icon size={20} />
//                 <span className="font-medium">{item.id}</span>
//                 {activeTab === item.id && (
//                   <ChevronRight size={16} className="ml-auto" />
//                 )}
//               </button>
//             ))}
//           </nav>
          

//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 md:ml-64">
//           {/* Desktop Header */}
//           <header className="bg-white border-b border-gray-200 p-6 sticky top-0 z-10 hidden md:flex justify-between items-center">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-800">{activeTab}</h1>
//               <p className="text-gray-500 text-sm mt-1">
//                 Manage your travel preferences and account settings
//               </p>
//             </div>
//             <div className="flex items-center gap-4">
              
//               {/* Desktop Profile Dropdown */}
//               <div className="relative">
//                 <button 
//                   onClick={() => setShowProfileMenu(!showProfileMenu)}
//                   className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 border-2 border-white shadow-sm font-bold text-lg hover:border-blue-300 transition-colors"
//                 >
//                   {getInitials(userData.name)}
//                 </button>
                
//                 {showProfileMenu && (
//                   <div className="absolute right-0 top-14 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
//                     <div className="px-4 py-3 border-b border-gray-100">
//                       <p className="font-medium text-gray-800">{userData.name}</p>
//                       <p className="text-sm text-gray-500 truncate">{userData.email}</p>
//                       <p className="text-xs text-blue-600 mt-1">Member since {userData.memberSince}</p>
//                     </div>
//                     <button
//                       onClick={() => {
//                         setActiveTab('Profile');
//                         setShowProfileMenu(false);
//                       }}
//                       className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 flex items-center gap-2"
//                     >
//                       <User size={16} />
//                       My Profile
//                     </button>
//                     <button
//                       onClick={() => {
//                         setActiveTab('Settings');
//                         setShowProfileMenu(false);
//                       }}
//                       className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 flex items-center gap-2"
//                     >
//                       <Settings size={16} />
//                       Account Settings
//                     </button>
//                     <button
//                       onClick={() => {
//                         setActiveTab('Security');
//                         setShowProfileMenu(false);
//                       }}
//                       className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 flex items-center gap-2"
//                     >
//                       <Shield size={16} />
//                       Security
//                     </button>
//                     <div className="border-t border-gray-100 my-1"></div>
//                     <button
//                       onClick={handleLogout}
//                       className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 flex items-center gap-2"
//                     >
//                       <LogOut size={16} />
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </header>

//           <div className="p-6 space-y-6">
//             {renderContent()}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;












import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bell, User, Briefcase, Shield, CreditCard, 
  MapPin, Plane, ChevronRight, Search, Settings,
  Calendar, TrendingDown, Globe, Smartphone, Mail,
  Lock, Eye, EyeOff, X, FileText, Headphones,
  Download, Clock, Star, CheckCircle, AlertCircle,
  BarChart3, Award, Gift, Users, HelpCircle, LogOut,
  Menu, ArrowLeft
} from 'lucide-react';
import { AuthContext } from '../contexts/AuthContext';

// Mock data
const mockFlights = [
  { id: 1, from: 'DEL', to: 'BOM', airline: 'IndiGo', date: '15 Mar 2026', price: '₹4,567', status: 'Upcoming', bookingId: 'BK20260315', passengers: 2 },
  { id: 2, from: 'BLR', to: 'DEL', airline: 'Air India', date: '22 Feb 2026', price: '₹6,899', status: 'Completed', bookingId: 'BK20260222', passengers: 1 },
  { id: 3, from: 'MAA', to: 'CCU', airline: 'SpiceJet', date: '10 Apr 2026', price: '₹3,245', status: 'Upcoming', bookingId: 'BK20260410', passengers: 3 },
  { id: 4, from: 'HYD', to: 'GOI', airline: 'Vistara', date: '05 Jan 2026', price: '₹5,432', status: 'Completed', bookingId: 'BK20260105', passengers: 2 },
];

const mockPriceAlerts = [
  { id: 1, route: 'DEL → BOM', targetPrice: '₹4,000', currentPrice: '₹4,567', active: true, created: '2 days ago' },
  { id: 2, route: 'BLR → GOI', targetPrice: '₹3,500', currentPrice: '₹4,200', active: true, created: '1 week ago' },
  { id: 3, route: 'MAA → DEL', targetPrice: '₹5,000', currentPrice: '₹4,800', active: false, created: '3 weeks ago' },
];

const mockDevices = [
  { id: 1, name: 'iPhone 14 Pro', os: 'iOS 17.2', location: 'New Delhi', lastActive: 'Now' },
  { id: 2, name: 'MacBook Pro', os: 'macOS 14.1', location: 'Mumbai', lastActive: '2 hours ago' },
  { id: 3, name: 'Samsung Galaxy S23', os: 'Android 14', location: 'Bangalore', lastActive: '1 day ago' },
];

const mockTransactions = [
  { id: 1, type: 'Flight Booking', amount: '₹4,567', date: '15 Feb 2026', status: 'Completed' },
  { id: 2, type: 'Coin Purchase', amount: '₹999', date: '10 Feb 2026', status: 'Completed' },
  { id: 3, type: 'Refund', amount: '₹2,500', date: '05 Feb 2026', status: 'Processing' },
];

const UserDashboard = () => {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [notifications] = useState(3);
  const [userData, setUserData] = useState({
    name: user?.name || 'Akshay Kumar',
    email: user?.email || 'akshaykumar200221@gmail.com',
    phone: '+91 98765 43210',
    verified: true,
    memberSince: 'Feb 2026',
    nationality: 'Indian',
    coins: 1250,
    tier: 'Premium',
    alerts: 2,
    bookings: 4
  });

  const [editMode, setEditMode] = useState(false);
  const [tempUserData, setTempUserData] = useState({});
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [recentActivity] = useState([
    { id: 1, action: 'Logged in', device: 'iPhone 14 Pro', time: 'Just now' },
    { id: 2, action: 'Created price alert', details: 'DEL → BOM', time: '2 days ago' },
    { id: 3, action: 'Booked flight', details: 'BLR → DEL', time: '1 week ago' },
  ]);

  const handleLogout = () => { logout(); navigate('/'); };

  // Bottom nav tabs (mobile)
  const bottomNavItems = [
    { id: 'Dashboard', icon: BarChart3, label: 'Home' },
    { id: 'Bookings', icon: Briefcase, label: 'Bookings' },
    { id: 'Price Alerts', icon: Bell, label: 'Alerts' },
    { id: 'Profile', icon: User, label: 'Profile' },
  ];

  // Sidebar nav (desktop)
  const navigationItems = [
    { id: 'Dashboard', icon: BarChart3 },
    { id: 'Bookings', icon: Briefcase },
    { id: 'Price Alerts', icon: Bell },
    { id: 'Profile', icon: User },
    { id: 'Security', icon: Shield },
    { id: 'Settings', icon: Settings },
  ];

  useEffect(() => { setTempUserData({ ...userData }); }, [editMode]);

  const handleEdit = () => setEditMode(true);
  const handleSave = () => { setUserData(tempUserData); setEditMode(false); };
  const handleCancel = () => { setEditMode(false); setTempUserData({ ...userData }); };
  const handleInputChange = (field, value) => setTempUserData(prev => ({ ...prev, [field]: value }));
  const handleDownloadInvoice = (bookingId) => alert(`Downloading invoice for ${bookingId}`);
  const toggle2FA = () => setIs2FAEnabled(!is2FAEnabled);

  const getInitials = (name) => name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setShowMobileMenu(false);
    setShowProfileMenu(false);
  };

  // ─── DASHBOARD ─────────────────────────────────────────
  const renderDashboard = () => (
    <div className="space-y-4">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-4 md:p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Welcome back, {userData.name.split(' ')[0]}! 👋</h1>
            <p className="text-blue-100 mt-1 text-sm">Here's your account overview</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-xl text-center">
              <span className="text-xs text-blue-100 block">Since</span>
              <div className="font-semibold text-sm">{userData.memberSince}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-xl text-center">
              <span className="text-xs text-blue-100 block">Tier</span>
              <div className="font-semibold text-sm flex items-center gap-1">
                <Award size={12} />{userData.tier}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid - 2x2 on mobile, 4 col on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Travel Coins', value: `🪙 ${userData.coins.toLocaleString()}`, icon: Gift, iconColor: 'text-blue-600', bg: 'bg-blue-50', action: 'Redeem Now →' },
          { label: 'Active Bookings', value: mockFlights.filter(f => f.status === 'Upcoming').length, icon: Briefcase, iconColor: 'text-green-600', bg: 'bg-green-50', action: 'View All →' },
          { label: 'Price Alerts', value: mockPriceAlerts.filter(a => a.active).length, icon: Bell, iconColor: 'text-orange-600', bg: 'bg-orange-50', action: 'Manage →' },
          { label: 'Savings', value: '₹2,150', icon: TrendingDown, iconColor: 'text-purple-600', bg: 'bg-purple-50', sub: '+12.5% this month' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <p className="text-gray-500 text-xs font-medium leading-tight">{stat.label}</p>
              <div className={`w-8 h-8 ${stat.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <stat.icon className={stat.iconColor} size={16} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800">{stat.value}</h3>
            {stat.action && <button className="text-blue-600 text-xs font-semibold mt-2 hover:underline">{stat.action}</button>}
            {stat.sub && <p className="text-green-600 text-xs font-semibold mt-1">{stat.sub}</p>}
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
        <h2 className="text-base font-bold text-gray-800 mb-3">Quick Actions</h2>
        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: Plane, label: 'Book Flight' },
            { icon: Bell, label: 'Set Alert' },
            { icon: Download, label: 'Export' },
            { icon: Headphones, label: 'Support' },
          ].map((action, i) => (
            <button key={i} className="p-3 border border-blue-100 rounded-xl hover:bg-blue-50 active:bg-blue-100 transition-colors flex flex-col items-center gap-1">
              <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                <action.icon className="text-blue-600" size={18} />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base font-bold text-gray-800">Recent Activity</h2>
          <button className="text-blue-600 text-xs font-semibold hover:underline">View All</button>
        </div>
        <div className="space-y-2">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-3 hover:bg-gray-50 active:bg-gray-100 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-blue-600" size={13} />
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">{activity.action}</p>
                  {activity.details && <p className="text-gray-500 text-xs">{activity.details}</p>}
                </div>
              </div>
              <span className="text-gray-400 text-xs flex-shrink-0 ml-2">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ─── BOOKINGS ─────────────────────────────────────────
  const renderBookings = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <div>
            <h2 className="text-base font-bold text-gray-800">Flight Bookings</h2>
            <p className="text-gray-500 text-xs mt-0.5">All your reservations</p>
          </div>
          <button className="bg-blue-600 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors flex items-center gap-1.5">
            <Plane size={14} /> New Booking
          </button>
        </div>

        {/* Mobile card view (hidden on desktop) */}
        <div className="divide-y divide-gray-100 md:hidden">
          {mockFlights.map((flight) => (
            <div key={flight.id} className="p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors">

              {/* Row 1: Status badge + Price */}
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                  flight.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                }`}>
                  {flight.status}
                </span>
                <span className="font-bold text-gray-800 text-base">{flight.price}</span>
              </div>

              {/* Row 2: Route with arrow + Date */}
              <div className="flex items-center justify-between mb-2">
                {/* From → To */}
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div>
                    <div className="font-bold text-gray-800 text-base leading-tight">{flight.from}</div>
                    <div className="text-gray-400 text-[10px] truncate max-w-[70px]">{flight.airline}</div>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 px-1">
                    <div className="flex items-center gap-1">
                      <div className="w-6 h-px bg-gray-300"></div>
                      <Plane size={12} className="text-blue-500" />
                      <div className="w-6 h-px bg-gray-300"></div>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-base leading-tight">{flight.to}</div>
                    <div className="text-gray-400 text-[10px]">{flight.passengers} pax</div>
                  </div>
                </div>

                {/* Date — fixed width, no wrap */}
                <div className="flex-shrink-0 ml-3 text-right">
                  <div className="flex items-center gap-1 text-gray-500 text-xs whitespace-nowrap">
                    <Calendar size={11} />
                    {flight.date}
                  </div>
                </div>
              </div>

              {/* Row 3: Booking ID + Actions */}
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-xs">ID: {flight.bookingId}</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => handleDownloadInvoice(flight.bookingId)}
                    className="p-1.5 text-blue-600 hover:bg-blue-50 active:bg-blue-100 rounded-lg transition-colors"
                  >
                    <Download size={15} />
                  </button>
                  <button className="p-1.5 text-gray-500 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors">
                    <Eye size={15} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Desktop table view */}
        <div className="hidden md:block p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-600 font-medium text-sm">Flight</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-medium text-sm">Date</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-medium text-sm">Passengers</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-medium text-sm">Price</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-medium text-sm">Status</th>
                  <th className="text-left py-3 px-4 text-gray-600 font-medium text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockFlights.map((flight) => (
                  <tr key={flight.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-800">{flight.from} → {flight.to}</div>
                      <div className="text-gray-500 text-sm">{flight.airline} • {flight.bookingId}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 text-sm">{flight.date}</div>
                    </td>
                    <td className="py-4 px-4 text-sm">{flight.passengers} Passenger{flight.passengers > 1 ? 's' : ''}</td>
                    <td className="py-4 px-4 font-bold text-gray-800">{flight.price}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        flight.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                      }`}>
                        {flight.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <button onClick={() => handleDownloadInvoice(flight.bookingId)} className="text-blue-600 hover:text-blue-800 p-2"><Download size={16} /></button>
                        <button className="text-gray-600 hover:text-gray-800 p-2"><Eye size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
        <h2 className="text-base font-bold text-gray-800 mb-3">Transaction History</h2>
        <div className="space-y-2">
          {mockTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  transaction.type === 'Flight Booking' ? 'bg-blue-100' :
                  transaction.type === 'Coin Purchase' ? 'bg-green-100' : 'bg-yellow-100'
                }`}>
                  <CreditCard className={
                    transaction.type === 'Flight Booking' ? 'text-blue-600' :
                    transaction.type === 'Coin Purchase' ? 'text-green-600' : 'text-yellow-600'
                  } size={16} />
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">{transaction.type}</p>
                  <p className="text-gray-500 text-xs">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className={`font-bold text-sm ${transaction.type === 'Refund' ? 'text-green-600' : 'text-gray-800'}`}>
                  {transaction.type === 'Refund' ? '+' : ''}{transaction.amount}
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  transaction.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                }`}>
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ─── PRICE ALERTS ───────────────────────────────────────
  const renderPriceAlerts = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-base font-bold text-gray-800">Price Alerts</h2>
            <p className="text-gray-500 text-xs mt-0.5">Get notified when prices drop</p>
          </div>
          <button className="bg-blue-600 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors">
            + Create Alert
          </button>
        </div>

        <div className="space-y-3">
          {mockPriceAlerts.map((alert) => (
            <div key={alert.id} className="border border-gray-200 rounded-xl p-3 hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bell className="text-blue-600" size={18} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm">{alert.route}</h4>
                    <div className="flex flex-wrap gap-x-3 mt-1">
                      <div className="text-xs"><span className="text-gray-500">Target: </span><span className="font-medium text-gray-700">{alert.targetPrice}</span></div>
                      <div className="text-xs"><span className="text-gray-500">Current: </span><span className="font-medium text-gray-700">{alert.currentPrice}</span></div>
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">Created {alert.created}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${alert.active ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></div>
                    <span className={`text-xs ${alert.active ? 'text-green-600' : 'text-gray-500'}`}>
                      {alert.active ? 'Active' : 'Off'}
                    </span>
                  </div>
                  <button className="text-gray-400 hover:text-red-500 active:text-red-600 p-1">
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-3 border-2 border-dashed border-gray-300 text-gray-500 hover:text-gray-700 hover:border-gray-400 active:bg-gray-50 rounded-xl py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2">
          + Add New Price Alert
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Total Alerts', value: mockPriceAlerts.length },
          { label: 'Active', value: mockPriceAlerts.filter(a => a.active).length },
          { label: 'Avg Savings', value: '₹1,245' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 p-3 shadow-sm text-center">
            <p className="text-gray-500 text-xs font-medium">{stat.label}</p>
            <h3 className="text-xl font-bold text-gray-800 mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>
    </div>
  );

  // ─── PROFILE ───────────────────────────────────────────
  const renderProfile = () => (
    <div className="space-y-4">
      {/* Profile card */}
      <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-base font-bold text-gray-800">Profile Information</h2>
            <p className="text-gray-500 text-xs mt-0.5">Update your personal details</p>
          </div>
          {editMode ? (
            <div className="flex gap-2">
              <button onClick={handleSave} className="px-3 py-1.5 bg-green-600 text-white rounded-lg text-xs font-medium hover:bg-green-700">Save</button>
              <button onClick={handleCancel} className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-300">Cancel</button>
            </div>
          ) : (
            <button onClick={handleEdit} className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700">Edit</button>
          )}
        </div>

        <div className="space-y-3">
          {[
            { label: 'Full Name', field: 'name', type: 'text', value: userData.name, icon: null },
            { label: 'Email Address', field: 'email', type: 'email', value: userData.email, verified: true, readOnly: true },
            { label: 'Phone Number', field: 'phone', type: 'tel', value: userData.phone },
          ].map(({ label, field, type, value, verified, readOnly }) => (
            <div key={field}>
              <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
              {editMode && !readOnly ? (
                <input
                  type={type}
                  value={tempUserData[field] || ''}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-xl flex items-center justify-between">
                  <span className="font-medium text-gray-800 text-sm">{value}</span>
                  {verified && (
                    <span className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                      <CheckCircle size={12} /> Verified
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Nationality</label>
            {editMode ? (
              <select
                value={tempUserData.nationality}
                onChange={(e) => handleInputChange('nationality', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              >
                {['Indian', 'American', 'British', 'Canadian', 'Australian'].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            ) : (
              <div className="p-3 bg-gray-50 rounded-xl flex items-center gap-2">
                <Globe size={14} className="text-gray-400" />
                <span className="font-medium text-gray-800 text-sm">{userData.nationality}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Account Summary */}
      <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3 text-sm">Account Summary</h3>
        <div className="space-y-2">
          {[
            { label: 'Member Since', value: userData.memberSince },
            { label: 'Account Tier', value: userData.tier, highlight: true },
            { label: 'Travel Coins', value: `🪙 ${userData.coins.toLocaleString()}` },
            { label: 'Email Verified', value: 'Yes', green: true },
          ].map(({ label, value, highlight, green }) => (
            <div key={label} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
              <span className="text-gray-600 text-sm">{label}</span>
              <span className={`font-medium text-sm ${highlight ? 'text-blue-600' : green ? 'text-green-600' : 'text-gray-800'}`}>
                {highlight ? <span className="flex items-center gap-1"><Award size={12} />{value}</span> : value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Support */}
      <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Headphones className="text-blue-600" size={20} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-sm">Need Help?</h3>
            <p className="text-gray-500 text-xs">24/7 support available</p>
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors">
          Contact Support
        </button>
      </div>
    </div>
  );

  // ─── SECURITY ─────────────────────────────────────────
  const renderSecurity = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
        <h2 className="text-base font-bold text-gray-800 mb-4">Security Settings</h2>
        <div className="space-y-3">
          {/* Password */}
          <div className="p-4 border border-gray-200 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">Password</h4>
                <p className="text-gray-500 text-xs">Last changed 2 months ago</p>
              </div>
              <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700">Change</button>
            </div>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} value="••••••••••••" readOnly
                className="w-full p-3 bg-gray-50 rounded-xl pr-12 font-mono text-sm" />
              <button onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* 2FA */}
          <div className="p-4 border border-gray-200 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex-1 pr-3">
                <h4 className="font-semibold text-gray-800 text-sm">Two-Factor Authentication</h4>
                <p className="text-gray-500 text-xs mt-0.5">Extra layer of security</p>
              </div>
              <button onClick={toggle2FA}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0 ${is2FAEnabled ? 'bg-blue-600' : 'bg-gray-300'}`}>
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${is2FAEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            {is2FAEnabled && (
              <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-700 text-xs">✅ 2FA enabled. Verify login with your authenticator app.</p>
              </div>
            )}
          </div>

          {/* Devices */}
          <div className="p-4 border border-gray-200 rounded-xl">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">Active Sessions</h4>
                <p className="text-gray-500 text-xs">Devices where you're logged in</p>
              </div>
              <button className="text-blue-600 text-xs font-medium hover:underline">View All</button>
            </div>
            <div className="space-y-2">
              {mockDevices.map((device) => (
                <div key={device.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Smartphone className="text-gray-600" size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-gray-800 text-sm truncate">{device.name}</p>
                      <p className="text-gray-500 text-xs truncate">{device.os} • {device.location}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    <div className="text-xs text-gray-600">{device.lastActive}</div>
                    {device.id === 1 && <div className="text-xs text-green-600 font-medium">Current</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-xl p-4">
        <h3 className="font-bold text-gray-800 mb-2 text-sm">Security Tips</h3>
        <ul className="space-y-1.5">
          {['Use a strong, unique password', 'Enable two-factor authentication', 'Regularly review active sessions', 'Keep your recovery email updated'].map((tip) => (
            <li key={tip} className="flex items-center gap-2 text-xs text-gray-600">
              <CheckCircle size={12} className="text-green-500 flex-shrink-0" />{tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  // ─── SETTINGS ─────────────────────────────────────────
  const renderSettings = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
        <h2 className="text-base font-bold text-gray-800 mb-4">Account Settings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: Bell, color: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Notifications', desc: 'Manage email and push alerts' },
            { icon: Globe, color: 'bg-purple-100', iconColor: 'text-purple-600', title: 'Language & Region', desc: 'Set your preferred language' },
            { icon: Download, color: 'bg-green-100', iconColor: 'text-green-600', title: 'Data & Privacy', desc: 'Download or delete your data' },
            { icon: HelpCircle, color: 'bg-orange-100', iconColor: 'text-orange-600', title: 'Help & Support', desc: 'FAQs and contact info' },
          ].map(({ icon: Icon, color, iconColor, title, desc }) => (
            <button key={title} className="p-4 border border-gray-200 rounded-xl text-left hover:bg-gray-50 active:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-9 h-9 ${color} rounded-lg flex items-center justify-center`}>
                  <Icon className={iconColor} size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">{title}</h4>
                  <p className="text-gray-500 text-xs">{desc}</p>
                </div>
              </div>
              <span className="text-blue-600 text-xs font-medium">Configure →</span>
            </button>
          ))}
        </div>
      </div>

      {/* Logout button in settings */}
      <button
        onClick={handleLogout}
        className="w-full flex items-center justify-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 font-medium hover:bg-red-100 active:bg-red-200 transition-colors"
      >
        <LogOut size={18} /> Logout
      </button>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard': return renderDashboard();
      case 'Bookings': return renderBookings();
      case 'Price Alerts': return renderPriceAlerts();
      case 'Profile': return renderProfile();
      case 'Security': return renderSecurity();
      case 'Settings': return renderSettings();
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── MOBILE TOP HEADER ── */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-50 md:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="h-9 w-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm"
              >
                {getInitials(userData.name)}
              </button>
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                  {notifications}
                </span>
              )}
            </div>
            <div>
              <p className="text-xs text-gray-500">Hello,</p>
              <p className="text-sm font-bold text-gray-800 leading-tight">{userData.name.split(' ')[0]}</p>
            </div>
          </div>

          <h1 className="text-sm font-bold text-gray-700 absolute left-1/2 -translate-x-1/2">{activeTab}</h1>

          <button
            onClick={() => setShowMobileMenu(true)}
            className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
          >
            <Menu size={20} className="text-gray-700" />
          </button>
        </div>

        {/* Profile quick dropdown */}
        {showProfileMenu && (
          <div className="absolute left-4 top-16 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
            <div className="px-4 py-2 border-b border-gray-100">
              <p className="font-semibold text-gray-800 text-sm">{userData.name}</p>
              <p className="text-xs text-gray-500 truncate">{userData.email}</p>
            </div>
            {[
              { id: 'Profile', icon: User, label: 'My Profile' },
              { id: 'Security', icon: Shield, label: 'Security' },
              { id: 'Settings', icon: Settings, label: 'Settings' },
            ].map(item => (
              <button key={item.id} onClick={() => { handleTabChange(item.id); setShowProfileMenu(false); }}
                className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50 flex items-center gap-2 text-sm">
                <item.icon size={15} />{item.label}
              </button>
            ))}
            <div className="border-t border-gray-100 mt-1 pt-1">
              <button onClick={handleLogout} className="w-full text-left px-4 py-2.5 text-red-600 hover:bg-red-50 flex items-center gap-2 text-sm">
                <LogOut size={15} />Logout
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── MOBILE FULL DRAWER MENU ── */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowMobileMenu(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col">
            <div className="p-5 border-b border-gray-100 flex items-center gap-3">
              <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {getInitials(userData.name)}
              </div>
              <div>
                <p className="font-bold text-gray-800">{userData.name}</p>
                <p className="text-xs text-gray-500 truncate max-w-[160px]">{userData.email}</p>
                <span className="text-xs text-blue-600 font-semibold flex items-center gap-1 mt-0.5">
                  <Award size={11} />{userData.tier}
                </span>
              </div>
              <button onClick={() => setShowMobileMenu(false)} className="ml-auto p-1.5 rounded-lg hover:bg-gray-100">
                <X size={18} className="text-gray-500" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              {navigationItems.map((item) => (
                <button key={item.id} onClick={() => handleTabChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === item.id ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'
                  }`}>
                  <item.icon size={18} />
                  <span className="font-medium text-sm">{item.id}</span>
                  {activeTab === item.id && <ChevronRight size={14} className="ml-auto" />}
                </button>
              ))}
            </nav>
            <div className="p-4 border-t border-gray-100">
              <button onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors">
                <LogOut size={18} />
                <span className="font-medium text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex">
        {/* ── DESKTOP SIDEBAR ── */}
        <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col fixed h-screen top-0">
          <div className="p-6 border-b border-gray-200">
            <div className="text-xl font-bold text-blue-600">USER DASHBOARD</div>
          </div>
          <nav className="mt-4 px-4 space-y-1 flex-1 overflow-y-auto">
            {navigationItems.map((item) => (
              <button key={item.id} onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === item.id ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'
                }`}>
                <item.icon size={20} />
                <span className="font-medium">{item.id}</span>
                {activeTab === item.id && <ChevronRight size={16} className="ml-auto" />}
              </button>
            ))}
          </nav>
          {/* Desktop logout */}
          <div className="p-4 border-t border-gray-100">
            <button onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors">
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="flex-1 md:ml-64 pb-24 md:pb-0">
          {/* Desktop Header */}
          <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10 hidden md:flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{activeTab}</h1>
              <p className="text-gray-500 text-sm mt-0.5">Manage your travel preferences and account settings</p>
            </div>
            <div className="relative">
              <button onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="h-11 w-11 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 border-2 border-white shadow-sm font-bold hover:border-blue-300 transition-colors">
                {getInitials(userData.name)}
              </button>
              {showProfileMenu && (
                <div className="absolute right-0 top-14 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="font-semibold text-gray-800">{userData.name}</p>
                    <p className="text-xs text-gray-500 truncate">{userData.email}</p>
                    <p className="text-xs text-blue-600 mt-1">Member since {userData.memberSince}</p>
                  </div>
                  {[
                    { id: 'Profile', icon: User, label: 'My Profile' },
                    { id: 'Settings', icon: Settings, label: 'Account Settings' },
                    { id: 'Security', icon: Shield, label: 'Security' },
                  ].map(item => (
                    <button key={item.id} onClick={() => { setActiveTab(item.id); setShowProfileMenu(false); }}
                      className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50 flex items-center gap-2 text-sm">
                      <item.icon size={15} />{item.label}
                    </button>
                  ))}
                  <div className="border-t border-gray-100 my-1">
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2.5 text-red-600 hover:bg-red-50 flex items-center gap-2 text-sm">
                      <LogOut size={15} />Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </header>

          <div className="p-4 md:p-6">
            {renderContent()}
          </div>
        </main>
      </div>

      {/* ── MOBILE BOTTOM NAV BAR ── */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 md:hidden">
        <div className="flex">
          {bottomNavItems.map((item) => (
            <button key={item.id} onClick={() => handleTabChange(item.id)}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2 px-1 transition-colors ${
                activeTab === item.id ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
              }`}>
              <item.icon size={20} strokeWidth={activeTab === item.id ? 2.5 : 1.8} />
              <span className="text-[10px] font-medium">{item.label}</span>
              {activeTab === item.id && <div className="w-1 h-1 rounded-full bg-blue-600 mt-0.5" />}
            </button>
          ))}
          {/* More button for hidden tabs */}
          <button onClick={() => setShowMobileMenu(true)}
            className={`flex-1 flex flex-col items-center gap-0.5 py-2 px-1 transition-colors ${
              ['Security', 'Settings'].includes(activeTab) ? 'text-blue-600' : 'text-gray-400'
            }`}>
            <Menu size={20} strokeWidth={1.8} />
            <span className="text-[10px] font-medium">More</span>
          </button>
        </div>
      </nav>

    </div>
  );
};

export default UserDashboard;