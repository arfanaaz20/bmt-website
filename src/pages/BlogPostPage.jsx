import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  Calendar,
  User,
  Clock,
  Tag,
  ChevronLeft,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Eye,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Award,
  TrendingUp,
  ArrowRight,
  Bus,
  MapPin,
  Shield,
  CheckCircle,
  AlertCircle,
  Printer,
  Download,
  ThumbsUp,
  Reply,
  Send,
  Star
} from 'lucide-react';

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: {
        name: 'Rahul Sharma',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        role: 'Verified Traveler'
      },
      content: 'Very helpful guide! I used these tips on my recent trip and it made the journey so comfortable.',
      date: '2 hours ago',
      likes: 12,
      replies: [
        {
          id: 11,
          author: {
            name: 'Priya Patel',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
            role: 'Author'
          },
          content: 'So glad it helped you, Rahul! Happy travels 😊',
          date: '1 hour ago',
          likes: 5
        }
      ]
    },
    {
      id: 2,
      author: {
        name: 'Anjali Desai',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
        role: 'Frequent Traveler'
      },
      content: 'Thanks for sharing! Do you have any tips for overnight bus journeys specifically?',
      date: '5 hours ago',
      likes: 8,
      replies: []
    }
  ]);

  // Mock blog post data - in real app, fetch based on ID
  const post = {
    id: parseInt(id),
    title: '10 Essential Tips for a Comfortable Bus Journey',
    excerpt: 'From choosing the right seat to packing smart, here are 10 tips that will make your bus journey comfortable and enjoyable.',
    content: `
      <p class="mb-4">Bus travel is one of the most affordable and scenic ways to explore India. Whether you're a seasoned traveler or planning your first bus journey, these essential tips will help ensure a smooth and comfortable ride.</p>
      
      <h2 id="1" class="text-2xl font-bold mt-8 mb-4">1. Choose the Right Seat</h2>
      <p class="mb-4">Your seat choice can make or break your journey. Window seats offer scenic views and a wall to lean on for sleep. Aisle seats provide easier access to move around. Front seats have less engine noise and smoother ride. Back seats can be bumpier but often have more recline.</p>
      
      // Replace the Pro Tip div with this fixed version:
<div class="bg-blue-50 border-l-4 border-blue-600 p-4 my-6 rounded-r-xl relative overflow-hidden">
  <div class="absolute top-0 left-0 w-1 h-full bg-blue-600"></div>
  <div class="flex items-start gap-3">
    <div class="flex-shrink-0 mt-0.5">
      <AlertCircle class="w-5 h-5 text-blue-600" />
    </div>
    <div class="flex-1">
      <p class="text-sm font-semibold text-blue-800 mb-1">Pro Tip</p>
      <p class="text-sm text-blue-700 leading-relaxed">
        Book early to get your preferred seat. Volvo buses usually have better seat comfort and recline.
      </p>
    </div>
  </div>
</div>
      
      <h2 id="2" class="text-2xl font-bold mt-8 mb-4">2. Pack a Carry-On Essentials Kit</h2>
      <p class="mb-4">Always keep a small bag with overnight essentials accessible. Include:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Neck pillow and light blanket or shawl</li>
        <li>Eye mask and earplugs for sleeping</li>
        <li>Hand sanitizer and wet wipes</li>
        <li>Snacks and a water bottle</li>
        <li>Power bank and charging cables</li>
        <li>Basic medications (motion sickness, pain relief)</li>
      </ul>
      
      <h2 id="3" class="text-2xl font-bold mt-8 mb-4">3. Dress Comfortably</h2>
      <p class="mb-4">Wear loose, breathable clothing. Layers are key as bus temperatures can vary. Slip-on shoes are easier to remove. Avoid heavy jewelry or accessories that might be uncomfortable during sleep.</p>
      
      <h2 id="4" class="text-2xl font-bold mt-8 mb-4">4. Arrive Early at Boarding Point</h2>
      <p class="mb-4">Reach the boarding point at least 15-20 minutes before departure. This gives you time to find the exact spot, store your luggage properly, and settle in without rushing. Some operators may leave exactly on time!</p>
      
      <h2 id="5" class="text-2xl font-bold mt-8 mb-4">5. Stay Hydrated, But Smart</h2>
      <p class="mb-4">Drink water regularly to stay hydrated, especially on long journeys. However, avoid excessive fluids 1-2 hours before restroom breaks. Most luxury buses have onboard restrooms, but not all do.</p>
      
      <h2 id="6" class="text-2xl font-bold mt-8 mb-4">6. Entertainment Prep</h2>
      <p class="mb-4">Download movies, shows, podcasts, or books before your journey. Bus WiFi can be unreliable. Noise-cancelling headphones are a game-changer for peaceful travel.</p>
      
      <h2 id="7" class="text-2xl font-bold mt-8 mb-4">7. Secure Your Valuables</h2>
      <p class="mb-4">Keep wallets, phones, and important documents in a small bag that stays with you at all times. Don't store valuables in the main luggage compartment. Consider a small padlock for your bag.</p>
      
      <h2 id="8" class="text-2xl font-bold mt-8 mb-4">8. Know Your Operator</h2>
      <p class="mb-4">Different operators have different amenities and service levels. Volvo buses offer AC, sometimes WiFi and charging points. Private operators vary. Read reviews before booking.</p>
      
      <h2 id="9" class="text-2xl font-bold mt-8 mb-4">9. Track Your Bus</h2>
      <p class="mb-4">Use BirdMyTrip's real-time bus tracking feature to know exactly where your bus is and get accurate arrival estimates. No more waiting anxiously at the boarding point!</p>
      
      <h2 id="10" class="text-2xl font-bold mt-8 mb-4">10. Share Feedback</h2>
      <p class="mb-4">After your journey, take a moment to rate and review the bus operator. Your feedback helps other travelers make informed decisions and helps operators improve their service.</p>
      
      
    `,
    category: 'travel-tips',
    categoryName: 'Travel Tips',
    author: {
      name: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      role: 'Travel Expert',
      bio: 'Priya has traveled over 50,000 km by bus across India. She loves discovering offbeat destinations and sharing practical travel tips.',
      social: {
        twitter: '#',
        linkedin: '#',
        email: '#'
      }
    },
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    date: 'March 15, 2024',
    readTime: '5 min read',
    views: 1234,
    likes: 89,
    comments: 23,
    shares: 45,
    tags: ['bus travel', 'tips', 'comfort', 'beginner'],
    related: [
      {
        id: 2,
        title: 'Summer Travel Guide 2024: Best Hill Stations',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        date: 'March 12, 2024'
      },
      {
        id: 3,
        title: 'How to Book Bus Tickets Online: A Complete Guide',
        image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        date: 'March 10, 2024'
      },
      {
        id: 5,
        title: 'Budget Travel: How to Travel India on ₹500/Day',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        date: 'March 5, 2024'
      }
    ]
  };

  // Format number with K, M
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = post.title;
    
    let shareUrl = '';
    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`;
        break;
    }
    
    window.open(shareUrl, '_blank');
    setShowShareMenu(false);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: {
          name: 'You',
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
          role: 'Reader'
        },
        content: commentText,
        date: 'Just now',
        likes: 0,
        replies: []
      };
      setComments([newComment, ...comments]);
      setCommentText('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Image */}
      <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
        
        {/* Navigation */}
        <div className="absolute top-6 left-6 z-10">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl text-gray-700 hover:bg-white transition-colors shadow-lg"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Blog
          </button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-6 right-6 z-10">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-medium shadow-lg">
            {post.categoryName}
          </span>
        </div>

        {/* Title Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm lg:text-base text-gray-200">
              <div className="flex items-center">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white mr-3"
                />
                <div>
                  <p className="font-medium text-white">{post.author.name}</p>
                  <p className="text-xs text-gray-300">{post.author.role}</p>
                </div>
              </div>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                {post.date}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                {post.readTime}
              </span>
              <span className="flex items-center">
                <Eye className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                {formatNumber(post.views)} views
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Article Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8">
              {/* Engagement Bar */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                      liked 
                        ? 'bg-red-50 text-red-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                    <span className="font-medium">{post.likes + (liked ? 1 : 0)}</span>
                  </button>
                  
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">{post.comments}</span>
                  </button>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <button 
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className="p-2 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                    
                    {showShareMenu && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-20">
                        <button 
                          onClick={() => handleShare('facebook')}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
                        >
                          <Facebook className="w-4 h-4 text-blue-600" />
                          Facebook
                        </button>
                        <button 
                          onClick={() => handleShare('twitter')}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
                        >
                          <Twitter className="w-4 h-4 text-blue-400" />
                          Twitter
                        </button>
                        <button 
                          onClick={() => handleShare('linkedin')}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
                        >
                          <Linkedin className="w-4 h-4 text-blue-700" />
                          LinkedIn
                        </button>
                        <div className="border-t border-gray-200 my-2"></div>
                        <button 
                          onClick={() => handleShare('email')}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
                        >
                          <Mail className="w-4 h-4 text-gray-600" />
                          Email
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <button 
                    onClick={handleBookmark}
                    className={`p-2 rounded-xl transition-all ${
                      bookmarked 
                        ? 'bg-yellow-50 text-yellow-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Article Content - HTML rendered */}
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-blue-600"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-blue-600" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link
                      key={index}
                      to={`/blog?tag=${tag}`}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Author Card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-6 lg:p-8 my-8">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 border-white shadow-lg"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{post.author.name}</h3>
                      <p className="text-blue-600 font-medium">{post.author.role}</p>
                    </div>
                    <div className="flex gap-2">
                      <a href={post.author.social.twitter} className="p-2 bg-white rounded-lg text-gray-600 hover:text-blue-400 transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a href={post.author.social.linkedin} className="p-2 bg-white rounded-lg text-gray-600 hover:text-blue-700 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href={post.author.social.email} className="p-2 bg-white rounded-lg text-gray-600 hover:text-red-500 transition-colors">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600">{post.author.bio}</p>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
                Comments ({comments.length})
              </h3>

              {/* Comment Form */}
              <form onSubmit={handleCommentSubmit} className="mb-8">
                <div className="flex gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                    alt="Your avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <textarea
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Share your thoughts..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      rows="3"
                    ></textarea>
                    <div className="flex justify-end mt-2">
                      <button 
                        type="submit"
                        disabled={!commentText.trim()}
                        className="px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                    <div className="flex gap-3">
                      <img 
                        src={comment.author.avatar} 
                        alt={comment.author.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium text-gray-800">{comment.author.name}</h4>
                            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                              {comment.author.role}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">{comment.date}</span>
                        </div>
                        <p className="text-gray-700 mb-2">{comment.content}</p>
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600">
                            <ThumbsUp className="w-3 h-3" />
                            {comment.likes}
                          </button>
                          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600">
                            <Reply className="w-3 h-3" />
                            Reply
                          </button>
                        </div>

                        {/* Replies */}
                        {comment.replies.length > 0 && (
                          <div className="mt-4 pl-6 border-l-2 border-gray-200 space-y-4">
                            {comment.replies.map((reply) => (
                              <div key={reply.id} className="flex gap-3">
                                <img 
                                  src={reply.author.avatar} 
                                  alt={reply.author.name}
                                  className="w-8 h-8 rounded-full"
                                />
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-1">
                                    <div className="flex items-center gap-2">
                                      <h5 className="font-medium text-gray-800">{reply.author.name}</h5>
                                      <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                                        {reply.author.role}
                                      </span>
                                    </div>
                                    <span className="text-xs text-gray-500">{reply.date}</span>
                                  </div>
                                  <p className="text-sm text-gray-700">{reply.content}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - NO STICKY, NORMAL FLOW */}
          <div className="lg:col-span-4 space-y-6">
            {/* Table of Contents - NORMAL, NOT STICKY */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600" />
                Table of Contents
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#1" className="text-gray-600 hover:text-blue-600 flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    Choose the Right Seat
                  </a>
                </li>
                <li>
                  <a href="#2" className="text-gray-600 hover:text-blue-600 flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    Pack Essentials Kit
                  </a>
                </li>
                <li>
                  <a href="#3" className="text-gray-600 hover:text-blue-600 flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    Dress Comfortably
                  </a>
                </li>
                <li>
                  <a href="#4" className="text-gray-600 hover:text-blue-600 flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                    Arrive Early
                  </a>
                </li>
                <li>
                  <a href="#5" className="text-gray-600 hover:text-blue-600 flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                    Stay Hydrated
                  </a>
                </li>
                <li>
                  <a href="#6" className="text-gray-600 hover:text-blue-600 flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">6</span>
                    Entertainment Prep
                  </a>
                </li>
                <li>
                  <a href="#7" className="text-gray-600 hover:text-blue-600 flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">7</span>
                    Secure Your Valuables
                  </a>
                </li>
                <li>
                  <a href="#8" className="text-gray-600 hover:text-blue-600 flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">8</span>
                    Know Your Operator
                  </a>
                </li>
                <li>
                  <a href="#9" className="text-gray-600 hover:text-blue-600 flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">9</span>
                    Track Your Bus
                  </a>
                </li>
                <li>
                  <a href="#10" className="text-gray-600 hover:text-blue-600 flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">10</span>
                    Share Feedback
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-500" />
                Related Articles
              </h3>
              <div className="space-y-4">
                {post.related.map((article) => (
                  <Link 
                    key={article.id}
                    to={`/blog/${article.id}`}
                    className="flex gap-3 group"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{article.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Never Miss a Post</h3>
              <p className="text-blue-100 text-sm mb-4">
                Get weekly travel tips and destination guides delivered to your inbox.
              </p>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white mb-3"
              />
              <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>

            {/* Advertisement */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200 p-6 text-center">
              <Bus className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Book Your Next Trip</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get 10% off on your first bus booking with code: BLOG10
              </p>
              <Link 
                to="/"
                className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all text-sm"
              >
                Book Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;