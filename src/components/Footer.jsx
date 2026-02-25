import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  HelpCircle,
  Shield,
  Users,
  Briefcase,
  FileText,
  Home,
  Plane,
  Bus,
  Car,
  Package,
  Ship,
  ShieldCheck,
  MessageCircle,
  XCircle,
  Newspaper,
  HeartHandshake,
  Award,
  Clock,
  CreditCard,
  Globe,
  CheckCircle
} from "lucide-react";
import logo from "../assets/logo-tr.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white text-gray-800 mt-20 border-t border-gray-200 rounded-t-3xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
               <Link to="/">
                <img 
                  src={logo} 
                  alt="BirdMyTrip Logo" 
                  className="w-56 h-auto rounded-lg object-cover hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your trusted travel partner for hotels, flights, holiday packages, 
              cabs and more. Experience seamless travel planning.
            </p>
            
            {/* Trust Badges */}
            <div className="flex space-x-2 pt-2">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium flex items-center">
                <Shield className="w-3 h-3 mr-1" /> Trusted
              </span>
              <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium flex items-center">
                <CheckCircle className="w-3 h-3 mr-1" /> Verified
              </span>
              <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-medium flex items-center">
                <Award className="w-3 h-3 mr-1" /> 5 Star
              </span>
            </div>

            <div className="flex space-x-3 pt-4">
              {[
                { icon: Facebook, color: "hover:bg-blue-100 text-blue-600", label: "Facebook", url: "https://facebook.com" },
                { icon: Twitter, color: "hover:bg-blue-100 text-blue-400", label: "Twitter", url: "https://twitter.com" },
                { icon: Instagram, color: "hover:bg-pink-100 text-pink-600", label: "Instagram", url: "https://instagram.com" },
                { icon: Linkedin, color: "hover:bg-blue-100 text-blue-700", label: "LinkedIn", url: "https://linkedin.com" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full bg-gray-100 border border-gray-200 ${social.color} transition-all duration-300 flex items-center justify-center hover:scale-110`}
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="text-gray-500 text-sm flex items-center pt-4">
              <Shield className="w-4 h-4 mr-2 text-green-500" />
              © {currentYear} BirdMyTrip. All rights reserved.
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-600 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-blue-500" />
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Hotels", icon: Home, color: "text-blue-500", path: "/hotels" },
                { name: "Flights", icon: Plane, color: "text-blue-500", path: "/flights" },
                { name: "Bus", icon: Bus, color: "text-blue-500", path: "/" },
                { name: "Cab", icon: Car, color: "text-blue-500", path: "/cab" },
                { name: "Holiday Packages", icon: Package, color: "text-blue-500", path: "/holiday" },
                { name: "Cruise", icon: Ship, color: "text-blue-500", path: "/cruise" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-blue-600 transition-all duration-200 flex items-center group hover:bg-blue-50 px-2 py-1.5 rounded-md"
                  >
                    <item.icon className={`w-4 h-4 mr-3 ${item.color}`} />
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-600 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-emerald-500 after:to-green-400 flex items-center">
              <HeartHandshake className="w-5 h-5 mr-2 text-emerald-500" />
              Support
            </h4>
            <ul className="space-y-3">
              {[
                { 
                  name: "Customer Support", 
                  icon: Phone, 
                  color: "text-emerald-500", 
                  path: "/support"
                },
                { 
                  name: "FAQ", 
                  icon: HelpCircle, 
                  color: "text-emerald-500", 
                  path: "/faq"
                },
                { 
                  name: "Cancellation", 
                  icon: XCircle, 
                  color: "text-emerald-500", 
                  path: "/cancellation"
                },
                { 
                  name: "Refund Policy", 
                  icon: ShieldCheck, 
                  color: "text-emerald-500", 
                  path: "/refund-policy"
                },
                { 
                  name: "Contact Us", 
                  icon: Mail, 
                  color: "text-emerald-500", 
                  path: "/contact-us"
                },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-emerald-600 transition-all duration-200 flex items-center group hover:bg-emerald-50 px-2 py-1.5 rounded-md"
                  >
                    <item.icon className={`w-4 h-4 mr-3 ${item.color}`} />
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Support Hours */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2 text-emerald-500" />
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <MessageCircle className="w-4 h-4 mr-2 text-emerald-500" />
                <span>Live Chat - Avg. 30s response</span>
              </div>
            </div>
          </div>

          {/* Company Links - Vendor Login Hata Kar Blog Add Kiya */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-600 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-pink-400 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-purple-500" />
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", icon: Users, color: "text-purple-500", path: "/about-us" },
                { name: "Careers", icon: Briefcase, color: "text-purple-500", path: "/careers" },
                { name: "Privacy Policy", icon: Shield, color: "text-purple-500", path: "/privacy-policy" },
                { name: "Terms & Conditions", icon: FileText, color: "text-purple-500", path: "/terms-and-conditions" },
                { name: "Blog", icon: Newspaper, color: "text-purple-500", path: "/blog" }, // Vendor Login ki jagah Blog
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-purple-600 transition-all duration-200 flex items-center group hover:bg-purple-50 px-2 py-1.5 rounded-md"
                  >
                    <item.icon className={`w-4 h-4 mr-3 ${item.color}`} />
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Payment Methods */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <h5 className="text-xs font-semibold text-gray-500 mb-3 flex items-center">
                <CreditCard className="w-3 h-3 mr-1" /> We Accept
              </h5>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Visa</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Mastercard</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">UPI</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">Paytm</span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;