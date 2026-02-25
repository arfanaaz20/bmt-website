import React from "react";
import "./InviteEarn.css";

const InviteEarn = () => {
  return (
    <div className="invite-wrapper">
      <div className="invite-container">

        {/* HEADER */}
        <div className="invite-header">
          <h1>Invite Friends. Earn Travel Rewards.</h1>
          <p>
            Share the joy of travel with your friends and get rewarded every time
            they book.
          </p>
        </div>

        {/* INFO */}
        <div className="invite-info">
          Invite your friends to experience seamless travel bookings. When they
          sign up using your referral link and complete their first booking, you
          earn exciting rewards that can be redeemed on flights, hotels,
          holidays, and more.
        </div>

        {/* STEPS */}
        <div className="invite-steps">
          <h2>How It Works</h2>

          <div className="steps-grid">
            <div className="step-card">
              <span>1</span>
              <h3>Invite Friends</h3>
              <p>Share your referral link via WhatsApp, email or social media.</p>
            </div>

            <div className="step-card">
              <span>2</span>
              <h3>Friend Signs Up</h3>
              <p>Your friend registers using your referral link.</p>
            </div>

            <div className="step-card">
              <span>3</span>
              <h3>Booking Completed</h3>
              <p>Friend completes their first successful booking.</p>
            </div>

            <div className="step-card">
              <span>4</span>
              <h3>You Earn Rewards</h3>
              <p>Rewards are credited to your wallet instantly.</p>
            </div>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="invite-benefits">
          <h2>Rewards & Benefits</h2>
          <ul>
            <li>Earn travel credits on every successful referral</li>
            <li>No limit on referrals or earnings</li>
            <li>Use rewards on flights, hotels & holidays</li>
            <li>Rewards valid for up to 12 months</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="invite-cta">
          <button className="btn-primary">Invite Now</button>
          <button className="btn-outline">Share & Earn</button>
        </div>

        {/* TERMS */}
        <div className="invite-terms">
          Referral rewards are credited only after the referred user completes
          their first eligible booking. Self-referrals are not allowed. Rewards
          are non-transferable and cannot be redeemed as cash. The company
          reserves the right to modify or discontinue the program at any time.
        </div>

      </div>
    </div>
  );
};

export default InviteEarn;
