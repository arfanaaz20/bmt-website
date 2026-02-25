import React, { useRef } from 'react';
import { Info, Hotel, FerrisWheel, Plane, ChevronRight, Sparkles } from 'lucide-react';
import './NewUserExclusive.css';

const coupons = [
  { id: 1, discount: '10% off', label: 'Hotels & Homes', icon: <Hotel size={28} /> },
  { id: 2, discount: '5% off', label: 'Attractions & Tours', icon: <FerrisWheel size={28} /> },
  { id: 3, discount: '10% off', label: 'Airport Transfers', icon: <Plane size={28} /> },
  { id: 4, discount: '8% off', label: 'Car Rentals', icon: <Plane size={28} /> }, // Extra card for scroll test
];

const NewUserExclusive = () => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="exclusive-container">
      <h2 className="title">New user exclusive</h2>
      
      <div className="scroll-container-relative">
        <div className="scroll-wrapper" ref={scrollRef}>
          {/* Welcome Card */}
          <div className="welcome-card">
            <div className="welcome-content">
              <p>New users get more discounts on travel!</p>
              <div className="magic-icon">
                <Sparkles color="#4e89ff" fill="#4e89ff" size={32} />
              </div>
            </div>
            <button className="claim-btn main-btn">Sign In & Claim All</button>
          </div>

          {/* Dynamic Coupon Cards */}
          {coupons.map((coupon) => (
            <div key={coupon.id} className="ticket-card">
              <div className="ticket-left">
                <div>
                  <div className="discount-text">{coupon.discount}</div>
                  <div className="label-text">
                    {coupon.label} <Info size={14} className="info-icon" />
                  </div>
                </div>
                <button className="claim-btn">Claim All</button>
              </div>
              
              <div className="ticket-divider">
                <div className="notch top"></div>
                <div className="notch bottom"></div>
              </div>
              
              <div className="ticket-right">
                <span className="category-icon text-blue-500">{coupon.icon}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Button */}
        <button className="arrow-btn" onClick={scrollRight}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default NewUserExclusive;