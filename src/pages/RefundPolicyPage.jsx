import React, { useState } from 'react';
import {
  FileText,
  Search,
  AlertCircle,
  Clock,
  Shield,
  CheckCircle,
  XCircle,
  DollarSign,
  RefreshCw,
  HelpCircle,
  Phone,
  Mail,
  MessageCircle,
  ChevronRight,
  BookOpen,
  Scale,
  Ban,
  Percent
} from 'lucide-react';

const RefundPolicyPage = () => {
  const [activeTab, setActiveTab] = useState('policy');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-6">
              <RefreshCw className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Clear & Transparent Policy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Refund Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Understanding our refund process, timelines, and conditions for bus ticket cancellations.
            </p>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="relative h-16">
          <svg className="absolute bottom-0 w-full h-16 text-gray-50 fill-current" preserveAspectRatio="none" viewBox="0 0 1440 54">
            <path d="M0 22L120 16.7C240 11 480 1 720 7.7C960 14 1200 38 1320 50L1440 62V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-md p-2 mb-8">
          <div className="flex space-x-2">
            {[
              { id: 'policy', label: 'Refund Policy', icon: FileText },
              { id: 'track', label: 'Track Refund', icon: Search },
              { id: 'exceptions', label: 'Exceptions', icon: AlertCircle }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-6 py-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'policy' && (
              <div className="space-y-8">
                {/* Refund Policy Text */}
                <div className="bg-white rounded-2xl border border-gray-200 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Cancellation & Refund Policy</h2>
                  </div>
                  
                  <div className="prose max-w-none">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <Clock className="w-5 h-5 mr-2 text-blue-600" />
                          1. Cancellation Timelines and Refund Eligibility
                        </h3>
                        <div className="pl-7 space-y-4">
                          <div className="border-l-4 border-green-500 pl-4 py-2">
                            <p className="font-medium text-gray-800">More than 48 hours before departure:</p>
                            <p className="text-gray-600">75% refund of the ticket amount. 25% cancellation charges apply.</p>
                          </div>
                          <div className="border-l-4 border-yellow-500 pl-4 py-2">
                            <p className="font-medium text-gray-800">Between 24 to 48 hours before departure:</p>
                            <p className="text-gray-600">50% refund of the ticket amount. 50% cancellation charges apply.</p>
                          </div>
                          <div className="border-l-4 border-red-500 pl-4 py-2">
                            <p className="font-medium text-gray-800">Less than 24 hours before departure:</p>
                            <p className="text-gray-600">No refund applicable. 100% cancellation charges apply.</p>
                          </div>
                          <div className="border-l-4 border-blue-500 pl-4 py-2">
                            <p className="font-medium text-gray-800">Bus Cancellation by Operator:</p>
                            <p className="text-gray-600">100% full refund if the bus is cancelled by the operator. Additional compensation may be provided as per our on-time guarantee policy.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <RefreshCw className="w-5 h-5 mr-2 text-blue-600" />
                          2. Partial Cancellation
                        </h3>
                        <p className="text-gray-600 pl-7">
                          Partial cancellation of select seats from a booking is allowed. Refund will be calculated based on the number of seats cancelled and the applicable cancellation charges at the time of cancellation request.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <Clock className="w-5 h-5 mr-2 text-blue-600" />
                          3. Refund Processing Time
                        </h3>
                        <p className="text-gray-600 pl-7 mb-3">
                          Refunds are processed based on the original payment method used at the time of booking:
                        </p>
                        <div className="pl-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <div>
                              <p className="font-medium text-gray-800">UPI & Wallets</p>
                              <p className="text-sm text-gray-600">24-48 hours</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <div>
                              <p className="font-medium text-gray-800">Credit/Debit Cards</p>
                              <p className="text-sm text-gray-600">5-7 business days</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                            <div>
                              <p className="font-medium text-gray-800">Net Banking</p>
                              <p className="text-sm text-gray-600">5-7 business days</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                          <Shield className="w-5 h-5 mr-2 text-blue-600" />
                          4. Refund Method
                        </h3>
                        <p className="text-gray-600 pl-7">
                          All refunds are credited to the original payment source used at the time of booking. Refunds cannot be processed to alternative bank accounts or payment methods.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Policy Summary Card */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <Scale className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Policy Summary</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-700">
                          <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Cancellation charges are calculated from the time of cancellation request</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Convenience fee is non-refundable in all cancellation scenarios</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Refund timeline starts after cancellation confirmation</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                          <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Contact support if refund not credited within 10 business days</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'track' && (
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Search className="w-6 h-6 mr-2 text-blue-600" />
                  Track Your Refund
                </h2>
                
                <div className="max-w-2xl">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter your Booking ID
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        placeholder="e.g., BMT123456"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2">
                      <Search className="w-4 h-4" />
                      Track Refund
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Enter the booking ID from your cancellation confirmation email or SMS
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'exceptions' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-200 p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-amber-500" />
                    Refund Exceptions & Conditions
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                      <div className="p-2 bg-white rounded-lg">
                        <Ban className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Non-Refundable Tickets</h4>
                        <p className="text-sm text-gray-600">Tickets explicitly marked as "Non-Refundable" at the time of booking are not eligible for any refund under any circumstances.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                      <div className="p-2 bg-white rounded-lg">
                        <Percent className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Convenience Fee</h4>
                        <p className="text-sm text-gray-600">The convenience fee charged at the time of booking is non-refundable in all cases, regardless of when the cancellation is made.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                      <div className="p-2 bg-white rounded-lg">
                        <XCircle className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">No-Show Passengers</h4>
                        <p className="text-sm text-gray-600">Passengers who do not board the bus or arrive at the boarding point after departure are considered "No-Show" and are not eligible for any refund.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                      <div className="p-2 bg-white rounded-lg">
                        <DollarSign className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Partial Cancellation</h4>
                        <p className="text-sm text-gray-600">While partial cancellation is allowed, each cancelled seat is subject to individual cancellation charges based on the time of cancellation request.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-96 mt-8 lg:mt-0 space-y-6">
            {/* Contact Support Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-xl">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">Need Help with Refund?</h3>
              </div>
              
              <p className="text-gray-300 text-sm mb-6">
                Our refund specialists are available 24/7 to assist you with any refund-related queries.
              </p>
              
              <div className="space-y-3">
                <button className="w-full bg-white text-gray-900 py-3 px-4 rounded-xl font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Live Chat
                </button>
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Support
                </button>
                <button className="w-full bg-white/10 text-white py-3 px-4 rounded-xl font-medium hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Us
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                <FileText className="w-4 h-4 mr-2 text-blue-600" />
                Related Policies
              </h4>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors flex items-center justify-between group">
                  <span className="text-gray-700 group-hover:text-blue-600">Cancellation Policy</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                </button>
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors flex items-center justify-between group">
                  <span className="text-gray-700 group-hover:text-blue-600">Terms & Conditions</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                </button>
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors flex items-center justify-between group">
                  <span className="text-gray-700 group-hover:text-blue-600">Privacy Policy</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                </button>
              </div>
            </div>

            {/* Policy Last Updated */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-500">Last Updated</p>
                  <p className="font-medium text-gray-800">February 15, 2024</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                  Policy Version: 2.1 • Effective from January 1, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;