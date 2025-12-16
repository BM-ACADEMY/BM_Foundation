import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MoveRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (

    <section className="relative w-full bg-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* ---------------- LEFT SIDE : IMAGE COMPOSITION ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[420px] sm:h-[520px] md:h-[600px]"
        >
          {/* Experience Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute top-0 left-0 bg-gray-100 rounded-t-full w-44 h-56 flex flex-col items-center justify-center border-b-4 border-white z-20"
          >
            <h2 className="text-5xl font-bold text-gray-800">
              25<span className="text-orange-600">+</span>
            </h2>
            <p className="text-gray-500 text-sm text-center px-4 font-medium uppercase tracking-wider">
              years of service
            </p>
          </motion.div>

          {/* Top Right Image */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="absolute top-0 right-0 w-2/3 h-2/3 overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
              alt="BM Foundation Volunteers"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Bottom Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="absolute bottom-0 left-0 w-3/4 h-2/3 overflow-hidden rounded-3xl shadow-2xl z-10 border-8 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200"
              alt="Community Impact"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* ---------------- RIGHT SIDE : CONTENT ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6"
        >
          {/* Label */}
          <div className="flex items-center gap-2 text-orange-600 font-bold uppercase tracking-widest text-sm">
            <Heart size={18} fill="currentColor" />
            Orientation for New Volunteers
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Namma BM Foundation-le <br />
            <span className="text-slate-800">Enna Panrom?</span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl">
            BM Foundation-la join pannina, unga participation
            <span className="font-semibold text-gray-700"> ground-level impact</span>
            create pannum. People-oda daily problems-ku
            practical solutions provide pannradhu thaan namma mission.
          </p>

          {/* Focus Areas */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Our Focus Areas
            </h3>
            <p className="text-gray-400 italic">
              Planning to execution – volunteers are involved at every stage
            </p>

            <ul className="space-y-3">
              {[
                "Education, health, food support, job guidance, area development & disaster relief",
                "Public issues like water, roads & safety – awareness programs, petitions & campaigns",
                "Events, medical camps, help desks & emergency response – full-time action",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.15 }}
                  className="flex items-start gap-3 font-semibold text-slate-800"
                >
                  <CheckCircle2 className="text-orange-500 mt-1" size={20} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA + Quote */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-6">
            <Link to="/license">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
    className="bg-orange-600 hover:bg-orange-700 transition-colors text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-orange-200"
  >
    Join the Orientation <MoveRight size={20} />
  </motion.button>
</Link>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-[#2D5A5A] p-6 rounded-2xl text-white relative max-w-xs shadow-xl"
            >
              <p className="text-lg font-medium leading-snug mb-4">
                “Real change happens when people step forward together.”
              </p>
              <div>
                <span className="font-bold">BM Foundation</span>
                <span className="opacity-60 text-sm ml-1">/ Organising Team</span>
              </div>
              <span className="absolute bottom-2 right-4 text-6xl opacity-10 font-serif italic">
                "
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
