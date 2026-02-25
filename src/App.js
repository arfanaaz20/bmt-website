import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./pages/ScrollToTop.js";

/* COMMON */
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* PAGES */
import Hero from "./components/Hero";
import ExploreMoreBar from "./components/ExploreMoreBar";
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



/* CONTEXT - IMPORT AuthProvider AND AuthContext */
import { AuthProvider, AuthContext } from "./contexts/AuthContext";
import TravelInsuranceBooking from "./pages/TravelInsuranceBooking.jsx";
import DarshanList from "./pages/DarshanList.jsx";
import DarshanDetail from "./pages/DarshanDetail.jsx";
import OffersPage from "./components/Offers.jsx";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const auth = useContext(AuthContext);
  
  if (!auth) {
    return null;
  }
  
  const { isAuthenticated } = auth;
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// Layout Component for conditional footer
const PageLayout = ({ children }) => {
  const location = useLocation();
  const noFooterRoutes = ['/user-dashboard', '/login', '/signup'];
  const hideFooter = noFooterRoutes.includes(location.pathname);
  
  return (
    <>
      {children}
      {!hideFooter && <Footer />}
    </>
  );
};

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const auth = useContext(AuthContext);
  
  const isAuthenticated = auth?.isAuthenticated || false;

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Desktop: auto open sidebar, Mobile: auto close sidebar
      if (!mobile) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []); // Removed sidebarOpen dependency to prevent loops

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  const handleBackdropClick = () => {
    if (sidebarOpen && isMobile) {
      setSidebarOpen(false);
    }
  };

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

  // Hide sidebar on auth pages
  const authPages = ['/login', '/signup'];
  const hideSidebar = authPages.includes(location.pathname);

  return (
    <div className={`app-wrapper ${sidebarOpen && isMobile ? 'sidebar-open' : ''}`}>
      {!hideSidebar && <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />}
      
      {/* Mobile Backdrop */}
      {sidebarOpen && isMobile && !hideSidebar && (
        <div 
          className="sidebar-backdrop" 
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
      )}
      
      <div className={`content-layout ${hideSidebar ? 'no-sidebar' : 'md:mt-[80px]'}`}>
        {!hideSidebar && (
          <Sidebar 
            open={sidebarOpen} 
            setOpen={setSidebarOpen} 
            onClose={closeSidebar}
          />
        )}
        
        <main 
          className={`main-body ${sidebarOpen ? 'sidebar-open' : ''} ${hideSidebar ? 'full-width' : ''}`}
          onClick={() => {
            // Close sidebar when clicking on main content on mobile
            if (isMobile && sidebarOpen) {
              setSidebarOpen(false);
            }
          }}
        >
          <div className="page-content">
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* Home Route */}
              <Route path="/" element={
                <PageLayout>
                  <Hero />
                  <ExploreMoreBar />
                  <NewUserExclusive />
                  <BannerCarousel />
                  <PlacesCarousel />
                  <VisaSection />
                  <NightClubSection />
                  <AirlinePartners />
                  <InfoSection />
                  <MegaLinksSection />
                </PageLayout>
              } />
              
              {/* Other Public Routes with Layout */}
              <Route path="/visa" element={<PageLayout><VisaSection /></PageLayout>} />
              <Route path="/cruise" element={<PageLayout><CruiseSection /></PageLayout>} />
              <Route path="/night-club" element={<PageLayout><NightClubSection /></PageLayout>} />
              <Route path="/hotels&Flights" element={<PageLayout><FlightHotel/></PageLayout>} />
              <Route path="/tours" element={<PageLayout><ToursAttractions /></PageLayout>} />
              <Route path="/flight-status" element={<PageLayout><FlightStatusPage /></PageLayout>} />
              <Route path="/hotels" element={<PageLayout><Hotels /></PageLayout>} />
              <Route path="/flights" element={<PageLayout><Flights /></PageLayout>} />
              <Route path="/train" element={<PageLayout><Train /></PageLayout>} />
              <Route path="/holiday" element={<PageLayout><Holiday /></PageLayout>} />
              <Route path="/trip-planner" element={<PageLayout><TripPlanner /></PageLayout>} />
              <Route path="/gift" element={<PageLayout><GiftCard /></PageLayout>} />
              <Route path="/invite" element={<PageLayout><InviteEarn /></PageLayout>} />
              <Route path="/list-your-property" element={<PageLayout><ListProperty /></PageLayout>} />
              <Route path="/pnr" element={<PageLayout><PNRStatus /></PageLayout>} />
              <Route path="/bus" element={<PageLayout><Bus /></PageLayout>} />
              <Route path="/bus/:id" element={<PageLayout><BookBus /></PageLayout>} />
              <Route path="/cab" element={<PageLayout><Cab /></PageLayout>} />
              <Route path="/cab/:id" element={<PageLayout><CabDetails /></PageLayout>} />
              <Route path="/homestay" element={<PageLayout><HotelAndHomeStay /></PageLayout>} />
              <Route path="/property/:id" element={<PageLayout><HotelAndHomeStayDetail /></PageLayout>} />
              <Route path="/hotel/:id" element={<PageLayout><HotelDetail /></PageLayout>} />
              <Route path="/cruise/:id" element={<PageLayout><CruiseBooking /></PageLayout>} />
              <Route path="/select-seats" element={<PageLayout><SeatSelectionPage /></PageLayout>} />
              <Route path="/payment" element={<PageLayout><PaymentPage /></PageLayout>} />
              <Route path="/booking-confirmation" element={<PageLayout><BookingConfirmation /></PageLayout>} />
              <Route path="/package-details" element={<PageLayout><PackageDetails /></PageLayout>} />
              <Route path="/trending-package-details" element={<PageLayout><TrendingPackageDetails /></PageLayout>} />
              <Route path="/booking-details" element={<PageLayout><BookingDetailsPage /></PageLayout>} />
              
              {/* Support Routes */}
              <Route path="/support" element={<PageLayout><SupportPage /></PageLayout>} />
              <Route path="/faq" element={<PageLayout><FAQPage /></PageLayout>} />
              <Route path="/cancellation" element={<PageLayout><CancellationPage /></PageLayout>} />
              <Route path="/refund-policy" element={<PageLayout><RefundPolicyPage /></PageLayout>} />
              <Route path="/contact-us" element={<PageLayout><ContactUsPage /></PageLayout>} />
              
              {/* Company Routes */}
              <Route path="/about-us" element={<PageLayout><AboutUsPage /></PageLayout>} />
              <Route path="/careers" element={<PageLayout><CareersPage /></PageLayout>} />
              <Route path="/privacy-policy" element={<PageLayout><PrivacyPolicyPage /></PageLayout>} />
              <Route path="/terms-and-conditions" element={<PageLayout><TermsConditionsPage /></PageLayout>} />
              <Route path="/blog" element={<PageLayout><BlogPage /></PageLayout>} />
              <Route path="/blog/:id" element={<PageLayout><BlogPostPage /></PageLayout>} />
              <Route path="/travel-insurance" element={<PageLayout><TravelInsurance /></PageLayout>} />
              <Route path="/services" element={<PageLayout><ServicesShowcase /></PageLayout>} />
              <Route path="/travel-insurance" element={<PageLayout><TravelInsurance /></PageLayout>} />
              <Route path="/travel-insurance-booking" element={<PageLayout><TravelInsuranceBooking /></PageLayout>} />
              <Route path="/cab-detail/:id" element={<PageLayout><CabDetails /></PageLayout>} />
        <Route path="/cab-booking" element={<PageLayout><CabBooking /></PageLayout>} />
        <Route path="/darshan" element={<PageLayout><DarshanList /></PageLayout>} />
        <Route path="/darshan/:id" element={<PageLayout><DarshanDetail /></PageLayout>} />
        <Route path="/offers" element={<PageLayout><OffersPage /></PageLayout>} />
              
              {/* Protected Route - UserDashboard */}
              <Route path="/user-dashboard" element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              } />
              
              {/* Catch all - 404 */}
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


// import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom"; // BrowserRouter hata diya
// import "./App.css";
// import ScrollToTop from "./pages/ScrollToTop.js";

// /* COMMON */
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// /* PAGES - All your existing imports */
// import Hero from "./components/Hero";
// import ExploreMoreBar from "./components/ExploreMoreBar";
// import AirlinePartners from "./components/AirlinePartners";
// import InfoSection from "./components/InfoSection";
// import MegaLinksSection from "./components/MegaLinksSection";
// import VisaSection from "./pages/visa/VisaSection";
// import CruiseSection from "./pages/cruise/CruiseSection";
// import NightClubSection from "./pages/nightclub/NightClubSection";
// import ToursAttractions from "./pages/ToursAttractions";
// import FlightStatusPage from "./pages/flightStatus/FlightStatusPage";
// import Hotels from "./pages/Hotels";
// import Flights from "./pages/Flights";
// import Train from "./pages/BookTrain.jsx";
// import Holiday from "./pages/Holiday";
// import GiftCard from "./pages/GiftCard";
// import TripPlanner from "./pages/TripPlanner";
// import InviteEarn from "./pages/InviteEarn";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Bus from "./pages/Bus";
// import BookBus from "./pages/BookBus";
// import Cab from "./pages/Cab";
// import CabDetails from "./pages/CabDetails";
// import ListProperty from "./pages/ListProperty";
// import PNRStatus from "./pages/PNRStatus";
// import NewUserExclusive from "./components/NewUserExclusive";
// import BannerCarousel from "./components/BannerCarousel.jsx";
// import PlacesCarousel from "./components/PlacesCarousel.jsx";
// import FlightHotel from "./pages/FlightHotels.jsx";
// import HotelAndHomeStay from "./components/HotelAndHomeStay.jsx";
// import HotelAndHomeStayDetail from "./components/HotelAndHomeStayDetail.jsx";
// import HotelDetail from "./pages/HotelDetail.jsx";
// import CruiseBooking from "./pages/cruise/CruiseBooking.jsx";
// import PaymentPage from "./pages/PaymentPage.jsx";
// import SeatSelectionPage from "./pages/SeatSelectionPage.js";
// import UserDashboard from "./components/UserDashboard.jsx";

// /* CONTEXT */
// import { AuthProvider } from "./contexts/AuthContext";
// import BookingConfirmation from "./pages/BookingConfirmation.js";
// import PackageDetails from "./pages/PackageDetails.js";
// import TrendingPackageDetails from "./pages/TrendingPackageDetails.js";
// import BookingConfirmationPage from "./pages/BookingConfirmationPage.jsx";
// import BookingDetailsPage from "./pages/BookingDetailsPage.jsx";

// // Import Support Pages
// import SupportPage from './pages/SupportPage';
// import FAQPage from './pages/FAQPage';
// import CancellationPage from './pages/CancellationPage';
// import RefundPolicyPage from './pages/RefundPolicyPage';
// import ContactUsPage from './pages/ContactUsPage';

// import AboutUsPage from './pages/AboutUs';
// import CareersPage from './pages/CareersPage';
// import PrivacyPolicyPage from './pages/PrivacyPolicy';
// import TermsConditionsPage from './pages/TermsConditions';
// import BlogPage from './pages/BlogPage';
// import BlogPostPage from "./pages/BlogPostPage.jsx";

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect mobile screen
//   useEffect(() => {
//     const checkMobile = () => {
//       const mobile = window.innerWidth <= 768;
//       setIsMobile(mobile);
      
//       // Desktop पर sidebar default open रखें
//       if (!mobile && !sidebarOpen) {
//         setSidebarOpen(true);
//       }
      
//       // Mobile पर sidebar default close रखें
//       if (mobile && sidebarOpen) {
//         setSidebarOpen(false);
//       }
//     };
    
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
    
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   // Handle backdrop click
//   const handleBackdropClick = () => {
//     if (sidebarOpen && isMobile) {
//       setSidebarOpen(false);
//     }
//   };

//   // Prevent body scroll when sidebar is open on mobile
//   useEffect(() => {
//     if (isMobile && sidebarOpen) {
//       document.body.style.overflow = "hidden";
//       document.body.classList.add("sidebar-open");
//     } else {
//       document.body.style.overflow = "auto";
//       document.body.classList.remove("sidebar-open");
//     }
    
//     return () => {
//       document.body.style.overflow = "auto";
//       document.body.classList.remove("sidebar-open");
//     };
//   }, [sidebarOpen, isMobile]);

//   return (
//     <AuthProvider>
//       <ScrollToTop />
//       <div className={`app-wrapper ${sidebarOpen && isMobile ? 'sidebar-open' : ''}`}>
//         <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        
//         {/* Mobile Backdrop - Only show on mobile when sidebar is open */}
//         {sidebarOpen && isMobile && (
//           <div 
//             className="sidebar-backdrop" 
//             onClick={handleBackdropClick}
//             aria-hidden="true"
//           />
//         )}
        
//         <div className="content-layout md:mt-[80px]">
//           {/* Sidebar Component */}
//           <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          
//           {/* Main Content */}
//           <main 
//             className={`main-body ${sidebarOpen ? 'sidebar-open' : ''}`}
//             onClick={(e) => {
//               // Mobile पर main content click से sidebar close
//               if (isMobile && sidebarOpen && e.target === e.currentTarget) {
//                 setSidebarOpen(false);
//               }
//             }}
//           >
//             <div className="page-content">
//               <Routes>
//                 <Route path="/" element={
//                   <>
//                     <Hero />
//                     <ExploreMoreBar />
//                     <NewUserExclusive />
//                     <BannerCarousel />
//                     <PlacesCarousel />
//                     <VisaSection />
//                     <NightClubSection />
//                     <AirlinePartners />
//                     <InfoSection />
//                     <MegaLinksSection />
//                   </>
//                 } />
//                 <Route path="/visa" element={<VisaSection />} />
//                 <Route path="/cruise" element={<CruiseSection />} />
//                 <Route path="/night-club" element={<NightClubSection />} />
//                 <Route path="/hotels&Flights" element={<FlightHotel/>} />
//                 <Route path="/tours" element={<ToursAttractions />} />
//                 <Route path="/flight-status" element={<FlightStatusPage />} />
//                 <Route path="/hotels" element={<Hotels />} />
//                 <Route path="/flights" element={<Flights />} />
//                 <Route path="/train" element={<Train />} />
//                 <Route path="/holiday" element={<Holiday />} />
//                 <Route path="/trip-planner" element={<TripPlanner />} />
//                 <Route path="/gift" element={<GiftCard />} />
//                 <Route path="/invite" element={<InviteEarn />} />
//                 <Route path="/list-your-property" element={<ListProperty />} />
//                 <Route path="/pnr" element={<PNRStatus />} />
//                 <Route path="/bus" element={<Bus />} />
//                 <Route path="/bus/:id" element={<BookBus />} />
//                 <Route path="/cab" element={<Cab />} />
//                 <Route path="/cab/:id" element={<CabDetails />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/homestay" element={<HotelAndHomeStay />} />
//                 <Route path="/property/:id" element={<HotelAndHomeStayDetail />} />
//                 <Route path="/hotel/:id" element={<HotelDetail />} />
//                 <Route path="/cruise/:id" element={<CruiseBooking />} />
//                 <Route path="/select-seats" element={<SeatSelectionPage />} />
//                 <Route path="/payment" element={<PaymentPage />} />
//                 <Route path="/user-dashboard" element={<UserDashboard />} />
//                 <Route path="/booking-confirmation" element={<BookingConfirmation />} />
//                 <Route path="/package-details" element={<PackageDetails />} />
//                 <Route path="/trending-package-details" element={<TrendingPackageDetails />} />
//                 <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
//                 <Route path="/booking-details" element={<BookingDetailsPage />} />
//                 {/* Support Routes */}
//           <Route path="/support" element={<SupportPage />} />
//           <Route path="/faq" element={<FAQPage />} />
//           <Route path="/cancellation" element={<CancellationPage />} />
//           <Route path="/refund-policy" element={<RefundPolicyPage />} />
//           <Route path="/contact-us" element={<ContactUsPage />} />

//           {/* Company Routes */}
//           <Route path="/about-us" element={<AboutUsPage />} />
//           <Route path="/careers" element={<CareersPage />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
//           <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
//           import BlogPage from './pages/BlogPage';

// // Add route
// <Route path="/blog" element={<BlogPage />} />
//           <Route path="/blog/:id" element={<BlogPostPage />} />
        
//               </Routes>
//               <Footer />
//             </div>
//           </main>
//         </div>
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;