import React from 'react';
import { Link } from 'react-router-dom';

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Customer Support</h1>
          <p className="text-gray-600">How can we help you today?</p>
        </div>

        {/* Quick Search */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help (e.g., cancellation, refund, booking)..."
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Support Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link to="/faq" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-300">
            <div className="inline-flex p-3 bg-blue-100 rounded-lg mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">FAQ</h3>
            <p className="text-gray-600 text-sm mb-4">Find answers to commonly asked questions about bookings, cancellations, and more.</p>
            <span className="text-blue-600 font-medium flex items-center">
              View FAQs
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          <Link to="/cancellation" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-300">
            <div className="inline-flex p-3 bg-red-100 rounded-lg mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Cancellation</h3>
            <p className="text-gray-600 text-sm mb-4">Cancel your booking, check cancellation policy, and manage your reservations.</p>
            <span className="text-blue-600 font-medium flex items-center">
              Cancel Booking
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          <Link to="/refund-policy" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-300">
            <div className="inline-flex p-3 bg-green-100 rounded-lg mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Refund Policy</h3>
            <p className="text-gray-600 text-sm mb-4">Track your refund status, check refund timelines and policy details.</p>
            <span className="text-blue-600 font-medium flex items-center">
              View Policy
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          <Link to="/contact-us" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-300">
            <div className="inline-flex p-3 bg-purple-100 rounded-lg mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Us</h3>
            <p className="text-gray-600 text-sm mb-4">Get in touch with our 24/7 support team via call, email, or live chat.</p>
            <span className="text-blue-600 font-medium flex items-center">
              Contact Now
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Additional Help Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-lg text-gray-800 mb-4">Need Immediate Assistance?</h3>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">1800-123-4567</p>
                <p className="text-sm text-gray-600">Toll-free, available 24/7</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-lg text-gray-800 mb-4">Self Service</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between">
                <span>Track My Bus</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between">
                <span>Download Invoice</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-between">
                <span>Change Travel Date</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;