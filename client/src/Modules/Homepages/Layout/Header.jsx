import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, HeartHandshake, ChevronRight } from "lucide-react";
import logo from "../../../assets/Foundation/bmf_logo.png";
import GoogleTranslate from "../../../translate/GoogleTranslate";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Volunteer", path: "/license" },
    { label: "About", path: "/#about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
    { label: "Download ID", path: "/license/download" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`sticky top-0 z-50 w-full font-sans transition-all duration-300 border-b border-transparent ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg py-2 border-gray-100"
        : "bg-white py-3 lg:py-4"
        }`}
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b38a11] via-[#1a1a1a] to-[#8b0000]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ---------------- 1. LOGO SECTION ---------------- */}
          {/* Added shrink-0 so it never collapses, and mr-4 for safety margin */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
          {/* FIX: Used 'flex-1' to take up remaining space and 'justify-center' to center links */}
          {/* FIX: Added 'px-4 xl:px-8' to force padding on both sides so it touches nothing */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-4 xl:gap-8 px-4 xl:px-8">
            {menuItems.map((item) => {
              const active = location.pathname === item.path.split("#")[0] && !item.path.includes("#");

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`relative text-xs xl:text-sm font-bold tracking-wider uppercase transition-colors duration-300 py-2 whitespace-nowrap group ${active ? "text-[#f26522]" : "text-[#002d4b] hover:text-[#f26522]"
                    }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#f26522] transform origin-left transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </Link>
              );
            })}
          </nav>

          {/* ---------------- 3. RIGHT ACTIONS ---------------- */}
          {/* Added shrink-0 to prevent these buttons from moving/breaking */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">

            <div className="hidden lg:block relative z-40">
              <div className="h-8 flex items-center overflow-hidden min-w-[120px]">
                <GoogleTranslate targetId="google_translate_desktop" />
              </div>
            </div>

            <button
              onClick={() => navigate("/license")}
              className="hidden sm:flex group relative overflow-hidden bg-[#002d4b] text-white text-xs sm:text-sm font-bold py-2.5 px-5 rounded-md shadow-lg transition-all duration-300 hover:shadow-[#f26522]/30 hover:bg-[#f26522] items-center gap-2 whitespace-nowrap"
            >
              <span className="uppercase tracking-wide">Join Us</span>
              <HeartHandshake size={18} className="group-hover:scale-110 transition-transform" />
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#002d4b] hover:text-[#f26522] p-1 transition-colors z-50"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden z-50 ${mobileMenuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col p-6 space-y-2 overflow-y-auto max-h-[80vh]">
          <div className="flex flex-col mb-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-400 uppercase">Language</span>
            </div>
            <GoogleTranslate targetId="google_translate_mobile" />
          </div>

          {menuItems.map((item) => {

            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="group flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
              >
                <span className="text-sm font-bold text-[#002d4b] uppercase group-hover:text-[#f26522] transition-colors">
                  {item.label}
                </span>
                <ChevronRight size={16} className="text-gray-300 group-hover:text-[#f26522] transition-colors" />
              </Link>
            );
          })}

          <div className="pt-4 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate("/license");
              }}
              className="w-full py-4 bg-[#f26522] text-white text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg active:scale-95 transition-transform flex justify-center items-center gap-2"
            >
              <span>Join Us Now</span>
              <HeartHandshake size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;