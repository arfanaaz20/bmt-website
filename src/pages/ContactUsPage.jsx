import React, { useState } from 'react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bookingId: '',
    category: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const categories = [
    'Booking Issue',
    'Cancellation & Refund',
    'Payment Problem',
    'Bus Delay / Cancellation',
    'Boarding Issue',
    'Lost & Found',
    'Feedback',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Add API call here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600">We're here to help 24/7. Choose how you'd like to reach us.</p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:border-blue-300 border-2 border-transparent transition-colors">
            <div className="inline-flex p-3 bg-blue-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">24/7 Support</h3>
            <p className="text-2xl font-bold text-blue-600 mb-1">1800-123-4567</p>
            <p className="text-sm text-gray-500">Toll-free (India)</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:border-blue-300 border-2 border-transparent transition-colors">
            <div className="inline-flex p-3 bg-green-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Email Support</h3>
            <p className="text-lg font-medium text-gray-800 mb-1">support@bmt.com</p>
            <p className="text-sm text-gray-500">Response within 2 hours</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:border-blue-300 border-2 border-transparent transition-colors">
            <div className="inline-flex p-3 bg-purple-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Live Chat</h3>
            <p className="text-lg font-medium text-blue-600 mb-1">Start Conversation</p>
            <p className="text-sm text-gray-500">Average wait: 30 sec</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:border-blue-300 border-2 border-transparent transition-colors">
            <div className="inline-flex p-3 bg-amber-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Visit Office</h3>
            <p className="text-sm font-medium text-gray-800 mb-1">Mumbai, India</p>
            <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-6">
          {/* Contact Form */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. We'll get back to you within 2 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Booking ID</label>
                      <input
                        type="text"
                        name="bookingId"
                        value={formData.bookingId}
                        onChange={handleChange}
                        placeholder="e.g., BMT123456"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm text-gray-500 mb-1">Category *</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm text-gray-500 mb-1">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Brief summary of your issue"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm text-gray-500 mb-1">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Please describe your issue in detail..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="copy"
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="copy" className="ml-2 text-sm text-gray-600">
                        Send me a copy
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 mt-6 lg:mt-0">
            {/* Office Locations */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Our Offices</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Mumbai (HQ)</h4>
                  <p className="text-sm text-gray-600">
                    5th Floor, Business Plaza,<br />
                    Andheri East, Mumbai - 400069<br />
                    Maharashtra, India
                  </p>
                  <p className="text-sm text-blue-600 mt-1">+91 22 1234 5678</p>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Delhi</h4>
                  <p className="text-sm text-gray-600">
                    Tower B, Connaught Place,<br />
                    New Delhi - 110001<br />
                    Delhi, India
                  </p>
                  <p className="text-sm text-blue-600 mt-1">+91 11 2345 6789</p>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Bangalore</h4>
                  <p className="text-sm text-gray-600">
                    Embassy Point, MG Road,<br />
                    Bangalore - 560001<br />
                    Karnataka, India
                  </p>
                  <p className="text-sm text-blue-600 mt-1">+91 80 3456 7890</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <button className="flex-1 p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors text-center">
                  <svg className="w-6 h-6 text-blue-600 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  <span className="text-xs text-gray-600">Facebook</span>
                </button>
                <button className="flex-1 p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors text-center">
                  <svg className="w-6 h-6 text-blue-400 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span className="text-xs text-gray-600">Twitter</span>
                </button>
                <button className="flex-1 p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors text-center">
                  <svg className="w-6 h-6 text-pink-600 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                  </svg>
                  <span className="text-xs text-gray-600">Instagram</span>
                </button>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;