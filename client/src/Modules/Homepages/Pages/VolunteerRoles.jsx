import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  Monitor,
  Megaphone,
  UserPlus,
  CheckCircle2,
  MoveRight
} from "lucide-react";
import { Link } from "react-router-dom";

const roles = [
  {
    title: "Field Volunteer",
    icon: <Users size={28} />,
    desc: "Ground-level support in food distribution, health drives & relief work."
  },
  {
    title: "Event Helper",
    icon: <Calendar size={28} />,
    desc: "Assist in medical camps, help desks & community awareness events."
  },
  {
    title: "Digital Support",
    icon: <Monitor size={28} />,
    desc: "Support job guidance, online campaigns, petitions & social media outreach."
  },
  {
    title: "Public Issue Reporter",
    icon: <Megaphone size={28} />,
    desc: "Identify and report local issues like water, roads & public safety."
  },
  {
    title: "Any Role",
    icon: <UserPlus size={28} />,
    desc: "Choose a role based on your comfort, time & interest."
  }
];

const VolunteerRoles = () => {
  return (
    <section className="bg-[#fcfcfc] py-24 px-6 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-[#002d4b] leading-tight">
            Volunteer Roles – <span className="text-[#d4a017]">Where You Can Make an Impact</span>
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

            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-24 bg-[#002d4b] rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl">
          <div className="text-center md:text-left">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Ready to Start <br />
              <span className="text-[#d4a017]">Your Volunteering Journey?</span>
            </h2>
            <p className="text-blue-100/80 mt-4 text-lg">
              BM Foundation-oda volunteering journey start panna idhu unga mudhal step. Neengalum innaiku serunga.
            </p>
          </div>
          <Link to="/license">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#d4a017] hover:bg-[#b88a14] text-white px-10 py-4 rounded-md font-bold text-lg shadow-lg transition-colors flex items-center justify-center gap-4 group whitespace-nowrap"
            >
              <span>Start Your Volunteering</span>
              <MoveRight size={22} strokeWidth={2.5} className="group-hover:translate-x-1.5 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VolunteerRoles;