import React from "react";
import { NavLink } from "react-router-dom";
import {
  X,
  ClipboardList,
  LogOut,
  LayoutDashboard,
  ShieldCheck
} from "lucide-react";
import logo from "../../../../assets/banner/BM_FOUNDATION _logo.png";

const Sidebar = ({ isOpen, onClose, onLogout }) => {
  const links = [
    { to: "/admin/license", label: "Memberships", icon: <ClipboardList size={20} /> },
    // You can add more admin links here later (e.g., Settings, Users)
  ];

  // Common classes for the sidebar container
  const sidebarClasses = `
    fixed inset-y-0 left-0 z-50 w-72 bg-[#002d4b] text-white shadow-2xl transform transition-transform duration-300 ease-in-out
    md:translate-x-0 md:static md:shadow-none border-r border-white/5
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside className={sidebarClasses}>
        <div className="flex flex-col h-full relative overflow-hidden">

          {/* Texture Overlay (Subtle) */}
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

          {/* Header / Logo */}
          <div className="relative z-10 h-24 flex items-center justify-between px-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white/10 rounded-full border border-white/20">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-10 h-10 object-contain"
                  />
              </div>
              <div>
                <h1 className="font-black text-lg leading-tight tracking-wide text-white uppercase">
                  BM Admin
                </h1>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#f2bc1c] flex items-center gap-1">
                  <ShieldCheck size={10} /> Secure Portal
                </span>
              </div>
            </div>
            {/* Mobile Close Button */}
            <button
              onClick={onClose}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="relative z-10 flex-1 overflow-y-auto py-8 px-4 space-y-2">
            <p className="px-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">
              Main Menu
            </p>
            {links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onClose} // Close sidebar on mobile when link clicked
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3.5 rounded-lg transition-all duration-300 group relative overflow-hidden
                  ${
                    isActive
                      ? "bg-gradient-to-r from-[#f26522]/20 to-transparent text-[#f2bc1c] font-bold border-l-4 border-[#f26522]"
                      : "text-gray-400 hover:bg-white/5 hover:text-white border-l-4 border-transparent"
                  }`
                }
              >
                {/* Icon wrapper */}
                <span className="shrink-0 relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                </span>
                <span className="text-sm font-medium tracking-wide relative z-10">
                    {item.label}
                </span>
              </NavLink>
            ))}
          </nav>

          {/* Footer / Logout Area */}
          <div className="relative z-10 p-4 border-t border-white/10 bg-[#00223d]">
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-all duration-200 group"
            >
              <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-wider">Logout</span>
            </button>
            <div className="mt-4 text-center">
                <p className="text-[10px] text-gray-600">Admin Panel v1.0.0</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
