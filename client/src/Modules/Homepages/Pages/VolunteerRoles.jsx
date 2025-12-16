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
    <section className="bg-gray-50 py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 border-l-8 border-[#f26522] pl-6">
          <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500 mb-2">
            Opportunities
          </h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-slate-900 leading-none">
            Volunteer <br />
            <span className="text-[#1a4d4a]">Roles</span>
          </h1>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {roles.map((role, index) => {
            const isFeatured = index === roles.length - 1;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between
                  ${
                    isFeatured
                      ? "bg-[#1a4d4a] text-white shadow-xl border-transparent"
                      : "bg-white text-slate-900 border-gray-200 hover:shadow-xl"
                  }`}
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6
                      ${
                        isFeatured
                          ? "bg-[#f26522] text-white"
                          : "bg-gray-100 text-[#1a4d4a]"
                      }`}
                  >
                    {role.icon}
                  </div>

                  <h3 className="text-2xl font-black uppercase mb-4 leading-tight">
                    {role.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-6
                      ${isFeatured ? "text-gray-200" : "text-gray-600"}`}
                  >
                    {role.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-[#f26522]">
                  <CheckCircle2 size={16} />
                  Available Now
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA – matches Banner CTA */}
        <div className="mt-24 bg-white rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl border">
          <div className="text-center md:text-left">
            <h2 className="text-slate-900 text-3xl md:text-5xl font-black uppercase leading-tight">
              Ready to make <br />
              <span className="text-[#f26522]">Real Change?</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              BM Foundation-oda change journey-la neengalum part aagunga.
            </p>
          </div>
        <Link to="/license">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#f26522] hover:bg-[#d4541a] text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl"
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
