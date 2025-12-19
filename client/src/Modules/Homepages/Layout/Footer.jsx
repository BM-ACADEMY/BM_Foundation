// src/Modules/Homepages/Layout/Footer.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Heart,
  MapPin,
  Mail,
  Phone,
  ArrowRight
} from "lucide-react";
import Logo from "../../../assets/Foundation/bmf_logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/#about" },
    { label: "Volunteer", path: "/license" },
    { label: "Download ID", path: "/license/download" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-[#002d4b] text-white overflow-hidden font-sans border-t-4 border-[#d4a017]">

      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">

          {/* --- COL 1: BRANDING --- */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className=" shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img src={Logo} alt="BM Foundation" className=" h-10 object-contain" />
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
              We are dedicated to uplifting communities through education, health support, and social welfare.
            </p>

            {/* ✅ SOCIAL ICONS (FIXED) */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61578384190492"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#00406b] flex items-center justify-center hover:bg-[#f26522] hover:-translate-y-1 transition-all duration-300 shadow-md"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/bmfoundation__?igsh=MXVsbWg0ZXB6bjl1ZA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#00406b] flex items-center justify-center hover:bg-[#f26522] hover:-translate-y-1 transition-all duration-300 shadow-md"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/110252668/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#00406b] flex items-center justify-center hover:bg-[#f26522] hover:-translate-y-1 transition-all duration-300 shadow-md"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* --- COL 2: QUICK LINKS --- */}
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
                    className="group flex items-center gap-2 text-gray-300 text-sm hover:text-[#f2bc1c] hover:translate-x-1 transition-all"
                  >
                    <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#f26522]">
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
              <li className="flex gap-3">
                <MapPin size={18} className="text-[#f26522]" />
                <span>252, M.G Road, kottakuppam,<br />Tamil Nadu - 605104</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-[#f26522]" />
                <span>+91 9944940051</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-[#f26522]" />
                <span>admin@abmgroups.org</span>
              </li>
            </ul>
          </div>

          {/* --- COL 4: CTA --- */}
          <div className="bg-[#00385c] p-6 rounded-2xl border border-white/5 shadow-xl h-fit">
            <h3 className="text-white font-bold text-lg mb-2">Join the Mission</h3>
            <p className="text-xs text-gray-400 mb-6">
              Become a volunteer today and make a real impact.
            </p>
            <button
              onClick={() => navigate("/license")}
              className="w-full py-3 bg-[#f26522] hover:bg-[#d95315] rounded-lg text-sm font-bold uppercase flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Heart size={16} className="fill-white" /> Join as Volunteer
            </button>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} BM Foundation. All Rights Reserved.</p>
          <a
            href="https://bmtechx.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f2bc1c] font-bold hover:text-white hover:underline"
          >
            Powered by BMTechx.in
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
