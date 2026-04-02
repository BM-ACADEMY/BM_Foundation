import React from "react";
import { motion } from "framer-motion";
import { MoveRight, Briefcase, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

// ── Volunteer profile photos ────────────────────────────────────────────────────────────
import p1 from "../../../assets/volunteer/profiles/p1.png";
import p2 from "../../../assets/volunteer/profiles/p2.png";
import p3 from "../../../assets/volunteer/profiles/p3.png";
import p4 from "../../../assets/volunteer/profiles/p4.png";
import p5 from "../../../assets/volunteer/profiles/p5.png";
import p6 from "../../../assets/volunteer/profiles/p6.png";

// Existing volunteers data with theme colors matching the reference image's vibrant rings
const existingVolunteers = [
    { name: "Arjun Selvam",    field: "Education Lead",             since: "2023", photo: p1, color: "#002d4b", secondaryColor: "#0a4b7a" }, // Navy
    { name: "Priya Lakshmi",   field: "Health Coordinator",           since: "2022", photo: p2, color: "#d4a017", secondaryColor: "#eac45a" }, // Gold
    { name: "Ramesh Kumar",    field: "Food Distribution",      since: "2021", photo: p3, color: "#002d4b", secondaryColor: "#0a4b7a" }, // Navy
    { name: "Kavitha Devi",    field: "Job Support Specialist",       since: "2023", photo: p4, color: "#d4a017", secondaryColor: "#eac45a" }, // Gold
    { name: "Surya Prakash",   field: "Area Developer", since: "2022", photo: p5, color: "#002d4b", secondaryColor: "#0a4b7a" }, // Navy
    { name: "Meena Sundaram",  field: "Disaster Relief Lead",   since: "2024", photo: p6, color: "#d4a017", secondaryColor: "#eac45a" }, // Gold
];

const Volunteer = () => {
    return (
        <main className="min-h-screen bg-white font-sans pb-16" style={{ fontFamily: "'Outfit', sans-serif" }}>

            {/* ── Header Area ── */}
            <section className="pt-20 pb-12 px-6 lg:px-24 text-center max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-10">
                    {/* Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f0f4f8] text-[#002d4b] rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-gray-100 shadow-sm">
                        <Users size={14} className="text-[#d4a017]" />
                        Our Network
                    </div>

                    {/* Centered Title */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        <span className="text-[#002d4b]">Volunteer</span>{' '}
                        <span className="text-[#d4a017]">Network Flow</span>
                    </h2>

                    {/* Sub-paragraph */}
                    <p className="text-gray-500 max-w-2xl mx-auto text-base mt-6 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        Our growing network of dedicated individuals who are driving change across the region.
                    </p>
                </div>
            </section>

            {/* ── Grid Layout ── */}
            <section className="px-6 lg:px-24 py-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
                        {existingVolunteers.map((vol, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex flex-col items-center group text-center"
                            >
                                {/* Circular Profile with Gradient Ring */}
                                <div className="relative mb-6 w-36 h-36 md:w-40 md:h-40 shrink-0">
                                    
                                    {/* Gradient Ring Outer */}
                                    <div 
                                        className="absolute inset-0 rounded-full p-1.5 shadow-lg transition-all duration-500 group-hover:scale-105"
                                        style={{ 
                                            background: `linear-gradient(to top right, ${vol.color}, ${vol.secondaryColor})`,
                                            boxShadow: `0 10px 20px -8px ${vol.color}33`
                                        }}
                                    >
                                        {/* Inner padding/ring */}
                                        <div className="w-full h-full rounded-full bg-white p-1.5">
                                            {/* Photo */}
                                            <div className="w-full h-full rounded-full overflow-hidden bg-gray-50 border border-gray-100">
                                                <img 
                                                    src={vol.photo} 
                                                    alt={vol.name} 
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Info matching the reference font style */}
                                <div className="w-full px-2">
                                    <h3 
                                        className="text-lg xl:text-xl font-bold tracking-tight mb-1 transition-colors"
                                        style={{ fontFamily: "'Montserrat', sans-serif", color: vol.color }}
                                    >
                                        {vol.name}
                                    </h3>
                                    <p className="text-gray-500 text-[13px] font-normal leading-relaxed max-w-[180px] mx-auto" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                        {vol.field}. Helping to build an impactful future for all.
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section className="px-6 lg:px-24 pt-24 relative z-20">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-[#002d4b] px-10 py-7 md:px-14 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden rounded-2xl">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4a017]/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative z-10 text-center md:text-left">
                            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Ready to Start
                            </h2>
                            <h2 className="text-[#d4a017] text-3xl md:text-4xl font-bold leading-tight mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Your Volunteering Journey?
                            </h2>
                            <p className="text-blue-100/70 max-w-xl text-sm leading-relaxed font-normal opacity-90">
                                BM Foundation-oda volunteering journey start panna idhu unga mudhal step. Neengalum innaiku serunga.
                            </p>
                        </div>
                        <Link to="/license" className="relative z-10 shrink-0">
                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-[#d4a017] hover:bg-[#b88a14] text-[#002d4b] px-9 py-4 rounded-lg font-bold text-base shadow-lg transition-colors flex items-center gap-3 group whitespace-nowrap"
                                style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                                Start Your Volunteering
                                <MoveRight size={20} strokeWidth={2.5} className="group-hover:translate-x-1.5 transition-transform" />
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Volunteer;