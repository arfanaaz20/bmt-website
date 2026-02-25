import React from 'react';
import {
  Users,
  Target,
  Eye,
  Heart,
  Award,
  Shield,
  Bus,
  Globe,
  Clock,
  CheckCircle,
  ChevronRight,
  Star,
  TrendingUp,
  Briefcase,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

const AboutUsPage = () => {
  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'Started with a vision to revolutionize bus travel in India' },
    { year: '2019', title: '1 Million Users', description: 'Reached 1 million happy travelers within first year' },
    { year: '2020', title: 'Pan-India Expansion', description: 'Expanded services to 500+ cities across India' },
    { year: '2021', title: 'Mobile App Launch', description: 'Launched award-winning mobile app with live tracking' },
    { year: '2022', title: '5 Million Users', description: 'Crossed 5 million user milestone' },
    { year: '2023', title: 'International Presence', description: 'Expanded to Nepal, Bhutan & Bangladesh' }
  ];

  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'Every decision we make puts our customers at the center.',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'We prioritize the safety and security of our travelers.',
      color: 'green'
    },
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We live and breathe travel, making journeys memorable.',
      color: 'red'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Constantly evolving to provide the best booking experience.',
      color: 'purple'
    }
  ];

  const leadership = [
    {
      name: 'Rahul Sharma',
      position: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'Former IIT Delhi graduate with 15+ years in travel tech'
    },
    {
      name: 'Priya Patel',
      position: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'Tech visionary with expertise in scalable platforms'
    },
    {
      name: 'Amit Kumar',
      position: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'Operations expert with pan-India logistics experience'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-6">
              <Users className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Since 2018</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About BirdMyTrip
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              India's most trusted bus booking platform, connecting millions of travelers 
              to their destinations with safety, comfort, and convenience.
            </p>
          </div>
        </div>
        <div className="relative h-16">
          <svg className="absolute bottom-0 w-full h-16 text-gray-50 fill-current" preserveAspectRatio="none" viewBox="0 0 1440 54">
            <path d="M0 22L120 16.7C240 11 480 1 720 7.7C960 14 1200 38 1320 50L1440 62V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Our Story
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Making Bus Travel Simple & Accessible
            </h2>
            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              BirdMyTrip was founded in 2018 with a simple mission: to make bus travel 
              in India hassle-free, transparent, and enjoyable. What started as a small 
              team of travel enthusiasts has now grown into India's leading bus booking 
              platform.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Today, we serve over 5 million happy travelers across 500+ cities, 
              partnering with 2000+ bus operators to provide the widest selection of 
              buses at the best prices.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">5M+ Travelers</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">500+ Cities</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-700">2000+ Operators</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
              <Briefcase className="w-8 h-8 mb-4" />
              <div className="text-3xl font-bold mb-1">6+</div>
              <div className="text-blue-100">Years of Service</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
              <Users className="w-8 h-8 mb-4" />
              <div className="text-3xl font-bold mb-1">5M+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white">
              <Bus className="w-8 h-8 mb-4" />
              <div className="text-3xl font-bold mb-1">2000+</div>
              <div className="text-purple-100">Bus Partners</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white">
              <Globe className="w-8 h-8 mb-4" />
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-amber-100">Cities Covered</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-shadow">
            <div className="p-3 bg-blue-100 rounded-xl w-fit mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To provide seamless, affordable, and reliable bus travel solutions to every 
              Indian, leveraging technology to enhance the booking and travel experience.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-shadow">
            <div className="p-3 bg-purple-100 rounded-xl w-fit mb-6">
              <Eye className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become India's most loved travel platform, connecting every corner of the 
              country through sustainable and comfortable bus transportation.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at BirdMyTrip
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:border-blue-300 transition-all group">
                  <div className={`p-4 bg-${value.color}-100 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 text-${value.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that shaped our growth
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-indigo-600 hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center gap-8`}>
                  <div className="flex-1 text-center md:text-right">
                    {index % 2 === 0 && (
                      <>
                        <h3 className="text-2xl font-bold text-gray-800">{milestone.year}</h3>
                        <p className="text-xl font-semibold text-blue-600 mb-2">{milestone.title}</p>
                        <p className="text-gray-600">{milestone.description}</p>
                      </>
                    )}
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-bold z-10">
                    {index + 1}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    {index % 2 !== 0 && (
                      <>
                        <h3 className="text-2xl font-bold text-gray-800">{milestone.year}</h3>
                        <p className="text-xl font-semibold text-blue-600 mb-2">{milestone.title}</p>
                        <p className="text-gray-600">{milestone.description}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals driving our vision forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-xl transition-all">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full rounded-full object-cover border-4 border-blue-100"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{leader.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{leader.position}</p>
                <p className="text-gray-600 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default AboutUsPage;