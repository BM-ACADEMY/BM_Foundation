import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// I have removed the UserPlus icon to match the clean text look of the JCM button,
// but you can uncomment the import below if you want it back.
// import { UserPlus } from "lucide-react";
import logo from "../../../assets/banner/BM_FOUNDATION _logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/#about" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const handleNavClick = (e, path) => {
    setMobileMenuOpen(false);

    if (path.includes("#")) {
      e.preventDefault();
      const [route, hash] = path.split("#");

      if (location.pathname !== route) {
        navigate(route);
      }

      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", path);
        }
      }, 150);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adjusted height to h-24 to match the taller JCM header */}
        <div className="flex justify-between items-center h-24">

          {/* --- LOGO SECTION --- */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={logo}
              alt="BM Foundation"
              className="h-16 w-auto object-contain" // Increased size to match JCM scale
            />
            <div className="hidden sm:block leading-tight">
              {/* Updated text color to Navy Blue to match JCM style */}
              <h1 className="text-2xl font-extrabold text-[#002b5c] tracking-wide uppercase">
                BM Foundation
              </h1>
            </div>
          </Link>

          {/* --- DESKTOP MENU --- */}
          {/* Centered with flex-1 and justify-center, increased spacing */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8 items-center">
            {menuItems.map((item) => {
              const active =
                location.pathname === item.path.split("#")[0] &&
                !item.path.includes("#");

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`text-sm font-bold tracking-wide uppercase transition-colors duration-200 ${
                    active
                      ? "text-[#bf1e0b]" // Active: Red
                      : "text-[#002b5c] hover:text-[#bf1e0b]" // Default: Navy, Hover: Red
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* --- ACTION BUTTON --- */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => navigate("/license")}
              // Style: Rectangular, Deep Red background, White text
              className="bg-[#bf1e0b] hover:bg-[#991809] text-white text-sm font-medium py-3 px-8 shadow-sm transition-colors duration-200 uppercase tracking-wider"
            >
              Join Us Now
            </button>
          </div>

          {/* --- MOBILE MENU ICON --- */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#002b5c] hover:text-[#bf1e0b] focus:outline-none p-2"
            aria-label="Menu"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <div
        className={`${
          mobileMenuOpen ? "flex" : "hidden"
        } md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex-col gap-4 border-t border-gray-100`}
      >
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            onClick={(e) => handleNavClick(e, item.path)}
            className="text-sm font-bold text-[#002b5c] uppercase hover:text-[#bf1e0b] tracking-wide"
          >
            {item.label}
          </Link>
        ))}

        <button
          onClick={() => {
            setMobileMenuOpen(false);
            navigate("/license");
          }}
          className="mt-2 w-full py-3 bg-[#bf1e0b] hover:bg-[#991809] text-white text-sm font-bold uppercase tracking-wider transition"
        >
          Join Us Now
        </button>
      </div>
    </header>
  );
};

export default Header;
