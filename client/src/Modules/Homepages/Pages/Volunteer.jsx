import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    GraduationCap, HeartPulse, ShoppingBasket, Briefcase, MapPin,
    AlertTriangle, ScrollText, Users, MoveRight, CheckCircle2, ShieldCheck
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
                        {/* Connecting Line (Desktop) */}
                        <div className="absolute top-[60px] left-0 right-0 h-[2px] bg-gray-100 hidden lg:block z-0">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="h-full bg-gradient-to-r from-[#002d4b] via-[#d4a017] to-[#002d4b]"
                            />
                        </div>

                        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12 lg:gap-6 relative z-10 px-4 py-8 overflow-x-auto no-scrollbar pb-16">
                            {existingVolunteers.map((vol, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex flex-col items-center text-center min-w-[240px] lg:min-w-[0] lg:flex-1 group h-full"
                                >
                                    {/* Connection Node */}
                                    <div className="relative mb-8">
                                        {/* Node Circle */}
                                        <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#d4a017] shadow-lg flex items-center justify-center z-20 relative group-hover:bg-[#002d4b] group-hover:border-[#002d4b] transition-all duration-300">
                                            <span className="text-[#002d4b] font-bold text-lg group-hover:text-white transition-colors">{idx + 1}</span>
                                        </div>
                                        
                                        {/* Mobile Vertical Line */}
                                        {idx !== existingVolunteers.length - 1 && (
                                            <div className="lg:hidden absolute top-14 left-1/2 -translate-x-1/2 h-12 w-[2px] bg-gray-100"></div>
                                        )}
                                    </div>

                                    {/* Info Card */}
                                    <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 w-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group-hover:border-[#d4a017]/30 flex-1 flex flex-col items-center justify-center min-h-[290px] gap-2">
                                        
                                        {/* Profile Part */}
                                        <div className="flex flex-col items-center w-full">
                                            <div className="relative w-20 h-20 mb-4 shrink-0">
                                                <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#d4a017]/20 group-hover:border-[#d4a017] transition-colors p-1 bg-white">
                                                    <img 
                                                        src={vol.photo} 
                                                        alt={vol.name} 
                                                        className="w-full h-full object-cover rounded-full transition-all duration-500" 
                                                    />
                                                </div>
                                                <div className="absolute -bottom-1 -right-1 bg-[#002d4b] text-white text-[9px] font-bold px-2 py-0.5 rounded-full border border-white shadow-sm">
                                                    {vol.since}
                                                </div>
                                            </div>

                                            <h4 className="font-bold text-[#002d4b] text-lg mb-0 leading-tight text-center px-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                                {vol.name}
                                            </h4>
                                        </div>

                                        {/* Field/Role Part (Fixed Height Area) */}
                                        <div className="h-10 flex items-center justify-center w-full">
                                            <p className="text-[10px] font-bold text-[#d4a017] uppercase tracking-widest bg-[#d4a017]/5 py-1.5 px-3 rounded-full text-center leading-tight">
                                                {vol.field.split("(")[0].trim()}
                                            </p>
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