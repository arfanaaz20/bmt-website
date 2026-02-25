// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaBars, FaUserCircle } from "react-icons/fa";
// import "./Navbar.css";

// /* LOGO IMAGE */
// import logo from "../assets/logo.jpeg";

// export default function Navbar({ toggleSidebar, sidebarOpen }) {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={`top-navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="nav-container">
        
//         {/* LEFT SECTION: Hamburger + Logo */}
//         <div className="nav-left-group">
//           <button className="sidebar-toggle" onClick={toggleSidebar}>
//             <FaBars />
//           </button>
//           <NavLink to="/" className="nav-logo">
//             <img src={logo} alt="Bird My Trip Logo" className="w-16" />
//           </NavLink>
//         </div>

//         {/* RIGHT SECTION: Actions */}
//         <div className="nav-right-group">
//           <NavLink to="/list-your-property" className="property-btn">
//             List Your Property
//           </NavLink>

//           <div className="auth-box">
//             <NavLink to="/login" className="login-btn">
//               <FaUserCircle className="user-icon" />
//               <div className="login-text">
//                 <span>Login or</span>
//                 <strong>Create Account</strong>
//               </div>
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }




















// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaBars, FaUserCircle } from "react-icons/fa";
// import logo from "../assets/logo.jpeg";

// export default function Navbar({ toggleSidebar }) {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-[2000] transition-all duration-300 border-b border-gray-200 mb-[70px]
//       ${scrolled ? "bg-white shadow-md h-16" : "bg-white h-20"} flex items-center px-4 md:px-8`}
//     >
//       <div className="w-full max-w-[1400px] mx-auto flex justify-between items-center">
        
//         {/* LEFT SECTION: Hamburger + Logo */}
//         <div className="flex items-center gap-3 md:gap-4 flex-1 md:flex-none">
//           <button 
//             className="text-blue-500 text-2xl p-1 hover:scale-110 transition-transform focus:outline-none"
//             onClick={toggleSidebar}
//           >
//             <FaBars />
//           </button>
          
//           <NavLink to="/" className="flex items-center">
//             <img 
//               src={logo} 
//               alt="Bird My Trip Logo" 
//               className="h-10 md:h-12 w-auto object-contain" 
//             />
//           </NavLink>
//         </div>

//         {/* RIGHT SECTION: Actions */}
//         <div className="flex items-center gap-3 md:gap-6">
//           {/* List Your Property - Hidden on Mobile */}
//           <NavLink 
//             to="/list-your-property" 
//             className="hidden md:inline-block border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-md text-xs font-bold uppercase hover:bg-blue-500 hover:text-white transition-all"
//           >
//             List Your Property
//           </NavLink>

//           {/* Auth Box
//           <div className="flex items-center">
//             <NavLink 
//               to="/login" 
//               className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-blue-700 px-3 py-1.5 md:px-5 md:py-2 rounded-md text-white hover:-translate-y-0.5 hover:shadow-lg transition-all"
//             >
//               <FaUserCircle className="text-xl md:text-2xl" />
//               <div className="flex flex-col leading-tight">
//                 <span className="text-[10px] opacity-90">Login or</span>
//                 <strong className="text-[11px] md:text-sm font-bold">Create Account</strong>
//               </div>
//             </NavLink>
//           </div> */}


//           {/* Auth / Dashboard Box */}
// <div className="flex items-center">
//   <NavLink 
//     to="/user-dashboard" 
//     className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 px-3 py-1.5 md:px-5 md:py-2 rounded-md text-white hover:-translate-y-0.5 hover:shadow-lg transition-all border border-blue-400/30"
//   >
//     {/* User Avatar Icon */}
//     <div className="bg-white/20 p-1 rounded-full">
//       <FaUserCircle className="text-xl md:text-2xl text-white" />
//     </div>
    
//     <div className="flex flex-col leading-tight">
//       <span className="text-[10px] opacity-80 font-medium">Welcome, Akshay</span>
//       <strong className="text-[11px] md:text-sm font-bold flex items-center gap-1">
//         My Dashboard <i className="fas fa-chevron-right text-[8px]"></i>
//       </strong>
//     </div>
//   </NavLink>
// </div>
//         </div>
//       </div>
//     </header>
//   );
// }








































import React, { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";
import AuthForm from "./AuthForm";

/* LOGO IMAGE - Apne logo ka path use karein */
import logo from "../assets/logo.jpeg";

const Navbar = ({ toggleSidebar, sidebarOpen }) => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleUserClick = () => {
    if (isAuthenticated) {
      navigate("/user-dashboard");
    } else {
      setShowAuthForm(true);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[2000] transition-all duration-300 border-b border-gray-200 mb-[70px]
        ${scrolled ? "bg-white shadow-md h-16" : "bg-white h-20"} flex items-center px-4 md:px-8`}
      >
        <div className="w-full mx-auto flex justify-between items-center">
          
          {/* LEFT SECTION: Hamburger + Logo */}
          <div className="flex items-center gap-3 md:gap-4 flex-1 md:flex-none">
            <button 
              className="text-blue-500 text-2xl p-1 hover:scale-110 transition-transform focus:outline-none"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>
            
            <NavLink to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Bird My Trip Logo" 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </NavLink>
          </div>

          {/* RIGHT SECTION: Actions */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* List Your Property - Hidden on Mobile */}
            <NavLink 
              to="/list-your-property" 
              className="hidden md:inline-block border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-md text-xs font-bold uppercase hover:bg-blue-500 hover:text-white transition-all"
            >
              List Your Property
            </NavLink>

            {/* User Dashboard / Login Button */}
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                {/* Desktop User Info */}
                
                
                {/* Dashboard Button */}
                <button
                  onClick={handleUserClick}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 px-3 py-1.5 md:px-5 md:py-2 rounded-md text-white hover:-translate-y-0.5 hover:shadow-lg transition-all border border-blue-400/30"
                >
                  <div className="bg-white/20 p-1 rounded-full">
                    <FaUserCircle className="text-xl md:text-2xl text-white" />
                  </div>
                  
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] opacity-80 font-medium">
                      Welcome, {user?.name?.split(' ')[0] || "User"}
                    </span>
                    <strong className="text-[11px] md:text-sm font-bold flex items-center gap-1">
                      My Dashboard 
                    </strong>
                  </div>
                </button>

                {/* Desktop Logout Button
                <button
                  onClick={handleLogout}
                  className="hidden md:flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors ml-2"
                  title="Logout"
                >
                  <span className="text-sm font-medium">Logout</span>
                </button> */}
              </div>
            ) : (
              /* Login Button */
              <button
                onClick={handleUserClick}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-blue-700 px-3 py-1.5 md:px-5 md:py-2 rounded-md text-white hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <FaUserCircle className="text-xl md:text-2xl" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] opacity-90">Login or</span>
                  <strong className="text-[11px] md:text-sm font-bold">Create Account</strong>
                </div>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Auth Form Modal */}
      {showAuthForm && <AuthForm onClose={() => setShowAuthForm(false)} />}
    </>
  );
};

export default Navbar;