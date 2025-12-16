import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserPlus } from "lucide-react";
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
      const [route, hash] = path.split("#");

      if (location.pathname === route) {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", path);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white see through border-b border-gray-200">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="BM Foundation"
            className="w-14 h-14 object-contain"
          />
          <div className="hidden sm:block leading-tight">
            <h1 className="text-lg font-extrabold text-slate-900">
              பிஎம் அறக்கட்டளை
            </h1>
            <p className="text-xs font-semibold text-[#1a4d4a]">
              BM Foundation
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden sm:flex items-center gap-8 text-sm font-semibold">
          {menuItems.map((item) => {
            const active =
              location.pathname === item.path.split("#")[0] &&
              !item.path.includes("#");

            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`relative transition ${
                  active
                    ? "text-[#f26522]"
                    : "text-slate-700 hover:text-[#f26522]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* ACTION */}
        <div className="hidden sm:flex items-center gap-5">
          <button
            onClick={() => navigate("/license")}
            className="flex items-center gap-2 px-7 py-2.5 bg-[#f26522] hover:bg-[#d4541a] text-white rounded-full text-sm font-bold shadow-md transition"
          >
            <UserPlus size={16} />
            Join
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden"
          aria-label="Menu"
        >
          <svg width="22" height="15" viewBox="0 0 21 15">
            <rect width="21" height="1.5" rx=".75" fill="#334155" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#334155" />
            <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#334155" />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`${
          mobileMenuOpen ? "flex" : "hidden"
        } sm:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex-col gap-4`}
      >
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            onClick={(e) => handleNavClick(e, item.path)}
            className="text-sm font-semibold text-slate-700"
          >
            {item.label}
          </Link>
        ))}

        <button
          onClick={() => {
            setMobileMenuOpen(false);
            navigate("/license");
          }}
          className="mt-2 px-6 py-2.5 bg-[#f26522] hover:bg-[#d4541a] text-white rounded-full text-sm font-bold transition"
        >
          Join as Volunteer
        </button>
      </div>
    </header>
  );
};

export default Header;
