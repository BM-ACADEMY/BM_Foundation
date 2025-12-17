import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  Monitor,
  Megaphone,
  UserPlus,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

const roles = [
  {
    title: "Field Volunteer",
    icon: <Users size={28} />,
    desc: "Direct ground-level action for food, health, and relief."
  },
  {
    title: "Event Helper",
    icon: <Calendar size={28} />,
    desc: "Support our medical camps, help desks, and awareness events."
  },
  {
    title: "Digital Support",
    icon: <Monitor size={28} />,
    desc: "Help with job guidance, online petitions, and social media."
  },
  {
    title: "Public Issue Reporter",
    icon: <Megaphone size={28} />,
    desc: "Identify and report local issues like water, roads, and safety."
  },
  {
    title: "Any Role",
    icon: <UserPlus size={28} />,
    desc: "Neenga choose pannunga — unga comfort-ku set aagura role."
  }
];

const VolunteerRoles = () => {
  return (
    <section className="bg-[#fcfcfc] py-24 px-6 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-[#002d4b] leading-tight">
            Empowering our team through unity, purpose, and <br className="hidden md:block" />
            <span className="text-[#d4a017]">Volunteer</span> Roles
          </h1>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              // 1. ADD 'group' HERE
              className="group bg-white hover:bg-[#002d4b] transition-colors duration-300 p-10 rounded-sm border border-gray-300 shadow-sm flex flex-col items-center text-center"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center mb-8 shadow-inner">
                <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center bg-white text-[#d4a017]">
                  {role.icon}
                </div>
              </div>

              {/* Title */}
              {/* 2. ADD 'group-hover:text-white' HERE */}
              <h3 className="text-xl font-bold text-[#002d4b] group-hover:text-white mb-4 transition-colors duration-300">
                {role.title}
              </h3>

              {/* Description */}
              {/* 3. ADD 'group-hover:text-blue-50' HERE (blue-50 looks softer than pure white on dark blue) */}
              <p className="text-gray-500 group-hover:text-blue-50 leading-relaxed text-base mb-6 transition-colors duration-300">
                {role.desc}
              </p>

              {/* Status Indicator */}
              <div className="mt-auto flex items-center gap-2 font-semibold text-[10px] uppercase tracking-[0.2em] text-[#d4a017]">
                <CheckCircle2 size={14} />
                Available Now
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-24 bg-[#002d4b] rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl">
          <div className="text-center md:text-left">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Ready to make <br />
              <span className="text-[#d4a017]">Real Change?</span>
            </h2>
            <p className="text-blue-100/80 mt-4 text-lg">
              BM Foundation-oda change journey-la neengalum part aagunga.
            </p>
          </div>
          <Link to="/license">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#d4a017] hover:bg-[#b88a14] text-white px-10 py-4 rounded-md font-bold text-lg shadow-lg transition-colors"
            >
              Join as a Volunteer →
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VolunteerRoles;
