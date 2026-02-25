import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

/* COMMON */
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* PAGES */
import Hero from "./components/Hero";
import ExploreMoreBar from "./components/ExploreMoreBar";
import OffersSection from "./components/offers/OffersSection";
import AirlinePartners from "./components/AirlinePartners";
import InfoSection from "./components/InfoSection";
import MegaLinksSection from "./components/MegaLinksSection";
import VisaSection from "./pages/visa/VisaSection";
import CruiseSection from "./pages/cruise/CruiseSection";
import NightClubSection from "./pages/nightclub/NightClubSection";
import ToursAttractions from "./pages/ToursAttractions";
import FlightStatusPage from "./pages/flightStatus/FlightStatusPage";
import Hotels from "./pages/Hotels";
import Flights from "./pages/Flights";
import Train from "./pages/Train";
import Holiday from "./pages/Holiday";
import GiftCard from "./pages/GiftCard";
import TripPlanner from "./pages/TripPlanner";
import InviteEarn from "./pages/InviteEarn";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Bus from "./pages/Bus";
import BookBus from "./pages/BookBus";
import Cab from "./pages/Cab";
import CabDetails from "./pages/CabDetails";
import ListProperty from "./pages/ListProperty";
import PNRStatus from "./pages/PNRStatus";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  // Handle backdrop click
  const handleBackdropClick = () => {
    if (sidebarOpen && isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="app-wrapper">
      <Navbar toggleSidebar={toggleSidebar} />
      
      {/* Mobile Backdrop */}
      {sidebarOpen && isMobile && (
        <div 
          className="sidebar-backdrop" 
          onClick={handleBackdropClick}
        />
      )}
      
      <div className="content-layout">
        <Sidebar open={sidebarOpen} />
        
        <main 
          className={`main-body ${sidebarOpen ? "sidebar-open" : "sidebar-collapsed"}`}
          onClick={isMobile && sidebarOpen ? handleBackdropClick : undefined}
        >
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ExploreMoreBar />
                <OffersSection />
                <VisaSection />
                <CruiseSection />
                <NightClubSection />
                <AirlinePartners />
                <InfoSection />
                <MegaLinksSection />
              </>
            } />
            <Route path="/visa" element={<VisaSection />} />
            <Route path="/cruise" element={<CruiseSection />} />
            <Route path="/night-club" element={<NightClubSection />} />
            <Route path="/tours" element={<ToursAttractions />} />
            <Route path="/flight-status" element={<FlightStatusPage />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/train" element={<Train />} />
            <Route path="/holiday" element={<Holiday />} />
            <Route path="/trip-planner" element={<TripPlanner />} />
            <Route path="/gift" element={<GiftCard />} />
            <Route path="/invite" element={<InviteEarn />} />
            <Route path="/list-your-property" element={<ListProperty />} />
            <Route path="/pnr" element={<PNRStatus />} />
            <Route path="/bus" element={<Bus />} />
            <Route path="/bus/:id" element={<BookBus />} />
            <Route path="/cab" element={<Cab />} />
            <Route path="/cab/:id" element={<CabDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </div>
  );
}