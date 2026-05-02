import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-tr.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white text-gray-800 mt-20 border-t border-gray-200 rounded-t-3xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-8 lg:gap-x-10">
          
          {/* COMPANY INFO */}
          <div className="space-y-4 text-left max-w-sm">
            <Link to="/">
              <img src={logo} alt="logo" className="w-44 sm:w-52" />
            </Link>

            <p className="text-sm text-gray-600 leading-relaxed">
              Your trusted travel partner for hotels, flights, holiday packages,
              cabs and more.
            </p>

            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded">
                Trusted
              </span>
              <span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded">
                Verified
              </span>
            </div>
          </div>

          {/* EXPLORE */}
          <div className="space-y-4 text-left">
            <h4 className="text-blue-600 font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/hotels" className="text-gray-700 hover:text-blue-600 transition duration-200">
                  Hotels
                </Link>
              </li>
              <li>
                <Link to="/flights" className="text-gray-700 hover:text-blue-600 transition duration-200">
                  Flights
                </Link>
              </li>
              <li>
                <Link to="/cab" className="text-gray-700 hover:text-blue-600 transition duration-200">
                  Cab
                </Link>
              </li>
              <li>
                <Link to="/holiday" className="text-gray-700 hover:text-blue-600 transition duration-200">
                  Holiday
                </Link>
              </li>
                <li>
  <Link 
    to="/homestay" 
    className="text-gray-700 hover:text-blue-600 transition duration-200"
  >
    Homestay & Villas
  </Link>
</li>
               <li>
                <Link to="/Bus" className="text-gray-700 hover:text-blue-600 transition duration-200">
                  Bus
                </Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="space-y-4 text-left">
            <h4 className="text-green-600 font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/support" className="text-gray-700 hover:text-green-600 transition duration-200">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-700 hover:text-green-600 transition duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-700 hover:text-green-600 transition duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="space-y-4 text-left">
            <h4 className="text-purple-600 font-semibold">Company</h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about-us" className="text-gray-700 hover:text-purple-600 transition duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-gray-700 hover:text-purple-600 transition duration-200">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-gray-700 hover:text-purple-600 transition duration-200">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-700 hover:text-purple-600 transition duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-700 hover:text-purple-600 transition duration-200">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div className="space-y-4 text-left">
            <h4 className="text-indigo-600 font-semibold">Other Services</h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/list-your-property" className="text-gray-700 hover:text-indigo-600 transition duration-200">
                  List Property
                </Link>
              </li>
              <li>
                <Link to="/bus-operator" className="text-gray-700 hover:text-indigo-600 transition duration-200">
                  Bus Operator Registration
                </Link>
              </li>
              <li>
                <Link to="/cab-registration" className="text-gray-700 hover:text-indigo-600 transition duration-200">
                  Cab Registration
                </Link>
              </li>
              <li>
                <Link to="/supplier" className="text-gray-700 hover:text-indigo-600 transition duration-200">
                  Become a Supplier
                </Link>
              </li>
              <li>
                <Link to="/agent-registration" className="text-gray-700 hover:text-indigo-600 transition duration-200">
                  Agent Registration
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p className="text-sm text-gray-500">
            © {currentYear} BirdMyTrip. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
