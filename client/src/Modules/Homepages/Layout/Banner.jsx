import React from "react";
import { motion } from "framer-motion";
import image from "../../../assets/foundation.jpg"
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <section className="mt-10 relative w-full min-h-[100vh] bg-white px-6 py-16 flex items-center overflow-hidden">

      {/* Left Vertical Indicator (Desktop only) */}
      <div className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-6">
        <span className="rotate-90 text-orange-600 font-bold tracking-[0.25em] text-xs uppercase">
          Volunteer
        </span>
        <div className="flex flex-col gap-3 mt-16">
          <span className="w-3 h-3 border border-gray-300"></span>
          <span className="w-3 h-3 border border-gray-300"></span>
          <span className="w-3 h-3 bg-orange-500 border-2 border-orange-500"></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center w-full">

        {/* ---------------- LEFT CONTENT ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <p className="uppercase tracking-widest text-sm text-orange-600 font-bold mb-4">
            BM Foundation – Volunteer Enrollment & Orientation
          </p>

          <div className="flex items-center gap-5 mb-3">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-black uppercase tracking-tighter text-slate-900">
              Real
            </h1>

            <div className="w-14 h-14 bg-[#1a4d4a] rounded-full flex items-center justify-center text-white shadow-lg">
              {/* Handshake Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 17h2a2 2 0 1 0-2-2" />
                <path d="m14 14 2.5 2.5a1 1 0 0 0 1.4-1.4L15 12.1" />
                <path d="m8 16 1.5-1.5" />
                <path d="M3 11c0-1.1.9-2 2-2h4m0 0 7-7 4 4-7 7M9 9l-3 3" />
                <path d="M12 15h2a2 2 0 1 1-2 2" />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-black uppercase leading-[0.9] tracking-tighter text-slate-900 mb-6">
            Change<br />Starts With Us
          </h1>

          <p className="text-gray-600 max-w-xl text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
            Namma ooru-ku, namma makkal-ku <b>real change</b> bring panna
            <span className="text-gray-800 font-semibold"> BM Foundation-la join pannunga.</span>
            <br /><br />
            Community upliftment, public issues, education, health, food support,
            job guidance, disaster relief — <b>ellathukum unga support romba thevai.</b>
          </p>

          <Link to="/license">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="bg-[#f26522] hover:bg-[#d4541a] text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 shadow-xl"
  >
    Join as a Volunteer
    <span>→</span>
  </motion.button>
</Link>
        </motion.div>

        {/* ---------------- RIGHT IMAGE ---------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          {/* Hexagon Image */}
          <div
            className="w-[280px] h-[320px] sm:w-[360px] sm:h-[420px] md:w-[500px] md:h-[550px] bg-gray-100 overflow-hidden"
            style={{
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          >
            <img
  src={image}
  alt="BM Foundation Work"
  className="w-full h-full object-cover"
/>

          </div>

          {/* Floating Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -bottom-6 right-0 sm:right-6 bg-white p-5 rounded-xl shadow-2xl border min-w-[260px]"
          >
            <p className="font-bold text-gray-800 text-lg">
              Community Impact
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Education • Health • Food • Jobs • Disaster Relief
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Banner;
