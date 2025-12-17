// src/Modules/Homepages/Layout/Footer.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Heart, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import Logo from "../../../assets/banner/BM_FOUNDATION _logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/#about" },
    { label: "Volunteer", path: "/license" },
    { label: "Download ID", path: "/membership-download" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-[#002d4b] text-white overflow-hidden font-sans border-t-4 border-[#d4a017]">

      {/* Texture Overlay (Optional, keeps it looking premium) */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">

        {/* Main Grid: Added 'items-start' to prevent columns from stretching to same height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">

          {/* --- COL 1: BRANDING --- */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-white p-2 rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <img src={Logo} alt="BM Foundation" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h2 className="text-2xl font-black uppercase tracking-wider leading-none">
                  BM <span className="text-[#f2bc1c]">Foundation</span>
                </h2>
                <p className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase mt-1">
                    Serving Humanity
                </p>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              We are dedicated to uplifting communities through education, health support, and social welfare. Together, we can build a future that works for everyone.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#00406b] flex items-center justify-center text-white hover:bg-[#f26522] hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* --- COL 2: QUICK LINKS (Fixed Hover) --- */}
          <div className="lg:pl-8">
            <h3 className="text-[#f2bc1c] font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
              Quick Links
              <span className="h-px w-8 bg-[#f2bc1c]/30"></span>
            </h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-2 text-gray-300 text-sm transition-all duration-300 hover:text-[#f2bc1c] hover:translate-x-1"
                  >
                    {/* Hover Arrow Effect */}
                    <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#f26522]">
                      <ArrowRight size={14} />
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COL 3: CONTACT --- */}
          <div>
            <h3 className="text-[#f2bc1c] font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
              Contact Us
              <span className="h-px w-8 bg-[#f2bc1c]/30"></span>
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-[#f26522] mt-0.5 flex-shrink-0 group-hover:animate-bounce" />
                <span>123, Main Road, Namma Ooru,<br/>Tamil Nadu - 600001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#f26522] flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#f26522] flex-shrink-0" />
                <span>support@bmfoundation.org</span>
              </li>
            </ul>
          </div>

          {/* --- COL 4: CTA (Fixed Size) --- */}
          {/* Added 'h-fit' to stop it from stretching vertically */}
          <div className="bg-[#00385c] p-6 rounded-2xl border border-white/5 shadow-xl h-fit">
            <h3 className="text-white font-bold text-lg mb-2">Join the Mission</h3>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              Become a volunteer today and make a real impact in your local area.
            </p>
            <button
              onClick={() => navigate("/license")}
              className="w-full py-3 bg-[#f26522] hover:bg-[#d95315] text-white rounded-lg text-sm font-bold uppercase tracking-wide shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Heart size={16} className="fill-white" /> Join as Volunteer
            </button>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} BM Foundation. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1">
             <span>Powered by</span>
             <a
              href="https://bmtechx.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f2bc1c] font-bold hover:underline hover:text-white transition-colors"
            >
              BMTechx.in
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
