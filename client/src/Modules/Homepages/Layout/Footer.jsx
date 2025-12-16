// src/Modules/Homepages/Layout/Footer.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Logo from "../../../assets/banner/BM_FOUNDATION _logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/#about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* LOGO + DESC */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={Logo}
                alt="BM Foundation"
                className="w-12 h-12 object-contain"
              />
              <h2 className="text-lg font-extrabold text-[#f26522]">
                BM Foundation
              </h2>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              BM Foundation is committed to education, social welfare, community
              development, and empowering people to build a better tomorrow.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-2">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:bg-[#f26522] hover:text-white hover:border-[#f26522] transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="flex flex-col md:items-center gap-3">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800 mb-2">
              Quick Links
            </h3>

            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-sm text-slate-600 hover:text-[#f26522] transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col md:items-end gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800">
              Get Involved
            </h3>

            <p className="text-sm text-slate-600 md:text-right max-w-xs">
              Join us and be a part of positive change in your community.
            </p>

            <button
              onClick={() => navigate("/license")}
              className="px-8 py-3 bg-[#f26522] hover:bg-[#d4541a] text-white rounded-full text-sm font-bold shadow-md transition"
            >
              Join as Volunteer
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://bmtechx.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f26522] font-semibold hover:underline"
            >
              BMTechx.in
            </a>{" "}
            — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
