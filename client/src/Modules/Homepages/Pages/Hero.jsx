import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MoveRight, Heart, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import FoundationImg2 from "../../../assets/foundation 2.jpg.jpeg";
import FoundationImg3 from "../../../assets/foundation 3.jpg.jpeg";

const Hero = () => {
  // Animation Variants for Staggered List
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full bg-slate-50 py-20 px-6 md:px-12 lg:px-24 overflow-hidden" id="about">

      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 skew-x-12 translate-x-20 z-0" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">

        {/* ---------------- LEFT SIDE : MODERN IMAGE GRID ---------------- */}
        <div className="relative">
          {/* Dot Pattern Decoration */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-[url('https://www.transparenttextures.com/patterns/dots-spaced-0-5.png')] opacity-20" />

          <div className="relative h-[500px] md:h-[600px] w-full">
            {/* Main Tall Image */}
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              transition={{ duration: 1, ease: "circOut" }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-[85%] h-[85%] rounded-2xl overflow-hidden z-10 shadow-2xl"
            >
              <img
                src={FoundationImg2}
                alt="BM Foundation Activity"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>

            {/* Secondary Overlapping Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute bottom-0 right-0 w-[55%] h-[45%] rounded-xl overflow-hidden z-20 shadow-xl border-4 border-white"
            >
              <img
                src={FoundationImg3}
                alt="Volunteers"
                className="w-full h-full object-cover"
              />
            </motion.div>


          </div>
        </div>

        {/* ---------------- RIGHT SIDE : CONTENT BLOCKS ---------------- */}
        <div className="flex flex-col space-y-8 pt-4">

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-widest">
              <Heart size={14} fill="currentColor" />
              Orientation for New Volunteers
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1]">
              Namma BM Foundation-la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Enna Panrom?
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              BM Foundation-oda serndha, unga participation
              <span className="font-bold text-gray-900 bg-orange-50 px-1 rounded mx-1">ground-level la real impact</span>
              create pannum. Makkaloda daily problems-ku
              <span className="font-bold text-gray-900 bg-orange-50 px-1 rounded mx-1">practical solutions kandupidikka</span>,
              direct-a field-la work pannradhu thaan namma mission.
            </p>
          </motion.div>

          {/* List Section (Now a Grid) */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Our Focus Areas</h3>
            <p className="text-sm text-gray-400 italic mb-5">From planning to execution — volunteers are part of every step</p>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                "Education, health & food support",
                "Job guidance & area development",
                "Disaster relief & emergency support",
                "Public issues like water, roads & safety",
                "Awareness programs, petitions & campaigns",
              ].map((item, index) => (
                <motion.li key={index} variants={itemVariants} className="flex items-start gap-2.5">
                  <CheckCircle2 className="text-orange-500 shrink-0 mt-0.5" size={18} />
                  <span className="text-sm font-semibold text-gray-700">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Quote & CTA Section */}
          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            {/* Quote Block */}
            <div className="flex-1 border-l-4 border-gray-900 pl-4 py-1 flex flex-col justify-center">
              <Quote className="text-gray-300 mb-2 rotate-180" size={24} />
              <p className="text-gray-800 font-medium italic text-sm">
                “Real change happens when people step forward together.”
              </p>
              <div className="mt-2 text-xs font-bold text-gray-400 uppercase">
                - BM Foundation Team
              </div>
            </div>

            {/* CTA Button */}
            <Link to="/license" className="flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-full w-full md:w-auto bg-[#002d4b] hover:bg-[#001f35] text-white px-8 py-4 rounded-xl font-bold flex flex-col items-center justify-center shadow-lg transition-colors gap-1"
              >
                <div className="flex items-center gap-2">
                  <span>Join Orientation</span>
                  <MoveRight size={18} />
                </div>
                <span className="text-[10px] opacity-60 font-normal uppercase tracking-widest">Start your journey</span>
              </motion.button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;