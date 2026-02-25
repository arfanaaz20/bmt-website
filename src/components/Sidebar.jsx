import React from "react";
import { Link, NavLink } from "react-router-dom";
import { 
  X, ChevronUp, HelpCircle, Smartphone, Globe, 
  Shield, Ship, Send, Map, Clock, Ticket, 
 Award, Users, Home, Building, 
  Car, Bus, Train as TrainIcon,Church,
  Luggage, Gift, Hotel,TicketsPlane,PartyPopper,BadgePercent
} from "lucide-react";
import "./Sidebar.css";

/* ICONS - Only for special cases */
import {
  FaHotel, FaTaxi,
} from "react-icons/fa";

export default function Sidebar({ open, setOpen }) {
  // मोबाइल पर sidebar close करने का function
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setOpen(false);
    }
  };

  return (  
    <aside className={`sidebar ${open ? "open" : "collapsed"}`}>
      {/* --- MOBILE ONLY HEADER --- */}
      <div className="mobile-only-header">
        <div className="mobile-nav-top">
          <span className="mobile-brand">Trip.com</span>
          <X className="mobile-close" onClick={() => setOpen(false)} />
        </div>

        <div className="mobile-login-box">
          <p className="login-promo">Access savings just for you – in only one step!</p>
          <div className="login-perks">
            <span><Award className="perk-icon" size={16} /> Extraordinary Savings</span>
            <span><Gift className="perk-icon" size={16} /> Rewards for booking</span>
          </div>
          <div className="login-buttons">
            <button className="m-btn-outline" onClick={handleLinkClick}>Search Bookings</button>
            <button className="m-btn-primary" onClick={handleLinkClick}>Sign In/Register</button>
          </div>
        </div>
      </div>

      <div className="menu-container">
        {/* --- DESKTOP: BOOK SECTION --- */}
        <div className="desktop-only menu-section">
          <p className="section-label">BOOK</p>
          <ul>
            <li><Link to="/hotels" onClick={handleLinkClick}><Hotel className="s-icon" /><span>Hotels</span></Link></li>
            <li><Link to="/homestay" onClick={handleLinkClick}><Home className="s-icon" /><span>Homestay & Villas</span></Link></li>
            <li><Link to="/flights" onClick={handleLinkClick}><Send className="s-icon" /><span>Flights</span></Link></li>
            <li><Link to="/hotels&Flights" onClick={handleLinkClick}><Building className="s-icon" /><span>Flights + Hotel</span></Link></li>
            <li><Link to="/bus" onClick={handleLinkClick}><Bus className="s-icon" /><span>Bus</span></Link></li>
            <li><Link to="/cab" onClick={handleLinkClick}><Car className="s-icon" /><span>Cab</span></Link></li>
            <li><Link to="/holiday" onClick={handleLinkClick}><Luggage className="s-icon" /><span>Holiday Packages</span></Link></li>
            <li><Link to="/train" onClick={handleLinkClick}><TrainIcon className="s-icon" /><span>Train</span></Link></li>
            <li>
              <NavLink to="/night-club" className="nav-item-link" onClick={handleLinkClick}>
                <PartyPopper className="s-icon" />
                <span>Night Club</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/darshan" className="nav-item-link" onClick={handleLinkClick}>
                <Church className="s-icon" />
                <span>BMT Darshan</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* --- DESKTOP: EXPLORE SECTION --- */}
        <div className="desktop-only menu-section">
          <p className="section-label">EXPLORE</p>
          <ul>
            <li>
              <NavLink to="/tours" className="nav-item-link" onClick={handleLinkClick}>
                <Ticket className="s-icon" /><span>Tours & Attractions</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/visa" className="nav-item-link" onClick={handleLinkClick}>
                <TicketsPlane className="s-icon" /><span>Visa</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/travel-insurance" className="nav-item-link" onClick={handleLinkClick}>
                <Shield className="s-icon" /><span>Travel Insurance</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cruise" className="nav-item-link" onClick={handleLinkClick}>
                <Ship className="s-icon" /><span>Cruise</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* --- DESKTOP: TOOLS SECTION --- */}
        <div className="desktop-only menu-section">
          <p className="section-label">TOOLS</p>
          <ul>
            <li><Link to="/trip-planner" onClick={handleLinkClick}><Map className="s-icon" /><span>Trip Planner</span></Link></li>
            <li><Link to="/flight-status" onClick={handleLinkClick}><Clock className="s-icon" /><span>Flight Status</span></Link></li>
            <li><Link to="/pnr" onClick={handleLinkClick}><Ticket className="s-icon" /><span>PNR Status</span></Link></li>
          </ul>
        </div>

        {/* --- DESKTOP: MORE SECTION --- */}
        <div className="desktop-only menu-section">
          <p className="section-label">MORE</p>
          <ul>
            <li><Link to="/gift" onClick={handleLinkClick}><Gift className="s-icon" /><span>Gift Card</span></Link></li>
            <li><Link to="/invite" onClick={handleLinkClick}><Users className="s-icon" /><span>Invite & Earn</span></Link></li>
            <li><Link to="/offers" onClick={handleLinkClick}><BadgePercent className="s-icon" /><span>Offers</span></Link></li>
          </ul>
        </div>

        {/* --- MOBILE SETTINGS SECTION --- */}
        <div className="mobile-only menu-section no-border">
          <p className="section-label">Settings</p>
          <ul>
            <li className="m-setting-row">
              <Globe className="setting-icon" /> 
              <span>English (India)</span>
            </li>
            <li className="m-setting-row">
              <span className="m-currency">₹</span> 
              <span>INR</span>
            </li>
          </ul>
        </div>

        {/* --- MOBILE: TRAVEL OPTIONS --- */}
        <div className="mobile-only menu-section">
          <p className="section-label">Travel Options</p>
          <ul>
            <li><Link to="/hotels" onClick={handleLinkClick}><FaHotel className="s-icon" /><span>Hotels & Homes</span></Link></li>
            <li><Link to="/flights" onClick={handleLinkClick}><Send className="s-icon" /><span>Flights</span></Link></li>
            <li><Link to="/car-rentals" onClick={handleLinkClick}><Car className="s-icon" /><span>Car Rentals</span></Link></li>
            <li><Link to="/airport-transfers" onClick={handleLinkClick}><FaTaxi className="s-icon" /><span>Airport Transfers</span></Link></li>
            <li><Link to="/tours" onClick={handleLinkClick}><Ticket className="s-icon" /><span>Attractions & Tours</span></Link></li>
            <li><Link to="/cruise" onClick={handleLinkClick}><Ship className="s-icon" /><span>Cruises</span></Link></li>
            <li><Link to="/travel-guides" onClick={handleLinkClick}><Map className="s-icon" /><span>Travel Guides</span></Link></li>
          </ul>
          <div className="show-less-btn" onClick={handleLinkClick}>
            <span>Show Less</span> 
            <ChevronUp size={14} />
          </div>
        </div>

        {/* --- MOBILE: MORE SECTION --- */}
        <div className="mobile-only menu-section">
          <p className="section-label">More</p>
          <ul>
            <li className="rewards-item">
              <Link to="/rewards" onClick={handleLinkClick}>
                <div className="reward-coin">
                  <Award size={16} />
                </div>
                <span>Trip.com Rewards</span>
              </Link>
            </li>
            <li><Link to="/help" onClick={handleLinkClick}><HelpCircle className="s-icon" /><span>Help</span></Link></li>
            <li><Link to="/app" onClick={handleLinkClick}><Smartphone className="s-icon" /><span>Download the App</span></Link></li>
          </ul>
        </div>
      </div>
    </aside>
  );
}