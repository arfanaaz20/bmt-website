// OffersHeader.js - Simple as Screenshot
import React from 'react';
import './OffersHeader.css';

export default function OffersHeader({ activeTab, setActiveTab }) {
  const tabs = [
    { key: "all", label: "All Offers" },
    { key: "bank", label: "Bank Offers" },
    { key: "flights", label: "Flights" },
    { key: "hotels", label: "Hotels" },
    { key: "holidays", label: "Holidays" },
    { key: "train", label: "Trains" },
    { key: "cabs", label: "Cabs" },
    { key: "bus", label: "Bus" },
    { key: "forex", label: "Forex" },
  ];

  return (
    <header className="offers-header">
      <h2 className="section-title">Offers</h2>
      
      <div className="tabs-wrapper">
        <nav className="tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
              role="tab"
              aria-selected={activeTab === tab.key}
              style={{ color: activeTab === tab.key ? 'white' : '#424245' }}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}