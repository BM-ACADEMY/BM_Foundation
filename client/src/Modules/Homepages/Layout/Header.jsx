import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, HeartHandshake, ChevronRight, Download } from "lucide-react";
import logo from "../../../assets/Foundation/bmf_logo.png";
import GoogleTranslate from "../../../translate/GoogleTranslate";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Volunteer", path: "/volunteer" },
    { label: "About", path: "/#about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when off-canvas menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, path) => {
    setMobileMenuOpen(false);
    if (path.includes("#")) {
      e.preventDefault();
      const [route, hash] = path.split("#");
      if (location.pathname !== route) {
        navigate(route);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 500);
      } else {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full font-sans transition-all duration-300 border-b border-transparent ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2 border-gray-100"
          : "bg-white py-3 lg:py-4"
      }`}
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b38a11] via-[#1a1a1a] to-[#8b0000]" />

      <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* ---------------- 1. LOGO SECTION ---------------- */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group shrink-0 relative z-50 mr-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#d4a017]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={logo}
                alt="BM Foundation"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain relative z-10"
              />
            </div>
            <div className="flex flex-col leading-none">
              <h1 className="text-xl sm:text-2xl font-black text-[#002d4b] tracking-wide uppercase whitespace-nowrap">
                BM <span className="text-[#f2bc1c]">Foundation</span>
              </h1>
              <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mt-0.5 hidden xs:block">
                Serving Humanity
              </p>
            </div>
          </Link>

          {/* ---------------- 2. CENTER NAVIGATION ---------------- */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-2 lg:gap-4 xl:gap-8 px-2 xl:px-8">
            {menuItems.map((item) => {
              const active =
                location.pathname === item.path.split("#")[0] &&
                !item.path.includes("#");

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`relative text-xs xl:text-sm font-bold tracking-wider uppercase transition-colors duration-300 py-2 whitespace-nowrap group ${
                    active ? "text-[#f26522]" : "text-[#002d4b] hover:text-[#f26522]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#f26522] transform origin-left transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ---------------- 3. RIGHT ACTIONS ---------------- */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <div className="hidden lg:block relative z-40">
              <div className="h-8 flex items-center overflow-hidden">
                <GoogleTranslate targetId="google_translate_desktop" />
              </div>
            </div>

            {/* Download ID Icon Button */}
            <button
              onClick={() => navigate("/license/download")}
              className="text-[#002d4b] hover:text-[#f26522] p-2 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center"
              title="Download ID"
              aria-label="Download ID"
            >
              <Download size={22} />
            </button>

            {/* Sponsor Button (Desktop) */}
            <button
              onClick={() => navigate("/sponsor")}
              className="hidden sm:flex group relative overflow-hidden bg-transparent border-2 border-[#002d4b] text-[#002d4b] hover:text-white hover:bg-[#002d4b] text-xs sm:text-sm font-bold py-2 px-4 rounded-md shadow-sm transition-all duration-300 items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span className="uppercase tracking-wide">Sponsor</span>
            </button>

            {/* Join Us Button (Desktop) */}
            <button
              onClick={() => navigate("/license")}
              className="hidden sm:flex group relative overflow-hidden bg-[#002d4b] text-white text-xs sm:text-sm font-bold py-2.5 px-5 rounded-md shadow-lg transition-all duration-300 hover:shadow-[#f26522]/30 hover:bg-[#f26522] items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span className="uppercase tracking-wide">Join Us</span>
              <HeartHandshake size={18} className="group-hover:scale-110 transition-transform" />
            </button>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-[#002d4b] hover:text-[#f26522] p-1 transition-colors z-50"
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- OFF-CANVAS MOBILE MENU ---------------- */}
      
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-[340px] bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden flex flex-col ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 shrink-0">
          <span className="text-lg font-black tracking-widest text-[#002d4b] uppercase">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-gray-400 hover:text-[#f26522] hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Google Translate Block */}
          <div className="flex flex-col mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
              Language
            </span>
            <GoogleTranslate targetId="google_translate_mobile" />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2">
            {menuItems.map((item) => {
              const active =
                location.pathname === item.path.split("#")[0] &&
                !item.path.includes("#");
                
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`group flex items-center justify-between py-3 px-2 rounded-lg transition-colors ${
                    active ? "bg-blue-50 text-[#f26522]" : "hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                      active ? "text-[#f26522]" : "text-[#002d4b] group-hover:text-[#f26522]"
                    }`}
                  >
                    {item.label}
                  </span>
                  <ChevronRight
                    size={18}
                    className={`${
                      active ? "text-[#f26522]" : "text-gray-300 group-hover:text-[#f26522]"
                    } transition-colors`}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Drawer Footer (Sticky Buttons) */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 shrink-0 flex flex-col gap-3">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              navigate("/sponsor");
            }}
            className="w-full py-3.5 bg-white border-2 border-[#002d4b] text-[#002d4b] text-sm font-bold uppercase tracking-wider rounded-xl shadow-sm active:scale-[0.98] transition-all flex justify-center items-center gap-2 hover:bg-gray-50 cursor-pointer"
          >
            <span>Sponsor</span>
          </button>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              navigate("/license");
            }}
            className="w-full py-4 bg-[#f26522] text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-[#f26522]/20 active:scale-[0.98] transition-all flex justify-center items-center gap-2 hover:bg-[#d9561a] cursor-pointer"
          >
            <span>Join Us Now</span>
            <HeartHandshake size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;