import React from "react";
import { motion } from "framer-motion";
import image from "../../../assets/foundation.jpg"; // Your portrait image
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center overflow-hidden py-16 px-6">

      {/* 1. BACKGROUND: Dynamic Gradient & Brush Effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#b38a11] via-[#1a1a1a] to-[#8b0000]">
        {/* Brush Stroke Simulation */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 50%, rgba(255,215,0,0.3), transparent 70%)`,
            clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0% 100%)"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">

        {/* ---------------- LEFT CONTENT ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-white"
        >
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[1.1] tracking-tight mb-4">
            Together, we'll <br /> build a
            <span className="text-[#f2bc1c] italic block sm:inline ml-0 sm:ml-4">future</span>
            <br /> for everyone
          </h1>

          <p className="text-gray-200 max-w-xl text-lg md:text-xl mb-10 leading-relaxed font-medium">
             Namma ooru-ku, namma makkal-ku <span className="text-white font-bold underline decoration-[#f26522]">real change</span> bring panna BM Foundation-la join pannunga.
          </p>

          {/* QR Code and App Section */}
          <div className="space-y-6">
            <p className="text-sm tracking-[0.2em] font-bold text-[#f2bc1c] uppercase">
              // Scan the QR Code to join us //
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="bg-white p-2 rounded-lg shadow-2xl">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=BMFOUNDATION"
                  alt="QR Code"
                  className="w-28 h-28"
                />
              </div>

              <Link to="/license">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#f26522] hover:bg-white hover:text-[#f26522] text-white px-8 py-4 rounded-md font-black text-xl uppercase transition-all shadow-xl"
                >
                  Join as a Volunteer →
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ---------------- RIGHT IMAGE ---------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          {/* Portrait Container - Removed Hexagon for the Reference Style */}
          <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] md:w-[500px] md:h-[600px]">
            {/* Red/Yellow Accent "Brush" behind person */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-600/50 to-transparent rounded-full blur-3xl -z-10" />

            <img
              src={image}
              alt="BM Foundation Leader"
              className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
            />
          </div>

          {/* Floating Label (Campaign Style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 right-0 bg-black/60 backdrop-blur-md border-l-4 border-[#f2bc1c] p-4 text-white hidden md:block"
          >
            <p className="font-bold uppercase tracking-widest text-xs">Foundation Leader</p>
            <p className="text-xl font-black uppercase">Change starts here</p>
          </motion.div>
        </motion.div>

      </div>

      {/* Subtle Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#f26522] via-[#f2bc1c] to-[#8b0000]" />
    </section>
  );
};

export default Banner;
