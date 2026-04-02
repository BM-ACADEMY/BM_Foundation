import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    GraduationCap, HeartPulse, ShoppingBasket, Briefcase, MapPin,
    AlertTriangle, ScrollText, Users, MoveRight, CheckCircle2, ShieldCheck, Eye
} from "lucide-react";
import { Link } from "react-router-dom";

// ── Person images ────────────────────────────────────────────────────────────
import imgEducation  from "../../../assets/volunteer/education.png";
import imgHealth     from "../../../assets/volunteer/health.png";
import imgFood       from "../../../assets/volunteer/food.png";
import imgJob        from "../../../assets/volunteer/job.png";
import imgCommunity  from "../../../assets/volunteer/community.png";
import imgRelief     from "../../../assets/volunteer/relief.png";
import imgGovt       from "../../../assets/volunteer/govt.png";

// ── Volunteer profile photos ────────────────────────────────────────────────────────────
import p1 from "../../../assets/volunteer/profiles/p1.png";
import p2 from "../../../assets/volunteer/profiles/p2.png";
import p3 from "../../../assets/volunteer/profiles/p3.png";
import p4 from "../../../assets/volunteer/profiles/p4.png";
import p5 from "../../../assets/volunteer/profiles/p5.png";
import p6 from "../../../assets/volunteer/profiles/p6.png";

// Existing volunteers data
const existingVolunteers = [
    { name: "Arjun Selvam",    field: "Education (கல்வி)",             since: "2023", photo: p1, color: "#3b82f6" },
    { name: "Priya Lakshmi",   field: "Health (ஆரோக்கியம்)",           since: "2022", photo: p2, color: "#ef4444" },
    { name: "Ramesh Kumar",    field: "Food Distribution (உணவு)",      since: "2021", photo: p3, color: "#f59e0b" },
    { name: "Kavitha Devi",    field: "Job Support (வேலை உதவி)",       since: "2023", photo: p4, color: "#8b5cf6" },
    { name: "Surya Prakash",   field: "Area Development (ஊர் வளர்ச்சி)", since: "2022", photo: p5, color: "#10b981" },
    { name: "Meena Sundaram",  field: "Disaster Relief (அவசர உதவி)",   since: "2024", photo: p6, color: "#f97316" },
];

// ── Component ────────────────────────────────────────────────────────────────
const Volunteer = () => {

    return (
        <main className="min-h-screen bg-[#f8f9fb] font-sans overflow-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>

            {/* ── Meet Our Volunteers (Horizontal Flow Chart) ── */}
            <section className="py-20 px-6 lg:px-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#002d4b]/5 text-[#002d4b] rounded-full text-xs font-bold uppercase tracking-widest mb-5 border border-[#002d4b]/10">
                            <Users size={13} className="text-[#d4a017]" />
                            Our Network
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#002d4b] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            Volunteer <span className="text-[#d4a017]">Network Flow</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-base">
                            Our growing network of dedicated individuals who are driving change across the region.
                        </p>
                    </div>

                    {/* Horizontal Flow Container */}
                    <div className="relative">


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 relative z-10 px-4 py-8">
                            {existingVolunteers.map((vol, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex flex-col items-center text-center group h-full"
                                >

                                    {/* Redesigned Card Section */}
                                    <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] w-full shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] group cursor-pointer border-2 border-white/5 hover:border-[#d4a017]/40 transition-all duration-700 bg-[#002d4b] flex flex-col items-center justify-end">
                                        
                                        {/* Starburst Background Effect */}
                                        <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-25 transition-opacity duration-700 transform group-hover:scale-110" 
                                            style={{
                                                background: `repeating-conic-gradient(from 0deg at 50% 50%, #002d4b 0deg, #002d4b 10deg, #0a4d7a 10deg, #0a4d7a 20deg)`
                                            }} 
                                        />
                                        
                                        {/* Subtle Inner Glow */}
                                        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,#002d4b_90%)] opacity-60" />

                                        {/* Profile Image (Full Height) */}
                                        <div className="absolute inset-0 z-20 flex items-end justify-center pointer-events-none">
                                            <img 
                                                src={vol.photo} 
                                                alt={vol.name} 
                                                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2 opacity-90 group-hover:opacity-100" 
                                            />
                                        </div>

                                        {/* Gradient Overlay for Text Readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#002d4b] via-[#002d4b]/40 to-transparent z-30" />

                                        {/* Since Badge (Top Right) */}
                                        <div className="absolute top-6 right-6 z-40 bg-[#d4a017] text-[#002d4b] text-[10px] font-black px-3 py-1.5 rounded-full border border-white/20 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-4 group-hover:translate-y-0">
                                            SINCE {vol.since}
                                        </div>

                                        {/* Text Info Layer */}
                                        <div className="relative z-40 p-8 text-center w-full transform transition-all duration-500 group-hover:translate-y-[-8px]">
                                            <h4 className="text-white font-bold text-2xl lg:text-3xl mb-3 tracking-tight drop-shadow-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                {vol.name}
                                            </h4>

                                            {/* Role Pill */}
                                            <div className="inline-block px-5 py-2.5 bg-[#d4a017]/10 backdrop-blur-md rounded-full text-[#d4a017] text-[11px] font-extrabold uppercase tracking-[0.15em] mb-6 border border-[#d4a017]/20 transition-all duration-500 group-hover:bg-[#d4a017] group-hover:text-[#002d4b]">
                                                {vol.field.split("(")[0].trim()}
                                            </div>

                                            {/* Details Button */}
                                            <div className="flex items-center justify-center gap-2.5 text-white/60 text-[10px] font-extrabold uppercase tracking-[0.2em] transition-all duration-500 group-hover:text-white mt-2">
                                                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#d4a017] group-hover:bg-[#d4a017]/20">
                                                   <Eye size={12} className="group-hover:text-[#d4a017] transition-colors" />
                                                </div>
                                                View Details
                                            </div>
                                        </div>

                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section className="px-6 lg:px-24 pb-24 relative z-20">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-[#002d4b] px-10 py-7 md:px-14 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden rounded-2xl">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4a017]/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative z-10 text-center md:text-left">
                            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-2 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Ready to Start
                            </h2>
                            <h2 className="text-[#d4a017] text-3xl md:text-4xl font-bold leading-tight mb-4 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                Your Volunteering Journey?
                            </h2>
                            <p className="text-blue-100/70 max-w-xl text-sm leading-relaxed font-normal opacity-90" style={{ fontFamily: "'Inter', sans-serif" }}>
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