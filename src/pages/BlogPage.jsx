import React, { useState } from 'react';
import {
  Newspaper,
  Calendar,
  User,
  Clock,
  Tag,
  ChevronRight,
  Search,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Eye,
  TrendingUp,
  ArrowRight,
  Award,
  Bus,
  Plane,
  Hotel,
  MapPin,
  Smartphone,
  Shield,
  CreditCard,
  Users,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Blog Categories
  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'travel-tips', name: 'Travel Tips', count: 4 },
    { id: 'destinations', name: 'Destinations', count: 3 },
    { id: 'bus-travel', name: 'Bus Travel', count: 3 },
    { id: 'news', name: 'News & Updates', count: 2 },
    { id: 'guides', name: 'Travel Guides', count: 2 }
  ];

  // Blog Posts Data - Recent ones on top
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Tips for a Comfortable Bus Journey',
      excerpt: 'From choosing the right seat to packing smart, here are 10 tips that will make your bus journey comfortable and enjoyable.',
      content: 'Full content here...',
      category: 'travel-tips',
      author: {
        name: 'Priya Sharma',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        role: 'Travel Expert'
      },
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'March 15, 2024',
      readTime: '5 min read',
      views: 1234,
      likes: 89,
      comments: 23,
      tags: ['bus travel', 'tips', 'comfort'],
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: 'Summer Travel Guide 2024: Best Hill Stations to Visit',
      excerpt: 'Planning a summer getaway? Check out our curated list of the best hill stations perfect for beating the heat.',
      content: 'Full content here...',
      category: 'destinations',
      author: {
        name: 'Rahul Mehta',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        role: 'Travel Writer'
      },
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'March 12, 2024',
      readTime: '7 min read',
      views: 2100,
      likes: 156,
      comments: 34,
      tags: ['summer', 'hill stations', 'travel guide'],
      featured: true,
      trending: true
    },
    {
      id: 3,
      title: 'How to Book Bus Tickets Online: A Complete Guide',
      excerpt: 'New to online bus booking? Step-by-step guide to book bus tickets easily on BirdMyTrip.',
      content: 'Full content here...',
      category: 'guides',
      author: {
        name: 'Amit Kumar',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        role: 'Product Manager'
      },
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'March 10, 2024',
      readTime: '6 min read',
      views: 3456,
      likes: 234,
      comments: 45,
      tags: ['booking', 'guide', 'beginners'],
      featured: true,
      trending: false
    },
    {
      id: 4,
      title: 'New Feature: Real-Time Bus Tracking Now Available',
      excerpt: 'We are excited to announce real-time bus tracking on BirdMyTrip. Never miss your bus again!',
      content: 'Full content here...',
      category: 'news',
      author: {
        name: 'Neha Singh',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        role: 'Product Marketing'
      },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'March 8, 2024',
      readTime: '4 min read',
      views: 5678,
      likes: 445,
      comments: 67,
      tags: ['feature', 'tracking', 'update'],
      featured: false,
      trending: true
    },
    {
      id: 5,
      title: 'Budget Travel: How to Travel India on ₹500/Day',
      excerpt: 'Traveling on a budget? Here are practical tips and strategies to explore India without breaking the bank.',
      content: 'Full content here...',
      category: 'travel-tips',
      author: {
        name: 'Vikram Patel',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        role: 'Budget Travel Expert'
      },
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'March 5, 2024',
      readTime: '8 min read',
      views: 4321,
      likes: 312,
      comments: 56,
      tags: ['budget', 'saving', 'backpacking'],
      featured: false,
      trending: true
    },
    {
      id: 6,
      title: 'Understanding Bus Types: AC vs Non-AC, Sleeper vs Seater',
      excerpt: 'Confused between different bus types? We break down the pros and cons of each to help you choose wisely.',
      content: 'Full content here...',
      category: 'bus-travel',
      author: {
        name: 'Rajesh Khanna',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        role: 'Bus Operations'
      },
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'March 3, 2024',
      readTime: '6 min read',
      views: 2890,
      likes: 178,
      comments: 41,
      tags: ['bus types', 'ac', 'sleeper'],
      featured: false,
      trending: false
    },
    {
      id: 7,
      title: 'Top 5 Weekend Getaways from Mumbai by Bus',
      excerpt: 'Escape the city chaos! Discover the best weekend destinations near Mumbai accessible by bus.',
      content: 'Full content here...',
      category: 'destinations',
      author: {
        name: 'Anjali Desai',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        role: 'Travel Blogger'
      },
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'March 1, 2024',
      readTime: '5 min read',
      views: 3452,
      likes: 267,
      comments: 52,
      tags: ['weekend', 'mumbai', 'getaways'],
      featured: false,
      trending: false
    },
    {
      id: 8,
      title: 'Safety First: Our Commitment to COVID-19 Safety Protocols',
      excerpt: 'Learn about the safety measures we have implemented to ensure safe travel for all passengers.',
      content: 'Full content here...',
      category: 'news',
      author: {
        name: 'Dr. Sanjay Gupta',
        avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        role: 'Health Advisor'
      },
      image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'Feb 28, 2024',
      readTime: '4 min read',
      views: 1876,
      likes: 134,
      comments: 28,
      tags: ['safety', 'covid', 'health'],
      featured: false,
      trending: false
    },
    {
      id: 9,
      title: 'Volvo vs Non-Volvo: Which Bus Should You Choose?',
      excerpt: 'A detailed comparison between Volvo and Non-Volvo buses to help you make the right choice.',
      content: 'Full content here...',
      category: 'bus-travel',
      author: {
        name: 'Suresh Reddy',
        avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        role: 'Fleet Manager'
      },
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'Feb 25, 2024',
      readTime: '6 min read',
      views: 2341,
      likes: 167,
      comments: 39,
      tags: ['volvo', 'comparison', 'luxury'],
      featured: false,
      trending: false
    },
    {
      id: 10,
      title: 'How to Use BirdMyTrip App: A Beginner\'s Guide',
      excerpt: 'New to the BirdMyTrip app? Here\'s everything you need to know to book your first bus ticket.',
      content: 'Full content here...',
      category: 'guides',
      author: {
        name: 'Pooja Malhotra',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        role: 'UX Designer'
      },
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'Feb 22, 2024',
      readTime: '5 min read',
      views: 1987,
      likes: 145,
      comments: 31,
      tags: ['app', 'mobile', 'tutorial'],
      featured: false,
      trending: false
    },
    {
      id: 11,
      title: 'Solo Female Travel: Tips and Safety Guidelines',
      excerpt: 'Essential tips for solo female travelers to ensure a safe and empowering journey.',
      content: 'Full content here...',
      category: 'travel-tips',
      author: {
        name: 'Kavita Reddy',
        avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        role: 'Safety Ambassador'
      },
      image: 'https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'Feb 20, 2024',
      readTime: '7 min read',
      views: 5678,
      likes: 489,
      comments: 78,
      tags: ['women', 'solo', 'safety'],
      featured: true,
      trending: true
    },
    {
      id: 12,
      title: 'Festival Special: Bus Booking Tips for Diwali Travel',
      excerpt: 'Planning travel during Diwali? Book smart with these tips for festival season travel.',
      content: 'Full content here...',
      category: 'bus-travel',
      author: {
        name: 'Arun Verma',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        role: 'Travel Analyst'
      },
      image: 'https://images.unsplash.com/photo-1600716051809-e997e11a5d52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      date: 'Feb 18, 2024',
      readTime: '5 min read',
      views: 2345,
      likes: 178,
      comments: 34,
      tags: ['festival', 'diwali', 'booking'],
      featured: false,
      trending: false
    }
  ];

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 2);
  
  // Get trending posts
  const trendingPosts = blogPosts.filter(post => post.trending).slice(0, 3);

  // Format number with K, M
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-6">
              <Newspaper className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Travel Stories & Updates</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              BirdMyTrip Blog
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Travel tips, destination guides, company updates, and stories from the road.
              Your daily dose of travel inspiration.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles, destinations, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:outline-none focus:border-white focus:bg-white/20 text-lg transition-all"
                />
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-200" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-16">
          <svg className="absolute bottom-0 w-full h-16 text-gray-50 fill-current" preserveAspectRatio="none" viewBox="0 0 1440 54">
            <path d="M0 22L120 16.7C240 11 480 1 720 7.7C960 14 1200 38 1320 50L1440 62V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && searchQuery === '' && selectedCategory === 'all' && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <Award className="w-6 h-6 mr-2 text-yellow-500" />
                Featured Stories
              </h2>
              <Link to="/blog/featured" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                View all
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <div key={post.id} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-blue-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-yellow-500 text-white rounded-lg text-xs font-medium flex items-center">
                        <Award className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-700 rounded-lg text-xs font-medium">
                        {post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-800">{post.author.name}</p>
                        <p className="text-xs text-gray-500">{post.author.role}</p>
                      </div>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-blue-600 font-medium flex items-center group-hover:translate-x-1 transition-transform"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Sidebar */}
          <div className="w-full lg:w-80 mb-8 lg:mb-0">
            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6 top-24">
              <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2 text-blue-600" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      selectedCategory === category.id
                        ? 'bg-white text-blue-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Trending Now */}
            {trendingPosts.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-red-500" />
                  Trending Now
                </h3>
                <div className="space-y-4">
                  {trendingPosts.map((post, index) => (
                    <Link 
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="flex items-start gap-3 group"
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-lg flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {formatNumber(post.views)}
                          </span>
                          <span className="flex items-center">
                            <Heart className="w-3 h-3 mr-1" />
                            {formatNumber(post.likes)}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

           
          </div>

          {/* Main Content - Blog Posts Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <span className="text-sm text-gray-500">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
              </span>
            </div>

            {/* Blog Posts Grid - Recent on Top */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <div key={post.id} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-blue-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {post.trending && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg text-xs font-medium flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-700 rounded-lg text-xs font-medium">
                        {post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-xs text-gray-600">{post.author.name}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    
                    <Link to={`/blog/${post.id}`}>
                      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {formatNumber(post.views)}
                        </span>
                        <span className="flex items-center">
                          <Heart className="w-3 h-3 mr-1" />
                          {formatNumber(post.likes)}
                        </span>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-blue-600 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform"
                      >
                        Read
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="bg-white rounded-2xl border border-gray-200 p-16 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-6">
                  <Search className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No articles found</h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  We couldn't find any articles matching your search. Try adjusting your keywords or browse different categories.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Load More Button */}
            {filteredPosts.length > 0 && filteredPosts.length < blogPosts.length && (
              <div className="mt-8 text-center">
                <button className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors">
                  Load More Articles
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Topics Grid */}
        {searchQuery === '' && selectedCategory === 'all' && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Topics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Bus, name: 'Bus Travel', count: 12 },
                { icon: MapPin, name: 'Destinations', count: 8 },
                { icon: Hotel, name: 'Hotels', count: 6 },
                { icon: Plane, name: 'Flight Tips', count: 5 },
                { icon: Shield, name: 'Safety', count: 4 },
                { icon: CreditCard, name: 'Payment', count: 3 },
                { icon: Smartphone, name: 'App Guide', count: 3 },
                { icon: Users, name: 'Group Travel', count: 2 }
              ].map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchQuery(topic.name);
                      setSelectedCategory('all');
                    }}
                    className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-center"
                  >
                    <div className="inline-flex p-3 bg-blue-50 rounded-xl mb-2 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-800">{topic.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{topic.count} articles</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;