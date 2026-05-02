import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
// import "./components/i18n";
// import "./i18n";
import "./components/i18n";
import ScrollToTop from "./pages/ScrollToTop.js";

/* COMMON */
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* PAGES */
import Hero from "./components/Hero";
import ExploreMoreBar from "./components/ExploreMoreBar";
// import AirlinePartners from "./components/AirlinePartners";
import InfoSection from "./components/InfoSection";
import MegaLinksSection from "./components/MegaLinksSection";
import VisaSection from "./pages/visa/VisaSection";
import CruiseSection from "./pages/cruise/CruiseSection";
import NightClubSection from "./pages/nightclub/NightClubSection";
import ToursAttractions from "./pages/ToursAttractions";
import FlightStatusPage from "./pages/flightStatus/FlightStatusPage";
import Hotels from "./pages/Hotels";
import Flights from "./pages/Flights";
import Train from "./pages/BookTrain.jsx";
import Holiday from "./pages/Holiday";
import GiftCard from "./pages/GiftCard";
import TripPlanner from "./pages/TripPlanner";
import InviteEarn from "./pages/InviteEarn";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Bus from "./pages/Bus";
import BookBus from "./pages/BookBus";
import Cab from "./pages/Cab";
import CabRegistration from "./pages/CabRegistration";
import CabDetails from "./pages/CabDetails";
import ListProperty from "./pages/ListProperty";
import PNRStatus from "./pages/PNRStatus";
import NewUserExclusive from "./components/NewUserExclusive";
import BannerCarousel from "./components/BannerCarousel.jsx";
import PlacesCarousel from "./components/PlacesCarousel.jsx";
import FlightHotel from "./pages/FlightHotels.jsx";
import HotelAndHomeStay from "./components/HotelAndHomeStay.jsx";
import HotelAndHomeStayDetail from "./components/HotelAndHomeStayDetail.jsx";
import HotelDetail from "./pages/HotelDetail.jsx";
import CruiseBooking from "./pages/cruise/CruiseBooking.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import SeatSelectionPage from "./pages/SeatSelectionPage.js";
import UserDashboard from "./components/UserDashboard.jsx";
import BookingConfirmation from "./pages/BookingConfirmation.js";
import PackageDetails from "./pages/PackageDetails.js";
import TrendingPackageDetails from "./pages/TrendingPackageDetails.js";
import BookingConfirmationPage from "./pages/BookingConfirmationPage.jsx";
import BookingDetailsPage from "./pages/BookingDetailsPage.jsx";

/* SUPPORT PAGES */
import SupportPage from './pages/SupportPage';
import FAQPage from './pages/FAQPage';
import CancellationPage from './pages/CancellationPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import ContactUsPage from './pages/ContactUsPage';

/* COMPANY PAGES */
import AboutUsPage from './pages/AboutUs';
import CareersPage from './pages/CareersPage';
import PrivacyPolicyPage from './pages/PrivacyPolicy';
import TermsConditionsPage from './pages/TermsConditions';
import BlogPage from './pages/BlogPage';
import BlogPostPage from "./pages/BlogPostPage.jsx";
import TravelInsurance from './pages/TravelInsurance';
import ServicesShowcase from './pages/ServicesShowcase';
import CabBooking from "./pages/CabBooking.jsx";

/* CONTEXT */
import { AuthProvider, AuthContext } from "./contexts/AuthContext";
import TravelInsuranceBooking from "./pages/TravelInsuranceBooking.jsx";
import DarshanList from "./pages/DarshanList.jsx";
import DarshanDetail from "./pages/DarshanDetail.jsx";
import OffersPage from "./components/Offers.jsx";
import VendorOnboarding from "./pages/Vendoronboarding .jsx";

import HotelDetails from "./pages/HotelDetails";
import BookHotel from "./pages/BookHotel";
import { useWindow } from "./components/customWindowAdjust/useWindow.jsx";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const auth = useContext(AuthContext);
  if (!auth) return null;
  const { isAuthenticated } = auth;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

// Layout Component for conditional footer
const PageLayout = ({ children }) => {
  const { isMobile } = useWindow();
  const location = useLocation();
  const noFooterRoutes = ['/user-dashboard', '/login', '/signup'];
  const hideFooter = noFooterRoutes.includes(location.pathname);
  return (
    <>
      {children}
      {!hideFooter && !isMobile && <Footer />}
    </>
  );
};

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const auth = useContext(AuthContext);
  const isAuthenticated = auth?.isAuthenticated || false;

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => { if (sidebarOpen) setSidebarOpen(false); };
  const handleBackdropClick = () => { if (sidebarOpen && isMobile) setSidebarOpen(false); };

  useEffect(() => {
    if (isMobile && sidebarOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("sidebar-open");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("sidebar-open");
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("sidebar-open");
    };
  }, [sidebarOpen, isMobile]);

  const authPages = ['/login', '/signup'];
  const hideSidebar = authPages.includes(location.pathname);

  return (
    <div className={`app-wrapper ${sidebarOpen && isMobile ? 'sidebar-open' : ''}`}>
      {!hideSidebar && (
        <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      )}

      {sidebarOpen && isMobile && !hideSidebar && (
        <div
          className="sidebar-backdrop"
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
      )}

      <div className={`content-layout ${hideSidebar ? 'no-sidebar' : 'mt-[80px]'}`}>
        {!hideSidebar && (
          <Sidebar
            open={sidebarOpen}
            setOpen={setSidebarOpen}
            onClose={closeSidebar}
          />
        )}

        <main
          className={`main-body ${sidebarOpen ? 'sidebar-open' : ''} ${hideSidebar ? 'full-width' : ''}`}
          onClick={() => { if (isMobile && sidebarOpen) setSidebarOpen(false); }}
        >
          <div className="page-content">
            <Routes>

              {/* HOME */}
              <Route path="/" element={
                <PageLayout>
                  <Hero />
                  {!isMobile && (
                    <>
                      <ExploreMoreBar />
                      <NewUserExclusive />
                      <BannerCarousel />
                      <PlacesCarousel />
                      <VisaSection />
                      {/* <NightClubSection /> */}
                      {/* <AirlinePartners /> */}
                      <InfoSection />
                      <MegaLinksSection />
                    </>
                  )}
                </PageLayout>
              } />

              {/* TRAVEL */}
              <Route path="/visa"             element={<PageLayout><VisaSection /></PageLayout>} />
              <Route path="/cruise"           element={<PageLayout><CruiseSection /></PageLayout>} />
              <Route path="/night-club"       element={<PageLayout><NightClubSection /></PageLayout>} />
              <Route path="/hotels&Flights"   element={<PageLayout><FlightHotel /></PageLayout>} />
              <Route path="/tours"            element={<PageLayout><ToursAttractions /></PageLayout>} />
              <Route path="/flight-status"    element={<PageLayout><FlightStatusPage /></PageLayout>} />
              <Route path="/hotels"           element={<PageLayout><Hotels /></PageLayout>} />
              <Route path="/flights"          element={<PageLayout><Flights /></PageLayout>} />
              <Route path="/train"            element={<PageLayout><Train /></PageLayout>} />
              <Route path="/holiday"          element={<PageLayout><Holiday /></PageLayout>} />
              <Route path="/trip-planner"     element={<PageLayout><TripPlanner /></PageLayout>} />
              <Route path="/gift"             element={<PageLayout><GiftCard /></PageLayout>} />
              <Route path="/invite"           element={<PageLayout><InviteEarn /></PageLayout>} />
              <Route path="/list-your-property" element={<PageLayout><ListProperty /></PageLayout>} />
              <Route path="/pnr"              element={<PageLayout><PNRStatus /></PageLayout>} />
              <Route path="/bus"              element={<PageLayout><Bus /></PageLayout>} />
              <Route path="/bus/:id"          element={<PageLayout><BookBus /></PageLayout>} />
              <Route path="/cab"              element={<PageLayout><Cab /></PageLayout>} />
              <Route path="/cab-registration" element={<PageLayout><CabRegistration /></PageLayout>} />
              <Route path="/cab/:id"          element={<PageLayout><CabDetails /></PageLayout>} />
              <Route path="/cab-detail/:id"   element={<PageLayout><CabDetails /></PageLayout>} />
              <Route path="/cab-booking"      element={<PageLayout><CabBooking /></PageLayout>} />
              <Route path="/homestay"         element={<PageLayout><HotelAndHomeStay /></PageLayout>} />
              <Route path="/property/:id"     element={<PageLayout><HotelAndHomeStayDetail /></PageLayout>} />

              {/*
                FIX: HomestayVillaDetail.jsx does NOT exist in your project.
                Reusing HotelAndHomeStayDetail here instead — same purpose.
                If you create HomestayVillaDetail.jsx later, import it and swap it in.
              */}
              <Route path="/homestay-details/:id" element={<PageLayout><HotelAndHomeStayDetail /></PageLayout>} />

              <Route path="/hotel/:id"        element={<PageLayout><HotelDetail /></PageLayout>} />
              <Route path="/hotel-details/:id" element={<HotelDetails />} />
              <Route path="/book/:id"         element={<BookHotel />} />
              <Route path="/cruise/:id"       element={<PageLayout><CruiseBooking /></PageLayout>} />
              <Route path="/select-seats"     element={<PageLayout><SeatSelectionPage /></PageLayout>} />
              <Route path="/payment"          element={<PageLayout><PaymentPage /></PageLayout>} />
              <Route path="/booking-confirmation" element={<PageLayout><BookingConfirmation /></PageLayout>} />
              <Route path="/package-details"  element={<PageLayout><PackageDetails /></PageLayout>} />
              <Route path="/trending-package-details" element={<PageLayout><TrendingPackageDetails /></PageLayout>} />
              <Route path="/booking-details"  element={<PageLayout><BookingDetailsPage /></PageLayout>} />
              <Route path="/darshan"          element={<PageLayout><DarshanList /></PageLayout>} />
              <Route path="/darshan/:id"      element={<PageLayout><DarshanDetail /></PageLayout>} />
              <Route path="/offers"           element={<PageLayout><OffersPage /></PageLayout>} />
              <Route path="/vendor-onboarding" element={<PageLayout><VendorOnboarding /></PageLayout>} />

              {/* SUPPORT */}
              <Route path="/support"          element={<PageLayout><SupportPage /></PageLayout>} />
              <Route path="/faq"              element={<PageLayout><FAQPage /></PageLayout>} />
              <Route path="/cancellation"     element={<PageLayout><CancellationPage /></PageLayout>} />
              <Route path="/refund-policy"    element={<PageLayout><RefundPolicyPage /></PageLayout>} />
              <Route path="/contact-us"       element={<PageLayout><ContactUsPage /></PageLayout>} />

              {/* COMPANY */}
              <Route path="/about-us"         element={<PageLayout><AboutUsPage /></PageLayout>} />
              <Route path="/careers"          element={<PageLayout><CareersPage /></PageLayout>} />
              <Route path="/privacy-policy"   element={<PageLayout><PrivacyPolicyPage /></PageLayout>} />
              <Route path="/terms-and-conditions" element={<PageLayout><TermsConditionsPage /></PageLayout>} />
              <Route path="/blog"             element={<PageLayout><BlogPage /></PageLayout>} />
              <Route path="/blog/:id"         element={<PageLayout><BlogPostPage /></PageLayout>} />
              <Route path="/travel-insurance" element={<PageLayout><TravelInsurance /></PageLayout>} />
              <Route path="/travel-insurance-booking" element={<PageLayout><TravelInsuranceBooking /></PageLayout>} />
              <Route path="/services"         element={<PageLayout><ServicesShowcase /></PageLayout>} />

              {/* 404 */}
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800">404</h1>
                    <p className="text-gray-600 mt-2">Page not found</p>
                    <a href="/" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg">
                      Go Home
                    </a>
                  </div>
                </div>
              } />

            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <AppContent />
    </AuthProvider>
  );
}

export default App;