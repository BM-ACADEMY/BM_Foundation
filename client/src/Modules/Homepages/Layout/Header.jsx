import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, HeartHandshake } from "lucide-react"; // Using Lucide icons for a cleaner look
import logo from "../../../assets/Foundation/bmf_logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/#about" },
    { label: "Volunteer", path: "/license" }, // Direct link to volunteer page
    { label: "Gallery", path: "/gallery" },
    { label: "Download ID", path: "/license/download" }, // Assuming this route exists now
    { label: "Contact", path: "/contact" },
  ];

  // Handle Scroll Effect for shadow/height
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Hash Scrolling
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
        if (el) el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", path);
      }, 150);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full font-sans transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-4"
      }`}
    >
      {/* Top Gradient Line (Matches Banner) */}
      <div className="absolute top-0 left-0 w-full  bg-gradient-to-r from-[#b38a11] via-[#1a1a1a] to-[#8b0000]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* --- LOGO SECTION --- */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
                <div className="absolute inset-0 bg-[#d4a017]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={logo}
                  alt="BM Foundation"
                  className="h-14 w-auto object-contain relative z-10"
                />
            </div>
            <div className="hidden sm:block leading-none">
              <h1 className="text-2xl font-black text-[#002d4b] tracking-wide uppercase">
                BM <span className="text-[#f2bc1c]">Foundation</span>
              </h1>
              <p className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mt-1">
                Serving Humanity
              </p>
            </div>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8 items-center">
            {menuItems.map((item) => {
              const active = location.pathname === item.path.split("#")[0] && !item.path.includes("#");
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`relative text-sm font-bold tracking-wider uppercase transition-colors duration-300 py-2 group ${
                    active ? "text-[#f26522]" : "text-[#002d4b] hover:text-[#f26522]"
                  }`}
                >
                  {item.label}
                  {/* Hover Underline Animation */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#f26522] transform origin-left transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </Link>
              );
            })}
          </nav>

          {/* --- ACTION BUTTON --- */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => navigate("/license")}
              className="group relative overflow-hidden bg-[#002d4b] text-white text-sm font-bold py-3 px-6 rounded-md shadow-lg transition-all duration-300 hover:shadow-[#f26522]/30 hover:bg-[#f26522]"
            >
              <span className="relative z-10 flex items-center gap-2 uppercase tracking-wide">
                Join Us Now <HeartHandshake size={18} />
              </span>
            </button>
          </div>

          {/* --- MOBILE MENU TOGGLE --- */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#002d4b] hover:text-[#f26522] focus:outline-none p-2 transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className="text-sm font-bold text-[#002d4b] uppercase hover:text-[#f26522] tracking-wide border-b border-gray-50 pb-2"
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              navigate("/license");
            }}
            className="w-full py-4 bg-[#f26522] text-white text-sm font-bold uppercase tracking-wider rounded-md shadow-md active:scale-95 transition-transform"
          >
            Join Us Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
