import React, { useState } from 'react';
import {
  Briefcase,
  Users,
  GraduationCap,
  TrendingUp,
  Heart,
  Coffee,
  Home,
  Smartphone,
  Award,
  Clock,
  CheckCircle,
  MapPin,
  DollarSign,
  ChevronRight,
  Search,
  Filter,
  Building2,
  Shield,
  Zap,
  Globe
} from 'lucide-react';

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState('vendorInfo');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const benefits = [
    { icon: Heart, title: 'Health Insurance', description: 'Comprehensive medical coverage for you and your family' },
    { icon: Home, title: 'Work From Home', description: 'Flexible remote work options available' },
    { icon: Coffee, title: 'Free Meals', description: 'Breakfast, lunch, and unlimited coffee at office' },
    { icon: TrendingUp, title: 'Stock Options', description: 'ESOPs for all full-time employees' },
    { icon: GraduationCap, title: 'Learning Budget', description: '₹50,000 annual budget for courses & conferences' },
    { icon: Clock, title: 'Flexible Hours', description: 'No 9-5, work when you\'re most productive' },
    { icon: Smartphone, title: 'Latest Devices', description: 'MacBook Pro + latest smartphone provided' },
    { icon: Award, title: 'Performance Bonus', description: 'Quarterly bonuses based on performance' }
  ];

  const departments = [
    { id: 'all', name: 'All Departments', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 5 },
    { id: 'product', name: 'Product', count: 2 },
    { id: 'sales', name: 'Sales & Marketing', count: 3 },
    { id: 'operations', name: 'Operations', count: 1 },
    { id: 'customer', name: 'Customer Support', count: 1 }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'engineering',
      location: 'Mumbai / Remote',
      type: 'Full Time',
      experience: '5-8 years',
      description: 'Build scalable web applications using React, Node.js, and cloud technologies.',
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Product Manager - Travel',
      department: 'product',
      location: 'Bangalore',
      type: 'Full Time',
      experience: '4-7 years',
      description: 'Drive product strategy and roadmap for our bus booking platform.',
      posted: '5 days ago'
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full Time',
      experience: '3-6 years',
      description: 'Manage AWS infrastructure, CI/CD pipelines, and system reliability.',
      posted: '1 week ago'
    },
    {
      id: 4,
      title: 'Regional Sales Manager',
      department: 'sales',
      location: 'Delhi',
      type: 'Full Time',
      experience: '6-9 years',
      description: 'Lead bus operator partnerships and sales strategy for North India.',
      posted: '3 days ago'
    },
    {
      id: 5,
      title: 'UX/UI Designer',
      department: 'product',
      location: 'Mumbai',
      type: 'Full Time',
      experience: '3-5 years',
      description: 'Design intuitive user experiences for web and mobile platforms.',
      posted: '4 days ago'
    },
    {
      id: 6,
      title: 'Vendor Relations Manager',
      department: 'operations',
      location: 'Mumbai',
      type: 'Full Time',
      experience: '4-6 years',
      description: 'Manage relationships with bus operators and onboard new vendors.',
      posted: '1 week ago'
    }
  ];

  const vendorInfo = {
    title: 'Partner with Us',
    description: 'Join India\'s fastest-growing bus travel platform. List your buses, reach millions of customers, and grow your business.',
    stats: [
      { label: 'Active Operators', value: '2000+' },
      { label: 'Monthly Bookings', value: '5L+' },
      { label: 'Commission', value: '15%' },
      { label: 'Payout Cycle', value: '7 Days' }
    ],
    features: [
      'Reach 5M+ monthly active users',
      'Real-time booking management',
      'Automated settlement system',
      'Dedicated relationship manager',
      'Performance insights dashboard',
      '24/7 technical support'
    ]
  };

  const filteredJobs = selectedDepartment === 'all' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-6">
              <Briefcase className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Join Our Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Careers at BirdMyTrip
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Build the future of travel with us. We're looking for passionate individuals 
              to join our mission of making bus travel simple and accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button 
                onClick={() => setActiveTab('jobs')}
                className={`px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'jobs' 
                    ? 'bg-white text-blue-600 shadow-lg' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Users className="w-4 h-4" />
                Explore Jobs
              </button> */}
              <button 
                onClick={() => setActiveTab('vendor')}
                className={`px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'vendor' 
                    ? 'bg-white text-blue-600 shadow-lg' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Building2 className="w-4 h-4" />
                Vendor Login
              </button>
            </div>
          </div>
        </div>
        <div className="relative h-16">
          <svg className="absolute bottom-0 w-full h-16 text-gray-50 fill-current" preserveAspectRatio="none" viewBox="0 0 1440 54">
            <path d="M0 22L120 16.7C240 11 480 1 720 7.7C960 14 1200 38 1320 50L1440 62V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activeTab === 'jobs' ? (
          <>
            {/* Why Join Us */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Join BirdMyTrip?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer more than just a job. Build your career with India's leading travel tech company.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all group">
                    <div className="p-3 bg-blue-100 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Open Positions */}
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Open Positions</h2>
                  <p className="text-gray-600 mt-2">{filteredJobs.length} jobs available</p>
                </div>
                
                {/* Department Filter */}
                <div className="flex flex-wrap gap-2">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDepartment(dept.id)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                        selectedDepartment === dept.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {dept.name} ({dept.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Jobs List */}
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <div key={job.id} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {job.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {job.department.charAt(0).toUpperCase() + job.department.slice(1)}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.experience}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-3">{job.description}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-sm text-gray-500">Posted {job.posted}</span>
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                          Apply Now
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Vendor Section - Login/Registration */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Vendor Info */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4 mr-2" />
                Bus Operators & Partners
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{vendorInfo.title}</h2>
              <p className="text-xl text-gray-600 mb-8">{vendorInfo.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {vendorInfo.stats.map((stat, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Why Partner With Us?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {vendorInfo.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Trusted by 2000+ Operators</h4>
                    <p className="text-sm text-gray-600">
                      Join India's largest bus operators network. Get instant bookings, 
                      automated settlements, and real-time insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vendor Login Form */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8">
              <div className="text-center mb-8">
                <div className="inline-flex p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Vendor Portal</h3>
                <p className="text-gray-600">Login to manage your buses, bookings, and payouts</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="vendor@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    Forgot password?
                  </button>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
                  <Building2 className="w-4 h-4" />
                  Login to Vendor Portal
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">New to BirdMyTrip?</span>
                  </div>
                </div>

                <button className="w-full bg-white border-2 border-blue-600 text-blue-600 py-4 rounded-xl font-medium hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                  Register as Vendor
                </button>

                <p className="text-xs text-center text-gray-500">
                  By logging in, you agree to our Vendor Terms and Privacy Policy
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareersPage;