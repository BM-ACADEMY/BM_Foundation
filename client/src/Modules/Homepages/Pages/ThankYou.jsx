import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Home, Download, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/banner/BM_FOUNDATION _logo.png";

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fcfcfc] px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 text-center p-8 md:p-12 relative"
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#f26522] rounded-full -translate-x-16 -translate-y-16 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#002d4b] rounded-full translate-x-16 translate-y-16 blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Logo */}
          <motion.img
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            src={logo}
            alt="BM Foundation Logo"
            className="w-20 h-20 mb-6 bg-white rounded-full p-2 shadow-lg border border-gray-100"
          />

          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
            className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"
          >
            <CheckCircle size={48} />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl md:text-4xl font-black text-[#002d4b] mb-4 uppercase tracking-tight"
          >
            Registration Successful!
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 text-lg mb-10 max-w-md mx-auto leading-relaxed"
          >
            Thank you for joining <strong>BM Foundation</strong>. Your application has been received and is currently being reviewed by our team.
          </motion.p>

          {/* Info Box */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10 text-left w-full"
          >
            <h3 className="text-[#002d4b] font-bold mb-2 flex items-center gap-2">
              <MessageSquare size={18} className="text-[#f26522]" /> What's next?
            </h3>
            <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
              <li>Our admins will verify your details and photo.</li>
              <li>Once approved, you will receive a notification via WhatsApp.</li>
              <li>You can then download your official Volunteer ID Card from this website.</li>
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full"
          >
            <button
              onClick={() => navigate("/")}
              className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-[#002d4b] text-white rounded-full font-bold hover:bg-[#00406b] transition-all shadow-lg active:scale-95"
            >
              <Home size={20} /> Back to Home
            </button>
            <button
              onClick={() => navigate("/license/download")}
              className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-[#002d4b] text-[#002d4b] rounded-full font-bold hover:bg-gray-50 transition-all shadow-md active:scale-95"
            >
              <Download size={20} /> Check Status
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-xs text-gray-400 font-medium italic"
          >
            "Serving Humanity, Building the Future."
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
