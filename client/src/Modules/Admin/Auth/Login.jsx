import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

// Logo
import logo from "../../../assets/banner/BM_FOUNDATION _logo.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        import.meta.env.VITE_API_BASE_URL + "/accounts/login/",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem("admin_access_token", res.data.access);
      localStorage.setItem("admin_refresh_token", res.data.refresh);

      navigate("/admin/license");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden font-sans">

      {/* 1. BACKGROUND: Banner Gradient (Matches ID Card) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#b38a11] via-[#1a1a1a] to-[#8b0000]">
         {/* Texture Overlay */}
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      </div>

      {/* 2. LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        {/* Card Header Stripe */}
        <div className="h-2 w-full bg-gradient-to-r from-[#f26522] via-[#d4a017] to-[#002d4b]"></div>

        <div className="p-8 md:p-10">

            {/* Logo Section */}
            <div className="flex flex-col items-center mb-8">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center shadow-inner mb-4 border border-gray-100">
                    <img src={logo} alt="Admin Logo" className="w-12 h-12 object-contain" />
                </div>
                <h2 className="text-2xl font-black text-[#002d4b] uppercase tracking-wide">
                    Admin Portal
                </h2>
                <p className="text-xs font-bold text-[#f2bc1c] tracking-[0.2em] uppercase mt-1 flex items-center gap-1">
                    <ShieldCheck size={12} /> Secure Access
                </p>
            </div>

            {error && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                    className="bg-red-50 text-red-600 text-sm border-l-4 border-red-500 p-3 mb-6 rounded-r"
                >
                    {error}
                </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-6">

                {/* Email Input */}
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Email Address</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#f26522] transition-colors" size={20} />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@bmfoundation.org"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] outline-none transition-all text-[#002d4b] font-medium"
                            required
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Password</label>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#f26522] transition-colors" size={20} />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] outline-none transition-all text-[#002d4b] font-medium"
                            required
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 mt-2 bg-[#002d4b] hover:bg-[#00406b] text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 group"
                >
                    {loading ? (
                        <span className="animate-pulse">Authenticating...</span>
                    ) : (
                        <>
                            Login to Dashboard
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-[#f2bc1c]" />
                        </>
                    )}
                </button>

            </form>
        </div>

        {/* Footer Text */}
        <div className="bg-gray-50 py-4 text-center border-t border-gray-100">
            <p className="text-xs text-gray-400">
                BM Foundation Internal System © {new Date().getFullYear()}
            </p>
        </div>
      </motion.div>
    </div>
  );
}
